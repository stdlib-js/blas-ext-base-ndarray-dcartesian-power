"use strict";var q=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var n=q(function(k,v){
var d=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),o=require('@stdlib/ndarray-base-numel-dimension/dist'),c=require('@stdlib/ndarray-base-strides/dist'),f=require('@stdlib/ndarray-base-stride/dist'),u=require('@stdlib/ndarray-base-offset/dist'),s=require('@stdlib/ndarray-base-data-buffer/dist'),g=require('@stdlib/blas-ext-base-dcartesian-power/dist').ndarray;function l(e){var r,a,i,t;return i=e[0],r=e[1],t=d(e[2]),a=c(r,!1),g(o(i,0),t,s(i),f(i,0),u(i),s(r),a[0],a[1],u(r)),r}v.exports=l
});var m=n();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
