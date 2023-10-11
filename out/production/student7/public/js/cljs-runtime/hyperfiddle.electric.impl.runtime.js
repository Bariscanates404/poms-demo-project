goog.provide('hyperfiddle.electric.impl.runtime');
hyperfiddle.electric.impl.runtime.fail = (function hyperfiddle$electric$impl$runtime$fail(x){
throw x;
});
hyperfiddle.electric.impl.runtime.failure = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$1((function (p1__51661_SHARP_){
if((p1__51661_SHARP_ instanceof hyperfiddle.electric.Failure)){
return p1__51661_SHARP_;
} else {
return null;
}
}));
hyperfiddle.electric.impl.runtime.pending = (new hyperfiddle.electric.Failure((new hyperfiddle.electric.Pending())));
hyperfiddle.electric.impl.runtime.error = (function hyperfiddle$electric$impl$runtime$error(msg){
return (new Error(msg));
});
hyperfiddle.electric.impl.runtime.pst = (function hyperfiddle$electric$impl$runtime$pst(e){
return console.error(e);
});
hyperfiddle.electric.impl.runtime.select_debug_info = (function hyperfiddle$electric$impl$runtime$select_debug_info(debug_info){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(debug_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425)], null)),contrib.data.select_ns(new cljs.core.Keyword(null,"hyperfiddle.electric.debug","hyperfiddle.electric.debug",-987645572),debug_info)], 0));
});
hyperfiddle.electric.impl.runtime.check_failure = (function hyperfiddle$electric$impl$runtime$check_failure(debug_info,_LT_x){
return missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic((function (x){
if((x instanceof hyperfiddle.electric.Failure)){
return hyperfiddle.electric.debug.error(hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),x);
} else {
return x;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_LT_x], 0));
});
hyperfiddle.electric.impl.runtime.latest_apply = (function hyperfiddle$electric$impl$runtime$latest_apply(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52409 = arguments.length;
var i__5770__auto___52410 = (0);
while(true){
if((i__5770__auto___52410 < len__5769__auto___52409)){
args__5775__auto__.push((arguments[i__5770__auto___52410]));

var G__52411 = (i__5770__auto___52410 + (1));
i__5770__auto___52410 = G__52411;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.latest_apply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(hyperfiddle.electric.impl.runtime.latest_apply.cljs$core$IFn$_invoke$arity$variadic = (function (debug_info,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(missionary.core.latest,(function() { 
var G__52412__delegate = function (f,args__$1){
var temp__5802__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.failure,f,args__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var err = temp__5802__auto__;
return hyperfiddle.electric.debug.error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),new cljs.core.Keyword("hyperfiddle.electric.debug","args","hyperfiddle.electric.debug/args",-1101355176),args__$1),err);
} else {
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
}catch (e51677){var e = e51677;
return hyperfiddle.electric.debug.error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),new cljs.core.Keyword("hyperfiddle.electric.debug","args","hyperfiddle.electric.debug/args",-1101355176),args__$1),(new hyperfiddle.electric.Failure(e)));
}}
};
var G__52412 = function (f,var_args){
var args__$1 = null;
if (arguments.length > 1) {
var G__52413__i = 0, G__52413__a = new Array(arguments.length -  1);
while (G__52413__i < G__52413__a.length) {G__52413__a[G__52413__i] = arguments[G__52413__i + 1]; ++G__52413__i;}
  args__$1 = new cljs.core.IndexedSeq(G__52413__a,0,null);
} 
return G__52412__delegate.call(this,f,args__$1);};
G__52412.cljs$lang$maxFixedArity = 1;
G__52412.cljs$lang$applyTo = (function (arglist__52414){
var f = cljs.core.first(arglist__52414);
var args__$1 = cljs.core.rest(arglist__52414);
return G__52412__delegate(f,args__$1);
});
G__52412.cljs$core$IFn$_invoke$arity$variadic = G__52412__delegate;
return G__52412;
})()
,args);
}));

(hyperfiddle.electric.impl.runtime.latest_apply.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.latest_apply.cljs$lang$applyTo = (function (seq51668){
var G__51669 = cljs.core.first(seq51668);
var seq51668__$1 = cljs.core.next(seq51668);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51669,seq51668__$1);
}));

hyperfiddle.electric.impl.runtime.latest_first = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(missionary.core.latest,(function (x,y){
if((y instanceof hyperfiddle.electric.Failure)){
return y;
} else {
return x;
}
}));
hyperfiddle.electric.impl.runtime.pure = (function hyperfiddle$electric$impl$runtime$pure(x){
return missionary.core.cp_STAR_((function (){var cr51682_block_0 = (function hyperfiddle$electric$impl$runtime$pure_$_cr51682_block_0(cr51682_state){
try{var cr51682_place_0 = x;
(cr51682_state[(0)] = null);

return cr51682_place_0;
}catch (e51686){var cr51682_exception = e51686;
(cr51682_state[(0)] = null);

throw cr51682_exception;
}});
return cloroutine.impl.coroutine((function (){var G__51690 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__51690[(0)] = cr51682_block_0);

return G__51690;
})());
})());
});
hyperfiddle.electric.impl.runtime.empty_event = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"acks","acks",707064729),(0),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.PersistentHashSet.EMPTY], null);

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.impl.runtime.It = (function (state,cancel,transfer){
this.state = state;
this.cancel = cancel;
this.transfer = transfer;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.It.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__51695 = (arguments.length - (1));
switch (G__51695) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.It.prototype.apply = (function (self__,args51694){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args51694)));
}));

(hyperfiddle.electric.impl.runtime.It.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.cancel.cljs$core$IFn$_invoke$arity$1 ? self__.cancel.cljs$core$IFn$_invoke$arity$1(self__.state) : self__.cancel.call(null,self__.state));
}));

(hyperfiddle.electric.impl.runtime.It.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.transfer.cljs$core$IFn$_invoke$arity$1 ? self__.transfer.cljs$core$IFn$_invoke$arity$1(self__.state) : self__.transfer.call(null,self__.state));
}));

(hyperfiddle.electric.impl.runtime.It.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"cancel","cancel",-323556833,null),new cljs.core.Symbol(null,"transfer","transfer",1967954927,null)], null);
}));

(hyperfiddle.electric.impl.runtime.It.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.It.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/It");

(hyperfiddle.electric.impl.runtime.It.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/It");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/It.
 */
hyperfiddle.electric.impl.runtime.__GT_It = (function hyperfiddle$electric$impl$runtime$__GT_It(state,cancel,transfer){
return (new hyperfiddle.electric.impl.runtime.It(state,cancel,transfer));
});

hyperfiddle.electric.impl.runtime.lift_cancelled = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,(function (it){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.runtime !== 'undefined') && (typeof hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime51709 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime51709 = (function (it,meta51710){
this.it = it;
this.meta51710 = meta51710;
this.cljs$lang$protocol_mask$partition0$ = 425985;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime51709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51711,meta51710__$1){
var self__ = this;
var _51711__$1 = this;
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime51709(self__.it,meta51710__$1));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime51709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51711){
var self__ = this;
var _51711__$1 = this;
return self__.meta51710;
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime51709.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__51715 = (arguments.length - (1));
switch (G__51715) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime51709.prototype.apply = (function (self__,args51714){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args51714)));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime51709.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.it.cljs$core$IFn$_invoke$arity$0 ? self__.it.cljs$core$IFn$_invoke$arity$0() : self__.it.call(null));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime51709.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
try{return cljs.core.deref(self__.it);
}catch (e51717){if((e51717 instanceof missionary.Cancelled)){
var e = e51717;
return (new hyperfiddle.electric.Failure(e));
} else {
throw e51717;

}
}}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime51709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"it","it",-1630841225,null),new cljs.core.Symbol(null,"meta51710","meta51710",-848259075,null)], null);
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime51709.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime51709.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime51709");

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime51709.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime51709");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime51709.
 */
hyperfiddle.electric.impl.runtime.__GT_t_hyperfiddle$electric$impl$runtime51709 = (function hyperfiddle$electric$impl$runtime$__GT_t_hyperfiddle$electric$impl$runtime51709(it__$1,meta51710){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime51709(it__$1,meta51710));
});

}

