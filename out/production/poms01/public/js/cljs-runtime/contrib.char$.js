goog.provide('contrib.char$');
contrib.char$.char_upper = (function contrib$char$$char_upper(c){
return clojure.string.upper_case(c);
});
contrib.char$.char_lower = (function contrib$char$$char_lower(c){
return clojure.string.lower_case(c);
});
contrib.char$.generated__contrib_char$_14 = (function contrib$char$$generated__contrib_char$_14(){
if((typeof contrib !== 'undefined') && (typeof contrib.char$ !== 'undefined') && (typeof contrib.char$.t_contrib$char$45687 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.char$.t_contrib$char$45687 = (function (meta45688){
this.meta45688 = meta45688;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.char$.t_contrib$char$45687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45689,meta45688__$1){
var self__ = this;
var _45689__$1 = this;
return (new contrib.char$.t_contrib$char$45687(meta45688__$1));
}));

(contrib.char$.t_contrib$char$45687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45689){
var self__ = this;
var _45689__$1 = this;
return self__.meta45688;
}));

(contrib.char$.t_contrib$char$45687.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.char$.t_contrib$char$45687.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__45704 = (arguments.length - (1));
switch (G__45704) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.char$.t_contrib$char$45687.prototype.apply = (function (self__,args45695){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45695)));
}));

(contrib.char$.t_contrib$char$45687.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_45640){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(4,done_45640);
try{var values__10703__auto___46432 = (new cljs.core.List(null,contrib.char$.char_upper("c"),(new cljs.core.List(null,"C",null,(1),null)),(2),null));
var result__10704__auto___46433 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___46432);
if(cljs.core.truth_(result__10704__auto___46433)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"char-upper","char-upper",-842703348,null),"c"),"C"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___46432),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"char-upper","char-upper",-842703348,null),"c"),"C"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___46432),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___46432);
}catch (e45731){var t__10691__auto___46435 = e45731;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"char-upper","char-upper",-842703348,null),"c"),"C"),null,t__10691__auto___46435,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___46439 = (new cljs.core.List(null,contrib.char$.char_lower("C"),(new cljs.core.List(null,"c",null,(1),null)),(2),null));
var result__10704__auto___46440 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___46439);
if(cljs.core.truth_(result__10704__auto___46440)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"char-lower","char-lower",1972076385,null),"C"),"c"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___46439),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"char-lower","char-lower",1972076385,null),"C"),"c"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___46439),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___46439);
}catch (e45736){var t__10691__auto___46446 = e45736;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"char-lower","char-lower",1972076385,null),"C"),"c"),null,t__10691__auto___46446,null]));
}finally {RCF__done_BANG_();
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["works on strings"], 0));

try{try{var values__10703__auto___46450 = (new cljs.core.List(null,contrib.char$.char_upper("c"),(new cljs.core.List(null,"C",null,(1),null)),(2),null));
var result__10704__auto___46451 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___46450);
if(cljs.core.truth_(result__10704__auto___46451)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"char-upper","char-upper",-842703348,null),"c"),"C"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___46450),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"char-upper","char-upper",-842703348,null),"c"),"C"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___46450),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___46450);
}catch (e45759){var t__10691__auto___46458 = e45759;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"char-upper","char-upper",-842703348,null),"c"),"C"),null,t__10691__auto___46458,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto__ = (new cljs.core.List(null,contrib.char$.char_lower("C"),(new cljs.core.List(null,"c",null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"char-lower","char-lower",1972076385,null),"C"),"c"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"char-lower","char-lower",1972076385,null),"C"),"c"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e45769){var t__10691__auto__ = e45769;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"char-lower","char-lower",1972076385,null),"C"),"c"),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(contrib.char$.t_contrib$char$45687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45688","meta45688",203903000,null)], null);
}));

(contrib.char$.t_contrib$char$45687.cljs$lang$type = true);

(contrib.char$.t_contrib$char$45687.cljs$lang$ctorStr = "contrib.char$/t_contrib$char$45687");

(contrib.char$.t_contrib$char$45687.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.char$/t_contrib$char$45687");
}));

