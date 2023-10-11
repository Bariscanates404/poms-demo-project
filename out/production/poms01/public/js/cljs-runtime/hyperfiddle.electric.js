goog.provide('hyperfiddle.electric');
(hyperfiddle.electric.Pending.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.Pending.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return (other instanceof hyperfiddle.electric.Pending);
}));
(hyperfiddle.electric.Failure.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.Failure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return (((other instanceof hyperfiddle.electric.Failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.error,other.error)));
}));
(hyperfiddle.electric.FailureInfo.prototype.__proto__ = cljs.core.ExceptionInfo.prototype);
(hyperfiddle.electric.FailureInfo.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.FailureInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return (((other instanceof hyperfiddle.electric.FailureInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.cause,other.cause)));
}));
/**
 * Takes a resolve map and a program, returns a booting function.
 *   The booting function takes
 *   * as first argument a function Any->Task[Unit] returned task writes the value on the wire.
 *   * as second argument a flow producing the values read on the wire.
 *   and returning a task that runs the local reactor.
 */
hyperfiddle.electric.eval = hyperfiddle.electric.impl.runtime.eval;
hyperfiddle.electric.hook = hyperfiddle.electric.impl.runtime.hook;
hyperfiddle.electric.bind = hyperfiddle.electric.impl.runtime.bind;
hyperfiddle.electric.with$ = hyperfiddle.electric.impl.runtime.with$;
hyperfiddle.electric.pair = (function hyperfiddle$electric$pair(c,s){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr53368_block_0 = (function hyperfiddle$electric$pair_$_cr53368_block_0(cr53368_state){
try{var cr53368_place_0 = missionary.core.dfv;
var cr53368_place_1 = (function (){var fexpr__53436 = cr53368_place_0;
return (fexpr__53436.cljs$core$IFn$_invoke$arity$0 ? fexpr__53436.cljs$core$IFn$_invoke$arity$0() : fexpr__53436.call(null));
})();
var cr53368_place_2 = missionary.core.dfv;
var cr53368_place_3 = (function (){var fexpr__53437 = cr53368_place_2;
return (fexpr__53437.cljs$core$IFn$_invoke$arity$0 ? fexpr__53437.cljs$core$IFn$_invoke$arity$0() : fexpr__53437.call(null));
})();
var cr53368_place_4 = missionary.core.join;
var cr53368_place_5 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr53368_place_6 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr53371_block_0 = (function (cr53371_state){
try{var cr53371_place_0 = cr53368_place_1;
(cr53371_state[(0)] = cr53371_block_1);

return missionary.core.park(cr53371_place_0);
}catch (e53442){var e53377 = e53442;
var cr53371_exception = e53377;
(cr53371_state[(0)] = null);

throw cr53371_exception;
}});
var cr53371_block_1 = (function (cr53371_state){
try{var cr53371_place_1 = missionary.core.unpark();
var cr53371_place_2 = cr53371_place_1;
var cr53371_place_3 = x;
var cr53371_place_4 = (function (){var G__53381 = cr53371_place_3;
var fexpr__53380 = cr53371_place_2;
var G__53445 = G__53381;
var fexpr__53444 = fexpr__53380;
return (fexpr__53444.cljs$core$IFn$_invoke$arity$1 ? fexpr__53444.cljs$core$IFn$_invoke$arity$1(G__53445) : fexpr__53444.call(null,G__53445));
})();
(cr53371_state[(0)] = null);

return cr53371_place_4;
}catch (e53443){var e53378 = e53443;
var cr53371_exception = e53378;
(cr53371_state[(0)] = null);

throw cr53371_exception;
}});
return cloroutine.impl.coroutine((function (){var G__53382 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__53382[(0)] = cr53371_block_0);

return G__53382;
})());
})(),missionary.core.sp_run);
});
var cr53368_place_7 = (function (_BANG_){
var G__53447_53601 = _BANG_;
var fexpr__53446_53602 = cr53368_place_3;
(fexpr__53446_53602.cljs$core$IFn$_invoke$arity$1 ? fexpr__53446_53602.cljs$core$IFn$_invoke$arity$1(G__53447_53601) : fexpr__53446_53602.call(null,G__53447_53601));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr53368_place_8 = s;
var cr53368_place_9 = cr53368_place_6;
var cr53368_place_10 = cr53368_place_7;
var cr53368_place_11 = (function (){var G__53449 = cr53368_place_9;
var G__53450 = cr53368_place_10;
var fexpr__53448 = cr53368_place_8;
return (fexpr__53448.cljs$core$IFn$_invoke$arity$2 ? fexpr__53448.cljs$core$IFn$_invoke$arity$2(G__53449,G__53450) : fexpr__53448.call(null,G__53449,G__53450));
})();
var cr53368_place_12 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr53386_block_0 = (function (cr53386_state){
try{var cr53386_place_0 = cr53368_place_3;
(cr53386_state[(0)] = cr53386_block_1);

return missionary.core.park(cr53386_place_0);
}catch (e53455){var e53393 = e53455;
var cr53386_exception = e53393;
(cr53386_state[(0)] = null);

throw cr53386_exception;
}});
var cr53386_block_1 = (function (cr53386_state){
try{var cr53386_place_1 = missionary.core.unpark();
var cr53386_place_2 = cr53386_place_1;
var cr53386_place_3 = x;
var cr53386_place_4 = (function (){var G__53397 = cr53386_place_3;
var fexpr__53396 = cr53386_place_2;
var G__53458 = G__53397;
var fexpr__53457 = fexpr__53396;
return (fexpr__53457.cljs$core$IFn$_invoke$arity$1 ? fexpr__53457.cljs$core$IFn$_invoke$arity$1(G__53458) : fexpr__53457.call(null,G__53458));
})();
(cr53386_state[(0)] = null);

return cr53386_place_4;
}catch (e53456){var e53394 = e53456;
var cr53386_exception = e53394;
(cr53386_state[(0)] = null);

throw cr53386_exception;
}});
return cloroutine.impl.coroutine((function (){var G__53398 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__53398[(0)] = cr53386_block_0);

return G__53398;
})());
})(),missionary.core.sp_run);
});
var cr53368_place_13 = (function (_BANG_){
var G__53460_53604 = _BANG_;
var fexpr__53459_53605 = cr53368_place_1;
(fexpr__53459_53605.cljs$core$IFn$_invoke$arity$1 ? fexpr__53459_53605.cljs$core$IFn$_invoke$arity$1(G__53460_53604) : fexpr__53459_53605.call(null,G__53460_53604));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr53368_place_14 = (function (p1__53367_SHARP_){
throw p1__53367_SHARP_;
});
var cr53368_place_15 = c;
var cr53368_place_16 = cr53368_place_12;
var cr53368_place_17 = cr53368_place_13;
var cr53368_place_18 = cr53368_place_14;
var cr53368_place_19 = (function (){var G__53462 = cr53368_place_16;
var G__53463 = cr53368_place_17;
var G__53464 = cr53368_place_18;
var fexpr__53461 = cr53368_place_15;
return (fexpr__53461.cljs$core$IFn$_invoke$arity$3 ? fexpr__53461.cljs$core$IFn$_invoke$arity$3(G__53462,G__53463,G__53464) : fexpr__53461.call(null,G__53462,G__53463,G__53464));
})();
var cr53368_place_20 = (function (){var G__53466 = cr53368_place_5;
var G__53467 = cr53368_place_11;
var G__53468 = cr53368_place_19;
var fexpr__53465 = cr53368_place_4;
return (fexpr__53465.cljs$core$IFn$_invoke$arity$3 ? fexpr__53465.cljs$core$IFn$_invoke$arity$3(G__53466,G__53467,G__53468) : fexpr__53465.call(null,G__53466,G__53467,G__53468));
})();
(cr53368_state[(0)] = cr53368_block_1);

return missionary.core.park(cr53368_place_20);
}catch (e53434){var cr53368_exception = e53434;
(cr53368_state[(0)] = null);

throw cr53368_exception;
}});
var cr53368_block_1 = (function hyperfiddle$electric$pair_$_cr53368_block_1(cr53368_state){
try{var cr53368_place_21 = missionary.core.unpark();
(cr53368_state[(0)] = null);

return cr53368_place_21;
}catch (e53469){var cr53368_exception = e53469;
(cr53368_state[(0)] = null);

throw cr53368_exception;
}});
return cloroutine.impl.coroutine((function (){var G__53470 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__53470[(0)] = cr53368_block_0);

return G__53470;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric.failure_QMARK_ = (function hyperfiddle$electric$failure_QMARK_(x){
return (x instanceof hyperfiddle.electric.Failure);
});
hyperfiddle.electric.task__GT_cp = (function hyperfiddle$electric$task__GT_cp(var_args){
var G__53474 = arguments.length;
switch (G__53474) {
case 1:
return hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$1 = (function (_BANG_x){
return hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$2(_BANG_x,(new hyperfiddle.electric.Failure((new hyperfiddle.electric.Pending()))));
}));

(hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$2 = (function (_BANG_x,pending){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,pending,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr53475_block_0 = (function hyperfiddle$electric$cr53475_block_0(cr53475_state){
try{var cr53475_place_0 = _BANG_x;
(cr53475_state[(0)] = cr53475_block_1);

return missionary.core.park(cr53475_place_0);
}catch (e53478){var cr53475_exception = e53478;
(cr53475_state[(0)] = null);

throw cr53475_exception;
}});
var cr53475_block_1 = (function hyperfiddle$electric$cr53475_block_1(cr53475_state){
try{var cr53475_place_1 = missionary.core.unpark();
(cr53475_state[(0)] = null);

return cr53475_place_1;
}catch (e53479){var cr53475_exception = e53479;
(cr53475_state[(0)] = null);

throw cr53475_exception;
}});
return cloroutine.impl.coroutine((function (){var G__53480 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__53480[(0)] = cr53475_block_0);

return G__53480;
})());
})(),missionary.core.ap_run));
}));

