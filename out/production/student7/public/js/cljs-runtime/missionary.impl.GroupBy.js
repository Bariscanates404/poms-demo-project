goog.provide('missionary.impl.GroupBy');





/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.GroupBy.Process = (function (keyfn,notifier,terminator,key,value,input,table,load,live,busy,done){
this.keyfn = keyfn;
this.notifier = notifier;
this.terminator = terminator;
this.key = key;
this.value = value;
this.input = input;
this.table = table;
this.load = load;
this.live = live;
this.busy = busy;
this.done = done;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.GroupBy.Process.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__46798 = (arguments.length - (1));
switch (G__46798) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.GroupBy.Process.prototype.apply = (function (self__,args46788){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args46788)));
}));

(missionary.impl.GroupBy.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var p = this;
(missionary.impl.GroupBy.kill.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.kill.cljs$core$IFn$_invoke$arity$1(p) : missionary.impl.GroupBy.kill.call(null,p));

return null;
}));

(missionary.impl.GroupBy.Process.prototype.cljs$core$IFn$_invoke$arity$2 = (function (n,t){
var self__ = this;
var p = this;
return (missionary.impl.GroupBy.group.cljs$core$IFn$_invoke$arity$3 ? missionary.impl.GroupBy.group.cljs$core$IFn$_invoke$arity$3(p,n,t) : missionary.impl.GroupBy.group.call(null,p,n,t));
}));

(missionary.impl.GroupBy.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (p){
var self__ = this;
var p__$1 = this;
return (missionary.impl.GroupBy.sample.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.sample.cljs$core$IFn$_invoke$arity$1(p__$1) : missionary.impl.GroupBy.sample.call(null,p__$1));
}));

(missionary.impl.GroupBy.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keyfn","keyfn",-1874375437,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.Symbol(null,"table","table",1075588491,null),cljs.core.with_meta(new cljs.core.Symbol(null,"load","load",321890343,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"live","live",30383488,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null))], null);
}));

(missionary.impl.GroupBy.Process.cljs$lang$type = true);

(missionary.impl.GroupBy.Process.cljs$lang$ctorStr = "missionary.impl.GroupBy/Process");

(missionary.impl.GroupBy.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.GroupBy/Process");
}));

/**
 * Positional factory function for missionary.impl.GroupBy/Process.
 */
missionary.impl.GroupBy.__GT_Process = (function missionary$impl$GroupBy$__GT_Process(keyfn,notifier,terminator,key,value,input,table,load,live,busy,done){
return (new missionary.impl.GroupBy.Process(keyfn,notifier,terminator,key,value,input,table,load,live,busy,done));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.GroupBy.Group = (function (process,key,notifier,terminator){
this.process = process;
this.key = key;
this.notifier = notifier;
this.terminator = terminator;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.GroupBy.Group.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__46821 = (arguments.length - (1));
switch (G__46821) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.GroupBy.Group.prototype.apply = (function (self__,args46818){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args46818)));
}));

(missionary.impl.GroupBy.Group.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var g = this;
(missionary.impl.GroupBy.cancel.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.cancel.cljs$core$IFn$_invoke$arity$1(g) : missionary.impl.GroupBy.cancel.call(null,g));

return null;
}));

(missionary.impl.GroupBy.Group.prototype.cljs$core$IDeref$_deref$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return (missionary.impl.GroupBy.consume.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.consume.cljs$core$IFn$_invoke$arity$1(g__$1) : missionary.impl.GroupBy.consume.call(null,g__$1));
}));

(missionary.impl.GroupBy.Group.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"process","process",-1011242831,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null)], null);
}));

(missionary.impl.GroupBy.Group.cljs$lang$type = true);

(missionary.impl.GroupBy.Group.cljs$lang$ctorStr = "missionary.impl.GroupBy/Group");

(missionary.impl.GroupBy.Group.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.GroupBy/Group");
}));

/**
 * Positional factory function for missionary.impl.GroupBy/Group.
 */
missionary.impl.GroupBy.__GT_Group = (function missionary$impl$GroupBy$__GT_Group(process,key,notifier,terminator){
return (new missionary.impl.GroupBy.Group(process,key,notifier,terminator));
});

