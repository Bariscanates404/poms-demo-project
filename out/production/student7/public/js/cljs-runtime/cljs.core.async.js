goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33406 = arguments.length;
switch (G__33406) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33409 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33409 = (function (f,blockable,meta33410){
this.f = f;
this.blockable = blockable;
this.meta33410 = meta33410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33411,meta33410__$1){
var self__ = this;
var _33411__$1 = this;
return (new cljs.core.async.t_cljs$core$async33409(self__.f,self__.blockable,meta33410__$1));
}));

(cljs.core.async.t_cljs$core$async33409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33411){
var self__ = this;
var _33411__$1 = this;
return self__.meta33410;
}));

(cljs.core.async.t_cljs$core$async33409.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33409.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33409.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33409.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33409.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33410","meta33410",1165446324,null)], null);
}));

(cljs.core.async.t_cljs$core$async33409.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33409");

(cljs.core.async.t_cljs$core$async33409.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33409");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33409.
 */
cljs.core.async.__GT_t_cljs$core$async33409 = (function cljs$core$async$__GT_t_cljs$core$async33409(f__$1,blockable__$1,meta33410){
return (new cljs.core.async.t_cljs$core$async33409(f__$1,blockable__$1,meta33410));
});

}

return (new cljs.core.async.t_cljs$core$async33409(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33465 = arguments.length;
switch (G__33465) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33492 = arguments.length;
switch (G__33492) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33504 = arguments.length;
switch (G__33504) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_36511 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36511) : fn1.call(null,val_36511));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36511) : fn1.call(null,val_36511));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33537 = arguments.length;
switch (G__33537) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___36518 = n;
var x_36519 = (0);
while(true){
if((x_36519 < n__5636__auto___36518)){
(a[x_36519] = x_36519);

var G__36520 = (x_36519 + (1));
x_36519 = G__36520;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33581 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33581 = (function (flag,meta33582){
this.flag = flag;
this.meta33582 = meta33582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33583,meta33582__$1){
var self__ = this;
var _33583__$1 = this;
return (new cljs.core.async.t_cljs$core$async33581(self__.flag,meta33582__$1));
}));

(cljs.core.async.t_cljs$core$async33581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33583){
var self__ = this;
var _33583__$1 = this;
return self__.meta33582;
}));

(cljs.core.async.t_cljs$core$async33581.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33581.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33581.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33581.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33581.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33582","meta33582",155590531,null)], null);
}));

(cljs.core.async.t_cljs$core$async33581.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33581");

(cljs.core.async.t_cljs$core$async33581.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33581");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33581.
 */
cljs.core.async.__GT_t_cljs$core$async33581 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33581(flag__$1,meta33582){
return (new cljs.core.async.t_cljs$core$async33581(flag__$1,meta33582));
});

}

return (new cljs.core.async.t_cljs$core$async33581(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33603 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33603 = (function (flag,cb,meta33604){
this.flag = flag;
this.cb = cb;
this.meta33604 = meta33604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33605,meta33604__$1){
var self__ = this;
var _33605__$1 = this;
return (new cljs.core.async.t_cljs$core$async33603(self__.flag,self__.cb,meta33604__$1));
}));

(cljs.core.async.t_cljs$core$async33603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33605){
var self__ = this;
var _33605__$1 = this;
return self__.meta33604;
}));

(cljs.core.async.t_cljs$core$async33603.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33603.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33603.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33603.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33604","meta33604",677643497,null)], null);
}));

(cljs.core.async.t_cljs$core$async33603.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33603");

(cljs.core.async.t_cljs$core$async33603.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33603");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33603.
 */
cljs.core.async.__GT_t_cljs$core$async33603 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33603(flag__$1,cb__$1,meta33604){
return (new cljs.core.async.t_cljs$core$async33603(flag__$1,cb__$1,meta33604));
});

}

