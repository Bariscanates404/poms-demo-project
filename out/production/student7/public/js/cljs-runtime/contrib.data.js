goog.provide('contrib.data');
/**
 * Qualify a keyword with a namespace. If already qualified, leave kw untouched. Nil-safe.
 *   (qualify :db :isComponent) -> :db/isComponent
 */
contrib.data.qualify = (function contrib$data$qualify(ns,_QMARK_kw){
if((!((ns == null)))){
} else {
throw (new Error("Assert failed: (some? ns)"));
}

if((_QMARK_kw instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? ?kw)"));
}

if(cljs.core.truth_(_QMARK_kw)){
if(cljs.core.qualified_keyword_QMARK_(_QMARK_kw)){
return _QMARK_kw;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.name(_QMARK_kw));
}
} else {
return null;
}
});
contrib.data.generated__contrib_data_16 = (function contrib$data$generated__contrib_data_16(){
if((typeof contrib !== 'undefined') && (typeof contrib.data !== 'undefined') && (typeof contrib.data.t_contrib$data46156 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.data.t_contrib$data46156 = (function (meta46157){
this.meta46157 = meta46157;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.data.t_contrib$data46156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46158,meta46157__$1){
var self__ = this;
var _46158__$1 = this;
return (new contrib.data.t_contrib$data46156(meta46157__$1));
}));

(contrib.data.t_contrib$data46156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46158){
var self__ = this;
var _46158__$1 = this;
return self__.meta46157;
}));

(contrib.data.t_contrib$data46156.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.data.t_contrib$data46156.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__46175 = (arguments.length - (1));
switch (G__46175) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.data.t_contrib$data46156.prototype.apply = (function (self__,args46163){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args46163)));
}));

(contrib.data.t_contrib$data46156.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_46060){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(2,done_46060);
try{var values__10703__auto___49703 = (new cljs.core.List(null,contrib.data.qualify(cljs.core.namespace(new cljs.core.Keyword("contrib.data","x","contrib.data/x",-13565696)),new cljs.core.Keyword(null,"limit","limit",-1355822363)),(new cljs.core.List(null,new cljs.core.Keyword("contrib.data","limit","contrib.data/limit",-316338484),null,(1),null)),(2),null));
var result__10704__auto___49704 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49703);
if(cljs.core.truth_(result__10704__auto___49704)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"qualify","qualify",-1088826041,null),cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Keyword("contrib.data","x","contrib.data/x",-13565696)),new cljs.core.Keyword(null,"limit","limit",-1355822363)),new cljs.core.Keyword("contrib.data","limit","contrib.data/limit",-316338484)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49703),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"qualify","qualify",-1088826041,null),cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Keyword("contrib.data","x","contrib.data/x",-13565696)),new cljs.core.Keyword(null,"limit","limit",-1355822363)),new cljs.core.Keyword("contrib.data","limit","contrib.data/limit",-316338484)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49703),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49703);
}catch (e46192){var t__10691__auto___49707 = e46192;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"qualify","qualify",-1088826041,null),cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Keyword("contrib.data","x","contrib.data/x",-13565696)),new cljs.core.Keyword(null,"limit","limit",-1355822363)),new cljs.core.Keyword("contrib.data","limit","contrib.data/limit",-316338484)),null,t__10691__auto___49707,null]));
}finally {RCF__done_BANG_();
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["leave qualified kws untouched"], 0));

try{try{var values__10703__auto__ = (new cljs.core.List(null,contrib.data.qualify(cljs.core.namespace(new cljs.core.Keyword("contrib.data","x","contrib.data/x",-13565696)),new cljs.core.Keyword("user","foo","user/foo",1263201669)),(new cljs.core.List(null,new cljs.core.Keyword("user","foo","user/foo",1263201669),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"qualify","qualify",-1088826041,null),cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Keyword("contrib.data","x","contrib.data/x",-13565696)),new cljs.core.Keyword("user","foo","user/foo",1263201669)),new cljs.core.Keyword("user","foo","user/foo",1263201669)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"qualify","qualify",-1088826041,null),cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Keyword("contrib.data","x","contrib.data/x",-13565696)),new cljs.core.Keyword("user","foo","user/foo",1263201669)),new cljs.core.Keyword("user","foo","user/foo",1263201669)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e46217){var t__10691__auto__ = e46217;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"qualify","qualify",-1088826041,null),cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Keyword("contrib.data","x","contrib.data/x",-13565696)),new cljs.core.Keyword("user","foo","user/foo",1263201669)),new cljs.core.Keyword("user","foo","user/foo",1263201669)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(contrib.data.t_contrib$data46156.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta46157","meta46157",-968883806,null)], null);
}));

(contrib.data.t_contrib$data46156.cljs$lang$type = true);

(contrib.data.t_contrib$data46156.cljs$lang$ctorStr = "contrib.data/t_contrib$data46156");

(contrib.data.t_contrib$data46156.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.data/t_contrib$data46156");
}));

/**
 * Positional factory function for contrib.data/t_contrib$data46156.
 */
contrib.data.__GT_t_contrib$data46156 = (function contrib$data$generated__contrib_data_16_$___GT_t_contrib$data46156(meta46157){
return (new contrib.data.t_contrib$data46156(meta46157));
});

}

return (new contrib.data.t_contrib$data46156(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.data.generated__contrib_data_16;},new cljs.core.Symbol("contrib.data","generated__contrib_data_16","contrib.data/generated__contrib_data_16",-1518551187,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/data.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.data","contrib.data",324393651,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),16,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_data_16","generated__contrib_data_16",1464890126,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.data.generated__contrib_data_16)?contrib.data.generated__contrib_data_16.cljs$lang$test:null)], null)),contrib.data.generated__contrib_data_16));
} else {
}
/**
 * Strip namespace from keyword, discarding it and return unqualified keyword. Nil-safe.
 *   (unqualify :db.type/ref) -> :ref
 */
contrib.data.unqualify = (function contrib$data$unqualify(_QMARK_qualified_kw){
if((((_QMARK_qualified_kw == null)) || (cljs.core.qualified_keyword_QMARK_(_QMARK_qualified_kw)))){
} else {
throw (new Error(["Assert failed: ",[" can't unqualify: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_qualified_kw)].join(''),"\n","(or (nil? ?qualified-kw) (qualified-keyword? ?qualified-kw))"].join('')));
}

if(cljs.core.truth_(_QMARK_qualified_kw)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(_QMARK_qualified_kw));
} else {
return null;
}
});
contrib.data.generated__contrib_data_32 = (function contrib$data$generated__contrib_data_32(){
if((typeof contrib !== 'undefined') && (typeof contrib.data !== 'undefined') && (typeof contrib.data.t_contrib$data46335 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.data.t_contrib$data46335 = (function (meta46336){
this.meta46336 = meta46336;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.data.t_contrib$data46335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46337,meta46336__$1){
var self__ = this;
var _46337__$1 = this;
return (new contrib.data.t_contrib$data46335(meta46336__$1));
}));

(contrib.data.t_contrib$data46335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46337){
var self__ = this;
var _46337__$1 = this;
return self__.meta46336;
}));

(contrib.data.t_contrib$data46335.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.data.t_contrib$data46335.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__46344 = (arguments.length - (1));
switch (G__46344) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.data.t_contrib$data46335.prototype.apply = (function (self__,args46338){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args46338)));
}));

(contrib.data.t_contrib$data46335.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_46323){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(4,done_46323);
try{var values__10703__auto___49714 = (new cljs.core.List(null,contrib.data.unqualify(new cljs.core.Keyword("contrib.data","x","contrib.data/x",-13565696)),(new cljs.core.List(null,new cljs.core.Keyword(null,"x","x",2099068185),null,(1),null)),(2),null));
var result__10704__auto___49715 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49714);
if(cljs.core.truth_(result__10704__auto___49715)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"unqualify","unqualify",1515038071,null),new cljs.core.Keyword("contrib.data","x","contrib.data/x",-13565696)),new cljs.core.Keyword(null,"x","x",2099068185)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49714),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"unqualify","unqualify",1515038071,null),new cljs.core.Keyword("contrib.data","x","contrib.data/x",-13565696)),new cljs.core.Keyword(null,"x","x",2099068185)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49714),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49714);
}catch (e46347){var t__10691__auto___49720 = e46347;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"unqualify","unqualify",1515038071,null),new cljs.core.Keyword("contrib.data","x","contrib.data/x",-13565696)),new cljs.core.Keyword(null,"x","x",2099068185)),null,t__10691__auto___49720,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___49723 = (new cljs.core.List(null,contrib.data.unqualify(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ref","ref",1289896967),null,(1),null)),(2),null));
var result__10704__auto___49724 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49723);
if(cljs.core.truth_(result__10704__auto___49724)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"unqualify","unqualify",1515038071,null),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)),new cljs.core.Keyword(null,"ref","ref",1289896967)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49723),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"unqualify","unqualify",1515038071,null),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)),new cljs.core.Keyword(null,"ref","ref",1289896967)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49723),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49723);
}catch (e46349){var t__10691__auto___49729 = e46349;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"unqualify","unqualify",1515038071,null),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)),new cljs.core.Keyword(null,"ref","ref",1289896967)),null,t__10691__auto___49729,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___49730 = (new cljs.core.List(null,contrib.data.unqualify(null),(new cljs.core.List(null,null,null,(1),null)),(2),null));
var result__10704__auto___49731 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49730);
if(cljs.core.truth_(result__10704__auto___49731)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"unqualify","unqualify",1515038071,null),null),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49730),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"unqualify","unqualify",1515038071,null),null),null),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49730),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49730);
}catch (e46355){var t__10691__auto___49733 = e46355;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"unqualify","unqualify",1515038071,null),null),null),null,t__10691__auto___49733,null]));
}finally {RCF__done_BANG_();
}
try{try{contrib.data.unqualify("");

return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol(null,"unqualify","unqualify",1515038071,null),""),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null)),new cljs.core.Keyword(null,"actual","actual",107306363),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}catch (e46361){if((e46361 instanceof Error)){
var e__10624__auto__ = e46361;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol(null,"unqualify","unqualify",1515038071,null),""),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null)),new cljs.core.Keyword(null,"actual","actual",107306363),e__10624__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));

return e__10624__auto__;
} else {
throw e46361;

}
}}catch (e46360){var t__10691__auto__ = e46360;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol(null,"unqualify","unqualify",1515038071,null),""),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.data.t_contrib$data46335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta46336","meta46336",1976846870,null)], null);
}));

(contrib.data.t_contrib$data46335.cljs$lang$type = true);

(contrib.data.t_contrib$data46335.cljs$lang$ctorStr = "contrib.data/t_contrib$data46335");

(contrib.data.t_contrib$data46335.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.data/t_contrib$data46335");
}));

/**
 * Positional factory function for contrib.data/t_contrib$data46335.
 */
contrib.data.__GT_t_contrib$data46335 = (function contrib$data$generated__contrib_data_32_$___GT_t_contrib$data46335(meta46336){
return (new contrib.data.t_contrib$data46335(meta46336));
});

}

return (new contrib.data.t_contrib$data46335(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.data.generated__contrib_data_32;},new cljs.core.Symbol("contrib.data","generated__contrib_data_32","contrib.data/generated__contrib_data_32",594631508,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/data.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.data","contrib.data",324393651,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),32,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_data_32","generated__contrib_data_32",-781904073,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.data.generated__contrib_data_32)?contrib.data.generated__contrib_data_32.cljs$lang$test:null)], null)),contrib.data.generated__contrib_data_32));
} else {
}
contrib.data._omit_keys_ns = (function contrib$data$_omit_keys_ns(ns,_QMARK_m){
if((!((ns == null)))){
} else {
throw (new Error("Assert failed: (some? ns)"));
}

if(cljs.core.truth_(_QMARK_m)){
return cljs.core.reduce_kv((function (m,k,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.namespace(k))){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,_QMARK_m);
} else {
return null;
}
});
contrib.data.generated__contrib_data_48 = (function contrib$data$generated__contrib_data_48(){
if((typeof contrib !== 'undefined') && (typeof contrib.data !== 'undefined') && (typeof contrib.data.t_contrib$data46719 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.data.t_contrib$data46719 = (function (meta46720){
this.meta46720 = meta46720;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.data.t_contrib$data46719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46721,meta46720__$1){
var self__ = this;
var _46721__$1 = this;
return (new contrib.data.t_contrib$data46719(meta46720__$1));
}));

(contrib.data.t_contrib$data46719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46721){
var self__ = this;
var _46721__$1 = this;
return self__.meta46720;
}));

(contrib.data.t_contrib$data46719.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.data.t_contrib$data46719.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__46736 = (arguments.length - (1));
switch (G__46736) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.data.t_contrib$data46719.prototype.apply = (function (self__,args46733){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args46733)));
}));

