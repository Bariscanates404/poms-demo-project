goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__38908,p__38909){
var map__38911 = p__38908;
var map__38911__$1 = cljs.core.__destructure_map(map__38911);
var svc = map__38911__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38911__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38911__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38911__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38912 = p__38909;
var map__38912__$1 = cljs.core.__destructure_map(map__38912);
var msg = map__38912__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38912__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38912__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38912__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38912__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__38919,p__38920){
var map__38922 = p__38919;
var map__38922__$1 = cljs.core.__destructure_map(map__38922);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38922__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__38923 = p__38920;
var map__38923__$1 = cljs.core.__destructure_map(map__38923);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38923__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__38927,p__38928){
var map__38930 = p__38927;
var map__38930__$1 = cljs.core.__destructure_map(map__38930);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38930__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38930__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38931 = p__38928;
var map__38931__$1 = cljs.core.__destructure_map(map__38931);
var msg = map__38931__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38931__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__38941,tid){
var map__38942 = p__38941;
var map__38942__$1 = cljs.core.__destructure_map(map__38942);
var svc = map__38942__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38942__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__38959 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__38960 = null;
var count__38961 = (0);
var i__38962 = (0);
while(true){
if((i__38962 < count__38961)){
var vec__38971 = chunk__38960.cljs$core$IIndexed$_nth$arity$2(null,i__38962);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38971,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38971,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__39022 = seq__38959;
var G__39023 = chunk__38960;
var G__39024 = count__38961;
var G__39025 = (i__38962 + (1));
seq__38959 = G__39022;
chunk__38960 = G__39023;
count__38961 = G__39024;
i__38962 = G__39025;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38959);
if(temp__5804__auto__){
var seq__38959__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38959__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38959__$1);
var G__39026 = cljs.core.chunk_rest(seq__38959__$1);
var G__39027 = c__5568__auto__;
var G__39028 = cljs.core.count(c__5568__auto__);
var G__39029 = (0);
seq__38959 = G__39026;
chunk__38960 = G__39027;
count__38961 = G__39028;
i__38962 = G__39029;
continue;
} else {
var vec__38975 = cljs.core.first(seq__38959__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38975,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38975,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__39033 = cljs.core.next(seq__38959__$1);
var G__39034 = null;
var G__39035 = (0);
var G__39036 = (0);
seq__38959 = G__39033;
chunk__38960 = G__39034;
count__38961 = G__39035;
i__38962 = G__39036;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__38947_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__38947_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__38948_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__38948_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__38949_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__38949_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__38950_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__38950_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__38982){
var map__38984 = p__38982;
var map__38984__$1 = cljs.core.__destructure_map(map__38984);
var svc = map__38984__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38984__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38984__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
