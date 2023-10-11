goog.provide('hyperfiddle.electric.impl.yield2');

hyperfiddle.electric.impl.yield2.input = ((0) | (0));

hyperfiddle.electric.impl.yield2.recover = ((1) | (0));

hyperfiddle.electric.impl.yield2.children = ((2) | (0));

hyperfiddle.electric.impl.yield2.last_in = ((3) | (0));

hyperfiddle.electric.impl.yield2.last_out = ((4) | (0));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.impl.yield2.Yield = (function (checker,notifier,terminator,state_){
this.checker = checker;
this.notifier = notifier;
this.terminator = terminator;
this.state_ = state_;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.yield2.Yield.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__50658 = (arguments.length - (1));
switch (G__50658) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.yield2.Yield.prototype.apply = (function (self__,args50657){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args50657)));
}));

(hyperfiddle.electric.impl.yield2.Yield.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return (hyperfiddle.electric.impl.yield2.cancel.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.yield2.cancel.cljs$core$IFn$_invoke$arity$1(this$) : hyperfiddle.electric.impl.yield2.cancel.call(null,this$));
}));

(hyperfiddle.electric.impl.yield2.Yield.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (hyperfiddle.electric.impl.yield2.transfer.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.yield2.transfer.cljs$core$IFn$_invoke$arity$1(this$__$1) : hyperfiddle.electric.impl.yield2.transfer.call(null,this$__$1));
}));

(hyperfiddle.electric.impl.yield2.Yield.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"checker","checker",2053644407,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"state-","state-",-416998234,null)], null);
}));

(hyperfiddle.electric.impl.yield2.Yield.cljs$lang$type = true);

(hyperfiddle.electric.impl.yield2.Yield.cljs$lang$ctorStr = "hyperfiddle.electric.impl.yield2/Yield");

(hyperfiddle.electric.impl.yield2.Yield.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.yield2/Yield");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.yield2/Yield.
 */
hyperfiddle.electric.impl.yield2.__GT_Yield = (function hyperfiddle$electric$impl$yield2$__GT_Yield(checker,notifier,terminator,state_){
return (new hyperfiddle.electric.impl.yield2.Yield(checker,notifier,terminator,state_));
});

hyperfiddle.electric.impl.yield2.iterator = ((0) | (0));

hyperfiddle.electric.impl.yield2.notified_QMARK_ = ((1) | (0));

hyperfiddle.electric.impl.yield2.on_notify = ((2) | (0));
hyperfiddle.electric.impl.yield2.input_notified = (function hyperfiddle$electric$impl$yield2$input_notified(Y){
if(cljs.core.truth_((function (){var or__5045__auto__ = hyperfiddle.electric.impl.array_fields.getset(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input),hyperfiddle.electric.impl.yield2.notified_QMARK_,true);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__50688 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((G__50688 == null)){
return null;
} else {
return hyperfiddle.electric.impl.array_fields.get(G__50688,hyperfiddle.electric.impl.yield2.notified_QMARK_);
}
}
})())){
return null;
} else {
var fexpr__50691 = Y.notifier;
return (fexpr__50691.cljs$core$IFn$_invoke$arity$0 ? fexpr__50691.cljs$core$IFn$_invoke$arity$0() : fexpr__50691.call(null));
}
});
hyperfiddle.electric.impl.yield2.recover_notified = (function hyperfiddle$electric$impl$yield2$recover_notified(Y){
if(cljs.core.truth_((function (){var or__5045__auto__ = hyperfiddle.electric.impl.array_fields.getset(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover),hyperfiddle.electric.impl.yield2.notified_QMARK_,true);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return hyperfiddle.electric.impl.array_fields.get(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input),hyperfiddle.electric.impl.yield2.notified_QMARK_);
}
})())){
return null;
} else {
var fexpr__50699 = Y.notifier;
return (fexpr__50699.cljs$core$IFn$_invoke$arity$0 ? fexpr__50699.cljs$core$IFn$_invoke$arity$0() : fexpr__50699.call(null));
}
});
hyperfiddle.electric.impl.yield2.terminated = (function hyperfiddle$electric$impl$yield2$terminated(Y){
if((hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3(Y.state_,hyperfiddle.electric.impl.yield2.children,cljs.core.dec) === (0))){
var fexpr__50704 = Y.terminator;
return (fexpr__50704.cljs$core$IFn$_invoke$arity$0 ? fexpr__50704.cljs$core$IFn$_invoke$arity$0() : fexpr__50704.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.yield2.swallow = (function hyperfiddle$electric$impl$yield2$swallow(o){
try{return cljs.core.deref(hyperfiddle.electric.impl.array_fields.get(o,hyperfiddle.electric.impl.yield2.iterator));
}catch (e50705){var _ = e50705;
return null;
}});
hyperfiddle.electric.impl.yield2.trash = (function hyperfiddle$electric$impl$yield2$trash(o){
var arr50708_51663 = o;
(arr50708_51663[hyperfiddle.electric.impl.yield2.on_notify] = cljs.core.identity((function (){
return hyperfiddle.electric.impl.yield2.swallow(o);
})));

var fexpr__50709_51664 = hyperfiddle.electric.impl.array_fields.get(o,hyperfiddle.electric.impl.yield2.iterator);
(fexpr__50709_51664.cljs$core$IFn$_invoke$arity$0 ? fexpr__50709_51664.cljs$core$IFn$_invoke$arity$0() : fexpr__50709_51664.call(null));

if(cljs.core.truth_(hyperfiddle.electric.impl.array_fields.getset(o,hyperfiddle.electric.impl.yield2.notified_QMARK_,false))){
return hyperfiddle.electric.impl.yield2.swallow(o);
} else {
return null;
}
});
hyperfiddle.electric.impl.yield2.cancel = (function hyperfiddle$electric$impl$yield2$cancel(Y){
var fexpr__50710_51665 = hyperfiddle.electric.impl.array_fields.get(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input),hyperfiddle.electric.impl.yield2.iterator);
(fexpr__50710_51665.cljs$core$IFn$_invoke$arity$0 ? fexpr__50710_51665.cljs$core$IFn$_invoke$arity$0() : fexpr__50710_51665.call(null));

var temp__5808__auto__ = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((temp__5808__auto__ == null)){
return null;
} else {
var rec = temp__5808__auto__;
return hyperfiddle.electric.impl.yield2.trash(rec);
}
});
hyperfiddle.electric.impl.yield2.create_recover = (function hyperfiddle$electric$impl$yield2$create_recover(Y,_GT_r){
var temp__5808__auto___51666 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((temp__5808__auto___51666 == null)){
} else {
var rec_51667 = temp__5808__auto___51666;
hyperfiddle.electric.impl.yield2.trash(rec_51667);
}

hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3(Y.state_,hyperfiddle.electric.impl.yield2.children,cljs.core.inc);

var me = (function (){var arr50714 = Y.state_;
return (arr50714[hyperfiddle.electric.impl.yield2.recover] = cljs.core.identity(cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3))));
})();
var arr50715 = me;
(arr50715[hyperfiddle.electric.impl.yield2.on_notify] = cljs.core.identity((function (){
var arr50716 = me;
return (arr50716[hyperfiddle.electric.impl.yield2.notified_QMARK_] = cljs.core.identity(true));
})));

return (arr50715[hyperfiddle.electric.impl.yield2.iterator] = cljs.core.identity((function (){var G__50720 = (function (){
var fexpr__50722 = hyperfiddle.electric.impl.array_fields.get(me,hyperfiddle.electric.impl.yield2.on_notify);
return (fexpr__50722.cljs$core$IFn$_invoke$arity$0 ? fexpr__50722.cljs$core$IFn$_invoke$arity$0() : fexpr__50722.call(null));
});
var G__50721 = (function (){
return hyperfiddle.electric.impl.yield2.terminated(Y);
});
return (_GT_r.cljs$core$IFn$_invoke$arity$2 ? _GT_r.cljs$core$IFn$_invoke$arity$2(G__50720,G__50721) : _GT_r.call(null,G__50720,G__50721));
})()));
});
hyperfiddle.electric.impl.yield2.transfer_loop = (function hyperfiddle$electric$impl$yield2$transfer_loop(o){
while(true){
var arr50725_51670 = o;
(arr50725_51670[hyperfiddle.electric.impl.yield2.notified_QMARK_] = cljs.core.identity(false));

var v = cljs.core.deref(hyperfiddle.electric.impl.array_fields.get(o,hyperfiddle.electric.impl.yield2.iterator));
if(cljs.core.truth_(hyperfiddle.electric.impl.array_fields.get(o,hyperfiddle.electric.impl.yield2.notified_QMARK_))){
var G__51671 = o;
o = G__51671;
continue;
} else {
return v;
}
break;
}
});
hyperfiddle.electric.impl.yield2.transfer_recover = (function hyperfiddle$electric$impl$yield2$transfer_recover(Y){
var arr50729 = Y.state_;
return (arr50729[hyperfiddle.electric.impl.yield2.last_out] = cljs.core.identity(hyperfiddle.electric.impl.yield2.transfer_loop(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover))));
});
hyperfiddle.electric.impl.yield2.transfer_input = (function hyperfiddle$electric$impl$yield2$transfer_input(Y){
var in$ = hyperfiddle.electric.impl.yield2.transfer_loop(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in$,hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.last_in))){
if(cljs.core.truth_((function (){var G__50732 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((G__50732 == null)){
return null;
} else {
return hyperfiddle.electric.impl.array_fields.get(G__50732,hyperfiddle.electric.impl.yield2.notified_QMARK_);
}
})())){
return hyperfiddle.electric.impl.yield2.transfer_recover(Y);
} else {
return hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.last_out);
}
} else {
var temp__5806__auto__ = (function (){var fexpr__50734 = Y.checker;
return (fexpr__50734.cljs$core$IFn$_invoke$arity$1 ? fexpr__50734.cljs$core$IFn$_invoke$arity$1(in$) : fexpr__50734.call(null,in$));
})();
if((temp__5806__auto__ == null)){
var arr50735_51672 = Y.state_;
(arr50735_51672[hyperfiddle.electric.impl.yield2.last_in] = cljs.core.identity(new cljs.core.Keyword("hyperfiddle.electric.impl.yield2","none","hyperfiddle.electric.impl.yield2/none",934748982)));

var temp__5808__auto___51673 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((temp__5808__auto___51673 == null)){
} else {
var rec_51674 = temp__5808__auto___51673;
hyperfiddle.electric.impl.yield2.trash(rec_51674);
}

return in$;
} else {
var _GT_recover = temp__5806__auto__;
var out = (function (){
hyperfiddle.electric.impl.yield2.create_recover(Y,_GT_recover);

return hyperfiddle.electric.impl.yield2.transfer_recover(Y);
})()
;
var arr50740_51675 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
(arr50740_51675[hyperfiddle.electric.impl.yield2.on_notify] = cljs.core.identity((function (){
return hyperfiddle.electric.impl.yield2.recover_notified(Y);
})));

var arr50742 = Y.state_;
(arr50742[hyperfiddle.electric.impl.yield2.last_in] = cljs.core.identity(in$));

return (arr50742[hyperfiddle.electric.impl.yield2.last_out] = cljs.core.identity(out));
}
}
});
hyperfiddle.electric.impl.yield2.transfer = (function hyperfiddle$electric$impl$yield2$transfer(Y){
try{hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3(Y.state_,hyperfiddle.electric.impl.yield2.children,cljs.core.inc);

if(cljs.core.truth_(hyperfiddle.electric.impl.array_fields.get(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input),hyperfiddle.electric.impl.yield2.notified_QMARK_))){
return hyperfiddle.electric.impl.yield2.transfer_input(Y);
} else {
if(cljs.core.truth_(hyperfiddle.electric.impl.array_fields.get(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover),hyperfiddle.electric.impl.yield2.notified_QMARK_))){
return hyperfiddle.electric.impl.yield2.transfer_recover(Y);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("You cannot transfer a value if I haven't notified you",cljs.core.PersistentArrayMap.EMPTY);

}
}
}catch (e50744){var e = e50744;
hyperfiddle.electric.impl.yield2.trash(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input));

var temp__5808__auto___51676 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((temp__5808__auto___51676 == null)){
} else {
var rec_51678 = temp__5808__auto___51676;
hyperfiddle.electric.impl.yield2.trash(rec_51678);
}

throw e;
}finally {hyperfiddle.electric.impl.yield2.terminated(Y);
}});
hyperfiddle.electric.impl.yield2.yield$ = (function hyperfiddle$electric$impl$yield2$yield(checker,_GT_input){
return (function (n,t){
var Y = hyperfiddle.electric.impl.yield2.__GT_Yield(checker,n,t,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5)));
var me = (function (){var arr50749 = Y.state_;
(arr50749[hyperfiddle.electric.impl.yield2.children] = cljs.core.identity((1)));

(arr50749[hyperfiddle.electric.impl.yield2.last_in] = cljs.core.identity(new cljs.core.Keyword("hyperfiddle.electric.impl.yield2","none","hyperfiddle.electric.impl.yield2/none",934748982)));

return (arr50749[hyperfiddle.electric.impl.yield2.input] = cljs.core.identity(cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3))));
})();
var arr50750_51679 = me;
(arr50750_51679[hyperfiddle.electric.impl.yield2.on_notify] = cljs.core.identity((function (){
return hyperfiddle.electric.impl.yield2.input_notified(Y);
})));

(arr50750_51679[hyperfiddle.electric.impl.yield2.iterator] = cljs.core.identity((function (){var G__50752 = (function (){
var fexpr__50754 = hyperfiddle.electric.impl.array_fields.get(me,hyperfiddle.electric.impl.yield2.on_notify);
return (fexpr__50754.cljs$core$IFn$_invoke$arity$0 ? fexpr__50754.cljs$core$IFn$_invoke$arity$0() : fexpr__50754.call(null));
});
var G__50753 = (function (){
return hyperfiddle.electric.impl.yield2.terminated(Y);
});
return (_GT_input.cljs$core$IFn$_invoke$arity$2 ? _GT_input.cljs$core$IFn$_invoke$arity$2(G__50752,G__50753) : _GT_input.call(null,G__50752,G__50753));
})()));

return Y;
});
});
hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_58 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_58(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2 !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield250963 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield250963 = (function (meta50964){
this.meta50964 = meta50964;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield250963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50965,meta50964__$1){
var self__ = this;
var _50965__$1 = this;
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield250963(meta50964__$1));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield250963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50965){
var self__ = this;
var _50965__$1 = this;
return self__.meta50964;
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield250963.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield250963.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__50967 = (arguments.length - (1));
switch (G__50967) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield250963.prototype.apply = (function (self__,args50966){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args50966)));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield250963.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_50957){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(9,done_50957);
var vec__50918 = (function (){var q__10424__auto__ = hyperfiddle.rcf.queue.queue();
var start__10425__auto__ = hyperfiddle.rcf.time.current_time();
var timeout__10426__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hyperfiddle.rcf._STAR_timeout_STAR_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (x__10427__auto__){
hyperfiddle.rcf.queue.offer_BANG_(q__10424__auto__,x__10427__auto__);

return x__10427__auto__;
}),(function() {
var G__51681 = null;
var G__51681__0 = (function (){
return hyperfiddle.rcf.queue.poll_BANG_.cljs$core$IFn$_invoke$arity$4(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249));
});
var G__51681__2 = (function (n__10428__auto__,cb__10429__auto__){
return hyperfiddle.rcf.queue.poll_n_BANG_(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249),n__10428__auto__,cb__10429__auto__);
});
G__51681 = function(n__10428__auto__,cb__10429__auto__){
switch(arguments.length){
case 0:
return G__51681__0.call(this);
case 2:
return G__51681__2.call(this,n__10428__auto__,cb__10429__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51681.cljs$core$IFn$_invoke$arity$0 = G__51681__0;
G__51681.cljs$core$IFn$_invoke$arity$2 = G__51681__2;
return G__51681;
})()
,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,timeout__10426__auto__)], null);
})();
var RCF__tap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50918,(0),null);
var RCF___PERCENT_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50918,(1),null);
var RCF__set_timeout_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50918,(2),null);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["input flow with nil checker is noop"], 0));