(contrib.data.t_contrib$data46719.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_46698){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(5,done_46698);
try{var values__10703__auto___49779 = (new cljs.core.List(null,contrib.data._omit_keys_ns(new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2),new cljs.core.Keyword("c","c","c/c",-1763191978),(3)], null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null),null,(1),null)),(2),null));
var result__10704__auto___49780 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49779);
if(cljs.core.truth_(result__10704__auto___49780)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"omit-keys-ns","omit-keys-ns",908350131,null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2),new cljs.core.Keyword("c","c","c/c",-1763191978),(3)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49779),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"omit-keys-ns","omit-keys-ns",908350131,null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2),new cljs.core.Keyword("c","c","c/c",-1763191978),(3)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49779),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49779);
}catch (e46744){var t__10691__auto___49799 = e46744;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol("contrib.data","-omit-keys-ns","contrib.data/-omit-keys-ns",227379272,null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2),new cljs.core.Keyword("c","c","c/c",-1763191978),(3)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"omit-keys-ns","omit-keys-ns",908350131,null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2),new cljs.core.Keyword("c","c","c/c",-1763191978),(3)], null)))], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)),null,t__10691__auto___49799,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___49808 = (new cljs.core.List(null,contrib.data._omit_keys_ns(new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2),new cljs.core.Keyword("c","c","c/c",-1763191978),(3)], null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null),null,(1),null)),(2),null));
var result__10704__auto___49809 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49808);
if(cljs.core.truth_(result__10704__auto___49809)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"omit-keys-ns","omit-keys-ns",908350131,null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2),new cljs.core.Keyword("c","c","c/c",-1763191978),(3)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49808),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"omit-keys-ns","omit-keys-ns",908350131,null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2),new cljs.core.Keyword("c","c","c/c",-1763191978),(3)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49808),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49808);
}catch (e46754){var t__10691__auto___49824 = e46754;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol("contrib.data","-omit-keys-ns","contrib.data/-omit-keys-ns",227379272,null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2),new cljs.core.Keyword("c","c","c/c",-1763191978),(3)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"omit-keys-ns","omit-keys-ns",908350131,null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2),new cljs.core.Keyword("c","c","c/c",-1763191978),(3)], null)))], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)),null,t__10691__auto___49824,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___49834 = (new cljs.core.List(null,contrib.data._omit_keys_ns(new cljs.core.Keyword(null,"c","c",-1763192079),null),(new cljs.core.List(null,null,null,(1),null)),(2),null));
var result__10704__auto___49835 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49834);
if(cljs.core.truth_(result__10704__auto___49835)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"omit-keys-ns","omit-keys-ns",908350131,null),new cljs.core.Keyword(null,"c","c",-1763192079),null),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49834),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"omit-keys-ns","omit-keys-ns",908350131,null),new cljs.core.Keyword(null,"c","c",-1763192079),null),null),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49834),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49834);
}catch (e46779){var t__10691__auto___49853 = e46779;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol("contrib.data","-omit-keys-ns","contrib.data/-omit-keys-ns",227379272,null),new cljs.core.Keyword(null,"c","c",-1763192079),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"omit-keys-ns","omit-keys-ns",908350131,null),new cljs.core.Keyword(null,"c","c",-1763192079),null))], null)),null),null,t__10691__auto___49853,null]));
}finally {RCF__done_BANG_();
}
try{try{contrib.data._omit_keys_ns(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2),new cljs.core.Keyword("c","c","c/c",-1763191978),(3)], null));

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol("contrib.data","-omit-keys-ns","contrib.data/-omit-keys-ns",227379272,null),null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2),new cljs.core.Keyword("c","c","c/c",-1763191978),(3)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"omit-keys-ns","omit-keys-ns",908350131,null),null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2),new cljs.core.Keyword("c","c","c/c",-1763191978),(3)], null)))], null)),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null)),new cljs.core.Keyword(null,"actual","actual",107306363),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}catch (e46801){if((e46801 instanceof Error)){
var e__10624__auto___49863 = e46801;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol("contrib.data","-omit-keys-ns","contrib.data/-omit-keys-ns",227379272,null),null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2),new cljs.core.Keyword("c","c","c/c",-1763191978),(3)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"omit-keys-ns","omit-keys-ns",908350131,null),null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2),new cljs.core.Keyword("c","c","c/c",-1763191978),(3)], null)))], null)),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null)),new cljs.core.Keyword(null,"actual","actual",107306363),e__10624__auto___49863,new cljs.core.Keyword(null,"message","message",-406056002),null], null));

} else {
throw e46801;

}
}}catch (e46794){var t__10691__auto___49864 = e46794;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol("contrib.data","-omit-keys-ns","contrib.data/-omit-keys-ns",227379272,null),null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2),new cljs.core.Keyword("c","c","c/c",-1763191978),(3)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"omit-keys-ns","omit-keys-ns",908350131,null),null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2),new cljs.core.Keyword("c","c","c/c",-1763191978),(3)], null)))], null)),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null)),null,t__10691__auto___49864,null]));
}finally {RCF__done_BANG_();
}
try{try{contrib.data._omit_keys_ns(null,null);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol("contrib.data","-omit-keys-ns","contrib.data/-omit-keys-ns",227379272,null),null,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"omit-keys-ns","omit-keys-ns",908350131,null),null,null))], null)),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null)),new cljs.core.Keyword(null,"actual","actual",107306363),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}catch (e46812){if((e46812 instanceof Error)){
var e__10624__auto___49881 = e46812;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol("contrib.data","-omit-keys-ns","contrib.data/-omit-keys-ns",227379272,null),null,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"omit-keys-ns","omit-keys-ns",908350131,null),null,null))], null)),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null)),new cljs.core.Keyword(null,"actual","actual",107306363),e__10624__auto___49881,new cljs.core.Keyword(null,"message","message",-406056002),null], null));

} else {
throw e46812;

}
}}catch (e46810){var t__10691__auto___49882 = e46810;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol("contrib.data","-omit-keys-ns","contrib.data/-omit-keys-ns",227379272,null),null,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"omit-keys-ns","omit-keys-ns",908350131,null),null,null))], null)),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null)),null,t__10691__auto___49882,null]));
}finally {RCF__done_BANG_();
}
return null;
}));

(contrib.data.t_contrib$data46719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta46720","meta46720",1082985819,null)], null);
}));

(contrib.data.t_contrib$data46719.cljs$lang$type = true);

(contrib.data.t_contrib$data46719.cljs$lang$ctorStr = "contrib.data/t_contrib$data46719");

(contrib.data.t_contrib$data46719.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.data/t_contrib$data46719");
}));

/**
 * Positional factory function for contrib.data/t_contrib$data46719.
 */
contrib.data.__GT_t_contrib$data46719 = (function contrib$data$generated__contrib_data_48_$___GT_t_contrib$data46719(meta46720){
return (new contrib.data.t_contrib$data46719(meta46720));
});

}

return (new contrib.data.t_contrib$data46719(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.data.generated__contrib_data_48;},new cljs.core.Symbol("contrib.data","generated__contrib_data_48","contrib.data/generated__contrib_data_48",-88440576,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/data.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.data","contrib.data",324393651,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),48,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_data_48","generated__contrib_data_48",1152271843,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.data.generated__contrib_data_48)?contrib.data.generated__contrib_data_48.cljs$lang$test:null)], null)),contrib.data.generated__contrib_data_48));
} else {
}
/**
 * State if a `named` value (keyword or symbol) has such namespace `ns`.
 *   `ns` can be be a string, or a non-namespaced keyword or symbol.
 */
contrib.data.has_ns_QMARK_ = (function contrib$data$has_ns_QMARK_(ns,named){
if(((typeof ns === 'string') || (cljs.core.simple_ident_QMARK_(ns)))){
} else {
throw (new Error("Assert failed: (or (string? ns) (simple-ident? ns))"));
}

return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.namespace(named));
});
/**
 * Like `select-keys` but select all namespaced keys by ns.
 */
contrib.data.select_ns = (function contrib$data$select_ns(ns,map){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(map),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__46830){
var vec__46831 = p__46830;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46831,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46831,(1),null);
return contrib.data.has_ns_QMARK_(ns,k);
})),map);
});
/**
 * qualify any unqualified keys to the current ns and then add qualified defaults
 */
contrib.data._auto_props = (function contrib$data$_auto_props(ns,props,defaults_qualified){
if((!((ns == null)))){
} else {
throw (new Error("Assert failed: (some? ns)"));
}

if(((typeof ns === 'string') || ((ns instanceof cljs.core.Symbol)))){
} else {
throw (new Error("Assert failed: (or (string? ns) (symbol? ns))"));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults_qualified,cljs.core.update_keys(props,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(contrib.data.qualify,ns))], 0));
});
contrib.data.generated__contrib_data_78 = (function contrib$data$generated__contrib_data_78(){
if((typeof contrib !== 'undefined') && (typeof contrib.data !== 'undefined') && (typeof contrib.data.t_contrib$data47160 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.data.t_contrib$data47160 = (function (meta47161){
this.meta47161 = meta47161;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.data.t_contrib$data47160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47162,meta47161__$1){
var self__ = this;
var _47162__$1 = this;
return (new contrib.data.t_contrib$data47160(meta47161__$1));
}));

(contrib.data.t_contrib$data47160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47162){
var self__ = this;
var _47162__$1 = this;
return self__.meta47161;
}));

(contrib.data.t_contrib$data47160.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.data.t_contrib$data47160.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__47190 = (arguments.length - (1));
switch (G__47190) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.data.t_contrib$data47160.prototype.apply = (function (self__,args47163){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47163)));
}));

(contrib.data.t_contrib$data47160.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_47115){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(5,done_47115);
try{var values__10703__auto___49929 = (new cljs.core.List(null,contrib.data._auto_props("user",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("user","a","user/a",-2110493943),(1),new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null),null,(1),null)),(2),null));
var result__10704__auto___49930 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49929);
if(cljs.core.truth_(result__10704__auto___49930)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"auto-props","auto-props",-1215696108,null),"user",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("user","a","user/a",-2110493943),(1),new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49929),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"auto-props","auto-props",-1215696108,null),"user",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("user","a","user/a",-2110493943),(1),new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49929),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49929);
}catch (e47197){var t__10691__auto___49939 = e47197;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol("contrib.data","-auto-props","contrib.data/-auto-props",409271597,null),"user",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"auto-props","auto-props",-1215696108,null),"user",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)))], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("user","a","user/a",-2110493943),(1),new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)),null,t__10691__auto___49939,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___49941 = (new cljs.core.List(null,contrib.data._auto_props(new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("user","a","user/a",-2110493943),(1),new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null),null,(1),null)),(2),null));
var result__10704__auto___49942 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49941);
if(cljs.core.truth_(result__10704__auto___49942)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"auto-props","auto-props",-1215696108,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("user","a","user/a",-2110493943),(1),new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49941),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"auto-props","auto-props",-1215696108,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("user","a","user/a",-2110493943),(1),new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49941),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49941);
}catch (e47202){var t__10691__auto___49951 = e47202;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol("contrib.data","-auto-props","contrib.data/-auto-props",409271597,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"auto-props","auto-props",-1215696108,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)))], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("user","a","user/a",-2110493943),(1),new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)),null,t__10691__auto___49951,null]));
}finally {RCF__done_BANG_();
}
try{try{contrib.data._auto_props(cljs.core._STAR_ns_STAR_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null));

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol("contrib.data","-auto-props","contrib.data/-auto-props",409271597,null),new cljs.core.Symbol(null,"*ns*","*ns*",740153818,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"auto-props","auto-props",-1215696108,null),new cljs.core.Symbol(null,"*ns*","*ns*",740153818,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)))], null)),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null)),new cljs.core.Keyword(null,"actual","actual",107306363),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}catch (e47215){if((e47215 instanceof Error)){
var e__10624__auto___49960 = e47215;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol("contrib.data","-auto-props","contrib.data/-auto-props",409271597,null),new cljs.core.Symbol(null,"*ns*","*ns*",740153818,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"auto-props","auto-props",-1215696108,null),new cljs.core.Symbol(null,"*ns*","*ns*",740153818,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)))], null)),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null)),new cljs.core.Keyword(null,"actual","actual",107306363),e__10624__auto___49960,new cljs.core.Keyword(null,"message","message",-406056002),null], null));

} else {
throw e47215;

}
}}catch (e47214){var t__10691__auto___49970 = e47214;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol("contrib.data","-auto-props","contrib.data/-auto-props",409271597,null),new cljs.core.Symbol(null,"*ns*","*ns*",740153818,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"auto-props","auto-props",-1215696108,null),new cljs.core.Symbol(null,"*ns*","*ns*",740153818,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)))], null)),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null)),null,t__10691__auto___49970,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___49974 = (new cljs.core.List(null,contrib.data._auto_props("contrib.data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null),null,(1),null)),(2),null));
var result__10704__auto___49975 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49974);
if(cljs.core.truth_(result__10704__auto___49975)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"auto-props","auto-props",-1215696108,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49974),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"auto-props","auto-props",-1215696108,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49974),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49974);
}catch (e47229){var t__10691__auto___49979 = e47229;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol("contrib.data","-auto-props","contrib.data/-auto-props",409271597,null),"contrib.data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"auto-props","auto-props",-1215696108,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)))], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1),new cljs.core.Keyword("dom","class","dom/class",-2030794914),"a"], null)),null,t__10691__auto___49979,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto__ = (new cljs.core.List(null,contrib.data._auto_props("contrib.data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),cljs.core.PersistentArrayMap.EMPTY),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1)], null),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"auto-props","auto-props",-1215696108,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"auto-props","auto-props",-1215696108,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e47239){var t__10691__auto__ = e47239;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol("contrib.data","-auto-props","contrib.data/-auto-props",409271597,null),"contrib.data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"auto-props","auto-props",-1215696108,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)))], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("contrib.data","a","contrib.data/a",1410308861),(1)], null)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.data.t_contrib$data47160.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta47161","meta47161",-1046839804,null)], null);
}));

