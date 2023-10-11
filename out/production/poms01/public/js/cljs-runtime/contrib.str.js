goog.provide('contrib.str');
contrib.str.pprint_str = (function contrib$str$pprint_str(x){
var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49250_49338 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49251_49339 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49252_49340 = true;
var _STAR_print_fn_STAR__temp_val__49253_49341 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49252_49340);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49253_49341);

try{var _STAR_print_right_margin_STAR__orig_val__49254_49342 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_right_margin_STAR__temp_val__49255_49343 = (100);
(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__temp_val__49255_49343);

try{var _STAR_print_pprint_dispatch_STAR__orig_val__49256_49344 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__49257_49345 = cljs.pprint.code_dispatch;
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__49257_49345);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);
}finally {(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__49256_49344);
}}finally {(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__orig_val__49254_49342);
}}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49251_49339);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49250_49338);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
});
contrib.str.includes_str_QMARK_ = (function contrib$str$includes_str_QMARK_(v,needle){
return clojure.string.includes_QMARK_(clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)),clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(needle)));
});
contrib.str.generated__contrib_str_41 = (function contrib$str$generated__contrib_str_41(){
if((typeof contrib !== 'undefined') && (typeof contrib.str !== 'undefined') && (typeof contrib.str.t_contrib$str49261 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.str.t_contrib$str49261 = (function (meta49262){
this.meta49262 = meta49262;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.str.t_contrib$str49261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49263,meta49262__$1){
var self__ = this;
var _49263__$1 = this;
return (new contrib.str.t_contrib$str49261(meta49262__$1));
}));

(contrib.str.t_contrib$str49261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49263){
var self__ = this;
var _49263__$1 = this;
return self__.meta49262;
}));

(contrib.str.t_contrib$str49261.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.str.t_contrib$str49261.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__49265 = (arguments.length - (1));
switch (G__49265) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.str.t_contrib$str49261.prototype.apply = (function (self__,args49264){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args49264)));
}));

