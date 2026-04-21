import{R as M,j as l,C as de,s as at}from"./index-DekCSoZL.js";import{T as st}from"./index.esm-Dqt17Ohr-DAmIDVFL.js";import{d as lt}from"./firebaseConfig-BqIL-e7F-D0kZRQGD.js";import{s as ct}from"./Footer-C4lV-gcO-CGVwvfpH.js";var Q={},fe,he;function ut(){return he||(he=1,fe=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),fe}var G={},U={},ge;function _(){if(ge)return U;ge=1;let o;const i=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return U.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17},U.getSymbolTotalCodewords=function(e){return i[e]},U.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t},U.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');o=e},U.isKanjiModeEnabled=function(){return typeof o<"u"},U.toSJIS=function(e){return o(e)},U}var pe={},me;function se(){return me||(me=1,(function(o){o.L={bit:1},o.M={bit:0},o.Q={bit:3},o.H={bit:2};function i(e){if(typeof e!="string")throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return o.L;case"m":case"medium":return o.M;case"q":case"quartile":return o.Q;case"h":case"high":return o.H;default:throw new Error("Unknown EC Level: "+e)}}o.isValid=function(e){return e&&typeof e.bit<"u"&&e.bit>=0&&e.bit<4},o.from=function(e,t){if(o.isValid(e))return e;try{return i(e)}catch{return t}}})(pe)),pe}var Z,ve;function dt(){if(ve)return Z;ve=1;function o(){this.buffer=[],this.length=0}return o.prototype={get:function(i){const e=Math.floor(i/8);return(this.buffer[e]>>>7-i%8&1)===1},put:function(i,e){for(let t=0;t<e;t++)this.putBit((i>>>e-t-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(i){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),i&&(this.buffer[e]|=128>>>this.length%8),this.length++}},Z=o,Z}var X,xe;function ft(){if(xe)return X;xe=1;function o(i){if(!i||i<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=i,this.data=new Uint8Array(i*i),this.reservedBit=new Uint8Array(i*i)}return o.prototype.set=function(i,e,t,r){const n=i*this.size+e;this.data[n]=t,r&&(this.reservedBit[n]=!0)},o.prototype.get=function(i,e){return this.data[i*this.size+e]},o.prototype.xor=function(i,e,t){this.data[i*this.size+e]^=t},o.prototype.isReserved=function(i,e){return this.reservedBit[i*this.size+e]},X=o,X}var be={},we;function ht(){return we||(we=1,(function(o){const i=_().getSymbolSize;o.getRowColCoords=function(e){if(e===1)return[];const t=Math.floor(e/7)+2,r=i(e),n=r===145?26:Math.ceil((r-13)/(2*t-2))*2,s=[r-7];for(let a=1;a<t-1;a++)s[a]=s[a-1]-n;return s.push(6),s.reverse()},o.getPositions=function(e){const t=[],r=o.getRowColCoords(e),n=r.length;for(let s=0;s<n;s++)for(let a=0;a<n;a++)s===0&&a===0||s===0&&a===n-1||s===n-1&&a===0||t.push([r[s],r[a]]);return t}})(be)),be}var W={},ye;function gt(){if(ye)return W;ye=1;const o=_().getSymbolSize,i=7;return W.getPositions=function(e){const t=o(e);return[[0,0],[t-i,0],[0,t-i]]},W}var Ne={},qe;function pt(){return qe||(qe=1,(function(o){o.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const i={N1:3,N2:3,N3:40,N4:10};o.isValid=function(t){return t!=null&&t!==""&&!isNaN(t)&&t>=0&&t<=7},o.from=function(t){return o.isValid(t)?parseInt(t,10):void 0},o.getPenaltyN1=function(t){const r=t.size;let n=0,s=0,a=0,c=null,h=null;for(let w=0;w<r;w++){s=a=0,c=h=null;for(let y=0;y<r;y++){let u=t.get(w,y);u===c?s++:(s>=5&&(n+=i.N1+(s-5)),c=u,s=1),u=t.get(y,w),u===h?a++:(a>=5&&(n+=i.N1+(a-5)),h=u,a=1)}s>=5&&(n+=i.N1+(s-5)),a>=5&&(n+=i.N1+(a-5))}return n},o.getPenaltyN2=function(t){const r=t.size;let n=0;for(let s=0;s<r-1;s++)for(let a=0;a<r-1;a++){const c=t.get(s,a)+t.get(s,a+1)+t.get(s+1,a)+t.get(s+1,a+1);(c===4||c===0)&&n++}return n*i.N2},o.getPenaltyN3=function(t){const r=t.size;let n=0,s=0,a=0;for(let c=0;c<r;c++){s=a=0;for(let h=0;h<r;h++)s=s<<1&2047|t.get(c,h),h>=10&&(s===1488||s===93)&&n++,a=a<<1&2047|t.get(h,c),h>=10&&(a===1488||a===93)&&n++}return n*i.N3},o.getPenaltyN4=function(t){let r=0;const n=t.data.length;for(let s=0;s<n;s++)r+=t.data[s];return Math.abs(Math.ceil(r*100/n/5)-10)*i.N4};function e(t,r,n){switch(t){case o.Patterns.PATTERN000:return(r+n)%2===0;case o.Patterns.PATTERN001:return r%2===0;case o.Patterns.PATTERN010:return n%3===0;case o.Patterns.PATTERN011:return(r+n)%3===0;case o.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2===0;case o.Patterns.PATTERN101:return r*n%2+r*n%3===0;case o.Patterns.PATTERN110:return(r*n%2+r*n%3)%2===0;case o.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2===0;default:throw new Error("bad maskPattern:"+t)}}o.applyMask=function(t,r){const n=r.size;for(let s=0;s<n;s++)for(let a=0;a<n;a++)r.isReserved(a,s)||r.xor(a,s,e(t,a,s))},o.getBestMask=function(t,r){const n=Object.keys(o.Patterns).length;let s=0,a=1/0;for(let c=0;c<n;c++){r(c),o.applyMask(c,t);const h=o.getPenaltyN1(t)+o.getPenaltyN2(t)+o.getPenaltyN3(t)+o.getPenaltyN4(t);o.applyMask(c,t),h<a&&(a=h,s=c)}return s}})(Ne)),Ne}var J={},Ce;function We(){if(Ce)return J;Ce=1;const o=se(),i=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],e=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return J.getBlocksCount=function(t,r){switch(r){case o.L:return i[(t-1)*4+0];case o.M:return i[(t-1)*4+1];case o.Q:return i[(t-1)*4+2];case o.H:return i[(t-1)*4+3];default:return}},J.getTotalCodewordsCount=function(t,r){switch(r){case o.L:return e[(t-1)*4+0];case o.M:return e[(t-1)*4+1];case o.Q:return e[(t-1)*4+2];case o.H:return e[(t-1)*4+3];default:return}},J}var Ee={},H={},je;function mt(){if(je)return H;je=1;const o=new Uint8Array(512),i=new Uint8Array(256);return(function(){let e=1;for(let t=0;t<255;t++)o[t]=e,i[e]=t,e<<=1,e&256&&(e^=285);for(let t=255;t<512;t++)o[t]=o[t-255]})(),H.log=function(e){if(e<1)throw new Error("log("+e+")");return i[e]},H.exp=function(e){return o[e]},H.mul=function(e,t){return e===0||t===0?0:o[i[e]+i[t]]},H}var Be;function vt(){return Be||(Be=1,(function(o){const i=mt();o.mul=function(e,t){const r=new Uint8Array(e.length+t.length-1);for(let n=0;n<e.length;n++)for(let s=0;s<t.length;s++)r[n+s]^=i.mul(e[n],t[s]);return r},o.mod=function(e,t){let r=new Uint8Array(e);for(;r.length-t.length>=0;){const n=r[0];for(let a=0;a<t.length;a++)r[a]^=i.mul(t[a],n);let s=0;for(;s<r.length&&r[s]===0;)s++;r=r.slice(s)}return r},o.generateECPolynomial=function(e){let t=new Uint8Array([1]);for(let r=0;r<e;r++)t=o.mul(t,new Uint8Array([1,i.exp(r)]));return t}})(Ee)),Ee}var ee,Ie;function xt(){if(Ie)return ee;Ie=1;const o=vt();function i(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}return i.prototype.initialize=function(e){this.degree=e,this.genPoly=o.generateECPolynomial(this.degree)},i.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(e.length+this.degree);t.set(e);const r=o.mod(t,this.genPoly),n=this.degree-r.length;if(n>0){const s=new Uint8Array(this.degree);return s.set(r,n),s}return r},ee=i,ee}var Pe={},Ae={},Re={},Me;function et(){return Me||(Me=1,Re.isValid=function(o){return!isNaN(o)&&o>=1&&o<=40}),Re}var T={},Te;function tt(){if(Te)return T;Te=1;const o="[0-9]+",i="[A-Z $%*+\\-./:]+";let e="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";e=e.replace(/u/g,"\\u");const t="(?:(?![A-Z0-9 $%*+\\-./:]|"+e+`)(?:.|[\r
]))+`;T.KANJI=new RegExp(e,"g"),T.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),T.BYTE=new RegExp(t,"g"),T.NUMERIC=new RegExp(o,"g"),T.ALPHANUMERIC=new RegExp(i,"g");const r=new RegExp("^"+e+"$"),n=new RegExp("^"+o+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return T.testKanji=function(a){return r.test(a)},T.testNumeric=function(a){return n.test(a)},T.testAlphanumeric=function(a){return s.test(a)},T}var ke;function z(){return ke||(ke=1,(function(o){const i=et(),e=tt();o.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},o.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},o.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},o.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},o.MIXED={bit:-1},o.getCharCountIndicator=function(r,n){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!i.isValid(n))throw new Error("Invalid version: "+n);return n>=1&&n<10?r.ccBits[0]:n<27?r.ccBits[1]:r.ccBits[2]},o.getBestModeForData=function(r){return e.testNumeric(r)?o.NUMERIC:e.testAlphanumeric(r)?o.ALPHANUMERIC:e.testKanji(r)?o.KANJI:o.BYTE},o.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},o.isValid=function(r){return r&&r.bit&&r.ccBits};function t(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return o.NUMERIC;case"alphanumeric":return o.ALPHANUMERIC;case"kanji":return o.KANJI;case"byte":return o.BYTE;default:throw new Error("Unknown mode: "+r)}}o.from=function(r,n){if(o.isValid(r))return r;try{return t(r)}catch{return n}}})(Ae)),Ae}var Le;function bt(){return Le||(Le=1,(function(o){const i=_(),e=We(),t=se(),r=z(),n=et(),s=7973,a=i.getBCHDigit(s);function c(u,j,C){for(let P=1;P<=40;P++)if(j<=o.getCapacity(P,C,u))return P}function h(u,j){return r.getCharCountIndicator(u,j)+4}function w(u,j){let C=0;return u.forEach(function(P){const R=h(P.mode,j);C+=R+P.getBitsLength()}),C}function y(u,j){for(let C=1;C<=40;C++)if(w(u,C)<=o.getCapacity(C,j,r.MIXED))return C}o.from=function(u,j){return n.isValid(u)?parseInt(u,10):j},o.getCapacity=function(u,j,C){if(!n.isValid(u))throw new Error("Invalid QR Code version");typeof C>"u"&&(C=r.BYTE);const P=i.getSymbolTotalCodewords(u),R=e.getTotalCodewordsCount(u,j),N=(P-R)*8;if(C===r.MIXED)return N;const I=N-h(C,u);switch(C){case r.NUMERIC:return Math.floor(I/10*3);case r.ALPHANUMERIC:return Math.floor(I/11*2);case r.KANJI:return Math.floor(I/13);case r.BYTE:default:return Math.floor(I/8)}},o.getBestVersionForData=function(u,j){let C;const P=t.from(j,t.M);if(Array.isArray(u)){if(u.length>1)return y(u,P);if(u.length===0)return 1;C=u[0]}else C=u;return c(C.mode,C.getLength(),P)},o.getEncodedBits=function(u){if(!n.isValid(u)||u<7)throw new Error("Invalid QR Code version");let j=u<<12;for(;i.getBCHDigit(j)-a>=0;)j^=s<<i.getBCHDigit(j)-a;return u<<12|j}})(Pe)),Pe}var te={},Se;function wt(){if(Se)return te;Se=1;const o=_(),i=1335,e=21522,t=o.getBCHDigit(i);return te.getEncodedBits=function(r,n){const s=r.bit<<3|n;let a=s<<10;for(;o.getBCHDigit(a)-t>=0;)a^=i<<o.getBCHDigit(a)-t;return(s<<10|a)^e},te}var Ue={},re,_e;function yt(){if(_e)return re;_e=1;const o=z();function i(e){this.mode=o.NUMERIC,this.data=e.toString()}return i.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t,r,n;for(t=0;t+3<=this.data.length;t+=3)r=this.data.substr(t,3),n=parseInt(r,10),e.put(n,10);const s=this.data.length-t;s>0&&(r=this.data.substr(t),n=parseInt(r,10),e.put(n,s*3+1))},re=i,re}var ne,ze;function Nt(){if(ze)return ne;ze=1;const o=z(),i=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function e(t){this.mode=o.ALPHANUMERIC,this.data=t}return e.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){let r;for(r=0;r+2<=this.data.length;r+=2){let n=i.indexOf(this.data[r])*45;n+=i.indexOf(this.data[r+1]),t.put(n,11)}this.data.length%2&&t.put(i.indexOf(this.data[r]),6)},ne=e,ne}var oe,De;function qt(){if(De)return oe;De=1;const o=z();function i(e){this.mode=o.BYTE,typeof e=="string"?this.data=new TextEncoder().encode(e):this.data=new Uint8Array(e)}return i.getBitsLength=function(e){return e*8},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)},oe=i,oe}var ie,Qe;function Ct(){if(Qe)return ie;Qe=1;const o=z(),i=_();function e(t){this.mode=o.KANJI,this.data=t}return e.getBitsLength=function(t){return t*13},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){let r;for(r=0;r<this.data.length;r++){let n=i.toSJIS(this.data[r]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[r]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),t.put(n,13)}},ie=e,ie}var Fe={exports:{}},He;function Et(){return He||(He=1,(function(o){var i={single_source_shortest_paths:function(e,t,r){var n={},s={};s[t]=0;var a=i.PriorityQueue.make();a.push(t,0);for(var c,h,w,y,u,j,C,P,R;!a.empty();){c=a.pop(),h=c.value,y=c.cost,u=e[h]||{};for(w in u)u.hasOwnProperty(w)&&(j=u[w],C=y+j,P=s[w],R=typeof s[w]>"u",(R||P>C)&&(s[w]=C,a.push(w,C),n[w]=h))}if(typeof r<"u"&&typeof s[r]>"u"){var N=["Could not find a path from ",t," to ",r,"."].join("");throw new Error(N)}return n},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],n=t;n;)r.push(n),e[n],n=e[n];return r.reverse(),r},find_path:function(e,t,r){var n=i.single_source_shortest_paths(e,t,r);return i.extract_shortest_path_from_predecessor_list(n,r)},PriorityQueue:{make:function(e){var t=i.PriorityQueue,r={},n;e=e||{};for(n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);return r.queue=[],r.sorter=e.sorter||t.default_sorter,r},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){var r={value:e,cost:t};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};o.exports=i})(Fe)),Fe.exports}var Ye;function jt(){return Ye||(Ye=1,(function(o){const i=z(),e=yt(),t=Nt(),r=qt(),n=Ct(),s=tt(),a=_(),c=Et();function h(N){return unescape(encodeURIComponent(N)).length}function w(N,I,f){const E=[];let A;for(;(A=N.exec(f))!==null;)E.push({data:A[0],index:A.index,mode:I,length:A[0].length});return E}function y(N){const I=w(s.NUMERIC,i.NUMERIC,N),f=w(s.ALPHANUMERIC,i.ALPHANUMERIC,N);let E,A;return a.isKanjiModeEnabled()?(E=w(s.BYTE,i.BYTE,N),A=w(s.KANJI,i.KANJI,N)):(E=w(s.BYTE_KANJI,i.BYTE,N),A=[]),I.concat(f,E,A).sort(function(d,v){return d.index-v.index}).map(function(d){return{data:d.data,mode:d.mode,length:d.length}})}function u(N,I){switch(I){case i.NUMERIC:return e.getBitsLength(N);case i.ALPHANUMERIC:return t.getBitsLength(N);case i.KANJI:return n.getBitsLength(N);case i.BYTE:return r.getBitsLength(N)}}function j(N){return N.reduce(function(I,f){const E=I.length-1>=0?I[I.length-1]:null;return E&&E.mode===f.mode?(I[I.length-1].data+=f.data,I):(I.push(f),I)},[])}function C(N){const I=[];for(let f=0;f<N.length;f++){const E=N[f];switch(E.mode){case i.NUMERIC:I.push([E,{data:E.data,mode:i.ALPHANUMERIC,length:E.length},{data:E.data,mode:i.BYTE,length:E.length}]);break;case i.ALPHANUMERIC:I.push([E,{data:E.data,mode:i.BYTE,length:E.length}]);break;case i.KANJI:I.push([E,{data:E.data,mode:i.BYTE,length:h(E.data)}]);break;case i.BYTE:I.push([{data:E.data,mode:i.BYTE,length:h(E.data)}])}}return I}function P(N,I){const f={},E={start:{}};let A=["start"];for(let d=0;d<N.length;d++){const v=N[d],q=[];for(let g=0;g<v.length;g++){const p=v[g],x=""+d+g;q.push(x),f[x]={node:p,lastCount:0},E[x]={};for(let m=0;m<A.length;m++){const b=A[m];f[b]&&f[b].node.mode===p.mode?(E[b][x]=u(f[b].lastCount+p.length,p.mode)-u(f[b].lastCount,p.mode),f[b].lastCount+=p.length):(f[b]&&(f[b].lastCount=p.length),E[b][x]=u(p.length,p.mode)+4+i.getCharCountIndicator(p.mode,I))}}A=q}for(let d=0;d<A.length;d++)E[A[d]].end=0;return{map:E,table:f}}function R(N,I){let f;const E=i.getBestModeForData(N);if(f=i.from(I,E),f!==i.BYTE&&f.bit<E.bit)throw new Error('"'+N+'" cannot be encoded with mode '+i.toString(f)+`.
 Suggested mode is: `+i.toString(E));switch(f===i.KANJI&&!a.isKanjiModeEnabled()&&(f=i.BYTE),f){case i.NUMERIC:return new e(N);case i.ALPHANUMERIC:return new t(N);case i.KANJI:return new n(N);case i.BYTE:return new r(N)}}o.fromArray=function(N){return N.reduce(function(I,f){return typeof f=="string"?I.push(R(f,null)):f.data&&I.push(R(f.data,f.mode)),I},[])},o.fromString=function(N,I){const f=y(N,a.isKanjiModeEnabled()),E=C(f),A=P(E,I),d=c.find_path(A.map,"start","end"),v=[];for(let q=1;q<d.length-1;q++)v.push(A.table[d[q]].node);return o.fromArray(j(v))},o.rawSplit=function(N){return o.fromArray(y(N,a.isKanjiModeEnabled()))}})(Ue)),Ue}var Je;function Bt(){if(Je)return G;Je=1;const o=_(),i=se(),e=dt(),t=ft(),r=ht(),n=gt(),s=pt(),a=We(),c=xt(),h=bt(),w=wt(),y=z(),u=jt();function j(d,v){const q=d.size,g=n.getPositions(v);for(let p=0;p<g.length;p++){const x=g[p][0],m=g[p][1];for(let b=-1;b<=7;b++)if(!(x+b<=-1||q<=x+b))for(let B=-1;B<=7;B++)m+B<=-1||q<=m+B||(b>=0&&b<=6&&(B===0||B===6)||B>=0&&B<=6&&(b===0||b===6)||b>=2&&b<=4&&B>=2&&B<=4?d.set(x+b,m+B,!0,!0):d.set(x+b,m+B,!1,!0))}}function C(d){const v=d.size;for(let q=8;q<v-8;q++){const g=q%2===0;d.set(q,6,g,!0),d.set(6,q,g,!0)}}function P(d,v){const q=r.getPositions(v);for(let g=0;g<q.length;g++){const p=q[g][0],x=q[g][1];for(let m=-2;m<=2;m++)for(let b=-2;b<=2;b++)m===-2||m===2||b===-2||b===2||m===0&&b===0?d.set(p+m,x+b,!0,!0):d.set(p+m,x+b,!1,!0)}}function R(d,v){const q=d.size,g=h.getEncodedBits(v);let p,x,m;for(let b=0;b<18;b++)p=Math.floor(b/3),x=b%3+q-8-3,m=(g>>b&1)===1,d.set(p,x,m,!0),d.set(x,p,m,!0)}function N(d,v,q){const g=d.size,p=w.getEncodedBits(v,q);let x,m;for(x=0;x<15;x++)m=(p>>x&1)===1,x<6?d.set(x,8,m,!0):x<8?d.set(x+1,8,m,!0):d.set(g-15+x,8,m,!0),x<8?d.set(8,g-x-1,m,!0):x<9?d.set(8,15-x-1+1,m,!0):d.set(8,15-x-1,m,!0);d.set(g-8,8,1,!0)}function I(d,v){const q=d.size;let g=-1,p=q-1,x=7,m=0;for(let b=q-1;b>0;b-=2)for(b===6&&b--;;){for(let B=0;B<2;B++)if(!d.isReserved(p,b-B)){let S=!1;m<v.length&&(S=(v[m]>>>x&1)===1),d.set(p,b-B,S),x--,x===-1&&(m++,x=7)}if(p+=g,p<0||q<=p){p-=g,g=-g;break}}}function f(d,v,q){const g=new e;q.forEach(function(B){g.put(B.mode.bit,4),g.put(B.getLength(),y.getCharCountIndicator(B.mode,d)),B.write(g)});const p=o.getSymbolTotalCodewords(d),x=a.getTotalCodewordsCount(d,v),m=(p-x)*8;for(g.getLengthInBits()+4<=m&&g.put(0,4);g.getLengthInBits()%8!==0;)g.putBit(0);const b=(m-g.getLengthInBits())/8;for(let B=0;B<b;B++)g.put(B%2?17:236,8);return E(g,d,v)}function E(d,v,q){const g=o.getSymbolTotalCodewords(v),p=a.getTotalCodewordsCount(v,q),x=g-p,m=a.getBlocksCount(v,q),b=g%m,B=m-b,S=Math.floor(g/m),F=Math.floor(x/m),nt=F+1,le=S-F,ot=new c(le);let K=0;const Y=new Array(m),ce=new Array(m);let V=0;const it=new Uint8Array(d.buffer);for(let D=0;D<m;D++){const $=D<B?F:nt;Y[D]=it.slice(K,K+$),ce[D]=ot.encode(Y[D]),K+=$,V=Math.max(V,$)}const O=new Uint8Array(g);let ue=0,k,L;for(k=0;k<V;k++)for(L=0;L<m;L++)k<Y[L].length&&(O[ue++]=Y[L][k]);for(k=0;k<le;k++)for(L=0;L<m;L++)O[ue++]=ce[L][k];return O}function A(d,v,q,g){let p;if(Array.isArray(d))p=u.fromArray(d);else if(typeof d=="string"){let S=v;if(!S){const F=u.rawSplit(d);S=h.getBestVersionForData(F,q)}p=u.fromString(d,S||40)}else throw new Error("Invalid data");const x=h.getBestVersionForData(p,q);if(!x)throw new Error("The amount of data is too big to be stored in a QR Code");if(!v)v=x;else if(v<x)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+x+`.