missionary.impl.GroupBy.kill = (function missionary$impl$GroupBy$kill(p){
if(cljs.core.truth_(p.live)){
(p.live = false);

var fexpr__46853 = p.input;
return (fexpr__46853.cljs$core$IFn$_invoke$arity$0 ? fexpr__46853.cljs$core$IFn$_invoke$arity$0() : fexpr__46853.call(null));
} else {
return null;
}
});
missionary.impl.GroupBy.step = (function missionary$impl$GroupBy$step(i,m){
return ((i + (1)) & m);
});
missionary.impl.GroupBy.group = (function missionary$impl$GroupBy$group(p,n,t){
var k = p.key;
var g = missionary.impl.GroupBy.__GT_Group(p,k,n,t);
var table = p.table;
if((k === p)){
} else {
(p.key = p);

var s_46984 = table.length;
var m_46985 = (s_46984 - (1));
var i_46986 = (cljs.core.hash(k) & m_46985);
while(true){
var G__46876_46987 = (table[i_46986]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__46876_46987)){
(table[i_46986] = g);
} else {
var G__46988 = missionary.impl.GroupBy.step(i_46986,m_46985);
i_46986 = G__46988;
continue;

}
break;
}

var ss_46989 = (s_46984 << (1));
if((ss_46989 <= ((3) * (p.load = (p.load + (1)))))){
var mm_46991 = (ss_46989 - (1));
var larger_46992 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(ss_46989);
(p.table = larger_46992);

var n__5636__auto___46993 = s_46984;
var i_46994 = (0);
while(true){
if((i_46994 < n__5636__auto___46993)){
var temp__5808__auto___46995 = (table[i_46994]);
if((temp__5808__auto___46995 == null)){
} else {
var h_46997 = temp__5808__auto___46995;
var j_47012 = (cljs.core.hash(h_46997.key) & mm_46991);
while(true){
var G__46895_47013 = (larger_46992[j_47012]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__46895_47013)){
(larger_46992[j_47012] = h_46997);
} else {
var G__47014 = missionary.impl.GroupBy.step(j_47012,mm_46991);
j_47012 = G__47014;
continue;

}
break;
}
}

var G__47016 = (i_46994 + (1));
i_46994 = G__47016;
continue;
} else {
}
break;
}
} else {
}
}

(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));

