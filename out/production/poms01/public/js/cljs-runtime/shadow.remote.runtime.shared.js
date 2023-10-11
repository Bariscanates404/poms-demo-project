goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__34626,res){
var map__34627 = p__34626;
var map__34627__$1 = cljs.core.__destructure_map(map__34627);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34627__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34627__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__34632 = res;
var G__34632__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34632,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__34632);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34632__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__34632__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__34641 = arguments.length;
switch (G__34641) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__34663,msg,handlers,timeout_after_ms){
var map__34664 = p__34663;
var map__34664__$1 = cljs.core.__destructure_map(map__34664);
var runtime = map__34664__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34664__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34993 = arguments.length;
var i__5770__auto___34996 = (0);
while(true){
if((i__5770__auto___34996 < len__5769__auto___34993)){
args__5775__auto__.push((arguments[i__5770__auto___34996]));

var G__34998 = (i__5770__auto___34996 + (1));
i__5770__auto___34996 = G__34998;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__34711,ev,args){
var map__34712 = p__34711;
var map__34712__$1 = cljs.core.__destructure_map(map__34712);
var runtime = map__34712__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34712__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__34713 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__34716 = null;
var count__34717 = (0);
var i__34718 = (0);
while(true){
if((i__34718 < count__34717)){
var ext = chunk__34716.cljs$core$IIndexed$_nth$arity$2(null,i__34718);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__35003 = seq__34713;
var G__35004 = chunk__34716;
var G__35005 = count__34717;
var G__35006 = (i__34718 + (1));
seq__34713 = G__35003;
chunk__34716 = G__35004;
count__34717 = G__35005;
i__34718 = G__35006;
continue;
} else {
var G__35009 = seq__34713;
var G__35010 = chunk__34716;
var G__35011 = count__34717;
var G__35012 = (i__34718 + (1));
seq__34713 = G__35009;
chunk__34716 = G__35010;
count__34717 = G__35011;
i__34718 = G__35012;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34713);
if(temp__5804__auto__){
var seq__34713__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34713__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34713__$1);
var G__35014 = cljs.core.chunk_rest(seq__34713__$1);
var G__35015 = c__5568__auto__;
var G__35016 = cljs.core.count(c__5568__auto__);
var G__35017 = (0);
seq__34713 = G__35014;
chunk__34716 = G__35015;
count__34717 = G__35016;
i__34718 = G__35017;
continue;
} else {
var ext = cljs.core.first(seq__34713__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__35020 = cljs.core.next(seq__34713__$1);
var G__35021 = null;
var G__35022 = (0);
var G__35023 = (0);
seq__34713 = G__35020;
chunk__34716 = G__35021;
count__34717 = G__35022;
i__34718 = G__35023;
continue;
} else {
var G__35025 = cljs.core.next(seq__34713__$1);
var G__35026 = null;
var G__35027 = (0);
var G__35028 = (0);
seq__34713 = G__35025;
chunk__34716 = G__35026;
count__34717 = G__35027;
i__34718 = G__35028;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq34687){
var G__34688 = cljs.core.first(seq34687);
var seq34687__$1 = cljs.core.next(seq34687);
var G__34689 = cljs.core.first(seq34687__$1);
var seq34687__$2 = cljs.core.next(seq34687__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34688,G__34689,seq34687__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__34746,p__34747){
var map__34748 = p__34746;
var map__34748__$1 = cljs.core.__destructure_map(map__34748);
var runtime = map__34748__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34748__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__34749 = p__34747;
var map__34749__$1 = cljs.core.__destructure_map(map__34749);
var msg = map__34749__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34749__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__34751 = cljs.core.deref(state_ref);
var map__34751__$1 = cljs.core.__destructure_map(map__34751);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34751__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34751__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__34757){
var map__34758 = p__34757;
var map__34758__$1 = cljs.core.__destructure_map(map__34758);
var runtime = map__34758__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34758__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__34778,msg){
var map__34783 = p__34778;
var map__34783__$1 = cljs.core.__destructure_map(map__34783);
var runtime = map__34783__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34783__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__34836,key,p__34837){
var map__34844 = p__34836;
var map__34844__$1 = cljs.core.__destructure_map(map__34844);
var state = map__34844__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34844__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__34845 = p__34837;
var map__34845__$1 = cljs.core.__destructure_map(map__34845);
var spec = map__34845__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34845__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__34867,key,spec){
var map__34868 = p__34867;
var map__34868__$1 = cljs.core.__destructure_map(map__34868);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34868__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__34877_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__34877_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__34879_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__34879_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__34881_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__34881_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__34883_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__34883_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__34884_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__34884_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__34920,key){
var map__34922 = p__34920;
var map__34922__$1 = cljs.core.__destructure_map(map__34922);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34922__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__34925,msg){
var map__34927 = p__34925;
var map__34927__$1 = cljs.core.__destructure_map(map__34927);
var runtime = map__34927__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34927__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__34932,p__34933){
var map__34934 = p__34932;
var map__34934__$1 = cljs.core.__destructure_map(map__34934);
var runtime = map__34934__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34934__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__34935 = p__34933;
var map__34935__$1 = cljs.core.__destructure_map(map__34935);
var msg = map__34935__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34935__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34935__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__34943 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__34945 = null;
var count__34946 = (0);
var i__34947 = (0);
while(true){
if((i__34947 < count__34946)){
var map__34959 = chunk__34945.cljs$core$IIndexed$_nth$arity$2(null,i__34947);
var map__34959__$1 = cljs.core.__destructure_map(map__34959);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34959__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__35088 = seq__34943;
var G__35089 = chunk__34945;
var G__35090 = count__34946;
var G__35091 = (i__34947 + (1));
seq__34943 = G__35088;
chunk__34945 = G__35089;
count__34946 = G__35090;
i__34947 = G__35091;
continue;
} else {
var G__35093 = seq__34943;
var G__35094 = chunk__34945;
var G__35095 = count__34946;
var G__35096 = (i__34947 + (1));
seq__34943 = G__35093;
chunk__34945 = G__35094;
count__34946 = G__35095;
i__34947 = G__35096;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34943);
if(temp__5804__auto__){
var seq__34943__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34943__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34943__$1);
var G__35099 = cljs.core.chunk_rest(seq__34943__$1);
var G__35100 = c__5568__auto__;
var G__35101 = cljs.core.count(c__5568__auto__);
var G__35102 = (0);
seq__34943 = G__35099;
chunk__34945 = G__35100;
count__34946 = G__35101;
i__34947 = G__35102;
continue;
} else {
var map__34962 = cljs.core.first(seq__34943__$1);
var map__34962__$1 = cljs.core.__destructure_map(map__34962);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34962__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__35104 = cljs.core.next(seq__34943__$1);
var G__35105 = null;
var G__35106 = (0);
var G__35107 = (0);
seq__34943 = G__35104;
chunk__34945 = G__35105;
count__34946 = G__35106;
i__34947 = G__35107;
continue;
} else {
var G__35109 = cljs.core.next(seq__34943__$1);
var G__35110 = null;
var G__35111 = (0);
var G__35112 = (0);
seq__34943 = G__35109;
chunk__34945 = G__35110;
count__34946 = G__35111;
i__34947 = G__35112;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