return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime51709(it,cljs.core.PersistentArrayMap.EMPTY));
}));
hyperfiddle.electric.impl.runtime.signal = (function hyperfiddle$electric$impl$runtime$signal(_LT_x){
return missionary.core.signal_BANG_(hyperfiddle.electric.impl.runtime.lift_cancelled(_LT_x));
});
hyperfiddle.electric.impl.runtime.this$ = cljs.core.volatile_BANG_(null);
hyperfiddle.electric.impl.runtime.context_slot_root = ((0) | (0));
hyperfiddle.electric.impl.runtime.context_slot_local_id = ((1) | (0));
hyperfiddle.electric.impl.runtime.context_slot_remote_id = ((2) | (0));
hyperfiddle.electric.impl.runtime.context_slot_pending_rpos = ((3) | (0));
hyperfiddle.electric.impl.runtime.context_slot_pending_wpos = ((4) | (0));
hyperfiddle.electric.impl.runtime.context_slot_pending_buffer = ((5) | (0));
hyperfiddle.electric.impl.runtime.context_slot_frame_store = ((6) | (0));
hyperfiddle.electric.impl.runtime.context_slot_event = ((7) | (0));
hyperfiddle.electric.impl.runtime.context_slot_check = ((8) | (0));
hyperfiddle.electric.impl.runtime.context_slot_notifier = ((9) | (0));
hyperfiddle.electric.impl.runtime.context_slot_terminator = ((10) | (0));
hyperfiddle.electric.impl.runtime.context_slot_incoming = ((11) | (0));
hyperfiddle.electric.impl.runtime.context_slots = ((12) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_parent = ((0) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_position = ((1) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_buffer = ((2) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_size = ((3) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_foreigns = ((4) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_hooks = ((5) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_vars = ((6) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_remote = ((7) | (0));
hyperfiddle.electric.impl.runtime.tier_slots = ((8) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_context = ((0) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_parent = ((1) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_id = ((2) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_position = ((3) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_foreign = ((4) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_static = ((5) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_dynamic = ((6) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_variables = ((7) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_sources = ((8) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_targets = ((9) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_inputs = ((10) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_tiers = ((11) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_constants = ((12) | (0));
hyperfiddle.electric.impl.runtime.frame_slots = ((13) | (0));
hyperfiddle.electric.impl.runtime.input_slot_frame = ((0) | (0));
hyperfiddle.electric.impl.runtime.input_slot_notifier = ((1) | (0));
hyperfiddle.electric.impl.runtime.input_slot_terminator = ((2) | (0));
hyperfiddle.electric.impl.runtime.input_slot_current = ((3) | (0));
hyperfiddle.electric.impl.runtime.input_slot_dirty = ((4) | (0));
hyperfiddle.electric.impl.runtime.input_slot_check = ((5) | (0));
hyperfiddle.electric.impl.runtime.input_slot_pending = ((6) | (0));
hyperfiddle.electric.impl.runtime.input_slot_cancel = ((7) | (0));
hyperfiddle.electric.impl.runtime.input_slots = ((8) | (0));
hyperfiddle.electric.impl.runtime.output_slot_input = ((0) | (0));
hyperfiddle.electric.impl.runtime.output_slot_id = ((1) | (0));
hyperfiddle.electric.impl.runtime.output_slot_iterator = ((2) | (0));
hyperfiddle.electric.impl.runtime.output_slot_current = ((3) | (0));
hyperfiddle.electric.impl.runtime.output_slot_dirty = ((4) | (0));
hyperfiddle.electric.impl.runtime.output_slot_done = ((5) | (0));
hyperfiddle.electric.impl.runtime.output_slot_prev = ((6) | (0));
hyperfiddle.electric.impl.runtime.output_slot_next = ((7) | (0));
hyperfiddle.electric.impl.runtime.output_slot_time = ((8) | (0));
hyperfiddle.electric.impl.runtime.output_slots = ((9) | (0));
hyperfiddle.electric.impl.runtime.aswap = (function hyperfiddle$electric$impl$runtime$aswap(var_args){
var G__51750 = arguments.length;
switch (G__51750) {
case 3:
return hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___52428 = arguments.length;
var i__5770__auto___52429 = (0);
while(true){
if((i__5770__auto___52429 < len__5769__auto___52428)){
args_arr__5794__auto__.push((arguments[i__5770__auto___52429]));

var G__52431 = (i__5770__auto___52429 + (1));
i__5770__auto___52429 = G__52431;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((6)),(0),null));
return hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__5795__auto__);

}
});

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3 = (function (arr,slot,f){
return (arr[slot] = (function (){var G__51755 = (arr[slot]);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__51755) : f.call(null,G__51755));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4 = (function (arr,slot,f,a){
return (arr[slot] = (function (){var G__51758 = (arr[slot]);
var G__51759 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__51758,G__51759) : f.call(null,G__51758,G__51759));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$5 = (function (arr,slot,f,a,b){
return (arr[slot] = (function (){var G__51761 = (arr[slot]);
var G__51762 = a;
var G__51763 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__51761,G__51762,G__51763) : f.call(null,G__51761,G__51762,G__51763));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$6 = (function (arr,slot,f,a,b,c){
return (arr[slot] = (function (){var G__51766 = (arr[slot]);
var G__51767 = a;
var G__51768 = b;
var G__51769 = c;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__51766,G__51767,G__51768,G__51769) : f.call(null,G__51766,G__51767,G__51768,G__51769));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$variadic = (function (arr,slot,f,a,b,c,ds){
return (arr[slot] = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,(arr[slot]),a,b,c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ds], 0)));
}));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.aswap.cljs$lang$applyTo = (function (seq51743){
var G__51744 = cljs.core.first(seq51743);
var seq51743__$1 = cljs.core.next(seq51743);
var G__51745 = cljs.core.first(seq51743__$1);
var seq51743__$2 = cljs.core.next(seq51743__$1);
var G__51746 = cljs.core.first(seq51743__$2);
var seq51743__$3 = cljs.core.next(seq51743__$2);
var G__51747 = cljs.core.first(seq51743__$3);
var seq51743__$4 = cljs.core.next(seq51743__$3);
var G__51748 = cljs.core.first(seq51743__$4);
var seq51743__$5 = cljs.core.next(seq51743__$4);
var G__51749 = cljs.core.first(seq51743__$5);
var seq51743__$6 = cljs.core.next(seq51743__$5);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51744,G__51745,G__51746,G__51747,G__51748,G__51749,seq51743__$6);
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$lang$maxFixedArity = (6));

hyperfiddle.electric.impl.runtime.doto_aset = (function hyperfiddle$electric$impl$runtime$doto_aset(arr,k,v){
var G__51774 = arr;
(G__51774[(k | (0))] = v);

return G__51774;
});
hyperfiddle.electric.impl.runtime.make_context = (function hyperfiddle$electric$impl$runtime$make_context(){
var G__51776 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.context_slots);
(G__51776[hyperfiddle.electric.impl.runtime.context_slot_local_id] = cljs.core.identity((0)));

(G__51776[hyperfiddle.electric.impl.runtime.context_slot_remote_id] = cljs.core.identity((0)));

(G__51776[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos] = cljs.core.identity((0)));

(G__51776[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos] = cljs.core.identity((0)));

(G__51776[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2)));

(G__51776[hyperfiddle.electric.impl.runtime.context_slot_frame_store] = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return G__51776;
});
hyperfiddle.electric.impl.runtime.make_tier = (function hyperfiddle$electric$impl$runtime$make_tier(parent,position){
return ((parent[hyperfiddle.electric.impl.runtime.frame_slot_tiers])[(position | (0))] = (function (){var G__51780 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.tier_slots);
(G__51780[hyperfiddle.electric.impl.runtime.tier_slot_parent] = parent);

(G__51780[hyperfiddle.electric.impl.runtime.tier_slot_position] = position);

(G__51780[hyperfiddle.electric.impl.runtime.tier_slot_buffer] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8)));

(G__51780[hyperfiddle.electric.impl.runtime.tier_slot_size] = cljs.core.identity(((0) | (0))));

(G__51780[hyperfiddle.electric.impl.runtime.tier_slot_foreigns] = cljs.core.PersistentArrayMap.EMPTY);

(G__51780[hyperfiddle.electric.impl.runtime.tier_slot_hooks] = cljs.core.PersistentArrayMap.EMPTY);

return G__51780;
})());
});
hyperfiddle.electric.impl.runtime.make_frame = (function hyperfiddle$electric$impl$runtime$make_frame(context,parent,id,position,foreign,static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,buffer,vars,boot){
var tier_count = (variable_count + source_count);
var frame = (function (){var G__51787 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.frame_slots);
(G__51787[hyperfiddle.electric.impl.runtime.frame_slot_context] = context);

(G__51787[hyperfiddle.electric.impl.runtime.frame_slot_parent] = parent);

(G__51787[hyperfiddle.electric.impl.runtime.frame_slot_id] = id);

(G__51787[hyperfiddle.electric.impl.runtime.frame_slot_position] = position);

(G__51787[hyperfiddle.electric.impl.runtime.frame_slot_foreign] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.count(foreign)));

(G__51787[hyperfiddle.electric.impl.runtime.frame_slot_static] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.count(static$)));

(G__51787[hyperfiddle.electric.impl.runtime.frame_slot_dynamic] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.count(dynamic)));

(G__51787[hyperfiddle.electric.impl.runtime.frame_slot_variables] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(variable_count));

(G__51787[hyperfiddle.electric.impl.runtime.frame_slot_sources] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(source_count));

(G__51787[hyperfiddle.electric.impl.runtime.frame_slot_targets] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(target_count));

(G__51787[hyperfiddle.electric.impl.runtime.frame_slot_inputs] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(input_count));

(G__51787[hyperfiddle.electric.impl.runtime.frame_slot_tiers] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(tier_count));

(G__51787[hyperfiddle.electric.impl.runtime.frame_slot_constants] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(constant_count));

return G__51787;
})();
var n__5636__auto___52438 = tier_count;
var i_52439 = (0);
while(true){
if((i_52439 < n__5636__auto___52438)){
hyperfiddle.electric.impl.runtime.make_tier(frame,i_52439);

var G__52440 = (i_52439 + (1));
i_52439 = G__52440;
continue;
} else {
}
break;
}

(buffer[(position | (0))] = frame);

hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$5(context,hyperfiddle.electric.impl.runtime.context_slot_frame_store,cljs.core.assoc_BANG_,id,frame);

var prevs = cljs.core.reduce_kv((function (m,v,_LT_x){
var prev = (vars[(v | (0))]);
var proc = hyperfiddle.electric.impl.runtime.signal(_LT_x);
((frame[hyperfiddle.electric.impl.runtime.frame_slot_foreign])[cljs.core.count(m)] = proc);

(vars[(v | (0))] = proc);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,prev);
}),cljs.core.PersistentArrayMap.EMPTY,foreign);
cljs.core.reduce_kv((function (arr,i,_LT_x){
(arr[(i | (0))] = hyperfiddle.electric.impl.runtime.signal(_LT_x));

return arr;
}),(frame[hyperfiddle.electric.impl.runtime.frame_slot_static]),static$);

cljs.core.reduce_kv((function (arr,i,v){
(arr[(i | (0))] = hyperfiddle.electric.impl.runtime.signal((vars[(v | (0))])));

return arr;
}),(frame[hyperfiddle.electric.impl.runtime.frame_slot_dynamic]),dynamic);

var result = (boot.cljs$core$IFn$_invoke$arity$2 ? boot.cljs$core$IFn$_invoke$arity$2(frame,vars) : boot.call(null,frame,vars));
cljs.core.reduce_kv(hyperfiddle.electric.impl.runtime.doto_aset,vars,prevs);

return result;
});
hyperfiddle.electric.impl.runtime.input_ready = (function hyperfiddle$electric$impl$runtime$input_ready(input){
if(((input[hyperfiddle.electric.impl.runtime.input_slot_cancel]) == null)){
(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = false);

var fexpr__51803 = (input[hyperfiddle.electric.impl.runtime.input_slot_notifier]);
return (fexpr__51803.cljs$core$IFn$_invoke$arity$0 ? fexpr__51803.cljs$core$IFn$_invoke$arity$0() : fexpr__51803.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.runtime.output_dirty = (function hyperfiddle$electric$impl$runtime$output_dirty(output){
var input = (output[hyperfiddle.electric.impl.runtime.output_slot_input]);
var dirty = (input[hyperfiddle.electric.impl.runtime.input_slot_dirty]);
(output[hyperfiddle.electric.impl.runtime.output_slot_dirty] = dirty);

(input[hyperfiddle.electric.impl.runtime.input_slot_dirty] = output);

if((dirty == null)){
if((input === (input[hyperfiddle.electric.impl.runtime.input_slot_check]))){
var frame_52443 = (input[hyperfiddle.electric.impl.runtime.input_slot_frame]);
var context_52444 = (frame_52443[hyperfiddle.electric.impl.runtime.frame_slot_context]);
var check_52445 = (context_52444[hyperfiddle.electric.impl.runtime.context_slot_check]);
(context_52444[hyperfiddle.electric.impl.runtime.context_slot_check] = input);

(input[hyperfiddle.electric.impl.runtime.input_slot_check] = check_52445);

if(((context_52444[hyperfiddle.electric.impl.runtime.context_slot_event]) == null)){
(context_52444[hyperfiddle.electric.impl.runtime.context_slot_event] = hyperfiddle.electric.impl.runtime.empty_event);

var fexpr__51805_52447 = (context_52444[hyperfiddle.electric.impl.runtime.context_slot_notifier]);
(fexpr__51805_52447.cljs$core$IFn$_invoke$arity$0 ? fexpr__51805_52447.cljs$core$IFn$_invoke$arity$0() : fexpr__51805_52447.call(null));
} else {
}
} else {
}
} else {
}

return hyperfiddle.electric.impl.runtime.input_ready(input);
});
hyperfiddle.electric.impl.runtime.output_spawn = (function hyperfiddle$electric$impl$runtime$output_spawn(input,output){
if((output == null)){
} else {
(output[hyperfiddle.electric.impl.runtime.output_slot_input] = input);

(output[hyperfiddle.electric.impl.runtime.output_slot_iterator] = (function (){var G__51809 = (function (){
return hyperfiddle.electric.impl.runtime.output_dirty(output);
});
var G__51810 = (function (){
(output[hyperfiddle.electric.impl.runtime.output_slot_done] = true);

return hyperfiddle.electric.impl.runtime.output_dirty(output);
});
var fexpr__51808 = (output[hyperfiddle.electric.impl.runtime.output_slot_iterator]);
return (fexpr__51808.cljs$core$IFn$_invoke$arity$2 ? fexpr__51808.cljs$core$IFn$_invoke$arity$2(G__51809,G__51810) : fexpr__51808.call(null,G__51809,G__51810));
})());
}

return input;
});
hyperfiddle.electric.impl.runtime.make_output = (function hyperfiddle$electric$impl$runtime$make_output(id,_LT_x){
var output = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.output_slots);
(output[hyperfiddle.electric.impl.runtime.output_slot_id] = id);

(output[hyperfiddle.electric.impl.runtime.output_slot_done] = false);

(output[hyperfiddle.electric.impl.runtime.output_slot_prev] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_next] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_dirty] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_current] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_iterator] = _LT_x);

return output;
});
hyperfiddle.electric.impl.runtime.input_cancel = (function hyperfiddle$electric$impl$runtime$input_cancel(input){
var c = (input[hyperfiddle.electric.impl.runtime.input_slot_cancel]);
(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = true);

if((c == null)){
var fexpr__51816 = (input[hyperfiddle.electric.impl.runtime.input_slot_notifier]);
return (fexpr__51816.cljs$core$IFn$_invoke$arity$0 ? fexpr__51816.cljs$core$IFn$_invoke$arity$0() : fexpr__51816.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.runtime.input_change = (function hyperfiddle$electric$impl$runtime$input_change(input,x){
(input[hyperfiddle.electric.impl.runtime.input_slot_current] = x);

return hyperfiddle.electric.impl.runtime.input_ready(input);
});
hyperfiddle.electric.impl.runtime.input_freeze = (function hyperfiddle$electric$impl$runtime$input_freeze(input){
(input[hyperfiddle.electric.impl.runtime.input_slot_pending] = (-1));

if(((input[hyperfiddle.electric.impl.runtime.input_slot_cancel]) == null)){
(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = false);

var fexpr__51823 = (input[hyperfiddle.electric.impl.runtime.input_slot_terminator]);
return (fexpr__51823.cljs$core$IFn$_invoke$arity$0 ? fexpr__51823.cljs$core$IFn$_invoke$arity$0() : fexpr__51823.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.runtime.update_event = (function hyperfiddle$electric$impl$runtime$update_event(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52449 = arguments.length;
var i__5770__auto___52450 = (0);
while(true){
if((i__5770__auto___52450 < len__5769__auto___52449)){
args__5775__auto__.push((arguments[i__5770__auto___52450]));

var G__52451 = (i__5770__auto___52450 + (1));
i__5770__auto___52450 = G__52451;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic = (function (context,k,f,args){
var temp__5806__auto__ = (context[hyperfiddle.electric.impl.runtime.context_slot_event]);
if((temp__5806__auto__ == null)){
(context[hyperfiddle.electric.impl.runtime.context_slot_event] = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,hyperfiddle.electric.impl.runtime.empty_event,k,f,args));

var fexpr__51835 = (context[hyperfiddle.electric.impl.runtime.context_slot_notifier]);
return (fexpr__51835.cljs$core$IFn$_invoke$arity$0 ? fexpr__51835.cljs$core$IFn$_invoke$arity$0() : fexpr__51835.call(null));
} else {
var event = temp__5806__auto__;
return (context[hyperfiddle.electric.impl.runtime.context_slot_event] = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,event,k,f,args));
}
}));

(hyperfiddle.electric.impl.runtime.update_event.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.update_event.cljs$lang$applyTo = (function (seq51827){
var G__51828 = cljs.core.first(seq51827);
var seq51827__$1 = cljs.core.next(seq51827);
var G__51829 = cljs.core.first(seq51827__$1);
var seq51827__$2 = cljs.core.next(seq51827__$1);
var G__51830 = cljs.core.first(seq51827__$2);
var seq51827__$3 = cljs.core.next(seq51827__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51828,G__51829,G__51830,seq51827__$3);
}));

hyperfiddle.electric.impl.runtime.input_check = (function hyperfiddle$electric$impl$runtime$input_check(input){
var frame = (input[hyperfiddle.electric.impl.runtime.input_slot_frame]);
var context = (frame[hyperfiddle.electric.impl.runtime.frame_slot_context]);
while(true){
var temp__5806__auto__ = (input[hyperfiddle.electric.impl.runtime.input_slot_dirty]);
if((temp__5806__auto__ == null)){
return null;
} else {
var output = temp__5806__auto__;
var path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- (frame[hyperfiddle.electric.impl.runtime.frame_slot_id])),(output[hyperfiddle.electric.impl.runtime.output_slot_id])], null);
(input[hyperfiddle.electric.impl.runtime.input_slot_dirty] = (output[hyperfiddle.electric.impl.runtime.output_slot_dirty]));

(output[hyperfiddle.electric.impl.runtime.output_slot_dirty] = output);

if(cljs.core.truth_((output[hyperfiddle.electric.impl.runtime.output_slot_done]))){
hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));
} else {
var x_52454 = cljs.core.deref((output[hyperfiddle.electric.impl.runtime.output_slot_iterator]));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((output[hyperfiddle.electric.impl.runtime.output_slot_current]),(output[hyperfiddle.electric.impl.runtime.output_slot_current] = x_52454))){
} else {
var buffer_52455 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer]);
var wpos_52456 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos]);
var temp__5806__auto___52457__$1 = (output[hyperfiddle.electric.impl.runtime.output_slot_time]);
if((temp__5806__auto___52457__$1 == null)){
hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(input,hyperfiddle.electric.impl.runtime.input_slot_pending,cljs.core.inc);
} else {
var t_52460 = temp__5806__auto___52457__$1;
var p_52461 = (output[hyperfiddle.electric.impl.runtime.output_slot_prev]);
var n_52462 = (output[hyperfiddle.electric.impl.runtime.output_slot_next]);
(buffer_52455[t_52460] = (((p_52461 === output))?null:(function (){
(p_52461[hyperfiddle.electric.impl.runtime.output_slot_next] = n_52462);

return (n_52462[hyperfiddle.electric.impl.runtime.output_slot_prev] = p_52461);
})()
));
}

(output[hyperfiddle.electric.impl.runtime.output_slot_time] = wpos_52456);

var temp__5806__auto___52466__$1 = (buffer_52455[wpos_52456]);
if((temp__5806__auto___52466__$1 == null)){
(buffer_52455[wpos_52456] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_prev] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_next] = output);
} else {
var p_52469 = temp__5806__auto___52466__$1;
var n_52470 = (p_52469[hyperfiddle.electric.impl.runtime.output_slot_next]);
(p_52469[hyperfiddle.electric.impl.runtime.output_slot_next] = output);

(n_52470[hyperfiddle.electric.impl.runtime.output_slot_prev] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_prev] = p_52469);

(output[hyperfiddle.electric.impl.runtime.output_slot_next] = n_52470);
}

hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,x_52454], 0));
}
}

continue;
}
break;
}
});
hyperfiddle.electric.impl.runtime.input_transfer = (function hyperfiddle$electric$impl$runtime$input_transfer(input){
hyperfiddle.electric.impl.runtime.input_check(input);

if(cljs.core.truth_((input[hyperfiddle.electric.impl.runtime.input_slot_cancel]))){
var fexpr__51847_52471 = (input[hyperfiddle.electric.impl.runtime.input_slot_terminator]);
(fexpr__51847_52471.cljs$core$IFn$_invoke$arity$0 ? fexpr__51847_52471.cljs$core$IFn$_invoke$arity$0() : fexpr__51847_52471.call(null));

throw (new missionary.Cancelled());
} else {
var G__51850 = (input[hyperfiddle.electric.impl.runtime.input_slot_pending]);
switch (G__51850) {
case (-1):
var fexpr__51851_52474 = (input[hyperfiddle.electric.impl.runtime.input_slot_terminator]);
(fexpr__51851_52474.cljs$core$IFn$_invoke$arity$0 ? fexpr__51851_52474.cljs$core$IFn$_invoke$arity$0() : fexpr__51851_52474.call(null));

return (input[hyperfiddle.electric.impl.runtime.input_slot_current]);

break;
case (0):
(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = null);

return (input[hyperfiddle.electric.impl.runtime.input_slot_current]);

break;
default:
(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = null);

return hyperfiddle.electric.impl.runtime.pending;

}
}
});
hyperfiddle.electric.impl.runtime.make_input = (function hyperfiddle$electric$impl$runtime$make_input(frame,deps){
var input = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.input_slots);
(input[hyperfiddle.electric.impl.runtime.input_slot_frame] = frame);

(input[hyperfiddle.electric.impl.runtime.input_slot_pending] = (0));

(input[hyperfiddle.electric.impl.runtime.input_slot_current] = hyperfiddle.electric.impl.runtime.pending);

(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = false);

(input[hyperfiddle.electric.impl.runtime.input_slot_check] = input);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.output_spawn,input,deps);
});
hyperfiddle.electric.impl.runtime.input_spawn = (function hyperfiddle$electric$impl$runtime$input_spawn(frame,slot,deps){
return missionary.core.signal_BANG_((function (n,t){
var input = hyperfiddle.electric.impl.runtime.make_input(frame,deps);
(input[hyperfiddle.electric.impl.runtime.input_slot_notifier] = n);

(input[hyperfiddle.electric.impl.runtime.input_slot_terminator] = t);

((frame[hyperfiddle.electric.impl.runtime.frame_slot_inputs])[(slot | (0))] = input);

(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));

return hyperfiddle.electric.impl.runtime.__GT_It(input,hyperfiddle.electric.impl.runtime.input_cancel,hyperfiddle.electric.impl.runtime.input_transfer);
}));
});
hyperfiddle.electric.impl.runtime.check_unbound_var = (function hyperfiddle$electric$impl$runtime$check_unbound_var(debug_info,_LT_x){
return missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic((function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","unbound","hyperfiddle.electric.impl.runtime/unbound",63043117),x)){
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.impl.runtime.error(["Unbound var `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215).cljs$core$IFn$_invoke$arity$1(debug_info)),"`"].join(''))));
} else {
return x;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_LT_x], 0));
});
hyperfiddle.electric.impl.runtime.static$ = (function hyperfiddle$electric$impl$runtime$static(frame,slot){
return ((frame[hyperfiddle.electric.impl.runtime.frame_slot_static])[(slot | (0))]);
});
hyperfiddle.electric.impl.runtime.dynamic = (function hyperfiddle$electric$impl$runtime$dynamic(frame,slot,debug_info){
return hyperfiddle.electric.impl.runtime.check_unbound_var(debug_info,((frame[hyperfiddle.electric.impl.runtime.frame_slot_dynamic])[(slot | (0))]));
});
/**
 * A snapshot of the tree below given frame, as nested vectors. Frame vectors start with their id.
 */
hyperfiddle.electric.impl.runtime.tree = (function hyperfiddle$electric$impl$runtime$tree(f){
var tiers = (f[hyperfiddle.electric.impl.runtime.frame_slot_tiers]);
var v = cljs.core.PersistentVector.EMPTY;
var i = ((0) | (0));
while(true){
if((i === tiers.length)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(f[hyperfiddle.electric.impl.runtime.frame_slot_id]),new cljs.core.Keyword(null,"inputs","inputs",865803858),(f[hyperfiddle.electric.impl.runtime.frame_slot_inputs]).length,new cljs.core.Keyword(null,"targets","targets",2014963406),(f[hyperfiddle.electric.impl.runtime.frame_slot_targets]).length,new cljs.core.Keyword(null,"sources","sources",-321166424),(f[hyperfiddle.electric.impl.runtime.frame_slot_sources]).length,new cljs.core.Keyword(null,"tiers","tiers",-46242789),v], null);
} else {
var G__52477 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,(function (){var tier = (tiers[i]);
var buf = (tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer]);
var v__$1 = cljs.core.PersistentVector.EMPTY;
var i__$1 = ((0) | (0));
while(true){
if((i__$1 === (tier[hyperfiddle.electric.impl.runtime.tier_slot_size]))){
return v__$1;
} else {
var G__52481 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v__$1,(function (){var G__51874 = (buf[i__$1]);
return (hyperfiddle.electric.impl.runtime.tree.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.runtime.tree.cljs$core$IFn$_invoke$arity$1(G__51874) : hyperfiddle.electric.impl.runtime.tree.call(null,G__51874));
})());
var G__52482 = (i__$1 + (1));
v__$1 = G__52481;
i__$1 = G__52482;
continue;
}
break;
}
})());
var G__52478 = (i + (1));
v = G__52477;
i = G__52478;
continue;
}
break;
}
});
hyperfiddle.electric.impl.runtime.find_scope = (function hyperfiddle$electric$impl$runtime$find_scope(f){
var f__$1 = f;
var s = cljs.core.PersistentHashSet.EMPTY;
while(true){
var temp__5806__auto__ = (f__$1[hyperfiddle.electric.impl.runtime.frame_slot_parent]);
if((temp__5806__auto__ == null)){
return s;
} else {
var tier = temp__5806__auto__;
var G__52488 = (tier[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
var G__52489 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(s,cljs.core.keys((tier[hyperfiddle.electric.impl.runtime.tier_slot_hooks])));
f__$1 = G__52488;
s = G__52489;
continue;
}
break;
}
});
hyperfiddle.electric.impl.runtime.frame_walk_tiers = (function hyperfiddle$electric$impl$runtime$frame_walk_tiers(frame,step,k,cb,start){
var tiers = (frame[hyperfiddle.electric.impl.runtime.frame_slot_tiers]);
var size = tiers.length;
var back = (((1) - step) >> (1));
var back_inc_size = (back * (size + (1)));
var stop = (size - back_inc_size);
var i = (((start == null))?(back_inc_size - (1)):start);
while(true){
var i__$1 = (i + step);
if((i__$1 === stop)){
return null;
} else {
var temp__5806__auto__ = (function (){var tier = (tiers[i__$1]);
var temp__5806__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((tier[hyperfiddle.electric.impl.runtime.tier_slot_hooks]),k);
if((temp__5806__auto__ == null)){
return (hyperfiddle.electric.impl.runtime.tier_walk_frames.cljs$core$IFn$_invoke$arity$5 ? hyperfiddle.electric.impl.runtime.tier_walk_frames.cljs$core$IFn$_invoke$arity$5(tier,step,k,cb,null) : hyperfiddle.electric.impl.runtime.tier_walk_frames.call(null,tier,step,k,cb,null));
} else {
var v = temp__5806__auto__;
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(v) : cb.call(null,v));
}
})();
if((temp__5806__auto__ == null)){
var G__52491 = i__$1;
i = G__52491;
continue;
} else {
var x = temp__5806__auto__;
return x;
}
}
break;
}
});
hyperfiddle.electric.impl.runtime.tier_walk_frames = (function hyperfiddle$electric$impl$runtime$tier_walk_frames(tier,step,k,cb,start){
var buf = (tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer]);
var size = (tier[hyperfiddle.electric.impl.runtime.tier_slot_size]);
var back = (((1) - step) >> (1));
var back_inc_size = (back * (size + (1)));
var stop = (size - back_inc_size);
var i = (((start == null))?(back_inc_size - (1)):start);
while(true){
var i__$1 = (i + step);
if((i__$1 === stop)){
return null;
} else {
var temp__5806__auto__ = hyperfiddle.electric.impl.runtime.frame_walk_tiers((buf[i__$1]),step,k,cb,null);
if((temp__5806__auto__ == null)){
var G__52493 = i__$1;
i = G__52493;
continue;
} else {
var x = temp__5806__auto__;
return x;
}
}
break;
}
});
hyperfiddle.electric.impl.runtime.notify_rotate = (function hyperfiddle$electric$impl$runtime$notify_rotate(f,k){
var anchor = (function (){var f__$1 = f;
while(true){
var tier = (f__$1[hyperfiddle.electric.impl.runtime.frame_slot_parent]);
if(cljs.core.contains_QMARK_((tier[hyperfiddle.electric.impl.runtime.tier_slot_hooks]),k)){
return null;
} else {
var temp__5806__auto__ = hyperfiddle.electric.impl.runtime.tier_walk_frames(tier,(1),k,cljs.core.identity,(f__$1[hyperfiddle.electric.impl.runtime.frame_slot_position]));
if((temp__5806__auto__ == null)){
var G__52494 = (tier[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
f__$1 = G__52494;
continue;
} else {
var a = temp__5806__auto__;
return a;
}
}
break;
}
})();
hyperfiddle.electric.impl.runtime.frame_walk_tiers(f,(1),k,(function (target){
return (k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(target,anchor) : k.call(null,target,anchor));
}),null);

return f;
});
hyperfiddle.electric.impl.runtime.array_call = (function hyperfiddle$electric$impl$runtime$array_call(arr){
var n__5636__auto__ = arr.length;
var i = (0);
while(true){
if((i < n__5636__auto__)){
var fexpr__51887_52495 = (arr[i]);
(fexpr__51887_52495.cljs$core$IFn$_invoke$arity$0 ? fexpr__51887_52495.cljs$core$IFn$_invoke$arity$0() : fexpr__51887_52495.call(null));

var G__52497 = (i + (1));
i = G__52497;
continue;
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.runtime.frame_dispose = (function hyperfiddle$electric$impl$runtime$frame_dispose(f){
(f[hyperfiddle.electric.impl.runtime.frame_slot_position] = null);

hyperfiddle.electric.impl.runtime.array_call((f[hyperfiddle.electric.impl.runtime.frame_slot_static]));

hyperfiddle.electric.impl.runtime.array_call((f[hyperfiddle.electric.impl.runtime.frame_slot_dynamic]));

hyperfiddle.electric.impl.runtime.array_call((f[hyperfiddle.electric.impl.runtime.frame_slot_foreign]));

hyperfiddle.electric.impl.runtime.array_call((f[hyperfiddle.electric.impl.runtime.frame_slot_variables]));

return hyperfiddle.electric.impl.runtime.array_call((f[hyperfiddle.electric.impl.runtime.frame_slot_constants]));
});
hyperfiddle.electric.impl.runtime.frame_rotate = (function hyperfiddle$electric$impl$runtime$frame_rotate(f,to){
var from = (f[hyperfiddle.electric.impl.runtime.frame_slot_position]);
var step = cljs.core.compare(to,from);
var tier = (f[hyperfiddle.electric.impl.runtime.frame_slot_parent]);
var buf = (tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer]);
if((to === from)){
var size = ((tier[hyperfiddle.electric.impl.runtime.tier_slot_size]) - (1));
var i_52498 = to;
while(true){
if((i_52498 === size)){
} else {
var j_52499 = (i_52498 + (1));
var y_52500 = (buf[(j_52499 | (0))]);
(y_52500[hyperfiddle.electric.impl.runtime.frame_slot_position] = i_52498);

(buf[(i_52498 | (0))] = y_52500);

var G__52501 = j_52499;
i_52498 = G__52501;
continue;
}
break;
}

(tier[hyperfiddle.electric.impl.runtime.tier_slot_size] = size);

(buf[(size | (0))] = null);

return hyperfiddle.electric.impl.runtime.frame_dispose(f);
} else {
var i_52502 = from;
while(true){
var j_52503 = (i_52502 + step);
var y_52504 = (buf[(j_52503 | (0))]);
(y_52504[hyperfiddle.electric.impl.runtime.frame_slot_position] = i_52502);

(buf[(i_52502 | (0))] = y_52504);

if((to === j_52503)){
} else {
var G__52505 = j_52503;
i_52502 = G__52505;
continue;
}
break;
}

(f[hyperfiddle.electric.impl.runtime.frame_slot_position] = to);

(buf[(to | (0))] = f);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.notify_rotate,f,hyperfiddle.electric.impl.runtime.find_scope(f));
}
});
/**
 * Move a frame. If origin position is equal to target position, frame is removed. Will search and call `hook`.
 */
hyperfiddle.electric.impl.runtime.move = (function hyperfiddle$electric$impl$runtime$move(tier,from,to){
var f = ((tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer])[(from | (0))]);
hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic((f[hyperfiddle.electric.impl.runtime.frame_slot_context]),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"frame","frame",-1711082588),(- (f[hyperfiddle.electric.impl.runtime.frame_slot_id])),new cljs.core.Keyword(null,"position","position",-2011731912),to], null)], 0));

return hyperfiddle.electric.impl.runtime.frame_rotate(f,to);
});
hyperfiddle.electric.impl.runtime.frame_cancel = (function hyperfiddle$electric$impl$runtime$frame_cancel(f){
var temp__5808__auto__ = (f[hyperfiddle.electric.impl.runtime.frame_slot_position]);
if((temp__5808__auto__ == null)){
return null;
} else {
var pos = temp__5808__auto__;
hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic((f[hyperfiddle.electric.impl.runtime.frame_slot_context]),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"frame","frame",-1711082588),(- (f[hyperfiddle.electric.impl.runtime.frame_slot_id])),new cljs.core.Keyword(null,"position","position",-2011731912),pos], null)], 0));

return hyperfiddle.electric.impl.runtime.frame_rotate(f,pos);
}
});
hyperfiddle.electric.impl.runtime.acopy = (function hyperfiddle$electric$impl$runtime$acopy(src,src_off,dest,dest_off,size){
var n__5636__auto___52506 = size;
var i_52507 = (0);
while(true){
if((i_52507 < n__5636__auto___52506)){
(dest[(dest_off + i_52507)] = (src[(src_off + i_52507)]));

var G__52508 = (i_52507 + (1));
i_52507 = G__52508;
continue;
} else {
}
break;
}

return dest;
});
hyperfiddle.electric.impl.runtime.constructor$ = (function hyperfiddle$electric$impl$runtime$constructor(static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,boot){
return (function (tier,id){
var par = (tier[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
var buf = (tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer]);
var pos = (tier[hyperfiddle.electric.impl.runtime.tier_slot_size]);
var cap = buf.length;
var buf__$1 = (((pos < cap))?buf:(tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer] = hyperfiddle.electric.impl.runtime.acopy(buf,(0),cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((cap << (1))),(0),cap)));
(tier[hyperfiddle.electric.impl.runtime.tier_slot_size] = (pos + (1)));

return hyperfiddle.electric.impl.runtime.make_frame((par[hyperfiddle.electric.impl.runtime.frame_slot_context]),tier,id,pos,(tier[hyperfiddle.electric.impl.runtime.tier_slot_foreigns]),static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,buf__$1,(tier[hyperfiddle.electric.impl.runtime.tier_slot_vars]),boot);
});
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.impl.runtime.FrameIterator = (function (f,it){
this.f = f;
this.it = it;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.FrameIterator.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__51905 = (arguments.length - (1));
switch (G__51905) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.prototype.apply = (function (self__,args51904){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args51904)));
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return hyperfiddle.electric.impl.runtime.frame_cancel(self__.f);
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.it);
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)], null);
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.FrameIterator.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/FrameIterator");

(hyperfiddle.electric.impl.runtime.FrameIterator.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/FrameIterator");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/FrameIterator.
 */
hyperfiddle.electric.impl.runtime.__GT_FrameIterator = (function hyperfiddle$electric$impl$runtime$__GT_FrameIterator(f,it){
return (new hyperfiddle.electric.impl.runtime.FrameIterator(f,it));
});

hyperfiddle.electric.impl.runtime.constant = (function hyperfiddle$electric$impl$runtime$constant(frame,slot,ctor){
var consts = (frame[hyperfiddle.electric.impl.runtime.frame_slot_constants]);
var context = (frame[hyperfiddle.electric.impl.runtime.frame_slot_context]);
return (consts[slot] = hyperfiddle.electric.impl.runtime.signal(missionary.core.watch(cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (n,t){
var temp__5806__auto__ = cljs.core.deref(hyperfiddle.electric.impl.runtime.this$);
if((temp__5806__auto__ == null)){
return hyperfiddle.electric.impl.failer.run(hyperfiddle.electric.impl.runtime.error("Unable to build frame - not an object."),n,t);
} else {
var tier = temp__5806__auto__;
var parent = (tier[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
var id = hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(context,hyperfiddle.electric.impl.runtime.context_slot_local_id,cljs.core.inc);
hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- (frame[hyperfiddle.electric.impl.runtime.frame_slot_id])),slot], null),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- (parent[hyperfiddle.electric.impl.runtime.frame_slot_id])),(tier[hyperfiddle.electric.impl.runtime.tier_slot_remote])], null)], null)], 0));

var _LT_x = (ctor.cljs$core$IFn$_invoke$arity$2 ? ctor.cljs$core$IFn$_invoke$arity$2(tier,id) : ctor.call(null,tier,id));
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),id);
return hyperfiddle.electric.impl.runtime.__GT_FrameIterator(f,(function (){var G__51917 = n;
var G__51918 = (function (){
hyperfiddle.electric.impl.runtime.frame_cancel(f);

hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"frame","frame",-1711082588),(- id)], null)], 0));

hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4(context,hyperfiddle.electric.impl.runtime.context_slot_frame_store,cljs.core.dissoc_BANG_,(f[hyperfiddle.electric.impl.runtime.frame_slot_id]));

return (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
});
return (_LT_x.cljs$core$IFn$_invoke$arity$2 ? _LT_x.cljs$core$IFn$_invoke$arity$2(G__51917,G__51918) : _LT_x.call(null,G__51917,G__51918));
})());
}
})))));
});
hyperfiddle.electric.impl.runtime.inject = (function hyperfiddle$electric$impl$runtime$inject(v){
return (function (_LT_x,_LT_y){
return (function (n,t){
var temp__5806__auto__ = cljs.core.deref(hyperfiddle.electric.impl.runtime.this$);
if((temp__5806__auto__ == null)){
return hyperfiddle.electric.impl.failer.run(hyperfiddle.electric.impl.runtime.error("Unable to inject - not an object."),n,t);
} else {
var tier = temp__5806__auto__;
var foreigns = (tier[hyperfiddle.electric.impl.runtime.tier_slot_foreigns]);
(tier[hyperfiddle.electric.impl.runtime.tier_slot_foreigns] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(foreigns,v,_LT_y));

try{return (_LT_x.cljs$core$IFn$_invoke$arity$2 ? _LT_x.cljs$core$IFn$_invoke$arity$2(n,t) : _LT_x.call(null,n,t));
}finally {(tier[hyperfiddle.electric.impl.runtime.tier_slot_foreigns] = foreigns);
}}
});
});
});
hyperfiddle.electric.impl.runtime.bind = (function hyperfiddle$electric$impl$runtime$bind(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52514 = arguments.length;
var i__5770__auto___52515 = (0);
while(true){
if((i__5770__auto___52515 < len__5769__auto___52514)){
args__5775__auto__.push((arguments[i__5770__auto___52515]));

var G__52516 = (i__5770__auto___52515 + (1));
i__5770__auto___52515 = G__52516;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.bind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(hyperfiddle.electric.impl.runtime.bind.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (function (n,t){
var temp__5806__auto__ = cljs.core.deref(hyperfiddle.electric.impl.runtime.this$);
if((temp__5806__auto__ == null)){
return hyperfiddle.electric.impl.failer.run(hyperfiddle.electric.impl.runtime.error("Unable to bind - not an object."),n,t);
} else {
var tier = temp__5806__auto__;
try{var fexpr__51929 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,tier,args);
return (fexpr__51929.cljs$core$IFn$_invoke$arity$2 ? fexpr__51929.cljs$core$IFn$_invoke$arity$2(n,t) : fexpr__51929.call(null,n,t));
}catch (e51928){var e = e51928;
return hyperfiddle.electric.impl.failer.run(e,n,t);
}}
});
}));

(hyperfiddle.electric.impl.runtime.bind.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.bind.cljs$lang$applyTo = (function (seq51921){
var G__51922 = cljs.core.first(seq51921);
var seq51921__$1 = cljs.core.next(seq51921);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51922,seq51921__$1);
}));

hyperfiddle.electric.impl.runtime.with$ = (function hyperfiddle$electric$impl$runtime$with(tier,_LT_x){
return (function (n,t){
var prev = cljs.core.deref(hyperfiddle.electric.impl.runtime.this$);
cljs.core.vreset_BANG_(hyperfiddle.electric.impl.runtime.this$,tier);

try{return (_LT_x.cljs$core$IFn$_invoke$arity$2 ? _LT_x.cljs$core$IFn$_invoke$arity$2(n,t) : _LT_x.call(null,n,t));
}finally {cljs.core.vreset_BANG_(hyperfiddle.electric.impl.runtime.this$,prev);
}});
});
hyperfiddle.electric.impl.runtime.clause = (function hyperfiddle$electric$impl$runtime$clause(var_args){
var G__51941 = arguments.length;
switch (G__51941) {
case 1:
return hyperfiddle.electric.impl.runtime.clause.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.impl.runtime.clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.impl.runtime.clause.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (e){
var G__51944 = hyperfiddle.electric.impl.runtime.pure(e);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__51944) : f.call(null,G__51944));
});
}));

(hyperfiddle.electric.impl.runtime.clause.cljs$core$IFn$_invoke$arity$2 = (function (f,c){
return (function (e){
if((hyperfiddle.electric.debug.unwrap(e) instanceof c)){
var G__51945 = hyperfiddle.electric.impl.runtime.pure(e);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__51945) : f.call(null,G__51945));
} else {
return null;
}
});
}));

(hyperfiddle.electric.impl.runtime.clause.cljs$lang$maxFixedArity = 2);

hyperfiddle.electric.impl.runtime.recover = (function hyperfiddle$electric$impl$runtime$recover(tier,catch$,_LT_x){
return hyperfiddle.electric.impl.yield2.yield$((function (x){
if((x instanceof hyperfiddle.electric.Failure)){
var temp__5808__auto__ = (function (){var G__51946 = x.error;
return (catch$.cljs$core$IFn$_invoke$arity$1 ? catch$.cljs$core$IFn$_invoke$arity$1(G__51946) : catch$.call(null,G__51946));
})();
if((temp__5808__auto__ == null)){
return null;
} else {
var _LT_c = temp__5808__auto__;
return hyperfiddle.electric.impl.runtime.with$(tier,_LT_c);
}
} else {
return null;
}
}),_LT_x);
});
hyperfiddle.electric.impl.runtime.variable = (function hyperfiddle$electric$impl$runtime$variable(frame,vars,position,slot,_LT__LT_x){
var tier = ((frame[hyperfiddle.electric.impl.runtime.frame_slot_tiers])[(position | (0))]);
(tier[hyperfiddle.electric.impl.runtime.tier_slot_remote] = slot);

(tier[hyperfiddle.electric.impl.runtime.tier_slot_vars] = cljs.core.aclone(vars));

return ((frame[hyperfiddle.electric.impl.runtime.frame_slot_variables])[(slot | (0))] = missionary.core.signal_BANG_(missionary.core.cp_STAR_((function (){var cr51949_block_6 = (function hyperfiddle$electric$impl$runtime$variable_$_cr51949_block_6(cr51949_state){
try{var cr51949_place_7 = (cr51949_state[(3)]);
(cr51949_state[(0)] = cr51949_block_8);

(cr51949_state[(3)] = null);

(cr51949_state[(1)] = cr51949_place_7);

return cr51949_state;
}catch (e51983){var cr51949_exception = e51983;
(cr51949_state[(0)] = cr51949_block_7);

(cr51949_state[(3)] = null);

(cr51949_state[(1)] = cr51949_exception);

return cr51949_state;
}});
var cr51949_block_1 = (function hyperfiddle$electric$impl$runtime$variable_$_cr51949_block_1(cr51949_state){
try{var cr51949_place_2 = _LT__LT_x;
(cr51949_state[(0)] = cr51949_block_2);

return missionary.core.switch$(cr51949_place_2);
}catch (e51984){var cr51949_exception = e51984;
(cr51949_state[(0)] = cr51949_block_7);

(cr51949_state[(1)] = cr51949_exception);

return cr51949_state;
}});
var cr51949_block_7 = (function hyperfiddle$electric$impl$runtime$variable_$_cr51949_block_7(cr51949_state){
try{var cr51949_place_0 = (cr51949_state[(1)]);
var cr51949_place_14 = cr51949_place_0;
var cr51949_place_15 = cr51949_place_14;
var cr51949_place_16 = (new hyperfiddle.electric.Failure(cr51949_place_15));
(cr51949_state[(0)] = cr51949_block_8);

(cr51949_state[(1)] = cr51949_place_16);

return cr51949_state;
}catch (e51986){var cr51949_exception = e51986;
(cr51949_state[(0)] = cr51949_block_8);

(cr51949_state[(2)] = true);

(cr51949_state[(1)] = cr51949_exception);

return cr51949_state;
}});
var cr51949_block_2 = (function hyperfiddle$electric$impl$runtime$variable_$_cr51949_block_2(cr51949_state){
try{var cr51949_place_3 = missionary.core.unpark();
var cr51949_place_4 = hyperfiddle.electric.impl.runtime.failure;
var cr51949_place_5 = cr51949_place_3;
var cr51949_place_6 = cr51949_place_4(cr51949_place_5);
var cr51949_place_7 = null;
if(cljs.core.truth_(cr51949_place_6)){
(cr51949_state[(0)] = cr51949_block_5);

(cr51949_state[(4)] = cr51949_place_3);

(cr51949_state[(3)] = cr51949_place_7);

return cr51949_state;
} else {
(cr51949_state[(0)] = cr51949_block_3);

(cr51949_state[(4)] = cr51949_place_3);

(cr51949_state[(3)] = cr51949_place_7);

return cr51949_state;
}
}catch (e51988){var cr51949_exception = e51988;
(cr51949_state[(0)] = cr51949_block_7);

(cr51949_state[(1)] = cr51949_exception);

return cr51949_state;
}});
var cr51949_block_5 = (function hyperfiddle$electric$impl$runtime$variable_$_cr51949_block_5(cr51949_state){
try{var cr51949_place_3 = (cr51949_state[(4)]);
var cr51949_place_13 = cr51949_place_3;
(cr51949_state[(0)] = cr51949_block_6);

(cr51949_state[(4)] = null);

(cr51949_state[(3)] = cr51949_place_13);

return cr51949_state;
}catch (e51991){var cr51949_exception = e51991;
(cr51949_state[(0)] = cr51949_block_7);

(cr51949_state[(3)] = null);

(cr51949_state[(4)] = null);

(cr51949_state[(1)] = cr51949_exception);

return cr51949_state;
}});
var cr51949_block_3 = (function hyperfiddle$electric$impl$runtime$variable_$_cr51949_block_3(cr51949_state){
try{var cr51949_place_3 = (cr51949_state[(4)]);
var cr51949_place_8 = hyperfiddle.electric.impl.runtime.with$;
var cr51949_place_9 = tier;
var cr51949_place_10 = cr51949_place_3;
var cr51949_place_11 = (function (){var G__51995 = cr51949_place_9;
var G__51996 = cr51949_place_10;
var fexpr__51994 = cr51949_place_8;
return (fexpr__51994.cljs$core$IFn$_invoke$arity$2 ? fexpr__51994.cljs$core$IFn$_invoke$arity$2(G__51995,G__51996) : fexpr__51994.call(null,G__51995,G__51996));
})();
(cr51949_state[(0)] = cr51949_block_4);

(cr51949_state[(4)] = null);

return missionary.core.switch$(cr51949_place_11);
}catch (e51993){var cr51949_exception = e51993;
(cr51949_state[(0)] = cr51949_block_7);

(cr51949_state[(3)] = null);

(cr51949_state[(4)] = null);

(cr51949_state[(1)] = cr51949_exception);

return cr51949_state;
}});
var cr51949_block_4 = (function hyperfiddle$electric$impl$runtime$variable_$_cr51949_block_4(cr51949_state){
try{var cr51949_place_12 = missionary.core.unpark();
(cr51949_state[(0)] = cr51949_block_6);

(cr51949_state[(3)] = cr51949_place_12);

return cr51949_state;
}catch (e51997){var cr51949_exception = e51997;
(cr51949_state[(0)] = cr51949_block_7);

(cr51949_state[(3)] = null);

(cr51949_state[(1)] = cr51949_exception);

return cr51949_state;
}});
var cr51949_block_0 = (function hyperfiddle$electric$impl$runtime$variable_$_cr51949_block_0(cr51949_state){
try{var cr51949_place_0 = null;
var cr51949_place_1 = false;
(cr51949_state[(0)] = cr51949_block_1);

(cr51949_state[(1)] = cr51949_place_0);

(cr51949_state[(2)] = cr51949_place_1);

return cr51949_state;
}catch (e51998){var cr51949_exception = e51998;
(cr51949_state[(0)] = null);

throw cr51949_exception;
}});
var cr51949_block_8 = (function hyperfiddle$electric$impl$runtime$variable_$_cr51949_block_8(cr51949_state){
try{var cr51949_place_0 = (cr51949_state[(1)]);
var cr51949_place_1 = (cr51949_state[(2)]);
var cr51949_place_17 = (cljs.core.truth_(cr51949_place_1)?(function(){throw cr51949_place_0})():cr51949_place_0);
(cr51949_state[(0)] = null);

(cr51949_state[(1)] = null);

(cr51949_state[(2)] = null);

return cr51949_place_17;
}catch (e51999){var cr51949_exception = e51999;
(cr51949_state[(0)] = null);

(cr51949_state[(1)] = null);

(cr51949_state[(2)] = null);

throw cr51949_exception;
}});
return cloroutine.impl.coroutine((function (){var G__52001 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__52001[(0)] = cr51949_block_0);

return G__52001;
})());
})())));
});
hyperfiddle.electric.impl.runtime.source = (function hyperfiddle$electric$impl$runtime$source(frame,vars,position,slot){
((frame[hyperfiddle.electric.impl.runtime.frame_slot_sources])[(slot | (0))] = (function (){var G__52004 = ((frame[hyperfiddle.electric.impl.runtime.frame_slot_tiers])[(position | (0))]);
(G__52004[hyperfiddle.electric.impl.runtime.tier_slot_vars] = cljs.core.aclone(vars));

return G__52004;
})());

return null;
});
hyperfiddle.electric.impl.runtime.target = (function hyperfiddle$electric$impl$runtime$target(frame,slot,ctor){
((frame[hyperfiddle.electric.impl.runtime.frame_slot_targets])[(slot | (0))] = ctor);

return null;
});
hyperfiddle.electric.impl.runtime.hook = (function hyperfiddle$electric$impl$runtime$hook(k,v,_LT_x){
if((!((v == null)))){
} else {
throw (new Error(["Assert failed: ","hook value must be non-nil.","\n","(some? v)"].join('')));
}

return (function (n,t){
var temp__5806__auto__ = cljs.core.deref(hyperfiddle.electric.impl.runtime.this$);
if((temp__5806__auto__ == null)){
return hyperfiddle.electric.impl.failer.run(hyperfiddle.electric.impl.runtime.error("Unable to hook - not an object."),n,t);
} else {
var tier = temp__5806__auto__;
var tier_52541__$1 = tier;
while(true){
var f_52542 = (tier_52541__$1[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
var temp__5806__auto___52543__$1 = hyperfiddle.electric.impl.runtime.frame_walk_tiers(f_52542,(1),k,cljs.core.identity,(tier_52541__$1[hyperfiddle.electric.impl.runtime.tier_slot_position]));
if((temp__5806__auto___52543__$1 == null)){
var temp__5808__auto___52545 = (f_52542[hyperfiddle.electric.impl.runtime.frame_slot_parent]);
if((temp__5808__auto___52545 == null)){
} else {
var tier_52546__$2 = temp__5808__auto___52545;
var temp__5806__auto___52547__$2 = hyperfiddle.electric.impl.runtime.tier_walk_frames(tier_52546__$2,(1),k,cljs.core.identity,(f_52542[hyperfiddle.electric.impl.runtime.frame_slot_position]));
if((temp__5806__auto___52547__$2 == null)){
if(cljs.core.contains_QMARK_((tier_52546__$2[hyperfiddle.electric.impl.runtime.tier_slot_hooks]),k)){
(k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(v,null) : k.call(null,v,null));
} else {
var G__52548 = tier_52546__$2;
tier_52541__$1 = G__52548;
continue;
}
} else {
var a_52549 = temp__5806__auto___52547__$2;
(k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(v,a_52549) : k.call(null,v,a_52549));
}
}
} else {
var a_52550 = temp__5806__auto___52543__$1;
(k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(v,a_52550) : k.call(null,v,a_52550));
}
break;
}

hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$5(tier,hyperfiddle.electric.impl.runtime.tier_slot_hooks,cljs.core.assoc,k,v);

var G__52010 = n;
var G__52011 = (function (){
hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4(tier,hyperfiddle.electric.impl.runtime.tier_slot_hooks,cljs.core.dissoc,k);

(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(v) : k.call(null,v));

return (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
});
return (_LT_x.cljs$core$IFn$_invoke$arity$2 ? _LT_x.cljs$core$IFn$_invoke$arity$2(G__52010,G__52011) : _LT_x.call(null,G__52010,G__52011));
}
});
});
hyperfiddle.electric.impl.runtime.unbound = hyperfiddle.electric.impl.runtime.pure(new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","unbound","hyperfiddle.electric.impl.runtime/unbound",63043117));
hyperfiddle.electric.impl.runtime.subject_at = (function hyperfiddle$electric$impl$runtime$subject_at(arr,slot){
return (function (_BANG_){
(arr[slot] = _BANG_);

return (function (){
return (arr[slot] = null);
});
});
});
hyperfiddle.electric.impl.runtime.context_ack = (function hyperfiddle$electric$impl$runtime$context_ack(context){
var rpos = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos]);
var buffer = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer]);
var output = (buffer[rpos]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rpos,(context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos]))){
throw hyperfiddle.electric.impl.runtime.error("Unexpected ack.");
} else {
}

(context[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos] = ((rpos + (1)) & (buffer.length - (1))));

(buffer[rpos] = null);

var output__$1 = output;
while(true){
if((output__$1 == null)){
return null;
} else {
((output__$1[hyperfiddle.electric.impl.runtime.output_slot_prev])[hyperfiddle.electric.impl.runtime.output_slot_next] = null);

(output__$1[hyperfiddle.electric.impl.runtime.output_slot_prev] = null);

(output__$1[hyperfiddle.electric.impl.runtime.output_slot_time] = null);

var input_52555 = (output__$1[hyperfiddle.electric.impl.runtime.output_slot_input]);
if((hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(input_52555,hyperfiddle.electric.impl.runtime.input_slot_pending,cljs.core.dec) === (0))){
hyperfiddle.electric.impl.runtime.input_ready(input_52555);
} else {
}

var G__52556 = (output__$1[hyperfiddle.electric.impl.runtime.output_slot_next]);
output__$1 = G__52556;
continue;
}
break;
}
});
hyperfiddle.electric.impl.runtime.context_cancel = (function hyperfiddle$electric$impl$runtime$context_cancel(context){
return hyperfiddle.electric.impl.runtime.update_event(context,new cljs.core.Keyword(null,"cancel","cancel",-1964088360),cljs.core.identity);
});
hyperfiddle.electric.impl.runtime.context_transfer = (function hyperfiddle$electric$impl$runtime$context_transfer(context){
while(true){
var temp__5806__auto__ = (context[hyperfiddle.electric.impl.runtime.context_slot_check]);
if((temp__5806__auto__ == null)){
var event = (context[hyperfiddle.electric.impl.runtime.context_slot_event]);
if(cljs.core.contains_QMARK_(event,new cljs.core.Keyword(null,"cancel","cancel",-1964088360))){
var fexpr__52022_52557 = (context[hyperfiddle.electric.impl.runtime.context_slot_terminator]);
(fexpr__52022_52557.cljs$core$IFn$_invoke$arity$0 ? fexpr__52022_52557.cljs$core$IFn$_invoke$arity$0() : fexpr__52022_52557.call(null));

throw (new missionary.Cancelled());
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502).cljs$core$IFn$_invoke$arity$1(event))){
} else {
var buffer_52559 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer]);
var size_52560 = buffer_52559.length;
var rpos_52561 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos]);
var wpos_52562 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rpos_52561,(context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos] = ((wpos_52562 + (1)) & (size_52560 - (1)))))){
var larger_52563 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((size_52560 << (1)));
var split_52564 = (size_52560 - rpos_52561);
hyperfiddle.electric.impl.runtime.acopy(buffer_52559,rpos_52561,larger_52563,(0),split_52564);

hyperfiddle.electric.impl.runtime.acopy(buffer_52559,(0),larger_52563,split_52564,rpos_52561);

var n__5636__auto___52565 = size_52560;
var t_52566 = (0);
while(true){
if((t_52566 < n__5636__auto___52565)){
var temp__5808__auto___52567 = (larger_52563[t_52566]);
if((temp__5808__auto___52567 == null)){
} else {
var output_52570 = temp__5808__auto___52567;
var o_52571 = output_52570;
while(true){
(o_52571[hyperfiddle.electric.impl.runtime.output_slot_time] = t_52566);

var n_52572 = (o_52571[hyperfiddle.electric.impl.runtime.output_slot_next]);
if((n_52572 === output_52570)){
} else {
var G__52573 = n_52572;
o_52571 = G__52573;
continue;
}
break;
}
}

var G__52574 = (t_52566 + (1));
t_52566 = G__52574;
continue;
} else {
}
break;
}

(context[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer] = larger_52563);

(context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos] = size_52560);

(context[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos] = (0));
} else {
}
}

(context[hyperfiddle.electric.impl.runtime.context_slot_event] = null);

return event;
} else {
var input = temp__5806__auto__;
(context[hyperfiddle.electric.impl.runtime.context_slot_check] = (input[hyperfiddle.electric.impl.runtime.input_slot_check]));

(input[hyperfiddle.electric.impl.runtime.input_slot_check] = input);

hyperfiddle.electric.impl.runtime.input_check(input);

continue;
}
break;
}
});
hyperfiddle.electric.impl.runtime.eval_tree_inst = (function hyperfiddle$electric$impl$runtime$eval_tree_inst(context,inst){
var G__52027_52576 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(inst);
var G__52027_52577__$1 = (((G__52027_52576 instanceof cljs.core.Keyword))?G__52027_52576.fqn:null);
switch (G__52027_52577__$1) {
case "create":
var map__52031_52579 = inst;
var map__52031_52580__$1 = cljs.core.__destructure_map(map__52031_52579);
var vec__52032_52581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52031_52580__$1,new cljs.core.Keyword(null,"target","target",253001721));
var target_frame_52582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52032_52581,(0),null);
var target_slot_52583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52032_52581,(1),null);
var vec__52035_52584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52031_52580__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var source_frame_52585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52035_52584,(0),null);
var source_slot_52586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52035_52584,(1),null);
var G__52040_52589 = ((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),source_frame_52585)[hyperfiddle.electric.impl.runtime.frame_slot_sources])[source_slot_52586]);
var G__52041_52590 = hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(context,hyperfiddle.electric.impl.runtime.context_slot_remote_id,cljs.core.dec);
var fexpr__52039_52591 = ((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),target_frame_52582)[hyperfiddle.electric.impl.runtime.frame_slot_targets])[target_slot_52583]);
(fexpr__52039_52591.cljs$core$IFn$_invoke$arity$2 ? fexpr__52039_52591.cljs$core$IFn$_invoke$arity$2(G__52040_52589,G__52041_52590) : fexpr__52039_52591.call(null,G__52040_52589,G__52041_52590));

break;
case "rotate":
hyperfiddle.electric.impl.runtime.frame_rotate(cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(inst)),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(inst));

break;
case "remove":
hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4(context,hyperfiddle.electric.impl.runtime.context_slot_frame_store,cljs.core.dissoc_BANG_,new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(inst));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52027_52577__$1)].join('')));

}

return context;
});
hyperfiddle.electric.impl.runtime.eval_change_inst = (function hyperfiddle$electric$impl$runtime$eval_change_inst(context,p__52047,value){
var vec__52049 = p__52047;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52049,(0),null);
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52049,(1),null);
hyperfiddle.electric.impl.runtime.input_change(((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),id)[hyperfiddle.electric.impl.runtime.frame_slot_inputs])[slot]),value);

return context;
});
hyperfiddle.electric.impl.runtime.eval_freeze_inst = (function hyperfiddle$electric$impl$runtime$eval_freeze_inst(context,p__52055){
var vec__52056 = p__52055;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52056,(0),null);
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52056,(1),null);
hyperfiddle.electric.impl.runtime.input_freeze(((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),id)[hyperfiddle.electric.impl.runtime.frame_slot_inputs])[slot]));

return context;
});
hyperfiddle.electric.impl.runtime.parse_event = (function hyperfiddle$electric$impl$runtime$parse_event(context,p__52059){
var map__52060 = p__52059;
var map__52060__$1 = cljs.core.__destructure_map(map__52060);
var acks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52060__$1,new cljs.core.Keyword(null,"acks","acks",707064729));
var tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52060__$1,new cljs.core.Keyword(null,"tree","tree",-196312028));
var change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52060__$1,new cljs.core.Keyword(null,"change","change",-1163046502));
var freeze = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52060__$1,new cljs.core.Keyword(null,"freeze","freeze",2043466309));
var n__5636__auto___52597 = acks;
var __52598 = (0);
while(true){
if((__52598 < n__5636__auto___52597)){
hyperfiddle.electric.impl.runtime.context_ack(context);

var G__52599 = (__52598 + (1));
__52598 = G__52599;
continue;
} else {
}
break;
}

cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.eval_tree_inst,context,tree);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,change)){
} else {
hyperfiddle.electric.impl.runtime.update_event(context,new cljs.core.Keyword(null,"acks","acks",707064729),cljs.core.inc);

cljs.core.reduce_kv(hyperfiddle.electric.impl.runtime.eval_change_inst,context,change);
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.eval_freeze_inst,context,freeze);
});
hyperfiddle.electric.impl.runtime.process_incoming_events = (function hyperfiddle$electric$impl$runtime$process_incoming_events(context,_GT_incoming){
return missionary.core.sample(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce,hyperfiddle.electric.impl.runtime.parse_event,context),_GT_incoming);
});
hyperfiddle.electric.impl.runtime.write_outgoing_events = (function hyperfiddle$electric$impl$runtime$write_outgoing_events(write,_GT_events){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr52061_block_0 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr52061_block_0(cr52061_state){
try{var cr52061_place_0 = (1);
var cr52061_place_1 = _GT_events;
(cr52061_state[(0)] = cr52061_block_1);

return missionary.core.fork(cr52061_place_0,cr52061_place_1);
}catch (e52073){var cr52061_exception = e52073;
(cr52061_state[(0)] = null);

throw cr52061_exception;
}});
var cr52061_block_1 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr52061_block_1(cr52061_state){
try{var cr52061_place_2 = missionary.core.unpark();
var cr52061_place_3 = cljs.core._EQ_;
var cr52061_place_4 = cr52061_place_2;
var cr52061_place_5 = hyperfiddle.electric.impl.runtime.empty_event;
var cr52061_place_6 = (function (){var G__52076 = cr52061_place_4;
var G__52077 = cr52061_place_5;
var fexpr__52075 = cr52061_place_3;
return (fexpr__52075.cljs$core$IFn$_invoke$arity$2 ? fexpr__52075.cljs$core$IFn$_invoke$arity$2(G__52076,G__52077) : fexpr__52075.call(null,G__52076,G__52077));
})();
var cr52061_place_7 = null;
if(cljs.core.truth_(cr52061_place_6)){
(cr52061_state[(0)] = cr52061_block_4);

(cr52061_state[(1)] = cr52061_place_7);

return cr52061_state;
} else {
(cr52061_state[(0)] = cr52061_block_2);

(cr52061_state[(2)] = cr52061_place_2);

(cr52061_state[(1)] = cr52061_place_7);

return cr52061_state;
}
}catch (e52074){var cr52061_exception = e52074;
(cr52061_state[(0)] = null);

throw cr52061_exception;
}});
var cr52061_block_2 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr52061_block_2(cr52061_state){
try{var cr52061_place_2 = (cr52061_state[(2)]);
var cr52061_place_8 = write;
var cr52061_place_9 = cr52061_place_2;
var cr52061_place_10 = (function (){var G__52080 = cr52061_place_9;
var fexpr__52079 = cr52061_place_8;
return (fexpr__52079.cljs$core$IFn$_invoke$arity$1 ? fexpr__52079.cljs$core$IFn$_invoke$arity$1(G__52080) : fexpr__52079.call(null,G__52080));
})();
(cr52061_state[(0)] = cr52061_block_3);

(cr52061_state[(2)] = null);

return missionary.core.park(cr52061_place_10);
}catch (e52078){var cr52061_exception = e52078;
(cr52061_state[(0)] = null);

(cr52061_state[(1)] = null);

(cr52061_state[(2)] = null);

throw cr52061_exception;
}});
var cr52061_block_3 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr52061_block_3(cr52061_state){
try{var cr52061_place_11 = missionary.core.unpark();
(cr52061_state[(0)] = cr52061_block_5);

(cr52061_state[(1)] = cr52061_place_11);

return cr52061_state;
}catch (e52081){var cr52061_exception = e52081;
(cr52061_state[(0)] = null);

(cr52061_state[(1)] = null);

throw cr52061_exception;
}});
var cr52061_block_4 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr52061_block_4(cr52061_state){
try{var cr52061_place_12 = null;
(cr52061_state[(0)] = cr52061_block_5);

(cr52061_state[(1)] = cr52061_place_12);

return cr52061_state;
}catch (e52082){var cr52061_exception = e52082;
(cr52061_state[(0)] = null);

(cr52061_state[(1)] = null);

throw cr52061_exception;
}});
var cr52061_block_5 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr52061_block_5(cr52061_state){
try{var cr52061_place_7 = (cr52061_state[(1)]);
(cr52061_state[(0)] = null);

(cr52061_state[(1)] = null);

return cr52061_place_7;
}catch (e52083){var cr52061_exception = e52083;
(cr52061_state[(0)] = null);

(cr52061_state[(1)] = null);

throw cr52061_exception;
}});
return cloroutine.impl.coroutine((function (){var G__52084 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__52084[(0)] = cr52061_block_0);

return G__52084;
})());
})(),missionary.core.ap_run);
});
hyperfiddle.electric.impl.runtime.peer = (function hyperfiddle$electric$impl$runtime$peer(var_count,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,ctor){
return (function() {
var hyperfiddle$electric$impl$runtime$peer_$_rec = null;
var hyperfiddle$electric$impl$runtime$peer_$_rec__2 = (function (write,_QMARK_read){
return hyperfiddle$electric$impl$runtime$peer_$_rec.cljs$core$IFn$_invoke$arity$3(write,_QMARK_read,hyperfiddle.electric.impl.runtime.pst);
});
var hyperfiddle$electric$impl$runtime$peer_$_rec__3 = (function (write,_QMARK_read,on_error){
return missionary.core.reactor_call((function (){
var context = hyperfiddle.electric.impl.runtime.make_context();
missionary.core.stream_BANG_(hyperfiddle.electric.impl.runtime.write_outgoing_events(write,missionary.core.stream_BANG_((function (n,t){
(context[hyperfiddle.electric.impl.runtime.context_slot_notifier] = n);

(context[hyperfiddle.electric.impl.runtime.context_slot_terminator] = t);

var temp__5808__auto___52617 = hyperfiddle.electric.impl.runtime.make_frame(context,null,(0),(0),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,context,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(var_count,hyperfiddle.electric.impl.runtime.unbound)),ctor);
if((temp__5808__auto___52617 == null)){
} else {
var _LT_main_52620 = temp__5808__auto___52617;
missionary.core.stream_BANG_(missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic((function (x){
if((x instanceof hyperfiddle.electric.Failure)){
var G__52085 = x.error;
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__52085) : on_error.call(null,G__52085));
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_LT_main_52620], 0)));
}

return hyperfiddle.electric.impl.runtime.__GT_It(context,hyperfiddle.electric.impl.runtime.context_cancel,hyperfiddle.electric.impl.runtime.context_transfer);
}))));

return missionary.core.stream_BANG_(hyperfiddle.electric.impl.runtime.process_incoming_events(context,missionary.core.stream_BANG_(missionary.core.relieve(cljs.core.into,missionary.core.sample(cljs.core.vector,missionary.core.observe(_QMARK_read))))));
}));
});
hyperfiddle$electric$impl$runtime$peer_$_rec = function(write,_QMARK_read,on_error){
switch(arguments.length){
case 2:
return hyperfiddle$electric$impl$runtime$peer_$_rec__2.call(this,write,_QMARK_read);
case 3:
return hyperfiddle$electric$impl$runtime$peer_$_rec__3.call(this,write,_QMARK_read,on_error);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hyperfiddle$electric$impl$runtime$peer_$_rec.cljs$core$IFn$_invoke$arity$2 = hyperfiddle$electric$impl$runtime$peer_$_rec__2;
hyperfiddle$electric$impl$runtime$peer_$_rec.cljs$core$IFn$_invoke$arity$3 = hyperfiddle$electric$impl$runtime$peer_$_rec__3;
return hyperfiddle$electric$impl$runtime$peer_$_rec;
})()
});
hyperfiddle.electric.impl.runtime.collapse = (function hyperfiddle$electric$impl$runtime$collapse(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52625 = arguments.length;
var i__5770__auto___52629 = (0);
while(true){
if((i__5770__auto___52629 < len__5769__auto___52625)){
args__5775__auto__.push((arguments[i__5770__auto___52629]));

var G__52630 = (i__5770__auto___52629 + (1));
i__5770__auto___52629 = G__52630;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.collapse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(hyperfiddle.electric.impl.runtime.collapse.cljs$core$IFn$_invoke$arity$variadic = (function (s,n,f,args){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(cljs.core.pop,s),n),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.peek),cljs.core.take.cljs$core$IFn$_invoke$arity$1(n)),cljs.core.conj,args,cljs.core.iterate(cljs.core.pop,s))));
}));

(hyperfiddle.electric.impl.runtime.collapse.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.collapse.cljs$lang$applyTo = (function (seq52086){
var G__52087 = cljs.core.first(seq52086);
var seq52086__$1 = cljs.core.next(seq52086);
var G__52088 = cljs.core.first(seq52086__$1);
var seq52086__$2 = cljs.core.next(seq52086__$1);
var G__52089 = cljs.core.first(seq52086__$2);
var seq52086__$3 = cljs.core.next(seq52086__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52087,G__52088,G__52089,seq52086__$3);
}));

hyperfiddle.electric.impl.runtime.snapshot = (function hyperfiddle$electric$impl$runtime$snapshot(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52632 = arguments.length;
var i__5770__auto___52633 = (0);
while(true){
if((i__5770__auto___52633 < len__5769__auto___52632)){
args__5775__auto__.push((arguments[i__5770__auto___52633]));

var G__52634 = (i__5770__auto___52633 + (1));
i__5770__auto___52633 = G__52634;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.snapshot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(hyperfiddle.electric.impl.runtime.snapshot.cljs$core$IFn$_invoke$arity$variadic = (function (env,f,args){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,env,args));
}));

(hyperfiddle.electric.impl.runtime.snapshot.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.snapshot.cljs$lang$applyTo = (function (seq52090){
var G__52091 = cljs.core.first(seq52090);
var seq52090__$1 = cljs.core.next(seq52090);
var G__52092 = cljs.core.first(seq52090__$1);
var seq52090__$2 = cljs.core.next(seq52090__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52091,G__52092,seq52090__$2);
}));

hyperfiddle.electric.impl.runtime.reverse_index = (function hyperfiddle$electric$impl$runtime$reverse_index(m){
return cljs.core.reduce_kv((function (v,x,i){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,i,x);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(m),null)),m);
});
hyperfiddle.electric.impl.runtime.empty_frame = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"variable","variable",-281346492),(0),new cljs.core.Keyword(null,"source","source",-433931539),(0),new cljs.core.Keyword(null,"constant","constant",-379609303),(0),new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"output","output",-1105869043),(0),new cljs.core.Keyword(null,"input","input",556931961),(0),new cljs.core.Keyword(null,"static","static",1214358571),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),cljs.core.PersistentArrayMap.EMPTY], null);
hyperfiddle.electric.impl.runtime.compile = (function hyperfiddle$electric$impl$runtime$compile(inst,p__52093){
var map__52094 = p__52093;
var map__52094__$1 = cljs.core.__destructure_map(map__52094);
var fns = map__52094__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52094__$1,new cljs.core.Keyword(null,"input","input",556931961));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52094__$1,new cljs.core.Keyword(null,"target","target",253001721));
var main = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52094__$1,new cljs.core.Keyword(null,"main","main",-2117802661));
var pub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52094__$1,new cljs.core.Keyword(null,"pub","pub",-1189143908));
var bind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52094__$1,new cljs.core.Keyword(null,"bind","bind",-113428417));
var lift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52094__$1,new cljs.core.Keyword(null,"lift","lift",903632035));
var variable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52094__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));
var do$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52094__$1,new cljs.core.Keyword(null,"do","do",46310725));
var sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52094__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var global__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52094__$1,new cljs.core.Keyword(null,"global","global",93595047));
var constant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52094__$1,new cljs.core.Keyword(null,"constant","constant",-379609303));
var static$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52094__$1,new cljs.core.Keyword(null,"static","static",1214358571));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52094__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52094__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var nop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52094__$1,new cljs.core.Keyword(null,"nop","nop",-1754075182));
var inject = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52094__$1,new cljs.core.Keyword(null,"inject","inject",-1882635533));
var dynamic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52094__$1,new cljs.core.Keyword(null,"dynamic","dynamic",704819571));
var literal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52094__$1,new cljs.core.Keyword(null,"literal","literal",1664775605));
var invoke = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52094__$1,new cljs.core.Keyword(null,"invoke","invoke",1145927159));
var vget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52094__$1,new cljs.core.Keyword(null,"vget","vget",1720343287));
return cljs.core.peek(hyperfiddle.electric.impl.runtime.collapse(new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot((function hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,inst__$1){
var G__52095 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425).cljs$core$IFn$_invoke$arity$1(inst__$1);
var G__52095__$1 = (((G__52095 instanceof cljs.core.Keyword))?G__52095.fqn:null);
switch (G__52095__$1) {
case "hyperfiddle.electric.impl.ir/nop":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,nop);

break;
case "hyperfiddle.electric.impl.ir/sub":
var p = (idx - new cljs.core.Keyword("hyperfiddle.electric.impl.ir","index","hyperfiddle.electric.impl.ir/index",1690646129).cljs$core$IFn$_invoke$arity$1(inst__$1));
if((p < off)){
var f = new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(env);
var i = (function (){var G__52096 = p;
var G__52097 = cljs.core.count(f);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__52096,G__52097) : f.call(null,G__52096,G__52097));
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"static","static",1214358571),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,p,i)),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(static$.cljs$core$IFn$_invoke$arity$1 ? static$.cljs$core$IFn$_invoke$arity$1(i) : static$.call(null,i)));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(sub.cljs$core$IFn$_invoke$arity$1 ? sub.cljs$core$IFn$_invoke$arity$1(p) : sub.call(null,p)));
}

break;
case "hyperfiddle.electric.impl.ir/pub":
return cljs.core.update.cljs$core$IFn$_invoke$arity$6(hyperfiddle$electric$impl$runtime$compile_$_walk(hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(inst__$1)),off,(idx + (1)),dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775).cljs$core$IFn$_invoke$arity$1(inst__$1)),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(2),pub,idx);

break;
case "hyperfiddle.electric.impl.ir/do":
var deps = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773).cljs$core$IFn$_invoke$arity$1(inst__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(hyperfiddle$electric$impl$runtime$compile_$_walk(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,arg){
return hyperfiddle$electric$impl$runtime$compile_$_walk(env__$1,off,idx,dyn,arg);
}),env,deps),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,cljs.core.count(deps),cljs.core.vector),off,idx,dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775).cljs$core$IFn$_invoke$arity$1(inst__$1)),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(2),do$);

break;
case "hyperfiddle.electric.impl.ir/def":
var v = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","slot","hyperfiddle.electric.impl.ir/slot",1432523351).cljs$core$IFn$_invoke$arity$1(inst__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.max,v),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(inject.cljs$core$IFn$_invoke$arity$1 ? inject.cljs$core$IFn$_invoke$arity$1(v) : inject.call(null,v)));

break;
case "hyperfiddle.electric.impl.ir/lift":
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(inst__$1)),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(1),lift);

break;
case "hyperfiddle.electric.impl.ir/eval":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(function (){var G__52099 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","form","hyperfiddle.electric.impl.ir/form",-534651915).cljs$core$IFn$_invoke$arity$1(inst__$1);
var G__52100 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","ns","hyperfiddle.electric.impl.ir/ns",1363348916).cljs$core$IFn$_invoke$arity$1(inst__$1);
var fexpr__52098 = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(fns);
return (fexpr__52098.cljs$core$IFn$_invoke$arity$2 ? fexpr__52098.cljs$core$IFn$_invoke$arity$2(G__52099,G__52100) : fexpr__52098.call(null,G__52099,G__52100));
})());

break;
case "hyperfiddle.electric.impl.ir/node":
var v = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","slot","hyperfiddle.electric.impl.ir/slot",1432523351).cljs$core$IFn$_invoke$arity$1(inst__$1);
var env__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.max,v);
if(cljs.core.truth_((dyn.cljs$core$IFn$_invoke$arity$1 ? dyn.cljs$core$IFn$_invoke$arity$1(v) : dyn.call(null,v)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(vget.cljs$core$IFn$_invoke$arity$1 ? vget.cljs$core$IFn$_invoke$arity$1(v) : vget.call(null,v)));
} else {
var d = new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(env__$1);
var i = (function (){var G__52101 = v;
var G__52102 = cljs.core.count(d);
return (d.cljs$core$IFn$_invoke$arity$2 ? d.cljs$core$IFn$_invoke$arity$2(G__52101,G__52102) : d.call(null,G__52101,G__52102));
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,v,i)),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(dynamic.cljs$core$IFn$_invoke$arity$2 ? dynamic.cljs$core$IFn$_invoke$arity$2(i,inst__$1) : dynamic.call(null,i,inst__$1)));
}

break;
case "hyperfiddle.electric.impl.ir/bind":
var v = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","slot","hyperfiddle.electric.impl.ir/slot",1432523351).cljs$core$IFn$_invoke$arity$1(inst__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle$electric$impl$runtime$compile_$_walk(cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.max,v),off,idx,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(dyn,v),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775).cljs$core$IFn$_invoke$arity$1(inst__$1)),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(1),bind,v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(idx - new cljs.core.Keyword("hyperfiddle.electric.impl.ir","index","hyperfiddle.electric.impl.ir/index",1690646129).cljs$core$IFn$_invoke$arity$1(inst__$1))], 0));

break;
case "hyperfiddle.electric.impl.ir/apply":
var f = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","fn","hyperfiddle.electric.impl.ir/fn",1996468864).cljs$core$IFn$_invoke$arity$1(inst__$1);
var args = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","args","hyperfiddle.electric.impl.ir/args",291275628).cljs$core$IFn$_invoke$arity$1(inst__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,inst__$2){
return hyperfiddle$electric$impl$runtime$compile_$_walk(env__$1,off,idx,dyn,inst__$2);
}),env,cljs.core.cons(f,args)),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(cljs.core.count(args) + (1)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(invoke,(function (){var f__$1 = f;
while(true){
var G__52103 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425).cljs$core$IFn$_invoke$arity$1(f__$1);
var G__52103__$1 = (((G__52103 instanceof cljs.core.Keyword))?G__52103.fqn:null);
switch (G__52103__$1) {
case "hyperfiddle.electric.impl.ir/global":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"apply","apply",1320385493),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("hyperfiddle.electric.impl.ir","name","hyperfiddle.electric.impl.ir/name",655661733).cljs$core$IFn$_invoke$arity$1(f__$1))], 0));

break;
case "hyperfiddle.electric.impl.ir/node":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"apply","apply",1320385493));

break;
case "hyperfiddle.electric.impl.ir/literal":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"apply","apply",1320385493),new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","value","hyperfiddle.electric.impl.ir/value",-750005275).cljs$core$IFn$_invoke$arity$1(f__$1)], null);

break;
case "hyperfiddle.electric.impl.ir/eval":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"eval","eval",-1103567905));

break;
case "hyperfiddle.electric.impl.ir/sub":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"apply","apply",1320385493));

break;
case "hyperfiddle.electric.impl.ir/input":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"apply","apply",1320385493));

break;
case "hyperfiddle.electric.impl.ir/apply":
var G__52659 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","fn","hyperfiddle.electric.impl.ir/fn",1996468864).cljs$core$IFn$_invoke$arity$1(f__$1);
f__$1 = G__52659;
continue;

break;
default:
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"unknown-apply","unknown-apply",-1407042085),new cljs.core.Keyword(null,"op","op",-1882987955),f__$1], null);

}
break;
}
})()));

break;
case "hyperfiddle.electric.impl.ir/input":
var deps = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773).cljs$core$IFn$_invoke$arity$1(inst__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.snapshot(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,arg){
return hyperfiddle$electric$impl$runtime$compile_$_walk(env__$1,off,idx,dyn,arg);
}),env,deps),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,cljs.core.count(deps),cljs.core.vector),new cljs.core.Keyword(null,"input","input",556931961)),new cljs.core.Keyword(null,"input","input",556931961),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(2),input);

break;
case "hyperfiddle.electric.impl.ir/output":
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(inst__$1)),new cljs.core.Keyword(null,"output","output",-1105869043)),new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(2),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(output,inst__$1));

break;
case "hyperfiddle.electric.impl.ir/global":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(function (){var G__52104 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","name","hyperfiddle.electric.impl.ir/name",655661733).cljs$core$IFn$_invoke$arity$1(inst__$1);
return (global__$1.cljs$core$IFn$_invoke$arity$1 ? global__$1.cljs$core$IFn$_invoke$arity$1(G__52104) : global__$1.call(null,G__52104));
})());

break;
case "hyperfiddle.electric.impl.ir/literal":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(function (){var G__52105 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","value","hyperfiddle.electric.impl.ir/value",-750005275).cljs$core$IFn$_invoke$arity$1(inst__$1);
return (literal.cljs$core$IFn$_invoke$arity$1 ? literal.cljs$core$IFn$_invoke$arity$1(G__52105) : literal.call(null,G__52105));
})());

break;
case "hyperfiddle.electric.impl.ir/variable":
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(inst__$1)),new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"variable","variable",-281346492)),new cljs.core.Keyword(null,"variable","variable",-281346492),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(3),variable);

break;
case "hyperfiddle.electric.impl.ir/source":
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(env,new cljs.core.Keyword(null,"variable","variable",-281346492)),new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(2),source);

break;
case "hyperfiddle.electric.impl.ir/constant":
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.snapshot(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle$electric$impl$runtime$compile_$_walk(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,hyperfiddle.electric.impl.runtime.empty_frame], 0)),idx,idx,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(inst__$1)),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"static","static",1214358571))),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"dynamic","dynamic",704819571))),new cljs.core.Keyword(null,"variable","variable",-281346492)),new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"constant","constant",-379609303)),new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"output","output",-1105869043)),new cljs.core.Keyword(null,"input","input",556931961)),cljs.core.select_keys(env,cljs.core.keys(hyperfiddle.electric.impl.runtime.empty_frame))], 0)),new cljs.core.Keyword(null,"constant","constant",-379609303)),new cljs.core.Keyword(null,"constant","constant",-379609303),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(10),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(constant,inst__$1));

break;
case "hyperfiddle.electric.impl.ir/target":
var deps = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773).cljs$core$IFn$_invoke$arity$1(inst__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.snapshot(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,inst__$2){
return hyperfiddle$electric$impl$runtime$compile_$_walk(env__$1,idx,idx,cljs.core.PersistentHashSet.EMPTY,inst__$2);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,hyperfiddle.electric.impl.runtime.empty_frame], 0)),deps),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,cljs.core.count(deps),cljs.core.vector),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"static","static",1214358571))),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"dynamic","dynamic",704819571))),new cljs.core.Keyword(null,"variable","variable",-281346492)),new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"constant","constant",-379609303)),new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"output","output",-1105869043)),new cljs.core.Keyword(null,"input","input",556931961)),cljs.core.select_keys(env,cljs.core.keys(hyperfiddle.electric.impl.runtime.empty_frame))], 0)),new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(10),target);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52095__$1)].join('')));

}
})(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_frame,new cljs.core.Keyword(null,"vars","vars",-2046957217),(-1)),(0),(0),cljs.core.PersistentHashSet.EMPTY,inst),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,new cljs.core.Keyword(null,"vars","vars",-2046957217))),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"dynamic","dynamic",704819571))),new cljs.core.Keyword(null,"variable","variable",-281346492)),new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"constant","constant",-379609303)),new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"output","output",-1105869043)),new cljs.core.Keyword(null,"input","input",556931961))),(9),main));
});
hyperfiddle.electric.impl.runtime.sym = (function hyperfiddle$electric$impl$runtime$sym(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52667 = arguments.length;
var i__5770__auto___52668 = (0);
while(true){
if((i__5770__auto___52668 < len__5769__auto___52667)){
args__5775__auto__.push((arguments[i__5770__auto___52668]));

var G__52669 = (i__5770__auto___52668 + (1));
i__5770__auto___52668 = G__52669;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",args));
}));

(hyperfiddle.electric.impl.runtime.sym.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.sym.cljs$lang$applyTo = (function (seq52106){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52106));
}));

hyperfiddle.electric.impl.runtime.emit = (function hyperfiddle$electric$impl$runtime$emit(prefix,inst){
return hyperfiddle.electric.impl.runtime.compile(inst,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lift","lift",903632035),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"do","do",46310725),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"sub","sub",-2093760025),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"nop","nop",-1754075182),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"inject","inject",-1882635533),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"invoke","invoke",1145927159),new cljs.core.Keyword(null,"vget","vget",1720343287),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"pub","pub",-1189143908),new cljs.core.Keyword(null,"bind","bind",-113428417),new cljs.core.Keyword(null,"eval","eval",-1103567905)],[(function (f){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)))));
}),(function (form,remote,slot){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","variable","hyperfiddle.electric.impl.runtime/variable",510769532,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)),(new cljs.core.List(null,(remote + slot),null,(1),null)),(new cljs.core.List(null,slot,null,(1),null)),(new cljs.core.List(null,form,null,(1),null))], 0))));
}),(function (deps,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","make-input","hyperfiddle.electric.impl.runtime/make-input",566179856,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,deps,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0))));
}),(function (x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(x),null,(1),null)))));
}),(function (idx){
return hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"pub","pub",451387619,null),idx], 0));
}),(function (debug_info,form,static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,slot){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,slot,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
return hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"pub","pub",451387619,null),p], 0));
}),static$),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,dynamic,null,(1),null)),(new cljs.core.List(null,variable_count,null,(1),null)),(new cljs.core.List(null,source_count,null,(1),null)),(new cljs.core.List(null,constant_count,null,(1),null)),(new cljs.core.List(null,target_count,null,(1),null)),(new cljs.core.List(null,output_count,null,(1),null)),(new cljs.core.List(null,input_count,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),(function (i){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","static","hyperfiddle.electric.impl.runtime/static",-547873025,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,i,null,(1),null))], 0))));
}),(function (remote,slot){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","source","hyperfiddle.electric.impl.runtime/source",-2004538047,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)),(new cljs.core.List(null,(remote + slot),null,(1),null)),(new cljs.core.List(null,slot,null,(1),null))], 0))));
}),(function (debug_info,form,slot){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","make-output","hyperfiddle.electric.impl.runtime/make-output",1149148798,null),null,(1),null)),(new cljs.core.List(null,slot,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))], 0))));
}),null,(function (i,debug_info){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","dynamic","hyperfiddle.electric.impl.runtime/dynamic",1076292141,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,i,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),null,(1),null))))),null,(1),null))], 0))));
}),(function (v){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","inject","hyperfiddle.electric.impl.runtime/inject",-834159193,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null)))));
}),(function (x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)))));
}),(function() { 
var G__52698__delegate = function (debug_info,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0))));
};
var G__52698 = function (debug_info,var_args){
var forms = null;
if (arguments.length > 1) {
var G__52700__i = 0, G__52700__a = new Array(arguments.length -  1);
while (G__52700__i < G__52700__a.length) {G__52700__a[G__52700__i] = arguments[G__52700__i + 1]; ++G__52700__i;}
  forms = new cljs.core.IndexedSeq(G__52700__a,0,null);
} 
return G__52698__delegate.call(this,debug_info,forms);};
G__52698.cljs$lang$maxFixedArity = 1;
G__52698.cljs$lang$applyTo = (function (arglist__52701){
var debug_info = cljs.core.first(arglist__52701);
var forms = cljs.core.rest(arglist__52701);
return G__52698__delegate(debug_info,forms);
});
G__52698.cljs$core$IFn$_invoke$arity$variadic = G__52698__delegate;
return G__52698;
})()
,(function (v){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",6345791,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","int","cljs.core/int",20935062,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null))], 0))));
}),(function (deps,slot){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","input-spawn","hyperfiddle.electric.impl.runtime/input-spawn",1447350587,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,slot,null,(1),null)),(new cljs.core.List(null,deps,null,(1),null))], 0))));
}),(function (deps,static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,slot){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","target","hyperfiddle.electric.impl.runtime/target",1172525771,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,slot,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
return hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"pub","pub",451387619,null),p], 0));
}),static$),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,dynamic,null,(1),null)),(new cljs.core.List(null,variable_count,null,(1),null)),(new cljs.core.List(null,source_count,null,(1),null)),(new cljs.core.List(null,constant_count,null,(1),null)),(new cljs.core.List(null,target_count,null,(1),null)),(new cljs.core.List(null,output_count,null,(1),null)),(new cljs.core.List(null,input_count,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","make-input","hyperfiddle.electric.impl.runtime/make-input",566179856,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,deps,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),(function (form,var_count,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null),null,(1),null)),(new cljs.core.List(null,var_count,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,dynamic,null,(1),null)),(new cljs.core.List(null,variable_count,null,(1),null)),(new cljs.core.List(null,source_count,null,(1),null)),(new cljs.core.List(null,constant_count,null,(1),null)),(new cljs.core.List(null,target_count,null,(1),null)),(new cljs.core.List(null,output_count,null,(1),null)),(new cljs.core.List(null,input_count,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))], 0))));
}),(function (form,cont,idx){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"pub","pub",451387619,null),idx], 0)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","signal","hyperfiddle.electric.impl.runtime/signal",340452693,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cont,null,(1),null))], 0))));
}),(function (form,slot,idx){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"prev","prev",43462301,null)], 0)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",6345791,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,slot,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","int","cljs.core/int",20935062,null),null,(1),null)),(new cljs.core.List(null,slot,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"pub","pub",451387619,null),idx], 0)),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"res","res",245523648,null)], 0)),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","int","cljs.core/int",20935062,null),null,(1),null)),(new cljs.core.List(null,slot,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"prev","prev",43462301,null)], 0)),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"res","res",245523648,null)], 0)),null,(1),null))], 0)))),null,(1),null))], 0))));
}),(function (form,_ns){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))));
})]));
});
hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1006 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1006(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.runtime !== 'undefined') && (typeof hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52108 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52108 = (function (meta52109){
this.meta52109 = meta52109;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52110,meta52109__$1){
var self__ = this;
var _52110__$1 = this;
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52108(meta52109__$1));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52110){
var self__ = this;
var _52110__$1 = this;
return self__.meta52109;
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52108.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52108.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__52112 = (arguments.length - (1));
switch (G__52112) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52108.prototype.apply = (function (self__,args52111){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args52111)));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52108.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_52107){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(8,done_52107);
try{var values__10703__auto___52724 = (new cljs.core.List(null,hyperfiddle.electric.impl.runtime.emit(null,hyperfiddle.electric.impl.ir.literal((5))),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,(5),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(2),null));
var result__10704__auto___52725 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___52724);
if(cljs.core.truth_(result__10704__auto___52725)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(5))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(5),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___52724),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(5))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(5),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___52724),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___52724);
}catch (e52113){var t__10691__auto___52730 = e52113;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(5))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(5),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,t__10691__auto___52730,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___52736 = (new cljs.core.List(null,hyperfiddle.electric.impl.runtime.emit(null,hyperfiddle.electric.impl.ir.apply.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.ir.global(new cljs.core.Keyword("clojure.core","+","clojure.core/+",-1947503012)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.ir.literal((2)),hyperfiddle.electric.impl.ir.literal((3))], 0))),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","global","hyperfiddle.electric.impl.ir/global",1116145715),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"apply","apply",1320385493),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null),null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,(2),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,(3),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(2),null));
var result__10704__auto___52737 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___52736);
if(cljs.core.truth_(result__10704__auto___52737)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","apply","ir/apply",-1334046411,null),cljs.core.list(new cljs.core.Symbol("ir","global","ir/global",1734106421,null),new cljs.core.Keyword("clojure.core","+","clojure.core/+",-1947503012)),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(2)),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(3)))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),new cljs.core.Symbol("clojure.core","array-map","clojure.core/array-map",-1351833961,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","global","hyperfiddle.electric.impl.ir/global",1116145715),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword(null,"apply","apply",1320385493),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null)),null,(1),null))))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null)),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(2),null,(1),null)))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(3),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___52736),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","apply","ir/apply",-1334046411,null),cljs.core.list(new cljs.core.Symbol("ir","global","ir/global",1734106421,null),new cljs.core.Keyword("clojure.core","+","clojure.core/+",-1947503012)),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(2)),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(3)))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),new cljs.core.Symbol("clojure.core","array-map","clojure.core/array-map",-1351833961,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","global","hyperfiddle.electric.impl.ir/global",1116145715),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword(null,"apply","apply",1320385493),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null)),null,(1),null))))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null)),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(2),null,(1),null)))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(3),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___52736),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___52736);
}catch (e52114){var t__10691__auto___52746 = e52114;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","apply","ir/apply",-1334046411,null),cljs.core.list(new cljs.core.Symbol("ir","global","ir/global",1734106421,null),new cljs.core.Keyword("clojure.core","+","clojure.core/+",-1947503012)),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(2)),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(3)))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),new cljs.core.Symbol("clojure.core","array-map","clojure.core/array-map",-1351833961,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","global","hyperfiddle.electric.impl.ir/global",1116145715),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword(null,"apply","apply",1320385493),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null)),null,(1),null))))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null)),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(2),null,(1),null)))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(3),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,t__10691__auto___52746,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___52755 = (new cljs.core.List(null,hyperfiddle.electric.impl.runtime.emit(null,hyperfiddle.electric.impl.ir.pub(hyperfiddle.electric.impl.ir.literal((1)),hyperfiddle.electric.impl.ir.apply.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.ir.global(new cljs.core.Keyword("clojure.core","+","clojure.core/+",-1947503012)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.ir.sub((1)),hyperfiddle.electric.impl.ir.literal((2))], 0)))),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","signal","hyperfiddle.electric.impl.runtime/signal",340452693,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","global","hyperfiddle.electric.impl.ir/global",1116145715),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"apply","apply",1320385493),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null),null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,(2),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(2),null));
var result__10704__auto___52756 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___52755);
if(cljs.core.truth_(result__10704__auto___52756)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","pub","ir/pub",451390874,null),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(1)),cljs.core.list(new cljs.core.Symbol("ir","apply","ir/apply",-1334046411,null),cljs.core.list(new cljs.core.Symbol("ir","global","ir/global",1734106421,null),new cljs.core.Keyword("clojure.core","+","clojure.core/+",-1947503012)),cljs.core.list(new cljs.core.Symbol("ir","sub","ir/sub",-453228841,null),(1)),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(2))))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","signal","hyperfiddle.electric.impl.runtime/signal",340452693,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),new cljs.core.Symbol("clojure.core","array-map","clojure.core/array-map",-1351833961,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","global","hyperfiddle.electric.impl.ir/global",1116145715),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword(null,"apply","apply",1320385493),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null)),null,(1),null))))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null)),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(2),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___52755),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","pub","ir/pub",451390874,null),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(1)),cljs.core.list(new cljs.core.Symbol("ir","apply","ir/apply",-1334046411,null),cljs.core.list(new cljs.core.Symbol("ir","global","ir/global",1734106421,null),new cljs.core.Keyword("clojure.core","+","clojure.core/+",-1947503012)),cljs.core.list(new cljs.core.Symbol("ir","sub","ir/sub",-453228841,null),(1)),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(2))))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","signal","hyperfiddle.electric.impl.runtime/signal",340452693,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),new cljs.core.Symbol("clojure.core","array-map","clojure.core/array-map",-1351833961,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","global","hyperfiddle.electric.impl.ir/global",1116145715),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword(null,"apply","apply",1320385493),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null)),null,(1),null))))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null)),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(2),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___52755),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___52755);
}catch (e52115){var t__10691__auto___52774 = e52115;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","pub","ir/pub",451390874,null),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(1)),cljs.core.list(new cljs.core.Symbol("ir","apply","ir/apply",-1334046411,null),cljs.core.list(new cljs.core.Symbol("ir","global","ir/global",1734106421,null),new cljs.core.Keyword("clojure.core","+","clojure.core/+",-1947503012)),cljs.core.list(new cljs.core.Symbol("ir","sub","ir/sub",-453228841,null),(1)),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),(2))))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","signal","hyperfiddle.electric.impl.runtime/signal",340452693,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),new cljs.core.Symbol("clojure.core","array-map","clojure.core/array-map",-1351833961,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","global","hyperfiddle.electric.impl.ir/global",1116145715),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword(null,"apply","apply",1320385493),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null)),null,(1),null))))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","+","clojure.core/+",-306971485,null)),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(2),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,t__10691__auto___52774,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___52780 = (new cljs.core.List(null,hyperfiddle.electric.impl.runtime.emit(null,hyperfiddle.electric.impl.ir.variable(hyperfiddle.electric.impl.ir.global(new cljs.core.Keyword("missionary.core","none","missionary.core/none",1289177165)))),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","variable","hyperfiddle.electric.impl.runtime/variable",510769532,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("missionary.core","none","missionary.core/none",-1365258604,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(2),null));
var result__10704__auto___52781 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___52780);
if(cljs.core.truth_(result__10704__auto___52781)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","variable","ir/variable",1359212976,null),cljs.core.list(new cljs.core.Symbol("ir","global","ir/global",1734106421,null),new cljs.core.Keyword("missionary.core","none","missionary.core/none",1289177165)))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","variable","hyperfiddle.electric.impl.runtime/variable",510769532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("missionary.core","none","missionary.core/none",-1365258604,null)),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___52780),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","variable","ir/variable",1359212976,null),cljs.core.list(new cljs.core.Symbol("ir","global","ir/global",1734106421,null),new cljs.core.Keyword("missionary.core","none","missionary.core/none",1289177165)))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","variable","hyperfiddle.electric.impl.runtime/variable",510769532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("missionary.core","none","missionary.core/none",-1365258604,null)),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___52780),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___52780);
}catch (e52116){var t__10691__auto___52791 = e52116;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","variable","ir/variable",1359212976,null),cljs.core.list(new cljs.core.Symbol("ir","global","ir/global",1734106421,null),new cljs.core.Keyword("missionary.core","none","missionary.core/none",1289177165)))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","variable","hyperfiddle.electric.impl.runtime/variable",510769532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("missionary.core","none","missionary.core/none",-1365258604,null)),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,t__10691__auto___52791,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___52793 = (new cljs.core.List(null,hyperfiddle.electric.impl.runtime.emit(null,hyperfiddle.electric.impl.ir.input(cljs.core.PersistentVector.EMPTY)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","input-spawn","hyperfiddle.electric.impl.runtime/input-spawn",1447350587,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(2),null));
var result__10704__auto___52794 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___52793);
if(cljs.core.truth_(result__10704__auto___52794)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","input","ir/input",-2097456085,null),cljs.core.PersistentVector.EMPTY)),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","input-spawn","hyperfiddle.electric.impl.runtime/input-spawn",1447350587,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___52793),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","input","ir/input",-2097456085,null),cljs.core.PersistentVector.EMPTY)),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","input-spawn","hyperfiddle.electric.impl.runtime/input-spawn",1447350587,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___52793),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___52793);
}catch (e52117){var t__10691__auto___52806 = e52117;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","input","ir/input",-2097456085,null),cljs.core.PersistentVector.EMPTY)),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","input-spawn","hyperfiddle.electric.impl.runtime/input-spawn",1447350587,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,t__10691__auto___52806,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___52808 = (new cljs.core.List(null,hyperfiddle.electric.impl.runtime.emit(null,hyperfiddle.electric.impl.ir.constant(hyperfiddle.electric.impl.ir.literal(new cljs.core.Keyword(null,"foo","foo",1268894036)))),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","constant","hyperfiddle.electric.impl.ir/constant",-1502571107),null,(1),null)))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"foo","foo",1268894036),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(2),null));
var result__10704__auto___52809 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___52808);
if(cljs.core.truth_(result__10704__auto___52809)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","constant","ir/constant",1260923049,null),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),new cljs.core.Keyword(null,"foo","foo",1268894036)))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),new cljs.core.Symbol("clojure.core","array-map","clojure.core/array-map",-1351833961,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","constant","hyperfiddle.electric.impl.ir/constant",-1502571107),null,(1),null))))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword(null,"foo","foo",1268894036),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___52808),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","constant","ir/constant",1260923049,null),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),new cljs.core.Keyword(null,"foo","foo",1268894036)))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),new cljs.core.Symbol("clojure.core","array-map","clojure.core/array-map",-1351833961,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","constant","hyperfiddle.electric.impl.ir/constant",-1502571107),null,(1),null))))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword(null,"foo","foo",1268894036),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___52808),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___52808);
}catch (e52118){var t__10691__auto___52832 = e52118;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","constant","ir/constant",1260923049,null),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),new cljs.core.Keyword(null,"foo","foo",1268894036)))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),new cljs.core.Symbol("clojure.core","array-map","clojure.core/array-map",-1351833961,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","constant","hyperfiddle.electric.impl.ir/constant",-1502571107),null,(1),null))))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword(null,"foo","foo",1268894036),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,t__10691__auto___52832,null]));
}finally {RCF__done_BANG_();
}
hyperfiddle.electric.impl.runtime.emit(null,hyperfiddle.electric.impl.ir.variable(hyperfiddle.electric.impl.ir.pub(hyperfiddle.electric.impl.ir.constant(hyperfiddle.electric.impl.ir.literal((3))),hyperfiddle.electric.impl.ir.pub(hyperfiddle.electric.impl.ir.constant(hyperfiddle.electric.impl.ir.input(cljs.core.PersistentVector.EMPTY)),hyperfiddle.electric.impl.ir.apply.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.ir.apply.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.ir.global(new cljs.core.Keyword("clojure.core","hash-map","clojure.core/hash-map",-1301623122)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.ir.literal((2)),hyperfiddle.electric.impl.ir.sub((2)),hyperfiddle.electric.impl.ir.literal((4)),hyperfiddle.electric.impl.ir.sub((1)),hyperfiddle.electric.impl.ir.literal((5)),hyperfiddle.electric.impl.ir.sub((1))], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.ir.literal((1)),hyperfiddle.electric.impl.ir.constant(hyperfiddle.electric.impl.ir.literal((7)))], 0))))));

cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(3),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","variable","hyperfiddle.electric.impl.runtime/variable",510769532,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","signal","hyperfiddle.electric.impl.runtime/signal",340452693,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,(3),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-pub-1","-pub-1",1948183132,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","signal","hyperfiddle.electric.impl.runtime/signal",340452693,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","input-spawn","hyperfiddle.electric.impl.runtime/input-spawn",1447350587,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"unknown-apply","unknown-apply",-1407042085),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"op","op",-1882987955),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"apply","apply",1320385493),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"global","global",93595047),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("clojure.core","hash-map","clojure.core/hash-map",-1301623122),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"literal","literal",1664775605),null,(1),null)),(new cljs.core.List(null,(2),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"sub","sub",-2093760025),null,(1),null)),(new cljs.core.List(null,(2),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"literal","literal",1664775605),null,(1),null)),(new cljs.core.List(null,(4),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"sub","sub",-2093760025),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"literal","literal",1664775605),null,(1),null)),(new cljs.core.List(null,(5),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"sub","sub",-2093760025),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)))))),null,(1),null))], 0))))),null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","global","hyperfiddle.electric.impl.ir/global",1116145715),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"apply","apply",1320385493),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null),null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,(2),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,(4),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-pub-1","-pub-1",1948183132,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,(5),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-pub-1","-pub-1",1948183132,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(2),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,(7),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));

try{var values__10703__auto___52866 = (new cljs.core.List(null,hyperfiddle.electric.impl.runtime.emit(null,hyperfiddle.electric.impl.ir.inject((0))),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","inject","hyperfiddle.electric.impl.runtime/inject",-834159193,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(2),null));
var result__10704__auto___52867 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___52866);
if(cljs.core.truth_(result__10704__auto___52867)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","inject","ir/inject",-242092525,null),(0))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","inject","hyperfiddle.electric.impl.runtime/inject",-834159193,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___52866),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","inject","ir/inject",-242092525,null),(0))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","inject","hyperfiddle.electric.impl.runtime/inject",-834159193,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___52866),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___52866);
}catch (e52119){var t__10691__auto___52878 = e52119;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","inject","ir/inject",-242092525,null),(0))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","inject","hyperfiddle.electric.impl.runtime/inject",-834159193,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,t__10691__auto___52878,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto__ = (new cljs.core.List(null,hyperfiddle.electric.impl.runtime.emit(null,hyperfiddle.electric.impl.ir.pub(hyperfiddle.electric.impl.ir.literal(null),hyperfiddle.electric.impl.ir.constant(hyperfiddle.electric.impl.ir.sub((1))))),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","signal","hyperfiddle.electric.impl.runtime/signal",340452693,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-vars","-vars",2025560914,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","constant","hyperfiddle.electric.impl.ir/constant",-1502571107),null,(1),null)))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","static","hyperfiddle.electric.impl.runtime/static",-547873025,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","pub","ir/pub",451390874,null),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),null),cljs.core.list(new cljs.core.Symbol("ir","constant","ir/constant",1260923049,null),cljs.core.list(new cljs.core.Symbol("ir","sub","ir/sub",-453228841,null),(1))))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","signal","hyperfiddle.electric.impl.runtime/signal",340452693,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,null,null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),new cljs.core.Symbol("clojure.core","array-map","clojure.core/array-map",-1351833961,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","constant","hyperfiddle.electric.impl.ir/constant",-1502571107),null,(1),null))))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","static","hyperfiddle.electric.impl.runtime/static",-547873025,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","pub","ir/pub",451390874,null),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),null),cljs.core.list(new cljs.core.Symbol("ir","constant","ir/constant",1260923049,null),cljs.core.list(new cljs.core.Symbol("ir","sub","ir/sub",-453228841,null),(1))))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","signal","hyperfiddle.electric.impl.runtime/signal",340452693,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,null,null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),new cljs.core.Symbol("clojure.core","array-map","clojure.core/array-map",-1351833961,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","constant","hyperfiddle.electric.impl.ir/constant",-1502571107),null,(1),null))))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","static","hyperfiddle.electric.impl.runtime/static",-547873025,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e52120){var t__10691__auto__ = e52120;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"emit","emit",313352509,null),null,cljs.core.list(new cljs.core.Symbol("ir","pub","ir/pub",451390874,null),cljs.core.list(new cljs.core.Symbol("ir","literal","ir/literal",-989689721,null),null),cljs.core.list(new cljs.core.Symbol("ir","constant","ir/constant",1260923049,null),cljs.core.list(new cljs.core.Symbol("ir","sub","ir/sub",-453228841,null),(1))))),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","signal","hyperfiddle.electric.impl.runtime/signal",340452693,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,null,null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-pub-0","-pub-0",-702992988,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-vars","-vars",2025560914,null)),null,(1),null))))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),new cljs.core.Symbol("clojure.core","array-map","clojure.core/array-map",-1351833961,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","constant","hyperfiddle.electric.impl.ir/constant",-1502571107),null,(1),null))))),null,(1),null)))),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","static","hyperfiddle.electric.impl.runtime/static",-547873025,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"-frame","-frame",-1998007688,null)),null,(1),null),cljs.core.list(new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(0),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52108.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52109","meta52109",161884547,null)], null);
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52108.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52108.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime52108");

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52108.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime52108");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime52108.
 */
hyperfiddle.electric.impl.runtime.__GT_t_hyperfiddle$electric$impl$runtime52108 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1006_$___GT_t_hyperfiddle$electric$impl$runtime52108(meta52109){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52108(meta52109));
});

}

return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52108(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1006;},new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","generated__hyperfiddle_electric_impl_runtime_1006","hyperfiddle.electric.impl.runtime/generated__hyperfiddle_electric_impl_runtime_1006",-1117564820,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/runtime.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"hyperfiddle.electric.impl.runtime","hyperfiddle.electric.impl.runtime",-92393903,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),1006,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_runtime_1006","generated__hyperfiddle_electric_impl_runtime_1006",1882553851,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1006)?hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1006.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1006));
} else {
}
hyperfiddle.electric.impl.runtime.juxt_with = (function hyperfiddle$electric$impl$runtime$juxt_with(var_args){
var G__52132 = arguments.length;
switch (G__52132) {
case 1:
return hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___52916 = arguments.length;
var i__5770__auto___52917 = (0);
while(true){
if((i__5770__auto___52917 < len__5769__auto___52916)){
args_arr__5794__auto__.push((arguments[i__5770__auto___52917]));

var G__52918 = (i__5770__auto___52917 + (1));
i__5770__auto___52917 = G__52918;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((4)),(0),null));
return hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5795__auto__);

}
});

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function() {
var G__52919 = null;
var G__52919__0 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__52919__1 = (function (a){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__52919__2 = (function (a,b){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__52919__3 = (function (a,b,c){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__52919__4 = (function() { 
var G__52921__delegate = function (a,b,c,ds){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
};
var G__52921 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__52922__i = 0, G__52922__a = new Array(arguments.length -  3);
while (G__52922__i < G__52922__a.length) {G__52922__a[G__52922__i] = arguments[G__52922__i + 3]; ++G__52922__i;}
  ds = new cljs.core.IndexedSeq(G__52922__a,0,null);
} 
return G__52921__delegate.call(this,a,b,c,ds);};
G__52921.cljs$lang$maxFixedArity = 3;
G__52921.cljs$lang$applyTo = (function (arglist__52923){
var a = cljs.core.first(arglist__52923);
arglist__52923 = cljs.core.next(arglist__52923);
var b = cljs.core.first(arglist__52923);
arglist__52923 = cljs.core.next(arglist__52923);
var c = cljs.core.first(arglist__52923);
var ds = cljs.core.rest(arglist__52923);
return G__52921__delegate(a,b,c,ds);
});
G__52921.cljs$core$IFn$_invoke$arity$variadic = G__52921__delegate;
return G__52921;
})()
;
G__52919 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__52919__0.call(this);
case 1:
return G__52919__1.call(this,a);
case 2:
return G__52919__2.call(this,a,b);
case 3:
return G__52919__3.call(this,a,b,c);
default:
var G__52924 = null;
if (arguments.length > 3) {
var G__52925__i = 0, G__52925__a = new Array(arguments.length -  3);
while (G__52925__i < G__52925__a.length) {G__52925__a[G__52925__i] = arguments[G__52925__i + 3]; ++G__52925__i;}
G__52924 = new cljs.core.IndexedSeq(G__52925__a,0,null);
}
return G__52919__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__52924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52919.cljs$lang$maxFixedArity = 3;
G__52919.cljs$lang$applyTo = G__52919__4.cljs$lang$applyTo;
G__52919.cljs$core$IFn$_invoke$arity$0 = G__52919__0;
G__52919.cljs$core$IFn$_invoke$arity$1 = G__52919__1;
G__52919.cljs$core$IFn$_invoke$arity$2 = G__52919__2;
G__52919.cljs$core$IFn$_invoke$arity$3 = G__52919__3;
G__52919.cljs$core$IFn$_invoke$arity$variadic = G__52919__4.cljs$core$IFn$_invoke$arity$variadic;
return G__52919;
})()
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$2 = (function (f,g){
return (function() {
var G__52926 = null;
var G__52926__0 = (function (){
var G__52133 = (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52133) : f.call(null,G__52133));
});
var G__52926__1 = (function (a){
var G__52134 = (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a) : g.call(null,a));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52134) : f.call(null,G__52134));
});
var G__52926__2 = (function (a,b){
var G__52135 = (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(a,b) : g.call(null,a,b));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52135) : f.call(null,G__52135));
});
var G__52926__3 = (function (a,b,c){
var G__52136 = (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(a,b,c) : g.call(null,a,b,c));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52136) : f.call(null,G__52136));
});
var G__52926__4 = (function() { 
var G__52930__delegate = function (a,b,c,ds){
var G__52137 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,a,b,c,ds);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52137) : f.call(null,G__52137));
};
var G__52930 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__52933__i = 0, G__52933__a = new Array(arguments.length -  3);
while (G__52933__i < G__52933__a.length) {G__52933__a[G__52933__i] = arguments[G__52933__i + 3]; ++G__52933__i;}
  ds = new cljs.core.IndexedSeq(G__52933__a,0,null);
} 
return G__52930__delegate.call(this,a,b,c,ds);};
G__52930.cljs$lang$maxFixedArity = 3;
G__52930.cljs$lang$applyTo = (function (arglist__52934){
var a = cljs.core.first(arglist__52934);
arglist__52934 = cljs.core.next(arglist__52934);
var b = cljs.core.first(arglist__52934);
arglist__52934 = cljs.core.next(arglist__52934);
var c = cljs.core.first(arglist__52934);
var ds = cljs.core.rest(arglist__52934);
return G__52930__delegate(a,b,c,ds);
});
G__52930.cljs$core$IFn$_invoke$arity$variadic = G__52930__delegate;
return G__52930;
})()
;
G__52926 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__52926__0.call(this);
case 1:
return G__52926__1.call(this,a);
case 2:
return G__52926__2.call(this,a,b);
case 3:
return G__52926__3.call(this,a,b,c);
default:
var G__52935 = null;
if (arguments.length > 3) {
var G__52936__i = 0, G__52936__a = new Array(arguments.length -  3);
while (G__52936__i < G__52936__a.length) {G__52936__a[G__52936__i] = arguments[G__52936__i + 3]; ++G__52936__i;}
G__52935 = new cljs.core.IndexedSeq(G__52936__a,0,null);
}
return G__52926__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__52935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52926.cljs$lang$maxFixedArity = 3;
G__52926.cljs$lang$applyTo = G__52926__4.cljs$lang$applyTo;
G__52926.cljs$core$IFn$_invoke$arity$0 = G__52926__0;
G__52926.cljs$core$IFn$_invoke$arity$1 = G__52926__1;
G__52926.cljs$core$IFn$_invoke$arity$2 = G__52926__2;
G__52926.cljs$core$IFn$_invoke$arity$3 = G__52926__3;
G__52926.cljs$core$IFn$_invoke$arity$variadic = G__52926__4.cljs$core$IFn$_invoke$arity$variadic;
return G__52926;
})()
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$3 = (function (f,g,h){
return (function() {
var G__52937 = null;
var G__52937__0 = (function (){
var G__52138 = (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
var G__52139 = (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__52138,G__52139) : f.call(null,G__52138,G__52139));
});
var G__52937__1 = (function (a){
var G__52140 = (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a) : g.call(null,a));
var G__52141 = (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(a) : h.call(null,a));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__52140,G__52141) : f.call(null,G__52140,G__52141));
});
var G__52937__2 = (function (a,b){
var G__52142 = (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(a,b) : g.call(null,a,b));
var G__52143 = (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(a,b) : h.call(null,a,b));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__52142,G__52143) : f.call(null,G__52142,G__52143));
});
var G__52937__3 = (function (a,b,c){
var G__52144 = (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(a,b,c) : g.call(null,a,b,c));
var G__52145 = (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(a,b,c) : h.call(null,a,b,c));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__52144,G__52145) : f.call(null,G__52144,G__52145));
});
var G__52937__4 = (function() { 
var G__52940__delegate = function (a,b,c,ds){
var G__52146 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,a,b,c,ds);
var G__52147 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,a,b,c,ds);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__52146,G__52147) : f.call(null,G__52146,G__52147));
};
var G__52940 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__52941__i = 0, G__52941__a = new Array(arguments.length -  3);
while (G__52941__i < G__52941__a.length) {G__52941__a[G__52941__i] = arguments[G__52941__i + 3]; ++G__52941__i;}
  ds = new cljs.core.IndexedSeq(G__52941__a,0,null);
} 
return G__52940__delegate.call(this,a,b,c,ds);};
G__52940.cljs$lang$maxFixedArity = 3;
G__52940.cljs$lang$applyTo = (function (arglist__52943){
var a = cljs.core.first(arglist__52943);
arglist__52943 = cljs.core.next(arglist__52943);
var b = cljs.core.first(arglist__52943);
arglist__52943 = cljs.core.next(arglist__52943);
var c = cljs.core.first(arglist__52943);
var ds = cljs.core.rest(arglist__52943);
return G__52940__delegate(a,b,c,ds);
});
G__52940.cljs$core$IFn$_invoke$arity$variadic = G__52940__delegate;
return G__52940;
})()
;
G__52937 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__52937__0.call(this);
case 1:
return G__52937__1.call(this,a);
case 2:
return G__52937__2.call(this,a,b);
case 3:
return G__52937__3.call(this,a,b,c);
default:
var G__52944 = null;
if (arguments.length > 3) {
var G__52945__i = 0, G__52945__a = new Array(arguments.length -  3);
while (G__52945__i < G__52945__a.length) {G__52945__a[G__52945__i] = arguments[G__52945__i + 3]; ++G__52945__i;}
G__52944 = new cljs.core.IndexedSeq(G__52945__a,0,null);
}
return G__52937__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__52944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52937.cljs$lang$maxFixedArity = 3;
G__52937.cljs$lang$applyTo = G__52937__4.cljs$lang$applyTo;
G__52937.cljs$core$IFn$_invoke$arity$0 = G__52937__0;
G__52937.cljs$core$IFn$_invoke$arity$1 = G__52937__1;
G__52937.cljs$core$IFn$_invoke$arity$2 = G__52937__2;
G__52937.cljs$core$IFn$_invoke$arity$3 = G__52937__3;
G__52937.cljs$core$IFn$_invoke$arity$variadic = G__52937__4.cljs$core$IFn$_invoke$arity$variadic;
return G__52937;
})()
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$4 = (function (f,g,h,i){
return (function() {
var G__52946 = null;
var G__52946__0 = (function (){
var G__52148 = (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
var G__52149 = (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
var G__52150 = (i.cljs$core$IFn$_invoke$arity$0 ? i.cljs$core$IFn$_invoke$arity$0() : i.call(null));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__52148,G__52149,G__52150) : f.call(null,G__52148,G__52149,G__52150));
});
var G__52946__1 = (function (a){
var G__52151 = (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a) : g.call(null,a));
var G__52152 = (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(a) : h.call(null,a));
var G__52153 = (i.cljs$core$IFn$_invoke$arity$1 ? i.cljs$core$IFn$_invoke$arity$1(a) : i.call(null,a));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__52151,G__52152,G__52153) : f.call(null,G__52151,G__52152,G__52153));
});
var G__52946__2 = (function (a,b){
var G__52154 = (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(a,b) : g.call(null,a,b));
var G__52155 = (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(a,b) : h.call(null,a,b));
var G__52156 = (i.cljs$core$IFn$_invoke$arity$2 ? i.cljs$core$IFn$_invoke$arity$2(a,b) : i.call(null,a,b));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__52154,G__52155,G__52156) : f.call(null,G__52154,G__52155,G__52156));
});
var G__52946__3 = (function (a,b,c){
var G__52157 = (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(a,b,c) : g.call(null,a,b,c));
var G__52158 = (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(a,b,c) : h.call(null,a,b,c));
var G__52159 = (i.cljs$core$IFn$_invoke$arity$3 ? i.cljs$core$IFn$_invoke$arity$3(a,b,c) : i.call(null,a,b,c));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__52157,G__52158,G__52159) : f.call(null,G__52157,G__52158,G__52159));
});
var G__52946__4 = (function() { 
var G__52949__delegate = function (a,b,c,ds){
var G__52160 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,a,b,c,ds);
var G__52161 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,a,b,c,ds);
var G__52162 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(i,a,b,c,ds);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__52160,G__52161,G__52162) : f.call(null,G__52160,G__52161,G__52162));
};
var G__52949 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__52951__i = 0, G__52951__a = new Array(arguments.length -  3);
while (G__52951__i < G__52951__a.length) {G__52951__a[G__52951__i] = arguments[G__52951__i + 3]; ++G__52951__i;}
  ds = new cljs.core.IndexedSeq(G__52951__a,0,null);
} 
return G__52949__delegate.call(this,a,b,c,ds);};
G__52949.cljs$lang$maxFixedArity = 3;
G__52949.cljs$lang$applyTo = (function (arglist__52952){
var a = cljs.core.first(arglist__52952);
arglist__52952 = cljs.core.next(arglist__52952);
var b = cljs.core.first(arglist__52952);
arglist__52952 = cljs.core.next(arglist__52952);
var c = cljs.core.first(arglist__52952);
var ds = cljs.core.rest(arglist__52952);
return G__52949__delegate(a,b,c,ds);
});
G__52949.cljs$core$IFn$_invoke$arity$variadic = G__52949__delegate;
return G__52949;
})()
;
G__52946 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__52946__0.call(this);
case 1:
return G__52946__1.call(this,a);
case 2:
return G__52946__2.call(this,a,b);
case 3:
return G__52946__3.call(this,a,b,c);
default:
var G__52953 = null;
if (arguments.length > 3) {
var G__52954__i = 0, G__52954__a = new Array(arguments.length -  3);
while (G__52954__i < G__52954__a.length) {G__52954__a[G__52954__i] = arguments[G__52954__i + 3]; ++G__52954__i;}
G__52953 = new cljs.core.IndexedSeq(G__52954__a,0,null);
}
return G__52946__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__52953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52946.cljs$lang$maxFixedArity = 3;
G__52946.cljs$lang$applyTo = G__52946__4.cljs$lang$applyTo;
G__52946.cljs$core$IFn$_invoke$arity$0 = G__52946__0;
G__52946.cljs$core$IFn$_invoke$arity$1 = G__52946__1;
G__52946.cljs$core$IFn$_invoke$arity$2 = G__52946__2;
G__52946.cljs$core$IFn$_invoke$arity$3 = G__52946__3;
G__52946.cljs$core$IFn$_invoke$arity$variadic = G__52946__4.cljs$core$IFn$_invoke$arity$variadic;
return G__52946;
})()
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,g,h,i,js){
return (function() {
var G__52955 = null;
var G__52955__0 = (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null)),(h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null)),(i.cljs$core$IFn$_invoke$arity$0 ? i.cljs$core$IFn$_invoke$arity$0() : i.call(null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52121_SHARP_){
return (p1__52121_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__52121_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__52121_SHARP_.call(null));
}),js));
});
var G__52955__1 = (function (a){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a) : g.call(null,a)),(h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(a) : h.call(null,a)),(i.cljs$core$IFn$_invoke$arity$1 ? i.cljs$core$IFn$_invoke$arity$1(a) : i.call(null,a)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52122_SHARP_){
return (p1__52122_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__52122_SHARP_.cljs$core$IFn$_invoke$arity$1(a) : p1__52122_SHARP_.call(null,a));
}),js));
});
var G__52955__2 = (function (a,b){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(a,b) : g.call(null,a,b)),(h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(a,b) : h.call(null,a,b)),(i.cljs$core$IFn$_invoke$arity$2 ? i.cljs$core$IFn$_invoke$arity$2(a,b) : i.call(null,a,b)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52123_SHARP_){
return (p1__52123_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__52123_SHARP_.cljs$core$IFn$_invoke$arity$2(a,b) : p1__52123_SHARP_.call(null,a,b));
}),js));
});
var G__52955__3 = (function (a,b,c){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(a,b,c) : g.call(null,a,b,c)),(h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(a,b,c) : h.call(null,a,b,c)),(i.cljs$core$IFn$_invoke$arity$3 ? i.cljs$core$IFn$_invoke$arity$3(a,b,c) : i.call(null,a,b,c)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52124_SHARP_){
return (p1__52124_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__52124_SHARP_.cljs$core$IFn$_invoke$arity$3(a,b,c) : p1__52124_SHARP_.call(null,a,b,c));
}),js));
});
var G__52955__4 = (function() { 
var G__52959__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,a,b,c,ds),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,a,b,c,ds),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(i,a,b,c,ds),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52125_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(p1__52125_SHARP_,a,b,c,ds);
}),js));
};
var G__52959 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__52960__i = 0, G__52960__a = new Array(arguments.length -  3);
while (G__52960__i < G__52960__a.length) {G__52960__a[G__52960__i] = arguments[G__52960__i + 3]; ++G__52960__i;}
  ds = new cljs.core.IndexedSeq(G__52960__a,0,null);
} 
return G__52959__delegate.call(this,a,b,c,ds);};
G__52959.cljs$lang$maxFixedArity = 3;
G__52959.cljs$lang$applyTo = (function (arglist__52961){
var a = cljs.core.first(arglist__52961);
arglist__52961 = cljs.core.next(arglist__52961);
var b = cljs.core.first(arglist__52961);
arglist__52961 = cljs.core.next(arglist__52961);
var c = cljs.core.first(arglist__52961);
var ds = cljs.core.rest(arglist__52961);
return G__52959__delegate(a,b,c,ds);
});
G__52959.cljs$core$IFn$_invoke$arity$variadic = G__52959__delegate;
return G__52959;
})()
;
G__52955 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__52955__0.call(this);
case 1:
return G__52955__1.call(this,a);
case 2:
return G__52955__2.call(this,a,b);
case 3:
return G__52955__3.call(this,a,b,c);
default:
var G__52962 = null;
if (arguments.length > 3) {
var G__52963__i = 0, G__52963__a = new Array(arguments.length -  3);
while (G__52963__i < G__52963__a.length) {G__52963__a[G__52963__i] = arguments[G__52963__i + 3]; ++G__52963__i;}
G__52962 = new cljs.core.IndexedSeq(G__52963__a,0,null);
}
return G__52955__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__52962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52955.cljs$lang$maxFixedArity = 3;
G__52955.cljs$lang$applyTo = G__52955__4.cljs$lang$applyTo;
G__52955.cljs$core$IFn$_invoke$arity$0 = G__52955__0;
G__52955.cljs$core$IFn$_invoke$arity$1 = G__52955__1;
G__52955.cljs$core$IFn$_invoke$arity$2 = G__52955__2;
G__52955.cljs$core$IFn$_invoke$arity$3 = G__52955__3;
G__52955.cljs$core$IFn$_invoke$arity$variadic = G__52955__4.cljs$core$IFn$_invoke$arity$variadic;
return G__52955;
})()
}));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.juxt_with.cljs$lang$applyTo = (function (seq52127){
var G__52128 = cljs.core.first(seq52127);
var seq52127__$1 = cljs.core.next(seq52127);
var G__52129 = cljs.core.first(seq52127__$1);
var seq52127__$2 = cljs.core.next(seq52127__$1);
var G__52130 = cljs.core.first(seq52127__$2);
var seq52127__$3 = cljs.core.next(seq52127__$2);
var G__52131 = cljs.core.first(seq52127__$3);
var seq52127__$4 = cljs.core.next(seq52127__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52128,G__52129,G__52130,G__52131,seq52127__$4);
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$lang$maxFixedArity = (4));

hyperfiddle.electric.impl.runtime.globals = (function hyperfiddle$electric$impl$runtime$globals(program){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.name),cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.vector_QMARK_),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__52163){
var vec__52164 = p__52163;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52164,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52164,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"global","global",93595047),a);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.second),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.distinct.cljs$core$IFn$_invoke$arity$0()], 0)),cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,program)], 0)));
});
hyperfiddle.electric.impl.runtime.missing_exports = (function hyperfiddle$electric$impl$runtime$missing_exports(resolvef,program){
return cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(resolvef,new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","not-found","hyperfiddle.electric.impl.runtime/not-found",-1898753095)),cljs.core.identity)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__52167_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","not-found","hyperfiddle.electric.impl.runtime/not-found",-1898753095),cljs.core.first(p1__52167_SHARP_));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.second),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol),hyperfiddle.electric.impl.runtime.globals(program)], 0));
});
hyperfiddle.electric.impl.runtime.dynamic_resolve = (function hyperfiddle$electric$impl$runtime$dynamic_resolve(nf,x){
return nf;
});
hyperfiddle.electric.impl.runtime.eval = (function hyperfiddle$electric$impl$runtime$eval(var_args){
var G__52169 = arguments.length;
switch (G__52169) {
case 1:
return hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$1 = (function (inst){
return hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.dynamic_resolve,inst);
}));

(hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$2 = (function (resolvef,inst){
return hyperfiddle.electric.impl.runtime.compile(inst,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lift","lift",903632035),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"do","do",46310725),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"sub","sub",-2093760025),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"nop","nop",-1754075182),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"inject","inject",-1882635533),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"invoke","invoke",1145927159),new cljs.core.Keyword(null,"vget","vget",1720343287),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"pub","pub",-1189143908),new cljs.core.Keyword(null,"bind","bind",-113428417),new cljs.core.Keyword(null,"eval","eval",-1103567905)],[(function (form){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.pure((form.cljs$core$IFn$_invoke$arity$3 ? form.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : form.call(null,pubs,frame,vars)));
});
}),(function (form,remote,slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.variable(frame,vars,(remote + slot),slot,(form.cljs$core$IFn$_invoke$arity$3 ? form.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : form.call(null,pubs,frame,vars)));
});
}),(function (deps,inst__$1){
return (function (pubs,frame,vars){
hyperfiddle.electric.impl.runtime.make_input(frame,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (inst__$2){
return (inst__$2.cljs$core$IFn$_invoke$arity$3 ? inst__$2.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : inst__$2.call(null,pubs,frame,vars));
}),deps));

return (inst__$1.cljs$core$IFn$_invoke$arity$3 ? inst__$1.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : inst__$1.call(null,pubs,frame,vars));
});
}),(function (x){
var r = (resolvef.cljs$core$IFn$_invoke$arity$2 ? resolvef.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","not-found","hyperfiddle.electric.impl.runtime/not-found",-1898753095),x) : resolvef.call(null,new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","not-found","hyperfiddle.electric.impl.runtime/not-found",-1898753095),x));
var G__52170 = r;
var G__52170__$1 = (((G__52170 instanceof cljs.core.Keyword))?G__52170.fqn:null);
switch (G__52170__$1) {
case "hyperfiddle.electric.impl.runtime/not-found":
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unable to resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(x))].join(''),cljs.core.PersistentArrayMap.EMPTY);

break;
default:
return cljs.core.constantly(hyperfiddle.electric.impl.runtime.pure(r));

}
}),(function (idx){
return (function (pubs,frame,vars){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pubs,idx);
});
}),(function (debug_info,form,static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.constant(frame,slot,hyperfiddle.electric.impl.runtime.constructor$(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pubs,static$),dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,(function() { 
var G__52966__delegate = function (args){
return hyperfiddle.electric.impl.runtime.check_failure(debug_info,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(form,pubs,args));
};
var G__52966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52967__i = 0, G__52967__a = new Array(arguments.length -  0);
while (G__52967__i < G__52967__a.length) {G__52967__a[G__52967__i] = arguments[G__52967__i + 0]; ++G__52967__i;}
  args = new cljs.core.IndexedSeq(G__52967__a,0,null);
} 
return G__52966__delegate.call(this,args);};
G__52966.cljs$lang$maxFixedArity = 0;
G__52966.cljs$lang$applyTo = (function (arglist__52968){
var args = cljs.core.seq(arglist__52968);
return G__52966__delegate(args);
});
G__52966.cljs$core$IFn$_invoke$arity$variadic = G__52966__delegate;
return G__52966;
})()
));
});
}),(function (slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.static$(frame,slot);
});
}),(function (remote,slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.source(frame,vars,(remote + slot),slot);
});
}),(function (debug_info,form,slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.make_output(slot,hyperfiddle.electric.impl.runtime.check_failure(debug_info,(form.cljs$core$IFn$_invoke$arity$3 ? form.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : form.call(null,pubs,frame,vars))));
});
}),cljs.core.constantly(null),(function (slot,debug_info){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.dynamic(frame,slot,debug_info);
});
}),(function (slot){
return cljs.core.constantly(hyperfiddle.electric.impl.runtime.pure(hyperfiddle.electric.impl.runtime.inject(slot)));
}),(function (x){
return cljs.core.constantly(hyperfiddle.electric.impl.runtime.pure(x));
}),(function() { 
var G__52969__delegate = function (debug_info,forms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.juxt_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.latest_apply,debug_info),forms);
};
var G__52969 = function (debug_info,var_args){
var forms = null;
if (arguments.length > 1) {
var G__52970__i = 0, G__52970__a = new Array(arguments.length -  1);
while (G__52970__i < G__52970__a.length) {G__52970__a[G__52970__i] = arguments[G__52970__i + 1]; ++G__52970__i;}
  forms = new cljs.core.IndexedSeq(G__52970__a,0,null);
} 
return G__52969__delegate.call(this,debug_info,forms);};
G__52969.cljs$lang$maxFixedArity = 1;
G__52969.cljs$lang$applyTo = (function (arglist__52971){
var debug_info = cljs.core.first(arglist__52971);
var forms = cljs.core.rest(arglist__52971);
return G__52969__delegate(debug_info,forms);
});
G__52969.cljs$core$IFn$_invoke$arity$variadic = G__52969__delegate;
return G__52969;
})()
,(function (slot){
return (function (pubs,frame,vars){
return (vars[(slot | (0))]);
});
}),(function (deps,slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.input_spawn(frame,slot,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (inst__$1){
return (inst__$1.cljs$core$IFn$_invoke$arity$3 ? inst__$1.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : inst__$1.call(null,pubs,frame,vars));
}),deps));
});
}),(function (deps,static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.target(frame,slot,hyperfiddle.electric.impl.runtime.constructor$(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pubs,static$),dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,(function (frame__$1,vars__$1){
return hyperfiddle.electric.impl.runtime.make_input(frame__$1,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (inst__$1){
return (inst__$1.cljs$core$IFn$_invoke$arity$3 ? inst__$1.cljs$core$IFn$_invoke$arity$3(pubs,frame__$1,vars__$1) : inst__$1.call(null,pubs,frame__$1,vars__$1));
}),deps));
})));
});
}),(function (form,var_count,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count){
return hyperfiddle.electric.impl.runtime.peer(var_count,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(form,cljs.core.PersistentVector.EMPTY));
}),(function (form,cont,_){
return (function (pubs,frame,vars){
var G__52171 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pubs,hyperfiddle.electric.impl.runtime.signal((form.cljs$core$IFn$_invoke$arity$3 ? form.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : form.call(null,pubs,frame,vars))));
var G__52172 = frame;
var G__52173 = vars;
return (cont.cljs$core$IFn$_invoke$arity$3 ? cont.cljs$core$IFn$_invoke$arity$3(G__52171,G__52172,G__52173) : cont.call(null,G__52171,G__52172,G__52173));
});
}),(function (form,slot,s){
return (function (pubs,frame,vars){
var prev = (vars[(slot | (0))]);
(vars[(slot | (0))] = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pubs,s));

var res = (form.cljs$core$IFn$_invoke$arity$3 ? form.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : form.call(null,pubs,frame,vars));
(vars[(slot | (0))] = prev);

return res;
});
}),(function (form,ns){
var temp__5806__auto__ = (function (){var G__52174 = ns;
if((G__52174 == null)){
return null;
} else {
return cljs.core.find_ns(G__52174);
}
})();
if((temp__5806__auto__ == null)){
return cljs.core.constantly(hyperfiddle.electric.impl.runtime.pure(cljs.core.eval(form)));
} else {
var ns__$1 = temp__5806__auto__;
return cljs.core.constantly(hyperfiddle.electric.impl.runtime.pure((function (){var _STAR_ns_STAR__orig_val__52175 = cljs.core._STAR_ns_STAR_;
var _STAR_ns_STAR__temp_val__52176 = ns__$1;
(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__52176);

try{return cljs.core.eval(form);
}finally {(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__52175);
}})()));
}
})]));
}));

(hyperfiddle.electric.impl.runtime.eval.cljs$lang$maxFixedArity = 2);

hyperfiddle.electric.impl.runtime.queue = (function hyperfiddle$electric$impl$runtime$queue(){
var q = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((0));
return (function() {
var G__52972 = null;
var G__52972__0 = (function (){
if((q.length === (0))){
throw (new Error("No such element."));
} else {
}

return q.shift();
});
var G__52972__1 = (function (x){
q.push(x);

return x;
});
G__52972 = function(x){
switch(arguments.length){
case 0:
return G__52972__0.call(this);
case 1:
return G__52972__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52972.cljs$core$IFn$_invoke$arity$0 = G__52972__0;
G__52972.cljs$core$IFn$_invoke$arity$1 = G__52972__1;
return G__52972;
})()
});
hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1281 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1281(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.runtime !== 'undefined') && (typeof hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52179 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52179 = (function (meta52180){
this.meta52180 = meta52180;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52181,meta52180__$1){
var self__ = this;
var _52181__$1 = this;
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52179(meta52180__$1));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52181){
var self__ = this;
var _52181__$1 = this;
return self__.meta52180;
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52179.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52179.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__52183 = (arguments.length - (1));
switch (G__52183) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52179.prototype.apply = (function (self__,args52182){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args52182)));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52179.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_52178){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(2,done_52178);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["uncaught exception crash"], 0));

try{var q = hyperfiddle.electric.impl.runtime.queue();
var _BANG_x = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var c = (function (){var fexpr__52188 = (function (){var G__52190 = (function (x){
q(x);

return (function (s,_){
q((function (){
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(null) : s.call(null,null));
}));

return (function (){
return cljs.core.List.EMPTY;
});
});
});
var G__52191 = (function (_BANG_){
q(_BANG_);

return (function (){
return cljs.core.List.EMPTY;
});
});
var G__52192 = (function (e){
throw e;
});
var fexpr__52189 = hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.ir.apply.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.ir.literal(q),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.ir.apply.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.ir.literal((function (p1__52177_SHARP_){
if(cljs.core.truth_(p1__52177_SHARP_)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("boom",cljs.core.PersistentArrayMap.EMPTY);
}
})),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.ir.variable(hyperfiddle.electric.impl.ir.literal(missionary.core.watch(_BANG_x)))], 0))], 0)));
return (fexpr__52189.cljs$core$IFn$_invoke$arity$3 ? fexpr__52189.cljs$core$IFn$_invoke$arity$3(G__52190,G__52191,G__52192) : fexpr__52189.call(null,G__52190,G__52191,G__52192));
})();
return (fexpr__52188.cljs$core$IFn$_invoke$arity$2 ? fexpr__52188.cljs$core$IFn$_invoke$arity$2(q,q) : fexpr__52188.call(null,q,q));
})();
try{var values__10703__auto___52975 = (new cljs.core.List(null,q(),(new cljs.core.List(null,null,null,(1),null)),(2),null));
var result__10704__auto___52976 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___52975);
if(cljs.core.truth_(result__10704__auto___52976)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___52975),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),null),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___52975),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___52975);
}catch (e52193){var t__10691__auto___52978 = e52193;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),null),null,t__10691__auto___52978,null]));
}finally {RCF__done_BANG_();
}
q();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_x,cljs.core.not);

try{var values__10703__auto__ = (new cljs.core.List(null,cljs.core.ex_message(q()),(new cljs.core.List(null,"boom",null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"ex-message","ex-message",-1128293394,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null))),"boom"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"ex-message","ex-message",-1128293394,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null))),"boom"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e52194){var t__10691__auto__ = e52194;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"ex-message","ex-message",-1128293394,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null))),"boom"),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52179.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52180","meta52180",-365092862,null)], null);
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52179.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52179.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime52179");

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52179.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime52179");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime52179.
 */
hyperfiddle.electric.impl.runtime.__GT_t_hyperfiddle$electric$impl$runtime52179 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1281_$___GT_t_hyperfiddle$electric$impl$runtime52179(meta52180){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52179(meta52180));
});

}

return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52179(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1281;},new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","generated__hyperfiddle_electric_impl_runtime_1281","hyperfiddle.electric.impl.runtime/generated__hyperfiddle_electric_impl_runtime_1281",834978110,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/runtime.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"hyperfiddle.electric.impl.runtime","hyperfiddle.electric.impl.runtime",-92393903,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),1281,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_runtime_1281","generated__hyperfiddle_electric_impl_runtime_1281",-89580877,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1281)?hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1281.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1281));
} else {
}
hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1297 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1297(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.runtime !== 'undefined') && (typeof hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52205 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52205 = (function (meta52206){
this.meta52206 = meta52206;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52207,meta52206__$1){
var self__ = this;
var _52207__$1 = this;
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52205(meta52206__$1));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52207){
var self__ = this;
var _52207__$1 = this;
return self__.meta52206;
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52205.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52205.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__52209 = (arguments.length - (1));
switch (G__52209) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52205.prototype.apply = (function (self__,args52208){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args52208)));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52205.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_52204){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(4,done_52204);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["simple input"], 0));

try{var q = hyperfiddle.electric.impl.runtime.queue();
var c = (function (){var fexpr__52214 = (function (){var G__52216 = (function (x){
q(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),x], null));

return (function (s,_){
q(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","backpressure","hyperfiddle.electric.impl.runtime/backpressure",-1307431533),(function (){
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(null) : s.call(null,null));
})], null));

return (function (){
return cljs.core.List.EMPTY;
});
});
});
var G__52217 = (function (_BANG_){
q(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","read","hyperfiddle.electric.impl.runtime/read",117808796),_BANG_], null));

return (function (){
return cljs.core.List.EMPTY;
});
});
var G__52218 = (function (e){
return q(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","error","hyperfiddle.electric.impl.runtime/error",1884319145),e], null));
});
var fexpr__52215 = hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.ir.input(cljs.core.PersistentVector.EMPTY));
return (fexpr__52215.cljs$core$IFn$_invoke$arity$3 ? fexpr__52215.cljs$core$IFn$_invoke$arity$3(G__52216,G__52217,G__52218) : fexpr__52215.call(null,G__52216,G__52217,G__52218));
})();
return (fexpr__52214.cljs$core$IFn$_invoke$arity$2 ? fexpr__52214.cljs$core$IFn$_invoke$arity$2(q,q) : fexpr__52214.call(null,q,q));
})();
try{var values__10703__auto___52988 = (new cljs.core.List(null,q(),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","error","hyperfiddle.electric.impl.runtime/error",1884319145),(new hyperfiddle.electric.Pending())], null),null,(1),null)),(2),null));
var result__10704__auto___52989 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___52988);
if(cljs.core.truth_(result__10704__auto___52989)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","error","hyperfiddle.electric.impl.runtime/error",1884319145),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___52988),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","error","hyperfiddle.electric.impl.runtime/error",1884319145),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___52988),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___52988);
}catch (e52219){var t__10691__auto___52992 = e52219;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","error","hyperfiddle.electric.impl.runtime/error",1884319145),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))], null)),null,t__10691__auto___52992,null]));
}finally {RCF__done_BANG_();
}
var vec__52195 = q();
var _read = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52195,(0),null);
var _BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52195,(1),null);
var G__52220_52994 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"a","a",-2123407586));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__52220_52994) : _BANG_.call(null,G__52220_52994));

try{var values__10703__auto___52995 = (new cljs.core.List(null,q(),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),cljs.core.inc)], null),null,(1),null)),(2),null));
var result__10704__auto___52996 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___52995);
if(cljs.core.truth_(result__10704__auto___52996)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),new cljs.core.Symbol(null,"inc","inc",324505433,null))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___52995),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),new cljs.core.Symbol(null,"inc","inc",324505433,null))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___52995),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___52995);
}catch (e52221){var t__10691__auto___52999 = e52221;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),new cljs.core.Symbol(null,"inc","inc",324505433,null))], null)),null,t__10691__auto___52999,null]));
}finally {RCF__done_BANG_();
}
var vec__52198_53000 = q();
var _backpressure_53001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52198_53000,(0),null);
var ack_53002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52198_53000,(1),null);
(ack_53002.cljs$core$IFn$_invoke$arity$0 ? ack_53002.cljs$core$IFn$_invoke$arity$0() : ack_53002.call(null));

var G__52222_53004 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"b","b",1482224470));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__52222_53004) : _BANG_.call(null,G__52222_53004));

try{var values__10703__auto___53005 = (new cljs.core.List(null,q(),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),cljs.core.inc)], null),null,(1),null)),(2),null));
var result__10704__auto___53006 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53005);
if(cljs.core.truth_(result__10704__auto___53006)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),new cljs.core.Symbol(null,"inc","inc",324505433,null))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53005),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),new cljs.core.Symbol(null,"inc","inc",324505433,null))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53005),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53005);
}catch (e52223){var t__10691__auto___53008 = e52223;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),new cljs.core.Symbol(null,"inc","inc",324505433,null))], null)),null,t__10691__auto___53008,null]));
}finally {RCF__done_BANG_();
}
var vec__52201_53010 = q();
var _backpressure_53011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52201_53010,(0),null);
var ack_53012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52201_53010,(1),null);
(ack_53012.cljs$core$IFn$_invoke$arity$0 ? ack_53012.cljs$core$IFn$_invoke$arity$0() : ack_53012.call(null));

(c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null));

try{var values__10703__auto__ = (new cljs.core.List(null,cljs.core.type(q()),(new cljs.core.List(null,missionary.Cancelled,null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null))),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null))),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e52224){var t__10691__auto__ = e52224;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null))),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52206","meta52206",632047144,null)], null);
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52205.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52205.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime52205");

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52205.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime52205");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime52205.
 */
hyperfiddle.electric.impl.runtime.__GT_t_hyperfiddle$electric$impl$runtime52205 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1297_$___GT_t_hyperfiddle$electric$impl$runtime52205(meta52206){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52205(meta52206));
});

}

return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52205(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1297;},new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","generated__hyperfiddle_electric_impl_runtime_1297","hyperfiddle.electric.impl.runtime/generated__hyperfiddle_electric_impl_runtime_1297",-173646202,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/runtime.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"hyperfiddle.electric.impl.runtime","hyperfiddle.electric.impl.runtime",-92393903,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),1297,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_runtime_1297","generated__hyperfiddle_electric_impl_runtime_1297",948963601,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1297)?hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1297.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1297));
} else {
}
hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1316 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1316(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.runtime !== 'undefined') && (typeof hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52238 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52238 = (function (meta52239){
this.meta52239 = meta52239;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52240,meta52239__$1){
var self__ = this;
var _52240__$1 = this;
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52238(meta52239__$1));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52240){
var self__ = this;
var _52240__$1 = this;
return self__.meta52239;
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52238.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52238.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__52242 = (arguments.length - (1));
switch (G__52242) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52238.prototype.apply = (function (self__,args52241){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args52241)));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52238.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_52237){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(5,done_52237);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Fast changes to simulate backpressure"], 0));

try{var q = hyperfiddle.electric.impl.runtime.queue();
var c = (function (){var fexpr__52247 = (function (){var G__52249 = (function (x){
q(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),x], null));

return (function (s,_){
q(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","backpressure","hyperfiddle.electric.impl.runtime/backpressure",-1307431533),(function (){
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(null) : s.call(null,null));
})], null));

return (function (){
return cljs.core.List.EMPTY;
});
});
});
var G__52250 = (function (_BANG_){
q(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","read","hyperfiddle.electric.impl.runtime/read",117808796),_BANG_], null));

return (function (){
return cljs.core.List.EMPTY;
});
});
var G__52251 = (function (e){
return q(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","error","hyperfiddle.electric.impl.runtime/error",1884319145),e], null));
});
var fexpr__52248 = hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.ir.input(cljs.core.PersistentVector.EMPTY));
return (fexpr__52248.cljs$core$IFn$_invoke$arity$3 ? fexpr__52248.cljs$core$IFn$_invoke$arity$3(G__52249,G__52250,G__52251) : fexpr__52248.call(null,G__52249,G__52250,G__52251));
})();
return (fexpr__52247.cljs$core$IFn$_invoke$arity$2 ? fexpr__52247.cljs$core$IFn$_invoke$arity$2(q,q) : fexpr__52247.call(null,q,q));
})();
try{var values__10703__auto___53024 = (new cljs.core.List(null,q(),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","error","hyperfiddle.electric.impl.runtime/error",1884319145),(new hyperfiddle.electric.Pending())], null),null,(1),null)),(2),null));
var result__10704__auto___53025 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53024);
if(cljs.core.truth_(result__10704__auto___53025)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","error","hyperfiddle.electric.impl.runtime/error",1884319145),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53024),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","error","hyperfiddle.electric.impl.runtime/error",1884319145),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53024),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53024);
}catch (e52252){var t__10691__auto___53030 = e52252;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","error","hyperfiddle.electric.impl.runtime/error",1884319145),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))], null)),null,t__10691__auto___53030,null]));
}finally {RCF__done_BANG_();
}
var vec__52225 = q();
var _read = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52225,(0),null);
var _BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52225,(1),null);
var G__52253_53034 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"a","a",-2123407586));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__52253_53034) : _BANG_.call(null,G__52253_53034));

var G__52254_53035 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"b","b",1482224470));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__52254_53035) : _BANG_.call(null,G__52254_53035));

var G__52255_53037 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"c","c",-1763192079));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__52255_53037) : _BANG_.call(null,G__52255_53037));

var G__52256_53038 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"d","d",1972142424));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__52256_53038) : _BANG_.call(null,G__52256_53038));

try{var values__10703__auto___53039 = (new cljs.core.List(null,q(),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1))], null),null,(1),null)),(2),null));
var result__10704__auto___53040 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53039);
if(cljs.core.truth_(result__10704__auto___53040)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53039),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53039),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53039);
}catch (e52257){var t__10691__auto___53046 = e52257;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))], null)),null,t__10691__auto___53046,null]));
}finally {RCF__done_BANG_();
}
var vec__52228_53047 = q();
var _backpressure_53048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52228_53047,(0),null);
var ack_53049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52228_53047,(1),null);
(ack_53049.cljs$core$IFn$_invoke$arity$0 ? ack_53049.cljs$core$IFn$_invoke$arity$0() : ack_53049.call(null));

try{var values__10703__auto___53050 = (new cljs.core.List(null,q(),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1))], null),null,(1),null)),(2),null));
var result__10704__auto___53051 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53050);
if(cljs.core.truth_(result__10704__auto___53051)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53050),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53050),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53050);
}catch (e52258){var t__10691__auto___53054 = e52258;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))], null)),null,t__10691__auto___53054,null]));
}finally {RCF__done_BANG_();
}
var vec__52231_53056 = q();
var _backpressure_53057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52231_53056,(0),null);
var ack_53058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52231_53056,(1),null);
(ack_53058.cljs$core$IFn$_invoke$arity$0 ? ack_53058.cljs$core$IFn$_invoke$arity$0() : ack_53058.call(null));

try{var values__10703__auto___53059 = (new cljs.core.List(null,q(),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(2))], null),null,(1),null)),(2),null));
var result__10704__auto___53060 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53059);
if(cljs.core.truth_(result__10704__auto___53060)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(2))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53059),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(2))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53059),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53059);
}catch (e52259){var t__10691__auto___53063 = e52259;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","write","hyperfiddle.electric.impl.runtime/write",638884353),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(2))], null)),null,t__10691__auto___53063,null]));
}finally {RCF__done_BANG_();
}
var vec__52234_53064 = q();
var _backpressure_53065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52234_53064,(0),null);
var ack_53066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52234_53064,(1),null);
(ack_53066.cljs$core$IFn$_invoke$arity$0 ? ack_53066.cljs$core$IFn$_invoke$arity$0() : ack_53066.call(null));

(c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null));

try{var values__10703__auto__ = (new cljs.core.List(null,cljs.core.type(q()),(new cljs.core.List(null,missionary.Cancelled,null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null))),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null))),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e52260){var t__10691__auto__ = e52260;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null))),new cljs.core.Symbol(null,"Cancelled","Cancelled",1665043842,null)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52239","meta52239",-1778549946,null)], null);
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52238.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52238.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime52238");

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52238.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime52238");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime52238.
 */
hyperfiddle.electric.impl.runtime.__GT_t_hyperfiddle$electric$impl$runtime52238 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1316_$___GT_t_hyperfiddle$electric$impl$runtime52238(meta52239){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52238(meta52239));
});

}

return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52238(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1316;},new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","generated__hyperfiddle_electric_impl_runtime_1316","hyperfiddle.electric.impl.runtime/generated__hyperfiddle_electric_impl_runtime_1316",102477018,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/runtime.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"hyperfiddle.electric.impl.runtime","hyperfiddle.electric.impl.runtime",-92393903,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),1316,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_runtime_1316","generated__hyperfiddle_electric_impl_runtime_1316",-915040177,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1316)?hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1316.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1316));
} else {
}
hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1342 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1342(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.runtime !== 'undefined') && (typeof hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52262 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52262 = (function (meta52263){
this.meta52263 = meta52263;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52264,meta52263__$1){
var self__ = this;
var _52264__$1 = this;
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52262(meta52263__$1));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52264){
var self__ = this;
var _52264__$1 = this;
return self__.meta52263;
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52262.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52262.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__52266 = (arguments.length - (1));
switch (G__52266) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52262.prototype.apply = (function (self__,args52265){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args52265)));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52262.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_52261){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(7,done_52261);

var q_53075 = hyperfiddle.electric.impl.runtime.queue();
var c_53076 = (function (){var fexpr__52271 = (function (){var G__52273 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1342_$_write_to_network(x){
q_53075(x);

return (function (s,_){
q_53075((function (){
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(null) : s.call(null,null));
}));

return (function (){
return cljs.core.List.EMPTY;
});
});
});
var G__52274 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1342_$_read_subject(_BANG_){
q_53075(_BANG_);

return (function (){
return cljs.core.List.EMPTY;
});
});
var G__52275 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1342_$_error_handler(e){
return q_53075(e);
});
var fexpr__52272 = hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.ir.apply.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.ir.literal(q_53075),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.ir.input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hyperfiddle.electric.impl.ir.target(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hyperfiddle.electric.impl.ir.output(hyperfiddle.electric.impl.ir.literal((1)))], null)),hyperfiddle.electric.impl.ir.source], null))], 0)));
return (fexpr__52272.cljs$core$IFn$_invoke$arity$3 ? fexpr__52272.cljs$core$IFn$_invoke$arity$3(G__52273,G__52274,G__52275) : fexpr__52272.call(null,G__52273,G__52274,G__52275));
})();
return (fexpr__52271.cljs$core$IFn$_invoke$arity$2 ? fexpr__52271.cljs$core$IFn$_invoke$arity$2(q_53075,q_53075) : fexpr__52271.call(null,q_53075,q_53075));
})();
try{var values__10703__auto___53078 = (new cljs.core.List(null,q_53075(),(new cljs.core.List(null,(new hyperfiddle.electric.Pending()),null,(1),null)),(2),null));
var result__10704__auto___53079 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53078);
if(cljs.core.truth_(result__10704__auto___53079)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53078),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53078),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53078);
}catch (e52276){var t__10691__auto___53082 = e52276;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))),null,t__10691__auto___53082,null]));
}finally {RCF__done_BANG_();
}
var _BANG__53083 = q_53075();
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["client recieves event"], 0));

try{var G__52277_53084 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),hyperfiddle.electric.impl.runtime.pending])], 0));
(_BANG__53083.cljs$core$IFn$_invoke$arity$1 ? _BANG__53083.cljs$core$IFn$_invoke$arity$1(G__52277_53084) : _BANG__53083.call(null,G__52277_53084));

try{var values__10703__auto___53086 = (new cljs.core.List(null,q_53075(),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(1)]),new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)])], 0)),null,(1),null)),(2),null));
var result__10704__auto___53087 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53086);
if(cljs.core.truth_(result__10704__auto___53087)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(1)], null),new cljs.core.Keyword(null,"freeze","freeze",2043466309),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),"null"], null), null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53086),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(1)], null),new cljs.core.Keyword(null,"freeze","freeze",2043466309),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),"null"], null), null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53086),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53086);
}catch (e52278){var t__10691__auto___53092 = e52278;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(1)], null),new cljs.core.Keyword(null,"freeze","freeze",2043466309),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),"null"], null), null))),null,t__10691__auto___53092,null]));
}finally {RCF__done_BANG_();
}
var fexpr__52279_53095 = q_53075();
(fexpr__52279_53095.cljs$core$IFn$_invoke$arity$0 ? fexpr__52279_53095.cljs$core$IFn$_invoke$arity$0() : fexpr__52279_53095.call(null));

var G__52280_53096 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1)])], 0));
(_BANG__53083.cljs$core$IFn$_invoke$arity$1 ? _BANG__53083.cljs$core$IFn$_invoke$arity$1(G__52280_53096) : _BANG__53083.call(null,G__52280_53096));

try{var values__10703__auto___53098 = (new cljs.core.List(null,q_53075(),(new cljs.core.List(null,(1),null,(1),null)),(2),null));
var result__10704__auto___53099 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53098);
if(cljs.core.truth_(result__10704__auto___53099)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53098),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53098),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53098);
}catch (e52281){var t__10691__auto___53100 = e52281;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),(1)),null,t__10691__auto___53100,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___53102 = (new cljs.core.List(null,q_53075(),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1)),null,(1),null)),(2),null));
var result__10704__auto___53103 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53102);
if(cljs.core.truth_(result__10704__auto___53103)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53102),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53102),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53102);
}catch (e52282){var t__10691__auto___53107 = e52282;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))),null,t__10691__auto___53107,null]));
}finally {RCF__done_BANG_();
}
var fexpr__52283_53111 = q_53075();
(fexpr__52283_53111.cljs$core$IFn$_invoke$arity$0 ? fexpr__52283_53111.cljs$core$IFn$_invoke$arity$0() : fexpr__52283_53111.call(null));

var G__52284_53112 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"frame","frame",-1711082588),(-1),new cljs.core.Keyword(null,"position","position",-2011731912),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"frame","frame",-1711082588),(-1)], null)], null));
(_BANG__53083.cljs$core$IFn$_invoke$arity$1 ? _BANG__53083.cljs$core$IFn$_invoke$arity$1(G__52284_53112) : _BANG__53083.call(null,G__52284_53112));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
var q = hyperfiddle.electric.impl.runtime.queue();
var c = (function (){var fexpr__52289 = (function (){var G__52291 = (function (x){
q(x);

return (function (s,_){
q((function (){
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(null) : s.call(null,null));
}));

return (function (){
return cljs.core.List.EMPTY;
});
});
});
var G__52292 = (function (_BANG_){
q(_BANG_);

return (function (){
return cljs.core.List.EMPTY;
});
});
var G__52293 = (function (e){
return q(e);
});
var fexpr__52290 = hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.ir.do$(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hyperfiddle.electric.impl.ir.output(hyperfiddle.electric.impl.ir.pub(hyperfiddle.electric.impl.ir.constant(hyperfiddle.electric.impl.ir.input(cljs.core.PersistentVector.EMPTY)),hyperfiddle.electric.impl.ir.apply.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.ir.literal(cljs.core.PersistentArrayMap.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.ir.sub((1)),hyperfiddle.electric.impl.ir.pub(hyperfiddle.electric.impl.ir.literal((0)),hyperfiddle.electric.impl.ir.apply.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.ir.literal(cljs.core.PersistentArrayMap.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.ir.sub((1)),hyperfiddle.electric.impl.ir.bind((0),(1),hyperfiddle.electric.impl.ir.variable(hyperfiddle.electric.impl.ir.sub((2))))], 0)))], 0))))], null),hyperfiddle.electric.impl.ir.nop));
return (fexpr__52290.cljs$core$IFn$_invoke$arity$3 ? fexpr__52290.cljs$core$IFn$_invoke$arity$3(G__52291,G__52292,G__52293) : fexpr__52290.call(null,G__52291,G__52292,G__52293));
})();
return (fexpr__52289.cljs$core$IFn$_invoke$arity$2 ? fexpr__52289.cljs$core$IFn$_invoke$arity$2(q,q) : fexpr__52289.call(null,q,q));
})();
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["server sends event, frame got created, output is pending"], 0));

try{try{var values__10703__auto___53118 = (new cljs.core.List(null,q(),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),hyperfiddle.electric.impl.runtime.pending])], 0)),null,(1),null)),(2),null));
var result__10704__auto___53119 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53118);
if(cljs.core.truth_(result__10704__auto___53119)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Symbol(null,"pending","pending",1420494800,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53118),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Symbol(null,"pending","pending",1420494800,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53118),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53118);
}catch (e52294){var t__10691__auto___53125 = e52294;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Symbol(null,"pending","pending",1420494800,null)], null))),null,t__10691__auto___53125,null]));
}finally {RCF__done_BANG_();
}
var fexpr__52295_53129 = q();
(fexpr__52295_53129.cljs$core$IFn$_invoke$arity$0 ? fexpr__52295_53129.cljs$core$IFn$_invoke$arity$0() : fexpr__52295_53129.call(null));

var _BANG_ = q();
var G__52296_53130 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(1)]),new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)])], 0));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__52296_53130) : _BANG_.call(null,G__52296_53130));

try{var values__10703__auto___53134 = (new cljs.core.List(null,q(),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1)])], 0)),null,(1),null)),(2),null));
var result__10704__auto___53135 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53134);
if(cljs.core.truth_(result__10704__auto___53135)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53134),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53134),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53134);
}catch (e52297){var t__10691__auto___53137 = e52297;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1)], null))),null,t__10691__auto___53137,null]));
}finally {RCF__done_BANG_();
}
var fexpr__52298_53138 = q();
(fexpr__52298_53138.cljs$core$IFn$_invoke$arity$0 ? fexpr__52298_53138.cljs$core$IFn$_invoke$arity$0() : fexpr__52298_53138.call(null));

var G__52299_53139 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__52299_53139) : _BANG_.call(null,G__52299_53139));

try{var values__10703__auto___53141 = (new cljs.core.List(null,q(),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"frame","frame",-1711082588),(-1),new cljs.core.Keyword(null,"position","position",-2011731912),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"frame","frame",-1711082588),(-1)], null)], null)),null,(1),null)),(2),null));
var result__10704__auto___53142 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53141);
if(cljs.core.truth_(result__10704__auto___53142)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"frame","frame",-1711082588),(-1),new cljs.core.Keyword(null,"position","position",-2011731912),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"frame","frame",-1711082588),(-1)], null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53141),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"frame","frame",-1711082588),(-1),new cljs.core.Keyword(null,"position","position",-2011731912),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"frame","frame",-1711082588),(-1)], null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53141),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53141);
}catch (e52300){var t__10691__auto___53146 = e52300;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"frame","frame",-1711082588),(-1),new cljs.core.Keyword(null,"position","position",-2011731912),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"frame","frame",-1711082588),(-1)], null)], null))),null,t__10691__auto___53146,null]));
}finally {RCF__done_BANG_();
}
var fexpr__52301 = q();
return (fexpr__52301.cljs$core$IFn$_invoke$arity$0 ? fexpr__52301.cljs$core$IFn$_invoke$arity$0() : fexpr__52301.call(null));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52262.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52263","meta52263",-1303239467,null)], null);
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52262.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52262.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime52262");

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52262.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime52262");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime52262.
 */
hyperfiddle.electric.impl.runtime.__GT_t_hyperfiddle$electric$impl$runtime52262 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1342_$___GT_t_hyperfiddle$electric$impl$runtime52262(meta52263){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52262(meta52263));
});

}

return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52262(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1342;},new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","generated__hyperfiddle_electric_impl_runtime_1342","hyperfiddle.electric.impl.runtime/generated__hyperfiddle_electric_impl_runtime_1342",-1261420215,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/runtime.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"hyperfiddle.electric.impl.runtime","hyperfiddle.electric.impl.runtime",-92393903,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),1342,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_runtime_1342","generated__hyperfiddle_electric_impl_runtime_1342",-2115584830,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1342)?hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1342.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1342));
} else {
}
hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1412 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1412(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.runtime !== 'undefined') && (typeof hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52303 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52303 = (function (meta52304){
this.meta52304 = meta52304;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52305,meta52304__$1){
var self__ = this;
var _52305__$1 = this;
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52303(meta52304__$1));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52305){
var self__ = this;
var _52305__$1 = this;
return self__.meta52304;
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52303.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52303.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__52307 = (arguments.length - (1));
switch (G__52307) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52303.prototype.apply = (function (self__,args52306){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args52306)));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52303.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_52302){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(7,done_52302);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["d-glitch"], 0));

try{var q = hyperfiddle.electric.impl.runtime.queue();
var _BANG_x = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1));
var c = (function (){var fexpr__52312 = (function (){var G__52314 = (function (x){
q(x);

return (function (s,_){
q((function (){
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(null) : s.call(null,null));
}));

return (function (){
return cljs.core.List.EMPTY;
});
});
});
var G__52315 = (function (_BANG_){
q(_BANG_);

return (function (){
return cljs.core.List.EMPTY;
});
});
var G__52316 = (function (e){
return q(e);
});
var fexpr__52313 = hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.ir.apply.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.ir.literal(q),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.ir.input(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hyperfiddle.electric.impl.ir.output(hyperfiddle.electric.impl.ir.variable(hyperfiddle.electric.impl.ir.literal(missionary.core.watch(_BANG_x))))], null))], 0)));
return (fexpr__52313.cljs$core$IFn$_invoke$arity$3 ? fexpr__52313.cljs$core$IFn$_invoke$arity$3(G__52314,G__52315,G__52316) : fexpr__52313.call(null,G__52314,G__52315,G__52316));
})();
return (fexpr__52312.cljs$core$IFn$_invoke$arity$2 ? fexpr__52312.cljs$core$IFn$_invoke$arity$2(q,q) : fexpr__52312.call(null,q,q));
})();
try{var values__10703__auto___53152 = (new cljs.core.List(null,q(),(new cljs.core.List(null,(new hyperfiddle.electric.Pending()),null,(1),null)),(2),null));
var result__10704__auto___53153 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53152);
if(cljs.core.truth_(result__10704__auto___53153)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53152),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53152),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53152);
}catch (e52317){var t__10691__auto___53156 = e52317;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))),null,t__10691__auto___53156,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___53157 = (new cljs.core.List(null,q(),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1)])),null,(1),null)),(2),null));
var result__10704__auto___53158 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53157);
if(cljs.core.truth_(result__10704__auto___53158)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53157),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53157),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53157);
}catch (e52318){var t__10691__auto___53160 = e52318;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1)], null))),null,t__10691__auto___53160,null]));
}finally {RCF__done_BANG_();
}
var fexpr__52319_53162 = q();
(fexpr__52319_53162.cljs$core$IFn$_invoke$arity$0 ? fexpr__52319_53162.cljs$core$IFn$_invoke$arity$0() : fexpr__52319_53162.call(null));

var _BANG_ = q();
var G__52320_53163 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__52320_53163) : _BANG_.call(null,G__52320_53163));

var G__52321_53164 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"a","a",-2123407586)]));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__52321_53164) : _BANG_.call(null,G__52321_53164));

try{var values__10703__auto___53165 = (new cljs.core.List(null,q(),(new cljs.core.List(null,new cljs.core.Keyword(null,"a","a",-2123407586),null,(1),null)),(2),null));
var result__10704__auto___53166 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53165);
if(cljs.core.truth_(result__10704__auto___53166)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.Keyword(null,"a","a",-2123407586)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53165),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.Keyword(null,"a","a",-2123407586)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53165),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53165);
}catch (e52322){var t__10691__auto___53168 = e52322;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.Keyword(null,"a","a",-2123407586)),null,t__10691__auto___53168,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___53169 = (new cljs.core.List(null,q(),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1)),null,(1),null)),(2),null));
var result__10704__auto___53170 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53169);
if(cljs.core.truth_(result__10704__auto___53170)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53169),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53169),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53169);
}catch (e52323){var t__10691__auto___53172 = e52323;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))),null,t__10691__auto___53172,null]));
}finally {RCF__done_BANG_();
}
var fexpr__52324_53173 = q();
(fexpr__52324_53173.cljs$core$IFn$_invoke$arity$0 ? fexpr__52324_53173.cljs$core$IFn$_invoke$arity$0() : fexpr__52324_53173.call(null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_x,cljs.core.inc);

try{var values__10703__auto___53174 = (new cljs.core.List(null,q(),(new cljs.core.List(null,(new hyperfiddle.electric.Pending()),null,(1),null)),(2),null));
var result__10704__auto___53175 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53174);
if(cljs.core.truth_(result__10704__auto___53175)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53174),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53174),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53174);
}catch (e52325){var t__10691__auto___53176 = e52325;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))),null,t__10691__auto___53176,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___53178 = (new cljs.core.List(null,q(),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(2)])),null,(1),null)),(2),null));
var result__10704__auto___53179 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53178);
if(cljs.core.truth_(result__10704__auto___53179)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(2)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53178),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(2)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53178),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53178);
}catch (e52326){var t__10691__auto___53183 = e52326;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(2)], null))),null,t__10691__auto___53183,null]));
}finally {RCF__done_BANG_();
}
var fexpr__52327_53184 = q();
(fexpr__52327_53184.cljs$core$IFn$_invoke$arity$0 ? fexpr__52327_53184.cljs$core$IFn$_invoke$arity$0() : fexpr__52327_53184.call(null));

var G__52328_53185 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__52328_53185) : _BANG_.call(null,G__52328_53185));

try{var values__10703__auto__ = (new cljs.core.List(null,q(),(new cljs.core.List(null,new cljs.core.Keyword(null,"a","a",-2123407586),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.Keyword(null,"a","a",-2123407586)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.Keyword(null,"a","a",-2123407586)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e52329){var t__10691__auto__ = e52329;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.Keyword(null,"a","a",-2123407586)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52303.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52304","meta52304",-36629416,null)], null);
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52303.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52303.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime52303");

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52303.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime52303");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime52303.
 */
hyperfiddle.electric.impl.runtime.__GT_t_hyperfiddle$electric$impl$runtime52303 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1412_$___GT_t_hyperfiddle$electric$impl$runtime52303(meta52304){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52303(meta52304));
});

}

return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52303(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1412;},new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","generated__hyperfiddle_electric_impl_runtime_1412","hyperfiddle.electric.impl.runtime/generated__hyperfiddle_electric_impl_runtime_1412",197444912,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/runtime.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"hyperfiddle.electric.impl.runtime","hyperfiddle.electric.impl.runtime",-92393903,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),1412,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_runtime_1412","generated__hyperfiddle_electric_impl_runtime_1412",-560555585,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1412)?hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1412.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1412));
} else {
}
hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1440 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1440(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.runtime !== 'undefined') && (typeof hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52331 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52331 = (function (meta52332){
this.meta52332 = meta52332;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52333,meta52332__$1){
var self__ = this;
var _52333__$1 = this;
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52331(meta52332__$1));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52333){
var self__ = this;
var _52333__$1 = this;
return self__.meta52332;
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52331.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52331.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__52335 = (arguments.length - (1));
switch (G__52335) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52331.prototype.apply = (function (self__,args52334){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args52334)));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52331.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_52330){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(5,done_52330);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["infinite loop bug"], 0));

try{var q = hyperfiddle.electric.impl.runtime.queue();
var _BANG_x = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1));
var c = (function (){var fexpr__52340 = (function (){var G__52342 = (function (x){
q(x);

return (function (s,_){
q((function (){
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(null) : s.call(null,null));
}));

return (function (){
return cljs.core.List.EMPTY;
});
});
});
var G__52343 = (function (_BANG_){
q(_BANG_);

return (function (){
return cljs.core.List.EMPTY;
});
});
var G__52344 = (function (e){
return q(e);
});
var fexpr__52341 = hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.ir.apply.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.ir.literal(q),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.ir.pub(hyperfiddle.electric.impl.ir.variable(hyperfiddle.electric.impl.ir.literal(missionary.core.watch(_BANG_x))),hyperfiddle.electric.impl.ir.input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hyperfiddle.electric.impl.ir.output(hyperfiddle.electric.impl.ir.sub((1))),hyperfiddle.electric.impl.ir.output(hyperfiddle.electric.impl.ir.sub((1)))], null)))], 0)));
return (fexpr__52341.cljs$core$IFn$_invoke$arity$3 ? fexpr__52341.cljs$core$IFn$_invoke$arity$3(G__52342,G__52343,G__52344) : fexpr__52341.call(null,G__52342,G__52343,G__52344));
})();
return (fexpr__52340.cljs$core$IFn$_invoke$arity$2 ? fexpr__52340.cljs$core$IFn$_invoke$arity$2(q,q) : fexpr__52340.call(null,q,q));
})();
try{var values__10703__auto___53199 = (new cljs.core.List(null,q(),(new cljs.core.List(null,(new hyperfiddle.electric.Pending()),null,(1),null)),(2),null));
var result__10704__auto___53200 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53199);
if(cljs.core.truth_(result__10704__auto___53200)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53199),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53199),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53199);
}catch (e52345){var t__10691__auto___53203 = e52345;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null))),null,t__10691__auto___53203,null]));
}finally {RCF__done_BANG_();
}
try{var values__10703__auto___53205 = (new cljs.core.List(null,q(),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(1)])),null,(1),null)),(2),null));
var result__10704__auto___53206 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53205);
if(cljs.core.truth_(result__10704__auto___53206)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(1)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53205),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(1)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53205),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53205);
}catch (e52346){var t__10691__auto___53207 = e52346;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(1)], null))),null,t__10691__auto___53207,null]));
}finally {RCF__done_BANG_();
}
var fexpr__52347_53208 = q();
(fexpr__52347_53208.cljs$core$IFn$_invoke$arity$0 ? fexpr__52347_53208.cljs$core$IFn$_invoke$arity$0() : fexpr__52347_53208.call(null));

var _BANG_ = q();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_x,cljs.core.inc);

try{var values__10703__auto___53209 = (new cljs.core.List(null,q(),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(2)])),null,(1),null)),(2),null));
var result__10704__auto___53210 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53209);
if(cljs.core.truth_(result__10704__auto___53210)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(2)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53209),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(2)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53209),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53209);
}catch (e52348){var t__10691__auto___53212 = e52348;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(2)], null))),null,t__10691__auto___53212,null]));
}finally {RCF__done_BANG_();
}
var fexpr__52349_53214 = q();
(fexpr__52349_53214.cljs$core$IFn$_invoke$arity$0 ? fexpr__52349_53214.cljs$core$IFn$_invoke$arity$0() : fexpr__52349_53214.call(null));

var G__52350_53215 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"foo","foo",1268894036)])], 0));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__52350_53215) : _BANG_.call(null,G__52350_53215));

try{var values__10703__auto___53216 = (new cljs.core.List(null,q(),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1)),null,(1),null)),(2),null));
var result__10704__auto___53217 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53216);
if(cljs.core.truth_(result__10704__auto___53217)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53216),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53216),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53216);
}catch (e52351){var t__10691__auto___53219 = e52351;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"acks","acks",707064729),(1))),null,t__10691__auto___53219,null]));
}finally {RCF__done_BANG_();
}
var fexpr__52352_53220 = q();
(fexpr__52352_53220.cljs$core$IFn$_invoke$arity$0 ? fexpr__52352_53220.cljs$core$IFn$_invoke$arity$0() : fexpr__52352_53220.call(null));

var G__52353_53222 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"acks","acks",707064729),(1));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__52353_53222) : _BANG_.call(null,G__52353_53222));

try{var values__10703__auto__ = (new cljs.core.List(null,q(),(new cljs.core.List(null,new cljs.core.Keyword(null,"foo","foo",1268894036),null,(1),null)),(2),null));
var result__10704__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto__);
if(cljs.core.truth_(result__10704__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.Keyword(null,"foo","foo",1268894036)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.Keyword(null,"foo","foo",1268894036)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10703__auto__);
}catch (e52354){var t__10691__auto__ = e52354;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.Keyword(null,"foo","foo",1268894036)),null,t__10691__auto__,null]));
}finally {RCF__done_BANG_();
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52332","meta52332",-1355824174,null)], null);
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52331.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52331.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime52331");

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52331.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime52331");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime52331.
 */
hyperfiddle.electric.impl.runtime.__GT_t_hyperfiddle$electric$impl$runtime52331 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1440_$___GT_t_hyperfiddle$electric$impl$runtime52331(meta52332){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52331(meta52332));
});

}

return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52331(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1440;},new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","generated__hyperfiddle_electric_impl_runtime_1440","hyperfiddle.electric.impl.runtime/generated__hyperfiddle_electric_impl_runtime_1440",1129512823,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/runtime.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"hyperfiddle.electric.impl.runtime","hyperfiddle.electric.impl.runtime",-92393903,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),1440,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_runtime_1440","generated__hyperfiddle_electric_impl_runtime_1440",-1095969798,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1440)?hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1440.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1440));
} else {
}
hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1469 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1469(){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.runtime !== 'undefined') && (typeof hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52356 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52356 = (function (meta52357){
this.meta52357 = meta52357;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52358,meta52357__$1){
var self__ = this;
var _52358__$1 = this;
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52356(meta52357__$1));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52358){
var self__ = this;
var _52358__$1 = this;
return self__.meta52357;
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52356.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52356.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__52360 = (arguments.length - (1));
switch (G__52360) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52356.prototype.apply = (function (self__,args52359){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args52359)));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52356.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_52355){
var self__ = this;
var ___14619__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(3,done_52355);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["FailureInfo equality"], 0));

try{var q = hyperfiddle.electric.impl.runtime.queue();
var c = (function (){var fexpr__52365 = (function (){var G__52367 = (function (x){
q(x);

return (function (s,_){
q((function (){
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(null) : s.call(null,null));
}));

return (function (){
return cljs.core.List.EMPTY;
});
});
});
var G__52368 = (function (_BANG_){
q(_BANG_);

return (function (){
return cljs.core.List.EMPTY;
});
});
var G__52369 = (function (e){
return q(e);
});
var fexpr__52366 = hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.ir.do$(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hyperfiddle.electric.impl.ir.output(hyperfiddle.electric.impl.ir.input(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hyperfiddle.electric.impl.ir.source], null)))], null),hyperfiddle.electric.impl.ir.nop));
return (fexpr__52366.cljs$core$IFn$_invoke$arity$3 ? fexpr__52366.cljs$core$IFn$_invoke$arity$3(G__52367,G__52368,G__52369) : fexpr__52366.call(null,G__52367,G__52368,G__52369));
})();
return (fexpr__52365.cljs$core$IFn$_invoke$arity$2 ? fexpr__52365.cljs$core$IFn$_invoke$arity$2(q,q) : fexpr__52365.call(null,q,q));
})();
try{var values__10703__auto___53231 = (new cljs.core.List(null,q(),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(new hyperfiddle.electric.Failure((new hyperfiddle.electric.Pending())))])),null,(1),null)),(2),null));
var result__10704__auto___53232 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53231);
if(cljs.core.truth_(result__10704__auto___53232)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.list(new cljs.core.Symbol(null,"Failure.","Failure.",-1636320856,null),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null)))], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53231),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.list(new cljs.core.Symbol(null,"Failure.","Failure.",-1636320856,null),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null)))], null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53231),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53231);
}catch (e52370){var t__10691__auto___53235 = e52370;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"empty-event","empty-event",1224490659,null),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.list(new cljs.core.Symbol(null,"Failure.","Failure.",-1636320856,null),cljs.core.list(new cljs.core.Symbol(null,"Pending.","Pending.",-1051702240,null)))], null))),null,t__10691__auto___53235,null]));
}finally {RCF__done_BANG_();
}
var fexpr__52371_53236 = q();
(fexpr__52371_53236.cljs$core$IFn$_invoke$arity$0 ? fexpr__52371_53236.cljs$core$IFn$_invoke$arity$0() : fexpr__52371_53236.call(null));

var _BANG_ = q();
var G__52372_53238 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4("0",cljs.core.PersistentArrayMap.EMPTY,"f0f38709-0191-45b7-85e9-1266abb467df",null)))]));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__52372_53238) : _BANG_.call(null,G__52372_53238));

try{var lhs__10713__auto___53239 = cljs.core.identity(q());
var rhs__10714__auto___53240 = cljs.core.identity(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)]),new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.PersistentHashSet.EMPTY], null));
var vec__52374_53241 = hyperfiddle.rcf.unify.unifier_STAR_(lhs__10713__auto___53239,rhs__10714__auto___53240);
var result__10715__auto___53242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52374_53241,(0),null);
var env__10716__auto___53243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52374_53241,(1),null);
if((!(hyperfiddle.rcf.unify.failed_QMARK_(env__10716__auto___53243)))){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"=","=",1152933628),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"_","_",-1201019570,null))], null),new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.PersistentHashSet.EMPTY], null)),new cljs.core.Keyword(null,"actual","actual",107306363),result__10715__auto___53242,new cljs.core.Keyword(null,"message","message",-406056002),null], null));

} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"=","=",1152933628),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"_","_",-1201019570,null))], null),new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.PersistentHashSet.EMPTY], null)),new cljs.core.Keyword(null,"actual","actual",107306363),hyperfiddle.rcf.unify.explain(env__10716__auto___53243),new cljs.core.Keyword(null,"message","message",-406056002),null], null));

}
}catch (e52373){var t__10691__auto___53246 = e52373;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Keyword("hyperfiddle.rcf","=","hyperfiddle.rcf/=",-249719063),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"_","_",-1201019570,null))], null),new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.PersistentHashSet.EMPTY], null)),null,t__10691__auto___53246,null]));
}finally {RCF__done_BANG_();
}
var fexpr__52377_53248 = q();
(fexpr__52377_53248.cljs$core$IFn$_invoke$arity$0 ? fexpr__52377_53248.cljs$core$IFn$_invoke$arity$0() : fexpr__52377_53248.call(null));

var G__52378_53249 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_event,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4("1",cljs.core.PersistentArrayMap.EMPTY,"064710fe-35bb-4dc6-bfdf-667702434acd",null)))]));
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__52378_53249) : _BANG_.call(null,G__52378_53249));

try{var values__10703__auto___53250 = (new cljs.core.List(null,q(),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.PersistentHashSet.EMPTY], null),null,(1),null)),(2),null));
var result__10704__auto___53251 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10703__auto___53250);
if(cljs.core.truth_(result__10704__auto___53251)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.PersistentHashSet.EMPTY], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10703__auto___53250),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.PersistentHashSet.EMPTY], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10703__auto___53250),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10703__auto___53250);
}catch (e52379){var t__10691__auto___53254 = e52379;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"q","q",-1965434072,null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"acks","acks",707064729),(1),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.PersistentHashSet.EMPTY], null)),null,t__10691__auto___53254,null]));
}finally {RCF__done_BANG_();
}
var fexpr__52380 = q();
return (fexpr__52380.cljs$core$IFn$_invoke$arity$0 ? fexpr__52380.cljs$core$IFn$_invoke$arity$0() : fexpr__52380.call(null));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52357","meta52357",-240313451,null)], null);
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52356.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52356.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime52356");

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52356.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime52356");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime52356.
 */
hyperfiddle.electric.impl.runtime.__GT_t_hyperfiddle$electric$impl$runtime52356 = (function hyperfiddle$electric$impl$runtime$generated__hyperfiddle_electric_impl_runtime_1469_$___GT_t_hyperfiddle$electric$impl$runtime52356(meta52357){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52356(meta52357));
});

}

return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime52356(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1469;},new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","generated__hyperfiddle_electric_impl_runtime_1469","hyperfiddle.electric.impl.runtime/generated__hyperfiddle_electric_impl_runtime_1469",1917403477,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/runtime.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"hyperfiddle.electric.impl.runtime","hyperfiddle.electric.impl.runtime",-92393903,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),1469,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_runtime_1469","generated__hyperfiddle_electric_impl_runtime_1469",662648270,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1469)?hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1469.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.runtime.generated__hyperfiddle_electric_impl_runtime_1469));
} else {
}

//# sourceMappingURL=hyperfiddle.electric.impl.runtime.js.map