(contrib.str.t_contrib$str49261.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_49260){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(7,done_49260);
try{var values__10703__auto___49347 = (new cljs.core.List(null,contrib.str.includes_str_QMARK_("alice","e"),(new cljs.core.List(null,true,null,(1),null)),(2),null));
var result__10704__auto___49348 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49347);
if(cljs.core.truth_(result__10704__auto___49348)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"includes-str?","includes-str?",-1991201228,null),"alice","e"),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49347),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"includes-str?","includes-str?",-1991201228,null),"alice","e"),true),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49347),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49347);
}catch (e49267){var t__10691__auto___49349 = e49267;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"includes-str?","includes-str?",-1991201228,null),"alice","e"),true),null,t__10691__auto___49349,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___49350 = (new cljs.core.List(null,contrib.str.includes_str_QMARK_("alice","f"),(new cljs.core.List(null,false,null,(1),null)),(2),null));
var result__10704__auto___49351 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49350);
if(cljs.core.truth_(result__10704__auto___49351)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"includes-str?","includes-str?",-1991201228,null),"alice","f"),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49350),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"includes-str?","includes-str?",-1991201228,null),"alice","f"),false),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49350),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49350);
}catch (e49268){var t__10691__auto___49352 = e49268;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"includes-str?","includes-str?",-1991201228,null),"alice","f"),false),null,t__10691__auto___49352,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___49353 = (new cljs.core.List(null,contrib.str.includes_str_QMARK_("alice",""),(new cljs.core.List(null,true,null,(1),null)),(2),null));
var result__10704__auto___49354 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49353);
if(cljs.core.truth_(result__10704__auto___49354)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"includes-str?","includes-str?",-1991201228,null),"alice",""),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49353),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"includes-str?","includes-str?",-1991201228,null),"alice",""),true),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49353),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49353);
}catch (e49269){var t__10691__auto___49355 = e49269;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"includes-str?","includes-str?",-1991201228,null),"alice",""),true),null,t__10691__auto___49355,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___49356 = (new cljs.core.List(null,contrib.str.includes_str_QMARK_("alice",null),(new cljs.core.List(null,true,null,(1),null)),(2),null));
var result__10704__auto___49357 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49356);
if(cljs.core.truth_(result__10704__auto___49357)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"includes-str?","includes-str?",-1991201228,null),"alice",null),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49356),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"includes-str?","includes-str?",-1991201228,null),"alice",null),true),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49356),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49356);
}catch (e49270){var t__10691__auto___49358 = e49270;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"includes-str?","includes-str?",-1991201228,null),"alice",null),true),null,t__10691__auto___49358,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___49359 = (new cljs.core.List(null,contrib.str.includes_str_QMARK_(null,null),(new cljs.core.List(null,true,null,(1),null)),(2),null));
var result__10704__auto___49360 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49359);
if(cljs.core.truth_(result__10704__auto___49360)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"includes-str?","includes-str?",-1991201228,null),null,null),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49359),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"includes-str?","includes-str?",-1991201228,null),null,null),true),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49359),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49359);
}catch (e49271){var t__10691__auto___49361 = e49271;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"includes-str?","includes-str?",-1991201228,null),null,null),true),null,t__10691__auto___49361,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___49362 = (new cljs.core.List(null,contrib.str.includes_str_QMARK_(null,""),(new cljs.core.List(null,true,null,(1),null)),(2),null));
var result__10704__auto___49363 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49362);
if(cljs.core.truth_(result__10704__auto___49363)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"includes-str?","includes-str?",-1991201228,null),null,""),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49362),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"includes-str?","includes-str?",-1991201228,null),null,""),true),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49362),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49362);
}catch (e49272){var t__10691__auto___49368 = e49272;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"includes-str?","includes-str?",-1991201228,null),null,""),true),null,t__10691__auto___49368,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto__ = (new cljs.core.List(null,contrib.str.includes_str_QMARK_("",null),(new cljs.core.List(null,true,null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"includes-str?","includes-str?",-1991201228,null),"",null),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"includes-str?","includes-str?",-1991201228,null),"",null),true),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e49273){var t__10691__auto__ = e49273;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"includes-str?","includes-str?",-1991201228,null),"",null),true),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.str.t_contrib$str49261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49262","meta49262",-1579746573,null)], null);
}));

(contrib.str.t_contrib$str49261.cljs$lang$type = true);

(contrib.str.t_contrib$str49261.cljs$lang$ctorStr = "contrib.str/t_contrib$str49261");

(contrib.str.t_contrib$str49261.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.str/t_contrib$str49261");
}));

/**
 * Positional factory function for contrib.str/t_contrib$str49261.
 */
contrib.str.__GT_t_contrib$str49261 = (function contrib$str$generated__contrib_str_41_$___GT_t_contrib$str49261(meta49262){
return (new contrib.str.t_contrib$str49261(meta49262));
});

}

return (new contrib.str.t_contrib$str49261(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.str.generated__contrib_str_41;},new cljs.core.Symbol("contrib.str","generated__contrib_str_41","contrib.str/generated__contrib_str_41",845267377,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/str.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.str","contrib.str",-670707725,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),41,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_str_41","generated__contrib_str_41",-1585846059,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.str.generated__contrib_str_41)?contrib.str.generated__contrib_str_41.cljs$lang$test:null)], null)),contrib.str.generated__contrib_str_41));
} else {
}
contrib.str.any_matches_QMARK_ = (function contrib$str$any_matches_QMARK_(coll,needle){
var substr = clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(needle));
return cljs.core.some((function (p1__49274_SHARP_){
if(cljs.core.truth_(p1__49274_SHARP_)){
return clojure.string.includes_QMARK_(clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49274_SHARP_)),substr);
} else {
return null;
}
}),coll);
});
contrib.str.generated__contrib_str_54 = (function contrib$str$generated__contrib_str_54(){
if((typeof contrib !== 'undefined') && (typeof contrib.str !== 'undefined') && (typeof contrib.str.t_contrib$str49276 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.str.t_contrib$str49276 = (function (meta49277){
this.meta49277 = meta49277;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.str.t_contrib$str49276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49278,meta49277__$1){
var self__ = this;
var _49278__$1 = this;
return (new contrib.str.t_contrib$str49276(meta49277__$1));
}));

(contrib.str.t_contrib$str49276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49278){
var self__ = this;
var _49278__$1 = this;
return self__.meta49277;
}));

(contrib.str.t_contrib$str49276.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.str.t_contrib$str49276.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__49280 = (arguments.length - (1));
switch (G__49280) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.str.t_contrib$str49276.prototype.apply = (function (self__,args49279){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args49279)));
}));

