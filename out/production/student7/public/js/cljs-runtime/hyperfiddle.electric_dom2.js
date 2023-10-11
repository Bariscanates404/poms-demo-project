goog.provide('hyperfiddle.electric_dom2');
goog.scope(function(){
  hyperfiddle.electric_dom2.goog$module$goog$object = goog.module.get('goog.object');
});
hyperfiddle.electric_dom2.nil_subject = (function hyperfiddle$electric_dom2$nil_subject(_BANG_){
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(null) : _BANG_.call(null,null));

return (function (){
return cljs.core.List.EMPTY;
});
});
hyperfiddle.electric_dom2.unsupported = (function hyperfiddle$electric_dom2$unsupported(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53649 = arguments.length;
var i__5770__auto___53650 = (0);
while(true){
if((i__5770__auto___53650 < len__5769__auto___53649)){
args__5775__auto__.push((arguments[i__5770__auto___53650]));

var G__53651 = (i__5770__auto___53650 + (1));
i__5770__auto___53650 = G__53651;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return hyperfiddle.electric_dom2.unsupported.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(hyperfiddle.electric_dom2.unsupported.cljs$core$IFn$_invoke$arity$variadic = (function (_){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not available on this peer.",cljs.core.PersistentArrayMap.EMPTY);
}));

(hyperfiddle.electric_dom2.unsupported.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hyperfiddle.electric_dom2.unsupported.cljs$lang$applyTo = (function (seq53603){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53603));
}));

/**
 * See `with`
 */
hyperfiddle.electric_dom2.hook = (function() {
var hyperfiddle$electric_dom2$hook = null;
var hyperfiddle$electric_dom2$hook__1 = (function (x){
var G__53607 = x.parentNode;
if((G__53607 == null)){
return null;
} else {
return G__53607.removeChild(x);
}
});
var hyperfiddle$electric_dom2$hook__2 = (function (x,y){
return x.parentNode.insertBefore(x,y);
});
hyperfiddle$electric_dom2$hook = function(x,y){
switch(arguments.length){
case 1:
return hyperfiddle$electric_dom2$hook__1.call(this,x);
case 2:
return hyperfiddle$electric_dom2$hook__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hyperfiddle$electric_dom2$hook.cljs$core$IFn$_invoke$arity$1 = hyperfiddle$electric_dom2$hook__1;
hyperfiddle$electric_dom2$hook.cljs$core$IFn$_invoke$arity$2 = hyperfiddle$electric_dom2$hook__2;
return hyperfiddle$electric_dom2$hook;
})()
;
hyperfiddle.electric_dom2.by_id = (function hyperfiddle$electric_dom2$by_id(id){
return document.getElementById(id);
});
hyperfiddle.electric_dom2.new_node = (function hyperfiddle$electric_dom2$new_node(parent,type){
var el = (function (){var G__53609 = type;
var G__53609__$1 = (((G__53609 instanceof cljs.core.Keyword))?G__53609.fqn:null);
switch (G__53609__$1) {
case "comment":
return document.createComment("");

break;
case "text":
return goog.dom.createTextNode("");

break;
default:
return goog.dom.createElement(type);

}
})();
parent.appendChild(el);

return el;
});
hyperfiddle.electric_dom2._googDomSetTextContentNoWarn = (function hyperfiddle$electric_dom2$_googDomSetTextContentNoWarn(node,str){
return goog.dom.setTextContent(node,str);
});
hyperfiddle.electric_dom2.SVG_NS = "http://www.w3.org/2000/svg";
hyperfiddle.electric_dom2.XLINK_NS = "http://www.w3.org/1999/xlink";
hyperfiddle.electric_dom2.alias__GT_ns = new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null);
hyperfiddle.electric_dom2.attr_alias = (function hyperfiddle$electric_dom2$attr_alias(attr){
return cljs.core.second(cljs.core.re_find(/^([^:]+):/,cljs.core.name(attr)));
});
hyperfiddle.electric_dom2.resolve_attr_alias = (function hyperfiddle$electric_dom2$resolve_attr_alias(attr){
var attr__$1 = cljs.core.name(attr);
var temp__5802__auto__ = hyperfiddle.electric_dom2.attr_alias(attr__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var alias = temp__5802__auto__;
var attr__$2 = clojure.string.replace_first(clojure.string.replace_first(attr__$1,alias,""),/^:/,"");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hyperfiddle.electric_dom2.alias__GT_ns.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric_dom2.alias__GT_ns.cljs$core$IFn$_invoke$arity$1(alias) : hyperfiddle.electric_dom2.alias__GT_ns.call(null,alias)),attr__$2], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr__$1], null);
}
});
hyperfiddle.electric_dom2.set_attribute_ns = (function hyperfiddle$electric_dom2$set_attribute_ns(var_args){
var G__53616 = arguments.length;
switch (G__53616) {
case 3:
return hyperfiddle.electric_dom2.set_attribute_ns.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric_dom2.set_attribute_ns.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric_dom2.set_attribute_ns.cljs$core$IFn$_invoke$arity$3 = (function (node,attr,v){
var vec__53617 = hyperfiddle.electric_dom2.resolve_attr_alias(attr);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53617,(0),null);
var attr__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53617,(1),null);
return hyperfiddle.electric_dom2.set_attribute_ns.cljs$core$IFn$_invoke$arity$4(node,ns,attr__$1,v);
}));

