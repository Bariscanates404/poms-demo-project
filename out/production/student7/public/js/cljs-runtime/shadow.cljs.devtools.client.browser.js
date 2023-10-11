goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40999 = arguments.length;
var i__5770__auto___41000 = (0);
while(true){
if((i__5770__auto___41000 < len__5769__auto___40999)){
args__5775__auto__.push((arguments[i__5770__auto___41000]));

var G__41001 = (i__5770__auto___41000 + (1));
i__5770__auto___41000 = G__41001;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq40031){
var G__40032 = cljs.core.first(seq40031);
var seq40031__$1 = cljs.core.next(seq40031);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40032,seq40031__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__40042 = cljs.core.seq(sources);
var chunk__40043 = null;
var count__40044 = (0);
var i__40045 = (0);
while(true){
if((i__40045 < count__40044)){
var map__40068 = chunk__40043.cljs$core$IIndexed$_nth$arity$2(null,i__40045);
var map__40068__$1 = cljs.core.__destructure_map(map__40068);
var src = map__40068__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40068__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40068__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40068__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40068__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40077){var e_41015 = e40077;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41015);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41015.message)].join('')));
}

var G__41021 = seq__40042;
var G__41022 = chunk__40043;
var G__41023 = count__40044;
var G__41024 = (i__40045 + (1));
seq__40042 = G__41021;
chunk__40043 = G__41022;
count__40044 = G__41023;
i__40045 = G__41024;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40042);
if(temp__5804__auto__){
var seq__40042__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40042__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40042__$1);
var G__41025 = cljs.core.chunk_rest(seq__40042__$1);
var G__41026 = c__5568__auto__;
var G__41027 = cljs.core.count(c__5568__auto__);
var G__41028 = (0);
seq__40042 = G__41025;
chunk__40043 = G__41026;
count__40044 = G__41027;
i__40045 = G__41028;
continue;
} else {
var map__40083 = cljs.core.first(seq__40042__$1);
var map__40083__$1 = cljs.core.__destructure_map(map__40083);
var src = map__40083__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40083__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40083__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40083__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40083__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40086){var e_41029 = e40086;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41029);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41029.message)].join('')));
}

var G__41030 = cljs.core.next(seq__40042__$1);
var G__41031 = null;
var G__41032 = (0);
var G__41033 = (0);
seq__40042 = G__41030;
chunk__40043 = G__41031;
count__40044 = G__41032;
i__40045 = G__41033;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__40096 = cljs.core.seq(js_requires);
var chunk__40097 = null;
var count__40098 = (0);
var i__40099 = (0);
while(true){
if((i__40099 < count__40098)){
var js_ns = chunk__40097.cljs$core$IIndexed$_nth$arity$2(null,i__40099);
var require_str_41039 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41039);


var G__41040 = seq__40096;
var G__41041 = chunk__40097;
var G__41042 = count__40098;
var G__41043 = (i__40099 + (1));
seq__40096 = G__41040;
chunk__40097 = G__41041;
count__40098 = G__41042;
i__40099 = G__41043;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40096);
if(temp__5804__auto__){
var seq__40096__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40096__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40096__$1);
var G__41044 = cljs.core.chunk_rest(seq__40096__$1);
var G__41045 = c__5568__auto__;
var G__41046 = cljs.core.count(c__5568__auto__);
var G__41047 = (0);
seq__40096 = G__41044;
chunk__40097 = G__41045;
count__40098 = G__41046;
i__40099 = G__41047;
continue;
} else {
var js_ns = cljs.core.first(seq__40096__$1);
var require_str_41049 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41049);


