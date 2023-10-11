goog.provide('hyperfiddle.electric.impl.io');
(com.cognitect.transit.types.UUID.prototype.cljs$core$IUUID$ = cljs.core.PROTOCOL_SENTINEL);
hyperfiddle.electric.impl.io.default_write_handler = cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((function (x){
hyperfiddle.electric.impl.io._last_unserializable_for_repl = x;

console.log("Unserializable reference transfer:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));

return "_";
}),(function (x){
return null;
}),(function (_){
return "";
}));
/**
 * Builds a minimal, cljc map/bounded-queue cache.
 *   One slot per key (map).
 *   Reaching `size` pops oldest value (bounded-queue).
 */
hyperfiddle.electric.impl.io.__GT_cache = (function hyperfiddle$electric$impl$io$__GT_cache(size){
var G__50660 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((size * (2)) + (1)));
var arr50662_51298 = G__50660;
(arr50662_51298[(size * (2))] = cljs.core.identity((0)));

return G__50660;
});
hyperfiddle.electric.impl.io.cache_add = (function hyperfiddle$electric$impl$io$cache_add(cache,k,v){
if(cljs.core.truth_((function (){var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
var arr50669_51299 = cache;
(arr50669_51299[(i + (1))] = cljs.core.identity(v));

return true;
} else {
var G__51300 = (i + (2));
i = G__51300;
continue;
}
} else {
return null;
}
break;
}
})())){
return null;
} else {
var widx = hyperfiddle.electric.impl.array_fields.getswap(cache,(cljs.core.count(cache) - (1)),(function (p1__50663_SHARP_){
return cljs.core.mod((p1__50663_SHARP_ + (2)),(cljs.core.count(cache) - (1)));
}));
var arr50673 = cache;
(arr50673[widx] = cljs.core.identity(k));

return (arr50673[(widx + (1))] = cljs.core.identity(v));
}
});
hyperfiddle.electric.impl.io.cache_get = (function hyperfiddle$electric$impl$io$cache_get(cache,k){
var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
return hyperfiddle.electric.impl.array_fields.get(cache,(i + (1)));
} else {
var G__51301 = (i + (2));
i = G__51301;
continue;
}
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.io.cache__GT_map = (function hyperfiddle$electric$impl$io$cache__GT_map(cache){
var i = (0);
var ac = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
var G__51302 = (i + (2));
var G__51303 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ac,hyperfiddle.electric.impl.array_fields.get(cache,i),hyperfiddle.electric.impl.array_fields.get(cache,(i + (1))));
i = G__51302;
ac = G__51303;
continue;
} else {
return cljs.core.persistent_BANG_(ac);
}
break;
}
});
hyperfiddle.electric.impl.io.generated__hyperfiddle_electric_impl_io_57 = (function hyperfiddle$electric$impl$io$generated__hyperfiddle_electric_impl_io_57(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.io !== 'undefined') && (typeof hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50879 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50879 = (function (meta50880){
this.meta50880 = meta50880;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50881,meta50880__$1){
var self__ = this;
var _50881__$1 = this;
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50879(meta50880__$1));
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50881){
var self__ = this;
var _50881__$1 = this;
return self__.meta50880;
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50879.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50879.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__50885 = (arguments.length - (1));
switch (G__50885) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50879.prototype.apply = (function (self__,args50883){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args50883)));
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50879.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_50866){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(5,done_50866);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["keyed cache"], 0));

try{hyperfiddle.electric.impl.io._BANG_c = hyperfiddle.electric.impl.io.__GT_cache((1));

hyperfiddle.electric.impl.io.cache_add(hyperfiddle.electric.impl.io._BANG_c,(1),(2));

try{var values__10703__auto___51305 = (new cljs.core.List(null,hyperfiddle.electric.impl.io.cache_get(hyperfiddle.electric.impl.io._BANG_c,(1)),(new cljs.core.List(null,(2),null,(1),null)),(2),null));
var result__10704__auto___51306 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51305);
if(cljs.core.truth_(result__10704__auto___51306)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"cache-get","cache-get",-1933400331,null),new cljs.core.Symbol(null,"!c","!c",-957551393,null),(1)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51305),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"cache-get","cache-get",-1933400331,null),new cljs.core.Symbol(null,"!c","!c",-957551393,null),(1)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51305),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51305);
}catch (e50889){var t__10691__auto___51307 = e50889;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"cache-get","cache-get",-1933400331,null),new cljs.core.Symbol(null,"!c","!c",-957551393,null),(1)),(2)),null,t__10691__auto___51307,null]));
}finally {RCF__done_BANG_();
}
hyperfiddle.electric.impl.io.cache_add(hyperfiddle.electric.impl.io._BANG_c,(1),(3));

try{var values__10703__auto___51308 = (new cljs.core.List(null,hyperfiddle.electric.impl.io.cache_get(hyperfiddle.electric.impl.io._BANG_c,(1)),(new cljs.core.List(null,(3),null,(1),null)),(2),null));
var result__10704__auto___51309 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51308);
if(cljs.core.truth_(result__10704__auto___51309)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"cache-get","cache-get",-1933400331,null),new cljs.core.Symbol(null,"!c","!c",-957551393,null),(1)),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51308),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"cache-get","cache-get",-1933400331,null),new cljs.core.Symbol(null,"!c","!c",-957551393,null),(1)),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51308),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51308);
}catch (e50892){var t__10691__auto___51310 = e50892;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"cache-get","cache-get",-1933400331,null),new cljs.core.Symbol(null,"!c","!c",-957551393,null),(1)),(3)),null,t__10691__auto___51310,null]));
}finally {RCF__done_BANG_();
}
hyperfiddle.electric.impl.io.cache_add(hyperfiddle.electric.impl.io._BANG_c,(2),(4));

try{var values__10703__auto___51311 = (new cljs.core.List(null,hyperfiddle.electric.impl.io.cache_get(hyperfiddle.electric.impl.io._BANG_c,(2)),(new cljs.core.List(null,(4),null,(1),null)),(2),null));
var result__10704__auto___51312 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51311);
if(cljs.core.truth_(result__10704__auto___51312)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"cache-get","cache-get",-1933400331,null),new cljs.core.Symbol(null,"!c","!c",-957551393,null),(2)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51311),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"cache-get","cache-get",-1933400331,null),new cljs.core.Symbol(null,"!c","!c",-957551393,null),(2)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51311),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51311);
}catch (e50898){var t__10691__auto___51313 = e50898;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"cache-get","cache-get",-1933400331,null),new cljs.core.Symbol(null,"!c","!c",-957551393,null),(2)),(4)),null,t__10691__auto___51313,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___51314 = (new cljs.core.List(null,hyperfiddle.electric.impl.io.cache__GT_map(hyperfiddle.electric.impl.io._BANG_c),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [(2),(4)], null),null,(1),null)),(2),null));
var result__10704__auto___51315 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51314);
if(cljs.core.truth_(result__10704__auto___51315)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"cache->map","cache->map",457911972,null),new cljs.core.Symbol(null,"!c","!c",-957551393,null)),new cljs.core.PersistentArrayMap(null, 1, [(2),(4)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51314),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"cache->map","cache->map",457911972,null),new cljs.core.Symbol(null,"!c","!c",-957551393,null)),new cljs.core.PersistentArrayMap(null, 1, [(2),(4)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51314),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51314);
}catch (e50902){var t__10691__auto___51316 = e50902;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"cache->map","cache->map",457911972,null),new cljs.core.Symbol(null,"!c","!c",-957551393,null)),new cljs.core.PersistentArrayMap(null, 1, [(2),(4)], null)),null,t__10691__auto___51316,null]));
}finally {RCF__done_BANG_();
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["size 2"], 0));