/**
 * Positional factory function for contrib.char$/t_contrib$char$45687.
 */
contrib.char$.__GT_t_contrib$char$45687 = (function contrib$char$$generated__contrib_char$_14_$___GT_t_contrib$char$45687(meta45688){
return (new contrib.char$.t_contrib$char$45687(meta45688));
});

}

return (new contrib.char$.t_contrib$char$45687(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.char$.generated__contrib_char$_14;},new cljs.core.Symbol("contrib.char$","generated__contrib_char$_14","contrib.char$/generated__contrib_char$_14",1941671940,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/char$.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.char$","contrib.char$",1360832943,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),14,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_char$_14","generated__contrib_char$_14",-270309873,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.char$.generated__contrib_char$_14)?contrib.char$.generated__contrib_char$_14.cljs$lang$test:null)], null)),contrib.char$.generated__contrib_char$_14));
} else {
}
contrib.char$.char_code = (function contrib$char$$char_code(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

return c.charCodeAt();
});
contrib.char$.generated__contrib_char$_32 = (function contrib$char$$generated__contrib_char$_32(){
if((typeof contrib !== 'undefined') && (typeof contrib.char$ !== 'undefined') && (typeof contrib.char$.t_contrib$char$45838 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.char$.t_contrib$char$45838 = (function (meta45839){
this.meta45839 = meta45839;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.char$.t_contrib$char$45838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45840,meta45839__$1){
var self__ = this;
var _45840__$1 = this;
return (new contrib.char$.t_contrib$char$45838(meta45839__$1));
}));

(contrib.char$.t_contrib$char$45838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45840){
var self__ = this;
var _45840__$1 = this;
return self__.meta45839;
}));

(contrib.char$.t_contrib$char$45838.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.char$.t_contrib$char$45838.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__45859 = (arguments.length - (1));
switch (G__45859) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.char$.t_contrib$char$45838.prototype.apply = (function (self__,args45846){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45846)));
}));

(contrib.char$.t_contrib$char$45838.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_45821){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(1,done_45821);
try{var values__10703__auto__ = (new cljs.core.List(null,cljs.core.map.cljs$core$IFn$_invoke$arity$2(contrib.char$.char_code,"abcd|"),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(97),(98),(99),(100),(124)], null),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"char-code","char-code",-1900072444,null),"abcd|"),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(97),(98),(99),(100),(124)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"char-code","char-code",-1900072444,null),"abcd|"),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(97),(98),(99),(100),(124)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e45861){var t__10691__auto__ = e45861;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"char-code","char-code",-1900072444,null),"abcd|"),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(97),(98),(99),(100),(124)], null)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.char$.t_contrib$char$45838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45839","meta45839",310902474,null)], null);
}));

(contrib.char$.t_contrib$char$45838.cljs$lang$type = true);

(contrib.char$.t_contrib$char$45838.cljs$lang$ctorStr = "contrib.char$/t_contrib$char$45838");

(contrib.char$.t_contrib$char$45838.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.char$/t_contrib$char$45838");
}));

/**
 * Positional factory function for contrib.char$/t_contrib$char$45838.
 */
contrib.char$.__GT_t_contrib$char$45838 = (function contrib$char$$generated__contrib_char$_32_$___GT_t_contrib$char$45838(meta45839){
return (new contrib.char$.t_contrib$char$45838(meta45839));
});

}