(hyperfiddle.electric.task__GT_cp.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.Clock = (function (raf,callback,terminator){
this.raf = raf;
this.callback = callback;
this.terminator = terminator;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.Clock.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__53482 = (arguments.length - (1));
switch (G__53482) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.Clock.prototype.apply = (function (self__,args53481){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args53481)));
}));

(hyperfiddle.electric.Clock.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
if((self__.raf === (0))){
return (self__.callback = null);
} else {
window.cancelAnimationFrame(self__.raf);

return (self__.terminator.cljs$core$IFn$_invoke$arity$0 ? self__.terminator.cljs$core$IFn$_invoke$arity$0() : self__.terminator.call(null));
}
}));

(hyperfiddle.electric.Clock.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__.callback == null)){
(self__.terminator.cljs$core$IFn$_invoke$arity$0 ? self__.terminator.cljs$core$IFn$_invoke$arity$0() : self__.terminator.call(null));
} else {
(self__.raf = window.requestAnimationFrame(self__.callback));
}

return new cljs.core.Keyword("hyperfiddle.electric","tick","hyperfiddle.electric/tick",-1268517293);
}));

(hyperfiddle.electric.Clock.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"raf","raf",345121375,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null)], null);
}));

(hyperfiddle.electric.Clock.cljs$lang$type = true);