(contrib.str.t_contrib$str49276.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_49275){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(4,done_49275);
try{var values__10703__auto___49370 = (new cljs.core.List(null,contrib.str.any_matches_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),null,(3)], null),"3"),(new cljs.core.List(null,true,null,(1),null)),(2),null));
var result__10704__auto___49371 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49370);
if(cljs.core.truth_(result__10704__auto___49371)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"any-matches?","any-matches?",-2045979037,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),null,(3)], null),"3"),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49370),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"any-matches?","any-matches?",-2045979037,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),null,(3)], null),"3"),true),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49370),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49370);
}catch (e49281){var t__10691__auto___49372 = e49281;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"any-matches?","any-matches?",-2045979037,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),null,(3)], null),"3"),true),null,t__10691__auto___49372,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___49373 = (new cljs.core.List(null,contrib.str.any_matches_QMARK_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["xyz"], null),"Y"),(new cljs.core.List(null,true,null,(1),null)),(2),null));
var result__10704__auto___49374 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49373);
if(cljs.core.truth_(result__10704__auto___49374)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"any-matches?","any-matches?",-2045979037,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["xyz"], null),"Y"),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49373),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"any-matches?","any-matches?",-2045979037,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["xyz"], null),"Y"),true),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49373),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49373);
}catch (e49282){var t__10691__auto___49375 = e49282;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"any-matches?","any-matches?",-2045979037,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["xyz"], null),"Y"),true),null,t__10691__auto___49375,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___49376 = (new cljs.core.List(null,contrib.str.any_matches_QMARK_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ABC"], null),"abc"),(new cljs.core.List(null,true,null,(1),null)),(2),null));
var result__10704__auto___49377 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49376);
if(cljs.core.truth_(result__10704__auto___49377)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"any-matches?","any-matches?",-2045979037,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ABC"], null),"abc"),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49376),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"any-matches?","any-matches?",-2045979037,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ABC"], null),"abc"),true),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49376),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49376);
}catch (e49283){var t__10691__auto___49378 = e49283;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"any-matches?","any-matches?",-2045979037,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ABC"], null),"abc"),true),null,t__10691__auto___49378,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto__ = (new cljs.core.List(null,contrib.str.any_matches_QMARK_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["abc"], null),"d"),(new cljs.core.List(null,null,null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"any-matches?","any-matches?",-2045979037,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["abc"], null),"d"),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"any-matches?","any-matches?",-2045979037,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["abc"], null),"d"),null),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e49284){var t__10691__auto__ = e49284;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"any-matches?","any-matches?",-2045979037,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["abc"], null),"d"),null),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.str.t_contrib$str49276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49277","meta49277",1546853144,null)], null);
}));

(contrib.str.t_contrib$str49276.cljs$lang$type = true);

(contrib.str.t_contrib$str49276.cljs$lang$ctorStr = "contrib.str/t_contrib$str49276");

(contrib.str.t_contrib$str49276.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.str/t_contrib$str49276");
}));

/**
 * Positional factory function for contrib.str/t_contrib$str49276.
 */
contrib.str.__GT_t_contrib$str49276 = (function contrib$str$generated__contrib_str_54_$___GT_t_contrib$str49276(meta49277){
return (new contrib.str.t_contrib$str49276(meta49277));
});

}

