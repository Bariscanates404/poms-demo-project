goog.provide('hyperfiddle.electric.impl.for$');
hyperfiddle.electric.impl.for$.seq_diff = (function hyperfiddle$electric$impl$for$seq_diff(kf){
return (function (rf){
var state = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((4));
var append = (function (o,k){
var next_index = (state[((2) | (0))]);
(state[((2) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_index,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(next_index,k,cljs.core.PersistentVector.EMPTY),o)));

var temp__5806__auto__ = (state[((3) | (0))]);
if((temp__5806__auto__ == null)){
(o[((0) | (0))] = o);

(o[((1) | (0))] = o);

return (state[((3) | (0))] = o);
} else {
var next_head = temp__5806__auto__;
var next_tail = (next_head[((0) | (0))]);
(o[((0) | (0))] = next_tail);

(o[((1) | (0))] = next_head);

(next_head[((0) | (0))] = o);

return (next_tail[((1) | (0))] = o);
}
});
var scan = (function (r,x){
var k = (kf.cljs$core$IFn$_invoke$arity$1 ? kf.cljs$core$IFn$_invoke$arity$1(x) : kf.call(null,x));
var prev_index = (state[((0) | (0))]);
var prev_head = (state[((1) | (0))]);
var temp__5806__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_index,k);
if((temp__5806__auto__ == null)){
var o = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
append(o,k);

var G__52381 = (function (){var G__52384 = r;
var G__52385 = o;
var G__52386 = (o[((2) | (0))] = x);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__52384,G__52385,G__52386) : rf.call(null,G__52384,G__52385,G__52386));
})();
var G__52382 = null;
var G__52383 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,prev_head], null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__52381,G__52382,G__52383) : rf.call(null,G__52381,G__52382,G__52383));
} else {
var vec__52387 = temp__5806__auto__;
var seq__52388 = cljs.core.seq(vec__52387);
var first__52389 = cljs.core.first(seq__52388);
var seq__52388__$1 = cljs.core.next(seq__52388);
var o = first__52389;
var os = seq__52388__$1;
var prev = (o[((0) | (0))]);
var next = (((o === prev))?null:(prev[((1) | (0))] = (function (){var G__52391 = (o[((1) | (0))]);
(G__52391[((0) | (0))] = prev);

return G__52391;
})()));
var r__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(o[((2) | (0))])))?r:(function (){var G__52392 = r;
var G__52393 = o;
var G__52394 = (o[((2) | (0))] = x);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__52392,G__52393,G__52394) : rf.call(null,G__52392,G__52393,G__52394));
})());
var r__$2 = (((o === prev_head))?(function (){
(state[((1) | (0))] = next);

return r__$1;
})()
:(function (){var G__52395 = r__$1;
var G__52396 = null;
var G__52397 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,prev_head], null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__52395,G__52396,G__52397) : rf.call(null,G__52395,G__52396,G__52397));
})());
(state[((0) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(prev_index,k,os));

append(o,k);

return r__$2;
}
});
return (function() {
var G__52845 = null;
var G__52845__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__52845__1 = (function (r){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__52845__2 = (function (r,xs){
if((xs instanceof hyperfiddle.electric.Failure)){
var temp__5806__auto__ = (state[((1) | (0))]);
if((temp__5806__auto__ == null)){
return r;
} else {
var prev_head = temp__5806__auto__;
var o = prev_head;
var r__$1 = r;
while(true){
var o__$1 = (o[((0) | (0))]);
var r__$2 = (function (){var G__52399 = r__$1;
var G__52400 = o__$1;
var G__52401 = (o__$1[((2) | (0))] = xs);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__52399,G__52400,G__52401) : rf.call(null,G__52399,G__52400,G__52401));
})();
if((o__$1 === prev_head)){
return r__$2;
} else {
var G__52847 = o__$1;
var G__52848 = r__$2;
o = G__52847;
r__$1 = G__52848;
continue;
}
break;
}
}
} else {
var r__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(scan,r,xs);
var r__$2 = (function (){var temp__5806__auto__ = (state[((1) | (0))]);
if((temp__5806__auto__ == null)){
return r__$1;
} else {
var prev_head = temp__5806__auto__;
var o = prev_head;
var r__$2 = r__$1;
while(true){
var o__$1 = (o[((0) | (0))]);
var r__$3 = (function (){var G__52406 = r__$2;
var G__52407 = null;
var G__52408 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o__$1,o__$1], null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__52406,G__52407,G__52408) : rf.call(null,G__52406,G__52407,G__52408));
})();
if((o__$1 === prev_head)){
return r__$3;
} else {
var G__52850 = o__$1;
var G__52851 = r__$3;
o = G__52850;
r__$2 = G__52851;
continue;
}
break;
}
}
})();
(state[((0) | (0))] = (state[((2) | (0))]));

(state[((1) | (0))] = (state[((3) | (0))]));

(state[((2) | (0))] = null);

(state[((3) | (0))] = null);

return r__$2;
}
});
G__52845 = function(r,xs){
switch(arguments.length){
case 0:
return G__52845__0.call(this);
case 1:
return G__52845__1.call(this,r);
case 2:
return G__52845__2.call(this,r,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52845.cljs$core$IFn$_invoke$arity$0 = G__52845__0;
G__52845.cljs$core$IFn$_invoke$arity$1 = G__52845__1;
G__52845.cljs$core$IFn$_invoke$arity$2 = G__52845__2;
return G__52845;
})()
});
});
hyperfiddle.electric.impl.for$.entry = (function hyperfiddle$electric$impl$for$entry(k,v){
return cljs.core.__GT_MapEntry(k,v,null);
});
hyperfiddle.electric.impl.for$.generated__hyperfiddle_electric_impl_for_83 = (function hyperfiddle$electric$impl$for$generated__hyperfiddle_electric_impl_for_83(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.for$ !== 'undefined') && (typeof hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52593 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52593 = (function (meta52594){
this.meta52594 = meta52594;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52595,meta52594__$1){
var self__ = this;
var _52595__$1 = this;
return (new hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52593(meta52594__$1));
}));

(hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52595){
var self__ = this;
var _52595__$1 = this;
return self__.meta52594;
}));

(hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52593.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52593.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__52603 = (arguments.length - (1));
switch (G__52603) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52593.prototype.apply = (function (self__,args52600){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args52600)));
}));

(hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52593.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_52537){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(1,done_52537);
var alice_caramail = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"alice",new cljs.core.Keyword(null,"email","email",1415816706),"alice@caramail.com"], null);
var alice_gmail = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"alice",new cljs.core.Keyword(null,"email","email",1415816706),"alice@gmail.com"], null);
var bob = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"bob",new cljs.core.Keyword(null,"email","email",1415816706),"bob@yahoo.com"], null);
var alice_msn = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"alice",new cljs.core.Keyword(null,"email","email",1415816706),"alice@msn.com"], null);
try{var lhs__10713__auto__ = cljs.core.identity(cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.for$.seq_diff(new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.for$.entry)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alice_caramail], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [alice_gmail,bob], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [alice_gmail,alice_msn,bob], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [alice_gmail,bob,alice_msn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bob,alice_msn], null),cljs.core.PersistentVector.EMPTY], null)));
var rhs__10714__auto__ = cljs.core.identity(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?a","?a",1314302913,null),alice_caramail], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?a","?a",1314302913,null),null], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?a","?a",1314302913,null),alice_gmail], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),bob], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),null], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?c","?c",870679775,null),alice_msn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?c","?c",870679775,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Symbol(null,"?c","?c",870679775,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?a","?a",1314302913,null),alice_msn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?c","?c",870679775,null),new cljs.core.Symbol(null,"?c","?c",870679775,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null)], null)], null)], null));
var vec__52626 = hyperfiddle.rcf.unify.unifier_STAR_(lhs__10713__auto__,rhs__10714__auto__);
var result__10715__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52626,(0),null);
var env__10716__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52626,(1),null);
if((!(hyperfiddle.rcf.unify.failed_QMARK_(env__10716__auto__)))){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"=","=",1152933628),cljs.core.list(new cljs.core.Symbol(null,"sequence","sequence",-1727628355,null),cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),cljs.core.list(new cljs.core.Symbol(null,"seq-diff","seq-diff",-87618167,null),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"entry","entry",2145700350,null))),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alice-caramail","alice-caramail",199214009,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alice-gmail","alice-gmail",1136772828,null),new cljs.core.Symbol(null,"bob","bob",287604776,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alice-gmail","alice-gmail",1136772828,null),new cljs.core.Symbol(null,"alice-msn","alice-msn",1803369815,null),new cljs.core.Symbol(null,"bob","bob",287604776,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alice-gmail","alice-gmail",1136772828,null),new cljs.core.Symbol(null,"bob","bob",287604776,null),new cljs.core.Symbol(null,"alice-msn","alice-msn",1803369815,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bob","bob",287604776,null),new cljs.core.Symbol(null,"alice-msn","alice-msn",1803369815,null)], null),cljs.core.PersistentVector.EMPTY], null)),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null)),new cljs.core.Symbol(null,"alice-caramail","alice-caramail",199214009,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null)),null], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null)),new cljs.core.Symbol(null,"alice-gmail","alice-gmail",1136772828,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null)),new cljs.core.Symbol(null,"bob","bob",287604776,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null)),null], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?c","?c",870679775,null)),new cljs.core.Symbol(null,"alice-msn","alice-msn",1803369815,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?c","?c",870679775,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?c","?c",870679775,null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null)),new cljs.core.Symbol(null,"alice-msn","alice-msn",1803369815,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?c","?c",870679775,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?c","?c",870679775,null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null))], null)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),result__10715__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));

