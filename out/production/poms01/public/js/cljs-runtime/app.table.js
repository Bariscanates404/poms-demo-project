goog.provide('app.table');
app.table.find_data = (function app$table$find_data(needle,haystack){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (row){
if(cljs.core.empty_QMARK_(row)){
return true;
} else {
var hay = clojure.string.lower_case(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.vals(row)));
return clojure.string.includes_QMARK_(hay,needle);
}
}),haystack);
});

//# sourceMappingURL=app.table.js.map
