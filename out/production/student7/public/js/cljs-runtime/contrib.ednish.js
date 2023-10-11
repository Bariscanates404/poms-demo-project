goog.provide('contrib.ednish');
contrib.ednish._edn_dialect_mappings = new cljs.core.PersistentArrayMap(null, 6, [" ",",","\"","'","#","~","/","!","[","(","]",")"], null);
/**
 * Re-encode an edn-string to url-safe dialect of edn-ish. Vectors, sets and maps
 * coalesce into lists and are not disambiguated.
 */
contrib.ednish.encode = (function contrib$ednish$encode(edn_str){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__46854){
var vec__46855 = p__46854;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46855,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46855,(1),null);
return clojure.string.replace(a,k,v);
}),edn_str,contrib.ednish._edn_dialect_mappings);
});
contrib.ednish.decode = (function contrib$ednish$decode(ednish_str){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__46861){
var vec__46862 = p__46861;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46862,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46862,(1),null);
return clojure.string.replace(a,k,v);
}),ednish_str,clojure.set.map_invert(contrib.ednish._edn_dialect_mappings));
});
contrib.ednish.generated__contrib_ednish_37 = (function contrib$ednish$generated__contrib_ednish_37(){
if((typeof contrib !== 'undefined') && (typeof contrib.ednish !== 'undefined') && (typeof contrib.ednish.t_contrib$ednish47103 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.ednish.t_contrib$ednish47103 = (function (meta47104){
this.meta47104 = meta47104;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.ednish.t_contrib$ednish47103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47105,meta47104__$1){
var self__ = this;
var _47105__$1 = this;
return (new contrib.ednish.t_contrib$ednish47103(meta47104__$1));
}));

(contrib.ednish.t_contrib$ednish47103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47105){
var self__ = this;
var _47105__$1 = this;
return self__.meta47104;
}));

(contrib.ednish.t_contrib$ednish47103.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.ednish.t_contrib$ednish47103.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__47116 = (arguments.length - (1));
switch (G__47116) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.ednish.t_contrib$ednish47103.prototype.apply = (function (self__,args47110){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47110)));
}));

(contrib.ednish.t_contrib$ednish47103.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_47063){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(5,done_47063);
try{var values__10703__auto___47378 = (new cljs.core.List(null,contrib.ednish.encode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("hyperfiddle.blog","post","hyperfiddle.blog/post",1744726431)], 0))),(new cljs.core.List(null,":hyperfiddle.blog!post",null,(1),null)),(2),null));
var result__10704__auto___47379 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___47378);
if(cljs.core.truth_(result__10704__auto___47379)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.Keyword("hyperfiddle.blog","post","hyperfiddle.blog/post",1744726431))),":hyperfiddle.blog!post"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___47378),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.Keyword("hyperfiddle.blog","post","hyperfiddle.blog/post",1744726431))),":hyperfiddle.blog!post"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___47378),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___47378);
}catch (e47122){var t__10691__auto___47382 = e47122;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.Keyword("hyperfiddle.blog","post","hyperfiddle.blog/post",1744726431))),":hyperfiddle.blog!post"),null,t__10691__auto___47382,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___47383 = (new cljs.core.List(null,contrib.ednish.encode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"a!b","a!b",-99928603)], 0))),(new cljs.core.List(null,":a!b",null,(1),null)),(2),null));
var result__10704__auto___47384 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___47383);
if(cljs.core.truth_(result__10704__auto___47384)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.Keyword(null,"a!b","a!b",-99928603))),":a!b"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___47383),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.Keyword(null,"a!b","a!b",-99928603))),":a!b"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___47383),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___47383);
}catch (e47129){var t__10691__auto___47386 = e47129;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.Keyword(null,"a!b","a!b",-99928603))),":a!b"),null,t__10691__auto___47386,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___47392 = (new cljs.core.List(null,contrib.ednish.encode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["kobe"], 0))),(new cljs.core.List(null,"'kobe'",null,(1),null)),(2),null));
var result__10704__auto___47393 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___47392);
if(cljs.core.truth_(result__10704__auto___47393)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),"kobe")),"'kobe'"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___47392),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),"kobe")),"'kobe'"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___47392),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___47392);
}catch (e47137){var t__10691__auto___47397 = e47137;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),"kobe")),"'kobe'"),null,t__10691__auto___47397,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___47399 = (new cljs.core.List(null,contrib.ednish.encode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["news",null,"events",null], null), null)], 0))),(new cljs.core.List(null,"~{'news','events'}",null,(1),null)),(2),null));
var result__10704__auto___47400 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___47399);
if(cljs.core.truth_(result__10704__auto___47400)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["news","null","events","null"], null), null))),"~{'news','events'}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___47399),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["news","null","events","null"], null), null))),"~{'news','events'}"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___47399),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___47399);
}catch (e47144){var t__10691__auto___47404 = e47144;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["news","null","events","null"], null), null))),"~{'news','events'}"),null,t__10691__auto___47404,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto__ = (new cljs.core.List(null,contrib.ednish.encode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.UUID("07655f77-608d-472b-bc5e-86fcecc40b00", 1459443043)], 0))),(new cljs.core.List(null,"~uuid,'07655f77-608d-472b-bc5e-86fcecc40b00'",null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.UUID("07655f77-608d-472b-bc5e-86fcecc40b00", 1459443043))),"~uuid,'07655f77-608d-472b-bc5e-86fcecc40b00'"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.UUID("07655f77-608d-472b-bc5e-86fcecc40b00", 1459443043))),"~uuid,'07655f77-608d-472b-bc5e-86fcecc40b00'"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e47151){var t__10691__auto__ = e47151;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.UUID("07655f77-608d-472b-bc5e-86fcecc40b00", 1459443043))),"~uuid,'07655f77-608d-472b-bc5e-86fcecc40b00'"),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.ednish.t_contrib$ednish47103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta47104","meta47104",437721538,null)], null);
}));