var G__41050 = cljs.core.next(seq__40096__$1);
var G__41051 = null;
var G__41052 = (0);
var G__41053 = (0);
seq__40096 = G__41050;
chunk__40097 = G__41051;
count__40098 = G__41052;
i__40099 = G__41053;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__40117){
var map__40118 = p__40117;
var map__40118__$1 = cljs.core.__destructure_map(map__40118);
var msg = map__40118__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40118__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40118__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40119(s__40120){
return (new cljs.core.LazySeq(null,(function (){
var s__40120__$1 = s__40120;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__40120__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__40131 = cljs.core.first(xs__6360__auto__);
var map__40131__$1 = cljs.core.__destructure_map(map__40131);
var src = map__40131__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40131__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40131__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__40120__$1,map__40131,map__40131__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40118,map__40118__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40119_$_iter__40121(s__40122){
return (new cljs.core.LazySeq(null,((function (s__40120__$1,map__40131,map__40131__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40118,map__40118__$1,msg,info,reload_info){
return (function (){
var s__40122__$1 = s__40122;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__40122__$1);
if(temp__5804__auto____$1){
var s__40122__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40122__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40122__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40124 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40123 = (0);
while(true){
if((i__40123 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__40123);
cljs.core.chunk_append(b__40124,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__41068 = (i__40123 + (1));
i__40123 = G__41068;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40124),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40119_$_iter__40121(cljs.core.chunk_rest(s__40122__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40124),null);
}
} else {
var warning = cljs.core.first(s__40122__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40119_$_iter__40121(cljs.core.rest(s__40122__$2)));
}
} else {
return null;
}
break;
}
});})(s__40120__$1,map__40131,map__40131__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40118,map__40118__$1,msg,info,reload_info))
,null,null));
});})(s__40120__$1,map__40131,map__40131__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40118,map__40118__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40119(cljs.core.rest(s__40120__$1)));
} else {
var G__41071 = cljs.core.rest(s__40120__$1);
s__40120__$1 = G__41071;
continue;
}
} else {
var G__41074 = cljs.core.rest(s__40120__$1);
s__40120__$1 = G__41074;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__40158_41075 = cljs.core.seq(warnings);
var chunk__40159_41076 = null;
var count__40160_41077 = (0);
var i__40161_41078 = (0);
while(true){
if((i__40161_41078 < count__40160_41077)){
var map__40172_41079 = chunk__40159_41076.cljs$core$IIndexed$_nth$arity$2(null,i__40161_41078);
var map__40172_41080__$1 = cljs.core.__destructure_map(map__40172_41079);
var w_41081 = map__40172_41080__$1;
var msg_41082__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40172_41080__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40172_41080__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40172_41080__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40172_41080__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41085)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41083),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41084),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41082__$1)].join(''));


var G__41088 = seq__40158_41075;
var G__41089 = chunk__40159_41076;
var G__41090 = count__40160_41077;
var G__41091 = (i__40161_41078 + (1));
seq__40158_41075 = G__41088;
chunk__40159_41076 = G__41089;
count__40160_41077 = G__41090;
i__40161_41078 = G__41091;
continue;
} else {
var temp__5804__auto___41092 = cljs.core.seq(seq__40158_41075);
if(temp__5804__auto___41092){
var seq__40158_41093__$1 = temp__5804__auto___41092;
if(cljs.core.chunked_seq_QMARK_(seq__40158_41093__$1)){
var c__5568__auto___41094 = cljs.core.chunk_first(seq__40158_41093__$1);
var G__41095 = cljs.core.chunk_rest(seq__40158_41093__$1);
var G__41096 = c__5568__auto___41094;
var G__41097 = cljs.core.count(c__5568__auto___41094);
var G__41098 = (0);
seq__40158_41075 = G__41095;
chunk__40159_41076 = G__41096;
count__40160_41077 = G__41097;
i__40161_41078 = G__41098;
continue;
} else {
var map__40181_41099 = cljs.core.first(seq__40158_41093__$1);
var map__40181_41100__$1 = cljs.core.__destructure_map(map__40181_41099);
var w_41101 = map__40181_41100__$1;
var msg_41102__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40181_41100__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40181_41100__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40181_41100__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40181_41100__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41105)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41103),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41104),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41102__$1)].join(''));