return (new contrib.str.t_contrib$str49276(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.str.generated__contrib_str_54;},new cljs.core.Symbol("contrib.str","generated__contrib_str_54","contrib.str/generated__contrib_str_54",1494042129,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/str.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.str","contrib.str",-670707725,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),54,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_str_54","generated__contrib_str_54",-400213587,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.str.generated__contrib_str_54)?contrib.str.generated__contrib_str_54.cljs$lang$test:null)], null)),contrib.str.generated__contrib_str_54));
} else {
}
contrib.str.empty_QMARK_ = (function contrib$str$empty_QMARK_(s){
return ((((typeof s === 'string') && ((cljs.core.count(s) === (0))))) || ((s == null)));
});
contrib.str.generated__contrib_str_64 = (function contrib$str$generated__contrib_str_64(){
if((typeof contrib !== 'undefined') && (typeof contrib.str !== 'undefined') && (typeof contrib.str.t_contrib$str49287 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.str.t_contrib$str49287 = (function (meta49288){
this.meta49288 = meta49288;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.str.t_contrib$str49287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49289,meta49288__$1){
var self__ = this;
var _49289__$1 = this;
return (new contrib.str.t_contrib$str49287(meta49288__$1));
}));

(contrib.str.t_contrib$str49287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49289){
var self__ = this;
var _49289__$1 = this;
return self__.meta49288;
}));

(contrib.str.t_contrib$str49287.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.str.t_contrib$str49287.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__49291 = (arguments.length - (1));
switch (G__49291) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.str.t_contrib$str49287.prototype.apply = (function (self__,args49290){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args49290)));
}));

(contrib.str.t_contrib$str49287.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_49286){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(3,done_49286);
try{var values__10703__auto___49380 = (new cljs.core.List(null,contrib.str.empty_QMARK_(""),(new cljs.core.List(null,true,null,(1),null)),(2),null));
var result__10704__auto___49381 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49380);
if(cljs.core.truth_(result__10704__auto___49381)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),""),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49380),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),""),true),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49380),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49380);
}catch (e49292){var t__10691__auto___49382 = e49292;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),""),true),null,t__10691__auto___49382,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___49383 = (new cljs.core.List(null,contrib.str.empty_QMARK_(null),(new cljs.core.List(null,true,null,(1),null)),(2),null));
var result__10704__auto___49384 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49383);
if(cljs.core.truth_(result__10704__auto___49384)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),null),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49383),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),null),true),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49383),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49383);
}catch (e49293){var t__10691__auto___49385 = e49293;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),null),true),null,t__10691__auto___49385,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto__ = (new cljs.core.List(null,contrib.str.empty_QMARK_(" "),(new cljs.core.List(null,false,null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null)," "),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null)," "),false),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e49294){var t__10691__auto__ = e49294;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null)," "),false),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.str.t_contrib$str49287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49288","meta49288",-2076585608,null)], null);
}));

(contrib.str.t_contrib$str49287.cljs$lang$type = true);

(contrib.str.t_contrib$str49287.cljs$lang$ctorStr = "contrib.str/t_contrib$str49287");

(contrib.str.t_contrib$str49287.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.str/t_contrib$str49287");
}));

/**
 * Positional factory function for contrib.str/t_contrib$str49287.
 */
contrib.str.__GT_t_contrib$str49287 = (function contrib$str$generated__contrib_str_64_$___GT_t_contrib$str49287(meta49288){
return (new contrib.str.t_contrib$str49287(meta49288));
});

}

return (new contrib.str.t_contrib$str49287(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.str.generated__contrib_str_64;},new cljs.core.Symbol("contrib.str","generated__contrib_str_64","contrib.str/generated__contrib_str_64",1591128170,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/str.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.str","contrib.str",-670707725,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),64,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_str_64","generated__contrib_str_64",-307328754,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.str.generated__contrib_str_64)?contrib.str.generated__contrib_str_64.cljs$lang$test:null)], null)),contrib.str.generated__contrib_str_64));
} else {
}
contrib.str.empty__GT_nil = (function contrib$str$empty__GT_nil(s){
if(contrib.str.empty_QMARK_(s)){
return null;
} else {
return s;
}
});
contrib.str.generated__contrib_str_71 = (function contrib$str$generated__contrib_str_71(){
if((typeof contrib !== 'undefined') && (typeof contrib.str !== 'undefined') && (typeof contrib.str.t_contrib$str49298 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.str.t_contrib$str49298 = (function (meta49299){
this.meta49299 = meta49299;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.str.t_contrib$str49298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49300,meta49299__$1){
var self__ = this;
var _49300__$1 = this;
return (new contrib.str.t_contrib$str49298(meta49299__$1));
}));

(contrib.str.t_contrib$str49298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49300){
var self__ = this;
var _49300__$1 = this;
return self__.meta49299;
}));

(contrib.str.t_contrib$str49298.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.str.t_contrib$str49298.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__49302 = (arguments.length - (1));
switch (G__49302) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.str.t_contrib$str49298.prototype.apply = (function (self__,args49301){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args49301)));
}));

