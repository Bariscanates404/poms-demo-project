goog.provide('app.poms_01_login_20230828');
app.poms_01_login_20230828.validation_message = (function app$poms_01_login_20230828$validation_message(username){
var username__$1 = clojure.string.trim(username);
if(cljs.core.empty_QMARK_(username__$1)){
return "Username is required";
} else {
if((!(((((5) <= ((username__$1).length))) && ((((username__$1).length) <= (12))))))){
return "Username must be between 5 and 12 characters.";
} else {
return null;
}
}
});
app.poms_01_login_20230828.password_check = (function app$poms_01_login_20230828$password_check(password){
var missing_conditions = (function (){var G__76458 = cljs.core.PersistentVector.EMPTY;
var G__76458__$1 = ((cljs.core.not(cljs.core.re_matches(/.*[0-9].*/,password)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__76458,"a digit"):G__76458);
var G__76458__$2 = ((cljs.core.not(cljs.core.re_matches(/.*[A-Za-z].*/,password)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__76458__$1,"a letter"):G__76458__$1);
var G__76458__$3 = ((cljs.core.not(cljs.core.re_matches(/.*[^0-9A-Za-z].*/,password)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__76458__$2,"a special character"):G__76458__$2);
if((!(((((5) <= cljs.core.count(password))) && ((cljs.core.count(password) <= (12))))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__76458__$3,"must be between 5-12 characters");
} else {
return G__76458__$3;
}
})();
if(cljs.core.empty_QMARK_(missing_conditions)){
return "";
} else {
return ["Password is missing ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" and ",missing_conditions),"."].join('');
}
});

//# sourceMappingURL=app.poms_01_login_20230828.js.map