try{hyperfiddle.electric.impl.io._BANG_c = hyperfiddle.electric.impl.io.__GT_cache((2));

hyperfiddle.electric.impl.io.cache_add(hyperfiddle.electric.impl.io._BANG_c,(1),(1));

hyperfiddle.electric.impl.io.cache_add(hyperfiddle.electric.impl.io._BANG_c,(2),(2));

hyperfiddle.electric.impl.io.cache_add(hyperfiddle.electric.impl.io._BANG_c,(2),(2));

try{var values__10703__auto__ = (new cljs.core.List(null,hyperfiddle.electric.impl.io.cache__GT_map(hyperfiddle.electric.impl.io._BANG_c),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [(1),(1),(2),(2)], null),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"cache->map","cache->map",457911972,null),new cljs.core.Symbol(null,"!c","!c",-957551393,null)),new cljs.core.PersistentArrayMap(null, 2, [(1),(1),(2),(2)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"cache->map","cache->map",457911972,null),new cljs.core.Symbol(null,"!c","!c",-957551393,null)),new cljs.core.PersistentArrayMap(null, 2, [(1),(1),(2),(2)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e50908){var t__10691__auto__ = e50908;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"cache->map","cache->map",457911972,null),new cljs.core.Symbol(null,"!c","!c",-957551393,null)),new cljs.core.PersistentArrayMap(null, 2, [(1),(1),(2),(2)], null)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50880","meta50880",593780541,null)], null);
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50879.cljs$lang$type = true);

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50879.cljs$lang$ctorStr = "hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io50879");

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50879.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io50879");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io50879.
 */
hyperfiddle.electric.impl.io.__GT_t_hyperfiddle$electric$impl$io50879 = (function hyperfiddle$electric$impl$io$generated__hyperfiddle_electric_impl_io_57_$___GT_t_hyperfiddle$electric$impl$io50879(meta50880){
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50879(meta50880));
});

}

return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50879(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.io.generated__hyperfiddle_electric_impl_io_57;},new cljs.core.Symbol("hyperfiddle.electric.impl.io","generated__hyperfiddle_electric_impl_io_57","hyperfiddle.electric.impl.io/generated__hyperfiddle_electric_impl_io_57",690423085,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/io.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"hyperfiddle.electric.impl.io","hyperfiddle.electric.impl.io",407083856,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),57,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_io_57","generated__hyperfiddle_electric_impl_io_57",-399105870,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.io.generated__hyperfiddle_electric_impl_io_57)?hyperfiddle.electric.impl.io.generated__hyperfiddle_electric_impl_io_57.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.io.generated__hyperfiddle_electric_impl_io_57));
} else {
}
hyperfiddle.electric.impl.io._BANG_ex_cache = hyperfiddle.electric.impl.io.__GT_cache((16));
hyperfiddle.electric.impl.io.save_original_ex_BANG_ = (function hyperfiddle$electric$impl$io$save_original_ex_BANG_(fi){
var id = hyperfiddle.electric.debug.ex_id(fi);
var temp__5808__auto___51317 = cljs.core.ex_cause(fi);
if((temp__5808__auto___51317 == null)){
} else {
var cause_51318 = temp__5808__auto___51317;
if((cause_51318 instanceof hyperfiddle.electric.FailureInfo)){
} else {
hyperfiddle.electric.impl.io.cache_add(hyperfiddle.electric.impl.io._BANG_ex_cache,id,cause_51318);
}
}

return id;
});
hyperfiddle.electric.impl.io.get_original_ex = (function hyperfiddle$electric$impl$io$get_original_ex(id){
return hyperfiddle.electric.impl.io.cache_get(hyperfiddle.electric.impl.io._BANG_ex_cache,id);
});
hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_ = null;
hyperfiddle.electric.impl.io.failure_writer = cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((function (_){
return "failure";
}),(function (x){
var err = x.error;
if((err instanceof missionary.Cancelled)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancelled","cancelled",488726224)], null);
} else {
if((err instanceof hyperfiddle.electric.Pending)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pending","pending",-220036727)], null);
} else {
if((err instanceof hyperfiddle.electric.Remote)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576),hyperfiddle.electric.debug.serializable(cljs.core.ex_data(err))], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exception","exception",-335277064),cljs.core.ex_message(err),hyperfiddle.electric.debug.serializable(cljs.core.ex_data(err)),hyperfiddle.electric.impl.io.save_original_ex_BANG_(err)], null);

}
}
}
}));
hyperfiddle.electric.impl.io.write_opts = (function hyperfiddle$electric$impl$io$write_opts(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,cljs.core.PersistentArrayMap.createAsIfByAssoc([hyperfiddle.electric.Failure,hyperfiddle.electric.impl.io.failure_writer,new cljs.core.Keyword(null,"default","default",-1987822328),hyperfiddle.electric.impl.io.default_write_handler])], 0)),new cljs.core.Keyword(null,"default-handler","default-handler",-1028159207),hyperfiddle.electric.impl.io.default_write_handler], null);
});
hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_ = null;
hyperfiddle.electric.impl.io.failure_reader = cognitect.transit.read_handler((function (p__50914){
var vec__50915 = p__50914;
var seq__50916 = cljs.core.seq(vec__50915);
var first__50917 = cljs.core.first(seq__50916);
var seq__50916__$1 = cljs.core.next(seq__50916);
var tag = first__50917;
var args = seq__50916__$1;
var G__50921 = tag;
var G__50921__$1 = (((G__50921 instanceof cljs.core.Keyword))?G__50921.fqn:null);
switch (G__50921__$1) {
case "exception":
var vec__50922 = args;
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50922,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50922,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50922,(2),null);
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4(message,data,id,null)));

break;
case "remote":
var vec__50926 = args;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50926,(0),null);
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$2("Remote error",(function (){var or__5045__auto__ = data;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})())));

break;
case "pending":
return (new hyperfiddle.electric.Failure((new hyperfiddle.electric.Pending())));

break;
case "cancelled":
return (new hyperfiddle.electric.Failure((new missionary.Cancelled())));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50921__$1)].join('')));

}
}));
hyperfiddle.electric.impl.io.read_opts = (function hyperfiddle$electric$impl$io$read_opts(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.PersistentArrayMap(null, 1, ["failure",hyperfiddle.electric.impl.io.failure_reader], null)], 0))], null);
});
hyperfiddle.electric.impl.io.set_ints = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce_kv,(function (r,i,n){
var offset = (i << (2));
var G__50929 = r;
G__50929.setInt32(offset,n);

return G__50929;
}));
/**
 * Encode a control frame to a binary segment.
 */
hyperfiddle.electric.impl.io.encode_numbers = (function hyperfiddle$electric$impl$io$encode_numbers(xs){
var required = (cljs.core.count(xs) << (2));
var G__50931 = (new ArrayBuffer(required));
hyperfiddle.electric.impl.io.set_ints((new DataView(G__50931)),xs);

return G__50931;
});
/**
 * Decode a control frame from a binary segment.
 */