try{hyperfiddle.electric.impl.yield2._BANG_x = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));

hyperfiddle.electric.impl.yield2.it = hyperfiddle.electric.impl.yield2.yield$(cljs.core.constantly(null),missionary.core.watch(hyperfiddle.electric.impl.yield2._BANG_x))((function (){
return (RCF__tap.cljs$core$IFn$_invoke$arity$1 ? RCF__tap.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"notified","notified",-1434696295)) : RCF__tap.call(null,new cljs.core.Keyword(null,"notified","notified",-1434696295)));
}),(function (){
return (RCF__tap.cljs$core$IFn$_invoke$arity$1 ? RCF__tap.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"terminated","terminated",-1954638860)) : RCF__tap.call(null,new cljs.core.Keyword(null,"terminated","terminated",-1954638860)));
}));

var G__50968 = 1;
var G__50969 = (function (_PERCENT__1){
try{var values__10703__auto___51683 = (new cljs.core.List(null,_PERCENT__1,(new cljs.core.List(null,new cljs.core.Keyword(null,"notified","notified",-1434696295),null,(1),null)),(2),null));
var result__10704__auto___51684 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51683);
if(cljs.core.truth_(result__10704__auto___51684)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51683),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51683),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51683);
}catch (e50970){var t__10691__auto___51687 = e50970;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"notified","notified",-1434696295)),null,t__10691__auto___51687,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___51688 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(0),null,(1),null)),(2),null));
var result__10704__auto___51689 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51688);
if(cljs.core.truth_(result__10704__auto___51689)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51688),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51688),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51688);
}catch (e50974){var t__10691__auto___51691 = e50974;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),null,t__10691__auto___51691,null]));
}finally {RCF__done_BANG_();
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_x,cljs.core.inc);

var G__50976 = 1;
var G__50977 = (function (_PERCENT__1__$1){
try{var values__10703__auto___51692 = (new cljs.core.List(null,_PERCENT__1__$1,(new cljs.core.List(null,new cljs.core.Keyword(null,"notified","notified",-1434696295),null,(1),null)),(2),null));
var result__10704__auto___51693 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51692);
if(cljs.core.truth_(result__10704__auto___51693)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51692),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51692),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51692);
}catch (e50978){var t__10691__auto___51696 = e50978;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"notified","notified",-1434696295)),null,t__10691__auto___51696,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___51697 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(1),null,(1),null)),(2),null));
var result__10704__auto___51698 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51697);
if(cljs.core.truth_(result__10704__auto___51698)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51697),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51697),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51697);
}catch (e50980){var t__10691__auto___51699 = e50980;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(1)),null,t__10691__auto___51699,null]));
}finally {RCF__done_BANG_();
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_x,cljs.core.inc);

var G__50981 = 1;
var G__50982 = (function (_PERCENT__1__$2){
try{var values__10703__auto___51700 = (new cljs.core.List(null,_PERCENT__1__$2,(new cljs.core.List(null,new cljs.core.Keyword(null,"notified","notified",-1434696295),null,(1),null)),(2),null));
var result__10704__auto___51701 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51700);
if(cljs.core.truth_(result__10704__auto___51701)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51700),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51700),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51700);
}catch (e50983){var t__10691__auto___51702 = e50983;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"notified","notified",-1434696295)),null,t__10691__auto___51702,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___51703 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(2),null,(1),null)),(2),null));
var result__10704__auto___51704 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51703);
if(cljs.core.truth_(result__10704__auto___51704)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51703),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51703),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51703);
}catch (e50985){var t__10691__auto___51705 = e50985;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(2)),null,t__10691__auto___51705,null]));
}finally {RCF__done_BANG_();
}
(hyperfiddle.electric.impl.yield2.it.cljs$core$IFn$_invoke$arity$0 ? hyperfiddle.electric.impl.yield2.it.cljs$core$IFn$_invoke$arity$0() : hyperfiddle.electric.impl.yield2.it.call(null));

var G__50987 = 1;
var G__50988 = (function (_PERCENT__1__$3){
try{var values__10703__auto___51706 = (new cljs.core.List(null,_PERCENT__1__$3,(new cljs.core.List(null,new cljs.core.Keyword(null,"notified","notified",-1434696295),null,(1),null)),(2),null));
var result__10704__auto___51707 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51706);
if(cljs.core.truth_(result__10704__auto___51707)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51706),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51706),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51706);
}catch (e50989){var t__10691__auto___51708 = e50989;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"notified","notified",-1434696295)),null,t__10691__auto___51708,null]));
}finally {RCF__done_BANG_();
}
try{try{cljs.core.deref(hyperfiddle.electric.impl.yield2.it);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),new cljs.core.Keyword(null,"actual","actual",107306363),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}catch (e50992){if((e50992 instanceof missionary.Cancelled)){
var e__10624__auto___51712 = e50992;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),new cljs.core.Keyword(null,"actual","actual",107306363),e__10624__auto___51712,new cljs.core.Keyword(null,"message","message",-406056002),null], null));

} else {
throw e50992;

}
}}catch (e50991){var t__10691__auto___51713 = e50991;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),null,t__10691__auto___51713,null]));
}finally {RCF__done_BANG_();
}
var G__50993 = 1;
var G__50994 = (function (_PERCENT__1__$4){
try{var values__10703__auto__ = (new cljs.core.List(null,_PERCENT__1__$4,(new cljs.core.List(null,new cljs.core.Keyword(null,"terminated","terminated",-1954638860),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e50995){var t__10691__auto__ = e50995;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__50993,G__50994) : RCF___PERCENT_.call(null,G__50993,G__50994));
});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__50987,G__50988) : RCF___PERCENT_.call(null,G__50987,G__50988));
});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__50981,G__50982) : RCF___PERCENT_.call(null,G__50981,G__50982));
});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__50976,G__50977) : RCF___PERCENT_.call(null,G__50976,G__50977));
});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__50968,G__50969) : RCF___PERCENT_.call(null,G__50968,G__50969));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield250963.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50964","meta50964",750055821,null)], null);
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield250963.cljs$lang$type = true);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield250963.cljs$lang$ctorStr = "hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield250963");

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield250963.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield250963");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield250963.
 */
hyperfiddle.electric.impl.yield2.__GT_t_hyperfiddle$electric$impl$yield250963 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_58_$___GT_t_hyperfiddle$electric$impl$yield250963(meta50964){
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield250963(meta50964));
});

}

return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield250963(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_58;},new cljs.core.Symbol("hyperfiddle.electric.impl.yield2","generated__hyperfiddle_electric_impl_yield2_58","hyperfiddle.electric.impl.yield2/generated__hyperfiddle_electric_impl_yield2_58",-1394946292,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/yield2.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hyperfiddle.electric.impl.yield2","hyperfiddle.electric.impl.yield2",-393953521,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),58,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_yield2_58","generated__hyperfiddle_electric_impl_yield2_58",-148454140,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_58)?hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_58.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_58));
} else {
}
hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_66 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_66(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2 !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251336 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251336 = (function (meta51337){
this.meta51337 = meta51337;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51338,meta51337__$1){
var self__ = this;
var _51338__$1 = this;
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251336(meta51337__$1));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51338){
var self__ = this;
var _51338__$1 = this;
return self__.meta51337;
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251336.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251336.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__51340 = (arguments.length - (1));
switch (G__51340) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251336.prototype.apply = (function (self__,args51339){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args51339)));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251336.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_51335){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(9,done_51335);
var vec__51295 = (function (){var q__10424__auto__ = hyperfiddle.rcf.queue.queue();
var start__10425__auto__ = hyperfiddle.rcf.time.current_time();
var timeout__10426__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hyperfiddle.rcf._STAR_timeout_STAR_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (x__10427__auto__){
hyperfiddle.rcf.queue.offer_BANG_(q__10424__auto__,x__10427__auto__);

return x__10427__auto__;
}),(function() {
var G__51718 = null;
var G__51718__0 = (function (){
return hyperfiddle.rcf.queue.poll_BANG_.cljs$core$IFn$_invoke$arity$4(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249));
});
var G__51718__2 = (function (n__10428__auto__,cb__10429__auto__){
return hyperfiddle.rcf.queue.poll_n_BANG_(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249),n__10428__auto__,cb__10429__auto__);
});
G__51718 = function(n__10428__auto__,cb__10429__auto__){
switch(arguments.length){
case 0:
return G__51718__0.call(this);
case 2:
return G__51718__2.call(this,n__10428__auto__,cb__10429__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51718.cljs$core$IFn$_invoke$arity$0 = G__51718__0;
G__51718.cljs$core$IFn$_invoke$arity$2 = G__51718__2;
return G__51718;
})()
,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,timeout__10426__auto__)], null);
})();
var RCF__tap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51295,(0),null);
var RCF___PERCENT_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51295,(1),null);
var RCF__set_timeout_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51295,(2),null);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["input flow runs recovery"], 0));

try{hyperfiddle.electric.impl.yield2._BANG_x = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));

hyperfiddle.electric.impl.yield2._BANG_recover = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((10));

hyperfiddle.electric.impl.yield2.it = hyperfiddle.electric.impl.yield2.yield$(cljs.core.constantly(missionary.core.watch(hyperfiddle.electric.impl.yield2._BANG_recover)),missionary.core.watch(hyperfiddle.electric.impl.yield2._BANG_x))((function (){
return (RCF__tap.cljs$core$IFn$_invoke$arity$1 ? RCF__tap.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"notified","notified",-1434696295)) : RCF__tap.call(null,new cljs.core.Keyword(null,"notified","notified",-1434696295)));
}),(function (){
return (RCF__tap.cljs$core$IFn$_invoke$arity$1 ? RCF__tap.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"terminated","terminated",-1954638860)) : RCF__tap.call(null,new cljs.core.Keyword(null,"terminated","terminated",-1954638860)));
}));

var G__51341 = 1;
var G__51342 = (function (_PERCENT__1){
try{var values__10703__auto___51719 = (new cljs.core.List(null,_PERCENT__1,(new cljs.core.List(null,new cljs.core.Keyword(null,"notified","notified",-1434696295),null,(1),null)),(2),null));
var result__10704__auto___51720 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51719);
if(cljs.core.truth_(result__10704__auto___51720)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51719),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51719),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51719);
}catch (e51343){var t__10691__auto___51721 = e51343;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"notified","notified",-1434696295)),null,t__10691__auto___51721,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___51722 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(10),null,(1),null)),(2),null));
var result__10704__auto___51723 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51722);
if(cljs.core.truth_(result__10704__auto___51723)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(10)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51722),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(10)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51722),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51722);
}catch (e51344){var t__10691__auto___51724 = e51344;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(10)),null,t__10691__auto___51724,null]));
}finally {RCF__done_BANG_();
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_x,cljs.core.inc);

var G__51345 = 1;
var G__51346 = (function (_PERCENT__1__$1){
try{var values__10703__auto___51725 = (new cljs.core.List(null,_PERCENT__1__$1,(new cljs.core.List(null,new cljs.core.Keyword(null,"notified","notified",-1434696295),null,(1),null)),(2),null));
var result__10704__auto___51726 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51725);
if(cljs.core.truth_(result__10704__auto___51726)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51725),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51725),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51725);
}catch (e51347){var t__10691__auto___51727 = e51347;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"notified","notified",-1434696295)),null,t__10691__auto___51727,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___51728 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(10),null,(1),null)),(2),null));
var result__10704__auto___51729 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51728);
if(cljs.core.truth_(result__10704__auto___51729)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(10)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51728),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(10)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51728),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51728);
}catch (e51348){var t__10691__auto___51730 = e51348;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(10)),null,t__10691__auto___51730,null]));
}finally {RCF__done_BANG_();
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_recover,cljs.core.inc);

var G__51349 = 1;
var G__51350 = (function (_PERCENT__1__$2){
try{var values__10703__auto___51731 = (new cljs.core.List(null,_PERCENT__1__$2,(new cljs.core.List(null,new cljs.core.Keyword(null,"notified","notified",-1434696295),null,(1),null)),(2),null));
var result__10704__auto___51732 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51731);
if(cljs.core.truth_(result__10704__auto___51732)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51731),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51731),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51731);
}catch (e51351){var t__10691__auto___51733 = e51351;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"notified","notified",-1434696295)),null,t__10691__auto___51733,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___51734 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(11),null,(1),null)),(2),null));
var result__10704__auto___51735 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51734);
if(cljs.core.truth_(result__10704__auto___51735)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(11)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51734),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(11)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51734),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51734);
}catch (e51352){var t__10691__auto___51736 = e51352;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(11)),null,t__10691__auto___51736,null]));
}finally {RCF__done_BANG_();
}
(hyperfiddle.electric.impl.yield2.it.cljs$core$IFn$_invoke$arity$0 ? hyperfiddle.electric.impl.yield2.it.cljs$core$IFn$_invoke$arity$0() : hyperfiddle.electric.impl.yield2.it.call(null));

var G__51353 = 1;
var G__51354 = (function (_PERCENT__1__$3){
try{var values__10703__auto___51737 = (new cljs.core.List(null,_PERCENT__1__$3,(new cljs.core.List(null,new cljs.core.Keyword(null,"notified","notified",-1434696295),null,(1),null)),(2),null));
var result__10704__auto___51738 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51737);
if(cljs.core.truth_(result__10704__auto___51738)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51737),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51737),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51737);
}catch (e51355){var t__10691__auto___51739 = e51355;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"notified","notified",-1434696295)),null,t__10691__auto___51739,null]));
}finally {RCF__done_BANG_();
}
try{try{cljs.core.deref(hyperfiddle.electric.impl.yield2.it);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),new cljs.core.Keyword(null,"actual","actual",107306363),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}catch (e51357){if((e51357 instanceof missionary.Cancelled)){
var e__10624__auto___51740 = e51357;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),new cljs.core.Keyword(null,"actual","actual",107306363),e__10624__auto___51740,new cljs.core.Keyword(null,"message","message",-406056002),null], null));

} else {
throw e51357;

}
}}catch (e51356){var t__10691__auto___51741 = e51356;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),null,t__10691__auto___51741,null]));
}finally {RCF__done_BANG_();
}
var G__51358 = 1;
var G__51359 = (function (_PERCENT__1__$4){
try{var values__10703__auto__ = (new cljs.core.List(null,_PERCENT__1__$4,(new cljs.core.List(null,new cljs.core.Keyword(null,"terminated","terminated",-1954638860),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e51360){var t__10691__auto__ = e51360;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51358,G__51359) : RCF___PERCENT_.call(null,G__51358,G__51359));
});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51353,G__51354) : RCF___PERCENT_.call(null,G__51353,G__51354));
});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51349,G__51350) : RCF___PERCENT_.call(null,G__51349,G__51350));
});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51345,G__51346) : RCF___PERCENT_.call(null,G__51345,G__51346));
});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51341,G__51342) : RCF___PERCENT_.call(null,G__51341,G__51342));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251336.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51337","meta51337",1481346552,null)], null);
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251336.cljs$lang$type = true);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251336.cljs$lang$ctorStr = "hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251336");

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251336.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251336");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251336.
 */
hyperfiddle.electric.impl.yield2.__GT_t_hyperfiddle$electric$impl$yield251336 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_66_$___GT_t_hyperfiddle$electric$impl$yield251336(meta51337){
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251336(meta51337));
});

}

return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251336(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_66;},new cljs.core.Symbol("hyperfiddle.electric.impl.yield2","generated__hyperfiddle_electric_impl_yield2_66","hyperfiddle.electric.impl.yield2/generated__hyperfiddle_electric_impl_yield2_66",-2038191483,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/yield2.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hyperfiddle.electric.impl.yield2","hyperfiddle.electric.impl.yield2",-393953521,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),66,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_yield2_66","generated__hyperfiddle_electric_impl_yield2_66",-292663155,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_66)?hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_66.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_66));
} else {
}
hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_74 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_74(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2 !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251362 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251362 = (function (meta51363){
this.meta51363 = meta51363;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51364,meta51363__$1){
var self__ = this;
var _51364__$1 = this;
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251362(meta51363__$1));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51364){
var self__ = this;
var _51364__$1 = this;
return self__.meta51363;
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251362.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251362.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__51366 = (arguments.length - (1));
switch (G__51366) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251362.prototype.apply = (function (self__,args51365){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args51365)));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251362.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_51361){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(4,done_51361);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["oscillate"], 0));