return (new cljs.core.async.t_cljs$core$async33603(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33632_SHARP_){
var G__33669 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33632_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33669) : fret.call(null,G__33669));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33633_SHARP_){
var G__33676 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33633_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33676) : fret.call(null,G__33676));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36531 = (i + (1));
i = G__36531;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36532 = arguments.length;
var i__5770__auto___36533 = (0);
while(true){
if((i__5770__auto___36533 < len__5769__auto___36532)){
args__5775__auto__.push((arguments[i__5770__auto___36533]));

var G__36534 = (i__5770__auto___36533 + (1));
i__5770__auto___36533 = G__36534;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33710){
var map__33712 = p__33710;
var map__33712__$1 = cljs.core.__destructure_map(map__33712);
var opts = map__33712__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33697){
var G__33698 = cljs.core.first(seq33697);
var seq33697__$1 = cljs.core.next(seq33697);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33698,seq33697__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33738 = arguments.length;
switch (G__33738) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33273__auto___36537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33274__auto__ = (function (){var switch__33080__auto__ = (function (state_33837){
var state_val_33839 = (state_33837[(1)]);
if((state_val_33839 === (7))){
var inst_33825 = (state_33837[(2)]);
var state_33837__$1 = state_33837;
var statearr_33858_36542 = state_33837__$1;
(statearr_33858_36542[(2)] = inst_33825);

(statearr_33858_36542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33839 === (1))){
var state_33837__$1 = state_33837;
var statearr_33862_36543 = state_33837__$1;
(statearr_33862_36543[(2)] = null);

(statearr_33862_36543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33839 === (4))){
var inst_33783 = (state_33837[(7)]);
var inst_33783__$1 = (state_33837[(2)]);
var inst_33797 = (inst_33783__$1 == null);
var state_33837__$1 = (function (){var statearr_33870 = state_33837;
(statearr_33870[(7)] = inst_33783__$1);

return statearr_33870;
})();
if(cljs.core.truth_(inst_33797)){
var statearr_33873_36546 = state_33837__$1;
(statearr_33873_36546[(1)] = (5));

} else {
var statearr_33876_36547 = state_33837__$1;
(statearr_33876_36547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33839 === (13))){
var state_33837__$1 = state_33837;
var statearr_33883_36549 = state_33837__$1;
(statearr_33883_36549[(2)] = null);

(statearr_33883_36549[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33839 === (6))){
var inst_33783 = (state_33837[(7)]);
var state_33837__$1 = state_33837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33837__$1,(11),to,inst_33783);
} else {
if((state_val_33839 === (3))){
var inst_33830 = (state_33837[(2)]);
var state_33837__$1 = state_33837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33837__$1,inst_33830);
} else {
if((state_val_33839 === (12))){
var state_33837__$1 = state_33837;
var statearr_33889_36550 = state_33837__$1;
(statearr_33889_36550[(2)] = null);

(statearr_33889_36550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33839 === (2))){
var state_33837__$1 = state_33837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33837__$1,(4),from);
} else {
if((state_val_33839 === (11))){
var inst_33815 = (state_33837[(2)]);
var state_33837__$1 = state_33837;
if(cljs.core.truth_(inst_33815)){
var statearr_33899_36552 = state_33837__$1;
(statearr_33899_36552[(1)] = (12));

} else {
var statearr_33902_36553 = state_33837__$1;
(statearr_33902_36553[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33839 === (9))){
var state_33837__$1 = state_33837;
var statearr_33904_36556 = state_33837__$1;
(statearr_33904_36556[(2)] = null);

(statearr_33904_36556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33839 === (5))){
var state_33837__$1 = state_33837;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33911_36558 = state_33837__$1;
(statearr_33911_36558[(1)] = (8));

} else {
var statearr_33916_36559 = state_33837__$1;
(statearr_33916_36559[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33839 === (14))){
var inst_33823 = (state_33837[(2)]);
var state_33837__$1 = state_33837;
var statearr_33920_36560 = state_33837__$1;
(statearr_33920_36560[(2)] = inst_33823);

(statearr_33920_36560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33839 === (10))){
var inst_33811 = (state_33837[(2)]);
var state_33837__$1 = state_33837;
var statearr_33925_36561 = state_33837__$1;
(statearr_33925_36561[(2)] = inst_33811);

(statearr_33925_36561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33839 === (8))){
var inst_33808 = cljs.core.async.close_BANG_(to);
var state_33837__$1 = state_33837;
var statearr_33928_36562 = state_33837__$1;
(statearr_33928_36562[(2)] = inst_33808);

(statearr_33928_36562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33081__auto__ = null;
var cljs$core$async$state_machine__33081__auto____0 = (function (){
var statearr_33937 = [null,null,null,null,null,null,null,null];
(statearr_33937[(0)] = cljs$core$async$state_machine__33081__auto__);

(statearr_33937[(1)] = (1));

return statearr_33937;
});
var cljs$core$async$state_machine__33081__auto____1 = (function (state_33837){
while(true){
var ret_value__33082__auto__ = (function (){try{while(true){
var result__33083__auto__ = switch__33080__auto__(state_33837);
if(cljs.core.keyword_identical_QMARK_(result__33083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33083__auto__;
}
break;
}
}catch (e33940){var ex__33084__auto__ = e33940;
var statearr_33943_36566 = state_33837;
(statearr_33943_36566[(2)] = ex__33084__auto__);


if(cljs.core.seq((state_33837[(4)]))){
var statearr_33948_36568 = state_33837;
(statearr_33948_36568[(1)] = cljs.core.first((state_33837[(4)])));

} else {
throw ex__33084__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36569 = state_33837;
state_33837 = G__36569;
continue;
} else {
return ret_value__33082__auto__;
}
break;
}
});
cljs$core$async$state_machine__33081__auto__ = function(state_33837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33081__auto____1.call(this,state_33837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33081__auto____0;
cljs$core$async$state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33081__auto____1;
return cljs$core$async$state_machine__33081__auto__;
})()
})();
var state__33275__auto__ = (function (){var statearr_33957 = f__33274__auto__();
(statearr_33957[(6)] = c__33273__auto___36537);

return statearr_33957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33275__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__33979){
var vec__33980 = p__33979;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33980,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33980,(1),null);
var job = vec__33980;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33273__auto___36578 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33274__auto__ = (function (){var switch__33080__auto__ = (function (state_33992){
var state_val_33993 = (state_33992[(1)]);
if((state_val_33993 === (1))){
var state_33992__$1 = state_33992;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33992__$1,(2),res,v);
} else {
if((state_val_33993 === (2))){
var inst_33989 = (state_33992[(2)]);
var inst_33990 = cljs.core.async.close_BANG_(res);
var state_33992__$1 = (function (){var statearr_34004 = state_33992;
(statearr_34004[(7)] = inst_33989);

return statearr_34004;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33992__$1,inst_33990);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____0 = (function (){
var statearr_34005 = [null,null,null,null,null,null,null,null];
(statearr_34005[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__);

(statearr_34005[(1)] = (1));

return statearr_34005;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____1 = (function (state_33992){
while(true){
var ret_value__33082__auto__ = (function (){try{while(true){
var result__33083__auto__ = switch__33080__auto__(state_33992);
if(cljs.core.keyword_identical_QMARK_(result__33083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33083__auto__;
}
break;
}
}catch (e34007){var ex__33084__auto__ = e34007;
var statearr_34008_36579 = state_33992;
(statearr_34008_36579[(2)] = ex__33084__auto__);


if(cljs.core.seq((state_33992[(4)]))){
var statearr_34009_36580 = state_33992;
(statearr_34009_36580[(1)] = cljs.core.first((state_33992[(4)])));

} else {
throw ex__33084__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36581 = state_33992;
state_33992 = G__36581;
continue;
} else {
return ret_value__33082__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__ = function(state_33992){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____1.call(this,state_33992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__;
})()
})();
var state__33275__auto__ = (function (){var statearr_34010 = f__33274__auto__();
(statearr_34010[(6)] = c__33273__auto___36578);

return statearr_34010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33275__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34013){
var vec__34014 = p__34013;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34014,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34014,(1),null);
var job = vec__34014;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___36584 = n;
var __36585 = (0);
while(true){
if((__36585 < n__5636__auto___36584)){
var G__34022_36586 = type;
var G__34022_36587__$1 = (((G__34022_36586 instanceof cljs.core.Keyword))?G__34022_36586.fqn:null);
switch (G__34022_36587__$1) {
case "compute":
var c__33273__auto___36589 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36585,c__33273__auto___36589,G__34022_36586,G__34022_36587__$1,n__5636__auto___36584,jobs,results,process__$1,async){
return (function (){
var f__33274__auto__ = (function (){var switch__33080__auto__ = ((function (__36585,c__33273__auto___36589,G__34022_36586,G__34022_36587__$1,n__5636__auto___36584,jobs,results,process__$1,async){
return (function (state_34045){
var state_val_34046 = (state_34045[(1)]);
if((state_val_34046 === (1))){
var state_34045__$1 = state_34045;
var statearr_34068_36590 = state_34045__$1;
(statearr_34068_36590[(2)] = null);

(statearr_34068_36590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34046 === (2))){
var state_34045__$1 = state_34045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34045__$1,(4),jobs);
} else {
if((state_val_34046 === (3))){
var inst_34043 = (state_34045[(2)]);
var state_34045__$1 = state_34045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34045__$1,inst_34043);
} else {
if((state_val_34046 === (4))){
var inst_34034 = (state_34045[(2)]);
var inst_34036 = process__$1(inst_34034);
var state_34045__$1 = state_34045;
if(cljs.core.truth_(inst_34036)){
var statearr_34073_36592 = state_34045__$1;
(statearr_34073_36592[(1)] = (5));

} else {
var statearr_34078_36594 = state_34045__$1;
(statearr_34078_36594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34046 === (5))){
var state_34045__$1 = state_34045;
var statearr_34082_36596 = state_34045__$1;
(statearr_34082_36596[(2)] = null);

(statearr_34082_36596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34046 === (6))){
var state_34045__$1 = state_34045;
var statearr_34085_36597 = state_34045__$1;
(statearr_34085_36597[(2)] = null);

(statearr_34085_36597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34046 === (7))){
var inst_34041 = (state_34045[(2)]);
var state_34045__$1 = state_34045;
var statearr_34093_36598 = state_34045__$1;
(statearr_34093_36598[(2)] = inst_34041);

(statearr_34093_36598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36585,c__33273__auto___36589,G__34022_36586,G__34022_36587__$1,n__5636__auto___36584,jobs,results,process__$1,async))
;
return ((function (__36585,switch__33080__auto__,c__33273__auto___36589,G__34022_36586,G__34022_36587__$1,n__5636__auto___36584,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____0 = (function (){
var statearr_34116 = [null,null,null,null,null,null,null];
(statearr_34116[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__);

(statearr_34116[(1)] = (1));

return statearr_34116;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____1 = (function (state_34045){
while(true){
var ret_value__33082__auto__ = (function (){try{while(true){
var result__33083__auto__ = switch__33080__auto__(state_34045);
if(cljs.core.keyword_identical_QMARK_(result__33083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33083__auto__;
}
break;
}
}catch (e34123){var ex__33084__auto__ = e34123;
var statearr_34124_36599 = state_34045;
(statearr_34124_36599[(2)] = ex__33084__auto__);


if(cljs.core.seq((state_34045[(4)]))){
var statearr_34132_36600 = state_34045;
(statearr_34132_36600[(1)] = cljs.core.first((state_34045[(4)])));

} else {
throw ex__33084__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36601 = state_34045;
state_34045 = G__36601;
continue;
} else {
return ret_value__33082__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__ = function(state_34045){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____1.call(this,state_34045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__;
})()
;})(__36585,switch__33080__auto__,c__33273__auto___36589,G__34022_36586,G__34022_36587__$1,n__5636__auto___36584,jobs,results,process__$1,async))
})();
var state__33275__auto__ = (function (){var statearr_34136 = f__33274__auto__();
(statearr_34136[(6)] = c__33273__auto___36589);

return statearr_34136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33275__auto__);
});})(__36585,c__33273__auto___36589,G__34022_36586,G__34022_36587__$1,n__5636__auto___36584,jobs,results,process__$1,async))
);


break;
case "async":
var c__33273__auto___36602 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36585,c__33273__auto___36602,G__34022_36586,G__34022_36587__$1,n__5636__auto___36584,jobs,results,process__$1,async){
return (function (){
var f__33274__auto__ = (function (){var switch__33080__auto__ = ((function (__36585,c__33273__auto___36602,G__34022_36586,G__34022_36587__$1,n__5636__auto___36584,jobs,results,process__$1,async){
return (function (state_34154){
var state_val_34155 = (state_34154[(1)]);
if((state_val_34155 === (1))){
var state_34154__$1 = state_34154;
var statearr_34161_36607 = state_34154__$1;
(statearr_34161_36607[(2)] = null);

(statearr_34161_36607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (2))){
var state_34154__$1 = state_34154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34154__$1,(4),jobs);
} else {
if((state_val_34155 === (3))){
var inst_34152 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34154__$1,inst_34152);
} else {
if((state_val_34155 === (4))){
var inst_34144 = (state_34154[(2)]);
var inst_34145 = async(inst_34144);
var state_34154__$1 = state_34154;
if(cljs.core.truth_(inst_34145)){
var statearr_34166_36608 = state_34154__$1;
(statearr_34166_36608[(1)] = (5));

} else {
var statearr_34167_36609 = state_34154__$1;
(statearr_34167_36609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (5))){
var state_34154__$1 = state_34154;
var statearr_34173_36610 = state_34154__$1;
(statearr_34173_36610[(2)] = null);

(statearr_34173_36610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (6))){
var state_34154__$1 = state_34154;
var statearr_34177_36611 = state_34154__$1;
(statearr_34177_36611[(2)] = null);

(statearr_34177_36611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (7))){
var inst_34150 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
var statearr_34178_36612 = state_34154__$1;
(statearr_34178_36612[(2)] = inst_34150);

(statearr_34178_36612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36585,c__33273__auto___36602,G__34022_36586,G__34022_36587__$1,n__5636__auto___36584,jobs,results,process__$1,async))
;
return ((function (__36585,switch__33080__auto__,c__33273__auto___36602,G__34022_36586,G__34022_36587__$1,n__5636__auto___36584,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____0 = (function (){
var statearr_34179 = [null,null,null,null,null,null,null];
(statearr_34179[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__);

(statearr_34179[(1)] = (1));

return statearr_34179;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____1 = (function (state_34154){
while(true){
var ret_value__33082__auto__ = (function (){try{while(true){
var result__33083__auto__ = switch__33080__auto__(state_34154);
if(cljs.core.keyword_identical_QMARK_(result__33083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33083__auto__;
}
break;
}
}catch (e34180){var ex__33084__auto__ = e34180;
var statearr_34181_36619 = state_34154;
(statearr_34181_36619[(2)] = ex__33084__auto__);


if(cljs.core.seq((state_34154[(4)]))){
var statearr_34183_36620 = state_34154;
(statearr_34183_36620[(1)] = cljs.core.first((state_34154[(4)])));

} else {
throw ex__33084__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36624 = state_34154;
state_34154 = G__36624;
continue;
} else {
return ret_value__33082__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__ = function(state_34154){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____1.call(this,state_34154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__;
})()
;})(__36585,switch__33080__auto__,c__33273__auto___36602,G__34022_36586,G__34022_36587__$1,n__5636__auto___36584,jobs,results,process__$1,async))
})();
var state__33275__auto__ = (function (){var statearr_34188 = f__33274__auto__();
(statearr_34188[(6)] = c__33273__auto___36602);

return statearr_34188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33275__auto__);
});})(__36585,c__33273__auto___36602,G__34022_36586,G__34022_36587__$1,n__5636__auto___36584,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34022_36587__$1)].join('')));

}

var G__36625 = (__36585 + (1));
__36585 = G__36625;
continue;
} else {
}
break;
}

var c__33273__auto___36626 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33274__auto__ = (function (){var switch__33080__auto__ = (function (state_34219){
var state_val_34220 = (state_34219[(1)]);
if((state_val_34220 === (7))){
var inst_34212 = (state_34219[(2)]);
var state_34219__$1 = state_34219;
var statearr_34237_36627 = state_34219__$1;
(statearr_34237_36627[(2)] = inst_34212);

(statearr_34237_36627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (1))){
var state_34219__$1 = state_34219;
var statearr_34238_36628 = state_34219__$1;
(statearr_34238_36628[(2)] = null);

(statearr_34238_36628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (4))){
var inst_34193 = (state_34219[(7)]);
var inst_34193__$1 = (state_34219[(2)]);
var inst_34197 = (inst_34193__$1 == null);
var state_34219__$1 = (function (){var statearr_34240 = state_34219;
(statearr_34240[(7)] = inst_34193__$1);

return statearr_34240;
})();
if(cljs.core.truth_(inst_34197)){
var statearr_34241_36630 = state_34219__$1;
(statearr_34241_36630[(1)] = (5));

} else {
var statearr_34242_36631 = state_34219__$1;
(statearr_34242_36631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (6))){
var inst_34193 = (state_34219[(7)]);
var inst_34201 = (state_34219[(8)]);
var inst_34201__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34202 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34204 = [inst_34193,inst_34201__$1];
var inst_34205 = (new cljs.core.PersistentVector(null,2,(5),inst_34202,inst_34204,null));
var state_34219__$1 = (function (){var statearr_34244 = state_34219;
(statearr_34244[(8)] = inst_34201__$1);

return statearr_34244;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34219__$1,(8),jobs,inst_34205);
} else {
if((state_val_34220 === (3))){
var inst_34215 = (state_34219[(2)]);
var state_34219__$1 = state_34219;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34219__$1,inst_34215);
} else {
if((state_val_34220 === (2))){
var state_34219__$1 = state_34219;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34219__$1,(4),from);
} else {
if((state_val_34220 === (9))){
var inst_34209 = (state_34219[(2)]);
var state_34219__$1 = (function (){var statearr_34246 = state_34219;
(statearr_34246[(9)] = inst_34209);

return statearr_34246;
})();
var statearr_34247_36632 = state_34219__$1;
(statearr_34247_36632[(2)] = null);

(statearr_34247_36632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (5))){
var inst_34199 = cljs.core.async.close_BANG_(jobs);
var state_34219__$1 = state_34219;
var statearr_34249_36633 = state_34219__$1;
(statearr_34249_36633[(2)] = inst_34199);

(statearr_34249_36633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (8))){
var inst_34201 = (state_34219[(8)]);
var inst_34207 = (state_34219[(2)]);
var state_34219__$1 = (function (){var statearr_34250 = state_34219;
(statearr_34250[(10)] = inst_34207);

return statearr_34250;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34219__$1,(9),results,inst_34201);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____0 = (function (){
var statearr_34252 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34252[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__);

(statearr_34252[(1)] = (1));

return statearr_34252;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____1 = (function (state_34219){
while(true){
var ret_value__33082__auto__ = (function (){try{while(true){
var result__33083__auto__ = switch__33080__auto__(state_34219);
if(cljs.core.keyword_identical_QMARK_(result__33083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33083__auto__;
}
break;
}
}catch (e34253){var ex__33084__auto__ = e34253;
var statearr_34254_36634 = state_34219;
(statearr_34254_36634[(2)] = ex__33084__auto__);


if(cljs.core.seq((state_34219[(4)]))){
var statearr_34255_36636 = state_34219;
(statearr_34255_36636[(1)] = cljs.core.first((state_34219[(4)])));

} else {
throw ex__33084__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36638 = state_34219;
state_34219 = G__36638;
continue;
} else {
return ret_value__33082__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__ = function(state_34219){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____1.call(this,state_34219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__;
})()
})();
var state__33275__auto__ = (function (){var statearr_34256 = f__33274__auto__();
(statearr_34256[(6)] = c__33273__auto___36626);

return statearr_34256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33275__auto__);
}));


var c__33273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33274__auto__ = (function (){var switch__33080__auto__ = (function (state_34304){
var state_val_34305 = (state_34304[(1)]);
if((state_val_34305 === (7))){
var inst_34300 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
var statearr_34306_36640 = state_34304__$1;
(statearr_34306_36640[(2)] = inst_34300);

(statearr_34306_36640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (20))){
var state_34304__$1 = state_34304;
var statearr_34308_36644 = state_34304__$1;
(statearr_34308_36644[(2)] = null);

(statearr_34308_36644[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (1))){
var state_34304__$1 = state_34304;
var statearr_34309_36645 = state_34304__$1;
(statearr_34309_36645[(2)] = null);

(statearr_34309_36645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (4))){
var inst_34260 = (state_34304[(7)]);
var inst_34260__$1 = (state_34304[(2)]);
var inst_34261 = (inst_34260__$1 == null);
var state_34304__$1 = (function (){var statearr_34311 = state_34304;
(statearr_34311[(7)] = inst_34260__$1);

return statearr_34311;
})();
if(cljs.core.truth_(inst_34261)){
var statearr_34312_36648 = state_34304__$1;
(statearr_34312_36648[(1)] = (5));

} else {
var statearr_34313_36649 = state_34304__$1;
(statearr_34313_36649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (15))){
var inst_34279 = (state_34304[(8)]);
var state_34304__$1 = state_34304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34304__$1,(18),to,inst_34279);
} else {
if((state_val_34305 === (21))){
var inst_34295 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
var statearr_34314_36651 = state_34304__$1;
(statearr_34314_36651[(2)] = inst_34295);

(statearr_34314_36651[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (13))){
var inst_34297 = (state_34304[(2)]);
var state_34304__$1 = (function (){var statearr_34316 = state_34304;
(statearr_34316[(9)] = inst_34297);

return statearr_34316;
})();
var statearr_34317_36655 = state_34304__$1;
(statearr_34317_36655[(2)] = null);

(statearr_34317_36655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (6))){
var inst_34260 = (state_34304[(7)]);
var state_34304__$1 = state_34304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34304__$1,(11),inst_34260);
} else {
if((state_val_34305 === (17))){
var inst_34290 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
if(cljs.core.truth_(inst_34290)){
var statearr_34318_36660 = state_34304__$1;
(statearr_34318_36660[(1)] = (19));

} else {
var statearr_34319_36661 = state_34304__$1;
(statearr_34319_36661[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (3))){
var inst_34302 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34304__$1,inst_34302);
} else {
if((state_val_34305 === (12))){
var inst_34274 = (state_34304[(10)]);
var state_34304__$1 = state_34304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34304__$1,(14),inst_34274);
} else {
if((state_val_34305 === (2))){
var state_34304__$1 = state_34304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34304__$1,(4),results);
} else {
if((state_val_34305 === (19))){
var state_34304__$1 = state_34304;
var statearr_34323_36666 = state_34304__$1;
(statearr_34323_36666[(2)] = null);

(statearr_34323_36666[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (11))){
var inst_34274 = (state_34304[(2)]);
var state_34304__$1 = (function (){var statearr_34329 = state_34304;
(statearr_34329[(10)] = inst_34274);

return statearr_34329;
})();
var statearr_34332_36667 = state_34304__$1;
(statearr_34332_36667[(2)] = null);

(statearr_34332_36667[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (9))){
var state_34304__$1 = state_34304;
var statearr_34334_36668 = state_34304__$1;
(statearr_34334_36668[(2)] = null);

(statearr_34334_36668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (5))){
var state_34304__$1 = state_34304;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34335_36669 = state_34304__$1;
(statearr_34335_36669[(1)] = (8));

} else {
var statearr_34336_36670 = state_34304__$1;
(statearr_34336_36670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (14))){
var inst_34284 = (state_34304[(11)]);
var inst_34279 = (state_34304[(8)]);
var inst_34279__$1 = (state_34304[(2)]);
var inst_34283 = (inst_34279__$1 == null);
var inst_34284__$1 = cljs.core.not(inst_34283);
var state_34304__$1 = (function (){var statearr_34340 = state_34304;
(statearr_34340[(11)] = inst_34284__$1);

(statearr_34340[(8)] = inst_34279__$1);

return statearr_34340;
})();
if(inst_34284__$1){
var statearr_34341_36676 = state_34304__$1;
(statearr_34341_36676[(1)] = (15));

} else {
var statearr_34342_36677 = state_34304__$1;
(statearr_34342_36677[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (16))){
var inst_34284 = (state_34304[(11)]);
var state_34304__$1 = state_34304;
var statearr_34343_36678 = state_34304__$1;
(statearr_34343_36678[(2)] = inst_34284);

(statearr_34343_36678[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (10))){
var inst_34267 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
var statearr_34353_36679 = state_34304__$1;
(statearr_34353_36679[(2)] = inst_34267);

(statearr_34353_36679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (18))){
var inst_34287 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
var statearr_34360_36681 = state_34304__$1;
(statearr_34360_36681[(2)] = inst_34287);

(statearr_34360_36681[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (8))){
var inst_34264 = cljs.core.async.close_BANG_(to);
var state_34304__$1 = state_34304;
var statearr_34361_36682 = state_34304__$1;
(statearr_34361_36682[(2)] = inst_34264);

(statearr_34361_36682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____0 = (function (){
var statearr_34362 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34362[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__);

(statearr_34362[(1)] = (1));

return statearr_34362;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____1 = (function (state_34304){
while(true){
var ret_value__33082__auto__ = (function (){try{while(true){
var result__33083__auto__ = switch__33080__auto__(state_34304);
if(cljs.core.keyword_identical_QMARK_(result__33083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33083__auto__;
}
break;
}
}catch (e34363){var ex__33084__auto__ = e34363;
var statearr_34364_36683 = state_34304;
(statearr_34364_36683[(2)] = ex__33084__auto__);


if(cljs.core.seq((state_34304[(4)]))){
var statearr_34365_36684 = state_34304;
(statearr_34365_36684[(1)] = cljs.core.first((state_34304[(4)])));

} else {
throw ex__33084__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36686 = state_34304;
state_34304 = G__36686;
continue;
} else {
return ret_value__33082__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__ = function(state_34304){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____1.call(this,state_34304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33081__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33081__auto__;
})()
})();
var state__33275__auto__ = (function (){var statearr_34366 = f__33274__auto__();
(statearr_34366[(6)] = c__33273__auto__);

return statearr_34366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33275__auto__);
}));

return c__33273__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34371 = arguments.length;
switch (G__34371) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34374 = arguments.length;
switch (G__34374) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34378 = arguments.length;
switch (G__34378) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33273__auto___36692 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33274__auto__ = (function (){var switch__33080__auto__ = (function (state_34413){
var state_val_34414 = (state_34413[(1)]);
if((state_val_34414 === (7))){
var inst_34408 = (state_34413[(2)]);
var state_34413__$1 = state_34413;
var statearr_34422_36693 = state_34413__$1;
(statearr_34422_36693[(2)] = inst_34408);

(statearr_34422_36693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34414 === (1))){
var state_34413__$1 = state_34413;
var statearr_34423_36694 = state_34413__$1;
(statearr_34423_36694[(2)] = null);

(statearr_34423_36694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34414 === (4))){
var inst_34388 = (state_34413[(7)]);
var inst_34388__$1 = (state_34413[(2)]);
var inst_34389 = (inst_34388__$1 == null);
var state_34413__$1 = (function (){var statearr_34427 = state_34413;
(statearr_34427[(7)] = inst_34388__$1);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34389)){
var statearr_34428_36695 = state_34413__$1;
(statearr_34428_36695[(1)] = (5));

} else {
var statearr_34429_36696 = state_34413__$1;
(statearr_34429_36696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34414 === (13))){
var state_34413__$1 = state_34413;
var statearr_34430_36697 = state_34413__$1;
(statearr_34430_36697[(2)] = null);

(statearr_34430_36697[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34414 === (6))){
var inst_34388 = (state_34413[(7)]);
var inst_34395 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34388) : p.call(null,inst_34388));
var state_34413__$1 = state_34413;
if(cljs.core.truth_(inst_34395)){
var statearr_34434_36699 = state_34413__$1;
(statearr_34434_36699[(1)] = (9));

} else {
var statearr_34435_36700 = state_34413__$1;
(statearr_34435_36700[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34414 === (3))){
var inst_34410 = (state_34413[(2)]);
var state_34413__$1 = state_34413;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34413__$1,inst_34410);
} else {
if((state_val_34414 === (12))){
var state_34413__$1 = state_34413;
var statearr_34439_36701 = state_34413__$1;
(statearr_34439_36701[(2)] = null);

(statearr_34439_36701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34414 === (2))){
var state_34413__$1 = state_34413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34413__$1,(4),ch);
} else {
if((state_val_34414 === (11))){
var inst_34388 = (state_34413[(7)]);
var inst_34399 = (state_34413[(2)]);
var state_34413__$1 = state_34413;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34413__$1,(8),inst_34399,inst_34388);
} else {
if((state_val_34414 === (9))){
var state_34413__$1 = state_34413;
var statearr_34441_36702 = state_34413__$1;
(statearr_34441_36702[(2)] = tc);

(statearr_34441_36702[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34414 === (5))){
var inst_34391 = cljs.core.async.close_BANG_(tc);
var inst_34392 = cljs.core.async.close_BANG_(fc);
var state_34413__$1 = (function (){var statearr_34442 = state_34413;
(statearr_34442[(8)] = inst_34391);

return statearr_34442;
})();
var statearr_34443_36706 = state_34413__$1;
(statearr_34443_36706[(2)] = inst_34392);

(statearr_34443_36706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34414 === (14))){
var inst_34406 = (state_34413[(2)]);
var state_34413__$1 = state_34413;
var statearr_34445_36707 = state_34413__$1;
(statearr_34445_36707[(2)] = inst_34406);

(statearr_34445_36707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34414 === (10))){
var state_34413__$1 = state_34413;
var statearr_34449_36708 = state_34413__$1;
(statearr_34449_36708[(2)] = fc);

(statearr_34449_36708[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34414 === (8))){
var inst_34401 = (state_34413[(2)]);
var state_34413__$1 = state_34413;
if(cljs.core.truth_(inst_34401)){
var statearr_34450_36709 = state_34413__$1;
(statearr_34450_36709[(1)] = (12));

} else {
var statearr_34451_36710 = state_34413__$1;
(statearr_34451_36710[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33081__auto__ = null;
var cljs$core$async$state_machine__33081__auto____0 = (function (){
var statearr_34452 = [null,null,null,null,null,null,null,null,null];
(statearr_34452[(0)] = cljs$core$async$state_machine__33081__auto__);

(statearr_34452[(1)] = (1));

return statearr_34452;
});
var cljs$core$async$state_machine__33081__auto____1 = (function (state_34413){
while(true){
var ret_value__33082__auto__ = (function (){try{while(true){
var result__33083__auto__ = switch__33080__auto__(state_34413);
if(cljs.core.keyword_identical_QMARK_(result__33083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33083__auto__;
}
break;
}
}catch (e34454){var ex__33084__auto__ = e34454;
var statearr_34459_36715 = state_34413;
(statearr_34459_36715[(2)] = ex__33084__auto__);


if(cljs.core.seq((state_34413[(4)]))){
var statearr_34460_36717 = state_34413;
(statearr_34460_36717[(1)] = cljs.core.first((state_34413[(4)])));

} else {
throw ex__33084__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36721 = state_34413;
state_34413 = G__36721;
continue;
} else {
return ret_value__33082__auto__;
}
break;
}
});
cljs$core$async$state_machine__33081__auto__ = function(state_34413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33081__auto____1.call(this,state_34413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33081__auto____0;
cljs$core$async$state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33081__auto____1;
return cljs$core$async$state_machine__33081__auto__;
})()
})();
var state__33275__auto__ = (function (){var statearr_34462 = f__33274__auto__();
(statearr_34462[(6)] = c__33273__auto___36692);

return statearr_34462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33275__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33274__auto__ = (function (){var switch__33080__auto__ = (function (state_34487){
var state_val_34488 = (state_34487[(1)]);
if((state_val_34488 === (7))){
var inst_34483 = (state_34487[(2)]);
var state_34487__$1 = state_34487;
var statearr_34490_36725 = state_34487__$1;
(statearr_34490_36725[(2)] = inst_34483);

(statearr_34490_36725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (1))){
var inst_34463 = init;
var inst_34464 = inst_34463;
var state_34487__$1 = (function (){var statearr_34493 = state_34487;
(statearr_34493[(7)] = inst_34464);

return statearr_34493;
})();
var statearr_34494_36726 = state_34487__$1;
(statearr_34494_36726[(2)] = null);

(statearr_34494_36726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (4))){
var inst_34467 = (state_34487[(8)]);
var inst_34467__$1 = (state_34487[(2)]);
var inst_34468 = (inst_34467__$1 == null);
var state_34487__$1 = (function (){var statearr_34495 = state_34487;
(statearr_34495[(8)] = inst_34467__$1);

return statearr_34495;
})();
if(cljs.core.truth_(inst_34468)){
var statearr_34496_36727 = state_34487__$1;
(statearr_34496_36727[(1)] = (5));

} else {
var statearr_34497_36728 = state_34487__$1;
(statearr_34497_36728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (6))){
var inst_34467 = (state_34487[(8)]);
var inst_34464 = (state_34487[(7)]);
var inst_34471 = (state_34487[(9)]);
var inst_34471__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34464,inst_34467) : f.call(null,inst_34464,inst_34467));
var inst_34472 = cljs.core.reduced_QMARK_(inst_34471__$1);
var state_34487__$1 = (function (){var statearr_34498 = state_34487;
(statearr_34498[(9)] = inst_34471__$1);

return statearr_34498;
})();
if(inst_34472){
var statearr_34499_36732 = state_34487__$1;
(statearr_34499_36732[(1)] = (8));

} else {
var statearr_34500_36733 = state_34487__$1;
(statearr_34500_36733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (3))){
var inst_34485 = (state_34487[(2)]);
var state_34487__$1 = state_34487;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34487__$1,inst_34485);
} else {
if((state_val_34488 === (2))){
var state_34487__$1 = state_34487;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34487__$1,(4),ch);
} else {
if((state_val_34488 === (9))){
var inst_34471 = (state_34487[(9)]);
var inst_34464 = inst_34471;
var state_34487__$1 = (function (){var statearr_34501 = state_34487;
(statearr_34501[(7)] = inst_34464);

return statearr_34501;
})();
var statearr_34502_36735 = state_34487__$1;
(statearr_34502_36735[(2)] = null);

(statearr_34502_36735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (5))){
var inst_34464 = (state_34487[(7)]);
var state_34487__$1 = state_34487;
var statearr_34503_36740 = state_34487__$1;
(statearr_34503_36740[(2)] = inst_34464);

(statearr_34503_36740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (10))){
var inst_34481 = (state_34487[(2)]);
var state_34487__$1 = state_34487;
var statearr_34504_36742 = state_34487__$1;
(statearr_34504_36742[(2)] = inst_34481);

(statearr_34504_36742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (8))){
var inst_34471 = (state_34487[(9)]);
var inst_34477 = cljs.core.deref(inst_34471);
var state_34487__$1 = state_34487;
var statearr_34505_36743 = state_34487__$1;
(statearr_34505_36743[(2)] = inst_34477);

(statearr_34505_36743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33081__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33081__auto____0 = (function (){
var statearr_34506 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34506[(0)] = cljs$core$async$reduce_$_state_machine__33081__auto__);

(statearr_34506[(1)] = (1));

return statearr_34506;
});
var cljs$core$async$reduce_$_state_machine__33081__auto____1 = (function (state_34487){
while(true){
var ret_value__33082__auto__ = (function (){try{while(true){
var result__33083__auto__ = switch__33080__auto__(state_34487);
if(cljs.core.keyword_identical_QMARK_(result__33083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33083__auto__;
}
break;
}
}catch (e34507){var ex__33084__auto__ = e34507;
var statearr_34508_36746 = state_34487;
(statearr_34508_36746[(2)] = ex__33084__auto__);


if(cljs.core.seq((state_34487[(4)]))){
var statearr_34509_36747 = state_34487;
(statearr_34509_36747[(1)] = cljs.core.first((state_34487[(4)])));

} else {
throw ex__33084__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36752 = state_34487;
state_34487 = G__36752;
continue;
} else {
return ret_value__33082__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33081__auto__ = function(state_34487){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33081__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33081__auto____1.call(this,state_34487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33081__auto____0;
cljs$core$async$reduce_$_state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33081__auto____1;
return cljs$core$async$reduce_$_state_machine__33081__auto__;
})()
})();
var state__33275__auto__ = (function (){var statearr_34510 = f__33274__auto__();
(statearr_34510[(6)] = c__33273__auto__);

return statearr_34510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33275__auto__);
}));

return c__33273__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33274__auto__ = (function (){var switch__33080__auto__ = (function (state_34516){
var state_val_34517 = (state_34516[(1)]);
if((state_val_34517 === (1))){
var inst_34511 = cljs.core.async.reduce(f__$1,init,ch);
var state_34516__$1 = state_34516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34516__$1,(2),inst_34511);
} else {
if((state_val_34517 === (2))){
var inst_34513 = (state_34516[(2)]);
var inst_34514 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34513) : f__$1.call(null,inst_34513));
var state_34516__$1 = state_34516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34516__$1,inst_34514);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33081__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33081__auto____0 = (function (){
var statearr_34521 = [null,null,null,null,null,null,null];
(statearr_34521[(0)] = cljs$core$async$transduce_$_state_machine__33081__auto__);

(statearr_34521[(1)] = (1));

return statearr_34521;
});
var cljs$core$async$transduce_$_state_machine__33081__auto____1 = (function (state_34516){
while(true){
var ret_value__33082__auto__ = (function (){try{while(true){
var result__33083__auto__ = switch__33080__auto__(state_34516);
if(cljs.core.keyword_identical_QMARK_(result__33083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33083__auto__;
}
break;
}
}catch (e34522){var ex__33084__auto__ = e34522;
var statearr_34523_36756 = state_34516;
(statearr_34523_36756[(2)] = ex__33084__auto__);


if(cljs.core.seq((state_34516[(4)]))){
var statearr_34524_36760 = state_34516;
(statearr_34524_36760[(1)] = cljs.core.first((state_34516[(4)])));

} else {
throw ex__33084__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36761 = state_34516;
state_34516 = G__36761;
continue;
} else {
return ret_value__33082__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33081__auto__ = function(state_34516){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33081__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33081__auto____1.call(this,state_34516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33081__auto____0;
cljs$core$async$transduce_$_state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33081__auto____1;
return cljs$core$async$transduce_$_state_machine__33081__auto__;
})()
})();
var state__33275__auto__ = (function (){var statearr_34525 = f__33274__auto__();
(statearr_34525[(6)] = c__33273__auto__);

return statearr_34525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33275__auto__);
}));

return c__33273__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__34527 = arguments.length;
switch (G__34527) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33274__auto__ = (function (){var switch__33080__auto__ = (function (state_34554){
var state_val_34555 = (state_34554[(1)]);
if((state_val_34555 === (7))){
var inst_34536 = (state_34554[(2)]);
var state_34554__$1 = state_34554;
var statearr_34565_36769 = state_34554__$1;
(statearr_34565_36769[(2)] = inst_34536);

(statearr_34565_36769[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (1))){
var inst_34530 = cljs.core.seq(coll);
var inst_34531 = inst_34530;
var state_34554__$1 = (function (){var statearr_34566 = state_34554;
(statearr_34566[(7)] = inst_34531);

return statearr_34566;
})();
var statearr_34567_36770 = state_34554__$1;
(statearr_34567_36770[(2)] = null);

(statearr_34567_36770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (4))){
var inst_34531 = (state_34554[(7)]);
var inst_34534 = cljs.core.first(inst_34531);
var state_34554__$1 = state_34554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34554__$1,(7),ch,inst_34534);
} else {
if((state_val_34555 === (13))){
var inst_34548 = (state_34554[(2)]);
var state_34554__$1 = state_34554;
var statearr_34570_36775 = state_34554__$1;
(statearr_34570_36775[(2)] = inst_34548);

(statearr_34570_36775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (6))){
var inst_34539 = (state_34554[(2)]);
var state_34554__$1 = state_34554;
if(cljs.core.truth_(inst_34539)){
var statearr_34571_36776 = state_34554__$1;
(statearr_34571_36776[(1)] = (8));

} else {
var statearr_34572_36777 = state_34554__$1;
(statearr_34572_36777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (3))){
var inst_34552 = (state_34554[(2)]);
var state_34554__$1 = state_34554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34554__$1,inst_34552);
} else {
if((state_val_34555 === (12))){
var state_34554__$1 = state_34554;
var statearr_34573_36778 = state_34554__$1;
(statearr_34573_36778[(2)] = null);

(statearr_34573_36778[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (2))){
var inst_34531 = (state_34554[(7)]);
var state_34554__$1 = state_34554;
if(cljs.core.truth_(inst_34531)){
var statearr_34574_36779 = state_34554__$1;
(statearr_34574_36779[(1)] = (4));

} else {
var statearr_34575_36780 = state_34554__$1;
(statearr_34575_36780[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (11))){
var inst_34545 = cljs.core.async.close_BANG_(ch);
var state_34554__$1 = state_34554;
var statearr_34580_36786 = state_34554__$1;
(statearr_34580_36786[(2)] = inst_34545);

(statearr_34580_36786[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (9))){
var state_34554__$1 = state_34554;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34581_36788 = state_34554__$1;
(statearr_34581_36788[(1)] = (11));

} else {
var statearr_34582_36789 = state_34554__$1;
(statearr_34582_36789[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (5))){
var inst_34531 = (state_34554[(7)]);
var state_34554__$1 = state_34554;
var statearr_34583_36790 = state_34554__$1;
(statearr_34583_36790[(2)] = inst_34531);

(statearr_34583_36790[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (10))){
var inst_34550 = (state_34554[(2)]);
var state_34554__$1 = state_34554;
var statearr_34584_36791 = state_34554__$1;
(statearr_34584_36791[(2)] = inst_34550);

(statearr_34584_36791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (8))){
var inst_34531 = (state_34554[(7)]);
var inst_34541 = cljs.core.next(inst_34531);
var inst_34531__$1 = inst_34541;
var state_34554__$1 = (function (){var statearr_34585 = state_34554;
(statearr_34585[(7)] = inst_34531__$1);

return statearr_34585;
})();
var statearr_34586_36792 = state_34554__$1;
(statearr_34586_36792[(2)] = null);

(statearr_34586_36792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33081__auto__ = null;
var cljs$core$async$state_machine__33081__auto____0 = (function (){
var statearr_34589 = [null,null,null,null,null,null,null,null];
(statearr_34589[(0)] = cljs$core$async$state_machine__33081__auto__);

(statearr_34589[(1)] = (1));

return statearr_34589;
});
var cljs$core$async$state_machine__33081__auto____1 = (function (state_34554){
while(true){
var ret_value__33082__auto__ = (function (){try{while(true){
var result__33083__auto__ = switch__33080__auto__(state_34554);
if(cljs.core.keyword_identical_QMARK_(result__33083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33083__auto__;
}
break;
}
}catch (e34590){var ex__33084__auto__ = e34590;
var statearr_34595_36793 = state_34554;
(statearr_34595_36793[(2)] = ex__33084__auto__);


if(cljs.core.seq((state_34554[(4)]))){
var statearr_34598_36795 = state_34554;
(statearr_34598_36795[(1)] = cljs.core.first((state_34554[(4)])));

} else {
throw ex__33084__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36796 = state_34554;
state_34554 = G__36796;
continue;
} else {
return ret_value__33082__auto__;
}
break;
}
});
cljs$core$async$state_machine__33081__auto__ = function(state_34554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33081__auto____1.call(this,state_34554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33081__auto____0;
cljs$core$async$state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33081__auto____1;
return cljs$core$async$state_machine__33081__auto__;
})()
})();
var state__33275__auto__ = (function (){var statearr_34616 = f__33274__auto__();
(statearr_34616[(6)] = c__33273__auto__);

return statearr_34616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33275__auto__);
}));

return c__33273__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34622 = arguments.length;
switch (G__34622) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_36798 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_36798(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_36799 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_36799(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_36800 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_36800(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_36805 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_36805(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34729 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34729 = (function (ch,cs,meta34730){
this.ch = ch;
this.cs = cs;
this.meta34730 = meta34730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34731,meta34730__$1){
var self__ = this;
var _34731__$1 = this;
return (new cljs.core.async.t_cljs$core$async34729(self__.ch,self__.cs,meta34730__$1));
}));

(cljs.core.async.t_cljs$core$async34729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34731){
var self__ = this;
var _34731__$1 = this;
return self__.meta34730;
}));

(cljs.core.async.t_cljs$core$async34729.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34729.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34729.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34729.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34729.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34729.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34730","meta34730",-1943342224,null)], null);
}));

(cljs.core.async.t_cljs$core$async34729.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34729");

(cljs.core.async.t_cljs$core$async34729.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34729");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34729.
 */
cljs.core.async.__GT_t_cljs$core$async34729 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34729(ch__$1,cs__$1,meta34730){
return (new cljs.core.async.t_cljs$core$async34729(ch__$1,cs__$1,meta34730));
});

}

return (new cljs.core.async.t_cljs$core$async34729(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33273__auto___36841 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33274__auto__ = (function (){var switch__33080__auto__ = (function (state_34916){
var state_val_34917 = (state_34916[(1)]);
if((state_val_34917 === (7))){
var inst_34908 = (state_34916[(2)]);
var state_34916__$1 = state_34916;
var statearr_34918_36843 = state_34916__$1;
(statearr_34918_36843[(2)] = inst_34908);

(statearr_34918_36843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (20))){
var inst_34798 = (state_34916[(7)]);
var inst_34814 = cljs.core.first(inst_34798);
var inst_34815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34814,(0),null);
var inst_34816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34814,(1),null);
var state_34916__$1 = (function (){var statearr_34919 = state_34916;
(statearr_34919[(8)] = inst_34815);

return statearr_34919;
})();
if(cljs.core.truth_(inst_34816)){
var statearr_34921_36851 = state_34916__$1;
(statearr_34921_36851[(1)] = (22));

} else {
var statearr_34923_36852 = state_34916__$1;
(statearr_34923_36852[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (27))){
var inst_34848 = (state_34916[(9)]);
var inst_34761 = (state_34916[(10)]);
var inst_34855 = (state_34916[(11)]);
var inst_34850 = (state_34916[(12)]);
var inst_34855__$1 = cljs.core._nth(inst_34848,inst_34850);
var inst_34856 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34855__$1,inst_34761,done);
var state_34916__$1 = (function (){var statearr_34924 = state_34916;
(statearr_34924[(11)] = inst_34855__$1);

return statearr_34924;
})();
if(cljs.core.truth_(inst_34856)){
var statearr_34926_36853 = state_34916__$1;
(statearr_34926_36853[(1)] = (30));

} else {
var statearr_34928_36854 = state_34916__$1;
(statearr_34928_36854[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (1))){
var state_34916__$1 = state_34916;
var statearr_34929_36855 = state_34916__$1;
(statearr_34929_36855[(2)] = null);

(statearr_34929_36855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (24))){
var inst_34798 = (state_34916[(7)]);
var inst_34821 = (state_34916[(2)]);
var inst_34822 = cljs.core.next(inst_34798);
var inst_34770 = inst_34822;
var inst_34771 = null;
var inst_34772 = (0);
var inst_34773 = (0);
var state_34916__$1 = (function (){var statearr_34930 = state_34916;
(statearr_34930[(13)] = inst_34773);

(statearr_34930[(14)] = inst_34771);

(statearr_34930[(15)] = inst_34772);

(statearr_34930[(16)] = inst_34770);

(statearr_34930[(17)] = inst_34821);

return statearr_34930;
})();
var statearr_34931_36856 = state_34916__$1;
(statearr_34931_36856[(2)] = null);

(statearr_34931_36856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (39))){
var state_34916__$1 = state_34916;
var statearr_34939_36857 = state_34916__$1;
(statearr_34939_36857[(2)] = null);

(statearr_34939_36857[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (4))){
var inst_34761 = (state_34916[(10)]);
var inst_34761__$1 = (state_34916[(2)]);
var inst_34762 = (inst_34761__$1 == null);
var state_34916__$1 = (function (){var statearr_34940 = state_34916;
(statearr_34940[(10)] = inst_34761__$1);

return statearr_34940;
})();
if(cljs.core.truth_(inst_34762)){
var statearr_34941_36866 = state_34916__$1;
(statearr_34941_36866[(1)] = (5));

} else {
var statearr_34942_36873 = state_34916__$1;
(statearr_34942_36873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (15))){
var inst_34773 = (state_34916[(13)]);
var inst_34771 = (state_34916[(14)]);
var inst_34772 = (state_34916[(15)]);
var inst_34770 = (state_34916[(16)]);
var inst_34794 = (state_34916[(2)]);
var inst_34795 = (inst_34773 + (1));
var tmp34936 = inst_34771;
var tmp34937 = inst_34772;
var tmp34938 = inst_34770;
var inst_34770__$1 = tmp34938;
var inst_34771__$1 = tmp34936;
var inst_34772__$1 = tmp34937;
var inst_34773__$1 = inst_34795;
var state_34916__$1 = (function (){var statearr_34949 = state_34916;
(statearr_34949[(13)] = inst_34773__$1);

(statearr_34949[(14)] = inst_34771__$1);

(statearr_34949[(15)] = inst_34772__$1);

(statearr_34949[(16)] = inst_34770__$1);

(statearr_34949[(18)] = inst_34794);

return statearr_34949;
})();
var statearr_34951_36874 = state_34916__$1;
(statearr_34951_36874[(2)] = null);

(statearr_34951_36874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (21))){
var inst_34825 = (state_34916[(2)]);
var state_34916__$1 = state_34916;
var statearr_34955_36878 = state_34916__$1;
(statearr_34955_36878[(2)] = inst_34825);

(statearr_34955_36878[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (31))){
var inst_34855 = (state_34916[(11)]);
var inst_34859 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34855);
var state_34916__$1 = state_34916;
var statearr_34957_36882 = state_34916__$1;
(statearr_34957_36882[(2)] = inst_34859);

(statearr_34957_36882[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (32))){
var inst_34848 = (state_34916[(9)]);
var inst_34849 = (state_34916[(19)]);
var inst_34850 = (state_34916[(12)]);
var inst_34847 = (state_34916[(20)]);
var inst_34861 = (state_34916[(2)]);
var inst_34862 = (inst_34850 + (1));
var tmp34952 = inst_34848;
var tmp34953 = inst_34849;
var tmp34954 = inst_34847;
var inst_34847__$1 = tmp34954;
var inst_34848__$1 = tmp34952;
var inst_34849__$1 = tmp34953;
var inst_34850__$1 = inst_34862;
var state_34916__$1 = (function (){var statearr_34958 = state_34916;
(statearr_34958[(9)] = inst_34848__$1);

(statearr_34958[(19)] = inst_34849__$1);

(statearr_34958[(12)] = inst_34850__$1);

(statearr_34958[(21)] = inst_34861);

(statearr_34958[(20)] = inst_34847__$1);

return statearr_34958;
})();
var statearr_34960_36887 = state_34916__$1;
(statearr_34960_36887[(2)] = null);

(statearr_34960_36887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (40))){
var inst_34876 = (state_34916[(22)]);
var inst_34885 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34876);
var state_34916__$1 = state_34916;
var statearr_34961_36888 = state_34916__$1;
(statearr_34961_36888[(2)] = inst_34885);

(statearr_34961_36888[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (33))){
var inst_34865 = (state_34916[(23)]);
var inst_34869 = cljs.core.chunked_seq_QMARK_(inst_34865);
var state_34916__$1 = state_34916;
if(inst_34869){
var statearr_34963_36889 = state_34916__$1;
(statearr_34963_36889[(1)] = (36));

} else {
var statearr_34967_36890 = state_34916__$1;
(statearr_34967_36890[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (13))){
var inst_34785 = (state_34916[(24)]);
var inst_34791 = cljs.core.async.close_BANG_(inst_34785);
var state_34916__$1 = state_34916;
var statearr_34969_36893 = state_34916__$1;
(statearr_34969_36893[(2)] = inst_34791);

(statearr_34969_36893[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (22))){
var inst_34815 = (state_34916[(8)]);
var inst_34818 = cljs.core.async.close_BANG_(inst_34815);
var state_34916__$1 = state_34916;
var statearr_34976_36894 = state_34916__$1;
(statearr_34976_36894[(2)] = inst_34818);

(statearr_34976_36894[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (36))){
var inst_34865 = (state_34916[(23)]);
var inst_34871 = cljs.core.chunk_first(inst_34865);
var inst_34872 = cljs.core.chunk_rest(inst_34865);
var inst_34873 = cljs.core.count(inst_34871);
var inst_34847 = inst_34872;
var inst_34848 = inst_34871;
var inst_34849 = inst_34873;
var inst_34850 = (0);
var state_34916__$1 = (function (){var statearr_34979 = state_34916;
(statearr_34979[(9)] = inst_34848);

(statearr_34979[(19)] = inst_34849);

(statearr_34979[(12)] = inst_34850);

(statearr_34979[(20)] = inst_34847);

return statearr_34979;
})();
var statearr_34980_36899 = state_34916__$1;
(statearr_34980_36899[(2)] = null);

(statearr_34980_36899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (41))){
var inst_34865 = (state_34916[(23)]);
var inst_34887 = (state_34916[(2)]);
var inst_34888 = cljs.core.next(inst_34865);
var inst_34847 = inst_34888;
var inst_34848 = null;
var inst_34849 = (0);
var inst_34850 = (0);
var state_34916__$1 = (function (){var statearr_34986 = state_34916;
(statearr_34986[(9)] = inst_34848);

(statearr_34986[(19)] = inst_34849);

(statearr_34986[(12)] = inst_34850);

(statearr_34986[(25)] = inst_34887);

(statearr_34986[(20)] = inst_34847);

return statearr_34986;
})();
var statearr_34988_36900 = state_34916__$1;
(statearr_34988_36900[(2)] = null);

(statearr_34988_36900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (43))){
var state_34916__$1 = state_34916;
var statearr_34991_36902 = state_34916__$1;
(statearr_34991_36902[(2)] = null);

(statearr_34991_36902[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (29))){
var inst_34896 = (state_34916[(2)]);
var state_34916__$1 = state_34916;
var statearr_34999_36903 = state_34916__$1;
(statearr_34999_36903[(2)] = inst_34896);

(statearr_34999_36903[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (44))){
var inst_34905 = (state_34916[(2)]);
var state_34916__$1 = (function (){var statearr_35000 = state_34916;
(statearr_35000[(26)] = inst_34905);

return statearr_35000;
})();
var statearr_35001_36904 = state_34916__$1;
(statearr_35001_36904[(2)] = null);

(statearr_35001_36904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (6))){
var inst_34835 = (state_34916[(27)]);
var inst_34834 = cljs.core.deref(cs);
var inst_34835__$1 = cljs.core.keys(inst_34834);
var inst_34838 = cljs.core.count(inst_34835__$1);
var inst_34839 = cljs.core.reset_BANG_(dctr,inst_34838);
var inst_34846 = cljs.core.seq(inst_34835__$1);
var inst_34847 = inst_34846;
var inst_34848 = null;
var inst_34849 = (0);
var inst_34850 = (0);
var state_34916__$1 = (function (){var statearr_35024 = state_34916;
(statearr_35024[(9)] = inst_34848);

(statearr_35024[(27)] = inst_34835__$1);

(statearr_35024[(19)] = inst_34849);

(statearr_35024[(12)] = inst_34850);

(statearr_35024[(28)] = inst_34839);

(statearr_35024[(20)] = inst_34847);

return statearr_35024;
})();
var statearr_35031_36918 = state_34916__$1;
(statearr_35031_36918[(2)] = null);

(statearr_35031_36918[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (28))){
var inst_34865 = (state_34916[(23)]);
var inst_34847 = (state_34916[(20)]);
var inst_34865__$1 = cljs.core.seq(inst_34847);
var state_34916__$1 = (function (){var statearr_35034 = state_34916;
(statearr_35034[(23)] = inst_34865__$1);

return statearr_35034;
})();
if(inst_34865__$1){
var statearr_35035_36919 = state_34916__$1;
(statearr_35035_36919[(1)] = (33));

} else {
var statearr_35036_36920 = state_34916__$1;
(statearr_35036_36920[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (25))){
var inst_34849 = (state_34916[(19)]);
var inst_34850 = (state_34916[(12)]);
var inst_34852 = (inst_34850 < inst_34849);
var inst_34853 = inst_34852;
var state_34916__$1 = state_34916;
if(cljs.core.truth_(inst_34853)){
var statearr_35041_36924 = state_34916__$1;
(statearr_35041_36924[(1)] = (27));

} else {
var statearr_35043_36925 = state_34916__$1;
(statearr_35043_36925[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (34))){
var state_34916__$1 = state_34916;
var statearr_35047_36926 = state_34916__$1;
(statearr_35047_36926[(2)] = null);

(statearr_35047_36926[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (17))){
var state_34916__$1 = state_34916;
var statearr_35050_36927 = state_34916__$1;
(statearr_35050_36927[(2)] = null);

(statearr_35050_36927[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (3))){
var inst_34910 = (state_34916[(2)]);
var state_34916__$1 = state_34916;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34916__$1,inst_34910);
} else {
if((state_val_34917 === (12))){
var inst_34830 = (state_34916[(2)]);
var state_34916__$1 = state_34916;
var statearr_35057_36928 = state_34916__$1;
(statearr_35057_36928[(2)] = inst_34830);

(statearr_35057_36928[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (2))){
var state_34916__$1 = state_34916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34916__$1,(4),ch);
} else {
if((state_val_34917 === (23))){
var state_34916__$1 = state_34916;
var statearr_35064_36929 = state_34916__$1;
(statearr_35064_36929[(2)] = null);

(statearr_35064_36929[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (35))){
var inst_34894 = (state_34916[(2)]);
var state_34916__$1 = state_34916;
var statearr_35067_36930 = state_34916__$1;
(statearr_35067_36930[(2)] = inst_34894);

(statearr_35067_36930[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (19))){
var inst_34798 = (state_34916[(7)]);
var inst_34803 = cljs.core.chunk_first(inst_34798);
var inst_34804 = cljs.core.chunk_rest(inst_34798);
var inst_34805 = cljs.core.count(inst_34803);
var inst_34770 = inst_34804;
var inst_34771 = inst_34803;
var inst_34772 = inst_34805;
var inst_34773 = (0);
var state_34916__$1 = (function (){var statearr_35071 = state_34916;
(statearr_35071[(13)] = inst_34773);

(statearr_35071[(14)] = inst_34771);

(statearr_35071[(15)] = inst_34772);

(statearr_35071[(16)] = inst_34770);

return statearr_35071;
})();
var statearr_35073_36931 = state_34916__$1;
(statearr_35073_36931[(2)] = null);

(statearr_35073_36931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (11))){
var inst_34798 = (state_34916[(7)]);
var inst_34770 = (state_34916[(16)]);
var inst_34798__$1 = cljs.core.seq(inst_34770);
var state_34916__$1 = (function (){var statearr_35078 = state_34916;
(statearr_35078[(7)] = inst_34798__$1);

return statearr_35078;
})();
if(inst_34798__$1){
var statearr_35080_36932 = state_34916__$1;
(statearr_35080_36932[(1)] = (16));

} else {
var statearr_35081_36933 = state_34916__$1;
(statearr_35081_36933[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (9))){
var inst_34832 = (state_34916[(2)]);
var state_34916__$1 = state_34916;
var statearr_35082_36934 = state_34916__$1;
(statearr_35082_36934[(2)] = inst_34832);

(statearr_35082_36934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (5))){
var inst_34768 = cljs.core.deref(cs);
var inst_34769 = cljs.core.seq(inst_34768);
var inst_34770 = inst_34769;
var inst_34771 = null;
var inst_34772 = (0);
var inst_34773 = (0);
var state_34916__$1 = (function (){var statearr_35083 = state_34916;
(statearr_35083[(13)] = inst_34773);

(statearr_35083[(14)] = inst_34771);

(statearr_35083[(15)] = inst_34772);

(statearr_35083[(16)] = inst_34770);

return statearr_35083;
})();
var statearr_35087_36935 = state_34916__$1;
(statearr_35087_36935[(2)] = null);

(statearr_35087_36935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (14))){
var state_34916__$1 = state_34916;
var statearr_35092_36942 = state_34916__$1;
(statearr_35092_36942[(2)] = null);

(statearr_35092_36942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (45))){
var inst_34902 = (state_34916[(2)]);
var state_34916__$1 = state_34916;
var statearr_35098_36943 = state_34916__$1;
(statearr_35098_36943[(2)] = inst_34902);

(statearr_35098_36943[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (26))){
var inst_34835 = (state_34916[(27)]);
var inst_34898 = (state_34916[(2)]);
var inst_34899 = cljs.core.seq(inst_34835);
var state_34916__$1 = (function (){var statearr_35103 = state_34916;
(statearr_35103[(29)] = inst_34898);

return statearr_35103;
})();
if(inst_34899){
var statearr_35108_36944 = state_34916__$1;
(statearr_35108_36944[(1)] = (42));

} else {
var statearr_35114_36945 = state_34916__$1;
(statearr_35114_36945[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (16))){
var inst_34798 = (state_34916[(7)]);
var inst_34800 = cljs.core.chunked_seq_QMARK_(inst_34798);
var state_34916__$1 = state_34916;
if(inst_34800){
var statearr_35117_36946 = state_34916__$1;
(statearr_35117_36946[(1)] = (19));

} else {
var statearr_35118_36947 = state_34916__$1;
(statearr_35118_36947[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (38))){
var inst_34891 = (state_34916[(2)]);
var state_34916__$1 = state_34916;
var statearr_35119_36948 = state_34916__$1;
(statearr_35119_36948[(2)] = inst_34891);

(statearr_35119_36948[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (30))){
var state_34916__$1 = state_34916;
var statearr_35120_36949 = state_34916__$1;
(statearr_35120_36949[(2)] = null);

(statearr_35120_36949[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (10))){
var inst_34773 = (state_34916[(13)]);
var inst_34771 = (state_34916[(14)]);
var inst_34782 = cljs.core._nth(inst_34771,inst_34773);
var inst_34785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34782,(0),null);
var inst_34786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34782,(1),null);
var state_34916__$1 = (function (){var statearr_35122 = state_34916;
(statearr_35122[(24)] = inst_34785);

return statearr_35122;
})();
if(cljs.core.truth_(inst_34786)){
var statearr_35127_36950 = state_34916__$1;
(statearr_35127_36950[(1)] = (13));

} else {
var statearr_35128_36951 = state_34916__$1;
(statearr_35128_36951[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (18))){
var inst_34828 = (state_34916[(2)]);
var state_34916__$1 = state_34916;
var statearr_35129_36952 = state_34916__$1;
(statearr_35129_36952[(2)] = inst_34828);

(statearr_35129_36952[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (42))){
var state_34916__$1 = state_34916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34916__$1,(45),dchan);
} else {
if((state_val_34917 === (37))){
var inst_34865 = (state_34916[(23)]);
var inst_34876 = (state_34916[(22)]);
var inst_34761 = (state_34916[(10)]);
var inst_34876__$1 = cljs.core.first(inst_34865);
var inst_34878 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34876__$1,inst_34761,done);
var state_34916__$1 = (function (){var statearr_35130 = state_34916;
(statearr_35130[(22)] = inst_34876__$1);

return statearr_35130;
})();
if(cljs.core.truth_(inst_34878)){
var statearr_35132_36953 = state_34916__$1;
(statearr_35132_36953[(1)] = (39));

} else {
var statearr_35137_36954 = state_34916__$1;
(statearr_35137_36954[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (8))){
var inst_34773 = (state_34916[(13)]);
var inst_34772 = (state_34916[(15)]);
var inst_34775 = (inst_34773 < inst_34772);
var inst_34776 = inst_34775;
var state_34916__$1 = state_34916;
if(cljs.core.truth_(inst_34776)){
var statearr_35141_36955 = state_34916__$1;
(statearr_35141_36955[(1)] = (10));

} else {
var statearr_35142_36956 = state_34916__$1;
(statearr_35142_36956[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__33081__auto__ = null;
var cljs$core$async$mult_$_state_machine__33081__auto____0 = (function (){
var statearr_35144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35144[(0)] = cljs$core$async$mult_$_state_machine__33081__auto__);

(statearr_35144[(1)] = (1));

return statearr_35144;
});
var cljs$core$async$mult_$_state_machine__33081__auto____1 = (function (state_34916){
while(true){
var ret_value__33082__auto__ = (function (){try{while(true){
var result__33083__auto__ = switch__33080__auto__(state_34916);
if(cljs.core.keyword_identical_QMARK_(result__33083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33083__auto__;
}
break;
}
}catch (e35145){var ex__33084__auto__ = e35145;
var statearr_35146_36957 = state_34916;
(statearr_35146_36957[(2)] = ex__33084__auto__);


if(cljs.core.seq((state_34916[(4)]))){
var statearr_35147_36958 = state_34916;
(statearr_35147_36958[(1)] = cljs.core.first((state_34916[(4)])));

} else {
throw ex__33084__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36959 = state_34916;
state_34916 = G__36959;
continue;
} else {
return ret_value__33082__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33081__auto__ = function(state_34916){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33081__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33081__auto____1.call(this,state_34916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33081__auto____0;
cljs$core$async$mult_$_state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33081__auto____1;
return cljs$core$async$mult_$_state_machine__33081__auto__;
})()
})();
var state__33275__auto__ = (function (){var statearr_35148 = f__33274__auto__();
(statearr_35148[(6)] = c__33273__auto___36841);

return statearr_35148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33275__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__35153 = arguments.length;
switch (G__35153) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_36967 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_36967(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_36968 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_36968(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_36969 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_36969(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_36970 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_36970(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_36971 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_36971(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36972 = arguments.length;
var i__5770__auto___36973 = (0);
while(true){
if((i__5770__auto___36973 < len__5769__auto___36972)){
args__5775__auto__.push((arguments[i__5770__auto___36973]));

var G__36974 = (i__5770__auto___36973 + (1));
i__5770__auto___36973 = G__36974;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35216){
var map__35217 = p__35216;
var map__35217__$1 = cljs.core.__destructure_map(map__35217);
var opts = map__35217__$1;
var statearr_35218_36975 = state;
(statearr_35218_36975[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35221_36976 = state;
(statearr_35221_36976[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_35222_36983 = state;
(statearr_35222_36983[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35208){
var G__35209 = cljs.core.first(seq35208);
var seq35208__$1 = cljs.core.next(seq35208);
var G__35210 = cljs.core.first(seq35208__$1);
var seq35208__$2 = cljs.core.next(seq35208__$1);
var G__35211 = cljs.core.first(seq35208__$2);
var seq35208__$3 = cljs.core.next(seq35208__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35209,G__35210,G__35211,seq35208__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35226 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35226 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35227){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35227 = meta35227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35228,meta35227__$1){
var self__ = this;
var _35228__$1 = this;
return (new cljs.core.async.t_cljs$core$async35226(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35227__$1));
}));

(cljs.core.async.t_cljs$core$async35226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35228){
var self__ = this;
var _35228__$1 = this;
return self__.meta35227;
}));

(cljs.core.async.t_cljs$core$async35226.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35226.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35226.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35226.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35226.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35226.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35226.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35226.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35226.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35227","meta35227",1696432487,null)], null);
}));

(cljs.core.async.t_cljs$core$async35226.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35226");

(cljs.core.async.t_cljs$core$async35226.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35226");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35226.
 */
cljs.core.async.__GT_t_cljs$core$async35226 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35226(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35227){
return (new cljs.core.async.t_cljs$core$async35226(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35227));
});

}

return (new cljs.core.async.t_cljs$core$async35226(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33273__auto___36995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33274__auto__ = (function (){var switch__33080__auto__ = (function (state_35306){
var state_val_35307 = (state_35306[(1)]);
if((state_val_35307 === (7))){
var inst_35264 = (state_35306[(2)]);
var state_35306__$1 = state_35306;
if(cljs.core.truth_(inst_35264)){
var statearr_35308_36996 = state_35306__$1;
(statearr_35308_36996[(1)] = (8));

} else {
var statearr_35309_36997 = state_35306__$1;
(statearr_35309_36997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (20))){
var inst_35257 = (state_35306[(7)]);
var state_35306__$1 = state_35306;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35306__$1,(23),out,inst_35257);
} else {
if((state_val_35307 === (1))){
var inst_35240 = calc_state();
var inst_35241 = cljs.core.__destructure_map(inst_35240);
var inst_35242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35241,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35241,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35241,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35245 = inst_35240;
var state_35306__$1 = (function (){var statearr_35310 = state_35306;
(statearr_35310[(8)] = inst_35245);

(statearr_35310[(9)] = inst_35243);

(statearr_35310[(10)] = inst_35242);

(statearr_35310[(11)] = inst_35244);

return statearr_35310;
})();
var statearr_35312_36998 = state_35306__$1;
(statearr_35312_36998[(2)] = null);

(statearr_35312_36998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (24))){
var inst_35248 = (state_35306[(12)]);
var inst_35245 = inst_35248;
var state_35306__$1 = (function (){var statearr_35313 = state_35306;
(statearr_35313[(8)] = inst_35245);

return statearr_35313;
})();
var statearr_35314_36999 = state_35306__$1;
(statearr_35314_36999[(2)] = null);

(statearr_35314_36999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (4))){
var inst_35257 = (state_35306[(7)]);
var inst_35259 = (state_35306[(13)]);
var inst_35256 = (state_35306[(2)]);
var inst_35257__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35256,(0),null);
var inst_35258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35256,(1),null);
var inst_35259__$1 = (inst_35257__$1 == null);
var state_35306__$1 = (function (){var statearr_35315 = state_35306;
(statearr_35315[(7)] = inst_35257__$1);

(statearr_35315[(13)] = inst_35259__$1);

(statearr_35315[(14)] = inst_35258);

return statearr_35315;
})();
if(cljs.core.truth_(inst_35259__$1)){
var statearr_35316_37000 = state_35306__$1;
(statearr_35316_37000[(1)] = (5));

} else {
var statearr_35317_37001 = state_35306__$1;
(statearr_35317_37001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (15))){
var inst_35249 = (state_35306[(15)]);
var inst_35279 = (state_35306[(16)]);
var inst_35279__$1 = cljs.core.empty_QMARK_(inst_35249);
var state_35306__$1 = (function (){var statearr_35318 = state_35306;
(statearr_35318[(16)] = inst_35279__$1);

return statearr_35318;
})();
if(inst_35279__$1){
var statearr_35319_37002 = state_35306__$1;
(statearr_35319_37002[(1)] = (17));

} else {
var statearr_35320_37003 = state_35306__$1;
(statearr_35320_37003[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (21))){
var inst_35248 = (state_35306[(12)]);
var inst_35245 = inst_35248;
var state_35306__$1 = (function (){var statearr_35322 = state_35306;
(statearr_35322[(8)] = inst_35245);

return statearr_35322;
})();
var statearr_35323_37005 = state_35306__$1;
(statearr_35323_37005[(2)] = null);

(statearr_35323_37005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (13))){
var inst_35271 = (state_35306[(2)]);
var inst_35272 = calc_state();
var inst_35245 = inst_35272;
var state_35306__$1 = (function (){var statearr_35324 = state_35306;
(statearr_35324[(8)] = inst_35245);

(statearr_35324[(17)] = inst_35271);

return statearr_35324;
})();
var statearr_35325_37010 = state_35306__$1;
(statearr_35325_37010[(2)] = null);

(statearr_35325_37010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (22))){
var inst_35300 = (state_35306[(2)]);
var state_35306__$1 = state_35306;
var statearr_35326_37011 = state_35306__$1;
(statearr_35326_37011[(2)] = inst_35300);

(statearr_35326_37011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (6))){
var inst_35258 = (state_35306[(14)]);
var inst_35262 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35258,change);
var state_35306__$1 = state_35306;
var statearr_35327_37012 = state_35306__$1;
(statearr_35327_37012[(2)] = inst_35262);

(statearr_35327_37012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (25))){
var state_35306__$1 = state_35306;
var statearr_35329_37014 = state_35306__$1;
(statearr_35329_37014[(2)] = null);

(statearr_35329_37014[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (17))){
var inst_35250 = (state_35306[(18)]);
var inst_35258 = (state_35306[(14)]);
var inst_35281 = (inst_35250.cljs$core$IFn$_invoke$arity$1 ? inst_35250.cljs$core$IFn$_invoke$arity$1(inst_35258) : inst_35250.call(null,inst_35258));
var inst_35282 = cljs.core.not(inst_35281);
var state_35306__$1 = state_35306;
var statearr_35333_37016 = state_35306__$1;
(statearr_35333_37016[(2)] = inst_35282);

(statearr_35333_37016[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (3))){
var inst_35304 = (state_35306[(2)]);
var state_35306__$1 = state_35306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35306__$1,inst_35304);
} else {
if((state_val_35307 === (12))){
var state_35306__$1 = state_35306;
var statearr_35337_37017 = state_35306__$1;
(statearr_35337_37017[(2)] = null);

(statearr_35337_37017[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (2))){
var inst_35245 = (state_35306[(8)]);
var inst_35248 = (state_35306[(12)]);
var inst_35248__$1 = cljs.core.__destructure_map(inst_35245);
var inst_35249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35248__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35248__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35248__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35306__$1 = (function (){var statearr_35341 = state_35306;
(statearr_35341[(15)] = inst_35249);

(statearr_35341[(18)] = inst_35250);

(statearr_35341[(12)] = inst_35248__$1);

return statearr_35341;
})();
return cljs.core.async.ioc_alts_BANG_(state_35306__$1,(4),inst_35251);
} else {
if((state_val_35307 === (23))){
var inst_35291 = (state_35306[(2)]);
var state_35306__$1 = state_35306;
if(cljs.core.truth_(inst_35291)){
var statearr_35342_37020 = state_35306__$1;
(statearr_35342_37020[(1)] = (24));

} else {
var statearr_35343_37021 = state_35306__$1;
(statearr_35343_37021[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (19))){
var inst_35285 = (state_35306[(2)]);
var state_35306__$1 = state_35306;
var statearr_35345_37022 = state_35306__$1;
(statearr_35345_37022[(2)] = inst_35285);

(statearr_35345_37022[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (11))){
var inst_35258 = (state_35306[(14)]);
var inst_35268 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35258);
var state_35306__$1 = state_35306;
var statearr_35347_37023 = state_35306__$1;
(statearr_35347_37023[(2)] = inst_35268);

(statearr_35347_37023[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (9))){
var inst_35249 = (state_35306[(15)]);
var inst_35276 = (state_35306[(19)]);
var inst_35258 = (state_35306[(14)]);
var inst_35276__$1 = (inst_35249.cljs$core$IFn$_invoke$arity$1 ? inst_35249.cljs$core$IFn$_invoke$arity$1(inst_35258) : inst_35249.call(null,inst_35258));
var state_35306__$1 = (function (){var statearr_35348 = state_35306;
(statearr_35348[(19)] = inst_35276__$1);

return statearr_35348;
})();
if(cljs.core.truth_(inst_35276__$1)){
var statearr_35350_37024 = state_35306__$1;
(statearr_35350_37024[(1)] = (14));

} else {
var statearr_35352_37026 = state_35306__$1;
(statearr_35352_37026[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (5))){
var inst_35259 = (state_35306[(13)]);
var state_35306__$1 = state_35306;
var statearr_35353_37027 = state_35306__$1;
(statearr_35353_37027[(2)] = inst_35259);

(statearr_35353_37027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (14))){
var inst_35276 = (state_35306[(19)]);
var state_35306__$1 = state_35306;
var statearr_35354_37028 = state_35306__$1;
(statearr_35354_37028[(2)] = inst_35276);

(statearr_35354_37028[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (26))){
var inst_35296 = (state_35306[(2)]);
var state_35306__$1 = state_35306;
var statearr_35355_37030 = state_35306__$1;
(statearr_35355_37030[(2)] = inst_35296);

(statearr_35355_37030[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (16))){
var inst_35287 = (state_35306[(2)]);
var state_35306__$1 = state_35306;
if(cljs.core.truth_(inst_35287)){
var statearr_35356_37031 = state_35306__$1;
(statearr_35356_37031[(1)] = (20));

} else {
var statearr_35358_37032 = state_35306__$1;
(statearr_35358_37032[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (10))){
var inst_35302 = (state_35306[(2)]);
var state_35306__$1 = state_35306;
var statearr_35359_37033 = state_35306__$1;
(statearr_35359_37033[(2)] = inst_35302);

(statearr_35359_37033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (18))){
var inst_35279 = (state_35306[(16)]);
var state_35306__$1 = state_35306;
var statearr_35360_37034 = state_35306__$1;
(statearr_35360_37034[(2)] = inst_35279);

(statearr_35360_37034[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (8))){
var inst_35257 = (state_35306[(7)]);
var inst_35266 = (inst_35257 == null);
var state_35306__$1 = state_35306;
if(cljs.core.truth_(inst_35266)){
var statearr_35363_37036 = state_35306__$1;
(statearr_35363_37036[(1)] = (11));

} else {
var statearr_35365_37037 = state_35306__$1;
(statearr_35365_37037[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__33081__auto__ = null;
var cljs$core$async$mix_$_state_machine__33081__auto____0 = (function (){
var statearr_35366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35366[(0)] = cljs$core$async$mix_$_state_machine__33081__auto__);

(statearr_35366[(1)] = (1));

return statearr_35366;
});
var cljs$core$async$mix_$_state_machine__33081__auto____1 = (function (state_35306){
while(true){
var ret_value__33082__auto__ = (function (){try{while(true){
var result__33083__auto__ = switch__33080__auto__(state_35306);
if(cljs.core.keyword_identical_QMARK_(result__33083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33083__auto__;
}
break;
}
}catch (e35367){var ex__33084__auto__ = e35367;
var statearr_35368_37039 = state_35306;
(statearr_35368_37039[(2)] = ex__33084__auto__);


if(cljs.core.seq((state_35306[(4)]))){
var statearr_35369_37040 = state_35306;
(statearr_35369_37040[(1)] = cljs.core.first((state_35306[(4)])));

} else {
throw ex__33084__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37043 = state_35306;
state_35306 = G__37043;
continue;
} else {
return ret_value__33082__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33081__auto__ = function(state_35306){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33081__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33081__auto____1.call(this,state_35306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33081__auto____0;
cljs$core$async$mix_$_state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33081__auto____1;
return cljs$core$async$mix_$_state_machine__33081__auto__;
})()
})();
var state__33275__auto__ = (function (){var statearr_35372 = f__33274__auto__();
(statearr_35372[(6)] = c__33273__auto___36995);

return statearr_35372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33275__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_37044 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_37044(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_37046 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_37046(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_37049 = (function() {
var G__37050 = null;
var G__37050__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__37050__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__37050 = function(p,v){
switch(arguments.length){
case 1:
return G__37050__1.call(this,p);
case 2:
return G__37050__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37050.cljs$core$IFn$_invoke$arity$1 = G__37050__1;
G__37050.cljs$core$IFn$_invoke$arity$2 = G__37050__2;
return G__37050;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35383 = arguments.length;
switch (G__35383) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37049(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37049(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35387 = arguments.length;
switch (G__35387) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35384_SHARP_){
if(cljs.core.truth_((p1__35384_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35384_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35384_SHARP_.call(null,topic)))){
return p1__35384_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35384_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35389 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35389 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35390){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35390 = meta35390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35391,meta35390__$1){
var self__ = this;
var _35391__$1 = this;
return (new cljs.core.async.t_cljs$core$async35389(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35390__$1));
}));

(cljs.core.async.t_cljs$core$async35389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35391){
var self__ = this;
var _35391__$1 = this;
return self__.meta35390;
}));

(cljs.core.async.t_cljs$core$async35389.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35389.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35389.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35389.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35389.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async35389.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35389.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35390","meta35390",-708131764,null)], null);
}));

(cljs.core.async.t_cljs$core$async35389.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35389");

(cljs.core.async.t_cljs$core$async35389.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35389");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35389.
 */
cljs.core.async.__GT_t_cljs$core$async35389 = (function cljs$core$async$__GT_t_cljs$core$async35389(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35390){
return (new cljs.core.async.t_cljs$core$async35389(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35390));
});

}

return (new cljs.core.async.t_cljs$core$async35389(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33273__auto___37065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33274__auto__ = (function (){var switch__33080__auto__ = (function (state_35466){
var state_val_35467 = (state_35466[(1)]);
if((state_val_35467 === (7))){
var inst_35462 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
var statearr_35468_37066 = state_35466__$1;
(statearr_35468_37066[(2)] = inst_35462);

(statearr_35468_37066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (20))){
var state_35466__$1 = state_35466;
var statearr_35469_37067 = state_35466__$1;
(statearr_35469_37067[(2)] = null);

(statearr_35469_37067[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (1))){
var state_35466__$1 = state_35466;
var statearr_35471_37068 = state_35466__$1;
(statearr_35471_37068[(2)] = null);

(statearr_35471_37068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (24))){
var inst_35445 = (state_35466[(7)]);
var inst_35454 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35445);
var state_35466__$1 = state_35466;
var statearr_35472_37070 = state_35466__$1;
(statearr_35472_37070[(2)] = inst_35454);

(statearr_35472_37070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (4))){
var inst_35396 = (state_35466[(8)]);
var inst_35396__$1 = (state_35466[(2)]);
var inst_35397 = (inst_35396__$1 == null);
var state_35466__$1 = (function (){var statearr_35473 = state_35466;
(statearr_35473[(8)] = inst_35396__$1);

return statearr_35473;
})();
if(cljs.core.truth_(inst_35397)){
var statearr_35474_37071 = state_35466__$1;
(statearr_35474_37071[(1)] = (5));

} else {
var statearr_35475_37072 = state_35466__$1;
(statearr_35475_37072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (15))){
var inst_35439 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
var statearr_35476_37073 = state_35466__$1;
(statearr_35476_37073[(2)] = inst_35439);

(statearr_35476_37073[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (21))){
var inst_35459 = (state_35466[(2)]);
var state_35466__$1 = (function (){var statearr_35477 = state_35466;
(statearr_35477[(9)] = inst_35459);

return statearr_35477;
})();
var statearr_35478_37077 = state_35466__$1;
(statearr_35478_37077[(2)] = null);

(statearr_35478_37077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (13))){
var inst_35420 = (state_35466[(10)]);
var inst_35422 = cljs.core.chunked_seq_QMARK_(inst_35420);
var state_35466__$1 = state_35466;
if(inst_35422){
var statearr_35479_37083 = state_35466__$1;
(statearr_35479_37083[(1)] = (16));

} else {
var statearr_35481_37087 = state_35466__$1;
(statearr_35481_37087[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (22))){
var inst_35451 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
if(cljs.core.truth_(inst_35451)){
var statearr_35482_37088 = state_35466__$1;
(statearr_35482_37088[(1)] = (23));

} else {
var statearr_35483_37089 = state_35466__$1;
(statearr_35483_37089[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (6))){
var inst_35396 = (state_35466[(8)]);
var inst_35445 = (state_35466[(7)]);
var inst_35447 = (state_35466[(11)]);
var inst_35445__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35396) : topic_fn.call(null,inst_35396));
var inst_35446 = cljs.core.deref(mults);
var inst_35447__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35446,inst_35445__$1);
var state_35466__$1 = (function (){var statearr_35484 = state_35466;
(statearr_35484[(7)] = inst_35445__$1);

(statearr_35484[(11)] = inst_35447__$1);

return statearr_35484;
})();
if(cljs.core.truth_(inst_35447__$1)){
var statearr_35485_37093 = state_35466__$1;
(statearr_35485_37093[(1)] = (19));

} else {
var statearr_35486_37095 = state_35466__$1;
(statearr_35486_37095[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (25))){
var inst_35456 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
var statearr_35487_37096 = state_35466__$1;
(statearr_35487_37096[(2)] = inst_35456);

(statearr_35487_37096[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (17))){
var inst_35420 = (state_35466[(10)]);
var inst_35430 = cljs.core.first(inst_35420);
var inst_35431 = cljs.core.async.muxch_STAR_(inst_35430);
var inst_35432 = cljs.core.async.close_BANG_(inst_35431);
var inst_35433 = cljs.core.next(inst_35420);
var inst_35406 = inst_35433;
var inst_35407 = null;
var inst_35408 = (0);
var inst_35409 = (0);
var state_35466__$1 = (function (){var statearr_35488 = state_35466;
(statearr_35488[(12)] = inst_35408);

(statearr_35488[(13)] = inst_35407);

(statearr_35488[(14)] = inst_35409);

(statearr_35488[(15)] = inst_35432);

(statearr_35488[(16)] = inst_35406);

return statearr_35488;
})();
var statearr_35490_37097 = state_35466__$1;
(statearr_35490_37097[(2)] = null);

(statearr_35490_37097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (3))){
var inst_35464 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35466__$1,inst_35464);
} else {
if((state_val_35467 === (12))){
var inst_35441 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
var statearr_35491_37099 = state_35466__$1;
(statearr_35491_37099[(2)] = inst_35441);

(statearr_35491_37099[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (2))){
var state_35466__$1 = state_35466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35466__$1,(4),ch);
} else {
if((state_val_35467 === (23))){
var state_35466__$1 = state_35466;
var statearr_35492_37107 = state_35466__$1;
(statearr_35492_37107[(2)] = null);

(statearr_35492_37107[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (19))){
var inst_35396 = (state_35466[(8)]);
var inst_35447 = (state_35466[(11)]);
var inst_35449 = cljs.core.async.muxch_STAR_(inst_35447);
var state_35466__$1 = state_35466;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35466__$1,(22),inst_35449,inst_35396);
} else {
if((state_val_35467 === (11))){
var inst_35420 = (state_35466[(10)]);
var inst_35406 = (state_35466[(16)]);
var inst_35420__$1 = cljs.core.seq(inst_35406);
var state_35466__$1 = (function (){var statearr_35493 = state_35466;
(statearr_35493[(10)] = inst_35420__$1);

return statearr_35493;
})();
if(inst_35420__$1){
var statearr_35494_37115 = state_35466__$1;
(statearr_35494_37115[(1)] = (13));

} else {
var statearr_35495_37116 = state_35466__$1;
(statearr_35495_37116[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (9))){
var inst_35443 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
var statearr_35497_37117 = state_35466__$1;
(statearr_35497_37117[(2)] = inst_35443);

(statearr_35497_37117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (5))){
var inst_35403 = cljs.core.deref(mults);
var inst_35404 = cljs.core.vals(inst_35403);
var inst_35405 = cljs.core.seq(inst_35404);
var inst_35406 = inst_35405;
var inst_35407 = null;
var inst_35408 = (0);
var inst_35409 = (0);
var state_35466__$1 = (function (){var statearr_35498 = state_35466;
(statearr_35498[(12)] = inst_35408);

(statearr_35498[(13)] = inst_35407);

(statearr_35498[(14)] = inst_35409);

(statearr_35498[(16)] = inst_35406);

return statearr_35498;
})();
var statearr_35499_37120 = state_35466__$1;
(statearr_35499_37120[(2)] = null);

(statearr_35499_37120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (14))){
var state_35466__$1 = state_35466;
var statearr_35503_37121 = state_35466__$1;
(statearr_35503_37121[(2)] = null);

(statearr_35503_37121[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (16))){
var inst_35420 = (state_35466[(10)]);
var inst_35424 = cljs.core.chunk_first(inst_35420);
var inst_35425 = cljs.core.chunk_rest(inst_35420);
var inst_35426 = cljs.core.count(inst_35424);
var inst_35406 = inst_35425;
var inst_35407 = inst_35424;
var inst_35408 = inst_35426;
var inst_35409 = (0);
var state_35466__$1 = (function (){var statearr_35504 = state_35466;
(statearr_35504[(12)] = inst_35408);

(statearr_35504[(13)] = inst_35407);

(statearr_35504[(14)] = inst_35409);

(statearr_35504[(16)] = inst_35406);

return statearr_35504;
})();
var statearr_35505_37126 = state_35466__$1;
(statearr_35505_37126[(2)] = null);

(statearr_35505_37126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (10))){
var inst_35408 = (state_35466[(12)]);
var inst_35407 = (state_35466[(13)]);
var inst_35409 = (state_35466[(14)]);
var inst_35406 = (state_35466[(16)]);
var inst_35414 = cljs.core._nth(inst_35407,inst_35409);
var inst_35415 = cljs.core.async.muxch_STAR_(inst_35414);
var inst_35416 = cljs.core.async.close_BANG_(inst_35415);
var inst_35417 = (inst_35409 + (1));
var tmp35500 = inst_35408;
var tmp35501 = inst_35407;
var tmp35502 = inst_35406;
var inst_35406__$1 = tmp35502;
var inst_35407__$1 = tmp35501;
var inst_35408__$1 = tmp35500;
var inst_35409__$1 = inst_35417;
var state_35466__$1 = (function (){var statearr_35506 = state_35466;
(statearr_35506[(17)] = inst_35416);

(statearr_35506[(12)] = inst_35408__$1);

(statearr_35506[(13)] = inst_35407__$1);

(statearr_35506[(14)] = inst_35409__$1);

(statearr_35506[(16)] = inst_35406__$1);

return statearr_35506;
})();
var statearr_35508_37138 = state_35466__$1;
(statearr_35508_37138[(2)] = null);

(statearr_35508_37138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (18))){
var inst_35436 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
var statearr_35509_37139 = state_35466__$1;
(statearr_35509_37139[(2)] = inst_35436);

(statearr_35509_37139[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (8))){
var inst_35408 = (state_35466[(12)]);
var inst_35409 = (state_35466[(14)]);
var inst_35411 = (inst_35409 < inst_35408);
var inst_35412 = inst_35411;
var state_35466__$1 = state_35466;
if(cljs.core.truth_(inst_35412)){
var statearr_35510_37143 = state_35466__$1;
(statearr_35510_37143[(1)] = (10));

} else {
var statearr_35511_37144 = state_35466__$1;
(statearr_35511_37144[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33081__auto__ = null;
var cljs$core$async$state_machine__33081__auto____0 = (function (){
var statearr_35512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35512[(0)] = cljs$core$async$state_machine__33081__auto__);

(statearr_35512[(1)] = (1));

return statearr_35512;
});
var cljs$core$async$state_machine__33081__auto____1 = (function (state_35466){
while(true){
var ret_value__33082__auto__ = (function (){try{while(true){
var result__33083__auto__ = switch__33080__auto__(state_35466);
if(cljs.core.keyword_identical_QMARK_(result__33083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33083__auto__;
}
break;
}
}catch (e35513){var ex__33084__auto__ = e35513;
var statearr_35514_37149 = state_35466;
(statearr_35514_37149[(2)] = ex__33084__auto__);


if(cljs.core.seq((state_35466[(4)]))){
var statearr_35515_37150 = state_35466;
(statearr_35515_37150[(1)] = cljs.core.first((state_35466[(4)])));

} else {
throw ex__33084__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37151 = state_35466;
state_35466 = G__37151;
continue;
} else {
return ret_value__33082__auto__;
}
break;
}
});
cljs$core$async$state_machine__33081__auto__ = function(state_35466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33081__auto____1.call(this,state_35466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33081__auto____0;
cljs$core$async$state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33081__auto____1;
return cljs$core$async$state_machine__33081__auto__;
})()
})();
var state__33275__auto__ = (function (){var statearr_35517 = f__33274__auto__();
(statearr_35517[(6)] = c__33273__auto___37065);

return statearr_35517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33275__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35519 = arguments.length;
switch (G__35519) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35522 = arguments.length;
switch (G__35522) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35525 = arguments.length;
switch (G__35525) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__33273__auto___37176 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33274__auto__ = (function (){var switch__33080__auto__ = (function (state_35570){
var state_val_35571 = (state_35570[(1)]);
if((state_val_35571 === (7))){
var state_35570__$1 = state_35570;
var statearr_35573_37180 = state_35570__$1;
(statearr_35573_37180[(2)] = null);

(statearr_35573_37180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (1))){
var state_35570__$1 = state_35570;
var statearr_35574_37181 = state_35570__$1;
(statearr_35574_37181[(2)] = null);

(statearr_35574_37181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (4))){
var inst_35529 = (state_35570[(7)]);
var inst_35530 = (state_35570[(8)]);
var inst_35532 = (inst_35530 < inst_35529);
var state_35570__$1 = state_35570;
if(cljs.core.truth_(inst_35532)){
var statearr_35575_37182 = state_35570__$1;
(statearr_35575_37182[(1)] = (6));

} else {
var statearr_35576_37183 = state_35570__$1;
(statearr_35576_37183[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (15))){
var inst_35556 = (state_35570[(9)]);
var inst_35561 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35556);
var state_35570__$1 = state_35570;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35570__$1,(17),out,inst_35561);
} else {
if((state_val_35571 === (13))){
var inst_35556 = (state_35570[(9)]);
var inst_35556__$1 = (state_35570[(2)]);
var inst_35557 = cljs.core.some(cljs.core.nil_QMARK_,inst_35556__$1);
var state_35570__$1 = (function (){var statearr_35578 = state_35570;
(statearr_35578[(9)] = inst_35556__$1);

return statearr_35578;
})();
if(cljs.core.truth_(inst_35557)){
var statearr_35580_37187 = state_35570__$1;
(statearr_35580_37187[(1)] = (14));

} else {
var statearr_35581_37188 = state_35570__$1;
(statearr_35581_37188[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (6))){
var state_35570__$1 = state_35570;
var statearr_35582_37189 = state_35570__$1;
(statearr_35582_37189[(2)] = null);

(statearr_35582_37189[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (17))){
var inst_35563 = (state_35570[(2)]);
var state_35570__$1 = (function (){var statearr_35584 = state_35570;
(statearr_35584[(10)] = inst_35563);

return statearr_35584;
})();
var statearr_35585_37190 = state_35570__$1;
(statearr_35585_37190[(2)] = null);

(statearr_35585_37190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (3))){
var inst_35568 = (state_35570[(2)]);
var state_35570__$1 = state_35570;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35570__$1,inst_35568);
} else {
if((state_val_35571 === (12))){
var _ = (function (){var statearr_35586 = state_35570;
(statearr_35586[(4)] = cljs.core.rest((state_35570[(4)])));

return statearr_35586;
})();
var state_35570__$1 = state_35570;
var ex35583 = (state_35570__$1[(2)]);
var statearr_35587_37195 = state_35570__$1;
(statearr_35587_37195[(5)] = ex35583);


if((ex35583 instanceof Object)){
var statearr_35590_37196 = state_35570__$1;
(statearr_35590_37196[(1)] = (11));

(statearr_35590_37196[(5)] = null);

} else {
throw ex35583;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (2))){
var inst_35528 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35529 = cnt;
var inst_35530 = (0);
var state_35570__$1 = (function (){var statearr_35591 = state_35570;
(statearr_35591[(7)] = inst_35529);

(statearr_35591[(8)] = inst_35530);

(statearr_35591[(11)] = inst_35528);

return statearr_35591;
})();
var statearr_35592_37197 = state_35570__$1;
(statearr_35592_37197[(2)] = null);

(statearr_35592_37197[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (11))){
var inst_35535 = (state_35570[(2)]);
var inst_35536 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35570__$1 = (function (){var statearr_35593 = state_35570;
(statearr_35593[(12)] = inst_35535);

return statearr_35593;
})();
var statearr_35594_37201 = state_35570__$1;
(statearr_35594_37201[(2)] = inst_35536);

(statearr_35594_37201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (9))){
var inst_35530 = (state_35570[(8)]);
var _ = (function (){var statearr_35595 = state_35570;
(statearr_35595[(4)] = cljs.core.cons((12),(state_35570[(4)])));

return statearr_35595;
})();
var inst_35542 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35530) : chs__$1.call(null,inst_35530));
var inst_35543 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35530) : done.call(null,inst_35530));
var inst_35544 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35542,inst_35543);
var ___$1 = (function (){var statearr_35596 = state_35570;
(statearr_35596[(4)] = cljs.core.rest((state_35570[(4)])));

return statearr_35596;
})();
var state_35570__$1 = state_35570;
var statearr_35597_37202 = state_35570__$1;
(statearr_35597_37202[(2)] = inst_35544);

(statearr_35597_37202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (5))){
var inst_35554 = (state_35570[(2)]);
var state_35570__$1 = (function (){var statearr_35598 = state_35570;
(statearr_35598[(13)] = inst_35554);

return statearr_35598;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35570__$1,(13),dchan);
} else {
if((state_val_35571 === (14))){
var inst_35559 = cljs.core.async.close_BANG_(out);
var state_35570__$1 = state_35570;
var statearr_35599_37203 = state_35570__$1;
(statearr_35599_37203[(2)] = inst_35559);

(statearr_35599_37203[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (16))){
var inst_35566 = (state_35570[(2)]);
var state_35570__$1 = state_35570;
var statearr_35600_37204 = state_35570__$1;
(statearr_35600_37204[(2)] = inst_35566);

(statearr_35600_37204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (10))){
var inst_35530 = (state_35570[(8)]);
var inst_35547 = (state_35570[(2)]);
var inst_35548 = (inst_35530 + (1));
var inst_35530__$1 = inst_35548;
var state_35570__$1 = (function (){var statearr_35601 = state_35570;
(statearr_35601[(14)] = inst_35547);

(statearr_35601[(8)] = inst_35530__$1);

return statearr_35601;
})();
var statearr_35602_37206 = state_35570__$1;
(statearr_35602_37206[(2)] = null);

(statearr_35602_37206[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (8))){
var inst_35552 = (state_35570[(2)]);
var state_35570__$1 = state_35570;
var statearr_35604_37208 = state_35570__$1;
(statearr_35604_37208[(2)] = inst_35552);

(statearr_35604_37208[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33081__auto__ = null;
var cljs$core$async$state_machine__33081__auto____0 = (function (){
var statearr_35606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35606[(0)] = cljs$core$async$state_machine__33081__auto__);

(statearr_35606[(1)] = (1));

return statearr_35606;
});
var cljs$core$async$state_machine__33081__auto____1 = (function (state_35570){
while(true){
var ret_value__33082__auto__ = (function (){try{while(true){
var result__33083__auto__ = switch__33080__auto__(state_35570);
if(cljs.core.keyword_identical_QMARK_(result__33083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33083__auto__;
}
break;
}
}catch (e35607){var ex__33084__auto__ = e35607;
var statearr_35608_37210 = state_35570;
(statearr_35608_37210[(2)] = ex__33084__auto__);


if(cljs.core.seq((state_35570[(4)]))){
var statearr_35609_37211 = state_35570;
(statearr_35609_37211[(1)] = cljs.core.first((state_35570[(4)])));

} else {
throw ex__33084__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37212 = state_35570;
state_35570 = G__37212;
continue;
} else {
return ret_value__33082__auto__;
}
break;
}
});
cljs$core$async$state_machine__33081__auto__ = function(state_35570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33081__auto____1.call(this,state_35570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33081__auto____0;
cljs$core$async$state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33081__auto____1;
return cljs$core$async$state_machine__33081__auto__;
})()
})();
var state__33275__auto__ = (function (){var statearr_35610 = f__33274__auto__();
(statearr_35610[(6)] = c__33273__auto___37176);

return statearr_35610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33275__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35613 = arguments.length;
switch (G__35613) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33273__auto___37215 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33274__auto__ = (function (){var switch__33080__auto__ = (function (state_35648){
var state_val_35649 = (state_35648[(1)]);
if((state_val_35649 === (7))){
var inst_35625 = (state_35648[(7)]);
var inst_35624 = (state_35648[(8)]);
var inst_35624__$1 = (state_35648[(2)]);
var inst_35625__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35624__$1,(0),null);
var inst_35626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35624__$1,(1),null);
var inst_35627 = (inst_35625__$1 == null);
var state_35648__$1 = (function (){var statearr_35656 = state_35648;
(statearr_35656[(7)] = inst_35625__$1);

(statearr_35656[(8)] = inst_35624__$1);

(statearr_35656[(9)] = inst_35626);

return statearr_35656;
})();
if(cljs.core.truth_(inst_35627)){
var statearr_35657_37216 = state_35648__$1;
(statearr_35657_37216[(1)] = (8));

} else {
var statearr_35658_37217 = state_35648__$1;
(statearr_35658_37217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (1))){
var inst_35614 = cljs.core.vec(chs);
var inst_35615 = inst_35614;
var state_35648__$1 = (function (){var statearr_35659 = state_35648;
(statearr_35659[(10)] = inst_35615);

return statearr_35659;
})();
var statearr_35660_37218 = state_35648__$1;
(statearr_35660_37218[(2)] = null);

(statearr_35660_37218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (4))){
var inst_35615 = (state_35648[(10)]);
var state_35648__$1 = state_35648;
return cljs.core.async.ioc_alts_BANG_(state_35648__$1,(7),inst_35615);
} else {
if((state_val_35649 === (6))){
var inst_35644 = (state_35648[(2)]);
var state_35648__$1 = state_35648;
var statearr_35662_37220 = state_35648__$1;
(statearr_35662_37220[(2)] = inst_35644);

(statearr_35662_37220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (3))){
var inst_35646 = (state_35648[(2)]);
var state_35648__$1 = state_35648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35648__$1,inst_35646);
} else {
if((state_val_35649 === (2))){
var inst_35615 = (state_35648[(10)]);
var inst_35617 = cljs.core.count(inst_35615);
var inst_35618 = (inst_35617 > (0));
var state_35648__$1 = state_35648;
if(cljs.core.truth_(inst_35618)){
var statearr_35668_37222 = state_35648__$1;
(statearr_35668_37222[(1)] = (4));

} else {
var statearr_35669_37223 = state_35648__$1;
(statearr_35669_37223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (11))){
var inst_35615 = (state_35648[(10)]);
var inst_35637 = (state_35648[(2)]);
var tmp35665 = inst_35615;
var inst_35615__$1 = tmp35665;
var state_35648__$1 = (function (){var statearr_35673 = state_35648;
(statearr_35673[(10)] = inst_35615__$1);

(statearr_35673[(11)] = inst_35637);

return statearr_35673;
})();
var statearr_35675_37224 = state_35648__$1;
(statearr_35675_37224[(2)] = null);

(statearr_35675_37224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (9))){
var inst_35625 = (state_35648[(7)]);
var state_35648__$1 = state_35648;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35648__$1,(11),out,inst_35625);
} else {
if((state_val_35649 === (5))){
var inst_35642 = cljs.core.async.close_BANG_(out);
var state_35648__$1 = state_35648;
var statearr_35680_37226 = state_35648__$1;
(statearr_35680_37226[(2)] = inst_35642);

(statearr_35680_37226[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (10))){
var inst_35640 = (state_35648[(2)]);
var state_35648__$1 = state_35648;
var statearr_35684_37228 = state_35648__$1;
(statearr_35684_37228[(2)] = inst_35640);

(statearr_35684_37228[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (8))){
var inst_35615 = (state_35648[(10)]);
var inst_35625 = (state_35648[(7)]);
var inst_35624 = (state_35648[(8)]);
var inst_35626 = (state_35648[(9)]);
var inst_35632 = (function (){var cs = inst_35615;
var vec__35620 = inst_35624;
var v = inst_35625;
var c = inst_35626;
return (function (p1__35611_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35611_SHARP_);
});
})();
var inst_35633 = cljs.core.filterv(inst_35632,inst_35615);
var inst_35615__$1 = inst_35633;
var state_35648__$1 = (function (){var statearr_35689 = state_35648;
(statearr_35689[(10)] = inst_35615__$1);

return statearr_35689;
})();
var statearr_35690_37238 = state_35648__$1;
(statearr_35690_37238[(2)] = null);

(statearr_35690_37238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33081__auto__ = null;
var cljs$core$async$state_machine__33081__auto____0 = (function (){
var statearr_35695 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35695[(0)] = cljs$core$async$state_machine__33081__auto__);

(statearr_35695[(1)] = (1));

return statearr_35695;
});
var cljs$core$async$state_machine__33081__auto____1 = (function (state_35648){
while(true){
var ret_value__33082__auto__ = (function (){try{while(true){
var result__33083__auto__ = switch__33080__auto__(state_35648);
if(cljs.core.keyword_identical_QMARK_(result__33083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33083__auto__;
}
break;
}
}catch (e35697){var ex__33084__auto__ = e35697;
var statearr_35698_37239 = state_35648;
(statearr_35698_37239[(2)] = ex__33084__auto__);


if(cljs.core.seq((state_35648[(4)]))){
var statearr_35702_37240 = state_35648;
(statearr_35702_37240[(1)] = cljs.core.first((state_35648[(4)])));

} else {
throw ex__33084__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37241 = state_35648;
state_35648 = G__37241;
continue;
} else {
return ret_value__33082__auto__;
}
break;
}
});
cljs$core$async$state_machine__33081__auto__ = function(state_35648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33081__auto____1.call(this,state_35648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33081__auto____0;
cljs$core$async$state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33081__auto____1;
return cljs$core$async$state_machine__33081__auto__;
})()
})();
var state__33275__auto__ = (function (){var statearr_35707 = f__33274__auto__();
(statearr_35707[(6)] = c__33273__auto___37215);

return statearr_35707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33275__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35718 = arguments.length;
switch (G__35718) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33273__auto___37248 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33274__auto__ = (function (){var switch__33080__auto__ = (function (state_35750){
var state_val_35751 = (state_35750[(1)]);
if((state_val_35751 === (7))){
var inst_35731 = (state_35750[(7)]);
var inst_35731__$1 = (state_35750[(2)]);
var inst_35732 = (inst_35731__$1 == null);
var inst_35733 = cljs.core.not(inst_35732);
var state_35750__$1 = (function (){var statearr_35756 = state_35750;
(statearr_35756[(7)] = inst_35731__$1);

return statearr_35756;
})();
if(inst_35733){
var statearr_35759_37250 = state_35750__$1;
(statearr_35759_37250[(1)] = (8));

} else {
var statearr_35761_37251 = state_35750__$1;
(statearr_35761_37251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (1))){
var inst_35726 = (0);
var state_35750__$1 = (function (){var statearr_35762 = state_35750;
(statearr_35762[(8)] = inst_35726);

return statearr_35762;
})();
var statearr_35763_37252 = state_35750__$1;
(statearr_35763_37252[(2)] = null);

(statearr_35763_37252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (4))){
var state_35750__$1 = state_35750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35750__$1,(7),ch);
} else {
if((state_val_35751 === (6))){
var inst_35745 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
var statearr_35767_37253 = state_35750__$1;
(statearr_35767_37253[(2)] = inst_35745);

(statearr_35767_37253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (3))){
var inst_35747 = (state_35750[(2)]);
var inst_35748 = cljs.core.async.close_BANG_(out);
var state_35750__$1 = (function (){var statearr_35769 = state_35750;
(statearr_35769[(9)] = inst_35747);

return statearr_35769;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35750__$1,inst_35748);
} else {
if((state_val_35751 === (2))){
var inst_35726 = (state_35750[(8)]);
var inst_35728 = (inst_35726 < n);
var state_35750__$1 = state_35750;
if(cljs.core.truth_(inst_35728)){
var statearr_35772_37254 = state_35750__$1;
(statearr_35772_37254[(1)] = (4));

} else {
var statearr_35773_37255 = state_35750__$1;
(statearr_35773_37255[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (11))){
var inst_35726 = (state_35750[(8)]);
var inst_35736 = (state_35750[(2)]);
var inst_35738 = (inst_35726 + (1));
var inst_35726__$1 = inst_35738;
var state_35750__$1 = (function (){var statearr_35777 = state_35750;
(statearr_35777[(10)] = inst_35736);

(statearr_35777[(8)] = inst_35726__$1);

return statearr_35777;
})();
var statearr_35778_37256 = state_35750__$1;
(statearr_35778_37256[(2)] = null);

(statearr_35778_37256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (9))){
var state_35750__$1 = state_35750;
var statearr_35780_37261 = state_35750__$1;
(statearr_35780_37261[(2)] = null);

(statearr_35780_37261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (5))){
var state_35750__$1 = state_35750;
var statearr_35783_37262 = state_35750__$1;
(statearr_35783_37262[(2)] = null);

(statearr_35783_37262[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (10))){
var inst_35742 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
var statearr_35785_37263 = state_35750__$1;
(statearr_35785_37263[(2)] = inst_35742);

(statearr_35785_37263[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (8))){
var inst_35731 = (state_35750[(7)]);
var state_35750__$1 = state_35750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35750__$1,(11),out,inst_35731);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33081__auto__ = null;
var cljs$core$async$state_machine__33081__auto____0 = (function (){
var statearr_35790 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35790[(0)] = cljs$core$async$state_machine__33081__auto__);

(statearr_35790[(1)] = (1));

return statearr_35790;
});
var cljs$core$async$state_machine__33081__auto____1 = (function (state_35750){
while(true){
var ret_value__33082__auto__ = (function (){try{while(true){
var result__33083__auto__ = switch__33080__auto__(state_35750);
if(cljs.core.keyword_identical_QMARK_(result__33083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33083__auto__;
}
break;
}
}catch (e35792){var ex__33084__auto__ = e35792;
var statearr_35793_37274 = state_35750;
(statearr_35793_37274[(2)] = ex__33084__auto__);


if(cljs.core.seq((state_35750[(4)]))){
var statearr_35794_37275 = state_35750;
(statearr_35794_37275[(1)] = cljs.core.first((state_35750[(4)])));

} else {
throw ex__33084__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37276 = state_35750;
state_35750 = G__37276;
continue;
} else {
return ret_value__33082__auto__;
}
break;
}
});
cljs$core$async$state_machine__33081__auto__ = function(state_35750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33081__auto____1.call(this,state_35750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33081__auto____0;
cljs$core$async$state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33081__auto____1;
return cljs$core$async$state_machine__33081__auto__;
})()
})();
var state__33275__auto__ = (function (){var statearr_35797 = f__33274__auto__();
(statearr_35797[(6)] = c__33273__auto___37248);

return statearr_35797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33275__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35803 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35803 = (function (f,ch,meta35804){
this.f = f;
this.ch = ch;
this.meta35804 = meta35804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35805,meta35804__$1){
var self__ = this;
var _35805__$1 = this;
return (new cljs.core.async.t_cljs$core$async35803(self__.f,self__.ch,meta35804__$1));
}));

(cljs.core.async.t_cljs$core$async35803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35805){
var self__ = this;
var _35805__$1 = this;
return self__.meta35804;
}));

(cljs.core.async.t_cljs$core$async35803.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35803.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35803.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35803.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35803.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35818 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35818 = (function (f,ch,meta35804,_,fn1,meta35819){
this.f = f;
this.ch = ch;
this.meta35804 = meta35804;
this._ = _;
this.fn1 = fn1;
this.meta35819 = meta35819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35820,meta35819__$1){
var self__ = this;
var _35820__$1 = this;
return (new cljs.core.async.t_cljs$core$async35818(self__.f,self__.ch,self__.meta35804,self__._,self__.fn1,meta35819__$1));
}));

(cljs.core.async.t_cljs$core$async35818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35820){
var self__ = this;
var _35820__$1 = this;
return self__.meta35819;
}));

(cljs.core.async.t_cljs$core$async35818.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35818.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35818.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35818.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35801_SHARP_){
var G__35837 = (((p1__35801_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35801_SHARP_) : self__.f.call(null,p1__35801_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35837) : f1.call(null,G__35837));
});
}));

(cljs.core.async.t_cljs$core$async35818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35804","meta35804",1774757719,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35803","cljs.core.async/t_cljs$core$async35803",-2110429736,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35819","meta35819",-1896516208,null)], null);
}));

(cljs.core.async.t_cljs$core$async35818.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35818");

(cljs.core.async.t_cljs$core$async35818.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35818");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35818.
 */
cljs.core.async.__GT_t_cljs$core$async35818 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35818(f__$1,ch__$1,meta35804__$1,___$2,fn1__$1,meta35819){
return (new cljs.core.async.t_cljs$core$async35818(f__$1,ch__$1,meta35804__$1,___$2,fn1__$1,meta35819));
});

}

return (new cljs.core.async.t_cljs$core$async35818(self__.f,self__.ch,self__.meta35804,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35846 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35846) : self__.f.call(null,G__35846));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35803.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35803.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35804","meta35804",1774757719,null)], null);
}));

(cljs.core.async.t_cljs$core$async35803.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35803");

(cljs.core.async.t_cljs$core$async35803.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35803");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35803.
 */
cljs.core.async.__GT_t_cljs$core$async35803 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35803(f__$1,ch__$1,meta35804){
return (new cljs.core.async.t_cljs$core$async35803(f__$1,ch__$1,meta35804));
});

}

return (new cljs.core.async.t_cljs$core$async35803(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35857 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35857 = (function (f,ch,meta35858){
this.f = f;
this.ch = ch;
this.meta35858 = meta35858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35859,meta35858__$1){
var self__ = this;
var _35859__$1 = this;
return (new cljs.core.async.t_cljs$core$async35857(self__.f,self__.ch,meta35858__$1));
}));

(cljs.core.async.t_cljs$core$async35857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35859){
var self__ = this;
var _35859__$1 = this;
return self__.meta35858;
}));

(cljs.core.async.t_cljs$core$async35857.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35857.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35857.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35857.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35857.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35857.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35857.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35858","meta35858",263392448,null)], null);
}));

(cljs.core.async.t_cljs$core$async35857.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35857");

(cljs.core.async.t_cljs$core$async35857.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35857");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35857.
 */
cljs.core.async.__GT_t_cljs$core$async35857 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35857(f__$1,ch__$1,meta35858){
return (new cljs.core.async.t_cljs$core$async35857(f__$1,ch__$1,meta35858));
});

}

return (new cljs.core.async.t_cljs$core$async35857(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35879 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35879 = (function (p,ch,meta35880){
this.p = p;
this.ch = ch;
this.meta35880 = meta35880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35881,meta35880__$1){
var self__ = this;
var _35881__$1 = this;
return (new cljs.core.async.t_cljs$core$async35879(self__.p,self__.ch,meta35880__$1));
}));

(cljs.core.async.t_cljs$core$async35879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35881){
var self__ = this;
var _35881__$1 = this;
return self__.meta35880;
}));

(cljs.core.async.t_cljs$core$async35879.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35879.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35879.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35879.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35879.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35879.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35879.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35880","meta35880",1135195430,null)], null);
}));

(cljs.core.async.t_cljs$core$async35879.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35879.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35879");

(cljs.core.async.t_cljs$core$async35879.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35879");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35879.
 */
cljs.core.async.__GT_t_cljs$core$async35879 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35879(p__$1,ch__$1,meta35880){
return (new cljs.core.async.t_cljs$core$async35879(p__$1,ch__$1,meta35880));
});

}

return (new cljs.core.async.t_cljs$core$async35879(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35927 = arguments.length;
switch (G__35927) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33273__auto___37306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33274__auto__ = (function (){var switch__33080__auto__ = (function (state_35958){
var state_val_35960 = (state_35958[(1)]);
if((state_val_35960 === (7))){
var inst_35953 = (state_35958[(2)]);
var state_35958__$1 = state_35958;
var statearr_35964_37307 = state_35958__$1;
(statearr_35964_37307[(2)] = inst_35953);

(statearr_35964_37307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35960 === (1))){
var state_35958__$1 = state_35958;
var statearr_35965_37308 = state_35958__$1;
(statearr_35965_37308[(2)] = null);

(statearr_35965_37308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35960 === (4))){
var inst_35938 = (state_35958[(7)]);
var inst_35938__$1 = (state_35958[(2)]);
var inst_35939 = (inst_35938__$1 == null);
var state_35958__$1 = (function (){var statearr_35966 = state_35958;
(statearr_35966[(7)] = inst_35938__$1);

return statearr_35966;
})();
if(cljs.core.truth_(inst_35939)){
var statearr_35967_37312 = state_35958__$1;
(statearr_35967_37312[(1)] = (5));

} else {
var statearr_35968_37313 = state_35958__$1;
(statearr_35968_37313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35960 === (6))){
var inst_35938 = (state_35958[(7)]);
var inst_35943 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35938) : p.call(null,inst_35938));
var state_35958__$1 = state_35958;
if(cljs.core.truth_(inst_35943)){
var statearr_35969_37314 = state_35958__$1;
(statearr_35969_37314[(1)] = (8));

} else {
var statearr_35970_37315 = state_35958__$1;
(statearr_35970_37315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35960 === (3))){
var inst_35956 = (state_35958[(2)]);
var state_35958__$1 = state_35958;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35958__$1,inst_35956);
} else {
if((state_val_35960 === (2))){
var state_35958__$1 = state_35958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35958__$1,(4),ch);
} else {
if((state_val_35960 === (11))){
var inst_35946 = (state_35958[(2)]);
var state_35958__$1 = state_35958;
var statearr_35973_37318 = state_35958__$1;
(statearr_35973_37318[(2)] = inst_35946);

(statearr_35973_37318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35960 === (9))){
var state_35958__$1 = state_35958;
var statearr_35974_37319 = state_35958__$1;
(statearr_35974_37319[(2)] = null);

(statearr_35974_37319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35960 === (5))){
var inst_35941 = cljs.core.async.close_BANG_(out);
var state_35958__$1 = state_35958;
var statearr_35975_37320 = state_35958__$1;
(statearr_35975_37320[(2)] = inst_35941);

(statearr_35975_37320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35960 === (10))){
var inst_35949 = (state_35958[(2)]);
var state_35958__$1 = (function (){var statearr_35976 = state_35958;
(statearr_35976[(8)] = inst_35949);

return statearr_35976;
})();
var statearr_35977_37321 = state_35958__$1;
(statearr_35977_37321[(2)] = null);

(statearr_35977_37321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35960 === (8))){
var inst_35938 = (state_35958[(7)]);
var state_35958__$1 = state_35958;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35958__$1,(11),out,inst_35938);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33081__auto__ = null;
var cljs$core$async$state_machine__33081__auto____0 = (function (){
var statearr_35986 = [null,null,null,null,null,null,null,null,null];
(statearr_35986[(0)] = cljs$core$async$state_machine__33081__auto__);

(statearr_35986[(1)] = (1));

return statearr_35986;
});
var cljs$core$async$state_machine__33081__auto____1 = (function (state_35958){
while(true){
var ret_value__33082__auto__ = (function (){try{while(true){
var result__33083__auto__ = switch__33080__auto__(state_35958);
if(cljs.core.keyword_identical_QMARK_(result__33083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33083__auto__;
}
break;
}
}catch (e35988){var ex__33084__auto__ = e35988;
var statearr_35989_37323 = state_35958;
(statearr_35989_37323[(2)] = ex__33084__auto__);


if(cljs.core.seq((state_35958[(4)]))){
var statearr_35990_37324 = state_35958;
(statearr_35990_37324[(1)] = cljs.core.first((state_35958[(4)])));

} else {
throw ex__33084__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37325 = state_35958;
state_35958 = G__37325;
continue;
} else {
return ret_value__33082__auto__;
}
break;
}
});
cljs$core$async$state_machine__33081__auto__ = function(state_35958){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33081__auto____1.call(this,state_35958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33081__auto____0;
cljs$core$async$state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33081__auto____1;
return cljs$core$async$state_machine__33081__auto__;
})()
})();
var state__33275__auto__ = (function (){var statearr_35991 = f__33274__auto__();
(statearr_35991[(6)] = c__33273__auto___37306);

return statearr_35991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33275__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36000 = arguments.length;
switch (G__36000) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33274__auto__ = (function (){var switch__33080__auto__ = (function (state_36075){
var state_val_36076 = (state_36075[(1)]);
if((state_val_36076 === (7))){
var inst_36071 = (state_36075[(2)]);
var state_36075__$1 = state_36075;
var statearr_36078_37327 = state_36075__$1;
(statearr_36078_37327[(2)] = inst_36071);

(statearr_36078_37327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36076 === (20))){
var inst_36037 = (state_36075[(7)]);
var inst_36052 = (state_36075[(2)]);
var inst_36053 = cljs.core.next(inst_36037);
var inst_36022 = inst_36053;
var inst_36023 = null;
var inst_36024 = (0);
var inst_36025 = (0);
var state_36075__$1 = (function (){var statearr_36079 = state_36075;
(statearr_36079[(8)] = inst_36025);

(statearr_36079[(9)] = inst_36022);

(statearr_36079[(10)] = inst_36024);

(statearr_36079[(11)] = inst_36052);

(statearr_36079[(12)] = inst_36023);

return statearr_36079;
})();
var statearr_36080_37328 = state_36075__$1;
(statearr_36080_37328[(2)] = null);

(statearr_36080_37328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36076 === (1))){
var state_36075__$1 = state_36075;
var statearr_36088_37329 = state_36075__$1;
(statearr_36088_37329[(2)] = null);

(statearr_36088_37329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36076 === (4))){
var inst_36008 = (state_36075[(13)]);
var inst_36008__$1 = (state_36075[(2)]);
var inst_36009 = (inst_36008__$1 == null);
var state_36075__$1 = (function (){var statearr_36090 = state_36075;
(statearr_36090[(13)] = inst_36008__$1);

return statearr_36090;
})();
if(cljs.core.truth_(inst_36009)){
var statearr_36091_37330 = state_36075__$1;
(statearr_36091_37330[(1)] = (5));

} else {
var statearr_36092_37331 = state_36075__$1;
(statearr_36092_37331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36076 === (15))){
var state_36075__$1 = state_36075;
var statearr_36100_37332 = state_36075__$1;
(statearr_36100_37332[(2)] = null);

(statearr_36100_37332[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36076 === (21))){
var state_36075__$1 = state_36075;
var statearr_36101_37333 = state_36075__$1;
(statearr_36101_37333[(2)] = null);

(statearr_36101_37333[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36076 === (13))){
var inst_36025 = (state_36075[(8)]);
var inst_36022 = (state_36075[(9)]);
var inst_36024 = (state_36075[(10)]);
var inst_36023 = (state_36075[(12)]);
var inst_36033 = (state_36075[(2)]);
var inst_36034 = (inst_36025 + (1));
var tmp36093 = inst_36022;
var tmp36094 = inst_36024;
var tmp36095 = inst_36023;
var inst_36022__$1 = tmp36093;
var inst_36023__$1 = tmp36095;
var inst_36024__$1 = tmp36094;
var inst_36025__$1 = inst_36034;
var state_36075__$1 = (function (){var statearr_36106 = state_36075;
(statearr_36106[(8)] = inst_36025__$1);

(statearr_36106[(9)] = inst_36022__$1);

(statearr_36106[(10)] = inst_36024__$1);

(statearr_36106[(14)] = inst_36033);

(statearr_36106[(12)] = inst_36023__$1);

return statearr_36106;
})();
var statearr_36107_37338 = state_36075__$1;
(statearr_36107_37338[(2)] = null);

(statearr_36107_37338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36076 === (22))){
var state_36075__$1 = state_36075;
var statearr_36108_37339 = state_36075__$1;
(statearr_36108_37339[(2)] = null);

(statearr_36108_37339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36076 === (6))){
var inst_36008 = (state_36075[(13)]);
var inst_36020 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36008) : f.call(null,inst_36008));
var inst_36021 = cljs.core.seq(inst_36020);
var inst_36022 = inst_36021;
var inst_36023 = null;
var inst_36024 = (0);
var inst_36025 = (0);
var state_36075__$1 = (function (){var statearr_36112 = state_36075;
(statearr_36112[(8)] = inst_36025);

(statearr_36112[(9)] = inst_36022);

(statearr_36112[(10)] = inst_36024);

(statearr_36112[(12)] = inst_36023);

return statearr_36112;
})();
var statearr_36114_37341 = state_36075__$1;
(statearr_36114_37341[(2)] = null);

(statearr_36114_37341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36076 === (17))){
var inst_36037 = (state_36075[(7)]);
var inst_36044 = cljs.core.chunk_first(inst_36037);
var inst_36045 = cljs.core.chunk_rest(inst_36037);
var inst_36046 = cljs.core.count(inst_36044);
var inst_36022 = inst_36045;
var inst_36023 = inst_36044;
var inst_36024 = inst_36046;
var inst_36025 = (0);
var state_36075__$1 = (function (){var statearr_36116 = state_36075;
(statearr_36116[(8)] = inst_36025);

(statearr_36116[(9)] = inst_36022);

(statearr_36116[(10)] = inst_36024);

(statearr_36116[(12)] = inst_36023);

return statearr_36116;
})();
var statearr_36117_37342 = state_36075__$1;
(statearr_36117_37342[(2)] = null);

(statearr_36117_37342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36076 === (3))){
var inst_36073 = (state_36075[(2)]);
var state_36075__$1 = state_36075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36075__$1,inst_36073);
} else {
if((state_val_36076 === (12))){
var inst_36061 = (state_36075[(2)]);
var state_36075__$1 = state_36075;
var statearr_36126_37343 = state_36075__$1;
(statearr_36126_37343[(2)] = inst_36061);

(statearr_36126_37343[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36076 === (2))){
var state_36075__$1 = state_36075;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36075__$1,(4),in$);
} else {
if((state_val_36076 === (23))){
var inst_36069 = (state_36075[(2)]);
var state_36075__$1 = state_36075;
var statearr_36130_37345 = state_36075__$1;
(statearr_36130_37345[(2)] = inst_36069);

(statearr_36130_37345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36076 === (19))){
var inst_36056 = (state_36075[(2)]);
var state_36075__$1 = state_36075;
var statearr_36132_37346 = state_36075__$1;
(statearr_36132_37346[(2)] = inst_36056);

(statearr_36132_37346[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36076 === (11))){
var inst_36037 = (state_36075[(7)]);
var inst_36022 = (state_36075[(9)]);
var inst_36037__$1 = cljs.core.seq(inst_36022);
var state_36075__$1 = (function (){var statearr_36136 = state_36075;
(statearr_36136[(7)] = inst_36037__$1);

return statearr_36136;
})();
if(inst_36037__$1){
var statearr_36138_37349 = state_36075__$1;
(statearr_36138_37349[(1)] = (14));

} else {
var statearr_36139_37350 = state_36075__$1;
(statearr_36139_37350[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36076 === (9))){
var inst_36063 = (state_36075[(2)]);
var inst_36064 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36075__$1 = (function (){var statearr_36140 = state_36075;
(statearr_36140[(15)] = inst_36063);

return statearr_36140;
})();
if(cljs.core.truth_(inst_36064)){
var statearr_36141_37354 = state_36075__$1;
(statearr_36141_37354[(1)] = (21));

} else {
var statearr_36145_37355 = state_36075__$1;
(statearr_36145_37355[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36076 === (5))){
var inst_36014 = cljs.core.async.close_BANG_(out);
var state_36075__$1 = state_36075;
var statearr_36147_37356 = state_36075__$1;
(statearr_36147_37356[(2)] = inst_36014);

(statearr_36147_37356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36076 === (14))){
var inst_36037 = (state_36075[(7)]);
var inst_36039 = cljs.core.chunked_seq_QMARK_(inst_36037);
var state_36075__$1 = state_36075;
if(inst_36039){
var statearr_36148_37358 = state_36075__$1;
(statearr_36148_37358[(1)] = (17));

} else {
var statearr_36149_37359 = state_36075__$1;
(statearr_36149_37359[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36076 === (16))){
var inst_36059 = (state_36075[(2)]);
var state_36075__$1 = state_36075;
var statearr_36151_37361 = state_36075__$1;
(statearr_36151_37361[(2)] = inst_36059);

(statearr_36151_37361[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36076 === (10))){
var inst_36025 = (state_36075[(8)]);
var inst_36023 = (state_36075[(12)]);
var inst_36031 = cljs.core._nth(inst_36023,inst_36025);
var state_36075__$1 = state_36075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36075__$1,(13),out,inst_36031);
} else {
if((state_val_36076 === (18))){
var inst_36037 = (state_36075[(7)]);
var inst_36049 = cljs.core.first(inst_36037);
var state_36075__$1 = state_36075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36075__$1,(20),out,inst_36049);
} else {
if((state_val_36076 === (8))){
var inst_36025 = (state_36075[(8)]);
var inst_36024 = (state_36075[(10)]);
var inst_36028 = (inst_36025 < inst_36024);
var inst_36029 = inst_36028;
var state_36075__$1 = state_36075;
if(cljs.core.truth_(inst_36029)){
var statearr_36153_37369 = state_36075__$1;
(statearr_36153_37369[(1)] = (10));

} else {
var statearr_36154_37370 = state_36075__$1;
(statearr_36154_37370[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33081__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33081__auto____0 = (function (){
var statearr_36163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36163[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33081__auto__);

(statearr_36163[(1)] = (1));

return statearr_36163;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33081__auto____1 = (function (state_36075){
while(true){
var ret_value__33082__auto__ = (function (){try{while(true){
var result__33083__auto__ = switch__33080__auto__(state_36075);
if(cljs.core.keyword_identical_QMARK_(result__33083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33083__auto__;
}
break;
}
}catch (e36164){var ex__33084__auto__ = e36164;
var statearr_36165_37371 = state_36075;
(statearr_36165_37371[(2)] = ex__33084__auto__);


if(cljs.core.seq((state_36075[(4)]))){
var statearr_36166_37372 = state_36075;
(statearr_36166_37372[(1)] = cljs.core.first((state_36075[(4)])));

} else {
throw ex__33084__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37373 = state_36075;
state_36075 = G__37373;
continue;
} else {
return ret_value__33082__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33081__auto__ = function(state_36075){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33081__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33081__auto____1.call(this,state_36075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33081__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33081__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33081__auto__;
})()
})();
var state__33275__auto__ = (function (){var statearr_36171 = f__33274__auto__();
(statearr_36171[(6)] = c__33273__auto__);

return statearr_36171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33275__auto__);
}));

return c__33273__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36177 = arguments.length;
switch (G__36177) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36183 = arguments.length;
switch (G__36183) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36195 = arguments.length;
switch (G__36195) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33273__auto___37389 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33274__auto__ = (function (){var switch__33080__auto__ = (function (state_36223){
var state_val_36224 = (state_36223[(1)]);
if((state_val_36224 === (7))){
var inst_36218 = (state_36223[(2)]);
var state_36223__$1 = state_36223;
var statearr_36225_37392 = state_36223__$1;
(statearr_36225_37392[(2)] = inst_36218);

(statearr_36225_37392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (1))){
var inst_36200 = null;
var state_36223__$1 = (function (){var statearr_36227 = state_36223;
(statearr_36227[(7)] = inst_36200);

return statearr_36227;
})();
var statearr_36228_37393 = state_36223__$1;
(statearr_36228_37393[(2)] = null);

(statearr_36228_37393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (4))){
var inst_36203 = (state_36223[(8)]);
var inst_36203__$1 = (state_36223[(2)]);
var inst_36204 = (inst_36203__$1 == null);
var inst_36205 = cljs.core.not(inst_36204);
var state_36223__$1 = (function (){var statearr_36233 = state_36223;
(statearr_36233[(8)] = inst_36203__$1);

return statearr_36233;
})();
if(inst_36205){
var statearr_36234_37395 = state_36223__$1;
(statearr_36234_37395[(1)] = (5));

} else {
var statearr_36235_37397 = state_36223__$1;
(statearr_36235_37397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (6))){
var state_36223__$1 = state_36223;
var statearr_36236_37398 = state_36223__$1;
(statearr_36236_37398[(2)] = null);

(statearr_36236_37398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (3))){
var inst_36220 = (state_36223[(2)]);
var inst_36221 = cljs.core.async.close_BANG_(out);
var state_36223__$1 = (function (){var statearr_36237 = state_36223;
(statearr_36237[(9)] = inst_36220);

return statearr_36237;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36223__$1,inst_36221);
} else {
if((state_val_36224 === (2))){
var state_36223__$1 = state_36223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36223__$1,(4),ch);
} else {
if((state_val_36224 === (11))){
var inst_36203 = (state_36223[(8)]);
var inst_36212 = (state_36223[(2)]);
var inst_36200 = inst_36203;
var state_36223__$1 = (function (){var statearr_36238 = state_36223;
(statearr_36238[(10)] = inst_36212);

(statearr_36238[(7)] = inst_36200);

return statearr_36238;
})();
var statearr_36239_37410 = state_36223__$1;
(statearr_36239_37410[(2)] = null);

(statearr_36239_37410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (9))){
var inst_36203 = (state_36223[(8)]);
var state_36223__$1 = state_36223;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36223__$1,(11),out,inst_36203);
} else {
if((state_val_36224 === (5))){
var inst_36203 = (state_36223[(8)]);
var inst_36200 = (state_36223[(7)]);
var inst_36207 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36203,inst_36200);
var state_36223__$1 = state_36223;
if(inst_36207){
var statearr_36244_37415 = state_36223__$1;
(statearr_36244_37415[(1)] = (8));

} else {
var statearr_36245_37416 = state_36223__$1;
(statearr_36245_37416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (10))){
var inst_36215 = (state_36223[(2)]);
var state_36223__$1 = state_36223;
var statearr_36246_37417 = state_36223__$1;
(statearr_36246_37417[(2)] = inst_36215);

(statearr_36246_37417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (8))){
var inst_36200 = (state_36223[(7)]);
var tmp36240 = inst_36200;
var inst_36200__$1 = tmp36240;
var state_36223__$1 = (function (){var statearr_36247 = state_36223;
(statearr_36247[(7)] = inst_36200__$1);

return statearr_36247;
})();
var statearr_36248_37422 = state_36223__$1;
(statearr_36248_37422[(2)] = null);

(statearr_36248_37422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33081__auto__ = null;
var cljs$core$async$state_machine__33081__auto____0 = (function (){
var statearr_36249 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36249[(0)] = cljs$core$async$state_machine__33081__auto__);

(statearr_36249[(1)] = (1));

return statearr_36249;
});
var cljs$core$async$state_machine__33081__auto____1 = (function (state_36223){
while(true){
var ret_value__33082__auto__ = (function (){try{while(true){
var result__33083__auto__ = switch__33080__auto__(state_36223);
if(cljs.core.keyword_identical_QMARK_(result__33083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33083__auto__;
}
break;
}
}catch (e36250){var ex__33084__auto__ = e36250;
var statearr_36251_37426 = state_36223;
(statearr_36251_37426[(2)] = ex__33084__auto__);


if(cljs.core.seq((state_36223[(4)]))){
var statearr_36252_37431 = state_36223;
(statearr_36252_37431[(1)] = cljs.core.first((state_36223[(4)])));

} else {
throw ex__33084__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37435 = state_36223;
state_36223 = G__37435;
continue;
} else {
return ret_value__33082__auto__;
}
break;
}
});
cljs$core$async$state_machine__33081__auto__ = function(state_36223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33081__auto____1.call(this,state_36223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33081__auto____0;
cljs$core$async$state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33081__auto____1;
return cljs$core$async$state_machine__33081__auto__;
})()
})();
var state__33275__auto__ = (function (){var statearr_36253 = f__33274__auto__();
(statearr_36253[(6)] = c__33273__auto___37389);

return statearr_36253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33275__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36255 = arguments.length;
switch (G__36255) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33273__auto___37439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33274__auto__ = (function (){var switch__33080__auto__ = (function (state_36295){
var state_val_36296 = (state_36295[(1)]);
if((state_val_36296 === (7))){
var inst_36291 = (state_36295[(2)]);
var state_36295__$1 = state_36295;
var statearr_36297_37441 = state_36295__$1;
(statearr_36297_37441[(2)] = inst_36291);

(statearr_36297_37441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (1))){
var inst_36256 = (new Array(n));
var inst_36257 = inst_36256;
var inst_36258 = (0);
var state_36295__$1 = (function (){var statearr_36298 = state_36295;
(statearr_36298[(7)] = inst_36258);

(statearr_36298[(8)] = inst_36257);

return statearr_36298;
})();
var statearr_36300_37442 = state_36295__$1;
(statearr_36300_37442[(2)] = null);

(statearr_36300_37442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (4))){
var inst_36261 = (state_36295[(9)]);
var inst_36261__$1 = (state_36295[(2)]);
var inst_36262 = (inst_36261__$1 == null);
var inst_36263 = cljs.core.not(inst_36262);
var state_36295__$1 = (function (){var statearr_36302 = state_36295;
(statearr_36302[(9)] = inst_36261__$1);

return statearr_36302;
})();
if(inst_36263){
var statearr_36303_37446 = state_36295__$1;
(statearr_36303_37446[(1)] = (5));

} else {
var statearr_36307_37447 = state_36295__$1;
(statearr_36307_37447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (15))){
var inst_36285 = (state_36295[(2)]);
var state_36295__$1 = state_36295;
var statearr_36308_37450 = state_36295__$1;
(statearr_36308_37450[(2)] = inst_36285);

(statearr_36308_37450[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (13))){
var state_36295__$1 = state_36295;
var statearr_36309_37453 = state_36295__$1;
(statearr_36309_37453[(2)] = null);

(statearr_36309_37453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (6))){
var inst_36258 = (state_36295[(7)]);
var inst_36279 = (inst_36258 > (0));
var state_36295__$1 = state_36295;
if(cljs.core.truth_(inst_36279)){
var statearr_36313_37455 = state_36295__$1;
(statearr_36313_37455[(1)] = (12));

} else {
var statearr_36314_37456 = state_36295__$1;
(statearr_36314_37456[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (3))){
var inst_36293 = (state_36295[(2)]);
var state_36295__$1 = state_36295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36295__$1,inst_36293);
} else {
if((state_val_36296 === (12))){
var inst_36257 = (state_36295[(8)]);
var inst_36283 = cljs.core.vec(inst_36257);
var state_36295__$1 = state_36295;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36295__$1,(15),out,inst_36283);
} else {
if((state_val_36296 === (2))){
var state_36295__$1 = state_36295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36295__$1,(4),ch);
} else {
if((state_val_36296 === (11))){
var inst_36273 = (state_36295[(2)]);
var inst_36274 = (new Array(n));
var inst_36257 = inst_36274;
var inst_36258 = (0);
var state_36295__$1 = (function (){var statearr_36316 = state_36295;
(statearr_36316[(10)] = inst_36273);

(statearr_36316[(7)] = inst_36258);

(statearr_36316[(8)] = inst_36257);

return statearr_36316;
})();
var statearr_36318_37462 = state_36295__$1;
(statearr_36318_37462[(2)] = null);

(statearr_36318_37462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (9))){
var inst_36257 = (state_36295[(8)]);
var inst_36271 = cljs.core.vec(inst_36257);
var state_36295__$1 = state_36295;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36295__$1,(11),out,inst_36271);
} else {
if((state_val_36296 === (5))){
var inst_36261 = (state_36295[(9)]);
var inst_36266 = (state_36295[(11)]);
var inst_36258 = (state_36295[(7)]);
var inst_36257 = (state_36295[(8)]);
var inst_36265 = (inst_36257[inst_36258] = inst_36261);
var inst_36266__$1 = (inst_36258 + (1));
var inst_36267 = (inst_36266__$1 < n);
var state_36295__$1 = (function (){var statearr_36319 = state_36295;
(statearr_36319[(11)] = inst_36266__$1);

(statearr_36319[(12)] = inst_36265);

return statearr_36319;
})();
if(cljs.core.truth_(inst_36267)){
var statearr_36320_37464 = state_36295__$1;
(statearr_36320_37464[(1)] = (8));

} else {
var statearr_36321_37465 = state_36295__$1;
(statearr_36321_37465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (14))){
var inst_36288 = (state_36295[(2)]);
var inst_36289 = cljs.core.async.close_BANG_(out);
var state_36295__$1 = (function (){var statearr_36323 = state_36295;
(statearr_36323[(13)] = inst_36288);

return statearr_36323;
})();
var statearr_36324_37468 = state_36295__$1;
(statearr_36324_37468[(2)] = inst_36289);

(statearr_36324_37468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (10))){
var inst_36277 = (state_36295[(2)]);
var state_36295__$1 = state_36295;
var statearr_36325_37473 = state_36295__$1;
(statearr_36325_37473[(2)] = inst_36277);

(statearr_36325_37473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (8))){
var inst_36266 = (state_36295[(11)]);
var inst_36257 = (state_36295[(8)]);
var tmp36322 = inst_36257;
var inst_36257__$1 = tmp36322;
var inst_36258 = inst_36266;
var state_36295__$1 = (function (){var statearr_36327 = state_36295;
(statearr_36327[(7)] = inst_36258);

(statearr_36327[(8)] = inst_36257__$1);

return statearr_36327;
})();
var statearr_36329_37477 = state_36295__$1;
(statearr_36329_37477[(2)] = null);

(statearr_36329_37477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33081__auto__ = null;
var cljs$core$async$state_machine__33081__auto____0 = (function (){
var statearr_36330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36330[(0)] = cljs$core$async$state_machine__33081__auto__);

(statearr_36330[(1)] = (1));

return statearr_36330;
});
var cljs$core$async$state_machine__33081__auto____1 = (function (state_36295){
while(true){
var ret_value__33082__auto__ = (function (){try{while(true){
var result__33083__auto__ = switch__33080__auto__(state_36295);
if(cljs.core.keyword_identical_QMARK_(result__33083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33083__auto__;
}
break;
}
}catch (e36331){var ex__33084__auto__ = e36331;
var statearr_36332_37480 = state_36295;
(statearr_36332_37480[(2)] = ex__33084__auto__);


if(cljs.core.seq((state_36295[(4)]))){
var statearr_36333_37481 = state_36295;
(statearr_36333_37481[(1)] = cljs.core.first((state_36295[(4)])));

} else {
throw ex__33084__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37482 = state_36295;
state_36295 = G__37482;
continue;
} else {
return ret_value__33082__auto__;
}
break;
}
});
cljs$core$async$state_machine__33081__auto__ = function(state_36295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33081__auto____1.call(this,state_36295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33081__auto____0;
cljs$core$async$state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33081__auto____1;
return cljs$core$async$state_machine__33081__auto__;
})()
})();
var state__33275__auto__ = (function (){var statearr_36334 = f__33274__auto__();
(statearr_36334[(6)] = c__33273__auto___37439);

return statearr_36334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33275__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36336 = arguments.length;
switch (G__36336) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33273__auto___37484 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33274__auto__ = (function (){var switch__33080__auto__ = (function (state_36383){
var state_val_36384 = (state_36383[(1)]);
if((state_val_36384 === (7))){
var inst_36379 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
var statearr_36386_37485 = state_36383__$1;
(statearr_36386_37485[(2)] = inst_36379);

(statearr_36386_37485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (1))){
var inst_36337 = [];
var inst_36338 = inst_36337;
var inst_36339 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36383__$1 = (function (){var statearr_36391 = state_36383;
(statearr_36391[(7)] = inst_36339);

(statearr_36391[(8)] = inst_36338);

return statearr_36391;
})();
var statearr_36392_37486 = state_36383__$1;
(statearr_36392_37486[(2)] = null);

(statearr_36392_37486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (4))){
var inst_36342 = (state_36383[(9)]);
var inst_36342__$1 = (state_36383[(2)]);
var inst_36343 = (inst_36342__$1 == null);
var inst_36344 = cljs.core.not(inst_36343);
var state_36383__$1 = (function (){var statearr_36393 = state_36383;
(statearr_36393[(9)] = inst_36342__$1);

return statearr_36393;
})();
if(inst_36344){
var statearr_36395_37488 = state_36383__$1;
(statearr_36395_37488[(1)] = (5));

} else {
var statearr_36396_37489 = state_36383__$1;
(statearr_36396_37489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (15))){
var inst_36338 = (state_36383[(8)]);
var inst_36371 = cljs.core.vec(inst_36338);
var state_36383__$1 = state_36383;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36383__$1,(18),out,inst_36371);
} else {
if((state_val_36384 === (13))){
var inst_36366 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
var statearr_36399_37490 = state_36383__$1;
(statearr_36399_37490[(2)] = inst_36366);

(statearr_36399_37490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (6))){
var inst_36338 = (state_36383[(8)]);
var inst_36368 = inst_36338.length;
var inst_36369 = (inst_36368 > (0));
var state_36383__$1 = state_36383;
if(cljs.core.truth_(inst_36369)){
var statearr_36402_37498 = state_36383__$1;
(statearr_36402_37498[(1)] = (15));

} else {
var statearr_36403_37499 = state_36383__$1;
(statearr_36403_37499[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (17))){
var inst_36376 = (state_36383[(2)]);
var inst_36377 = cljs.core.async.close_BANG_(out);
var state_36383__$1 = (function (){var statearr_36404 = state_36383;
(statearr_36404[(10)] = inst_36376);

return statearr_36404;
})();
var statearr_36405_37500 = state_36383__$1;
(statearr_36405_37500[(2)] = inst_36377);

(statearr_36405_37500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (3))){
var inst_36381 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36383__$1,inst_36381);
} else {
if((state_val_36384 === (12))){
var inst_36338 = (state_36383[(8)]);
var inst_36358 = cljs.core.vec(inst_36338);
var state_36383__$1 = state_36383;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36383__$1,(14),out,inst_36358);
} else {
if((state_val_36384 === (2))){
var state_36383__$1 = state_36383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36383__$1,(4),ch);
} else {
if((state_val_36384 === (11))){
var inst_36342 = (state_36383[(9)]);
var inst_36346 = (state_36383[(11)]);
var inst_36338 = (state_36383[(8)]);
var inst_36355 = inst_36338.push(inst_36342);
var tmp36412 = inst_36338;
var inst_36338__$1 = tmp36412;
var inst_36339 = inst_36346;
var state_36383__$1 = (function (){var statearr_36415 = state_36383;
(statearr_36415[(7)] = inst_36339);

(statearr_36415[(12)] = inst_36355);

(statearr_36415[(8)] = inst_36338__$1);

return statearr_36415;
})();
var statearr_36416_37502 = state_36383__$1;
(statearr_36416_37502[(2)] = null);

(statearr_36416_37502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (9))){
var inst_36339 = (state_36383[(7)]);
var inst_36350 = cljs.core.keyword_identical_QMARK_(inst_36339,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_36383__$1 = state_36383;
var statearr_36417_37503 = state_36383__$1;
(statearr_36417_37503[(2)] = inst_36350);

(statearr_36417_37503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (5))){
var inst_36342 = (state_36383[(9)]);
var inst_36339 = (state_36383[(7)]);
var inst_36347 = (state_36383[(13)]);
var inst_36346 = (state_36383[(11)]);
var inst_36346__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36342) : f.call(null,inst_36342));
var inst_36347__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36346__$1,inst_36339);
var state_36383__$1 = (function (){var statearr_36434 = state_36383;
(statearr_36434[(13)] = inst_36347__$1);

(statearr_36434[(11)] = inst_36346__$1);

return statearr_36434;
})();
if(inst_36347__$1){
var statearr_36435_37504 = state_36383__$1;
(statearr_36435_37504[(1)] = (8));

} else {
var statearr_36436_37505 = state_36383__$1;
(statearr_36436_37505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (14))){
var inst_36342 = (state_36383[(9)]);
var inst_36346 = (state_36383[(11)]);
var inst_36360 = (state_36383[(2)]);
var inst_36362 = [];
var inst_36363 = inst_36362.push(inst_36342);
var inst_36338 = inst_36362;
var inst_36339 = inst_36346;
var state_36383__$1 = (function (){var statearr_36443 = state_36383;
(statearr_36443[(7)] = inst_36339);

(statearr_36443[(14)] = inst_36360);

(statearr_36443[(15)] = inst_36363);

(statearr_36443[(8)] = inst_36338);

return statearr_36443;
})();
var statearr_36444_37506 = state_36383__$1;
(statearr_36444_37506[(2)] = null);

(statearr_36444_37506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (16))){
var state_36383__$1 = state_36383;
var statearr_36445_37513 = state_36383__$1;
(statearr_36445_37513[(2)] = null);

(statearr_36445_37513[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (10))){
var inst_36352 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
if(cljs.core.truth_(inst_36352)){
var statearr_36450_37515 = state_36383__$1;
(statearr_36450_37515[(1)] = (11));

} else {
var statearr_36454_37519 = state_36383__$1;
(statearr_36454_37519[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (18))){
var inst_36373 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
var statearr_36458_37520 = state_36383__$1;
(statearr_36458_37520[(2)] = inst_36373);

(statearr_36458_37520[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (8))){
var inst_36347 = (state_36383[(13)]);
var state_36383__$1 = state_36383;
var statearr_36459_37523 = state_36383__$1;
(statearr_36459_37523[(2)] = inst_36347);

(statearr_36459_37523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33081__auto__ = null;
var cljs$core$async$state_machine__33081__auto____0 = (function (){
var statearr_36464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36464[(0)] = cljs$core$async$state_machine__33081__auto__);

(statearr_36464[(1)] = (1));

return statearr_36464;
});
var cljs$core$async$state_machine__33081__auto____1 = (function (state_36383){
while(true){
var ret_value__33082__auto__ = (function (){try{while(true){
var result__33083__auto__ = switch__33080__auto__(state_36383);
if(cljs.core.keyword_identical_QMARK_(result__33083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33083__auto__;
}
break;
}
}catch (e36465){var ex__33084__auto__ = e36465;
var statearr_36467_37526 = state_36383;
(statearr_36467_37526[(2)] = ex__33084__auto__);


if(cljs.core.seq((state_36383[(4)]))){
var statearr_36468_37527 = state_36383;
(statearr_36468_37527[(1)] = cljs.core.first((state_36383[(4)])));

} else {
throw ex__33084__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37528 = state_36383;
state_36383 = G__37528;
continue;
} else {
return ret_value__33082__auto__;
}
break;
}
});
cljs$core$async$state_machine__33081__auto__ = function(state_36383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33081__auto____1.call(this,state_36383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33081__auto____0;
cljs$core$async$state_machine__33081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33081__auto____1;
return cljs$core$async$state_machine__33081__auto__;
})()
})();
var state__33275__auto__ = (function (){var statearr_36469 = f__33274__auto__();
(statearr_36469[(6)] = c__33273__auto___37484);

return statearr_36469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33275__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
