goog.provide('contrib.missionary_contrib');
contrib.missionary_contrib.mix = (function contrib$missionary_contrib$mix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50904 = arguments.length;
var i__5770__auto___50905 = (0);
while(true){
if((i__5770__auto___50905 < len__5769__auto___50904)){
args__5775__auto__.push((arguments[i__5770__auto___50905]));

var G__50906 = (i__5770__auto___50905 + (1));
i__5770__auto___50905 = G__50906;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return contrib.missionary_contrib.mix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(contrib.missionary_contrib.mix.cljs$core$IFn$_invoke$arity$variadic = (function (flows){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr50659_block_0 = (function contrib$missionary_contrib$cr50659_block_0(cr50659_state){
try{var cr50659_place_0 = (1);
var cr50659_place_1 = cljs.core.count;
var cr50659_place_2 = flows;
var cr50659_place_3 = (function (){var G__50686 = cr50659_place_2;
var fexpr__50685 = cr50659_place_1;
return (fexpr__50685.cljs$core$IFn$_invoke$arity$1 ? fexpr__50685.cljs$core$IFn$_invoke$arity$1(G__50686) : fexpr__50685.call(null,G__50686));
})();
var cr50659_place_4 = missionary.core.seed;
var cr50659_place_5 = flows;
var cr50659_place_6 = (function (){var G__50690 = cr50659_place_5;
var fexpr__50689 = cr50659_place_4;
return (fexpr__50689.cljs$core$IFn$_invoke$arity$1 ? fexpr__50689.cljs$core$IFn$_invoke$arity$1(G__50690) : fexpr__50689.call(null,G__50690));
})();
(cr50659_state[(0)] = cr50659_block_1);

(cr50659_state[(1)] = cr50659_place_0);

return missionary.core.fork(cr50659_place_3,cr50659_place_6);
}catch (e50683){var cr50659_exception = e50683;
(cr50659_state[(0)] = null);

throw cr50659_exception;
}});
var cr50659_block_1 = (function contrib$missionary_contrib$cr50659_block_1(cr50659_state){
try{var cr50659_place_0 = (cr50659_state[(1)]);
var cr50659_place_7 = missionary.core.unpark();
(cr50659_state[(0)] = cr50659_block_2);

(cr50659_state[(1)] = null);

return missionary.core.fork(cr50659_place_0,cr50659_place_7);
}catch (e50692){var cr50659_exception = e50692;
(cr50659_state[(0)] = null);

(cr50659_state[(1)] = null);

throw cr50659_exception;
}});
var cr50659_block_2 = (function contrib$missionary_contrib$cr50659_block_2(cr50659_state){
try{var cr50659_place_8 = missionary.core.unpark();
(cr50659_state[(0)] = null);

return cr50659_place_8;
}catch (e50696){var cr50659_exception = e50696;
(cr50659_state[(0)] = null);

throw cr50659_exception;
}});
return cloroutine.impl.coroutine((function (){var G__50703 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__50703[(0)] = cr50659_block_0);

return G__50703;
})());
})(),missionary.core.ap_run);
}));

(contrib.missionary_contrib.mix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(contrib.missionary_contrib.mix.cljs$lang$applyTo = (function (seq50655){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50655));
}));

/**
 * blocking iterable pattern
 */
