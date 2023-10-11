goog.provide('hyperfiddle.electric.impl.gather');
hyperfiddle.electric.impl.gather.done_BANG_ = (function hyperfiddle$electric$impl$gather$done_BANG_(main,terminator){
if(((main[((6) | (0))] = ((main[((6) | (0))]) - (1))) === (0))){
return (terminator.cljs$core$IFn$_invoke$arity$0 ? terminator.cljs$core$IFn$_invoke$arity$0() : terminator.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.gather.cancel_BANG_ = (function hyperfiddle$electric$impl$gather$cancel_BANG_(main){
var temp__5808__auto__ = (main[((2) | (0))]);
if((temp__5808__auto__ == null)){
return null;
} else {
var item = temp__5808__auto__;
var item_47874__$1 = item;
while(true){
if((item_47874__$1 === main)){
} else {
var n_47878 = (item_47874__$1[((2) | (0))]);
(item_47874__$1[((1) | (0))] = null);

(item_47874__$1[((2) | (0))] = null);

var fexpr__47803_47879 = (item_47874__$1[((0) | (0))]);
(fexpr__47803_47879.cljs$core$IFn$_invoke$arity$0 ? fexpr__47803_47879.cljs$core$IFn$_invoke$arity$0() : fexpr__47803_47879.call(null));

var G__47880 = n_47878;
item_47874__$1 = G__47880;
continue;
}
break;
}

(main[((1) | (0))] = null);

(main[((2) | (0))] = null);

var fexpr__47804 = (main[((0) | (0))]);
return (fexpr__47804.cljs$core$IFn$_invoke$arity$0 ? fexpr__47804.cljs$core$IFn$_invoke$arity$0() : fexpr__47804.call(null));
}
});
hyperfiddle.electric.impl.gather.flush_BANG_ = (function hyperfiddle$electric$impl$gather$flush_BANG_(item){
var item__$1 = item;
while(true){
if((!((item__$1 == null)))){
var next = (function (){var a__28685__auto__ = item__$1;
var i__28686__auto__ = ((3) | (0));
var x__28687__auto__ = (a__28685__auto__[i__28686__auto__]);
(a__28685__auto__[i__28686__auto__] = null);

return x__28687__auto__;
})();
try{cljs.core.deref((item__$1[((0) | (0))]));
}catch (e47811){var __47884 = e47811;
}
var G__47885 = next;
item__$1 = G__47885;
continue;
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.gather.fail_BANG_ = (function hyperfiddle$electric$impl$gather$fail_BANG_(main,item,error){
hyperfiddle.electric.impl.gather.cancel_BANG_(main);

hyperfiddle.electric.impl.gather.flush_BANG_((function (){var a__28685__auto__ = main;
var i__28686__auto__ = ((3) | (0));
var x__28687__auto__ = (a__28685__auto__[i__28686__auto__]);
(a__28685__auto__[i__28686__auto__] = null);

return x__28687__auto__;
})());

hyperfiddle.electric.impl.gather.flush_BANG_(item);

throw error;
});
hyperfiddle.electric.impl.gather.sample_BANG_ = (function hyperfiddle$electric$impl$gather$sample_BANG_(main,rf,notifier){
var idle = (function (){var a__28685__auto__ = main;
var i__28686__auto__ = ((5) | (0));
var x__28687__auto__ = (a__28685__auto__[i__28686__auto__]);
(a__28685__auto__[i__28686__auto__] = false);

return x__28687__auto__;
})();
var head = (function (){var a__28685__auto__ = main;
var i__28686__auto__ = ((3) | (0));
var x__28687__auto__ = (a__28685__auto__[i__28686__auto__]);
(a__28685__auto__[i__28686__auto__] = null);

return x__28687__auto__;
})();
var item = (function (){var a__28685__auto__ = head;
var i__28686__auto__ = ((3) | (0));
var x__28687__auto__ = (a__28685__auto__[i__28686__auto__]);
(a__28685__auto__[i__28686__auto__] = null);

return x__28687__auto__;
})();
var r = (function (){try{return cljs.core.deref((head[((0) | (0))]));
}catch (e47824){var e = e47824;
return hyperfiddle.electric.impl.gather.fail_BANG_(main,item,e);
}})();
while(true){
if((item == null)){
if(cljs.core.truth_((main[((5) | (0))]))){
if(idle){
(notifier.cljs$core$IFn$_invoke$arity$0 ? notifier.cljs$core$IFn$_invoke$arity$0() : notifier.call(null));
} else {
}
} else {
(main[((5) | (0))] = idle);
}

return r;
} else {
var next = (function (){var a__28685__auto__ = item;
var i__28686__auto__ = ((3) | (0));
var x__28687__auto__ = (a__28685__auto__[i__28686__auto__]);
(a__28685__auto__[i__28686__auto__] = null);

return x__28687__auto__;
})();
var G__47893 = next;
var G__47894 = (function (){try{var G__47828 = r;
var G__47829 = cljs.core.deref((item[((0) | (0))]));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__47828,G__47829) : rf.call(null,G__47828,G__47829));
}catch (e47827){var e = e47827;
return hyperfiddle.electric.impl.gather.fail_BANG_(main,next,e);
}})();
item = G__47893;
r = G__47894;
continue;
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.impl.gather.It = (function (main,rf,notifier,terminator){
this.main = main;
this.rf = rf;
this.notifier = notifier;
this.terminator = terminator;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.gather.It.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__47836 = (arguments.length - (1));
switch (G__47836) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.gather.It.prototype.apply = (function (self__,args47835){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47835)));
}));

(hyperfiddle.electric.impl.gather.It.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var it = this;
return hyperfiddle.electric.impl.gather.cancel_BANG_(self__.main);
}));

(hyperfiddle.electric.impl.gather.It.prototype.cljs$core$IDeref$_deref$arity$1 = (function (it){
var self__ = this;
var it__$1 = this;
return hyperfiddle.electric.impl.gather.sample_BANG_(self__.main,self__.rf,self__.notifier);
}));

(hyperfiddle.electric.impl.gather.It.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"main","main",-477271134,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null)], null);
}));

(hyperfiddle.electric.impl.gather.It.cljs$lang$type = true);

(hyperfiddle.electric.impl.gather.It.cljs$lang$ctorStr = "hyperfiddle.electric.impl.gather/It");

(hyperfiddle.electric.impl.gather.It.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.gather/It");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.gather/It.
 */
hyperfiddle.electric.impl.gather.__GT_It = (function hyperfiddle$electric$impl$gather$__GT_It(main,rf,notifier,terminator){
return (new hyperfiddle.electric.impl.gather.It(main,rf,notifier,terminator));
});

hyperfiddle.electric.impl.gather.transfer_BANG_ = (function hyperfiddle$electric$impl$gather$transfer_BANG_(it){
var main = it.main;
while(true){
if(cljs.core.truth_((main[((4) | (0))] = cljs.core.not((main[((4) | (0))]))))){
var temp__5806__auto___47910 = (main[((1) | (0))]);
if((temp__5806__auto___47910 == null)){
try{cljs.core.deref((main[((0) | (0))]));
}catch (e47837){var __47911 = e47837;
}} else {
var prev_47912 = temp__5806__auto___47910;
var item_47913 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((4) | (0)));
var idle_47914 = (function (){var a__28685__auto__ = main;
var i__28686__auto__ = ((5) | (0));
var x__28687__auto__ = (a__28685__auto__[i__28686__auto__]);
(a__28685__auto__[i__28686__auto__] = false);

return x__28687__auto__;
})();
(main[((6) | (0))] = ((main[((6) | (0))]) + (1)));

(item_47913[((1) | (0))] = prev_47912);

(prev_47912[((2) | (0))] = item_47913);

(main[((1) | (0))] = item_47913);

(item_47913[((2) | (0))] = main);

var n_47915 = ((function (item_47913,idle_47914,prev_47912,temp__5806__auto___47910,main){
return (function (){
if(((item_47913[((1) | (0))]) == null)){
try{return cljs.core.deref((item_47913[((0) | (0))]));
}catch (e47841){var _ = e47841;
return null;
}} else {
var temp__5806__auto____$1 = (function (){var a__28685__auto__ = main;
var i__28686__auto__ = ((3) | (0));
var x__28687__auto__ = (a__28685__auto__[i__28686__auto__]);
(a__28685__auto__[i__28686__auto__] = item_47913);

return x__28687__auto__;
})();
if((temp__5806__auto____$1 == null)){
if(cljs.core.truth_((main[((5) | (0))]))){
var fexpr__47845 = it.notifier;
return (fexpr__47845.cljs$core$IFn$_invoke$arity$0 ? fexpr__47845.cljs$core$IFn$_invoke$arity$0() : fexpr__47845.call(null));
} else {
return (main[((5) | (0))] = true);
}
} else {
var curr = temp__5806__auto____$1;
return (item_47913[((3) | (0))] = curr);
}
}
});})(item_47913,idle_47914,prev_47912,temp__5806__auto___47910,main))
;
var t_47916 = ((function (n_47915,item_47913,idle_47914,prev_47912,temp__5806__auto___47910,main){
return (function (){
var temp__5808__auto___47919 = (item_47913[((1) | (0))]);
if((temp__5808__auto___47919 == null)){
} else {
var prev_47920__$1 = temp__5808__auto___47919;
var next_47921 = (item_47913[((2) | (0))]);
(next_47921[((1) | (0))] = prev_47920__$1);

(prev_47920__$1[((2) | (0))] = next_47921);

(item_47913[((1) | (0))] = null);

(item_47913[((2) | (0))] = null);
}

return hyperfiddle.electric.impl.gather.done_BANG_(main,it.terminator);
});})(n_47915,item_47913,idle_47914,prev_47912,temp__5806__auto___47910,main))
;
(item_47913[((0) | (0))] = (function (){try{var fexpr__47849 = cljs.core.deref((main[((0) | (0))]));
return (fexpr__47849.cljs$core$IFn$_invoke$arity$2 ? fexpr__47849.cljs$core$IFn$_invoke$arity$2(n_47915,t_47916) : fexpr__47849.call(null,n_47915,t_47916));
}catch (e47848){var e = e47848;
return hyperfiddle.electric.impl.failer.run(e,n_47915,t_47916);
}})());

if(cljs.core.truth_((main[((5) | (0))]))){
if(idle_47914){
var fexpr__47850_47922 = it.notifier;
(fexpr__47850_47922.cljs$core$IFn$_invoke$arity$0 ? fexpr__47850_47922.cljs$core$IFn$_invoke$arity$0() : fexpr__47850_47922.call(null));
} else {
}
} else {
(main[((5) | (0))] = idle_47914);
}
}

continue;
} else {
return null;
}
break;
}
});
/**
 * 
 * Given a commutative function and a flow of flows, returns a flow concurrently running the flow with flows produced by
 * this flow and producing values produced by nested flows, reduced by the function if more than one can be transferred
 * simultaneously.
 */
hyperfiddle.electric.impl.gather.gather = (function hyperfiddle$electric$impl$gather$gather(rf,_GT__GT_x){
return (function (n,t){
var main = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((7) | (0)));
var it = hyperfiddle.electric.impl.gather.__GT_It(main,rf,n,t);
var G__47854_47923 = main;
(G__47854_47923[((1) | (0))] = main);

(G__47854_47923[((2) | (0))] = main);

(G__47854_47923[((4) | (0))] = true);

(G__47854_47923[((5) | (0))] = true);

(G__47854_47923[((6) | (0))] = (1));


(main[((0) | (0))] = (function (){var G__47865 = (function (){
return hyperfiddle.electric.impl.gather.transfer_BANG_(it);
});
var G__47866 = (function (){
return hyperfiddle.electric.impl.gather.done_BANG_(main,t);
});
return (_GT__GT_x.cljs$core$IFn$_invoke$arity$2 ? _GT__GT_x.cljs$core$IFn$_invoke$arity$2(G__47865,G__47866) : _GT__GT_x.call(null,G__47865,G__47866));
})());

hyperfiddle.electric.impl.gather.transfer_BANG_(it);

return it;
});
});

//# sourceMappingURL=hyperfiddle.electric.impl.gather.js.map
