(ns om.core
  (:require-macros
    [om.core :refer
      [pure component check allow-reads tag]])
  (:require [om.dom :as dom :include-macros true]))

(def ^{:tag boolean :dynamic true} *read-enabled* false)
(def ^{:dynamic true} *parent* nil)

;; =============================================================================
;; React Life Cycle Protocols
;;
;; http://facebook.github.io/react/docs/component-specs.html

(defprotocol IInitState
  (init-state [this]))

(defprotocol IShouldUpdate
  (should-update [this next-props next-state]))

(defprotocol IWillMount
  (will-mount [this]))

(defprotocol IDidMount
  (did-mount [this node]))

(defprotocol IWillUnmount
  (will-unmount [this]))

(defprotocol IWillUpdate
  (will-update [this next-props next-state]))

(defprotocol IDidUpdate
  (did-update [this prev-props prev-state root-node]))

(defprotocol IRender
  (render [this]))

(defprotocol IRenderState
  (render-state [this state]))

;; =============================================================================
;; Om Protocols

(defprotocol IValue
  (-value [x]))

(extend-type default
  IValue
  (-value [x] x))

(defprotocol ICursor
  (-path [cursor])
  (-state [cursor]))

(defprotocol IToCursor
  (-to-cursor [value state] [value state path]))

(defn transact* [state path f]
  (let [old-state @state]
    (if (empty? path)
      (swap! state f)
      (swap! state update-in path f))
    {:path path
     :old-value (get-in old-state path)
     :new-value (get-in @state path)
     :old-state old-state
     :new-state @state}))

(defprotocol ITransact
  (-transact! [cursor korks f]))

(defprotocol INotify
  (-notify [x tx-data root-cursor]))

;; =============================================================================
;; A Truly Pure Component
;; 
;; This React class takes an immutable value as its props and an instance that
;; must at a minimum implement IRender as its children.
;;
;; (Pure. {:foo "bar"} irender-instance)

(defn ^:private children [node]
  (let [c (.. node -props -children)]
    (if (fn? c)
      (set! (.. node -props -children) (allow-reads (c node)))
      c)))

(defn get-props
  "Given an owning Pure node return the Om props. Analogous to React 
   component props."
  [x]
  (aget (.-props x) "__om_cursor"))

(defn get-state
  "Returns the component local state of an owning component. owner is
   the component. An optional key or sequence of keys may be given to
   extract a specific value. Always returns pending state."
  ([owner]
    (let [state (.-state owner)]
      (or (aget state "__om_pending_state")
          (aget state "__om_state"))))
  ([owner korks]
    (cond
      (not (sequential? korks))
      (get (get-state owner) korks)

      (empty? korks)
      (get-state owner)

      :else
      (get-in (get-state owner) korks))))

(defn get-shared
  "Takes an owner and returns a map of global shared values for a
   render loop. An optional key or sequence of keys may be given to
   extract a specific value."
  ([owner]
    (when-not (nil? owner)
      (aget (.-props owner) "__om_shared")))
  ([owner korks]
    (cond
      (not (sequential? korks))
      (get (get-shared owner) korks)

      (empty? korks)
      (get-shared owner)

      :else
      (get-in (get-shared owner) korks))))

(defn ^:private merge-pending-state [owner]
  (let [state (.-state owner)]
    (when-let [pending-state (aget state "__om_pending_state")]
      (doto state
        (aset "__om_prev_state" (aget state "__om_state"))
        (aset "__om_state" pending-state)
        (aset "__om_pending_state" nil)))))

(defn ^:private merge-props-state
  ([owner] (merge-props-state owner nil))
  ([owner props]
    (let [props (or props (.-props owner))]
      (when-let [props-state (aget props "__om_state")]
        (let [state (.-state owner)]
          (aset state "__om_pending_state"
               (merge (or (aget state "__om_pending_state")
                          (aget state "__om_state"))
                      props-state))
          (aset props "__om_state" nil))))))