try{hyperfiddle.electric.impl.yield2._BANG_e = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("odd");

hyperfiddle.electric.impl.yield2._BANG_x = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));

hyperfiddle.electric.impl.yield2.it = hyperfiddle.electric.impl.yield2.yield$((function (x){
if(cljs.core.odd_QMARK_(x)){
return missionary.core.watch(hyperfiddle.electric.impl.yield2._BANG_e);
} else {
return null;
}
}),missionary.core.watch(hyperfiddle.electric.impl.yield2._BANG_x))((function (){
return null;
}),(function (){
return null;
}));

try{var values__10703__auto___51752 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(0),null,(1),null)),(2),null));
var result__10704__auto___51753 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51752);
if(cljs.core.truth_(result__10704__auto___51753)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51752),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51752),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51752);
}catch (e51367){var t__10691__auto___51754 = e51367;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),null,t__10691__auto___51754,null]));
}finally {RCF__done_BANG_();
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_x,cljs.core.inc);

try{var values__10703__auto___51756 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,"odd",null,(1),null)),(2),null));
var result__10704__auto___51757 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51756);
if(cljs.core.truth_(result__10704__auto___51757)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"odd"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51756),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"odd"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51756),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51756);
}catch (e51368){var t__10691__auto___51760 = e51368;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"odd"),null,t__10691__auto___51760,null]));
}finally {RCF__done_BANG_();
}
cljs.core.reset_BANG_(hyperfiddle.electric.impl.yield2._BANG_e,"ODD");

try{var values__10703__auto___51764 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,"ODD",null,(1),null)),(2),null));
var result__10704__auto___51765 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51764);
if(cljs.core.truth_(result__10704__auto___51765)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"ODD"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51764),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"ODD"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51764),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51764);
}catch (e51369){var t__10691__auto___51770 = e51369;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"ODD"),null,t__10691__auto___51770,null]));
}finally {RCF__done_BANG_();
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_x,cljs.core.inc);

try{var values__10703__auto___51771 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(2),null,(1),null)),(2),null));
var result__10704__auto___51772 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51771);
if(cljs.core.truth_(result__10704__auto___51772)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51771),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51771),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51771);
}catch (e51370){var t__10691__auto___51773 = e51370;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(2)),null,t__10691__auto___51773,null]));
}finally {RCF__done_BANG_();
}
return (hyperfiddle.electric.impl.yield2.it.cljs$core$IFn$_invoke$arity$0 ? hyperfiddle.electric.impl.yield2.it.cljs$core$IFn$_invoke$arity$0() : hyperfiddle.electric.impl.yield2.it.call(null));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51363","meta51363",-1299630810,null)], null);
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251362.cljs$lang$type = true);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251362.cljs$lang$ctorStr = "hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251362");

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251362.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251362");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251362.
 */
hyperfiddle.electric.impl.yield2.__GT_t_hyperfiddle$electric$impl$yield251362 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_74_$___GT_t_hyperfiddle$electric$impl$yield251362(meta51363){
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251362(meta51363));
});

}

return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251362(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_74;},new cljs.core.Symbol("hyperfiddle.electric.impl.yield2","generated__hyperfiddle_electric_impl_yield2_74","hyperfiddle.electric.impl.yield2/generated__hyperfiddle_electric_impl_yield2_74",-1152603797,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/yield2.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hyperfiddle.electric.impl.yield2","hyperfiddle.electric.impl.yield2",-393953521,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),74,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_yield2_74","generated__hyperfiddle_electric_impl_yield2_74",-747592877,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_74)?hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_74.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_74));
} else {
}
hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_83 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_83(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2 !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251375 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251375 = (function (meta51376){
this.meta51376 = meta51376;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51377,meta51376__$1){
var self__ = this;
var _51377__$1 = this;
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251375(meta51376__$1));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51377){
var self__ = this;
var _51377__$1 = this;
return self__.meta51376;
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251375.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251375.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__51379 = (arguments.length - (1));
switch (G__51379) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251375.prototype.apply = (function (self__,args51378){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args51378)));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251375.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_51374){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(8,done_51374);
var vec__51371 = (function (){var q__10424__auto__ = hyperfiddle.rcf.queue.queue();
var start__10425__auto__ = hyperfiddle.rcf.time.current_time();
var timeout__10426__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hyperfiddle.rcf._STAR_timeout_STAR_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (x__10427__auto__){
hyperfiddle.rcf.queue.offer_BANG_(q__10424__auto__,x__10427__auto__);

return x__10427__auto__;
}),(function() {
var G__51777 = null;
var G__51777__0 = (function (){
return hyperfiddle.rcf.queue.poll_BANG_.cljs$core$IFn$_invoke$arity$4(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249));
});
var G__51777__2 = (function (n__10428__auto__,cb__10429__auto__){
return hyperfiddle.rcf.queue.poll_n_BANG_(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249),n__10428__auto__,cb__10429__auto__);
});
G__51777 = function(n__10428__auto__,cb__10429__auto__){
switch(arguments.length){
case 0:
return G__51777__0.call(this);
case 2:
return G__51777__2.call(this,n__10428__auto__,cb__10429__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51777.cljs$core$IFn$_invoke$arity$0 = G__51777__0;
G__51777.cljs$core$IFn$_invoke$arity$2 = G__51777__2;
return G__51777;
})()
,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,timeout__10426__auto__)], null);
})();
var RCF__tap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51371,(0),null);
var RCF___PERCENT_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51371,(1),null);
var RCF__set_timeout_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51371,(2),null);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["work skipping"], 0));

try{hyperfiddle.electric.impl.yield2._BANG_e = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("odd");

hyperfiddle.electric.impl.yield2._BANG_x = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));

hyperfiddle.electric.impl.yield2.it = hyperfiddle.electric.impl.yield2.yield$((function (x){
(RCF__tap.cljs$core$IFn$_invoke$arity$1 ? RCF__tap.cljs$core$IFn$_invoke$arity$1(x) : RCF__tap.call(null,x));

if(cljs.core.odd_QMARK_(x)){
return missionary.core.watch(hyperfiddle.electric.impl.yield2._BANG_e);
} else {
return null;
}
}),missionary.core.watch(hyperfiddle.electric.impl.yield2._BANG_x))((function (){
return null;
}),(function (){
return null;
}));

try{var values__10703__auto___51778 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(0),null,(1),null)),(2),null));
var result__10704__auto___51779 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51778);
if(cljs.core.truth_(result__10704__auto___51779)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51778),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51778),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51778);
}catch (e51380){var t__10691__auto___51781 = e51380;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),null,t__10691__auto___51781,null]));
}finally {RCF__done_BANG_();
}
var G__51381 = 1;
var G__51382 = (function (_PERCENT__1){
try{var values__10703__auto___51782 = (new cljs.core.List(null,_PERCENT__1,(new cljs.core.List(null,(0),null,(1),null)),(2),null));
var result__10704__auto___51783 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51782);
if(cljs.core.truth_(result__10704__auto___51783)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51782),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51782),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51782);
}catch (e51383){var t__10691__auto___51784 = e51383;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),(0)),null,t__10691__auto___51784,null]));
}finally {RCF__done_BANG_();
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_x,cljs.core.inc);

try{var values__10703__auto___51785 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,"odd",null,(1),null)),(2),null));
var result__10704__auto___51786 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51785);
if(cljs.core.truth_(result__10704__auto___51786)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"odd"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51785),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"odd"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51785),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51785);
}catch (e51384){var t__10691__auto___51788 = e51384;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"odd"),null,t__10691__auto___51788,null]));
}finally {RCF__done_BANG_();
}
var G__51385 = 1;
var G__51386 = (function (_PERCENT__1__$1){
try{var values__10703__auto___51789 = (new cljs.core.List(null,_PERCENT__1__$1,(new cljs.core.List(null,(1),null,(1),null)),(2),null));
var result__10704__auto___51790 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51789);
if(cljs.core.truth_(result__10704__auto___51790)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51789),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51789),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51789);
}catch (e51387){var t__10691__auto___51791 = e51387;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),(1)),null,t__10691__auto___51791,null]));
}finally {RCF__done_BANG_();
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_x,cljs.core.identity);

try{var values__10703__auto___51792 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,"odd",null,(1),null)),(2),null));
var result__10704__auto___51793 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51792);
if(cljs.core.truth_(result__10704__auto___51793)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"odd"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51792),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"odd"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51792),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51792);
}catch (e51388){var t__10691__auto___51794 = e51388;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"odd"),null,t__10691__auto___51794,null]));
}finally {RCF__done_BANG_();
}
cljs.core.reset_BANG_(hyperfiddle.electric.impl.yield2._BANG_e,"ODD");

try{var values__10703__auto___51795 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,"ODD",null,(1),null)),(2),null));
var result__10704__auto___51796 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51795);
if(cljs.core.truth_(result__10704__auto___51796)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"ODD"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51795),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"ODD"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51795),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51795);
}catch (e51389){var t__10691__auto___51797 = e51389;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"ODD"),null,t__10691__auto___51797,null]));
}finally {RCF__done_BANG_();
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_x,cljs.core.inc);

try{var values__10703__auto___51798 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(2),null,(1),null)),(2),null));
var result__10704__auto___51799 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51798);
if(cljs.core.truth_(result__10704__auto___51799)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51798),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51798),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51798);
}catch (e51390){var t__10691__auto___51800 = e51390;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(2)),null,t__10691__auto___51800,null]));
}finally {RCF__done_BANG_();
}
var G__51391 = 1;
var G__51392 = (function (_PERCENT__1__$2){
try{var values__10703__auto___51801 = (new cljs.core.List(null,_PERCENT__1__$2,(new cljs.core.List(null,(2),null,(1),null)),(2),null));
var result__10704__auto___51802 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51801);
if(cljs.core.truth_(result__10704__auto___51802)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51801),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51801),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51801);
}catch (e51393){var t__10691__auto___51804 = e51393;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),(2)),null,t__10691__auto___51804,null]));
}finally {RCF__done_BANG_();
}
return (hyperfiddle.electric.impl.yield2.it.cljs$core$IFn$_invoke$arity$0 ? hyperfiddle.electric.impl.yield2.it.cljs$core$IFn$_invoke$arity$0() : hyperfiddle.electric.impl.yield2.it.call(null));
});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51391,G__51392) : RCF___PERCENT_.call(null,G__51391,G__51392));
});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51385,G__51386) : RCF___PERCENT_.call(null,G__51385,G__51386));
});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51381,G__51382) : RCF___PERCENT_.call(null,G__51381,G__51382));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51376","meta51376",1119737732,null)], null);
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251375.cljs$lang$type = true);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251375.cljs$lang$ctorStr = "hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251375");

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251375.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251375");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251375.
 */
hyperfiddle.electric.impl.yield2.__GT_t_hyperfiddle$electric$impl$yield251375 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_83_$___GT_t_hyperfiddle$electric$impl$yield251375(meta51376){
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251375(meta51376));
});

}

return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251375(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_83;},new cljs.core.Symbol("hyperfiddle.electric.impl.yield2","generated__hyperfiddle_electric_impl_yield2_83","hyperfiddle.electric.impl.yield2/generated__hyperfiddle_electric_impl_yield2_83",918944858,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/yield2.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hyperfiddle.electric.impl.yield2","hyperfiddle.electric.impl.yield2",-393953521,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),83,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_yield2_83","generated__hyperfiddle_electric_impl_yield2_83",1589769810,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_83)?hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_83.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_83));
} else {
}
hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_93 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_93(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2 !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251398 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251398 = (function (meta51399){
this.meta51399 = meta51399;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51400,meta51399__$1){
var self__ = this;
var _51400__$1 = this;
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251398(meta51399__$1));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51400){
var self__ = this;
var _51400__$1 = this;
return self__.meta51399;
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251398.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251398.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__51402 = (arguments.length - (1));
switch (G__51402) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251398.prototype.apply = (function (self__,args51401){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args51401)));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251398.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_51397){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(6,done_51397);
var vec__51394 = (function (){var q__10424__auto__ = hyperfiddle.rcf.queue.queue();
var start__10425__auto__ = hyperfiddle.rcf.time.current_time();
var timeout__10426__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hyperfiddle.rcf._STAR_timeout_STAR_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (x__10427__auto__){
hyperfiddle.rcf.queue.offer_BANG_(q__10424__auto__,x__10427__auto__);

return x__10427__auto__;
}),(function() {
var G__51807 = null;
var G__51807__0 = (function (){
return hyperfiddle.rcf.queue.poll_BANG_.cljs$core$IFn$_invoke$arity$4(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249));
});
var G__51807__2 = (function (n__10428__auto__,cb__10429__auto__){
return hyperfiddle.rcf.queue.poll_n_BANG_(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249),n__10428__auto__,cb__10429__auto__);
});
G__51807 = function(n__10428__auto__,cb__10429__auto__){
switch(arguments.length){
case 0:
return G__51807__0.call(this);
case 2:
return G__51807__2.call(this,n__10428__auto__,cb__10429__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51807.cljs$core$IFn$_invoke$arity$0 = G__51807__0;
G__51807.cljs$core$IFn$_invoke$arity$2 = G__51807__2;
return G__51807;
})()
,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,timeout__10426__auto__)], null);
})();
var RCF__tap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51394,(0),null);
var RCF___PERCENT_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51394,(1),null);
var RCF__set_timeout_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51394,(2),null);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["work skipping, initially in recovery"], 0));

try{hyperfiddle.electric.impl.yield2._BANG_e = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("odd");

hyperfiddle.electric.impl.yield2._BANG_x = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1));

hyperfiddle.electric.impl.yield2.it = hyperfiddle.electric.impl.yield2.yield$((function (x){
(RCF__tap.cljs$core$IFn$_invoke$arity$1 ? RCF__tap.cljs$core$IFn$_invoke$arity$1(x) : RCF__tap.call(null,x));

if(cljs.core.odd_QMARK_(x)){
return missionary.core.watch(hyperfiddle.electric.impl.yield2._BANG_e);
} else {
return null;
}
}),missionary.core.watch(hyperfiddle.electric.impl.yield2._BANG_x))((function (){
return null;
}),(function (){
return null;
}));

try{var values__10703__auto___51811 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,"odd",null,(1),null)),(2),null));
var result__10704__auto___51812 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51811);
if(cljs.core.truth_(result__10704__auto___51812)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"odd"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51811),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"odd"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51811),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51811);
}catch (e51403){var t__10691__auto___51813 = e51403;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"odd"),null,t__10691__auto___51813,null]));
}finally {RCF__done_BANG_();
}
var G__51404 = 1;
var G__51405 = (function (_PERCENT__1){
try{var values__10703__auto___51814 = (new cljs.core.List(null,_PERCENT__1,(new cljs.core.List(null,(1),null,(1),null)),(2),null));
var result__10704__auto___51815 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51814);
if(cljs.core.truth_(result__10704__auto___51815)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51814),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51814),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51814);
}catch (e51406){var t__10691__auto___51817 = e51406;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),(1)),null,t__10691__auto___51817,null]));
}finally {RCF__done_BANG_();
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_x,cljs.core.identity);

try{var values__10703__auto___51818 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,"odd",null,(1),null)),(2),null));
var result__10704__auto___51819 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51818);
if(cljs.core.truth_(result__10704__auto___51819)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"odd"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51818),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"odd"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51818),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51818);
}catch (e51407){var t__10691__auto___51820 = e51407;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"odd"),null,t__10691__auto___51820,null]));
}finally {RCF__done_BANG_();
}
cljs.core.reset_BANG_(hyperfiddle.electric.impl.yield2._BANG_e,"ODD");

