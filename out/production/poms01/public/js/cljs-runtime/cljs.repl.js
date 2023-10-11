goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38042){
var map__38043 = p__38042;
var map__38043__$1 = cljs.core.__destructure_map(map__38043);
var m = map__38043__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38043__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38043__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38045_38474 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38046_38475 = null;
var count__38047_38476 = (0);
var i__38048_38477 = (0);
while(true){
if((i__38048_38477 < count__38047_38476)){
var f_38478 = chunk__38046_38475.cljs$core$IIndexed$_nth$arity$2(null,i__38048_38477);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38478], 0));


var G__38479 = seq__38045_38474;
var G__38480 = chunk__38046_38475;
var G__38481 = count__38047_38476;
var G__38482 = (i__38048_38477 + (1));
seq__38045_38474 = G__38479;
chunk__38046_38475 = G__38480;
count__38047_38476 = G__38481;
i__38048_38477 = G__38482;
continue;
} else {
var temp__5804__auto___38483 = cljs.core.seq(seq__38045_38474);
if(temp__5804__auto___38483){
var seq__38045_38484__$1 = temp__5804__auto___38483;
if(cljs.core.chunked_seq_QMARK_(seq__38045_38484__$1)){
var c__5568__auto___38485 = cljs.core.chunk_first(seq__38045_38484__$1);
var G__38486 = cljs.core.chunk_rest(seq__38045_38484__$1);
var G__38487 = c__5568__auto___38485;
var G__38488 = cljs.core.count(c__5568__auto___38485);
var G__38489 = (0);
seq__38045_38474 = G__38486;
chunk__38046_38475 = G__38487;
count__38047_38476 = G__38488;
i__38048_38477 = G__38489;
continue;
} else {
var f_38490 = cljs.core.first(seq__38045_38484__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38490], 0));


var G__38491 = cljs.core.next(seq__38045_38484__$1);
var G__38492 = null;
var G__38493 = (0);
var G__38494 = (0);
seq__38045_38474 = G__38491;
chunk__38046_38475 = G__38492;
count__38047_38476 = G__38493;
i__38048_38477 = G__38494;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38495 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38495], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38495)))?cljs.core.second(arglists_38495):arglists_38495)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38062_38496 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38063_38497 = null;
var count__38064_38498 = (0);
var i__38065_38499 = (0);
while(true){
if((i__38065_38499 < count__38064_38498)){
var vec__38107_38501 = chunk__38063_38497.cljs$core$IIndexed$_nth$arity$2(null,i__38065_38499);
var name_38502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38107_38501,(0),null);
var map__38110_38503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38107_38501,(1),null);
var map__38110_38504__$1 = cljs.core.__destructure_map(map__38110_38503);
var doc_38505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38110_38504__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38110_38504__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38502], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38506], 0));

if(cljs.core.truth_(doc_38505)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38505], 0));
} else {
}


var G__38510 = seq__38062_38496;
var G__38511 = chunk__38063_38497;
var G__38512 = count__38064_38498;
var G__38513 = (i__38065_38499 + (1));
seq__38062_38496 = G__38510;
chunk__38063_38497 = G__38511;
count__38064_38498 = G__38512;
i__38065_38499 = G__38513;
continue;
} else {
var temp__5804__auto___38514 = cljs.core.seq(seq__38062_38496);
if(temp__5804__auto___38514){
var seq__38062_38515__$1 = temp__5804__auto___38514;
if(cljs.core.chunked_seq_QMARK_(seq__38062_38515__$1)){
var c__5568__auto___38516 = cljs.core.chunk_first(seq__38062_38515__$1);
var G__38517 = cljs.core.chunk_rest(seq__38062_38515__$1);
var G__38518 = c__5568__auto___38516;
var G__38519 = cljs.core.count(c__5568__auto___38516);
var G__38520 = (0);
seq__38062_38496 = G__38517;
chunk__38063_38497 = G__38518;
count__38064_38498 = G__38519;
i__38065_38499 = G__38520;
continue;
} else {
var vec__38135_38521 = cljs.core.first(seq__38062_38515__$1);
var name_38522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38135_38521,(0),null);
var map__38138_38523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38135_38521,(1),null);
var map__38138_38524__$1 = cljs.core.__destructure_map(map__38138_38523);
var doc_38525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38138_38524__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38138_38524__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38522], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38526], 0));

if(cljs.core.truth_(doc_38525)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38525], 0));
} else {
}


var G__38527 = cljs.core.next(seq__38062_38515__$1);
var G__38528 = null;
var G__38529 = (0);
var G__38530 = (0);
seq__38062_38496 = G__38527;
chunk__38063_38497 = G__38528;
count__38064_38498 = G__38529;
i__38065_38499 = G__38530;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__38181 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38182 = null;
var count__38183 = (0);
var i__38184 = (0);
while(true){
if((i__38184 < count__38183)){
var role = chunk__38182.cljs$core$IIndexed$_nth$arity$2(null,i__38184);
var temp__5804__auto___38535__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___38535__$1)){
var spec_38537 = temp__5804__auto___38535__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38537)], 0));
} else {
}