(contrib.data.t_contrib$data47160.cljs$lang$type = true);

(contrib.data.t_contrib$data47160.cljs$lang$ctorStr = "contrib.data/t_contrib$data47160");

(contrib.data.t_contrib$data47160.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.data/t_contrib$data47160");
}));

/**
 * Positional factory function for contrib.data/t_contrib$data47160.
 */
contrib.data.__GT_t_contrib$data47160 = (function contrib$data$generated__contrib_data_78_$___GT_t_contrib$data47160(meta47161){
return (new contrib.data.t_contrib$data47160(meta47161));
});

}

return (new contrib.data.t_contrib$data47160(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.data.generated__contrib_data_78;},new cljs.core.Symbol("contrib.data","generated__contrib_data_78","contrib.data/generated__contrib_data_78",-621408564,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/data.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.data","contrib.data",324393651,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),78,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_data_78","generated__contrib_data_78",-2000305427,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.data.generated__contrib_data_78)?contrib.data.generated__contrib_data_78.cljs$lang$test:null)], null)),contrib.data.generated__contrib_data_78));
} else {
}
/**
 * an argument parser that accepts both scalars and collections, lifting scalars into a collection
 */
contrib.data.xorxs = (function contrib$data$xorxs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49983 = arguments.length;
var i__5770__auto___49984 = (0);
while(true){
if((i__5770__auto___49984 < len__5769__auto___49983)){
args__5775__auto__.push((arguments[i__5770__auto___49984]));

var G__49985 = (i__5770__auto___49984 + (1));
i__5770__auto___49984 = G__49985;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return contrib.data.xorxs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(contrib.data.xorxs.cljs$core$IFn$_invoke$arity$variadic = (function (xorxs,p__47258){
var vec__47261 = p__47258;
var zero = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47261,(0),null);
if(cljs.core.vector_QMARK_(xorxs)){
return xorxs;
} else {
if(cljs.core.set_QMARK_(xorxs)){
return xorxs;
} else {
if(cljs.core.seq_QMARK_(xorxs)){
return xorxs;
} else {
if((xorxs == null)){
return zero;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__5045__auto__ = zero;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),xorxs);

}
}
}
}
}));

(contrib.data.xorxs.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(contrib.data.xorxs.cljs$lang$applyTo = (function (seq47248){
var G__47249 = cljs.core.first(seq47248);
var seq47248__$1 = cljs.core.next(seq47248);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47249,seq47248__$1);
}));

contrib.data.generated__contrib_data_94 = (function contrib$data$generated__contrib_data_94(){
if((typeof contrib !== 'undefined') && (typeof contrib.data !== 'undefined') && (typeof contrib.data.t_contrib$data47595 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.data.t_contrib$data47595 = (function (meta47596){
this.meta47596 = meta47596;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.data.t_contrib$data47595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47597,meta47596__$1){
var self__ = this;
var _47597__$1 = this;
return (new contrib.data.t_contrib$data47595(meta47596__$1));
}));

(contrib.data.t_contrib$data47595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47597){
var self__ = this;
var _47597__$1 = this;
return self__.meta47596;
}));

(contrib.data.t_contrib$data47595.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.data.t_contrib$data47595.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__47599 = (arguments.length - (1));
switch (G__47599) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.data.t_contrib$data47595.prototype.apply = (function (self__,args47598){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47598)));
}));

(contrib.data.t_contrib$data47595.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_47537){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(7,done_47537);
try{var values__10703__auto___50000 = (new cljs.core.List(null,contrib.data.xorxs(new cljs.core.Keyword(null,"a","a",-2123407586)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null),null,(1),null)),(2),null));
var result__10704__auto___50001 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50000);
if(cljs.core.truth_(result__10704__auto___50001)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"xorxs","xorxs",-1684662732,null),new cljs.core.Keyword(null,"a","a",-2123407586)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50000),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"xorxs","xorxs",-1684662732,null),new cljs.core.Keyword(null,"a","a",-2123407586)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50000),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50000);
}catch (e47609){var t__10691__auto___50003 = e47609;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"xorxs","xorxs",-1684662732,null),new cljs.core.Keyword(null,"a","a",-2123407586)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null)),null,t__10691__auto___50003,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___50007 = (new cljs.core.List(null,contrib.data.xorxs(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null),null,(1),null)),(2),null));
var result__10704__auto___50008 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50007);
if(cljs.core.truth_(result__10704__auto___50008)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"xorxs","xorxs",-1684662732,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50007),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"xorxs","xorxs",-1684662732,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50007),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50007);
}catch (e47618){var t__10691__auto___50012 = e47618;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"xorxs","xorxs",-1684662732,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null)),null,t__10691__auto___50012,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___50013 = (new cljs.core.List(null,contrib.data.xorxs(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null)),(new cljs.core.List(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),null,(1),null)),(2),null));
var result__10704__auto___50014 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50013);
if(cljs.core.truth_(result__10704__auto___50014)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"xorxs","xorxs",-1684662732,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),"null"], null), null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),"null"], null), null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50013),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"xorxs","xorxs",-1684662732,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),"null"], null), null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),"null"], null), null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50013),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50013);
}catch (e47635){var t__10691__auto___50019 = e47635;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"xorxs","xorxs",-1684662732,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),"null"], null), null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),"null"], null), null)),null,t__10691__auto___50019,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___50020 = (new cljs.core.List(null,contrib.data.xorxs.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashSet.EMPTY], 0)),(new cljs.core.List(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),null,(1),null)),(2),null));
var result__10704__auto___50021 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50020);
if(cljs.core.truth_(result__10704__auto___50021)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"xorxs","xorxs",-1684662732,null),new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),"null"], null), null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50020),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"xorxs","xorxs",-1684662732,null),new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),"null"], null), null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50020),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50020);
}catch (e47638){var t__10691__auto___50022 = e47638;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"xorxs","xorxs",-1684662732,null),new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),"null"], null), null)),null,t__10691__auto___50022,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___50023 = (new cljs.core.List(null,contrib.data.xorxs.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null),null,(1),null)),(2),null));
var result__10704__auto___50024 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50023);
if(cljs.core.truth_(result__10704__auto___50024)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"xorxs","xorxs",-1684662732,null),new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50023),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"xorxs","xorxs",-1684662732,null),new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50023),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50023);
}catch (e47644){var t__10691__auto___50025 = e47644;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"xorxs","xorxs",-1684662732,null),new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null)),null,t__10691__auto___50025,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___50026 = (new cljs.core.List(null,contrib.data.xorxs.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashSet.EMPTY], 0)),(new cljs.core.List(null,cljs.core.PersistentHashSet.EMPTY,null,(1),null)),(2),null));
var result__10704__auto___50027 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50026);
if(cljs.core.truth_(result__10704__auto___50027)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"xorxs","xorxs",-1684662732,null),null,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50026),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"xorxs","xorxs",-1684662732,null),null,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50026),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50026);
}catch (e47648){var t__10691__auto___50028 = e47648;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"xorxs","xorxs",-1684662732,null),null,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.EMPTY),null,t__10691__auto___50028,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto__ = (new cljs.core.List(null,contrib.data.xorxs(null),(new cljs.core.List(null,null,null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"xorxs","xorxs",-1684662732,null),null),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"xorxs","xorxs",-1684662732,null),null),null),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e47659){var t__10691__auto__ = e47659;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"xorxs","xorxs",-1684662732,null),null),null),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.data.t_contrib$data47595.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta47596","meta47596",1825276116,null)], null);
}));

(contrib.data.t_contrib$data47595.cljs$lang$type = true);

(contrib.data.t_contrib$data47595.cljs$lang$ctorStr = "contrib.data/t_contrib$data47595");

(contrib.data.t_contrib$data47595.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.data/t_contrib$data47595");
}));

/**
 * Positional factory function for contrib.data/t_contrib$data47595.
 */
contrib.data.__GT_t_contrib$data47595 = (function contrib$data$generated__contrib_data_94_$___GT_t_contrib$data47595(meta47596){
return (new contrib.data.t_contrib$data47595(meta47596));
});

}

return (new contrib.data.t_contrib$data47595(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.data.generated__contrib_data_94;},new cljs.core.Symbol("contrib.data","generated__contrib_data_94","contrib.data/generated__contrib_data_94",1914847652,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/data.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.data","contrib.data",324393651,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),94,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_data_94","generated__contrib_data_94",-1407810169,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.data.generated__contrib_data_94)?contrib.data.generated__contrib_data_94.cljs$lang$test:null)], null)),contrib.data.generated__contrib_data_94));
} else {
}
contrib.data.index_by = (function contrib$data$index_by(kf,xs){
if(cljs.core.truth_(kf)){
} else {
throw (new Error("Assert failed: kf"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(kf.cljs$core$IFn$_invoke$arity$2 ? kf.cljs$core$IFn$_invoke$arity$2(x,i) : kf.call(null,x,i)),x], null);
})),xs);
});
contrib.data.generated__contrib_data_110 = (function contrib$data$generated__contrib_data_110(){
if((typeof contrib !== 'undefined') && (typeof contrib.data !== 'undefined') && (typeof contrib.data.t_contrib$data48021 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.data.t_contrib$data48021 = (function (meta48022){
this.meta48022 = meta48022;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.data.t_contrib$data48021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48023,meta48022__$1){
var self__ = this;
var _48023__$1 = this;
return (new contrib.data.t_contrib$data48021(meta48022__$1));
}));

(contrib.data.t_contrib$data48021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48023){
var self__ = this;
var _48023__$1 = this;
return self__.meta48022;
}));

(contrib.data.t_contrib$data48021.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.data.t_contrib$data48021.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__48040 = (arguments.length - (1));
switch (G__48040) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.data.t_contrib$data48021.prototype.apply = (function (self__,args48024){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args48024)));
}));

(contrib.data.t_contrib$data48021.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_47992){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(13,done_47992);
contrib.data.xs = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null);