try{var values__10703__auto___51821 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,"ODD",null,(1),null)),(2),null));
var result__10704__auto___51822 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51821);
if(cljs.core.truth_(result__10704__auto___51822)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"ODD"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51821),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"ODD"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51821),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51821);
}catch (e51408){var t__10691__auto___51824 = e51408;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"ODD"),null,t__10691__auto___51824,null]));
}finally {RCF__done_BANG_();
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_x,cljs.core.inc);

try{var values__10703__auto___51825 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(2),null,(1),null)),(2),null));
var result__10704__auto___51826 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51825);
if(cljs.core.truth_(result__10704__auto___51826)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51825),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51825),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51825);
}catch (e51409){var t__10691__auto___51831 = e51409;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(2)),null,t__10691__auto___51831,null]));
}finally {RCF__done_BANG_();
}
var G__51410 = 1;
var G__51411 = (function (_PERCENT__1__$1){
try{var values__10703__auto___51832 = (new cljs.core.List(null,_PERCENT__1__$1,(new cljs.core.List(null,(2),null,(1),null)),(2),null));
var result__10704__auto___51833 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51832);
if(cljs.core.truth_(result__10704__auto___51833)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51832),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51832),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51832);
}catch (e51412){var t__10691__auto___51834 = e51412;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),(2)),null,t__10691__auto___51834,null]));
}finally {RCF__done_BANG_();
}
return (hyperfiddle.electric.impl.yield2.it.cljs$core$IFn$_invoke$arity$0 ? hyperfiddle.electric.impl.yield2.it.cljs$core$IFn$_invoke$arity$0() : hyperfiddle.electric.impl.yield2.it.call(null));
});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51410,G__51411) : RCF___PERCENT_.call(null,G__51410,G__51411));
});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51404,G__51405) : RCF___PERCENT_.call(null,G__51404,G__51405));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51399","meta51399",-1541840677,null)], null);
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251398.cljs$lang$type = true);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251398.cljs$lang$ctorStr = "hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251398");

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251398.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251398");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251398.
 */
hyperfiddle.electric.impl.yield2.__GT_t_hyperfiddle$electric$impl$yield251398 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_93_$___GT_t_hyperfiddle$electric$impl$yield251398(meta51399){
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251398(meta51399));
});

}

return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251398(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_93;},new cljs.core.Symbol("hyperfiddle.electric.impl.yield2","generated__hyperfiddle_electric_impl_yield2_93","hyperfiddle.electric.impl.yield2/generated__hyperfiddle_electric_impl_yield2_93",611683985,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/yield2.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hyperfiddle.electric.impl.yield2","hyperfiddle.electric.impl.yield2",-393953521,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),93,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_yield2_93","generated__hyperfiddle_electric_impl_yield2_93",208767129,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_93)?hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_93.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_93));
} else {
}
hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_102 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_102(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2 !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251417 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251417 = (function (meta51418){
this.meta51418 = meta51418;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51419,meta51418__$1){
var self__ = this;
var _51419__$1 = this;
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251417(meta51418__$1));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51419){
var self__ = this;
var _51419__$1 = this;
return self__.meta51418;
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251417.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251417.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__51421 = (arguments.length - (1));
switch (G__51421) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251417.prototype.apply = (function (self__,args51420){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args51420)));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251417.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_51416){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(5,done_51416);
var vec__51413 = (function (){var q__10424__auto__ = hyperfiddle.rcf.queue.queue();
var start__10425__auto__ = hyperfiddle.rcf.time.current_time();
var timeout__10426__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hyperfiddle.rcf._STAR_timeout_STAR_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (x__10427__auto__){
hyperfiddle.rcf.queue.offer_BANG_(q__10424__auto__,x__10427__auto__);

return x__10427__auto__;
}),(function() {
var G__51837 = null;
var G__51837__0 = (function (){
return hyperfiddle.rcf.queue.poll_BANG_.cljs$core$IFn$_invoke$arity$4(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249));
});
var G__51837__2 = (function (n__10428__auto__,cb__10429__auto__){
return hyperfiddle.rcf.queue.poll_n_BANG_(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249),n__10428__auto__,cb__10429__auto__);
});
G__51837 = function(n__10428__auto__,cb__10429__auto__){
switch(arguments.length){
case 0:
return G__51837__0.call(this);
case 2:
return G__51837__2.call(this,n__10428__auto__,cb__10429__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51837.cljs$core$IFn$_invoke$arity$0 = G__51837__0;
G__51837.cljs$core$IFn$_invoke$arity$2 = G__51837__2;
return G__51837;
})()
,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,timeout__10426__auto__)], null);
})();
var RCF__tap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51413,(0),null);
var RCF___PERCENT_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51413,(1),null);
var RCF__set_timeout_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51413,(2),null);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["work skipping m/cp"], 0));

try{hyperfiddle.electric.impl.yield2._BANG_x = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1));

hyperfiddle.electric.impl.yield2.it = hyperfiddle.electric.impl.yield2.yield$((function (x){
(RCF__tap.cljs$core$IFn$_invoke$arity$1 ? RCF__tap.cljs$core$IFn$_invoke$arity$1(x) : RCF__tap.call(null,x));

if(cljs.core.odd_QMARK_(x)){
return missionary.core.cp_STAR_((function (){var cr51422_block_0 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_102_$_cr51422_block_0(cr51422_state){
try{var cr51422_place_0 = "odd";
(cr51422_state[(0)] = null);

return cr51422_place_0;
}catch (e51424){var cr51422_exception = e51424;
(cr51422_state[(0)] = null);

throw cr51422_exception;
}});
return cloroutine.impl.coroutine((function (){var G__51425 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__51425[(0)] = cr51422_block_0);

return G__51425;
})());
})());
} else {
return null;
}
}),missionary.core.watch(hyperfiddle.electric.impl.yield2._BANG_x))((function (){
return null;
}),(function (){
return null;
}));

try{var values__10703__auto___51838 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,"odd",null,(1),null)),(2),null));
var result__10704__auto___51839 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51838);
if(cljs.core.truth_(result__10704__auto___51839)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"odd"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51838),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"odd"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51838),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51838);
}catch (e51426){var t__10691__auto___51840 = e51426;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"odd"),null,t__10691__auto___51840,null]));
}finally {RCF__done_BANG_();
}
var G__51427 = 1;
var G__51428 = (function (_PERCENT__1){
try{var values__10703__auto___51841 = (new cljs.core.List(null,_PERCENT__1,(new cljs.core.List(null,(1),null,(1),null)),(2),null));
var result__10704__auto___51842 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51841);
if(cljs.core.truth_(result__10704__auto___51842)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51841),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51841),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51841);
}catch (e51429){var t__10691__auto___51843 = e51429;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),(1)),null,t__10691__auto___51843,null]));
}finally {RCF__done_BANG_();
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_x,cljs.core.identity);

try{var values__10703__auto___51844 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,"odd",null,(1),null)),(2),null));
var result__10704__auto___51845 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51844);
if(cljs.core.truth_(result__10704__auto___51845)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"odd"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51844),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"odd"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51844),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51844);
}catch (e51430){var t__10691__auto___51846 = e51430;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),"odd"),null,t__10691__auto___51846,null]));
}finally {RCF__done_BANG_();
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_x,cljs.core.inc);

try{var values__10703__auto___51848 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(2),null,(1),null)),(2),null));
var result__10704__auto___51849 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51848);
if(cljs.core.truth_(result__10704__auto___51849)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51848),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51848),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51848);
}catch (e51431){var t__10691__auto___51852 = e51431;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(2)),null,t__10691__auto___51852,null]));
}finally {RCF__done_BANG_();
}
var G__51432 = 1;
var G__51433 = (function (_PERCENT__1__$1){
try{var values__10703__auto___51853 = (new cljs.core.List(null,_PERCENT__1__$1,(new cljs.core.List(null,(2),null,(1),null)),(2),null));
var result__10704__auto___51854 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51853);
if(cljs.core.truth_(result__10704__auto___51854)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51853),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51853),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51853);
}catch (e51434){var t__10691__auto___51855 = e51434;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),(2)),null,t__10691__auto___51855,null]));
}finally {RCF__done_BANG_();
}
return (hyperfiddle.electric.impl.yield2.it.cljs$core$IFn$_invoke$arity$0 ? hyperfiddle.electric.impl.yield2.it.cljs$core$IFn$_invoke$arity$0() : hyperfiddle.electric.impl.yield2.it.call(null));
});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51432,G__51433) : RCF___PERCENT_.call(null,G__51432,G__51433));
});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51427,G__51428) : RCF___PERCENT_.call(null,G__51427,G__51428));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251417.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51418","meta51418",1687042010,null)], null);
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251417.cljs$lang$type = true);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251417.cljs$lang$ctorStr = "hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251417");

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251417.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251417");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251417.
 */
hyperfiddle.electric.impl.yield2.__GT_t_hyperfiddle$electric$impl$yield251417 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_102_$___GT_t_hyperfiddle$electric$impl$yield251417(meta51418){
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251417(meta51418));
});

}

return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251417(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_102;},new cljs.core.Symbol("hyperfiddle.electric.impl.yield2","generated__hyperfiddle_electric_impl_yield2_102","hyperfiddle.electric.impl.yield2/generated__hyperfiddle_electric_impl_yield2_102",1628395740,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/yield2.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hyperfiddle.electric.impl.yield2","hyperfiddle.electric.impl.yield2",-393953521,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),102,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_yield2_102","generated__hyperfiddle_electric_impl_yield2_102",152264404,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_102)?hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_102.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_102));
} else {
}
hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_109 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_109(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2 !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251439 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251439 = (function (meta51440){
this.meta51440 = meta51440;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51441,meta51440__$1){
var self__ = this;
var _51441__$1 = this;
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251439(meta51440__$1));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51441){
var self__ = this;
var _51441__$1 = this;
return self__.meta51440;
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251439.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251439.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__51443 = (arguments.length - (1));
switch (G__51443) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251439.prototype.apply = (function (self__,args51442){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args51442)));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251439.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_51438){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(7,done_51438);
var vec__51435 = (function (){var q__10424__auto__ = hyperfiddle.rcf.queue.queue();
var start__10425__auto__ = hyperfiddle.rcf.time.current_time();
var timeout__10426__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hyperfiddle.rcf._STAR_timeout_STAR_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (x__10427__auto__){
hyperfiddle.rcf.queue.offer_BANG_(q__10424__auto__,x__10427__auto__);

return x__10427__auto__;
}),(function() {
var G__51857 = null;
var G__51857__0 = (function (){
return hyperfiddle.rcf.queue.poll_BANG_.cljs$core$IFn$_invoke$arity$4(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249));
});
var G__51857__2 = (function (n__10428__auto__,cb__10429__auto__){
return hyperfiddle.rcf.queue.poll_n_BANG_(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249),n__10428__auto__,cb__10429__auto__);
});
G__51857 = function(n__10428__auto__,cb__10429__auto__){
switch(arguments.length){
case 0:
return G__51857__0.call(this);
case 2:
return G__51857__2.call(this,n__10428__auto__,cb__10429__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51857.cljs$core$IFn$_invoke$arity$0 = G__51857__0;
G__51857.cljs$core$IFn$_invoke$arity$2 = G__51857__2;
return G__51857;
})()
,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,timeout__10426__auto__)], null);
})();
var RCF__tap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51435,(0),null);
var RCF___PERCENT_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51435,(1),null);
var RCF__set_timeout_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51435,(2),null);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["recovery flows are cleaned up"], 0));

try{hyperfiddle.electric.impl.yield2._BANG_x = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));

var __GT_recover_51858 = missionary.core.observe((function (_BANG_){
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : _BANG_.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));

return (function (){
return (RCF__tap.cljs$core$IFn$_invoke$arity$1 ? RCF__tap.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"unmounted","unmounted",-84871913)) : RCF__tap.call(null,new cljs.core.Keyword(null,"unmounted","unmounted",-84871913)));
});
}));
hyperfiddle.electric.impl.yield2.it = hyperfiddle.electric.impl.yield2.yield$((function (x){
if((x > (0))){
return __GT_recover_51858;
} else {
return null;
}
}),missionary.core.watch(hyperfiddle.electric.impl.yield2._BANG_x))((function (){
return null;
}),(function (){
return (RCF__tap.cljs$core$IFn$_invoke$arity$1 ? RCF__tap.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"terminated","terminated",-1954638860)) : RCF__tap.call(null,new cljs.core.Keyword(null,"terminated","terminated",-1954638860)));
}));

try{var values__10703__auto___51859 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(0),null,(1),null)),(2),null));
var result__10704__auto___51860 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51859);
if(cljs.core.truth_(result__10704__auto___51860)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51859),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51859),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51859);
}catch (e51444){var t__10691__auto___51861 = e51444;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),null,t__10691__auto___51861,null]));
}finally {RCF__done_BANG_();
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_x,cljs.core.inc);

try{var values__10703__auto___51862 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,new cljs.core.Keyword(null,"init","init",-1875481434),null,(1),null)),(2),null));
var result__10704__auto___51863 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51862);
if(cljs.core.truth_(result__10704__auto___51863)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Keyword(null,"init","init",-1875481434)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51862),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Keyword(null,"init","init",-1875481434)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51862),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51862);
}catch (e51445){var t__10691__auto___51864 = e51445;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Keyword(null,"init","init",-1875481434)),null,t__10691__auto___51864,null]));
}finally {RCF__done_BANG_();
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_x,cljs.core.inc);

try{var values__10703__auto___51865 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,new cljs.core.Keyword(null,"init","init",-1875481434),null,(1),null)),(2),null));
var result__10704__auto___51866 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51865);
if(cljs.core.truth_(result__10704__auto___51866)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Keyword(null,"init","init",-1875481434)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51865),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Keyword(null,"init","init",-1875481434)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51865),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51865);
}catch (e51446){var t__10691__auto___51869 = e51446;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Keyword(null,"init","init",-1875481434)),null,t__10691__auto___51869,null]));
}finally {RCF__done_BANG_();
}
var G__51447 = 1;
var G__51448 = (function (_PERCENT__1){
try{var values__10703__auto___51870 = (new cljs.core.List(null,_PERCENT__1,(new cljs.core.List(null,new cljs.core.Keyword(null,"unmounted","unmounted",-84871913),null,(1),null)),(2),null));
var result__10704__auto___51871 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51870);
if(cljs.core.truth_(result__10704__auto___51871)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"unmounted","unmounted",-84871913)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51870),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"unmounted","unmounted",-84871913)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51870),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51870);
}catch (e51449){var t__10691__auto___51873 = e51449;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"unmounted","unmounted",-84871913)),null,t__10691__auto___51873,null]));
}finally {RCF__done_BANG_();
}
(hyperfiddle.electric.impl.yield2.it.cljs$core$IFn$_invoke$arity$0 ? hyperfiddle.electric.impl.yield2.it.cljs$core$IFn$_invoke$arity$0() : hyperfiddle.electric.impl.yield2.it.call(null));