var G__41108 = cljs.core.next(seq__40158_41093__$1);
var G__41109 = null;
var G__41110 = (0);
var G__41111 = (0);
seq__40158_41075 = G__41108;
chunk__40159_41076 = G__41109;
count__40160_41077 = G__41110;
i__40161_41078 = G__41111;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__40114_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__40114_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__40210){
var map__40211 = p__40210;
var map__40211__$1 = cljs.core.__destructure_map(map__40211);
var msg = map__40211__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40211__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40211__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__40213 = cljs.core.seq(updates);
var chunk__40216 = null;
var count__40217 = (0);
var i__40218 = (0);
while(true){
if((i__40218 < count__40217)){
var path = chunk__40216.cljs$core$IIndexed$_nth$arity$2(null,i__40218);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40577_41117 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40581_41118 = null;
var count__40582_41119 = (0);
var i__40583_41120 = (0);
while(true){
if((i__40583_41120 < count__40582_41119)){
var node_41121 = chunk__40581_41118.cljs$core$IIndexed$_nth$arity$2(null,i__40583_41120);
if(cljs.core.not(node_41121.shadow$old)){
var path_match_41122 = shadow.cljs.devtools.client.browser.match_paths(node_41121.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41122)){
var new_link_41124 = (function (){var G__40673 = node_41121.cloneNode(true);
G__40673.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41122),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40673;
})();
(node_41121.shadow$old = true);

(new_link_41124.onload = ((function (seq__40577_41117,chunk__40581_41118,count__40582_41119,i__40583_41120,seq__40213,chunk__40216,count__40217,i__40218,new_link_41124,path_match_41122,node_41121,path,map__40211,map__40211__$1,msg,updates,reload_info){
return (function (e){
var seq__40678_41126 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40680_41127 = null;
var count__40681_41128 = (0);
var i__40682_41129 = (0);
while(true){
if((i__40682_41129 < count__40681_41128)){
var map__40693_41130 = chunk__40680_41127.cljs$core$IIndexed$_nth$arity$2(null,i__40682_41129);
var map__40693_41131__$1 = cljs.core.__destructure_map(map__40693_41130);
var task_41132 = map__40693_41131__$1;
var fn_str_41133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40693_41131__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40693_41131__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41135 = goog.getObjectByName(fn_str_41133,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41134)].join(''));

(fn_obj_41135.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41135.cljs$core$IFn$_invoke$arity$2(path,new_link_41124) : fn_obj_41135.call(null,path,new_link_41124));


var G__41136 = seq__40678_41126;
var G__41137 = chunk__40680_41127;
var G__41138 = count__40681_41128;
var G__41139 = (i__40682_41129 + (1));
seq__40678_41126 = G__41136;
chunk__40680_41127 = G__41137;
count__40681_41128 = G__41138;
i__40682_41129 = G__41139;
continue;
} else {
var temp__5804__auto___41140 = cljs.core.seq(seq__40678_41126);
if(temp__5804__auto___41140){
var seq__40678_41141__$1 = temp__5804__auto___41140;
if(cljs.core.chunked_seq_QMARK_(seq__40678_41141__$1)){
var c__5568__auto___41142 = cljs.core.chunk_first(seq__40678_41141__$1);
var G__41143 = cljs.core.chunk_rest(seq__40678_41141__$1);
var G__41144 = c__5568__auto___41142;
var G__41145 = cljs.core.count(c__5568__auto___41142);
var G__41146 = (0);
seq__40678_41126 = G__41143;
chunk__40680_41127 = G__41144;
count__40681_41128 = G__41145;
i__40682_41129 = G__41146;
continue;
} else {
var map__40698_41147 = cljs.core.first(seq__40678_41141__$1);
var map__40698_41148__$1 = cljs.core.__destructure_map(map__40698_41147);
var task_41149 = map__40698_41148__$1;
var fn_str_41150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40698_41148__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40698_41148__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41152 = goog.getObjectByName(fn_str_41150,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41151)].join(''));

(fn_obj_41152.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41152.cljs$core$IFn$_invoke$arity$2(path,new_link_41124) : fn_obj_41152.call(null,path,new_link_41124));


var G__41153 = cljs.core.next(seq__40678_41141__$1);
var G__41154 = null;
var G__41155 = (0);
var G__41156 = (0);
seq__40678_41126 = G__41153;
chunk__40680_41127 = G__41154;
count__40681_41128 = G__41155;
i__40682_41129 = G__41156;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41121);
});})(seq__40577_41117,chunk__40581_41118,count__40582_41119,i__40583_41120,seq__40213,chunk__40216,count__40217,i__40218,new_link_41124,path_match_41122,node_41121,path,map__40211,map__40211__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41122], 0));

goog.dom.insertSiblingAfter(new_link_41124,node_41121);


var G__41158 = seq__40577_41117;
var G__41159 = chunk__40581_41118;
var G__41160 = count__40582_41119;
var G__41161 = (i__40583_41120 + (1));
seq__40577_41117 = G__41158;
chunk__40581_41118 = G__41159;
count__40582_41119 = G__41160;
i__40583_41120 = G__41161;
continue;
} else {
var G__41162 = seq__40577_41117;
var G__41163 = chunk__40581_41118;
var G__41164 = count__40582_41119;
var G__41165 = (i__40583_41120 + (1));
seq__40577_41117 = G__41162;
chunk__40581_41118 = G__41163;
count__40582_41119 = G__41164;
i__40583_41120 = G__41165;
continue;
}
} else {
var G__41166 = seq__40577_41117;
var G__41167 = chunk__40581_41118;
var G__41168 = count__40582_41119;
var G__41169 = (i__40583_41120 + (1));
seq__40577_41117 = G__41166;
chunk__40581_41118 = G__41167;
count__40582_41119 = G__41168;
i__40583_41120 = G__41169;
continue;
}
} else {
var temp__5804__auto___41170 = cljs.core.seq(seq__40577_41117);
if(temp__5804__auto___41170){
var seq__40577_41171__$1 = temp__5804__auto___41170;
if(cljs.core.chunked_seq_QMARK_(seq__40577_41171__$1)){
var c__5568__auto___41172 = cljs.core.chunk_first(seq__40577_41171__$1);
var G__41173 = cljs.core.chunk_rest(seq__40577_41171__$1);
var G__41174 = c__5568__auto___41172;
var G__41175 = cljs.core.count(c__5568__auto___41172);
var G__41176 = (0);
seq__40577_41117 = G__41173;
chunk__40581_41118 = G__41174;
count__40582_41119 = G__41175;
i__40583_41120 = G__41176;
continue;
} else {
var node_41177 = cljs.core.first(seq__40577_41171__$1);
if(cljs.core.not(node_41177.shadow$old)){
var path_match_41179 = shadow.cljs.devtools.client.browser.match_paths(node_41177.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41179)){
var new_link_41180 = (function (){var G__40702 = node_41177.cloneNode(true);
G__40702.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41179),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40702;
})();
(node_41177.shadow$old = true);

(new_link_41180.onload = ((function (seq__40577_41117,chunk__40581_41118,count__40582_41119,i__40583_41120,seq__40213,chunk__40216,count__40217,i__40218,new_link_41180,path_match_41179,node_41177,seq__40577_41171__$1,temp__5804__auto___41170,path,map__40211,map__40211__$1,msg,updates,reload_info){
return (function (e){
var seq__40715_41183 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40717_41184 = null;
var count__40718_41185 = (0);
var i__40719_41186 = (0);
while(true){
if((i__40719_41186 < count__40718_41185)){
var map__40739_41188 = chunk__40717_41184.cljs$core$IIndexed$_nth$arity$2(null,i__40719_41186);
var map__40739_41189__$1 = cljs.core.__destructure_map(map__40739_41188);
var task_41190 = map__40739_41189__$1;
var fn_str_41191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40739_41189__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40739_41189__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41193 = goog.getObjectByName(fn_str_41191,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41192)].join(''));

(fn_obj_41193.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41193.cljs$core$IFn$_invoke$arity$2(path,new_link_41180) : fn_obj_41193.call(null,path,new_link_41180));


var G__41194 = seq__40715_41183;
var G__41195 = chunk__40717_41184;
var G__41196 = count__40718_41185;
var G__41197 = (i__40719_41186 + (1));
seq__40715_41183 = G__41194;
chunk__40717_41184 = G__41195;
count__40718_41185 = G__41196;
i__40719_41186 = G__41197;
continue;
} else {
var temp__5804__auto___41198__$1 = cljs.core.seq(seq__40715_41183);
if(temp__5804__auto___41198__$1){
var seq__40715_41200__$1 = temp__5804__auto___41198__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40715_41200__$1)){
var c__5568__auto___41201 = cljs.core.chunk_first(seq__40715_41200__$1);
var G__41204 = cljs.core.chunk_rest(seq__40715_41200__$1);
var G__41205 = c__5568__auto___41201;
var G__41206 = cljs.core.count(c__5568__auto___41201);
var G__41207 = (0);
seq__40715_41183 = G__41204;
chunk__40717_41184 = G__41205;
count__40718_41185 = G__41206;
i__40719_41186 = G__41207;
continue;
} else {
var map__40750_41208 = cljs.core.first(seq__40715_41200__$1);
var map__40750_41209__$1 = cljs.core.__destructure_map(map__40750_41208);
var task_41210 = map__40750_41209__$1;
var fn_str_41211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40750_41209__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40750_41209__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41215 = goog.getObjectByName(fn_str_41211,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41212)].join(''));

(fn_obj_41215.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41215.cljs$core$IFn$_invoke$arity$2(path,new_link_41180) : fn_obj_41215.call(null,path,new_link_41180));


var G__41216 = cljs.core.next(seq__40715_41200__$1);
var G__41217 = null;
var G__41218 = (0);
var G__41219 = (0);
seq__40715_41183 = G__41216;
chunk__40717_41184 = G__41217;
count__40718_41185 = G__41218;
i__40719_41186 = G__41219;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41177);
});})(seq__40577_41117,chunk__40581_41118,count__40582_41119,i__40583_41120,seq__40213,chunk__40216,count__40217,i__40218,new_link_41180,path_match_41179,node_41177,seq__40577_41171__$1,temp__5804__auto___41170,path,map__40211,map__40211__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41179], 0));

goog.dom.insertSiblingAfter(new_link_41180,node_41177);


var G__41221 = cljs.core.next(seq__40577_41171__$1);
var G__41222 = null;
var G__41223 = (0);
var G__41224 = (0);
seq__40577_41117 = G__41221;
chunk__40581_41118 = G__41222;
count__40582_41119 = G__41223;
i__40583_41120 = G__41224;
continue;
} else {
var G__41225 = cljs.core.next(seq__40577_41171__$1);
var G__41226 = null;
var G__41227 = (0);
var G__41228 = (0);
seq__40577_41117 = G__41225;
chunk__40581_41118 = G__41226;
count__40582_41119 = G__41227;
i__40583_41120 = G__41228;
continue;
}
} else {
var G__41229 = cljs.core.next(seq__40577_41171__$1);
var G__41230 = null;
var G__41231 = (0);
var G__41232 = (0);
seq__40577_41117 = G__41229;
chunk__40581_41118 = G__41230;
count__40582_41119 = G__41231;
i__40583_41120 = G__41232;
continue;
}
}
} else {
}
}
break;
}