var G__38538 = seq__38181;
var G__38539 = chunk__38182;
var G__38540 = count__38183;
var G__38541 = (i__38184 + (1));
seq__38181 = G__38538;
chunk__38182 = G__38539;
count__38183 = G__38540;
i__38184 = G__38541;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__38181);
if(temp__5804__auto____$1){
var seq__38181__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__38181__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38181__$1);
var G__38542 = cljs.core.chunk_rest(seq__38181__$1);
var G__38543 = c__5568__auto__;
var G__38544 = cljs.core.count(c__5568__auto__);
var G__38545 = (0);
seq__38181 = G__38542;
chunk__38182 = G__38543;
count__38183 = G__38544;
i__38184 = G__38545;
continue;
} else {
var role = cljs.core.first(seq__38181__$1);
var temp__5804__auto___38546__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___38546__$2)){
var spec_38547 = temp__5804__auto___38546__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38547)], 0));
} else {
}


var G__38548 = cljs.core.next(seq__38181__$1);
var G__38549 = null;
var G__38550 = (0);
var G__38551 = (0);
seq__38181 = G__38548;
chunk__38182 = G__38549;
count__38183 = G__38550;
i__38184 = G__38551;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__38554 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38555 = cljs.core.ex_cause(t);
via = G__38554;
t = G__38555;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__38287 = datafied_throwable;
var map__38287__$1 = cljs.core.__destructure_map(map__38287);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38287__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38287__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38287__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38288 = cljs.core.last(via);
var map__38288__$1 = cljs.core.__destructure_map(map__38288);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38288__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38288__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38288__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38289 = data;
var map__38289__$1 = cljs.core.__destructure_map(map__38289);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38289__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38289__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38289__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38290 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__38290__$1 = cljs.core.__destructure_map(map__38290);
var top_data = map__38290__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38290__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38301 = phase;
var G__38301__$1 = (((G__38301 instanceof cljs.core.Keyword))?G__38301.fqn:null);
switch (G__38301__$1) {
case "read-source":
var map__38313 = data;
var map__38313__$1 = cljs.core.__destructure_map(map__38313);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38313__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38313__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38320 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__38320__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38320,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38320);
var G__38320__$2 = (cljs.core.truth_((function (){var fexpr__38330 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38330.cljs$core$IFn$_invoke$arity$1 ? fexpr__38330.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38330.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38320__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38320__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38320__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38320__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38346 = top_data;
var G__38346__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38346,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38346);
var G__38346__$2 = (cljs.core.truth_((function (){var fexpr__38351 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38351.cljs$core$IFn$_invoke$arity$1 ? fexpr__38351.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38351.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38346__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38346__$1);
var G__38346__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38346__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38346__$2);
var G__38346__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38346__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38346__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38346__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38346__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38363 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38363,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38363,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38363,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38363,(3),null);
var G__38366 = top_data;
var G__38366__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38366,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38366);
var G__38366__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38366__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38366__$1);
var G__38366__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38366__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38366__$2);
var G__38366__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38366__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38366__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38366__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38366__$4;
}

break;
case "execution":
var vec__38390 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38390,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38390,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38390,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38390,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38277_SHARP_){
var or__5045__auto__ = (p1__38277_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__38397 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38397.cljs$core$IFn$_invoke$arity$1 ? fexpr__38397.cljs$core$IFn$_invoke$arity$1(p1__38277_SHARP_) : fexpr__38397.call(null,p1__38277_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__38398 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38398__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38398,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38398);
var G__38398__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38398__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38398__$1);
var G__38398__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38398__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38398__$2);
var G__38398__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38398__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38398__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38398__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38398__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38301__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38407){
var map__38408 = p__38407;
var map__38408__$1 = cljs.core.__destructure_map(map__38408);
var triage_data = map__38408__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38408__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38408__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38408__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38408__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38408__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38408__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38408__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38408__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__38419 = phase;
var G__38419__$1 = (((G__38419 instanceof cljs.core.Keyword))?G__38419.fqn:null);
switch (G__38419__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__38420 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__38421 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38422 = loc;
var G__38423 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38424_38583 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38425_38584 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38426_38585 = true;
var _STAR_print_fn_STAR__temp_val__38427_38586 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38426_38585);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38427_38586);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38405_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38405_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38425_38584);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38424_38583);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38420,G__38421,G__38422,G__38423) : format.call(null,G__38420,G__38421,G__38422,G__38423));

break;
case "macroexpansion":
var G__38432 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38433 = cause_type;
var G__38434 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38435 = loc;
var G__38436 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38432,G__38433,G__38434,G__38435,G__38436) : format.call(null,G__38432,G__38433,G__38434,G__38435,G__38436));

break;
case "compile-syntax-check":
var G__38437 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38438 = cause_type;
var G__38439 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38440 = loc;
var G__38441 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38437,G__38438,G__38439,G__38440,G__38441) : format.call(null,G__38437,G__38438,G__38439,G__38440,G__38441));

break;
case "compilation":
var G__38442 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38443 = cause_type;
var G__38444 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38445 = loc;
var G__38446 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38442,G__38443,G__38444,G__38445,G__38446) : format.call(null,G__38442,G__38443,G__38444,G__38445,G__38446));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38447 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38448 = symbol;
var G__38449 = loc;
var G__38450 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38451_38593 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38452_38594 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38453_38595 = true;
var _STAR_print_fn_STAR__temp_val__38454_38596 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38453_38595);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38454_38596);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38406_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38406_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38452_38594);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38451_38593);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38447,G__38448,G__38449,G__38450) : format.call(null,G__38447,G__38448,G__38449,G__38450));
} else {
var G__38458 = "Execution error%s at %s(%s).\n%s\n";
var G__38459 = cause_type;
var G__38460 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38461 = loc;
var G__38462 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38458,G__38459,G__38460,G__38461,G__38462) : format.call(null,G__38458,G__38459,G__38460,G__38461,G__38462));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38419__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