return (new contrib.char$.t_contrib$char$45838(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.char$.generated__contrib_char$_32;},new cljs.core.Symbol("contrib.char$","generated__contrib_char$_32","contrib.char$/generated__contrib_char$_32",199399699,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/char$.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.char$","contrib.char$",1360832943,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),32,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_char$_32","generated__contrib_char$_32",-1618146534,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.char$.generated__contrib_char$_32)?contrib.char$.generated__contrib_char$_32.cljs$lang$test:null)], null)),contrib.char$.generated__contrib_char$_32));
} else {
}
contrib.char$.dec__GT_hex = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(15),(13),(6),(3),(12),(2),(11),(9),(5),(14),(10),(8)],["0","7","1","4","F","D","6","3","C","2","B","9","5","E","A","8"]);
contrib.char$.hex__GT_dec = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.set.map_invert(contrib.char$.dec__GT_hex),clojure.set.map_invert(cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,contrib.char$.char_lower(v));
}),cljs.core.PersistentArrayMap.EMPTY,contrib.char$.dec__GT_hex))], 0));
contrib.char$.generated__contrib_char$_38 = (function contrib$char$$generated__contrib_char$_38(){
if((typeof contrib !== 'undefined') && (typeof contrib.char$ !== 'undefined') && (typeof contrib.char$.t_contrib$char$45925 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.char$.t_contrib$char$45925 = (function (meta45926){
this.meta45926 = meta45926;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.char$.t_contrib$char$45925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45927,meta45926__$1){
var self__ = this;
var _45927__$1 = this;
return (new contrib.char$.t_contrib$char$45925(meta45926__$1));
}));

(contrib.char$.t_contrib$char$45925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45927){
var self__ = this;
var _45927__$1 = this;
return self__.meta45926;
}));

(contrib.char$.t_contrib$char$45925.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.char$.t_contrib$char$45925.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__45935 = (arguments.length - (1));
switch (G__45935) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.char$.t_contrib$char$45925.prototype.apply = (function (self__,args45928){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45928)));
}));

(contrib.char$.t_contrib$char$45925.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_45899){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(2,done_45899);
try{var values__10703__auto___46530 = (new cljs.core.List(null,(contrib.char$.dec__GT_hex.cljs$core$IFn$_invoke$arity$1 ? contrib.char$.dec__GT_hex.cljs$core$IFn$_invoke$arity$1((10)) : contrib.char$.dec__GT_hex.call(null,(10))),(new cljs.core.List(null,"A",null,(1),null)),(2),null));
var result__10704__auto___46531 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___46530);
if(cljs.core.truth_(result__10704__auto___46531)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"dec->hex","dec->hex",-879458606,null),(10)),"A"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___46530),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"dec->hex","dec->hex",-879458606,null),(10)),"A"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___46530),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___46530);
}catch (e45941){var t__10691__auto___46535 = e45941;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"dec->hex","dec->hex",-879458606,null),(10)),"A"),null,t__10691__auto___46535,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto__ = (new cljs.core.List(null,(function (){var G__45951 = "A";
return (contrib.char$.hex__GT_dec.cljs$core$IFn$_invoke$arity$1 ? contrib.char$.hex__GT_dec.cljs$core$IFn$_invoke$arity$1(G__45951) : contrib.char$.hex__GT_dec.call(null,G__45951));
})(),(new cljs.core.List(null,(10),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"hex->dec","hex->dec",47681776,null),"A"),(10)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"hex->dec","hex->dec",47681776,null),"A"),(10)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e45949){var t__10691__auto__ = e45949;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"hex->dec","hex->dec",47681776,null),"A"),(10)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.char$.t_contrib$char$45925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45926","meta45926",1873987800,null)], null);
}));

(contrib.char$.t_contrib$char$45925.cljs$lang$type = true);

(contrib.char$.t_contrib$char$45925.cljs$lang$ctorStr = "contrib.char$/t_contrib$char$45925");

(contrib.char$.t_contrib$char$45925.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.char$/t_contrib$char$45925");
}));

/**
 * Positional factory function for contrib.char$/t_contrib$char$45925.
 */
contrib.char$.__GT_t_contrib$char$45925 = (function contrib$char$$generated__contrib_char$_38_$___GT_t_contrib$char$45925(meta45926){
return (new contrib.char$.t_contrib$char$45925(meta45926));
});

}

return (new contrib.char$.t_contrib$char$45925(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.char$.generated__contrib_char$_38;},new cljs.core.Symbol("contrib.char$","generated__contrib_char$_38","contrib.char$/generated__contrib_char$_38",1946324044,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/char$.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.char$","contrib.char$",1360832943,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),38,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_char$_38","generated__contrib_char$_38",-520392009,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.char$.generated__contrib_char$_38)?contrib.char$.generated__contrib_char$_38.cljs$lang$test:null)], null)),contrib.char$.generated__contrib_char$_38));
} else {
}
contrib.char$.char__GT_hex_str = (function contrib$char$$char__GT_hex_str(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(contrib.char$.dec__GT_hex,cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__45958_SHARP_){
return cljs.core.quot(p1__45958_SHARP_,(16));
}),(function (p1__45959_SHARP_){
return cljs.core.mod(p1__45959_SHARP_,(16));
}))(contrib.char$.char_code(c))));
});
contrib.char$.hex_str__GT_char = (function contrib$char$$hex_str__GT_char(s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(s))){
} else {
throw (new Error("Assert failed: (= 2 (count s))"));
}

