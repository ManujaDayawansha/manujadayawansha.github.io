import{g as at,r as T,a as c,L as qe}from"./index-DGaT_JMp.js";import{b as st}from"./index.esm-xksvQSJL.js";import{a as lt}from"./firebaseConfig-BkiWjMfe.js";import{F as ct}from"./Footer-D9nMKgjO.js";var z={},W,Ne;function ut(){return Ne||(Ne=1,W=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),W}var Z={},_={},Ee;function D(){if(Ee)return _;Ee=1;let n;const o=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return _.getSymbolSize=function(r){if(!r)throw new Error('"version" cannot be null or undefined');if(r<1||r>40)throw new Error('"version" should be in range from 1 to 40');return r*4+17},_.getSymbolTotalCodewords=function(r){return o[r]},_.getBCHDigit=function(i){let r=0;for(;i!==0;)r++,i>>>=1;return r},_.setToSJISFunction=function(r){if(typeof r!="function")throw new Error('"toSJISFunc" is not a valid function.');n=r},_.isKanjiModeEnabled=function(){return typeof n<"u"},_.toSJIS=function(r){return n(r)},_}var X={},Be;function ye(){return Be||(Be=1,(function(n){n.L={bit:1},n.M={bit:0},n.Q={bit:3},n.H={bit:2};function o(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return n.L;case"m":case"medium":return n.M;case"q":case"quartile":return n.Q;case"h":case"high":return n.H;default:throw new Error("Unknown EC Level: "+i)}}n.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},n.from=function(r,e){if(n.isValid(r))return r;try{return o(r)}catch{return e}}})(X)),X}var $,Re;function dt(){if(Re)return $;Re=1;function n(){this.buffer=[],this.length=0}return n.prototype={get:function(o){const i=Math.floor(o/8);return(this.buffer[i]>>>7-o%8&1)===1},put:function(o,i){for(let r=0;r<i;r++)this.putBit((o>>>i-r-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(o){const i=Math.floor(this.length/8);this.buffer.length<=i&&this.buffer.push(0),o&&(this.buffer[i]|=128>>>this.length%8),this.length++}},$=n,$}var ee,je;function ft(){if(je)return ee;je=1;function n(o){if(!o||o<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=o,this.data=new Uint8Array(o*o),this.reservedBit=new Uint8Array(o*o)}return n.prototype.set=function(o,i,r,e){const t=o*this.size+i;this.data[t]=r,e&&(this.reservedBit[t]=!0)},n.prototype.get=function(o,i){return this.data[o*this.size+i]},n.prototype.xor=function(o,i,r){this.data[o*this.size+i]^=r},n.prototype.isReserved=function(o,i){return this.reservedBit[o*this.size+i]},ee=n,ee}var te={},Ae;function gt(){return Ae||(Ae=1,(function(n){const o=D().getSymbolSize;n.getRowColCoords=function(r){if(r===1)return[];const e=Math.floor(r/7)+2,t=o(r),a=t===145?26:Math.ceil((t-13)/(2*e-2))*2,l=[t-7];for(let s=1;s<e-1;s++)l[s]=l[s-1]-a;return l.push(6),l.reverse()},n.getPositions=function(r){const e=[],t=n.getRowColCoords(r),a=t.length;for(let l=0;l<a;l++)for(let s=0;s<a;s++)l===0&&s===0||l===0&&s===a-1||l===a-1&&s===0||e.push([t[l],t[s]]);return e}})(te)),te}var re={},Pe;function ht(){if(Pe)return re;Pe=1;const n=D().getSymbolSize,o=7;return re.getPositions=function(r){const e=n(r);return[[0,0],[e-o,0],[0,e-o]]},re}var ne={},Ie;function mt(){return Ie||(Ie=1,(function(n){n.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const o={N1:3,N2:3,N3:40,N4:10};n.isValid=function(e){return e!=null&&e!==""&&!isNaN(e)&&e>=0&&e<=7},n.from=function(e){return n.isValid(e)?parseInt(e,10):void 0},n.getPenaltyN1=function(e){const t=e.size;let a=0,l=0,s=0,d=null,h=null;for(let N=0;N<t;N++){l=s=0,d=h=null;for(let p=0;p<t;p++){let f=e.get(N,p);f===d?l++:(l>=5&&(a+=o.N1+(l-5)),d=f,l=1),f=e.get(p,N),f===h?s++:(s>=5&&(a+=o.N1+(s-5)),h=f,s=1)}l>=5&&(a+=o.N1+(l-5)),s>=5&&(a+=o.N1+(s-5))}return a},n.getPenaltyN2=function(e){const t=e.size;let a=0;for(let l=0;l<t-1;l++)for(let s=0;s<t-1;s++){const d=e.get(l,s)+e.get(l,s+1)+e.get(l+1,s)+e.get(l+1,s+1);(d===4||d===0)&&a++}return a*o.N2},n.getPenaltyN3=function(e){const t=e.size;let a=0,l=0,s=0;for(let d=0;d<t;d++){l=s=0;for(let h=0;h<t;h++)l=l<<1&2047|e.get(d,h),h>=10&&(l===1488||l===93)&&a++,s=s<<1&2047|e.get(h,d),h>=10&&(s===1488||s===93)&&a++}return a*o.N3},n.getPenaltyN4=function(e){let t=0;const a=e.data.length;for(let s=0;s<a;s++)t+=e.data[s];return Math.abs(Math.ceil(t*100/a/5)-10)*o.N4};function i(r,e,t){switch(r){case n.Patterns.PATTERN000:return(e+t)%2===0;case n.Patterns.PATTERN001:return e%2===0;case n.Patterns.PATTERN010:return t%3===0;case n.Patterns.PATTERN011:return(e+t)%3===0;case n.Patterns.PATTERN100:return(Math.floor(e/2)+Math.floor(t/3))%2===0;case n.Patterns.PATTERN101:return e*t%2+e*t%3===0;case n.Patterns.PATTERN110:return(e*t%2+e*t%3)%2===0;case n.Patterns.PATTERN111:return(e*t%3+(e+t)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}n.applyMask=function(e,t){const a=t.size;for(let l=0;l<a;l++)for(let s=0;s<a;s++)t.isReserved(s,l)||t.xor(s,l,i(e,s,l))},n.getBestMask=function(e,t){const a=Object.keys(n.Patterns).length;let l=0,s=1/0;for(let d=0;d<a;d++){t(d),n.applyMask(d,e);const h=n.getPenaltyN1(e)+n.getPenaltyN2(e)+n.getPenaltyN3(e)+n.getPenaltyN4(e);n.applyMask(d,e),h<s&&(s=h,l=d)}return l}})(ne)),ne}var K={},Te;function $e(){if(Te)return K;Te=1;const n=ye(),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return K.getBlocksCount=function(e,t){switch(t){case n.L:return o[(e-1)*4+0];case n.M:return o[(e-1)*4+1];case n.Q:return o[(e-1)*4+2];case n.H:return o[(e-1)*4+3];default:return}},K.getTotalCodewordsCount=function(e,t){switch(t){case n.L:return i[(e-1)*4+0];case n.M:return i[(e-1)*4+1];case n.Q:return i[(e-1)*4+2];case n.H:return i[(e-1)*4+3];default:return}},K}var oe={},V={},Se;function pt(){if(Se)return V;Se=1;const n=new Uint8Array(512),o=new Uint8Array(256);return(function(){let r=1;for(let e=0;e<255;e++)n[e]=r,o[r]=e,r<<=1,r&256&&(r^=285);for(let e=255;e<512;e++)n[e]=n[e-255]})(),V.log=function(r){if(r<1)throw new Error("log("+r+")");return o[r]},V.exp=function(r){return n[r]},V.mul=function(r,e){return r===0||e===0?0:n[o[r]+o[e]]},V}var Me;function wt(){return Me||(Me=1,(function(n){const o=pt();n.mul=function(r,e){const t=new Uint8Array(r.length+e.length-1);for(let a=0;a<r.length;a++)for(let l=0;l<e.length;l++)t[a+l]^=o.mul(r[a],e[l]);return t},n.mod=function(r,e){let t=new Uint8Array(r);for(;t.length-e.length>=0;){const a=t[0];for(let s=0;s<e.length;s++)t[s]^=o.mul(e[s],a);let l=0;for(;l<t.length&&t[l]===0;)l++;t=t.slice(l)}return t},n.generateECPolynomial=function(r){let e=new Uint8Array([1]);for(let t=0;t<r;t++)e=n.mul(e,new Uint8Array([1,o.exp(t)]));return e}})(oe)),oe}var ie,Le;function bt(){if(Le)return ie;Le=1;const n=wt();function o(i){this.genPoly=void 0,this.degree=i,this.degree&&this.initialize(this.degree)}return o.prototype.initialize=function(r){this.degree=r,this.genPoly=n.generateECPolynomial(this.degree)},o.prototype.encode=function(r){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(r.length+this.degree);e.set(r);const t=n.mod(e,this.genPoly),a=this.degree-t.length;if(a>0){const l=new Uint8Array(this.degree);return l.set(t,a),l}return t},ie=o,ie}var ae={},se={},le={},ke;function et(){return ke||(ke=1,le.isValid=function(o){return!isNaN(o)&&o>=1&&o<=40}),le}var S={},_e;function tt(){if(_e)return S;_e=1;const n="[0-9]+",o="[A-Z $%*+\\-./:]+";let i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";i=i.replace(/u/g,"\\u");const r="(?:(?![A-Z0-9 $%*+\\-./:]|"+i+`)(?:.|[\r
]))+`;S.KANJI=new RegExp(i,"g"),S.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),S.BYTE=new RegExp(r,"g"),S.NUMERIC=new RegExp(n,"g"),S.ALPHANUMERIC=new RegExp(o,"g");const e=new RegExp("^"+i+"$"),t=new RegExp("^"+n+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return S.testKanji=function(s){return e.test(s)},S.testNumeric=function(s){return t.test(s)},S.testAlphanumeric=function(s){return a.test(s)},S}var De;function U(){return De||(De=1,(function(n){const o=et(),i=tt();n.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},n.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},n.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},n.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},n.MIXED={bit:-1},n.getCharCountIndicator=function(t,a){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!o.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?t.ccBits[0]:a<27?t.ccBits[1]:t.ccBits[2]},n.getBestModeForData=function(t){return i.testNumeric(t)?n.NUMERIC:i.testAlphanumeric(t)?n.ALPHANUMERIC:i.testKanji(t)?n.KANJI:n.BYTE},n.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},n.isValid=function(t){return t&&t.bit&&t.ccBits};function r(e){if(typeof e!="string")throw new Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return n.NUMERIC;case"alphanumeric":return n.ALPHANUMERIC;case"kanji":return n.KANJI;case"byte":return n.BYTE;default:throw new Error("Unknown mode: "+e)}}n.from=function(t,a){if(n.isValid(t))return t;try{return r(t)}catch{return a}}})(se)),se}var Ue;function yt(){return Ue||(Ue=1,(function(n){const o=D(),i=$e(),r=ye(),e=U(),t=et(),a=7973,l=o.getBCHDigit(a);function s(p,f,B){for(let R=1;R<=40;R++)if(f<=n.getCapacity(R,B,p))return R}function d(p,f){return e.getCharCountIndicator(p,f)+4}function h(p,f){let B=0;return p.forEach(function(R){const I=d(R.mode,f);B+=I+R.getBitsLength()}),B}function N(p,f){for(let B=1;B<=40;B++)if(h(p,B)<=n.getCapacity(B,f,e.MIXED))return B}n.from=function(f,B){return t.isValid(f)?parseInt(f,10):B},n.getCapacity=function(f,B,R){if(!t.isValid(f))throw new Error("Invalid QR Code version");typeof R>"u"&&(R=e.BYTE);const I=o.getSymbolTotalCodewords(f),E=i.getTotalCodewordsCount(f,B),A=(I-E)*8;if(R===e.MIXED)return A;const u=A-d(R,f);switch(R){case e.NUMERIC:return Math.floor(u/10*3);case e.ALPHANUMERIC:return Math.floor(u/11*2);case e.KANJI:return Math.floor(u/13);case e.BYTE:default:return Math.floor(u/8)}},n.getBestVersionForData=function(f,B){let R;const I=r.from(B,r.M);if(Array.isArray(f)){if(f.length>1)return N(f,I);if(f.length===0)return 1;R=f[0]}else R=f;return s(R.mode,R.getLength(),I)},n.getEncodedBits=function(f){if(!t.isValid(f)||f<7)throw new Error("Invalid QR Code version");let B=f<<12;for(;o.getBCHDigit(B)-l>=0;)B^=a<<o.getBCHDigit(B)-l;return f<<12|B}})(ae)),ae}var ce={},Fe;function vt(){if(Fe)return ce;Fe=1;const n=D(),o=1335,i=21522,r=n.getBCHDigit(o);return ce.getEncodedBits=function(t,a){const l=t.bit<<3|a;let s=l<<10;for(;n.getBCHDigit(s)-r>=0;)s^=o<<n.getBCHDigit(s)-r;return(l<<10|s)^i},ce}var ue={},de,ze;function xt(){if(ze)return de;ze=1;const n=U();function o(i){this.mode=n.NUMERIC,this.data=i.toString()}return o.getBitsLength=function(r){return 10*Math.floor(r/3)+(r%3?r%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(r){let e,t,a;for(e=0;e+3<=this.data.length;e+=3)t=this.data.substr(e,3),a=parseInt(t,10),r.put(a,10);const l=this.data.length-e;l>0&&(t=this.data.substr(e),a=parseInt(t,10),r.put(a,l*3+1))},de=o,de}var fe,Qe;function Ct(){if(Qe)return fe;Qe=1;const n=U(),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(r){this.mode=n.ALPHANUMERIC,this.data=r}return i.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let a=o.indexOf(this.data[t])*45;a+=o.indexOf(this.data[t+1]),e.put(a,11)}this.data.length%2&&e.put(o.indexOf(this.data[t]),6)},fe=i,fe}var ge,Ve;function qt(){if(Ve)return ge;Ve=1;const n=U();function o(i){this.mode=n.BYTE,typeof i=="string"?this.data=new TextEncoder().encode(i):this.data=new Uint8Array(i)}return o.getBitsLength=function(r){return r*8},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(i){for(let r=0,e=this.data.length;r<e;r++)i.put(this.data[r],8)},ge=o,ge}var he,He;function Nt(){if(He)return he;He=1;const n=U(),o=D();function i(r){this.mode=n.KANJI,this.data=r}return i.getBitsLength=function(e){return e*13},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(r){let e;for(e=0;e<this.data.length;e++){let t=o.toSJIS(this.data[e]);if(t>=33088&&t<=40956)t-=33088;else if(t>=57408&&t<=60351)t-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);t=(t>>>8&255)*192+(t&255),r.put(t,13)}},he=i,he}var me={exports:{}},Ke;function Et(){return Ke||(Ke=1,(function(n){var o={single_source_shortest_paths:function(i,r,e){var t={},a={};a[r]=0;var l=o.PriorityQueue.make();l.push(r,0);for(var s,d,h,N,p,f,B,R,I;!l.empty();){s=l.pop(),d=s.value,N=s.cost,p=i[d]||{};for(h in p)p.hasOwnProperty(h)&&(f=p[h],B=N+f,R=a[h],I=typeof a[h]>"u",(I||R>B)&&(a[h]=B,l.push(h,B),t[h]=d))}if(typeof e<"u"&&typeof a[e]>"u"){var E=["Could not find a path from ",r," to ",e,"."].join("");throw new Error(E)}return t},extract_shortest_path_from_predecessor_list:function(i,r){for(var e=[],t=r;t;)e.push(t),i[t],t=i[t];return e.reverse(),e},find_path:function(i,r,e){var t=o.single_source_shortest_paths(i,r,e);return o.extract_shortest_path_from_predecessor_list(t,e)},PriorityQueue:{make:function(i){var r=o.PriorityQueue,e={},t;i=i||{};for(t in r)r.hasOwnProperty(t)&&(e[t]=r[t]);return e.queue=[],e.sorter=i.sorter||r.default_sorter,e},default_sorter:function(i,r){return i.cost-r.cost},push:function(i,r){var e={value:i,cost:r};this.queue.push(e),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};n.exports=o})(me)),me.exports}var Ge;function Bt(){return Ge||(Ge=1,(function(n){const o=U(),i=xt(),r=Ct(),e=qt(),t=Nt(),a=tt(),l=D(),s=Et();function d(E){return unescape(encodeURIComponent(E)).length}function h(E,A,u){const b=[];let P;for(;(P=E.exec(u))!==null;)b.push({data:P[0],index:P.index,mode:A,length:P[0].length});return b}function N(E){const A=h(a.NUMERIC,o.NUMERIC,E),u=h(a.ALPHANUMERIC,o.ALPHANUMERIC,E);let b,P;return l.isKanjiModeEnabled()?(b=h(a.BYTE,o.BYTE,E),P=h(a.KANJI,o.KANJI,E)):(b=h(a.BYTE_KANJI,o.BYTE,E),P=[]),A.concat(u,b,P).sort(function(x,y){return x.index-y.index}).map(function(x){return{data:x.data,mode:x.mode,length:x.length}})}function p(E,A){switch(A){case o.NUMERIC:return i.getBitsLength(E);case o.ALPHANUMERIC:return r.getBitsLength(E);case o.KANJI:return t.getBitsLength(E);case o.BYTE:return e.getBitsLength(E)}}function f(E){return E.reduce(function(A,u){const b=A.length-1>=0?A[A.length-1]:null;return b&&b.mode===u.mode?(A[A.length-1].data+=u.data,A):(A.push(u),A)},[])}function B(E){const A=[];for(let u=0;u<E.length;u++){const b=E[u];switch(b.mode){case o.NUMERIC:A.push([b,{data:b.data,mode:o.ALPHANUMERIC,length:b.length},{data:b.data,mode:o.BYTE,length:b.length}]);break;case o.ALPHANUMERIC:A.push([b,{data:b.data,mode:o.BYTE,length:b.length}]);break;case o.KANJI:A.push([b,{data:b.data,mode:o.BYTE,length:d(b.data)}]);break;case o.BYTE:A.push([{data:b.data,mode:o.BYTE,length:d(b.data)}])}}return A}function R(E,A){const u={},b={start:{}};let P=["start"];for(let m=0;m<E.length;m++){const x=E[m],y=[];for(let g=0;g<x.length;g++){const v=x[g],w=""+m+g;y.push(w),u[w]={node:v,lastCount:0},b[w]={};for(let C=0;C<P.length;C++){const q=P[C];u[q]&&u[q].node.mode===v.mode?(b[q][w]=p(u[q].lastCount+v.length,v.mode)-p(u[q].lastCount,v.mode),u[q].lastCount+=v.length):(u[q]&&(u[q].lastCount=v.length),b[q][w]=p(v.length,v.mode)+4+o.getCharCountIndicator(v.mode,A))}}P=y}for(let m=0;m<P.length;m++)b[P[m]].end=0;return{map:b,table:u}}function I(E,A){let u;const b=o.getBestModeForData(E);if(u=o.from(A,b),u!==o.BYTE&&u.bit<b.bit)throw new Error('"'+E+'" cannot be encoded with mode '+o.toString(u)+`.
 Suggested mode is: `+o.toString(b));switch(u===o.KANJI&&!l.isKanjiModeEnabled()&&(u=o.BYTE),u){case o.NUMERIC:return new i(E);case o.ALPHANUMERIC:return new r(E);case o.KANJI:return new t(E);case o.BYTE:return new e(E)}}n.fromArray=function(A){return A.reduce(function(u,b){return typeof b=="string"?u.push(I(b,null)):b.data&&u.push(I(b.data,b.mode)),u},[])},n.fromString=function(A,u){const b=N(A,l.isKanjiModeEnabled()),P=B(b),m=R(P,u),x=s.find_path(m.map,"start","end"),y=[];for(let g=1;g<x.length-1;g++)y.push(m.table[x[g]].node);return n.fromArray(f(y))},n.rawSplit=function(A){return n.fromArray(N(A,l.isKanjiModeEnabled()))}})(ue)),ue}var Je;function Rt(){if(Je)return Z;Je=1;const n=D(),o=ye(),i=dt(),r=ft(),e=gt(),t=ht(),a=mt(),l=$e(),s=bt(),d=yt(),h=vt(),N=U(),p=Bt();function f(m,x){const y=m.size,g=t.getPositions(x);for(let v=0;v<g.length;v++){const w=g[v][0],C=g[v][1];for(let q=-1;q<=7;q++)if(!(w+q<=-1||y<=w+q))for(let j=-1;j<=7;j++)C+j<=-1||y<=C+j||(q>=0&&q<=6&&(j===0||j===6)||j>=0&&j<=6&&(q===0||q===6)||q>=2&&q<=4&&j>=2&&j<=4?m.set(w+q,C+j,!0,!0):m.set(w+q,C+j,!1,!0))}}function B(m){const x=m.size;for(let y=8;y<x-8;y++){const g=y%2===0;m.set(y,6,g,!0),m.set(6,y,g,!0)}}function R(m,x){const y=e.getPositions(x);for(let g=0;g<y.length;g++){const v=y[g][0],w=y[g][1];for(let C=-2;C<=2;C++)for(let q=-2;q<=2;q++)C===-2||C===2||q===-2||q===2||C===0&&q===0?m.set(v+C,w+q,!0,!0):m.set(v+C,w+q,!1,!0)}}function I(m,x){const y=m.size,g=d.getEncodedBits(x);let v,w,C;for(let q=0;q<18;q++)v=Math.floor(q/3),w=q%3+y-8-3,C=(g>>q&1)===1,m.set(v,w,C,!0),m.set(w,v,C,!0)}function E(m,x,y){const g=m.size,v=h.getEncodedBits(x,y);let w,C;for(w=0;w<15;w++)C=(v>>w&1)===1,w<6?m.set(w,8,C,!0):w<8?m.set(w+1,8,C,!0):m.set(g-15+w,8,C,!0),w<8?m.set(8,g-w-1,C,!0):w<9?m.set(8,15-w-1+1,C,!0):m.set(8,15-w-1,C,!0);m.set(g-8,8,1,!0)}function A(m,x){const y=m.size;let g=-1,v=y-1,w=7,C=0;for(let q=y-1;q>0;q-=2)for(q===6&&q--;;){for(let j=0;j<2;j++)if(!m.isReserved(v,q-j)){let k=!1;C<x.length&&(k=(x[C]>>>w&1)===1),m.set(v,q-j,k),w--,w===-1&&(C++,w=7)}if(v+=g,v<0||y<=v){v-=g,g=-g;break}}}function u(m,x,y){const g=new i;y.forEach(function(j){g.put(j.mode.bit,4),g.put(j.getLength(),N.getCharCountIndicator(j.mode,m)),j.write(g)});const v=n.getSymbolTotalCodewords(m),w=l.getTotalCodewordsCount(m,x),C=(v-w)*8;for(g.getLengthInBits()+4<=C&&g.put(0,4);g.getLengthInBits()%8!==0;)g.putBit(0);const q=(C-g.getLengthInBits())/8;for(let j=0;j<q;j++)g.put(j%2?17:236,8);return b(g,m,x)}function b(m,x,y){const g=n.getSymbolTotalCodewords(x),v=l.getTotalCodewordsCount(x,y),w=g-v,C=l.getBlocksCount(x,y),q=g%C,j=C-q,k=Math.floor(g/C),Q=Math.floor(w/C),nt=Q+1,ve=k-Q,ot=new s(ve);let G=0;const H=new Array(C),xe=new Array(C);let J=0;const it=new Uint8Array(m.buffer);for(let F=0;F<C;F++){const O=F<j?Q:nt;H[F]=it.slice(G,G+O),xe[F]=ot.encode(H[F]),G+=O,J=Math.max(J,O)}const Y=new Uint8Array(g);let Ce=0,M,L;for(M=0;M<J;M++)for(L=0;L<C;L++)M<H[L].length&&(Y[Ce++]=H[L][M]);for(M=0;M<ve;M++)for(L=0;L<C;L++)Y[Ce++]=xe[L][M];return Y}function P(m,x,y,g){let v;if(Array.isArray(m))v=p.fromArray(m);else if(typeof m=="string"){let k=x;if(!k){const Q=p.rawSplit(m);k=d.getBestVersionForData(Q,y)}v=p.fromString(m,k||40)}else throw new Error("Invalid data");const w=d.getBestVersionForData(v,y);if(!w)throw new Error("The amount of data is too big to be stored in a QR Code");if(!x)x=w;else if(x<w)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+w+`.
`);const C=u(x,y,v),q=n.getSymbolSize(x),j=new r(q);return f(j,x),B(j),R(j,x),E(j,y,0),x>=7&&I(j,x),A(j,C),isNaN(g)&&(g=a.getBestMask(j,E.bind(null,j,y))),a.applyMask(g,j),E(j,y,g),{modules:j,version:x,errorCorrectionLevel:y,maskPattern:g,segments:v}}return Z.create=function(x,y){if(typeof x>"u"||x==="")throw new Error("No input text");let g=o.M,v,w;return typeof y<"u"&&(g=o.from(y.errorCorrectionLevel,o.M),v=d.from(y.version),w=a.from(y.maskPattern),y.toSJISFunc&&n.setToSJISFunction(y.toSJISFunc)),P(x,v,g,w)},Z}var pe={},we={},Ye;function rt(){return Ye||(Ye=1,(function(n){function o(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let r=i.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+i);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(t){return[t,t]}))),r.length===6&&r.push("F","F");const e=parseInt(r.join(""),16);return{r:e>>24&255,g:e>>16&255,b:e>>8&255,a:e&255,hex:"#"+r.slice(0,6).join("")}}n.getOptions=function(r){r||(r={}),r.color||(r.color={});const e=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,t=r.width&&r.width>=21?r.width:void 0,a=r.scale||4;return{width:t,scale:t?4:a,margin:e,color:{dark:o(r.color.dark||"#000000ff"),light:o(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},n.getScale=function(r,e){return e.width&&e.width>=r+e.margin*2?e.width/(r+e.margin*2):e.scale},n.getImageWidth=function(r,e){const t=n.getScale(r,e);return Math.floor((r+e.margin*2)*t)},n.qrToImageData=function(r,e,t){const a=e.modules.size,l=e.modules.data,s=n.getScale(a,t),d=Math.floor((a+t.margin*2)*s),h=t.margin*s,N=[t.color.light,t.color.dark];for(let p=0;p<d;p++)for(let f=0;f<d;f++){let B=(p*d+f)*4,R=t.color.light;if(p>=h&&f>=h&&p<d-h&&f<d-h){const I=Math.floor((p-h)/s),E=Math.floor((f-h)/s);R=N[l[I*a+E]?1:0]}r[B++]=R.r,r[B++]=R.g,r[B++]=R.b,r[B]=R.a}}})(we)),we}var Oe;function jt(){return Oe||(Oe=1,(function(n){const o=rt();function i(e,t,a){e.clearRect(0,0,t.width,t.height),t.style||(t.style={}),t.height=a,t.width=a,t.style.height=a+"px",t.style.width=a+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}n.render=function(t,a,l){let s=l,d=a;typeof s>"u"&&(!a||!a.getContext)&&(s=a,a=void 0),a||(d=r()),s=o.getOptions(s);const h=o.getImageWidth(t.modules.size,s),N=d.getContext("2d"),p=N.createImageData(h,h);return o.qrToImageData(p.data,t,s),i(N,d,h),N.putImageData(p,0,0),d},n.renderToDataURL=function(t,a,l){let s=l;typeof s>"u"&&(!a||!a.getContext)&&(s=a,a=void 0),s||(s={});const d=n.render(t,a,s),h=s.type||"image/png",N=s.rendererOpts||{};return d.toDataURL(h,N.quality)}})(pe)),pe}var be={},We;function At(){if(We)return be;We=1;const n=rt();function o(e,t){const a=e.a/255,l=t+'="'+e.hex+'"';return a<1?l+" "+t+'-opacity="'+a.toFixed(2).slice(1)+'"':l}function i(e,t,a){let l=e+t;return typeof a<"u"&&(l+=" "+a),l}function r(e,t,a){let l="",s=0,d=!1,h=0;for(let N=0;N<e.length;N++){const p=Math.floor(N%t),f=Math.floor(N/t);!p&&!d&&(d=!0),e[N]?(h++,N>0&&p>0&&e[N-1]||(l+=d?i("M",p+a,.5+f+a):i("m",s,0),s=0,d=!1),p+1<t&&e[N+1]||(l+=i("h",h),h=0)):s++}return l}return be.render=function(t,a,l){const s=n.getOptions(a),d=t.modules.size,h=t.modules.data,N=d+s.margin*2,p=s.color.light.a?"<path "+o(s.color.light,"fill")+' d="M0 0h'+N+"v"+N+'H0z"/>':"",f="<path "+o(s.color.dark,"stroke")+' d="'+r(h,d,s.margin)+'"/>',B='viewBox="0 0 '+N+" "+N+'"',I='<svg xmlns="http://www.w3.org/2000/svg" '+(s.width?'width="'+s.width+'" height="'+s.width+'" ':"")+B+' shape-rendering="crispEdges">'+p+f+`</svg>
`;return typeof l=="function"&&l(null,I),I},be}var Ze;function Pt(){if(Ze)return z;Ze=1;const n=ut(),o=Rt(),i=jt(),r=At();function e(t,a,l,s,d){const h=[].slice.call(arguments,1),N=h.length,p=typeof h[N-1]=="function";if(!p&&!n())throw new Error("Callback required as last argument");if(p){if(N<2)throw new Error("Too few arguments provided");N===2?(d=l,l=a,a=s=void 0):N===3&&(a.getContext&&typeof d>"u"?(d=s,s=void 0):(d=s,s=l,l=a,a=void 0))}else{if(N<1)throw new Error("Too few arguments provided");return N===1?(l=a,a=s=void 0):N===2&&!a.getContext&&(s=l,l=a,a=void 0),new Promise(function(f,B){try{const R=o.create(l,s);f(t(R,a,s))}catch(R){B(R)}})}try{const f=o.create(l,s);d(null,t(f,a,s))}catch(f){d(f)}}return z.create=o.create,z.toCanvas=e.bind(null,i.render),z.toDataURL=e.bind(null,i.renderToDataURL),z.toString=e.bind(null,function(t,a,l){return r.render(t,l)}),z}var It=Pt();const Xe=at(It);function kt(){const[n,o]=T.useState(""),[i,r]=T.useState(""),[e,t]=T.useState("#667eea"),[a,l]=T.useState("#ffffff"),[s,d]=T.useState(300),[h,N]=T.useState("M"),[p,f]=T.useState(!1),B=T.useRef(null),R=T.useRef(!1);T.useEffect(()=>{R.current||(document.title="QR Code Generator | Manuja Dayawansha",window.scrollTo(0,0),R.current=!0);const u=st(lt,v=>{const w=document.getElementById("loginbtn"),C=document.getElementById("loginpenal");v&&w&&C&&(w.style.display="none",C.innerHTML=`
          <img src="${v.photoURL}" 
               width="30px" height="30px" 
               style="border-radius:50%;" 
               alt="User profile">
        `)}),b=document.getElementById("nav-toggle"),P=document.getElementById("nav-menu"),m=()=>{P&&P.classList.toggle("show")};b&&b.addEventListener("click",m);const x=document.querySelectorAll(".nav__link"),y=()=>{P&&P.classList.remove("show")};x.forEach(v=>v.addEventListener("click",y));const g=document.getElementById("loader");return g&&setTimeout(()=>{g.classList.add("fade-out"),setTimeout(()=>g.style.display="none",600)},500),()=>{u(),b&&b.removeEventListener("click",m),x.forEach(v=>v.removeEventListener("click",y))}},[]);const I=async()=>{if(!n.trim()){alert("Please enter text or URL to generate QR code");return}f(!0);try{const u={width:s,margin:2,color:{dark:e,light:a},errorCorrectionLevel:h},b=await Xe.toDataURL(n,u);r(b),B.current&&await Xe.toCanvas(B.current,n,u)}catch(u){console.error("Error generating QR code:",u),alert("Failed to generate QR code. Please try again.")}finally{f(!1)}},E=()=>{if(!i){alert("Please generate a QR code first");return}const u=document.createElement("a");u.download="qrcode.png",u.href=i,u.click()},A=()=>{o(""),r(""),t("#667eea"),l("#ffffff"),d(300),N("M")};return c.jsxs(c.Fragment,{children:[c.jsx("header",{className:"l-header",children:c.jsxs("nav",{className:"nav bd-grid",children:[c.jsx("div",{children:c.jsx(qe,{to:"/",className:"nav__logo",children:"Manuja Dayawansha"})}),c.jsx("div",{className:"nav__menu",id:"nav-menu",children:c.jsxs("ul",{className:"nav__list",children:[c.jsx("li",{className:"nav__item",children:c.jsx("a",{href:"/#home",className:"nav__link",children:"Home"})}),c.jsx("li",{className:"nav__item",children:c.jsx("a",{href:"/#blog",className:"nav__link",children:"Blog"})}),c.jsx("li",{className:"nav__item",children:c.jsx("a",{href:"/#contact",className:"nav__link",children:"Contact"})}),c.jsx("li",{className:"nav__item",id:"loginpenal",children:c.jsx(qe,{to:"/Login",id:"loginbtn",className:"nav__link",children:"Login"})})]})}),c.jsx("div",{className:"nav__toggle",id:"nav-toggle",children:c.jsx("i",{className:"bx bx-menu"})})]})}),c.jsxs("main",{className:"qr-page",children:[c.jsxs("div",{className:"qr-page-header",children:[c.jsx("h1",{className:"qr-page-title",children:"QR Code Generator"}),c.jsx("p",{className:"qr-page-subtitle",children:"Create custom QR codes instantly"})]}),c.jsx("section",{className:"qr-section",children:c.jsxs("div",{className:"qr-container bd-grid",children:[c.jsxs("div",{className:"qr-form-panel",children:[c.jsxs("div",{className:"qr-form-card",children:[c.jsx("h2",{className:"qr-form-title",children:"Customize Your QR Code"}),c.jsxs("div",{className:"qr-input-group",children:[c.jsxs("label",{className:"qr-label",children:[c.jsx("i",{className:"bx bx-text"}),"Text or URL"]}),c.jsx("textarea",{className:"qr-input qr-textarea",placeholder:"Enter text, URL, or any content...",value:n,onChange:u=>o(u.target.value),rows:4})]}),c.jsxs("div",{className:"qr-settings-grid",children:[c.jsxs("div",{className:"qr-input-group",children:[c.jsxs("label",{className:"qr-label",children:[c.jsx("i",{className:"bx bx-palette"}),"QR Color"]}),c.jsxs("div",{className:"qr-color-input",children:[c.jsx("input",{type:"color",className:"qr-color-picker",value:e,onChange:u=>t(u.target.value)}),c.jsx("input",{type:"text",className:"qr-color-text",value:e,onChange:u=>t(u.target.value)})]})]}),c.jsxs("div",{className:"qr-input-group",children:[c.jsxs("label",{className:"qr-label",children:[c.jsx("i",{className:"bx bx-palette"}),"Background"]}),c.jsxs("div",{className:"qr-color-input",children:[c.jsx("input",{type:"color",className:"qr-color-picker",value:a,onChange:u=>l(u.target.value)}),c.jsx("input",{type:"text",className:"qr-color-text",value:a,onChange:u=>l(u.target.value)})]})]}),c.jsxs("div",{className:"qr-input-group",children:[c.jsxs("label",{className:"qr-label",children:[c.jsx("i",{className:"bx bx-expand"}),"Size: ",s,"px"]}),c.jsx("input",{type:"range",className:"qr-slider",min:"200",max:"600",step:"50",value:s,onChange:u=>d(Number(u.target.value))})]}),c.jsxs("div",{className:"qr-input-group",children:[c.jsxs("label",{className:"qr-label",children:[c.jsx("i",{className:"bx bx-shield"}),"Error Correction"]}),c.jsxs("select",{className:"qr-select",value:h,onChange:u=>N(u.target.value),children:[c.jsx("option",{value:"L",children:"Low (7%)"}),c.jsx("option",{value:"M",children:"Medium (15%)"}),c.jsx("option",{value:"Q",children:"Quartile (25%)"}),c.jsx("option",{value:"H",children:"High (30%)"})]})]})]}),c.jsxs("div",{className:"qr-button-group",children:[c.jsxs("button",{className:"button qr-button-primary",onClick:I,disabled:p,children:[c.jsx("i",{className:"bx bx-qr"}),p?"Generating...":"Generate QR Code"]}),c.jsxs("button",{className:"button qr-button-secondary",onClick:A,children:[c.jsx("i",{className:"bx bx-reset"}),"Clear"]})]})]}),c.jsxs("div",{className:"qr-presets",children:[c.jsx("h3",{className:"qr-presets-title",children:"Quick Presets"}),c.jsxs("div",{className:"qr-preset-grid",children:[c.jsxs("button",{className:"qr-preset-btn",onClick:()=>{t("#667eea"),l("#ffffff")},children:[c.jsx("div",{className:"qr-preset-color",style:{background:"linear-gradient(135deg, #667eea, #764ba2)"}}),"Purple"]}),c.jsxs("button",{className:"qr-preset-btn",onClick:()=>{t("#f093fb"),l("#ffffff")},children:[c.jsx("div",{className:"qr-preset-color",style:{background:"linear-gradient(135deg, #f093fb, #f5576c)"}}),"Pink"]}),c.jsxs("button",{className:"qr-preset-btn",onClick:()=>{t("#4facfe"),l("#ffffff")},children:[c.jsx("div",{className:"qr-preset-color",style:{background:"linear-gradient(135deg, #4facfe, #00f2fe)"}}),"Blue"]}),c.jsxs("button",{className:"qr-preset-btn",onClick:()=>{t("#43e97b"),l("#ffffff")},children:[c.jsx("div",{className:"qr-preset-color",style:{background:"linear-gradient(135deg, #43e97b, #38f9d7)"}}),"Green"]})]})]})]}),c.jsxs("div",{className:"qr-preview-panel",children:[c.jsxs("div",{className:"qr-preview-card",children:[c.jsx("h2",{className:"qr-preview-title",children:"Preview"}),c.jsx("div",{className:"qr-preview-container",children:i?c.jsxs("div",{className:"qr-preview-image-wrapper",children:[c.jsx("img",{src:i,alt:"Generated QR Code",className:"qr-preview-image"}),c.jsx("canvas",{ref:B,style:{display:"none"}})]}):c.jsxs("div",{className:"qr-preview-placeholder",children:[c.jsx("i",{className:"bx bx-qr-scan qr-placeholder-icon"}),c.jsx("p",{children:"Your QR code will appear here"})]})}),i&&c.jsxs("div",{className:"qr-download-section",children:[c.jsxs("button",{className:"button qr-download-btn",onClick:E,children:[c.jsx("i",{className:"bx bx-download"}),"Download QR Code"]}),c.jsxs("p",{className:"qr-download-info",children:[c.jsx("i",{className:"bx bx-info-circle"}),"PNG format • ",s,"x",s,"px"]})]})]}),c.jsxs("div",{className:"qr-info-card",children:[c.jsxs("h3",{className:"qr-info-title",children:[c.jsx("i",{className:"bx bx-info-circle"}),"About QR Codes"]}),c.jsxs("ul",{className:"qr-info-list",children:[c.jsx("li",{children:"📱 Scan with any smartphone camera"}),c.jsx("li",{children:"🎨 Customize colors to match your brand"}),c.jsx("li",{children:"🛡️ Error correction recovers damaged codes"}),c.jsx("li",{children:"📊 Store URLs, text, contact info & more"}),c.jsx("li",{children:"💾 Download as high-quality PNG"})]})]})]})]})})]}),c.jsx(ct,{}),c.jsx("style",{children:`
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
      `})]})}export{kt as default};
