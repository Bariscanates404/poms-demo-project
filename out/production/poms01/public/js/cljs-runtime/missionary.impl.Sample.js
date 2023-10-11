goog.provide('missionary.impl.Sample');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Sample.Process = (function (combinator,notifier,terminator,args,inputs,busy,done,alive){
this.combinator = combinator;
this.notifier = notifier;
this.terminator = terminator;
this.args = args;
this.inputs = inputs;
this.busy = busy;
this.done = done;
this.alive = alive;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Sample.Process.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__46996 = (arguments.length - (1));
switch (G__46996) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Sample.Process.prototype.apply = (function (self__,args46990){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args46990)));
}));

(missionary.impl.Sample.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
var fexpr__47001 = (self__.inputs[(self__.inputs.length - (1))]);
return (fexpr__47001.cljs$core$IFn$_invoke$arity$0 ? fexpr__47001.cljs$core$IFn$_invoke$arity$0() : fexpr__47001.call(null));
}));

(missionary.impl.Sample.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (p){
var self__ = this;
var p__$1 = this;
return (missionary.impl.Sample.transfer.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Sample.transfer.cljs$core$IFn$_invoke$arity$1(p__$1) : missionary.impl.Sample.transfer.call(null,p__$1));
}));

(missionary.impl.Sample.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combinator","combinator",-746639828,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"alive","alive",-1229505839,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null))], null);
}));

(missionary.impl.Sample.Process.cljs$lang$type = true);

(missionary.impl.Sample.Process.cljs$lang$ctorStr = "missionary.impl.Sample/Process");

(missionary.impl.Sample.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Sample/Process");
}));

/**
 * Positional factory function for missionary.impl.Sample/Process.
 */
missionary.impl.Sample.__GT_Process = (function missionary$impl$Sample$__GT_Process(combinator,notifier,terminator,args,inputs,busy,done,alive){
return (new missionary.impl.Sample.Process(combinator,notifier,terminator,args,inputs,busy,done,alive));
});