try{try{cljs.core.deref(hyperfiddle.electric.impl.yield2.it);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),new cljs.core.Keyword(null,"actual","actual",107306363),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}catch (e51451){if((e51451 instanceof missionary.Cancelled)){
var e__10624__auto___51875 = e51451;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),new cljs.core.Keyword(null,"actual","actual",107306363),e__10624__auto___51875,new cljs.core.Keyword(null,"message","message",-406056002),null], null));

} else {
throw e51451;

}
}}catch (e51450){var t__10691__auto___51876 = e51450;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),null,t__10691__auto___51876,null]));
}finally {RCF__done_BANG_();
}
var G__51452 = 1;
var G__51453 = (function (_PERCENT__1__$1){
try{var values__10703__auto___51877 = (new cljs.core.List(null,_PERCENT__1__$1,(new cljs.core.List(null,new cljs.core.Keyword(null,"unmounted","unmounted",-84871913),null,(1),null)),(2),null));
var result__10704__auto___51878 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51877);
if(cljs.core.truth_(result__10704__auto___51878)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"unmounted","unmounted",-84871913)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51877),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"unmounted","unmounted",-84871913)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51877),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51877);
}catch (e51454){var t__10691__auto___51879 = e51454;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"unmounted","unmounted",-84871913)),null,t__10691__auto___51879,null]));
}finally {RCF__done_BANG_();
}
var G__51455 = 1;
var G__51456 = (function (_PERCENT__1__$2){
try{var values__10703__auto__ = (new cljs.core.List(null,_PERCENT__1__$2,(new cljs.core.List(null,new cljs.core.Keyword(null,"terminated","terminated",-1954638860),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e51457){var t__10691__auto__ = e51457;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51455,G__51456) : RCF___PERCENT_.call(null,G__51455,G__51456));
});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51452,G__51453) : RCF___PERCENT_.call(null,G__51452,G__51453));
});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51447,G__51448) : RCF___PERCENT_.call(null,G__51447,G__51448));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51440","meta51440",-1183998424,null)], null);
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251439.cljs$lang$type = true);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251439.cljs$lang$ctorStr = "hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251439");

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251439.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251439");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251439.
 */
hyperfiddle.electric.impl.yield2.__GT_t_hyperfiddle$electric$impl$yield251439 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_109_$___GT_t_hyperfiddle$electric$impl$yield251439(meta51440){
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251439(meta51440));
});

}

return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251439(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_109;},new cljs.core.Symbol("hyperfiddle.electric.impl.yield2","generated__hyperfiddle_electric_impl_yield2_109","hyperfiddle.electric.impl.yield2/generated__hyperfiddle_electric_impl_yield2_109",74881940,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/yield2.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hyperfiddle.electric.impl.yield2","hyperfiddle.electric.impl.yield2",-393953521,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),109,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_yield2_109","generated__hyperfiddle_electric_impl_yield2_109",745705868,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_109)?hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_109.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_109));
} else {
}
hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_117 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_117(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2 !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251462 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251462 = (function (meta51463){
this.meta51463 = meta51463;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51464,meta51463__$1){
var self__ = this;
var _51464__$1 = this;
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251462(meta51463__$1));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51464){
var self__ = this;
var _51464__$1 = this;
return self__.meta51463;
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251462.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251462.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__51466 = (arguments.length - (1));
switch (G__51466) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251462.prototype.apply = (function (self__,args51465){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args51465)));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251462.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_51461){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(2,done_51461);
var vec__51458 = (function (){var q__10424__auto__ = hyperfiddle.rcf.queue.queue();
var start__10425__auto__ = hyperfiddle.rcf.time.current_time();
var timeout__10426__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hyperfiddle.rcf._STAR_timeout_STAR_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (x__10427__auto__){
hyperfiddle.rcf.queue.offer_BANG_(q__10424__auto__,x__10427__auto__);

return x__10427__auto__;
}),(function() {
var G__51881 = null;
var G__51881__0 = (function (){
return hyperfiddle.rcf.queue.poll_BANG_.cljs$core$IFn$_invoke$arity$4(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249));
});
var G__51881__2 = (function (n__10428__auto__,cb__10429__auto__){
return hyperfiddle.rcf.queue.poll_n_BANG_(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249),n__10428__auto__,cb__10429__auto__);
});
G__51881 = function(n__10428__auto__,cb__10429__auto__){
switch(arguments.length){
case 0:
return G__51881__0.call(this);
case 2:
return G__51881__2.call(this,n__10428__auto__,cb__10429__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51881.cljs$core$IFn$_invoke$arity$0 = G__51881__0;
G__51881.cljs$core$IFn$_invoke$arity$2 = G__51881__2;
return G__51881;
})()
,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,timeout__10426__auto__)], null);
})();
var RCF__tap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51458,(0),null);
var RCF___PERCENT_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51458,(1),null);
var RCF__set_timeout_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51458,(2),null);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["an immediately ready input works"], 0));

try{hyperfiddle.electric.impl.yield2.it = hyperfiddle.electric.impl.yield2.yield$((function (x){
if((x > (0))){
return missionary.core.cp_STAR_((function (){var cr51467_block_0 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_117_$_cr51467_block_0(cr51467_state){
try{var cr51467_place_0 = new cljs.core.Keyword(null,"recover","recover",849894427);
(cr51467_state[(0)] = null);

return cr51467_place_0;
}catch (e51469){var cr51467_exception = e51469;
(cr51467_state[(0)] = null);

throw cr51467_exception;
}});
return cloroutine.impl.coroutine((function (){var G__51470 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__51470[(0)] = cr51467_block_0);

return G__51470;
})());
})());
} else {
return null;
}
}),missionary.core.seed(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null)))((function (){
return null;
}),(function (){
return (RCF__tap.cljs$core$IFn$_invoke$arity$1 ? RCF__tap.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"terminated","terminated",-1954638860)) : RCF__tap.call(null,new cljs.core.Keyword(null,"terminated","terminated",-1954638860)));
}));

try{var values__10703__auto___51882 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,new cljs.core.Keyword(null,"recover","recover",849894427),null,(1),null)),(2),null));
var result__10704__auto___51883 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51882);
if(cljs.core.truth_(result__10704__auto___51883)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Keyword(null,"recover","recover",849894427)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51882),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Keyword(null,"recover","recover",849894427)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51882),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51882);
}catch (e51471){var t__10691__auto___51884 = e51471;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Keyword(null,"recover","recover",849894427)),null,t__10691__auto___51884,null]));
}finally {RCF__done_BANG_();
}
(hyperfiddle.electric.impl.yield2.it.cljs$core$IFn$_invoke$arity$0 ? hyperfiddle.electric.impl.yield2.it.cljs$core$IFn$_invoke$arity$0() : hyperfiddle.electric.impl.yield2.it.call(null));

var G__51472 = 1;
var G__51473 = (function (_PERCENT__1){
try{var values__10703__auto__ = (new cljs.core.List(null,_PERCENT__1,(new cljs.core.List(null,new cljs.core.Keyword(null,"terminated","terminated",-1954638860),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e51474){var t__10691__auto__ = e51474;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51472,G__51473) : RCF___PERCENT_.call(null,G__51472,G__51473));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251462.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51463","meta51463",463869014,null)], null);
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251462.cljs$lang$type = true);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251462.cljs$lang$ctorStr = "hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251462");

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251462.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251462");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251462.
 */
hyperfiddle.electric.impl.yield2.__GT_t_hyperfiddle$electric$impl$yield251462 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_117_$___GT_t_hyperfiddle$electric$impl$yield251462(meta51463){
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251462(meta51463));
});

}

return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251462(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_117;},new cljs.core.Symbol("hyperfiddle.electric.impl.yield2","generated__hyperfiddle_electric_impl_yield2_117","hyperfiddle.electric.impl.yield2/generated__hyperfiddle_electric_impl_yield2_117",-1206475770,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/yield2.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hyperfiddle.electric.impl.yield2","hyperfiddle.electric.impl.yield2",-393953521,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),117,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_yield2_117","generated__hyperfiddle_electric_impl_yield2_117",1343406078,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_117)?hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_117.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_117));
} else {
}
hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_121 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_121(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2 !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251479 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251479 = (function (meta51480){
this.meta51480 = meta51480;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51481,meta51480__$1){
var self__ = this;
var _51481__$1 = this;
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251479(meta51480__$1));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51481){
var self__ = this;
var _51481__$1 = this;
return self__.meta51480;
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251479.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251479.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__51483 = (arguments.length - (1));
switch (G__51483) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251479.prototype.apply = (function (self__,args51482){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args51482)));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251479.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_51478){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(2,done_51478);
var vec__51475 = (function (){var q__10424__auto__ = hyperfiddle.rcf.queue.queue();
var start__10425__auto__ = hyperfiddle.rcf.time.current_time();
var timeout__10426__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hyperfiddle.rcf._STAR_timeout_STAR_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (x__10427__auto__){
hyperfiddle.rcf.queue.offer_BANG_(q__10424__auto__,x__10427__auto__);

return x__10427__auto__;
}),(function() {
var G__51886 = null;
var G__51886__0 = (function (){
return hyperfiddle.rcf.queue.poll_BANG_.cljs$core$IFn$_invoke$arity$4(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249));
});
var G__51886__2 = (function (n__10428__auto__,cb__10429__auto__){
return hyperfiddle.rcf.queue.poll_n_BANG_(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249),n__10428__auto__,cb__10429__auto__);
});
G__51886 = function(n__10428__auto__,cb__10429__auto__){
switch(arguments.length){
case 0:
return G__51886__0.call(this);
case 2:
return G__51886__2.call(this,n__10428__auto__,cb__10429__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51886.cljs$core$IFn$_invoke$arity$0 = G__51886__0;
G__51886.cljs$core$IFn$_invoke$arity$2 = G__51886__2;
return G__51886;
})()
,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,timeout__10426__auto__)], null);
})();
var RCF__tap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51475,(0),null);
var RCF___PERCENT_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51475,(1),null);
var RCF__set_timeout_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51475,(2),null);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["an immediately ready recovery works"], 0));

try{hyperfiddle.electric.impl.yield2.it = hyperfiddle.electric.impl.yield2.yield$((function (_){
return missionary.core.seed(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null));
}),missionary.core.cp_STAR_((function (){var cr51484_block_0 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_121_$_cr51484_block_0(cr51484_state){
try{var cr51484_place_0 = new cljs.core.Keyword(null,"hi","hi",-1821422114);
(cr51484_state[(0)] = null);

return cr51484_place_0;
}catch (e51486){var cr51484_exception = e51486;
(cr51484_state[(0)] = null);

throw cr51484_exception;
}});
return cloroutine.impl.coroutine((function (){var G__51487 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__51487[(0)] = cr51484_block_0);

return G__51487;
})());
})()))((function (){
return null;
}),(function (){
return (RCF__tap.cljs$core$IFn$_invoke$arity$1 ? RCF__tap.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"terminated","terminated",-1954638860)) : RCF__tap.call(null,new cljs.core.Keyword(null,"terminated","terminated",-1954638860)));
}));

try{var values__10703__auto___51888 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(2),null,(1),null)),(2),null));
var result__10704__auto___51889 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51888);
if(cljs.core.truth_(result__10704__auto___51889)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51888),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51888),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51888);
}catch (e51488){var t__10691__auto___51890 = e51488;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(2)),null,t__10691__auto___51890,null]));
}finally {RCF__done_BANG_();
}
(hyperfiddle.electric.impl.yield2.it.cljs$core$IFn$_invoke$arity$0 ? hyperfiddle.electric.impl.yield2.it.cljs$core$IFn$_invoke$arity$0() : hyperfiddle.electric.impl.yield2.it.call(null));

var G__51489 = 1;
var G__51490 = (function (_PERCENT__1){
try{var values__10703__auto__ = (new cljs.core.List(null,_PERCENT__1,(new cljs.core.List(null,new cljs.core.Keyword(null,"terminated","terminated",-1954638860),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e51491){var t__10691__auto__ = e51491;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51489,G__51490) : RCF___PERCENT_.call(null,G__51489,G__51490));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51480","meta51480",-1383146677,null)], null);
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251479.cljs$lang$type = true);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251479.cljs$lang$ctorStr = "hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251479");

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251479.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251479");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251479.
 */
hyperfiddle.electric.impl.yield2.__GT_t_hyperfiddle$electric$impl$yield251479 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_121_$___GT_t_hyperfiddle$electric$impl$yield251479(meta51480){
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251479(meta51480));
});

}

return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251479(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_121;},new cljs.core.Symbol("hyperfiddle.electric.impl.yield2","generated__hyperfiddle_electric_impl_yield2_121","hyperfiddle.electric.impl.yield2/generated__hyperfiddle_electric_impl_yield2_121",466053539,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/yield2.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hyperfiddle.electric.impl.yield2","hyperfiddle.electric.impl.yield2",-393953521,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),121,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_yield2_121","generated__hyperfiddle_electric_impl_yield2_121",1136882619,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_121)?hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_121.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_121));
} else {
}
hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_125 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_125(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2 !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251497 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251497 = (function (meta51498){
this.meta51498 = meta51498;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51499,meta51498__$1){
var self__ = this;
var _51499__$1 = this;
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251497(meta51498__$1));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51499){
var self__ = this;
var _51499__$1 = this;
return self__.meta51498;
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251497.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251497.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__51501 = (arguments.length - (1));
switch (G__51501) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251497.prototype.apply = (function (self__,args51500){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args51500)));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251497.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_51496){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(5,done_51496);
var vec__51493 = (function (){var q__10424__auto__ = hyperfiddle.rcf.queue.queue();
var start__10425__auto__ = hyperfiddle.rcf.time.current_time();
var timeout__10426__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hyperfiddle.rcf._STAR_timeout_STAR_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (x__10427__auto__){
hyperfiddle.rcf.queue.offer_BANG_(q__10424__auto__,x__10427__auto__);

return x__10427__auto__;
}),(function() {
var G__51892 = null;
var G__51892__0 = (function (){
return hyperfiddle.rcf.queue.poll_BANG_.cljs$core$IFn$_invoke$arity$4(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249));
});
var G__51892__2 = (function (n__10428__auto__,cb__10429__auto__){
return hyperfiddle.rcf.queue.poll_n_BANG_(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249),n__10428__auto__,cb__10429__auto__);
});
G__51892 = function(n__10428__auto__,cb__10429__auto__){
switch(arguments.length){
case 0:
return G__51892__0.call(this);
case 2:
return G__51892__2.call(this,n__10428__auto__,cb__10429__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51892.cljs$core$IFn$_invoke$arity$0 = G__51892__0;
G__51892.cljs$core$IFn$_invoke$arity$2 = G__51892__2;
return G__51892;
})()
,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,timeout__10426__auto__)], null);
})();
var RCF__tap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51493,(0),null);
var RCF___PERCENT_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51493,(1),null);
var RCF__set_timeout_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51493,(2),null);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["input throws"], 0));

try{hyperfiddle.electric.impl.yield2._BANG_x = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));

hyperfiddle.electric.impl.yield2.it = hyperfiddle.electric.impl.yield2.yield$(cljs.core.constantly(null),missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic((function (p1__51492_SHARP_){
if((p1__51492_SHARP_ > (0))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("pos",cljs.core.PersistentArrayMap.EMPTY);
} else {
return p1__51492_SHARP_;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missionary.core.watch(hyperfiddle.electric.impl.yield2._BANG_x)], 0)))((function (){
return (RCF__tap.cljs$core$IFn$_invoke$arity$1 ? RCF__tap.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"notified","notified",-1434696295)) : RCF__tap.call(null,new cljs.core.Keyword(null,"notified","notified",-1434696295)));
}),(function (){
return (RCF__tap.cljs$core$IFn$_invoke$arity$1 ? RCF__tap.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"terminated","terminated",-1954638860)) : RCF__tap.call(null,new cljs.core.Keyword(null,"terminated","terminated",-1954638860)));
}));

var G__51502 = 1;
var G__51503 = (function (_PERCENT__1){
try{var values__10703__auto___51893 = (new cljs.core.List(null,_PERCENT__1,(new cljs.core.List(null,new cljs.core.Keyword(null,"notified","notified",-1434696295),null,(1),null)),(2),null));
var result__10704__auto___51894 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51893);
if(cljs.core.truth_(result__10704__auto___51894)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51893),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51893),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51893);
}catch (e51504){var t__10691__auto___51895 = e51504;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"notified","notified",-1434696295)),null,t__10691__auto___51895,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___51896 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(0),null,(1),null)),(2),null));
var result__10704__auto___51897 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51896);
if(cljs.core.truth_(result__10704__auto___51897)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51896),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51896),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51896);
}catch (e51505){var t__10691__auto___51898 = e51505;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),null,t__10691__auto___51898,null]));
}finally {RCF__done_BANG_();
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_x,cljs.core.inc);