try{var values__10703__auto___50038 = (new cljs.core.List(null,contrib.data.index_by(new cljs.core.Keyword("db","ident","db/ident",-737096),contrib.data.xs),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null),null,(1),null)),(2),null));
var result__10704__auto___50039 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50038);
if(cljs.core.truth_(result__10704__auto___50039)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50038),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50038),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50038);
}catch (e48056){var t__10691__auto___50040 = e48056;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),null,t__10691__auto___50040,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___50041 = (new cljs.core.List(null,contrib.data.index_by(new cljs.core.Keyword("contrib.data","missing","contrib.data/missing",-1018221728),contrib.data.xs),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null),null,(1),null)),(2),null));
var result__10704__auto___50042 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50041);
if(cljs.core.truth_(result__10704__auto___50042)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword("contrib.data","missing","contrib.data/missing",-1018221728),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)),new cljs.core.PersistentArrayMap(null, 2, [(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50041),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword("contrib.data","missing","contrib.data/missing",-1018221728),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)),new cljs.core.PersistentArrayMap(null, 2, [(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50041),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50041);
}catch (e48062){var t__10691__auto___50043 = e48062;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword("contrib.data","missing","contrib.data/missing",-1018221728),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)),new cljs.core.PersistentArrayMap(null, 2, [(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),null,t__10691__auto___50043,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___50044 = (new cljs.core.List(null,contrib.data.index_by(new cljs.core.Keyword(null,"a","a",-2123407586),null),(new cljs.core.List(null,cljs.core.PersistentArrayMap.EMPTY,null,(1),null)),(2),null));
var result__10704__auto___50045 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50044);
if(cljs.core.truth_(result__10704__auto___50045)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword(null,"a","a",-2123407586),null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50044),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword(null,"a","a",-2123407586),null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50044),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50044);
}catch (e48069){var t__10691__auto___50053 = e48069;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword(null,"a","a",-2123407586),null),cljs.core.PersistentArrayMap.EMPTY),null,t__10691__auto___50053,null]));
}finally {RCF__done_BANG_();
}
try{try{contrib.data.index_by(null,null);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),null,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null)),new cljs.core.Keyword(null,"actual","actual",107306363),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}catch (e48078){if((e48078 instanceof Error)){
var e__10624__auto___50057 = e48078;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),null,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null)),new cljs.core.Keyword(null,"actual","actual",107306363),e__10624__auto___50057,new cljs.core.Keyword(null,"message","message",-406056002),null], null));

} else {
throw e48078;

}
}}catch (e48077){var t__10691__auto___50058 = e48077;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),null,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null)),null,t__10691__auto___50058,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___50059 = (new cljs.core.List(null,contrib.data.index_by(new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [(0),cljs.core.PersistentArrayMap.EMPTY], null),null,(1),null)),(2),null));
var result__10704__auto___50060 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50059);
if(cljs.core.truth_(result__10704__auto___50060)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null)),new cljs.core.PersistentArrayMap(null, 1, [(0),cljs.core.PersistentArrayMap.EMPTY], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50059),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null)),new cljs.core.PersistentArrayMap(null, 1, [(0),cljs.core.PersistentArrayMap.EMPTY], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50059),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50059);
}catch (e48080){var t__10691__auto___50063 = e48080;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null)),new cljs.core.PersistentArrayMap(null, 1, [(0),cljs.core.PersistentArrayMap.EMPTY], null)),null,t__10691__auto___50063,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___50064 = (new cljs.core.List(null,contrib.data.index_by(new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [(1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null),null,(1),null)),(2),null));
var result__10704__auto___50065 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50064);
if(cljs.core.truth_(result__10704__auto___50065)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null)),new cljs.core.PersistentArrayMap(null, 1, [(1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50064),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null)),new cljs.core.PersistentArrayMap(null, 1, [(1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50064),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50064);
}catch (e48088){var t__10691__auto___50066 = e48088;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null)),new cljs.core.PersistentArrayMap(null, 1, [(1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null)),null,t__10691__auto___50066,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___50072 = (new cljs.core.List(null,contrib.data.index_by(new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null),null,(1),null)),(2),null));
var result__10704__auto___50073 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50072);
if(cljs.core.truth_(result__10704__auto___50073)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null)),new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50072),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null)),new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50072),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50072);
}catch (e48093){var t__10691__auto___50074 = e48093;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null)),new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null)),null,t__10691__auto___50074,null]));
}finally {RCF__done_BANG_();
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["indexing map entries (which is weird, should this throw?)"], 0));

try{try{var values__10703__auto___50076 = (new cljs.core.List(null,contrib.data.index_by(new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null),null,(1),null)),(2),null));
var result__10704__auto___50077 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50076);
if(cljs.core.truth_(result__10704__auto___50077)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)),new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50076),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)),new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50076),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50076);
}catch (e48100){var t__10691__auto___50079 = e48100;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)),new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null)),null,t__10691__auto___50079,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___50080 = (new cljs.core.List(null,contrib.data.index_by(new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null),null,(1),null)),(2),null));
var result__10704__auto___50081 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50080);
if(cljs.core.truth_(result__10704__auto___50081)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)),new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50080),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)),new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50080),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50080);
}catch (e48114){var t__10691__auto___50085 = e48114;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)),new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null)),null,t__10691__auto___50085,null]));
}finally {RCF__done_BANG_();
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["collisions are possible"], 0));

try{try{var values__10703__auto___50086 = (new cljs.core.List(null,contrib.data.index_by(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1)], null)], null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1)], null),(2),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2)], null)], null),null,(1),null)),(2),null));
var result__10704__auto___50087 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50086);
if(cljs.core.truth_(result__10704__auto___50087)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1)], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1)], null),(2),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50086),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1)], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1)], null),(2),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50086),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50086);
}catch (e48124){var t__10691__auto___50091 = e48124;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1)], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1)], null),(2),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2)], null)], null)),null,t__10691__auto___50091,null]));
}finally {RCF__done_BANG_();
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["kf fallback arity"], 0));

try{try{var values__10703__auto___50092 = (new cljs.core.List(null,contrib.data.index_by((function (x,i){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(i);
}),contrib.data.xs),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, ["0",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),"1",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null),null,(1),null)),(2),null));
var result__10704__auto___50093 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50092);
if(cljs.core.truth_(result__10704__auto___50093)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"i","i",253690212,null))))),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)),new cljs.core.PersistentArrayMap(null, 2, ["0",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),"1",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50092),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"i","i",253690212,null))))),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)),new cljs.core.PersistentArrayMap(null, 2, ["0",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),"1",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50092),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50092);
}catch (e48131){var t__10691__auto___50097 = e48131;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"i","i",253690212,null))))),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)),new cljs.core.PersistentArrayMap(null, 2, ["0",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),"1",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),null,t__10691__auto___50097,null]));
}finally {RCF__done_BANG_();
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["index by first element"], 0));

try{try{var values__10703__auto___50098 = (new cljs.core.List(null,contrib.data.index_by((function (a,b){
return cljs.core.first(a);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null),null,(1),null)),(2),null));
var result__10704__auto___50099 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50098);
if(cljs.core.truth_(result__10704__auto___50099)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"a","a",-482876059,null))))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50098),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"a","a",-482876059,null))))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50098),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50098);
}catch (e48146){var t__10691__auto___50101 = e48146;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"a","a",-482876059,null))))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),null,t__10691__auto___50101,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto__ = (new cljs.core.List(null,contrib.data.index_by((function (p1__47699_SHARP_,p2__47698_SHARP_){

return cljs.core.first(p1__47699_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__47699#","p1__47699#",-155201469,null),new cljs.core.Symbol(null,"p2__47698#","p2__47698#",-1479736670,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"p2__47698#","p2__47698#",-1479736670,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"p1__47699#","p1__47699#",-155201469,null)))))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__47699#","p1__47699#",-155201469,null),new cljs.core.Symbol(null,"p2__47698#","p2__47698#",-1479736670,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"p2__47698#","p2__47698#",-1479736670,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"p1__47699#","p1__47699#",-155201469,null)))))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e48151){var t__10691__auto__ = e48151;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"index-by","index-by",1418736228,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__47699#","p1__47699#",-155201469,null),new cljs.core.Symbol(null,"p2__47698#","p2__47698#",-1479736670,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"p2__47698#","p2__47698#",-1479736670,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"p1__47699#","p1__47699#",-155201469,null)))))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(contrib.data.t_contrib$data48021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48022","meta48022",-971108753,null)], null);
}));

(contrib.data.t_contrib$data48021.cljs$lang$type = true);

(contrib.data.t_contrib$data48021.cljs$lang$ctorStr = "contrib.data/t_contrib$data48021");

(contrib.data.t_contrib$data48021.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.data/t_contrib$data48021");
}));

/**
 * Positional factory function for contrib.data/t_contrib$data48021.
 */
contrib.data.__GT_t_contrib$data48021 = (function contrib$data$generated__contrib_data_110_$___GT_t_contrib$data48021(meta48022){
return (new contrib.data.t_contrib$data48021(meta48022));
});

}

return (new contrib.data.t_contrib$data48021(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.data.generated__contrib_data_110;},new cljs.core.Symbol("contrib.data","generated__contrib_data_110","contrib.data/generated__contrib_data_110",1009282001,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/data.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.data","contrib.data",324393651,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),110,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_data_110","generated__contrib_data_110",1847373362,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.data.generated__contrib_data_110)?contrib.data.generated__contrib_data_110.cljs$lang$test:null)], null)),contrib.data.generated__contrib_data_110));
} else {
}
/**
 * index a sequential collection into an associative collection with explicit keys. this may not be
 *   useful, as vectors are already associative
 */
contrib.data.index = (function contrib$data$index(xs){
if(cljs.core.sequential_QMARK_(xs)){
} else {
throw (new Error("Assert failed: (sequential? xs)"));
}

return contrib.data.index_by((function (x,i){
return i;
}),xs);
});
contrib.data.generated__contrib_data_160 = (function contrib$data$generated__contrib_data_160(){
if((typeof contrib !== 'undefined') && (typeof contrib.data !== 'undefined') && (typeof contrib.data.t_contrib$data48252 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.data.t_contrib$data48252 = (function (meta48253){
this.meta48253 = meta48253;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.data.t_contrib$data48252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48254,meta48253__$1){
var self__ = this;
var _48254__$1 = this;
return (new contrib.data.t_contrib$data48252(meta48253__$1));
}));

(contrib.data.t_contrib$data48252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48254){
var self__ = this;
var _48254__$1 = this;
return self__.meta48253;
}));

(contrib.data.t_contrib$data48252.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.data.t_contrib$data48252.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__48261 = (arguments.length - (1));
switch (G__48261) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.data.t_contrib$data48252.prototype.apply = (function (self__,args48260){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args48260)));
}));

(contrib.data.t_contrib$data48252.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_48222){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(1,done_48222);
contrib.data.xs = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null);

try{var values__10703__auto__ = (new cljs.core.List(null,contrib.data.index(contrib.data.xs),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)),new cljs.core.PersistentArrayMap(null, 2, [(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)),new cljs.core.PersistentArrayMap(null, 2, [(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e48266){var t__10691__auto__ = e48266;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)),new cljs.core.PersistentArrayMap(null, 2, [(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.data.t_contrib$data48252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48253","meta48253",1409987142,null)], null);
}));

(contrib.data.t_contrib$data48252.cljs$lang$type = true);

(contrib.data.t_contrib$data48252.cljs$lang$ctorStr = "contrib.data/t_contrib$data48252");

(contrib.data.t_contrib$data48252.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.data/t_contrib$data48252");
}));

/**
 * Positional factory function for contrib.data/t_contrib$data48252.
 */
contrib.data.__GT_t_contrib$data48252 = (function contrib$data$generated__contrib_data_160_$___GT_t_contrib$data48252(meta48253){
return (new contrib.data.t_contrib$data48252(meta48253));
});

}

return (new contrib.data.t_contrib$data48252(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.data.generated__contrib_data_160;},new cljs.core.Symbol("contrib.data","generated__contrib_data_160","contrib.data/generated__contrib_data_160",-919517926,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/data.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.data","contrib.data",324393651,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),160,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_data_160","generated__contrib_data_160",2064023865,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.data.generated__contrib_data_160)?contrib.data.generated__contrib_data_160.cljs$lang$test:null)], null)),contrib.data.generated__contrib_data_160));
} else {
}
contrib.data.group_by_pred = (function contrib$data$group_by_pred(f_QMARK_,xs){
var map__48286 = cljs.core.group_by(f_QMARK_,xs);
var map__48286__$1 = cljs.core.__destructure_map(map__48286);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48286__$1,true);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48286__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
});
contrib.data.generated__contrib_data_171 = (function contrib$data$generated__contrib_data_171(){
if((typeof contrib !== 'undefined') && (typeof contrib.data !== 'undefined') && (typeof contrib.data.t_contrib$data48398 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.data.t_contrib$data48398 = (function (meta48399){
this.meta48399 = meta48399;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.data.t_contrib$data48398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48400,meta48399__$1){
var self__ = this;
var _48400__$1 = this;
return (new contrib.data.t_contrib$data48398(meta48399__$1));
}));

(contrib.data.t_contrib$data48398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48400){
var self__ = this;
var _48400__$1 = this;
return self__.meta48399;
}));

(contrib.data.t_contrib$data48398.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.data.t_contrib$data48398.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__48411 = (arguments.length - (1));
switch (G__48411) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.data.t_contrib$data48398.prototype.apply = (function (self__,args48402){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args48402)));
}));

(contrib.data.t_contrib$data48398.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_48323){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(1,done_48323);
try{var values__10703__auto__ = (new cljs.core.List(null,contrib.data.group_by_pred(cljs.core.map_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","gender","user/gender",-730968204),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","shirt-size","user/shirt-size",366486872),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null)], null),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","gender","user/gender",-730968204),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","shirt-size","user/shirt-size",366486872),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)], null),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"group-by-pred","group-by-pred",1951677,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","gender","user/gender",-730968204),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","shirt-size","user/shirt-size",366486872),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null)], null),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","gender","user/gender",-730968204),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","shirt-size","user/shirt-size",366486872),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"group-by-pred","group-by-pred",1951677,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","gender","user/gender",-730968204),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","shirt-size","user/shirt-size",366486872),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null)], null),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","gender","user/gender",-730968204),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","shirt-size","user/shirt-size",366486872),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e48425){var t__10691__auto__ = e48425;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"group-by-pred","group-by-pred",1951677,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","gender","user/gender",-730968204),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","shirt-size","user/shirt-size",366486872),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null)], null),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","gender","user/gender",-730968204),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","shirt-size","user/shirt-size",366486872),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)], null)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.data.t_contrib$data48398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48399","meta48399",-1438801201,null)], null);
}));