(contrib.str.t_contrib$str49298.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_49296){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(4,done_49296);
try{var values__10703__auto___49387 = (new cljs.core.List(null,contrib.str.empty__GT_nil(null),(new cljs.core.List(null,null,null,(1),null)),(2),null));
var result__10704__auto___49388 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49387);
if(cljs.core.truth_(result__10704__auto___49388)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"empty->nil","empty->nil",-1608825646,null),null),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49387),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"empty->nil","empty->nil",-1608825646,null),null),null),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49387),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49387);
}catch (e49303){var t__10691__auto___49390 = e49303;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"empty->nil","empty->nil",-1608825646,null),null),null),null,t__10691__auto___49390,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___49391 = (new cljs.core.List(null,contrib.str.empty__GT_nil(""),(new cljs.core.List(null,null,null,(1),null)),(2),null));
var result__10704__auto___49392 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49391);
if(cljs.core.truth_(result__10704__auto___49392)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"empty->nil","empty->nil",-1608825646,null),""),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49391),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"empty->nil","empty->nil",-1608825646,null),""),null),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49391),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49391);
}catch (e49304){var t__10691__auto___49393 = e49304;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"empty->nil","empty->nil",-1608825646,null),""),null),null,t__10691__auto___49393,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___49394 = (new cljs.core.List(null,contrib.str.empty__GT_nil(" "),(new cljs.core.List(null," ",null,(1),null)),(2),null));
var result__10704__auto___49395 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49394);
if(cljs.core.truth_(result__10704__auto___49395)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"empty->nil","empty->nil",-1608825646,null)," ")," "),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49394),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"empty->nil","empty->nil",-1608825646,null)," ")," "),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49394),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49394);
}catch (e49305){var t__10691__auto___49396 = e49305;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"empty->nil","empty->nil",-1608825646,null)," ")," "),null,t__10691__auto___49396,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto__ = (new cljs.core.List(null,contrib.str.empty__GT_nil("a"),(new cljs.core.List(null,"a",null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"empty->nil","empty->nil",-1608825646,null),"a"),"a"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"empty->nil","empty->nil",-1608825646,null),"a"),"a"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e49306){var t__10691__auto__ = e49306;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"empty->nil","empty->nil",-1608825646,null),"a"),"a"),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.str.t_contrib$str49298.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49299","meta49299",181505129,null)], null);
}));

(contrib.str.t_contrib$str49298.cljs$lang$type = true);

(contrib.str.t_contrib$str49298.cljs$lang$ctorStr = "contrib.str/t_contrib$str49298");

(contrib.str.t_contrib$str49298.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.str/t_contrib$str49298");
}));

/**
 * Positional factory function for contrib.str/t_contrib$str49298.
 */
contrib.str.__GT_t_contrib$str49298 = (function contrib$str$generated__contrib_str_71_$___GT_t_contrib$str49298(meta49299){
return (new contrib.str.t_contrib$str49298(meta49299));
});

}

return (new contrib.str.t_contrib$str49298(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.str.generated__contrib_str_71;},new cljs.core.Symbol("contrib.str","generated__contrib_str_71","contrib.str/generated__contrib_str_71",-1519740738,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/str.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.str","contrib.str",-670707725,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),71,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_str_71","generated__contrib_str_71",712151002,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.str.generated__contrib_str_71)?contrib.str.generated__contrib_str_71.cljs$lang$test:null)], null)),contrib.str.generated__contrib_str_71));
} else {
}
/**
 * Nullify empty strings, identity on all other values.
 */