var G__41234 = seq__40213;
var G__41235 = chunk__40216;
var G__41236 = count__40217;
var G__41237 = (i__40218 + (1));
seq__40213 = G__41234;
chunk__40216 = G__41235;
count__40217 = G__41236;
i__40218 = G__41237;
continue;
} else {
var G__41238 = seq__40213;
var G__41239 = chunk__40216;
var G__41240 = count__40217;
var G__41241 = (i__40218 + (1));
seq__40213 = G__41238;
chunk__40216 = G__41239;
count__40217 = G__41240;
i__40218 = G__41241;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40213);
if(temp__5804__auto__){
var seq__40213__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40213__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40213__$1);
var G__41244 = cljs.core.chunk_rest(seq__40213__$1);
var G__41245 = c__5568__auto__;
var G__41246 = cljs.core.count(c__5568__auto__);
var G__41247 = (0);
seq__40213 = G__41244;
chunk__40216 = G__41245;
count__40217 = G__41246;
i__40218 = G__41247;
continue;
} else {
var path = cljs.core.first(seq__40213__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40758_41248 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40762_41249 = null;
var count__40763_41250 = (0);
var i__40764_41251 = (0);
while(true){
if((i__40764_41251 < count__40763_41250)){
var node_41252 = chunk__40762_41249.cljs$core$IIndexed$_nth$arity$2(null,i__40764_41251);
if(cljs.core.not(node_41252.shadow$old)){
var path_match_41253 = shadow.cljs.devtools.client.browser.match_paths(node_41252.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41253)){
var new_link_41254 = (function (){var G__40838 = node_41252.cloneNode(true);
G__40838.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41253),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40838;
})();
(node_41252.shadow$old = true);

(new_link_41254.onload = ((function (seq__40758_41248,chunk__40762_41249,count__40763_41250,i__40764_41251,seq__40213,chunk__40216,count__40217,i__40218,new_link_41254,path_match_41253,node_41252,path,seq__40213__$1,temp__5804__auto__,map__40211,map__40211__$1,msg,updates,reload_info){
return (function (e){
var seq__40841_41259 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40843_41260 = null;
var count__40844_41261 = (0);
var i__40845_41262 = (0);
while(true){
if((i__40845_41262 < count__40844_41261)){
var map__40860_41263 = chunk__40843_41260.cljs$core$IIndexed$_nth$arity$2(null,i__40845_41262);
var map__40860_41264__$1 = cljs.core.__destructure_map(map__40860_41263);
var task_41265 = map__40860_41264__$1;
var fn_str_41266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40860_41264__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40860_41264__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41268 = goog.getObjectByName(fn_str_41266,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41267)].join(''));

(fn_obj_41268.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41268.cljs$core$IFn$_invoke$arity$2(path,new_link_41254) : fn_obj_41268.call(null,path,new_link_41254));


var G__41269 = seq__40841_41259;
var G__41270 = chunk__40843_41260;
var G__41271 = count__40844_41261;
var G__41272 = (i__40845_41262 + (1));
seq__40841_41259 = G__41269;
chunk__40843_41260 = G__41270;
count__40844_41261 = G__41271;
i__40845_41262 = G__41272;
continue;
} else {
var temp__5804__auto___41273__$1 = cljs.core.seq(seq__40841_41259);
if(temp__5804__auto___41273__$1){
var seq__40841_41274__$1 = temp__5804__auto___41273__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40841_41274__$1)){
var c__5568__auto___41275 = cljs.core.chunk_first(seq__40841_41274__$1);
var G__41276 = cljs.core.chunk_rest(seq__40841_41274__$1);
var G__41277 = c__5568__auto___41275;
var G__41278 = cljs.core.count(c__5568__auto___41275);
var G__41279 = (0);
seq__40841_41259 = G__41276;
chunk__40843_41260 = G__41277;
count__40844_41261 = G__41278;
i__40845_41262 = G__41279;
continue;
} else {
var map__40862_41280 = cljs.core.first(seq__40841_41274__$1);
var map__40862_41281__$1 = cljs.core.__destructure_map(map__40862_41280);
var task_41282 = map__40862_41281__$1;
var fn_str_41283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40862_41281__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40862_41281__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41285 = goog.getObjectByName(fn_str_41283,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41284)].join(''));

(fn_obj_41285.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41285.cljs$core$IFn$_invoke$arity$2(path,new_link_41254) : fn_obj_41285.call(null,path,new_link_41254));


var G__41286 = cljs.core.next(seq__40841_41274__$1);
var G__41287 = null;
var G__41288 = (0);
var G__41289 = (0);
seq__40841_41259 = G__41286;
chunk__40843_41260 = G__41287;
count__40844_41261 = G__41288;
i__40845_41262 = G__41289;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41252);
});})(seq__40758_41248,chunk__40762_41249,count__40763_41250,i__40764_41251,seq__40213,chunk__40216,count__40217,i__40218,new_link_41254,path_match_41253,node_41252,path,seq__40213__$1,temp__5804__auto__,map__40211,map__40211__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41253], 0));

goog.dom.insertSiblingAfter(new_link_41254,node_41252);


var G__41290 = seq__40758_41248;
var G__41291 = chunk__40762_41249;
var G__41292 = count__40763_41250;
var G__41293 = (i__40764_41251 + (1));
seq__40758_41248 = G__41290;
chunk__40762_41249 = G__41291;
count__40763_41250 = G__41292;
i__40764_41251 = G__41293;
continue;
} else {
var G__41294 = seq__40758_41248;
var G__41295 = chunk__40762_41249;
var G__41296 = count__40763_41250;
var G__41297 = (i__40764_41251 + (1));
seq__40758_41248 = G__41294;
chunk__40762_41249 = G__41295;
count__40763_41250 = G__41296;
i__40764_41251 = G__41297;
continue;
}
} else {
var G__41298 = seq__40758_41248;
var G__41299 = chunk__40762_41249;
var G__41300 = count__40763_41250;
var G__41301 = (i__40764_41251 + (1));
seq__40758_41248 = G__41298;
chunk__40762_41249 = G__41299;
count__40763_41250 = G__41300;
i__40764_41251 = G__41301;
continue;
}
} else {
var temp__5804__auto___41302__$1 = cljs.core.seq(seq__40758_41248);
if(temp__5804__auto___41302__$1){
var seq__40758_41303__$1 = temp__5804__auto___41302__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40758_41303__$1)){
var c__5568__auto___41304 = cljs.core.chunk_first(seq__40758_41303__$1);
var G__41305 = cljs.core.chunk_rest(seq__40758_41303__$1);
var G__41306 = c__5568__auto___41304;
var G__41307 = cljs.core.count(c__5568__auto___41304);
var G__41308 = (0);
seq__40758_41248 = G__41305;
chunk__40762_41249 = G__41306;
count__40763_41250 = G__41307;
i__40764_41251 = G__41308;
continue;
} else {
var node_41309 = cljs.core.first(seq__40758_41303__$1);
if(cljs.core.not(node_41309.shadow$old)){
var path_match_41310 = shadow.cljs.devtools.client.browser.match_paths(node_41309.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41310)){
var new_link_41311 = (function (){var G__40868 = node_41309.cloneNode(true);
G__40868.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41310),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40868;
})();
(node_41309.shadow$old = true);

(new_link_41311.onload = ((function (seq__40758_41248,chunk__40762_41249,count__40763_41250,i__40764_41251,seq__40213,chunk__40216,count__40217,i__40218,new_link_41311,path_match_41310,node_41309,seq__40758_41303__$1,temp__5804__auto___41302__$1,path,seq__40213__$1,temp__5804__auto__,map__40211,map__40211__$1,msg,updates,reload_info){
return (function (e){
var seq__40873_41313 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40875_41314 = null;
var count__40876_41315 = (0);
var i__40877_41316 = (0);
while(true){
if((i__40877_41316 < count__40876_41315)){
var map__40891_41317 = chunk__40875_41314.cljs$core$IIndexed$_nth$arity$2(null,i__40877_41316);
var map__40891_41318__$1 = cljs.core.__destructure_map(map__40891_41317);
var task_41319 = map__40891_41318__$1;
var fn_str_41320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40891_41318__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40891_41318__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41322 = goog.getObjectByName(fn_str_41320,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41321)].join(''));

(fn_obj_41322.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41322.cljs$core$IFn$_invoke$arity$2(path,new_link_41311) : fn_obj_41322.call(null,path,new_link_41311));


var G__41323 = seq__40873_41313;
var G__41324 = chunk__40875_41314;
var G__41325 = count__40876_41315;
var G__41326 = (i__40877_41316 + (1));
seq__40873_41313 = G__41323;
chunk__40875_41314 = G__41324;
count__40876_41315 = G__41325;
i__40877_41316 = G__41326;
continue;
} else {
var temp__5804__auto___41329__$2 = cljs.core.seq(seq__40873_41313);
if(temp__5804__auto___41329__$2){
var seq__40873_41330__$1 = temp__5804__auto___41329__$2;
if(cljs.core.chunked_seq_QMARK_(seq__40873_41330__$1)){
var c__5568__auto___41331 = cljs.core.chunk_first(seq__40873_41330__$1);
var G__41332 = cljs.core.chunk_rest(seq__40873_41330__$1);
var G__41333 = c__5568__auto___41331;
var G__41334 = cljs.core.count(c__5568__auto___41331);
var G__41335 = (0);
seq__40873_41313 = G__41332;
chunk__40875_41314 = G__41333;
count__40876_41315 = G__41334;
i__40877_41316 = G__41335;
continue;
} else {
var map__40897_41336 = cljs.core.first(seq__40873_41330__$1);
var map__40897_41337__$1 = cljs.core.__destructure_map(map__40897_41336);
var task_41338 = map__40897_41337__$1;
var fn_str_41339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40897_41337__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40897_41337__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41341 = goog.getObjectByName(fn_str_41339,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41340)].join(''));

(fn_obj_41341.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41341.cljs$core$IFn$_invoke$arity$2(path,new_link_41311) : fn_obj_41341.call(null,path,new_link_41311));


var G__41345 = cljs.core.next(seq__40873_41330__$1);
var G__41346 = null;
var G__41347 = (0);
var G__41348 = (0);
seq__40873_41313 = G__41345;
chunk__40875_41314 = G__41346;
count__40876_41315 = G__41347;
i__40877_41316 = G__41348;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41309);
});})(seq__40758_41248,chunk__40762_41249,count__40763_41250,i__40764_41251,seq__40213,chunk__40216,count__40217,i__40218,new_link_41311,path_match_41310,node_41309,seq__40758_41303__$1,temp__5804__auto___41302__$1,path,seq__40213__$1,temp__5804__auto__,map__40211,map__40211__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41310], 0));