(contrib.data.t_contrib$data48398.cljs$lang$type = true);

(contrib.data.t_contrib$data48398.cljs$lang$ctorStr = "contrib.data/t_contrib$data48398");

(contrib.data.t_contrib$data48398.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.data/t_contrib$data48398");
}));

/**
 * Positional factory function for contrib.data/t_contrib$data48398.
 */
contrib.data.__GT_t_contrib$data48398 = (function contrib$data$generated__contrib_data_171_$___GT_t_contrib$data48398(meta48399){
return (new contrib.data.t_contrib$data48398(meta48399));
});

}

return (new contrib.data.t_contrib$data48398(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.data.generated__contrib_data_171;},new cljs.core.Symbol("contrib.data","generated__contrib_data_171","contrib.data/generated__contrib_data_171",-501920898,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/data.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.data","contrib.data",324393651,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),171,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_data_171","generated__contrib_data_171",-1276571815,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.data.generated__contrib_data_171)?contrib.data.generated__contrib_data_171.cljs$lang$test:null)], null)),contrib.data.generated__contrib_data_171));
} else {
}
contrib.data.update_existing = (function contrib$data$update_existing(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50124 = arguments.length;
var i__5770__auto___50125 = (0);
while(true){
if((i__5770__auto___50125 < len__5769__auto___50124)){
args__5775__auto__.push((arguments[i__5770__auto___50125]));

var G__50126 = (i__5770__auto___50125 + (1));
i__5770__auto___50125 = G__50126;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return contrib.data.update_existing.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(contrib.data.update_existing.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,args){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,m,k,f,args);
} else {
return m;
}
}));

(contrib.data.update_existing.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(contrib.data.update_existing.cljs$lang$applyTo = (function (seq48432){
var G__48433 = cljs.core.first(seq48432);
var seq48432__$1 = cljs.core.next(seq48432);
var G__48434 = cljs.core.first(seq48432__$1);
var seq48432__$2 = cljs.core.next(seq48432__$1);
var G__48435 = cljs.core.first(seq48432__$2);
var seq48432__$3 = cljs.core.next(seq48432__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48433,G__48434,G__48435,seq48432__$3);
}));

contrib.data.generated__contrib_data_186 = (function contrib$data$generated__contrib_data_186(){
if((typeof contrib !== 'undefined') && (typeof contrib.data !== 'undefined') && (typeof contrib.data.t_contrib$data48523 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.data.t_contrib$data48523 = (function (meta48524){
this.meta48524 = meta48524;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.data.t_contrib$data48523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48525,meta48524__$1){
var self__ = this;
var _48525__$1 = this;
return (new contrib.data.t_contrib$data48523(meta48524__$1));
}));

(contrib.data.t_contrib$data48523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48525){
var self__ = this;
var _48525__$1 = this;
return self__.meta48524;
}));

(contrib.data.t_contrib$data48523.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.data.t_contrib$data48523.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__48543 = (arguments.length - (1));
switch (G__48543) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.data.t_contrib$data48523.prototype.apply = (function (self__,args48535){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args48535)));
}));

(contrib.data.t_contrib$data48523.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_48484){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(2,done_48484);
try{var values__10703__auto___50130 = (new cljs.core.List(null,contrib.data.update_existing.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(10)], 0)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(11)], null),null,(1),null)),(2),null));
var result__10704__auto___50131 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50130);
if(cljs.core.truth_(result__10704__auto___50131)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"update-existing","update-existing",-58601637,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Symbol(null,"+","+",-740910886,null),(10)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(11)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50130),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"update-existing","update-existing",-58601637,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Symbol(null,"+","+",-740910886,null),(10)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(11)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50130),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50130);
}catch (e48547){var t__10691__auto___50133 = e48547;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"update-existing","update-existing",-58601637,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Symbol(null,"+","+",-740910886,null),(10)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(11)], null)),null,t__10691__auto___50133,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto__ = (new cljs.core.List(null,contrib.data.update_existing.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.Keyword(null,"b","b",1482224470),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(10)], 0)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"update-existing","update-existing",-58601637,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Symbol(null,"+","+",-740910886,null),(10)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"update-existing","update-existing",-58601637,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Symbol(null,"+","+",-740910886,null),(10)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e48556){var t__10691__auto__ = e48556;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"update-existing","update-existing",-58601637,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Symbol(null,"+","+",-740910886,null),(10)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.data.t_contrib$data48523.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48524","meta48524",969210490,null)], null);
}));

(contrib.data.t_contrib$data48523.cljs$lang$type = true);

(contrib.data.t_contrib$data48523.cljs$lang$ctorStr = "contrib.data/t_contrib$data48523");

(contrib.data.t_contrib$data48523.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.data/t_contrib$data48523");
}));

/**
 * Positional factory function for contrib.data/t_contrib$data48523.
 */
contrib.data.__GT_t_contrib$data48523 = (function contrib$data$generated__contrib_data_186_$___GT_t_contrib$data48523(meta48524){
return (new contrib.data.t_contrib$data48523(meta48524));
});

}

return (new contrib.data.t_contrib$data48523(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.data.generated__contrib_data_186;},new cljs.core.Symbol("contrib.data","generated__contrib_data_186","contrib.data/generated__contrib_data_186",1179467876,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/data.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.data","contrib.data",324393651,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),186,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_data_186","generated__contrib_data_186",-1783591933,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.data.generated__contrib_data_186)?contrib.data.generated__contrib_data_186.cljs$lang$test:null)], null)),contrib.data.generated__contrib_data_186));
} else {
}
contrib.data.take_upto = (function contrib$data$take_upto(pred){
return (function (rf){
return (function() {
var G__50140 = null;
var G__50140__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__50140__1 = (function (ac){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(ac) : rf.call(null,ac));
});
var G__50140__2 = (function (ac,nx){
var G__48570 = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(ac,nx) : rf.call(null,ac,nx));
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(nx) : pred.call(null,nx)))){
return cljs.core.ensure_reduced(G__48570);
} else {
return G__48570;
}
});
G__50140 = function(ac,nx){
switch(arguments.length){
case 0:
return G__50140__0.call(this);
case 1:
return G__50140__1.call(this,ac);
case 2:
return G__50140__2.call(this,ac,nx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50140.cljs$core$IFn$_invoke$arity$0 = G__50140__0;
G__50140.cljs$core$IFn$_invoke$arity$1 = G__50140__1;
G__50140.cljs$core$IFn$_invoke$arity$2 = G__50140__2;
return G__50140;
})()
});
});
contrib.data.generated__contrib_data_213 = (function contrib$data$generated__contrib_data_213(){
if((typeof contrib !== 'undefined') && (typeof contrib.data !== 'undefined') && (typeof contrib.data.t_contrib$data48614 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.data.t_contrib$data48614 = (function (meta48615){
this.meta48615 = meta48615;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.data.t_contrib$data48614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48616,meta48615__$1){
var self__ = this;
var _48616__$1 = this;
return (new contrib.data.t_contrib$data48614(meta48615__$1));
}));

(contrib.data.t_contrib$data48614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48616){
var self__ = this;
var _48616__$1 = this;
return self__.meta48615;
}));

(contrib.data.t_contrib$data48614.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.data.t_contrib$data48614.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__48622 = (arguments.length - (1));
switch (G__48622) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.data.t_contrib$data48614.prototype.apply = (function (self__,args48617){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args48617)));
}));

(contrib.data.t_contrib$data48614.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_48593){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(1,done_48593);
try{var values__10703__auto__ = (new cljs.core.List(null,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,contrib.data.take_upto(cljs.core.odd_QMARK_),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6),(8),(9),(10),(12),(14)], null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6),(8),(9)], null),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"take-upto","take-upto",-319944268,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6),(8),(9),(10),(12),(14)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6),(8),(9)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"take-upto","take-upto",-319944268,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6),(8),(9),(10),(12),(14)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6),(8),(9)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e48626){var t__10691__auto__ = e48626;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"take-upto","take-upto",-319944268,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6),(8),(9),(10),(12),(14)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6),(8),(9)], null)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.data.t_contrib$data48614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48615","meta48615",-236587021,null)], null);
}));

(contrib.data.t_contrib$data48614.cljs$lang$type = true);

(contrib.data.t_contrib$data48614.cljs$lang$ctorStr = "contrib.data/t_contrib$data48614");

(contrib.data.t_contrib$data48614.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.data/t_contrib$data48614");
}));

/**
 * Positional factory function for contrib.data/t_contrib$data48614.
 */
contrib.data.__GT_t_contrib$data48614 = (function contrib$data$generated__contrib_data_213_$___GT_t_contrib$data48614(meta48615){
return (new contrib.data.t_contrib$data48614(meta48615));
});

}

return (new contrib.data.t_contrib$data48614(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.data.generated__contrib_data_213;},new cljs.core.Symbol("contrib.data","generated__contrib_data_213","contrib.data/generated__contrib_data_213",-1551937754,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/data.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.data","contrib.data",324393651,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),213,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_data_213","generated__contrib_data_213",-177491129,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.data.generated__contrib_data_213)?contrib.data.generated__contrib_data_213.cljs$lang$test:null)], null)),contrib.data.generated__contrib_data_213));
} else {
}
contrib.data.round_floor = (function contrib$data$round_floor(n,base){
return (base * cljs.math.floor((n / base)));
});
contrib.data.pad = (function contrib$data$pad(var_args){
var G__48643 = arguments.length;
switch (G__48643) {
case 2:
return contrib.data.pad.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return contrib.data.pad.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(contrib.data.pad.cljs$core$IFn$_invoke$arity$2 = (function (zero,coll){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(coll,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(zero));
}));

(contrib.data.pad.cljs$core$IFn$_invoke$arity$3 = (function (n,zero,coll){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,contrib.data.pad.cljs$core$IFn$_invoke$arity$2(zero,coll));
}));

(contrib.data.pad.cljs$lang$maxFixedArity = 3);

contrib.data.padl = (function contrib$data$padl(n,zero,coll){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - cljs.core.count(coll)),zero),coll);
});
contrib.data.generated__contrib_data_240 = (function contrib$data$generated__contrib_data_240(){
if((typeof contrib !== 'undefined') && (typeof contrib.data !== 'undefined') && (typeof contrib.data.t_contrib$data48802 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.data.t_contrib$data48802 = (function (meta48803){
this.meta48803 = meta48803;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.data.t_contrib$data48802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48804,meta48803__$1){
var self__ = this;
var _48804__$1 = this;
return (new contrib.data.t_contrib$data48802(meta48803__$1));
}));

(contrib.data.t_contrib$data48802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48804){
var self__ = this;
var _48804__$1 = this;
return self__.meta48803;
}));

(contrib.data.t_contrib$data48802.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.data.t_contrib$data48802.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__48807 = (arguments.length - (1));
switch (G__48807) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.data.t_contrib$data48802.prototype.apply = (function (self__,args48806){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args48806)));
}));

(contrib.data.t_contrib$data48802.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_48789){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(4,done_48789);
try{var values__10703__auto___50155 = (new cljs.core.List(null,contrib.data.pad.cljs$core$IFn$_invoke$arity$3((8),(0),cljs.core.range.cljs$core$IFn$_invoke$arity$1((3))),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(0),(0),(0),(0),(0)], null),null,(1),null)),(2),null));
var result__10704__auto___50156 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50155);
if(cljs.core.truth_(result__10704__auto___50156)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"pad","pad",1603796986,null),(8),(0),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),(3))),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(0),(0),(0),(0),(0)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50155),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"pad","pad",1603796986,null),(8),(0),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),(3))),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(0),(0),(0),(0),(0)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50155),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50155);
}catch (e48808){var t__10691__auto___50157 = e48808;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"pad","pad",1603796986,null),(8),(0),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),(3))),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(0),(0),(0),(0),(0)], null)),null,t__10691__auto___50157,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___50158 = (new cljs.core.List(null,contrib.data.padl((8),(0),cljs.core.range.cljs$core$IFn$_invoke$arity$1((3))),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(1),(2)], null),null,(1),null)),(2),null));
var result__10704__auto___50159 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50158);
if(cljs.core.truth_(result__10704__auto___50159)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"padl","padl",868969692,null),(8),(0),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),(3))),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(1),(2)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50158),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"padl","padl",868969692,null),(8),(0),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),(3))),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(1),(2)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50158),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50158);
}catch (e48809){var t__10691__auto___50166 = e48809;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"padl","padl",868969692,null),(8),(0),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),(3))),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(1),(2)], null)),null,t__10691__auto___50166,null]));
}finally {RCF__done_BANG_();
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["strings leak platform internals, use padl-str"], 0));