(hyperfiddle.electric.Clock.cljs$lang$ctorStr = "hyperfiddle.electric/Clock");

(hyperfiddle.electric.Clock.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric/Clock");
}));

/**
 * Positional factory function for hyperfiddle.electric/Clock.
 */
hyperfiddle.electric.__GT_Clock = (function hyperfiddle$electric$__GT_Clock(raf,callback,terminator){
return (new hyperfiddle.electric.Clock(raf,callback,terminator));
});

/**
 * lazy & efficient logical clock that schedules no work unless sampled
 */
hyperfiddle.electric._LT_clock = (function hyperfiddle$electric$_LT_clock(n,t){
var cancel = hyperfiddle.electric.__GT_Clock((0),null,t);
(cancel.callback = (function (_){
(cancel.raf = (0));

return (n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));
}));

(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));

return cancel;
});
hyperfiddle.electric._get_system_time_ms = (function hyperfiddle$electric$_get_system_time_ms(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53610 = arguments.length;
var i__5770__auto___53611 = (0);
while(true){
if((i__5770__auto___53611 < len__5769__auto___53610)){
args__5775__auto__.push((arguments[i__5770__auto___53611]));

var G__53612 = (i__5770__auto___53611 + (1));
i__5770__auto___53611 = G__53612;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return hyperfiddle.electric._get_system_time_ms.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(hyperfiddle.electric._get_system_time_ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__53484){
var vec__53485 = p__53484;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53485,(0),null);
return Date.now();
}));

(hyperfiddle.electric._get_system_time_ms.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hyperfiddle.electric._get_system_time_ms.cljs$lang$applyTo = (function (seq53483){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53483));
}));