hyperfiddle.electric.impl.io.decode_numbers = (function hyperfiddle$electric$impl$io$decode_numbers(b){
return cljs.core.vec((function (){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.io !== 'undefined') && (typeof hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50933 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50933 = (function (b,meta50934){
this.b = b;
this.meta50934 = meta50934;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50935,meta50934__$1){
var self__ = this;
var _50935__$1 = this;
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50933(self__.b,meta50934__$1));
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50935){
var self__ = this;
var _50935__$1 = this;
return self__.meta50934;
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50933.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,rf,r){
var self__ = this;
var ___$1 = this;
var l = self__.b.byteLength;
var v = (new DataView(self__.b));
var r__$1 = r;
var i = (0);
while(true){
if((i < l)){
var G__51320 = (function (){var G__50936 = r__$1;
var G__50937 = v.getInt32(i);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__50936,G__50937) : rf.call(null,G__50936,G__50937));
})();
var G__51321 = (i + (4));
r__$1 = G__51320;
i = G__51321;
continue;
} else {
return r__$1;
}
break;
}
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"meta50934","meta50934",-1204310609,null)], null);
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50933.cljs$lang$type = true);

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50933.cljs$lang$ctorStr = "hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io50933");

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50933.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io50933");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io50933.
 */
hyperfiddle.electric.impl.io.__GT_t_hyperfiddle$electric$impl$io50933 = (function hyperfiddle$electric$impl$io$decode_numbers_$___GT_t_hyperfiddle$electric$impl$io50933(b__$1,meta50934){
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50933(b__$1,meta50934));
});

}

return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50933(b,cljs.core.PersistentArrayMap.EMPTY));
})()
);
});
var _BANG_cache_51322 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,new cljs.core.Keyword(null,"writer","writer",-277568236),null], null));
hyperfiddle.electric.impl.io.transit_writer = (function hyperfiddle$electric$impl$io$transit_writer(){
return new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_51322,(function (p__50938){
var map__50939 = p__50938;
var map__50939__$1 = cljs.core.__destructure_map(map__50939);
var cache = map__50939__$1;
var write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50939__$1,new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911));
var writer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50939__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(write_handlers,hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_)){
if(cljs.core.truth_(writer)){
return cache;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,new cljs.core.Keyword(null,"writer","writer",-277568236),cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.write_opts()));
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,new cljs.core.Keyword(null,"writer","writer",-277568236),cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.write_opts())], null);
}
})));
});
/**
 * Encode a data frame to transit json
 */
hyperfiddle.electric.impl.io.encode = (function hyperfiddle$electric$impl$io$encode(x){
return cognitect.transit.write(hyperfiddle.electric.impl.io.transit_writer(),x);
});
var _BANG_cache_51323 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.Keyword(null,"reader","reader",169660853),null], null));
hyperfiddle.electric.impl.io.transit_reader = (function hyperfiddle$electric$impl$io$transit_reader(){
return new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_51323,(function (p__50940){
var map__50941 = p__50940;
var map__50941__$1 = cljs.core.__destructure_map(map__50941);
var cache = map__50941__$1;
var read_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50941__$1,new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315));
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50941__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(read_handlers,hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_)){
if(cljs.core.truth_(reader)){
return cache;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,new cljs.core.Keyword(null,"reader","reader",169660853),cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.read_opts()));
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.Keyword(null,"reader","reader",169660853),cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.read_opts())], null);
}
})));
});
/**
 * Decode a data frame from transit json
 */
hyperfiddle.electric.impl.io.decode = (function hyperfiddle$electric$impl$io$decode(s){
return cognitect.transit.read(hyperfiddle.electric.impl.io.transit_reader(),s);
});
hyperfiddle.electric.impl.io.decode_str = (function hyperfiddle$electric$impl$io$decode_str(x){
try{var G__50943 = hyperfiddle.electric.impl.io.decode(x);
console.debug("\uD83D\uDD3D",G__50943);

return G__50943;
}catch (e50942){var t = e50942;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failed to decode",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),x], null),t);
}});
hyperfiddle.electric.impl.io.generated__hyperfiddle_electric_impl_io_190 = (function hyperfiddle$electric$impl$io$generated__hyperfiddle_electric_impl_io_190(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.io !== 'undefined') && (typeof hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50971 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50971 = (function (meta50972){
this.meta50972 = meta50972;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50973,meta50972__$1){
var self__ = this;
var _50973__$1 = this;
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50971(meta50972__$1));
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50973){
var self__ = this;
var _50973__$1 = this;
return self__.meta50972;
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50971.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50971.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__50979 = (arguments.length - (1));
switch (G__50979) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50971.prototype.apply = (function (self__,args50975){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args50975)));
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50971.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_50962){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(2,done_50962);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["FailureInfo"], 0));

try{hyperfiddle.electric.impl.io.cause = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("boom",cljs.core.PersistentArrayMap.EMPTY);

hyperfiddle.electric.impl.io.ex = hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$3("x",cljs.core.PersistentArrayMap.EMPTY,hyperfiddle.electric.impl.io.cause);

hyperfiddle.electric.impl.io.sent = hyperfiddle.electric.impl.io.decode(hyperfiddle.electric.impl.io.encode((new hyperfiddle.electric.Failure(hyperfiddle.electric.impl.io.ex)))).error;

cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["keeps the ID across the wire"], 0));

try{try{var values__10703__auto___51325 = (new cljs.core.List(null,hyperfiddle.electric.debug.ex_id(hyperfiddle.electric.impl.io.ex),(new cljs.core.List(null,hyperfiddle.electric.debug.ex_id(hyperfiddle.electric.impl.io.sent),null,(1),null)),(2),null));
var result__10704__auto___51326 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51325);
if(cljs.core.truth_(result__10704__auto___51326)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("dbg","ex-id","dbg/ex-id",1057209930,null),new cljs.core.Symbol(null,"ex","ex",226760186,null)),cljs.core.list(new cljs.core.Symbol("dbg","ex-id","dbg/ex-id",1057209930,null),new cljs.core.Symbol(null,"sent","sent",103030037,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51325),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("dbg","ex-id","dbg/ex-id",1057209930,null),new cljs.core.Symbol(null,"ex","ex",226760186,null)),cljs.core.list(new cljs.core.Symbol("dbg","ex-id","dbg/ex-id",1057209930,null),new cljs.core.Symbol(null,"sent","sent",103030037,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51325),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51325);
}catch (e50984){var t__10691__auto___51327 = e50984;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("dbg","ex-id","dbg/ex-id",1057209930,null),new cljs.core.Symbol(null,"ex","ex",226760186,null)),cljs.core.list(new cljs.core.Symbol("dbg","ex-id","dbg/ex-id",1057209930,null),new cljs.core.Symbol(null,"sent","sent",103030037,null))),null,t__10691__auto___51327,null]));
}finally {RCF__done_BANG_();
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["can restore cause"], 0));

try{try{var values__10703__auto___51328 = (new cljs.core.List(null,hyperfiddle.electric.impl.io.get_original_ex(hyperfiddle.electric.debug.ex_id(hyperfiddle.electric.impl.io.sent)),(new cljs.core.List(null,hyperfiddle.electric.impl.io.cause,null,(1),null)),(2),null));
var result__10704__auto___51329 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51328);
if(cljs.core.truth_(result__10704__auto___51329)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-original-ex","get-original-ex",1335458156,null),cljs.core.list(new cljs.core.Symbol("dbg","ex-id","dbg/ex-id",1057209930,null),new cljs.core.Symbol(null,"sent","sent",103030037,null))),new cljs.core.Symbol(null,"cause","cause",1872432779,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51328),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-original-ex","get-original-ex",1335458156,null),cljs.core.list(new cljs.core.Symbol("dbg","ex-id","dbg/ex-id",1057209930,null),new cljs.core.Symbol(null,"sent","sent",103030037,null))),new cljs.core.Symbol(null,"cause","cause",1872432779,null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51328),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51328);
}catch (e50986){var t__10691__auto___51330 = e50986;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"get-original-ex","get-original-ex",1335458156,null),cljs.core.list(new cljs.core.Symbol("dbg","ex-id","dbg/ex-id",1057209930,null),new cljs.core.Symbol(null,"sent","sent",103030037,null))),new cljs.core.Symbol(null,"cause","cause",1872432779,null)),null,t__10691__auto___51330,null]));
}finally {RCF__done_BANG_();
}
return null;
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50971.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50972","meta50972",-1238758796,null)], null);
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50971.cljs$lang$type = true);

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50971.cljs$lang$ctorStr = "hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io50971");

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50971.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io50971");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io50971.
 */
