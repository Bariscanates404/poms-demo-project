goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__29397__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__29397 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29400__i = 0, G__29400__a = new Array(arguments.length -  0);
while (G__29400__i < G__29400__a.length) {G__29400__a[G__29400__i] = arguments[G__29400__i + 0]; ++G__29400__i;}
  args = new cljs.core.IndexedSeq(G__29400__a,0,null);
} 
return G__29397__delegate.call(this,args);};
G__29397.cljs$lang$maxFixedArity = 0;
G__29397.cljs$lang$applyTo = (function (arglist__29402){
var args = cljs.core.seq(arglist__29402);
return G__29397__delegate(args);
});
G__29397.cljs$core$IFn$_invoke$arity$variadic = G__29397__delegate;
return G__29397;
})()
);

(o.error = (function() { 
var G__29405__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__29405 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29407__i = 0, G__29407__a = new Array(arguments.length -  0);
while (G__29407__i < G__29407__a.length) {G__29407__a[G__29407__i] = arguments[G__29407__i + 0]; ++G__29407__i;}
  args = new cljs.core.IndexedSeq(G__29407__a,0,null);
} 
return G__29405__delegate.call(this,args);};
G__29405.cljs$lang$maxFixedArity = 0;
G__29405.cljs$lang$applyTo = (function (arglist__29408){
var args = cljs.core.seq(arglist__29408);
return G__29405__delegate(args);
});
G__29405.cljs$core$IFn$_invoke$arity$variadic = G__29405__delegate;
return G__29405;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