var vec__45967 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(contrib.char$.hex__GT_dec,s);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45967,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45967,(1),null);
return cljs.core.char$((((16) * (a | (0))) + (b | (0))));
});
contrib.char$.generated__contrib_char$_56 = (function contrib$char$$generated__contrib_char$_56(){
if((typeof contrib !== 'undefined') && (typeof contrib.char$ !== 'undefined') && (typeof contrib.char$.t_contrib$char$46329 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.char$.t_contrib$char$46329 = (function (meta46330){
this.meta46330 = meta46330;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.char$.t_contrib$char$46329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46331,meta46330__$1){
var self__ = this;
var _46331__$1 = this;
return (new contrib.char$.t_contrib$char$46329(meta46330__$1));
}));

(contrib.char$.t_contrib$char$46329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46331){
var self__ = this;
var _46331__$1 = this;
return self__.meta46330;
}));

(contrib.char$.t_contrib$char$46329.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.char$.t_contrib$char$46329.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__46334 = (arguments.length - (1));
switch (G__46334) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.char$.t_contrib$char$46329.prototype.apply = (function (self__,args46332){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args46332)));
}));

(contrib.char$.t_contrib$char$46329.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_46320){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(7,done_46320);
try{var values__10703__auto___46573 = (new cljs.core.List(null,(function (){var G__46341 = "a";
return (contrib.char$.hex__GT_dec.cljs$core$IFn$_invoke$arity$1 ? contrib.char$.hex__GT_dec.cljs$core$IFn$_invoke$arity$1(G__46341) : contrib.char$.hex__GT_dec.call(null,G__46341));
})(),(new cljs.core.List(null,(function (){var G__46343 = "A";
return (contrib.char$.hex__GT_dec.cljs$core$IFn$_invoke$arity$1 ? contrib.char$.hex__GT_dec.cljs$core$IFn$_invoke$arity$1(G__46343) : contrib.char$.hex__GT_dec.call(null,G__46343));
})(),null,(1),null)),(2),null));
var result__10704__auto___46574 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___46573);
if(cljs.core.truth_(result__10704__auto___46574)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"hex->dec","hex->dec",47681776,null),"a"),cljs.core.list(new cljs.core.Symbol(null,"hex->dec","hex->dec",47681776,null),"A")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___46573),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"hex->dec","hex->dec",47681776,null),"a"),cljs.core.list(new cljs.core.Symbol(null,"hex->dec","hex->dec",47681776,null),"A")),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___46573),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___46573);
}catch (e46339){var t__10691__auto___46580 = e46339;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"hex->dec","hex->dec",47681776,null),"a"),cljs.core.list(new cljs.core.Symbol(null,"hex->dec","hex->dec",47681776,null),"A")),null,t__10691__auto___46580,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___46581 = (new cljs.core.List(null,contrib.char$.char__GT_hex_str(" "),(new cljs.core.List(null,"20",null,(1),null)),(2),null));
var result__10704__auto___46582 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___46581);
if(cljs.core.truth_(result__10704__auto___46582)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null)," "),"20"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___46581),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null)," "),"20"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___46581),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___46581);
}catch (e46346){var t__10691__auto___46589 = e46346;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null)," "),"20"),null,t__10691__auto___46589,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___46591 = (new cljs.core.List(null,contrib.char$.char__GT_hex_str("\n"),(new cljs.core.List(null,"0A",null,(1),null)),(2),null));
var result__10704__auto___46592 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___46591);
if(cljs.core.truth_(result__10704__auto___46592)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null),"\n"),"0A"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___46591),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null),"\n"),"0A"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___46591),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___46591);
}catch (e46348){var t__10691__auto___46599 = e46348;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null),"\n"),"0A"),null,t__10691__auto___46599,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___46602 = (new cljs.core.List(null,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(contrib.char$.char__GT_hex_str("\n"),"0a"),(new cljs.core.List(null,true,null,(1),null)),(2),null));
var result__10704__auto___46603 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___46602);
if(cljs.core.truth_(result__10704__auto___46603)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),cljs.core.list(new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null),"\n"),"0a"),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___46602),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),cljs.core.list(new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null),"\n"),"0a"),true),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___46602),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___46602);
}catch (e46350){var t__10691__auto___46612 = e46350;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),cljs.core.list(new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null),"\n"),"0a"),true),null,t__10691__auto___46612,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___46614 = (new cljs.core.List(null,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(contrib.char$.hex_str__GT_char,contrib.char$.char__GT_hex_str)(" "),(new cljs.core.List(null," ",null,(1),null)),(2),null));
var result__10704__auto___46615 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___46614);
if(cljs.core.truth_(result__10704__auto___46615)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"hex-str->char","hex-str->char",-1318485928,null),new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null))," ")," "),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___46614),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"hex-str->char","hex-str->char",-1318485928,null),new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null))," ")," "),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___46614),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___46614);
}catch (e46354){var t__10691__auto___46620 = e46354;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"hex-str->char","hex-str->char",-1318485928,null),new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null))," ")," "),null,t__10691__auto___46620,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___46621 = (new cljs.core.List(null,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(contrib.char$.hex_str__GT_char,contrib.char$.char__GT_hex_str)("\n"),(new cljs.core.List(null,"\n",null,(1),null)),(2),null));
var result__10704__auto___46622 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___46621);
if(cljs.core.truth_(result__10704__auto___46622)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"hex-str->char","hex-str->char",-1318485928,null),new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null)),"\n"),"\n"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___46621),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"hex-str->char","hex-str->char",-1318485928,null),new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null)),"\n"),"\n"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___46621),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___46621);
}catch (e46369){var t__10691__auto___46626 = e46369;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"hex-str->char","hex-str->char",-1318485928,null),new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null)),"\n"),"\n"),null,t__10691__auto___46626,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto__ = (new cljs.core.List(null,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(contrib.char$.hex_str__GT_char,contrib.char$.char__GT_hex_str)("a"),(new cljs.core.List(null,"a",null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"hex-str->char","hex-str->char",-1318485928,null),new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null)),"a"),"a"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"hex-str->char","hex-str->char",-1318485928,null),new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null)),"a"),"a"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e46371){var t__10691__auto__ = e46371;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"hex-str->char","hex-str->char",-1318485928,null),new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null)),"a"),"a"),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.char$.t_contrib$char$46329.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta46330","meta46330",-377013208,null)], null);
}));

(contrib.char$.t_contrib$char$46329.cljs$lang$type = true);

(contrib.char$.t_contrib$char$46329.cljs$lang$ctorStr = "contrib.char$/t_contrib$char$46329");

(contrib.char$.t_contrib$char$46329.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.char$/t_contrib$char$46329");
}));

/**
 * Positional factory function for contrib.char$/t_contrib$char$46329.
 */
contrib.char$.__GT_t_contrib$char$46329 = (function contrib$char$$generated__contrib_char$_56_$___GT_t_contrib$char$46329(meta46330){
return (new contrib.char$.t_contrib$char$46329(meta46330));
});

}

return (new contrib.char$.t_contrib$char$46329(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.char$.generated__contrib_char$_56;},new cljs.core.Symbol("contrib.char$","generated__contrib_char$_56","contrib.char$/generated__contrib_char$_56",538760709,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/char$.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.char$","contrib.char$",1360832943,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),56,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_char$_56","generated__contrib_char$_56",-1263253478,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.char$.generated__contrib_char$_56)?contrib.char$.generated__contrib_char$_56.cljs$lang$test:null)], null)),contrib.char$.generated__contrib_char$_56));
} else {
}

//# sourceMappingURL=contrib.char$.js.map