return result__10715__auto__;
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"=","=",1152933628),cljs.core.list(new cljs.core.Symbol(null,"sequence","sequence",-1727628355,null),cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),cljs.core.list(new cljs.core.Symbol(null,"seq-diff","seq-diff",-87618167,null),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"entry","entry",2145700350,null))),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alice-caramail","alice-caramail",199214009,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alice-gmail","alice-gmail",1136772828,null),new cljs.core.Symbol(null,"bob","bob",287604776,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alice-gmail","alice-gmail",1136772828,null),new cljs.core.Symbol(null,"alice-msn","alice-msn",1803369815,null),new cljs.core.Symbol(null,"bob","bob",287604776,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alice-gmail","alice-gmail",1136772828,null),new cljs.core.Symbol(null,"bob","bob",287604776,null),new cljs.core.Symbol(null,"alice-msn","alice-msn",1803369815,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bob","bob",287604776,null),new cljs.core.Symbol(null,"alice-msn","alice-msn",1803369815,null)], null),cljs.core.PersistentVector.EMPTY], null)),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null)),new cljs.core.Symbol(null,"alice-caramail","alice-caramail",199214009,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null)),null], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null)),new cljs.core.Symbol(null,"alice-gmail","alice-gmail",1136772828,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null)),new cljs.core.Symbol(null,"bob","bob",287604776,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null)),null], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?c","?c",870679775,null)),new cljs.core.Symbol(null,"alice-msn","alice-msn",1803369815,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?c","?c",870679775,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?c","?c",870679775,null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null)),new cljs.core.Symbol(null,"alice-msn","alice-msn",1803369815,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?c","?c",870679775,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?c","?c",870679775,null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null))], null)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),hyperfiddle.rcf.unify.explain(env__10716__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));

return lhs__10713__auto__;
}
}catch (e52616){var t__10691__auto__ = e52616;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Keyword("hyperfiddle.rcf","=","hyperfiddle.rcf/=",-249719063),cljs.core.list(new cljs.core.Symbol(null,"sequence","sequence",-1727628355,null),cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),cljs.core.list(new cljs.core.Symbol(null,"seq-diff","seq-diff",-87618167,null),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"entry","entry",2145700350,null))),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alice-caramail","alice-caramail",199214009,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alice-gmail","alice-gmail",1136772828,null),new cljs.core.Symbol(null,"bob","bob",287604776,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alice-gmail","alice-gmail",1136772828,null),new cljs.core.Symbol(null,"alice-msn","alice-msn",1803369815,null),new cljs.core.Symbol(null,"bob","bob",287604776,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alice-gmail","alice-gmail",1136772828,null),new cljs.core.Symbol(null,"bob","bob",287604776,null),new cljs.core.Symbol(null,"alice-msn","alice-msn",1803369815,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bob","bob",287604776,null),new cljs.core.Symbol(null,"alice-msn","alice-msn",1803369815,null)], null),cljs.core.PersistentVector.EMPTY], null)),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null)),new cljs.core.Symbol(null,"alice-caramail","alice-caramail",199214009,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null)),null], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null)),new cljs.core.Symbol(null,"alice-gmail","alice-gmail",1136772828,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null)),new cljs.core.Symbol(null,"bob","bob",287604776,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null)),null], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?c","?c",870679775,null)),new cljs.core.Symbol(null,"alice-msn","alice-msn",1803369815,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?c","?c",870679775,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?c","?c",870679775,null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null)),new cljs.core.Symbol(null,"alice-msn","alice-msn",1803369815,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?c","?c",870679775,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?c","?c",870679775,null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null))], null)], null)], null)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52593.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52594","meta52594",-2141632788,null)], null);
}));

(hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52593.cljs$lang$type = true);

(hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52593.cljs$lang$ctorStr = "hyperfiddle.electric.impl.for/t_hyperfiddle$electric$impl$for52593");

(hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52593.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.for/t_hyperfiddle$electric$impl$for52593");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.for/t_hyperfiddle$electric$impl$for52593.
 */
hyperfiddle.electric.impl.for$.__GT_t_hyperfiddle$electric$impl$for52593 = (function hyperfiddle$electric$impl$for$generated__hyperfiddle_electric_impl_for_83_$___GT_t_hyperfiddle$electric$impl$for52593(meta52594){
return (new hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52593(meta52594));
});

}

return (new hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52593(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.for$.generated__hyperfiddle_electric_impl_for_83;},new cljs.core.Symbol("hyperfiddle.electric.impl.for","generated__hyperfiddle_electric_impl_for_83","hyperfiddle.electric.impl.for/generated__hyperfiddle_electric_impl_for_83",-1256902977,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/for.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hyperfiddle.electric.impl.for","hyperfiddle.electric.impl.for",-2048545837,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),83,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_for_83","generated__hyperfiddle_electric_impl_for_83",-367020223,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.for$.generated__hyperfiddle_electric_impl_for_83)?hyperfiddle.electric.impl.for$.generated__hyperfiddle_electric_impl_for_83.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.for$.generated__hyperfiddle_electric_impl_for_83));
} else {
}
hyperfiddle.electric.impl.for$.insert_before = (function hyperfiddle$electric$impl$for$insert_before(tier){
return (function (rf){
var state = (function (){var G__52644 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__52644[((0) | (0))] = cljs.core.PersistentArrayMap.EMPTY);

(G__52644[((1) | (0))] = cljs.core.PersistentVector.EMPTY);

return G__52644;
})();
return (function() {
var G__52862 = null;
var G__52862__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__52862__1 = (function (r){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__52862__2 = (function (r,p__52646){
var vec__52647 = p__52646;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52647,(0),null);
var anchor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52647,(1),null);
var r__$1 = (function (){var k__GT_p = (state[((0) | (0))]);
if(cljs.core.contains_QMARK_(k__GT_p,target)){
return r;
} else {
(state[((0) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(k__GT_p,target,cljs.core.count(k__GT_p)));

(state[((1) | (0))] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((state[((1) | (0))]),target));

var G__52653 = r;
var G__52654 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [target], null);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__52653,G__52654) : rf.call(null,G__52653,G__52654));
}
})();
var k__GT_p = (state[((0) | (0))]);
var start_position = (k__GT_p.cljs$core$IFn$_invoke$arity$1 ? k__GT_p.cljs$core$IFn$_invoke$arity$1(target) : k__GT_p.call(null,target));
var anchor_position = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anchor,target))?cljs.core.count(k__GT_p):(function (){var G__52657 = anchor;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__52657)){
return cljs.core.count(k__GT_p);
} else {
return (k__GT_p.cljs$core$IFn$_invoke$arity$1 ? k__GT_p.cljs$core$IFn$_invoke$arity$1(anchor) : k__GT_p.call(null,anchor));

}
})());
var final_position = (((start_position < anchor_position))?(anchor_position - (1)):anchor_position);
var step = cljs.core.compare(final_position,start_position);
var r__$2 = (function (){var G__52661 = step;
switch (G__52661) {
case (0):
return r__$1;

break;
default:
var ks = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [target], null);
var i = start_position;
while(true){
var j = (i + step);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((state[((1) | (0))]),j);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
(state[((0) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((state[((0) | (0))]),k,i));

(state[((1) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((state[((1) | (0))]),i,k));

if((j === final_position)){
(state[((0) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((state[((0) | (0))]),target,j));

(state[((1) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((state[((1) | (0))]),j,target));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(r__$1,ks__$1) : rf.call(null,r__$1,ks__$1));
} else {
var G__52869 = ks__$1;
var G__52870 = j;
ks = G__52869;
i = G__52870;
continue;
}
break;
}

}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anchor,target)){
(state[((0) | (0))] = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((state[((0) | (0))]),target));

(state[((1) | (0))] = cljs.core.pop((state[((1) | (0))])));

hyperfiddle.electric.impl.runtime.move(tier,start_position,start_position);

var G__52670 = r__$2;
var G__52671 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [target], null);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__52670,G__52671) : rf.call(null,G__52670,G__52671));
} else {
if((start_position === final_position)){
} else {
hyperfiddle.electric.impl.runtime.move(tier,start_position,final_position);
}

return r__$2;
}
});
G__52862 = function(r,p__52646){
switch(arguments.length){
case 0:
return G__52862__0.call(this);
case 1:
return G__52862__1.call(this,r);
case 2:
return G__52862__2.call(this,r,p__52646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52862.cljs$core$IFn$_invoke$arity$0 = G__52862__0;
G__52862.cljs$core$IFn$_invoke$arity$1 = G__52862__1;
G__52862.cljs$core$IFn$_invoke$arity$2 = G__52862__2;
return G__52862;
})()
});
});
hyperfiddle.electric.impl.for$.apply_cycle = (function hyperfiddle$electric$impl$for$apply_cycle(p__52680,p__52681){
var map__52682 = p__52680;
var map__52682__$1 = cljs.core.__destructure_map(map__52682);
var r = map__52682__$1;
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52682__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52682__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var failed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52682__$1,new cljs.core.Keyword(null,"failed","failed",-1397425762));
var vec__52683 = p__52681;
var seq__52684 = cljs.core.seq(vec__52683);
var first__52685 = cljs.core.first(seq__52684);
var seq__52684__$1 = cljs.core.next(seq__52684);
var x = first__52685;
var ys = seq__52684__$1;
var temp__5806__auto__ = ys;
if((temp__5806__auto__ == null)){
var temp__5806__auto____$1 = (index.cljs$core$IFn$_invoke$arity$1 ? index.cljs$core$IFn$_invoke$arity$1(x) : index.call(null,x));
if((temp__5806__auto____$1 == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(index,x,cljs.core.count(index)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vals","vals",768058733),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals,null)], 0));
} else {
var i = temp__5806__auto____$1;
if(((i + (1)) === cljs.core.count(index))){
} else {
throw (new Error("Assert failed: (== (inc i) (count index))"));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"failed","failed",-1397425762),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(failed,x),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(index,x),new cljs.core.Keyword(null,"vals","vals",768058733),cljs.core.pop(vals)], 0));
}
} else {
var vec__52689 = temp__5806__auto__;
var seq__52690 = cljs.core.seq(vec__52689);
var first__52691 = cljs.core.first(seq__52690);
var seq__52690__$1 = cljs.core.next(seq__52690);
var y = first__52691;
var ys__$1 = seq__52690__$1;
var i = (index.cljs$core$IFn$_invoke$arity$1 ? index.cljs$core$IFn$_invoke$arity$1(x) : index.call(null,x));
var v = (vals.cljs$core$IFn$_invoke$arity$1 ? vals.cljs$core$IFn$_invoke$arity$1(i) : vals.call(null,i));
var index__$1 = index;
var vals__$1 = vals;
var i__$1 = i;
var y__$1 = y;
var ys__$2 = ys__$1;
while(true){
var j = (index__$1.cljs$core$IFn$_invoke$arity$1 ? index__$1.cljs$core$IFn$_invoke$arity$1(y__$1) : index__$1.call(null,y__$1));
var index__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(index__$1,y__$1,i__$1);
var vals__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vals__$1,i__$1,(vals__$1.cljs$core$IFn$_invoke$arity$1 ? vals__$1.cljs$core$IFn$_invoke$arity$1(j) : vals__$1.call(null,j)));
var temp__5806__auto____$1 = ys__$2;
if((temp__5806__auto____$1 == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(index__$2,x,j),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vals","vals",768058733),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vals__$2,j,v)], 0));
} else {
var vec__52695 = temp__5806__auto____$1;
var seq__52696 = cljs.core.seq(vec__52695);
var first__52697 = cljs.core.first(seq__52696);
var seq__52696__$1 = cljs.core.next(seq__52696);
var y__$2 = first__52697;
var ys__$3 = seq__52696__$1;
var G__52880 = index__$2;
var G__52881 = vals__$2;
var G__52882 = j;
var G__52883 = y__$2;
var G__52884 = ys__$3;
index__$1 = G__52880;
vals__$1 = G__52881;
i__$1 = G__52882;
y__$1 = G__52883;
ys__$2 = G__52884;
continue;
}
break;
}
}
});
hyperfiddle.electric.impl.for$.apply_change = (function hyperfiddle$electric$impl$for$apply_change(p__52702,k,v){
var map__52703 = p__52702;
var map__52703__$1 = cljs.core.__destructure_map(map__52703);
var r = map__52703__$1;
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52703__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52703__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var failed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52703__$1,new cljs.core.Keyword(null,"failed","failed",-1397425762));
var temp__5806__auto__ = (index.cljs$core$IFn$_invoke$arity$1 ? index.cljs$core$IFn$_invoke$arity$1(k) : index.call(null,k));
if((temp__5806__auto__ == null)){
return r;
} else {
var i = temp__5806__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"vals","vals",768058733),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vals,i,v),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"failed","failed",-1397425762),(function (){var fexpr__52706 = (((v instanceof hyperfiddle.electric.Failure))?cljs.core.conj:cljs.core.disj);
return (fexpr__52706.cljs$core$IFn$_invoke$arity$2 ? fexpr__52706.cljs$core$IFn$_invoke$arity$2(failed,k) : fexpr__52706.call(null,failed,k));
})()], 0));
}
});
hyperfiddle.electric.impl.for$.values = (function hyperfiddle$electric$impl$for$values(p__52708){
var map__52709 = p__52708;
var map__52709__$1 = cljs.core.__destructure_map(map__52709);
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52709__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52709__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var failed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52709__$1,new cljs.core.Keyword(null,"failed","failed",-1397425762));
var temp__5806__auto__ = cljs.core.seq(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(index,failed)));
if((temp__5806__auto__ == null)){
return vals;
} else {
var vec__52711 = temp__5806__auto__;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52711,(0),null);
return (vals.cljs$core$IFn$_invoke$arity$1 ? vals.cljs$core$IFn$_invoke$arity$1(i) : vals.call(null,i));
}
});
hyperfiddle.electric.impl.for$.seq_patch = (function hyperfiddle$electric$impl$for$seq_patch(var_args){
var G__52720 = arguments.length;
switch (G__52720) {
case 0:
return hyperfiddle.electric.impl.for$.seq_patch.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return hyperfiddle.electric.impl.for$.seq_patch.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.impl.for$.seq_patch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.impl.for$.seq_patch.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vals","vals",768058733),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"failed","failed",-1397425762),cljs.core.PersistentHashSet.EMPTY], null);
}));

