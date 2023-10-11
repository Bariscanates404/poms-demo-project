goog.provide('hyperfiddle.electric.debug');
hyperfiddle.electric.debug.__GT_id = (function hyperfiddle$electric$debug$__GT_id(){
return cljs.core.random_uuid();
});
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.debug !== 'undefined') && (typeof hyperfiddle.electric.debug.PEER_ID !== 'undefined')){
} else {
/**
 * A random unique ID generated for each Electric runtime instance (browser tab, jvm). Used to identify origin of a transfered value.
 */
hyperfiddle.electric.debug.PEER_ID = hyperfiddle.electric.debug.__GT_id();
}
hyperfiddle.electric.debug.ex_info_STAR_ = (function hyperfiddle$electric$debug$ex_info_STAR_(var_args){
var G__49693 = arguments.length;
switch (G__49693) {
case 2:
return hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (message,data){
return hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$3(message,data,null);
}));

(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (message,data,cause){
return hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4(message,data,cljs.core.str.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.debug.__GT_id()),cause);
}));

(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (message,data,id,cause){
return (new hyperfiddle.electric.FailureInfo(message,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079),new cljs.core.Keyword("hyperfiddle.electric.debug","trace","hyperfiddle.electric.debug/trace",1332052033)),id,cause));
}));

(hyperfiddle.electric.debug.ex_info_STAR_.cljs$lang$maxFixedArity = 4);

hyperfiddle.electric.debug.generated__hyperfiddle_electric_debug_26 = (function hyperfiddle$electric$debug$generated__hyperfiddle_electric_debug_26(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.debug !== 'undefined') && (typeof hyperfiddle.electric.debug.t_hyperfiddle$electric$debug49989 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.debug.t_hyperfiddle$electric$debug49989 = (function (meta49990){
this.meta49990 = meta49990;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.debug.t_hyperfiddle$electric$debug49989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49991,meta49990__$1){
var self__ = this;
var _49991__$1 = this;
return (new hyperfiddle.electric.debug.t_hyperfiddle$electric$debug49989(meta49990__$1));
}));

(hyperfiddle.electric.debug.t_hyperfiddle$electric$debug49989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49991){
var self__ = this;
var _49991__$1 = this;
return self__.meta49990;
}));

(hyperfiddle.electric.debug.t_hyperfiddle$electric$debug49989.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.debug.t_hyperfiddle$electric$debug49989.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__50002 = (arguments.length - (1));
switch (G__50002) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.debug.t_hyperfiddle$electric$debug49989.prototype.apply = (function (self__,args49992){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args49992)));
}));

(hyperfiddle.electric.debug.t_hyperfiddle$electric$debug49989.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_49880){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(1,done_49880);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["2 traces with equal values are ="], 0));

try{var cause = (new Error());
try{var values__10703__auto___50242 = (new cljs.core.List(null,hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$3("",cljs.core.PersistentArrayMap.EMPTY,cause),(new cljs.core.List(null,hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$3("",cljs.core.PersistentArrayMap.EMPTY,cause),null,(1),null)),(2),null));
var result__10704__auto___50243 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50242);
if(cljs.core.truth_(result__10704__auto___50243)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"ex-info*","ex-info*",-1892754104,null),"",cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"cause","cause",1872432779,null)),cljs.core.list(new cljs.core.Symbol(null,"ex-info*","ex-info*",-1892754104,null),"",cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"cause","cause",1872432779,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50242),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"ex-info*","ex-info*",-1892754104,null),"",cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"cause","cause",1872432779,null)),cljs.core.list(new cljs.core.Symbol(null,"ex-info*","ex-info*",-1892754104,null),"",cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"cause","cause",1872432779,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50242),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50242);
}catch (e50018){var t__10691__auto___50244 = e50018;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"ex-info*","ex-info*",-1892754104,null),"",cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"cause","cause",1872432779,null)),cljs.core.list(new cljs.core.Symbol(null,"ex-info*","ex-info*",-1892754104,null),"",cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"cause","cause",1872432779,null))),null,t__10691__auto___50244,null]));
}finally {RCF__done_BANG_();
}
return null;
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.debug.t_hyperfiddle$electric$debug49989.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49990","meta49990",569188936,null)], null);
}));