(hyperfiddle.electric_dom2.set_attribute_ns.cljs$core$IFn$_invoke$arity$4 = (function (node,ns,attr,v){
return node.setAttributeNS(ns,attr,v);
}));

(hyperfiddle.electric_dom2.set_attribute_ns.cljs$lang$maxFixedArity = 4);

hyperfiddle.electric_dom2.set_property_BANG_ = (function hyperfiddle$electric_dom2$set_property_BANG_(var_args){
var G__53621 = arguments.length;
switch (G__53621) {
case 3:
return hyperfiddle.electric_dom2.set_property_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric_dom2.set_property_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric_dom2.set_property_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (node,k,v){
return hyperfiddle.electric_dom2.set_property_BANG_.cljs$core$IFn$_invoke$arity$4(node,node.namespaceURI,k,v);
}));

(hyperfiddle.electric_dom2.set_property_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (node,ns,k,v){
var k__$1 = cljs.core.name(k);
var v__$1 = cljs.core.clj__GT_js(v);
if(cljs.core.truth_((function (){var and__5043__auto__ = (v__$1 == null);
if(and__5043__auto__){
return node.hasAttributeNS(null,k__$1);
} else {
return and__5043__auto__;
}
})())){
return node.removeAttributeNS(null,k__$1);
} else {
var G__53622 = k__$1;
switch (G__53622) {
case "style":
return goog.style.setStyle(node,v__$1);

break;
case "list":
return hyperfiddle.electric_dom2.set_attribute_ns.cljs$core$IFn$_invoke$arity$4(node,null,k__$1,v__$1);

break;
default:
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("http://www.w3.org/2000/svg",ns)) || ((!((hyperfiddle.electric_dom2.goog$module$goog$object.get(goog.dom.DIRECT_ATTRIBUTE_MAP_,k__$1) == null)))))){
return hyperfiddle.electric_dom2.set_attribute_ns.cljs$core$IFn$_invoke$arity$3(node,k__$1,v__$1);
} else {
if(cljs.core.truth_(hyperfiddle.electric_dom2.goog$module$goog$object.containsKey(node,k__$1))){
return hyperfiddle.electric_dom2.goog$module$goog$object.set(node,k__$1,v__$1);
} else {
return hyperfiddle.electric_dom2.set_attribute_ns.cljs$core$IFn$_invoke$arity$3(node,k__$1,v__$1);
}
}

}
}
}));

(hyperfiddle.electric_dom2.set_property_BANG_.cljs$lang$maxFixedArity = 4);