hyperfiddle.electric.impl.io.__GT_t_hyperfiddle$electric$impl$io50971 = (function hyperfiddle$electric$impl$io$generated__hyperfiddle_electric_impl_io_190_$___GT_t_hyperfiddle$electric$impl$io50971(meta50972){
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50971(meta50972));
});

}

return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io50971(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.io.generated__hyperfiddle_electric_impl_io_190;},new cljs.core.Symbol("hyperfiddle.electric.impl.io","generated__hyperfiddle_electric_impl_io_190","hyperfiddle.electric.impl.io/generated__hyperfiddle_electric_impl_io_190",1438069449,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/io.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"hyperfiddle.electric.impl.io","hyperfiddle.electric.impl.io",407083856,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),190,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_io_190","generated__hyperfiddle_electric_impl_io_190",-1767615298,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.io.generated__hyperfiddle_electric_impl_io_190)?hyperfiddle.electric.impl.io.generated__hyperfiddle_electric_impl_io_190.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.io.generated__hyperfiddle_electric_impl_io_190));
} else {
}
hyperfiddle.electric.impl.io.chunk_size = ((65536) >> (2));
hyperfiddle.electric.impl.io.message_reader = (function hyperfiddle$electric$impl$io$message_reader(_QMARK_read){

return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr50996_block_7 = (function hyperfiddle$electric$impl$io$message_reader_$_cr50996_block_7(cr50996_state){
try{var cr50996_place_22 = (cr50996_state[(7)]);
var cr50996_place_32 = cljs.core.persistent_BANG_;
var cr50996_place_33 = cr50996_place_22;
var cr50996_place_34 = (function (){var G__51047 = cr50996_place_33;
var fexpr__51046 = cr50996_place_32;
return (fexpr__51046.cljs$core$IFn$_invoke$arity$1 ? fexpr__51046.cljs$core$IFn$_invoke$arity$1(G__51047) : fexpr__51046.call(null,G__51047));
})();
(cr50996_state[(0)] = cr50996_block_8);

(cr50996_state[(7)] = null);

(cr50996_state[(4)] = cr50996_place_34);

return cr50996_state;
}catch (e51041){var cr50996_exception = e51041;
(cr50996_state[(0)] = null);

(cr50996_state[(7)] = null);

(cr50996_state[(1)] = null);

(cr50996_state[(2)] = null);

(cr50996_state[(4)] = null);

(cr50996_state[(6)] = null);

(cr50996_state[(3)] = null);

throw cr50996_exception;
}});
var cr50996_block_2 = (function hyperfiddle$electric$impl$io$message_reader_$_cr50996_block_2(cr50996_state){
try{var cr50996_place_4 = missionary.core.unpark();
var cr50996_place_5 = cr50996_place_4;
var cr50996_place_6 = typeof cr50996_place_5 === 'string';
var cr50996_place_7 = null;
if(cr50996_place_6){
(cr50996_state[(0)] = cr50996_block_9);

(cr50996_state[(2)] = cr50996_place_4);

return cr50996_state;
} else {
(cr50996_state[(0)] = cr50996_block_3);

(cr50996_state[(2)] = cr50996_place_4);

(cr50996_state[(3)] = cr50996_place_7);

return cr50996_state;
}
}catch (e51052){var cr50996_exception = e51052;
(cr50996_state[(0)] = null);

(cr50996_state[(1)] = null);

throw cr50996_exception;
}});
var cr50996_block_0 = (function hyperfiddle$electric$impl$io$message_reader_$_cr50996_block_0(cr50996_state){
try{var cr50996_place_0 = cljs.core.transient$;
var cr50996_place_1 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr50996_place_2 = (function (){var G__51058 = cr50996_place_1;
var fexpr__51057 = cr50996_place_0;
return (fexpr__51057.cljs$core$IFn$_invoke$arity$1 ? fexpr__51057.cljs$core$IFn$_invoke$arity$1(G__51058) : fexpr__51057.call(null,G__51058));
})();
(cr50996_state[(0)] = cr50996_block_1);

(cr50996_state[(1)] = cr50996_place_2);

return cr50996_state;
}catch (e51054){var cr50996_exception = e51054;
(cr50996_state[(0)] = null);

throw cr50996_exception;
}});
var cr50996_block_9 = (function hyperfiddle$electric$impl$io$message_reader_$_cr50996_block_9(cr50996_state){
try{var cr50996_place_4 = (cr50996_state[(2)]);
var cr50996_place_2 = (cr50996_state[(1)]);
var cr50996_place_37 = cljs.core.conj_BANG_;
var cr50996_place_38 = cr50996_place_2;
var cr50996_place_39 = hyperfiddle.electric.impl.io.decode_str;
var cr50996_place_40 = cr50996_place_4;
var cr50996_place_41 = (function (){var G__51064 = cr50996_place_40;
var fexpr__51063 = cr50996_place_39;
return (fexpr__51063.cljs$core$IFn$_invoke$arity$1 ? fexpr__51063.cljs$core$IFn$_invoke$arity$1(G__51064) : fexpr__51063.call(null,G__51064));
})();
var cr50996_place_42 = (function (){var G__51067 = cr50996_place_38;
var G__51068 = cr50996_place_41;
var fexpr__51066 = cr50996_place_37;
return (fexpr__51066.cljs$core$IFn$_invoke$arity$2 ? fexpr__51066.cljs$core$IFn$_invoke$arity$2(G__51067,G__51068) : fexpr__51066.call(null,G__51067,G__51068));
})();
(cr50996_state[(0)] = cr50996_block_1);

(cr50996_state[(2)] = null);

(cr50996_state[(1)] = cr50996_place_42);

return cr50996_state;
}catch (e51060){var cr50996_exception = e51060;
(cr50996_state[(0)] = null);

(cr50996_state[(2)] = null);

(cr50996_state[(1)] = null);

throw cr50996_exception;
}});
var cr50996_block_8 = (function hyperfiddle$electric$impl$io$message_reader_$_cr50996_block_8(cr50996_state){
try{var cr50996_place_9 = (cr50996_state[(1)]);
var cr50996_place_10 = (cr50996_state[(2)]);
var cr50996_place_28 = (cr50996_state[(4)]);
var cr50996_place_8 = (cr50996_state[(6)]);
var cr50996_place_35 = (function (){var G__51076 = cr50996_place_10;
var G__51077 = cr50996_place_28;
var fexpr__51075 = cr50996_place_9;
return (fexpr__51075.cljs$core$IFn$_invoke$arity$2 ? fexpr__51075.cljs$core$IFn$_invoke$arity$2(G__51076,G__51077) : fexpr__51075.call(null,G__51076,G__51077));
})();
var cr50996_place_36 = (function (){var G__51079 = cr50996_place_35;
var fexpr__51078 = cr50996_place_8;
return (fexpr__51078.cljs$core$IFn$_invoke$arity$1 ? fexpr__51078.cljs$core$IFn$_invoke$arity$1(G__51079) : fexpr__51078.call(null,G__51079));
})();
(cr50996_state[(0)] = cr50996_block_10);

(cr50996_state[(1)] = null);

(cr50996_state[(2)] = null);

(cr50996_state[(4)] = null);

(cr50996_state[(6)] = null);

(cr50996_state[(3)] = cr50996_place_36);

return cr50996_state;
}catch (e51071){var cr50996_exception = e51071;
(cr50996_state[(0)] = null);

(cr50996_state[(1)] = null);

(cr50996_state[(2)] = null);

(cr50996_state[(4)] = null);

(cr50996_state[(6)] = null);

(cr50996_state[(3)] = null);

throw cr50996_exception;
}});
var cr50996_block_3 = (function hyperfiddle$electric$impl$io$message_reader_$_cr50996_block_3(cr50996_state){
try{var cr50996_place_4 = (cr50996_state[(2)]);
var cr50996_place_2 = (cr50996_state[(1)]);
var cr50996_place_8 = cljs.core.persistent_BANG_;
var cr50996_place_9 = cljs.core.conj_BANG_;
var cr50996_place_10 = cr50996_place_2;
var cr50996_place_11 = cr50996_place_4;
var cr50996_place_12 = cljs.core.transient$;
var cr50996_place_13 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr50996_place_14 = (function (){var G__51086 = cr50996_place_13;
var fexpr__51085 = cr50996_place_12;
return (fexpr__51085.cljs$core$IFn$_invoke$arity$1 ? fexpr__51085.cljs$core$IFn$_invoke$arity$1(G__51086) : fexpr__51085.call(null,G__51086));
})();
(cr50996_state[(0)] = cr50996_block_4);

(cr50996_state[(2)] = null);

(cr50996_state[(1)] = null);

(cr50996_state[(6)] = cr50996_place_8);

(cr50996_state[(1)] = cr50996_place_9);

(cr50996_state[(2)] = cr50996_place_10);

(cr50996_state[(4)] = cr50996_place_11);

(cr50996_state[(5)] = cr50996_place_14);

return cr50996_state;
}catch (e51083){var cr50996_exception = e51083;
(cr50996_state[(0)] = null);

(cr50996_state[(2)] = null);

(cr50996_state[(1)] = null);

(cr50996_state[(3)] = null);

throw cr50996_exception;
}});
var cr50996_block_5 = (function hyperfiddle$electric$impl$io$message_reader_$_cr50996_block_5(cr50996_state){
try{var cr50996_place_29 = _QMARK_read;
(cr50996_state[(0)] = cr50996_block_6);

return missionary.core.park(cr50996_place_29);
}catch (e51089){var cr50996_exception = e51089;
(cr50996_state[(0)] = null);

(cr50996_state[(7)] = null);

(cr50996_state[(1)] = null);

(cr50996_state[(2)] = null);

(cr50996_state[(4)] = null);

(cr50996_state[(5)] = null);

(cr50996_state[(6)] = null);

(cr50996_state[(3)] = null);

throw cr50996_exception;
}});
var cr50996_block_1 = (function hyperfiddle$electric$impl$io$message_reader_$_cr50996_block_1(cr50996_state){
try{var cr50996_place_3 = _QMARK_read;
(cr50996_state[(0)] = cr50996_block_2);

return missionary.core.park(cr50996_place_3);
}catch (e51091){var cr50996_exception = e51091;
(cr50996_state[(0)] = null);

(cr50996_state[(1)] = null);

throw cr50996_exception;
}});
var cr50996_block_4 = (function hyperfiddle$electric$impl$io$message_reader_$_cr50996_block_4(cr50996_state){
try{var cr50996_place_11 = (cr50996_state[(4)]);
var cr50996_place_14 = (cr50996_state[(5)]);
var cr50996_place_15 = hyperfiddle.electric.impl.io.decode_numbers;
var cr50996_place_16 = cr50996_place_11;
var cr50996_place_17 = (function (){var G__51094 = cr50996_place_16;
var fexpr__51093 = cr50996_place_15;
return (fexpr__51093.cljs$core$IFn$_invoke$arity$1 ? fexpr__51093.cljs$core$IFn$_invoke$arity$1(G__51094) : fexpr__51093.call(null,G__51094));
})();
var cr50996_place_18 = cljs.core.reduce;
var cr50996_place_19 = cljs.core.conj_BANG_;
var cr50996_place_20 = cr50996_place_14;
var cr50996_place_21 = cr50996_place_17;
var cr50996_place_22 = (function (){var G__51096 = cr50996_place_19;
var G__51097 = cr50996_place_20;
var G__51098 = cr50996_place_21;
var fexpr__51095 = cr50996_place_18;
return (fexpr__51095.cljs$core$IFn$_invoke$arity$3 ? fexpr__51095.cljs$core$IFn$_invoke$arity$3(G__51096,G__51097,G__51098) : fexpr__51095.call(null,G__51096,G__51097,G__51098));
})();
var cr50996_place_23 = cljs.core.count;
var cr50996_place_24 = cr50996_place_17;
var cr50996_place_25 = (function (){var G__51101 = cr50996_place_24;
var fexpr__51100 = cr50996_place_23;
return (fexpr__51100.cljs$core$IFn$_invoke$arity$1 ? fexpr__51100.cljs$core$IFn$_invoke$arity$1(G__51101) : fexpr__51100.call(null,G__51101));
})();
var cr50996_place_26 = hyperfiddle.electric.impl.io.chunk_size;
var cr50996_place_27 = (cr50996_place_25 < cr50996_place_26);
var cr50996_place_28 = null;
if(cr50996_place_27){
(cr50996_state[(0)] = cr50996_block_7);

(cr50996_state[(4)] = null);

(cr50996_state[(5)] = null);

(cr50996_state[(7)] = cr50996_place_22);

(cr50996_state[(4)] = cr50996_place_28);

return cr50996_state;
} else {
(cr50996_state[(0)] = cr50996_block_5);

(cr50996_state[(7)] = cr50996_place_22);

return cr50996_state;
}
}catch (e51092){var cr50996_exception = e51092;
(cr50996_state[(0)] = null);

(cr50996_state[(1)] = null);

(cr50996_state[(2)] = null);

(cr50996_state[(4)] = null);

(cr50996_state[(5)] = null);

(cr50996_state[(6)] = null);

(cr50996_state[(3)] = null);

throw cr50996_exception;
}});
var cr50996_block_6 = (function hyperfiddle$electric$impl$io$message_reader_$_cr50996_block_6(cr50996_state){
try{var cr50996_place_22 = (cr50996_state[(7)]);
var cr50996_place_30 = missionary.core.unpark();
var cr50996_place_31 = cr50996_place_22;
(cr50996_state[(0)] = cr50996_block_4);

(cr50996_state[(7)] = null);

(cr50996_state[(4)] = cr50996_place_30);

(cr50996_state[(5)] = cr50996_place_31);

return cr50996_state;
}catch (e51104){var cr50996_exception = e51104;
(cr50996_state[(0)] = null);

(cr50996_state[(7)] = null);

(cr50996_state[(1)] = null);

(cr50996_state[(2)] = null);

(cr50996_state[(4)] = null);

(cr50996_state[(5)] = null);

(cr50996_state[(6)] = null);

(cr50996_state[(3)] = null);

throw cr50996_exception;
}});
var cr50996_block_10 = (function hyperfiddle$electric$impl$io$message_reader_$_cr50996_block_10(cr50996_state){
try{var cr50996_place_7 = (cr50996_state[(3)]);
(cr50996_state[(0)] = null);

(cr50996_state[(3)] = null);

return cr50996_place_7;
}catch (e51108){var cr50996_exception = e51108;
(cr50996_state[(0)] = null);

(cr50996_state[(3)] = null);

throw cr50996_exception;
}});
return cloroutine.impl.coroutine((function (){var G__51112 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8));
(G__51112[(0)] = cr50996_block_0);

return G__51112;
})());
})(),missionary.core.sp_run);
});
/**
 * Returns a function taking an Electric message and returning a task writing it as individual frames using provided
 * function. Might cut a message into chunks if its size would exceed the server payload limit.
 * An empty message (0b) is written to notify the end of frame.
 */
