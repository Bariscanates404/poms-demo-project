goog.provide('hyperfiddle.electric.impl.array_fields');
hyperfiddle.electric.impl.array_fields.swap = (function hyperfiddle$electric$impl$array_fields$swap(var_args){
var G__47670 = arguments.length;
switch (G__47670) {
case 3:
return hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___48468 = arguments.length;
var i__5770__auto___48469 = (0);
while(true){
if((i__5770__auto___48469 < len__5769__auto___48468)){
args_arr__5794__auto__.push((arguments[i__5770__auto___48469]));

var G__48471 = (i__5770__auto___48469 + (1));
i__5770__auto___48469 = G__48471;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((6)),(0),null));
return hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__5795__auto__);

}
});

(hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3 = (function (a,k,f){
return (a[k] = (function (){var G__47677 = (a[k]);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__47677) : f.call(null,G__47677));
})());
}));

(hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$4 = (function (a,k,f,x){
return (a[k] = (function (){var G__47679 = (a[k]);
var G__47680 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__47679,G__47680) : f.call(null,G__47679,G__47680));
})());
}));

(hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$5 = (function (a,k,f,x,y){
return (a[k] = (function (){var G__47685 = (a[k]);
var G__47686 = x;
var G__47687 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__47685,G__47686,G__47687) : f.call(null,G__47685,G__47686,G__47687));
})());
}));

(hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$6 = (function (a,k,f,x,y,z){
return (a[k] = (function (){var G__47690 = (a[k]);
var G__47691 = x;
var G__47692 = y;
var G__47693 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__47690,G__47691,G__47692,G__47693) : f.call(null,G__47690,G__47691,G__47692,G__47693));
})());
}));

(hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$variadic = (function (a,k,f,x,y,z,more){
return (a[k] = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,(a[k]),x,y,z,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)));
}));

/** @this {Function} */
(hyperfiddle.electric.impl.array_fields.swap.cljs$lang$applyTo = (function (seq47662){
var G__47663 = cljs.core.first(seq47662);
var seq47662__$1 = cljs.core.next(seq47662);
var G__47664 = cljs.core.first(seq47662__$1);
var seq47662__$2 = cljs.core.next(seq47662__$1);
var G__47665 = cljs.core.first(seq47662__$2);
var seq47662__$3 = cljs.core.next(seq47662__$2);
var G__47666 = cljs.core.first(seq47662__$3);
var seq47662__$4 = cljs.core.next(seq47662__$3);
var G__47667 = cljs.core.first(seq47662__$4);
var seq47662__$5 = cljs.core.next(seq47662__$4);
var G__47668 = cljs.core.first(seq47662__$5);
var seq47662__$6 = cljs.core.next(seq47662__$5);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47663,G__47664,G__47665,G__47666,G__47667,G__47668,seq47662__$6);
}));

(hyperfiddle.electric.impl.array_fields.swap.cljs$lang$maxFixedArity = (6));

hyperfiddle.electric.impl.array_fields.get = (function hyperfiddle$electric$impl$array_fields$get(a,k){
return (a[k]);
});
hyperfiddle.electric.impl.array_fields.getset = (function hyperfiddle$electric$impl$array_fields$getset(a,k,v){
var ret = (a[k]);
(a[k] = v);

return ret;
});
hyperfiddle.electric.impl.array_fields.getswap = (function hyperfiddle$electric$impl$array_fields$getswap(a,k,f){
var ret = (a[k]);
hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3(a,k,f);

return ret;
});

/**
* @constructor
*/
hyperfiddle.electric.impl.array_fields.P = (function (state_){
this.state_ = state_;
});

(hyperfiddle.electric.impl.array_fields.P.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-","state-",-416998234,null)], null);
}));

(hyperfiddle.electric.impl.array_fields.P.cljs$lang$type = true);

(hyperfiddle.electric.impl.array_fields.P.cljs$lang$ctorStr = "hyperfiddle.electric.impl.array-fields/P");

(hyperfiddle.electric.impl.array_fields.P.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.array-fields/P");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.array-fields/P.
 */
hyperfiddle.electric.impl.array_fields.__GT_P = (function hyperfiddle$electric$impl$array_fields$__GT_P(state_){
return (new hyperfiddle.electric.impl.array_fields.P(state_));
});

hyperfiddle.electric.impl.array_fields.generated__hyperfiddle_electric_impl_array_fields_31 = (function hyperfiddle$electric$impl$array_fields$generated__hyperfiddle_electric_impl_array_fields_31(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.array_fields !== 'undefined') && (typeof hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields48390 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields48390 = (function (meta48391){
this.meta48391 = meta48391;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields48390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48392,meta48391__$1){
var self__ = this;
var _48392__$1 = this;
return (new hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields48390(meta48391__$1));
}));

(hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields48390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48392){
var self__ = this;
var _48392__$1 = this;
return self__.meta48391;
}));

(hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields48390.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields48390.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__48401 = (arguments.length - (1));
switch (G__48401) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields48390.prototype.apply = (function (self__,args48397){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args48397)));
}));

(hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields48390.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_48317){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(9,done_48317);
hyperfiddle.electric.impl.array_fields.x = ((0) | (0));

hyperfiddle.electric.impl.array_fields.y = ((1) | (0));

hyperfiddle.electric.impl.array_fields.aP = hyperfiddle.electric.impl.array_fields.__GT_P(cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2)));

var aP = hyperfiddle.electric.impl.array_fields.aP;
try{var values__10703__auto___48482 = (new cljs.core.List(null,(function (){var arr48038 = aP.state_;
(arr48038[hyperfiddle.electric.impl.array_fields.x] = cljs.core.identity((1)));

return (arr48038[hyperfiddle.electric.impl.array_fields.y] = cljs.core.identity((2)));
})(),(new cljs.core.List(null,(2),null,(1),null)),(2),null));
var result__10704__auto___48483 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___48482);
if(cljs.core.truth_(result__10704__auto___48483)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fset","fset",1551687988,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null),(1),new cljs.core.Symbol(null,"y","y",-117328249,null),(2)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___48482),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fset","fset",1551687988,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null),(1),new cljs.core.Symbol(null,"y","y",-117328249,null),(2)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___48482),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___48482);
}catch (e48422){var t__10691__auto___48488 = e48422;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"arr48038","arr48038",845526088,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"objects","objects",-554722035,null)], null)),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null))], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol("clojure.core","aset","clojure.core/aset",-1001104939,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arr48038","arr48038",845526088,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"objects","objects",-554722035,null)], null)),new cljs.core.Symbol(null,"x","x",-555367584,null),cljs.core.list(new cljs.core.Symbol("clojure.core","identity","clojure.core/identity",286947313,null),(1))),cljs.core.list(new cljs.core.Symbol("clojure.core","aset","clojure.core/aset",-1001104939,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arr48038","arr48038",845526088,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"objects","objects",-554722035,null)], null)),new cljs.core.Symbol(null,"y","y",-117328249,null),cljs.core.list(new cljs.core.Symbol("clojure.core","identity","clojure.core/identity",286947313,null),(2))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"fset","fset",1551687988,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null),(1),new cljs.core.Symbol(null,"y","y",-117328249,null),(2)))], null)),(2)),null,t__10691__auto___48488,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___48492 = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hyperfiddle.electric.impl.array_fields.get(aP.state_,hyperfiddle.electric.impl.array_fields.x),hyperfiddle.electric.impl.array_fields.get(aP.state_,hyperfiddle.electric.impl.array_fields.y)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),null,(1),null)),(2),null));
var result__10704__auto___48493 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___48492);
if(cljs.core.truth_(result__10704__auto___48493)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("hyperfiddle.electric.impl.array-fields","get","hyperfiddle.electric.impl.array-fields/get",962376922,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol("hyperfiddle.electric.impl.array-fields","get","hyperfiddle.electric.impl.array-fields/get",962376922,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"y","y",-117328249,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___48492),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("hyperfiddle.electric.impl.array-fields","get","hyperfiddle.electric.impl.array-fields/get",962376922,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol("hyperfiddle.electric.impl.array-fields","get","hyperfiddle.electric.impl.array-fields/get",962376922,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"y","y",-117328249,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___48492),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___48492);
}catch (e48427){var t__10691__auto___48494 = e48427;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("hyperfiddle.electric.impl.array-fields","get","hyperfiddle.electric.impl.array-fields/get",962376922,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol("hyperfiddle.electric.impl.array-fields","get","hyperfiddle.electric.impl.array-fields/get",962376922,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"y","y",-117328249,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)),null,t__10691__auto___48494,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___48495 = (new cljs.core.List(null,hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3(aP.state_,hyperfiddle.electric.impl.array_fields.x,cljs.core.inc),(new cljs.core.List(null,(2),null,(1),null)),(2),null));
var result__10704__auto___48496 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___48495);
if(cljs.core.truth_(result__10704__auto___48496)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fswap","fswap",-2114192645,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___48495),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fswap","fswap",-2114192645,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___48495),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___48495);
}catch (e48429){var t__10691__auto___48498 = e48429;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol("hyperfiddle.electric.impl.array-fields","swap","hyperfiddle.electric.impl.array-fields/swap",-601049012,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"fswap","fswap",-2114192645,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)))], null)),(2)),null,t__10691__auto___48498,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___48499 = (new cljs.core.List(null,hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3(aP.state_,hyperfiddle.electric.impl.array_fields.x,cljs.core.inc),(new cljs.core.List(null,(3),null,(1),null)),(2),null));
var result__10704__auto___48500 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___48499);
if(cljs.core.truth_(result__10704__auto___48500)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"swap","swap",1869207164,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___48499),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"swap","swap",1869207164,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___48499),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___48499);
}catch (e48438){var t__10691__auto___48503 = e48438;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"swap","swap",1869207164,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),(3)),null,t__10691__auto___48503,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___48504 = (new cljs.core.List(null,hyperfiddle.electric.impl.array_fields.getset(aP.state_,hyperfiddle.electric.impl.array_fields.x,(0)),(new cljs.core.List(null,(3),null,(1),null)),(2),null));
var result__10704__auto___48505 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___48504);
if(cljs.core.truth_(result__10704__auto___48505)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fgetset","fgetset",1744389016,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null),(0)),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___48504),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fgetset","fgetset",1744389016,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null),(0)),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___48504),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___48504);
}catch (e48443){var t__10691__auto___48508 = e48443;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol("hyperfiddle.electric.impl.array-fields","getset","hyperfiddle.electric.impl.array-fields/getset",-1343467261,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null),(0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"fgetset","fgetset",1744389016,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null),(0)))], null)),(3)),null,t__10691__auto___48508,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___48509 = (new cljs.core.List(null,hyperfiddle.electric.impl.array_fields.getset(aP.state_,hyperfiddle.electric.impl.array_fields.x,(100)),(new cljs.core.List(null,(0),null,(1),null)),(2),null));
var result__10704__auto___48510 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___48509);
if(cljs.core.truth_(result__10704__auto___48510)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"getset","getset",1025936179,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null),(100)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___48509),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"getset","getset",1025936179,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null),(100)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___48509),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___48509);
}catch (e48456){var t__10691__auto___48511 = e48456;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"getset","getset",1025936179,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null),(100)),(0)),null,t__10691__auto___48511,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___48513 = (new cljs.core.List(null,hyperfiddle.electric.impl.array_fields.get(aP.state_,hyperfiddle.electric.impl.array_fields.x),(new cljs.core.List(null,(100),null,(1),null)),(2),null));
var result__10704__auto___48514 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___48513);
if(cljs.core.truth_(result__10704__auto___48514)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fget","fget",1054684438,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),(100)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___48513),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fget","fget",1054684438,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),(100)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___48513),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___48513);
}catch (e48457){var t__10691__auto___48515 = e48457;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol("hyperfiddle.electric.impl.array-fields","get","hyperfiddle.electric.impl.array-fields/get",962376922,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"fget","fget",1054684438,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))], null)),(100)),null,t__10691__auto___48515,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___48516 = (new cljs.core.List(null,hyperfiddle.electric.impl.array_fields.getswap(aP.state_,hyperfiddle.electric.impl.array_fields.x,cljs.core.inc),(new cljs.core.List(null,(100),null,(1),null)),(2),null));
var result__10704__auto___48517 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___48516);
if(cljs.core.truth_(result__10704__auto___48517)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"getswap","getswap",-1972572248,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),(100)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___48516),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"getswap","getswap",-1972572248,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),(100)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___48516),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___48516);
}catch (e48460){var t__10691__auto___48518 = e48460;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"getswap","getswap",-1972572248,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),(100)),null,t__10691__auto___48518,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto__ = (new cljs.core.List(null,hyperfiddle.electric.impl.array_fields.get(aP.state_,hyperfiddle.electric.impl.array_fields.x),(new cljs.core.List(null,(101),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fget","fget",1054684438,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),(101)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fget","fget",1054684438,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),(101)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e48461){var t__10691__auto__ = e48461;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol("hyperfiddle.electric.impl.array-fields","get","hyperfiddle.electric.impl.array-fields/get",962376922,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"fget","fget",1054684438,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))], null)),(101)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields48390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48391","meta48391",-1155643946,null)], null);
}));

(hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields48390.cljs$lang$type = true);

(hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields48390.cljs$lang$ctorStr = "hyperfiddle.electric.impl.array-fields/t_hyperfiddle$electric$impl$array_fields48390");

(hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields48390.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.array-fields/t_hyperfiddle$electric$impl$array_fields48390");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.array-fields/t_hyperfiddle$electric$impl$array_fields48390.
 */
hyperfiddle.electric.impl.array_fields.__GT_t_hyperfiddle$electric$impl$array_fields48390 = (function hyperfiddle$electric$impl$array_fields$generated__hyperfiddle_electric_impl_array_fields_31_$___GT_t_hyperfiddle$electric$impl$array_fields48390(meta48391){
return (new hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields48390(meta48391));
});

}

return (new hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields48390(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.array_fields.generated__hyperfiddle_electric_impl_array_fields_31;},new cljs.core.Symbol("hyperfiddle.electric.impl.array-fields","generated__hyperfiddle_electric_impl_array_fields_31","hyperfiddle.electric.impl.array-fields/generated__hyperfiddle_electric_impl_array_fields_31",2092578177,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/array_fields.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hyperfiddle.electric.impl.array-fields","hyperfiddle.electric.impl.array-fields",1216360241,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),31,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_array_fields_31","generated__hyperfiddle_electric_impl_array_fields_31",-1914179631,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.array_fields.generated__hyperfiddle_electric_impl_array_fields_31)?hyperfiddle.electric.impl.array_fields.generated__hyperfiddle_electric_impl_array_fields_31.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.array_fields.generated__hyperfiddle_electric_impl_array_fields_31));
} else {
}

//# sourceMappingURL=hyperfiddle.electric.impl.array_fields.js.map