try{try{var values__10703__auto___50171 = (new cljs.core.List(null,contrib.data.pad.cljs$core$IFn$_invoke$arity$3((8),"0","xx"),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x","x","0","0","0","0","0","0"], null),null,(1),null)),(2),null));
var result__10704__auto___50172 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50171);
if(cljs.core.truth_(result__10704__auto___50172)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"pad","pad",1603796986,null),(8),"0","xx"),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x","x","0","0","0","0","0","0"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50171),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"pad","pad",1603796986,null),(8),"0","xx"),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x","x","0","0","0","0","0","0"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50171),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50171);
}catch (e48811){var t__10691__auto___50175 = e48811;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"pad","pad",1603796986,null),(8),"0","xx"),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x","x","0","0","0","0","0","0"], null)),null,t__10691__auto___50175,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto__ = (new cljs.core.List(null,contrib.data.padl((8),"0","xx"),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0","0","0","0","0","0","x","x"], null),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"padl","padl",868969692,null),(8),"0","xx"),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0","0","0","0","0","0","x","x"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"padl","padl",868969692,null),(8),"0","xx"),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0","0","0","0","0","0","x","x"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e48816){var t__10691__auto__ = e48816;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"padl","padl",868969692,null),(8),"0","xx"),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0","0","0","0","0","0","x","x"], null)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(contrib.data.t_contrib$data48802.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48803","meta48803",-891603416,null)], null);
}));

(contrib.data.t_contrib$data48802.cljs$lang$type = true);

(contrib.data.t_contrib$data48802.cljs$lang$ctorStr = "contrib.data/t_contrib$data48802");

(contrib.data.t_contrib$data48802.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.data/t_contrib$data48802");
}));

/**
 * Positional factory function for contrib.data/t_contrib$data48802.
 */
contrib.data.__GT_t_contrib$data48802 = (function contrib$data$generated__contrib_data_240_$___GT_t_contrib$data48802(meta48803){
return (new contrib.data.t_contrib$data48802(meta48803));
});

}

return (new contrib.data.t_contrib$data48802(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.data.generated__contrib_data_240;},new cljs.core.Symbol("contrib.data","generated__contrib_data_240","contrib.data/generated__contrib_data_240",-895364978,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/data.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.data","contrib.data",324393651,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),240,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_data_240","generated__contrib_data_240",-1196059415,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.data.generated__contrib_data_240)?contrib.data.generated__contrib_data_240.cljs$lang$test:null)], null)),contrib.data.generated__contrib_data_240));
} else {
}
contrib.data.assoc_vec = (function contrib$data$assoc_vec(xs,k,v){
if((k >= cljs.core.count(xs))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(contrib.data.pad.cljs$core$IFn$_invoke$arity$3(k,null,xs)),k,v);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(xs,k,v);
}
});
contrib.data.generated__contrib_data_256 = (function contrib$data$generated__contrib_data_256(){
if((typeof contrib !== 'undefined') && (typeof contrib.data !== 'undefined') && (typeof contrib.data.t_contrib$data48911 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.data.t_contrib$data48911 = (function (meta48912){
this.meta48912 = meta48912;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.data.t_contrib$data48911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48913,meta48912__$1){
var self__ = this;
var _48913__$1 = this;
return (new contrib.data.t_contrib$data48911(meta48912__$1));
}));

(contrib.data.t_contrib$data48911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48913){
var self__ = this;
var _48913__$1 = this;
return self__.meta48912;
}));

(contrib.data.t_contrib$data48911.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.data.t_contrib$data48911.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__48915 = (arguments.length - (1));
switch (G__48915) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.data.t_contrib$data48911.prototype.apply = (function (self__,args48914){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args48914)));
}));

(contrib.data.t_contrib$data48911.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_48899){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(6,done_48899);
try{var values__10703__auto___50179 = (new cljs.core.List(null,contrib.data.assoc_vec(cljs.core.PersistentVector.EMPTY,(0),new cljs.core.Keyword(null,"a","a",-2123407586)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null),null,(1),null)),(2),null));
var result__10704__auto___50180 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50179);
if(cljs.core.truth_(result__10704__auto___50180)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-vec","assoc-vec",-424741031,null),cljs.core.PersistentVector.EMPTY,(0),new cljs.core.Keyword(null,"a","a",-2123407586)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50179),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-vec","assoc-vec",-424741031,null),cljs.core.PersistentVector.EMPTY,(0),new cljs.core.Keyword(null,"a","a",-2123407586)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50179),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50179);
}catch (e48924){var t__10691__auto___50181 = e48924;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-vec","assoc-vec",-424741031,null),cljs.core.PersistentVector.EMPTY,(0),new cljs.core.Keyword(null,"a","a",-2123407586)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null)),null,t__10691__auto___50181,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___50182 = (new cljs.core.List(null,contrib.data.assoc_vec(cljs.core.PersistentVector.EMPTY,(1),new cljs.core.Keyword(null,"b","b",1482224470)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Keyword(null,"b","b",1482224470)], null),null,(1),null)),(2),null));
var result__10704__auto___50183 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50182);
if(cljs.core.truth_(result__10704__auto___50183)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-vec","assoc-vec",-424741031,null),cljs.core.PersistentVector.EMPTY,(1),new cljs.core.Keyword(null,"b","b",1482224470)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Keyword(null,"b","b",1482224470)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50182),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-vec","assoc-vec",-424741031,null),cljs.core.PersistentVector.EMPTY,(1),new cljs.core.Keyword(null,"b","b",1482224470)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Keyword(null,"b","b",1482224470)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50182),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50182);
}catch (e48925){var t__10691__auto___50185 = e48925;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-vec","assoc-vec",-424741031,null),cljs.core.PersistentVector.EMPTY,(1),new cljs.core.Keyword(null,"b","b",1482224470)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Keyword(null,"b","b",1482224470)], null)),null,t__10691__auto___50185,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___50186 = (new cljs.core.List(null,contrib.data.assoc_vec(cljs.core.PersistentVector.EMPTY,(4),new cljs.core.Keyword(null,"e","e",1381269198)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,new cljs.core.Keyword(null,"e","e",1381269198)], null),null,(1),null)),(2),null));
var result__10704__auto___50187 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50186);
if(cljs.core.truth_(result__10704__auto___50187)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-vec","assoc-vec",-424741031,null),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.Keyword(null,"e","e",1381269198)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,new cljs.core.Keyword(null,"e","e",1381269198)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50186),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-vec","assoc-vec",-424741031,null),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.Keyword(null,"e","e",1381269198)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,new cljs.core.Keyword(null,"e","e",1381269198)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50186),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50186);
}catch (e48926){var t__10691__auto___50188 = e48926;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-vec","assoc-vec",-424741031,null),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.Keyword(null,"e","e",1381269198)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,new cljs.core.Keyword(null,"e","e",1381269198)], null)),null,t__10691__auto___50188,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___50191 = (new cljs.core.List(null,contrib.data.assoc_vec(null,(4),new cljs.core.Keyword(null,"e","e",1381269198)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,new cljs.core.Keyword(null,"e","e",1381269198)], null),null,(1),null)),(2),null));
var result__10704__auto___50192 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50191);
if(cljs.core.truth_(result__10704__auto___50192)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-vec","assoc-vec",-424741031,null),null,(4),new cljs.core.Keyword(null,"e","e",1381269198)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,new cljs.core.Keyword(null,"e","e",1381269198)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50191),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-vec","assoc-vec",-424741031,null),null,(4),new cljs.core.Keyword(null,"e","e",1381269198)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,new cljs.core.Keyword(null,"e","e",1381269198)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50191),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50191);
}catch (e48927){var t__10691__auto___50195 = e48927;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-vec","assoc-vec",-424741031,null),null,(4),new cljs.core.Keyword(null,"e","e",1381269198)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,new cljs.core.Keyword(null,"e","e",1381269198)], null)),null,t__10691__auto___50195,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___50197 = (new cljs.core.List(null,contrib.data.assoc_vec(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079)], null),(1),new cljs.core.Keyword(null,"B","B",-1422503380)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.Keyword(null,"c","c",-1763192079)], null),null,(1),null)),(2),null));
var result__10704__auto___50198 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50197);
if(cljs.core.truth_(result__10704__auto___50198)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-vec","assoc-vec",-424741031,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079)], null),(1),new cljs.core.Keyword(null,"B","B",-1422503380)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.Keyword(null,"c","c",-1763192079)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50197),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-vec","assoc-vec",-424741031,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079)], null),(1),new cljs.core.Keyword(null,"B","B",-1422503380)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.Keyword(null,"c","c",-1763192079)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50197),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50197);
}catch (e48928){var t__10691__auto___50203 = e48928;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-vec","assoc-vec",-424741031,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079)], null),(1),new cljs.core.Keyword(null,"B","B",-1422503380)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.Keyword(null,"c","c",-1763192079)], null)),null,t__10691__auto___50203,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto__ = (new cljs.core.List(null,contrib.data.assoc_vec(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079)], null),(4),new cljs.core.Keyword(null,"E","E",230849842)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079),null,new cljs.core.Keyword(null,"E","E",230849842)], null),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-vec","assoc-vec",-424741031,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079)], null),(4),new cljs.core.Keyword(null,"E","E",230849842)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079),null,new cljs.core.Keyword(null,"E","E",230849842)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-vec","assoc-vec",-424741031,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079)], null),(4),new cljs.core.Keyword(null,"E","E",230849842)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079),null,new cljs.core.Keyword(null,"E","E",230849842)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e48929){var t__10691__auto__ = e48929;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-vec","assoc-vec",-424741031,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079)], null),(4),new cljs.core.Keyword(null,"E","E",230849842)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079),null,new cljs.core.Keyword(null,"E","E",230849842)], null)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.data.t_contrib$data48911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48912","meta48912",1748319353,null)], null);
}));

(contrib.data.t_contrib$data48911.cljs$lang$type = true);

(contrib.data.t_contrib$data48911.cljs$lang$ctorStr = "contrib.data/t_contrib$data48911");

(contrib.data.t_contrib$data48911.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.data/t_contrib$data48911");
}));

/**
 * Positional factory function for contrib.data/t_contrib$data48911.
 */
contrib.data.__GT_t_contrib$data48911 = (function contrib$data$generated__contrib_data_256_$___GT_t_contrib$data48911(meta48912){
return (new contrib.data.t_contrib$data48911(meta48912));
});

}

return (new contrib.data.t_contrib$data48911(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.data.generated__contrib_data_256;},new cljs.core.Symbol("contrib.data","generated__contrib_data_256","contrib.data/generated__contrib_data_256",-1555459235,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/data.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.data","contrib.data",324393651,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),256,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_data_256","generated__contrib_data_256",-256516226,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.data.generated__contrib_data_256)?contrib.data.generated__contrib_data_256.cljs$lang$test:null)], null)),contrib.data.generated__contrib_data_256));
} else {
}
contrib.data.padl_str = (function contrib$data$padl_str(n,zero,s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,contrib.data.padl(n,zero,s));
});
contrib.data.generated__contrib_data_266 = (function contrib$data$generated__contrib_data_266(){
if((typeof contrib !== 'undefined') && (typeof contrib.data !== 'undefined') && (typeof contrib.data.t_contrib$data48970 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.data.t_contrib$data48970 = (function (meta48971){
this.meta48971 = meta48971;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.data.t_contrib$data48970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48972,meta48971__$1){
var self__ = this;
var _48972__$1 = this;
return (new contrib.data.t_contrib$data48970(meta48971__$1));
}));

(contrib.data.t_contrib$data48970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48972){
var self__ = this;
var _48972__$1 = this;
return self__.meta48971;
}));

(contrib.data.t_contrib$data48970.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.data.t_contrib$data48970.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__48979 = (arguments.length - (1));
switch (G__48979) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.data.t_contrib$data48970.prototype.apply = (function (self__,args48974){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args48974)));
}));

(contrib.data.t_contrib$data48970.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_48959){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(2,done_48959);
try{var values__10703__auto___50213 = (new cljs.core.List(null,contrib.data.padl_str((8),"0","xx"),(new cljs.core.List(null,"000000xx",null,(1),null)),(2),null));
var result__10704__auto___50214 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50213);
if(cljs.core.truth_(result__10704__auto___50214)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"padl-str","padl-str",-1919086633,null),(8),"0","xx"),"000000xx"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50213),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"padl-str","padl-str",-1919086633,null),(8),"0","xx"),"000000xx"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50213),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50213);
}catch (e48983){var t__10691__auto___50215 = e48983;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"padl-str","padl-str",-1919086633,null),(8),"0","xx"),"000000xx"),null,t__10691__auto___50215,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto__ = (new cljs.core.List(null,contrib.data.padl_str((4),"0",cljs.core.str.cljs$core$IFn$_invoke$arity$1((11))),(new cljs.core.List(null,"0011",null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"padl-str","padl-str",-1919086633,null),(4),"0",cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),(11))),"0011"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"padl-str","padl-str",-1919086633,null),(4),"0",cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),(11))),"0011"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e48991){var t__10691__auto__ = e48991;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"padl-str","padl-str",-1919086633,null),(4),"0",cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),(11))),"0011"),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.data.t_contrib$data48970.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48971","meta48971",432449659,null)], null);
}));

