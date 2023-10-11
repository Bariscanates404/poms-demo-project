goog.provide('missionary.impl.Heap');
missionary.impl.Heap.create = (function missionary$impl$Heap$create(cap){
var G__46872 = (new Array((cap + (1))));
(G__46872[(0)] = (0));

return G__46872;
});
missionary.impl.Heap.size = (function missionary$impl$Heap$size(heap){
return (heap[(0)]);
});
missionary.impl.Heap.enqueue = (function missionary$impl$Heap$enqueue(heap,i){
var j = ((heap[(0)]) + (1));
(heap[(0)] = j);

(heap[j] = i);

var j__$1 = j;
while(true){
if(((1) === j__$1)){
return null;
} else {
var p = (j__$1 >> (1));
var x = (heap[j__$1]);
var y = (heap[p]);
if((y < x)){
return null;
} else {
(heap[p] = x);

(heap[j__$1] = y);

var G__46920 = p;
j__$1 = G__46920;
continue;
}
}
break;
}
});
missionary.impl.Heap.dequeue = (function missionary$impl$Heap$dequeue(heap){
var s = (heap[(0)]);
var i = (heap[(1)]);
(heap[(0)] = (s - (1)));

(heap[(1)] = (heap[s]));

var j_46921 = (1);
while(true){
var l_46922 = (j_46921 << (1));
if((l_46922 < s)){
var x_46924 = (heap[j_46921]);
var y_46925 = (heap[l_46922]);
var r_46926 = (l_46922 + (1));
if((r_46926 < s)){
var z_46928 = (heap[r_46926]);
if((y_46925 < z_46928)){
if((z_46928 < x_46924)){
(heap[r_46926] = x_46924);

(heap[j_46921] = z_46928);

var G__46932 = r_46926;
j_46921 = G__46932;
continue;
} else {
}
} else {
if((y_46925 < x_46924)){
(heap[l_46922] = x_46924);

(heap[j_46921] = y_46925);

var G__46933 = l_46922;
j_46921 = G__46933;
continue;
} else {
}
}
} else {
if((y_46925 < x_46924)){
(heap[l_46922] = x_46924);

(heap[j_46921] = y_46925);

var G__46936 = l_46922;
j_46921 = G__46936;
continue;
} else {
}
}
} else {
}
break;
}

return i;
});

//# sourceMappingURL=missionary.impl.Heap.js.map