var G__51506 = 1;
var G__51507 = (function (_PERCENT__1__$1){
try{var values__10703__auto___51899 = (new cljs.core.List(null,_PERCENT__1__$1,(new cljs.core.List(null,new cljs.core.Keyword(null,"notified","notified",-1434696295),null,(1),null)),(2),null));
var result__10704__auto___51900 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51899);
if(cljs.core.truth_(result__10704__auto___51900)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51899),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51899),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51899);
}catch (e51508){var t__10691__auto___51901 = e51508;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"notified","notified",-1434696295)),null,t__10691__auto___51901,null]));
}finally {RCF__done_BANG_();
}
try{try{cljs.core.deref(hyperfiddle.electric.impl.yield2.it);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null)),new cljs.core.Keyword(null,"actual","actual",107306363),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}catch (e51510){if((e51510 instanceof cljs.core.ExceptionInfo)){
var e__10624__auto___51902 = e51510;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null)),new cljs.core.Keyword(null,"actual","actual",107306363),e__10624__auto___51902,new cljs.core.Keyword(null,"message","message",-406056002),null], null));

} else {
throw e51510;

}
}}catch (e51509){var t__10691__auto___51903 = e51509;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null)),null,t__10691__auto___51903,null]));
}finally {RCF__done_BANG_();
}
var G__51511 = 1;
var G__51512 = (function (_PERCENT__1__$2){
try{var values__10703__auto__ = (new cljs.core.List(null,_PERCENT__1__$2,(new cljs.core.List(null,new cljs.core.Keyword(null,"terminated","terminated",-1954638860),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e51513){var t__10691__auto__ = e51513;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51511,G__51512) : RCF___PERCENT_.call(null,G__51511,G__51512));
});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51506,G__51507) : RCF___PERCENT_.call(null,G__51506,G__51507));
});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51502,G__51503) : RCF___PERCENT_.call(null,G__51502,G__51503));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51498","meta51498",503020595,null)], null);
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251497.cljs$lang$type = true);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251497.cljs$lang$ctorStr = "hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251497");

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251497.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251497");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251497.
 */
hyperfiddle.electric.impl.yield2.__GT_t_hyperfiddle$electric$impl$yield251497 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_125_$___GT_t_hyperfiddle$electric$impl$yield251497(meta51498){
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251497(meta51498));
});

}

return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251497(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_125;},new cljs.core.Symbol("hyperfiddle.electric.impl.yield2","generated__hyperfiddle_electric_impl_yield2_125","hyperfiddle.electric.impl.yield2/generated__hyperfiddle_electric_impl_yield2_125",-249956188,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/yield2.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hyperfiddle.electric.impl.yield2","hyperfiddle.electric.impl.yield2",-393953521,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),125,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_yield2_125","generated__hyperfiddle_electric_impl_yield2_125",-652348740,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_125)?hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_125.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_125));
} else {
}
hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_131 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_131(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2 !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251518 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251518 = (function (meta51519){
this.meta51519 = meta51519;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51520,meta51519__$1){
var self__ = this;
var _51520__$1 = this;
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251518(meta51519__$1));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51520){
var self__ = this;
var _51520__$1 = this;
return self__.meta51519;
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251518.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251518.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__51522 = (arguments.length - (1));
switch (G__51522) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251518.prototype.apply = (function (self__,args51521){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args51521)));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251518.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_51517){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(5,done_51517);
var vec__51514 = (function (){var q__10424__auto__ = hyperfiddle.rcf.queue.queue();
var start__10425__auto__ = hyperfiddle.rcf.time.current_time();
var timeout__10426__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hyperfiddle.rcf._STAR_timeout_STAR_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (x__10427__auto__){
hyperfiddle.rcf.queue.offer_BANG_(q__10424__auto__,x__10427__auto__);

return x__10427__auto__;
}),(function() {
var G__51907 = null;
var G__51907__0 = (function (){
return hyperfiddle.rcf.queue.poll_BANG_.cljs$core$IFn$_invoke$arity$4(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249));
});
var G__51907__2 = (function (n__10428__auto__,cb__10429__auto__){
return hyperfiddle.rcf.queue.poll_n_BANG_(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249),n__10428__auto__,cb__10429__auto__);
});
G__51907 = function(n__10428__auto__,cb__10429__auto__){
switch(arguments.length){
case 0:
return G__51907__0.call(this);
case 2:
return G__51907__2.call(this,n__10428__auto__,cb__10429__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51907.cljs$core$IFn$_invoke$arity$0 = G__51907__0;
G__51907.cljs$core$IFn$_invoke$arity$2 = G__51907__2;
return G__51907;
})()
,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,timeout__10426__auto__)], null);
})();
var RCF__tap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51514,(0),null);
var RCF___PERCENT_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51514,(1),null);
var RCF__set_timeout_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51514,(2),null);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["recovery throws"], 0));

try{hyperfiddle.electric.impl.yield2._BANG_x = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));

hyperfiddle.electric.impl.yield2.it = hyperfiddle.electric.impl.yield2.yield$((function (x){
if((x > (0))){
return missionary.core.cp_STAR_((function (){var cr51523_block_0 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_131_$_cr51523_block_0(cr51523_state){
try{var cr51523_place_0 = cljs.core.ex_info;
var cr51523_place_1 = "boom";
var cr51523_place_2 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr51523_place_3 = (function (){var G__51530 = cr51523_place_1;
var G__51531 = cr51523_place_2;
var fexpr__51529 = cr51523_place_0;
return (fexpr__51529.cljs$core$IFn$_invoke$arity$2 ? fexpr__51529.cljs$core$IFn$_invoke$arity$2(G__51530,G__51531) : fexpr__51529.call(null,G__51530,G__51531));
})();
var cr51523_place_4 = (function(){throw cr51523_place_3})();
(cr51523_state[(0)] = null);

return null;
}catch (e51528){var cr51523_exception = e51528;
(cr51523_state[(0)] = null);

throw cr51523_exception;
}});
return cloroutine.impl.coroutine((function (){var G__51532 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__51532[(0)] = cr51523_block_0);

return G__51532;
})());
})());
} else {
return null;
}
}),missionary.core.watch(hyperfiddle.electric.impl.yield2._BANG_x))((function (){
return (RCF__tap.cljs$core$IFn$_invoke$arity$1 ? RCF__tap.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"notified","notified",-1434696295)) : RCF__tap.call(null,new cljs.core.Keyword(null,"notified","notified",-1434696295)));
}),(function (){
return (RCF__tap.cljs$core$IFn$_invoke$arity$1 ? RCF__tap.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"terminated","terminated",-1954638860)) : RCF__tap.call(null,new cljs.core.Keyword(null,"terminated","terminated",-1954638860)));
}));

var G__51533 = 1;
var G__51534 = (function (_PERCENT__1){
try{var values__10703__auto___51908 = (new cljs.core.List(null,_PERCENT__1,(new cljs.core.List(null,new cljs.core.Keyword(null,"notified","notified",-1434696295),null,(1),null)),(2),null));
var result__10704__auto___51909 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51908);
if(cljs.core.truth_(result__10704__auto___51909)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51908),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51908),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51908);
}catch (e51535){var t__10691__auto___51910 = e51535;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"notified","notified",-1434696295)),null,t__10691__auto___51910,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___51911 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(0),null,(1),null)),(2),null));
var result__10704__auto___51912 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51911);
if(cljs.core.truth_(result__10704__auto___51912)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51911),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51911),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51911);
}catch (e51536){var t__10691__auto___51913 = e51536;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),null,t__10691__auto___51913,null]));
}finally {RCF__done_BANG_();
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_x,cljs.core.inc);

var G__51537 = 1;
var G__51538 = (function (_PERCENT__1__$1){
try{var values__10703__auto___51914 = (new cljs.core.List(null,_PERCENT__1__$1,(new cljs.core.List(null,new cljs.core.Keyword(null,"notified","notified",-1434696295),null,(1),null)),(2),null));
var result__10704__auto___51915 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51914);
if(cljs.core.truth_(result__10704__auto___51915)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51914),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51914),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51914);
}catch (e51539){var t__10691__auto___51916 = e51539;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"notified","notified",-1434696295)),null,t__10691__auto___51916,null]));
}finally {RCF__done_BANG_();
}
try{try{cljs.core.deref(hyperfiddle.electric.impl.yield2.it);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null)),new cljs.core.Keyword(null,"actual","actual",107306363),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}catch (e51541){if((e51541 instanceof cljs.core.ExceptionInfo)){
var e__10624__auto___51919 = e51541;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null)),new cljs.core.Keyword(null,"actual","actual",107306363),e__10624__auto___51919,new cljs.core.Keyword(null,"message","message",-406056002),null], null));

} else {
throw e51541;

}
}}catch (e51540){var t__10691__auto___51920 = e51540;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null)),null,t__10691__auto___51920,null]));
}finally {RCF__done_BANG_();
}
var G__51542 = 1;
var G__51543 = (function (_PERCENT__1__$2){
try{var values__10703__auto__ = (new cljs.core.List(null,_PERCENT__1__$2,(new cljs.core.List(null,new cljs.core.Keyword(null,"terminated","terminated",-1954638860),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e51544){var t__10691__auto__ = e51544;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51542,G__51543) : RCF___PERCENT_.call(null,G__51542,G__51543));
});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51537,G__51538) : RCF___PERCENT_.call(null,G__51537,G__51538));
});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51533,G__51534) : RCF___PERCENT_.call(null,G__51533,G__51534));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51519","meta51519",-994219608,null)], null);
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251518.cljs$lang$type = true);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251518.cljs$lang$ctorStr = "hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251518");

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251518.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251518");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251518.
 */
hyperfiddle.electric.impl.yield2.__GT_t_hyperfiddle$electric$impl$yield251518 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_131_$___GT_t_hyperfiddle$electric$impl$yield251518(meta51519){
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251518(meta51519));
});

}

return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251518(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_131;},new cljs.core.Symbol("hyperfiddle.electric.impl.yield2","generated__hyperfiddle_electric_impl_yield2_131","hyperfiddle.electric.impl.yield2/generated__hyperfiddle_electric_impl_yield2_131",1719174685,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/yield2.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hyperfiddle.electric.impl.yield2","hyperfiddle.electric.impl.yield2",-393953521,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),131,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_yield2_131","generated__hyperfiddle_electric_impl_yield2_131",-1904964123,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_131)?hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_131.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_131));
} else {
}
hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_137 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_137(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2 !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251549 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251549 = (function (meta51550){
this.meta51550 = meta51550;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51551,meta51550__$1){
var self__ = this;
var _51551__$1 = this;
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251549(meta51550__$1));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51551){
var self__ = this;
var _51551__$1 = this;
return self__.meta51550;
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251549.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251549.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__51553 = (arguments.length - (1));
switch (G__51553) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251549.prototype.apply = (function (self__,args51552){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args51552)));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251549.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_51548){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(6,done_51548);
var vec__51545 = (function (){var q__10424__auto__ = hyperfiddle.rcf.queue.queue();
var start__10425__auto__ = hyperfiddle.rcf.time.current_time();
var timeout__10426__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hyperfiddle.rcf._STAR_timeout_STAR_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (x__10427__auto__){
hyperfiddle.rcf.queue.offer_BANG_(q__10424__auto__,x__10427__auto__);

return x__10427__auto__;
}),(function() {
var G__51924 = null;
var G__51924__0 = (function (){
return hyperfiddle.rcf.queue.poll_BANG_.cljs$core$IFn$_invoke$arity$4(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249));
});
var G__51924__2 = (function (n__10428__auto__,cb__10429__auto__){
return hyperfiddle.rcf.queue.poll_n_BANG_(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249),n__10428__auto__,cb__10429__auto__);
});
G__51924 = function(n__10428__auto__,cb__10429__auto__){
switch(arguments.length){
case 0:
return G__51924__0.call(this);
case 2:
return G__51924__2.call(this,n__10428__auto__,cb__10429__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51924.cljs$core$IFn$_invoke$arity$0 = G__51924__0;
G__51924.cljs$core$IFn$_invoke$arity$2 = G__51924__2;
return G__51924;
})()
,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,timeout__10426__auto__)], null);
})();
var RCF__tap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51545,(0),null);
var RCF___PERCENT_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51545,(1),null);
var RCF__set_timeout_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51545,(2),null);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["recovery unmounts when we switch back to input"], 0));

try{hyperfiddle.electric.impl.yield2._BANG_x = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));

var __GT_recover_51925 = missionary.core.observe((function (_BANG_){
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : _BANG_.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));

return (function (){
return (RCF__tap.cljs$core$IFn$_invoke$arity$1 ? RCF__tap.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"unmounted","unmounted",-84871913)) : RCF__tap.call(null,new cljs.core.Keyword(null,"unmounted","unmounted",-84871913)));
});
}));
hyperfiddle.electric.impl.yield2.it = hyperfiddle.electric.impl.yield2.yield$((function (x){
if(cljs.core.odd_QMARK_(x)){
return __GT_recover_51925;
} else {
return null;
}
}),missionary.core.watch(hyperfiddle.electric.impl.yield2._BANG_x))((function (){
return null;
}),(function (){
return (RCF__tap.cljs$core$IFn$_invoke$arity$1 ? RCF__tap.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"terminated","terminated",-1954638860)) : RCF__tap.call(null,new cljs.core.Keyword(null,"terminated","terminated",-1954638860)));
}));

try{var values__10703__auto___51926 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(0),null,(1),null)),(2),null));
var result__10704__auto___51927 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51926);
if(cljs.core.truth_(result__10704__auto___51927)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51926),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51926),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51926);
}catch (e51554){var t__10691__auto___51930 = e51554;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),null,t__10691__auto___51930,null]));
}finally {RCF__done_BANG_();
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_x,cljs.core.inc);

try{var values__10703__auto___51931 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,new cljs.core.Keyword(null,"init","init",-1875481434),null,(1),null)),(2),null));
var result__10704__auto___51932 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51931);
if(cljs.core.truth_(result__10704__auto___51932)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Keyword(null,"init","init",-1875481434)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51931),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Keyword(null,"init","init",-1875481434)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51931),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51931);
}catch (e51555){var t__10691__auto___51933 = e51555;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Keyword(null,"init","init",-1875481434)),null,t__10691__auto___51933,null]));
}finally {RCF__done_BANG_();
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_x,cljs.core.inc);

try{var values__10703__auto___51934 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(2),null,(1),null)),(2),null));
var result__10704__auto___51935 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51934);
if(cljs.core.truth_(result__10704__auto___51935)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51934),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51934),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51934);
}catch (e51556){var t__10691__auto___51936 = e51556;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(2)),null,t__10691__auto___51936,null]));
}finally {RCF__done_BANG_();
}
var G__51557 = 1;
var G__51558 = (function (_PERCENT__1){
try{var values__10703__auto___51937 = (new cljs.core.List(null,_PERCENT__1,(new cljs.core.List(null,new cljs.core.Keyword(null,"unmounted","unmounted",-84871913),null,(1),null)),(2),null));
var result__10704__auto___51938 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51937);
if(cljs.core.truth_(result__10704__auto___51938)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"unmounted","unmounted",-84871913)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51937),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"unmounted","unmounted",-84871913)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51937),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51937);
}catch (e51559){var t__10691__auto___51940 = e51559;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"unmounted","unmounted",-84871913)),null,t__10691__auto___51940,null]));
}finally {RCF__done_BANG_();
}
(hyperfiddle.electric.impl.yield2.it.cljs$core$IFn$_invoke$arity$0 ? hyperfiddle.electric.impl.yield2.it.cljs$core$IFn$_invoke$arity$0() : hyperfiddle.electric.impl.yield2.it.call(null));