goog.dom.insertSiblingAfter(new_link_41311,node_41309);


var G__41349 = cljs.core.next(seq__40758_41303__$1);
var G__41350 = null;
var G__41351 = (0);
var G__41352 = (0);
seq__40758_41248 = G__41349;
chunk__40762_41249 = G__41350;
count__40763_41250 = G__41351;
i__40764_41251 = G__41352;
continue;
} else {
var G__41353 = cljs.core.next(seq__40758_41303__$1);
var G__41354 = null;
var G__41355 = (0);
var G__41356 = (0);
seq__40758_41248 = G__41353;
chunk__40762_41249 = G__41354;
count__40763_41250 = G__41355;
i__40764_41251 = G__41356;
continue;
}
} else {
var G__41357 = cljs.core.next(seq__40758_41303__$1);
var G__41358 = null;
var G__41359 = (0);
var G__41360 = (0);
seq__40758_41248 = G__41357;
chunk__40762_41249 = G__41358;
count__40763_41250 = G__41359;
i__40764_41251 = G__41360;
continue;
}
}
} else {
}
}
break;
}


var G__41361 = cljs.core.next(seq__40213__$1);
var G__41362 = null;
var G__41363 = (0);
var G__41364 = (0);
seq__40213 = G__41361;
chunk__40216 = G__41362;
count__40217 = G__41363;
i__40218 = G__41364;
continue;
} else {
var G__41367 = cljs.core.next(seq__40213__$1);
var G__41368 = null;
var G__41369 = (0);
var G__41370 = (0);
seq__40213 = G__41367;
chunk__40216 = G__41368;
count__40217 = G__41369;
i__40218 = G__41370;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__40907){
var map__40908 = p__40907;
var map__40908__$1 = cljs.core.__destructure_map(map__40908);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40908__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__40920){
var map__40921 = p__40920;
var map__40921__$1 = cljs.core.__destructure_map(map__40921);
var _ = map__40921__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40921__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__40926,done,error){
var map__40927 = p__40926;
var map__40927__$1 = cljs.core.__destructure_map(map__40927);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40927__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__40928,done,error){
var map__40929 = p__40928;
var map__40929__$1 = cljs.core.__destructure_map(map__40929);
var msg = map__40929__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40929__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40929__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40929__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__40932){
var map__40933 = p__40932;
var map__40933__$1 = cljs.core.__destructure_map(map__40933);
var src = map__40933__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40933__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__40936 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__40936) : done.call(null,G__40936));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__40950){
var map__40951 = p__40950;
var map__40951__$1 = cljs.core.__destructure_map(map__40951);
var msg__$1 = map__40951__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40951__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e40953){var ex = e40953;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__40961){
var map__40962 = p__40961;
var map__40962__$1 = cljs.core.__destructure_map(map__40962);
var env = map__40962__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40962__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__40973){
var map__40974 = p__40973;
var map__40974__$1 = cljs.core.__destructure_map(map__40974);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40974__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40974__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__40979){
var map__40982 = p__40979;
var map__40982__$1 = cljs.core.__destructure_map(map__40982);
var svc = map__40982__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40982__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