contrib.str.blank__GT_nil = (function contrib$str$blank__GT_nil(s){
if((!(typeof s === 'string'))){
return s;
} else {
if((!(clojure.string.blank_QMARK_(s)))){
return s;
} else {
return null;
}
}
});
contrib.str.generated__contrib_str_82 = (function contrib$str$generated__contrib_str_82(){
if((typeof contrib !== 'undefined') && (typeof contrib.str !== 'undefined') && (typeof contrib.str.t_contrib$str49310 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.str.t_contrib$str49310 = (function (meta49311){
this.meta49311 = meta49311;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.str.t_contrib$str49310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49312,meta49311__$1){
var self__ = this;
var _49312__$1 = this;
return (new contrib.str.t_contrib$str49310(meta49311__$1));
}));

(contrib.str.t_contrib$str49310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49312){
var self__ = this;
var _49312__$1 = this;
return self__.meta49311;
}));

(contrib.str.t_contrib$str49310.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.str.t_contrib$str49310.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__49314 = (arguments.length - (1));
switch (G__49314) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.str.t_contrib$str49310.prototype.apply = (function (self__,args49313){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args49313)));
}));

(contrib.str.t_contrib$str49310.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_49308){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(9,done_49308);
try{var values__10703__auto___49398 = (new cljs.core.List(null,contrib.str.blank__GT_nil(null),(new cljs.core.List(null,null,null,(1),null)),(2),null));
var result__10704__auto___49399 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49398);
if(cljs.core.truth_(result__10704__auto___49399)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null),null),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49398),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null),null),null),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49398),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49398);
}catch (e49315){var t__10691__auto___49400 = e49315;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null),null),null),null,t__10691__auto___49400,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___49401 = (new cljs.core.List(null,contrib.str.blank__GT_nil(""),(new cljs.core.List(null,null,null,(1),null)),(2),null));
var result__10704__auto___49402 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49401);
if(cljs.core.truth_(result__10704__auto___49402)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null),""),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49401),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null),""),null),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49401),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49401);
}catch (e49316){var t__10691__auto___49403 = e49316;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null),""),null),null,t__10691__auto___49403,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___49404 = (new cljs.core.List(null,contrib.str.blank__GT_nil(" "),(new cljs.core.List(null,null,null,(1),null)),(2),null));
var result__10704__auto___49405 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49404);
if(cljs.core.truth_(result__10704__auto___49405)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null)," "),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49404),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null)," "),null),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49404),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49404);
}catch (e49317){var t__10691__auto___49407 = e49317;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null)," "),null),null,t__10691__auto___49407,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___49408 = (new cljs.core.List(null,contrib.str.blank__GT_nil("      "),(new cljs.core.List(null,null,null,(1),null)),(2),null));
var result__10704__auto___49409 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49408);
if(cljs.core.truth_(result__10704__auto___49409)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null),"      "),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49408),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null),"      "),null),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49408),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49408);
}catch (e49318){var t__10691__auto___49410 = e49318;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null),"      "),null),null,t__10691__auto___49410,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___49411 = (new cljs.core.List(null,contrib.str.blank__GT_nil("a"),(new cljs.core.List(null,"a",null,(1),null)),(2),null));
var result__10704__auto___49412 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49411);
if(cljs.core.truth_(result__10704__auto___49412)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null),"a"),"a"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49411),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null),"a"),"a"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49411),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49411);
}catch (e49319){var t__10691__auto___49413 = e49319;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null),"a"),"a"),null,t__10691__auto___49413,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___49414 = (new cljs.core.List(null,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(contrib.str.blank__GT_nil("   a"),null),(new cljs.core.List(null,true,null,(1),null)),(2),null));
var result__10704__auto___49415 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49414);
if(cljs.core.truth_(result__10704__auto___49415)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null),"   a"),null),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49414),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null),"   a"),null),true),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49414),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49414);
}catch (e49320){var t__10691__auto___49416 = e49320;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null),"   a"),null),true),null,t__10691__auto___49416,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___49417 = (new cljs.core.List(null,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(contrib.str.blank__GT_nil("   a   "),null),(new cljs.core.List(null,true,null,(1),null)),(2),null));
var result__10704__auto___49418 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49417);
if(cljs.core.truth_(result__10704__auto___49418)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null),"   a   "),null),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49417),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null),"   a   "),null),true),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49417),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49417);
}catch (e49321){var t__10691__auto___49422 = e49321;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null),"   a   "),null),true),null,t__10691__auto___49422,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___49423 = (new cljs.core.List(null,contrib.str.blank__GT_nil((1)),(new cljs.core.List(null,(1),null,(1),null)),(2),null));
var result__10704__auto___49424 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49423);
if(cljs.core.truth_(result__10704__auto___49424)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null),(1)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49423),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null),(1)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49423),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49423);
}catch (e49322){var t__10691__auto___49428 = e49322;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null),(1)),(1)),null,t__10691__auto___49428,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto__ = (new cljs.core.List(null,contrib.str.blank__GT_nil(null),(new cljs.core.List(null,null,null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null),null),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null),null),null),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e49323){var t__10691__auto__ = e49323;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"blank->nil","blank->nil",-8315250,null),null),null),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.str.t_contrib$str49310.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49311","meta49311",-1800345887,null)], null);
}));

