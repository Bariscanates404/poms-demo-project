goog.provide('hyperfiddle.electric_client');
/**
 * @define {string}
 */
hyperfiddle.electric_client.VERSION = goog.define("hyperfiddle.electric_client.VERSION","");
hyperfiddle.electric_client.server_url = (function hyperfiddle$electric_client$server_url(){
var url = (new URL(window.location));
var proto = url.protocol;
(url.protocol = (function (){var G__52390 = proto;
switch (G__52390) {
case "http:":
return "ws:";

break;
case "https:":
return "wss:";

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected protocol",proto);

}
})());

url.searchParams.set("HYPERFIDDLE_ELECTRIC_CLIENT_VERSION",hyperfiddle.electric_client.VERSION);

(url.hash = "");

return url.toString();
});
hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = hyperfiddle.electric_client.server_url();
hyperfiddle.electric_client.remove_listeners = (function hyperfiddle$electric_client$remove_listeners(ws){
(ws.onopen = null);

return (ws.onclose = null);
});
hyperfiddle.electric_client.connect = (function hyperfiddle$electric_client$connect(url){
return (function (s,f){
try{var ws = (new WebSocket(url));
(ws.binaryType = "arraybuffer");

(ws.onopen = (function (_){
hyperfiddle.electric_client.remove_listeners(ws);

return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(ws) : s.call(null,ws));
}));

(ws.onclose = (function (_){
hyperfiddle.electric_client.remove_listeners(ws);

return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(null) : s.call(null,null));
}));

return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(WebSocket.CONNECTING,ws.readyState)){
return ws.close();
} else {
return null;
}
});
}catch (e52398){var e = e52398;
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));

return (function (){
return cljs.core.List.EMPTY;
});
}});
});
hyperfiddle.electric_client.wait_for_flush = (function hyperfiddle$electric_client$wait_for_flush(ws){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr52405_block_0 = (function hyperfiddle$electric_client$wait_for_flush_$_cr52405_block_0(cr52405_state){
try{(cr52405_state[(0)] = cr52405_block_1);

return cr52405_state;
}catch (e52425){var cr52405_exception = e52425;
(cr52405_state[(0)] = null);

throw cr52405_exception;
}});
var cr52405_block_1 = (function hyperfiddle$electric_client$wait_for_flush_$_cr52405_block_1(cr52405_state){
try{var cr52405_place_0 = (4096);
var cr52405_place_1 = ws;
var cr52405_place_2 = cr52405_place_1.bufferedAmount;
var cr52405_place_3 = (cr52405_place_0 < cr52405_place_2);
var cr52405_place_4 = null;
if(cr52405_place_3){
(cr52405_state[(0)] = cr52405_block_3);

return cr52405_state;
} else {
(cr52405_state[(0)] = cr52405_block_2);

(cr52405_state[(1)] = cr52405_place_4);

return cr52405_state;
}
}catch (e52426){var cr52405_exception = e52426;
(cr52405_state[(0)] = null);

throw cr52405_exception;
}});
var cr52405_block_2 = (function hyperfiddle$electric_client$wait_for_flush_$_cr52405_block_2(cr52405_state){
try{var cr52405_place_5 = null;
(cr52405_state[(0)] = cr52405_block_5);

(cr52405_state[(1)] = cr52405_place_5);

return cr52405_state;
}catch (e52430){var cr52405_exception = e52430;
(cr52405_state[(0)] = null);

(cr52405_state[(1)] = null);

throw cr52405_exception;
}});
var cr52405_block_3 = (function hyperfiddle$electric_client$wait_for_flush_$_cr52405_block_3(cr52405_state){
try{var cr52405_place_6 = missionary.core.sleep;
var cr52405_place_7 = (50);
var cr52405_place_8 = (function (){var G__52434 = cr52405_place_7;
var fexpr__52433 = cr52405_place_6;
return (fexpr__52433.cljs$core$IFn$_invoke$arity$1 ? fexpr__52433.cljs$core$IFn$_invoke$arity$1(G__52434) : fexpr__52433.call(null,G__52434));
})();
(cr52405_state[(0)] = cr52405_block_4);

return missionary.core.park(cr52405_place_8);
}catch (e52432){var cr52405_exception = e52432;
(cr52405_state[(0)] = null);

throw cr52405_exception;
}});
var cr52405_block_4 = (function hyperfiddle$electric_client$wait_for_flush_$_cr52405_block_4(cr52405_state){
try{var cr52405_place_9 = missionary.core.unpark();
(cr52405_state[(0)] = cr52405_block_1);

return cr52405_state;
}catch (e52435){var cr52405_exception = e52435;
(cr52405_state[(0)] = null);

throw cr52405_exception;
}});
var cr52405_block_5 = (function hyperfiddle$electric_client$wait_for_flush_$_cr52405_block_5(cr52405_state){
try{var cr52405_place_4 = (cr52405_state[(1)]);
(cr52405_state[(0)] = null);

(cr52405_state[(1)] = null);

return cr52405_place_4;
}catch (e52436){var cr52405_exception = e52436;
(cr52405_state[(0)] = null);

(cr52405_state[(1)] = null);

throw cr52405_exception;
}});
return cloroutine.impl.coroutine((function (){var G__52437 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__52437[(0)] = cr52405_block_0);

return G__52437;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.wait_for_close = (function hyperfiddle$electric_client$wait_for_close(ws){
return (function (s,f){
(ws.onclose = (function (e){
(ws.onclose = null);

var G__52441 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),e.code,new cljs.core.Keyword(null,"reason","reason",-2070751759),e.reason], null);
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__52441) : s.call(null,G__52441));
}));

return (function (){
if((ws.onclose == null)){
return null;
} else {
(ws.onclose = null);

var G__52442 = (new missionary.Cancelled());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52442) : f.call(null,G__52442));
}
});
});
});
hyperfiddle.electric_client.payload = (function hyperfiddle$electric_client$payload(x){
return x.data;
});
hyperfiddle.electric_client.send_BANG_ = (function hyperfiddle$electric_client$send_BANG_(ws,msg){
var G__52446 = ws;
G__52446.send(msg);

return G__52446;
});
hyperfiddle.electric_client.send_all = (function hyperfiddle$electric_client$send_all(ws,msgs){
return missionary.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr52448_block_0 = (function hyperfiddle$electric_client$send_all_$_cr52448_block_0(cr52448_state){
try{var cr52448_place_0 = hyperfiddle.electric_client.wait_for_flush;
var cr52448_place_1 = hyperfiddle.electric_client.send_BANG_;
var cr52448_place_2 = ws;
var cr52448_place_3 = hyperfiddle.electric.impl.io.encode;
var cr52448_place_4 = (1);
var cr52448_place_5 = msgs;
(cr52448_state[(0)] = cr52448_block_1);

(cr52448_state[(2)] = cr52448_place_0);

(cr52448_state[(1)] = cr52448_place_1);

(cr52448_state[(4)] = cr52448_place_2);

(cr52448_state[(3)] = cr52448_place_3);

return missionary.core.fork(cr52448_place_4,cr52448_place_5);
}catch (e52475){var cr52448_exception = e52475;
(cr52448_state[(0)] = null);

throw cr52448_exception;
}});
var cr52448_block_1 = (function hyperfiddle$electric_client$send_all_$_cr52448_block_1(cr52448_state){
try{var cr52448_place_1 = (cr52448_state[(1)]);
var cr52448_place_0 = (cr52448_state[(2)]);
var cr52448_place_3 = (cr52448_state[(3)]);
var cr52448_place_2 = (cr52448_state[(4)]);
var cr52448_place_6 = missionary.core.unpark();
var cr52448_place_7 = (function (){var G__52480 = cr52448_place_6;
var fexpr__52479 = cr52448_place_3;
return (fexpr__52479.cljs$core$IFn$_invoke$arity$1 ? fexpr__52479.cljs$core$IFn$_invoke$arity$1(G__52480) : fexpr__52479.call(null,G__52480));
})();
var cr52448_place_8 = (function (){var G__52484 = cr52448_place_2;
var G__52485 = cr52448_place_7;
var fexpr__52483 = cr52448_place_1;
return (fexpr__52483.cljs$core$IFn$_invoke$arity$2 ? fexpr__52483.cljs$core$IFn$_invoke$arity$2(G__52484,G__52485) : fexpr__52483.call(null,G__52484,G__52485));
})();
var cr52448_place_9 = (function (){var G__52487 = cr52448_place_8;
var fexpr__52486 = cr52448_place_0;
return (fexpr__52486.cljs$core$IFn$_invoke$arity$1 ? fexpr__52486.cljs$core$IFn$_invoke$arity$1(G__52487) : fexpr__52486.call(null,G__52487));
})();
(cr52448_state[(0)] = cr52448_block_2);

(cr52448_state[(1)] = null);

(cr52448_state[(2)] = null);

(cr52448_state[(3)] = null);

(cr52448_state[(4)] = null);

return missionary.core.park(cr52448_place_9);
}catch (e52476){var cr52448_exception = e52476;
(cr52448_state[(0)] = null);

(cr52448_state[(1)] = null);

(cr52448_state[(2)] = null);

(cr52448_state[(3)] = null);

(cr52448_state[(4)] = null);

throw cr52448_exception;
}});
var cr52448_block_2 = (function hyperfiddle$electric_client$send_all_$_cr52448_block_2(cr52448_state){
try{var cr52448_place_10 = missionary.core.unpark();
(cr52448_state[(0)] = null);

return cr52448_place_10;
}catch (e52490){var cr52448_exception = e52490;
(cr52448_state[(0)] = null);

throw cr52448_exception;
}});
return cloroutine.impl.coroutine((function (){var G__52492 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__52492[(0)] = cr52448_block_0);

return G__52492;
})());
})(),missionary.core.ap_run));
});
/**
 * 
 * server : the server part of the program
 * cb : the callback for incoming messages.
 * msgs : the discrete flow of messages to send, spawned when websocket is connected, cancelled on websocket close.
 * Returns a task producing nil or failing if the websocket was closed before end of reduction.
 */