try{try{cljs.core.deref(hyperfiddle.electric.impl.yield2.it);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),new cljs.core.Keyword(null,"actual","actual",107306363),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}catch (e51561){if((e51561 instanceof missionary.Cancelled)){
var e__10624__auto___51942 = e51561;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),new cljs.core.Keyword(null,"actual","actual",107306363),e__10624__auto___51942,new cljs.core.Keyword(null,"message","message",-406056002),null], null));

} else {
throw e51561;

}
}}catch (e51560){var t__10691__auto___51943 = e51560;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),null,t__10691__auto___51943,null]));
}finally {RCF__done_BANG_();
}
var G__51562 = 1;
var G__51563 = (function (_PERCENT__1__$1){
try{var values__10703__auto__ = (new cljs.core.List(null,_PERCENT__1__$1,(new cljs.core.List(null,new cljs.core.Keyword(null,"terminated","terminated",-1954638860),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e51564){var t__10691__auto__ = e51564;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51562,G__51563) : RCF___PERCENT_.call(null,G__51562,G__51563));
});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51557,G__51558) : RCF___PERCENT_.call(null,G__51557,G__51558));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251549.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51550","meta51550",-560299250,null)], null);
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251549.cljs$lang$type = true);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251549.cljs$lang$ctorStr = "hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251549");

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251549.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251549");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251549.
 */
hyperfiddle.electric.impl.yield2.__GT_t_hyperfiddle$electric$impl$yield251549 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_137_$___GT_t_hyperfiddle$electric$impl$yield251549(meta51550){
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251549(meta51550));
});

}

return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251549(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_137;},new cljs.core.Symbol("hyperfiddle.electric.impl.yield2","generated__hyperfiddle_electric_impl_yield2_137","hyperfiddle.electric.impl.yield2/generated__hyperfiddle_electric_impl_yield2_137",-703460348,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/yield2.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hyperfiddle.electric.impl.yield2","hyperfiddle.electric.impl.yield2",-393953521,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),137,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_yield2_137","generated__hyperfiddle_electric_impl_yield2_137",236848668,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_137)?hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_137.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_137));
} else {
}
hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_145 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_145(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2 !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251569 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251569 = (function (meta51570){
this.meta51570 = meta51570;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51571,meta51570__$1){
var self__ = this;
var _51571__$1 = this;
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251569(meta51570__$1));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51571){
var self__ = this;
var _51571__$1 = this;
return self__.meta51570;
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251569.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251569.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__51573 = (arguments.length - (1));
switch (G__51573) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251569.prototype.apply = (function (self__,args51572){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args51572)));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251569.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_51568){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(8,done_51568);
var vec__51565 = (function (){var q__10424__auto__ = hyperfiddle.rcf.queue.queue();
var start__10425__auto__ = hyperfiddle.rcf.time.current_time();
var timeout__10426__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hyperfiddle.rcf._STAR_timeout_STAR_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (x__10427__auto__){
hyperfiddle.rcf.queue.offer_BANG_(q__10424__auto__,x__10427__auto__);

return x__10427__auto__;
}),(function() {
var G__51948 = null;
var G__51948__0 = (function (){
return hyperfiddle.rcf.queue.poll_BANG_.cljs$core$IFn$_invoke$arity$4(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249));
});
var G__51948__2 = (function (n__10428__auto__,cb__10429__auto__){
return hyperfiddle.rcf.queue.poll_n_BANG_(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249),n__10428__auto__,cb__10429__auto__);
});
G__51948 = function(n__10428__auto__,cb__10429__auto__){
switch(arguments.length){
case 0:
return G__51948__0.call(this);
case 2:
return G__51948__2.call(this,n__10428__auto__,cb__10429__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51948.cljs$core$IFn$_invoke$arity$0 = G__51948__0;
G__51948.cljs$core$IFn$_invoke$arity$2 = G__51948__2;
return G__51948;
})()
,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,timeout__10426__auto__)], null);
})();
var RCF__tap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51565,(0),null);
var RCF___PERCENT_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51565,(1),null);
var RCF__set_timeout_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51565,(2),null);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["work skipping is invalidated after successful input"], 0));

try{hyperfiddle.electric.impl.yield2._BANG_x = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));

hyperfiddle.electric.impl.yield2.it = hyperfiddle.electric.impl.yield2.yield$((function (x){
if(cljs.core.odd_QMARK_(x)){
(RCF__tap.cljs$core$IFn$_invoke$arity$1 ? RCF__tap.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"recover","recover",849894427)) : RCF__tap.call(null,new cljs.core.Keyword(null,"recover","recover",849894427)));

return missionary.core.cp_STAR_((function (){var cr51574_block_0 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_145_$_cr51574_block_0(cr51574_state){
try{var cr51574_place_0 = new cljs.core.Keyword(null,"recover","recover",849894427);
(cr51574_state[(0)] = null);

return cr51574_place_0;
}catch (e51576){var cr51574_exception = e51576;
(cr51574_state[(0)] = null);

throw cr51574_exception;
}});
return cloroutine.impl.coroutine((function (){var G__51577 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__51577[(0)] = cr51574_block_0);

return G__51577;
})());
})());
} else {
return null;
}
}),missionary.core.watch(hyperfiddle.electric.impl.yield2._BANG_x))((function (){
return null;
}),(function (){
return (RCF__tap.cljs$core$IFn$_invoke$arity$1 ? RCF__tap.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"terminated","terminated",-1954638860)) : RCF__tap.call(null,new cljs.core.Keyword(null,"terminated","terminated",-1954638860)));
}));

try{var values__10703__auto___51951 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(0),null,(1),null)),(2),null));
var result__10704__auto___51952 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51951);
if(cljs.core.truth_(result__10704__auto___51952)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51951),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51951),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51951);
}catch (e51578){var t__10691__auto___51953 = e51578;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),null,t__10691__auto___51953,null]));
}finally {RCF__done_BANG_();
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_x,cljs.core.inc);

try{var values__10703__auto___51954 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,new cljs.core.Keyword(null,"recover","recover",849894427),null,(1),null)),(2),null));
var result__10704__auto___51955 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51954);
if(cljs.core.truth_(result__10704__auto___51955)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Keyword(null,"recover","recover",849894427)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51954),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Keyword(null,"recover","recover",849894427)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51954),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51954);
}catch (e51579){var t__10691__auto___51957 = e51579;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Keyword(null,"recover","recover",849894427)),null,t__10691__auto___51957,null]));
}finally {RCF__done_BANG_();
}
var G__51580 = 1;
var G__51581 = (function (_PERCENT__1){
try{var values__10703__auto___51959 = (new cljs.core.List(null,_PERCENT__1,(new cljs.core.List(null,new cljs.core.Keyword(null,"recover","recover",849894427),null,(1),null)),(2),null));
var result__10704__auto___51960 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51959);
if(cljs.core.truth_(result__10704__auto___51960)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"recover","recover",849894427)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51959),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"recover","recover",849894427)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51959),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51959);
}catch (e51582){var t__10691__auto___51962 = e51582;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"recover","recover",849894427)),null,t__10691__auto___51962,null]));
}finally {RCF__done_BANG_();
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_x,cljs.core.inc);

try{var values__10703__auto___51963 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(2),null,(1),null)),(2),null));
var result__10704__auto___51964 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51963);
if(cljs.core.truth_(result__10704__auto___51964)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51963),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51963),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51963);
}catch (e51583){var t__10691__auto___51966 = e51583;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(2)),null,t__10691__auto___51966,null]));
}finally {RCF__done_BANG_();
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["same input but good input in between, so won't work skip"], 0));

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_x,cljs.core.dec);

try{var values__10703__auto___51967 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,new cljs.core.Keyword(null,"recover","recover",849894427),null,(1),null)),(2),null));
var result__10704__auto___51968 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51967);
if(cljs.core.truth_(result__10704__auto___51968)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Keyword(null,"recover","recover",849894427)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51967),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Keyword(null,"recover","recover",849894427)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51967),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51967);
}catch (e51584){var t__10691__auto___51970 = e51584;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Keyword(null,"recover","recover",849894427)),null,t__10691__auto___51970,null]));
}finally {RCF__done_BANG_();
}
var G__51585 = 1;
var G__51586 = (function (_PERCENT__1__$1){
try{var values__10703__auto___51971 = (new cljs.core.List(null,_PERCENT__1__$1,(new cljs.core.List(null,new cljs.core.Keyword(null,"recover","recover",849894427),null,(1),null)),(2),null));
var result__10704__auto___51972 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51971);
if(cljs.core.truth_(result__10704__auto___51972)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"recover","recover",849894427)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51971),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"recover","recover",849894427)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51971),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51971);
}catch (e51587){var t__10691__auto___51974 = e51587;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"recover","recover",849894427)),null,t__10691__auto___51974,null]));
}finally {RCF__done_BANG_();
}
(hyperfiddle.electric.impl.yield2.it.cljs$core$IFn$_invoke$arity$0 ? hyperfiddle.electric.impl.yield2.it.cljs$core$IFn$_invoke$arity$0() : hyperfiddle.electric.impl.yield2.it.call(null));

try{try{cljs.core.deref(hyperfiddle.electric.impl.yield2.it);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),new cljs.core.Keyword(null,"actual","actual",107306363),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}catch (e51589){if((e51589 instanceof missionary.Cancelled)){
var e__10624__auto___51978 = e51589;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),new cljs.core.Keyword(null,"actual","actual",107306363),e__10624__auto___51978,new cljs.core.Keyword(null,"message","message",-406056002),null], null));

} else {
throw e51589;

}
}}catch (e51588){var t__10691__auto___51979 = e51588;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),null,t__10691__auto___51979,null]));
}finally {RCF__done_BANG_();
}
var G__51590 = 1;
var G__51591 = (function (_PERCENT__1__$2){
try{var values__10703__auto__ = (new cljs.core.List(null,_PERCENT__1__$2,(new cljs.core.List(null,new cljs.core.Keyword(null,"terminated","terminated",-1954638860),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e51592){var t__10691__auto__ = e51592;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"terminated","terminated",-1954638860)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51590,G__51591) : RCF___PERCENT_.call(null,G__51590,G__51591));
});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51585,G__51586) : RCF___PERCENT_.call(null,G__51585,G__51586));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51580,G__51581) : RCF___PERCENT_.call(null,G__51580,G__51581));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251569.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51570","meta51570",389059217,null)], null);
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251569.cljs$lang$type = true);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251569.cljs$lang$ctorStr = "hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251569");

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251569.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251569");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251569.
 */
hyperfiddle.electric.impl.yield2.__GT_t_hyperfiddle$electric$impl$yield251569 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_145_$___GT_t_hyperfiddle$electric$impl$yield251569(meta51570){
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251569(meta51570));
});

}

return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251569(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_145;},new cljs.core.Symbol("hyperfiddle.electric.impl.yield2","generated__hyperfiddle_electric_impl_yield2_145","hyperfiddle.electric.impl.yield2/generated__hyperfiddle_electric_impl_yield2_145",958784345,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/yield2.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hyperfiddle.electric.impl.yield2","hyperfiddle.electric.impl.yield2",-393953521,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),145,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_yield2_145","generated__hyperfiddle_electric_impl_yield2_145",1629609281,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_145)?hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_145.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_145));
} else {
}
hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_154 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_154(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2 !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251597 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251597 = (function (meta51598){
this.meta51598 = meta51598;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51599,meta51598__$1){
var self__ = this;
var _51599__$1 = this;
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251597(meta51598__$1));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51599){
var self__ = this;
var _51599__$1 = this;
return self__.meta51598;
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251597.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251597.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__51601 = (arguments.length - (1));
switch (G__51601) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251597.prototype.apply = (function (self__,args51600){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args51600)));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251597.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_51596){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(2,done_51596);
var vec__51593 = (function (){var q__10424__auto__ = hyperfiddle.rcf.queue.queue();
var start__10425__auto__ = hyperfiddle.rcf.time.current_time();
var timeout__10426__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hyperfiddle.rcf._STAR_timeout_STAR_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (x__10427__auto__){
hyperfiddle.rcf.queue.offer_BANG_(q__10424__auto__,x__10427__auto__);

return x__10427__auto__;
}),(function() {
var G__51987 = null;
var G__51987__0 = (function (){
return hyperfiddle.rcf.queue.poll_BANG_.cljs$core$IFn$_invoke$arity$4(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249));
});
var G__51987__2 = (function (n__10428__auto__,cb__10429__auto__){
return hyperfiddle.rcf.queue.poll_n_BANG_(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249),n__10428__auto__,cb__10429__auto__);
});
G__51987 = function(n__10428__auto__,cb__10429__auto__){
switch(arguments.length){
case 0:
return G__51987__0.call(this);
case 2:
return G__51987__2.call(this,n__10428__auto__,cb__10429__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51987.cljs$core$IFn$_invoke$arity$0 = G__51987__0;
G__51987.cljs$core$IFn$_invoke$arity$2 = G__51987__2;
return G__51987;
})()
,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,timeout__10426__auto__)], null);
})();
var RCF__tap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51593,(0),null);
var RCF___PERCENT_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51593,(1),null);
var RCF__set_timeout_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51593,(2),null);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["initial nil isn't work skipped"], 0));

try{hyperfiddle.electric.impl.yield2.it = hyperfiddle.electric.impl.yield2.yield$((function (_){
(RCF__tap.cljs$core$IFn$_invoke$arity$1 ? RCF__tap.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"recover","recover",849894427)) : RCF__tap.call(null,new cljs.core.Keyword(null,"recover","recover",849894427)));

return null;
}),missionary.core.cp_STAR_((function (){var cr51602_block_0 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_154_$_cr51602_block_0(cr51602_state){
try{var cr51602_place_0 = null;
(cr51602_state[(0)] = null);

return cr51602_place_0;
}catch (e51604){var cr51602_exception = e51604;
(cr51602_state[(0)] = null);

throw cr51602_exception;
}});
return cloroutine.impl.coroutine((function (){var G__51605 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__51605[(0)] = cr51602_block_0);

return G__51605;
})());
})()))((function (){
return null;
}),(function (){
return null;
}));

try{var values__10703__auto___51989 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,null,null,(1),null)),(2),null));
var result__10704__auto___51990 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___51989);
if(cljs.core.truth_(result__10704__auto___51990)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___51989),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),null),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___51989),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___51989);
}catch (e51606){var t__10691__auto___51992 = e51606;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),null),null,t__10691__auto___51992,null]));
}finally {RCF__done_BANG_();
}
var G__51607 = 1;
var G__51608 = (function (_PERCENT__1){
try{var values__10703__auto__ = (new cljs.core.List(null,_PERCENT__1,(new cljs.core.List(null,new cljs.core.Keyword(null,"recover","recover",849894427),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"recover","recover",849894427)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"recover","recover",849894427)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e51609){var t__10691__auto__ = e51609;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"recover","recover",849894427)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51607,G__51608) : RCF___PERCENT_.call(null,G__51607,G__51608));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51598","meta51598",755926937,null)], null);
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251597.cljs$lang$type = true);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251597.cljs$lang$ctorStr = "hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251597");

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251597.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251597");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251597.
 */
hyperfiddle.electric.impl.yield2.__GT_t_hyperfiddle$electric$impl$yield251597 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_154_$___GT_t_hyperfiddle$electric$impl$yield251597(meta51598){
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251597(meta51598));
});

}

return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251597(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_154;},new cljs.core.Symbol("hyperfiddle.electric.impl.yield2","generated__hyperfiddle_electric_impl_yield2_154","hyperfiddle.electric.impl.yield2/generated__hyperfiddle_electric_impl_yield2_154",-1126614112,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/yield2.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hyperfiddle.electric.impl.yield2","hyperfiddle.electric.impl.yield2",-393953521,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),154,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_yield2_154","generated__hyperfiddle_electric_impl_yield2_154",1696777656,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_154)?hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_154.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_154));
} else {
}
hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_157 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_157(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2 !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251611 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251611 = (function (meta51612){
this.meta51612 = meta51612;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51613,meta51612__$1){
var self__ = this;
var _51613__$1 = this;
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251611(meta51612__$1));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51613){
var self__ = this;
var _51613__$1 = this;
return self__.meta51612;
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251611.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251611.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__51615 = (arguments.length - (1));
switch (G__51615) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251611.prototype.apply = (function (self__,args51614){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args51614)));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251611.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_51610){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(3,done_51610);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cache updates on recover values"], 0));

try{hyperfiddle.electric.impl.yield2._BANG_in = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));

hyperfiddle.electric.impl.yield2._BANG_x = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));