(contrib.str.t_contrib$str49310.cljs$lang$type = true);

(contrib.str.t_contrib$str49310.cljs$lang$ctorStr = "contrib.str/t_contrib$str49310");

(contrib.str.t_contrib$str49310.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.str/t_contrib$str49310");
}));

/**
 * Positional factory function for contrib.str/t_contrib$str49310.
 */
contrib.str.__GT_t_contrib$str49310 = (function contrib$str$generated__contrib_str_82_$___GT_t_contrib$str49310(meta49311){
return (new contrib.str.t_contrib$str49310(meta49311));
});

}

return (new contrib.str.t_contrib$str49310(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.str.generated__contrib_str_82;},new cljs.core.Symbol("contrib.str","generated__contrib_str_82","contrib.str/generated__contrib_str_82",-786533897,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/str.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.str","contrib.str",-670707725,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),82,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_str_82","generated__contrib_str_82",1077307563,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.str.generated__contrib_str_82)?contrib.str.generated__contrib_str_82.cljs$lang$test:null)], null)),contrib.str.generated__contrib_str_82));
} else {
}
contrib.str.or_str = (function contrib$str$or_str(var_args){
var G__49326 = arguments.length;
switch (G__49326) {
case 2:
return contrib.str.or_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return contrib.str.or_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(contrib.str.or_str.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var or__28610__auto__ = a;
if(cljs.core.seq(or__28610__auto__)){
return or__28610__auto__;
} else {
var or__28609__auto__ = b;
if(cljs.core.seq(or__28609__auto__)){
return or__28609__auto__;
} else {
return null;
}
}
}));

(contrib.str.or_str.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var or__28610__auto__ = a;
if(cljs.core.seq(or__28610__auto__)){
return or__28610__auto__;
} else {
var or__28610__auto____$1 = b;
if(cljs.core.seq(or__28610__auto____$1)){
return or__28610__auto____$1;
} else {
var or__28609__auto__ = c;
if(cljs.core.seq(or__28609__auto__)){
return or__28609__auto__;
} else {
return null;
}
}
}
}));

(contrib.str.or_str.cljs$lang$maxFixedArity = 3);

contrib.str.generated__contrib_str_98 = (function contrib$str$generated__contrib_str_98(){
if((typeof contrib !== 'undefined') && (typeof contrib.str !== 'undefined') && (typeof contrib.str.t_contrib$str49329 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.str.t_contrib$str49329 = (function (meta49330){
this.meta49330 = meta49330;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.str.t_contrib$str49329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49331,meta49330__$1){
var self__ = this;
var _49331__$1 = this;
return (new contrib.str.t_contrib$str49329(meta49330__$1));
}));

(contrib.str.t_contrib$str49329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49331){
var self__ = this;
var _49331__$1 = this;
return self__.meta49330;
}));

(contrib.str.t_contrib$str49329.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.str.t_contrib$str49329.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__49333 = (arguments.length - (1));
switch (G__49333) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.str.t_contrib$str49329.prototype.apply = (function (self__,args49332){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args49332)));
}));