hyperfiddle.electric.dom_listener = (function hyperfiddle$electric$dom_listener(node,typ,f,opts){
node.addEventListener(typ,f,cljs.core.clj__GT_js(opts));

return (function (){
return node.removeEventListener(typ,f);
});
});
hyperfiddle.electric.listen_GT_ = (function hyperfiddle$electric$listen_GT_(var_args){
var G__53490 = arguments.length;
switch (G__53490) {
case 2:
return hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$2 = (function (node,event_type){
return hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$4(node,event_type,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY);
}));

(hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$3 = (function (node,event_type,keep_fn_BANG_){
return hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$4(node,event_type,keep_fn_BANG_,cljs.core.PersistentArrayMap.EMPTY);
}));

(hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$4 = (function (node,event_type,keep_fn_BANG_,opts){
return missionary.core.relieve(cljs.core.PersistentArrayMap.EMPTY,missionary.core.observe((function (_BANG_){
return hyperfiddle.electric.dom_listener(node,event_type,(function (p1__53488_SHARP_){
var temp__5808__auto__ = (keep_fn_BANG_.cljs$core$IFn$_invoke$arity$1 ? keep_fn_BANG_.cljs$core$IFn$_invoke$arity$1(p1__53488_SHARP_) : keep_fn_BANG_.call(null,p1__53488_SHARP_));
if((temp__5808__auto__ == null)){
return null;
} else {
var v = temp__5808__auto__;
return (_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(v) : _BANG_.call(null,v));
}
}),opts);
})));
}));

(hyperfiddle.electric.listen_GT_.cljs$lang$maxFixedArity = 4);

hyperfiddle.electric._LT_dom_visibility_state = missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic((function (_){
return document.visibilityState;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,document.visibilityState,hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$2(document,"visibilitychange"))], 0));
hyperfiddle.electric._check_fn_arity_BANG_ = (function hyperfiddle$electric$_check_fn_arity_BANG_(name,expected,actual){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,actual)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["You called ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("hyperfiddle.electric","unnamed-efn","hyperfiddle.electric/unnamed-efn",1016396331)], 0));
}
})()),", a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),"-arg e/fn with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)," arguments."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null));
} else {
return null;
}
});
hyperfiddle.electric.watchable_QMARK_ = (function hyperfiddle$electric$watchable_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x);
}
});
hyperfiddle.electric.checked_watch = (function hyperfiddle$electric$checked_watch(_BANG_x){
if(hyperfiddle.electric.watchable_QMARK_(_BANG_x)){
} else {
throw (new Error(["Assert failed: ","Provided argument is not Watchable.","\n","(watchable? !x)"].join('')));
}

return missionary.core.watch(_BANG_x);
});
hyperfiddle.electric._invalid_watch_usage_message = "Invalid e/watch (use from Electric code only, maybe you forgot a e/def?)";
hyperfiddle.electric.debounce_discreet = (function hyperfiddle$electric$debounce_discreet(var_args){
var G__53494 = arguments.length;
switch (G__53494) {
case 2:
return hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$2 = (function (delay,flow){
return hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$3(delay,null,flow);
}));

(hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$3 = (function (delay,init,flow){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,init,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr53495_block_4 = (function hyperfiddle$electric$cr53495_block_4(cr53495_state){
try{var cr53495_place_2 = (cr53495_state[(2)]);
var cr53495_place_9 = cr53495_place_2;
var cr53495_place_10 = missionary.Cancelled;
var cr53495_place_11 = (cr53495_place_9 instanceof cr53495_place_10);
var cr53495_place_12 = null;
if(cr53495_place_11){
(cr53495_state[(0)] = cr53495_block_9);

(cr53495_state[(1)] = cr53495_place_12);

return cr53495_state;
} else {
(cr53495_state[(0)] = cr53495_block_5);

(cr53495_state[(1)] = cr53495_place_12);

return cr53495_state;
}
}catch (e53513){var cr53495_exception = e53513;
(cr53495_state[(0)] = cr53495_block_12);

(cr53495_state[(3)] = true);

(cr53495_state[(2)] = cr53495_exception);

return cr53495_state;
}});
var cr53495_block_11 = (function hyperfiddle$electric$cr53495_block_11(cr53495_state){
try{var cr53495_place_12 = (cr53495_state[(1)]);
(cr53495_state[(0)] = cr53495_block_12);

(cr53495_state[(1)] = null);

(cr53495_state[(2)] = cr53495_place_12);

return cr53495_state;
}catch (e53514){var cr53495_exception = e53514;
(cr53495_state[(0)] = cr53495_block_12);

(cr53495_state[(1)] = null);

(cr53495_state[(3)] = true);

(cr53495_state[(2)] = cr53495_exception);

return cr53495_state;
}});
var cr53495_block_0 = (function hyperfiddle$electric$cr53495_block_0(cr53495_state){
try{var cr53495_place_0 = flow;
(cr53495_state[(0)] = cr53495_block_1);

return missionary.core.switch$(cr53495_place_0);
}catch (e53515){var cr53495_exception = e53515;
(cr53495_state[(0)] = null);

throw cr53495_exception;
}});
var cr53495_block_9 = (function hyperfiddle$electric$cr53495_block_9(cr53495_state){
try{var cr53495_place_2 = (cr53495_state[(2)]);
var cr53495_place_18 = cr53495_place_2;
var cr53495_place_19 = (1);
var cr53495_place_20 = missionary.core.none;
(cr53495_state[(0)] = cr53495_block_10);

return missionary.core.fork(cr53495_place_19,cr53495_place_20);
}catch (e53516){var cr53495_exception = e53516;
(cr53495_state[(0)] = cr53495_block_12);

(cr53495_state[(1)] = null);

(cr53495_state[(3)] = true);

(cr53495_state[(2)] = cr53495_exception);

return cr53495_state;
}});
var cr53495_block_5 = (function hyperfiddle$electric$cr53495_block_5(cr53495_state){
try{var cr53495_place_13 = new cljs.core.Keyword(null,"else","else",-1508377146);
var cr53495_place_14 = null;
if(cljs.core.truth_(cr53495_place_13)){
(cr53495_state[(0)] = cr53495_block_7);

(cr53495_state[(1)] = null);

return cr53495_state;
} else {
(cr53495_state[(0)] = cr53495_block_6);

(cr53495_state[(4)] = cr53495_place_14);

return cr53495_state;
}
}catch (e53517){var cr53495_exception = e53517;
(cr53495_state[(0)] = cr53495_block_12);

(cr53495_state[(1)] = null);

(cr53495_state[(3)] = true);

(cr53495_state[(2)] = cr53495_exception);

return cr53495_state;
}});
var cr53495_block_12 = (function hyperfiddle$electric$cr53495_block_12(cr53495_state){
try{var cr53495_place_2 = (cr53495_state[(2)]);
var cr53495_place_3 = (cr53495_state[(3)]);
var cr53495_place_22 = (cljs.core.truth_(cr53495_place_3)?(function(){throw cr53495_place_2})():cr53495_place_2);
(cr53495_state[(0)] = null);

(cr53495_state[(2)] = null);

(cr53495_state[(3)] = null);

return cr53495_place_22;
}catch (e53518){var cr53495_exception = e53518;
(cr53495_state[(0)] = null);

(cr53495_state[(2)] = null);

(cr53495_state[(3)] = null);

throw cr53495_exception;
}});
var cr53495_block_3 = (function hyperfiddle$electric$cr53495_block_3(cr53495_state){
try{var cr53495_place_8 = missionary.core.unpark();
(cr53495_state[(0)] = cr53495_block_12);

(cr53495_state[(2)] = cr53495_place_8);

return cr53495_state;
}catch (e53519){var cr53495_exception = e53519;
(cr53495_state[(0)] = cr53495_block_4);

(cr53495_state[(2)] = cr53495_exception);

return cr53495_state;
}});
var cr53495_block_7 = (function hyperfiddle$electric$cr53495_block_7(cr53495_state){
try{var cr53495_place_2 = (cr53495_state[(2)]);
var cr53495_place_16 = cr53495_place_2;
var cr53495_place_17 = (function(){throw cr53495_place_16})();
(cr53495_state[(0)] = null);

(cr53495_state[(2)] = null);

(cr53495_state[(3)] = null);

return null;
}catch (e53520){var cr53495_exception = e53520;
(cr53495_state[(0)] = cr53495_block_12);

(cr53495_state[(3)] = true);

(cr53495_state[(2)] = cr53495_exception);

return cr53495_state;
}});
var cr53495_block_1 = (function hyperfiddle$electric$cr53495_block_1(cr53495_state){
try{var cr53495_place_1 = missionary.core.unpark();
var cr53495_place_2 = null;
var cr53495_place_3 = false;
(cr53495_state[(0)] = cr53495_block_2);

(cr53495_state[(1)] = cr53495_place_1);

(cr53495_state[(2)] = cr53495_place_2);

(cr53495_state[(3)] = cr53495_place_3);

return cr53495_state;
}catch (e53521){var cr53495_exception = e53521;
(cr53495_state[(0)] = null);

throw cr53495_exception;
}});
var cr53495_block_2 = (function hyperfiddle$electric$cr53495_block_2(cr53495_state){
try{var cr53495_place_1 = (cr53495_state[(1)]);
var cr53495_place_4 = missionary.core.sleep;
var cr53495_place_5 = delay;
var cr53495_place_6 = cr53495_place_1;
var cr53495_place_7 = (function (){var G__53524 = cr53495_place_5;
var G__53525 = cr53495_place_6;
var fexpr__53523 = cr53495_place_4;
return (fexpr__53523.cljs$core$IFn$_invoke$arity$2 ? fexpr__53523.cljs$core$IFn$_invoke$arity$2(G__53524,G__53525) : fexpr__53523.call(null,G__53524,G__53525));
})();
(cr53495_state[(0)] = cr53495_block_3);

(cr53495_state[(1)] = null);

return missionary.core.park(cr53495_place_7);
}catch (e53522){var cr53495_exception = e53522;
(cr53495_state[(0)] = cr53495_block_4);

(cr53495_state[(1)] = null);

(cr53495_state[(2)] = cr53495_exception);

return cr53495_state;
}});
var cr53495_block_10 = (function hyperfiddle$electric$cr53495_block_10(cr53495_state){
try{var cr53495_place_21 = missionary.core.unpark();
(cr53495_state[(0)] = cr53495_block_11);

(cr53495_state[(1)] = cr53495_place_21);

return cr53495_state;
}catch (e53526){var cr53495_exception = e53526;
(cr53495_state[(0)] = cr53495_block_12);

(cr53495_state[(1)] = null);

(cr53495_state[(3)] = true);

(cr53495_state[(2)] = cr53495_exception);

return cr53495_state;
}});
var cr53495_block_8 = (function hyperfiddle$electric$cr53495_block_8(cr53495_state){
try{var cr53495_place_14 = (cr53495_state[(4)]);
(cr53495_state[(0)] = cr53495_block_11);

(cr53495_state[(4)] = null);

(cr53495_state[(1)] = cr53495_place_14);

return cr53495_state;
}catch (e53527){var cr53495_exception = e53527;
(cr53495_state[(0)] = cr53495_block_12);

(cr53495_state[(4)] = null);

(cr53495_state[(1)] = null);

(cr53495_state[(3)] = true);

(cr53495_state[(2)] = cr53495_exception);

return cr53495_state;
}});
var cr53495_block_6 = (function hyperfiddle$electric$cr53495_block_6(cr53495_state){
try{var cr53495_place_15 = null;
(cr53495_state[(0)] = cr53495_block_8);

(cr53495_state[(4)] = cr53495_place_15);

return cr53495_state;
}catch (e53528){var cr53495_exception = e53528;
(cr53495_state[(0)] = cr53495_block_12);

(cr53495_state[(4)] = null);

(cr53495_state[(1)] = null);

(cr53495_state[(3)] = true);

(cr53495_state[(2)] = cr53495_exception);

return cr53495_state;
}});
return cloroutine.impl.coroutine((function (){var G__53529 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__53529[(0)] = cr53495_block_0);

return G__53529;
})());
})(),missionary.core.ap_run));
}));