(hyperfiddle.electric.impl.for$.seq_patch.cljs$core$IFn$_invoke$arity$1 = (function (r){
return r;
}));

(hyperfiddle.electric.impl.for$.seq_patch.cljs$core$IFn$_invoke$arity$2 = (function (r,diff){
return cljs.core.reduce_kv(hyperfiddle.electric.impl.for$.apply_change,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.for$.apply_cycle,r,cljs.core.get.cljs$core$IFn$_invoke$arity$2(diff,null)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(diff,null));
}));

(hyperfiddle.electric.impl.for$.seq_patch.cljs$lang$maxFixedArity = 2);

hyperfiddle.electric.impl.for$.generated__hyperfiddle_electric_impl_for_226 = (function hyperfiddle$electric$impl$for$generated__hyperfiddle_electric_impl_for_226(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.for$ !== 'undefined') && (typeof hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52771 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52771 = (function (meta52772){
this.meta52772 = meta52772;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52773,meta52772__$1){
var self__ = this;
var _52773__$1 = this;
return (new hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52771(meta52772__$1));
}));

(hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52773){
var self__ = this;
var _52773__$1 = this;
return self__.meta52772;
}));

(hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52771.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52771.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__52778 = (arguments.length - (1));
switch (G__52778) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52771.prototype.apply = (function (self__,args52775){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args52775)));
}));

(hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52771.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_52751){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(1,done_52751);
try{var values__10703__auto__ = (new cljs.core.List(null,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.for$.seq_patch,hyperfiddle.electric.impl.for$.seq_patch.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null)], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"alice",new cljs.core.Keyword(null,"email","email",1415816706),"alice@caramail.com"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"alice",new cljs.core.Keyword(null,"email","email",1415816706),"alice@gmail.com"], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"bob",new cljs.core.Keyword(null,"name","name",1843675177),"bob@yahoo.com"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079)], null)], null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"alice",new cljs.core.Keyword(null,"email","email",1415816706),"alice@msn.com"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079)], null)], null)], null)], null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vals","vals",768058733),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"alice",new cljs.core.Keyword(null,"email","email",1415816706),"alice@gmail.com"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"bob",new cljs.core.Keyword(null,"name","name",1843675177),"bob@yahoo.com"], null)], null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(0),new cljs.core.Keyword(null,"b","b",1482224470),(1)], null),new cljs.core.Keyword(null,"failed","failed",-1397425762),cljs.core.PersistentHashSet.EMPTY], null),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"seq-patch","seq-patch",382081452,null),cljs.core.list(new cljs.core.Symbol(null,"seq-patch","seq-patch",382081452,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null)], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"alice",new cljs.core.Keyword(null,"email","email",1415816706),"alice@caramail.com"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"alice",new cljs.core.Keyword(null,"email","email",1415816706),"alice@gmail.com"], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"bob",new cljs.core.Keyword(null,"name","name",1843675177),"bob@yahoo.com"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079)], null)], null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"alice",new cljs.core.Keyword(null,"email","email",1415816706),"alice@msn.com"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079)], null)], null)], null)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vals","vals",768058733),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"alice",new cljs.core.Keyword(null,"email","email",1415816706),"alice@gmail.com"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"bob",new cljs.core.Keyword(null,"name","name",1843675177),"bob@yahoo.com"], null)], null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(0),new cljs.core.Keyword(null,"b","b",1482224470),(1)], null),new cljs.core.Keyword(null,"failed","failed",-1397425762),cljs.core.PersistentHashSet.EMPTY], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"seq-patch","seq-patch",382081452,null),cljs.core.list(new cljs.core.Symbol(null,"seq-patch","seq-patch",382081452,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null)], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"alice",new cljs.core.Keyword(null,"email","email",1415816706),"alice@caramail.com"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"alice",new cljs.core.Keyword(null,"email","email",1415816706),"alice@gmail.com"], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"bob",new cljs.core.Keyword(null,"name","name",1843675177),"bob@yahoo.com"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079)], null)], null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"alice",new cljs.core.Keyword(null,"email","email",1415816706),"alice@msn.com"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079)], null)], null)], null)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vals","vals",768058733),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"alice",new cljs.core.Keyword(null,"email","email",1415816706),"alice@gmail.com"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"bob",new cljs.core.Keyword(null,"name","name",1843675177),"bob@yahoo.com"], null)], null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(0),new cljs.core.Keyword(null,"b","b",1482224470),(1)], null),new cljs.core.Keyword(null,"failed","failed",-1397425762),cljs.core.PersistentHashSet.EMPTY], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e52796){var t__10691__auto__ = e52796;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"seq-patch","seq-patch",382081452,null),cljs.core.list(new cljs.core.Symbol(null,"seq-patch","seq-patch",382081452,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null)], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"alice",new cljs.core.Keyword(null,"email","email",1415816706),"alice@caramail.com"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"alice",new cljs.core.Keyword(null,"email","email",1415816706),"alice@gmail.com"], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"bob",new cljs.core.Keyword(null,"name","name",1843675177),"bob@yahoo.com"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079)], null)], null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"alice",new cljs.core.Keyword(null,"email","email",1415816706),"alice@msn.com"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079)], null)], null)], null)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vals","vals",768058733),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"alice",new cljs.core.Keyword(null,"email","email",1415816706),"alice@gmail.com"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"bob",new cljs.core.Keyword(null,"name","name",1843675177),"bob@yahoo.com"], null)], null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(0),new cljs.core.Keyword(null,"b","b",1482224470),(1)], null),new cljs.core.Keyword(null,"failed","failed",-1397425762),cljs.core.PersistentHashSet.EMPTY], null)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52772","meta52772",1426676744,null)], null);
}));

(hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52771.cljs$lang$type = true);

(hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52771.cljs$lang$ctorStr = "hyperfiddle.electric.impl.for/t_hyperfiddle$electric$impl$for52771");

(hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52771.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.for/t_hyperfiddle$electric$impl$for52771");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.for/t_hyperfiddle$electric$impl$for52771.
 */
hyperfiddle.electric.impl.for$.__GT_t_hyperfiddle$electric$impl$for52771 = (function hyperfiddle$electric$impl$for$generated__hyperfiddle_electric_impl_for_226_$___GT_t_hyperfiddle$electric$impl$for52771(meta52772){
return (new hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52771(meta52772));
});

}

return (new hyperfiddle.electric.impl.for$.t_hyperfiddle$electric$impl$for52771(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.for$.generated__hyperfiddle_electric_impl_for_226;},new cljs.core.Symbol("hyperfiddle.electric.impl.for","generated__hyperfiddle_electric_impl_for_226","hyperfiddle.electric.impl.for/generated__hyperfiddle_electric_impl_for_226",805938336,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/for.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hyperfiddle.electric.impl.for","hyperfiddle.electric.impl.for",-2048545837,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),226,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_for_226","generated__hyperfiddle_electric_impl_for_226",1832270986,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.for$.generated__hyperfiddle_electric_impl_for_226)?hyperfiddle.electric.impl.for$.generated__hyperfiddle_electric_impl_for_226.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.for$.generated__hyperfiddle_electric_impl_for_226));
} else {
}
/**
 * 
 * Given a function and a continuous flow of collections, returns a continuous flow of vectors of the same size as input
 * collection, where values are produced by the continuous flow returned by the function when called with the continuous
 * flow of values matching the identity provided by key function, defaulting to identity.
 */