(contrib.str.t_contrib$str49329.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_49328){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(4,done_49328);
try{var values__10703__auto___49436 = (new cljs.core.List(null,contrib.str.or_str.cljs$core$IFn$_invoke$arity$2(null,"b"),(new cljs.core.List(null,"b",null,(1),null)),(2),null));
var result__10704__auto___49437 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49436);
if(cljs.core.truth_(result__10704__auto___49437)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"or-str","or-str",576097859,null),null,"b"),"b"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49436),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"or-str","or-str",576097859,null),null,"b"),"b"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49436),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49436);
}catch (e49334){var t__10691__auto___49441 = e49334;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"or-str","or-str",576097859,null),null,"b"),"b"),null,t__10691__auto___49441,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___49442 = (new cljs.core.List(null,contrib.str.or_str.cljs$core$IFn$_invoke$arity$2("","b"),(new cljs.core.List(null,"b",null,(1),null)),(2),null));
var result__10704__auto___49443 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49442);
if(cljs.core.truth_(result__10704__auto___49443)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"or-str","or-str",576097859,null),"","b"),"b"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49442),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"or-str","or-str",576097859,null),"","b"),"b"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49442),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49442);
}catch (e49335){var t__10691__auto___49444 = e49335;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"or-str","or-str",576097859,null),"","b"),"b"),null,t__10691__auto___49444,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___49445 = (new cljs.core.List(null,contrib.str.or_str.cljs$core$IFn$_invoke$arity$2("a","b"),(new cljs.core.List(null,"a",null,(1),null)),(2),null));
var result__10704__auto___49446 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___49445);
if(cljs.core.truth_(result__10704__auto___49446)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"or-str","or-str",576097859,null),"a","b"),"a"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___49445),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"or-str","or-str",576097859,null),"a","b"),"a"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___49445),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___49445);
}catch (e49336){var t__10691__auto___49450 = e49336;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"or-str","or-str",576097859,null),"a","b"),"a"),null,t__10691__auto___49450,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto__ = (new cljs.core.List(null,contrib.str.or_str.cljs$core$IFn$_invoke$arity$2(" ","b"),(new cljs.core.List(null," ",null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"or-str","or-str",576097859,null)," ","b")," "),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"or-str","or-str",576097859,null)," ","b")," "),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e49337){var t__10691__auto__ = e49337;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"or-str","or-str",576097859,null)," ","b")," "),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.str.t_contrib$str49329.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49330","meta49330",746325086,null)], null);
}));

(contrib.str.t_contrib$str49329.cljs$lang$type = true);

(contrib.str.t_contrib$str49329.cljs$lang$ctorStr = "contrib.str/t_contrib$str49329");

(contrib.str.t_contrib$str49329.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.str/t_contrib$str49329");
}));

/**
 * Positional factory function for contrib.str/t_contrib$str49329.
 */
contrib.str.__GT_t_contrib$str49329 = (function contrib$str$generated__contrib_str_98_$___GT_t_contrib$str49329(meta49330){
return (new contrib.str.t_contrib$str49329(meta49330));
});

}

return (new contrib.str.t_contrib$str49329(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.str.generated__contrib_str_98;},new cljs.core.Symbol("contrib.str","generated__contrib_str_98","contrib.str/generated__contrib_str_98",-438602145,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/str.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.str","contrib.str",-670707725,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),98,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_str_98","generated__contrib_str_98",1992507651,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.str.generated__contrib_str_98)?contrib.str.generated__contrib_str_98.cljs$lang$test:null)], null)),contrib.str.generated__contrib_str_98));
} else {
}

//# sourceMappingURL=contrib.str.js.map