hyperfiddle.electric.impl.yield2.it = hyperfiddle.electric.impl.yield2.yield$((function (_){
return missionary.core.watch(hyperfiddle.electric.impl.yield2._BANG_x);
}),missionary.core.watch(hyperfiddle.electric.impl.yield2._BANG_in))((function (){
return null;
}),(function (){
return null;
}));

try{var values__10703__auto___52002 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(0),null,(1),null)),(2),null));
var result__10704__auto___52003 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___52002);
if(cljs.core.truth_(result__10704__auto___52003)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___52002),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___52002),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___52002);
}catch (e51616){var t__10691__auto___52005 = e51616;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),null,t__10691__auto___52005,null]));
}finally {RCF__done_BANG_();
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_x,cljs.core.inc);

try{var values__10703__auto___52006 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(1),null,(1),null)),(2),null));
var result__10704__auto___52007 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___52006);
if(cljs.core.truth_(result__10704__auto___52007)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___52006),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___52006),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___52006);
}catch (e51617){var t__10691__auto___52008 = e51617;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(1)),null,t__10691__auto___52008,null]));
}finally {RCF__done_BANG_();
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_in,cljs.core.identity);

try{var values__10703__auto__ = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(1),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e51618){var t__10691__auto__ = e51618;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(1)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51612","meta51612",-1608944236,null)], null);
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251611.cljs$lang$type = true);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251611.cljs$lang$ctorStr = "hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251611");

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251611.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251611");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251611.
 */
hyperfiddle.electric.impl.yield2.__GT_t_hyperfiddle$electric$impl$yield251611 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_157_$___GT_t_hyperfiddle$electric$impl$yield251611(meta51612){
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251611(meta51612));
});

}

return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251611(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_157;},new cljs.core.Symbol("hyperfiddle.electric.impl.yield2","generated__hyperfiddle_electric_impl_yield2_157","hyperfiddle.electric.impl.yield2/generated__hyperfiddle_electric_impl_yield2_157",545472073,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/yield2.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hyperfiddle.electric.impl.yield2","hyperfiddle.electric.impl.yield2",-393953521,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),157,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_yield2_157","generated__hyperfiddle_electric_impl_yield2_157",-125362111,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_157)?hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_157.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_157));
} else {
}
hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_164 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_164(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2 !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251623 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251623 = (function (meta51624){
this.meta51624 = meta51624;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51625,meta51624__$1){
var self__ = this;
var _51625__$1 = this;
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251623(meta51624__$1));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51625){
var self__ = this;
var _51625__$1 = this;
return self__.meta51624;
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251623.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251623.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__51627 = (arguments.length - (1));
switch (G__51627) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251623.prototype.apply = (function (self__,args51626){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args51626)));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251623.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_51622){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(4,done_51622);
var vec__51619 = (function (){var q__10424__auto__ = hyperfiddle.rcf.queue.queue();
var start__10425__auto__ = hyperfiddle.rcf.time.current_time();
var timeout__10426__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hyperfiddle.rcf._STAR_timeout_STAR_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (x__10427__auto__){
hyperfiddle.rcf.queue.offer_BANG_(q__10424__auto__,x__10427__auto__);

return x__10427__auto__;
}),(function() {
var G__52012 = null;
var G__52012__0 = (function (){
return hyperfiddle.rcf.queue.poll_BANG_.cljs$core$IFn$_invoke$arity$4(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249));
});
var G__52012__2 = (function (n__10428__auto__,cb__10429__auto__){
return hyperfiddle.rcf.queue.poll_n_BANG_(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249),n__10428__auto__,cb__10429__auto__);
});
G__52012 = function(n__10428__auto__,cb__10429__auto__){
switch(arguments.length){
case 0:
return G__52012__0.call(this);
case 2:
return G__52012__2.call(this,n__10428__auto__,cb__10429__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52012.cljs$core$IFn$_invoke$arity$0 = G__52012__0;
G__52012.cljs$core$IFn$_invoke$arity$2 = G__52012__2;
return G__52012;
})()
,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,timeout__10426__auto__)], null);
})();
var RCF__tap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51619,(0),null);
var RCF___PERCENT_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51619,(1),null);
var RCF__set_timeout_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51619,(2),null);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["yield stays alive as long as the recover is alive"], 0));

try{hyperfiddle.electric.impl.yield2._BANG_x = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));

hyperfiddle.electric.impl.yield2.it = hyperfiddle.electric.impl.yield2.yield$((function (_){
return missionary.core.watch(hyperfiddle.electric.impl.yield2._BANG_x);
}),missionary.core.cp_STAR_((function (){var cr51628_block_0 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_164_$_cr51628_block_0(cr51628_state){
try{var cr51628_place_0 = null;
(cr51628_state[(0)] = null);

return cr51628_place_0;
}catch (e51630){var cr51628_exception = e51630;
(cr51628_state[(0)] = null);

throw cr51628_exception;
}});
return cloroutine.impl.coroutine((function (){var G__51631 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__51631[(0)] = cr51628_block_0);

return G__51631;
})());
})()))((function (){
return (RCF__tap.cljs$core$IFn$_invoke$arity$1 ? RCF__tap.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"notified","notified",-1434696295)) : RCF__tap.call(null,new cljs.core.Keyword(null,"notified","notified",-1434696295)));
}),(function (){
return (RCF__tap.cljs$core$IFn$_invoke$arity$1 ? RCF__tap.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"terminated","terminated",-1954638860)) : RCF__tap.call(null,new cljs.core.Keyword(null,"terminated","terminated",-1954638860)));
}));

var G__51632 = 1;
var G__51633 = (function (_PERCENT__1){
try{var values__10703__auto___52013 = (new cljs.core.List(null,_PERCENT__1,(new cljs.core.List(null,new cljs.core.Keyword(null,"notified","notified",-1434696295),null,(1),null)),(2),null));
var result__10704__auto___52014 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___52013);
if(cljs.core.truth_(result__10704__auto___52014)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___52013),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___52013),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___52013);
}catch (e51634){var t__10691__auto___52015 = e51634;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"notified","notified",-1434696295)),null,t__10691__auto___52015,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___52016 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(0),null,(1),null)),(2),null));
var result__10704__auto___52017 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___52016);
if(cljs.core.truth_(result__10704__auto___52017)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___52016),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___52016),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___52016);
}catch (e51635){var t__10691__auto___52018 = e51635;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(0)),null,t__10691__auto___52018,null]));
}finally {RCF__done_BANG_();
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_x,cljs.core.inc);

var G__51636 = 1;
var G__51637 = (function (_PERCENT__1__$1){
try{var values__10703__auto___52019 = (new cljs.core.List(null,_PERCENT__1__$1,(new cljs.core.List(null,new cljs.core.Keyword(null,"notified","notified",-1434696295),null,(1),null)),(2),null));
var result__10704__auto___52020 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___52019);
if(cljs.core.truth_(result__10704__auto___52020)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___52019),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___52019),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___52019);
}catch (e51638){var t__10691__auto___52021 = e51638;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"notified","notified",-1434696295)),null,t__10691__auto___52021,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto__ = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(1),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e51639){var t__10691__auto__ = e51639;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(1)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51636,G__51637) : RCF___PERCENT_.call(null,G__51636,G__51637));
});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51632,G__51633) : RCF___PERCENT_.call(null,G__51632,G__51633));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251623.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51624","meta51624",592734074,null)], null);
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251623.cljs$lang$type = true);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251623.cljs$lang$ctorStr = "hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251623");

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251623.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251623");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251623.
 */
hyperfiddle.electric.impl.yield2.__GT_t_hyperfiddle$electric$impl$yield251623 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_164_$___GT_t_hyperfiddle$electric$impl$yield251623(meta51624){
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251623(meta51624));
});

}

return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251623(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_164;},new cljs.core.Symbol("hyperfiddle.electric.impl.yield2","generated__hyperfiddle_electric_impl_yield2_164","hyperfiddle.electric.impl.yield2/generated__hyperfiddle_electric_impl_yield2_164",-1352667186,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/yield2.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hyperfiddle.electric.impl.yield2","hyperfiddle.electric.impl.yield2",-393953521,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),164,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_yield2_164","generated__hyperfiddle_electric_impl_yield2_164",-1755605546,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_164)?hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_164.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_164));
} else {
}
hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_169 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_169(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2 !== 'undefined') && (typeof hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251644 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251644 = (function (meta51645){
this.meta51645 = meta51645;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51646,meta51645__$1){
var self__ = this;
var _51646__$1 = this;
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251644(meta51645__$1));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51646){
var self__ = this;
var _51646__$1 = this;
return self__.meta51645;
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251644.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251644.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__51648 = (arguments.length - (1));
switch (G__51648) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251644.prototype.apply = (function (self__,args51647){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args51647)));
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251644.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_51643){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(6,done_51643);
var vec__51640 = (function (){var q__10424__auto__ = hyperfiddle.rcf.queue.queue();
var start__10425__auto__ = hyperfiddle.rcf.time.current_time();
var timeout__10426__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hyperfiddle.rcf._STAR_timeout_STAR_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (x__10427__auto__){
hyperfiddle.rcf.queue.offer_BANG_(q__10424__auto__,x__10427__auto__);

return x__10427__auto__;
}),(function() {
var G__52024 = null;
var G__52024__0 = (function (){
return hyperfiddle.rcf.queue.poll_BANG_.cljs$core$IFn$_invoke$arity$4(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249));
});
var G__52024__2 = (function (n__10428__auto__,cb__10429__auto__){
return hyperfiddle.rcf.queue.poll_n_BANG_(q__10424__auto__,start__10425__auto__,cljs.core.deref(timeout__10426__auto__),new cljs.core.Keyword("hyperfiddle.rcf","timeout","hyperfiddle.rcf/timeout",61174249),n__10428__auto__,cb__10429__auto__);
});
G__52024 = function(n__10428__auto__,cb__10429__auto__){
switch(arguments.length){
case 0:
return G__52024__0.call(this);
case 2:
return G__52024__2.call(this,n__10428__auto__,cb__10429__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52024.cljs$core$IFn$_invoke$arity$0 = G__52024__0;
G__52024.cljs$core$IFn$_invoke$arity$2 = G__52024__2;
return G__52024;
})()
,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,timeout__10426__auto__)], null);
})();
var RCF__tap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51640,(0),null);
var RCF___PERCENT_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51640,(1),null);
var RCF__set_timeout_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51640,(2),null);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if same input arrives and recover notified recover is re-transferred"], 0));

try{hyperfiddle.electric.impl.yield2._BANG_x = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));

hyperfiddle.electric.impl.yield2._BANG_err = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((100));

hyperfiddle.electric.impl.yield2.it = hyperfiddle.electric.impl.yield2.yield$((function (_){
return missionary.core.watch(hyperfiddle.electric.impl.yield2._BANG_err);
}),missionary.core.watch(hyperfiddle.electric.impl.yield2._BANG_x))((function (){
return (RCF__tap.cljs$core$IFn$_invoke$arity$1 ? RCF__tap.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"notified","notified",-1434696295)) : RCF__tap.call(null,new cljs.core.Keyword(null,"notified","notified",-1434696295)));
}),(function (){
return (RCF__tap.cljs$core$IFn$_invoke$arity$1 ? RCF__tap.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"terminated","terminated",-1954638860)) : RCF__tap.call(null,new cljs.core.Keyword(null,"terminated","terminated",-1954638860)));
}));

var G__51649 = 1;
var G__51650 = (function (_PERCENT__1){
try{var values__10703__auto___52025 = (new cljs.core.List(null,_PERCENT__1,(new cljs.core.List(null,new cljs.core.Keyword(null,"notified","notified",-1434696295),null,(1),null)),(2),null));
var result__10704__auto___52026 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___52025);
if(cljs.core.truth_(result__10704__auto___52026)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___52025),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___52025),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___52025);
}catch (e51651){var t__10691__auto___52028 = e51651;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"notified","notified",-1434696295)),null,t__10691__auto___52028,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___52029 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(100),null,(1),null)),(2),null));
var result__10704__auto___52030 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___52029);
if(cljs.core.truth_(result__10704__auto___52030)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(100)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___52029),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(100)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___52029),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___52029);
}catch (e51652){var t__10691__auto___52038 = e51652;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(100)),null,t__10691__auto___52038,null]));
}finally {RCF__done_BANG_();
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_err,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_x,cljs.core.identity);

var G__51653 = 1;
var G__51654 = (function (_PERCENT__1__$1){
try{var values__10703__auto___52042 = (new cljs.core.List(null,_PERCENT__1__$1,(new cljs.core.List(null,new cljs.core.Keyword(null,"notified","notified",-1434696295),null,(1),null)),(2),null));
var result__10704__auto___52043 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___52042);
if(cljs.core.truth_(result__10704__auto___52043)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___52042),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___52042),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___52042);
}catch (e51655){var t__10691__auto___52044 = e51655;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"notified","notified",-1434696295)),null,t__10691__auto___52044,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___52045 = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(101),null,(1),null)),(2),null));
var result__10704__auto___52046 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___52045);
if(cljs.core.truth_(result__10704__auto___52046)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(101)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___52045),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(101)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___52045),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___52045);
}catch (e51656){var t__10691__auto___52048 = e51656;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(101)),null,t__10691__auto___52048,null]));
}finally {RCF__done_BANG_();
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.yield2._BANG_err,cljs.core.inc);

var G__51657 = 1;
var G__51658 = (function (_PERCENT__1__$2){
try{var values__10703__auto___52052 = (new cljs.core.List(null,_PERCENT__1__$2,(new cljs.core.List(null,new cljs.core.Keyword(null,"notified","notified",-1434696295),null,(1),null)),(2),null));
var result__10704__auto___52053 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___52052);
if(cljs.core.truth_(result__10704__auto___52053)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___52052),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"notified","notified",-1434696295)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___52052),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___52052);
}catch (e51659){var t__10691__auto___52054 = e51659;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"%-1","%-1",939055044,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),new cljs.core.Symbol(null,"%","%",-950237169,null)], null)),new cljs.core.Keyword(null,"notified","notified",-1434696295)),null,t__10691__auto___52054,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto__ = (new cljs.core.List(null,cljs.core.deref(hyperfiddle.electric.impl.yield2.it),(new cljs.core.List(null,(102),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(102)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(102)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e51660){var t__10691__auto__ = e51660;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)),(102)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51657,G__51658) : RCF___PERCENT_.call(null,G__51657,G__51658));
});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51653,G__51654) : RCF___PERCENT_.call(null,G__51653,G__51654));
});
return (RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2 ? RCF___PERCENT_.cljs$core$IFn$_invoke$arity$2(G__51649,G__51650) : RCF___PERCENT_.call(null,G__51649,G__51650));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251644.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51645","meta51645",1444551592,null)], null);
}));

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251644.cljs$lang$type = true);

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251644.cljs$lang$ctorStr = "hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251644");

(hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251644.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251644");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.yield2/t_hyperfiddle$electric$impl$yield251644.
 */
hyperfiddle.electric.impl.yield2.__GT_t_hyperfiddle$electric$impl$yield251644 = (function hyperfiddle$electric$impl$yield2$generated__hyperfiddle_electric_impl_yield2_169_$___GT_t_hyperfiddle$electric$impl$yield251644(meta51645){
return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251644(meta51645));
});

}

return (new hyperfiddle.electric.impl.yield2.t_hyperfiddle$electric$impl$yield251644(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_169;},new cljs.core.Symbol("hyperfiddle.electric.impl.yield2","generated__hyperfiddle_electric_impl_yield2_169","hyperfiddle.electric.impl.yield2/generated__hyperfiddle_electric_impl_yield2_169",1037871766,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/yield2.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hyperfiddle.electric.impl.yield2","hyperfiddle.electric.impl.yield2",-393953521,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),169,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_yield2_169","generated__hyperfiddle_electric_impl_yield2_169",366519454,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_169)?hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_169.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.yield2.generated__hyperfiddle_electric_impl_yield2_169));
} else {
}

//# sourceMappingURL=hyperfiddle.electric.impl.yield2.js.map