(contrib.data.t_contrib$data48970.cljs$lang$type = true);

(contrib.data.t_contrib$data48970.cljs$lang$ctorStr = "contrib.data/t_contrib$data48970");

(contrib.data.t_contrib$data48970.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.data/t_contrib$data48970");
}));

/**
 * Positional factory function for contrib.data/t_contrib$data48970.
 */
contrib.data.__GT_t_contrib$data48970 = (function contrib$data$generated__contrib_data_266_$___GT_t_contrib$data48970(meta48971){
return (new contrib.data.t_contrib$data48970(meta48971));
});

}

return (new contrib.data.t_contrib$data48970(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.data.generated__contrib_data_266;},new cljs.core.Symbol("contrib.data","generated__contrib_data_266","contrib.data/generated__contrib_data_266",1473248580,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/data.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.data","contrib.data",324393651,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),266,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_data_266","generated__contrib_data_266",30941539,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.data.generated__contrib_data_266)?contrib.data.generated__contrib_data_266.cljs$lang$test:null)], null)),contrib.data.generated__contrib_data_266));
} else {
}
contrib.data.with_pad = (function contrib$data$with_pad(reducer,zero){
return (function() { 
var G__50221__delegate = function (f,cols){
var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cols));
var cols__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48996_SHARP_){
return contrib.data.pad.cljs$core$IFn$_invoke$arity$3(n,zero,p1__48996_SHARP_);
}),cols);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(reducer,f,cols__$1);
};
var G__50221 = function (f,var_args){
var cols = null;
if (arguments.length > 1) {
var G__50222__i = 0, G__50222__a = new Array(arguments.length -  1);
while (G__50222__i < G__50222__a.length) {G__50222__a[G__50222__i] = arguments[G__50222__i + 1]; ++G__50222__i;}
  cols = new cljs.core.IndexedSeq(G__50222__a,0,null);
} 
return G__50221__delegate.call(this,f,cols);};
G__50221.cljs$lang$maxFixedArity = 1;
G__50221.cljs$lang$applyTo = (function (arglist__50223){
var f = cljs.core.first(arglist__50223);
var cols = cljs.core.rest(arglist__50223);
return G__50221__delegate(f,cols);
});
G__50221.cljs$core$IFn$_invoke$arity$variadic = G__50221__delegate;
return G__50221;
})()
;
});
contrib.data.map_pad = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(contrib.data.with_pad,cljs.core.map);
contrib.data.generated__contrib_data_278 = (function contrib$data$generated__contrib_data_278(){
if((typeof contrib !== 'undefined') && (typeof contrib.data !== 'undefined') && (typeof contrib.data.t_contrib$data49046 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.data.t_contrib$data49046 = (function (meta49047){
this.meta49047 = meta49047;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.data.t_contrib$data49046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49048,meta49047__$1){
var self__ = this;
var _49048__$1 = this;
return (new contrib.data.t_contrib$data49046(meta49047__$1));
}));

(contrib.data.t_contrib$data49046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49048){
var self__ = this;
var _49048__$1 = this;
return self__.meta49047;
}));

(contrib.data.t_contrib$data49046.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.data.t_contrib$data49046.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__49060 = (arguments.length - (1));
switch (G__49060) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.data.t_contrib$data49046.prototype.apply = (function (self__,args49055){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args49055)));
}));

(contrib.data.t_contrib$data49046.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_49034){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(2,done_49034);
try{var values__10703__auto___50230 = (new cljs.core.List(null,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1)], null)),(new cljs.core.List(null,cljs.core.list((2),(2),(2)),null,(1),null)),(2),null));
var result__10704__auto___50231 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50230);
if(cljs.core.truth_(result__10704__auto___50231)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1)], null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(2),(2)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50230),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1)], null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(2),(2)))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50230),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50230);
}catch (e49061){var t__10691__auto___50237 = e49061;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1)], null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(2),(2)))),null,t__10691__auto___50237,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto__ = (new cljs.core.List(null,(function (){var G__49070 = cljs.core._PLUS_;
var G__49071 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null);
var G__49072 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1)], null);
var fexpr__49069 = contrib.data.map_pad((0));
return (fexpr__49069.cljs$core$IFn$_invoke$arity$3 ? fexpr__49069.cljs$core$IFn$_invoke$arity$3(G__49070,G__49071,G__49072) : fexpr__49069.call(null,G__49070,G__49071,G__49072));
})(),(new cljs.core.List(null,cljs.core.list((2),(2),(2),(1)),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"map-pad","map-pad",-1942258556,null),(0)),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1)], null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(2),(2),(1)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"map-pad","map-pad",-1942258556,null),(0)),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1)], null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(2),(2),(1)))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e49068){var t__10691__auto__ = e49068;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"map-pad","map-pad",-1942258556,null),(0)),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1)], null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(2),(2),(1)))),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.data.t_contrib$data49046.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49047","meta49047",-149709993,null)], null);
}));

(contrib.data.t_contrib$data49046.cljs$lang$type = true);

(contrib.data.t_contrib$data49046.cljs$lang$ctorStr = "contrib.data/t_contrib$data49046");

(contrib.data.t_contrib$data49046.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.data/t_contrib$data49046");
}));

/**
 * Positional factory function for contrib.data/t_contrib$data49046.
 */
contrib.data.__GT_t_contrib$data49046 = (function contrib$data$generated__contrib_data_278_$___GT_t_contrib$data49046(meta49047){
return (new contrib.data.t_contrib$data49046(meta49047));
});

}

return (new contrib.data.t_contrib$data49046(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.data.generated__contrib_data_278;},new cljs.core.Symbol("contrib.data","generated__contrib_data_278","contrib.data/generated__contrib_data_278",925333686,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/data.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.data","contrib.data",324393651,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),278,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_data_278","generated__contrib_data_278",-918866795,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.data.generated__contrib_data_278)?contrib.data.generated__contrib_data_278.cljs$lang$test:null)], null)),contrib.data.generated__contrib_data_278));
} else {
}
contrib.data.str_last_n = (function contrib$data$str_last_n(n,s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.reverse(s))));
});
contrib.data.generated__contrib_data_286 = (function contrib$data$generated__contrib_data_286(){
if((typeof contrib !== 'undefined') && (typeof contrib.data !== 'undefined') && (typeof contrib.data.t_contrib$data49106 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.data.t_contrib$data49106 = (function (meta49107){
this.meta49107 = meta49107;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.data.t_contrib$data49106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49108,meta49107__$1){
var self__ = this;
var _49108__$1 = this;
return (new contrib.data.t_contrib$data49106(meta49107__$1));
}));

(contrib.data.t_contrib$data49106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49108){
var self__ = this;
var _49108__$1 = this;
return self__.meta49107;
}));

(contrib.data.t_contrib$data49106.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.data.t_contrib$data49106.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__49114 = (arguments.length - (1));
switch (G__49114) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.data.t_contrib$data49106.prototype.apply = (function (self__,args49109){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args49109)));
}));

(contrib.data.t_contrib$data49106.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_49088){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(1,done_49088);
try{var values__10703__auto__ = (new cljs.core.List(null,contrib.data.str_last_n((4),"0123456789"),(new cljs.core.List(null,"6789",null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-last-n","str-last-n",567620495,null),(4),"0123456789"),"6789"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-last-n","str-last-n",567620495,null),(4),"0123456789"),"6789"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e49118){var t__10691__auto__ = e49118;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"str-last-n","str-last-n",567620495,null),(4),"0123456789"),"6789"),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.data.t_contrib$data49106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49107","meta49107",1241110375,null)], null);
}));

(contrib.data.t_contrib$data49106.cljs$lang$type = true);

(contrib.data.t_contrib$data49106.cljs$lang$ctorStr = "contrib.data/t_contrib$data49106");

(contrib.data.t_contrib$data49106.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.data/t_contrib$data49106");
}));

/**
 * Positional factory function for contrib.data/t_contrib$data49106.
 */
contrib.data.__GT_t_contrib$data49106 = (function contrib$data$generated__contrib_data_286_$___GT_t_contrib$data49106(meta49107){
return (new contrib.data.t_contrib$data49106(meta49107));
});

}

return (new contrib.data.t_contrib$data49106(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.data.generated__contrib_data_286;},new cljs.core.Symbol("contrib.data","generated__contrib_data_286","contrib.data/generated__contrib_data_286",967015914,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/data.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.data","contrib.data",324393651,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),286,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_data_286","generated__contrib_data_286",-338263611,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.data.generated__contrib_data_286)?contrib.data.generated__contrib_data_286.cljs$lang$test:null)], null)),contrib.data.generated__contrib_data_286));
} else {
}
contrib.data.generated__contrib_data_315 = (function contrib$data$generated__contrib_data_315(){
if((typeof contrib !== 'undefined') && (typeof contrib.data !== 'undefined') && (typeof contrib.data.t_contrib$data49227 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.data.t_contrib$data49227 = (function (meta49228){
this.meta49228 = meta49228;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.data.t_contrib$data49227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49229,meta49228__$1){
var self__ = this;
var _49229__$1 = this;
return (new contrib.data.t_contrib$data49227(meta49228__$1));
}));

(contrib.data.t_contrib$data49227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49229){
var self__ = this;
var _49229__$1 = this;
return self__.meta49228;
}));

(contrib.data.t_contrib$data49227.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.data.t_contrib$data49227.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__49235 = (arguments.length - (1));
switch (G__49235) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.data.t_contrib$data49227.prototype.apply = (function (self__,args49232){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args49232)));
}));

(contrib.data.t_contrib$data49227.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_49219){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(2,done_49219);
try{var values__10703__auto___50246 = (new cljs.core.List(null,(function (){var or__28610__auto__ = null;
if((!((or__28610__auto__ == null)))){
return or__28610__auto__;
} else {
var or__28610__auto____$1 = false;
if((!((or__28610__auto____$1 == null)))){
return or__28610__auto____$1;
} else {
var or__28609__auto__ = (1);
if((!((or__28609__auto__ == null)))){
return or__28609__auto__;
} else {
return null;
}
}
}
})(),(new cljs.core.List(null,false,null,(1),null)),(2),null));
var result__10704__auto___50247 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___50246);
if(cljs.core.truth_(result__10704__auto___50247)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"orp","orp",779412004,null),new cljs.core.Symbol(null,"some?","some?",234752293,null),null,false,(1)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___50246),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"orp","orp",779412004,null),new cljs.core.Symbol(null,"some?","some?",234752293,null),null,false,(1)),false),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___50246),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___50246);
}catch (e49240){var t__10691__auto___50248 = e49240;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or__28610__auto__","or__28610__auto__",1283839294,null),null], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("cljs.core","coercive-=","cljs.core/coercive-=",-2012120473,null),new cljs.core.Symbol(null,"or__28610__auto__","or__28610__auto__",1283839294,null),null)),new cljs.core.Symbol(null,"or__28610__auto__","or__28610__auto__",1283839294,null),cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or__28610__auto__","or__28610__auto__",1283839294,null),false], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("cljs.core","coercive-=","cljs.core/coercive-=",-2012120473,null),new cljs.core.Symbol(null,"or__28610__auto__","or__28610__auto__",1283839294,null),null)),new cljs.core.Symbol(null,"or__28610__auto__","or__28610__auto__",1283839294,null),cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or__28609__auto__","or__28609__auto__",-1724980733,null),(1)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("cljs.core","coercive-=","cljs.core/coercive-=",-2012120473,null),new cljs.core.Symbol(null,"or__28609__auto__","or__28609__auto__",-1724980733,null),null)),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"or__28609__auto__","or__28609__auto__",-1724980733,null)),null))))))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"orp","orp",779412004,null),new cljs.core.Symbol(null,"some?","some?",234752293,null),null,false,(1)))], null)),false),null,t__10691__auto___50248,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto__ = (new cljs.core.List(null,(function (){var or__28610__auto__ = (1);
if(cljs.core.even_QMARK_(or__28610__auto__)){
return or__28610__auto__;
} else {
var or__28610__auto____$1 = (3);
if(cljs.core.even_QMARK_(or__28610__auto____$1)){
return or__28610__auto____$1;
} else {
var or__28610__auto____$2 = (5);
if(cljs.core.even_QMARK_(or__28610__auto____$2)){
return or__28610__auto____$2;
} else {
var or__28610__auto____$3 = (6);
if(cljs.core.even_QMARK_(or__28610__auto____$3)){
return or__28610__auto____$3;
} else {
var or__28609__auto__ = (7);
if(cljs.core.even_QMARK_(or__28609__auto__)){
return or__28609__auto__;
} else {
return null;
}
}
}
}
}
})(),(new cljs.core.List(null,(6),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"orp","orp",779412004,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),(1),(3),(5),(6),(7)),(6)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"orp","orp",779412004,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),(1),(3),(5),(6),(7)),(6)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e49245){var t__10691__auto__ = e49245;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or__28610__auto__","or__28610__auto__",1283839294,null),(1)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),new cljs.core.Symbol(null,"or__28610__auto__","or__28610__auto__",1283839294,null)),new cljs.core.Symbol(null,"or__28610__auto__","or__28610__auto__",1283839294,null),cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or__28610__auto__","or__28610__auto__",1283839294,null),(3)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),new cljs.core.Symbol(null,"or__28610__auto__","or__28610__auto__",1283839294,null)),new cljs.core.Symbol(null,"or__28610__auto__","or__28610__auto__",1283839294,null),cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or__28610__auto__","or__28610__auto__",1283839294,null),(5)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),new cljs.core.Symbol(null,"or__28610__auto__","or__28610__auto__",1283839294,null)),new cljs.core.Symbol(null,"or__28610__auto__","or__28610__auto__",1283839294,null),cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or__28610__auto__","or__28610__auto__",1283839294,null),(6)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),new cljs.core.Symbol(null,"or__28610__auto__","or__28610__auto__",1283839294,null)),new cljs.core.Symbol(null,"or__28610__auto__","or__28610__auto__",1283839294,null),cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or__28609__auto__","or__28609__auto__",-1724980733,null),(7)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),new cljs.core.Symbol(null,"or__28609__auto__","or__28609__auto__",-1724980733,null)),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"or__28609__auto__","or__28609__auto__",-1724980733,null)),null))))))))))))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"orp","orp",779412004,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),(1),(3),(5),(6),(7)))], null)),(6)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.data.t_contrib$data49227.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49228","meta49228",-915016850,null)], null);
}));