hyperfiddle.electric.impl.io.message_writer = (function hyperfiddle$electric$impl$io$message_writer(write){
return (function (p1__51113_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr51115_block_14 = (function hyperfiddle$electric$impl$io$message_writer_$_cr51115_block_14(cr51115_state){
try{var cr51115_place_9 = (cr51115_state[(1)]);
(cr51115_state[(0)] = null);

(cr51115_state[(1)] = null);

return cr51115_place_9;
}catch (e51229){var cr51115_exception = e51229;
(cr51115_state[(0)] = null);

(cr51115_state[(1)] = null);

throw cr51115_exception;
}});
var cr51115_block_12 = (function hyperfiddle$electric$impl$io$message_writer_$_cr51115_block_12(cr51115_state){
try{var cr51115_place_48 = (cr51115_state[(2)]);
var cr51115_place_72 = missionary.core.unpark();
var cr51115_place_73 = cljs.core.subvec;
var cr51115_place_74 = cr51115_place_48;
var cr51115_place_75 = hyperfiddle.electric.impl.io.chunk_size;
var cr51115_place_76 = (function (){var G__51236 = cr51115_place_74;
var G__51237 = cr51115_place_75;
var fexpr__51235 = cr51115_place_73;
return (fexpr__51235.cljs$core$IFn$_invoke$arity$2 ? fexpr__51235.cljs$core$IFn$_invoke$arity$2(G__51236,G__51237) : fexpr__51235.call(null,G__51236,G__51237));
})();
(cr51115_state[(0)] = cr51115_block_8);

(cr51115_state[(2)] = cr51115_place_76);

return cr51115_state;
}catch (e51233){var cr51115_exception = e51233;
(cr51115_state[(0)] = null);

(cr51115_state[(2)] = null);

(cr51115_state[(1)] = null);

throw cr51115_exception;
}});
var cr51115_block_5 = (function hyperfiddle$electric$impl$io$message_writer_$_cr51115_block_5(cr51115_state){
try{var cr51115_place_26 = (cr51115_state[(2)]);
var cr51115_place_27 = (cr51115_state[(5)]);
var cr51115_place_40 = (cljs.core.truth_(cr51115_place_27)?(function(){throw cr51115_place_26})():cr51115_place_26);
var cr51115_place_41 = write;
var cr51115_place_42 = cr51115_place_40;
var cr51115_place_43 = (function (){var G__51240 = cr51115_place_42;
var fexpr__51239 = cr51115_place_41;
return (fexpr__51239.cljs$core$IFn$_invoke$arity$1 ? fexpr__51239.cljs$core$IFn$_invoke$arity$1(G__51240) : fexpr__51239.call(null,G__51240));
})();
(cr51115_state[(0)] = cr51115_block_6);

(cr51115_state[(2)] = null);

(cr51115_state[(5)] = null);

return missionary.core.park(cr51115_place_43);
}catch (e51238){var cr51115_exception = e51238;
(cr51115_state[(0)] = null);

(cr51115_state[(2)] = null);

(cr51115_state[(3)] = null);

(cr51115_state[(1)] = null);

(cr51115_state[(5)] = null);

throw cr51115_exception;
}});
var cr51115_block_1 = (function hyperfiddle$electric$impl$io$message_writer_$_cr51115_block_1(cr51115_state){
try{var cr51115_place_4 = (cr51115_state[(1)]);
var cr51115_place_5 = cr51115_place_4;
var cr51115_place_6 = cr51115_place_5;
var cr51115_place_7 = null;
var cr51115_place_8 = (cr51115_place_6 == cr51115_place_7);
var cr51115_place_9 = null;
if(cr51115_place_8){
(cr51115_state[(0)] = cr51115_block_7);

(cr51115_state[(1)] = null);

(cr51115_state[(1)] = cr51115_place_9);

return cr51115_state;
} else {
(cr51115_state[(0)] = cr51115_block_2);

(cr51115_state[(2)] = cr51115_place_5);

return cr51115_state;
}
}catch (e51241){var cr51115_exception = e51241;
(cr51115_state[(0)] = null);

(cr51115_state[(1)] = null);

throw cr51115_exception;
}});
var cr51115_block_8 = (function hyperfiddle$electric$impl$io$message_writer_$_cr51115_block_8(cr51115_state){
try{var cr51115_place_48 = (cr51115_state[(2)]);
var cr51115_place_49 = cljs.core.count;
var cr51115_place_50 = cr51115_place_48;
var cr51115_place_51 = (function (){var G__51244 = cr51115_place_50;
var fexpr__51243 = cr51115_place_49;
return (fexpr__51243.cljs$core$IFn$_invoke$arity$1 ? fexpr__51243.cljs$core$IFn$_invoke$arity$1(G__51244) : fexpr__51243.call(null,G__51244));
})();
var cr51115_place_52 = hyperfiddle.electric.impl.io.chunk_size;
var cr51115_place_53 = (cr51115_place_51 >= cr51115_place_52);
var cr51115_place_54 = null;
if(cr51115_place_53){
(cr51115_state[(0)] = cr51115_block_11);

return cr51115_state;
} else {
(cr51115_state[(0)] = cr51115_block_9);

(cr51115_state[(3)] = cr51115_place_54);

return cr51115_state;
}
}catch (e51242){var cr51115_exception = e51242;
(cr51115_state[(0)] = null);

(cr51115_state[(2)] = null);

(cr51115_state[(1)] = null);

throw cr51115_exception;
}});
var cr51115_block_4 = (function hyperfiddle$electric$impl$io$message_writer_$_cr51115_block_4(cr51115_state){
try{var cr51115_place_26 = (cr51115_state[(2)]);
var cr51115_place_20 = (cr51115_state[(4)]);
var cr51115_place_31 = cr51115_place_26;
var cr51115_place_32 = cljs.core.ex_info;
var cr51115_place_33 = "Failed to encode";
var cr51115_place_34 = new cljs.core.Keyword(null,"value","value",305978217);
var cr51115_place_35 = cr51115_place_20;
var cr51115_place_36 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr51115_place_34,cr51115_place_35]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr51115_place_37 = cr51115_place_31;
var cr51115_place_38 = (function (){var G__51247 = cr51115_place_33;
var G__51248 = cr51115_place_36;
var G__51249 = cr51115_place_37;
var fexpr__51246 = cr51115_place_32;
return (fexpr__51246.cljs$core$IFn$_invoke$arity$3 ? fexpr__51246.cljs$core$IFn$_invoke$arity$3(G__51247,G__51248,G__51249) : fexpr__51246.call(null,G__51247,G__51248,G__51249));
})();
var cr51115_place_39 = (function(){throw cr51115_place_38})();
(cr51115_state[(0)] = null);

(cr51115_state[(2)] = null);

(cr51115_state[(3)] = null);

(cr51115_state[(4)] = null);

(cr51115_state[(1)] = null);

(cr51115_state[(5)] = null);

return null;
}catch (e51245){var cr51115_exception = e51245;
(cr51115_state[(0)] = cr51115_block_5);

(cr51115_state[(4)] = null);

(cr51115_state[(2)] = cr51115_exception);

(cr51115_state[(5)] = true);

return cr51115_state;
}});
var cr51115_block_2 = (function hyperfiddle$electric$impl$io$message_writer_$_cr51115_block_2(cr51115_state){
try{var cr51115_place_5 = (cr51115_state[(2)]);
var cr51115_place_10 = cr51115_place_5;
var cr51115_place_11 = cljs.core.seq;
var cr51115_place_12 = cr51115_place_10;
var cr51115_place_13 = (function (){var G__51252 = cr51115_place_12;
var fexpr__51251 = cr51115_place_11;
return (fexpr__51251.cljs$core$IFn$_invoke$arity$1 ? fexpr__51251.cljs$core$IFn$_invoke$arity$1(G__51252) : fexpr__51251.call(null,G__51252));
})();
var cr51115_place_14 = cljs.core.first;
var cr51115_place_15 = cr51115_place_13;
var cr51115_place_16 = (function (){var G__51254 = cr51115_place_15;
var fexpr__51253 = cr51115_place_14;
return (fexpr__51253.cljs$core$IFn$_invoke$arity$1 ? fexpr__51253.cljs$core$IFn$_invoke$arity$1(G__51254) : fexpr__51253.call(null,G__51254));
})();
var cr51115_place_17 = cljs.core.next;
var cr51115_place_18 = cr51115_place_13;
var cr51115_place_19 = (function (){var G__51256 = cr51115_place_18;
var fexpr__51255 = cr51115_place_17;
return (fexpr__51255.cljs$core$IFn$_invoke$arity$1 ? fexpr__51255.cljs$core$IFn$_invoke$arity$1(G__51256) : fexpr__51255.call(null,G__51256));
})();
var cr51115_place_20 = cr51115_place_16;
var cr51115_place_21 = cr51115_place_19;
var cr51115_place_22 = console.debug;
var cr51115_place_23 = "\uD83D\uDD3C";
var cr51115_place_24 = cr51115_place_20;
var cr51115_place_25 = (function (){var G__51258 = cr51115_place_23;
var G__51259 = cr51115_place_24;
var fexpr__51257 = cr51115_place_22;
return (fexpr__51257.cljs$core$IFn$_invoke$arity$2 ? fexpr__51257.cljs$core$IFn$_invoke$arity$2(G__51258,G__51259) : fexpr__51257.call(null,G__51258,G__51259));
})();
var cr51115_place_26 = null;
var cr51115_place_27 = false;
(cr51115_state[(0)] = cr51115_block_3);

(cr51115_state[(2)] = null);

(cr51115_state[(2)] = cr51115_place_26);

(cr51115_state[(3)] = cr51115_place_21);

(cr51115_state[(4)] = cr51115_place_20);

(cr51115_state[(5)] = cr51115_place_27);

return cr51115_state;
}catch (e51250){var cr51115_exception = e51250;
(cr51115_state[(0)] = null);

(cr51115_state[(2)] = null);

(cr51115_state[(1)] = null);

throw cr51115_exception;
}});
var cr51115_block_7 = (function hyperfiddle$electric$impl$io$message_writer_$_cr51115_block_7(cr51115_state){
try{var cr51115_place_46 = cljs.core.peek;
var cr51115_place_47 = p1__51113_SHARP_;
var cr51115_place_48 = (function (){var G__51262 = cr51115_place_47;
var fexpr__51261 = cr51115_place_46;
return (fexpr__51261.cljs$core$IFn$_invoke$arity$1 ? fexpr__51261.cljs$core$IFn$_invoke$arity$1(G__51262) : fexpr__51261.call(null,G__51262));
})();
(cr51115_state[(0)] = cr51115_block_8);

(cr51115_state[(2)] = cr51115_place_48);

return cr51115_state;
}catch (e51260){var cr51115_exception = e51260;
(cr51115_state[(0)] = null);

(cr51115_state[(1)] = null);

throw cr51115_exception;
}});
var cr51115_block_3 = (function hyperfiddle$electric$impl$io$message_writer_$_cr51115_block_3(cr51115_state){
try{var cr51115_place_20 = (cr51115_state[(4)]);
var cr51115_place_28 = hyperfiddle.electric.impl.io.encode;
var cr51115_place_29 = cr51115_place_20;
var cr51115_place_30 = (function (){var G__51265 = cr51115_place_29;
var fexpr__51264 = cr51115_place_28;
return (fexpr__51264.cljs$core$IFn$_invoke$arity$1 ? fexpr__51264.cljs$core$IFn$_invoke$arity$1(G__51265) : fexpr__51264.call(null,G__51265));
})();
(cr51115_state[(0)] = cr51115_block_5);

(cr51115_state[(4)] = null);

(cr51115_state[(2)] = cr51115_place_30);

return cr51115_state;
}catch (e51263){var cr51115_exception = e51263;
(cr51115_state[(0)] = cr51115_block_4);

(cr51115_state[(2)] = cr51115_exception);

return cr51115_state;
}});
var cr51115_block_9 = (function hyperfiddle$electric$impl$io$message_writer_$_cr51115_block_9(cr51115_state){
try{var cr51115_place_48 = (cr51115_state[(2)]);
var cr51115_place_55 = hyperfiddle.electric.impl.io.encode_numbers;
var cr51115_place_56 = cr51115_place_48;
var cr51115_place_57 = (function (){var G__51268 = cr51115_place_56;
var fexpr__51267 = cr51115_place_55;
return (fexpr__51267.cljs$core$IFn$_invoke$arity$1 ? fexpr__51267.cljs$core$IFn$_invoke$arity$1(G__51268) : fexpr__51267.call(null,G__51268));
})();
var cr51115_place_58 = write;
var cr51115_place_59 = cr51115_place_57;
var cr51115_place_60 = (function (){var G__51270 = cr51115_place_59;
var fexpr__51269 = cr51115_place_58;
return (fexpr__51269.cljs$core$IFn$_invoke$arity$1 ? fexpr__51269.cljs$core$IFn$_invoke$arity$1(G__51270) : fexpr__51269.call(null,G__51270));
})();
(cr51115_state[(0)] = cr51115_block_10);

(cr51115_state[(2)] = null);

return missionary.core.park(cr51115_place_60);
}catch (e51266){var cr51115_exception = e51266;
(cr51115_state[(0)] = null);

(cr51115_state[(3)] = null);

(cr51115_state[(2)] = null);

(cr51115_state[(1)] = null);

throw cr51115_exception;
}});
var cr51115_block_13 = (function hyperfiddle$electric$impl$io$message_writer_$_cr51115_block_13(cr51115_state){
try{var cr51115_place_54 = (cr51115_state[(3)]);
(cr51115_state[(0)] = cr51115_block_14);

(cr51115_state[(3)] = null);

(cr51115_state[(1)] = cr51115_place_54);

return cr51115_state;
}catch (e51271){var cr51115_exception = e51271;
(cr51115_state[(0)] = null);

(cr51115_state[(3)] = null);

(cr51115_state[(1)] = null);

throw cr51115_exception;
}});
var cr51115_block_0 = (function hyperfiddle$electric$impl$io$message_writer_$_cr51115_block_0(cr51115_state){
try{var cr51115_place_0 = cljs.core.seq;
var cr51115_place_1 = cljs.core.pop;
var cr51115_place_2 = p1__51113_SHARP_;
var cr51115_place_3 = (function (){var G__51274 = cr51115_place_2;
var fexpr__51273 = cr51115_place_1;
return (fexpr__51273.cljs$core$IFn$_invoke$arity$1 ? fexpr__51273.cljs$core$IFn$_invoke$arity$1(G__51274) : fexpr__51273.call(null,G__51274));
})();
var cr51115_place_4 = (function (){var G__51276 = cr51115_place_3;
var fexpr__51275 = cr51115_place_0;
return (fexpr__51275.cljs$core$IFn$_invoke$arity$1 ? fexpr__51275.cljs$core$IFn$_invoke$arity$1(G__51276) : fexpr__51275.call(null,G__51276));
})();
(cr51115_state[(0)] = cr51115_block_1);

(cr51115_state[(1)] = cr51115_place_4);

return cr51115_state;
}catch (e51272){var cr51115_exception = e51272;
(cr51115_state[(0)] = null);

throw cr51115_exception;
}});
var cr51115_block_10 = (function hyperfiddle$electric$impl$io$message_writer_$_cr51115_block_10(cr51115_state){
try{var cr51115_place_61 = missionary.core.unpark();
(cr51115_state[(0)] = cr51115_block_13);

(cr51115_state[(3)] = cr51115_place_61);

return cr51115_state;
}catch (e51277){var cr51115_exception = e51277;
(cr51115_state[(0)] = null);

(cr51115_state[(3)] = null);

(cr51115_state[(1)] = null);

throw cr51115_exception;
}});
var cr51115_block_6 = (function hyperfiddle$electric$impl$io$message_writer_$_cr51115_block_6(cr51115_state){
try{var cr51115_place_21 = (cr51115_state[(3)]);
var cr51115_place_44 = missionary.core.unpark();
var cr51115_place_45 = cr51115_place_21;
(cr51115_state[(0)] = cr51115_block_1);

(cr51115_state[(3)] = null);

(cr51115_state[(1)] = cr51115_place_45);

return cr51115_state;
}catch (e51278){var cr51115_exception = e51278;
(cr51115_state[(0)] = null);

(cr51115_state[(3)] = null);

(cr51115_state[(1)] = null);

throw cr51115_exception;
}});
var cr51115_block_11 = (function hyperfiddle$electric$impl$io$message_writer_$_cr51115_block_11(cr51115_state){
try{var cr51115_place_48 = (cr51115_state[(2)]);
var cr51115_place_62 = hyperfiddle.electric.impl.io.encode_numbers;
var cr51115_place_63 = cljs.core.subvec;
var cr51115_place_64 = cr51115_place_48;
var cr51115_place_65 = (0);
var cr51115_place_66 = hyperfiddle.electric.impl.io.chunk_size;
var cr51115_place_67 = (function (){var G__51281 = cr51115_place_64;
var G__51282 = cr51115_place_65;
var G__51283 = cr51115_place_66;
var fexpr__51280 = cr51115_place_63;
return (fexpr__51280.cljs$core$IFn$_invoke$arity$3 ? fexpr__51280.cljs$core$IFn$_invoke$arity$3(G__51281,G__51282,G__51283) : fexpr__51280.call(null,G__51281,G__51282,G__51283));
})();
var cr51115_place_68 = (function (){var G__51285 = cr51115_place_67;
var fexpr__51284 = cr51115_place_62;
return (fexpr__51284.cljs$core$IFn$_invoke$arity$1 ? fexpr__51284.cljs$core$IFn$_invoke$arity$1(G__51285) : fexpr__51284.call(null,G__51285));
})();
var cr51115_place_69 = write;
var cr51115_place_70 = cr51115_place_68;
var cr51115_place_71 = (function (){var G__51287 = cr51115_place_70;
var fexpr__51286 = cr51115_place_69;
return (fexpr__51286.cljs$core$IFn$_invoke$arity$1 ? fexpr__51286.cljs$core$IFn$_invoke$arity$1(G__51287) : fexpr__51286.call(null,G__51287));
})();
(cr51115_state[(0)] = cr51115_block_12);

return missionary.core.park(cr51115_place_71);
}catch (e51279){var cr51115_exception = e51279;
(cr51115_state[(0)] = null);

(cr51115_state[(2)] = null);

(cr51115_state[(1)] = null);

throw cr51115_exception;
}});
return cloroutine.impl.coroutine((function (){var G__51288 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__51288[(0)] = cr51115_block_0);

return G__51288;
})());
})(),missionary.core.sp_run);
});
});
/**
 * A transducer partitioning a sequence of network messages into Electric events.
 */