(contrib.ednish.t_contrib$ednish47103.cljs$lang$type = true);

(contrib.ednish.t_contrib$ednish47103.cljs$lang$ctorStr = "contrib.ednish/t_contrib$ednish47103");

(contrib.ednish.t_contrib$ednish47103.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.ednish/t_contrib$ednish47103");
}));

/**
 * Positional factory function for contrib.ednish/t_contrib$ednish47103.
 */
contrib.ednish.__GT_t_contrib$ednish47103 = (function contrib$ednish$generated__contrib_ednish_37_$___GT_t_contrib$ednish47103(meta47104){
return (new contrib.ednish.t_contrib$ednish47103(meta47104));
});

}

return (new contrib.ednish.t_contrib$ednish47103(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.ednish.generated__contrib_ednish_37;},new cljs.core.Symbol("contrib.ednish","generated__contrib_ednish_37","contrib.ednish/generated__contrib_ednish_37",-1323992054,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/ednish.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.ednish","contrib.ednish",-889077725,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),37,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_ednish_37","generated__contrib_ednish_37",-1729876050,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.ednish.generated__contrib_ednish_37)?contrib.ednish.generated__contrib_ednish_37.cljs$lang$test:null)], null)),contrib.ednish.generated__contrib_ednish_37));
} else {
}
contrib.ednish.encode_uri = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(contrib.rfc3986.encode_pchar,contrib.ednish.encode,cljs.core.pr_str);
contrib.ednish.decode_uri = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(clojure.edn.read_string,contrib.ednish.decode,contrib.rfc3986.decode_pchar);
contrib.ednish.generated__contrib_ednish_48 = (function contrib$ednish$generated__contrib_ednish_48(){
if((typeof contrib !== 'undefined') && (typeof contrib.ednish !== 'undefined') && (typeof contrib.ednish.t_contrib$ednish47300 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.ednish.t_contrib$ednish47300 = (function (meta47301){
this.meta47301 = meta47301;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.ednish.t_contrib$ednish47300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47302,meta47301__$1){
var self__ = this;
var _47302__$1 = this;
return (new contrib.ednish.t_contrib$ednish47300(meta47301__$1));
}));

(contrib.ednish.t_contrib$ednish47300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47302){
var self__ = this;
var _47302__$1 = this;
return self__.meta47301;
}));

(contrib.ednish.t_contrib$ednish47300.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.ednish.t_contrib$ednish47300.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__47309 = (arguments.length - (1));
switch (G__47309) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.ednish.t_contrib$ednish47300.prototype.apply = (function (self__,args47305){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47305)));
}));