hyperfiddle.electric_client.connector = (function hyperfiddle$electric_client$connector(server){
return (function (cb,msgs){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr52496_block_5 = (function hyperfiddle$electric_client$connector_$_cr52496_block_5(cr52496_state){
try{var cr52496_place_9 = (cr52496_state[(3)]);
var cr52496_place_34 = cr52496_place_9;
var cr52496_place_35 = (function(){throw cr52496_place_34})();
(cr52496_state[(0)] = null);

(cr52496_state[(1)] = null);

(cr52496_state[(3)] = null);

(cr52496_state[(2)] = null);

(cr52496_state[(4)] = null);

return null;
}catch (e52592){var cr52496_exception = e52592;
(cr52496_state[(0)] = cr52496_block_6);

(cr52496_state[(1)] = true);

(cr52496_state[(3)] = cr52496_exception);

return cr52496_state;
}});
var cr52496_block_2 = (function hyperfiddle$electric_client$connector_$_cr52496_block_2(cr52496_state){
try{var cr52496_place_3 = (cr52496_state[(1)]);
var cr52496_place_8 = cr52496_place_3;
var cr52496_place_9 = null;
var cr52496_place_10 = false;
(cr52496_state[(0)] = cr52496_block_3);

(cr52496_state[(1)] = null);

(cr52496_state[(4)] = cr52496_place_8);

(cr52496_state[(3)] = cr52496_place_9);

(cr52496_state[(1)] = cr52496_place_10);

return cr52496_state;
}catch (e52596){var cr52496_exception = e52596;
(cr52496_state[(0)] = null);

(cr52496_state[(1)] = null);

(cr52496_state[(2)] = null);

throw cr52496_exception;
}});
var cr52496_block_12 = (function hyperfiddle$electric_client$connector_$_cr52496_block_12(cr52496_state){
try{var cr52496_place_7 = (cr52496_state[(2)]);
(cr52496_state[(0)] = null);

(cr52496_state[(2)] = null);

return cr52496_place_7;
}catch (e52601){var cr52496_exception = e52601;
(cr52496_state[(0)] = null);

(cr52496_state[(2)] = null);

throw cr52496_exception;
}});
var cr52496_block_3 = (function hyperfiddle$electric_client$connector_$_cr52496_block_3(cr52496_state){
try{var cr52496_place_8 = (cr52496_state[(4)]);
var cr52496_place_11 = hyperfiddle.electric_client.send_BANG_;
var cr52496_place_12 = cr52496_place_8;
var cr52496_place_13 = hyperfiddle.electric.impl.io.encode;
var cr52496_place_14 = server;
var cr52496_place_15 = (function (){var G__52605 = cr52496_place_14;
var fexpr__52604 = cr52496_place_13;
return (fexpr__52604.cljs$core$IFn$_invoke$arity$1 ? fexpr__52604.cljs$core$IFn$_invoke$arity$1(G__52605) : fexpr__52604.call(null,G__52605));
})();
var cr52496_place_16 = (function (){var G__52607 = cr52496_place_12;
var G__52608 = cr52496_place_15;
var fexpr__52606 = cr52496_place_11;
return (fexpr__52606.cljs$core$IFn$_invoke$arity$2 ? fexpr__52606.cljs$core$IFn$_invoke$arity$2(G__52607,G__52608) : fexpr__52606.call(null,G__52607,G__52608));
})();
var cr52496_place_17 = cr52496_place_8;
var cr52496_place_18 = cljs.core.comp;
var cr52496_place_19 = cb;
var cr52496_place_20 = hyperfiddle.electric.impl.io.decode;
var cr52496_place_21 = hyperfiddle.electric_client.payload;
var cr52496_place_22 = (function (){var G__52610 = cr52496_place_19;
var G__52611 = cr52496_place_20;
var G__52612 = cr52496_place_21;
var fexpr__52609 = cr52496_place_18;
return (fexpr__52609.cljs$core$IFn$_invoke$arity$3 ? fexpr__52609.cljs$core$IFn$_invoke$arity$3(G__52610,G__52611,G__52612) : fexpr__52609.call(null,G__52610,G__52611,G__52612));
})();
var cr52496_place_23 = (cr52496_place_17.onmessage = cr52496_place_22);
var cr52496_place_24 = missionary.core.race;
var cr52496_place_25 = hyperfiddle.electric_client.send_all;
var cr52496_place_26 = cr52496_place_8;
var cr52496_place_27 = msgs;
var cr52496_place_28 = (function (){var G__52614 = cr52496_place_26;
var G__52615 = cr52496_place_27;
var fexpr__52613 = cr52496_place_25;
return (fexpr__52613.cljs$core$IFn$_invoke$arity$2 ? fexpr__52613.cljs$core$IFn$_invoke$arity$2(G__52614,G__52615) : fexpr__52613.call(null,G__52614,G__52615));
})();
var cr52496_place_29 = hyperfiddle.electric_client.wait_for_close;
var cr52496_place_30 = cr52496_place_8;
var cr52496_place_31 = (function (){var G__52619 = cr52496_place_30;
var fexpr__52618 = cr52496_place_29;
return (fexpr__52618.cljs$core$IFn$_invoke$arity$1 ? fexpr__52618.cljs$core$IFn$_invoke$arity$1(G__52619) : fexpr__52618.call(null,G__52619));
})();
var cr52496_place_32 = (function (){var G__52622 = cr52496_place_28;
var G__52623 = cr52496_place_31;
var fexpr__52621 = cr52496_place_24;
return (fexpr__52621.cljs$core$IFn$_invoke$arity$2 ? fexpr__52621.cljs$core$IFn$_invoke$arity$2(G__52622,G__52623) : fexpr__52621.call(null,G__52622,G__52623));
})();
(cr52496_state[(0)] = cr52496_block_4);

return missionary.core.park(cr52496_place_32);
}catch (e52602){var cr52496_exception = e52602;
(cr52496_state[(0)] = cr52496_block_5);

(cr52496_state[(3)] = cr52496_exception);

return cr52496_state;
}});
var cr52496_block_9 = (function hyperfiddle$electric_client$connector_$_cr52496_block_9(cr52496_state){
try{var cr52496_place_49 = null;
(cr52496_state[(0)] = cr52496_block_10);

(cr52496_state[(5)] = cr52496_place_49);

return cr52496_state;
}catch (e52624){var cr52496_exception = e52624;
(cr52496_state[(0)] = null);

(cr52496_state[(1)] = null);

(cr52496_state[(3)] = null);

(cr52496_state[(2)] = null);

(cr52496_state[(5)] = null);

throw cr52496_exception;
}});
var cr52496_block_10 = (function hyperfiddle$electric_client$connector_$_cr52496_block_10(cr52496_state){
try{var cr52496_place_10 = (cr52496_state[(1)]);
var cr52496_place_9 = (cr52496_state[(3)]);
var cr52496_place_42 = (cr52496_state[(5)]);
var cr52496_place_50 = (cljs.core.truth_(cr52496_place_10)?(function(){throw cr52496_place_9})():cr52496_place_9);
(cr52496_state[(0)] = cr52496_block_12);

(cr52496_state[(1)] = null);

(cr52496_state[(3)] = null);

(cr52496_state[(5)] = null);

(cr52496_state[(2)] = cr52496_place_50);

return cr52496_state;
}catch (e52631){var cr52496_exception = e52631;
(cr52496_state[(0)] = null);

(cr52496_state[(1)] = null);

(cr52496_state[(3)] = null);

(cr52496_state[(2)] = null);

(cr52496_state[(5)] = null);

throw cr52496_exception;
}});
var cr52496_block_8 = (function hyperfiddle$electric_client$connector_$_cr52496_block_8(cr52496_state){
try{var cr52496_place_48 = missionary.core.unpark();
(cr52496_state[(0)] = cr52496_block_10);

(cr52496_state[(5)] = cr52496_place_48);

return cr52496_state;
}catch (e52635){var cr52496_exception = e52635;
(cr52496_state[(0)] = null);

(cr52496_state[(1)] = null);

(cr52496_state[(3)] = null);

(cr52496_state[(2)] = null);

(cr52496_state[(5)] = null);

throw cr52496_exception;
}});
var cr52496_block_1 = (function hyperfiddle$electric_client$connector_$_cr52496_block_1(cr52496_state){
try{var cr52496_place_3 = missionary.core.unpark();
var cr52496_place_4 = cr52496_place_3;
var cr52496_place_5 = null;
var cr52496_place_6 = (cr52496_place_4 == cr52496_place_5);
var cr52496_place_7 = null;
if(cr52496_place_6){
(cr52496_state[(0)] = cr52496_block_11);

(cr52496_state[(2)] = cr52496_place_7);

return cr52496_state;
} else {
(cr52496_state[(0)] = cr52496_block_2);

(cr52496_state[(1)] = cr52496_place_3);

(cr52496_state[(2)] = cr52496_place_7);

return cr52496_state;
}
}catch (e52636){var cr52496_exception = e52636;
(cr52496_state[(0)] = null);

throw cr52496_exception;
}});
var cr52496_block_11 = (function hyperfiddle$electric_client$connector_$_cr52496_block_11(cr52496_state){
try{var cr52496_place_51 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
(cr52496_state[(0)] = cr52496_block_12);

(cr52496_state[(2)] = cr52496_place_51);

return cr52496_state;
}catch (e52637){var cr52496_exception = e52637;
(cr52496_state[(0)] = null);

(cr52496_state[(2)] = null);

throw cr52496_exception;
}});
var cr52496_block_6 = (function hyperfiddle$electric_client$connector_$_cr52496_block_6(cr52496_state){
try{var cr52496_place_8 = (cr52496_state[(4)]);
var cr52496_place_36 = cljs.core._EQ_;
var cr52496_place_37 = WebSocket;
var cr52496_place_38 = cr52496_place_37.CLOSED;
var cr52496_place_39 = cr52496_place_8;
var cr52496_place_40 = cr52496_place_39.readyState;
var cr52496_place_41 = (function (){var G__52641 = cr52496_place_38;
var G__52642 = cr52496_place_40;
var fexpr__52640 = cr52496_place_36;
return (fexpr__52640.cljs$core$IFn$_invoke$arity$2 ? fexpr__52640.cljs$core$IFn$_invoke$arity$2(G__52641,G__52642) : fexpr__52640.call(null,G__52641,G__52642));
})();
var cr52496_place_42 = null;
if(cljs.core.truth_(cr52496_place_41)){
(cr52496_state[(0)] = cr52496_block_9);

(cr52496_state[(4)] = null);

(cr52496_state[(5)] = cr52496_place_42);

return cr52496_state;
} else {
(cr52496_state[(0)] = cr52496_block_7);

(cr52496_state[(5)] = cr52496_place_42);

return cr52496_state;
}
}catch (e52639){var cr52496_exception = e52639;
(cr52496_state[(0)] = null);

(cr52496_state[(1)] = null);

(cr52496_state[(3)] = null);

(cr52496_state[(2)] = null);

(cr52496_state[(4)] = null);

throw cr52496_exception;
}});
var cr52496_block_4 = (function hyperfiddle$electric_client$connector_$_cr52496_block_4(cr52496_state){
try{var cr52496_place_33 = missionary.core.unpark();
(cr52496_state[(0)] = cr52496_block_6);

(cr52496_state[(3)] = cr52496_place_33);

return cr52496_state;
}catch (e52643){var cr52496_exception = e52643;
(cr52496_state[(0)] = cr52496_block_5);

(cr52496_state[(3)] = cr52496_exception);

return cr52496_state;
}});
var cr52496_block_7 = (function hyperfiddle$electric_client$connector_$_cr52496_block_7(cr52496_state){
try{var cr52496_place_8 = (cr52496_state[(4)]);
var cr52496_place_43 = cr52496_place_8;
var cr52496_place_44 = cr52496_place_43.close();
var cr52496_place_45 = missionary.core.compel;
var cr52496_place_46 = hyperfiddle.electric_client.wait_for_close;
var cr52496_place_47 = (function (){var G__52651 = cr52496_place_46;
var fexpr__52650 = cr52496_place_45;
return (fexpr__52650.cljs$core$IFn$_invoke$arity$1 ? fexpr__52650.cljs$core$IFn$_invoke$arity$1(G__52651) : fexpr__52650.call(null,G__52651));
})();
(cr52496_state[(0)] = cr52496_block_8);

(cr52496_state[(4)] = null);

return missionary.core.park(cr52496_place_47);
}catch (e52645){var cr52496_exception = e52645;
(cr52496_state[(0)] = null);

(cr52496_state[(1)] = null);

(cr52496_state[(3)] = null);

(cr52496_state[(2)] = null);

(cr52496_state[(4)] = null);

(cr52496_state[(5)] = null);

throw cr52496_exception;
}});
var cr52496_block_0 = (function hyperfiddle$electric_client$connector_$_cr52496_block_0(cr52496_state){
try{var cr52496_place_0 = hyperfiddle.electric_client.connect;
var cr52496_place_1 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr52496_place_2 = (function (){var G__52658 = cr52496_place_1;
var fexpr__52656 = cr52496_place_0;
return (fexpr__52656.cljs$core$IFn$_invoke$arity$1 ? fexpr__52656.cljs$core$IFn$_invoke$arity$1(G__52658) : fexpr__52656.call(null,G__52658));
})();
(cr52496_state[(0)] = cr52496_block_1);

return missionary.core.park(cr52496_place_2);
}catch (e52655){var cr52496_exception = e52655;
(cr52496_state[(0)] = null);

throw cr52496_exception;
}});
return cloroutine.impl.coroutine((function (){var G__52660 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__52660[(0)] = cr52496_block_0);

return G__52660;
})());
})(),missionary.core.sp_run);
});
});
hyperfiddle.electric_client.fib_iter = (function hyperfiddle$electric_client$fib_iter(p__52662){
var vec__52663 = p__52662;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52663,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52663,(1),null);
var G__52666 = b;
switch (G__52666) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,(a + b)], null);

}
});
hyperfiddle.electric_client.fib = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.iterate(hyperfiddle.electric_client.fib_iter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)));
hyperfiddle.electric_client.retry_delays = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,(100)),hyperfiddle.electric_client.fib);
hyperfiddle.electric_client.boot_with_retry = (function hyperfiddle$electric_client$boot_with_retry(client,conn){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr52672_block_4 = (function hyperfiddle$electric_client$boot_with_retry_$_cr52672_block_4(cr52672_state){
try{var cr52672_place_12 = (cr52672_state[(5)]);
var cr52672_place_52 = cr52672_place_12;
var cr52672_place_53 = (function(){throw cr52672_place_52})();
(cr52672_state[(0)] = null);

(cr52672_state[(1)] = null);

(cr52672_state[(4)] = null);

(cr52672_state[(5)] = null);

(cr52672_state[(6)] = null);

(cr52672_state[(2)] = null);

return null;
}catch (e53221){var cr52672_exception = e53221;
(cr52672_state[(0)] = cr52672_block_5);

(cr52672_state[(4)] = true);

(cr52672_state[(5)] = cr52672_exception);

return cr52672_state;
}});
var cr52672_block_17 = (function hyperfiddle$electric_client$boot_with_retry_$_cr52672_block_17(cr52672_state){
try{var cr52672_place_130 = missionary.core.unpark();
(cr52672_state[(0)] = cr52672_block_1);

(cr52672_state[(2)] = cr52672_place_130);

return cr52672_state;
}catch (e53223){var cr52672_exception = e53223;
(cr52672_state[(0)] = null);

(cr52672_state[(1)] = null);

(cr52672_state[(2)] = null);

throw cr52672_exception;
}});
var cr52672_block_2 = (function hyperfiddle$electric_client$boot_with_retry_$_cr52672_block_2(cr52672_state){
try{var cr52672_place_4 = (cr52672_state[(3)]);
var cr52672_place_14 = (function (x){
var fexpr__52819 = (cr52672_place_4[(0)]);
var G__53226 = x;
var fexpr__53225 = fexpr__52819;
return (fexpr__53225.cljs$core$IFn$_invoke$arity$1 ? fexpr__53225.cljs$core$IFn$_invoke$arity$1(G__53226) : fexpr__53225.call(null,G__53226));
});
var cr52672_place_15 = cljs.core.partial;
var cr52672_place_32 = (function (cr52820_state){
try{var cr52820_place_11 = missionary.core.unpark();
var cr52820_place_12 = cr52820_place_11;
var cr52820_place_13 = null;
var G__52939 = cr52820_place_12;
var G__53281 = G__52939;
switch (G__53281) {
case (0):
(cr52820_state[(0)] = cr52672_place_17);

(cr52820_state[(2)] = cr52820_place_13);

return cr52820_state;

break;
case (1):
(cr52820_state[(0)] = cr52672_place_33);

(cr52820_state[(2)] = cr52820_place_13);

return cr52820_state;

break;
default:
(cr52820_state[(0)] = cr52672_place_29);

(cr52820_state[(1)] = null);

(cr52820_state[(1)] = cr52820_place_11);

return cr52820_state;

}
}catch (e53280){var e52938 = e53280;
var cr52820_exception = e52938;
(cr52820_state[(0)] = null);

(cr52820_state[(1)] = null);

throw cr52820_exception;
}});
var cr52672_place_28 = (function (cr52820_state){
try{var cr52820_place_42 = (cr52820_state[(1)]);
(cr52820_state[(0)] = cr52672_place_19);

(cr52820_state[(1)] = null);

(cr52820_state[(4)] = cr52820_place_42);

return cr52820_state;
}catch (e53282){var e52913 = e53282;
var cr52820_exception = e52913;
(cr52820_state[(0)] = null);

(cr52820_state[(4)] = null);

(cr52820_state[(2)] = null);

(cr52820_state[(1)] = null);

throw cr52820_exception;
}});
var cr52672_place_26 = (function (cr52820_state){
try{var cr52820_place_49 = (1);
var cr52820_place_50 = missionary.core.none;
(cr52820_state[(0)] = cr52672_place_30);

return missionary.core.fork(cr52820_place_49,cr52820_place_50);
}catch (e53283){var e52911 = e53283;
var cr52820_exception = e52911;
(cr52820_state[(0)] = null);

(cr52820_state[(4)] = null);

(cr52820_state[(2)] = null);

throw cr52820_exception;
}});
var cr52672_place_23 = (function (cr52820_state){
try{var cr52820_place_23 = missionary.core.unpark();
var cr52820_place_24 = (1);
var cr52820_place_25 = missionary.core.none;
(cr52820_state[(0)] = cr52672_place_25);

return missionary.core.fork(cr52820_place_24,cr52820_place_25);
}catch (e53284){var e52908 = e53284;
var cr52820_exception = e52908;
(cr52820_state[(0)] = null);

(cr52820_state[(2)] = null);

throw cr52820_exception;
}});
var cr52672_place_19 = (function (cr52820_state){
try{var cr52820_place_32 = (cr52820_state[(4)]);
(cr52820_state[(0)] = cr52672_place_21);

(cr52820_state[(4)] = null);

(cr52820_state[(2)] = cr52820_place_32);

return cr52820_state;
}catch (e53285){var e52902 = e53285;
var cr52820_exception = e52902;
(cr52820_state[(0)] = null);

(cr52820_state[(4)] = null);

(cr52820_state[(2)] = null);

throw cr52820_exception;
}});
var cr52672_place_24 = (function (cr52820_state){
try{var cr52820_place_33 = (cr52820_state[(3)]);
var cr52820_place_43 = cr52820_place_33;
(cr52820_state[(0)] = cr52672_place_28);

(cr52820_state[(3)] = null);

(cr52820_state[(1)] = cr52820_place_43);

return cr52820_state;
}catch (e53286){var e52909 = e53286;
var cr52820_exception = e52909;
(cr52820_state[(0)] = null);

(cr52820_state[(4)] = null);

(cr52820_state[(3)] = null);

(cr52820_state[(2)] = null);

(cr52820_state[(1)] = null);

throw cr52820_exception;
}});
var cr52672_place_25 = (function (cr52820_state){
try{var cr52820_place_26 = missionary.core.unpark();
(cr52820_state[(0)] = cr52672_place_21);

(cr52820_state[(2)] = cr52820_place_26);

return cr52820_state;
}catch (e53287){var e52910 = e53287;
var cr52820_exception = e52910;
(cr52820_state[(0)] = null);

(cr52820_state[(2)] = null);

throw cr52820_exception;
}});
var cr52672_place_27 = (function (cr52820_state){
try{var cr52820_place_40 = (cr52820_state[(1)]);
var cr52820_place_44 = "No matching clause: ";
var cr52820_place_45 = cr52820_place_40;
var cr52820_place_46 = [cr52820_place_44,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr52820_place_45)].join('');
var cr52820_place_47 = (new Error(cr52820_place_46));
var cr52820_place_48 = (function(){throw cr52820_place_47})();
(cr52820_state[(0)] = null);

(cr52820_state[(1)] = null);

return null;
}catch (e53288){var e52912 = e53288;
var cr52820_exception = e52912;
(cr52820_state[(0)] = null);

(cr52820_state[(1)] = null);

throw cr52820_exception;
}});
var cr52672_place_34 = (function (cr52820_state){
try{var cr52820_place_4 = (cr52820_state[(1)]);
var cr52820_place_27 = cr52820_place_4;
(cr52820_state[(0)] = cr52672_place_22);

return missionary.core.park(cr52820_place_27);
}catch (e53289){var e52947 = e53289;
var cr52820_exception = e52947;
(cr52820_state[(0)] = null);

(cr52820_state[(1)] = null);

(cr52820_state[(2)] = null);

throw cr52820_exception;
}});
var cr52672_place_20 = (function (cr52820_state){
try{var cr52820_place_40 = missionary.core.unpark();
var cr52820_place_41 = cr52820_place_40;
var cr52820_place_42 = null;
var G__52904 = cr52820_place_41;
var G__53291 = G__52904;
switch (G__53291) {
case (0):
(cr52820_state[(0)] = cr52672_place_24);

(cr52820_state[(1)] = null);

(cr52820_state[(1)] = cr52820_place_42);

return cr52820_state;

break;
case (1):
(cr52820_state[(0)] = cr52672_place_18);

(cr52820_state[(4)] = null);

(cr52820_state[(3)] = null);

return cr52820_state;

break;
default:
(cr52820_state[(0)] = cr52672_place_27);

(cr52820_state[(4)] = null);

(cr52820_state[(1)] = null);

(cr52820_state[(3)] = null);

(cr52820_state[(2)] = null);

(cr52820_state[(1)] = cr52820_place_40);

return cr52820_state;

}
}catch (e53290){var e52903 = e53290;
var cr52820_exception = e52903;
(cr52820_state[(0)] = null);

(cr52820_state[(4)] = null);

(cr52820_state[(1)] = null);

(cr52820_state[(3)] = null);

(cr52820_state[(2)] = null);

throw cr52820_exception;
}});
var cr52672_place_18 = (function (cr52820_state){
try{(cr52820_state[(0)] = cr52672_place_34);

return cr52820_state;
}catch (e53292){var e52901 = e53292;
var cr52820_exception = e52901;
(cr52820_state[(0)] = null);

(cr52820_state[(1)] = null);

(cr52820_state[(2)] = null);

throw cr52820_exception;
}});
var cr52672_place_21 = (function (cr52820_state){
try{var cr52820_place_13 = (cr52820_state[(2)]);
(cr52820_state[(0)] = null);

(cr52820_state[(2)] = null);

return cr52820_place_13;
}catch (e53293){var e52905 = e53293;
var cr52820_exception = e52905;
(cr52820_state[(0)] = null);

(cr52820_state[(2)] = null);

throw cr52820_exception;
}});
var cr52672_place_29 = (function (cr52820_state){
try{var cr52820_place_11 = (cr52820_state[(1)]);
var cr52820_place_52 = "No matching clause: ";
var cr52820_place_53 = cr52820_place_11;
var cr52820_place_54 = [cr52820_place_52,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr52820_place_53)].join('');
var cr52820_place_55 = (new Error(cr52820_place_54));
var cr52820_place_56 = (function(){throw cr52820_place_55})();
(cr52820_state[(0)] = null);

(cr52820_state[(1)] = null);

return null;
}catch (e53294){var e52914 = e53294;
var cr52820_exception = e52914;
(cr52820_state[(0)] = null);

(cr52820_state[(1)] = null);

throw cr52820_exception;
}});
var cr52672_place_33 = (function (cr52820_state){
try{(cr52820_state[(0)] = cr52672_place_34);

return cr52820_state;
}catch (e53295){var e52942 = e53295;
var cr52820_exception = e52942;
(cr52820_state[(0)] = null);

(cr52820_state[(1)] = null);

(cr52820_state[(2)] = null);

throw cr52820_exception;
}});
var cr52672_place_16 = (function (cr52820_state){
try{var cr52820_place_0 = console;
var cr52820_place_1 = "Connected.";
var cr52820_place_2 = cr52820_place_0.log(cr52820_place_1);
var cr52820_place_3 = missionary.core.rdv;
var cr52820_place_4 = (function (){var fexpr__52888 = cr52820_place_3;
var fexpr__53297 = fexpr__52888;
return (fexpr__53297.cljs$core$IFn$_invoke$arity$0 ? fexpr__53297.cljs$core$IFn$_invoke$arity$0() : fexpr__53297.call(null));
})();
var cr52820_place_5 = (2);
var cr52820_place_6 = missionary.core.seed;
var cr52820_place_7 = cljs.core.range;
var cr52820_place_8 = (2);
var cr52820_place_9 = (function (){var G__52890 = cr52820_place_8;
var fexpr__52889 = cr52820_place_7;
var G__53299 = G__52890;
var fexpr__53298 = fexpr__52889;
return (fexpr__53298.cljs$core$IFn$_invoke$arity$1 ? fexpr__53298.cljs$core$IFn$_invoke$arity$1(G__53299) : fexpr__53298.call(null,G__53299));
})();
var cr52820_place_10 = (function (){var G__52892 = cr52820_place_9;
var fexpr__52891 = cr52820_place_6;
var G__53301 = G__52892;
var fexpr__53300 = fexpr__52891;
return (fexpr__53300.cljs$core$IFn$_invoke$arity$1 ? fexpr__53300.cljs$core$IFn$_invoke$arity$1(G__53301) : fexpr__53300.call(null,G__53301));
})();
(cr52820_state[(0)] = cr52672_place_32);

(cr52820_state[(1)] = cr52820_place_4);

return missionary.core.fork(cr52820_place_5,cr52820_place_10);
}catch (e53296){var e52886 = e53296;
var cr52820_exception = e52886;
(cr52820_state[(0)] = null);

throw cr52820_exception;
}});
var cr52672_place_22 = (function (cr52820_state){
try{var cr52820_place_28 = missionary.core.unpark();
var cr52820_place_29 = cr52820_place_28;
var cr52820_place_30 = null;
var cr52820_place_31 = (cr52820_place_29 == cr52820_place_30);
var cr52820_place_32 = null;
if(cr52820_place_31){
(cr52820_state[(0)] = cr52672_place_26);

(cr52820_state[(1)] = null);

(cr52820_state[(4)] = cr52820_place_32);

return cr52820_state;
} else {
(cr52820_state[(0)] = cr52672_place_31);

(cr52820_state[(3)] = cr52820_place_28);

(cr52820_state[(4)] = cr52820_place_32);

return cr52820_state;
}
}catch (e53302){var e52906 = e53302;
var cr52820_exception = e52906;
(cr52820_state[(0)] = null);

(cr52820_state[(1)] = null);

(cr52820_state[(2)] = null);

throw cr52820_exception;
}});
var cr52672_place_17 = (function (cr52820_state){
try{var cr52820_place_4 = (cr52820_state[(1)]);
var cr52820_place_14 = cr52820_place_4;
var cr52820_place_15 = hyperfiddle.electric.impl.runtime.subject_at;
var cr52820_place_16 = cr52672_place_4;
var cr52820_place_17 = (0);
var cr52820_place_18 = (function (){var G__52896 = cr52820_place_16;
var G__52897 = cr52820_place_17;
var fexpr__52895 = cr52820_place_15;
var G__53305 = G__52896;
var G__53306 = G__52897;
var fexpr__53304 = fexpr__52895;
return (fexpr__53304.cljs$core$IFn$_invoke$arity$2 ? fexpr__53304.cljs$core$IFn$_invoke$arity$2(G__53305,G__53306) : fexpr__53304.call(null,G__53305,G__53306));
})();
var cr52820_place_19 = client;
var cr52820_place_20 = cr52820_place_14;
var cr52820_place_21 = cr52820_place_18;
var cr52820_place_22 = (function (){var G__52899 = cr52820_place_20;
var G__52900 = cr52820_place_21;
var fexpr__52898 = cr52820_place_19;
var G__53308 = G__52899;
var G__53309 = G__52900;
var fexpr__53307 = fexpr__52898;
return (fexpr__53307.cljs$core$IFn$_invoke$arity$2 ? fexpr__53307.cljs$core$IFn$_invoke$arity$2(G__53308,G__53309) : fexpr__53307.call(null,G__53308,G__53309));
})();
(cr52820_state[(0)] = cr52672_place_23);

(cr52820_state[(1)] = null);

return missionary.core.park(cr52820_place_22);
}catch (e53303){var e52893 = e53303;
var cr52820_exception = e52893;
(cr52820_state[(0)] = null);

(cr52820_state[(1)] = null);

(cr52820_state[(2)] = null);

throw cr52820_exception;
}});
var cr52672_place_31 = (function (cr52820_state){
try{var cr52820_place_28 = (cr52820_state[(3)]);
var cr52820_place_33 = cr52820_place_28;
var cr52820_place_34 = (1);
var cr52820_place_35 = missionary.core.seed;
var cr52820_place_36 = cljs.core.range;
var cr52820_place_37 = (2);
var cr52820_place_38 = (function (){var G__52929 = cr52820_place_37;
var fexpr__52928 = cr52820_place_36;
var G__53312 = G__52929;
var fexpr__53311 = fexpr__52928;
return (fexpr__53311.cljs$core$IFn$_invoke$arity$1 ? fexpr__53311.cljs$core$IFn$_invoke$arity$1(G__53312) : fexpr__53311.call(null,G__53312));
})();
var cr52820_place_39 = (function (){var G__52932 = cr52820_place_38;
var fexpr__52931 = cr52820_place_35;
var G__53314 = G__52932;
var fexpr__53313 = fexpr__52931;
return (fexpr__53313.cljs$core$IFn$_invoke$arity$1 ? fexpr__53313.cljs$core$IFn$_invoke$arity$1(G__53314) : fexpr__53313.call(null,G__53314));
})();
(cr52820_state[(0)] = cr52672_place_20);

(cr52820_state[(3)] = null);

(cr52820_state[(3)] = cr52820_place_33);

return missionary.core.fork(cr52820_place_34,cr52820_place_39);
}catch (e53310){var e52927 = e53310;
var cr52820_exception = e52927;
(cr52820_state[(0)] = null);

(cr52820_state[(3)] = null);

(cr52820_state[(4)] = null);

(cr52820_state[(1)] = null);

(cr52820_state[(2)] = null);

throw cr52820_exception;
}});
var cr52672_place_30 = (function (cr52820_state){
try{var cr52820_place_51 = missionary.core.unpark();
(cr52820_state[(0)] = cr52672_place_19);

(cr52820_state[(4)] = cr52820_place_51);

return cr52820_state;
}catch (e53315){var e52920 = e53315;
var cr52820_exception = e52920;
(cr52820_state[(0)] = null);

(cr52820_state[(4)] = null);

(cr52820_state[(2)] = null);

throw cr52820_exception;
}});
var cr52672_place_35 = cloroutine.impl.coroutine;
var cr52672_place_36 = cljs.core.object_array;
var cr52672_place_37 = (5);
var cr52672_place_38 = (function (){var G__53317 = cr52672_place_37;
var fexpr__53316 = cr52672_place_36;
return (fexpr__53316.cljs$core$IFn$_invoke$arity$1 ? fexpr__53316.cljs$core$IFn$_invoke$arity$1(G__53317) : fexpr__53316.call(null,G__53317));
})();
var cr52672_place_39 = cr52672_place_38;
var cr52672_place_40 = (0);
var cr52672_place_41 = cr52672_place_16;
var cr52672_place_42 = (cr52672_place_39[cr52672_place_40] = cr52672_place_41);
var cr52672_place_43 = cr52672_place_38;
var cr52672_place_44 = (function (){var G__53319 = cr52672_place_43;
var fexpr__53318 = cr52672_place_35;
return (fexpr__53318.cljs$core$IFn$_invoke$arity$1 ? fexpr__53318.cljs$core$IFn$_invoke$arity$1(G__53319) : fexpr__53318.call(null,G__53319));
})();
var cr52672_place_45 = missionary.core.ap_run;
var cr52672_place_46 = (function (){var G__53321 = cr52672_place_44;
var G__53322 = cr52672_place_45;
var fexpr__53320 = cr52672_place_15;
return (fexpr__53320.cljs$core$IFn$_invoke$arity$2 ? fexpr__53320.cljs$core$IFn$_invoke$arity$2(G__53321,G__53322) : fexpr__53320.call(null,G__53321,G__53322));
})();
var cr52672_place_47 = conn;
var cr52672_place_48 = cr52672_place_14;
var cr52672_place_49 = cr52672_place_46;
var cr52672_place_50 = (function (){var G__53324 = cr52672_place_48;
var G__53325 = cr52672_place_49;
var fexpr__53323 = cr52672_place_47;
return (fexpr__53323.cljs$core$IFn$_invoke$arity$2 ? fexpr__53323.cljs$core$IFn$_invoke$arity$2(G__53324,G__53325) : fexpr__53323.call(null,G__53324,G__53325));
})();
(cr52672_state[(0)] = cr52672_block_3);

(cr52672_state[(3)] = null);

return missionary.core.park(cr52672_place_50);
}catch (e53224){var cr52672_exception = e53224;
(cr52672_state[(0)] = cr52672_block_4);

(cr52672_state[(3)] = null);

(cr52672_state[(5)] = cr52672_exception);

return cr52672_state;
}});
var cr52672_block_19 = (function hyperfiddle$electric_client$boot_with_retry_$_cr52672_block_19(cr52672_state){
try{var cr52672_place_105 = (cr52672_state[(1)]);
(cr52672_state[(0)] = null);

(cr52672_state[(1)] = null);

return cr52672_place_105;
}catch (e53326){var cr52672_exception = e53326;
(cr52672_state[(0)] = null);

(cr52672_state[(1)] = null);

throw cr52672_exception;
}});
var cr52672_block_9 = (function hyperfiddle$electric_client$boot_with_retry_$_cr52672_block_9(cr52672_state){
try{var cr52672_place_79 = cljs.core.ex_info;
var cr52672_place_80 = "Stale client";
var cr52672_place_81 = new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079);
var cr52672_place_82 = new cljs.core.Keyword("hyperfiddle.electric-client","stale-client","hyperfiddle.electric-client/stale-client",-343425405);
var cr52672_place_83 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr52672_place_81,cr52672_place_82]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr52672_place_84 = (function (){var G__53329 = cr52672_place_80;
var G__53330 = cr52672_place_83;
var fexpr__53328 = cr52672_place_79;
return (fexpr__53328.cljs$core$IFn$_invoke$arity$2 ? fexpr__53328.cljs$core$IFn$_invoke$arity$2(G__53329,G__53330) : fexpr__53328.call(null,G__53329,G__53330));
})();
var cr52672_place_85 = (function(){throw cr52672_place_84})();
(cr52672_state[(0)] = null);

return null;
}catch (e53327){var cr52672_exception = e53327;
(cr52672_state[(0)] = null);

throw cr52672_exception;
}});
var cr52672_block_7 = (function hyperfiddle$electric_client$boot_with_retry_$_cr52672_block_7(cr52672_state){
try{var cr52672_place_64 = (cr52672_state[(5)]);
var cr52672_place_69 = cr52672_place_64;
var cr52672_place_70 = cr52672_place_69;
var cr52672_place_71 = cr52672_place_70;
var cr52672_place_72 = null;
var G__53332 = cr52672_place_71;
switch (G__53332) {
case (1005):
case (1006):
(cr52672_state[(0)] = cr52672_block_8);

(cr52672_state[(3)] = null);

(cr52672_state[(5)] = null);

(cr52672_state[(3)] = cr52672_place_72);

return cr52672_state;

break;
case (1008):
(cr52672_state[(0)] = cr52672_block_9);

(cr52672_state[(3)] = null);

(cr52672_state[(5)] = null);

(cr52672_state[(1)] = null);

(cr52672_state[(6)] = null);

(cr52672_state[(4)] = null);

(cr52672_state[(2)] = null);

return cr52672_state;

break;
default:
(cr52672_state[(0)] = cr52672_block_10);

(cr52672_state[(5)] = null);

(cr52672_state[(1)] = null);

(cr52672_state[(6)] = null);

(cr52672_state[(4)] = null);

(cr52672_state[(2)] = null);

(cr52672_state[(1)] = cr52672_place_69);

return cr52672_state;

}
}catch (e53331){var cr52672_exception = e53331;
(cr52672_state[(0)] = null);

(cr52672_state[(3)] = null);

(cr52672_state[(5)] = null);

(cr52672_state[(1)] = null);

(cr52672_state[(6)] = null);

(cr52672_state[(4)] = null);

(cr52672_state[(2)] = null);

throw cr52672_exception;
}});
var cr52672_block_12 = (function hyperfiddle$electric_client$boot_with_retry_$_cr52672_block_12(cr52672_state){
try{var cr52672_place_1 = (cr52672_state[(2)]);
var cr52672_place_97 = console;
var cr52672_place_98 = "Failed to connect.";
var cr52672_place_99 = cr52672_place_97.log(cr52672_place_98);
var cr52672_place_100 = cr52672_place_1;
(cr52672_state[(0)] = cr52672_block_13);

(cr52672_state[(6)] = cr52672_place_100);

return cr52672_state;
}catch (e53333){var cr52672_exception = e53333;
(cr52672_state[(0)] = null);

(cr52672_state[(1)] = null);

(cr52672_state[(6)] = null);

(cr52672_state[(4)] = null);

(cr52672_state[(2)] = null);

throw cr52672_exception;
}});
var cr52672_block_1 = (function hyperfiddle$electric_client$boot_with_retry_$_cr52672_block_1(cr52672_state){
try{var cr52672_place_0 = (cr52672_state[(1)]);
var cr52672_place_2 = cljs.core.object_array;
var cr52672_place_3 = (1);
var cr52672_place_4 = (function (){var G__53336 = cr52672_place_3;
var fexpr__53335 = cr52672_place_2;
return (fexpr__53335.cljs$core$IFn$_invoke$arity$1 ? fexpr__53335.cljs$core$IFn$_invoke$arity$1(G__53336) : fexpr__53335.call(null,G__53336));
})();
var cr52672_place_5 = console;
var cr52672_place_6 = "Connecting...";
var cr52672_place_7 = cr52672_place_5.log(cr52672_place_6);
var cr52672_place_8 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr52672_place_9 = cr52672_place_0;
var cr52672_place_10 = cr52672_place_9;
var cr52672_place_11 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr52672_place_10);
var cr52672_place_12 = null;
var cr52672_place_13 = false;
(cr52672_state[(0)] = cr52672_block_2);

(cr52672_state[(3)] = cr52672_place_4);

(cr52672_state[(4)] = cr52672_place_13);

(cr52672_state[(5)] = cr52672_place_12);

(cr52672_state[(6)] = cr52672_place_8);

return cr52672_state;
}catch (e53334){var cr52672_exception = e53334;
(cr52672_state[(0)] = null);

(cr52672_state[(1)] = null);

(cr52672_state[(2)] = null);

throw cr52672_exception;
}});
var cr52672_block_11 = (function hyperfiddle$electric_client$boot_with_retry_$_cr52672_block_11(cr52672_state){
try{var cr52672_place_72 = (cr52672_state[(3)]);
(cr52672_state[(0)] = cr52672_block_13);

(cr52672_state[(3)] = null);

(cr52672_state[(6)] = cr52672_place_72);

return cr52672_state;
}catch (e53337){var cr52672_exception = e53337;
(cr52672_state[(0)] = null);

(cr52672_state[(1)] = null);

(cr52672_state[(3)] = null);

(cr52672_state[(6)] = null);

(cr52672_state[(4)] = null);

(cr52672_state[(2)] = null);

throw cr52672_exception;
}});
var cr52672_block_15 = (function hyperfiddle$electric_client$boot_with_retry_$_cr52672_block_15(cr52672_state){
try{var cr52672_place_60 = (cr52672_state[(4)]);
var cr52672_place_102 = cr52672_place_60;
var cr52672_place_103 = null;
var cr52672_place_104 = (cr52672_place_102 == cr52672_place_103);
var cr52672_place_105 = null;
if(cr52672_place_104){
(cr52672_state[(0)] = cr52672_block_18);

(cr52672_state[(1)] = null);

(cr52672_state[(4)] = null);

(cr52672_state[(2)] = null);

(cr52672_state[(1)] = cr52672_place_105);

return cr52672_state;
} else {
(cr52672_state[(0)] = cr52672_block_16);

return cr52672_state;
}
}catch (e53338){var cr52672_exception = e53338;
(cr52672_state[(0)] = null);

(cr52672_state[(1)] = null);

(cr52672_state[(4)] = null);

(cr52672_state[(2)] = null);

throw cr52672_exception;
}});
var cr52672_block_14 = (function hyperfiddle$electric_client$boot_with_retry_$_cr52672_block_14(cr52672_state){
try{var cr52672_place_101 = null;
(cr52672_state[(0)] = cr52672_block_15);

(cr52672_state[(4)] = cr52672_place_101);

return cr52672_state;
}catch (e53339){var cr52672_exception = e53339;
(cr52672_state[(0)] = null);

(cr52672_state[(1)] = null);

(cr52672_state[(4)] = null);

(cr52672_state[(2)] = null);

throw cr52672_exception;
}});
var cr52672_block_6 = (function hyperfiddle$electric_client$boot_with_retry_$_cr52672_block_6(cr52672_state){
try{var cr52672_place_56 = (cr52672_state[(3)]);
var cr52672_place_61 = cr52672_place_56;
var cr52672_place_62 = new cljs.core.Keyword(null,"code","code",1586293142);
var cr52672_place_63 = cr52672_place_61;
var cr52672_place_64 = cr52672_place_62.cljs$core$IFn$_invoke$arity$1(cr52672_place_63);
var cr52672_place_65 = cr52672_place_64;
var cr52672_place_66 = null;
var cr52672_place_67 = (cr52672_place_65 == cr52672_place_66);
var cr52672_place_68 = null;
if(cr52672_place_67){
(cr52672_state[(0)] = cr52672_block_12);

(cr52672_state[(3)] = null);

(cr52672_state[(6)] = cr52672_place_68);

return cr52672_state;
} else {
(cr52672_state[(0)] = cr52672_block_7);

(cr52672_state[(3)] = null);

(cr52672_state[(3)] = cr52672_place_61);

(cr52672_state[(5)] = cr52672_place_64);

(cr52672_state[(6)] = cr52672_place_68);

return cr52672_state;
}
}catch (e53340){var cr52672_exception = e53340;
(cr52672_state[(0)] = null);

(cr52672_state[(1)] = null);

(cr52672_state[(3)] = null);

(cr52672_state[(4)] = null);

(cr52672_state[(2)] = null);

throw cr52672_exception;
}});
var cr52672_block_10 = (function hyperfiddle$electric_client$boot_with_retry_$_cr52672_block_10(cr52672_state){
try{var cr52672_place_61 = (cr52672_state[(3)]);
var cr52672_place_69 = (cr52672_state[(1)]);
var cr52672_place_86 = cljs.core.ex_info;
var cr52672_place_87 = "Remote error - ";
var cr52672_place_88 = cr52672_place_69;
var cr52672_place_89 = " ";
var cr52672_place_90 = new cljs.core.Keyword(null,"reason","reason",-2070751759);
var cr52672_place_91 = cr52672_place_61;
var cr52672_place_92 = cr52672_place_90.cljs$core$IFn$_invoke$arity$1(cr52672_place_91);
var cr52672_place_93 = [cr52672_place_87,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr52672_place_88),cr52672_place_89,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr52672_place_92)].join('');
var cr52672_place_94 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr52672_place_95 = (function (){var G__53343 = cr52672_place_93;
var G__53344 = cr52672_place_94;
var fexpr__53342 = cr52672_place_86;
return (fexpr__53342.cljs$core$IFn$_invoke$arity$2 ? fexpr__53342.cljs$core$IFn$_invoke$arity$2(G__53343,G__53344) : fexpr__53342.call(null,G__53343,G__53344));
})();
var cr52672_place_96 = (function(){throw cr52672_place_95})();
(cr52672_state[(0)] = null);

(cr52672_state[(3)] = null);

(cr52672_state[(1)] = null);

return null;
}catch (e53341){var cr52672_exception = e53341;
(cr52672_state[(0)] = null);

(cr52672_state[(3)] = null);

(cr52672_state[(1)] = null);

throw cr52672_exception;
}});
var cr52672_block_16 = (function hyperfiddle$electric_client$boot_with_retry_$_cr52672_block_16(cr52672_state){
try{var cr52672_place_60 = (cr52672_state[(4)]);
var cr52672_place_106 = cr52672_place_60;
var cr52672_place_107 = cljs.core.seq;
var cr52672_place_108 = cr52672_place_106;
var cr52672_place_109 = (function (){var G__53347 = cr52672_place_108;
var fexpr__53346 = cr52672_place_107;
return (fexpr__53346.cljs$core$IFn$_invoke$arity$1 ? fexpr__53346.cljs$core$IFn$_invoke$arity$1(G__53347) : fexpr__53346.call(null,G__53347));
})();
var cr52672_place_110 = cljs.core.first;
var cr52672_place_111 = cr52672_place_109;
var cr52672_place_112 = (function (){var G__53349 = cr52672_place_111;
var fexpr__53348 = cr52672_place_110;
return (fexpr__53348.cljs$core$IFn$_invoke$arity$1 ? fexpr__53348.cljs$core$IFn$_invoke$arity$1(G__53349) : fexpr__53348.call(null,G__53349));
})();
var cr52672_place_113 = cljs.core.next;
var cr52672_place_114 = cr52672_place_109;
var cr52672_place_115 = (function (){var G__53351 = cr52672_place_114;
var fexpr__53350 = cr52672_place_113;
return (fexpr__53350.cljs$core$IFn$_invoke$arity$1 ? fexpr__53350.cljs$core$IFn$_invoke$arity$1(G__53351) : fexpr__53350.call(null,G__53351));
})();
var cr52672_place_116 = cr52672_place_112;
var cr52672_place_117 = cr52672_place_115;
var cr52672_place_118 = console;
var cr52672_place_119 = "Next attempt in ";
var cr52672_place_120 = cr52672_place_116;
var cr52672_place_121 = (1000);
var cr52672_place_122 = (cr52672_place_120 / cr52672_place_121);
var cr52672_place_123 = " seconds.";
var cr52672_place_124 = [cr52672_place_119,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr52672_place_122),cr52672_place_123].join('');
var cr52672_place_125 = cr52672_place_118.log(cr52672_place_124);
var cr52672_place_126 = missionary.core.sleep;
var cr52672_place_127 = cr52672_place_116;
var cr52672_place_128 = cr52672_place_117;
var cr52672_place_129 = (function (){var G__53353 = cr52672_place_127;
var G__53354 = cr52672_place_128;
var fexpr__53352 = cr52672_place_126;
return (fexpr__53352.cljs$core$IFn$_invoke$arity$2 ? fexpr__53352.cljs$core$IFn$_invoke$arity$2(G__53353,G__53354) : fexpr__53352.call(null,G__53353,G__53354));
})();
(cr52672_state[(0)] = cr52672_block_17);

(cr52672_state[(4)] = null);

return missionary.core.park(cr52672_place_129);
}catch (e53345){var cr52672_exception = e53345;
(cr52672_state[(0)] = null);

(cr52672_state[(1)] = null);

(cr52672_state[(4)] = null);

(cr52672_state[(2)] = null);

throw cr52672_exception;
}});
var cr52672_block_13 = (function hyperfiddle$electric_client$boot_with_retry_$_cr52672_block_13(cr52672_state){
try{var cr52672_place_68 = (cr52672_state[(6)]);
(cr52672_state[(0)] = cr52672_block_15);

(cr52672_state[(6)] = null);

(cr52672_state[(4)] = cr52672_place_68);

return cr52672_state;
}catch (e53355){var cr52672_exception = e53355;
(cr52672_state[(0)] = null);

(cr52672_state[(1)] = null);

(cr52672_state[(6)] = null);

(cr52672_state[(4)] = null);

(cr52672_state[(2)] = null);

throw cr52672_exception;
}});
var cr52672_block_8 = (function hyperfiddle$electric_client$boot_with_retry_$_cr52672_block_8(cr52672_state){
try{var cr52672_place_73 = console;
var cr52672_place_74 = "Connection lost.";
var cr52672_place_75 = cr52672_place_73.log(cr52672_place_74);
var cr52672_place_76 = cljs.core.seq;
var cr52672_place_77 = hyperfiddle.electric_client.retry_delays;
var cr52672_place_78 = (function (){var G__53358 = cr52672_place_77;
var fexpr__53357 = cr52672_place_76;
return (fexpr__53357.cljs$core$IFn$_invoke$arity$1 ? fexpr__53357.cljs$core$IFn$_invoke$arity$1(G__53358) : fexpr__53357.call(null,G__53358));
})();
(cr52672_state[(0)] = cr52672_block_11);

(cr52672_state[(3)] = cr52672_place_78);

return cr52672_state;
}catch (e53356){var cr52672_exception = e53356;
(cr52672_state[(0)] = null);

(cr52672_state[(1)] = null);

(cr52672_state[(3)] = null);

(cr52672_state[(6)] = null);

(cr52672_state[(4)] = null);

(cr52672_state[(2)] = null);

throw cr52672_exception;
}});
var cr52672_block_5 = (function hyperfiddle$electric_client$boot_with_retry_$_cr52672_block_5(cr52672_state){
try{var cr52672_place_13 = (cr52672_state[(4)]);
var cr52672_place_12 = (cr52672_state[(5)]);
var cr52672_place_8 = (cr52672_state[(6)]);
var cr52672_place_54 = cr52672_place_8;
var cr52672_place_55 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr52672_place_54);
var cr52672_place_56 = (cljs.core.truth_(cr52672_place_13)?(function(){throw cr52672_place_12})():cr52672_place_12);
var cr52672_place_57 = cr52672_place_56;
var cr52672_place_58 = null;
var cr52672_place_59 = (cr52672_place_57 == cr52672_place_58);
var cr52672_place_60 = null;
if(cr52672_place_59){
(cr52672_state[(0)] = cr52672_block_14);

(cr52672_state[(4)] = null);

(cr52672_state[(5)] = null);

(cr52672_state[(6)] = null);

(cr52672_state[(4)] = cr52672_place_60);

return cr52672_state;
} else {
(cr52672_state[(0)] = cr52672_block_6);

(cr52672_state[(4)] = null);

(cr52672_state[(5)] = null);

(cr52672_state[(6)] = null);

(cr52672_state[(3)] = cr52672_place_56);

(cr52672_state[(4)] = cr52672_place_60);

return cr52672_state;
}
}catch (e53359){var cr52672_exception = e53359;
(cr52672_state[(0)] = null);

(cr52672_state[(1)] = null);

(cr52672_state[(4)] = null);

(cr52672_state[(5)] = null);

(cr52672_state[(6)] = null);

(cr52672_state[(2)] = null);

throw cr52672_exception;
}});
var cr52672_block_18 = (function hyperfiddle$electric_client$boot_with_retry_$_cr52672_block_18(cr52672_state){
try{var cr52672_place_131 = null;
(cr52672_state[(0)] = cr52672_block_19);

(cr52672_state[(1)] = cr52672_place_131);

return cr52672_state;
}catch (e53360){var cr52672_exception = e53360;
(cr52672_state[(0)] = null);

(cr52672_state[(1)] = null);

throw cr52672_exception;
}});
var cr52672_block_0 = (function hyperfiddle$electric_client$boot_with_retry_$_cr52672_block_0(cr52672_state){
try{var cr52672_place_0 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr52672_place_1 = hyperfiddle.electric_client.retry_delays;
(cr52672_state[(0)] = cr52672_block_1);

(cr52672_state[(1)] = cr52672_place_0);

(cr52672_state[(2)] = cr52672_place_1);

return cr52672_state;
}catch (e53361){var cr52672_exception = e53361;
(cr52672_state[(0)] = null);

throw cr52672_exception;
}});
var cr52672_block_3 = (function hyperfiddle$electric_client$boot_with_retry_$_cr52672_block_3(cr52672_state){
try{var cr52672_place_51 = missionary.core.unpark();
(cr52672_state[(0)] = cr52672_block_5);

(cr52672_state[(5)] = cr52672_place_51);

return cr52672_state;
}catch (e53362){var cr52672_exception = e53362;
(cr52672_state[(0)] = cr52672_block_4);

(cr52672_state[(5)] = cr52672_exception);

return cr52672_state;
}});
return cloroutine.impl.coroutine((function (){var G__53363 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((7));
(G__53363[(0)] = cr52672_block_0);

return G__53363;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.reload_when_stale = (function hyperfiddle$electric_client$reload_when_stale(task){
return (function (s,f){
var G__53364 = s;
var G__53365 = (function (error){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric-client","stale-client","hyperfiddle.electric-client/stale-client",-343425405),new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(error)))){
console.log("Server and client version mismatch. Refreshing page.");

window.location.reload();
} else {
}

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(error) : f.call(null,error));
});
return (task.cljs$core$IFn$_invoke$arity$2 ? task.cljs$core$IFn$_invoke$arity$2(G__53364,G__53365) : task.call(null,G__53364,G__53365));
});
});

//# sourceMappingURL=hyperfiddle.electric_client.js.map