contrib.missionary_contrib.iterator_consumer = (function contrib$missionary_contrib$iterator_consumer(it){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr50706_block_12 = (function contrib$missionary_contrib$iterator_consumer_$_cr50706_block_12(cr50706_state){
try{var cr50706_place_5 = (cr50706_state[(1)]);
(cr50706_state[(0)] = null);

(cr50706_state[(1)] = null);

return cr50706_place_5;
}catch (e50755){var cr50706_exception = e50755;
(cr50706_state[(0)] = null);

(cr50706_state[(1)] = null);

throw cr50706_exception;
}});
var cr50706_block_3 = (function contrib$missionary_contrib$iterator_consumer_$_cr50706_block_3(cr50706_state){
try{var cr50706_place_6 = (1);
var cr50706_place_7 = missionary.core.none;
(cr50706_state[(0)] = cr50706_block_4);

return missionary.core.fork(cr50706_place_6,cr50706_place_7);
}catch (e50756){var cr50706_exception = e50756;
(cr50706_state[(0)] = null);

(cr50706_state[(1)] = null);

throw cr50706_exception;
}});
var cr50706_block_7 = (function contrib$missionary_contrib$iterator_consumer_$_cr50706_block_7(cr50706_state){
try{var cr50706_place_18 = missionary.core.via_call;
var cr50706_place_19 = missionary.core.blk;
var cr50706_place_20 = (function (){
return it.next();
});
var cr50706_place_21 = (function (){var G__50759 = cr50706_place_19;
var G__50760 = cr50706_place_20;
var fexpr__50758 = cr50706_place_18;
return (fexpr__50758.cljs$core$IFn$_invoke$arity$2 ? fexpr__50758.cljs$core$IFn$_invoke$arity$2(G__50759,G__50760) : fexpr__50758.call(null,G__50759,G__50760));
})();
(cr50706_state[(0)] = cr50706_block_8);

return missionary.core.park(cr50706_place_21);
}catch (e50757){var cr50706_exception = e50757;
(cr50706_state[(0)] = null);

(cr50706_state[(2)] = null);

(cr50706_state[(1)] = null);

throw cr50706_exception;
}});
var cr50706_block_8 = (function contrib$missionary_contrib$iterator_consumer_$_cr50706_block_8(cr50706_state){
try{var cr50706_place_22 = missionary.core.unpark();
(cr50706_state[(0)] = cr50706_block_11);

(cr50706_state[(2)] = cr50706_place_22);

return cr50706_state;
}catch (e50761){var cr50706_exception = e50761;
(cr50706_state[(0)] = null);

(cr50706_state[(2)] = null);

(cr50706_state[(1)] = null);

throw cr50706_exception;
}});
var cr50706_block_1 = (function contrib$missionary_contrib$iterator_consumer_$_cr50706_block_1(cr50706_state){
try{var cr50706_place_0 = missionary.core.via_call;
var cr50706_place_1 = missionary.core.blk;
var cr50706_place_2 = (function (){
return it.hasNext();
});
var cr50706_place_3 = (function (){var G__50764 = cr50706_place_1;
var G__50765 = cr50706_place_2;
var fexpr__50763 = cr50706_place_0;
return (fexpr__50763.cljs$core$IFn$_invoke$arity$2 ? fexpr__50763.cljs$core$IFn$_invoke$arity$2(G__50764,G__50765) : fexpr__50763.call(null,G__50764,G__50765));
})();
(cr50706_state[(0)] = cr50706_block_2);

return missionary.core.park(cr50706_place_3);
}catch (e50762){var cr50706_exception = e50762;
(cr50706_state[(0)] = null);

throw cr50706_exception;
}});
var cr50706_block_11 = (function contrib$missionary_contrib$iterator_consumer_$_cr50706_block_11(cr50706_state){
try{var cr50706_place_17 = (cr50706_state[(2)]);
(cr50706_state[(0)] = cr50706_block_12);

(cr50706_state[(2)] = null);

(cr50706_state[(1)] = cr50706_place_17);

return cr50706_state;
}catch (e50766){var cr50706_exception = e50766;
(cr50706_state[(0)] = null);

(cr50706_state[(2)] = null);

(cr50706_state[(1)] = null);

throw cr50706_exception;
}});
var cr50706_block_4 = (function contrib$missionary_contrib$iterator_consumer_$_cr50706_block_4(cr50706_state){
try{var cr50706_place_8 = missionary.core.unpark();
(cr50706_state[(0)] = cr50706_block_12);

(cr50706_state[(1)] = cr50706_place_8);

return cr50706_state;
}catch (e50767){var cr50706_exception = e50767;
(cr50706_state[(0)] = null);

(cr50706_state[(1)] = null);

throw cr50706_exception;
}});
var cr50706_block_5 = (function contrib$missionary_contrib$iterator_consumer_$_cr50706_block_5(cr50706_state){
try{var cr50706_place_9 = (1);
var cr50706_place_10 = missionary.core.seed;
var cr50706_place_11 = cljs.core.range;
var cr50706_place_12 = (2);
var cr50706_place_13 = (function (){var G__50773 = cr50706_place_12;
var fexpr__50772 = cr50706_place_11;
return (fexpr__50772.cljs$core$IFn$_invoke$arity$1 ? fexpr__50772.cljs$core$IFn$_invoke$arity$1(G__50773) : fexpr__50772.call(null,G__50773));
})();
var cr50706_place_14 = (function (){var G__50775 = cr50706_place_13;
var fexpr__50774 = cr50706_place_10;
return (fexpr__50774.cljs$core$IFn$_invoke$arity$1 ? fexpr__50774.cljs$core$IFn$_invoke$arity$1(G__50775) : fexpr__50774.call(null,G__50775));
})();
(cr50706_state[(0)] = cr50706_block_6);

return missionary.core.fork(cr50706_place_9,cr50706_place_14);
}catch (e50768){var cr50706_exception = e50768;
(cr50706_state[(0)] = null);

(cr50706_state[(1)] = null);

throw cr50706_exception;
}});
var cr50706_block_9 = (function contrib$missionary_contrib$iterator_consumer_$_cr50706_block_9(cr50706_state){
try{(cr50706_state[(0)] = cr50706_block_1);

return cr50706_state;
}catch (e50777){var cr50706_exception = e50777;
(cr50706_state[(0)] = null);

throw cr50706_exception;
}});
var cr50706_block_2 = (function contrib$missionary_contrib$iterator_consumer_$_cr50706_block_2(cr50706_state){
try{var cr50706_place_4 = missionary.core.unpark();
var cr50706_place_5 = null;
if(cljs.core.truth_(cr50706_place_4)){
(cr50706_state[(0)] = cr50706_block_5);

(cr50706_state[(1)] = cr50706_place_5);

return cr50706_state;
} else {
(cr50706_state[(0)] = cr50706_block_3);

(cr50706_state[(1)] = cr50706_place_5);

return cr50706_state;
}
}catch (e50778){var cr50706_exception = e50778;
(cr50706_state[(0)] = null);

throw cr50706_exception;
}});
var cr50706_block_6 = (function contrib$missionary_contrib$iterator_consumer_$_cr50706_block_6(cr50706_state){
try{var cr50706_place_15 = missionary.core.unpark();
var cr50706_place_16 = cr50706_place_15;
var cr50706_place_17 = null;
var G__50781 = cr50706_place_16;
switch (G__50781) {
case (0):
(cr50706_state[(0)] = cr50706_block_7);

(cr50706_state[(2)] = cr50706_place_17);

return cr50706_state;

break;
case (1):
(cr50706_state[(0)] = cr50706_block_9);

(cr50706_state[(1)] = null);

return cr50706_state;

break;
default:
(cr50706_state[(0)] = cr50706_block_10);

(cr50706_state[(1)] = null);

(cr50706_state[(1)] = cr50706_place_15);

return cr50706_state;

}
}catch (e50780){var cr50706_exception = e50780;
(cr50706_state[(0)] = null);

(cr50706_state[(1)] = null);

throw cr50706_exception;
}});
var cr50706_block_10 = (function contrib$missionary_contrib$iterator_consumer_$_cr50706_block_10(cr50706_state){
try{var cr50706_place_15 = (cr50706_state[(1)]);
var cr50706_place_23 = "No matching clause: ";
var cr50706_place_24 = cr50706_place_15;
var cr50706_place_25 = [cr50706_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr50706_place_24)].join('');
var cr50706_place_26 = (new Error(cr50706_place_25));
var cr50706_place_27 = (function(){throw cr50706_place_26})();
(cr50706_state[(0)] = null);

(cr50706_state[(1)] = null);

return null;
}catch (e50782){var cr50706_exception = e50782;
(cr50706_state[(0)] = null);

(cr50706_state[(1)] = null);

throw cr50706_exception;
}});
var cr50706_block_0 = (function contrib$missionary_contrib$iterator_consumer_$_cr50706_block_0(cr50706_state){
try{(cr50706_state[(0)] = cr50706_block_1);

return cr50706_state;
}catch (e50784){var cr50706_exception = e50784;
(cr50706_state[(0)] = null);

throw cr50706_exception;
}});
return cloroutine.impl.coroutine((function (){var G__50785 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__50785[(0)] = cr50706_block_0);

return G__50785;
})());
})(),missionary.core.ap_run);
});
contrib.missionary_contrib.seq_consumer = (function contrib$missionary_contrib$seq_consumer(xs){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr50787_block_12 = (function contrib$missionary_contrib$seq_consumer_$_cr50787_block_12(cr50787_state){
try{var cr50787_place_6 = (cr50787_state[(2)]);
(cr50787_state[(0)] = null);

(cr50787_state[(2)] = null);

return cr50787_place_6;
}catch (e50818){var cr50787_exception = e50818;
(cr50787_state[(0)] = null);

(cr50787_state[(2)] = null);

throw cr50787_exception;
}});
var cr50787_block_1 = (function contrib$missionary_contrib$seq_consumer_$_cr50787_block_1(cr50787_state){
try{var cr50787_place_0 = (cr50787_state[(1)]);
var cr50787_place_1 = missionary.core.via_call;
var cr50787_place_2 = missionary.core.blk;
var cr50787_place_3 = (function (){
return cljs.core.seq(cr50787_place_0);
});
var cr50787_place_4 = (function (){var G__50821 = cr50787_place_2;
var G__50822 = cr50787_place_3;
var fexpr__50820 = cr50787_place_1;
return (fexpr__50820.cljs$core$IFn$_invoke$arity$2 ? fexpr__50820.cljs$core$IFn$_invoke$arity$2(G__50821,G__50822) : fexpr__50820.call(null,G__50821,G__50822));
})();
(cr50787_state[(0)] = cr50787_block_2);

return missionary.core.park(cr50787_place_4);
}catch (e50819){var cr50787_exception = e50819;
(cr50787_state[(0)] = null);

(cr50787_state[(1)] = null);

throw cr50787_exception;
}});
var cr50787_block_5 = (function contrib$missionary_contrib$seq_consumer_$_cr50787_block_5(cr50787_state){
try{var cr50787_place_10 = (1);
var cr50787_place_11 = missionary.core.seed;
var cr50787_place_12 = cljs.core.range;
var cr50787_place_13 = (2);
var cr50787_place_14 = (function (){var G__50825 = cr50787_place_13;
var fexpr__50824 = cr50787_place_12;
return (fexpr__50824.cljs$core$IFn$_invoke$arity$1 ? fexpr__50824.cljs$core$IFn$_invoke$arity$1(G__50825) : fexpr__50824.call(null,G__50825));
})();
var cr50787_place_15 = (function (){var G__50827 = cr50787_place_14;
var fexpr__50826 = cr50787_place_11;
return (fexpr__50826.cljs$core$IFn$_invoke$arity$1 ? fexpr__50826.cljs$core$IFn$_invoke$arity$1(G__50827) : fexpr__50826.call(null,G__50827));
})();
(cr50787_state[(0)] = cr50787_block_6);

return missionary.core.fork(cr50787_place_10,cr50787_place_15);
}catch (e50823){var cr50787_exception = e50823;
(cr50787_state[(0)] = null);

(cr50787_state[(1)] = null);

(cr50787_state[(2)] = null);

throw cr50787_exception;
}});
var cr50787_block_4 = (function contrib$missionary_contrib$seq_consumer_$_cr50787_block_4(cr50787_state){
try{var cr50787_place_9 = missionary.core.unpark();
(cr50787_state[(0)] = cr50787_block_12);

(cr50787_state[(2)] = cr50787_place_9);

return cr50787_state;
}catch (e50828){var cr50787_exception = e50828;
(cr50787_state[(0)] = null);

(cr50787_state[(2)] = null);

throw cr50787_exception;
}});
var cr50787_block_0 = (function contrib$missionary_contrib$seq_consumer_$_cr50787_block_0(cr50787_state){
try{var cr50787_place_0 = xs;
(cr50787_state[(0)] = cr50787_block_1);

(cr50787_state[(1)] = cr50787_place_0);

return cr50787_state;
}catch (e50829){var cr50787_exception = e50829;
(cr50787_state[(0)] = null);

throw cr50787_exception;
}});
var cr50787_block_2 = (function contrib$missionary_contrib$seq_consumer_$_cr50787_block_2(cr50787_state){
try{var cr50787_place_5 = missionary.core.unpark();
var cr50787_place_6 = null;
if(cljs.core.truth_(cr50787_place_5)){
(cr50787_state[(0)] = cr50787_block_5);

(cr50787_state[(2)] = cr50787_place_6);

return cr50787_state;
} else {
(cr50787_state[(0)] = cr50787_block_3);

(cr50787_state[(1)] = null);

(cr50787_state[(2)] = cr50787_place_6);

return cr50787_state;
}
}catch (e50830){var cr50787_exception = e50830;
(cr50787_state[(0)] = null);

(cr50787_state[(1)] = null);

throw cr50787_exception;
}});
var cr50787_block_7 = (function contrib$missionary_contrib$seq_consumer_$_cr50787_block_7(cr50787_state){
try{var cr50787_place_0 = (cr50787_state[(1)]);
var cr50787_place_19 = missionary.core.via_call;
var cr50787_place_20 = missionary.core.blk;
var cr50787_place_21 = (function (){
return cljs.core.first(cr50787_place_0);
});
var cr50787_place_22 = (function (){var G__50833 = cr50787_place_20;
var G__50834 = cr50787_place_21;
var fexpr__50832 = cr50787_place_19;
return (fexpr__50832.cljs$core$IFn$_invoke$arity$2 ? fexpr__50832.cljs$core$IFn$_invoke$arity$2(G__50833,G__50834) : fexpr__50832.call(null,G__50833,G__50834));
})();
(cr50787_state[(0)] = cr50787_block_8);

(cr50787_state[(1)] = null);

return missionary.core.park(cr50787_place_22);
}catch (e50831){var cr50787_exception = e50831;
(cr50787_state[(0)] = null);

(cr50787_state[(3)] = null);

(cr50787_state[(1)] = null);

(cr50787_state[(2)] = null);

throw cr50787_exception;
}});
var cr50787_block_8 = (function contrib$missionary_contrib$seq_consumer_$_cr50787_block_8(cr50787_state){
try{var cr50787_place_23 = missionary.core.unpark();
(cr50787_state[(0)] = cr50787_block_11);

(cr50787_state[(3)] = cr50787_place_23);

return cr50787_state;
}catch (e50838){var cr50787_exception = e50838;
(cr50787_state[(0)] = null);

(cr50787_state[(3)] = null);

(cr50787_state[(2)] = null);

throw cr50787_exception;
}});
var cr50787_block_3 = (function contrib$missionary_contrib$seq_consumer_$_cr50787_block_3(cr50787_state){
try{var cr50787_place_7 = (1);
var cr50787_place_8 = missionary.core.none;
(cr50787_state[(0)] = cr50787_block_4);

return missionary.core.fork(cr50787_place_7,cr50787_place_8);
}catch (e50840){var cr50787_exception = e50840;
(cr50787_state[(0)] = null);

(cr50787_state[(2)] = null);

throw cr50787_exception;
}});
var cr50787_block_11 = (function contrib$missionary_contrib$seq_consumer_$_cr50787_block_11(cr50787_state){
try{var cr50787_place_18 = (cr50787_state[(3)]);
(cr50787_state[(0)] = cr50787_block_12);

(cr50787_state[(3)] = null);

(cr50787_state[(2)] = cr50787_place_18);

return cr50787_state;
}catch (e50842){var cr50787_exception = e50842;
(cr50787_state[(0)] = null);

(cr50787_state[(3)] = null);

(cr50787_state[(2)] = null);

throw cr50787_exception;
}});
var cr50787_block_10 = (function contrib$missionary_contrib$seq_consumer_$_cr50787_block_10(cr50787_state){
try{var cr50787_place_16 = (cr50787_state[(1)]);
var cr50787_place_27 = "No matching clause: ";
var cr50787_place_28 = cr50787_place_16;
var cr50787_place_29 = [cr50787_place_27,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr50787_place_28)].join('');
var cr50787_place_30 = (new Error(cr50787_place_29));
var cr50787_place_31 = (function(){throw cr50787_place_30})();
(cr50787_state[(0)] = null);

(cr50787_state[(1)] = null);

return null;
}catch (e50843){var cr50787_exception = e50843;
(cr50787_state[(0)] = null);

(cr50787_state[(1)] = null);

throw cr50787_exception;
}});
var cr50787_block_6 = (function contrib$missionary_contrib$seq_consumer_$_cr50787_block_6(cr50787_state){
try{var cr50787_place_16 = missionary.core.unpark();
var cr50787_place_17 = cr50787_place_16;
var cr50787_place_18 = null;
var G__50846 = cr50787_place_17;
switch (G__50846) {
case (0):
(cr50787_state[(0)] = cr50787_block_7);

(cr50787_state[(3)] = cr50787_place_18);

return cr50787_state;

break;
case (1):
(cr50787_state[(0)] = cr50787_block_9);

(cr50787_state[(2)] = null);

return cr50787_state;

break;
default:
(cr50787_state[(0)] = cr50787_block_10);

(cr50787_state[(1)] = null);

(cr50787_state[(2)] = null);

(cr50787_state[(1)] = cr50787_place_16);

return cr50787_state;

}
}catch (e50845){var cr50787_exception = e50845;
(cr50787_state[(0)] = null);

(cr50787_state[(1)] = null);

(cr50787_state[(2)] = null);

throw cr50787_exception;
}});
var cr50787_block_9 = (function contrib$missionary_contrib$seq_consumer_$_cr50787_block_9(cr50787_state){
try{var cr50787_place_0 = (cr50787_state[(1)]);
var cr50787_place_24 = cljs.core.rest;
var cr50787_place_25 = cr50787_place_0;
var cr50787_place_26 = (function (){var G__50850 = cr50787_place_25;
var fexpr__50849 = cr50787_place_24;
return (fexpr__50849.cljs$core$IFn$_invoke$arity$1 ? fexpr__50849.cljs$core$IFn$_invoke$arity$1(G__50850) : fexpr__50849.call(null,G__50850));
})();
(cr50787_state[(0)] = cr50787_block_1);

(cr50787_state[(1)] = cr50787_place_26);

return cr50787_state;
}catch (e50848){var cr50787_exception = e50848;
(cr50787_state[(0)] = null);

(cr50787_state[(1)] = null);

throw cr50787_exception;
}});
return cloroutine.impl.coroutine((function (){var G__50851 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((4));
(G__50851[(0)] = cr50787_block_0);

return G__50851;
})());
})(),missionary.core.ap_run);
});
/**
 * derive discrete flow from succession of polled values from a task (or mbox)
 */