hyperfiddle.electric_dom2.unmount_prop = (function hyperfiddle$electric_dom2$unmount_prop(node,k,v){
return missionary.core.observe((function (_BANG_){
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(null) : _BANG_.call(null,null));

return (function (){
return hyperfiddle.electric_dom2.set_property_BANG_.cljs$core$IFn$_invoke$arity$3(node,k,v);
});
}));
});
/**
 * Due to a bug in both Webkit and FF, input type range's knob renders in the
 *   wrong place if value is set after `min` and `max`, and `max` is above 100.
 *   Other UI libs circumvent this issue by setting `value` last.
 */
hyperfiddle.electric_dom2.LAST_PROPS = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("hyperfiddle.electric-dom2","value","hyperfiddle.electric-dom2/value",1801998999)], null);
/**
 * Sort props by key to ensure they are applied in a predefined order. See `LAST-PROPS`.
 */
hyperfiddle.electric_dom2.ordered_props = (function hyperfiddle$electric_dom2$ordered_props(props_map){
var props = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,props_map,hyperfiddle.electric_dom2.LAST_PROPS);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(props),cljs.core.seq(cljs.core.select_keys(props_map,hyperfiddle.electric_dom2.LAST_PROPS)));
});
hyperfiddle.electric_dom2.parse_class = (function hyperfiddle$electric_dom2$parse_class(xs){
if(((typeof xs === 'string') || ((((xs instanceof cljs.core.Keyword)) || ((xs instanceof cljs.core.Symbol)))))){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(xs),/\s+/);
} else {
if(((cljs.core.vector_QMARK_(xs)) || (((cljs.core.seq_QMARK_(xs)) || (((cljs.core.list_QMARK_(xs)) || (cljs.core.set_QMARK_(xs)))))))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric_dom2.parse_class),cljs.core.distinct.cljs$core$IFn$_invoke$arity$0()),xs);
} else {
if((xs == null)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("don't know how to parse into a classlist",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),xs], null));

}
}
}
});
hyperfiddle.electric_dom2.generated__hyperfiddle_electric_dom2_145 = (function hyperfiddle$electric_dom2$generated__hyperfiddle_electric_dom2_145(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric_dom2 !== 'undefined') && (typeof hyperfiddle.electric_dom2.t_hyperfiddle$electric_dom253626 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric_dom2.t_hyperfiddle$electric_dom253626 = (function (meta53627){
this.meta53627 = meta53627;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric_dom2.t_hyperfiddle$electric_dom253626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53628,meta53627__$1){
var self__ = this;
var _53628__$1 = this;
return (new hyperfiddle.electric_dom2.t_hyperfiddle$electric_dom253626(meta53627__$1));
}));

(hyperfiddle.electric_dom2.t_hyperfiddle$electric_dom253626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53628){
var self__ = this;
var _53628__$1 = this;
return self__.meta53627;
}));

(hyperfiddle.electric_dom2.t_hyperfiddle$electric_dom253626.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric_dom2.t_hyperfiddle$electric_dom253626.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__53630 = (arguments.length - (1));
switch (G__53630) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric_dom2.t_hyperfiddle$electric_dom253626.prototype.apply = (function (self__,args53629){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args53629)));
}));