(def ^:private Pure
  (js/React.createClass
    #js {:getInitialState
         (fn []
           (this-as this
             (let [c      (children this)
                   props  (.-props this)
                   istate (or (aget props "__om_init_state") {})
                   ret    #js {:__om_state
                               (merge istate
                                 (when (satisfies? IInitState c)
                                   (allow-reads (init-state c))))}]
               (aset props "__om_init_state" nil)
               ret)))
         :shouldComponentUpdate
         (fn [next-props next-state]
           (this-as this
             (allow-reads
               (let [props (.-props this)
                     state (.-state this)
                     c     (children this)]
                 ;; need to merge in props state first
                 (merge-props-state this next-props)
                 (if (satisfies? IShouldUpdate c)
                   (should-update c
                     (get-props #js {:props next-props})
                     (or (aget state "__om_pending_state")
                         (aget state "__om_state")))
                   (cond
                     (not (identical? (-value (aget props "__om_cursor"))
                                      (-value (aget next-props "__om_cursor"))))
                     true

                     (not (nil? (aget state "__om_pending_state")))
                     true

                     (not (== (aget props "__om_index") (aget next-props "__om_index")))
                     true

                     :else false))))))
         :componentWillMount
         (fn []
           (this-as this
             (merge-props-state this)
             (let [c (children this)]
               (when (satisfies? IWillMount c)
                 (allow-reads (will-mount c))))
             (merge-pending-state this)))
         :componentDidMount
         (fn [node]
           (this-as this
             (let [c (children this)]
               (when (satisfies? IDidMount c)
                 (allow-reads (did-mount c node))))))
         :componentWillUnmount
         (fn []
           (this-as this
             (let [c (children this)]
               (when (satisfies? IWillUnmount c)
                 (allow-reads (will-unmount c))))))
         :componentWillUpdate
         (fn [next-props next-state]
           (this-as this
             (let [c (children this)]
               (when (satisfies? IWillUpdate c)
                 (let [state (.-state this)]
                   (allow-reads
                     (will-update c
                       (get-props #js {:props next-props})
                       (or (aget state "__om_pending_state")
                           (aget state "__om_state")))))))
             (merge-pending-state this)))
         :componentDidUpdate
         (fn [prev-props prev-state root-node]
           (this-as this
             (let [c (children this)]
               (when (satisfies? IDidUpdate c)
                 (let [state (.-state this)]
                   (allow-reads
                     (did-update c
                       (get-props #js {:props prev-props})
                       (or (aget state "__om_prev_state")
                           (aget state "__om_state"))
                       root-node))))
               (aset (.-state this) "__om_prev_state" nil))))
         :render
         (fn []
           (this-as this
             (let [c (children this)]
               (allow-reads
                 (cond
                   (satisfies? IRender c)
                   (binding [*parent* this] (render c))
                   
                   (satisfies? IRenderState c)
                   (binding [*parent* this] (render-state c (get-state this)))
                   
                   :else c)))))}))

;; =============================================================================
;; Cursors

(declare to-cursor)

(defn path [cursor]
  (-path cursor))

(defn value [cursor]
  (-value cursor))

(defn cursor? [x]
  (satisfies? ICursor x))

(deftype MapCursor [value state path]
  IWithMeta
  (-with-meta [_ new-meta]
    (check
      (MapCursor. (with-meta value new-meta) state path)))
  IMeta
  (-meta [_] (check (meta value)))
  IDeref
  (-deref [this]
    (if-not *read-enabled*
      (get-in @state path)
      (throw (js/Error. (str "Cannot deref cursor during render phase: " this)))))
  IValue
  (-value [_] (check value))
  ICursor
  (-path [_] path)
  (-state [_] state)
  ITransact
  (-transact! [_ korks f]
    (transact* state (into path korks) f))
  ICloneable
  (-clone [_]
    (MapCursor. value state path))
  ICounted
  (-count [_]
    (check (-count value)))
  ICollection
  (-conj [_ o]
    (check (MapCursor. (-conj value o) state path)))
  ILookup
  (-lookup [this k]
    (-lookup this k nil))
  (-lookup [_ k not-found]
    (check
      (let [v (-lookup value k not-found)]
        (if-not (= v not-found)
          (to-cursor v state (conj path k))
          not-found))))
  IFn
  (-invoke [this k]
    (-lookup this k))
  (-invoke [this k not-found]
    (-lookup this k not-found))
  ISeqable
  (-seq [this]
    (check
      (when (pos? (count value))
        (map (fn [[k v]] [k (to-cursor v state (conj path k))]) value))))
  IAssociative
  (-contains-key? [_ k]
    (check (-contains-key? value k)))
  (-assoc [_ k v]
    (check (MapCursor. (-assoc value k v) state path)))
  IMap
  (-dissoc [_ k]
    (check (MapCursor. (-dissoc value k) state path)))
  IEquiv
  (-equiv [_ other]
    (check
      (if (cursor? other)
        (= value (-value other))
        (= value other))))
  IPrintWithWriter
  (-pr-writer [_ writer opts]
    (check (-pr-writer value writer opts))))

(deftype IndexedCursor [value state path]
  ISequential
  IDeref
  (-deref [this]
    (if-not *read-enabled*
      (get-in @state path)
      (throw (js/Error. (str "Cannot deref cursor during render phase: " this)))))
  IWithMeta
  (-with-meta [_ new-meta]
    (check
      (IndexedCursor. (with-meta value new-meta) state path)))
  IMeta
  (-meta [_] (check (meta value)))
  IValue
  (-value [_] (check value))
  ICursor
  (-path [_] path)
  (-state [_] state)
  ITransact
  (-transact! [_ korks f]
    (transact* state (into path korks) f))
  ICloneable
  (-clone [_]
    (IndexedCursor. value state path))
  ICounted
  (-count [_]
    (check (-count value)))
  ICollection
  (-conj [_ o]
    (check (IndexedCursor. (-conj value o) state path)))
  ILookup
  (-lookup [this n]
    (check (-nth this n nil)))
  (-lookup [this n not-found]
    (check (-nth this n not-found)))
  IFn
  (-invoke [this k]
    (-lookup this k))
  (-invoke [this k not-found]
    (-lookup this k not-found))
  IIndexed
  (-nth [_ n]
    (check (to-cursor (-nth value n) state (conj path n))))
  (-nth [_ n not-found]
    (check
      (if (< n (-count value))
        (to-cursor (-nth value n) state (conj path n))
        not-found)))
  ISeqable
  (-seq [this]
    (check
      (when (pos? (count value))
        (map (fn [v i] (to-cursor v state (conj path i))) value (range)))))
  IAssociative
  (-contains-key? [_ k]
    (check (-contains-key? value k)))
  (-assoc [_ n v]
    (check (to-cursor (-assoc-n value n v) state path)))
  IStack
  (-peek [_]
    (check (to-cursor (-peek value) state path)))
  (-pop [_]
    (check (to-cursor (-pop value) state path)))
  IEquiv
  (-equiv [_ other]
    (check
      (if (cursor? other)
        (= value (-value other))
        (= value other))))
  IPrintWithWriter
  (-pr-writer [_ writer opts]
    (check (-pr-writer value writer opts))))

(defn ^:private to-cursor* [val state path]
  (specify val
    IDeref
    (-deref [this]
      (if-not *read-enabled*
        (get-in @state path)
        (throw (js/Error. (str "Cannot deref cursor during render phase: " this)))))
    ICursor
    (-path [_] path)
    (-state [_] state)
    ITransact
    (-transact! [_ korks f]
      (transact* state (into path korks) f))
    IEquiv
    (-equiv [_ other]
      (check
        (if (cursor? other)
          (= val (-value other))
          (= val other))))))

(defn ^:private to-cursor
  ([val] (to-cursor val nil []))
  ([val state] (to-cursor val state []))
  ([val state path]
    (cond
      (cursor? val) val
      (satisfies? IToCursor val) (-to-cursor val state path)
      (indexed? val) (IndexedCursor. val state path)
      (map? val) (MapCursor. val state path)
      (satisfies? ICloneable val) (to-cursor* val state path)
      :else val)))

(defn notify* [cursor tx-data]
  (let [state (-state cursor)]
    (-notify state tx-data (to-cursor @state state))))

;; =============================================================================
;; API

(def ^:private refresh-queued false)
(def ^:private refresh-set (atom #{}))

(defn ^:private render-all []
  (set! refresh-queued false)
  (doseq [f @refresh-set] (f)))

(def ^:private roots (atom {}))

(defn ^:private valid? [m]
  (every? #{:key :react-key :fn :init-state :state :opts :shared ::index} (keys m)))

(defn build
  "Builds an Om component. Takes an IRender/IRenderState instance
   returning function f, a cursor, and an optional third argument
   which may be a map of build specifications.

   f - is a function of 2 or 3 arguments. The first argument will be
   the cursor and the second argument will be the owning pure node.
   If a map of options m is passed in this will be the third
   argument. f must return at a minimum an IRender instance, this
   instance may implement other React life cycle protocols.

   cursor - an ICursor instance

   m - a map the following keys are allowed:

     :key        - a keyword that should be used to look up the key used by
                   React itself when rendering sequential things.
     :react-key  - an explicit react key
     :fn         - a function to apply to the data before invoking f.
     :init-state - a map of initial state to pass to the component.
     :state      - a map of state to pass to the component, will be merged in.
     :opts       - a map of values. Can be used to pass side information down
                   the render tree.

   Example:

     (build list-of-gadgets cursor
        {:init-state {:event-chan ...
                      :narble ...}})
  "
  ([f cursor] (build f cursor nil))
  ([f cursor m]
    (assert (valid? m)
      (apply str "build options contains invalid keys, only :key, :react-key, "
                 ":fn, :init-state, :state, and :opts allowed, given "
                 (interpose ", " (keys m))))
    (cond
      (nil? m)
      (let [shared (or (:shared m) (get-shared *parent*))]
        (tag
          (pure #js {:__om_cursor cursor
                     :__om_shared shared}
            (fn [this] (allow-reads (f cursor this))))
          f))

      :else
      (let [{:keys [key state init-state opts]} m
            dataf   (get m :fn)
            cursor' (if-not (nil? dataf) (dataf cursor) cursor)
            rkey    (if-not (nil? key)
                      (get cursor' key)
                      (get m :react-key))
            shared  (or (:shared m) (get-shared *parent*))]
        (tag
          (pure #js {:__om_cursor cursor'
                     :__om_index (::index m)
                     :__om_init_state init-state
                     :__om_state state
                     :__om_shared shared
                     :key rkey}
            (if (nil? opts)
              (fn [this] (allow-reads (f cursor' this)))
              (fn [this] (allow-reads (f cursor' this opts)))))
          f)))))

(defn build-all
  "Build a sequence of components. f is the component constructor
   function, xs a sequence of cursors, and m a map of options the
   same as provided to om.core/build."
  ([f xs] (build-all f xs nil))
  ([f xs m]
    (map (fn [x i]
           (build f x (assoc m ::index i)))
      xs (range))))

(defn root
  "Take a component constructor function f, value an immutable tree of
   associative data structures optionally an wrapped in an atom, and a
   map of options. 

   Options *must* include at least a :target which is a DOM
   element. Can optionally provide :shared which is data to be shared
   by all components via their cursors. Can optionally provide
   :tx-listen, a function that will listen in in transactions, :tx-listen
   should take 2 arguments - the first a map containing
   the path, old and new state at path, old and new global state, and
   transaction tag if provided. The second is a root-cursor.

   Options may also include any key allowed by om.core/build to
   customize f.

   Installs an Om/React render loop. f must return an
   instance that at a minimum implements IRender or IRenderState (it
   may implement other React life cycle protocols). f must take at two
   arguments, the root cursor and the owning pure node. A cursor is
   just the original data wrapped in an ICursor instance which
   maintains path information. Only one root render loop allowed per
   target element. om.core/root is idempotent, if called again on the
   same target element the previous render loop will be replaced.

   Example:

   (root 
     (fn [data owner]
       ...)
     {:message :hello}
     {:target js/document.body})"
  ([f value {:keys [target shared tx-listen] :as options}]
    (assert (not (nil? target)) "No target specified to om.core/root")
    ;; only one root render loop per target
    (let [roots' @roots]
      (when (contains? roots' target)
        ((get roots' target))))
    (let [state (if (instance? Atom value)
                  value
                  (atom value))
          state (specify! state
                  INotify
                  (-notify [_ tx-data root-cursor]
                    (when-not (nil? tx-listen)
                      (tx-listen tx-data root-cursor))))
          rootf (fn rootf []
                  (swap! refresh-set disj rootf)
                  (let [value  @state
                        cursor (to-cursor value state [])]
                    (dom/render
                      (build f cursor
                        (dissoc options :target :tx-listen)) target)))
          watch-key (gensym)]
      (add-watch state watch-key
        (fn [_ _ _ _]
          (when-not (contains? @refresh-set rootf)
            (swap! refresh-set conj rootf))
          (when-not refresh-queued
            (set! refresh-queued true)
            (if (exists? js/requestAnimationFrame)
              (js/requestAnimationFrame render-all)
              (js/setTimeout render-all 16)))))
      ;; store fn to remove previous root render loop
      (swap! roots assoc target
        (fn []
          (remove-watch state watch-key)
          (swap! roots dissoc target)
          (js/React.unmountComponentAtNode target)))
      (rootf))))

(defn transact!
  "Given a tag, a cursor, an optional list of keys ks, mutate the tree
   at the path specified by the cursor + the optional keys by applying
   f to the specified value in the tree. An Om re-render will be
   triggered."
  ([cursor f]
    (transact! cursor [] f nil))
  ([cursor korks f]
    (transact! cursor korks f nil))
  ([cursor korks f tag]
    (let [korks (if-not (sequential? korks)
                  [korks]
                  korks)
         tx-data (-transact! cursor korks f)]
      (if-not (nil? tag)
        (notify* cursor (assoc tx-data :tag tag))
        (notify* cursor tx-data)))))

(defn update!
  "Like transact! but no function provided, instead a replacement
  value is given."
  ([cursor v]
    (transact! cursor nil (fn [_] v) nil))
  ([cursor korks v]
    (transact! cursor korks (fn [_] v) nil))
  ([cursor korks v tag]
    (transact! cursor korks (fn [_] v)) tag))

(defn get-node
  "A helper function to get at React refs. Given a owning pure node
  extract the ref specified by name."
  [owner name]
  (when-let [refs (.-refs owner)]
    (.getDOMNode (aget refs name))))

(defn set-state!
  "Takes a pure owning component, a sequential list of keys and value and
   sets the state of the component. Conceptually analagous to React
   setState. Will schedule an Om re-render."
  [owner korks v]
  (allow-reads
    (let [props  (.-props owner)
          state  (.-state owner)
          cursor (aget props "__om_cursor")
          path   (-path cursor)
          pstate (or (aget state "__om_pending_state")
                     (aget state "__om_state"))]
      (if-not (sequential? korks)
        (aset state "__om_pending_state" (assoc pstate korks v))
        (aset state "__om_pending_state" (assoc-in pstate korks v)))
      ;; invalidate path to component
      (if (empty? path)
        (swap! (-state cursor) clone)
        (swap! (-state cursor) update-in path clone)))))

(defn get-render-state
  "Takes a pure owning component and an optional key or sequential
   list of keys and returns a property in the component local state if
   it exists. Always returns the rendered state, not the pending
   state."
  ([owner]
    (aget (.-state owner) "__om_state"))
  ([owner korks]
    (cond
      (not (sequential? korks))
      (get (get-render-state owner) korks)

      (empty? korks)
      (get-render-state owner)

      :else
      (get-in (get-render-state owner) korks))))

(defn graft
  "Create a cursor instance by attaching to an existing cursor. This
   supports building components which don't need to set app state but
   need to be added to the render tree."
  [value cursor]
  (let [state  (-state cursor)
        path   (-path cursor)]
    (if (cursor? value)
      (throw (js/Error. (str value " is already a cursor.")))
      (specify value
        ITransact
        (-transact! [_ _ _]
          (throw (js/Error. "Cannot transact on graft")))
        ICursor
        (-state [_] state)
        (-path [_] path)))))
