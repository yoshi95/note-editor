/*! For license information please see aad10f94539fd9e013cf.764.bundle.js.LICENSE.txt */
(self.webpackChunkmathcha=self.webpackChunkmathcha||[]).push([[764],{79742:(t,e)=>{"use strict";e.byteLength=h,e.toByteArray=c,e.fromByteArray=y;for(var r=[],n=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f=0,s=i.length;f<s;++f)r[f]=i[f],n[i.charCodeAt(f)]=f;function u(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("="),n;return-1===r&&(r=e),[r,r===e?0:4-r%4]}function h(t){var e=u(t),r=e[0],n=e[1];return 3*(r+n)/4-n}function a(t,e,r){return 3*(e+r)/4-r}function c(t){var e,r=u(t),i=r[0],f=r[1],s=new o(a(t,i,f)),h=0,c=f>0?i-4:i,p;for(p=0;p<c;p+=4)e=n[t.charCodeAt(p)]<<18|n[t.charCodeAt(p+1)]<<12|n[t.charCodeAt(p+2)]<<6|n[t.charCodeAt(p+3)],s[h++]=e>>16&255,s[h++]=e>>8&255,s[h++]=255&e;return 2===f&&(e=n[t.charCodeAt(p)]<<2|n[t.charCodeAt(p+1)]>>4,s[h++]=255&e),1===f&&(e=n[t.charCodeAt(p)]<<10|n[t.charCodeAt(p+1)]<<4|n[t.charCodeAt(p+2)]>>2,s[h++]=e>>8&255,s[h++]=255&e),s}function p(t){return r[t>>18&63]+r[t>>12&63]+r[t>>6&63]+r[63&t]}function l(t,e,r){for(var n,o=[],i=e;i<r;i+=3)n=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(255&t[i+2]),o.push(p(n));return o.join("")}function y(t){for(var e,n=t.length,o=n%3,i=[],f=16383,s=0,u=n-o;s<u;s+=f)i.push(l(t,s,s+f>u?u:s+f));return 1===o?(e=t[n-1],i.push(r[e>>2]+r[e<<4&63]+"==")):2===o&&(e=(t[n-2]<<8)+t[n-1],i.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"=")),i.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},48764:(t,e,r)=>{"use strict";const n=r(79742),o=r(80645),i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=h,e.SlowBuffer=E,e.INSPECT_MAX_BYTES=50;const f=2147483647;function s(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}function u(t){if(t>f)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,h.prototype),e}function h(t,e,r){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return l(t)}return a(t,e,r)}function a(t,e,r){if("string"==typeof t)return y(t,e);if(ArrayBuffer.isView(t))return d(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(ft(t,ArrayBuffer)||t&&ft(t.buffer,ArrayBuffer))return w(t,e,r);if("undefined"!=typeof SharedArrayBuffer&&(ft(t,SharedArrayBuffer)||t&&ft(t.buffer,SharedArrayBuffer)))return w(t,e,r);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return h.from(n,e,r);const o=b(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return h.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function c(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function p(t,e,r){return c(t),t<=0?u(t):void 0!==e?"string"==typeof r?u(t).fill(e,r):u(t).fill(e):u(t)}function l(t){return c(t),u(t<0?0:0|B(t))}function y(t,e){if("string"==typeof e&&""!==e||(e="utf8"),!h.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const r=0|m(t,e);let n=u(r);const o=n.write(t,e);return o!==r&&(n=n.slice(0,o)),n}function g(t){const e=t.length<0?0:0|B(t.length),r=u(e);for(let n=0;n<e;n+=1)r[n]=255&t[n];return r}function d(t){if(ft(t,Uint8Array)){const e=new Uint8Array(t);return w(e.buffer,e.byteOffset,e.byteLength)}return g(t)}function w(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),Object.setPrototypeOf(n,h.prototype),n}function b(t){if(h.isBuffer(t)){const e=0|B(t.length),r=u(e);return 0===r.length||t.copy(r,0,0,e),r}return void 0!==t.length?"number"!=typeof t.length||st(t.length)?u(0):g(t):"Buffer"===t.type&&Array.isArray(t.data)?g(t.data):void 0}function B(t){if(t>=f)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+f.toString(16)+" bytes");return 0|t}function E(t){return+t!=t&&(t=0),h.alloc(+t)}function m(t,e){if(h.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||ft(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let o=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return et(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return ot(t).length;default:if(o)return n?-1:et(t).length;e=(""+e).toLowerCase(),o=!0}}function A(t,e,r){let n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return P(this,e,r);case"utf8":case"utf-8":return C(this,e,r);case"ascii":return M(this,e,r);case"latin1":case"binary":return N(this,e,r);case"base64":return _(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function I(t,e,r){const n=t[e];t[e]=t[r],t[r]=n}function U(t,e,r,n,o){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),st(r=+r)&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return-1;r=t.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof e&&(e=h.from(e,n)),h.isBuffer(e))return 0===e.length?-1:v(t,e,r,n,o);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):v(t,[e],r,n,o);throw new TypeError("val must be string, number or Buffer")}function v(t,e,r,n,o){let i=1,f=t.length,s=e.length,u;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;i=2,f/=2,s/=2,r/=2}function h(t,e){return 1===i?t[e]:t.readUInt16BE(e*i)}if(o){let n=-1;for(u=r;u<f;u++)if(h(t,u)===h(e,-1===n?0:u-n)){if(-1===n&&(n=u),u-n+1===s)return n*i}else-1!==n&&(u-=u-n),n=-1}else for(r+s>f&&(r=f-s),u=r;u>=0;u--){let r=!0;for(let n=0;n<s;n++)if(h(t,u+n)!==h(e,n)){r=!1;break}if(r)return u}return-1}function R(t,e,r,n){r=Number(r)||0;const o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;const i=e.length;let f;for(n>i/2&&(n=i/2),f=0;f<n;++f){const n=parseInt(e.substr(2*f,2),16);if(st(n))return f;t[r+f]=n}return f}function T(t,e,r,n){return it(et(e,t.length-r),t,r,n)}function O(t,e,r,n){return it(rt(e),t,r,n)}function L(t,e,r,n){return it(ot(e),t,r,n)}function S(t,e,r,n){return it(nt(e,t.length-r),t,r,n)}function _(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function C(t,e,r){r=Math.min(t.length,r);const n=[];let o=e;for(;o<r;){const e=t[o];let i=null,f=e>239?4:e>223?3:e>191?2:1;if(o+f<=r){let r,n,s,u;switch(f){case 1:e<128&&(i=e);break;case 2:r=t[o+1],128==(192&r)&&(u=(31&e)<<6|63&r,u>127&&(i=u));break;case 3:r=t[o+1],n=t[o+2],128==(192&r)&&128==(192&n)&&(u=(15&e)<<12|(63&r)<<6|63&n,u>2047&&(u<55296||u>57343)&&(i=u));break;case 4:r=t[o+1],n=t[o+2],s=t[o+3],128==(192&r)&&128==(192&n)&&128==(192&s)&&(u=(15&e)<<18|(63&r)<<12|(63&n)<<6|63&s,u>65535&&u<1114112&&(i=u))}}null===i?(i=65533,f=1):i>65535&&(i-=65536,n.push(i>>>10&1023|55296),i=56320|1023&i),n.push(i),o+=f}return $(n)}e.kMaxLength=f,h.TYPED_ARRAY_SUPPORT=s(),h.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}}),h.poolSize=8192,h.from=function(t,e,r){return a(t,e,r)},Object.setPrototypeOf(h.prototype,Uint8Array.prototype),Object.setPrototypeOf(h,Uint8Array),h.alloc=function(t,e,r){return p(t,e,r)},h.allocUnsafe=function(t){return l(t)},h.allocUnsafeSlow=function(t){return l(t)},h.isBuffer=function t(e){return null!=e&&!0===e._isBuffer&&e!==h.prototype},h.compare=function t(e,r){if(ft(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),ft(r,Uint8Array)&&(r=h.from(r,r.offset,r.byteLength)),!h.isBuffer(e)||!h.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;let n=e.length,o=r.length;for(let t=0,i=Math.min(n,o);t<i;++t)if(e[t]!==r[t]){n=e[t],o=r[t];break}return n<o?-1:o<n?1:0},h.isEncoding=function t(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function t(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return h.alloc(0);let n;if(void 0===r)for(r=0,n=0;n<e.length;++n)r+=e[n].length;const o=h.allocUnsafe(r);let i=0;for(n=0;n<e.length;++n){let t=e[n];if(ft(t,Uint8Array))i+t.length>o.length?(h.isBuffer(t)||(t=h.from(t)),t.copy(o,i)):Uint8Array.prototype.set.call(o,t,i);else{if(!h.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(o,i)}i+=t.length}return o},h.byteLength=m,h.prototype._isBuffer=!0,h.prototype.swap16=function t(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)I(this,t,t+1);return this},h.prototype.swap32=function t(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)I(this,t,t+3),I(this,t+1,t+2);return this},h.prototype.swap64=function t(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)I(this,t,t+7),I(this,t+1,t+6),I(this,t+2,t+5),I(this,t+3,t+4);return this},h.prototype.toString=function t(){const e=this.length;return 0===e?"":0===arguments.length?C(this,0,e):A.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function t(e){if(!h.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===h.compare(this,e)},h.prototype.inspect=function t(){let r="";const n=e.INSPECT_MAX_BYTES;return r=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(r+=" ... "),"<Buffer "+r+">"},i&&(h.prototype[i]=h.prototype.inspect),h.prototype.compare=function t(e,r,n,o,i){if(ft(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===r&&(r=0),void 0===n&&(n=e?e.length:0),void 0===o&&(o=0),void 0===i&&(i=this.length),r<0||n>e.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&r>=n)return 0;if(o>=i)return-1;if(r>=n)return 1;if(this===e)return 0;let f=(i>>>=0)-(o>>>=0),s=(n>>>=0)-(r>>>=0);const u=Math.min(f,s),a=this.slice(o,i),c=e.slice(r,n);for(let t=0;t<u;++t)if(a[t]!==c[t]){f=a[t],s=c[t];break}return f<s?-1:s<f?1:0},h.prototype.includes=function t(e,r,n){return-1!==this.indexOf(e,r,n)},h.prototype.indexOf=function t(e,r,n){return U(this,e,r,n,!0)},h.prototype.lastIndexOf=function t(e,r,n){return U(this,e,r,n,!1)},h.prototype.write=function t(e,r,n,o){if(void 0===r)o="utf8",n=this.length,r=0;else if(void 0===n&&"string"==typeof r)o=r,n=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r>>>=0,isFinite(n)?(n>>>=0,void 0===o&&(o="utf8")):(o=n,n=void 0)}const i=this.length-r;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");let f=!1;for(;;)switch(o){case"hex":return R(this,e,r,n);case"utf8":case"utf-8":return T(this,e,r,n);case"ascii":case"latin1":case"binary":return O(this,e,r,n);case"base64":return L(this,e,r,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return S(this,e,r,n);default:if(f)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),f=!0}},h.prototype.toJSON=function t(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const x=4096;function $(t){const e=t.length;if(e<=x)return String.fromCharCode.apply(String,t);let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=x));return r}function M(t,e,r){let n="";r=Math.min(t.length,r);for(let o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}function N(t,e,r){let n="";r=Math.min(t.length,r);for(let o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}function P(t,e,r){const n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);let o="";for(let n=e;n<r;++n)o+=ut[t[n]];return o}function k(t,e,r){const n=t.slice(e,r);let o="";for(let t=0;t<n.length-1;t+=2)o+=String.fromCharCode(n[t]+256*n[t+1]);return o}function j(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function F(t,e,r,n,o,i){if(!h.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function D(t,e,r,n,o){Z(e,n,o,t,r,7);let i=Number(e&BigInt(4294967295));t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i;let f=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=f,f>>=8,t[r++]=f,f>>=8,t[r++]=f,f>>=8,t[r++]=f,r}function z(t,e,r,n,o){Z(e,n,o,t,r,7);let i=Number(e&BigInt(4294967295));t[r+7]=i,i>>=8,t[r+6]=i,i>>=8,t[r+5]=i,i>>=8,t[r+4]=i;let f=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=f,f>>=8,t[r+2]=f,f>>=8,t[r+1]=f,f>>=8,t[r]=f,r+8}function Y(t,e,r,n,o,i){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function G(t,e,r,n,i){return e=+e,r>>>=0,i||Y(t,e,r,4,34028234663852886e22,-34028234663852886e22),o.write(t,e,r,n,23,4),r+4}function V(t,e,r,n,i){return e=+e,r>>>=0,i||Y(t,e,r,8,17976931348623157e292,-17976931348623157e292),o.write(t,e,r,n,52,8),r+8}h.prototype.slice=function t(e,r){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<e&&(r=e);const o=this.subarray(e,r);return Object.setPrototypeOf(o,h.prototype),o},h.prototype.readUintLE=h.prototype.readUIntLE=function t(e,r,n){e>>>=0,r>>>=0,n||j(e,r,this.length);let o=this[e],i=1,f=0;for(;++f<r&&(i*=256);)o+=this[e+f]*i;return o},h.prototype.readUintBE=h.prototype.readUIntBE=function t(e,r,n){e>>>=0,r>>>=0,n||j(e,r,this.length);let o=this[e+--r],i=1;for(;r>0&&(i*=256);)o+=this[e+--r]*i;return o},h.prototype.readUint8=h.prototype.readUInt8=function t(e,r){return e>>>=0,r||j(e,1,this.length),this[e]},h.prototype.readUint16LE=h.prototype.readUInt16LE=function t(e,r){return e>>>=0,r||j(e,2,this.length),this[e]|this[e+1]<<8},h.prototype.readUint16BE=h.prototype.readUInt16BE=function t(e,r){return e>>>=0,r||j(e,2,this.length),this[e]<<8|this[e+1]},h.prototype.readUint32LE=h.prototype.readUInt32LE=function t(e,r){return e>>>=0,r||j(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},h.prototype.readUint32BE=h.prototype.readUInt32BE=function t(e,r){return e>>>=0,r||j(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},h.prototype.readBigUInt64LE=ht((function t(e){H(e>>>=0,"offset");const r=this[e],n=this[e+7];void 0!==r&&void 0!==n||K(e,this.length-8);const o=r+256*this[++e]+65536*this[++e]+this[++e]*2**24,i=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(o)+(BigInt(i)<<BigInt(32))})),h.prototype.readBigUInt64BE=ht((function t(e){H(e>>>=0,"offset");const r=this[e],n=this[e+7];void 0!==r&&void 0!==n||K(e,this.length-8);const o=r*2**24+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(o)<<BigInt(32))+BigInt(i)})),h.prototype.readIntLE=function t(e,r,n){e>>>=0,r>>>=0,n||j(e,r,this.length);let o=this[e],i=1,f=0;for(;++f<r&&(i*=256);)o+=this[e+f]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*r)),o},h.prototype.readIntBE=function t(e,r,n){e>>>=0,r>>>=0,n||j(e,r,this.length);let o=r,i=1,f=this[e+--o];for(;o>0&&(i*=256);)f+=this[e+--o]*i;return i*=128,f>=i&&(f-=Math.pow(2,8*r)),f},h.prototype.readInt8=function t(e,r){return e>>>=0,r||j(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},h.prototype.readInt16LE=function t(e,r){e>>>=0,r||j(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt16BE=function t(e,r){e>>>=0,r||j(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt32LE=function t(e,r){return e>>>=0,r||j(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},h.prototype.readInt32BE=function t(e,r){return e>>>=0,r||j(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},h.prototype.readBigInt64LE=ht((function t(e){H(e>>>=0,"offset");const r=this[e],n=this[e+7];void 0!==r&&void 0!==n||K(e,this.length-8);const o=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(o)<<BigInt(32))+BigInt(r+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),h.prototype.readBigInt64BE=ht((function t(e){H(e>>>=0,"offset");const r=this[e],n=this[e+7];void 0!==r&&void 0!==n||K(e,this.length-8);const o=(r<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(o)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),h.prototype.readFloatLE=function t(e,r){return e>>>=0,r||j(e,4,this.length),o.read(this,e,!0,23,4)},h.prototype.readFloatBE=function t(e,r){return e>>>=0,r||j(e,4,this.length),o.read(this,e,!1,23,4)},h.prototype.readDoubleLE=function t(e,r){return e>>>=0,r||j(e,8,this.length),o.read(this,e,!0,52,8)},h.prototype.readDoubleBE=function t(e,r){return e>>>=0,r||j(e,8,this.length),o.read(this,e,!1,52,8)},h.prototype.writeUintLE=h.prototype.writeUIntLE=function t(e,r,n,o){if(e=+e,r>>>=0,n>>>=0,!o){const t=undefined;F(this,e,r,n,Math.pow(2,8*n)-1,0)}let i=1,f=0;for(this[r]=255&e;++f<n&&(i*=256);)this[r+f]=e/i&255;return r+n},h.prototype.writeUintBE=h.prototype.writeUIntBE=function t(e,r,n,o){if(e=+e,r>>>=0,n>>>=0,!o){const t=undefined;F(this,e,r,n,Math.pow(2,8*n)-1,0)}let i=n-1,f=1;for(this[r+i]=255&e;--i>=0&&(f*=256);)this[r+i]=e/f&255;return r+n},h.prototype.writeUint8=h.prototype.writeUInt8=function t(e,r,n){return e=+e,r>>>=0,n||F(this,e,r,1,255,0),this[r]=255&e,r+1},h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function t(e,r,n){return e=+e,r>>>=0,n||F(this,e,r,2,65535,0),this[r]=255&e,this[r+1]=e>>>8,r+2},h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function t(e,r,n){return e=+e,r>>>=0,n||F(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=255&e,r+2},h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function t(e,r,n){return e=+e,r>>>=0,n||F(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=255&e,r+4},h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function t(e,r,n){return e=+e,r>>>=0,n||F(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=255&e,r+4},h.prototype.writeBigUInt64LE=ht((function t(e,r=0){return D(this,e,r,BigInt(0),BigInt("0xffffffffffffffff"))})),h.prototype.writeBigUInt64BE=ht((function t(e,r=0){return z(this,e,r,BigInt(0),BigInt("0xffffffffffffffff"))})),h.prototype.writeIntLE=function t(e,r,n,o){if(e=+e,r>>>=0,!o){const t=Math.pow(2,8*n-1);F(this,e,r,n,t-1,-t)}let i=0,f=1,s=0;for(this[r]=255&e;++i<n&&(f*=256);)e<0&&0===s&&0!==this[r+i-1]&&(s=1),this[r+i]=(e/f>>0)-s&255;return r+n},h.prototype.writeIntBE=function t(e,r,n,o){if(e=+e,r>>>=0,!o){const t=Math.pow(2,8*n-1);F(this,e,r,n,t-1,-t)}let i=n-1,f=1,s=0;for(this[r+i]=255&e;--i>=0&&(f*=256);)e<0&&0===s&&0!==this[r+i+1]&&(s=1),this[r+i]=(e/f>>0)-s&255;return r+n},h.prototype.writeInt8=function t(e,r,n){return e=+e,r>>>=0,n||F(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=255&e,r+1},h.prototype.writeInt16LE=function t(e,r,n){return e=+e,r>>>=0,n||F(this,e,r,2,32767,-32768),this[r]=255&e,this[r+1]=e>>>8,r+2},h.prototype.writeInt16BE=function t(e,r,n){return e=+e,r>>>=0,n||F(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=255&e,r+2},h.prototype.writeInt32LE=function t(e,r,n){return e=+e,r>>>=0,n||F(this,e,r,4,2147483647,-2147483648),this[r]=255&e,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},h.prototype.writeInt32BE=function t(e,r,n){return e=+e,r>>>=0,n||F(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=255&e,r+4},h.prototype.writeBigInt64LE=ht((function t(e,r=0){return D(this,e,r,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),h.prototype.writeBigInt64BE=ht((function t(e,r=0){return z(this,e,r,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),h.prototype.writeFloatLE=function t(e,r,n){return G(this,e,r,!0,n)},h.prototype.writeFloatBE=function t(e,r,n){return G(this,e,r,!1,n)},h.prototype.writeDoubleLE=function t(e,r,n){return V(this,e,r,!0,n)},h.prototype.writeDoubleBE=function t(e,r,n){return V(this,e,r,!1,n)},h.prototype.copy=function t(e,r,n,o){if(!h.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),o||0===o||(o=this.length),r>=e.length&&(r=e.length),r||(r=0),o>0&&o<n&&(o=n),o===n)return 0;if(0===e.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-r<o-n&&(o=e.length-r+n);const i=o-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(r,n,o):Uint8Array.prototype.set.call(e,this.subarray(n,o),r),i},h.prototype.fill=function t(e,r,n,o){if("string"==typeof e){if("string"==typeof r?(o=r,r=0,n=this.length):"string"==typeof n&&(o=n,n=this.length),void 0!==o&&"string"!=typeof o)throw new TypeError("encoding must be a string");if("string"==typeof o&&!h.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(1===e.length){const t=e.charCodeAt(0);("utf8"===o&&t<128||"latin1"===o)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(r<0||this.length<r||this.length<n)throw new RangeError("Out of range index");if(n<=r)return this;let i;if(r>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(i=r;i<n;++i)this[i]=e;else{const t=h.isBuffer(e)?e:h.from(e,o),f=t.length;if(0===f)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-r;++i)this[i+r]=t[i%f]}return this};const q={};function W(t,e,r){q[t]=class n extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function X(t){let e="",r=t.length;const n="-"===t[0]?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function J(t,e,r){H(e,"offset"),void 0!==t[e]&&void 0!==t[e+r]||K(e,t.length-(r+1))}function Z(t,e,r,n,o,i){if(t>r||t<e){const n="bigint"==typeof e?"n":"";let o;throw o=i>3?0===e||e===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(i+1)}${n}`:`>= -(2${n} ** ${8*(i+1)-1}${n}) and < 2 ** ${8*(i+1)-1}${n}`:`>= ${e}${n} and <= ${r}${n}`,new q.ERR_OUT_OF_RANGE("value",o,t)}J(n,o,i)}function H(t,e){if("number"!=typeof t)throw new q.ERR_INVALID_ARG_TYPE(e,"number",t)}function K(t,e,r){if(Math.floor(t)!==t)throw H(t,r),new q.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new q.ERR_BUFFER_OUT_OF_BOUNDS;throw new q.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}W("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),W("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),W("ERR_OUT_OF_RANGE",(function(t,e,r){let n=`The value of "${t}" is out of range.`,o=r;return Number.isInteger(r)&&Math.abs(r)>2**32?o=X(String(r)):"bigint"==typeof r&&(o=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(o=X(o)),o+="n"),n+=` It must be ${e}. Received ${o}`,n}),RangeError);const Q=/[^+/0-9A-Za-z-_]/g;function tt(t){if((t=(t=t.split("=")[0]).trim().replace(Q,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}function et(t,e){let r;e=e||1/0;const n=t.length;let o=null;const i=[];for(let f=0;f<n;++f){if(r=t.charCodeAt(f),r>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(f+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function rt(t){const e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}function nt(t,e){let r,n,o;const i=[];for(let f=0;f<t.length&&!((e-=2)<0);++f)r=t.charCodeAt(f),n=r>>8,o=r%256,i.push(o),i.push(n);return i}function ot(t){return n.toByteArray(tt(t))}function it(t,e,r,n){let o;for(o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}function ft(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function st(t){return t!=t}const ut=function(){const t="0123456789abcdef",e=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let o=0;o<16;++o)e[n+o]=t[r]+t[o]}return e}();function ht(t){return"undefined"==typeof BigInt?at:t}function at(){throw new Error("BigInt not supported")}},80645:(t,e)=>{e.read=function(t,e,r,n,o){var i,f,s=8*o-n-1,u=(1<<s)-1,h=u>>1,a=-7,c=r?o-1:0,p=r?-1:1,l=t[e+c];for(c+=p,i=l&(1<<-a)-1,l>>=-a,a+=s;a>0;i=256*i+t[e+c],c+=p,a-=8);for(f=i&(1<<-a)-1,i>>=-a,a+=n;a>0;f=256*f+t[e+c],c+=p,a-=8);if(0===i)i=1-h;else{if(i===u)return f?NaN:1/0*(l?-1:1);f+=Math.pow(2,n),i-=h}return(l?-1:1)*f*Math.pow(2,i-n)},e.write=function(t,e,r,n,o,i){var f,s,u,h=8*i-o-1,a=(1<<h)-1,c=a>>1,p=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,l=n?0:i-1,y=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,f=a):(f=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-f))<1&&(f--,u*=2),(e+=f+c>=1?p/u:p*Math.pow(2,1-c))*u>=2&&(f++,u/=2),f+c>=a?(s=0,f=a):f+c>=1?(s=(e*u-1)*Math.pow(2,o),f+=c):(s=e*Math.pow(2,c-1)*Math.pow(2,o),f=0));o>=8;t[r+l]=255&s,l+=y,s/=256,o-=8);for(f=f<<o|s,h+=o;h>0;t[r+l]=255&f,l+=y,f/=256,h-=8);t[r+l-y]|=128*g}}}]);