hyperfiddle.electric.impl.for$.map_by = (function hyperfiddle$electric$impl$for$map_by(var_args){
var G__52814 = arguments.length;
switch (G__52814) {
case 3:
return hyperfiddle.electric.impl.for$.map_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric.impl.for$.map_by.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.impl.for$.map_by.cljs$core$IFn$_invoke$arity$3 = (function (tier,f,_GT_xs){
return hyperfiddle.electric.impl.for$.map_by.cljs$core$IFn$_invoke$arity$4(tier,cljs.core.identity,f,_GT_xs);
}));

(hyperfiddle.electric.impl.for$.map_by.cljs$core$IFn$_invoke$arity$4 = (function (tier,k,f,_GT_xs){
return missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.for$.values,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missionary.core.reductions.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.for$.seq_patch,hyperfiddle.electric.impl.gather.gather(cljs.core.merge,missionary.core.sample((function (p__52824){
var vec__52825 = p__52824;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52825,(0),null);
var _GT_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52825,(1),null);
var G__52829 = id;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__52829)){
return missionary.core.sample(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,id),missionary.core.relieve(cljs.core.into,missionary.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.val),hyperfiddle.electric.impl.for$.insert_before(tier),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.vector),_GT_x], 0))));
} else {
return missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.runtime.with$(tier,(function (){var G__52830 = missionary.core.relieve(cljs.core.PersistentArrayMap.EMPTY,missionary.core.eduction.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.val),_GT_x));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52830) : f.call(null,G__52830));
})())], 0));

}
}),missionary.core.group_by(cljs.core.key,missionary.core.eduction.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.for$.seq_diff(k),cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.for$.entry),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_GT_xs], 0))))))], 0));
}));

(hyperfiddle.electric.impl.for$.map_by.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=hyperfiddle.electric.impl.for.js.map
