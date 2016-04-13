// Compiled by ClojureScript 0.0-2156
goog.provide('om.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
om.core._STAR_read_enabled_STAR_ = false;
om.core._STAR_parent_STAR_ = null;
om.core.IInitState = (function (){var obj14127 = {};return obj14127;
})();
om.core.init_state = (function init_state(this$){if((function (){var and__6515__auto__ = this$;if(and__6515__auto__)
{return this$.om$core$IInitState$init_state$arity$1;
} else
{return and__6515__auto__;
}
})())
{return this$.om$core$IInitState$init_state$arity$1(this$);
} else
{var x__7154__auto__ = (((this$ == null))?null:this$);return (function (){var or__6527__auto__ = (om.core.init_state[goog.typeOf(x__7154__auto__)]);if(or__6527__auto__)
{return or__6527__auto__;
} else
{var or__6527__auto____$1 = (om.core.init_state["_"]);if(or__6527__auto____$1)
{return or__6527__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});
om.core.IShouldUpdate = (function (){var obj14129 = {};return obj14129;
})();
om.core.should_update = (function should_update(this$,next_props,next_state){if((function (){var and__6515__auto__ = this$;if(and__6515__auto__)
{return this$.om$core$IShouldUpdate$should_update$arity$3;
} else
{return and__6515__auto__;
}
})())
{return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else
{var x__7154__auto__ = (((this$ == null))?null:this$);return (function (){var or__6527__auto__ = (om.core.should_update[goog.typeOf(x__7154__auto__)]);if(or__6527__auto__)
{return or__6527__auto__;
} else
{var or__6527__auto____$1 = (om.core.should_update["_"]);if(or__6527__auto____$1)
{return or__6527__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IWillMount = (function (){var obj14131 = {};return obj14131;
})();
om.core.will_mount = (function will_mount(this$){if((function (){var and__6515__auto__ = this$;if(and__6515__auto__)
{return this$.om$core$IWillMount$will_mount$arity$1;
} else
{return and__6515__auto__;
}
})())
{return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else
{var x__7154__auto__ = (((this$ == null))?null:this$);return (function (){var or__6527__auto__ = (om.core.will_mount[goog.typeOf(x__7154__auto__)]);if(or__6527__auto__)
{return or__6527__auto__;
} else
{var or__6527__auto____$1 = (om.core.will_mount["_"]);if(or__6527__auto____$1)
{return or__6527__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IDidMount = (function (){var obj14133 = {};return obj14133;
})();
om.core.did_mount = (function did_mount(this$,node){if((function (){var and__6515__auto__ = this$;if(and__6515__auto__)
{return this$.om$core$IDidMount$did_mount$arity$2;
} else
{return and__6515__auto__;
}
})())
{return this$.om$core$IDidMount$did_mount$arity$2(this$,node);
} else
{var x__7154__auto__ = (((this$ == null))?null:this$);return (function (){var or__6527__auto__ = (om.core.did_mount[goog.typeOf(x__7154__auto__)]);if(or__6527__auto__)
{return or__6527__auto__;
} else
{var or__6527__auto____$1 = (om.core.did_mount["_"]);if(or__6527__auto____$1)
{return or__6527__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$,node);
}
});
om.core.IWillUnmount = (function (){var obj14135 = {};return obj14135;
})();
om.core.will_unmount = (function will_unmount(this$){if((function (){var and__6515__auto__ = this$;if(and__6515__auto__)
{return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else
{return and__6515__auto__;
}
})())
{return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else
{var x__7154__auto__ = (((this$ == null))?null:this$);return (function (){var or__6527__auto__ = (om.core.will_unmount[goog.typeOf(x__7154__auto__)]);if(or__6527__auto__)
{return or__6527__auto__;
} else
{var or__6527__auto____$1 = (om.core.will_unmount["_"]);if(or__6527__auto____$1)
{return or__6527__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUpdate = (function (){var obj14137 = {};return obj14137;
})();
om.core.will_update = (function will_update(this$,next_props,next_state){if((function (){var and__6515__auto__ = this$;if(and__6515__auto__)
{return this$.om$core$IWillUpdate$will_update$arity$3;
} else
{return and__6515__auto__;
}
})())
{return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else
{var x__7154__auto__ = (((this$ == null))?null:this$);return (function (){var or__6527__auto__ = (om.core.will_update[goog.typeOf(x__7154__auto__)]);if(or__6527__auto__)
{return or__6527__auto__;
} else
{var or__6527__auto____$1 = (om.core.will_update["_"]);if(or__6527__auto____$1)
{return or__6527__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IDidUpdate = (function (){var obj14139 = {};return obj14139;
})();
om.core.did_update = (function did_update(this$,prev_props,prev_state,root_node){if((function (){var and__6515__auto__ = this$;if(and__6515__auto__)
{return this$.om$core$IDidUpdate$did_update$arity$4;
} else
{return and__6515__auto__;
}
})())
{return this$.om$core$IDidUpdate$did_update$arity$4(this$,prev_props,prev_state,root_node);
} else
{var x__7154__auto__ = (((this$ == null))?null:this$);return (function (){var or__6527__auto__ = (om.core.did_update[goog.typeOf(x__7154__auto__)]);if(or__6527__auto__)
{return or__6527__auto__;
} else
{var or__6527__auto____$1 = (om.core.did_update["_"]);if(or__6527__auto____$1)
{return or__6527__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state,root_node);
}
});
om.core.IRender = (function (){var obj14141 = {};return obj14141;
})();
om.core.render = (function render(this$){if((function (){var and__6515__auto__ = this$;if(and__6515__auto__)
{return this$.om$core$IRender$render$arity$1;
} else
{return and__6515__auto__;
}
})())
{return this$.om$core$IRender$render$arity$1(this$);
} else
{var x__7154__auto__ = (((this$ == null))?null:this$);return (function (){var or__6527__auto__ = (om.core.render[goog.typeOf(x__7154__auto__)]);if(or__6527__auto__)
{return or__6527__auto__;
} else
{var or__6527__auto____$1 = (om.core.render["_"]);if(or__6527__auto____$1)
{return or__6527__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});
om.core.IRenderState = (function (){var obj14143 = {};return obj14143;
})();
om.core.render_state = (function render_state(this$,state){if((function (){var and__6515__auto__ = this$;if(and__6515__auto__)
{return this$.om$core$IRenderState$render_state$arity$2;
} else
{return and__6515__auto__;
}
})())
{return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else
{var x__7154__auto__ = (((this$ == null))?null:this$);return (function (){var or__6527__auto__ = (om.core.render_state[goog.typeOf(x__7154__auto__)]);if(or__6527__auto__)
{return or__6527__auto__;
} else
{var or__6527__auto____$1 = (om.core.render_state["_"]);if(or__6527__auto____$1)
{return or__6527__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});
om.core.IValue = (function (){var obj14145 = {};return obj14145;
})();
om.core._value = (function _value(x){if((function (){var and__6515__auto__ = x;if(and__6515__auto__)
{return x.om$core$IValue$_value$arity$1;
} else
{return and__6515__auto__;
}
})())
{return x.om$core$IValue$_value$arity$1(x);
} else
{var x__7154__auto__ = (((x == null))?null:x);return (function (){var or__6527__auto__ = (om.core._value[goog.typeOf(x__7154__auto__)]);if(or__6527__auto__)
{return or__6527__auto__;
} else
{var or__6527__auto____$1 = (om.core._value["_"]);if(or__6527__auto____$1)
{return or__6527__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});
(om.core.IValue["_"] = true);
(om.core._value["_"] = (function (x){return x;
}));
om.core.ICursor = (function (){var obj14147 = {};return obj14147;
})();
om.core._path = (function _path(cursor){if((function (){var and__6515__auto__ = cursor;if(and__6515__auto__)
{return cursor.om$core$ICursor$_path$arity$1;
} else
{return and__6515__auto__;
}
})())
{return cursor.om$core$ICursor$_path$arity$1(cursor);
} else
{var x__7154__auto__ = (((cursor == null))?null:cursor);return (function (){var or__6527__auto__ = (om.core._path[goog.typeOf(x__7154__auto__)]);if(or__6527__auto__)
{return or__6527__auto__;
} else
{var or__6527__auto____$1 = (om.core._path["_"]);if(or__6527__auto____$1)
{return or__6527__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});
om.core._state = (function _state(cursor){if((function (){var and__6515__auto__ = cursor;if(and__6515__auto__)
{return cursor.om$core$ICursor$_state$arity$1;
} else
{return and__6515__auto__;
}
})())
{return cursor.om$core$ICursor$_state$arity$1(cursor);
} else
{var x__7154__auto__ = (((cursor == null))?null:cursor);return (function (){var or__6527__auto__ = (om.core._state[goog.typeOf(x__7154__auto__)]);if(or__6527__auto__)
{return or__6527__auto__;
} else
{var or__6527__auto____$1 = (om.core._state["_"]);if(or__6527__auto____$1)
{return or__6527__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IToCursor = (function (){var obj14149 = {};return obj14149;
})();
om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){if((function (){var and__6515__auto__ = value;if(and__6515__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$2;
} else
{return and__6515__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else
{var x__7154__auto__ = (((value == null))?null:value);return (function (){var or__6527__auto__ = (om.core._to_cursor[goog.typeOf(x__7154__auto__)]);if(or__6527__auto__)
{return or__6527__auto__;
} else
{var or__6527__auto____$1 = (om.core._to_cursor["_"]);if(or__6527__auto____$1)
{return or__6527__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){if((function (){var and__6515__auto__ = value;if(and__6515__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$3;
} else
{return and__6515__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else
{var x__7154__auto__ = (((value == null))?null:value);return (function (){var or__6527__auto__ = (om.core._to_cursor[goog.typeOf(x__7154__auto__)]);if(or__6527__auto__)
{return or__6527__auto__;
} else
{var or__6527__auto____$1 = (om.core._to_cursor["_"]);if(or__6527__auto____$1)
{return or__6527__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;
om.core.transact_STAR_ = (function transact_STAR_(state,path,f){var old_state = cljs.core.deref.call(null,state);if(cljs.core.empty_QMARK_.call(null,path))
{cljs.core.swap_BANG_.call(null,state,f);
} else
{cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f);
}
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"old-value","old-value",1451216317),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",3626601078),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1449001181),old_state,new cljs.core.Keyword(null,"new-state","new-state",3624385942),cljs.core.deref.call(null,state)], null);
});
om.core.ITransact = (function (){var obj14151 = {};return obj14151;
})();
om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f){if((function (){var and__6515__auto__ = cursor;if(and__6515__auto__)
{return cursor.om$core$ITransact$_transact_BANG_$arity$3;
} else
{return and__6515__auto__;
}
})())
{return cursor.om$core$ITransact$_transact_BANG_$arity$3(cursor,korks,f);
} else
{var x__7154__auto__ = (((cursor == null))?null:cursor);return (function (){var or__6527__auto__ = (om.core._transact_BANG_[goog.typeOf(x__7154__auto__)]);if(or__6527__auto__)
{return or__6527__auto__;
} else
{var or__6527__auto____$1 = (om.core._transact_BANG_["_"]);if(or__6527__auto____$1)
{return or__6527__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f);
}
});
om.core.INotify = (function (){var obj14153 = {};return obj14153;
})();
om.core._notify = (function _notify(x,tx_data,root_cursor){if((function (){var and__6515__auto__ = x;if(and__6515__auto__)
{return x.om$core$INotify$_notify$arity$3;
} else
{return and__6515__auto__;
}
})())
{return x.om$core$INotify$_notify$arity$3(x,tx_data,root_cursor);
} else
{var x__7154__auto__ = (((x == null))?null:x);return (function (){var or__6527__auto__ = (om.core._notify[goog.typeOf(x__7154__auto__)]);if(or__6527__auto__)
{return or__6527__auto__;
} else
{var or__6527__auto____$1 = (om.core._notify["_"]);if(or__6527__auto____$1)
{return or__6527__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-notify",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});
om.core.children = (function children(node){var c = node.props.children;if(cljs.core.fn_QMARK_.call(null,c))
{return node.props.children = (function (){var _STAR_read_enabled_STAR_14155 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return c.call(null,node);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_14155;
}})();
} else
{return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function get_props(x){return (x.props["__om_cursor"]);
});
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){var state = owner.state;var or__6527__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__6527__auto__))
{return or__6527__auto__;
} else
{return (state["__om_state"]);
}
});
var get_state__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.get.call(null,get_state.call(null,owner),korks);
} else
{if(cljs.core.empty_QMARK_.call(null,korks))
{return get_state.call(null,owner);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get_in.call(null,get_state.call(null,owner),korks);
} else
{return null;
}
}
}
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){if((owner == null))
{return null;
} else
{return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.get.call(null,get_shared.call(null,owner),korks);
} else
{if(cljs.core.empty_QMARK_.call(null,korks))
{return get_shared.call(null,owner);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get_in.call(null,get_shared.call(null,owner),korks);
} else
{return null;
}
}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){var state = owner.state;var temp__4092__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(temp__4092__auto__))
{var pending_state = temp__4092__auto__;var G__14157 = state;(G__14157["__om_prev_state"] = (state["__om_state"]));
(G__14157["__om_state"] = pending_state);
(G__14157["__om_pending_state"] = null);
return G__14157;
} else
{return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){return merge_props_state.call(null,owner,null);
});
var merge_props_state__2 = (function (owner,props){var props__$1 = (function (){var or__6527__auto__ = props;if(cljs.core.truth_(or__6527__auto__))
{return or__6527__auto__;
} else
{return owner.props;
}
})();var temp__4092__auto__ = (props__$1["__om_state"]);if(cljs.core.truth_(temp__4092__auto__))
{var props_state = temp__4092__auto__;var state = owner.state;(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__6527__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__6527__auto__))
{return or__6527__auto__;
} else
{return (state["__om_state"]);
}
})(),props_state));
return (props__$1["__om_state"] = null);
} else
{return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.Pure = React.createClass({"render": (function (){var this$ = this;var c = om.core.children.call(null,this$);var _STAR_read_enabled_STAR_14172 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
if((function (){var G__14173 = c;if(G__14173)
{var bit__7177__auto__ = null;if(cljs.core.truth_((function (){var or__6527__auto__ = bit__7177__auto__;if(cljs.core.truth_(or__6527__auto__))
{return or__6527__auto__;
} else
{return G__14173.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__14173.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__14173);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__14173);
}
})())
{var _STAR_parent_STAR_14174 = om.core._STAR_parent_STAR_;try{om.core._STAR_parent_STAR_ = this$;
return om.core.render.call(null,c);
}finally {om.core._STAR_parent_STAR_ = _STAR_parent_STAR_14174;
}} else
{if((function (){var G__14175 = c;if(G__14175)
{var bit__7177__auto__ = null;if(cljs.core.truth_((function (){var or__6527__auto__ = bit__7177__auto__;if(cljs.core.truth_(or__6527__auto__))
{return or__6527__auto__;
} else
{return G__14175.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__14175.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__14175);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__14175);
}
})())
{var _STAR_parent_STAR_14176 = om.core._STAR_parent_STAR_;try{om.core._STAR_parent_STAR_ = this$;
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
}finally {om.core._STAR_parent_STAR_ = _STAR_parent_STAR_14176;
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return c;
} else
{return null;
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_14172;
}}), "componentDidUpdate": (function (prev_props,prev_state,root_node){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__14170 = c;if(G__14170)
{var bit__7177__auto__ = null;if(cljs.core.truth_((function (){var or__6527__auto__ = bit__7177__auto__;if(cljs.core.truth_(or__6527__auto__))
{return or__6527__auto__;
} else
{return G__14170.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__14170.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__14170);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__14170);
}
})())
{var state_14177 = this$.state;var _STAR_read_enabled_STAR_14171_14178 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props}),(function (){var or__6527__auto__ = (state_14177["__om_prev_state"]);if(cljs.core.truth_(or__6527__auto__))
{return or__6527__auto__;
} else
{return (state_14177["__om_state"]);
}
})(),root_node);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_14171_14178;
}} else
{}
return (this$.state["__om_prev_state"] = null);
}), "componentWillUpdate": (function (next_props,next_state){var this$ = this;var c_14179 = om.core.children.call(null,this$);if((function (){var G__14168 = c_14179;if(G__14168)
{var bit__7177__auto__ = null;if(cljs.core.truth_((function (){var or__6527__auto__ = bit__7177__auto__;if(cljs.core.truth_(or__6527__auto__))
{return or__6527__auto__;
} else
{return G__14168.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__14168.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__14168);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__14168);
}
})())
{var state_14180 = this$.state;var _STAR_read_enabled_STAR_14169_14181 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_update.call(null,c_14179,om.core.get_props.call(null,{"props": next_props}),(function (){var or__6527__auto__ = (state_14180["__om_pending_state"]);if(cljs.core.truth_(or__6527__auto__))
{return or__6527__auto__;
} else
{return (state_14180["__om_state"]);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_14169_14181;
}} else
{}
return om.core.merge_pending_state.call(null,this$);
}), "componentWillUnmount": (function (){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__14166 = c;if(G__14166)
{var bit__7177__auto__ = null;if(cljs.core.truth_((function (){var or__6527__auto__ = bit__7177__auto__;if(cljs.core.truth_(or__6527__auto__))
{return or__6527__auto__;
} else
{return G__14166.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__14166.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__14166);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__14166);
}
})())
{var _STAR_read_enabled_STAR_14167 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.will_unmount.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_14167;
}} else
{return null;
}
}), "componentDidMount": (function (node){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__14164 = c;if(G__14164)
{var bit__7177__auto__ = null;if(cljs.core.truth_((function (){var or__6527__auto__ = bit__7177__auto__;if(cljs.core.truth_(or__6527__auto__))
{return or__6527__auto__;
} else
{return G__14164.om$core$IDidMount$;
}
})()))
{return true;
} else
{if((!G__14164.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__14164);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__14164);
}
})())
{var _STAR_read_enabled_STAR_14165 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.did_mount.call(null,c,node);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_14165;
}} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;om.core.merge_props_state.call(null,this$);
var c_14182 = om.core.children.call(null,this$);if((function (){var G__14162 = c_14182;if(G__14162)
{var bit__7177__auto__ = null;if(cljs.core.truth_((function (){var or__6527__auto__ = bit__7177__auto__;if(cljs.core.truth_(or__6527__auto__))
{return or__6527__auto__;
} else
{return G__14162.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__14162.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__14162);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__14162);
}
})())
{var _STAR_read_enabled_STAR_14163_14183 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_mount.call(null,c_14182);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_14163_14183;
}} else
{}
return om.core.merge_pending_state.call(null,this$);
}), "shouldComponentUpdate": (function (next_props,next_state){var this$ = this;var _STAR_read_enabled_STAR_14160 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$.props;var state = this$.state;var c = om.core.children.call(null,this$);om.core.merge_props_state.call(null,this$,next_props);
if((function (){var G__14161 = c;if(G__14161)
{var bit__7177__auto__ = null;if(cljs.core.truth_((function (){var or__6527__auto__ = bit__7177__auto__;if(cljs.core.truth_(or__6527__auto__))
{return or__6527__auto__;
} else
{return G__14161.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__14161.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__14161);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__14161);
}
})())
{return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props}),(function (){var or__6527__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__6527__auto__))
{return or__6527__auto__;
} else
{return (state["__om_state"]);
}
})());
} else
{if(!((om.core._value.call(null,(props["__om_cursor"])) === om.core._value.call(null,(next_props["__om_cursor"])))))
{return true;
} else
{if(!(((state["__om_pending_state"]) == null)))
{return true;
} else
{if(!(((props["__om_index"]) === (next_props["__om_index"]))))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_14160;
}}), "getInitialState": (function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var istate = (function (){var or__6527__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__6527__auto__))
{return or__6527__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var ret = {"__om_state": cljs.core.merge.call(null,istate,(((function (){var G__14158 = c;if(G__14158)
{var bit__7177__auto__ = null;if(cljs.core.truth_((function (){var or__6527__auto__ = bit__7177__auto__;if(cljs.core.truth_(or__6527__auto__))
{return or__6527__auto__;
} else
{return G__14158.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__14158.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__14158);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__14158);
}
})())?(function (){var _STAR_read_enabled_STAR_14159 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.init_state.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_14159;
}})():null))};(props["__om_init_state"] = null);
return ret;
})});
om.core.path = (function path(cursor){return om.core._path.call(null,cursor);
});
om.core.value = (function value(cursor){return om.core._value.call(null,cursor);
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){var G__14185 = x;if(G__14185)
{var bit__7177__auto__ = null;if(cljs.core.truth_((function (){var or__6527__auto__ = bit__7177__auto__;if(cljs.core.truth_(or__6527__auto__))
{return or__6527__auto__;
} else
{return G__14185.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__14185.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__14185);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__14185);
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2158397195;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.cljs$lang$type = true;
om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";
om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__7094__auto__,writer__7095__auto__,opt__7096__auto__){return cljs.core._write.call(null,writer__7095__auto__,"om.core/MapCursor");
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{var v = cljs.core._lookup.call(null,self__.value,k,not_found);if(!(cljs.core._EQ_.call(null,v,not_found)))
{return om.core.to_cursor.call(null,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else
{return not_found;
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.call = (function() {
var G__14189 = null;
var G__14189__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14189__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14189 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14189__2.call(this,self__,k);
case 3:
return G__14189__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__14189;
})()
;
om.core.MapCursor.prototype.apply = (function (self__,args14186){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args14186)));
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.MapCursor.prototype.om$core$ICursor$ = true;
om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path);
} else
{throw (new Error([cljs.core.str("Cannot deref cursor during render phase: "),cljs.core.str(this$__$1)].join('')));
}
});
om.core.MapCursor.prototype.om$core$IValue$ = true;
om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return self__.value;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer.call(null,self__.value,writer,opts);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((cljs.core.count.call(null,self__.value) > 0))
{return cljs.core.map.call(null,(function (p__14187){var vec__14188 = p__14187;var k = cljs.core.nth.call(null,vec__14188,0,null);var v = cljs.core.nth.call(null,vec__14188,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core.to_cursor.call(null,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
}),self__.value);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count.call(null,self__.value);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,self__.value,other);
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.meta.call(null,self__.value);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.om$core$ITransact$ = true;
om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$3 = (function (_,korks,f){var self__ = this;
var ___$1 = this;return om.core.transact_STAR_.call(null,self__.state,cljs.core.into.call(null,self__.path,korks),f);
});
om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){return (new om.core.MapCursor(value,state,path));
});

/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2175181595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.cljs$lang$type = true;
om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";
om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__7094__auto__,writer__7095__auto__,opt__7096__auto__){return cljs.core._write.call(null,writer__7095__auto__,"om.core/IndexedCursor");
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._nth.call(null,this$__$1,n,null);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._nth.call(null,this$__$1,n,not_found);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,n,v){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core.to_cursor.call(null,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.call = (function() {
var G__14191 = null;
var G__14191__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14191__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14191 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14191__2.call(this,self__,k);
case 3:
return G__14191__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__14191;
})()
;
om.core.IndexedCursor.prototype.apply = (function (self__,args14190){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args14190)));
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.IndexedCursor.prototype.om$core$ICursor$ = true;
om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path);
} else
{throw (new Error([cljs.core.str("Cannot deref cursor during render phase: "),cljs.core.str(this$__$1)].join('')));
}
});
om.core.IndexedCursor.prototype.om$core$IValue$ = true;
om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return self__.value;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer.call(null,self__.value,writer,opts);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((cljs.core.count.call(null,self__.value) > 0))
{return cljs.core.map.call(null,(function (v,i){return om.core.to_cursor.call(null,v,self__.state,cljs.core.conj.call(null,self__.path,i));
}),self__.value,cljs.core.range.call(null));
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count.call(null,self__.value);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core.to_cursor.call(null,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core.to_cursor.call(null,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,self__.value,other);
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});
om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.meta.call(null,self__.value);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core.to_cursor.call(null,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,not_found){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((n < cljs.core._count.call(null,self__.value)))
{return om.core.to_cursor.call(null,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
} else
{return not_found;
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.om$core$ITransact$ = true;
om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$3 = (function (_,korks,f){var self__ = this;
var ___$1 = this;return om.core.transact_STAR_.call(null,self__.state,cljs.core.into.call(null,self__.path,korks),f);
});
om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){return (new om.core.IndexedCursor(value,state,path));
});
om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){var x14193 = cljs.core.clone.call(null,val);x14193.cljs$core$IEquiv$ = true;
x14193.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,val,other);
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
x14193.om$core$ITransact$ = true;
x14193.om$core$ITransact$_transact_BANG_$arity$3 = (function (_,korks,f){var ___$1 = this;return om.core.transact_STAR_.call(null,state,cljs.core.into.call(null,path,korks),f);
});
x14193.om$core$ICursor$ = true;
x14193.om$core$ICursor$_path$arity$1 = (function (_){var ___$1 = this;return path;
});
x14193.om$core$ICursor$_state$arity$1 = (function (_){var ___$1 = this;return state;
});
x14193.cljs$core$IDeref$ = true;
x14193.cljs$core$IDeref$_deref$arity$1 = (function (this$){var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path);
} else
{throw (new Error([cljs.core.str("Cannot deref cursor during render phase: "),cljs.core.str(this$__$1)].join('')));
}
});
return x14193;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){return to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){return to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){if(om.core.cursor_QMARK_.call(null,val))
{return val;
} else
{if((function (){var G__14196 = val;if(G__14196)
{var bit__7177__auto__ = null;if(cljs.core.truth_((function (){var or__6527__auto__ = bit__7177__auto__;if(cljs.core.truth_(or__6527__auto__))
{return or__6527__auto__;
} else
{return G__14196.om$core$IToCursor$;
}
})()))
{return true;
} else
{if((!G__14196.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__14196);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__14196);
}
})())
{return om.core._to_cursor.call(null,val,state,path);
} else
{if(cljs.core.indexed_QMARK_.call(null,val))
{return (new om.core.IndexedCursor(val,state,path));
} else
{if(cljs.core.map_QMARK_.call(null,val))
{return (new om.core.MapCursor(val,state,path));
} else
{if((function (){var G__14197 = val;if(G__14197)
{var bit__7177__auto__ = (G__14197.cljs$lang$protocol_mask$partition1$ & 8192);if((bit__7177__auto__) || (G__14197.cljs$core$ICloneable$))
{return true;
} else
{if((!G__14197.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__14197);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__14197);
}
})())
{return om.core.to_cursor_STAR_.call(null,val,state,path);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return val;
} else
{return null;
}
}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){var state = om.core._state.call(null,cursor);return om.core._notify.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.render_all = (function render_all(){om.core.refresh_queued = false;
var seq__14202 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));var chunk__14203 = null;var count__14204 = 0;var i__14205 = 0;while(true){
if((i__14205 < count__14204))
{var f = cljs.core._nth.call(null,chunk__14203,i__14205);f.call(null);
{
var G__14206 = seq__14202;
var G__14207 = chunk__14203;
var G__14208 = count__14204;
var G__14209 = (i__14205 + 1);
seq__14202 = G__14206;
chunk__14203 = G__14207;
count__14204 = G__14208;
i__14205 = G__14209;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14202);if(temp__4092__auto__)
{var seq__14202__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14202__$1))
{var c__7275__auto__ = cljs.core.chunk_first.call(null,seq__14202__$1);{
var G__14210 = cljs.core.chunk_rest.call(null,seq__14202__$1);
var G__14211 = c__7275__auto__;
var G__14212 = cljs.core.count.call(null,c__7275__auto__);
var G__14213 = 0;
seq__14202 = G__14210;
chunk__14203 = G__14211;
count__14204 = G__14212;
i__14205 = G__14213;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__14202__$1);f.call(null);
{
var G__14214 = cljs.core.next.call(null,seq__14202__$1);
var G__14215 = null;
var G__14216 = 0;
var G__14217 = 0;
seq__14202 = G__14214;
chunk__14203 = G__14215;
count__14204 = G__14216;
i__14205 = G__14217;
continue;
}
}
} else
{return null;
}
}
break;
}
});
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_QMARK_ = (function valid_QMARK_(m){return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),null,new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"react-key","react-key",4184082563),null,new cljs.core.Keyword("om.core","index","om.core/index",3166146514),null,new cljs.core.Keyword(null,"key","key",1014010321),null,new cljs.core.Keyword(null,"shared","shared",4405305303),null,new cljs.core.Keyword(null,"opts","opts",1017322386),null,new cljs.core.Keyword(null,"fn","fn",1013907514),null], null), null),cljs.core.keys.call(null,m));
});
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a cursor, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument will be
* the cursor and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender instance, this
* instance may implement other React life cycle protocols.
* 
* cursor - an ICursor instance
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* 
* Example:
* 
* (build list-of-gadgets cursor
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,cursor){return build.call(null,f,cursor,null);
});
var build__3 = (function (f,cursor,m){if(om.core.valid_QMARK_.call(null,m))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid?","valid?",1830611324,null),new cljs.core.Symbol(null,"m","m",-1640531418,null))))].join('')));
}
if((m == null))
{var shared = (function (){var or__6527__auto__ = new cljs.core.Keyword(null,"shared","shared",4405305303).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__6527__auto__))
{return or__6527__auto__;
} else
{return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();var pure__9770__auto__ = (new om.core.Pure({"__om_shared": shared, "__om_cursor": cursor},(function (this$){var _STAR_read_enabled_STAR_14222 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,cursor,this$);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_14222;
}})));pure__9770__auto__.constructor = goog.getUid(f);
return pure__9770__auto__;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var map__14223 = m;var map__14223__$1 = ((cljs.core.seq_QMARK_.call(null,map__14223))?cljs.core.apply.call(null,cljs.core.hash_map,map__14223):map__14223);var opts = cljs.core.get.call(null,map__14223__$1,new cljs.core.Keyword(null,"opts","opts",1017322386));var init_state = cljs.core.get.call(null,map__14223__$1,new cljs.core.Keyword(null,"init-state","init-state",4479067398));var state = cljs.core.get.call(null,map__14223__$1,new cljs.core.Keyword(null,"state","state",1123661827));var key = cljs.core.get.call(null,map__14223__$1,new cljs.core.Keyword(null,"key","key",1014010321));var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",1013907514));var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?dataf.call(null,cursor):cursor);var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",4184082563)));var shared = (function (){var or__6527__auto__ = new cljs.core.Keyword(null,"shared","shared",4405305303).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__6527__auto__))
{return or__6527__auto__;
} else
{return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();var pure__9770__auto__ = (new om.core.Pure({"key": rkey, "__om_shared": shared, "__om_state": state, "__om_init_state": init_state, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",3166146514).cljs$core$IFn$_invoke$arity$1(m), "__om_cursor": cursor_SINGLEQUOTE_},(((opts == null))?(function (this$){var _STAR_read_enabled_STAR_14224 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,cursor_SINGLEQUOTE_,this$);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_14224;
}}):(function (this$){var _STAR_read_enabled_STAR_14225 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,cursor_SINGLEQUOTE_,this$,opts);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_14225;
}}))));pure__9770__auto__.constructor = goog.getUid(f);
return pure__9770__auto__;
} else
{return null;
}
}
});
build = function(f,cursor,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,cursor);
case 3:
return build__3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of cursors, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){return build_all.call(null,f,xs,null);
});
var build_all__3 = (function (f,xs,m){return cljs.core.map.call(null,(function (x,i){return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",3166146514),i));
}),xs,cljs.core.range.call(null));
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an atom, and a
* map of options.
* 
* Options *must* include at least a :target which is a DOM
* element. Can optionally provide :shared which is data to be shared
* by all components via their cursors. Can optionally provide
* :tx-listen, a function that will listen in in transactions, :tx-listen
* should take 2 arguments - the first a map containing
* the path, old and new state at path, old and new global state, and
* transaction tag if provided. The second is a root-cursor.
* 
* Options may also include any key allowed by om.core/build to
* customize f.
* 
* Installs an Om/React render loop. f must return an
* instance that at a minimum implements IRender or IRenderState (it
* may implement other React life cycle protocols). f must take at two
* arguments, the root cursor and the owning pure node. A cursor is
* just the original data wrapped in an ICursor instance which
* maintains path information. Only one root render loop allowed per
* target element. om.core/root is idempotent, if called again on the
* same target element the previous render loop will be replaced.
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__14226){var map__14229 = p__14226;var map__14229__$1 = ((cljs.core.seq_QMARK_.call(null,map__14229))?cljs.core.apply.call(null,cljs.core.hash_map,map__14229):map__14229);var options = map__14229__$1;var tx_listen = cljs.core.get.call(null,map__14229__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",666878114));var shared = cljs.core.get.call(null,map__14229__$1,new cljs.core.Keyword(null,"shared","shared",4405305303));var target = cljs.core.get.call(null,map__14229__$1,new cljs.core.Keyword(null,"target","target",4427965699));if(!((target == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"target","target",1773529930,null)))))].join('')));
}
var roots_SINGLEQUOTE__14231 = cljs.core.deref.call(null,om.core.roots);if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__14231,target))
{cljs.core.get.call(null,roots_SINGLEQUOTE__14231,target).call(null);
} else
{}
var state = (((value instanceof cljs.core.Atom))?value:cljs.core.atom.call(null,value));var state__$1 = (function (){var x14230 = state;x14230.om$core$INotify$ = true;
x14230.om$core$INotify$_notify$arity$3 = ((function (x14230,state){
return (function (_,tx_data,root_cursor){var ___$1 = this;if((tx_listen == null))
{return null;
} else
{return tx_listen.call(null,tx_data,root_cursor);
}
});})(x14230,state))
;
return x14230;
})();var rootf = ((function (state,state__$1){
return (function rootf(){cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);
var value__$1 = cljs.core.deref.call(null,state__$1);var cursor = om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY);return React.renderComponent(om.core.build.call(null,f,cursor,cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",4427965699),new cljs.core.Keyword(null,"tx-listen","tx-listen",666878114))),target);
});})(state,state__$1))
;var watch_key = cljs.core.gensym.call(null);cljs.core.add_watch.call(null,state__$1,watch_key,(function (_,___$1,___$2,___$3){if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf))
{} else
{cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}
if(cljs.core.truth_(om.core.refresh_queued))
{return null;
} else
{om.core.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame(om.core.render_all);
} else
{return setTimeout(om.core.render_all,16);
}
}
}));
cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,(function (){cljs.core.remove_watch.call(null,state__$1,watch_key);
cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);
return React.unmountComponentAtNode(target);
}));
return rootf.call(null);
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){return transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){return transact_BANG_.call(null,cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){var korks__$1 = ((!(cljs.core.sequential_QMARK_.call(null,korks)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null):korks);var tx_data = om.core._transact_BANG_.call(null,cursor,korks__$1,f);if(!((tag == null)))
{return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",1014018828),tag));
} else
{return om.core.notify_STAR_.call(null,cursor,tx_data);
}
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){return om.core.transact_BANG_.call(null,cursor,null,(function (_){return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){return om.core.transact_BANG_.call(null,cursor,korks,(function (_){return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){om.core.transact_BANG_.call(null,cursor,korks,(function (_){return v;
}));
return tag;
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function get_node(owner,name){var temp__4092__auto__ = owner.refs;if(cljs.core.truth_(temp__4092__auto__))
{var refs = temp__4092__auto__;return (refs[name]).getDOMNode();
} else
{return null;
}
});
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function set_state_BANG_(owner,korks,v){var _STAR_read_enabled_STAR_14233 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = owner.props;var state = owner.state;var cursor = (props["__om_cursor"]);var path = om.core._path.call(null,cursor);var pstate = (function (){var or__6527__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__6527__auto__))
{return or__6527__auto__;
} else
{return (state["__om_state"]);
}
})();if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{(state["__om_pending_state"] = cljs.core.assoc.call(null,pstate,korks,v));
} else
{(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,korks,v));
}
if(cljs.core.empty_QMARK_.call(null,path))
{return cljs.core.swap_BANG_.call(null,om.core._state.call(null,cursor),cljs.core.clone);
} else
{return cljs.core.swap_BANG_.call(null,om.core._state.call(null,cursor),cljs.core.update_in,path,cljs.core.clone);
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_14233;
}});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){return (owner.state["__om_state"]);
});
var get_render_state__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.get.call(null,get_render_state.call(null,owner),korks);
} else
{if(cljs.core.empty_QMARK_.call(null,korks))
{return get_render_state.call(null,owner);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get_in.call(null,get_render_state.call(null,owner),korks);
} else
{return null;
}
}
}
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;
/**
* Create a cursor instance by attaching to an existing cursor. This
* supports building components which don't need to set app state but
* need to be added to the render tree.
*/
om.core.graft = (function graft(value,cursor){var state = om.core._state.call(null,cursor);var path = om.core._path.call(null,cursor);if(om.core.cursor_QMARK_.call(null,value))
{throw (new Error([cljs.core.str(value),cljs.core.str(" is already a cursor.")].join('')));
} else
{var x14235 = cljs.core.clone.call(null,value);x14235.om$core$ICursor$ = true;
x14235.om$core$ICursor$_state$arity$1 = (function (_){var ___$1 = this;return state;
});
x14235.om$core$ICursor$_path$arity$1 = (function (_){var ___$1 = this;return path;
});
x14235.om$core$ITransact$ = true;
x14235.om$core$ITransact$_transact_BANG_$arity$3 = (function (_,___$1,___$2){var ___$3 = this;throw (new Error("Cannot transact on graft"));
});
return x14235;
}
});