(hyperfiddle.electric.debug.t_hyperfiddle$electric$debug49989.cljs$lang$type = true);

(hyperfiddle.electric.debug.t_hyperfiddle$electric$debug49989.cljs$lang$ctorStr = "hyperfiddle.electric.debug/t_hyperfiddle$electric$debug49989");

(hyperfiddle.electric.debug.t_hyperfiddle$electric$debug49989.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.debug/t_hyperfiddle$electric$debug49989");
}));

/**
 * Positional factory function for hyperfiddle.electric.debug/t_hyperfiddle$electric$debug49989.
 */
hyperfiddle.electric.debug.__GT_t_hyperfiddle$electric$debug49989 = (function hyperfiddle$electric$debug$generated__hyperfiddle_electric_debug_26_$___GT_t_hyperfiddle$electric$debug49989(meta49990){
return (new hyperfiddle.electric.debug.t_hyperfiddle$electric$debug49989(meta49990));
});

}

return (new hyperfiddle.electric.debug.t_hyperfiddle$electric$debug49989(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.debug.generated__hyperfiddle_electric_debug_26;},new cljs.core.Symbol("hyperfiddle.electric.debug","generated__hyperfiddle_electric_debug_26","hyperfiddle.electric.debug/generated__hyperfiddle_electric_debug_26",-305523909,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/debug.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hyperfiddle.electric.debug","hyperfiddle.electric.debug",652885955,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),26,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_debug_26","generated__hyperfiddle_electric_debug_26",-1648686749,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.debug.generated__hyperfiddle_electric_debug_26)?hyperfiddle.electric.debug.generated__hyperfiddle_electric_debug_26.cljs$lang$test:null)], null)),hyperfiddle.electric.debug.generated__hyperfiddle_electric_debug_26));
} else {
}
hyperfiddle.electric.debug.ex_id = (function hyperfiddle$electric$debug$ex_id(ex){
return ex.id;
});
hyperfiddle.electric.debug.add_stack_frame = (function hyperfiddle$electric$debug$add_stack_frame(frame,ex){
var frame__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frame,new cljs.core.Keyword("hyperfiddle.electric.debug","origin","hyperfiddle.electric.debug/origin",-1379474448),hyperfiddle.electric.debug.PEER_ID);
if((ex instanceof hyperfiddle.electric.FailureInfo)){
return hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4(cljs.core.ex_message(ex),cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.ex_data(ex),new cljs.core.Keyword("hyperfiddle.electric.debug","trace","hyperfiddle.electric.debug/trace",1332052033),cljs.core.conj,frame__$1),hyperfiddle.electric.debug.ex_id(ex),(function (){var or__5045__auto__ = cljs.core.ex_cause(ex);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ex;
}
})());
} else {
return hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.ex_message(ex),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.electric.debug","trace","hyperfiddle.electric.debug/trace",1332052033),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame__$1], null)], null),ex);
}
});
hyperfiddle.electric.debug.error = (function hyperfiddle$electric$debug$error(debug_info,failure){
var err = failure.error;
if((((err instanceof hyperfiddle.electric.Pending)) || ((err instanceof missionary.Cancelled)))){
return failure;
} else {
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.add_stack_frame(debug_info,err)));
}
});
hyperfiddle.electric.debug.generated__hyperfiddle_electric_debug_45 = (function hyperfiddle$electric$debug$generated__hyperfiddle_electric_debug_45(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.debug !== 'undefined') && (typeof hyperfiddle.electric.debug.t_hyperfiddle$electric$debug50136 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.debug.t_hyperfiddle$electric$debug50136 = (function (meta50137){
this.meta50137 = meta50137;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.debug.t_hyperfiddle$electric$debug50136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50138,meta50137__$1){
var self__ = this;
var _50138__$1 = this;
return (new hyperfiddle.electric.debug.t_hyperfiddle$electric$debug50136(meta50137__$1));
}));

(hyperfiddle.electric.debug.t_hyperfiddle$electric$debug50136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50138){
var self__ = this;
var _50138__$1 = this;
return self__.meta50137;
}));