(contrib.data.t_contrib$data49227.cljs$lang$type = true);

(contrib.data.t_contrib$data49227.cljs$lang$ctorStr = "contrib.data/t_contrib$data49227");

(contrib.data.t_contrib$data49227.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.data/t_contrib$data49227");
}));

/**
 * Positional factory function for contrib.data/t_contrib$data49227.
 */
contrib.data.__GT_t_contrib$data49227 = (function contrib$data$generated__contrib_data_315_$___GT_t_contrib$data49227(meta49228){
return (new contrib.data.t_contrib$data49227(meta49228));
});

}

return (new contrib.data.t_contrib$data49227(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.data.generated__contrib_data_315;},new cljs.core.Symbol("contrib.data","generated__contrib_data_315","contrib.data/generated__contrib_data_315",1547145218,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/data.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.data","contrib.data",324393651,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),315,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_data_315","generated__contrib_data_315",-1843178397,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.data.generated__contrib_data_315)?contrib.data.generated__contrib_data_315.cljs$lang$test:null)], null)),contrib.data.generated__contrib_data_315));
} else {
}
contrib.data.nil_or_empty_QMARK_ = (function contrib$data$nil_or_empty_QMARK_(x){
if(cljs.core.seqable_QMARK_(x)){
return cljs.core.empty_QMARK_(x);
} else {
return (x == null);
}
});
contrib.data._tree_list = (function contrib$data$_tree_list(depth,xs,children_fn,keep_QMARK_,input){
return cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (x){
var x__$1 = clojure.datafy.datafy(x);
var temp__5802__auto__ = (children_fn.cljs$core$IFn$_invoke$arity$1 ? children_fn.cljs$core$IFn$_invoke$arity$1(x__$1) : children_fn.call(null,x__$1));
if(cljs.core.truth_(temp__5802__auto__)){
var children = temp__5802__auto__;
var temp__5804__auto__ = cljs.core.seq((function (){var G__49263 = (depth + (1));
var G__49264 = children;
var G__49265 = children_fn;
var G__49266 = keep_QMARK_;
var G__49267 = input;
return (contrib.data._tree_list.cljs$core$IFn$_invoke$arity$5 ? contrib.data._tree_list.cljs$core$IFn$_invoke$arity$5(G__49263,G__49264,G__49265,G__49266,G__49267) : contrib.data._tree_list.call(null,G__49263,G__49264,G__49265,G__49266,G__49267));
})());
if(temp__5804__auto__){
var rows = temp__5804__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth,x__$1], null)], null),rows);
} else {
return null;
}
} else {
var G__49268 = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_((keep_QMARK_.cljs$core$IFn$_invoke$arity$2 ? keep_QMARK_.cljs$core$IFn$_invoke$arity$2(x__$1,input) : keep_QMARK_.call(null,x__$1,input)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__49268,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth,x__$1], null));
} else {
return G__49268;
}
}
})),clojure.datafy.datafy(xs)], 0));
});
contrib.data.treelister = (function contrib$data$treelister(var_args){
var G__49270 = arguments.length;
switch (G__49270) {
case 1:
return contrib.data.treelister.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return contrib.data.treelister.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(contrib.data.treelister.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return contrib.data.treelister.cljs$core$IFn$_invoke$arity$3(xs,(function (_){
return null;
}),(function (_,___$1){
return true;
}));
}));

(contrib.data.treelister.cljs$core$IFn$_invoke$arity$3 = (function (xs,children_fn,keep_QMARK_){
return (function (input){
return contrib.data._tree_list((0),xs,children_fn,keep_QMARK_,input);
});
}));

(contrib.data.treelister.cljs$lang$maxFixedArity = 3);

contrib.data.generated__contrib_data_337 = (function contrib$data$generated__contrib_data_337(){
if((typeof contrib !== 'undefined') && (typeof contrib.data !== 'undefined') && (typeof contrib.data.t_contrib$data49506 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.data.t_contrib$data49506 = (function (meta49507){
this.meta49507 = meta49507;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.data.t_contrib$data49506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49508,meta49507__$1){
var self__ = this;
var _49508__$1 = this;
return (new contrib.data.t_contrib$data49506(meta49507__$1));
}));

(contrib.data.t_contrib$data49506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49508){
var self__ = this;
var _49508__$1 = this;
return self__.meta49507;
}));

(contrib.data.t_contrib$data49506.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.data.t_contrib$data49506.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__49531 = (arguments.length - (1));
switch (G__49531) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.data.t_contrib$data49506.prototype.apply = (function (self__,args49520){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args49520)));
}));

(contrib.data.t_contrib$data49506.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_49423){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(3,done_49423);
var vec__49390 = hyperfiddle.rcf.binding_queue();
var RCF__push_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49390,(0),null);
var RCF__peek_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49390,(1),null);
var G__49552_50268 = (function (){try{var values__10703__auto__ = (new cljs.core.List(null,cljs.core.vec(contrib.data.treelister.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null)], null)], null)], null),(function (p1__49272_SHARP_){
if(cljs.core.vector_QMARK_(p1__49272_SHARP_)){
return p1__49272_SHARP_;
} else {
return null;
}
}),(function (v,_){
return cljs.core.odd_QMARK_(v);
}))(null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(7)], null)], null),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"vec","vec",982683596,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"treelister","treelister",-1012963880,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49272#","p1__49272#",1954110470,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"p1__49272#","p1__49272#",1954110470,null)),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"p1__49272#","p1__49272#",1954110470,null)),null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,"v","v",1661996586,null)))))),null)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(7)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"vec","vec",982683596,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"treelister","treelister",-1012963880,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49272#","p1__49272#",1954110470,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"p1__49272#","p1__49272#",1954110470,null)),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"p1__49272#","p1__49272#",1954110470,null)),null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,"v","v",1661996586,null)))))),null)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(7)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e49562){var t__10691__auto__ = e49562;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"vec","vec",982683596,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"treelister","treelister",-1012963880,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49272#","p1__49272#",1954110470,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"p1__49272#","p1__49272#",1954110470,null)),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"p1__49272#","p1__49272#",1954110470,null)),null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,"v","v",1661996586,null)))))),null)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(7)], null)], null)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}})();
(RCF__push_BANG_.cljs$core$IFn$_invoke$arity$1 ? RCF__push_BANG_.cljs$core$IFn$_invoke$arity$1(G__49552_50268) : RCF__push_BANG_.call(null,G__49552_50268));

var G__49601_50283 = contrib.data.treelister.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dir","dir",1734754661),"x",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),"a"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),"b"], null)], null)], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),(function (v,needle){
var G__49613 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(v);
var fexpr__49612 = cljs.core.PersistentHashSet.createAsIfByAssoc([needle]);
return (fexpr__49612.cljs$core$IFn$_invoke$arity$1 ? fexpr__49612.cljs$core$IFn$_invoke$arity$1(G__49613) : fexpr__49612.call(null,G__49613));
}))("a");
(RCF__push_BANG_.cljs$core$IFn$_invoke$arity$1 ? RCF__push_BANG_.cljs$core$IFn$_invoke$arity$1(G__49601_50283) : RCF__push_BANG_.call(null,G__49601_50283));

var G__49615_50290 = (function (){try{var values__10703__auto__ = (new cljs.core.List(null,cljs.core.count(cljs.core.vec((RCF__peek_BANG_.cljs$core$IFn$_invoke$arity$1 ? RCF__peek_BANG_.cljs$core$IFn$_invoke$arity$1((0)) : RCF__peek_BANG_.call(null,(0))))),(new cljs.core.List(null,(2),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"vec","vec",982683596,null),cljs.core.list(new cljs.core.Symbol(null,"RCF__peek!","RCF__peek!",1409137532,null),(0)))),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"vec","vec",982683596,null),cljs.core.list(new cljs.core.Symbol(null,"RCF__peek!","RCF__peek!",1409137532,null),(0)))),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e49620){var t__10691__auto__ = e49620;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"vec","vec",982683596,null),cljs.core.list(new cljs.core.Symbol(null,"RCF__peek!","RCF__peek!",1409137532,null),(0)))),(2)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}})();
(RCF__push_BANG_.cljs$core$IFn$_invoke$arity$1 ? RCF__push_BANG_.cljs$core$IFn$_invoke$arity$1(G__49615_50290) : RCF__push_BANG_.call(null,G__49615_50290));

cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["directory is omitted if there are no children matching keep?"], 0));

try{var G__49635_50300 = contrib.data.treelister.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dir","dir",1734754661),"x",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),"a"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),"b"], null)], null)], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),(function (v,needle){
var G__49638 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(v);
var fexpr__49637 = cljs.core.PersistentHashSet.createAsIfByAssoc([needle]);
return (fexpr__49637.cljs$core$IFn$_invoke$arity$1 ? fexpr__49637.cljs$core$IFn$_invoke$arity$1(G__49638) : fexpr__49637.call(null,G__49638));
}))("nope");
(RCF__push_BANG_.cljs$core$IFn$_invoke$arity$1 ? RCF__push_BANG_.cljs$core$IFn$_invoke$arity$1(G__49635_50300) : RCF__push_BANG_.call(null,G__49635_50300));

try{var values__10703__auto__ = (new cljs.core.List(null,cljs.core.count(cljs.core.vec((RCF__peek_BANG_.cljs$core$IFn$_invoke$arity$1 ? RCF__peek_BANG_.cljs$core$IFn$_invoke$arity$1((0)) : RCF__peek_BANG_.call(null,(0))))),(new cljs.core.List(null,(0),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"vec","vec",982683596,null),cljs.core.list(new cljs.core.Symbol(null,"RCF__peek!","RCF__peek!",1409137532,null),(0)))),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"vec","vec",982683596,null),cljs.core.list(new cljs.core.Symbol(null,"RCF__peek!","RCF__peek!",1409137532,null),(0)))),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e49643){var t__10691__auto__ = e49643;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"vec","vec",982683596,null),cljs.core.list(new cljs.core.Symbol(null,"RCF__peek!","RCF__peek!",1409137532,null),(0)))),(0)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(contrib.data.t_contrib$data49506.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49507","meta49507",-1403315977,null)], null);
}));

(contrib.data.t_contrib$data49506.cljs$lang$type = true);

(contrib.data.t_contrib$data49506.cljs$lang$ctorStr = "contrib.data/t_contrib$data49506");

(contrib.data.t_contrib$data49506.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.data/t_contrib$data49506");
}));

/**
 * Positional factory function for contrib.data/t_contrib$data49506.
 */
contrib.data.__GT_t_contrib$data49506 = (function contrib$data$generated__contrib_data_337_$___GT_t_contrib$data49506(meta49507){
return (new contrib.data.t_contrib$data49506(meta49507));
});

}

return (new contrib.data.t_contrib$data49506(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.data.generated__contrib_data_337;},new cljs.core.Symbol("contrib.data","generated__contrib_data_337","contrib.data/generated__contrib_data_337",510941483,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/data.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.data","contrib.data",324393651,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),337,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_data_337","generated__contrib_data_337",-1384114742,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.data.generated__contrib_data_337)?contrib.data.generated__contrib_data_337.cljs$lang$test:null)], null)),contrib.data.generated__contrib_data_337));
} else {
}

//# sourceMappingURL=contrib.data.js.map