contrib.missionary_contrib.poll_task = (function contrib$missionary_contrib$poll_task(task){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr50853_block_7 = (function contrib$missionary_contrib$poll_task_$_cr50853_block_7(cr50853_state){
try{var cr50853_place_8 = (cr50853_state[(1)]);
var cr50853_place_14 = "No matching clause: ";
var cr50853_place_15 = cr50853_place_8;
var cr50853_place_16 = [cr50853_place_14,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr50853_place_15)].join('');
var cr50853_place_17 = (new Error(cr50853_place_16));
var cr50853_place_18 = (function(){throw cr50853_place_17})();
(cr50853_state[(0)] = null);

(cr50853_state[(1)] = null);

return null;
}catch (e50870){var cr50853_exception = e50870;
(cr50853_state[(0)] = null);

(cr50853_state[(1)] = null);

throw cr50853_exception;
}});
var cr50853_block_8 = (function contrib$missionary_contrib$poll_task_$_cr50853_block_8(cr50853_state){
try{var cr50853_place_10 = (cr50853_state[(2)]);
(cr50853_state[(0)] = null);

(cr50853_state[(2)] = null);

return cr50853_place_10;
}catch (e50871){var cr50853_exception = e50871;
(cr50853_state[(0)] = null);

(cr50853_state[(2)] = null);

throw cr50853_exception;
}});
var cr50853_block_5 = (function contrib$missionary_contrib$poll_task_$_cr50853_block_5(cr50853_state){
try{var cr50853_place_12 = task;
(cr50853_state[(0)] = cr50853_block_6);

return missionary.core.park(cr50853_place_12);
}catch (e50872){var cr50853_exception = e50872;
(cr50853_state[(0)] = null);

(cr50853_state[(1)] = null);

throw cr50853_exception;
}});
var cr50853_block_2 = (function contrib$missionary_contrib$poll_task_$_cr50853_block_2(cr50853_state){
try{var cr50853_place_2 = (1);
var cr50853_place_3 = missionary.core.seed;
var cr50853_place_4 = cljs.core.range;
var cr50853_place_5 = (2);
var cr50853_place_6 = (function (){var G__50875 = cr50853_place_5;
var fexpr__50874 = cr50853_place_4;
return (fexpr__50874.cljs$core$IFn$_invoke$arity$1 ? fexpr__50874.cljs$core$IFn$_invoke$arity$1(G__50875) : fexpr__50874.call(null,G__50875));
})();
var cr50853_place_7 = (function (){var G__50877 = cr50853_place_6;
var fexpr__50876 = cr50853_place_3;
return (fexpr__50876.cljs$core$IFn$_invoke$arity$1 ? fexpr__50876.cljs$core$IFn$_invoke$arity$1(G__50877) : fexpr__50876.call(null,G__50877));
})();
(cr50853_state[(0)] = cr50853_block_3);

return missionary.core.fork(cr50853_place_2,cr50853_place_7);
}catch (e50873){var cr50853_exception = e50873;
(cr50853_state[(0)] = null);

(cr50853_state[(1)] = null);

throw cr50853_exception;
}});
var cr50853_block_0 = (function contrib$missionary_contrib$poll_task_$_cr50853_block_0(cr50853_state){
try{var cr50853_place_0 = task;
(cr50853_state[(0)] = cr50853_block_1);

return missionary.core.park(cr50853_place_0);
}catch (e50882){var cr50853_exception = e50882;
(cr50853_state[(0)] = null);

throw cr50853_exception;
}});
var cr50853_block_6 = (function contrib$missionary_contrib$poll_task_$_cr50853_block_6(cr50853_state){
try{var cr50853_place_13 = missionary.core.unpark();
(cr50853_state[(0)] = cr50853_block_2);

(cr50853_state[(1)] = cr50853_place_13);

return cr50853_state;
}catch (e50884){var cr50853_exception = e50884;
(cr50853_state[(0)] = null);

(cr50853_state[(1)] = null);

throw cr50853_exception;
}});
var cr50853_block_3 = (function contrib$missionary_contrib$poll_task_$_cr50853_block_3(cr50853_state){
try{var cr50853_place_8 = missionary.core.unpark();
var cr50853_place_9 = cr50853_place_8;
var cr50853_place_10 = null;
var G__50887 = cr50853_place_9;
switch (G__50887) {
case (0):
(cr50853_state[(0)] = cr50853_block_4);

(cr50853_state[(2)] = cr50853_place_10);

return cr50853_state;

break;
case (1):
(cr50853_state[(0)] = cr50853_block_5);

return cr50853_state;

break;
default:
(cr50853_state[(0)] = cr50853_block_7);

(cr50853_state[(1)] = null);

(cr50853_state[(1)] = cr50853_place_8);

return cr50853_state;

}
}catch (e50886){var cr50853_exception = e50886;
(cr50853_state[(0)] = null);

(cr50853_state[(1)] = null);

throw cr50853_exception;
}});
var cr50853_block_1 = (function contrib$missionary_contrib$poll_task_$_cr50853_block_1(cr50853_state){
try{var cr50853_place_1 = missionary.core.unpark();
(cr50853_state[(0)] = cr50853_block_2);

(cr50853_state[(1)] = cr50853_place_1);

return cr50853_state;
}catch (e50888){var cr50853_exception = e50888;
(cr50853_state[(0)] = null);

throw cr50853_exception;
}});
var cr50853_block_4 = (function contrib$missionary_contrib$poll_task_$_cr50853_block_4(cr50853_state){
try{var cr50853_place_1 = (cr50853_state[(1)]);
var cr50853_place_11 = cr50853_place_1;
(cr50853_state[(0)] = cr50853_block_8);

(cr50853_state[(1)] = null);

(cr50853_state[(2)] = cr50853_place_11);

return cr50853_state;
}catch (e50890){var cr50853_exception = e50890;
(cr50853_state[(0)] = null);

(cr50853_state[(2)] = null);

(cr50853_state[(1)] = null);

throw cr50853_exception;
}});
return cloroutine.impl.coroutine((function (){var G__50891 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__50891[(0)] = cr50853_block_0);

return G__50891;
})());
})(),missionary.core.ap_run);
});
/**
 * compare (document log) to (d/entity db eid). if a datomic txn is [op eid a v], 
 * log here is [op a v], or in other words, there is only one entity (the `eid` is 
 * constant) so we are left with not an entity but a document.
 */
contrib.missionary_contrib.document = (function contrib$missionary_contrib$document(_GT_txs){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3((function (m,p__50893){
var vec__50894 = p__50893;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50894,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50894,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50894,(2),null);
var G__50897 = op;
var G__50897__$1 = (((G__50897 instanceof cljs.core.Keyword))?G__50897.fqn:null);
switch (G__50897__$1) {
case "contrib.missionary-contrib/add":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,a,v);

break;
case "contrib.missionary-contrib/retract":
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,a);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50897__$1)].join('')));

}
}),cljs.core.PersistentArrayMap.EMPTY,_GT_txs);
});

//# sourceMappingURL=contrib.missionary_contrib.js.map