(hyperfiddle.electric.debounce_discreet.cljs$lang$maxFixedArity = 3);

hyperfiddle.electric.throttle = (function hyperfiddle$electric$throttle(dur,_GT_in){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr53530_block_3 = (function hyperfiddle$electric$throttle_$_cr53530_block_3(cr53530_state){
try{var cr53530_place_5 = (cr53530_state[(1)]);
var cr53530_place_15 = cr53530_place_5;
(cr53530_state[(0)] = cr53530_block_8);

(cr53530_state[(1)] = null);

(cr53530_state[(2)] = cr53530_place_15);

return cr53530_state;
}catch (e53551){var cr53530_exception = e53551;
(cr53530_state[(0)] = null);

(cr53530_state[(2)] = null);

(cr53530_state[(1)] = null);

throw cr53530_exception;
}});
var cr53530_block_0 = (function hyperfiddle$electric$throttle_$_cr53530_block_0(cr53530_state){
try{var cr53530_place_0 = (1);
var cr53530_place_1 = missionary.core.relieve;
var cr53530_place_2 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr53530_place_3 = _GT_in;
var cr53530_place_4 = (function (){var G__53554 = cr53530_place_2;
var G__53555 = cr53530_place_3;
var fexpr__53553 = cr53530_place_1;
return (fexpr__53553.cljs$core$IFn$_invoke$arity$2 ? fexpr__53553.cljs$core$IFn$_invoke$arity$2(G__53554,G__53555) : fexpr__53553.call(null,G__53554,G__53555));
})();
(cr53530_state[(0)] = cr53530_block_1);

return missionary.core.fork(cr53530_place_0,cr53530_place_4);
}catch (e53552){var cr53530_exception = e53552;
(cr53530_state[(0)] = null);

throw cr53530_exception;
}});
var cr53530_block_5 = (function hyperfiddle$electric$throttle_$_cr53530_block_5(cr53530_state){
try{var cr53530_place_19 = missionary.core.unpark();
var cr53530_place_20 = (1);
var cr53530_place_21 = missionary.core.none;
(cr53530_state[(0)] = cr53530_block_6);

return missionary.core.fork(cr53530_place_20,cr53530_place_21);
}catch (e53556){var cr53530_exception = e53556;
(cr53530_state[(0)] = null);

(cr53530_state[(2)] = null);

throw cr53530_exception;
}});
var cr53530_block_6 = (function hyperfiddle$electric$throttle_$_cr53530_block_6(cr53530_state){
try{var cr53530_place_22 = missionary.core.unpark();
(cr53530_state[(0)] = cr53530_block_8);

(cr53530_state[(2)] = cr53530_place_22);

return cr53530_state;
}catch (e53557){var cr53530_exception = e53557;
(cr53530_state[(0)] = null);

(cr53530_state[(2)] = null);

throw cr53530_exception;
}});
var cr53530_block_7 = (function hyperfiddle$electric$throttle_$_cr53530_block_7(cr53530_state){
try{var cr53530_place_12 = (cr53530_state[(1)]);
var cr53530_place_23 = "No matching clause: ";
var cr53530_place_24 = cr53530_place_12;
var cr53530_place_25 = [cr53530_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr53530_place_24)].join('');
var cr53530_place_26 = (new Error(cr53530_place_25));
var cr53530_place_27 = (function(){throw cr53530_place_26})();
(cr53530_state[(0)] = null);

(cr53530_state[(1)] = null);

return null;
}catch (e53558){var cr53530_exception = e53558;
(cr53530_state[(0)] = null);

(cr53530_state[(1)] = null);

throw cr53530_exception;
}});
var cr53530_block_4 = (function hyperfiddle$electric$throttle_$_cr53530_block_4(cr53530_state){
try{var cr53530_place_16 = missionary.core.sleep;
var cr53530_place_17 = dur;
var cr53530_place_18 = (function (){var G__53561 = cr53530_place_17;
var fexpr__53560 = cr53530_place_16;
return (fexpr__53560.cljs$core$IFn$_invoke$arity$1 ? fexpr__53560.cljs$core$IFn$_invoke$arity$1(G__53561) : fexpr__53560.call(null,G__53561));
})();
(cr53530_state[(0)] = cr53530_block_5);

return missionary.core.park(cr53530_place_18);
}catch (e53559){var cr53530_exception = e53559;
(cr53530_state[(0)] = null);

(cr53530_state[(2)] = null);

throw cr53530_exception;
}});
var cr53530_block_8 = (function hyperfiddle$electric$throttle_$_cr53530_block_8(cr53530_state){
try{var cr53530_place_14 = (cr53530_state[(2)]);
(cr53530_state[(0)] = null);

(cr53530_state[(2)] = null);

return cr53530_place_14;
}catch (e53562){var cr53530_exception = e53562;
(cr53530_state[(0)] = null);

(cr53530_state[(2)] = null);

throw cr53530_exception;
}});
var cr53530_block_2 = (function hyperfiddle$electric$throttle_$_cr53530_block_2(cr53530_state){
try{var cr53530_place_12 = missionary.core.unpark();
var cr53530_place_13 = cr53530_place_12;
var cr53530_place_14 = null;
var G__53564 = cr53530_place_13;
switch (G__53564) {
case (0):
(cr53530_state[(0)] = cr53530_block_3);

(cr53530_state[(2)] = cr53530_place_14);

return cr53530_state;

break;
case (1):
(cr53530_state[(0)] = cr53530_block_4);

(cr53530_state[(1)] = null);

(cr53530_state[(2)] = cr53530_place_14);

return cr53530_state;

break;
default:
(cr53530_state[(0)] = cr53530_block_7);

(cr53530_state[(1)] = null);

(cr53530_state[(1)] = cr53530_place_12);

return cr53530_state;

}
}catch (e53563){var cr53530_exception = e53563;
(cr53530_state[(0)] = null);

(cr53530_state[(1)] = null);

throw cr53530_exception;
}});
var cr53530_block_1 = (function hyperfiddle$electric$throttle_$_cr53530_block_1(cr53530_state){
try{var cr53530_place_5 = missionary.core.unpark();
var cr53530_place_6 = (1);
var cr53530_place_7 = missionary.core.seed;
var cr53530_place_8 = cljs.core.range;
var cr53530_place_9 = (2);
var cr53530_place_10 = (function (){var G__53567 = cr53530_place_9;
var fexpr__53566 = cr53530_place_8;
return (fexpr__53566.cljs$core$IFn$_invoke$arity$1 ? fexpr__53566.cljs$core$IFn$_invoke$arity$1(G__53567) : fexpr__53566.call(null,G__53567));
})();
var cr53530_place_11 = (function (){var G__53569 = cr53530_place_10;
var fexpr__53568 = cr53530_place_7;
return (fexpr__53568.cljs$core$IFn$_invoke$arity$1 ? fexpr__53568.cljs$core$IFn$_invoke$arity$1(G__53569) : fexpr__53568.call(null,G__53569));
})();
(cr53530_state[(0)] = cr53530_block_2);

(cr53530_state[(1)] = cr53530_place_5);

return missionary.core.fork(cr53530_place_6,cr53530_place_11);
}catch (e53565){var cr53530_exception = e53565;
(cr53530_state[(0)] = null);

throw cr53530_exception;
}});
return cloroutine.impl.coroutine((function (){var G__53570 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__53570[(0)] = cr53530_block_0);

return G__53570;
})());
})(),missionary.core.ap_run);
});
/**
 * Bound to the HTTP request of the page in which the current Electric program is running.
 */
hyperfiddle.electric._STAR_http_request_STAR_ = null;
hyperfiddle.electric._snapshot = (function hyperfiddle$electric$_snapshot(flow){
return missionary.core.eduction.cljs$core$IFn$_invoke$arity$2(contrib.data.take_upto(cljs.core.complement(cljs.core.PersistentHashSet.createAsIfByAssoc([hyperfiddle.electric.impl.runtime.pending]))),flow);
});
hyperfiddle.electric.__GT_Object = (function hyperfiddle$electric$__GT_Object(){
return (new Object());
});
hyperfiddle.electric.pending = (new hyperfiddle.electric.Pending());

//# sourceMappingURL=hyperfiddle.electric.js.map