return g;
});
missionary.impl.GroupBy.cancel = (function missionary$impl$GroupBy$cancel(g){
var p = g.process;
var k = g.key;
if(cljs.core.truth_(p.live)){
if((k === p)){
return null;
} else {
(g.key = p);

var table = p.table;
var m = (table.length - (1));
var i = (function (){var i = (cljs.core.hash(k) & m);
while(true){
if((g === (table[i]))){
return i;
} else {
var G__47019 = missionary.impl.GroupBy.step(i,m);
i = G__47019;
continue;
}
break;
}
})();
(table[i] = null);

(p.load = (p.load - (1)));

var i_47021__$1 = missionary.impl.GroupBy.step(i,m);
while(true){
var temp__5808__auto___47023 = (table[i_47021__$1]);
if((temp__5808__auto___47023 == null)){
} else {
var h_47024 = temp__5808__auto___47023;
var j_47025 = (cljs.core.hash(h_47024.key) & m);
if((i_47021__$1 === j_47025)){
} else {
(table[i_47021__$1] = null);

var j_47027__$1 = j_47025;
while(true){
if(((table[j_47027__$1]) == null)){
(table[j_47027__$1] = h_47024);
} else {
var G__47028 = missionary.impl.GroupBy.step(j_47027__$1,m);
j_47027__$1 = G__47028;
continue;
}
break;
}
}

var G__47029 = missionary.impl.GroupBy.step(i_47021__$1,m);
i_47021__$1 = G__47029;
continue;
}
break;
}

var fexpr__46911 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,p.key))?p.notifier:g.notifier);
return (fexpr__46911.cljs$core$IFn$_invoke$arity$0 ? fexpr__46911.cljs$core$IFn$_invoke$arity$0() : fexpr__46911.call(null));
}
} else {
return null;
}
});
missionary.impl.GroupBy.transfer = (function missionary$impl$GroupBy$transfer(p){
while(true){
if(cljs.core.truth_((p.busy = cljs.core.not(p.busy)))){
if(cljs.core.truth_(p.done)){
(p.live = false);

var temp__5808__auto___47031 = p.table;
if((temp__5808__auto___47031 == null)){
} else {
var table_47034 = temp__5808__auto___47031;
(p.table = null);

var n__5636__auto___47035 = table_47034.length;
var i_47036 = (0);
while(true){
if((i_47036 < n__5636__auto___47035)){
var temp__5808__auto___47037__$1 = (table_47034[i_47036]);
if((temp__5808__auto___47037__$1 == null)){
} else {
var g_47038 = temp__5808__auto___47037__$1;
var fexpr__46930_47039 = g_47038.terminator;
(fexpr__46930_47039.cljs$core$IFn$_invoke$arity$0 ? fexpr__46930_47039.cljs$core$IFn$_invoke$arity$0() : fexpr__46930_47039.call(null));
}

var G__47040 = (i_47036 + (1));
i_47036 = G__47040;
continue;
} else {
}
break;
}
}

var fexpr__46935 = p.terminator;
return (fexpr__46935.cljs$core$IFn$_invoke$arity$0 ? fexpr__46935.cljs$core$IFn$_invoke$arity$0() : fexpr__46935.call(null));
} else {
if((p === p.value)){
var table = p.table;
try{var k = (p.key = (function (){var G__46950 = (p.value = cljs.core.deref(p.input));
var fexpr__46949 = p.keyfn;
return (fexpr__46949.cljs$core$IFn$_invoke$arity$1 ? fexpr__46949.cljs$core$IFn$_invoke$arity$1(G__46950) : fexpr__46949.call(null,G__46950));
})());
var m = (table.length - (1));
var i = (cljs.core.hash(k) & m);
while(true){
var temp__5806__auto__ = (table[i]);
if((temp__5806__auto__ == null)){
var fexpr__46955 = p.notifier;
return (fexpr__46955.cljs$core$IFn$_invoke$arity$0 ? fexpr__46955.cljs$core$IFn$_invoke$arity$0() : fexpr__46955.call(null));
} else {
var h = temp__5806__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,h.key)){
var fexpr__46956 = h.notifier;
return (fexpr__46956.cljs$core$IFn$_invoke$arity$0 ? fexpr__46956.cljs$core$IFn$_invoke$arity$0() : fexpr__46956.call(null));
} else {
var G__47045 = missionary.impl.GroupBy.step(i,m);
i = G__47045;
continue;
}
}
break;
}
}catch (e46938){var e = e46938;
(p.value = e);

(p.table = null);

missionary.impl.GroupBy.kill(p);

var n__5636__auto___47046 = table.length;
var i_47047 = (0);
while(true){
if((i_47047 < n__5636__auto___47046)){
var temp__5808__auto___47049 = (table[i_47047]);
if((temp__5808__auto___47049 == null)){
} else {
var g_47050 = temp__5808__auto___47049;
var fexpr__46945_47051 = g_47050.terminator;
(fexpr__46945_47051.cljs$core$IFn$_invoke$arity$0 ? fexpr__46945_47051.cljs$core$IFn$_invoke$arity$0() : fexpr__46945_47051.call(null));
}

var G__47052 = (i_47047 + (1));
i_47047 = G__47052;
continue;
} else {
}
break;
}

var fexpr__46946 = p.notifier;
return (fexpr__46946.cljs$core$IFn$_invoke$arity$0 ? fexpr__46946.cljs$core$IFn$_invoke$arity$0() : fexpr__46946.call(null));
}} else {
try{cljs.core.deref(p.input);
}catch (e46957){var __47054 = e46957;
}
continue;
}
}
} else {
return null;
}
break;
}
});
missionary.impl.GroupBy.sample = (function missionary$impl$GroupBy$sample(p){
var k = p.key;
if((k === p)){
missionary.impl.GroupBy.transfer(p);

throw p.value;
} else {
return cljs.core.__GT_MapEntry(k,p,null);
}
});
missionary.impl.GroupBy.consume = (function missionary$impl$GroupBy$consume(g){
var p = g.process;
if((p === g.key)){
var fexpr__46964_47056 = g.terminator;
(fexpr__46964_47056.cljs$core$IFn$_invoke$arity$0 ? fexpr__46964_47056.cljs$core$IFn$_invoke$arity$0() : fexpr__46964_47056.call(null));

throw (new missionary.Cancelled("Group consumer cancelled."));
} else {
var x = p.value;
(p.value = p);

(p.key = p);

missionary.impl.GroupBy.transfer(p);

return x;
}
});
missionary.impl.GroupBy.run = (function missionary$impl$GroupBy$run(k,f,n,t){
var p = missionary.impl.GroupBy.__GT_Process(k,n,t,null,null,null,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8)),(0),true,true,false);
(p.key = p);

(p.value = p);

(p.input = (function (){var G__46973 = (function (){
return missionary.impl.GroupBy.transfer(p);
});
var G__46974 = (function (){
(p.done = true);

return missionary.impl.GroupBy.transfer(p);
});
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__46973,G__46974) : f.call(null,G__46973,G__46974));
})());

missionary.impl.GroupBy.transfer(p);

return p;
});

//# sourceMappingURL=missionary.impl.GroupBy.js.map