hyperfiddle.electric.impl.io.decoder = (function hyperfiddle$electric$impl$io$decoder(rf){
var data = (function (){var G__51289 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__51289[(0)] = cljs.core.PersistentVector.EMPTY);

(G__51289[(1)] = cljs.core.PersistentVector.EMPTY);

return G__51289;
})();
return (function() {
var G__51331 = null;
var G__51331__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__51331__1 = (function (r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,(data[(0)]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(data[(1)])], 0))){
} else {
throw (new Error("Assert failed: (= [] (aget data 0) (aget data 1))"));
}

return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__51331__2 = (function (r,x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(data[(1)]))){
} else {
throw (new Error("Assert failed: (= [] (aget data 1))"));
}

(data[(0)] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((data[(0)]),hyperfiddle.electric.impl.io.decode_str(x)));

return r;
} else {
var xs = hyperfiddle.electric.impl.io.decode_numbers(x);
(data[(1)] = cljs.core.into.cljs$core$IFn$_invoke$arity$2((data[(1)]),xs));

if((cljs.core.count(xs) < hyperfiddle.electric.impl.io.chunk_size)){
var x__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((data[(0)]),(data[(1)]));
(data[(0)] = cljs.core.PersistentVector.EMPTY);

(data[(1)] = cljs.core.PersistentVector.EMPTY);

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(r,x__$1) : rf.call(null,r,x__$1));
} else {
return r;
}
}
});
G__51331 = function(r,x){
switch(arguments.length){
case 0:
return G__51331__0.call(this);
case 1:
return G__51331__1.call(this,r);
case 2:
return G__51331__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51331.cljs$core$IFn$_invoke$arity$0 = G__51331__0;
G__51331.cljs$core$IFn$_invoke$arity$1 = G__51331__1;
G__51331.cljs$core$IFn$_invoke$arity$2 = G__51331__2;
return G__51331;
})()
});
/**
 * A transducer expanding Electric events to a sequence of network messages.
 */
