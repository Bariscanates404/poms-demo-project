goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37727 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_37727(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37732 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_37732(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__36522 = coll;
var G__36523 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36522,G__36523) : shadow.dom.lazy_native_coll_seq.call(null,G__36522,G__36523));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__36565 = arguments.length;
switch (G__36565) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__36576 = arguments.length;
switch (G__36576) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__36583 = arguments.length;
switch (G__36583) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__36595 = arguments.length;
switch (G__36595) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__36618 = arguments.length;
switch (G__36618) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__36637 = arguments.length;
switch (G__36637) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e36654){if((e36654 instanceof Object)){
var e = e36654;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36654;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__36672 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36673 = null;
var count__36674 = (0);
var i__36675 = (0);
while(true){
if((i__36675 < count__36674)){
var el = chunk__36673.cljs$core$IIndexed$_nth$arity$2(null,i__36675);
var handler_37764__$1 = ((function (seq__36672,chunk__36673,count__36674,i__36675,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36672,chunk__36673,count__36674,i__36675,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37764__$1);


var G__37765 = seq__36672;
var G__37766 = chunk__36673;
var G__37767 = count__36674;
var G__37768 = (i__36675 + (1));
seq__36672 = G__37765;
chunk__36673 = G__37766;
count__36674 = G__37767;
i__36675 = G__37768;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36672);
if(temp__5804__auto__){
var seq__36672__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36672__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36672__$1);
var G__37771 = cljs.core.chunk_rest(seq__36672__$1);
var G__37772 = c__5568__auto__;
var G__37773 = cljs.core.count(c__5568__auto__);
var G__37774 = (0);
seq__36672 = G__37771;
chunk__36673 = G__37772;
count__36674 = G__37773;
i__36675 = G__37774;
continue;
} else {
var el = cljs.core.first(seq__36672__$1);
var handler_37775__$1 = ((function (seq__36672,chunk__36673,count__36674,i__36675,el,seq__36672__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36672,chunk__36673,count__36674,i__36675,el,seq__36672__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37775__$1);


var G__37776 = cljs.core.next(seq__36672__$1);
var G__37777 = null;
var G__37778 = (0);
var G__37779 = (0);
seq__36672 = G__37776;
chunk__36673 = G__37777;
count__36674 = G__37778;
i__36675 = G__37779;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__36691 = arguments.length;
switch (G__36691) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__36711 = cljs.core.seq(events);
var chunk__36712 = null;
var count__36713 = (0);
var i__36714 = (0);
while(true){
if((i__36714 < count__36713)){
var vec__36729 = chunk__36712.cljs$core$IIndexed$_nth$arity$2(null,i__36714);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36729,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36729,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37786 = seq__36711;
var G__37787 = chunk__36712;
var G__37788 = count__36713;
var G__37789 = (i__36714 + (1));
seq__36711 = G__37786;
chunk__36712 = G__37787;
count__36713 = G__37788;
i__36714 = G__37789;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36711);
if(temp__5804__auto__){
var seq__36711__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36711__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36711__$1);
var G__37791 = cljs.core.chunk_rest(seq__36711__$1);
var G__37792 = c__5568__auto__;
var G__37793 = cljs.core.count(c__5568__auto__);
var G__37794 = (0);
seq__36711 = G__37791;
chunk__36712 = G__37792;
count__36713 = G__37793;
i__36714 = G__37794;
continue;
} else {
var vec__36737 = cljs.core.first(seq__36711__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36737,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36737,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37795 = cljs.core.next(seq__36711__$1);
var G__37796 = null;
var G__37797 = (0);
var G__37798 = (0);
seq__36711 = G__37795;
chunk__36712 = G__37796;
count__36713 = G__37797;
i__36714 = G__37798;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__36748 = cljs.core.seq(styles);
var chunk__36749 = null;
var count__36750 = (0);
var i__36751 = (0);
while(true){
if((i__36751 < count__36750)){
var vec__36766 = chunk__36749.cljs$core$IIndexed$_nth$arity$2(null,i__36751);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36766,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36766,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37803 = seq__36748;
var G__37804 = chunk__36749;
var G__37805 = count__36750;
var G__37806 = (i__36751 + (1));
seq__36748 = G__37803;
chunk__36749 = G__37804;
count__36750 = G__37805;
i__36751 = G__37806;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36748);
if(temp__5804__auto__){
var seq__36748__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36748__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36748__$1);
var G__37808 = cljs.core.chunk_rest(seq__36748__$1);
var G__37809 = c__5568__auto__;
var G__37810 = cljs.core.count(c__5568__auto__);
var G__37811 = (0);
seq__36748 = G__37808;
chunk__36749 = G__37809;
count__36750 = G__37810;
i__36751 = G__37811;
continue;
} else {
var vec__36771 = cljs.core.first(seq__36748__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36771,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36771,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37813 = cljs.core.next(seq__36748__$1);
var G__37814 = null;
var G__37815 = (0);
var G__37816 = (0);
seq__36748 = G__37813;
chunk__36749 = G__37814;
count__36750 = G__37815;
i__36751 = G__37816;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__36781_37818 = key;
var G__36781_37819__$1 = (((G__36781_37818 instanceof cljs.core.Keyword))?G__36781_37818.fqn:null);
switch (G__36781_37819__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_37827 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_37827,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_37827,"aria-");
}
})())){
el.setAttribute(ks_37827,value);
} else {
(el[ks_37827] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__36821){
var map__36822 = p__36821;
var map__36822__$1 = cljs.core.__destructure_map(map__36822);
var props = map__36822__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36822__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__36823 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36823,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36823,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36823,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__36834 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__36834,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__36834;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__36848 = arguments.length;
switch (G__36848) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__36883){
var vec__36884 = p__36883;
var seq__36885 = cljs.core.seq(vec__36884);
var first__36886 = cljs.core.first(seq__36885);
var seq__36885__$1 = cljs.core.next(seq__36885);
var nn = first__36886;
var first__36886__$1 = cljs.core.first(seq__36885__$1);
var seq__36885__$2 = cljs.core.next(seq__36885__$1);
var np = first__36886__$1;
var nc = seq__36885__$2;
var node = vec__36884;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36895 = nn;
var G__36896 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36895,G__36896) : create_fn.call(null,G__36895,G__36896));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36897 = nn;
var G__36898 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36897,G__36898) : create_fn.call(null,G__36897,G__36898));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__36905 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36905,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36905,(1),null);
var seq__36908_37838 = cljs.core.seq(node_children);
var chunk__36909_37839 = null;
var count__36910_37840 = (0);
var i__36911_37841 = (0);
while(true){
if((i__36911_37841 < count__36910_37840)){
var child_struct_37842 = chunk__36909_37839.cljs$core$IIndexed$_nth$arity$2(null,i__36911_37841);
var children_37843 = shadow.dom.dom_node(child_struct_37842);
if(cljs.core.seq_QMARK_(children_37843)){
var seq__36960_37844 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37843));
var chunk__36962_37845 = null;
var count__36963_37846 = (0);
var i__36964_37847 = (0);
while(true){
if((i__36964_37847 < count__36963_37846)){
var child_37848 = chunk__36962_37845.cljs$core$IIndexed$_nth$arity$2(null,i__36964_37847);
if(cljs.core.truth_(child_37848)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37848);


var G__37849 = seq__36960_37844;
var G__37850 = chunk__36962_37845;
var G__37851 = count__36963_37846;
var G__37852 = (i__36964_37847 + (1));
seq__36960_37844 = G__37849;
chunk__36962_37845 = G__37850;
count__36963_37846 = G__37851;
i__36964_37847 = G__37852;
continue;
} else {
var G__37853 = seq__36960_37844;
var G__37854 = chunk__36962_37845;
var G__37855 = count__36963_37846;
var G__37856 = (i__36964_37847 + (1));
seq__36960_37844 = G__37853;
chunk__36962_37845 = G__37854;
count__36963_37846 = G__37855;
i__36964_37847 = G__37856;
continue;
}
} else {
var temp__5804__auto___37857 = cljs.core.seq(seq__36960_37844);
if(temp__5804__auto___37857){
var seq__36960_37858__$1 = temp__5804__auto___37857;
if(cljs.core.chunked_seq_QMARK_(seq__36960_37858__$1)){
var c__5568__auto___37859 = cljs.core.chunk_first(seq__36960_37858__$1);
var G__37860 = cljs.core.chunk_rest(seq__36960_37858__$1);
var G__37861 = c__5568__auto___37859;
var G__37862 = cljs.core.count(c__5568__auto___37859);
var G__37863 = (0);
seq__36960_37844 = G__37860;
chunk__36962_37845 = G__37861;
count__36963_37846 = G__37862;
i__36964_37847 = G__37863;
continue;
} else {
var child_37864 = cljs.core.first(seq__36960_37858__$1);
if(cljs.core.truth_(child_37864)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37864);


var G__37865 = cljs.core.next(seq__36960_37858__$1);
var G__37866 = null;
var G__37867 = (0);
var G__37868 = (0);
seq__36960_37844 = G__37865;
chunk__36962_37845 = G__37866;
count__36963_37846 = G__37867;
i__36964_37847 = G__37868;
continue;
} else {
var G__37869 = cljs.core.next(seq__36960_37858__$1);
var G__37870 = null;
var G__37871 = (0);
var G__37872 = (0);
seq__36960_37844 = G__37869;
chunk__36962_37845 = G__37870;
count__36963_37846 = G__37871;
i__36964_37847 = G__37872;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37843);
}


var G__37873 = seq__36908_37838;
var G__37874 = chunk__36909_37839;
var G__37875 = count__36910_37840;
var G__37876 = (i__36911_37841 + (1));
seq__36908_37838 = G__37873;
chunk__36909_37839 = G__37874;
count__36910_37840 = G__37875;
i__36911_37841 = G__37876;
continue;
} else {
var temp__5804__auto___37880 = cljs.core.seq(seq__36908_37838);
if(temp__5804__auto___37880){
var seq__36908_37881__$1 = temp__5804__auto___37880;
if(cljs.core.chunked_seq_QMARK_(seq__36908_37881__$1)){
var c__5568__auto___37882 = cljs.core.chunk_first(seq__36908_37881__$1);
var G__37883 = cljs.core.chunk_rest(seq__36908_37881__$1);
var G__37884 = c__5568__auto___37882;
var G__37885 = cljs.core.count(c__5568__auto___37882);
var G__37886 = (0);
seq__36908_37838 = G__37883;
chunk__36909_37839 = G__37884;
count__36910_37840 = G__37885;
i__36911_37841 = G__37886;
continue;
} else {
var child_struct_37887 = cljs.core.first(seq__36908_37881__$1);
var children_37888 = shadow.dom.dom_node(child_struct_37887);
if(cljs.core.seq_QMARK_(children_37888)){
var seq__36977_37889 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37888));
var chunk__36979_37890 = null;
var count__36980_37891 = (0);
var i__36981_37892 = (0);
while(true){
if((i__36981_37892 < count__36980_37891)){
var child_37893 = chunk__36979_37890.cljs$core$IIndexed$_nth$arity$2(null,i__36981_37892);
if(cljs.core.truth_(child_37893)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37893);


var G__37894 = seq__36977_37889;
var G__37895 = chunk__36979_37890;
var G__37896 = count__36980_37891;
var G__37897 = (i__36981_37892 + (1));
seq__36977_37889 = G__37894;
chunk__36979_37890 = G__37895;
count__36980_37891 = G__37896;
i__36981_37892 = G__37897;
continue;
} else {
var G__37898 = seq__36977_37889;
var G__37899 = chunk__36979_37890;
var G__37900 = count__36980_37891;
var G__37901 = (i__36981_37892 + (1));
seq__36977_37889 = G__37898;
chunk__36979_37890 = G__37899;
count__36980_37891 = G__37900;
i__36981_37892 = G__37901;
continue;
}
} else {
var temp__5804__auto___37902__$1 = cljs.core.seq(seq__36977_37889);
if(temp__5804__auto___37902__$1){
var seq__36977_37903__$1 = temp__5804__auto___37902__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36977_37903__$1)){
var c__5568__auto___37904 = cljs.core.chunk_first(seq__36977_37903__$1);
var G__37905 = cljs.core.chunk_rest(seq__36977_37903__$1);
var G__37906 = c__5568__auto___37904;
var G__37907 = cljs.core.count(c__5568__auto___37904);
var G__37908 = (0);
seq__36977_37889 = G__37905;
chunk__36979_37890 = G__37906;
count__36980_37891 = G__37907;
i__36981_37892 = G__37908;
continue;
} else {
var child_37909 = cljs.core.first(seq__36977_37903__$1);
if(cljs.core.truth_(child_37909)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37909);


var G__37910 = cljs.core.next(seq__36977_37903__$1);
var G__37911 = null;
var G__37912 = (0);
var G__37913 = (0);
seq__36977_37889 = G__37910;
chunk__36979_37890 = G__37911;
count__36980_37891 = G__37912;
i__36981_37892 = G__37913;
continue;
} else {
var G__37914 = cljs.core.next(seq__36977_37903__$1);
var G__37915 = null;
var G__37916 = (0);
var G__37917 = (0);
seq__36977_37889 = G__37914;
chunk__36979_37890 = G__37915;
count__36980_37891 = G__37916;
i__36981_37892 = G__37917;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37888);
}


var G__37918 = cljs.core.next(seq__36908_37881__$1);
var G__37919 = null;
var G__37920 = (0);
var G__37921 = (0);
seq__36908_37838 = G__37918;
chunk__36909_37839 = G__37919;
count__36910_37840 = G__37920;
i__36911_37841 = G__37921;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__37006 = cljs.core.seq(node);
var chunk__37007 = null;
var count__37008 = (0);
var i__37009 = (0);
while(true){
if((i__37009 < count__37008)){
var n = chunk__37007.cljs$core$IIndexed$_nth$arity$2(null,i__37009);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37926 = seq__37006;
var G__37927 = chunk__37007;
var G__37928 = count__37008;
var G__37929 = (i__37009 + (1));
seq__37006 = G__37926;
chunk__37007 = G__37927;
count__37008 = G__37928;
i__37009 = G__37929;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37006);
if(temp__5804__auto__){
var seq__37006__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37006__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37006__$1);
var G__37930 = cljs.core.chunk_rest(seq__37006__$1);
var G__37931 = c__5568__auto__;
var G__37932 = cljs.core.count(c__5568__auto__);
var G__37933 = (0);
seq__37006 = G__37930;
chunk__37007 = G__37931;
count__37008 = G__37932;
i__37009 = G__37933;
continue;
} else {
var n = cljs.core.first(seq__37006__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37934 = cljs.core.next(seq__37006__$1);
var G__37935 = null;
var G__37936 = (0);
var G__37937 = (0);
seq__37006 = G__37934;
chunk__37007 = G__37935;
count__37008 = G__37936;
i__37009 = G__37937;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__37038 = arguments.length;
switch (G__37038) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__37047 = arguments.length;
switch (G__37047) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__37055 = arguments.length;
switch (G__37055) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37943 = arguments.length;
var i__5770__auto___37944 = (0);
while(true){
if((i__5770__auto___37944 < len__5769__auto___37943)){
args__5775__auto__.push((arguments[i__5770__auto___37944]));

var G__37945 = (i__5770__auto___37944 + (1));
i__5770__auto___37944 = G__37945;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__37122_37950 = cljs.core.seq(nodes);
var chunk__37123_37951 = null;
var count__37124_37952 = (0);
var i__37125_37953 = (0);
while(true){
if((i__37125_37953 < count__37124_37952)){
var node_37954 = chunk__37123_37951.cljs$core$IIndexed$_nth$arity$2(null,i__37125_37953);
fragment.appendChild(shadow.dom._to_dom(node_37954));


var G__37955 = seq__37122_37950;
var G__37956 = chunk__37123_37951;
var G__37957 = count__37124_37952;
var G__37958 = (i__37125_37953 + (1));
seq__37122_37950 = G__37955;
chunk__37123_37951 = G__37956;
count__37124_37952 = G__37957;
i__37125_37953 = G__37958;
continue;
} else {
var temp__5804__auto___37959 = cljs.core.seq(seq__37122_37950);
if(temp__5804__auto___37959){
var seq__37122_37960__$1 = temp__5804__auto___37959;
if(cljs.core.chunked_seq_QMARK_(seq__37122_37960__$1)){
var c__5568__auto___37961 = cljs.core.chunk_first(seq__37122_37960__$1);
var G__37962 = cljs.core.chunk_rest(seq__37122_37960__$1);
var G__37963 = c__5568__auto___37961;
var G__37964 = cljs.core.count(c__5568__auto___37961);
var G__37965 = (0);
seq__37122_37950 = G__37962;
chunk__37123_37951 = G__37963;
count__37124_37952 = G__37964;
i__37125_37953 = G__37965;
continue;
} else {
var node_37966 = cljs.core.first(seq__37122_37960__$1);
fragment.appendChild(shadow.dom._to_dom(node_37966));


var G__37967 = cljs.core.next(seq__37122_37960__$1);
var G__37968 = null;
var G__37969 = (0);
var G__37970 = (0);
seq__37122_37950 = G__37967;
chunk__37123_37951 = G__37968;
count__37124_37952 = G__37969;
i__37125_37953 = G__37970;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37110){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37110));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37155_37972 = cljs.core.seq(scripts);
var chunk__37156_37973 = null;
var count__37157_37974 = (0);
var i__37158_37975 = (0);
while(true){
if((i__37158_37975 < count__37157_37974)){
var vec__37177_37976 = chunk__37156_37973.cljs$core$IIndexed$_nth$arity$2(null,i__37158_37975);
var script_tag_37977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37177_37976,(0),null);
var script_body_37978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37177_37976,(1),null);
eval(script_body_37978);


var G__37980 = seq__37155_37972;
var G__37981 = chunk__37156_37973;
var G__37982 = count__37157_37974;
var G__37983 = (i__37158_37975 + (1));
seq__37155_37972 = G__37980;
chunk__37156_37973 = G__37981;
count__37157_37974 = G__37982;
i__37158_37975 = G__37983;
continue;
} else {
var temp__5804__auto___37984 = cljs.core.seq(seq__37155_37972);
if(temp__5804__auto___37984){
var seq__37155_37986__$1 = temp__5804__auto___37984;
if(cljs.core.chunked_seq_QMARK_(seq__37155_37986__$1)){
var c__5568__auto___37987 = cljs.core.chunk_first(seq__37155_37986__$1);
var G__37988 = cljs.core.chunk_rest(seq__37155_37986__$1);
var G__37989 = c__5568__auto___37987;
var G__37990 = cljs.core.count(c__5568__auto___37987);
var G__37991 = (0);
seq__37155_37972 = G__37988;
chunk__37156_37973 = G__37989;
count__37157_37974 = G__37990;
i__37158_37975 = G__37991;
continue;
} else {
var vec__37184_37993 = cljs.core.first(seq__37155_37986__$1);
var script_tag_37994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37184_37993,(0),null);
var script_body_37995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37184_37993,(1),null);
eval(script_body_37995);


var G__37996 = cljs.core.next(seq__37155_37986__$1);
var G__37997 = null;
var G__37998 = (0);
var G__37999 = (0);
seq__37155_37972 = G__37996;
chunk__37156_37973 = G__37997;
count__37157_37974 = G__37998;
i__37158_37975 = G__37999;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37191){
var vec__37192 = p__37191;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37192,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37192,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37207 = arguments.length;
switch (G__37207) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__37242 = cljs.core.seq(style_keys);
var chunk__37243 = null;
var count__37244 = (0);
var i__37245 = (0);
while(true){
if((i__37245 < count__37244)){
var it = chunk__37243.cljs$core$IIndexed$_nth$arity$2(null,i__37245);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38004 = seq__37242;
var G__38005 = chunk__37243;
var G__38006 = count__37244;
var G__38007 = (i__37245 + (1));
seq__37242 = G__38004;
chunk__37243 = G__38005;
count__37244 = G__38006;
i__37245 = G__38007;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37242);
if(temp__5804__auto__){
var seq__37242__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37242__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37242__$1);
var G__38008 = cljs.core.chunk_rest(seq__37242__$1);
var G__38009 = c__5568__auto__;
var G__38010 = cljs.core.count(c__5568__auto__);
var G__38011 = (0);
seq__37242 = G__38008;
chunk__37243 = G__38009;
count__37244 = G__38010;
i__37245 = G__38011;
continue;
} else {
var it = cljs.core.first(seq__37242__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38012 = cljs.core.next(seq__37242__$1);
var G__38013 = null;
var G__38014 = (0);
var G__38015 = (0);
seq__37242 = G__38012;
chunk__37243 = G__38013;
count__37244 = G__38014;
i__37245 = G__38015;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37258,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37277 = k37258;
var G__37277__$1 = (((G__37277 instanceof cljs.core.Keyword))?G__37277.fqn:null);
switch (G__37277__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37258,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37284){
var vec__37285 = p__37284;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37285,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37285,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37257){
var self__ = this;
var G__37257__$1 = this;
return (new cljs.core.RecordIter((0),G__37257__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37259,other37260){
var self__ = this;
var this37259__$1 = this;
return (((!((other37260 == null)))) && ((((this37259__$1.constructor === other37260.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37259__$1.x,other37260.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37259__$1.y,other37260.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37259__$1.__extmap,other37260.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37258){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37305 = k37258;
var G__37305__$1 = (((G__37305 instanceof cljs.core.Keyword))?G__37305.fqn:null);
switch (G__37305__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37258);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37257){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37309 = cljs.core.keyword_identical_QMARK_;
var expr__37310 = k__5352__auto__;
if(cljs.core.truth_((pred__37309.cljs$core$IFn$_invoke$arity$2 ? pred__37309.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__37310) : pred__37309.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__37310)))){
return (new shadow.dom.Coordinate(G__37257,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37309.cljs$core$IFn$_invoke$arity$2 ? pred__37309.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__37310) : pred__37309.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__37310)))){
return (new shadow.dom.Coordinate(self__.x,G__37257,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37257),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37257){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37257,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37270){
var extmap__5385__auto__ = (function (){var G__37340 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37270,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37270)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37340);
} else {
return G__37340;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37270),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37270),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37363,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37374 = k37363;
var G__37374__$1 = (((G__37374 instanceof cljs.core.Keyword))?G__37374.fqn:null);
switch (G__37374__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37363,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37377){
var vec__37378 = p__37377;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37378,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37378,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37362){
var self__ = this;
var G__37362__$1 = this;
return (new cljs.core.RecordIter((0),G__37362__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37364,other37365){
var self__ = this;
var this37364__$1 = this;
return (((!((other37365 == null)))) && ((((this37364__$1.constructor === other37365.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37364__$1.w,other37365.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37364__$1.h,other37365.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37364__$1.__extmap,other37365.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37363){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37440 = k37363;
var G__37440__$1 = (((G__37440 instanceof cljs.core.Keyword))?G__37440.fqn:null);
switch (G__37440__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37363);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37362){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37443 = cljs.core.keyword_identical_QMARK_;
var expr__37444 = k__5352__auto__;
if(cljs.core.truth_((pred__37443.cljs$core$IFn$_invoke$arity$2 ? pred__37443.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__37444) : pred__37443.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__37444)))){
return (new shadow.dom.Size(G__37362,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37443.cljs$core$IFn$_invoke$arity$2 ? pred__37443.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__37444) : pred__37443.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__37444)))){
return (new shadow.dom.Size(self__.w,G__37362,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37362),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37362){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37362,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37367){
var extmap__5385__auto__ = (function (){var G__37479 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37367,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37367)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37479);
} else {
return G__37479;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37367),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37367),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__38052 = (i + (1));
var G__38053 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__38052;
ret = G__38053;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37514){
var vec__37516 = p__37514;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37516,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37516,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37525 = arguments.length;
switch (G__37525) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__38059 = ps;
var G__38060 = (i + (1));
el__$1 = G__38059;
i = G__38060;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37555 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37555,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37555,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37555,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37558_38073 = cljs.core.seq(props);
var chunk__37559_38074 = null;
var count__37560_38075 = (0);
var i__37561_38076 = (0);
while(true){
if((i__37561_38076 < count__37560_38075)){
var vec__37580_38077 = chunk__37559_38074.cljs$core$IIndexed$_nth$arity$2(null,i__37561_38076);
var k_38078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37580_38077,(0),null);
var v_38079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37580_38077,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_38078);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38078),v_38079);


var G__38087 = seq__37558_38073;
var G__38088 = chunk__37559_38074;
var G__38089 = count__37560_38075;
var G__38090 = (i__37561_38076 + (1));
seq__37558_38073 = G__38087;
chunk__37559_38074 = G__38088;
count__37560_38075 = G__38089;
i__37561_38076 = G__38090;
continue;
} else {
var temp__5804__auto___38092 = cljs.core.seq(seq__37558_38073);
if(temp__5804__auto___38092){
var seq__37558_38093__$1 = temp__5804__auto___38092;
if(cljs.core.chunked_seq_QMARK_(seq__37558_38093__$1)){
var c__5568__auto___38094 = cljs.core.chunk_first(seq__37558_38093__$1);
var G__38095 = cljs.core.chunk_rest(seq__37558_38093__$1);
var G__38096 = c__5568__auto___38094;
var G__38097 = cljs.core.count(c__5568__auto___38094);
var G__38098 = (0);
seq__37558_38073 = G__38095;
chunk__37559_38074 = G__38096;
count__37560_38075 = G__38097;
i__37561_38076 = G__38098;
continue;
} else {
var vec__37584_38099 = cljs.core.first(seq__37558_38093__$1);
var k_38100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37584_38099,(0),null);
var v_38101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37584_38099,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_38100);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38100),v_38101);


var G__38111 = cljs.core.next(seq__37558_38093__$1);
var G__38112 = null;
var G__38113 = (0);
var G__38114 = (0);
seq__37558_38073 = G__38111;
chunk__37559_38074 = G__38112;
count__37560_38075 = G__38113;
i__37561_38076 = G__38114;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__37594 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37594,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37594,(1),null);
var seq__37597_38117 = cljs.core.seq(node_children);
var chunk__37599_38118 = null;
var count__37600_38119 = (0);
var i__37601_38120 = (0);
while(true){
if((i__37601_38120 < count__37600_38119)){
var child_struct_38121 = chunk__37599_38118.cljs$core$IIndexed$_nth$arity$2(null,i__37601_38120);
if((!((child_struct_38121 == null)))){
if(typeof child_struct_38121 === 'string'){
var text_38122 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38122),child_struct_38121].join(''));
} else {
var children_38124 = shadow.dom.svg_node(child_struct_38121);
if(cljs.core.seq_QMARK_(children_38124)){
var seq__37631_38129 = cljs.core.seq(children_38124);
var chunk__37633_38130 = null;
var count__37634_38131 = (0);
var i__37635_38132 = (0);
while(true){
if((i__37635_38132 < count__37634_38131)){
var child_38134 = chunk__37633_38130.cljs$core$IIndexed$_nth$arity$2(null,i__37635_38132);
if(cljs.core.truth_(child_38134)){
node.appendChild(child_38134);


var G__38139 = seq__37631_38129;
var G__38140 = chunk__37633_38130;
var G__38141 = count__37634_38131;
var G__38142 = (i__37635_38132 + (1));
seq__37631_38129 = G__38139;
chunk__37633_38130 = G__38140;
count__37634_38131 = G__38141;
i__37635_38132 = G__38142;
continue;
} else {
var G__38144 = seq__37631_38129;
var G__38145 = chunk__37633_38130;
var G__38146 = count__37634_38131;
var G__38147 = (i__37635_38132 + (1));
seq__37631_38129 = G__38144;
chunk__37633_38130 = G__38145;
count__37634_38131 = G__38146;
i__37635_38132 = G__38147;
continue;
}
} else {
var temp__5804__auto___38148 = cljs.core.seq(seq__37631_38129);
if(temp__5804__auto___38148){
var seq__37631_38149__$1 = temp__5804__auto___38148;
if(cljs.core.chunked_seq_QMARK_(seq__37631_38149__$1)){
var c__5568__auto___38150 = cljs.core.chunk_first(seq__37631_38149__$1);
var G__38152 = cljs.core.chunk_rest(seq__37631_38149__$1);
var G__38153 = c__5568__auto___38150;
var G__38154 = cljs.core.count(c__5568__auto___38150);
var G__38155 = (0);
seq__37631_38129 = G__38152;
chunk__37633_38130 = G__38153;
count__37634_38131 = G__38154;
i__37635_38132 = G__38155;
continue;
} else {
var child_38156 = cljs.core.first(seq__37631_38149__$1);
if(cljs.core.truth_(child_38156)){
node.appendChild(child_38156);


var G__38157 = cljs.core.next(seq__37631_38149__$1);
var G__38158 = null;
var G__38159 = (0);
var G__38160 = (0);
seq__37631_38129 = G__38157;
chunk__37633_38130 = G__38158;
count__37634_38131 = G__38159;
i__37635_38132 = G__38160;
continue;
} else {
var G__38161 = cljs.core.next(seq__37631_38149__$1);
var G__38162 = null;
var G__38163 = (0);
var G__38164 = (0);
seq__37631_38129 = G__38161;
chunk__37633_38130 = G__38162;
count__37634_38131 = G__38163;
i__37635_38132 = G__38164;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38124);
}
}


var G__38165 = seq__37597_38117;
var G__38166 = chunk__37599_38118;
var G__38167 = count__37600_38119;
var G__38168 = (i__37601_38120 + (1));
seq__37597_38117 = G__38165;
chunk__37599_38118 = G__38166;
count__37600_38119 = G__38167;
i__37601_38120 = G__38168;
continue;
} else {
var G__38169 = seq__37597_38117;
var G__38170 = chunk__37599_38118;
var G__38171 = count__37600_38119;
var G__38172 = (i__37601_38120 + (1));
seq__37597_38117 = G__38169;
chunk__37599_38118 = G__38170;
count__37600_38119 = G__38171;
i__37601_38120 = G__38172;
continue;
}
} else {
var temp__5804__auto___38173 = cljs.core.seq(seq__37597_38117);
if(temp__5804__auto___38173){
var seq__37597_38174__$1 = temp__5804__auto___38173;
if(cljs.core.chunked_seq_QMARK_(seq__37597_38174__$1)){
var c__5568__auto___38175 = cljs.core.chunk_first(seq__37597_38174__$1);
var G__38176 = cljs.core.chunk_rest(seq__37597_38174__$1);
var G__38177 = c__5568__auto___38175;
var G__38178 = cljs.core.count(c__5568__auto___38175);
var G__38179 = (0);
seq__37597_38117 = G__38176;
chunk__37599_38118 = G__38177;
count__37600_38119 = G__38178;
i__37601_38120 = G__38179;
continue;
} else {
var child_struct_38180 = cljs.core.first(seq__37597_38174__$1);
if((!((child_struct_38180 == null)))){
if(typeof child_struct_38180 === 'string'){
var text_38185 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38185),child_struct_38180].join(''));
} else {
var children_38186 = shadow.dom.svg_node(child_struct_38180);
if(cljs.core.seq_QMARK_(children_38186)){
var seq__37654_38187 = cljs.core.seq(children_38186);
var chunk__37656_38188 = null;
var count__37657_38189 = (0);
var i__37658_38190 = (0);
while(true){
if((i__37658_38190 < count__37657_38189)){
var child_38191 = chunk__37656_38188.cljs$core$IIndexed$_nth$arity$2(null,i__37658_38190);
if(cljs.core.truth_(child_38191)){
node.appendChild(child_38191);


var G__38192 = seq__37654_38187;
var G__38193 = chunk__37656_38188;
var G__38194 = count__37657_38189;
var G__38195 = (i__37658_38190 + (1));
seq__37654_38187 = G__38192;
chunk__37656_38188 = G__38193;
count__37657_38189 = G__38194;
i__37658_38190 = G__38195;
continue;
} else {
var G__38196 = seq__37654_38187;
var G__38197 = chunk__37656_38188;
var G__38198 = count__37657_38189;
var G__38199 = (i__37658_38190 + (1));
seq__37654_38187 = G__38196;
chunk__37656_38188 = G__38197;
count__37657_38189 = G__38198;
i__37658_38190 = G__38199;
continue;
}
} else {
var temp__5804__auto___38200__$1 = cljs.core.seq(seq__37654_38187);
if(temp__5804__auto___38200__$1){
var seq__37654_38201__$1 = temp__5804__auto___38200__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37654_38201__$1)){
var c__5568__auto___38203 = cljs.core.chunk_first(seq__37654_38201__$1);
var G__38204 = cljs.core.chunk_rest(seq__37654_38201__$1);
var G__38205 = c__5568__auto___38203;
var G__38206 = cljs.core.count(c__5568__auto___38203);
var G__38207 = (0);
seq__37654_38187 = G__38204;
chunk__37656_38188 = G__38205;
count__37657_38189 = G__38206;
i__37658_38190 = G__38207;
continue;
} else {
var child_38208 = cljs.core.first(seq__37654_38201__$1);
if(cljs.core.truth_(child_38208)){
node.appendChild(child_38208);


var G__38209 = cljs.core.next(seq__37654_38201__$1);
var G__38210 = null;
var G__38211 = (0);
var G__38212 = (0);
seq__37654_38187 = G__38209;
chunk__37656_38188 = G__38210;
count__37657_38189 = G__38211;
i__37658_38190 = G__38212;
continue;
} else {
var G__38213 = cljs.core.next(seq__37654_38201__$1);
var G__38214 = null;
var G__38215 = (0);
var G__38216 = (0);
seq__37654_38187 = G__38213;
chunk__37656_38188 = G__38214;
count__37657_38189 = G__38215;
i__37658_38190 = G__38216;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38186);
}
}


var G__38217 = cljs.core.next(seq__37597_38174__$1);
var G__38218 = null;
var G__38219 = (0);
var G__38220 = (0);
seq__37597_38117 = G__38217;
chunk__37599_38118 = G__38218;
count__37600_38119 = G__38219;
i__37601_38120 = G__38220;
continue;
} else {
var G__38221 = cljs.core.next(seq__37597_38174__$1);
var G__38222 = null;
var G__38223 = (0);
var G__38224 = (0);
seq__37597_38117 = G__38221;
chunk__37599_38118 = G__38222;
count__37600_38119 = G__38223;
i__37601_38120 = G__38224;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38225 = arguments.length;
var i__5770__auto___38226 = (0);
while(true){
if((i__5770__auto___38226 < len__5769__auto___38225)){
args__5775__auto__.push((arguments[i__5770__auto___38226]));

var G__38229 = (i__5770__auto___38226 + (1));
i__5770__auto___38226 = G__38229;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37669){
var G__37670 = cljs.core.first(seq37669);
var seq37669__$1 = cljs.core.next(seq37669);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37670,seq37669__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__37676 = arguments.length;
switch (G__37676) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__33273__auto___38245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33274__auto__ = (function (){var switch__33080__auto__ = (function (state_37691){
var state_val_37692 = (state_37691[(1)]);
if((state_val_37692 === (1))){
var state_37691__$1 = state_37691;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37691__$1,(2),once_or_cleanup);
} else {
if((state_val_37692 === (2))){
var inst_37688 = (state_37691[(2)]);
var inst_37689 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37691__$1 = (function (){var statearr_37696 = state_37691;
(statearr_37696[(7)] = inst_37688);

return statearr_37696;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37691__$1,inst_37689);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33081__auto__ = null;
var shadow$dom$state_machine__33081__auto____0 = (function (){
var statearr_37698 = [null,null,null,null,null,null,null,null];
(statearr_37698[(0)] = shadow$dom$state_machine__33081__auto__);

(statearr_37698[(1)] = (1));

return statearr_37698;
});
var shadow$dom$state_machine__33081__auto____1 = (function (state_37691){
while(true){
var ret_value__33082__auto__ = (function (){try{while(true){
var result__33083__auto__ = switch__33080__auto__(state_37691);
if(cljs.core.keyword_identical_QMARK_(result__33083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33083__auto__;
}
break;
}
}catch (e37704){var ex__33084__auto__ = e37704;
var statearr_37705_38248 = state_37691;
(statearr_37705_38248[(2)] = ex__33084__auto__);


if(cljs.core.seq((state_37691[(4)]))){
var statearr_37708_38250 = state_37691;
(statearr_37708_38250[(1)] = cljs.core.first((state_37691[(4)])));

} else {
throw ex__33084__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38253 = state_37691;
state_37691 = G__38253;
continue;
} else {
return ret_value__33082__auto__;
}
break;
}
});
shadow$dom$state_machine__33081__auto__ = function(state_37691){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33081__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33081__auto____1.call(this,state_37691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33081__auto____0;
shadow$dom$state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33081__auto____1;
return shadow$dom$state_machine__33081__auto__;
})()
})();
var state__33275__auto__ = (function (){var statearr_37709 = f__33274__auto__();
(statearr_37709[(6)] = c__33273__auto___38245);

return statearr_37709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33275__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