`);const m=f(v,q,p),b=o.getSymbolSize(v),B=new t(b);return j(B,v),C(B),P(B,v),N(B,q,0),v>=7&&R(B,v),I(B,m),isNaN(g)&&(g=s.getBestMask(B,N.bind(null,B,q))),s.applyMask(g,B),N(B,q,g),{modules:B,version:v,errorCorrectionLevel:q,maskPattern:g,segments:p}}return G.create=function(d,v){if(typeof d>"u"||d==="")throw new Error("No input text");let q=i.M,g,p;return typeof v<"u"&&(q=i.from(v.errorCorrectionLevel,i.M),g=h.from(v.version),p=s.from(v.maskPattern),v.toSJISFunc&&o.setToSJISFunction(v.toSJISFunc)),A(d,g,q,p)},G}var Ke={},Ve={},Oe;function rt(){return Oe||(Oe=1,(function(o){function i(e){if(typeof e=="number"&&(e=e.toString()),typeof e!="string")throw new Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||t.length===5||t.length>8)throw new Error("Invalid hex color: "+e);(t.length===3||t.length===4)&&(t=Array.prototype.concat.apply([],t.map(function(n){return[n,n]}))),t.length===6&&t.push("F","F");const r=parseInt(t.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+t.slice(0,6).join("")}}o.getOptions=function(e){e||(e={}),e.color||(e.color={});const t=typeof e.margin>"u"||e.margin===null||e.margin<0?4:e.margin,r=e.width&&e.width>=21?e.width:void 0,n=e.scale||4;return{width:r,scale:r?4:n,margin:t,color:{dark:i(e.color.dark||"#000000ff"),light:i(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},o.getScale=function(e,t){return t.width&&t.width>=e+t.margin*2?t.width/(e+t.margin*2):t.scale},o.getImageWidth=function(e,t){const r=o.getScale(e,t);return Math.floor((e+t.margin*2)*r)},o.qrToImageData=function(e,t,r){const n=t.modules.size,s=t.modules.data,a=o.getScale(n,r),c=Math.floor((n+r.margin*2)*a),h=r.margin*a,w=[r.color.light,r.color.dark];for(let y=0;y<c;y++)for(let u=0;u<c;u++){let j=(y*c+u)*4,C=r.color.light;if(y>=h&&u>=h&&y<c-h&&u<c-h){const P=Math.floor((y-h)/a),R=Math.floor((u-h)/a);C=w[s[P*n+R]?1:0]}e[j++]=C.r,e[j++]=C.g,e[j++]=C.b,e[j]=C.a}}})(Ve)),Ve}var $e;function It(){return $e||($e=1,(function(o){const i=rt();function e(r,n,s){r.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function t(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}o.render=function(r,n,s){let a=s,c=n;typeof a>"u"&&(!n||!n.getContext)&&(a=n,n=void 0),n||(c=t()),a=i.getOptions(a);const h=i.getImageWidth(r.modules.size,a),w=c.getContext("2d"),y=w.createImageData(h,h);return i.qrToImageData(y.data,r,a),e(w,c,h),w.putImageData(y,0,0),c},o.renderToDataURL=function(r,n,s){let a=s;typeof a>"u"&&(!n||!n.getContext)&&(a=n,n=void 0),a||(a={});const c=o.render(r,n,a),h=a.type||"image/png",w=a.rendererOpts||{};return c.toDataURL(h,w.quality)}})(Ke)),Ke}var ae={},Ge;function Pt(){if(Ge)return ae;Ge=1;const o=rt();function i(r,n){const s=r.a/255,a=n+'="'+r.hex+'"';return s<1?a+" "+n+'-opacity="'+s.toFixed(2).slice(1)+'"':a}function e(r,n,s){let a=r+n;return typeof s<"u"&&(a+=" "+s),a}function t(r,n,s){let a="",c=0,h=!1,w=0;for(let y=0;y<r.length;y++){const u=Math.floor(y%n),j=Math.floor(y/n);!u&&!h&&(h=!0),r[y]?(w++,y>0&&u>0&&r[y-1]||(a+=h?e("M",u+s,.5+j+s):e("m",c,0),c=0,h=!1),u+1<n&&r[y+1]||(a+=e("h",w),w=0)):c++}return a}return ae.render=function(r,n,s){const a=o.getOptions(n),c=r.modules.size,h=r.modules.data,w=c+a.margin*2,y=a.color.light.a?"<path "+i(a.color.light,"fill")+' d="M0 0h'+w+"v"+w+'H0z"/>':"",u="<path "+i(a.color.dark,"stroke")+' d="'+t(h,c,a.margin)+'"/>',j='viewBox="0 0 '+w+" "+w+'"',C='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+j+' shape-rendering="crispEdges">'+y+u+`</svg>
`;return typeof s=="function"&&s(null,C),C},ae}var Ze;function At(){if(Ze)return Q;Ze=1;const o=ut(),i=Bt(),e=It(),t=Pt();function r(n,s,a,c,h){const w=[].slice.call(arguments,1),y=w.length,u=typeof w[y-1]=="function";if(!u&&!o())throw new Error("Callback required as last argument");if(u){if(y<2)throw new Error("Too few arguments provided");y===2?(h=a,a=s,s=c=void 0):y===3&&(s.getContext&&typeof h>"u"?(h=c,c=void 0):(h=c,c=a,a=s,s=void 0))}else{if(y<1)throw new Error("Too few arguments provided");return y===1?(a=s,s=c=void 0):y===2&&!s.getContext&&(c=a,a=s,s=void 0),new Promise(function(j,C){try{const P=i.create(a,c);j(n(P,s,c))}catch(P){C(P)}})}try{const j=i.create(a,c);h(null,n(j,s,c))}catch(j){h(j)}}return Q.create=i.create,Q.toCanvas=r.bind(null,e.render),Q.toDataURL=r.bind(null,e.renderToDataURL),Q.toString=r.bind(null,function(n,s,a){return t.render(n,a)}),Q}var Rt=At();const Xe=at(Rt);function St(){const[o,i]=M.useState(""),[e,t]=M.useState(""),[r,n]=M.useState("#667eea"),[s,a]=M.useState("#ffffff"),[c,h]=M.useState(300),[w,y]=M.useState("M"),[u,j]=M.useState(!1),C=M.useRef(null),P=M.useRef(!1);M.useEffect(()=>{P.current||(document.title="QR Code Generator | Manuja Dayawansha",window.scrollTo(0,0),P.current=!0);const f=st(lt,p=>{const x=document.getElementById("loginbtn"),m=document.getElementById("loginpenal");p&&x&&m&&(x.style.display="none",m.innerHTML=`
          <img src="${p.photoURL}" 
               width="30px" height="30px" 
               style="border-radius:50%;" 
               alt="User profile">
        `)}),E=document.getElementById("nav-toggle"),A=document.getElementById("nav-menu"),d=()=>{A&&A.classList.toggle("show")};E&&E.addEventListener("click",d);const v=document.querySelectorAll(".nav__link"),q=()=>{A&&A.classList.remove("show")};v.forEach(p=>p.addEventListener("click",q));const g=document.getElementById("loader");return g&&setTimeout(()=>{g.classList.add("fade-out"),setTimeout(()=>g.style.display="none",600)},500),()=>{f(),E&&E.removeEventListener("click",d),v.forEach(p=>p.removeEventListener("click",q))}},[]);const R=async()=>{if(!o.trim()){alert("Please enter text or URL to generate QR code");return}j(!0);try{const f={width:c,margin:2,color:{dark:r,light:s},errorCorrectionLevel:w},E=await Xe.toDataURL(o,f);t(E),C.current&&await Xe.toCanvas(C.current,o,f)}catch(f){console.error("Error generating QR code:",f),alert("Failed to generate QR code. Please try again.")}finally{j(!1)}},N=()=>{if(!e){alert("Please generate a QR code first");return}const f=document.createElement("a");f.download="qrcode.png",f.href=e,f.click()},I=()=>{i(""),t(""),n("#667eea"),a("#ffffff"),h(300),y("M")};return l.jsxs(l.Fragment,{children:[l.jsx("header",{className:"l-header",children:l.jsxs("nav",{className:"nav bd-grid",children:[l.jsx("div",{children:l.jsx(de,{to:"/",className:"nav__logo",children:"Manuja Dayawansha"})}),l.jsx("div",{className:"nav__menu",id:"nav-menu",children:l.jsxs("ul",{className:"nav__list",children:[l.jsx("li",{className:"nav__item",children:l.jsx("a",{href:"/#home",className:"nav__link",children:"Home"})}),l.jsx("li",{className:"nav__item",children:l.jsx("a",{href:"/#blog",className:"nav__link",children:"Blog"})}),l.jsx("li",{className:"nav__item",children:l.jsx("a",{href:"/#contact",className:"nav__link",children:"Contact"})}),l.jsx("li",{className:"nav__item",id:"loginpenal",children:l.jsx(de,{to:"/Login",id:"loginbtn",className:"nav__link",children:"Login"})})]})}),l.jsx("div",{className:"nav__toggle",id:"nav-toggle",children:l.jsx("i",{className:"bx bx-menu"})})]})}),l.jsxs("main",{className:"qr-page",children:[l.jsxs("div",{className:"qr-page-header",children:[l.jsx("h1",{className:"qr-page-title",children:"QR Code Generator"}),l.jsx("p",{className:"qr-page-subtitle",children:"Create custom QR codes instantly"})]}),l.jsx("section",{className:"qr-section",children:l.jsxs("div",{className:"qr-container bd-grid",children:[l.jsxs("div",{className:"qr-form-panel",children:[l.jsxs("div",{className:"qr-form-card",children:[l.jsx("h2",{className:"qr-form-title",children:"Customize Your QR Code"}),l.jsxs("div",{className:"qr-input-group",children:[l.jsxs("label",{className:"qr-label",children:[l.jsx("i",{className:"bx bx-text"}),"Text or URL"]}),l.jsx("textarea",{className:"qr-input qr-textarea",placeholder:"Enter text, URL, or any content...",value:o,onChange:f=>i(f.target.value),rows:4})]}),l.jsxs("div",{className:"qr-settings-grid",children:[l.jsxs("div",{className:"qr-input-group",children:[l.jsxs("label",{className:"qr-label",children:[l.jsx("i",{className:"bx bx-palette"}),"QR Color"]}),l.jsxs("div",{className:"qr-color-input",children:[l.jsx("input",{type:"color",className:"qr-color-picker",value:r,onChange:f=>n(f.target.value)}),l.jsx("input",{type:"text",className:"qr-color-text",value:r,onChange:f=>n(f.target.value)})]})]}),l.jsxs("div",{className:"qr-input-group",children:[l.jsxs("label",{className:"qr-label",children:[l.jsx("i",{className:"bx bx-palette"}),"Background"]}),l.jsxs("div",{className:"qr-color-input",children:[l.jsx("input",{type:"color",className:"qr-color-picker",value:s,onChange:f=>a(f.target.value)}),l.jsx("input",{type:"text",className:"qr-color-text",value:s,onChange:f=>a(f.target.value)})]})]}),l.jsxs("div",{className:"qr-input-group",children:[l.jsxs("label",{className:"qr-label",children:[l.jsx("i",{className:"bx bx-expand"}),"Size: ",c,"px"]}),l.jsx("input",{type:"range",className:"qr-slider",min:"200",max:"600",step:"50",value:c,onChange:f=>h(Number(f.target.value))})]}),l.jsxs("div",{className:"qr-input-group",children:[l.jsxs("label",{className:"qr-label",children:[l.jsx("i",{className:"bx bx-shield"}),"Error Correction"]}),l.jsxs("select",{className:"qr-select",value:w,onChange:f=>y(f.target.value),children:[l.jsx("option",{value:"L",children:"Low (7%)"}),l.jsx("option",{value:"M",children:"Medium (15%)"}),l.jsx("option",{value:"Q",children:"Quartile (25%)"}),l.jsx("option",{value:"H",children:"High (30%)"})]})]})]}),l.jsxs("div",{className:"qr-button-group",children:[l.jsxs("button",{className:"button qr-button-primary",onClick:R,disabled:u,children:[l.jsx("i",{className:"bx bx-qr"}),u?"Generating...":"Generate QR Code"]}),l.jsxs("button",{className:"button qr-button-secondary",onClick:I,children:[l.jsx("i",{className:"bx bx-reset"}),"Clear"]})]})]}),l.jsxs("div",{className:"qr-presets",children:[l.jsx("h3",{className:"qr-presets-title",children:"Quick Presets"}),l.jsxs("div",{className:"qr-preset-grid",children:[l.jsxs("button",{className:"qr-preset-btn",onClick:()=>{n("#667eea"),a("#ffffff")},children:[l.jsx("div",{className:"qr-preset-color",style:{background:"linear-gradient(135deg, #667eea, #764ba2)"}}),"Purple"]}),l.jsxs("button",{className:"qr-preset-btn",onClick:()=>{n("#f093fb"),a("#ffffff")},children:[l.jsx("div",{className:"qr-preset-color",style:{background:"linear-gradient(135deg, #f093fb, #f5576c)"}}),"Pink"]}),l.jsxs("button",{className:"qr-preset-btn",onClick:()=>{n("#4facfe"),a("#ffffff")},children:[l.jsx("div",{className:"qr-preset-color",style:{background:"linear-gradient(135deg, #4facfe, #00f2fe)"}}),"Blue"]}),l.jsxs("button",{className:"qr-preset-btn",onClick:()=>{n("#43e97b"),a("#ffffff")},children:[l.jsx("div",{className:"qr-preset-color",style:{background:"linear-gradient(135deg, #43e97b, #38f9d7)"}}),"Green"]})]})]})]}),l.jsxs("div",{className:"qr-preview-panel",children:[l.jsxs("div",{className:"qr-preview-card",children:[l.jsx("h2",{className:"qr-preview-title",children:"Preview"}),l.jsx("div",{className:"qr-preview-container",children:e?l.jsxs("div",{className:"qr-preview-image-wrapper",children:[l.jsx("img",{src:e,alt:"Generated QR Code",className:"qr-preview-image"}),l.jsx("canvas",{ref:C,style:{display:"none"}})]}):l.jsxs("div",{className:"qr-preview-placeholder",children:[l.jsx("i",{className:"bx bx-qr-scan qr-placeholder-icon"}),l.jsx("p",{children:"Your QR code will appear here"})]})}),e&&l.jsxs("div",{className:"qr-download-section",children:[l.jsxs("button",{className:"button qr-download-btn",onClick:N,children:[l.jsx("i",{className:"bx bx-download"}),"Download QR Code"]}),l.jsxs("p",{className:"qr-download-info",children:[l.jsx("i",{className:"bx bx-info-circle"}),"PNG format • ",c,"x",c,"px"]})]})]}),l.jsxs("div",{className:"qr-info-card",children:[l.jsxs("h3",{className:"qr-info-title",children:[l.jsx("i",{className:"bx bx-info-circle"}),"About QR Codes"]}),l.jsxs("ul",{className:"qr-info-list",children:[l.jsx("li",{children:"📱 Scan with any smartphone camera"}),l.jsx("li",{children:"🎨 Customize colors to match your brand"}),l.jsx("li",{children:"🛡️ Error correction recovers damaged codes"}),l.jsx("li",{children:"📊 Store URLs, text, contact info & more"}),l.jsx("li",{children:"💾 Download as high-quality PNG"})]})]})]})]})})]}),l.jsx(ct,{}),l.jsx("style",{children:`
        /* QR Code Page Styles - 2026 Modern Design */
        
        .qr-page {
          min-height: 100vh;
          padding-top: calc(var(--header-height) + 2rem);
        }

        .qr-page-header {
          text-align: center;
          padding: clamp(2rem, 6vh, 4rem) 1rem;
          position: relative;
          overflow: hidden;
        }

        .qr-page-header::before {
          content: "";
          position: absolute;
          top: -50%;
          right: -20%;
          width: 100%;
          height: 100%; border-radius: 50%;
          animation: float 20s ease-in-out infinite;
        }

        .qr-page-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          color: white;
          margin-bottom: 0.5rem;
          letter-spacing: -0.03em;
          position: relative;
          z-index: 1;
          color: var(--first-color);
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .qr-page-subtitle {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: rgba(255, 255, 255, 0.95);
          font-weight: 400;
          position: relative;
          z-index: 1;
        }

        .qr-section {
          padding: clamp(3rem, 6vh, 5rem) 0;
        }

        .qr-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        /* Form Panel */
        .qr-form-panel {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .qr-form-card,
        .qr-preview-card,
        .qr-info-card,
        .qr-presets {
          background: var(--body-color);
          border-radius: var(--radius-lg);
          padding: clamp(1.5rem, 3vw, 2.5rem);
          border: 1px solid var(--glass-border);
          box-shadow: 0 8px 24px var(--shadow-color);
          transition: all var(--transition-base);
        }

        .qr-form-card:hover,
        .qr-preview-card:hover {
          transform: translateY(-2px);
        }

        .qr-form-title,
        .qr-preview-title {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 1.5rem;
        }

        .qr-input-group {
          margin-bottom: 1.5rem;
        }

        .qr-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-color);
          margin-bottom: 0.5rem;
        }

        .qr-label i {
          font-size: 1.2rem;
          color: var(--first-color);
        }

        .qr-input,
        .qr-textarea,
        .qr-select {
          width: 100%;
          padding: 1rem 1.25rem;
          border-radius: var(--radius-md);
          border: 2px solid var(--glass-border);
          background: var(--container-color);
          color: var(--text-color);
          font-family: var(--body-font);
          font-size: 1rem;
          transition: all var(--transition-base);
          outline: none;
        }

        .qr-input:focus,
        .qr-textarea:focus,
        .qr-select:focus {
          border-color: var(--first-color);
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
          background: var(--container-color);
        }

        .qr-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .qr-settings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .qr-color-input {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        .qr-color-picker {
          width: 45px;
          height: 45px;
          border: 2px solid var(--glass-border);
          border-radius: 100%;
          cursor: pointer;
          cropping: rect(0, 0, 0, 0);
        }

        .qr-color-picker:hover {
          transform: scale(1.05);
          border-color: var(--first-color);
        }

        .qr-color-text {
          flex: 1;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          border: 2px solid var(--glass-border);
          background: var(--body-color);
          color: var(--text-color);
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          text-transform: uppercase;
          transition: all var(--transition-base);
        }

        .qr-color-text:focus {
          border-color: var(--first-color);
          outline: none;
        }

        .qr-slider {
          width: 100%;
          height: 8px;
          border-radius: 100px;
          background: var(--container-color);
          outline: none;
          -webkit-appearance: none;
        }

        .qr-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--first-color);
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .qr-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 6px 16px var(--shadow-hover);
        }

        .qr-slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--primary-gradient);
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 12px var(--shadow-color);
        }

        .qr-button-group {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .qr-button-primary,
        .qr-button-secondary {
          flex: 1;
          min-width: 180px;
          display: flex;
          height: 60px;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          font-weight: 600;
          font-size: 14px;
        }

        .qr-button-primary {
          background: var(--first-color);
        }

        .qr-button-secondary {
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          color: var(--text-color);
          border: 2px solid var(--glass-border);
        }

        .qr-button-secondary:hover {
          background: var(--card-color);
          border-color: var(--first-color);
        }

        .qr-button-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        /* Presets */
        .qr-presets-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-color);
          margin-bottom: 1rem;
        }

        .qr-preset-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 1rem;
        }

        .qr-preset-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          background: var(--body-color);
          border: 2px solid var(--glass-border);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-base);
          font-family: var(--body-font);
          color: var(--text-color);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .qr-preset-btn:hover {
          border-color: var(--first-color);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px var(--shadow-hover);
        }

        .qr-preset-color {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        /* Preview Panel */
        .qr-preview-container {
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--body-color);
          border-radius: var(--radius-md);
          padding: 2rem;
          margin-bottom: 1.5rem;
        }

        .qr-preview-image-wrapper {
          position: relative;
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .qr-preview-image {
          max-width: 100%;
          height: auto;
          border-radius: var(--radius-md);
          box-shadow: 0 12px 32px var(--shadow-color);
        }

        .qr-preview-placeholder {
          text-align: center;
          color: var(--text-secondary);
        }

        .qr-placeholder-icon {
          font-size: 5rem;
          color: var(--text-secondary);
          opacity: 0.5;
          margin-bottom: 1rem;
        }

        .qr-download-section {
          text-align: center;
        }

        .qr-download-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .qr-download-info {
          font-size: 0.875rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        /* Info Card */
        .qr-info-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-color);
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .qr-info-title i {
          color: var(--first-color);
        }

        .qr-info-list {
          list-style: none;
          padding: 0;
        }

        .qr-info-list li {
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--glass-border);
          color: var(--text-color);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .qr-info-list li:last-child {
          border-bottom: none;
        }

        /* Responsive */
        @media screen and (min-width: 992px) {
          .qr-container {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
        }

        @media screen and (max-width: 767px) {
          .qr-settings-grid {
            grid-template-columns: 1fr;
          }

          .qr-button-group {
            flex-direction: column;
          }

          .qr-button-primary,
          .qr-button-secondary {
            min-width: 100%;
          }

          .qr-preset-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .loader.fade-out {
          opacity: 0;
          transition: opacity 0.6s ease;
        }
      `})]})}export{St as default};