(hyperfiddle.electric_dom2.t_hyperfiddle$electric_dom253626.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_53625){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(11,done_53625);
try{var values__10703__auto___53663 = (new cljs.core.List(null,hyperfiddle.electric_dom2.parse_class("a"),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a"], null),null,(1),null)),(2),null));
var result__10704__auto___53664 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53663);
if(cljs.core.truth_(result__10704__auto___53664)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),"a"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53663),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),"a"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53663),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53663);
}catch (e53631){var t__10691__auto___53666 = e53631;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),"a"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a"], null)),null,t__10691__auto___53666,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___53667 = (new cljs.core.List(null,hyperfiddle.electric_dom2.parse_class(new cljs.core.Keyword(null,"a","a",-2123407586)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a"], null),null,(1),null)),(2),null));
var result__10704__auto___53668 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53667);
if(cljs.core.truth_(result__10704__auto___53668)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),new cljs.core.Keyword(null,"a","a",-2123407586)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53667),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),new cljs.core.Keyword(null,"a","a",-2123407586)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53667),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53667);
}catch (e53632){var t__10691__auto___53672 = e53632;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),new cljs.core.Keyword(null,"a","a",-2123407586)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a"], null)),null,t__10691__auto___53672,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___53675 = (new cljs.core.List(null,hyperfiddle.electric_dom2.parse_class(new cljs.core.Symbol("a","b","a/b",-1172211204,null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b"], null),null,(1),null)),(2),null));
var result__10704__auto___53676 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53675);
if(cljs.core.truth_(result__10704__auto___53676)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("a","b","a/b",-1172211204,null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53675),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("a","b","a/b",-1172211204,null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53675),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53675);
}catch (e53633){var t__10691__auto___53677 = e53633;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("a","b","a/b",-1172211204,null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b"], null)),null,t__10691__auto___53677,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___53678 = (new cljs.core.List(null,hyperfiddle.electric_dom2.parse_class("a b"),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null),null,(1),null)),(2),null));
var result__10704__auto___53679 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53678);
if(cljs.core.truth_(result__10704__auto___53679)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),"a b"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53678),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),"a b"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53678),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53678);
}catch (e53634){var t__10691__auto___53684 = e53634;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),"a b"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null)),null,t__10691__auto___53684,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___53689 = (new cljs.core.List(null,hyperfiddle.electric_dom2.parse_class(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a"], null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a"], null),null,(1),null)),(2),null));
var result__10704__auto___53690 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53689);
if(cljs.core.truth_(result__10704__auto___53690)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53689),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53689),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53689);
}catch (e53635){var t__10691__auto___53695 = e53635;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a"], null)),null,t__10691__auto___53695,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___53700 = (new cljs.core.List(null,hyperfiddle.electric_dom2.parse_class(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","a"], null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null),null,(1),null)),(2),null));
var result__10704__auto___53701 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53700);
if(cljs.core.truth_(result__10704__auto___53701)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","a"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53700),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","a"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53700),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53700);
}catch (e53636){var t__10691__auto___53705 = e53636;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","a"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null)),null,t__10691__auto___53705,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___53707 = (new cljs.core.List(null,hyperfiddle.electric_dom2.parse_class(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null),null,(1),null)),(2),null));
var result__10704__auto___53708 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53707);
if(cljs.core.truth_(result__10704__auto___53708)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53707),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53707),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53707);
}catch (e53637){var t__10691__auto___53716 = e53637;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null)),null,t__10691__auto___53716,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___53717 = (new cljs.core.List(null,hyperfiddle.electric_dom2.parse_class(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a b","c"], null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c"], null),null,(1),null)),(2),null));
var result__10704__auto___53718 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53717);
if(cljs.core.truth_(result__10704__auto___53718)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a b","c"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53717),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a b","c"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53717),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53717);
}catch (e53638){var t__10691__auto___53723 = e53638;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a b","c"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c"], null)),null,t__10691__auto___53723,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___53724 = (new cljs.core.List(null,hyperfiddle.electric_dom2.parse_class(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a b"], null),cljs.core.list("c d"),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["e",null], null), null),"f"])], null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c","d","e","f"], null),null,(1),null)),(2),null));
var result__10704__auto___53725 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53724);
if(cljs.core.truth_(result__10704__auto___53725)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a b"], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("c d")),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["e","null"], null), null),"null","f","null"], null), null)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c","d","e","f"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53724),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a b"], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("c d")),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["e","null"], null), null),"null","f","null"], null), null)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c","d","e","f"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53724),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53724);
}catch (e53639){var t__10691__auto___53729 = e53639;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a b"], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("c d")),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["e","null"], null), null),"null","f","null"], null), null)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c","d","e","f"], null)),null,t__10691__auto___53729,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___53730 = (new cljs.core.List(null,hyperfiddle.electric_dom2.parse_class(null),(new cljs.core.List(null,null,null,(1),null)),(2),null));
var result__10704__auto___53731 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53730);
if(cljs.core.truth_(result__10704__auto___53731)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),null),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53730),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),null),null),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53730),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53730);
}catch (e53640){var t__10691__auto___53736 = e53640;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"parse-class","parse-class",-1795224311,null),null),null),null,t__10691__auto___53736,null]));
}finally {RCF__done_BANG_();
}
try{hyperfiddle.electric_dom2.parse_class((42));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY);
}catch (e53641){if((e53641 instanceof cljs.core.ExceptionInfo)){
var ex = e53641;
try{var values__10703__auto__ = (new cljs.core.List(null,cljs.core.ex_data(ex),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),(42)], null),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"ex-data","ex-data",1331491268,null),new cljs.core.Symbol(null,"ex","ex",226760186,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),(42)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"ex-data","ex-data",1331491268,null),new cljs.core.Symbol(null,"ex","ex",226760186,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),(42)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e53642){var t__10691__auto__ = e53642;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"ex-data","ex-data",1331491268,null),new cljs.core.Symbol(null,"ex","ex",226760186,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),(42)], null)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}} else {
throw e53641;

}
}}));