missionary.impl.Sample.ready = (function missionary$impl$Sample$ready(ps){
var args = ps.args;
var inputs = ps.inputs;
var sampled = (inputs.length - (1));
var cb = null;
while(true){
if(cljs.core.truth_((ps.busy = cljs.core.not(ps.busy)))){
if(cljs.core.truth_(ps.done)){
var n__5636__auto___47082 = sampled;
var i_47083 = (0);
while(true){
if((i_47083 < n__5636__auto___47082)){
var input_47085 = (inputs[i_47083]);
(input_47085.cljs$core$IFn$_invoke$arity$0 ? input_47085.cljs$core$IFn$_invoke$arity$0() : input_47085.call(null));

if(((args[i_47083]) === args)){
try{cljs.core.deref(input_47085);
}catch (e47026){var __47086 = e47026;
}} else {
(args[i_47083] = args);
}

var G__47087 = (i_47083 + (1));
i_47083 = G__47087;
continue;
} else {
}
break;
}

if(((ps.alive = (ps.alive - (1))) === (0))){
return ps.terminator;
} else {
return null;
}
} else {
if(((args[sampled]) === args)){
try{cljs.core.deref((inputs[sampled]));
}catch (e47032){var __47088 = e47032;
}
var G__47089 = cb;
cb = G__47089;
continue;
} else {
return ps.notifier;
}
}
} else {
return cb;
}
break;
}
});
missionary.impl.Sample.transfer = (function missionary$impl$Sample$transfer(ps){
var c = ps.combinator;
var args = ps.args;
var inputs = ps.inputs;
var sampled = (inputs.length - (1));
var sampler = (inputs[sampled]);
var x = (function (){try{try{if((c == null)){
throw (new Error("Undefined continuous flow."));
} else {
}

var n__5636__auto___47092 = sampled;
var i_47093 = (0);
while(true){
if((i_47093 < n__5636__auto___47092)){
if(((args[i_47093]) === args)){
var input_47094 = (inputs[i_47093]);
while(true){
(args[i_47093] = null);

var x_47095 = cljs.core.deref(input_47094);
if(((args[i_47093]) === args)){
continue;
} else {
(args[i_47093] = x_47095);
}
break;
}
} else {
}

var G__47096 = (i_47093 + (1));
i_47093 = G__47096;
continue;
} else {
}
break;
}
}catch (e47053){var e_47097 = e47053;
try{cljs.core.deref(sampler);
}catch (e47055){var __47098 = e47055;
}
throw e_47097;
}
(args[sampled] = cljs.core.deref(sampler));

return c.apply(null,args);
}catch (e47048){var e = e47048;
(ps.notifier = null);

(sampler.cljs$core$IFn$_invoke$arity$0 ? sampler.cljs$core$IFn$_invoke$arity$0() : sampler.call(null));

(args[sampled] = args);

return e;
}})();
var temp__5808__auto___47099 = missionary.impl.Sample.ready(ps);
if((temp__5808__auto___47099 == null)){
} else {
var cb_47100 = temp__5808__auto___47099;
(cb_47100.cljs$core$IFn$_invoke$arity$0 ? cb_47100.cljs$core$IFn$_invoke$arity$0() : cb_47100.call(null));
}

if((ps.notifier == null)){
throw x;
} else {
return x;
}
});
missionary.impl.Sample.dirty = (function missionary$impl$Sample$dirty(p,i){
var args = p.args;
if(((args[i]) === args)){
try{return cljs.core.deref((p.inputs[i]));
}catch (e47061){var _ = e47061;
return null;
}} else {
return (args[i] = args);
}
});
missionary.impl.Sample.run = (function missionary$impl$Sample$run(c,f,fs,n,t){
var it = cljs.core.iter(fs);
var arity = (cljs.core.count(fs) + (1));
var args = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(arity);
var inputs = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(arity);
var ps = missionary.impl.Sample.__GT_Process(c,n,t,args,inputs,false,false,arity);
var done = (function (){
if(((ps.alive = (ps.alive - (1))) === (0))){
var fexpr__47066 = ps.terminator;
return (fexpr__47066.cljs$core$IFn$_invoke$arity$0 ? fexpr__47066.cljs$core$IFn$_invoke$arity$0() : fexpr__47066.call(null));
} else {
return null;
}
});
var index_47106 = (0);
var flow_47107 = f;
while(true){
if(cljs.core.truth_(it.hasNext())){
(inputs[index_47106] = (function (){var G__47067 = ((function (index_47106,flow_47107,it,arity,args,inputs,ps,done){
return (function (){
return missionary.impl.Sample.dirty(ps,index_47106);
});})(index_47106,flow_47107,it,arity,args,inputs,ps,done))
;
var G__47068 = done;
return (flow_47107.cljs$core$IFn$_invoke$arity$2 ? flow_47107.cljs$core$IFn$_invoke$arity$2(G__47067,G__47068) : flow_47107.call(null,G__47067,G__47068));
})());

if(((args[index_47106]) == null)){
(ps.combinator = null);
} else {
}

var G__47111 = (index_47106 + (1));
var G__47112 = it.next();
index_47106 = G__47111;
flow_47107 = G__47112;
continue;
} else {
(inputs[index_47106] = (function (){var G__47069 = ((function (index_47106,flow_47107,it,arity,args,inputs,ps,done){
return (function (){
var temp__5808__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_47106,flow_47107,it,arity,args,inputs,ps,done))
;
var G__47070 = ((function (index_47106,flow_47107,G__47069,it,arity,args,inputs,ps,done){
return (function (){
(ps.done = true);

var temp__5808__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_47106,flow_47107,G__47069,it,arity,args,inputs,ps,done))
;
return (flow_47107.cljs$core$IFn$_invoke$arity$2 ? flow_47107.cljs$core$IFn$_invoke$arity$2(G__47069,G__47070) : flow_47107.call(null,G__47069,G__47070));
})());
}
break;
}

return ps;
});

//# sourceMappingURL=missionary.impl.Sample.js.map