(hyperfiddle.electric.debug.t_hyperfiddle$electric$debug50136.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.debug.t_hyperfiddle$electric$debug50136.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__50146 = (arguments.length - (1));
switch (G__50146) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.debug.t_hyperfiddle$electric$debug50136.prototype.apply = (function (self__,args50139){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args50139)));
}));

(hyperfiddle.electric.debug.t_hyperfiddle$electric$debug50136.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_50118){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(1,done_50118);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rewrapping keeps same ID"], 0));

try{hyperfiddle.electric.debug.ex = hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$2("x",cljs.core.PersistentArrayMap.EMPTY);

try{var values__10703__auto__ = (new cljs.core.List(null,hyperfiddle.electric.debug.ex_id(hyperfiddle.electric.debug.ex),(new cljs.core.List(null,hyperfiddle.electric.debug.ex_id(hyperfiddle.electric.debug.add_stack_frame(cljs.core.PersistentArrayMap.EMPTY,hyperfiddle.electric.debug.ex)),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"ex-id","ex-id",1057831677,null),new cljs.core.Symbol(null,"ex","ex",226760186,null)),cljs.core.list(new cljs.core.Symbol(null,"ex-id","ex-id",1057831677,null),cljs.core.list(new cljs.core.Symbol(null,"add-stack-frame","add-stack-frame",622546313,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"ex","ex",226760186,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"ex-id","ex-id",1057831677,null),new cljs.core.Symbol(null,"ex","ex",226760186,null)),cljs.core.list(new cljs.core.Symbol(null,"ex-id","ex-id",1057831677,null),cljs.core.list(new cljs.core.Symbol(null,"add-stack-frame","add-stack-frame",622546313,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"ex","ex",226760186,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e50151){var t__10691__auto__ = e50151;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"ex-id","ex-id",1057831677,null),new cljs.core.Symbol(null,"ex","ex",226760186,null)),cljs.core.list(new cljs.core.Symbol(null,"ex-id","ex-id",1057831677,null),cljs.core.list(new cljs.core.Symbol(null,"add-stack-frame","add-stack-frame",622546313,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"ex","ex",226760186,null)))),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.debug.t_hyperfiddle$electric$debug50136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50137","meta50137",-578829709,null)], null);
}));

(hyperfiddle.electric.debug.t_hyperfiddle$electric$debug50136.cljs$lang$type = true);

(hyperfiddle.electric.debug.t_hyperfiddle$electric$debug50136.cljs$lang$ctorStr = "hyperfiddle.electric.debug/t_hyperfiddle$electric$debug50136");

(hyperfiddle.electric.debug.t_hyperfiddle$electric$debug50136.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.debug/t_hyperfiddle$electric$debug50136");
}));

/**
 * Positional factory function for hyperfiddle.electric.debug/t_hyperfiddle$electric$debug50136.
 */
hyperfiddle.electric.debug.__GT_t_hyperfiddle$electric$debug50136 = (function hyperfiddle$electric$debug$generated__hyperfiddle_electric_debug_45_$___GT_t_hyperfiddle$electric$debug50136(meta50137){
return (new hyperfiddle.electric.debug.t_hyperfiddle$electric$debug50136(meta50137));
});

}

