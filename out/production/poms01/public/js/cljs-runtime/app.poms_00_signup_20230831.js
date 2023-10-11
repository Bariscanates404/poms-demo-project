goog.provide('app.poms_00_signup_20230831');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$slate$dist$index=shadow.js.require("module$node_modules$slate$dist$index", {});
var module$node_modules$slate_react$dist$index=shadow.js.require("module$node_modules$slate_react$dist$index", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
/**
 * See https://reactjs.org/docs/react-dom-client.html#createroot
 */
app.poms_00_signup_20230831.create_root = (function app$poms_00_signup_20230831$create_root(var_args){
var G__88159 = arguments.length;
switch (G__88159) {
case 1:
return app.poms_00_signup_20230831.create_root.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.poms_00_signup_20230831.create_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.poms_00_signup_20230831.create_root.cljs$core$IFn$_invoke$arity$1 = (function (node){
return app.poms_00_signup_20230831.create_root.cljs$core$IFn$_invoke$arity$2(node,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0()));
}));

(app.poms_00_signup_20230831.create_root.cljs$core$IFn$_invoke$arity$2 = (function (node,id_prefix){
return module$node_modules$react_dom$client.createRoot(node,({"identifierPrefix": id_prefix}));
}));

(app.poms_00_signup_20230831.create_root.cljs$lang$maxFixedArity = 2);

app.poms_00_signup_20230831.render = (function app$poms_00_signup_20230831$render(var_args){
var args__5775__auto__ = [];
var len__5769__auto___88171 = arguments.length;
var i__5770__auto___88172 = (0);
while(true){
if((i__5770__auto___88172 < len__5769__auto___88171)){
args__5775__auto__.push((arguments[i__5770__auto___88172]));

var G__88173 = (i__5770__auto___88172 + (1));
i__5770__auto___88172 = G__88173;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return app.poms_00_signup_20230831.render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(app.poms_00_signup_20230831.render.cljs$core$IFn$_invoke$arity$variadic = (function (root,args){
return root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198)], null),args)));
}));

(app.poms_00_signup_20230831.render.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.poms_00_signup_20230831.render.cljs$lang$applyTo = (function (seq88160){
var G__88161 = cljs.core.first(seq88160);
var seq88160__$1 = cljs.core.next(seq88160);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__88161,seq88160__$1);
}));

app.poms_00_signup_20230831.get_text = (function app$poms_00_signup_20230831$get_text(editor){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(editor.children,(0)).children,(0)).text;
});
app.poms_00_signup_20230831.block = (function app$poms_00_signup_20230831$block(data,on_change){
var vec__88163 = module$node_modules$react$index.useState((function (){
return module$node_modules$slate_react$dist$index.withReact(module$node_modules$slate$dist$index.createEditor());
}));
var editor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88163,(0),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$slate_react$dist$index.Slate,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"editor","editor",-989377770),editor,new cljs.core.Keyword(null,"initialValue","initialValue",-951835084),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.Keyword(null,"type","type",1174270348),"paragraph"], null)], null),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (value){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["onChange:",cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(value,(0)).children,(0)).text,".  Not a plain function"], 0));

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(value) : on_change.call(null,value));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$slate_react$dist$index.Editable,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"Enter")){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["onKeyDown: Enter, A plain function. "], 0));
} else {
return null;
}
})], null)], null)], null);
});
app.poms_00_signup_20230831.data = (function app$poms_00_signup_20230831$data(db){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__88166){
var vec__88167 = p__88166;
var _QMARK_bn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88167,(0),null);
var _QMARK_ctg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88167,(1),null);
var _QMARK_pn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88167,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"brand-name","brand-name",-1941457417),_QMARK_bn,new cljs.core.Keyword(null,"category","category",-593092832),_QMARK_ctg,new cljs.core.Keyword(null,"contact-number","contact-number",-1297656204),_QMARK_pn], null);
}),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.str,d.q(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?bn","?bn",-1701397518,null),new cljs.core.Symbol(null,"?ctg","?ctg",-739962572,null),new cljs.core.Symbol(null,"?pn","?pn",704318294,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword("company","id","company/id",1710222807),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword("company","brand-name","company/brand-name",1974923894),new cljs.core.Symbol(null,"?bn","?bn",-1701397518,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword("company","category","company/category",-2046960739),new cljs.core.Symbol(null,"?pr","?pr",773951048,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?pr","?pr",773951048,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?ctg","?ctg",-739962572,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword("company","phonenumber","company/phonenumber",-52046958),new cljs.core.Symbol(null,"?pn","?pn",704318294,null)], null)], null),db)))));
});
app.poms_00_signup_20230831.MyComponent = (function app$poms_00_signup_20230831$MyComponent(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_data_table_component$default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"columns","columns",1998437288),[({"name": "brand-name", "selector": (function (row){
return row.brand_name;
}), "sortable": true}),({"name": "category", "selector": (function (row){
return row.category;
}), "sortable": true}),({"name": "contact-number", "selector": (function (row){
return row.contact_number;
}), "sortable": true})],new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"direction","direction",-633359395),"auto",new cljs.core.Keyword(null,"pagination","pagination",-1553654604),"true"], null)], null);
});
var xs__31734__auto___88174 = (function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid e/server in Clojure code block (use from Electric code only)",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/poms_00_signup_20230831.cljc",new cljs.core.Keyword(null,"line","line",212345235),87,new cljs.core.Keyword(null,"column","column",2078222095),43,new cljs.core.Keyword(null,"end-line","end-line",1837326455),100,new cljs.core.Keyword(null,"end-column","end-column",1425389514),54], null))})();
(new hyperfiddle.electric.impl.runtime.bind.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.for$.map_by,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.identity,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric.impl.compiler","inject","hyperfiddle.electric.impl.compiler/inject",-758137263).cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.compiler._PERCENT_0),(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid e/fn in Clojure code block (use from Electric code only)",cljs.core.PersistentArrayMap.EMPTY)})()),new cljs.core.Keyword("hyperfiddle.electric.impl.compiler","lift","hyperfiddle.electric.impl.compiler/lift",182704237).cljs$core$IFn$_invoke$arity$1(xs__31734__auto___88174)], 0))());

//# sourceMappingURL=app.poms_00_signup_20230831.js.map