(contrib.ednish.t_contrib$ednish47300.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_47240){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(3,done_47240);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["url encoding"], 0));

try{try{var values__10703__auto___47420 = (new cljs.core.List(null,contrib.ednish.encode_uri("|"),(new cljs.core.List(null,"'%7C'",null,(1),null)),(2),null));
var result__10704__auto___47421 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___47420);
if(cljs.core.truth_(result__10704__auto___47421)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode-uri","encode-uri",-1221099955,null),"|"),"'%7C'"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___47420),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode-uri","encode-uri",-1221099955,null),"|"),"'%7C'"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___47420),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___47420);
}catch (e47317){var t__10691__auto___47424 = e47317;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"encode-uri","encode-uri",-1221099955,null),"|"),"'%7C'"),null,t__10691__auto___47424,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___47425 = (new cljs.core.List(null,contrib.ednish.decode_uri("'%7C'"),(new cljs.core.List(null,"|",null,(1),null)),(2),null));
var result__10704__auto___47426 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___47425);
if(cljs.core.truth_(result__10704__auto___47426)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"decode-uri","decode-uri",1921734364,null),"'%7C'"),"|"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___47425),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"decode-uri","decode-uri",1921734364,null),"'%7C'"),"|"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___47425),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___47425);
}catch (e47330){var t__10691__auto___47428 = e47330;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"decode-uri","decode-uri",1921734364,null),"'%7C'"),"|"),null,t__10691__auto___47428,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto__ = (new cljs.core.List(null,contrib.ednish.encode_uri("!$&'[]()*+,;=|"),(new cljs.core.List(null,"'!$&'()()*+,;=%7C'",null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode-uri","encode-uri",-1221099955,null),"!$&'[]()*+,;=|"),"'!$&'()()*+,;=%7C'"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode-uri","encode-uri",-1221099955,null),"!$&'[]()*+,;=|"),"'!$&'()()*+,;=%7C'"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e47338){var t__10691__auto__ = e47338;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"encode-uri","encode-uri",-1221099955,null),"!$&'[]()*+,;=|"),"'!$&'()()*+,;=%7C'"),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(contrib.ednish.t_contrib$ednish47300.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta47301","meta47301",527724921,null)], null);
}));

(contrib.ednish.t_contrib$ednish47300.cljs$lang$type = true);

(contrib.ednish.t_contrib$ednish47300.cljs$lang$ctorStr = "contrib.ednish/t_contrib$ednish47300");

(contrib.ednish.t_contrib$ednish47300.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.ednish/t_contrib$ednish47300");
}));

/**
 * Positional factory function for contrib.ednish/t_contrib$ednish47300.
 */
contrib.ednish.__GT_t_contrib$ednish47300 = (function contrib$ednish$generated__contrib_ednish_48_$___GT_t_contrib$ednish47300(meta47301){
return (new contrib.ednish.t_contrib$ednish47300(meta47301));
});

}

return (new contrib.ednish.t_contrib$ednish47300(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.ednish.generated__contrib_ednish_48;},new cljs.core.Symbol("contrib.ednish","generated__contrib_ednish_48","contrib.ednish/generated__contrib_ednish_48",683599068,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/ednish.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.ednish","contrib.ednish",-889077725,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),48,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_ednish_48","generated__contrib_ednish_48",42874744,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.ednish.generated__contrib_ednish_48)?contrib.ednish.generated__contrib_ednish_48.cljs$lang$test:null)], null)),contrib.ednish.generated__contrib_ednish_48));
} else {
}
contrib.ednish.discard_leading_slash = (function contrib$ednish$discard_leading_slash(path){
if(clojure.string.starts_with_QMARK_(path,"/")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,(1));
} else {
return path;
}
});
contrib.ednish.decode_path = (function contrib$ednish$decode_path(path,read_edn_str){
if(typeof path === 'string'){
} else {
throw (new Error("Assert failed: (string? path)"));
}

if((!((read_edn_str == null)))){
} else {
throw (new Error("Assert failed: (some? read-edn-str)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,"/")){
return null;
} else {
var path__$1 = contrib.ednish.discard_leading_slash(path);
return contrib.ednish.decode_uri(path__$1);
}
});

//# sourceMappingURL=contrib.ednish.js.map