return (new hyperfiddle.electric.debug.t_hyperfiddle$electric$debug50136(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.debug.generated__hyperfiddle_electric_debug_45;},new cljs.core.Symbol("hyperfiddle.electric.debug","generated__hyperfiddle_electric_debug_45","hyperfiddle.electric.debug/generated__hyperfiddle_electric_debug_45",1570546084,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/debug.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hyperfiddle.electric.debug","hyperfiddle.electric.debug",652885955,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),45,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_debug_45","generated__hyperfiddle_electric_debug_45",-846357524,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.debug.generated__hyperfiddle_electric_debug_45)?hyperfiddle.electric.debug.generated__hyperfiddle_electric_debug_45.cljs$lang$test:null)], null)),hyperfiddle.electric.debug.generated__hyperfiddle_electric_debug_45));
} else {
}
hyperfiddle.electric.debug.render_arg = (function hyperfiddle$electric$debug$render_arg(arg){
if(typeof arg === 'string'){
return arg;
} else {
if(cljs.core.ident_QMARK_(arg)){
return arg;
} else {
if((((arg instanceof hyperfiddle.electric.Failure)) || ((arg instanceof Error)))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("<exception>");
} else {
var _STAR_print_level_STAR__orig_val__50167 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__orig_val__50168 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__temp_val__50169 = (1);
var _STAR_print_length_STAR__temp_val__50170 = (4);
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__50169);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__50170);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg], 0));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__50168);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__50167);
}
}
}
}
});
hyperfiddle.electric.debug.serializable_frame = (function hyperfiddle$electric$debug$serializable_frame(frame){
if(cljs.core.truth_(new cljs.core.Keyword("hyperfiddle.electric.debug","serializable","hyperfiddle.electric.debug/serializable",-2113729763).cljs$core$IFn$_invoke$arity$1(frame))){
return frame;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(frame,new cljs.core.Keyword("hyperfiddle.electric.debug","args","hyperfiddle.electric.debug/args",-1101355176),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,hyperfiddle.electric.debug.render_arg)),new cljs.core.Keyword("hyperfiddle.electric.debug","serializable","hyperfiddle.electric.debug/serializable",-2113729763),true);
}
});
hyperfiddle.electric.debug.serializable = (function hyperfiddle$electric$debug$serializable(map){
if(cljs.core.contains_QMARK_(map,new cljs.core.Keyword("hyperfiddle.electric.debug","trace","hyperfiddle.electric.debug/trace",1332052033))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(map,new cljs.core.Keyword("hyperfiddle.electric.debug","trace","hyperfiddle.electric.debug/trace",1332052033),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,hyperfiddle.electric.debug.serializable_frame));
} else {
return map;
}
});
hyperfiddle.electric.debug.normalize_frame = (function hyperfiddle$electric$debug$normalize_frame(frame){
var meta = new cljs.core.Keyword("hyperfiddle.electric.debug","meta","hyperfiddle.electric.debug/meta",-368038788).cljs$core$IFn$_invoke$arity$1(frame);
var dbg_in_meta = contrib.data.select_ns(new cljs.core.Keyword(null,"hyperfiddle.electric.debug","hyperfiddle.electric.debug",-987645572),new cljs.core.Keyword("hyperfiddle.electric.debug","meta","hyperfiddle.electric.debug/meta",-368038788).cljs$core$IFn$_invoke$arity$1(frame));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frame,dbg_in_meta,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.electric.debug","meta","hyperfiddle.electric.debug/meta",-368038788),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(meta,dbg_in_meta)], null)], 0));
});
hyperfiddle.electric.debug.stack_trace = (function hyperfiddle$electric$debug$stack_trace(err){
var G__50184 = new cljs.core.Keyword("hyperfiddle.electric.debug","trace","hyperfiddle.electric.debug/trace",1332052033).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(err));
var G__50184__$1 = (((G__50184 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (frame){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215).cljs$core$IFn$_invoke$arity$1(frame));
}),G__50184));
var G__50184__$2 = (((G__50184__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),G__50184__$1));
var G__50184__$3 = (((G__50184__$2 == null))?null:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,frame){
if(typeof frame === 'string'){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,frame);
} else {
var map__50190 = hyperfiddle.electric.debug.normalize_frame(frame);
var map__50190__$1 = cljs.core.__destructure_map(map__50190);
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50190__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","origin","hyperfiddle.electric.debug/origin",-1379474448));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50190__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50190__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50190__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","params","hyperfiddle.electric.debug/params",-1701534765));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50190__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","args","hyperfiddle.electric.debug/args",-1101355176));
var macro = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50190__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","macro","hyperfiddle.electric.debug/macro",-46765604));
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50190__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","scope","hyperfiddle.electric.debug/scope",-708382234));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50190__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","meta","hyperfiddle.electric.debug/meta",-368038788));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.debug.PEER_ID,origin);
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core.not((function (){var fexpr__50196 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transfer","transfer",327423400),null,new cljs.core.Keyword(null,"toggle","toggle",1291842030),null], null), null);
return (fexpr__50196.cljs$core$IFn$_invoke$arity$1 ? fexpr__50196.cljs$core$IFn$_invoke$arity$1(type) : fexpr__50196.call(null,type));
})());
if(and__5043__auto____$1){
return "remote";
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())?null:null),(function (){var G__50199 = scope;
var G__50199__$1 = (((G__50199 instanceof cljs.core.Keyword))?G__50199.fqn:null);
switch (G__50199__$1) {
case "lexical":
return "lexically bound";

break;
case "dynamic":
return "dynamically bound";

break;
default:
return null;

}
})()], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__50202 = type;
var G__50202__$1 = (((G__50202 instanceof cljs.core.Keyword))?G__50202.fqn:null);
switch (G__50202__$1) {
case "apply":
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"(",null,(1),null)),(new cljs.core.List(null,(function (){var G__50204 = name;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","fail","hyperfiddle.electric.impl.runtime/fail",-1672627762,null),G__50204)){
return new cljs.core.Symbol(null,"throw","throw",595905694,null);
} else {
return name;

}
})(),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.debug.render_arg,args),(new cljs.core.List(null,")",null,(1),null))], 0)))));

