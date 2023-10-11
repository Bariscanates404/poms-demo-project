goog.provide('app.poms_03_crfp_20230906');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$slate$dist$index=shadow.js.require("module$node_modules$slate$dist$index", {});
var module$node_modules$slate_react$dist$index=shadow.js.require("module$node_modules$slate_react$dist$index", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
/**
 * See https://reactjs.org/docs/react-dom-client.html#createroot
 */
app.poms_03_crfp_20230906.create_root = (function app$poms_03_crfp_20230906$create_root(var_args){
var G__81931 = arguments.length;
switch (G__81931) {
case 1:
return app.poms_03_crfp_20230906.create_root.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.poms_03_crfp_20230906.create_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.poms_03_crfp_20230906.create_root.cljs$core$IFn$_invoke$arity$1 = (function (node){
return app.poms_03_crfp_20230906.create_root.cljs$core$IFn$_invoke$arity$2(node,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0()));
}));

(app.poms_03_crfp_20230906.create_root.cljs$core$IFn$_invoke$arity$2 = (function (node,id_prefix){
return module$node_modules$react_dom$client.createRoot(node,({"identifierPrefix": id_prefix}));
}));

(app.poms_03_crfp_20230906.create_root.cljs$lang$maxFixedArity = 2);

app.poms_03_crfp_20230906.render = (function app$poms_03_crfp_20230906$render(var_args){
var args__5775__auto__ = [];
var len__5769__auto___81963 = arguments.length;
var i__5770__auto___81964 = (0);
while(true){
if((i__5770__auto___81964 < len__5769__auto___81963)){
args__5775__auto__.push((arguments[i__5770__auto___81964]));

var G__81965 = (i__5770__auto___81964 + (1));
i__5770__auto___81964 = G__81965;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return app.poms_03_crfp_20230906.render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(app.poms_03_crfp_20230906.render.cljs$core$IFn$_invoke$arity$variadic = (function (root,args){
return root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198)], null),args)));
}));

(app.poms_03_crfp_20230906.render.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.poms_03_crfp_20230906.render.cljs$lang$applyTo = (function (seq81936){
var G__81937 = cljs.core.first(seq81936);
var seq81936__$1 = cljs.core.next(seq81936);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81937,seq81936__$1);
}));

app.poms_03_crfp_20230906.data = (function app$poms_03_crfp_20230906$data(db){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__81941){
var vec__81946 = p__81941;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81946,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81946,(1),null);
var company = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81946,(2),null);
var user__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81946,(3),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"company","company",-340475075),company,new cljs.core.Keyword(null,"user","user",1532431356),user__$1], null);
}),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,d.q(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?pr-id","?pr-id",54861193,null),new cljs.core.Symbol(null,"?pr-t","?pr-t",-1541493866,null),new cljs.core.Symbol(null,"?pr-c","?pr-c",-1086810973,null),new cljs.core.Symbol(null,"?pr-u","?pr-u",-1395253347,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword("project","id","project/id",-791740645),new cljs.core.Symbol(null,"?pr-id","?pr-id",54861193,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword("project","project-title","project/project-title",-1988961324),new cljs.core.Symbol(null,"?pr-t","?pr-t",-1541493866,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword("project","client-company-id","project/client-company-id",404729828),new cljs.core.Symbol(null,"?pr-c-i","?pr-c-i",-266888986,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?pr-c-i","?pr-c-i",-266888986,null),new cljs.core.Keyword("company","brand-name","company/brand-name",1974923894),new cljs.core.Symbol(null,"?pr-c","?pr-c",-1086810973,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword("project","client-user-id","project/client-user-id",-1710873138),new cljs.core.Symbol(null,"?pr-u-i","?pr-u-i",1875422178,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?pr-u-i","?pr-u-i",1875422178,null),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Symbol(null,"?pr-u","?pr-u",-1395253347,null)], null)], null),db)))));
});
app.poms_03_crfp_20230906.MyComponent = (function app$poms_03_crfp_20230906$MyComponent(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_data_table_component$default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"columns","columns",1998437288),[({"name": "project-id", "selector": (function (row){
return row.id;
}), "sortable": true}),({"name": "title", "selector": (function (row){
return row.title;
}), "sortable": true}),({"name": "company", "selector": (function (row){
return row.company;
}), "sortable": true}),({"name": "user", "selector": (function (row){
return row.user;
}), "sortable": true})],new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"direction","direction",-633359395),"auto",new cljs.core.Keyword(null,"pagination","pagination",-1553654604),"true"], null)], null);
});

//# sourceMappingURL=app.poms_03_crfp_20230906.js.map