(hyperfiddle.electric_dom2.t_hyperfiddle$electric_dom253626.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta53627","meta53627",-303834120,null)], null);
}));

(hyperfiddle.electric_dom2.t_hyperfiddle$electric_dom253626.cljs$lang$type = true);

(hyperfiddle.electric_dom2.t_hyperfiddle$electric_dom253626.cljs$lang$ctorStr = "hyperfiddle.electric-dom2/t_hyperfiddle$electric_dom253626");

(hyperfiddle.electric_dom2.t_hyperfiddle$electric_dom253626.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric-dom2/t_hyperfiddle$electric_dom253626");
}));

/**
 * Positional factory function for hyperfiddle.electric-dom2/t_hyperfiddle$electric_dom253626.
 */
hyperfiddle.electric_dom2.__GT_t_hyperfiddle$electric_dom253626 = (function hyperfiddle$electric_dom2$generated__hyperfiddle_electric_dom2_145_$___GT_t_hyperfiddle$electric_dom253626(meta53627){
return (new hyperfiddle.electric_dom2.t_hyperfiddle$electric_dom253626(meta53627));
});

}

return (new hyperfiddle.electric_dom2.t_hyperfiddle$electric_dom253626(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric_dom2.generated__hyperfiddle_electric_dom2_145;},new cljs.core.Symbol("hyperfiddle.electric-dom2","generated__hyperfiddle_electric_dom2_145","hyperfiddle.electric-dom2/generated__hyperfiddle_electric_dom2_145",-1008841078,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric_dom2.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hyperfiddle.electric-dom2","hyperfiddle.electric-dom2",-1016131676,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),145,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_dom2_145","generated__hyperfiddle_electric_dom2_145",1524819884,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric_dom2.generated__hyperfiddle_electric_dom2_145)?hyperfiddle.electric_dom2.generated__hyperfiddle_electric_dom2_145.cljs$lang$test:null)], null)),hyperfiddle.electric_dom2.generated__hyperfiddle_electric_dom2_145));
} else {
}
hyperfiddle.electric_dom2.register_class_BANG_ = (function hyperfiddle$electric_dom2$register_class_BANG_(node,class$){
var refs = (function (){var or__5045__auto__ = node.hyperfiddle_electric_dom2_class_refs;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
node.classList.add(class$);

return (node.hyperfiddle_electric_dom2_class_refs = cljs.core.update.cljs$core$IFn$_invoke$arity$3(refs,class$,(function (cnt){
return ((function (){var or__5045__auto__ = cnt;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})() + (1));
})));
});
hyperfiddle.electric_dom2.unregister_class_BANG_ = (function hyperfiddle$electric_dom2$unregister_class_BANG_(node,class$){
var refs = (function (){var or__5045__auto__ = node.hyperfiddle_electric_dom2_class_refs;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var refs__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(refs,class$)))?(function (){
node.classList.remove(class$);

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(refs,class$);
})()
:cljs.core.update.cljs$core$IFn$_invoke$arity$3(refs,class$,cljs.core.dec));
return (node.hyperfiddle_electric_dom2_class_refs = refs__$1);
});
hyperfiddle.electric_dom2.set_val = (function hyperfiddle$electric_dom2$set_val(node,v){
return (node.value = cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
});

//# sourceMappingURL=hyperfiddle.electric_dom2.js.map