hyperfiddle.electric.impl.io.encoder = (function hyperfiddle$electric$impl$io$encoder(rf){
return (function() {
var G__51332 = null;
var G__51332__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__51332__1 = (function (r){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__51332__2 = (function (r,x){
var r__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode),cljs.core.pop(x)], 0)));
var r__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r__$1,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.chunk_size),cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode_numbers),cljs.core.peek(x)], 0)));
var G__51290 = cljs.core.mod(cljs.core.count(cljs.core.peek(x)),hyperfiddle.electric.impl.io.chunk_size);
switch (G__51290) {
case (0):
var G__51291 = r__$2;
var G__51292 = hyperfiddle.electric.impl.io.encode_numbers(cljs.core.PersistentVector.EMPTY);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__51291,G__51292) : rf.call(null,G__51291,G__51292));

break;
default:
return r__$2;

}
});
G__51332 = function(r,x){
switch(arguments.length){
case 0:
return G__51332__0.call(this);
case 1:
return G__51332__1.call(this,r);
case 2:
return G__51332__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51332.cljs$core$IFn$_invoke$arity$0 = G__51332__0;
G__51332.cljs$core$IFn$_invoke$arity$1 = G__51332__1;
G__51332.cljs$core$IFn$_invoke$arity$2 = G__51332__2;
return G__51332;
})()
});
hyperfiddle.electric.impl.io.foreach = (function hyperfiddle$electric$impl$io$foreach(var_args){
var G__51294 = arguments.length;
switch (G__51294) {
case 1:
return hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$1 = (function (r){
return r;
}));

(hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$2 = (function (r,x){
(r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(x) : r.call(null,x));

return r;
}));

(hyperfiddle.electric.impl.io.foreach.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=hyperfiddle.electric.impl.io.js.map