break;
case "eval":
var map__50205 = frame;
var map__50205__$1 = cljs.core.__destructure_map(map__50205);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50205__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","action","hyperfiddle.electric.debug/action",1557442480));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50205__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","target","hyperfiddle.electric.debug/target",2130291153));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50205__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","method","hyperfiddle.electric.debug/method",-1822364192));
var args__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50205__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","args","hyperfiddle.electric.debug/args",-1101355176));
var G__50209 = action;
var G__50209__$1 = (((G__50209 instanceof cljs.core.Keyword))?G__50209.fqn:null);
switch (G__50209__$1) {
case "field-access":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",[".-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)].join(''),target,")"], null);

break;
case "static-call":
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"(",null,(1),null)),(new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)].join(''),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.debug.render_arg,cljs.core.rest(args__$1)),(new cljs.core.List(null,")",null,(1),null))], 0)))));

break;
case "call":
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"(",null,(1),null)),(new cljs.core.List(null,[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)].join(''),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,target,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.debug.render_arg,cljs.core.rest(args__$1)),(new cljs.core.List(null,")",null,(1),null))], 0)))));

break;
case "fn-call":
if((!((name == null)))){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"(",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(params)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.debug.render_arg,args__$1),(new cljs.core.List(null,")",null,(1),null))], 0)))));
} else {
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"(",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(params)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.debug.render_arg,args__$1),(new cljs.core.List(null,")",null,(1),null))], 0)))));
}

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<unknown interop>",frame], null);

}

break;
case "reactive-fn":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reactive",(((!((name == null))))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),null,(1),null))], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),null,(1),null))], 0)))))], null);

break;
case "reactive-defn":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reactive",cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"defn","defn",-126010802,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),null,(1),null))], 0))))], null);

break;
case "try":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(try ...)"], null);

break;
case "catch":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),null,(1),null))], 0))))], null);

break;
case "finally":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(finally ...)"], null);

break;
case "case-clause":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"case","case",-1510733573,null),null,(1),null)),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),null,(1),null))], 0))))], null);

break;
case "case-default":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["case default branch"], null);

break;
case "transfer":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["transfer to",cljs.core.name(name)], null);

break;
case "toggle":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["transfer"], null);

break;
default:
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,"<unknow frame>",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425).cljs$core$IFn$_invoke$arity$1(frame),null,(1),null))))));

}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(macro)?["from macro ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(macro)].join(''):null),(function (){var G__50224 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(meta);
if((G__50224 == null)){
return null;
} else {
return ["in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50224)].join('');
}
})(),(function (){var G__50225 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(meta);
if((G__50225 == null)){
return null;
} else {
return ["line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50225)].join('');
}
})()], null))));
}
}),cljs.core.PersistentVector.EMPTY,G__50184__$2));
var G__50184__$4 = (((G__50184__$3 == null))?null:cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (frame){
if(typeof frame === 'string'){
return frame;
} else {
return [" in ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,frame))].join('');
}
}),G__50184__$3));
if((G__50184__$4 == null)){
return null;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",G__50184__$4);
}
});
hyperfiddle.electric.debug.unwrap = (function hyperfiddle$electric$debug$unwrap(exception){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric.debug","trace","hyperfiddle.electric.debug/trace",1332052033),new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(exception)))){
return cljs.core.ex_cause(exception);
} else {
return exception;
}
});

//# sourceMappingURL=hyperfiddle.electric.debug.js.map
