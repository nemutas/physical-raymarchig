var eh=Object.defineProperty;var th=(l,e,t)=>e in l?eh(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var se=(l,e,t)=>(th(l,typeof e!="symbol"?e+"":e,t),t);const nh=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}};nh();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yo="143",ai={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ih=0,Ho=1,sh=2,Jl=1,rh=2,is=3,Li=0,qt=1,Zn=2,oh=1,Nn=0,Ai=1,Wo=2,qo=3,jo=4,ah=5,Ei=100,lh=101,ch=102,Xo=103,Yo=104,hh=200,uh=201,dh=202,fh=203,Ql=204,ec=205,ph=206,mh=207,gh=208,vh=209,xh=210,_h=0,yh=1,bh=2,so=3,wh=4,Mh=5,Sh=6,Eh=7,tc=0,Th=1,Ah=2,_n=0,Ch=1,Lh=2,Rh=3,Ph=4,Ih=5,nc=300,Ri=301,Pi=302,ro=303,oo=304,ir=306,Ii=1e3,Ft=1001,Di=1002,ut=1003,ao=1004,lo=1005,pt=1006,ic=1007,Ui=1008,Jn=1009,Dh=1010,Nh=1011,sc=1012,Fh=1013,qn=1014,Dn=1015,cs=1016,zh=1017,Oh=1018,Ci=1020,Bh=1021,Uh=1022,Ht=1023,kh=1024,Vh=1025,Yn=1026,Ni=1027,Gh=1028,Hh=1029,Wh=1030,qh=1031,jh=1033,mr=33776,gr=33777,vr=33778,xr=33779,$o=35840,Ko=35841,Zo=35842,Jo=35843,Xh=36196,Qo=37492,ea=37496,ta=37808,na=37809,ia=37810,sa=37811,ra=37812,oa=37813,aa=37814,la=37815,ca=37816,ha=37817,ua=37818,da=37819,fa=37820,pa=37821,ma=36492,hs=2300,Fi=2301,_r=2302,ga=2400,va=2401,xa=2402,Yh=2500,$h=1,rc=2,Qn=3e3,ze=3001,Kh=3200,Zh=3201,bo=0,Jh=1,vn="srgb",jn="srgb-linear",yr=7680,Qh=519,co=35044,_a="300 es",ho=1035;class ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ya=1234567;const rs=Math.PI/180,us=180/Math.PI;function jt(){const l=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dt[l&255]+dt[l>>8&255]+dt[l>>16&255]+dt[l>>24&255]+"-"+dt[e&255]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[t&63|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[n&255]+dt[n>>8&255]+dt[n>>16&255]+dt[n>>24&255]).toLowerCase()}function mt(l,e,t){return Math.max(e,Math.min(t,l))}function wo(l,e){return(l%e+e)%e}function eu(l,e,t,n,i){return n+(l-e)*(i-n)/(t-e)}function tu(l,e,t){return l!==e?(t-l)/(e-l):0}function os(l,e,t){return(1-t)*l+t*e}function nu(l,e,t,n){return os(l,e,1-Math.exp(-t*n))}function iu(l,e=1){return e-Math.abs(wo(l,e*2)-e)}function su(l,e,t){return l<=e?0:l>=t?1:(l=(l-e)/(t-e),l*l*(3-2*l))}function ru(l,e,t){return l<=e?0:l>=t?1:(l=(l-e)/(t-e),l*l*l*(l*(l*6-15)+10))}function ou(l,e){return l+Math.floor(Math.random()*(e-l+1))}function au(l,e){return l+Math.random()*(e-l)}function lu(l){return l*(.5-Math.random())}function cu(l){l!==void 0&&(ya=l);let e=ya+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hu(l){return l*rs}function uu(l){return l*us}function uo(l){return(l&l-1)===0&&l!==0}function oc(l){return Math.pow(2,Math.ceil(Math.log(l)/Math.LN2))}function er(l){return Math.pow(2,Math.floor(Math.log(l)/Math.LN2))}function du(l,e,t,n,i){const s=Math.cos,r=Math.sin,o=s(t/2),a=r(t/2),c=s((e+n)/2),h=r((e+n)/2),d=s((e-n)/2),u=r((e-n)/2),p=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":l.set(o*h,a*d,a*u,o*c);break;case"YZY":l.set(a*u,o*h,a*d,o*c);break;case"ZXZ":l.set(a*d,a*u,o*h,o*c);break;case"XZX":l.set(o*h,a*g,a*p,o*c);break;case"YXY":l.set(a*p,o*h,a*g,o*c);break;case"ZYZ":l.set(a*g,a*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fu(l,e){switch(e.constructor){case Float32Array:return l;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function pu(l,e){switch(e.constructor){case Float32Array:return l;case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("Invalid component type.")}}var Mo=Object.freeze({__proto__:null,DEG2RAD:rs,RAD2DEG:us,generateUUID:jt,clamp:mt,euclideanModulo:wo,mapLinear:eu,inverseLerp:tu,lerp:os,damp:nu,pingpong:iu,smoothstep:su,smootherstep:ru,randInt:ou,randFloat:au,randFloatSpread:lu,seededRandom:cu,degToRad:hu,radToDeg:uu,isPowerOfTwo:uo,ceilPowerOfTwo:oc,floorPowerOfTwo:er,setQuaternionFromProperEuler:du,normalize:pu,denormalize:fu});class xe{constructor(e=0,t=0){xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,r,o,a,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=a,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],a=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],m=i[0],f=i[3],v=i[6],x=i[1],M=i[4],b=i[7],_=i[2],S=i[5],R=i[8];return s[0]=r*m+o*x+a*_,s[3]=r*f+o*M+a*S,s[6]=r*v+o*b+a*R,s[1]=c*m+h*x+d*_,s[4]=c*f+h*M+d*S,s[7]=c*v+h*b+d*R,s[2]=u*m+p*x+g*_,s[5]=u*f+p*M+g*S,s[8]=u*v+p*b+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],a=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-n*s*h+n*o*a+i*s*c-i*r*a}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],a=e[6],c=e[7],h=e[8],d=h*r-o*c,u=o*a-h*s,p=c*s-r*a,g=t*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=d*m,e[1]=(i*c-h*n)*m,e[2]=(o*n-i*r)*m,e[3]=u*m,e[4]=(h*t-i*a)*m,e[5]=(i*s-o*t)*m,e[6]=p*m,e[7]=(n*a-c*t)*m,e[8]=(r*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){const a=Math.cos(s),c=Math.sin(s);return this.set(n*a,n*c,-n*(a*r+c*o)+r+e,-i*c,i*a,-i*(-c*r+a*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],r=i[3],o=i[6],a=i[1],c=i[4],h=i[7];return i[0]=t*s+n*a,i[3]=t*r+n*c,i[6]=t*o+n*h,i[1]=-n*s+t*a,i[4]=-n*r+t*c,i[7]=-n*o+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function ac(l){for(let e=l.length-1;e>=0;--e)if(l[e]>65535)return!0;return!1}function ds(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function $n(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function Js(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}const br={[vn]:{[jn]:$n},[jn]:{[vn]:Js}},Bt={legacyMode:!0,get workingColorSpace(){return jn},set workingColorSpace(l){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(l,e,t){if(this.legacyMode||e===t||!e||!t)return l;if(br[e]&&br[e][t]!==void 0){const n=br[e][t];return l.r=n(l.r),l.g=n(l.g),l.b=n(l.b),l}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(l,e){return this.convert(l,this.workingColorSpace,e)},toWorkingColorSpace:function(l,e){return this.convert(l,e,this.workingColorSpace)}},lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},st={r:0,g:0,b:0},Ut={h:0,s:0,l:0},ws={h:0,s:0,l:0};function wr(l,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?l+(e-l)*6*t:t<1/2?e:t<2/3?l+(e-l)*6*(2/3-t):l}function Ms(l,e){return e.r=l.r,e.g=l.g,e.b=l.b,e}class Se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=jn){return this.r=e,this.g=t,this.b=n,Bt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=jn){if(e=wo(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=wr(r,s,e+1/3),this.g=wr(r,s,e),this.b=wr(r,s,e-1/3)}return Bt.toWorkingColorSpace(this,i),this}setStyle(e,t=vn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Bt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Bt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,h=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(a,c,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Bt.toWorkingColorSpace(this,t),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Bt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=vn){const n=lc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return Bt.fromWorkingColorSpace(Ms(this,st),e),mt(st.r*255,0,255)<<16^mt(st.g*255,0,255)<<8^mt(st.b*255,0,255)<<0}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=jn){Bt.fromWorkingColorSpace(Ms(this,st),t);const n=st.r,i=st.g,s=st.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let a,c;const h=(o+r)/2;if(o===r)a=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case n:a=(i-s)/d+(i<s?6:0);break;case i:a=(s-n)/d+2;break;case s:a=(n-i)/d+4;break}a/=6}return e.h=a,e.s=c,e.l=h,e}getRGB(e,t=jn){return Bt.fromWorkingColorSpace(Ms(this,st),t),e.r=st.r,e.g=st.g,e.b=st.b,e}getStyle(e=vn){return Bt.fromWorkingColorSpace(Ms(this,st),e),e!==vn?`color(${e} ${st.r} ${st.g} ${st.b})`:`rgb(${st.r*255|0},${st.g*255|0},${st.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ut),Ut.h+=e,Ut.s+=t,Ut.l+=n,this.setHSL(Ut.h,Ut.s,Ut.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ut),e.getHSL(ws);const n=os(Ut.h,ws.h,t),i=os(Ut.s,ws.s,t),s=os(Ut.l,ws.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Se.NAMES=lc;let ci;class cc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ci===void 0&&(ci=ds("canvas")),ci.width=e.width,ci.height=e.height;const n=ci.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ds("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=$n(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class hc{constructor(e=null){this.isSource=!0,this.uuid=jt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(Mr(i[r].image)):s.push(Mr(i[r]))}else s=Mr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Mr(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?cc.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mu=0;class vt extends ti{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,n=Ft,i=Ft,s=pt,r=Ui,o=Ht,a=Jn,c=1,h=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=jt(),this.name="",this.source=new hc(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=a,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ii:e.x=e.x-Math.floor(e.x);break;case Ft:e.x=e.x<0?0:1;break;case Di:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ii:e.y=e.y-Math.floor(e.y);break;case Ft:e.y=e.y<0?0:1;break;case Di:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=nc;class We{constructor(e=0,t=0,n=0,i=1){We.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const a=e.elements,c=a[0],h=a[4],d=a[8],u=a[1],p=a[5],g=a[9],m=a[2],f=a[6],v=a[10];if(Math.abs(h-u)<.01&&Math.abs(d-m)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+m)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,b=(p+1)/2,_=(v+1)/2,S=(h+u)/4,R=(d+m)/4,y=(g+f)/4;return M>b&&M>_?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=S/n,s=R/n):b>_?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=S/i,s=y/i):_<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(_),n=R/s,i=y/s),this.set(n,i,s,t),this}let x=Math.sqrt((f-g)*(f-g)+(d-m)*(d-m)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(f-g)/x,this.y=(d-m)/x,this.z=(u-h)/x,this.w=Math.acos((c+p+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yn extends ti{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new vt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:pt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class uc extends vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ut,this.minFilter=ut,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gu extends vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ut,this.minFilter=ut,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class en{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let a=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[r+0],p=s[r+1],g=s[r+2],m=s[r+3];if(o===0){e[t+0]=a,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(d!==m||a!==u||c!==p||h!==g){let f=1-o;const v=a*u+c*p+h*g+d*m,x=v>=0?1:-1,M=1-v*v;if(M>Number.EPSILON){const _=Math.sqrt(M),S=Math.atan2(_,v*x);f=Math.sin(f*S)/_,o=Math.sin(o*S)/_}const b=o*x;if(a=a*f+u*b,c=c*f+p*b,h=h*f+g*b,d=d*f+m*b,f===1-o){const _=1/Math.sqrt(a*a+c*c+h*h+d*d);a*=_,c*=_,h*=_,d*=_}}e[t]=a,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],a=n[i+1],c=n[i+2],h=n[i+3],d=s[r],u=s[r+1],p=s[r+2],g=s[r+3];return e[t]=o*g+h*d+a*p-c*u,e[t+1]=a*g+h*u+c*d-o*p,e[t+2]=c*g+h*p+o*u-a*d,e[t+3]=h*g-o*d-a*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,a=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=a(n/2),p=a(i/2),g=a(s/2);switch(r){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-a)*p,this._y=(s-c)*p,this._z=(r-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-a)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-c)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(a+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(r-i)/p,this._x=(s+c)/p,this._y=(a+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,a=t._y,c=t._z,h=t._w;return this._x=n*h+r*o+i*c-s*a,this._y=i*h+r*a+s*o-n*c,this._z=s*h+r*c+n*a-i*o,this._w=r*h-n*o-i*a-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const a=1-o*o;if(a<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(a),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ba.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ba.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,a=e.w,c=a*t+r*i-o*n,h=a*n+o*t-s*i,d=a*i+s*n-r*t,u=-s*t-r*n-o*i;return this.x=c*a+u*-s+h*-o-d*-r,this.y=h*a+u*-r+d*-s-c*-o,this.z=d*a+u*-o+c*-r-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,a=t.z;return this.x=i*a-s*o,this.y=s*r-n*a,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sr.copy(this).projectOnVector(e),this.sub(Sr)}reflect(e){return this.sub(Sr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sr=new D,ba=new en;class ki{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let a=0,c=e.length;a<c;a+=3){const h=e[a],d=e[a+1],u=e[a+2];h<t&&(t=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>r&&(r=d),u>o&&(o=u)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let a=0,c=e.count;a<c;a++){const h=e.getX(a),d=e.getY(a),u=e.getZ(a);h<t&&(t=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>r&&(r=d),u>o&&(o=u)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,o=s.count;r<o;r++)zn.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(zn)}else n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox),Er.applyMatrix4(e.matrixWorld),this.union(Er);const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),Ss.subVectors(this.max,Xi),hi.subVectors(e.a,Xi),ui.subVectors(e.b,Xi),di.subVectors(e.c,Xi),Mn.subVectors(ui,hi),Sn.subVectors(di,ui),On.subVectors(hi,di);let t=[0,-Mn.z,Mn.y,0,-Sn.z,Sn.y,0,-On.z,On.y,Mn.z,0,-Mn.x,Sn.z,0,-Sn.x,On.z,0,-On.x,-Mn.y,Mn.x,0,-Sn.y,Sn.x,0,-On.y,On.x,0];return!Tr(t,hi,ui,di,Ss)||(t=[1,0,0,0,1,0,0,0,1],!Tr(t,hi,ui,di,Ss))?!1:(Es.crossVectors(Mn,Sn),t=[Es.x,Es.y,Es.z],Tr(t,hi,ui,di,Ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return zn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rn=[new D,new D,new D,new D,new D,new D,new D,new D],zn=new D,Er=new ki,hi=new D,ui=new D,di=new D,Mn=new D,Sn=new D,On=new D,Xi=new D,Ss=new D,Es=new D,Bn=new D;function Tr(l,e,t,n,i){for(let s=0,r=l.length-3;s<=r;s+=3){Bn.fromArray(l,s);const o=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),a=e.dot(Bn),c=t.dot(Bn),h=n.dot(Bn);if(Math.max(-Math.max(a,c,h),Math.min(a,c,h))>o)return!1}return!0}const vu=new ki,wa=new D,Ts=new D,Ar=new D;class Vi{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):vu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ar.subVectors(e,this.center);const t=Ar.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Ar.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Ts.set(0,0,1).multiplyScalar(e.radius):Ts.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(wa.copy(e.center).add(Ts)),this.expandByPoint(wa.copy(e.center).sub(Ts)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new D,Cr=new D,As=new D,En=new D,Lr=new D,Cs=new D,Rr=new D;class sr{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.direction).multiplyScalar(t).add(this.origin),on.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Cr.copy(e).add(t).multiplyScalar(.5),As.copy(t).sub(e).normalize(),En.copy(this.origin).sub(Cr);const s=e.distanceTo(t)*.5,r=-this.direction.dot(As),o=En.dot(this.direction),a=-En.dot(As),c=En.lengthSq(),h=Math.abs(1-r*r);let d,u,p,g;if(h>0)if(d=r*a-o,u=r*o-a,g=s*h,d>=0)if(u>=-g)if(u<=g){const m=1/h;d*=m,u*=m,p=d*(d+r*u+2*o)+u*(r*d+u+2*a)+c}else u=s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*a)+c;else u=-s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*a)+c;else u<=-g?(d=Math.max(0,-(-r*s+o)),u=d>0?-s:Math.min(Math.max(-s,-a),s),p=-d*d+u*(u+2*a)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-a),s),p=u*(u+2*a)+c):(d=Math.max(0,-(r*s+o)),u=d>0?s:Math.min(Math.max(-s,-a),s),p=-d*d+u*(u+2*a)+c);else u=r>0?-s:s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*a)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(As).multiplyScalar(u).add(Cr),p}intersectSphere(e,t){on.subVectors(e.center,this.origin);const n=on.dot(this.direction),i=on.dot(on)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,a=n+r;return o<0&&a<0?null:o<0?this.at(a,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,a;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),n>r||s>i||((s>n||n!==n)&&(n=s),(r<i||i!==i)&&(i=r),d>=0?(o=(e.min.z-u.z)*d,a=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,a=(e.min.z-u.z)*d),n>a||o>i)||((o>n||n!==n)&&(n=o),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,n,i,s){Lr.subVectors(t,e),Cs.subVectors(n,e),Rr.crossVectors(Lr,Cs);let r=this.direction.dot(Rr),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;En.subVectors(this.origin,e);const a=o*this.direction.dot(Cs.crossVectors(En,Cs));if(a<0)return null;const c=o*this.direction.dot(Lr.cross(En));if(c<0||a+c>r)return null;const h=-o*En.dot(Rr);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oe{constructor(){Oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,r,o,a,c,h,d,u,p,g,m,f){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=s,v[5]=r,v[9]=o,v[13]=a,v[2]=c,v[6]=h,v[10]=d,v[14]=u,v[3]=p,v[7]=g,v[11]=m,v[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/fi.setFromMatrixColumn(e,0).length(),s=1/fi.setFromMatrixColumn(e,1).length(),r=1/fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),a=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=r*h,p=r*d,g=o*h,m=o*d;t[0]=a*h,t[4]=-a*d,t[8]=c,t[1]=p+g*c,t[5]=u-m*c,t[9]=-o*a,t[2]=m-u*c,t[6]=g+p*c,t[10]=r*a}else if(e.order==="YXZ"){const u=a*h,p=a*d,g=c*h,m=c*d;t[0]=u+m*o,t[4]=g*o-p,t[8]=r*c,t[1]=r*d,t[5]=r*h,t[9]=-o,t[2]=p*o-g,t[6]=m+u*o,t[10]=r*a}else if(e.order==="ZXY"){const u=a*h,p=a*d,g=c*h,m=c*d;t[0]=u-m*o,t[4]=-r*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=r*h,t[9]=m-u*o,t[2]=-r*c,t[6]=o,t[10]=r*a}else if(e.order==="ZYX"){const u=r*h,p=r*d,g=o*h,m=o*d;t[0]=a*h,t[4]=g*c-p,t[8]=u*c+m,t[1]=a*d,t[5]=m*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*a,t[10]=r*a}else if(e.order==="YZX"){const u=r*a,p=r*c,g=o*a,m=o*c;t[0]=a*h,t[4]=m-u*d,t[8]=g*d+p,t[1]=d,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-m*d}else if(e.order==="XZY"){const u=r*a,p=r*c,g=o*a,m=o*c;t[0]=a*h,t[4]=-d,t[8]=c*h,t[1]=u*d+m,t[5]=r*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=m*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xu,e,_u)}lookAt(e,t,n){const i=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),Tn.crossVectors(n,At),Tn.lengthSq()===0&&(Math.abs(n.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),Tn.crossVectors(n,At)),Tn.normalize(),Ls.crossVectors(At,Tn),i[0]=Tn.x,i[4]=Ls.x,i[8]=At.x,i[1]=Tn.y,i[5]=Ls.y,i[9]=At.y,i[2]=Tn.z,i[6]=Ls.z,i[10]=At.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],a=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],m=n[6],f=n[10],v=n[14],x=n[3],M=n[7],b=n[11],_=n[15],S=i[0],R=i[4],y=i[8],C=i[12],O=i[1],B=i[5],$=i[9],N=i[13],P=i[2],F=i[6],I=i[10],q=i[14],k=i[3],U=i[7],W=i[11],J=i[15];return s[0]=r*S+o*O+a*P+c*k,s[4]=r*R+o*B+a*F+c*U,s[8]=r*y+o*$+a*I+c*W,s[12]=r*C+o*N+a*q+c*J,s[1]=h*S+d*O+u*P+p*k,s[5]=h*R+d*B+u*F+p*U,s[9]=h*y+d*$+u*I+p*W,s[13]=h*C+d*N+u*q+p*J,s[2]=g*S+m*O+f*P+v*k,s[6]=g*R+m*B+f*F+v*U,s[10]=g*y+m*$+f*I+v*W,s[14]=g*C+m*N+f*q+v*J,s[3]=x*S+M*O+b*P+_*k,s[7]=x*R+M*B+b*F+_*U,s[11]=x*y+M*$+b*I+_*W,s[15]=x*C+M*N+b*q+_*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],a=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],m=e[7],f=e[11],v=e[15];return g*(+s*a*d-i*c*d-s*o*u+n*c*u+i*o*p-n*a*p)+m*(+t*a*p-t*c*u+s*r*u-i*r*p+i*c*h-s*a*h)+f*(+t*c*d-t*o*p-s*r*d+n*r*p+s*o*h-n*c*h)+v*(-i*o*h-t*a*d+t*o*u+i*r*d-n*r*u+n*a*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],a=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],m=e[13],f=e[14],v=e[15],x=d*f*c-m*u*c+m*a*p-o*f*p-d*a*v+o*u*v,M=g*u*c-h*f*c-g*a*p+r*f*p+h*a*v-r*u*v,b=h*m*c-g*d*c+g*o*p-r*m*p-h*o*v+r*d*v,_=g*d*a-h*m*a-g*o*u+r*m*u+h*o*f-r*d*f,S=t*x+n*M+i*b+s*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/S;return e[0]=x*R,e[1]=(m*u*s-d*f*s-m*i*p+n*f*p+d*i*v-n*u*v)*R,e[2]=(o*f*s-m*a*s+m*i*c-n*f*c-o*i*v+n*a*v)*R,e[3]=(d*a*s-o*u*s-d*i*c+n*u*c+o*i*p-n*a*p)*R,e[4]=M*R,e[5]=(h*f*s-g*u*s+g*i*p-t*f*p-h*i*v+t*u*v)*R,e[6]=(g*a*s-r*f*s-g*i*c+t*f*c+r*i*v-t*a*v)*R,e[7]=(r*u*s-h*a*s+h*i*c-t*u*c-r*i*p+t*a*p)*R,e[8]=b*R,e[9]=(g*d*s-h*m*s-g*n*p+t*m*p+h*n*v-t*d*v)*R,e[10]=(r*m*s-g*o*s+g*n*c-t*m*c-r*n*v+t*o*v)*R,e[11]=(h*o*s-r*d*s-h*n*c+t*d*c+r*n*p-t*o*p)*R,e[12]=_*R,e[13]=(h*m*i-g*d*i+g*n*u-t*m*u-h*n*f+t*d*f)*R,e[14]=(g*o*i-r*m*i-g*n*a+t*m*a+r*n*f-t*o*f)*R,e[15]=(r*d*i-h*o*i+h*n*a-t*d*a-r*n*u+t*o*u)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,a=e.z,c=s*r,h=s*o;return this.set(c*r+n,c*o-i*a,c*a+i*o,0,c*o+i*a,h*o+n,h*a-i*r,0,c*a-i*o,h*a+i*r,s*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,o=t._z,a=t._w,c=s+s,h=r+r,d=o+o,u=s*c,p=s*h,g=s*d,m=r*h,f=r*d,v=o*d,x=a*c,M=a*h,b=a*d,_=n.x,S=n.y,R=n.z;return i[0]=(1-(m+v))*_,i[1]=(p+b)*_,i[2]=(g-M)*_,i[3]=0,i[4]=(p-b)*S,i[5]=(1-(u+v))*S,i[6]=(f+x)*S,i[7]=0,i[8]=(g+M)*R,i[9]=(f-x)*R,i[10]=(1-(u+m))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=fi.set(i[0],i[1],i[2]).length();const r=fi.set(i[4],i[5],i[6]).length(),o=fi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],kt.copy(this);const c=1/s,h=1/r,d=1/o;return kt.elements[0]*=c,kt.elements[1]*=c,kt.elements[2]*=c,kt.elements[4]*=h,kt.elements[5]*=h,kt.elements[6]*=h,kt.elements[8]*=d,kt.elements[9]*=d,kt.elements[10]*=d,t.setFromRotationMatrix(kt),n.x=s,n.y=r,n.z=o,this}makePerspective(e,t,n,i,s,r){const o=this.elements,a=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),u=-(r+s)/(r-s),p=-2*r*s/(r-s);return o[0]=a,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,r){const o=this.elements,a=1/(t-e),c=1/(n-i),h=1/(r-s),d=(t+e)*a,u=(n+i)*c,p=(r+s)*h;return o[0]=2*a,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fi=new D,kt=new Oe,xu=new D(0,0,0),_u=new D(1,1,1),Tn=new D,Ls=new D,At=new D,Ma=new Oe,Sa=new en;class vs{constructor(e=0,t=0,n=0,i=vs.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],a=i[1],c=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(a,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(a,s));break;case"ZYX":this._y=Math.asin(-mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(a,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-mt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ma.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ma,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sa.setFromEuler(this),this.setFromQuaternion(Sa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}vs.DefaultOrder="XYZ";vs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class dc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yu=0;const Ea=new D,pi=new en,an=new Oe,Rs=new D,Yi=new D,bu=new D,wu=new en,Ta=new D(1,0,0),Aa=new D(0,1,0),Ca=new D(0,0,1),Mu={type:"added"},La={type:"removed"};class tt extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=jt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tt.DefaultUp.clone();const e=new D,t=new vs,n=new en,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Oe},normalMatrix:{value:new zt}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=tt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new dc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.multiply(pi),this}rotateOnWorldAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.premultiply(pi),this}rotateX(e){return this.rotateOnAxis(Ta,e)}rotateY(e){return this.rotateOnAxis(Aa,e)}rotateZ(e){return this.rotateOnAxis(Ca,e)}translateOnAxis(e,t){return Ea.copy(e).applyQuaternion(this.quaternion),this.position.add(Ea.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ta,e)}translateY(e){return this.translateOnAxis(Aa,e)}translateZ(e){return this.translateOnAxis(Ca,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rs.copy(e):Rs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Yi,Rs,this.up):an.lookAt(Rs,Yi,this.up),this.quaternion.setFromRotationMatrix(an),i&&(an.extractRotation(i.matrixWorld),pi.setFromRotationMatrix(an),this.quaternion.premultiply(pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Mu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(La)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(La)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,e,bu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,wu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let c=0,h=a.length;c<h;c++){const d=a[c];s(e.shapes,d)}else s(e.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(s(e.materials,this.material[a]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];i.animations.push(s(e.animations,a))}}if(t){const o=r(e.geometries),a=r(e.materials),c=r(e.textures),h=r(e.images),d=r(e.shapes),u=r(e.skeletons),p=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const a=[];for(const c in o){const h=o[c];delete h.metadata,a.push(h)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}tt.DefaultUp=new D(0,1,0);tt.DefaultMatrixAutoUpdate=!0;const Vt=new D,ln=new D,Pr=new D,cn=new D,mi=new D,gi=new D,Ra=new D,Ir=new D,Dr=new D,Nr=new D;class xn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Vt.subVectors(e,t),i.cross(Vt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Vt.subVectors(i,t),ln.subVectors(n,t),Pr.subVectors(e,t);const r=Vt.dot(Vt),o=Vt.dot(ln),a=Vt.dot(Pr),c=ln.dot(ln),h=ln.dot(Pr),d=r*c-o*o;if(d===0)return s.set(-2,-1,-1);const u=1/d,p=(c*a-o*h)*u,g=(r*h-o*a)*u;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,cn),cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getUV(e,t,n,i,s,r,o,a){return this.getBarycoord(e,t,n,i,cn),a.set(0,0),a.addScaledVector(s,cn.x),a.addScaledVector(r,cn.y),a.addScaledVector(o,cn.z),a}static isFrontFacing(e,t,n,i){return Vt.subVectors(n,t),ln.subVectors(e,t),Vt.cross(ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Vt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return xn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,o;mi.subVectors(i,n),gi.subVectors(s,n),Ir.subVectors(e,n);const a=mi.dot(Ir),c=gi.dot(Ir);if(a<=0&&c<=0)return t.copy(n);Dr.subVectors(e,i);const h=mi.dot(Dr),d=gi.dot(Dr);if(h>=0&&d<=h)return t.copy(i);const u=a*d-h*c;if(u<=0&&a>=0&&h<=0)return r=a/(a-h),t.copy(n).addScaledVector(mi,r);Nr.subVectors(e,s);const p=mi.dot(Nr),g=gi.dot(Nr);if(g>=0&&p<=g)return t.copy(s);const m=p*c-a*g;if(m<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(gi,o);const f=h*g-p*d;if(f<=0&&d-h>=0&&p-g>=0)return Ra.subVectors(s,i),o=(d-h)/(d-h+(p-g)),t.copy(i).addScaledVector(Ra,o);const v=1/(f+m+u);return r=m*v,o=u*v,t.copy(n).addScaledVector(mi,r).addScaledVector(gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Su=0;class Jt extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=jt(),this.name="",this.type="Material",this.blending=Ai,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ql,this.blendDst=ec,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===oh;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const a=s[o];delete a.metadata,r.push(a)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ot extends Jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qe=new D,Ps=new xe;class Lt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=co,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),r=new Se),t[n++]=r.r,t[n++]=r.g,t[n++]=r.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),r=new xe),t[n++]=r.x,t[n++]=r.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),r=new D),t[n++]=r.x,t[n++]=r.y,t[n++]=r.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),r=new We),t[n++]=r.x,t[n++]=r.y,t[n++]=r.z,t[n++]=r.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ps.fromBufferAttribute(this,t),Ps.applyMatrix3(e),this.setXY(t,Ps.x,Ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix3(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix4(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyNormalMatrix(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.transformDirection(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==co&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class fc extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pc extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ct extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Eu=0;const Nt=new Oe,Fr=new tt,vi=new D,Ct=new ki,$i=new ki,at=new D;class Mt extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=jt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ac(e)?pc:fc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new zt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,n){return Nt.makeTranslation(e,t,n),this.applyMatrix4(Nt),this}scale(e,t,n){return Nt.makeScale(e,t,n),this.applyMatrix4(Nt),this}lookAt(e){return Fr.lookAt(e),Fr.updateMatrix(),this.applyMatrix4(Fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ct.setFromBufferAttribute(s),this.morphTargetsRelative?(at.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(at),at.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(at)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];$i.setFromBufferAttribute(o),this.morphTargetsRelative?(at.addVectors(Ct.min,$i.min),Ct.expandByPoint(at),at.addVectors(Ct.max,$i.max),Ct.expandByPoint(at)):(Ct.expandByPoint($i.min),Ct.expandByPoint($i.max))}Ct.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)at.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(at));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],a=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)at.fromBufferAttribute(o,c),a&&(vi.fromBufferAttribute(e,c),at.add(vi)),i=Math.max(i,n.distanceToSquared(at))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*o),4));const a=this.getAttribute("tangent").array,c=[],h=[];for(let O=0;O<o;O++)c[O]=new D,h[O]=new D;const d=new D,u=new D,p=new D,g=new xe,m=new xe,f=new xe,v=new D,x=new D;function M(O,B,$){d.fromArray(i,O*3),u.fromArray(i,B*3),p.fromArray(i,$*3),g.fromArray(r,O*2),m.fromArray(r,B*2),f.fromArray(r,$*2),u.sub(d),p.sub(d),m.sub(g),f.sub(g);const N=1/(m.x*f.y-f.x*m.y);!isFinite(N)||(v.copy(u).multiplyScalar(f.y).addScaledVector(p,-m.y).multiplyScalar(N),x.copy(p).multiplyScalar(m.x).addScaledVector(u,-f.x).multiplyScalar(N),c[O].add(v),c[B].add(v),c[$].add(v),h[O].add(x),h[B].add(x),h[$].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let O=0,B=b.length;O<B;++O){const $=b[O],N=$.start,P=$.count;for(let F=N,I=N+P;F<I;F+=3)M(n[F+0],n[F+1],n[F+2])}const _=new D,S=new D,R=new D,y=new D;function C(O){R.fromArray(s,O*3),y.copy(R);const B=c[O];_.copy(B),_.sub(R.multiplyScalar(R.dot(B))).normalize(),S.crossVectors(y,B);const N=S.dot(h[O])<0?-1:1;a[O*4]=_.x,a[O*4+1]=_.y,a[O*4+2]=_.z,a[O*4+3]=N}for(let O=0,B=b.length;O<B;++O){const $=b[O],N=$.start,P=$.count;for(let F=N,I=N+P;F<I;F+=3)C(n[F+0]),C(n[F+1]),C(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new D,s=new D,r=new D,o=new D,a=new D,c=new D,h=new D,d=new D;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),m=e.getX(u+1),f=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,f),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,f),o.add(h),a.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const r=n[i].array,o=e.attributes[i],a=o.array,c=o.itemSize*t,h=Math.min(a.length,r.length-c);for(let d=0,u=c;d<h;d++,u++)r[u]=a[d]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)at.fromBufferAttribute(e,t),at.normalize(),e.setXYZ(t,at.x,at.y,at.z)}toNonIndexed(){function e(o,a){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(a.length*h);let p=0,g=0;for(let m=0,f=a.length;m<f;m++){o.isInterleavedBufferAttribute?p=a[m]*o.data.stride+o.offset:p=a[m]*h;for(let v=0;v<h;v++)u[g++]=c[p++]}return new Lt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,n=this.index.array,i=this.attributes;for(const o in i){const a=i[o],c=e(a,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const a=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=e(u,n);a.push(p)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,a=r.length;o<a;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(e[c]=a[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const a in n){const c=n[a];e.data.attributes[a]=c.toJSON(e.data)}const i={};let s=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(i[a]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pa=new Oe,xi=new sr,zr=new Vi,An=new D,Cn=new D,Ln=new D,Or=new D,Br=new D,Ur=new D,Is=new D,Ds=new D,Ns=new D,Fs=new xe,zs=new xe,Os=new xe,kr=new D,Bs=new D;class gt extends tt{constructor(e=new Mt,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(s),e.ray.intersectsSphere(zr)===!1)||(Pa.copy(s).invert(),xi.copy(e.ray).applyMatrix4(Pa),n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,a=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,d=n.attributes.uv,u=n.attributes.uv2,p=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,f=p.length;m<f;m++){const v=p[m],x=i[v.materialIndex],M=Math.max(v.start,g.start),b=Math.min(o.count,Math.min(v.start+v.count,g.start+g.count));for(let _=M,S=b;_<S;_+=3){const R=o.getX(_),y=o.getX(_+1),C=o.getX(_+2);r=Us(this,x,e,xi,a,c,h,d,u,R,y,C),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const m=Math.max(0,g.start),f=Math.min(o.count,g.start+g.count);for(let v=m,x=f;v<x;v+=3){const M=o.getX(v),b=o.getX(v+1),_=o.getX(v+2);r=Us(this,i,e,xi,a,c,h,d,u,M,b,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(a!==void 0)if(Array.isArray(i))for(let m=0,f=p.length;m<f;m++){const v=p[m],x=i[v.materialIndex],M=Math.max(v.start,g.start),b=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let _=M,S=b;_<S;_+=3){const R=_,y=_+1,C=_+2;r=Us(this,x,e,xi,a,c,h,d,u,R,y,C),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const m=Math.max(0,g.start),f=Math.min(a.count,g.start+g.count);for(let v=m,x=f;v<x;v+=3){const M=v,b=v+1,_=v+2;r=Us(this,i,e,xi,a,c,h,d,u,M,b,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function Tu(l,e,t,n,i,s,r,o){let a;if(e.side===qt?a=n.intersectTriangle(r,s,i,!0,o):a=n.intersectTriangle(i,s,r,e.side!==Zn,o),a===null)return null;Bs.copy(o),Bs.applyMatrix4(l.matrixWorld);const c=t.ray.origin.distanceTo(Bs);return c<t.near||c>t.far?null:{distance:c,point:Bs.clone(),object:l}}function Us(l,e,t,n,i,s,r,o,a,c,h,d){An.fromBufferAttribute(i,c),Cn.fromBufferAttribute(i,h),Ln.fromBufferAttribute(i,d);const u=l.morphTargetInfluences;if(s&&u){Is.set(0,0,0),Ds.set(0,0,0),Ns.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const f=u[g],v=s[g];f!==0&&(Or.fromBufferAttribute(v,c),Br.fromBufferAttribute(v,h),Ur.fromBufferAttribute(v,d),r?(Is.addScaledVector(Or,f),Ds.addScaledVector(Br,f),Ns.addScaledVector(Ur,f)):(Is.addScaledVector(Or.sub(An),f),Ds.addScaledVector(Br.sub(Cn),f),Ns.addScaledVector(Ur.sub(Ln),f)))}An.add(Is),Cn.add(Ds),Ln.add(Ns)}l.isSkinnedMesh&&(l.boneTransform(c,An),l.boneTransform(h,Cn),l.boneTransform(d,Ln));const p=Tu(l,e,t,n,An,Cn,Ln,kr);if(p){o&&(Fs.fromBufferAttribute(o,c),zs.fromBufferAttribute(o,h),Os.fromBufferAttribute(o,d),p.uv=xn.getUV(kr,An,Cn,Ln,Fs,zs,Os,new xe)),a&&(Fs.fromBufferAttribute(a,c),zs.fromBufferAttribute(a,h),Os.fromBufferAttribute(a,d),p.uv2=xn.getUV(kr,An,Cn,Ln,Fs,zs,Os,new xe));const g={a:c,b:h,c:d,normal:new D,materialIndex:0};xn.getNormal(An,Cn,Ln,g.normal),p.face=g}return p}class xs extends Mt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const a=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(a),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(d,2));function g(m,f,v,x,M,b,_,S,R,y,C){const O=b/R,B=_/y,$=b/2,N=_/2,P=S/2,F=R+1,I=y+1;let q=0,k=0;const U=new D;for(let W=0;W<I;W++){const J=W*B-N;for(let H=0;H<F;H++){const ee=H*O-$;U[m]=ee*x,U[f]=J*M,U[v]=P,c.push(U.x,U.y,U.z),U[m]=0,U[f]=0,U[v]=S>0?1:-1,h.push(U.x,U.y,U.z),d.push(H/R),d.push(1-W/y),q+=1}}for(let W=0;W<y;W++)for(let J=0;J<R;J++){const H=u+J+F*W,ee=u+J+F*(W+1),fe=u+(J+1)+F*(W+1),ve=u+(J+1)+F*W;a.push(H,ee,ve),a.push(ee,fe,ve),k+=6}o.addGroup(p,k,C),p+=k,u+=q}}static fromJSON(e){return new xs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zi(l){const e={};for(const t in l){e[t]={};for(const n in l[t]){const i=l[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ft(l){const e={};for(let t=0;t<l.length;t++){const n=zi(l[t]);for(const i in n)e[i]=n[i]}return e}function Au(l){const e=[];for(let t=0;t<l.length;t++)e.push(l[t].clone());return e}const mc={clone:zi,merge:ft};var Cu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends Jt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cu,this.fragmentShader=Lu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=Au(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gc extends tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class lt extends gc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return us*2*Math.atan(Math.tan(rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const a=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/a,t-=r.offsetY*n/c,i*=r.width/a,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _i=90,yi=1;class Ru extends tt{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new lt(_i,yi,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new D(1,0,0)),this.add(i);const s=new lt(_i,yi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new D(-1,0,0)),this.add(s);const r=new lt(_i,yi,e,t);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(new D(0,1,0)),this.add(r);const o=new lt(_i,yi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new D(0,-1,0)),this.add(o);const a=new lt(_i,yi,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new D(0,0,1)),this.add(a);const c=new lt(_i,yi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new D(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,o,a,c]=this.children,h=e.getRenderTarget(),d=e.toneMapping,u=e.xr.enabled;e.toneMapping=_n,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,a),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class vc extends vt{constructor(e,t,n,i,s,r,o,a,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ri,super(e,t,n,i,s,r,o,a,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pu extends yn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new vc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new xs(5,5,5),s=new tn({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:Nn});s.uniforms.tEquirect.value=t;const r=new gt(i,s),o=t.minFilter;return t.minFilter===Ui&&(t.minFilter=pt),new Ru(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const Vr=new D,Iu=new D,Du=new zt;class kn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Vr.subVectors(n,t).cross(Iu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Vr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Du.getNormalMatrix(e),i=this.coplanarPoint(Vr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new Vi,ks=new D;class So{constructor(e=new kn,t=new kn,n=new kn,i=new kn,s=new kn,r=new kn){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],c=n[5],h=n[6],d=n[7],u=n[8],p=n[9],g=n[10],m=n[11],f=n[12],v=n[13],x=n[14],M=n[15];return t[0].setComponents(o-i,d-a,m-u,M-f).normalize(),t[1].setComponents(o+i,d+a,m+u,M+f).normalize(),t[2].setComponents(o+s,d+c,m+p,M+v).normalize(),t[3].setComponents(o-s,d-c,m-p,M-v).normalize(),t[4].setComponents(o-r,d-h,m-g,M-x).normalize(),t[5].setComponents(o+r,d+h,m+g,M+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ks.x=i.normal.x>0?e.max.x:e.min.x,ks.y=i.normal.y>0?e.max.y:e.min.y,ks.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ks)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xc(){let l=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=l.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=l.requestAnimationFrame(i),e=!0)},stop:function(){l.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){l=s}}}function Nu(l,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,p=l.createBuffer();l.bindBuffer(h,p),l.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const u=h.array,p=h.updateRange;l.bindBuffer(d,c),p.count===-1?l.bufferSubData(d,0,u):(t?l.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):l.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1)}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(l.deleteBuffer(h.buffer),n.delete(c))}function a(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:r,remove:o,update:a}}class Oi extends Mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,o=Math.floor(n),a=Math.floor(i),c=o+1,h=a+1,d=e/o,u=t/a,p=[],g=[],m=[],f=[];for(let v=0;v<h;v++){const x=v*u-r;for(let M=0;M<c;M++){const b=M*d-s;g.push(b,-x,0),m.push(0,0,1),f.push(M/o),f.push(1-v/a)}}for(let v=0;v<a;v++)for(let x=0;x<o;x++){const M=x+c*v,b=x+c*(v+1),_=x+1+c*(v+1),S=x+1+c*v;p.push(M,b,S),p.push(b,_,S)}this.setIndex(p),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(m,3)),this.setAttribute("uv",new ct(f,2))}static fromJSON(e){return new Oi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,zu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ou=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Bu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ku=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vu="vec3 transformed = vec3( position );",Gu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Wu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ed=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,td=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,id=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,od=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",ld=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ud=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,md=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,_d=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bd=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,wd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Md=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ed=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Td=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ad=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Cd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ld=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Dd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Od=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ud=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,qd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,jd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Xd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Yd=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Qd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ef=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,tf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,nf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,of=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,df=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ff=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,mf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,xf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_f=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sf=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Ef=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Tf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Af=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Cf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Lf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Rf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Pf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,If=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Df=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nf=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zf=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Of=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Uf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qf=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$f=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ep=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,np=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,op=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ap=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,cp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Le={alphamap_fragment:Fu,alphamap_pars_fragment:zu,alphatest_fragment:Ou,alphatest_pars_fragment:Bu,aomap_fragment:Uu,aomap_pars_fragment:ku,begin_vertex:Vu,beginnormal_vertex:Gu,bsdfs:Hu,iridescence_fragment:Wu,bumpmap_pars_fragment:qu,clipping_planes_fragment:ju,clipping_planes_pars_fragment:Xu,clipping_planes_pars_vertex:Yu,clipping_planes_vertex:$u,color_fragment:Ku,color_pars_fragment:Zu,color_pars_vertex:Ju,color_vertex:Qu,common:ed,cube_uv_reflection_fragment:td,defaultnormal_vertex:nd,displacementmap_pars_vertex:id,displacementmap_vertex:sd,emissivemap_fragment:rd,emissivemap_pars_fragment:od,encodings_fragment:ad,encodings_pars_fragment:ld,envmap_fragment:cd,envmap_common_pars_fragment:hd,envmap_pars_fragment:ud,envmap_pars_vertex:dd,envmap_physical_pars_fragment:Md,envmap_vertex:fd,fog_vertex:pd,fog_pars_vertex:md,fog_fragment:gd,fog_pars_fragment:vd,gradientmap_pars_fragment:xd,lightmap_fragment:_d,lightmap_pars_fragment:yd,lights_lambert_vertex:bd,lights_pars_begin:wd,lights_toon_fragment:Sd,lights_toon_pars_fragment:Ed,lights_phong_fragment:Td,lights_phong_pars_fragment:Ad,lights_physical_fragment:Cd,lights_physical_pars_fragment:Ld,lights_fragment_begin:Rd,lights_fragment_maps:Pd,lights_fragment_end:Id,logdepthbuf_fragment:Dd,logdepthbuf_pars_fragment:Nd,logdepthbuf_pars_vertex:Fd,logdepthbuf_vertex:zd,map_fragment:Od,map_pars_fragment:Bd,map_particle_fragment:Ud,map_particle_pars_fragment:kd,metalnessmap_fragment:Vd,metalnessmap_pars_fragment:Gd,morphcolor_vertex:Hd,morphnormal_vertex:Wd,morphtarget_pars_vertex:qd,morphtarget_vertex:jd,normal_fragment_begin:Xd,normal_fragment_maps:Yd,normal_pars_fragment:$d,normal_pars_vertex:Kd,normal_vertex:Zd,normalmap_pars_fragment:Jd,clearcoat_normal_fragment_begin:Qd,clearcoat_normal_fragment_maps:ef,clearcoat_pars_fragment:tf,iridescence_pars_fragment:nf,output_fragment:sf,packing:rf,premultiplied_alpha_fragment:of,project_vertex:af,dithering_fragment:lf,dithering_pars_fragment:cf,roughnessmap_fragment:hf,roughnessmap_pars_fragment:uf,shadowmap_pars_fragment:df,shadowmap_pars_vertex:ff,shadowmap_vertex:pf,shadowmask_pars_fragment:mf,skinbase_vertex:gf,skinning_pars_vertex:vf,skinning_vertex:xf,skinnormal_vertex:_f,specularmap_fragment:yf,specularmap_pars_fragment:bf,tonemapping_fragment:wf,tonemapping_pars_fragment:Mf,transmission_fragment:Sf,transmission_pars_fragment:Ef,uv_pars_fragment:Tf,uv_pars_vertex:Af,uv_vertex:Cf,uv2_pars_fragment:Lf,uv2_pars_vertex:Rf,uv2_vertex:Pf,worldpos_vertex:If,background_vert:Df,background_frag:Nf,cube_vert:Ff,cube_frag:zf,depth_vert:Of,depth_frag:Bf,distanceRGBA_vert:Uf,distanceRGBA_frag:kf,equirect_vert:Vf,equirect_frag:Gf,linedashed_vert:Hf,linedashed_frag:Wf,meshbasic_vert:qf,meshbasic_frag:jf,meshlambert_vert:Xf,meshlambert_frag:Yf,meshmatcap_vert:$f,meshmatcap_frag:Kf,meshnormal_vert:Zf,meshnormal_frag:Jf,meshphong_vert:Qf,meshphong_frag:ep,meshphysical_vert:tp,meshphysical_frag:np,meshtoon_vert:ip,meshtoon_frag:sp,points_vert:rp,points_frag:op,shadow_vert:ap,shadow_frag:lp,sprite_vert:cp,sprite_frag:hp},oe={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new zt},uv2Transform:{value:new zt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zt}}},Zt={basic:{uniforms:ft([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:ft([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.fog,oe.lights,{emissive:{value:new Se(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:ft([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:ft([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:ft([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Se(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:ft([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:ft([oe.points,oe.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:ft([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:ft([oe.common,oe.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:ft([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:ft([oe.sprite,oe.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},cube:{uniforms:ft([oe.envmap,{opacity:{value:1}}]),vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:ft([oe.common,oe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:ft([oe.lights,oe.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Zt.physical={uniforms:ft([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new xe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};function up(l,e,t,n,i,s){const r=new Se(0);let o=i===!0?0:1,a,c,h=null,d=0,u=null;function p(m,f){let v=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=e.get(x));const M=l.xr,b=M.getSession&&M.getSession();b&&b.environmentBlendMode==="additive"&&(x=null),x===null?g(r,o):x&&x.isColor&&(g(x,1),v=!0),(l.autoClear||v)&&l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ir)?(c===void 0&&(c=new gt(new xs(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:zi(Zt.cube.uniforms),vertexShader:Zt.cube.vertexShader,fragmentShader:Zt.cube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(h!==x||d!==x.version||u!==l.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=l.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(a===void 0&&(a=new gt(new Oi(2,2),new tn({name:"BackgroundMaterial",uniforms:zi(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),a.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==l.toneMapping)&&(a.material.needsUpdate=!0,h=x,d=x.version,u=l.toneMapping),a.layers.enableAll(),m.unshift(a,a.geometry,a.material,0,0,null))}function g(m,f){t.buffers.color.setClear(m.r,m.g,m.b,f,s)}return{getClearColor:function(){return r},setClearColor:function(m,f=1){r.set(m),o=f,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:p}}function dp(l,e,t,n){const i=l.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},a=f(null);let c=a,h=!1;function d(P,F,I,q,k){let U=!1;if(r){const W=m(q,I,F);c!==W&&(c=W,p(c.object)),U=v(P,q,I,k),U&&x(P,q,I,k)}else{const W=F.wireframe===!0;(c.geometry!==q.id||c.program!==I.id||c.wireframe!==W)&&(c.geometry=q.id,c.program=I.id,c.wireframe=W,U=!0)}k!==null&&t.update(k,34963),(U||h)&&(h=!1,y(P,F,I,q),k!==null&&l.bindBuffer(34963,t.get(k).buffer))}function u(){return n.isWebGL2?l.createVertexArray():s.createVertexArrayOES()}function p(P){return n.isWebGL2?l.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?l.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function m(P,F,I){const q=I.wireframe===!0;let k=o[P.id];k===void 0&&(k={},o[P.id]=k);let U=k[F.id];U===void 0&&(U={},k[F.id]=U);let W=U[q];return W===void 0&&(W=f(u()),U[q]=W),W}function f(P){const F=[],I=[],q=[];for(let k=0;k<i;k++)F[k]=0,I[k]=0,q[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:I,attributeDivisors:q,object:P,attributes:{},index:null}}function v(P,F,I,q){const k=c.attributes,U=F.attributes;let W=0;const J=I.getAttributes();for(const H in J)if(J[H].location>=0){const fe=k[H];let ve=U[H];if(ve===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(ve=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(ve=P.instanceColor)),fe===void 0||fe.attribute!==ve||ve&&fe.data!==ve.data)return!0;W++}return c.attributesNum!==W||c.index!==q}function x(P,F,I,q){const k={},U=F.attributes;let W=0;const J=I.getAttributes();for(const H in J)if(J[H].location>=0){let fe=U[H];fe===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(fe=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(fe=P.instanceColor));const ve={};ve.attribute=fe,fe&&fe.data&&(ve.data=fe.data),k[H]=ve,W++}c.attributes=k,c.attributesNum=W,c.index=q}function M(){const P=c.newAttributes;for(let F=0,I=P.length;F<I;F++)P[F]=0}function b(P){_(P,0)}function _(P,F){const I=c.newAttributes,q=c.enabledAttributes,k=c.attributeDivisors;I[P]=1,q[P]===0&&(l.enableVertexAttribArray(P),q[P]=1),k[P]!==F&&((n.isWebGL2?l:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),k[P]=F)}function S(){const P=c.newAttributes,F=c.enabledAttributes;for(let I=0,q=F.length;I<q;I++)F[I]!==P[I]&&(l.disableVertexAttribArray(I),F[I]=0)}function R(P,F,I,q,k,U){n.isWebGL2===!0&&(I===5124||I===5125)?l.vertexAttribIPointer(P,F,I,k,U):l.vertexAttribPointer(P,F,I,q,k,U)}function y(P,F,I,q){if(n.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const k=q.attributes,U=I.getAttributes(),W=F.defaultAttributeValues;for(const J in U){const H=U[J];if(H.location>=0){let ee=k[J];if(ee===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor)),ee!==void 0){const fe=ee.normalized,ve=ee.itemSize,K=t.get(ee);if(K===void 0)continue;const Ie=K.buffer,_e=K.type,we=K.bytesPerElement;if(ee.isInterleavedBufferAttribute){const me=ee.data,ke=me.stride,Te=ee.offset;if(me.isInstancedInterleavedBuffer){for(let ge=0;ge<H.locationSize;ge++)_(H.location+ge,me.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ge=0;ge<H.locationSize;ge++)b(H.location+ge);l.bindBuffer(34962,Ie);for(let ge=0;ge<H.locationSize;ge++)R(H.location+ge,ve/H.locationSize,_e,fe,ke*we,(Te+ve/H.locationSize*ge)*we)}else{if(ee.isInstancedBufferAttribute){for(let me=0;me<H.locationSize;me++)_(H.location+me,ee.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let me=0;me<H.locationSize;me++)b(H.location+me);l.bindBuffer(34962,Ie);for(let me=0;me<H.locationSize;me++)R(H.location+me,ve/H.locationSize,_e,fe,ve*we,ve/H.locationSize*me*we)}}else if(W!==void 0){const fe=W[J];if(fe!==void 0)switch(fe.length){case 2:l.vertexAttrib2fv(H.location,fe);break;case 3:l.vertexAttrib3fv(H.location,fe);break;case 4:l.vertexAttrib4fv(H.location,fe);break;default:l.vertexAttrib1fv(H.location,fe)}}}}S()}function C(){$();for(const P in o){const F=o[P];for(const I in F){const q=F[I];for(const k in q)g(q[k].object),delete q[k];delete F[I]}delete o[P]}}function O(P){if(o[P.id]===void 0)return;const F=o[P.id];for(const I in F){const q=F[I];for(const k in q)g(q[k].object),delete q[k];delete F[I]}delete o[P.id]}function B(P){for(const F in o){const I=o[F];if(I[P.id]===void 0)continue;const q=I[P.id];for(const k in q)g(q[k].object),delete q[k];delete I[P.id]}}function $(){N(),h=!0,c!==a&&(c=a,p(c.object))}function N(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:$,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:O,releaseStatesOfProgram:B,initAttributes:M,enableAttribute:b,disableUnusedAttributes:S}}function fp(l,e,t,n){const i=n.isWebGL2;let s;function r(c){s=c}function o(c,h){l.drawArrays(s,c,h),t.update(h,s,1)}function a(c,h,d){if(d===0)return;let u,p;if(i)u=l,p="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[p](s,c,h,d),t.update(h,s,d)}this.setMode=r,this.render=o,this.renderInstances=a}function pp(l,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=l.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(l.getShaderPrecisionFormat(35633,36338).precision>0&&l.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&l.getShaderPrecisionFormat(35633,36337).precision>0&&l.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&l instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&l instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const c=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=l.getParameter(34930),u=l.getParameter(35660),p=l.getParameter(3379),g=l.getParameter(34076),m=l.getParameter(34921),f=l.getParameter(36347),v=l.getParameter(36348),x=l.getParameter(36349),M=u>0,b=r||e.has("OES_texture_float"),_=M&&b,S=r?l.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:f,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:M,floatFragmentTextures:b,floatVertexTextures:_,maxSamples:S}}function mp(l){const e=this;let t=null,n=0,i=!1,s=!1;const r=new kn,o=new zt,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u,p){const g=d.length!==0||u||n!==0||i;return i=u,t=h(d,p,0),n=d.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(d,u,p){const g=d.clippingPlanes,m=d.clipIntersection,f=d.clipShadows,v=l.get(d);if(!i||g===null||g.length===0||s&&!f)s?h(null):c();else{const x=s?0:n,M=x*4;let b=v.clippingState||null;a.value=b,b=h(g,u,M,p);for(let _=0;_!==M;++_)b[_]=t[_];v.clippingState=b,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function c(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,g){const m=d!==null?d.length:0;let f=null;if(m!==0){if(f=a.value,g!==!0||f===null){const v=p+m*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(f===null||f.length<v)&&(f=new Float32Array(v));for(let M=0,b=p;M!==m;++M,b+=4)r.copy(d[M]).applyMatrix4(x,o),r.normal.toArray(f,b),f[b+3]=r.constant}a.value=f,a.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,f}}function gp(l){let e=new WeakMap;function t(r,o){return o===ro?r.mapping=Ri:o===oo&&(r.mapping=Pi),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===ro||o===oo)if(e.has(r)){const a=e.get(r).texture;return t(a,r.mapping)}else{const a=r.image;if(a&&a.height>0){const c=new Pu(a.height/2);return c.fromEquirectangularTexture(l,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const a=e.get(o);a!==void 0&&(e.delete(o),a.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ni extends gc{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=i+t,a=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,a=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ti=4,Ia=[.125,.215,.35,.446,.526,.582],Hn=20,Gr=new ni,Da=new Se;let Hr=null;const Vn=(1+Math.sqrt(5))/2,wi=1/Vn,Na=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Vn,wi),new D(0,Vn,-wi),new D(wi,0,Vn),new D(-wi,0,Vn),new D(Vn,wi,0),new D(-Vn,wi,0)];class Fa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Hr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hr),e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ri||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pt,minFilter:pt,generateMipmaps:!1,type:cs,format:Ht,encoding:Qn,depthBuffer:!1},i=za(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=za(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vp(s)),this._blurMaterial=xp(s,e,t)}return i}_compileMaterial(e){const t=new gt(this._lodPlanes[0],e);this._renderer.compile(t,Gr)}_sceneToCubeUV(e,t,n,i){const o=new lt(90,1,t,n),a=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Da),h.toneMapping=_n,h.autoClear=!1;const p=new Ot({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),g=new gt(new xs,p);let m=!1;const f=e.background;f?f.isColor&&(p.color.copy(f),e.background=null,m=!0):(p.color.copy(Da),m=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(o.up.set(0,a[v],0),o.lookAt(c[v],0,0)):x===1?(o.up.set(0,0,a[v]),o.lookAt(0,c[v],0)):(o.up.set(0,a[v],0),o.lookAt(0,0,c[v]));const M=this._cubeSize;Vs(i,x*M,v>2?M:0,M,M),h.setRenderTarget(i),m&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ri||e.mapping===Pi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ba()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oa());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new gt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const a=this._cubeSize;Vs(t,0,0,3*a,2*a),n.setRenderTarget(t),n.render(r,Gr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Na[(i-1)%Na.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,o){const a=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new gt(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Hn-1),m=s/g,f=isFinite(s)?1+Math.floor(h*m):Hn;f>Hn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Hn}`);const v=[];let x=0;for(let R=0;R<Hn;++R){const y=R/m,C=Math.exp(-y*y/2);v.push(C),R===0?x+=C:R<f&&(x+=2*C)}for(let R=0;R<v.length;R++)v[R]=v[R]/x;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=v,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-n;const b=this._sizeLods[i],_=3*b*(i>M-Ti?i-M+Ti:0),S=4*(this._cubeSize-b);Vs(t,_,S,3*b,2*b),a.setRenderTarget(t),a.render(d,Gr)}}function vp(l){const e=[],t=[],n=[];let i=l;const s=l-Ti+1+Ia.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);t.push(o);let a=1/o;r>l-Ti?a=Ia[r-l+Ti-1]:r===0&&(a=0),n.push(a);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,m=3,f=2,v=1,x=new Float32Array(m*g*p),M=new Float32Array(f*g*p),b=new Float32Array(v*g*p);for(let S=0;S<p;S++){const R=S%3*2/3-1,y=S>2?0:-1,C=[R,y,0,R+2/3,y,0,R+2/3,y+1,0,R,y,0,R+2/3,y+1,0,R,y+1,0];x.set(C,m*g*S),M.set(u,f*g*S);const O=[S,S,S,S,S,S];b.set(O,v*g*S)}const _=new Mt;_.setAttribute("position",new Lt(x,m)),_.setAttribute("uv",new Lt(M,f)),_.setAttribute("faceIndex",new Lt(b,v)),e.push(_),i>Ti&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function za(l,e,t){const n=new yn(l,e,t);return n.texture.mapping=ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(l,e,t,n,i){l.viewport.set(e,t,n,i),l.scissor.set(e,t,n,i)}function xp(l,e,t){const n=new Float32Array(Hn),i=new D(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:Hn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Oa(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ba(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Eo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _p(l){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const a=o.mapping,c=a===ro||a===oo,h=a===Ri||a===Pi;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Fa(l)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Fa(l));const u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let a=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&a++;return a===c}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function yp(l){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=l.getExtension("WEBGL_depth_texture")||l.getExtension("MOZ_WEBGL_depth_texture")||l.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=l.getExtension("EXT_texture_filter_anisotropic")||l.getExtension("MOZ_EXT_texture_filter_anisotropic")||l.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=l.getExtension("WEBGL_compressed_texture_s3tc")||l.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=l.getExtension("WEBGL_compressed_texture_pvrtc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=l.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function bp(l,e,t,n){const i={},s=new WeakMap;function r(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete i[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,t.memory.geometries++),u}function a(d){const u=d.attributes;for(const g in u)e.update(u[g],34962);const p=d.morphAttributes;for(const g in p){const m=p[g];for(let f=0,v=m.length;f<v;f++)e.update(m[f],34962)}}function c(d){const u=[],p=d.index,g=d.attributes.position;let m=0;if(p!==null){const x=p.array;m=p.version;for(let M=0,b=x.length;M<b;M+=3){const _=x[M+0],S=x[M+1],R=x[M+2];u.push(_,S,S,R,R,_)}}else{const x=g.array;m=g.version;for(let M=0,b=x.length/3-1;M<b;M+=3){const _=M+0,S=M+1,R=M+2;u.push(_,S,S,R,R,_)}}const f=new(ac(u)?pc:fc)(u,1);f.version=m;const v=s.get(d);v&&e.remove(v),s.set(d,f)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:a,getWireframeAttribute:h}}function wp(l,e,t,n){const i=n.isWebGL2;let s;function r(u){s=u}let o,a;function c(u){o=u.type,a=u.bytesPerElement}function h(u,p){l.drawElements(s,p,o,u*a),t.update(p,s,1)}function d(u,p,g){if(g===0)return;let m,f;if(i)m=l,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,p,o,u*a,g),t.update(p,s,g)}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=d}function Mp(l){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Sp(l,e){return l[0]-e[0]}function Ep(l,e){return Math.abs(e[1])-Math.abs(l[1])}function Wr(l,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),l.divideScalar(t)}function Tp(l,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new We,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function a(c,h,d,u){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=m!==void 0?m.length:0;let v=s.get(h);if(v===void 0||v.count!==f){let I=function(){P.dispose(),s.delete(h),h.removeEventListener("dispose",I)};var g=I;v!==void 0&&v.texture.dispose();const b=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let O=0;b===!0&&(O=1),_===!0&&(O=2),S===!0&&(O=3);let B=h.attributes.position.count*O,$=1;B>e.maxTextureSize&&($=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const N=new Float32Array(B*$*4*f),P=new uc(N,B,$,f);P.type=Dn,P.needsUpdate=!0;const F=O*4;for(let q=0;q<f;q++){const k=R[q],U=y[q],W=C[q],J=B*$*4*q;for(let H=0;H<k.count;H++){const ee=H*F;b===!0&&(r.fromBufferAttribute(k,H),k.normalized===!0&&Wr(r,k),N[J+ee+0]=r.x,N[J+ee+1]=r.y,N[J+ee+2]=r.z,N[J+ee+3]=0),_===!0&&(r.fromBufferAttribute(U,H),U.normalized===!0&&Wr(r,U),N[J+ee+4]=r.x,N[J+ee+5]=r.y,N[J+ee+6]=r.z,N[J+ee+7]=0),S===!0&&(r.fromBufferAttribute(W,H),W.normalized===!0&&Wr(r,W),N[J+ee+8]=r.x,N[J+ee+9]=r.y,N[J+ee+10]=r.z,N[J+ee+11]=W.itemSize===4?r.w:1)}}v={count:f,texture:P,size:new xe(B,$)},s.set(h,v),h.addEventListener("dispose",I)}let x=0;for(let b=0;b<p.length;b++)x+=p[b];const M=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(l,"morphTargetBaseInfluence",M),u.getUniforms().setValue(l,"morphTargetInfluences",p),u.getUniforms().setValue(l,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(l,"morphTargetsTextureSize",v.size)}else{const m=p===void 0?0:p.length;let f=n[h.id];if(f===void 0||f.length!==m){f=[];for(let _=0;_<m;_++)f[_]=[_,0];n[h.id]=f}for(let _=0;_<m;_++){const S=f[_];S[0]=_,S[1]=p[_]}f.sort(Ep);for(let _=0;_<8;_++)_<m&&f[_][1]?(o[_][0]=f[_][0],o[_][1]=f[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(Sp);const v=h.morphAttributes.position,x=h.morphAttributes.normal;let M=0;for(let _=0;_<8;_++){const S=o[_],R=S[0],y=S[1];R!==Number.MAX_SAFE_INTEGER&&y?(v&&h.getAttribute("morphTarget"+_)!==v[R]&&h.setAttribute("morphTarget"+_,v[R]),x&&h.getAttribute("morphNormal"+_)!==x[R]&&h.setAttribute("morphNormal"+_,x[R]),i[_]=y,M+=y):(v&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),x&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}const b=h.morphTargetsRelative?1:1-M;u.getUniforms().setValue(l,"morphTargetBaseInfluence",b),u.getUniforms().setValue(l,"morphTargetInfluences",i)}}return{update:a}}function Ap(l,e,t,n){let i=new WeakMap;function s(a){const c=n.render.frame,h=a.geometry,d=e.get(a,h);return i.get(d)!==c&&(e.update(d),i.set(d,c)),a.isInstancedMesh&&(a.hasEventListener("dispose",o)===!1&&a.addEventListener("dispose",o),t.update(a.instanceMatrix,34962),a.instanceColor!==null&&t.update(a.instanceColor,34962)),d}function r(){i=new WeakMap}function o(a){const c=a.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}const _c=new vt,yc=new uc,bc=new gu,wc=new vc,Ua=[],ka=[],Va=new Float32Array(16),Ga=new Float32Array(9),Ha=new Float32Array(4);function Gi(l,e,t){const n=l[0];if(n<=0||n>0)return l;const i=e*t;let s=Ua[i];if(s===void 0&&(s=new Float32Array(i),Ua[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,l[r].toArray(s,o)}return s}function yt(l,e){if(l.length!==e.length)return!1;for(let t=0,n=l.length;t<n;t++)if(l[t]!==e[t])return!1;return!0}function bt(l,e){for(let t=0,n=e.length;t<n;t++)l[t]=e[t]}function rr(l,e){let t=ka[e];t===void 0&&(t=new Int32Array(e),ka[e]=t);for(let n=0;n!==e;++n)t[n]=l.allocateTextureUnit();return t}function Cp(l,e){const t=this.cache;t[0]!==e&&(l.uniform1f(this.addr,e),t[0]=e)}function Lp(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(l.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;l.uniform2fv(this.addr,e),bt(t,e)}}function Rp(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(l.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(l.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;l.uniform3fv(this.addr,e),bt(t,e)}}function Pp(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(l.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;l.uniform4fv(this.addr,e),bt(t,e)}}function Ip(l,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;l.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;Ha.set(n),l.uniformMatrix2fv(this.addr,!1,Ha),bt(t,n)}}function Dp(l,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;l.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;Ga.set(n),l.uniformMatrix3fv(this.addr,!1,Ga),bt(t,n)}}function Np(l,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;l.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;Va.set(n),l.uniformMatrix4fv(this.addr,!1,Va),bt(t,n)}}function Fp(l,e){const t=this.cache;t[0]!==e&&(l.uniform1i(this.addr,e),t[0]=e)}function zp(l,e){const t=this.cache;yt(t,e)||(l.uniform2iv(this.addr,e),bt(t,e))}function Op(l,e){const t=this.cache;yt(t,e)||(l.uniform3iv(this.addr,e),bt(t,e))}function Bp(l,e){const t=this.cache;yt(t,e)||(l.uniform4iv(this.addr,e),bt(t,e))}function Up(l,e){const t=this.cache;t[0]!==e&&(l.uniform1ui(this.addr,e),t[0]=e)}function kp(l,e){const t=this.cache;yt(t,e)||(l.uniform2uiv(this.addr,e),bt(t,e))}function Vp(l,e){const t=this.cache;yt(t,e)||(l.uniform3uiv(this.addr,e),bt(t,e))}function Gp(l,e){const t=this.cache;yt(t,e)||(l.uniform4uiv(this.addr,e),bt(t,e))}function Hp(l,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||_c,i)}function Wp(l,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||bc,i)}function qp(l,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||wc,i)}function jp(l,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||yc,i)}function Xp(l){switch(l){case 5126:return Cp;case 35664:return Lp;case 35665:return Rp;case 35666:return Pp;case 35674:return Ip;case 35675:return Dp;case 35676:return Np;case 5124:case 35670:return Fp;case 35667:case 35671:return zp;case 35668:case 35672:return Op;case 35669:case 35673:return Bp;case 5125:return Up;case 36294:return kp;case 36295:return Vp;case 36296:return Gp;case 35678:case 36198:case 36298:case 36306:case 35682:return Hp;case 35679:case 36299:case 36307:return Wp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return jp}}function Yp(l,e){l.uniform1fv(this.addr,e)}function $p(l,e){const t=Gi(e,this.size,2);l.uniform2fv(this.addr,t)}function Kp(l,e){const t=Gi(e,this.size,3);l.uniform3fv(this.addr,t)}function Zp(l,e){const t=Gi(e,this.size,4);l.uniform4fv(this.addr,t)}function Jp(l,e){const t=Gi(e,this.size,4);l.uniformMatrix2fv(this.addr,!1,t)}function Qp(l,e){const t=Gi(e,this.size,9);l.uniformMatrix3fv(this.addr,!1,t)}function em(l,e){const t=Gi(e,this.size,16);l.uniformMatrix4fv(this.addr,!1,t)}function tm(l,e){l.uniform1iv(this.addr,e)}function nm(l,e){l.uniform2iv(this.addr,e)}function im(l,e){l.uniform3iv(this.addr,e)}function sm(l,e){l.uniform4iv(this.addr,e)}function rm(l,e){l.uniform1uiv(this.addr,e)}function om(l,e){l.uniform2uiv(this.addr,e)}function am(l,e){l.uniform3uiv(this.addr,e)}function lm(l,e){l.uniform4uiv(this.addr,e)}function cm(l,e,t){const n=e.length,i=rr(t,n);l.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||_c,i[s])}function hm(l,e,t){const n=e.length,i=rr(t,n);l.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||bc,i[s])}function um(l,e,t){const n=e.length,i=rr(t,n);l.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||wc,i[s])}function dm(l,e,t){const n=e.length,i=rr(t,n);l.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||yc,i[s])}function fm(l){switch(l){case 5126:return Yp;case 35664:return $p;case 35665:return Kp;case 35666:return Zp;case 35674:return Jp;case 35675:return Qp;case 35676:return em;case 5124:case 35670:return tm;case 35667:case 35671:return nm;case 35668:case 35672:return im;case 35669:case 35673:return sm;case 5125:return rm;case 36294:return om;case 36295:return am;case 36296:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return cm;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return um;case 36289:case 36303:case 36311:case 36292:return dm}}class pm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Xp(t.type)}}class mm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=fm(t.type)}}class gm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const qr=/(\w+)(\])?(\[|\.)?/g;function Wa(l,e){l.seq.push(e),l.map[e.id]=e}function vm(l,e,t){const n=l.name,i=n.length;for(qr.lastIndex=0;;){const s=qr.exec(n),r=qr.lastIndex;let o=s[1];const a=s[2]==="]",c=s[3];if(a&&(o=o|0),c===void 0||c==="["&&r+2===i){Wa(t,c===void 0?new pm(o,l,e):new mm(o,l,e));break}else{let d=t.map[o];d===void 0&&(d=new gm(o),Wa(t,d)),t=d}}}class Qs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);vm(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const o=t[s],a=n[o.id];a.needsUpdate!==!1&&o.setValue(e,a.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function qa(l,e,t){const n=l.createShader(e);return l.shaderSource(n,t),l.compileShader(n),n}let xm=0;function _m(l,e){const t=l.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}function ym(l){switch(l){case Qn:return["Linear","( value )"];case ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",l),["Linear","( value )"]}}function ja(l,e,t){const n=l.getShaderParameter(e,35713),i=l.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+_m(l.getShaderSource(e),r)}else return i}function bm(l,e){const t=ym(e);return"vec4 "+l+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function wm(l,e){let t;switch(e){case Ch:t="Linear";break;case Lh:t="Reinhard";break;case Rh:t="OptimizedCineon";break;case Ph:t="ACESFilmic";break;case Ih:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+l+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Mm(l){return[l.extensionDerivatives||!!l.envMapCubeUVHeight||l.bumpMap||l.tangentSpaceNormalMap||l.clearcoatNormalMap||l.flatShading||l.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(l.extensionFragDepth||l.logarithmicDepthBuffer)&&l.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",l.extensionDrawBuffers&&l.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(l.extensionShaderTextureLOD||l.envMap||l.transmission)&&l.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ss).join(`
`)}function Sm(l){const e=[];for(const t in l){const n=l[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Em(l,e){const t={},n=l.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=l.getActiveAttrib(e,i),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[r]={type:s.type,location:l.getAttribLocation(e,r),locationSize:o}}return t}function ss(l){return l!==""}function Xa(l,e){return l.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ya(l,e){return l.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Tm=/^[ \t]*#include +<([\w\d./]+)>/gm;function fo(l){return l.replace(Tm,Am)}function Am(l,e){const t=Le[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return fo(t)}const Cm=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $a(l){return l.replace(Lm,Mc).replace(Cm,Rm)}function Rm(l,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Mc(l,e,t,n)}function Mc(l,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ka(l){let e="precision "+l.precision+` float;
precision `+l.precision+" int;";return l.precision==="highp"?e+=`
#define HIGH_PRECISION`:l.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Pm(l){let e="SHADOWMAP_TYPE_BASIC";return l.shadowMapType===Jl?e="SHADOWMAP_TYPE_PCF":l.shadowMapType===rh?e="SHADOWMAP_TYPE_PCF_SOFT":l.shadowMapType===is&&(e="SHADOWMAP_TYPE_VSM"),e}function Im(l){let e="ENVMAP_TYPE_CUBE";if(l.envMap)switch(l.envMapMode){case Ri:case Pi:e="ENVMAP_TYPE_CUBE";break;case ir:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dm(l){let e="ENVMAP_MODE_REFLECTION";if(l.envMap)switch(l.envMapMode){case Pi:e="ENVMAP_MODE_REFRACTION";break}return e}function Nm(l){let e="ENVMAP_BLENDING_NONE";if(l.envMap)switch(l.combine){case tc:e="ENVMAP_BLENDING_MULTIPLY";break;case Th:e="ENVMAP_BLENDING_MIX";break;case Ah:e="ENVMAP_BLENDING_ADD";break}return e}function Fm(l){const e=l.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function zm(l,e,t,n){const i=l.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const a=Pm(t),c=Im(t),h=Dm(t),d=Nm(t),u=Fm(t),p=t.isWebGL2?"":Mm(t),g=Sm(s),m=i.createProgram();let f,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(ss).join(`
`),f.length>0&&(f+=`
`),v=[p,g].filter(ss).join(`
`),v.length>0&&(v+=`
`)):(f=[Ka(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),v=[p,Ka(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?Le.tonemapping_pars_fragment:"",t.toneMapping!==_n?wm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.encodings_pars_fragment,bm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ss).join(`
`)),r=fo(r),r=Xa(r,t),r=Ya(r,t),o=fo(o),o=Xa(o,t),o=Ya(o,t),r=$a(r),o=$a(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["#define varying in",t.glslVersion===_a?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_a?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=x+f+r,b=x+v+o,_=qa(i,35633,M),S=qa(i,35632,b);if(i.attachShader(m,_),i.attachShader(m,S),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),l.debug.checkShaderErrors){const C=i.getProgramInfoLog(m).trim(),O=i.getShaderInfoLog(_).trim(),B=i.getShaderInfoLog(S).trim();let $=!0,N=!0;if(i.getProgramParameter(m,35714)===!1){$=!1;const P=ja(i,_,"vertex"),F=ja(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+C+`
`+P+`
`+F)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(O===""||B==="")&&(N=!1);N&&(this.diagnostics={runnable:$,programLog:C,vertexShader:{log:O,prefix:f},fragmentShader:{log:B,prefix:v}})}i.deleteShader(_),i.deleteShader(S);let R;this.getUniforms=function(){return R===void 0&&(R=new Qs(i,m)),R};let y;return this.getAttributes=function(){return y===void 0&&(y=Em(i,m)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=xm++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=_,this.fragmentShader=S,this}let Om=0;class Bm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Um(e);t.set(e,n)}return t.get(e)}}class Um{constructor(e){this.id=Om++,this.code=e,this.usedTimes=0}}function km(l,e,t,n,i,s,r){const o=new dc,a=new Bm,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y,C,O,B,$){const N=B.fog,P=$.geometry,F=y.isMeshStandardMaterial?B.environment:null,I=(y.isMeshStandardMaterial?t:e).get(y.envMap||F),q=!!I&&I.mapping===ir?I.image.height:null,k=g[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const U=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,W=U!==void 0?U.length:0;let J=0;P.morphAttributes.position!==void 0&&(J=1),P.morphAttributes.normal!==void 0&&(J=2),P.morphAttributes.color!==void 0&&(J=3);let H,ee,fe,ve;if(k){const ke=Zt[k];H=ke.vertexShader,ee=ke.fragmentShader}else H=y.vertexShader,ee=y.fragmentShader,a.update(y),fe=a.getVertexShaderID(y),ve=a.getFragmentShaderID(y);const K=l.getRenderTarget(),Ie=y.alphaTest>0,_e=y.clearcoat>0,we=y.iridescence>0;return{isWebGL2:h,shaderID:k,shaderName:y.type,vertexShader:H,fragmentShader:ee,defines:y.defines,customVertexShaderID:fe,customFragmentShaderID:ve,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:$.isInstancedMesh===!0,instancingColor:$.isInstancedMesh===!0&&$.instanceColor!==null,supportsVertexTextures:u,outputEncoding:K===null?l.outputEncoding:K.isXRRenderTarget===!0?K.texture.encoding:Qn,map:!!y.map,matcap:!!y.matcap,envMap:!!I,envMapMode:I&&I.mapping,envMapCubeUVHeight:q,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Jh,tangentSpaceNormalMap:y.normalMapType===bo,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===ze,clearcoat:_e,clearcoatMap:_e&&!!y.clearcoatMap,clearcoatRoughnessMap:_e&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:_e&&!!y.clearcoatNormalMap,iridescence:we,iridescenceMap:we&&!!y.iridescenceMap,iridescenceThicknessMap:we&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Ai,alphaMap:!!y.alphaMap,alphaTest:Ie,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!P.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!N,useFog:y.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:d,skinning:$.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:J,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:l.shadowMap.enabled&&O.length>0,shadowMapType:l.shadowMap.type,toneMapping:y.toneMapped?l.toneMapping:_n,physicallyCorrectLights:l.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Zn,flipSided:y.side===qt,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const O in y.defines)C.push(O),C.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(v(C,y),x(C,y),C.push(l.outputEncoding)),C.push(y.customProgramCacheKey),C.join()}function v(y,C){y.push(C.precision),y.push(C.outputEncoding),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.combine),y.push(C.vertexUvs),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function x(y,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.map&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.lightMap&&o.enable(7),C.aoMap&&o.enable(8),C.emissiveMap&&o.enable(9),C.bumpMap&&o.enable(10),C.normalMap&&o.enable(11),C.objectSpaceNormalMap&&o.enable(12),C.tangentSpaceNormalMap&&o.enable(13),C.clearcoat&&o.enable(14),C.clearcoatMap&&o.enable(15),C.clearcoatRoughnessMap&&o.enable(16),C.clearcoatNormalMap&&o.enable(17),C.iridescence&&o.enable(18),C.iridescenceMap&&o.enable(19),C.iridescenceThicknessMap&&o.enable(20),C.displacementMap&&o.enable(21),C.specularMap&&o.enable(22),C.roughnessMap&&o.enable(23),C.metalnessMap&&o.enable(24),C.gradientMap&&o.enable(25),C.alphaMap&&o.enable(26),C.alphaTest&&o.enable(27),C.vertexColors&&o.enable(28),C.vertexAlphas&&o.enable(29),C.vertexUvs&&o.enable(30),C.vertexTangents&&o.enable(31),C.uvsVertexOnly&&o.enable(32),C.fog&&o.enable(33),y.push(o.mask),o.disableAll(),C.useFog&&o.enable(0),C.flatShading&&o.enable(1),C.logarithmicDepthBuffer&&o.enable(2),C.skinning&&o.enable(3),C.morphTargets&&o.enable(4),C.morphNormals&&o.enable(5),C.morphColors&&o.enable(6),C.premultipliedAlpha&&o.enable(7),C.shadowMapEnabled&&o.enable(8),C.physicallyCorrectLights&&o.enable(9),C.doubleSided&&o.enable(10),C.flipSided&&o.enable(11),C.useDepthPacking&&o.enable(12),C.dithering&&o.enable(13),C.specularIntensityMap&&o.enable(14),C.specularColorMap&&o.enable(15),C.transmission&&o.enable(16),C.transmissionMap&&o.enable(17),C.thicknessMap&&o.enable(18),C.sheen&&o.enable(19),C.sheenColorMap&&o.enable(20),C.sheenRoughnessMap&&o.enable(21),C.decodeVideoTexture&&o.enable(22),C.opaque&&o.enable(23),y.push(o.mask)}function M(y){const C=g[y.type];let O;if(C){const B=Zt[C];O=mc.clone(B.uniforms)}else O=y.uniforms;return O}function b(y,C){let O;for(let B=0,$=c.length;B<$;B++){const N=c[B];if(N.cacheKey===C){O=N,++O.usedTimes;break}}return O===void 0&&(O=new zm(l,C,y,s),c.push(O)),O}function _(y){if(--y.usedTimes===0){const C=c.indexOf(y);c[C]=c[c.length-1],c.pop(),y.destroy()}}function S(y){a.remove(y)}function R(){a.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:b,releaseProgram:_,releaseShaderCache:S,programs:c,dispose:R}}function Vm(){let l=new WeakMap;function e(s){let r=l.get(s);return r===void 0&&(r={},l.set(s,r)),r}function t(s){l.delete(s)}function n(s,r,o){l.get(s)[r]=o}function i(){l=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Gm(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.material.id!==e.material.id?l.material.id-e.material.id:l.z!==e.z?l.z-e.z:l.id-e.id}function Za(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.z!==e.z?e.z-l.z:l.id-e.id}function Ja(){const l=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(d,u,p,g,m,f){let v=l[e];return v===void 0?(v={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:m,group:f},l[e]=v):(v.id=d.id,v.object=d,v.geometry=u,v.material=p,v.groupOrder=g,v.renderOrder=d.renderOrder,v.z=m,v.group=f),e++,v}function o(d,u,p,g,m,f){const v=r(d,u,p,g,m,f);p.transmission>0?n.push(v):p.transparent===!0?i.push(v):t.push(v)}function a(d,u,p,g,m,f){const v=r(d,u,p,g,m,f);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):t.unshift(v)}function c(d,u){t.length>1&&t.sort(d||Gm),n.length>1&&n.sort(u||Za),i.length>1&&i.sort(u||Za)}function h(){for(let d=e,u=l.length;d<u;d++){const p=l[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:a,finish:h,sort:c}}function Hm(){let l=new WeakMap;function e(n,i){let s;return l.has(n)===!1?(s=new Ja,l.set(n,[s])):i>=l.get(n).length?(s=new Ja,l.get(n).push(s)):s=l.get(n)[i],s}function t(){l=new WeakMap}return{get:e,dispose:t}}function Wm(){const l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Se};break;case"SpotLight":t={position:new D,direction:new D,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new D,halfWidth:new D,halfHeight:new D};break}return l[e.id]=t,t}}}function qm(){const l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[e.id]=t,t}}}let jm=0;function Xm(l,e){return(e.castShadow?1:0)-(l.castShadow?1:0)}function Ym(l,e){const t=new Wm,n=qm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new D);const s=new D,r=new Oe,o=new Oe;function a(h,d){let u=0,p=0,g=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let m=0,f=0,v=0,x=0,M=0,b=0,_=0,S=0;h.sort(Xm);const R=d!==!0?Math.PI:1;for(let C=0,O=h.length;C<O;C++){const B=h[C],$=B.color,N=B.intensity,P=B.distance,F=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)u+=$.r*N*R,p+=$.g*N*R,g+=$.b*N*R;else if(B.isLightProbe)for(let I=0;I<9;I++)i.probe[I].addScaledVector(B.sh.coefficients[I],N);else if(B.isDirectionalLight){const I=t.get(B);if(I.color.copy(B.color).multiplyScalar(B.intensity*R),B.castShadow){const q=B.shadow,k=n.get(B);k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,i.directionalShadow[m]=k,i.directionalShadowMap[m]=F,i.directionalShadowMatrix[m]=B.shadow.matrix,b++}i.directional[m]=I,m++}else if(B.isSpotLight){const I=t.get(B);if(I.position.setFromMatrixPosition(B.matrixWorld),I.color.copy($).multiplyScalar(N*R),I.distance=P,I.coneCos=Math.cos(B.angle),I.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),I.decay=B.decay,B.castShadow){const q=B.shadow,k=n.get(B);k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,i.spotShadow[v]=k,i.spotShadowMap[v]=F,i.spotShadowMatrix[v]=B.shadow.matrix,S++}i.spot[v]=I,v++}else if(B.isRectAreaLight){const I=t.get(B);I.color.copy($).multiplyScalar(N),I.halfWidth.set(B.width*.5,0,0),I.halfHeight.set(0,B.height*.5,0),i.rectArea[x]=I,x++}else if(B.isPointLight){const I=t.get(B);if(I.color.copy(B.color).multiplyScalar(B.intensity*R),I.distance=B.distance,I.decay=B.decay,B.castShadow){const q=B.shadow,k=n.get(B);k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,k.shadowCameraNear=q.camera.near,k.shadowCameraFar=q.camera.far,i.pointShadow[f]=k,i.pointShadowMap[f]=F,i.pointShadowMatrix[f]=B.shadow.matrix,_++}i.point[f]=I,f++}else if(B.isHemisphereLight){const I=t.get(B);I.skyColor.copy(B.color).multiplyScalar(N*R),I.groundColor.copy(B.groundColor).multiplyScalar(N*R),i.hemi[M]=I,M++}}x>0&&(e.isWebGL2||l.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):l.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=g;const y=i.hash;(y.directionalLength!==m||y.pointLength!==f||y.spotLength!==v||y.rectAreaLength!==x||y.hemiLength!==M||y.numDirectionalShadows!==b||y.numPointShadows!==_||y.numSpotShadows!==S)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=x,i.point.length=f,i.hemi.length=M,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=_,i.spotShadowMatrix.length=S,y.directionalLength=m,y.pointLength=f,y.spotLength=v,y.rectAreaLength=x,y.hemiLength=M,y.numDirectionalShadows=b,y.numPointShadows=_,y.numSpotShadows=S,i.version=jm++)}function c(h,d){let u=0,p=0,g=0,m=0,f=0;const v=d.matrixWorldInverse;for(let x=0,M=h.length;x<M;x++){const b=h[x];if(b.isDirectionalLight){const _=i.directional[u];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(v),u++}else if(b.isSpotLight){const _=i.spot[g];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(v),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(v),g++}else if(b.isRectAreaLight){const _=i.rectArea[m];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(v),o.identity(),r.copy(b.matrixWorld),r.premultiply(v),o.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(b.isPointLight){const _=i.point[p];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(v),p++}else if(b.isHemisphereLight){const _=i.hemi[f];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(v),f++}}}return{setup:a,setupView:c,state:i}}function Qa(l,e){const t=new Ym(l,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(d){n.push(d)}function o(d){i.push(d)}function a(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function $m(l,e){let t=new WeakMap;function n(s,r=0){let o;return t.has(s)===!1?(o=new Qa(l,e),t.set(s,[o])):r>=t.get(s).length?(o=new Qa(l,e),t.get(s).push(o)):o=t.get(s)[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class Km extends Jt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zm extends Jt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eg(l,e,t){let n=new So;const i=new xe,s=new xe,r=new We,o=new Km({depthPacking:Zh}),a=new Zm,c={},h=t.maxTextureSize,d={0:qt,1:Li,2:Zn},u=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:Jm,fragmentShader:Qm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Mt;g.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new gt(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jl,this.render=function(b,_,S){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const R=l.getRenderTarget(),y=l.getActiveCubeFace(),C=l.getActiveMipmapLevel(),O=l.state;O.setBlending(Nn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let B=0,$=b.length;B<$;B++){const N=b[B],P=N.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const F=P.getFrameExtents();if(i.multiply(F),s.copy(P.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/F.x),i.x=s.x*F.x,P.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/F.y),i.y=s.y*F.y,P.mapSize.y=s.y)),P.map===null){const q=this.type!==is?{minFilter:ut,magFilter:ut}:{};P.map=new yn(i.x,i.y,q),P.map.texture.name=N.name+".shadowMap",P.camera.updateProjectionMatrix()}l.setRenderTarget(P.map),l.clear();const I=P.getViewportCount();for(let q=0;q<I;q++){const k=P.getViewport(q);r.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),O.viewport(r),P.updateMatrices(N,q),n=P.getFrustum(),M(_,S,P.camera,N,this.type)}P.isPointLightShadow!==!0&&this.type===is&&v(P,S),P.needsUpdate=!1}f.needsUpdate=!1,l.setRenderTarget(R,y,C)};function v(b,_){const S=e.update(m);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new yn(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,l.setRenderTarget(b.mapPass),l.clear(),l.renderBufferDirect(_,null,S,u,m,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,l.setRenderTarget(b.map),l.clear(),l.renderBufferDirect(_,null,S,p,m,null)}function x(b,_,S,R,y,C){let O=null;const B=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(B!==void 0?O=B:O=S.isPointLight===!0?a:o,l.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0){const $=O.uuid,N=_.uuid;let P=c[$];P===void 0&&(P={},c[$]=P);let F=P[N];F===void 0&&(F=O.clone(),P[N]=F),O=F}return O.visible=_.visible,O.wireframe=_.wireframe,C===is?O.side=_.shadowSide!==null?_.shadowSide:_.side:O.side=_.shadowSide!==null?_.shadowSide:d[_.side],O.alphaMap=_.alphaMap,O.alphaTest=_.alphaTest,O.clipShadows=_.clipShadows,O.clippingPlanes=_.clippingPlanes,O.clipIntersection=_.clipIntersection,O.displacementMap=_.displacementMap,O.displacementScale=_.displacementScale,O.displacementBias=_.displacementBias,O.wireframeLinewidth=_.wireframeLinewidth,O.linewidth=_.linewidth,S.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(S.matrixWorld),O.nearDistance=R,O.farDistance=y),O}function M(b,_,S,R,y){if(b.visible===!1)return;if(b.layers.test(_.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===is)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const B=e.update(b),$=b.material;if(Array.isArray($)){const N=B.groups;for(let P=0,F=N.length;P<F;P++){const I=N[P],q=$[I.materialIndex];if(q&&q.visible){const k=x(b,q,R,S.near,S.far,y);l.renderBufferDirect(S,null,B,k,b,I)}}}else if($.visible){const N=x(b,$,R,S.near,S.far,y);l.renderBufferDirect(S,null,B,N,b,null)}}const O=b.children;for(let B=0,$=O.length;B<$;B++)M(O[B],_,S,R,y)}}function tg(l,e,t){const n=t.isWebGL2;function i(){let z=!1;const re=new We;let X=null;const de=new We(0,0,0,0);return{setMask:function(he){X!==he&&!z&&(l.colorMask(he,he,he,he),X=he)},setLocked:function(he){z=he},setClear:function(he,Ne,ot,$e,bn){bn===!0&&(he*=$e,Ne*=$e,ot*=$e),re.set(he,Ne,ot,$e),de.equals(re)===!1&&(l.clearColor(he,Ne,ot,$e),de.copy(re))},reset:function(){z=!1,X=null,de.set(-1,0,0,0)}}}function s(){let z=!1,re=null,X=null,de=null;return{setTest:function(he){he?Ie(2929):_e(2929)},setMask:function(he){re!==he&&!z&&(l.depthMask(he),re=he)},setFunc:function(he){if(X!==he){if(he)switch(he){case _h:l.depthFunc(512);break;case yh:l.depthFunc(519);break;case bh:l.depthFunc(513);break;case so:l.depthFunc(515);break;case wh:l.depthFunc(514);break;case Mh:l.depthFunc(518);break;case Sh:l.depthFunc(516);break;case Eh:l.depthFunc(517);break;default:l.depthFunc(515)}else l.depthFunc(515);X=he}},setLocked:function(he){z=he},setClear:function(he){de!==he&&(l.clearDepth(he),de=he)},reset:function(){z=!1,re=null,X=null,de=null}}}function r(){let z=!1,re=null,X=null,de=null,he=null,Ne=null,ot=null,$e=null,bn=null;return{setTest:function(Xe){z||(Xe?Ie(2960):_e(2960))},setMask:function(Xe){re!==Xe&&!z&&(l.stencilMask(Xe),re=Xe)},setFunc:function(Xe,sn,It){(X!==Xe||de!==sn||he!==It)&&(l.stencilFunc(Xe,sn,It),X=Xe,de=sn,he=It)},setOp:function(Xe,sn,It){(Ne!==Xe||ot!==sn||$e!==It)&&(l.stencilOp(Xe,sn,It),Ne=Xe,ot=sn,$e=It)},setLocked:function(Xe){z=Xe},setClear:function(Xe){bn!==Xe&&(l.clearStencil(Xe),bn=Xe)},reset:function(){z=!1,re=null,X=null,de=null,he=null,Ne=null,ot=null,$e=null,bn=null}}}const o=new i,a=new s,c=new r,h=new WeakMap,d=new WeakMap;let u={},p={},g=new WeakMap,m=[],f=null,v=!1,x=null,M=null,b=null,_=null,S=null,R=null,y=null,C=!1,O=null,B=null,$=null,N=null,P=null;const F=l.getParameter(35661);let I=!1,q=0;const k=l.getParameter(7938);k.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(k)[1]),I=q>=1):k.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),I=q>=2);let U=null,W={};const J=l.getParameter(3088),H=l.getParameter(2978),ee=new We().fromArray(J),fe=new We().fromArray(H);function ve(z,re,X){const de=new Uint8Array(4),he=l.createTexture();l.bindTexture(z,he),l.texParameteri(z,10241,9728),l.texParameteri(z,10240,9728);for(let Ne=0;Ne<X;Ne++)l.texImage2D(re+Ne,0,6408,1,1,0,6408,5121,de);return he}const K={};K[3553]=ve(3553,3553,1),K[34067]=ve(34067,34069,6),o.setClear(0,0,0,1),a.setClear(1),c.setClear(0),Ie(2929),a.setFunc(so),nt(!1),St(Ho),Ie(2884),Ze(Nn);function Ie(z){u[z]!==!0&&(l.enable(z),u[z]=!0)}function _e(z){u[z]!==!1&&(l.disable(z),u[z]=!1)}function we(z,re){return p[z]!==re?(l.bindFramebuffer(z,re),p[z]=re,n&&(z===36009&&(p[36160]=re),z===36160&&(p[36009]=re)),!0):!1}function me(z,re){let X=m,de=!1;if(z)if(X=g.get(re),X===void 0&&(X=[],g.set(re,X)),z.isWebGLMultipleRenderTargets){const he=z.texture;if(X.length!==he.length||X[0]!==36064){for(let Ne=0,ot=he.length;Ne<ot;Ne++)X[Ne]=36064+Ne;X.length=he.length,de=!0}}else X[0]!==36064&&(X[0]=36064,de=!0);else X[0]!==1029&&(X[0]=1029,de=!0);de&&(t.isWebGL2?l.drawBuffers(X):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(X))}function ke(z){return f!==z?(l.useProgram(z),f=z,!0):!1}const Te={[Ei]:32774,[lh]:32778,[ch]:32779};if(n)Te[Xo]=32775,Te[Yo]=32776;else{const z=e.get("EXT_blend_minmax");z!==null&&(Te[Xo]=z.MIN_EXT,Te[Yo]=z.MAX_EXT)}const ge={[hh]:0,[uh]:1,[dh]:768,[Ql]:770,[xh]:776,[gh]:774,[ph]:772,[fh]:769,[ec]:771,[vh]:775,[mh]:773};function Ze(z,re,X,de,he,Ne,ot,$e){if(z===Nn){v===!0&&(_e(3042),v=!1);return}if(v===!1&&(Ie(3042),v=!0),z!==ah){if(z!==x||$e!==C){if((M!==Ei||S!==Ei)&&(l.blendEquation(32774),M=Ei,S=Ei),$e)switch(z){case Ai:l.blendFuncSeparate(1,771,1,771);break;case Wo:l.blendFunc(1,1);break;case qo:l.blendFuncSeparate(0,769,0,1);break;case jo:l.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ai:l.blendFuncSeparate(770,771,1,771);break;case Wo:l.blendFunc(770,1);break;case qo:l.blendFuncSeparate(0,769,0,1);break;case jo:l.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}b=null,_=null,R=null,y=null,x=z,C=$e}return}he=he||re,Ne=Ne||X,ot=ot||de,(re!==M||he!==S)&&(l.blendEquationSeparate(Te[re],Te[he]),M=re,S=he),(X!==b||de!==_||Ne!==R||ot!==y)&&(l.blendFuncSeparate(ge[X],ge[de],ge[Ne],ge[ot]),b=X,_=de,R=Ne,y=ot),x=z,C=null}function ht(z,re){z.side===Zn?_e(2884):Ie(2884);let X=z.side===qt;re&&(X=!X),nt(X),z.blending===Ai&&z.transparent===!1?Ze(Nn):Ze(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),o.setMask(z.colorWrite);const de=z.stencilWrite;c.setTest(de),de&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ve(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Ie(32926):_e(32926)}function nt(z){O!==z&&(z?l.frontFace(2304):l.frontFace(2305),O=z)}function St(z){z!==ih?(Ie(2884),z!==B&&(z===Ho?l.cullFace(1029):z===sh?l.cullFace(1028):l.cullFace(1032))):_e(2884),B=z}function it(z){z!==$&&(I&&l.lineWidth(z),$=z)}function Ve(z,re,X){z?(Ie(32823),(N!==re||P!==X)&&(l.polygonOffset(re,X),N=re,P=X)):_e(32823)}function Pt(z){z?Ie(3089):_e(3089)}function Et(z){z===void 0&&(z=33984+F-1),U!==z&&(l.activeTexture(z),U=z)}function L(z,re){U===null&&Et();let X=W[U];X===void 0&&(X={type:void 0,texture:void 0},W[U]=X),(X.type!==z||X.texture!==re)&&(l.bindTexture(z,re||K[z]),X.type=z,X.texture=re)}function E(){const z=W[U];z!==void 0&&z.type!==void 0&&(l.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Y(){try{l.compressedTexImage2D.apply(l,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function te(){try{l.texSubImage2D.apply(l,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(){try{l.texSubImage3D.apply(l,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{l.compressedTexSubImage2D.apply(l,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ye(){try{l.texStorage2D.apply(l,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function T(){try{l.texStorage3D.apply(l,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{l.texImage2D.apply(l,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{l.texImage3D.apply(l,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(z){ee.equals(z)===!1&&(l.scissor(z.x,z.y,z.z,z.w),ee.copy(z))}function ae(z){fe.equals(z)===!1&&(l.viewport(z.x,z.y,z.z,z.w),fe.copy(z))}function be(z,re){let X=d.get(re);X===void 0&&(X=new WeakMap,d.set(re,X));let de=X.get(z);de===void 0&&(de=l.getUniformBlockIndex(re,z.name),X.set(z,de))}function Pe(z,re){const de=d.get(re).get(z);h.get(z)!==de&&(l.uniformBlockBinding(re,de,z.__bindingPointIndex),h.set(z,de))}function je(){l.disable(3042),l.disable(2884),l.disable(2929),l.disable(32823),l.disable(3089),l.disable(2960),l.disable(32926),l.blendEquation(32774),l.blendFunc(1,0),l.blendFuncSeparate(1,0,1,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(513),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(519,0,4294967295),l.stencilOp(7680,7680,7680),l.clearStencil(0),l.cullFace(1029),l.frontFace(2305),l.polygonOffset(0,0),l.activeTexture(33984),l.bindFramebuffer(36160,null),n===!0&&(l.bindFramebuffer(36009,null),l.bindFramebuffer(36008,null)),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),u={},U=null,W={},p={},g=new WeakMap,m=[],f=null,v=!1,x=null,M=null,b=null,_=null,S=null,R=null,y=null,C=!1,O=null,B=null,$=null,N=null,P=null,ee.set(0,0,l.canvas.width,l.canvas.height),fe.set(0,0,l.canvas.width,l.canvas.height),o.reset(),a.reset(),c.reset()}return{buffers:{color:o,depth:a,stencil:c},enable:Ie,disable:_e,bindFramebuffer:we,drawBuffers:me,useProgram:ke,setBlending:Ze,setMaterial:ht,setFlipSided:nt,setCullFace:St,setLineWidth:it,setPolygonOffset:Ve,setScissorTest:Pt,activeTexture:Et,bindTexture:L,unbindTexture:E,compressedTexImage2D:Y,texImage2D:Q,texImage3D:ie,updateUBOMapping:be,uniformBlockBinding:Pe,texStorage2D:ye,texStorage3D:T,texSubImage2D:te,texSubImage3D:ne,compressedTexSubImage2D:le,scissor:ce,viewport:ae,reset:je}}function ng(l,e,t,n,i,s,r){const o=i.isWebGL2,a=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const f=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,E){return v?new OffscreenCanvas(L,E):ds("canvas")}function M(L,E,Y,te){let ne=1;if((L.width>te||L.height>te)&&(ne=te/Math.max(L.width,L.height)),ne<1||E===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const le=E?er:Math.floor,ye=le(ne*L.width),T=le(ne*L.height);m===void 0&&(m=x(ye,T));const Q=Y?x(ye,T):m;return Q.width=ye,Q.height=T,Q.getContext("2d").drawImage(L,0,0,ye,T),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+ye+"x"+T+")."),Q}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function b(L){return uo(L.width)&&uo(L.height)}function _(L){return o?!1:L.wrapS!==Ft||L.wrapT!==Ft||L.minFilter!==ut&&L.minFilter!==pt}function S(L,E){return L.generateMipmaps&&E&&L.minFilter!==ut&&L.minFilter!==pt}function R(L){l.generateMipmap(L)}function y(L,E,Y,te,ne=!1){if(o===!1)return E;if(L!==null){if(l[L]!==void 0)return l[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let le=E;return E===6403&&(Y===5126&&(le=33326),Y===5131&&(le=33325),Y===5121&&(le=33321)),E===33319&&(Y===5126&&(le=33328),Y===5131&&(le=33327),Y===5121&&(le=33323)),E===6408&&(Y===5126&&(le=34836),Y===5131&&(le=34842),Y===5121&&(le=te===ze&&ne===!1?35907:32856),Y===32819&&(le=32854),Y===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function C(L,E,Y){return S(L,Y)===!0||L.isFramebufferTexture&&L.minFilter!==ut&&L.minFilter!==pt?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function O(L){return L===ut||L===ao||L===lo?9728:9729}function B(L){const E=L.target;E.removeEventListener("dispose",B),N(E),E.isVideoTexture&&g.delete(E)}function $(L){const E=L.target;E.removeEventListener("dispose",$),F(E)}function N(L){const E=n.get(L);if(E.__webglInit===void 0)return;const Y=L.source,te=f.get(Y);if(te){const ne=te[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&P(L),Object.keys(te).length===0&&f.delete(Y)}n.remove(L)}function P(L){const E=n.get(L);l.deleteTexture(E.__webglTexture);const Y=L.source,te=f.get(Y);delete te[E.__cacheKey],r.memory.textures--}function F(L){const E=L.texture,Y=n.get(L),te=n.get(E);if(te.__webglTexture!==void 0&&(l.deleteTexture(te.__webglTexture),r.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)l.deleteFramebuffer(Y.__webglFramebuffer[ne]),Y.__webglDepthbuffer&&l.deleteRenderbuffer(Y.__webglDepthbuffer[ne]);else{if(l.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&l.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&l.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ne=0;ne<Y.__webglColorRenderbuffer.length;ne++)Y.__webglColorRenderbuffer[ne]&&l.deleteRenderbuffer(Y.__webglColorRenderbuffer[ne]);Y.__webglDepthRenderbuffer&&l.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ne=0,le=E.length;ne<le;ne++){const ye=n.get(E[ne]);ye.__webglTexture&&(l.deleteTexture(ye.__webglTexture),r.memory.textures--),n.remove(E[ne])}n.remove(E),n.remove(L)}let I=0;function q(){I=0}function k(){const L=I;return L>=a&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a),I+=1,L}function U(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.encoding),E.join()}function W(L,E){const Y=n.get(L);if(L.isVideoTexture&&Pt(L),L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){const te=L.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(Y,L,E);return}}t.activeTexture(33984+E),t.bindTexture(3553,Y.__webglTexture)}function J(L,E){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){_e(Y,L,E);return}t.activeTexture(33984+E),t.bindTexture(35866,Y.__webglTexture)}function H(L,E){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){_e(Y,L,E);return}t.activeTexture(33984+E),t.bindTexture(32879,Y.__webglTexture)}function ee(L,E){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){we(Y,L,E);return}t.activeTexture(33984+E),t.bindTexture(34067,Y.__webglTexture)}const fe={[Ii]:10497,[Ft]:33071,[Di]:33648},ve={[ut]:9728,[ao]:9984,[lo]:9986,[pt]:9729,[ic]:9985,[Ui]:9987};function K(L,E,Y){if(Y?(l.texParameteri(L,10242,fe[E.wrapS]),l.texParameteri(L,10243,fe[E.wrapT]),(L===32879||L===35866)&&l.texParameteri(L,32882,fe[E.wrapR]),l.texParameteri(L,10240,ve[E.magFilter]),l.texParameteri(L,10241,ve[E.minFilter])):(l.texParameteri(L,10242,33071),l.texParameteri(L,10243,33071),(L===32879||L===35866)&&l.texParameteri(L,32882,33071),(E.wrapS!==Ft||E.wrapT!==Ft)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),l.texParameteri(L,10240,O(E.magFilter)),l.texParameteri(L,10241,O(E.minFilter)),E.minFilter!==ut&&E.minFilter!==pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(E.type===Dn&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===cs&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(l.texParameterf(L,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Ie(L,E){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",B));const te=E.source;let ne=f.get(te);ne===void 0&&(ne={},f.set(te,ne));const le=U(E);if(le!==L.__cacheKey){ne[le]===void 0&&(ne[le]={texture:l.createTexture(),usedTimes:0},r.memory.textures++,Y=!0),ne[le].usedTimes++;const ye=ne[L.__cacheKey];ye!==void 0&&(ne[L.__cacheKey].usedTimes--,ye.usedTimes===0&&P(E)),L.__cacheKey=le,L.__webglTexture=ne[le].texture}return Y}function _e(L,E,Y){let te=3553;E.isDataArrayTexture&&(te=35866),E.isData3DTexture&&(te=32879);const ne=Ie(L,E),le=E.source;if(t.activeTexture(33984+Y),t.bindTexture(te,L.__webglTexture),le.version!==le.__currentVersion||ne===!0){l.pixelStorei(37440,E.flipY),l.pixelStorei(37441,E.premultiplyAlpha),l.pixelStorei(3317,E.unpackAlignment),l.pixelStorei(37443,0);const ye=_(E)&&b(E.image)===!1;let T=M(E.image,ye,!1,h);T=Et(E,T);const Q=b(T)||o,ie=s.convert(E.format,E.encoding);let ce=s.convert(E.type),ae=y(E.internalFormat,ie,ce,E.encoding,E.isVideoTexture);K(te,E,Q);let be;const Pe=E.mipmaps,je=o&&E.isVideoTexture!==!0,z=le.__currentVersion===void 0||ne===!0,re=C(E,T,Q);if(E.isDepthTexture)ae=6402,o?E.type===Dn?ae=36012:E.type===qn?ae=33190:E.type===Ci?ae=35056:ae=33189:E.type===Dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Yn&&ae===6402&&E.type!==sc&&E.type!==qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=qn,ce=s.convert(E.type)),E.format===Ni&&ae===6402&&(ae=34041,E.type!==Ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ci,ce=s.convert(E.type))),z&&(je?t.texStorage2D(3553,1,ae,T.width,T.height):t.texImage2D(3553,0,ae,T.width,T.height,0,ie,ce,null));else if(E.isDataTexture)if(Pe.length>0&&Q){je&&z&&t.texStorage2D(3553,re,ae,Pe[0].width,Pe[0].height);for(let X=0,de=Pe.length;X<de;X++)be=Pe[X],je?t.texSubImage2D(3553,X,0,0,be.width,be.height,ie,ce,be.data):t.texImage2D(3553,X,ae,be.width,be.height,0,ie,ce,be.data);E.generateMipmaps=!1}else je?(z&&t.texStorage2D(3553,re,ae,T.width,T.height),t.texSubImage2D(3553,0,0,0,T.width,T.height,ie,ce,T.data)):t.texImage2D(3553,0,ae,T.width,T.height,0,ie,ce,T.data);else if(E.isCompressedTexture){je&&z&&t.texStorage2D(3553,re,ae,Pe[0].width,Pe[0].height);for(let X=0,de=Pe.length;X<de;X++)be=Pe[X],E.format!==Ht?ie!==null?je?t.compressedTexSubImage2D(3553,X,0,0,be.width,be.height,ie,be.data):t.compressedTexImage2D(3553,X,ae,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(3553,X,0,0,be.width,be.height,ie,ce,be.data):t.texImage2D(3553,X,ae,be.width,be.height,0,ie,ce,be.data)}else if(E.isDataArrayTexture)je?(z&&t.texStorage3D(35866,re,ae,T.width,T.height,T.depth),t.texSubImage3D(35866,0,0,0,0,T.width,T.height,T.depth,ie,ce,T.data)):t.texImage3D(35866,0,ae,T.width,T.height,T.depth,0,ie,ce,T.data);else if(E.isData3DTexture)je?(z&&t.texStorage3D(32879,re,ae,T.width,T.height,T.depth),t.texSubImage3D(32879,0,0,0,0,T.width,T.height,T.depth,ie,ce,T.data)):t.texImage3D(32879,0,ae,T.width,T.height,T.depth,0,ie,ce,T.data);else if(E.isFramebufferTexture){if(z)if(je)t.texStorage2D(3553,re,ae,T.width,T.height);else{let X=T.width,de=T.height;for(let he=0;he<re;he++)t.texImage2D(3553,he,ae,X,de,0,ie,ce,null),X>>=1,de>>=1}}else if(Pe.length>0&&Q){je&&z&&t.texStorage2D(3553,re,ae,Pe[0].width,Pe[0].height);for(let X=0,de=Pe.length;X<de;X++)be=Pe[X],je?t.texSubImage2D(3553,X,0,0,ie,ce,be):t.texImage2D(3553,X,ae,ie,ce,be);E.generateMipmaps=!1}else je?(z&&t.texStorage2D(3553,re,ae,T.width,T.height),t.texSubImage2D(3553,0,0,0,ie,ce,T)):t.texImage2D(3553,0,ae,ie,ce,T);S(E,Q)&&R(te),le.__currentVersion=le.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function we(L,E,Y){if(E.image.length!==6)return;const te=Ie(L,E),ne=E.source;if(t.activeTexture(33984+Y),t.bindTexture(34067,L.__webglTexture),ne.version!==ne.__currentVersion||te===!0){l.pixelStorei(37440,E.flipY),l.pixelStorei(37441,E.premultiplyAlpha),l.pixelStorei(3317,E.unpackAlignment),l.pixelStorei(37443,0);const le=E.isCompressedTexture||E.image[0].isCompressedTexture,ye=E.image[0]&&E.image[0].isDataTexture,T=[];for(let X=0;X<6;X++)!le&&!ye?T[X]=M(E.image[X],!1,!0,c):T[X]=ye?E.image[X].image:E.image[X],T[X]=Et(E,T[X]);const Q=T[0],ie=b(Q)||o,ce=s.convert(E.format,E.encoding),ae=s.convert(E.type),be=y(E.internalFormat,ce,ae,E.encoding),Pe=o&&E.isVideoTexture!==!0,je=ne.__currentVersion===void 0||te===!0;let z=C(E,Q,ie);K(34067,E,ie);let re;if(le){Pe&&je&&t.texStorage2D(34067,z,be,Q.width,Q.height);for(let X=0;X<6;X++){re=T[X].mipmaps;for(let de=0;de<re.length;de++){const he=re[de];E.format!==Ht?ce!==null?Pe?t.compressedTexSubImage2D(34069+X,de,0,0,he.width,he.height,ce,he.data):t.compressedTexImage2D(34069+X,de,be,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(34069+X,de,0,0,he.width,he.height,ce,ae,he.data):t.texImage2D(34069+X,de,be,he.width,he.height,0,ce,ae,he.data)}}}else{re=E.mipmaps,Pe&&je&&(re.length>0&&z++,t.texStorage2D(34067,z,be,T[0].width,T[0].height));for(let X=0;X<6;X++)if(ye){Pe?t.texSubImage2D(34069+X,0,0,0,T[X].width,T[X].height,ce,ae,T[X].data):t.texImage2D(34069+X,0,be,T[X].width,T[X].height,0,ce,ae,T[X].data);for(let de=0;de<re.length;de++){const Ne=re[de].image[X].image;Pe?t.texSubImage2D(34069+X,de+1,0,0,Ne.width,Ne.height,ce,ae,Ne.data):t.texImage2D(34069+X,de+1,be,Ne.width,Ne.height,0,ce,ae,Ne.data)}}else{Pe?t.texSubImage2D(34069+X,0,0,0,ce,ae,T[X]):t.texImage2D(34069+X,0,be,ce,ae,T[X]);for(let de=0;de<re.length;de++){const he=re[de];Pe?t.texSubImage2D(34069+X,de+1,0,0,ce,ae,he.image[X]):t.texImage2D(34069+X,de+1,be,ce,ae,he.image[X])}}}S(E,ie)&&R(34067),ne.__currentVersion=ne.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function me(L,E,Y,te,ne){const le=s.convert(Y.format,Y.encoding),ye=s.convert(Y.type),T=y(Y.internalFormat,le,ye,Y.encoding);n.get(E).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,T,E.width,E.height,E.depth,0,le,ye,null):t.texImage2D(ne,0,T,E.width,E.height,0,le,ye,null)),t.bindFramebuffer(36160,L),Ve(E)?u.framebufferTexture2DMultisampleEXT(36160,te,ne,n.get(Y).__webglTexture,0,it(E)):l.framebufferTexture2D(36160,te,ne,n.get(Y).__webglTexture,0),t.bindFramebuffer(36160,null)}function ke(L,E,Y){if(l.bindRenderbuffer(36161,L),E.depthBuffer&&!E.stencilBuffer){let te=33189;if(Y||Ve(E)){const ne=E.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Dn?te=36012:ne.type===qn&&(te=33190));const le=it(E);Ve(E)?u.renderbufferStorageMultisampleEXT(36161,le,te,E.width,E.height):l.renderbufferStorageMultisample(36161,le,te,E.width,E.height)}else l.renderbufferStorage(36161,te,E.width,E.height);l.framebufferRenderbuffer(36160,36096,36161,L)}else if(E.depthBuffer&&E.stencilBuffer){const te=it(E);Y&&Ve(E)===!1?l.renderbufferStorageMultisample(36161,te,35056,E.width,E.height):Ve(E)?u.renderbufferStorageMultisampleEXT(36161,te,35056,E.width,E.height):l.renderbufferStorage(36161,34041,E.width,E.height),l.framebufferRenderbuffer(36160,33306,36161,L)}else{const te=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ne=0;ne<te.length;ne++){const le=te[ne],ye=s.convert(le.format,le.encoding),T=s.convert(le.type),Q=y(le.internalFormat,ye,T,le.encoding),ie=it(E);Y&&Ve(E)===!1?l.renderbufferStorageMultisample(36161,ie,Q,E.width,E.height):Ve(E)?u.renderbufferStorageMultisampleEXT(36161,ie,Q,E.width,E.height):l.renderbufferStorage(36161,Q,E.width,E.height)}}l.bindRenderbuffer(36161,null)}function Te(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);const te=n.get(E.depthTexture).__webglTexture,ne=it(E);if(E.depthTexture.format===Yn)Ve(E)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ne):l.framebufferTexture2D(36160,36096,3553,te,0);else if(E.depthTexture.format===Ni)Ve(E)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ne):l.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function ge(L){const E=n.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Te(E.__webglFramebuffer,L)}else if(Y){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]=l.createRenderbuffer(),ke(E.__webglDepthbuffer[te],L,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=l.createRenderbuffer(),ke(E.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function Ze(L,E,Y){const te=n.get(L);E!==void 0&&me(te.__webglFramebuffer,L,L.texture,36064,3553),Y!==void 0&&ge(L)}function ht(L){const E=L.texture,Y=n.get(L),te=n.get(E);L.addEventListener("dispose",$),L.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=l.createTexture()),te.__version=E.version,r.memory.textures++);const ne=L.isWebGLCubeRenderTarget===!0,le=L.isWebGLMultipleRenderTargets===!0,ye=b(L)||o;if(ne){Y.__webglFramebuffer=[];for(let T=0;T<6;T++)Y.__webglFramebuffer[T]=l.createFramebuffer()}else{if(Y.__webglFramebuffer=l.createFramebuffer(),le)if(i.drawBuffers){const T=L.texture;for(let Q=0,ie=T.length;Q<ie;Q++){const ce=n.get(T[Q]);ce.__webglTexture===void 0&&(ce.__webglTexture=l.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&Ve(L)===!1){const T=le?E:[E];Y.__webglMultisampledFramebuffer=l.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer);for(let Q=0;Q<T.length;Q++){const ie=T[Q];Y.__webglColorRenderbuffer[Q]=l.createRenderbuffer(),l.bindRenderbuffer(36161,Y.__webglColorRenderbuffer[Q]);const ce=s.convert(ie.format,ie.encoding),ae=s.convert(ie.type),be=y(ie.internalFormat,ce,ae,ie.encoding),Pe=it(L);l.renderbufferStorageMultisample(36161,Pe,be,L.width,L.height),l.framebufferRenderbuffer(36160,36064+Q,36161,Y.__webglColorRenderbuffer[Q])}l.bindRenderbuffer(36161,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=l.createRenderbuffer(),ke(Y.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,te.__webglTexture),K(34067,E,ye);for(let T=0;T<6;T++)me(Y.__webglFramebuffer[T],L,E,36064,34069+T);S(E,ye)&&R(34067),t.unbindTexture()}else if(le){const T=L.texture;for(let Q=0,ie=T.length;Q<ie;Q++){const ce=T[Q],ae=n.get(ce);t.bindTexture(3553,ae.__webglTexture),K(3553,ce,ye),me(Y.__webglFramebuffer,L,ce,36064+Q,3553),S(ce,ye)&&R(3553)}t.unbindTexture()}else{let T=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?T=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(T,te.__webglTexture),K(T,E,ye),me(Y.__webglFramebuffer,L,E,36064,T),S(E,ye)&&R(T),t.unbindTexture()}L.depthBuffer&&ge(L)}function nt(L){const E=b(L)||o,Y=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let te=0,ne=Y.length;te<ne;te++){const le=Y[te];if(S(le,E)){const ye=L.isWebGLCubeRenderTarget?34067:3553,T=n.get(le).__webglTexture;t.bindTexture(ye,T),R(ye),t.unbindTexture()}}}function St(L){if(o&&L.samples>0&&Ve(L)===!1){const E=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],Y=L.width,te=L.height;let ne=16384;const le=[],ye=L.stencilBuffer?33306:36096,T=n.get(L),Q=L.isWebGLMultipleRenderTargets===!0;if(Q)for(let ie=0;ie<E.length;ie++)t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+ie,36161,null),t.bindFramebuffer(36160,T.__webglFramebuffer),l.framebufferTexture2D(36009,36064+ie,3553,null,0);t.bindFramebuffer(36008,T.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,T.__webglFramebuffer);for(let ie=0;ie<E.length;ie++){le.push(36064+ie),L.depthBuffer&&le.push(ye);const ce=T.__ignoreDepthValues!==void 0?T.__ignoreDepthValues:!1;if(ce===!1&&(L.depthBuffer&&(ne|=256),L.stencilBuffer&&(ne|=1024)),Q&&l.framebufferRenderbuffer(36008,36064,36161,T.__webglColorRenderbuffer[ie]),ce===!0&&(l.invalidateFramebuffer(36008,[ye]),l.invalidateFramebuffer(36009,[ye])),Q){const ae=n.get(E[ie]).__webglTexture;l.framebufferTexture2D(36009,36064,3553,ae,0)}l.blitFramebuffer(0,0,Y,te,0,0,Y,te,ne,9728),p&&l.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Q)for(let ie=0;ie<E.length;ie++){t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+ie,36161,T.__webglColorRenderbuffer[ie]);const ce=n.get(E[ie]).__webglTexture;t.bindFramebuffer(36160,T.__webglFramebuffer),l.framebufferTexture2D(36009,36064+ie,3553,ce,0)}t.bindFramebuffer(36009,T.__webglMultisampledFramebuffer)}}function it(L){return Math.min(d,L.samples)}function Ve(L){const E=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Pt(L){const E=r.render.frame;g.get(L)!==E&&(g.set(L,E),L.update())}function Et(L,E){const Y=L.encoding,te=L.format,ne=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===ho||Y!==Qn&&(Y===ze?o===!1?e.has("EXT_sRGB")===!0&&te===Ht?(L.format=ho,L.minFilter=pt,L.generateMipmaps=!1):E=cc.sRGBToLinear(E):(te!==Ht||ne!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Y)),E}this.allocateTextureUnit=k,this.resetTextureUnits=q,this.setTexture2D=W,this.setTexture2DArray=J,this.setTexture3D=H,this.setTextureCube=ee,this.rebindTextures=Ze,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ve}function ig(l,e,t){const n=t.isWebGL2;function i(s,r=null){let o;if(s===Jn)return 5121;if(s===zh)return 32819;if(s===Oh)return 32820;if(s===Dh)return 5120;if(s===Nh)return 5122;if(s===sc)return 5123;if(s===Fh)return 5124;if(s===qn)return 5125;if(s===Dn)return 5126;if(s===cs)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Bh)return 6406;if(s===Ht)return 6408;if(s===kh)return 6409;if(s===Vh)return 6410;if(s===Yn)return 6402;if(s===Ni)return 34041;if(s===Gh)return 6403;if(s===Uh)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===ho)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Hh)return 36244;if(s===Wh)return 33319;if(s===qh)return 33320;if(s===jh)return 36249;if(s===mr||s===gr||s===vr||s===xr)if(r===ze)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===mr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===gr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===vr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===xr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===mr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===gr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===vr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===xr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$o||s===Ko||s===Zo||s===Jo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===$o)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ko)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Qo||s===ea)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Qo)return r===ze?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ea)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ta||s===na||s===ia||s===sa||s===ra||s===oa||s===aa||s===la||s===ca||s===ha||s===ua||s===da||s===fa||s===pa)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ta)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===na)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ia)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sa)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ra)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===oa)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===aa)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===la)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ca)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ha)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ua)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===da)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fa)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pa)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ma)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ma)return r===ze?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Ci?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):l[s]!==void 0?l[s]:null}return{convert:i}}class sg extends lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xn extends tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rg={type:"move"};class jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const o=this._targetRay,a=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const m of e.hand.values()){const f=t.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const x=new Xn;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[m.jointName]=x,c.add(x)}const v=c.joints[m.jointName];f!==null&&(v.matrix.fromArray(f.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=f.radius),v.visible=f!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rg)))}return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),this}}class og extends vt{constructor(e,t,n,i,s,r,o,a,c,h){if(h=h!==void 0?h:Yn,h!==Yn&&h!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Yn&&(n=qn),n===void 0&&h===Ni&&(n=Ci),super(null,i,s,r,o,a,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ut,this.minFilter=a!==void 0?a:ut,this.flipY=!1,this.generateMipmaps=!1}}class ag extends ti{constructor(e,t){super();const n=this;let i=null,s=1,r=null,o="local-floor",a=null,c=null,h=null,d=null,u=null,p=null;const g=t.getContextAttributes();let m=null,f=null;const v=[],x=[],M=new lt;M.layers.enable(1),M.viewport=new We;const b=new lt;b.layers.enable(2),b.viewport=new We;const _=[M,b],S=new sg;S.layers.enable(1),S.layers.enable(2);let R=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let W=v[U];return W===void 0&&(W=new jr,v[U]=W),W.getTargetRaySpace()},this.getControllerGrip=function(U){let W=v[U];return W===void 0&&(W=new jr,v[U]=W),W.getGripSpace()},this.getHand=function(U){let W=v[U];return W===void 0&&(W=new jr,v[U]=W),W.getHandSpace()};function C(U){const W=x.indexOf(U.inputSource);if(W===-1)return;const J=v[W];J!==void 0&&J.dispatchEvent({type:U.type,data:U.inputSource})}function O(){i.removeEventListener("select",C),i.removeEventListener("selectstart",C),i.removeEventListener("selectend",C),i.removeEventListener("squeeze",C),i.removeEventListener("squeezestart",C),i.removeEventListener("squeezeend",C),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",B);for(let U=0;U<v.length;U++){const W=x[U];W!==null&&(x[U]=null,v[U].disconnect(W))}R=null,y=null,e.setRenderTarget(m),u=null,d=null,h=null,i=null,f=null,k.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||r},this.setReferenceSpace=function(U){a=U},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",O),i.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,t,W),i.updateRenderState({baseLayer:u}),f=new yn(u.framebufferWidth,u.framebufferHeight,{format:Ht,type:Jn,encoding:e.outputEncoding})}else{let W=null,J=null,H=null;g.depth&&(H=g.stencil?35056:33190,W=g.stencil?Ni:Yn,J=g.stencil?Ci:qn);const ee={colorFormat:32856,depthFormat:H,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(ee),i.updateRenderState({layers:[d]}),f=new yn(d.textureWidth,d.textureHeight,{format:Ht,type:Jn,depthTexture:new og(d.textureWidth,d.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const fe=e.properties.get(f);fe.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),a=null,r=await i.requestReferenceSpace(o),k.setContext(i),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function B(U){for(let W=0;W<U.removed.length;W++){const J=U.removed[W],H=x.indexOf(J);H>=0&&(x[H]=null,v[H].dispatchEvent({type:"disconnected",data:J}))}for(let W=0;W<U.added.length;W++){const J=U.added[W];let H=x.indexOf(J);if(H===-1){for(let fe=0;fe<v.length;fe++)if(fe>=x.length){x.push(J),H=fe;break}else if(x[fe]===null){x[fe]=J,H=fe;break}if(H===-1)break}const ee=v[H];ee&&ee.dispatchEvent({type:"connected",data:J})}}const $=new D,N=new D;function P(U,W,J){$.setFromMatrixPosition(W.matrixWorld),N.setFromMatrixPosition(J.matrixWorld);const H=$.distanceTo(N),ee=W.projectionMatrix.elements,fe=J.projectionMatrix.elements,ve=ee[14]/(ee[10]-1),K=ee[14]/(ee[10]+1),Ie=(ee[9]+1)/ee[5],_e=(ee[9]-1)/ee[5],we=(ee[8]-1)/ee[0],me=(fe[8]+1)/fe[0],ke=ve*we,Te=ve*me,ge=H/(-we+me),Ze=ge*-we;W.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Ze),U.translateZ(ge),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const ht=ve+ge,nt=K+ge,St=ke-Ze,it=Te+(H-Ze),Ve=Ie*K/nt*ht,Pt=_e*K/nt*ht;U.projectionMatrix.makePerspective(St,it,Ve,Pt,ht,nt)}function F(U,W){W===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(W.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;S.near=b.near=M.near=U.near,S.far=b.far=M.far=U.far,(R!==S.near||y!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,y=S.far);const W=U.parent,J=S.cameras;F(S,W);for(let ee=0;ee<J.length;ee++)F(J[ee],W);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),U.position.copy(S.position),U.quaternion.copy(S.quaternion),U.scale.copy(S.scale),U.matrix.copy(S.matrix),U.matrixWorld.copy(S.matrixWorld);const H=U.children;for(let ee=0,fe=H.length;ee<fe;ee++)H[ee].updateMatrixWorld(!0);J.length===2?P(S,M,b):S.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(u!==null)return u.fixedFoveation},this.setFoveation=function(U){d!==null&&(d.fixedFoveation=U),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=U)};let I=null;function q(U,W){if(c=W.getViewerPose(a||r),p=W,c!==null){const J=c.views;u!==null&&(e.setRenderTargetFramebuffer(f,u.framebuffer),e.setRenderTarget(f));let H=!1;J.length!==S.cameras.length&&(S.cameras.length=0,H=!0);for(let ee=0;ee<J.length;ee++){const fe=J[ee];let ve=null;if(u!==null)ve=u.getViewport(fe);else{const Ie=h.getViewSubImage(d,fe);ve=Ie.viewport,ee===0&&(e.setRenderTargetTextures(f,Ie.colorTexture,d.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(f))}let K=_[ee];K===void 0&&(K=new lt,K.layers.enable(ee),K.viewport=new We,_[ee]=K),K.matrix.fromArray(fe.transform.matrix),K.projectionMatrix.fromArray(fe.projectionMatrix),K.viewport.set(ve.x,ve.y,ve.width,ve.height),ee===0&&S.matrix.copy(K.matrix),H===!0&&S.cameras.push(K)}}for(let J=0;J<v.length;J++){const H=x[J],ee=v[J];H!==null&&ee!==void 0&&ee.update(H,W,a||r)}I&&I(U,W),p=null}const k=new xc;k.setAnimationLoop(q),this.setAnimationLoop=function(U){I=U},this.dispose=function(){}}}function lg(l,e){function t(m,f){m.fogColor.value.copy(f.color),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,v,x,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(m,f):f.isMeshToonMaterial?(i(m,f),h(m,f)):f.isMeshPhongMaterial?(i(m,f),c(m,f)):f.isMeshStandardMaterial?(i(m,f),d(m,f),f.isMeshPhysicalMaterial&&u(m,f,M)):f.isMeshMatcapMaterial?(i(m,f),p(m,f)):f.isMeshDepthMaterial?i(m,f):f.isMeshDistanceMaterial?(i(m,f),g(m,f)):f.isMeshNormalMaterial?i(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&r(m,f)):f.isPointsMaterial?o(m,f,v,x):f.isSpriteMaterial?a(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===qt&&(m.bumpScale.value*=-1)),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===qt&&m.normalScale.value.negate()),f.specularMap&&(m.specularMap.value=f.specularMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const b=l.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*b}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity);let x;f.map?x=f.map:f.specularMap?x=f.specularMap:f.displacementMap?x=f.displacementMap:f.normalMap?x=f.normalMap:f.bumpMap?x=f.bumpMap:f.roughnessMap?x=f.roughnessMap:f.metalnessMap?x=f.metalnessMap:f.alphaMap?x=f.alphaMap:f.emissiveMap?x=f.emissiveMap:f.clearcoatMap?x=f.clearcoatMap:f.clearcoatNormalMap?x=f.clearcoatNormalMap:f.clearcoatRoughnessMap?x=f.clearcoatRoughnessMap:f.iridescenceMap?x=f.iridescenceMap:f.iridescenceThicknessMap?x=f.iridescenceThicknessMap:f.specularIntensityMap?x=f.specularIntensityMap:f.specularColorMap?x=f.specularColorMap:f.transmissionMap?x=f.transmissionMap:f.thicknessMap?x=f.thicknessMap:f.sheenColorMap?x=f.sheenColorMap:f.sheenRoughnessMap&&(x=f.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix));let M;f.aoMap?M=f.aoMap:f.lightMap&&(M=f.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uv2Transform.value.copy(M.matrix))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity}function r(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function o(m,f,v,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=x*.5,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M;f.map?M=f.map:f.alphaMap&&(M=f.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v;f.map?v=f.map:f.alphaMap&&(v=f.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.roughness.value=f.roughness,m.metalness.value=f.metalness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function u(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),m.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===qt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap)}function p(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){m.referencePosition.value.copy(f.referencePosition),m.nearDistance.value=f.nearDistance,m.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function cg(l,e,t,n){let i={},s={},r=[];const o=t.isWebGL2?l.getParameter(35375):0;function a(x,M){const b=M.program;n.uniformBlockBinding(x,b)}function c(x,M){let b=i[x.id];b===void 0&&(g(x),b=h(x),i[x.id]=b,x.addEventListener("dispose",f));const _=M.program;n.updateUBOMapping(x,_);const S=e.render.frame;s[x.id]!==S&&(u(x),s[x.id]=S)}function h(x){const M=d();x.__bindingPointIndex=M;const b=l.createBuffer(),_=x.__size,S=x.usage;return l.bindBuffer(35345,b),l.bufferData(35345,_,S),l.bindBuffer(35345,null),l.bindBufferBase(35345,M,b),b}function d(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const M=i[x.id],b=x.uniforms,_=x.__cache;l.bindBuffer(35345,M);for(let S=0,R=b.length;S<R;S++){const y=b[S];if(p(y,S,_)===!0){const C=y.value,O=y.__offset;typeof C=="number"?(y.__data[0]=C,l.bufferSubData(35345,O,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):C.toArray(y.__data),l.bufferSubData(35345,O,y.__data))}}l.bindBuffer(35345,null)}function p(x,M,b){const _=x.value;if(b[M]===void 0)return typeof _=="number"?b[M]=_:b[M]=_.clone(),!0;if(typeof _=="number"){if(b[M]!==_)return b[M]=_,!0}else{const S=b[M];if(S.equals(_)===!1)return S.copy(_),!0}return!1}function g(x){const M=x.uniforms;let b=0;const _=16;let S=0;for(let R=0,y=M.length;R<y;R++){const C=M[R],O=m(C);if(C.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=b,R>0){S=b%_;const B=_-S;S!==0&&B-O.boundary<0&&(b+=_-S,C.__offset=b)}b+=O.storage}return S=b%_,S>0&&(b+=_-S),x.__size=b,x.__cache={},this}function m(x){const M=x.value,b={boundary:0,storage:0};return typeof M=="number"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function f(x){const M=x.target;M.removeEventListener("dispose",f);const b=r.indexOf(M.__bindingPointIndex);r.splice(b,1),l.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function v(){for(const x in i)l.deleteBuffer(i[x]);r=[],i={},s={}}return{bind:a,update:c,dispose:v}}function hg(){const l=ds("canvas");return l.style.display="block",l}function Sc(l={}){this.isWebGLRenderer=!0;const e=l.canvas!==void 0?l.canvas:hg(),t=l.context!==void 0?l.context:null,n=l.depth!==void 0?l.depth:!0,i=l.stencil!==void 0?l.stencil:!0,s=l.antialias!==void 0?l.antialias:!1,r=l.premultipliedAlpha!==void 0?l.premultipliedAlpha:!0,o=l.preserveDrawingBuffer!==void 0?l.preserveDrawingBuffer:!1,a=l.powerPreference!==void 0?l.powerPreference:"default",c=l.failIfMajorPerformanceCaveat!==void 0?l.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=l.alpha!==void 0?l.alpha:!1;let d=null,u=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Qn,this.physicallyCorrectLights=!1,this.toneMapping=_n,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let f=!1,v=0,x=0,M=null,b=-1,_=null;const S=new We,R=new We;let y=null,C=e.width,O=e.height,B=1,$=null,N=null;const P=new We(0,0,C,O),F=new We(0,0,C,O);let I=!1;const q=new So;let k=!1,U=!1,W=null;const J=new Oe,H=new xe,ee=new D,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return M===null?B:1}let K=t;function Ie(A,V){for(let j=0;j<A.length;j++){const G=A[j],Z=e.getContext(G,V);if(Z!==null)return Z}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:o,powerPreference:a,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yo}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",Pe,!1),e.addEventListener("webglcontextcreationerror",je,!1),K===null){const V=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&V.shift(),K=Ie(V,A),K===null)throw Ie(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let _e,we,me,ke,Te,ge,Ze,ht,nt,St,it,Ve,Pt,Et,L,E,Y,te,ne,le,ye,T,Q,ie;function ce(){_e=new yp(K),we=new pp(K,_e,l),_e.init(we),T=new ig(K,_e,we),me=new tg(K,_e,we),ke=new Mp,Te=new Vm,ge=new ng(K,_e,me,Te,we,T,ke),Ze=new gp(m),ht=new _p(m),nt=new Nu(K,we),Q=new dp(K,_e,nt,we),St=new bp(K,nt,ke,Q),it=new Ap(K,St,nt,ke),ne=new Tp(K,we,ge),E=new mp(Te),Ve=new km(m,Ze,ht,_e,we,Q,E),Pt=new lg(m,Te),Et=new Hm,L=new $m(_e,we),te=new up(m,Ze,me,it,h,r),Y=new eg(m,it,we),ie=new cg(K,ke,we,me),le=new fp(K,_e,ke,we),ye=new wp(K,_e,ke,we),ke.programs=Ve.programs,m.capabilities=we,m.extensions=_e,m.properties=Te,m.renderLists=Et,m.shadowMap=Y,m.state=me,m.info=ke}ce();const ae=new ag(m,K);this.xr=ae,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const A=_e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(C,O,!1))},this.getSize=function(A){return A.set(C,O)},this.setSize=function(A,V,j){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=A,O=V,e.width=Math.floor(A*B),e.height=Math.floor(V*B),j!==!1&&(e.style.width=A+"px",e.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(C*B,O*B).floor()},this.setDrawingBufferSize=function(A,V,j){C=A,O=V,B=j,e.width=Math.floor(A*j),e.height=Math.floor(V*j),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(P)},this.setViewport=function(A,V,j,G){A.isVector4?P.set(A.x,A.y,A.z,A.w):P.set(A,V,j,G),me.viewport(S.copy(P).multiplyScalar(B).floor())},this.getScissor=function(A){return A.copy(F)},this.setScissor=function(A,V,j,G){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,V,j,G),me.scissor(R.copy(F).multiplyScalar(B).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(A){me.setScissorTest(I=A)},this.setOpaqueSort=function(A){$=A},this.setTransparentSort=function(A){N=A},this.getClearColor=function(A){return A.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(A=!0,V=!0,j=!0){let G=0;A&&(G|=16384),V&&(G|=256),j&&(G|=1024),K.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",Pe,!1),e.removeEventListener("webglcontextcreationerror",je,!1),Et.dispose(),L.dispose(),Te.dispose(),Ze.dispose(),ht.dispose(),it.dispose(),Q.dispose(),ie.dispose(),Ve.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Ne),ae.removeEventListener("sessionend",ot),W&&(W.dispose(),W=null),$e.stop()};function be(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const A=ke.autoReset,V=Y.enabled,j=Y.autoUpdate,G=Y.needsUpdate,Z=Y.type;ce(),ke.autoReset=A,Y.enabled=V,Y.autoUpdate=j,Y.needsUpdate=G,Y.type=Z}function je(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function z(A){const V=A.target;V.removeEventListener("dispose",z),re(V)}function re(A){X(A),Te.remove(A)}function X(A){const V=Te.get(A).programs;V!==void 0&&(V.forEach(function(j){Ve.releaseProgram(j)}),A.isShaderMaterial&&Ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,j,G,Z,Me){V===null&&(V=fe);const Ee=Z.isMesh&&Z.matrixWorld.determinant()<0,Ce=Kc(A,V,j,G,Z);me.setMaterial(G,Ee);let Ae=j.index;const Ge=j.attributes.position;if(Ae===null){if(Ge===void 0||Ge.count===0)return}else if(Ae.count===0)return;let De=1;G.wireframe===!0&&(Ae=St.getWireframeAttribute(j),De=2),Q.setup(Z,G,Ce,j,Ae);let Fe,Ye=le;Ae!==null&&(Fe=nt.get(Ae),Ye=ye,Ye.setIndex(Fe));const Fn=Ae!==null?Ae.count:Ge.count,si=j.drawRange.start*De,ri=j.drawRange.count*De,Xt=Me!==null?Me.start*De:0,Ue=Me!==null?Me.count*De:1/0,oi=Math.max(si,Xt),Je=Math.min(Fn,si+ri,Xt+Ue)-1,Dt=Math.max(0,Je-oi+1);if(Dt!==0){if(Z.isMesh)G.wireframe===!0?(me.setLineWidth(G.wireframeLinewidth*ve()),Ye.setMode(1)):Ye.setMode(4);else if(Z.isLine){let wn=G.linewidth;wn===void 0&&(wn=1),me.setLineWidth(wn*ve()),Z.isLineSegments?Ye.setMode(1):Z.isLineLoop?Ye.setMode(2):Ye.setMode(3)}else Z.isPoints?Ye.setMode(0):Z.isSprite&&Ye.setMode(4);if(Z.isInstancedMesh)Ye.renderInstances(oi,Dt,Z.count);else if(j.isInstancedBufferGeometry){const wn=Math.min(j.instanceCount,j._maxInstanceCount);Ye.renderInstances(oi,Dt,wn)}else Ye.render(oi,Dt)}},this.compile=function(A,V){u=L.get(A),u.init(),g.push(u),A.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(u.pushLight(j),j.castShadow&&u.pushShadow(j))}),u.setupLights(m.physicallyCorrectLights),A.traverse(function(j){const G=j.material;if(G)if(Array.isArray(G))for(let Z=0;Z<G.length;Z++){const Me=G[Z];ur(Me,A,j)}else ur(G,A,j)}),g.pop(),u=null};let de=null;function he(A){de&&de(A)}function Ne(){$e.stop()}function ot(){$e.start()}const $e=new xc;$e.setAnimationLoop(he),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(A){de=A,ae.setAnimationLoop(A),A===null?$e.stop():$e.start()},ae.addEventListener("sessionstart",Ne),ae.addEventListener("sessionend",ot),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;A.autoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(V),V=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(m,A,V,M),u=L.get(A,g.length),u.init(),g.push(u),J.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),q.setFromProjectionMatrix(J),U=this.localClippingEnabled,k=E.init(this.clippingPlanes,U,V),d=Et.get(A,p.length),d.init(),p.push(d),bn(A,V,0,m.sortObjects),d.finish(),m.sortObjects===!0&&d.sort($,N),k===!0&&E.beginShadows();const j=u.state.shadowsArray;if(Y.render(j,A,V),k===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(d,A),u.setupLights(m.physicallyCorrectLights),V.isArrayCamera){const G=V.cameras;for(let Z=0,Me=G.length;Z<Me;Z++){const Ee=G[Z];Xe(d,A,Ee,Ee.viewport)}}else Xe(d,A,V);M!==null&&(ge.updateMultisampleRenderTarget(M),ge.updateRenderTargetMipmap(M)),A.isScene===!0&&A.onAfterRender(m,A,V),Q.resetDefaultState(),b=-1,_=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,p.pop(),p.length>0?d=p[p.length-1]:d=null};function bn(A,V,j,G){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)u.pushLight(A),A.castShadow&&u.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){G&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(J);const Ee=it.update(A),Ce=A.material;Ce.visible&&d.push(A,Ee,Ce,j,ee.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==ke.render.frame&&(A.skeleton.update(),A.skeleton.frame=ke.render.frame),!A.frustumCulled||q.intersectsObject(A))){G&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(J);const Ee=it.update(A),Ce=A.material;if(Array.isArray(Ce)){const Ae=Ee.groups;for(let Ge=0,De=Ae.length;Ge<De;Ge++){const Fe=Ae[Ge],Ye=Ce[Fe.materialIndex];Ye&&Ye.visible&&d.push(A,Ee,Ye,j,ee.z,Fe)}}else Ce.visible&&d.push(A,Ee,Ce,j,ee.z,null)}}const Me=A.children;for(let Ee=0,Ce=Me.length;Ee<Ce;Ee++)bn(Me[Ee],V,j,G)}function Xe(A,V,j,G){const Z=A.opaque,Me=A.transmissive,Ee=A.transparent;u.setupLightsView(j),Me.length>0&&sn(Z,V,j),G&&me.viewport(S.copy(G)),Z.length>0&&It(Z,V,j),Me.length>0&&It(Me,V,j),Ee.length>0&&It(Ee,V,j),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function sn(A,V,j){const G=we.isWebGL2;W===null&&(W=new yn(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?cs:Jn,minFilter:Ui,samples:G&&s===!0?4:0})),m.getDrawingBufferSize(H),G?W.setSize(H.x,H.y):W.setSize(er(H.x),er(H.y));const Z=m.getRenderTarget();m.setRenderTarget(W),m.clear();const Me=m.toneMapping;m.toneMapping=_n,It(A,V,j),m.toneMapping=Me,ge.updateMultisampleRenderTarget(W),ge.updateRenderTargetMipmap(W),m.setRenderTarget(Z)}function It(A,V,j){const G=V.isScene===!0?V.overrideMaterial:null;for(let Z=0,Me=A.length;Z<Me;Z++){const Ee=A[Z],Ce=Ee.object,Ae=Ee.geometry,Ge=G===null?Ee.material:G,De=Ee.group;Ce.layers.test(j.layers)&&$c(Ce,V,j,Ae,Ge,De)}}function $c(A,V,j,G,Z,Me){A.onBeforeRender(m,V,j,G,Z,Me),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(m,V,j,G,A,Me),Z.transparent===!0&&Z.side===Zn?(Z.side=qt,Z.needsUpdate=!0,m.renderBufferDirect(j,V,G,Z,A,Me),Z.side=Li,Z.needsUpdate=!0,m.renderBufferDirect(j,V,G,Z,A,Me),Z.side=Zn):m.renderBufferDirect(j,V,G,Z,A,Me),A.onAfterRender(m,V,j,G,Z,Me)}function ur(A,V,j){V.isScene!==!0&&(V=fe);const G=Te.get(A),Z=u.state.lights,Me=u.state.shadowsArray,Ee=Z.state.version,Ce=Ve.getParameters(A,Z.state,Me,V,j),Ae=Ve.getProgramCacheKey(Ce);let Ge=G.programs;G.environment=A.isMeshStandardMaterial?V.environment:null,G.fog=V.fog,G.envMap=(A.isMeshStandardMaterial?ht:Ze).get(A.envMap||G.environment),Ge===void 0&&(A.addEventListener("dispose",z),Ge=new Map,G.programs=Ge);let De=Ge.get(Ae);if(De!==void 0){if(G.currentProgram===De&&G.lightsStateVersion===Ee)return Vo(A,Ce),De}else Ce.uniforms=Ve.getUniforms(A),A.onBuild(j,Ce,m),A.onBeforeCompile(Ce,m),De=Ve.acquireProgram(Ce,Ae),Ge.set(Ae,De),G.uniforms=Ce.uniforms;const Fe=G.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Fe.clippingPlanes=E.uniform),Vo(A,Ce),G.needsLights=Jc(A),G.lightsStateVersion=Ee,G.needsLights&&(Fe.ambientLightColor.value=Z.state.ambient,Fe.lightProbe.value=Z.state.probe,Fe.directionalLights.value=Z.state.directional,Fe.directionalLightShadows.value=Z.state.directionalShadow,Fe.spotLights.value=Z.state.spot,Fe.spotLightShadows.value=Z.state.spotShadow,Fe.rectAreaLights.value=Z.state.rectArea,Fe.ltc_1.value=Z.state.rectAreaLTC1,Fe.ltc_2.value=Z.state.rectAreaLTC2,Fe.pointLights.value=Z.state.point,Fe.pointLightShadows.value=Z.state.pointShadow,Fe.hemisphereLights.value=Z.state.hemi,Fe.directionalShadowMap.value=Z.state.directionalShadowMap,Fe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Fe.spotShadowMap.value=Z.state.spotShadowMap,Fe.spotShadowMatrix.value=Z.state.spotShadowMatrix,Fe.pointShadowMap.value=Z.state.pointShadowMap,Fe.pointShadowMatrix.value=Z.state.pointShadowMatrix);const Ye=De.getUniforms(),Fn=Qs.seqWithValue(Ye.seq,Fe);return G.currentProgram=De,G.uniformsList=Fn,De}function Vo(A,V){const j=Te.get(A);j.outputEncoding=V.outputEncoding,j.instancing=V.instancing,j.skinning=V.skinning,j.morphTargets=V.morphTargets,j.morphNormals=V.morphNormals,j.morphColors=V.morphColors,j.morphTargetsCount=V.morphTargetsCount,j.numClippingPlanes=V.numClippingPlanes,j.numIntersection=V.numClipIntersection,j.vertexAlphas=V.vertexAlphas,j.vertexTangents=V.vertexTangents,j.toneMapping=V.toneMapping}function Kc(A,V,j,G,Z){V.isScene!==!0&&(V=fe),ge.resetTextureUnits();const Me=V.fog,Ee=G.isMeshStandardMaterial?V.environment:null,Ce=M===null?m.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Qn,Ae=(G.isMeshStandardMaterial?ht:Ze).get(G.envMap||Ee),Ge=G.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,De=!!G.normalMap&&!!j.attributes.tangent,Fe=!!j.morphAttributes.position,Ye=!!j.morphAttributes.normal,Fn=!!j.morphAttributes.color,si=G.toneMapped?m.toneMapping:_n,ri=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Xt=ri!==void 0?ri.length:0,Ue=Te.get(G),oi=u.state.lights;if(k===!0&&(U===!0||A!==_)){const Tt=A===_&&G.id===b;E.setState(G,A,Tt)}let Je=!1;G.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==oi.state.version||Ue.outputEncoding!==Ce||Z.isInstancedMesh&&Ue.instancing===!1||!Z.isInstancedMesh&&Ue.instancing===!0||Z.isSkinnedMesh&&Ue.skinning===!1||!Z.isSkinnedMesh&&Ue.skinning===!0||Ue.envMap!==Ae||G.fog===!0&&Ue.fog!==Me||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==E.numPlanes||Ue.numIntersection!==E.numIntersection)||Ue.vertexAlphas!==Ge||Ue.vertexTangents!==De||Ue.morphTargets!==Fe||Ue.morphNormals!==Ye||Ue.morphColors!==Fn||Ue.toneMapping!==si||we.isWebGL2===!0&&Ue.morphTargetsCount!==Xt)&&(Je=!0):(Je=!0,Ue.__version=G.version);let Dt=Ue.currentProgram;Je===!0&&(Dt=ur(G,V,Z));let wn=!1,qi=!1,dr=!1;const xt=Dt.getUniforms(),ji=Ue.uniforms;if(me.useProgram(Dt.program)&&(wn=!0,qi=!0,dr=!0),G.id!==b&&(b=G.id,qi=!0),wn||_!==A){if(xt.setValue(K,"projectionMatrix",A.projectionMatrix),we.logarithmicDepthBuffer&&xt.setValue(K,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),_!==A&&(_=A,qi=!0,dr=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const Tt=xt.map.cameraPosition;Tt!==void 0&&Tt.setValue(K,ee.setFromMatrixPosition(A.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&xt.setValue(K,"isOrthographic",A.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||Z.isSkinnedMesh)&&xt.setValue(K,"viewMatrix",A.matrixWorldInverse)}if(Z.isSkinnedMesh){xt.setOptional(K,Z,"bindMatrix"),xt.setOptional(K,Z,"bindMatrixInverse");const Tt=Z.skeleton;Tt&&(we.floatVertexTextures?(Tt.boneTexture===null&&Tt.computeBoneTexture(),xt.setValue(K,"boneTexture",Tt.boneTexture,ge),xt.setValue(K,"boneTextureSize",Tt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fr=j.morphAttributes;if((fr.position!==void 0||fr.normal!==void 0||fr.color!==void 0&&we.isWebGL2===!0)&&ne.update(Z,j,G,Dt),(qi||Ue.receiveShadow!==Z.receiveShadow)&&(Ue.receiveShadow=Z.receiveShadow,xt.setValue(K,"receiveShadow",Z.receiveShadow)),qi&&(xt.setValue(K,"toneMappingExposure",m.toneMappingExposure),Ue.needsLights&&Zc(ji,dr),Me&&G.fog===!0&&Pt.refreshFogUniforms(ji,Me),Pt.refreshMaterialUniforms(ji,G,B,O,W),Qs.upload(K,Ue.uniformsList,ji,ge)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Qs.upload(K,Ue.uniformsList,ji,ge),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&xt.setValue(K,"center",Z.center),xt.setValue(K,"modelViewMatrix",Z.modelViewMatrix),xt.setValue(K,"normalMatrix",Z.normalMatrix),xt.setValue(K,"modelMatrix",Z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Tt=G.uniformsGroups;for(let pr=0,Qc=Tt.length;pr<Qc;pr++)if(we.isWebGL2){const Go=Tt[pr];ie.update(Go,Dt),ie.bind(Go,Dt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Dt}function Zc(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Jc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(A,V,j){Te.get(A.texture).__webglTexture=V,Te.get(A.depthTexture).__webglTexture=j;const G=Te.get(A);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=j===void 0,G.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,V){const j=Te.get(A);j.__webglFramebuffer=V,j.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,j=0){M=A,v=V,x=j;let G=!0;if(A){const Ae=Te.get(A);Ae.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(36160,null),G=!1):Ae.__webglFramebuffer===void 0?ge.setupRenderTarget(A):Ae.__hasExternalTextures&&ge.rebindTextures(A,Te.get(A.texture).__webglTexture,Te.get(A.depthTexture).__webglTexture)}let Z=null,Me=!1,Ee=!1;if(A){const Ae=A.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture)&&(Ee=!0);const Ge=Te.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Z=Ge[V],Me=!0):we.isWebGL2&&A.samples>0&&ge.useMultisampledRTT(A)===!1?Z=Te.get(A).__webglMultisampledFramebuffer:Z=Ge,S.copy(A.viewport),R.copy(A.scissor),y=A.scissorTest}else S.copy(P).multiplyScalar(B).floor(),R.copy(F).multiplyScalar(B).floor(),y=I;if(me.bindFramebuffer(36160,Z)&&we.drawBuffers&&G&&me.drawBuffers(A,Z),me.viewport(S),me.scissor(R),me.setScissorTest(y),Me){const Ae=Te.get(A.texture);K.framebufferTexture2D(36160,36064,34069+V,Ae.__webglTexture,j)}else if(Ee){const Ae=Te.get(A.texture),Ge=V||0;K.framebufferTextureLayer(36160,36064,Ae.__webglTexture,j||0,Ge)}b=-1},this.readRenderTargetPixels=function(A,V,j,G,Z,Me,Ee){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){me.bindFramebuffer(36160,Ce);try{const Ae=A.texture,Ge=Ae.format,De=Ae.type;if(Ge!==Ht&&T.convert(Ge)!==K.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=De===cs&&(_e.has("EXT_color_buffer_half_float")||we.isWebGL2&&_e.has("EXT_color_buffer_float"));if(De!==Jn&&T.convert(De)!==K.getParameter(35738)&&!(De===Dn&&(we.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-G&&j>=0&&j<=A.height-Z&&K.readPixels(V,j,G,Z,T.convert(Ge),T.convert(De),Me)}finally{const Ae=M!==null?Te.get(M).__webglFramebuffer:null;me.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(A,V,j=0){const G=Math.pow(2,-j),Z=Math.floor(V.image.width*G),Me=Math.floor(V.image.height*G);ge.setTexture2D(V,0),K.copyTexSubImage2D(3553,j,0,0,A.x,A.y,Z,Me),me.unbindTexture()},this.copyTextureToTexture=function(A,V,j,G=0){const Z=V.image.width,Me=V.image.height,Ee=T.convert(j.format),Ce=T.convert(j.type);ge.setTexture2D(j,0),K.pixelStorei(37440,j.flipY),K.pixelStorei(37441,j.premultiplyAlpha),K.pixelStorei(3317,j.unpackAlignment),V.isDataTexture?K.texSubImage2D(3553,G,A.x,A.y,Z,Me,Ee,Ce,V.image.data):V.isCompressedTexture?K.compressedTexSubImage2D(3553,G,A.x,A.y,V.mipmaps[0].width,V.mipmaps[0].height,Ee,V.mipmaps[0].data):K.texSubImage2D(3553,G,A.x,A.y,Ee,Ce,V.image),G===0&&j.generateMipmaps&&K.generateMipmap(3553),me.unbindTexture()},this.copyTextureToTexture3D=function(A,V,j,G,Z=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=A.max.x-A.min.x+1,Ee=A.max.y-A.min.y+1,Ce=A.max.z-A.min.z+1,Ae=T.convert(G.format),Ge=T.convert(G.type);let De;if(G.isData3DTexture)ge.setTexture3D(G,0),De=32879;else if(G.isDataArrayTexture)ge.setTexture2DArray(G,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(37440,G.flipY),K.pixelStorei(37441,G.premultiplyAlpha),K.pixelStorei(3317,G.unpackAlignment);const Fe=K.getParameter(3314),Ye=K.getParameter(32878),Fn=K.getParameter(3316),si=K.getParameter(3315),ri=K.getParameter(32877),Xt=j.isCompressedTexture?j.mipmaps[0]:j.image;K.pixelStorei(3314,Xt.width),K.pixelStorei(32878,Xt.height),K.pixelStorei(3316,A.min.x),K.pixelStorei(3315,A.min.y),K.pixelStorei(32877,A.min.z),j.isDataTexture||j.isData3DTexture?K.texSubImage3D(De,Z,V.x,V.y,V.z,Me,Ee,Ce,Ae,Ge,Xt.data):j.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(De,Z,V.x,V.y,V.z,Me,Ee,Ce,Ae,Xt.data)):K.texSubImage3D(De,Z,V.x,V.y,V.z,Me,Ee,Ce,Ae,Ge,Xt),K.pixelStorei(3314,Fe),K.pixelStorei(32878,Ye),K.pixelStorei(3316,Fn),K.pixelStorei(3315,si),K.pixelStorei(32877,ri),Z===0&&G.generateMipmaps&&K.generateMipmap(De),me.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?ge.setTextureCube(A,0):A.isData3DTexture?ge.setTexture3D(A,0):A.isDataArrayTexture?ge.setTexture2DArray(A,0):ge.setTexture2D(A,0),me.unbindTexture()},this.resetState=function(){v=0,x=0,M=null,me.reset(),Q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class ug extends Sc{}ug.prototype.isWebGL1Renderer=!0;class Ec extends tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class dg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=co,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=jt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const _t=new D;class To{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new To(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const el=new D,tl=new We,nl=new We,fg=new D,il=new Oe;class pg extends gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new We,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;tl.fromBufferAttribute(i.attributes.skinIndex,e),nl.fromBufferAttribute(i.attributes.skinWeight,e),el.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=nl.getComponent(s);if(r!==0){const o=tl.getComponent(s);il.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(fg.copy(el).applyMatrix4(il),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Tc extends tt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class mg extends vt{constructor(e=null,t=1,n=1,i,s,r,o,a,c=ut,h=ut,d,u){super(null,r,o,a,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sl=new Oe,gg=new Oe;class Ao{constructor(e=[],t=[]){this.uuid=jt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Oe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const o=e[s]?e[s].matrixWorld:gg;sl.multiplyMatrices(o,t[s]),sl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ao(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=oc(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new mg(t,e,e,Ht,Dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new Tc),this.bones.push(r),this.boneInverses.push(new Oe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Co extends Jt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rl=new D,ol=new D,al=new Oe,Xr=new sr,Gs=new Vi;class Lo extends tt{constructor(e=new Mt,t=new Co){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)rl.fromBufferAttribute(t,i-1),ol.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=rl.distanceTo(ol);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(i),Gs.radius+=s,e.ray.intersectsSphere(Gs)===!1)return;al.copy(i).invert(),Xr.copy(e.ray).applyMatrix4(al);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,c=new D,h=new D,d=new D,u=new D,p=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const v=Math.max(0,r.start),x=Math.min(g.count,r.start+r.count);for(let M=v,b=x-1;M<b;M+=p){const _=g.getX(M),S=g.getX(M+1);if(c.fromBufferAttribute(f,_),h.fromBufferAttribute(f,S),Xr.distanceSqToSegment(c,h,u,d)>a)continue;u.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(u);y<e.near||y>e.far||t.push({distance:y,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,r.start),x=Math.min(f.count,r.start+r.count);for(let M=v,b=x-1;M<b;M+=p){if(c.fromBufferAttribute(f,M),h.fromBufferAttribute(f,M+1),Xr.distanceSqToSegment(c,h,u,d)>a)continue;u.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(u);S<e.near||S>e.far||t.push({distance:S,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const ll=new D,cl=new D;class Ac extends Lo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)ll.fromBufferAttribute(t,i),cl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ll.distanceTo(cl);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vg extends Lo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Cc extends Jt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hl=new Oe,po=new sr,Hs=new Vi,Ws=new D;class xg extends tt{constructor(e=new Mt,t=new Cc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(i),Hs.radius+=s,e.ray.intersectsSphere(Hs)===!1)return;hl.copy(i).invert(),po.copy(e.ray).applyMatrix4(hl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=u,m=p;g<m;g++){const f=c.getX(g);Ws.fromBufferAttribute(d,f),ul(Ws,f,a,i,e,t,this)}}else{const u=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let g=u,m=p;g<m;g++)Ws.fromBufferAttribute(d,g),ul(Ws,g,a,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ul(l,e,t,n,i,s,r){const o=po.distanceSqToPoint(l);if(o<t){const a=new D;po.closestPointToPoint(l,a),a.applyMatrix4(n);const c=i.ray.origin.distanceTo(a);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:a,index:e,face:null,object:r})}}class _g extends vt{constructor(e,t,n,i,s,r,o,a,c){super(e,t,n,i,s,r,o,a,c),this.isVideoTexture=!0,this.minFilter=r!==void 0?r:pt,this.magFilter=s!==void 0?s:pt,this.generateMipmaps=!1;const h=this;function d(){h.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class or extends Mt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const a=Math.min(r+o,Math.PI);let c=0;const h=[],d=new D,u=new D,p=[],g=[],m=[],f=[];for(let v=0;v<=n;v++){const x=[],M=v/n;let b=0;v==0&&r==0?b=.5/t:v==n&&a==Math.PI&&(b=-.5/t);for(let _=0;_<=t;_++){const S=_/t;d.x=-e*Math.cos(i+S*s)*Math.sin(r+M*o),d.y=e*Math.cos(r+M*o),d.z=e*Math.sin(i+S*s)*Math.sin(r+M*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),m.push(u.x,u.y,u.z),f.push(S+b,1-M),x.push(c++)}h.push(x)}for(let v=0;v<n;v++)for(let x=0;x<t;x++){const M=h[v][x+1],b=h[v][x],_=h[v+1][x],S=h[v+1][x+1];(v!==0||r>0)&&p.push(M,b,S),(v!==n-1||a<Math.PI)&&p.push(b,_,S)}this.setIndex(p),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(m,3)),this.setAttribute("uv",new ct(f,2))}static fromJSON(e){return new or(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ar extends Jt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ii extends ar{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Rn(l,e,t){return Lc(l)?new l.constructor(l.subarray(e,t!==void 0?t:l.length)):l.slice(e,t)}function qs(l,e,t){return!l||!t&&l.constructor===e?l:typeof e.BYTES_PER_ELEMENT=="number"?new e(l):Array.prototype.slice.call(l)}function Lc(l){return ArrayBuffer.isView(l)&&!(l instanceof DataView)}function yg(l){function e(i,s){return l[i]-l[s]}const t=l.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function dl(l,e,t){const n=l.length,i=new l.constructor(n);for(let s=0,r=0;r!==n;++s){const o=t[s]*e;for(let a=0;a!==e;++a)i[r++]=l[o+a]}return i}function Rc(l,e,t,n){let i=1,s=l[0];for(;s!==void 0&&s[n]===void 0;)s=l[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=l[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=l[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=l[i++];while(s!==void 0)}class _s{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let a=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class bg extends _s{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ga,endingEnd:ga}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,o=i[s],a=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case va:s=e,o=2*t-n;break;case xa:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case va:r=e,a=2*n-t;break;case xa:r=1,a=n+i[1]-i[0];break;default:r=e-1,a=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(a-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=e*o,c=a-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),m=g*g,f=m*g,v=-u*f+2*u*m-u*g,x=(1+u)*f+(-1.5-2*u)*m+(-.5+u)*g+1,M=(-1-p)*f+(1.5+p)*m+.5*g,b=p*f-p*m;for(let _=0;_!==o;++_)s[_]=v*r[h+_]+x*r[c+_]+M*r[a+_]+b*r[d+_];return s}}class wg extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=e*o,c=a-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)s[u]=r[c+u]*d+r[a+u]*h;return s}}class Mg extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class nn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qs(t,this.TimeBufferType),this.values=qs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qs(e.times,Array),values:qs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Mg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case hs:t=this.InterpolantFactoryMethodDiscrete;break;case Fi:t=this.InterpolantFactoryMethodLinear;break;case _r:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hs;case this.InterpolantFactoryMethodLinear:return Fi;case this.InterpolantFactoryMethodSmooth:return _r}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=Rn(n,s,r),this.values=Rn(this.values,s*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){const a=n[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(r!==null&&r>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,r),e=!1;break}r=a}if(i!==void 0&&Lc(i))for(let o=0,a=i.length;o!==a;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Rn(this.times),t=Rn(this.values),n=this.getValueSize(),i=this.getInterpolation()===_r,s=e.length-1;let r=1;for(let o=1;o<s;++o){let a=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)a=!0;else{const d=o*n,u=d-n,p=d+n;for(let g=0;g!==n;++g){const m=t[d+g];if(m!==t[u+g]||m!==t[p+g]){a=!0;break}}}if(a){if(o!==r){e[r]=e[o];const d=o*n,u=r*n;for(let p=0;p!==n;++p)t[u+p]=t[d+p]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,a=r*n,c=0;c!==n;++c)t[a+c]=t[o+c];++r}return r!==e.length?(this.times=Rn(e,0,r),this.values=Rn(t,0,r*n)):(this.times=e,this.values=t),this}clone(){const e=Rn(this.times,0),t=Rn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=Fi;class Hi extends nn{}Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=hs;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;class Pc extends nn{}Pc.prototype.ValueTypeName="color";class fs extends nn{}fs.prototype.ValueTypeName="number";class Sg extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)en.slerpFlat(s,0,r,c-o,r,c,a);return s}}class ei extends nn{InterpolantFactoryMethodLinear(e){return new Sg(this.times,this.values,this.getValueSize(),e)}}ei.prototype.ValueTypeName="quaternion";ei.prototype.DefaultInterpolation=Fi;ei.prototype.InterpolantFactoryMethodSmooth=void 0;class Wi extends nn{}Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=hs;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;class ps extends nn{}ps.prototype.ValueTypeName="vector";class Eg{constructor(e,t=-1,n,i=Yh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=jt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(Ag(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(nn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let o=0;o<s;o++){let a=[],c=[];a.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=yg(a);a=dl(a,1,h),c=dl(c,1,h),!i&&a[0]===0&&(a.push(s),c.push(c[0])),r.push(new fs(".morphTargetInfluences["+t[o].name+"]",a,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,a=e.length;o<a;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,p,g,m){if(p.length!==0){const f=[],v=[];Rc(p,f,v,g),f.length!==0&&m.push(new d(u,f,v))}},i=[],s=e.name||"default",r=e.fps||30,o=e.blendMode;let a=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const p={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let m=0;m<u[g].morphTargets.length;m++)p[u[g].morphTargets[m]]=-1;for(const m in p){const f=[],v=[];for(let x=0;x!==u[g].morphTargets.length;++x){const M=u[g];f.push(M.time),v.push(M.morphTarget===m?1:0)}i.push(new fs(".morphTargetInfluence["+m+"]",f,v))}a=p.length*r}else{const p=".bones["+t[d].name+"]";n(ps,p+".position",u,"pos",i),n(ei,p+".quaternion",u,"rot",i),n(ps,p+".scale",u,"scl",i)}}return i.length===0?null:new this(s,a,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Tg(l){switch(l.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fs;case"vector":case"vector2":case"vector3":case"vector4":return ps;case"color":return Pc;case"quaternion":return ei;case"bool":case"boolean":return Hi;case"string":return Wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+l)}function Ag(l){if(l.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Tg(l.type);if(l.times===void 0){const t=[],n=[];Rc(l.keys,t,n,"value"),l.times=t,l.values=n}return e.parse!==void 0?e.parse(l):new e(l.name,l.times,l.values,l.interpolation)}const Bi={enabled:!1,files:{},add:function(l,e){this.enabled!==!1&&(this.files[l]=e)},get:function(l){if(this.enabled!==!1)return this.files[l]},remove:function(l){delete this.files[l]},clear:function(){this.files={}}};class Cg{constructor(e,t,n){const i=this;let s=!1,r=0,o=0,a;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Lg=new Cg;class ys{constructor(e){this.manager=e!==void 0?e:Lg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const hn={};class Rg extends Error{constructor(e,t){super(e),this.response=t}}class Ic extends ys{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Bi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(hn[e]!==void 0){hn[e].push({onLoad:t,onProgress:n,onError:i});return}hn[e]=[],hn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,a=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=hn[e],d=c.body.getReader(),u=c.headers.get("Content-Length"),p=u?parseInt(u):0,g=p!==0;let m=0;const f=new ReadableStream({start(v){x();function x(){d.read().then(({done:M,value:b})=>{if(M)v.close();else{m+=b.byteLength;const _=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let S=0,R=h.length;S<R;S++){const y=h[S];y.onProgress&&y.onProgress(_)}v.enqueue(b),x()}})}}});return new Response(f)}else throw new Rg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(a){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(u);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Bi.add(e,c);const h=hn[e];delete hn[e];for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=hn[e];if(h===void 0)throw this.manager.itemError(e),c;delete hn[e];for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Pg extends ys{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Bi.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o=ds("img");function a(){h(),Bi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){h(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",a,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Dc extends ys{constructor(e){super(e)}load(e,t,n,i){const s=new vt,r=new Pg(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ro extends tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const fl=new Oe,pl=new D,ml=new D;class Po{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new So,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;pl.setFromMatrixPosition(e.matrixWorld),t.position.copy(pl),ml.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ml),t.updateMatrixWorld(),fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ig extends Po{constructor(){super(new lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=us*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Dg extends Ro{constructor(e,t,n=0,i=Math.PI/3,s=0,r=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tt.DefaultUp),this.updateMatrix(),this.target=new tt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.shadow=new Ig}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const gl=new Oe,Ki=new D,Yr=new D;class Ng extends Po{constructor(){super(new lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ki.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ki),Yr.copy(n.position),Yr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Yr),n.updateMatrixWorld(),i.makeTranslation(-Ki.x,-Ki.y,-Ki.z),gl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gl)}}class Fg extends Ro{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ng}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zg extends Po{constructor(){super(new ni(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Og extends Ro{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tt.DefaultUp),this.updateMatrix(),this.target=new tt,this.shadow=new zg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kn{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Bg extends ys{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Bi.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(a){Bi.add(e,a),t&&t(a),s.manager.itemEnd(e)}).catch(function(a){i&&i(a),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class Nc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=vl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function vl(){return(typeof performance>"u"?Date:performance).now()}const Io="\\[\\]\\.:\\/",Ug=new RegExp("["+Io+"]","g"),Do="[^"+Io+"]",kg="[^"+Io.replace("\\.","")+"]",Vg=/((?:WC+[\/:])*)/.source.replace("WC",Do),Gg=/(WCOD+)?/.source.replace("WCOD",kg),Hg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Do),Wg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Do),qg=new RegExp("^"+Vg+Gg+Hg+Wg+"$"),jg=["material","materials","bones"];class Xg{constructor(e,t,n){const i=n||He.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class He{constructor(e,t,n){this.path=t,this.parsedPath=n||He.parseTrackName(t),this.node=He.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new He.Composite(e,t,n):new He(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ug,"")}static parseTrackName(e){const t=qg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);jg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===t||o.uuid===t)return o;const a=n(o.children);if(a)return a}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=He.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}a=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(a=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}He.Composite=Xg;He.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};He.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};He.prototype.GetterByBindingType=[He.prototype._getValue_direct,He.prototype._getValue_array,He.prototype._getValue_arrayElement,He.prototype._getValue_toArray];He.prototype.SetterByBindingTypeAndVersioning=[[He.prototype._setValue_direct,He.prototype._setValue_direct_setNeedsUpdate,He.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[He.prototype._setValue_array,He.prototype._setValue_array_setNeedsUpdate,He.prototype._setValue_array_setMatrixWorldNeedsUpdate],[He.prototype._setValue_arrayElement,He.prototype._setValue_arrayElement_setNeedsUpdate,He.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[He.prototype._setValue_fromArray,He.prototype._setValue_fromArray_setNeedsUpdate,He.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class xl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Yg extends Ac{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Mt;i.setAttribute("position",new ct(t,3)),i.setAttribute("color",new ct(n,3));const s=new Co({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Se,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yo);class lr{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const $g=new ni(-1,1,1,-1,0,1),No=new Mt;No.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3));No.setAttribute("uv",new ct([0,2,0,0,2,0],2));class Kg{constructor(e){this._mesh=new gt(No,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,$g)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class mo extends lr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof tn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=mc.clone(e.uniforms),this.material=new tn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Kg(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}const Zg={uniforms:{tDiffuse:{value:null},resolution:{value:new xe(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`};/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class Qt{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Qt.nextNameID=Qt.nextNameID||0,this.$name.id=`lil-gui-name-${++Qt.nextNameID}`,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Jg extends Qt{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function go(l){let e,t;return(e=l.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=l.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=l.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Qg={isPrimitive:!0,match:l=>typeof l=="string",fromHexString:go,toHexString:go},ms={isPrimitive:!0,match:l=>typeof l=="number",fromHexString:l=>parseInt(l.substring(1),16),toHexString:l=>"#"+l.toString(16).padStart(6,0)},e0={isPrimitive:!1,match:Array.isArray,fromHexString(l,e,t=1){const n=ms.fromHexString(l);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([l,e,t],n=1){n=255/n;const i=l*n<<16^e*n<<8^t*n<<0;return ms.toHexString(i)}},t0={isPrimitive:!1,match:l=>Object(l)===l,fromHexString(l,e,t=1){const n=ms.fromHexString(l);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:l,g:e,b:t},n=1){n=255/n;const i=l*n<<16^e*n<<8^t*n<<0;return ms.toHexString(i)}},n0=[Qg,ms,e0,t0];function i0(l){return n0.find(e=>e.match(l))}class s0 extends Qt{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=i0(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=go(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class $r extends Qt{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class r0 extends Qt{constructor(e,t,n,i,s,r){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(s);const o=r!==void 0;this.step(o?r:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},t=v=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+v),this.$input.value=this.getValue())},n=v=>{v.code==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),t(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),t(this._step*this._arrowKeyMultiplier(v)*-1))},i=v=>{this._inputFocused&&(v.preventDefault(),t(this._step*this._normalizeMouseWheel(v)))};let s=!1,r,o,a,c,h;const d=5,u=v=>{r=v.clientX,o=a=v.clientY,s=!0,c=this.getValue(),h=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",g)},p=v=>{if(s){const x=v.clientX-r,M=v.clientY-o;Math.abs(M)>d?(v.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>d&&g()}s||(h-=(v.clientY-a)*this._step*this._arrowKeyMultiplier(v),c+h>this._max?h=this._max-c:c+h<this._min&&(h=this._min-c),this._snapClampSetValue(c+h)),a=v.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",u),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(v,x,M,b,_)=>(v-x)/(M-x)*(_-b)+b,t=v=>{const x=this.$slider.getBoundingClientRect();let M=e(v,x.left,x.right,this._min,this._max);this._snapClampSetValue(M)},n=v=>{this._setDraggingStyle(!0),t(v.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=v=>{t(v.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let r=!1,o,a;const c=v=>{v.preventDefault(),this._setDraggingStyle(!0),t(v.touches[0].clientX),r=!1},h=v=>{v.touches.length>1||(this._hasScrollBar?(o=v.touches[0].clientX,a=v.touches[0].clientY,r=!0):c(v),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=v=>{if(r){const x=v.touches[0].clientX-o,M=v.touches[0].clientY-a;Math.abs(x)>Math.abs(M)?c(v):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else v.preventDefault(),t(v.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},p=this._callOnFinishChange.bind(this),g=400;let m;const f=v=>{if(Math.abs(v.deltaX)<Math.abs(v.deltaY)&&this._hasScrollBar)return;v.preventDefault();const M=this._normalizeMouseWheel(v)*this._step;this._snapClampSetValue(this.getValue()+M),this.$input.value=this.getValue(),clearTimeout(m),m=setTimeout(p,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",f,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class o0 extends Qt{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(s=>{const r=document.createElement("option");r.innerHTML=s,this.$select.appendChild(r)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class a0 extends Qt{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const l0=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "\u2195";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "\u25BE";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "\u25B8";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "\u2713";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function c0(l){const e=document.createElement("style");e.innerHTML=l;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let _l=!1;class Fo{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",injectStyles:r=!0,touchStyles:o=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",a=>{(a.code==="Enter"||a.code==="Space")&&(a.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),o&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!_l&&r&&(c0(l0),_l=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation())}add(e,t,n,i,s){if(Object(n)===n)return new o0(this,e,t,n);const r=e[t];switch(typeof r){case"number":return new r0(this,e,t,n,i,s);case"boolean":return new Jg(this,e,t);case"string":return new a0(this,e,t);case"function":return new $r(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,r)}addColor(e,t,n=1){return new s0(this,e,t,n)}addFolder(e){return new Fo({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof $r||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof $r)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const yl={type:"change"},Kr={type:"start"},bl={type:"end"};class h0 extends ti{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ai.ROTATE,MIDDLE:ai.DOLLY,RIGHT:ai.PAN},this.touches={ONE:li.ROTATE,TWO:li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",Et),this._domElementKeyEvents=T},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(yl),n.update(),s=i.NONE},this.update=function(){const T=new D,Q=new en().setFromUnitVectors(e.up,new D(0,1,0)),ie=Q.clone().invert(),ce=new D,ae=new en,be=2*Math.PI;return function(){const je=n.object.position;T.copy(je).sub(n.target),T.applyQuaternion(Q),o.setFromVector3(T),n.autoRotate&&s===i.NONE&&C(R()),n.enableDamping?(o.theta+=a.theta*n.dampingFactor,o.phi+=a.phi*n.dampingFactor):(o.theta+=a.theta,o.phi+=a.phi);let z=n.minAzimuthAngle,re=n.maxAzimuthAngle;return isFinite(z)&&isFinite(re)&&(z<-Math.PI?z+=be:z>Math.PI&&(z-=be),re<-Math.PI?re+=be:re>Math.PI&&(re-=be),z<=re?o.theta=Math.max(z,Math.min(re,o.theta)):o.theta=o.theta>(z+re)/2?Math.max(z,o.theta):Math.min(re,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),T.setFromSpherical(o),T.applyQuaternion(ie),je.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(a.theta*=1-n.dampingFactor,a.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(a.set(0,0,0),h.set(0,0,0)),c=1,d||ce.distanceToSquared(n.object.position)>r||8*(1-ae.dot(n.object.quaternion))>r?(n.dispatchEvent(yl),ce.copy(n.object.position),ae.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Y),n.domElement.removeEventListener("pointerdown",Ze),n.domElement.removeEventListener("pointercancel",St),n.domElement.removeEventListener("wheel",Pt),n.domElement.removeEventListener("pointermove",ht),n.domElement.removeEventListener("pointerup",nt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Et)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,o=new xl,a=new xl;let c=1;const h=new D;let d=!1;const u=new xe,p=new xe,g=new xe,m=new xe,f=new xe,v=new xe,x=new xe,M=new xe,b=new xe,_=[],S={};function R(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function C(T){a.theta-=T}function O(T){a.phi-=T}const B=function(){const T=new D;return function(ie,ce){T.setFromMatrixColumn(ce,0),T.multiplyScalar(-ie),h.add(T)}}(),$=function(){const T=new D;return function(ie,ce){n.screenSpacePanning===!0?T.setFromMatrixColumn(ce,1):(T.setFromMatrixColumn(ce,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(ie),h.add(T)}}(),N=function(){const T=new D;return function(ie,ce){const ae=n.domElement;if(n.object.isPerspectiveCamera){const be=n.object.position;T.copy(be).sub(n.target);let Pe=T.length();Pe*=Math.tan(n.object.fov/2*Math.PI/180),B(2*ie*Pe/ae.clientHeight,n.object.matrix),$(2*ce*Pe/ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(ie*(n.object.right-n.object.left)/n.object.zoom/ae.clientWidth,n.object.matrix),$(ce*(n.object.top-n.object.bottom)/n.object.zoom/ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function P(T){n.object.isPerspectiveCamera?c/=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*T)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(T){n.object.isPerspectiveCamera?c*=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/T)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function I(T){u.set(T.clientX,T.clientY)}function q(T){x.set(T.clientX,T.clientY)}function k(T){m.set(T.clientX,T.clientY)}function U(T){p.set(T.clientX,T.clientY),g.subVectors(p,u).multiplyScalar(n.rotateSpeed);const Q=n.domElement;C(2*Math.PI*g.x/Q.clientHeight),O(2*Math.PI*g.y/Q.clientHeight),u.copy(p),n.update()}function W(T){M.set(T.clientX,T.clientY),b.subVectors(M,x),b.y>0?P(y()):b.y<0&&F(y()),x.copy(M),n.update()}function J(T){f.set(T.clientX,T.clientY),v.subVectors(f,m).multiplyScalar(n.panSpeed),N(v.x,v.y),m.copy(f),n.update()}function H(T){T.deltaY<0?F(y()):T.deltaY>0&&P(y()),n.update()}function ee(T){let Q=!1;switch(T.code){case n.keys.UP:N(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:N(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:N(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:N(-n.keyPanSpeed,0),Q=!0;break}Q&&(T.preventDefault(),n.update())}function fe(){if(_.length===1)u.set(_[0].pageX,_[0].pageY);else{const T=.5*(_[0].pageX+_[1].pageX),Q=.5*(_[0].pageY+_[1].pageY);u.set(T,Q)}}function ve(){if(_.length===1)m.set(_[0].pageX,_[0].pageY);else{const T=.5*(_[0].pageX+_[1].pageX),Q=.5*(_[0].pageY+_[1].pageY);m.set(T,Q)}}function K(){const T=_[0].pageX-_[1].pageX,Q=_[0].pageY-_[1].pageY,ie=Math.sqrt(T*T+Q*Q);x.set(0,ie)}function Ie(){n.enableZoom&&K(),n.enablePan&&ve()}function _e(){n.enableZoom&&K(),n.enableRotate&&fe()}function we(T){if(_.length==1)p.set(T.pageX,T.pageY);else{const ie=ye(T),ce=.5*(T.pageX+ie.x),ae=.5*(T.pageY+ie.y);p.set(ce,ae)}g.subVectors(p,u).multiplyScalar(n.rotateSpeed);const Q=n.domElement;C(2*Math.PI*g.x/Q.clientHeight),O(2*Math.PI*g.y/Q.clientHeight),u.copy(p)}function me(T){if(_.length===1)f.set(T.pageX,T.pageY);else{const Q=ye(T),ie=.5*(T.pageX+Q.x),ce=.5*(T.pageY+Q.y);f.set(ie,ce)}v.subVectors(f,m).multiplyScalar(n.panSpeed),N(v.x,v.y),m.copy(f)}function ke(T){const Q=ye(T),ie=T.pageX-Q.x,ce=T.pageY-Q.y,ae=Math.sqrt(ie*ie+ce*ce);M.set(0,ae),b.set(0,Math.pow(M.y/x.y,n.zoomSpeed)),P(b.y),x.copy(M)}function Te(T){n.enableZoom&&ke(T),n.enablePan&&me(T)}function ge(T){n.enableZoom&&ke(T),n.enableRotate&&we(T)}function Ze(T){n.enabled!==!1&&(_.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",ht),n.domElement.addEventListener("pointerup",nt)),te(T),T.pointerType==="touch"?L(T):it(T))}function ht(T){n.enabled!==!1&&(T.pointerType==="touch"?E(T):Ve(T))}function nt(T){ne(T),_.length===0&&(n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",ht),n.domElement.removeEventListener("pointerup",nt)),n.dispatchEvent(bl),s=i.NONE}function St(T){ne(T)}function it(T){let Q;switch(T.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case ai.DOLLY:if(n.enableZoom===!1)return;q(T),s=i.DOLLY;break;case ai.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;k(T),s=i.PAN}else{if(n.enableRotate===!1)return;I(T),s=i.ROTATE}break;case ai.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;I(T),s=i.ROTATE}else{if(n.enablePan===!1)return;k(T),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Kr)}function Ve(T){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;U(T);break;case i.DOLLY:if(n.enableZoom===!1)return;W(T);break;case i.PAN:if(n.enablePan===!1)return;J(T);break}}function Pt(T){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(T.preventDefault(),n.dispatchEvent(Kr),H(T),n.dispatchEvent(bl))}function Et(T){n.enabled===!1||n.enablePan===!1||ee(T)}function L(T){switch(le(T),_.length){case 1:switch(n.touches.ONE){case li.ROTATE:if(n.enableRotate===!1)return;fe(),s=i.TOUCH_ROTATE;break;case li.PAN:if(n.enablePan===!1)return;ve(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case li.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ie(),s=i.TOUCH_DOLLY_PAN;break;case li.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_e(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Kr)}function E(T){switch(le(T),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;we(T),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;me(T),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Te(T),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ge(T),n.update();break;default:s=i.NONE}}function Y(T){n.enabled!==!1&&T.preventDefault()}function te(T){_.push(T)}function ne(T){delete S[T.pointerId];for(let Q=0;Q<_.length;Q++)if(_[Q].pointerId==T.pointerId){_.splice(Q,1);return}}function le(T){let Q=S[T.pointerId];Q===void 0&&(Q=new xe,S[T.pointerId]=Q),Q.set(T.pageX,T.pageY)}function ye(T){const Q=T.pointerId===_[0].pointerId?_[1]:_[0];return S[Q.pointerId]}n.domElement.addEventListener("contextmenu",Y),n.domElement.addEventListener("pointerdown",Ze),n.domElement.addEventListener("pointercancel",St),n.domElement.addEventListener("wheel",Pt,{passive:!1}),this.update()}}var as=function(){var l=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),n(++l%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function n(h){for(var d=0;d<e.children.length;d++)e.children[d].style.display=d===h?"block":"none";l=h}var i=(performance||Date).now(),s=i,r=0,o=t(new as.Panel("FPS","#0ff","#002")),a=t(new as.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new as.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){r++;var h=(performance||Date).now();if(a.update(h-i,200),h>=s+1e3&&(o.update(r*1e3/(h-s),100),s=h,r=0,c)){var d=performance.memory;c.update(d.usedJSHeapSize/1048576,d.jsHeapSizeLimit/1048576)}return h},update:function(){i=this.end()},domElement:e,setMode:n}};as.Panel=function(l,e,t){var n=1/0,i=0,s=Math.round,r=s(window.devicePixelRatio||1),o=80*r,a=48*r,c=3*r,h=2*r,d=3*r,u=15*r,p=74*r,g=30*r,m=document.createElement("canvas");m.width=o,m.height=a,m.style.cssText="width:80px;height:48px";var f=m.getContext("2d");return f.font="bold "+9*r+"px Helvetica,Arial,sans-serif",f.textBaseline="top",f.fillStyle=t,f.fillRect(0,0,o,a),f.fillStyle=e,f.fillText(l,c,h),f.fillRect(d,u,p,g),f.fillStyle=t,f.globalAlpha=.9,f.fillRect(d,u,p,g),{dom:m,update:function(v,x){n=Math.min(n,v),i=Math.max(i,v),f.fillStyle=t,f.globalAlpha=1,f.fillRect(0,0,o,u),f.fillStyle=e,f.fillText(s(v)+" "+l+" ("+s(n)+"-"+s(i)+")",c,h),f.drawImage(m,d+r,u,p-r,g,d,u,p-r,g),f.fillRect(d+p-r,u,r,g),f.fillStyle=t,f.globalAlpha=.9,f.fillRect(d+p-r,u,r,s((1-v/x)*g))}}};class u0 extends ys{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new g0(t)}),this.register(function(t){return new M0(t)}),this.register(function(t){return new S0(t)}),this.register(function(t){return new x0(t)}),this.register(function(t){return new _0(t)}),this.register(function(t){return new y0(t)}),this.register(function(t){return new b0(t)}),this.register(function(t){return new m0(t)}),this.register(function(t){return new w0(t)}),this.register(function(t){return new v0(t)}),this.register(function(t){return new f0(t)}),this.register(function(t){return new E0(t)})}load(e,t,n,i){const s=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=Kn.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},a=new Ic(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{s.parse(c,r,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},o={};if(typeof e=="string")s=e;else if(Kn.decodeText(new Uint8Array(e,0,4))===Fc){try{r[Re.KHR_BINARY_GLTF]=new T0(e)}catch(d){i&&i(d);return}s=r[Re.KHR_BINARY_GLTF].content}else s=Kn.decodeText(new Uint8Array(e));const a=JSON.parse(s);if(a.asset===void 0||a.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new U0(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);o[d.name]=d,r[d.name]=!0}if(a.extensionsUsed)for(let h=0;h<a.extensionsUsed.length;++h){const d=a.extensionsUsed[h],u=a.extensionsRequired||[];switch(d){case Re.KHR_MATERIALS_UNLIT:r[d]=new p0;break;case Re.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:r[d]=new L0;break;case Re.KHR_DRACO_MESH_COMPRESSION:r[d]=new A0(a,this.dracoLoader);break;case Re.KHR_TEXTURE_TRANSFORM:r[d]=new C0;break;case Re.KHR_MESH_QUANTIZATION:r[d]=new R0;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(r),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function d0(){let l={};return{get:function(e){return l[e]},add:function(e,t){l[e]=t},remove:function(e){delete l[e]},removeAll:function(){l={}}}}const Re={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class f0{constructor(e){this.parser=e,this.name=Re.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,a=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Se(16777215);a.color!==void 0&&h.fromArray(a.color);const d=a.range!==void 0?a.range:0;switch(a.type){case"directional":c=new Og(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Fg(h),c.distance=d;break;case"spot":c=new Dg(h),c.distance=d,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,c.angle=a.spot.outerConeAngle,c.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return c.position.set(0,0,0),c.decay=2,a.intensity!==void 0&&(c.intensity=a.intensity),c.name=t.createUniqueName(a.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(a){return n._getNodeRef(t.cache,o,a)})}}class p0{constructor(){this.name=Re.KHR_MATERIALS_UNLIT}getMaterialType(){return Ot}extendParams(e,t,n){const i=[];e.color=new Se(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,ze))}return Promise.all(i)}}class m0{constructor(e){this.parser=e,this.name=Re.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class g0{constructor(e){this.parser=e,this.name=Re.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new xe(o,o)}return Promise.all(s)}}class v0{constructor(e){this.parser=e,this.name=Re.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class x0{constructor(e){this.parser=e,this.name=Re.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,ze)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class _0{constructor(e){this.parser=e,this.name=Re.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class y0{constructor(e){this.parser=e,this.name=Re.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new Se(o[0],o[1],o[2]),Promise.all(s)}}class b0{constructor(e){this.parser=e,this.name=Re.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class w0{constructor(e){this.parser=e,this.name=Re.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new Se(o[0],o[1],o[2]),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,ze)),Promise.all(s)}}class M0{constructor(e){this.parser=e,this.name=Re.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class S0{constructor(e){this.parser=e,this.name=Re.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let a=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(a=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,a);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class E0{constructor(e){this.name=Re.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([s,r.ready]).then(function(o){const a=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,u=new ArrayBuffer(h*d),p=new Uint8Array(o[0],a,c);return r.decodeGltfBuffer(new Uint8Array(u),h,d,p,i.mode,i.filter),u})}else return null}}const Fc="glTF",Zi=12,wl={JSON:1313821514,BIN:5130562};class T0{constructor(e){this.name=Re.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Zi);if(this.header={magic:Kn.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Fc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Zi,i=new DataView(e,Zi);let s=0;for(;s<n;){const r=i.getUint32(s,!0);s+=4;const o=i.getUint32(s,!0);if(s+=4,o===wl.JSON){const a=new Uint8Array(e,Zi+s,r);this.content=Kn.decodeText(a)}else if(o===wl.BIN){const a=Zi+s;this.body=e.slice(a,a+r)}s+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class A0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Re.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},a={},c={};for(const h in r){const d=xo[h]||h.toLowerCase();o[d]=r[h]}for(const h in e.attributes){const d=xo[h]||h.toLowerCase();if(r[h]!==void 0){const u=n.accessors[e.attributes[h]],p=gs[u.componentType];c[d]=p,a[d]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(d){i.decodeDracoFile(h,function(u){for(const p in u.attributes){const g=u.attributes[p],m=a[p];m!==void 0&&(g.normalized=m)}d(u)},o,c)})})}}class C0{constructor(){this.name=Re.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class vo extends ar{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),r=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),o={specular:{value:new Se().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(a){for(const c in o)a.uniforms[c]=o[c];a.fragmentShader=a.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",r)},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(a){o.specular.value=a}},specularMap:{get:function(){return o.specularMap.value},set:function(a){o.specularMap.value=a,a?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return o.glossiness.value},set:function(a){o.glossiness.value=a}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(a){o.glossinessMap.value=a,a?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class L0{constructor(){this.name=Re.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return vo}extendParams(e,t,n){const i=t.extensions[this.name];e.color=new Se(1,1,1),e.opacity=1;const s=[];if(Array.isArray(i.diffuseFactor)){const r=i.diffuseFactor;e.color.fromArray(r),e.opacity=r[3]}if(i.diffuseTexture!==void 0&&s.push(n.assignTexture(e,"map",i.diffuseTexture,ze)),e.emissive=new Se(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new Se(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const r=i.specularGlossinessTexture;s.push(n.assignTexture(e,"glossinessMap",r)),s.push(n.assignTexture(e,"specularMap",r,ze))}return Promise.all(s)}createMaterial(e){const t=new vo(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=bo,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class R0{constructor(){this.name=Re.KHR_MESH_QUANTIZATION}}class zc extends _s{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=o*2,c=o*3,h=i-t,d=(n-t)/h,u=d*d,p=u*d,g=e*c,m=g-c,f=-2*p+3*u,v=p-u,x=1-f,M=v-u+d;for(let b=0;b!==o;b++){const _=r[m+b+o],S=r[m+b+a]*h,R=r[g+b+o],y=r[g+b]*h;s[b]=x*_+M*S+f*R+v*y}return s}}const P0=new en;class I0 extends zc{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return P0.fromArray(s).normalize().toArray(s),s}}const un={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},gs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ml={9728:ut,9729:pt,9984:ao,9985:ic,9986:lo,9987:Ui},Sl={33071:Ft,33648:Di,10497:Ii},El={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Pn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},D0={CUBICSPLINE:void 0,LINEAR:Fi,STEP:hs},Zr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function N0(l){return l.DefaultMaterial===void 0&&(l.DefaultMaterial=new ar({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Li})),l.DefaultMaterial}function Ji(l,e,t){for(const n in t.extensions)l[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Gn(l,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(l.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function F0(l,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(l);const r=[],o=[],a=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):l.attributes.position;r.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):l.attributes.normal;o.push(u)}if(s){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):l.attributes.color;a.push(u)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(a)]).then(function(c){const h=c[0],d=c[1],u=c[2];return n&&(l.morphAttributes.position=h),i&&(l.morphAttributes.normal=d),s&&(l.morphAttributes.color=u),l.morphTargetsRelative=!0,l})}function z0(l,e){if(l.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)l.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(l.morphTargetInfluences.length===t.length){l.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)l.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function O0(l){const e=l.extensions&&l.extensions[Re.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Tl(e.attributes):t=l.indices+":"+Tl(l.attributes)+":"+l.mode,t}function Tl(l){let e="";const t=Object.keys(l).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+l[t[n]]+";";return e}function _o(l){switch(l){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function B0(l){return l.search(/\.jpe?g($|\?)/i)>0||l.search(/^data\:image\/jpeg/)===0?"image/jpeg":l.search(/\.webp($|\?)/i)>0||l.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class U0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new d0,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Dc(this.options.manager):this.textureLoader=new Bg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ic(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};Ji(s,o,i),Gn(o,i),Promise.all(n._invokeAll(function(a){return a.afterRoot&&a.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let o=0,a=r.length;o<a;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,o)=>{const a=this.associations.get(r);a!=null&&this.associations.set(o,a);for(const[c,h]of r.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Re.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(Kn.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],a=El[i.type],c=gs[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*a,u=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let m,f;if(p&&p!==d){const v=Math.floor(u/p),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+v+":"+i.count;let M=t.cache.get(x);M||(m=new c(o,v*p,i.count*p/h),M=new dg(m,p/h),t.cache.add(x,M)),f=new To(M,a,u%p/h,g)}else o===null?m=new c(i.count*a):m=new c(o,u,i.count*a),f=new Lt(m,a,g);if(i.sparse!==void 0){const v=El.SCALAR,x=gs[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,_=new x(r[1],M,i.sparse.count*v),S=new c(r[2],b,i.sparse.count*a);o!==null&&(f=new Lt(f.array.slice(),f.itemSize,f.normalized));for(let R=0,y=_.length;R<y;R++){const C=_[R];if(f.setX(C,S[R*a]),a>=2&&f.setY(C,S[R*a+1]),a>=3&&f.setZ(C,S[R*a+2]),a>=4&&f.setW(C,S[R*a+3]),a>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let o=this.textureLoader;if(r.uri){const a=n.manager.getHandler(r.uri);a!==null&&(o=a)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],o=s.images[t],a=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[a])return this.textureCache[a];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,r.name&&(h.name=r.name);const u=(s.samplers||{})[r.sampler]||{};return h.magFilter=Ml[u.magFilter]||pt,h.minFilter=Ml[u.minFilter]||Ui,h.wrapS=Sl[u.wrapS]||Ii,h.wrapT=Sl[u.wrapT]||Ii,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[a]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const r=i.images[e],o=self.URL||self.webkitURL;let a=r.uri||"",c=!1;if(r.bufferView!==void 0)a=n.getDependency("bufferView",r.bufferView).then(function(d){c=!0;const u=new Blob([d],{type:r.mimeType});return a=o.createObjectURL(u),a});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(a).then(function(d){return new Promise(function(u,p){let g=u;t.isImageBitmapLoader===!0&&(g=function(m){const f=new vt(m);f.needsUpdate=!0,u(f)}),t.load(Kn.resolveURL(d,s.path),g,void 0,p)})}).then(function(d){return c===!0&&o.revokeObjectURL(a),d.userData.mimeType=r.mimeType||B0(r.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",a),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Re.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Re.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const a=s.associations.get(r);r=s.extensions[Re.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,a)}}return i!==void 0&&(r.encoding=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let a=this.cache.get(o);a||(a=new Cc,Jt.prototype.copy.call(a,n),a.color.copy(n.color),a.map=n.map,a.sizeAttenuation=!1,this.cache.add(o,a)),n=a}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let a=this.cache.get(o);a||(a=new Co,Jt.prototype.copy.call(a,n),a.color.copy(n.color),this.cache.add(o,a)),n=a}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(o+="specular-glossiness:"),i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let a=this.cache.get(o);a||(a=n.clone(),s&&(a.vertexColors=!0),r&&(a.flatShading=!0),i&&(a.normalScale&&(a.normalScale.y*=-1),a.clearcoatNormalScale&&(a.clearcoatNormalScale.y*=-1)),this.cache.add(o,a),this.associations.set(a,this.associations.get(n))),n=a}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return ar}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const o={},a=s.extensions||{},c=[];if(a[Re.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const d=i[Re.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];r=d.getMaterialType(),c.push(d.extendParams(o,s,t))}else if(a[Re.KHR_MATERIALS_UNLIT]){const d=i[Re.KHR_MATERIALS_UNLIT];r=d.getMaterialType(),c.push(d.extendParams(o,s,t))}else{const d=s.pbrMetallicRoughness||{};if(o.color=new Se(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.fromArray(u),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,ze)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),r=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Zn);const h=s.alphaMode||Zr.OPAQUE;if(h===Zr.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Zr.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Ot&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new xe(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;o.normalScale.set(d,d)}return s.occlusionTexture!==void 0&&r!==Ot&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Ot&&(o.emissive=new Se().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&r!==Ot&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,ze)),Promise.all(c).then(function(){let d;return r===vo?d=i[Re.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o):d=new r(o),s.name&&(d.name=s.name),Gn(d,s),t.associations.set(d,{materials:e}),s.extensions&&Ji(i,d,s),d})}createUniqueName(e){const t=He.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Re.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(a){return Al(a,o,t)})}const r=[];for(let o=0,a=e.length;o<a;o++){const c=e[o],h=O0(c),d=i[h];if(d)r.push(d.promise);else{let u;c.extensions&&c.extensions[Re.KHR_DRACO_MESH_COMPRESSION]?u=s(c):u=Al(new Mt,c,t),i[h]={primitive:c,promise:u},r.push(u)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let a=0,c=r.length;a<c;a++){const h=r[a].material===void 0?N0(this.cache):this.getDependency("material",r[a].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(a){const c=a.slice(0,a.length-1),h=a[a.length-1],d=[];for(let p=0,g=h.length;p<g;p++){const m=h[p],f=r[p];let v;const x=c[p];if(f.mode===un.TRIANGLES||f.mode===un.TRIANGLE_STRIP||f.mode===un.TRIANGLE_FAN||f.mode===void 0)v=s.isSkinnedMesh===!0?new pg(m,x):new gt(m,x),v.isSkinnedMesh===!0&&!v.geometry.attributes.skinWeight.normalized&&v.normalizeSkinWeights(),f.mode===un.TRIANGLE_STRIP?v.geometry=Cl(v.geometry,$h):f.mode===un.TRIANGLE_FAN&&(v.geometry=Cl(v.geometry,rc));else if(f.mode===un.LINES)v=new Ac(m,x);else if(f.mode===un.LINE_STRIP)v=new Lo(m,x);else if(f.mode===un.LINE_LOOP)v=new vg(m,x);else if(f.mode===un.POINTS)v=new xg(m,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(v.geometry.morphAttributes).length>0&&z0(v,s),v.name=t.createUniqueName(s.name||"mesh_"+e),Gn(v,s),f.extensions&&Ji(i,v,f),t.assignFinalMaterial(v),d.push(v)}for(let p=0,g=d.length;p<g;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return d[0];const u=new Xn;t.associations.set(u,{meshes:e});for(let p=0,g=d.length;p<g;p++)u.add(d[p]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new lt(Mo.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ni(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Gn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],r=[],o=[],a=[];for(let c=0,h=n.channels.length;c<h;c++){const d=n.channels[c],u=n.samplers[d.sampler],p=d.target,g=p.node!==void 0?p.node:p.id,m=n.parameters!==void 0?n.parameters[u.input]:u.input,f=n.parameters!==void 0?n.parameters[u.output]:u.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),r.push(this.getDependency("accessor",f)),o.push(u),a.push(p)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(a)]).then(function(c){const h=c[0],d=c[1],u=c[2],p=c[3],g=c[4],m=[];for(let v=0,x=h.length;v<x;v++){const M=h[v],b=d[v],_=u[v],S=p[v],R=g[v];if(M===void 0)continue;M.updateMatrix();let y;switch(Pn[R.path]){case Pn.weights:y=fs;break;case Pn.rotation:y=ei;break;case Pn.position:case Pn.scale:default:y=ps;break}const C=M.name?M.name:M.uuid,O=S.interpolation!==void 0?D0[S.interpolation]:Fi,B=[];Pn[R.path]===Pn.weights?M.traverse(function(N){N.morphTargetInfluences&&B.push(N.name?N.name:N.uuid)}):B.push(C);let $=_.array;if(_.normalized){const N=_o($.constructor),P=new Float32Array($.length);for(let F=0,I=$.length;F<I;F++)P[F]=$[F]*N;$=P}for(let N=0,P=B.length;N<P;N++){const F=new y(B[N]+"."+Pn[R.path],b.array,$,O);S.interpolation==="CUBICSPLINE"&&(F.createInterpolant=function(q){const k=this instanceof ei?I0:zc;return new k(this.times,this.values,this.getValueSize()/3,q)},F.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(F)}}const f=n.name?n.name:"animation_"+e;return new Eg(f,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(!!o.isMesh)for(let a=0,c=i.weights.length;a<c;a++)o.morphTargetInfluences[a]=i.weights[a]}),r})}loadNode(e){const t=this.json,n=this.extensions,i=this,s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"";return function(){const o=[],a=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return a&&o.push(a),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),Promise.all(o)}().then(function(o){let a;if(s.isBone===!0?a=new Tc:o.length>1?a=new Xn:o.length===1?a=o[0]:a=new tt,a!==o[0])for(let c=0,h=o.length;c<h;c++)a.add(o[c]);if(s.name&&(a.userData.name=s.name,a.name=r),Gn(a,s),s.extensions&&Ji(n,a,s),s.matrix!==void 0){const c=new Oe;c.fromArray(s.matrix),a.applyMatrix4(c)}else s.translation!==void 0&&a.position.fromArray(s.translation),s.rotation!==void 0&&a.quaternion.fromArray(s.rotation),s.scale!==void 0&&a.scale.fromArray(s.scale);return i.associations.has(a)||i.associations.set(a,{}),i.associations.get(a).nodes=e,a})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],s=this,r=new Xn;i.name&&(r.name=s.createUniqueName(i.name)),Gn(r,i),i.extensions&&Ji(n,r,i);const o=i.nodes||[],a=[];for(let c=0,h=o.length;c<h;c++)a.push(Oc(o[c],r,t,s));return Promise.all(a).then(function(){const c=h=>{const d=new Map;for(const[u,p]of s.associations)(u instanceof Jt||u instanceof vt)&&d.set(u,p);return h.traverse(u=>{const p=s.associations.get(u);p!=null&&d.set(u,p)}),d};return s.associations=c(r),r})}}function Oc(l,e,t,n){const i=t.nodes[l];return n.getDependency("node",l).then(function(s){if(i.skin===void 0)return s;let r;return n.getDependency("skin",i.skin).then(function(o){r=o;const a=[];for(let c=0,h=r.joints.length;c<h;c++)a.push(n.getDependency("node",r.joints[c]));return Promise.all(a)}).then(function(o){return s.traverse(function(a){if(!a.isMesh)return;const c=[],h=[];for(let d=0,u=o.length;d<u;d++){const p=o[d];if(p){c.push(p);const g=new Oe;r.inverseBindMatrices!==void 0&&g.fromArray(r.inverseBindMatrices.array,d*16),h.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',r.joints[d])}a.bind(new Ao(c,h),a.matrixWorld)}),s})}).then(function(s){e.add(s);const r=[];if(i.children){const o=i.children;for(let a=0,c=o.length;a<c;a++){const h=o[a];r.push(Oc(h,s,t,n))}}return Promise.all(r)})}function k0(l,e,t){const n=e.attributes,i=new ki;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],a=o.min,c=o.max;if(a!==void 0&&c!==void 0){if(i.set(new D(a[0],a[1],a[2]),new D(c[0],c[1],c[2])),o.normalized){const h=_o(gs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new D,a=new D;for(let c=0,h=s.length;c<h;c++){const d=s[c];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],p=u.min,g=u.max;if(p!==void 0&&g!==void 0){if(a.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),a.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),a.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),u.normalized){const m=_o(gs[u.componentType]);a.multiplyScalar(m)}o.max(a)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}l.boundingBox=i;const r=new Vi;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,l.boundingSphere=r}function Al(l,e,t){const n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(a){l.setAttribute(o,a)})}for(const r in n){const o=xo[r]||r.toLowerCase();o in l.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!l.index){const r=t.getDependency("accessor",e.indices).then(function(o){l.setIndex(o)});i.push(r)}return Gn(l,e),k0(l,e,t),Promise.all(i).then(function(){return e.targets!==void 0?F0(l,e.targets,t):l})}function Cl(l,e){let t=l.getIndex();if(t===null){const r=[],o=l.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);l.setIndex(r),t=l.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),l}const n=t.count-2,i=[];if(e===rc)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=l.clone();return s.setIndex(i),s}const Ll={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Rl extends lr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class V0 extends lr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class G0{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new xe);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new yn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Ll===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),mo===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new mo(Ll),this.clock=new Nc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const o=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Rl!==void 0&&(r instanceof Rl?n=!0:r instanceof V0&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new xe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new ni(-1,1,1,-1,0,1);const Bc=new Mt;Bc.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3));Bc.setAttribute("uv",new ct([0,2,0,0,2,0],2));class H0 extends lr{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Se}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==void 0&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=r),e.autoClear=i}}class W0{constructor(e,t="three-container"){se(this,"container");se(this,"renderer");se(this,"scene");se(this,"camera");se(this,"clock");se(this,"resizeCallback");se(this,"disposeCallback");se(this,"_orbitControls");se(this,"_gui");se(this,"enableOrbitControlsDamping",!1);se(this,"animeId");se(this,"composer");se(this,"stats");se(this,"init",()=>{const{width:e,height:t,aspect:n}=this.size,i=new Sc({antialias:!0,alpha:!0});i.setPixelRatio(window.devicePixelRatio),i.setSize(e,t),i.shadowMap.enabled=!0,i.outputEncoding=ze,this.container.appendChild(i.domElement);const s=new Ec,r=new lt(50,n,.01,1e3);return r.position.set(0,0,5),{renderer:i,scene:s,camera:r}});se(this,"setOrbitControls",(e=.1)=>(this._orbitControls||(this._orbitControls=new h0(this.camera,this.renderer.domElement)),typeof e=="number"?(this._orbitControls.enableDamping=!0,this._orbitControls.dampingFactor=e):(this._orbitControls.enableDamping=!1,this._orbitControls.dampingFactor=0),this.enableOrbitControlsDamping=this._orbitControls.enableDamping,this._orbitControls));se(this,"setPerspectiveCamera",(e,t,n,i)=>{this.camera=new lt(e,t,n,i)});se(this,"setOrthographicCamera",(e,t,n,i,s,r)=>{this.camera=new ni(e,t,n,i,s,r)});se(this,"setStats",()=>{this.stats||(this.stats=as(),this.container.appendChild(this.stats.dom))});se(this,"calcCoveredTextureScale",(e,t,n)=>{const i=n!=null?n:new xe,s=e.image.width/e.image.height;return t<s?i.set(t/s,1):i.set(1,s/t),i});se(this,"coveredBackgroundTexture",e=>{e.matrixAutoUpdate=!1;const t=this.calcCoveredTextureScale(e,this.size.aspect);return e.matrix.setUvTransform(0,0,t.x,t.y,0,.5,.5),e});se(this,"getExtension",e=>{const t=e.split(".");return t[t.length-1]});se(this,"loadAssets",async e=>{const t=new Dc,n=new u0;await Promise.all(Object.values(e).map(async i=>{const s=this.getExtension(i.path);if(["jpg","png","webp"].includes(s)){const r=await t.loadAsync(i.path);r.userData.aspect=r.image.width/r.image.height,i.encoding&&(r.encoding=ze),i.flipY!==void 0&&(r.flipY=i.flipY),i.data=r}else if(["glb"].includes(s)){const r=await n.loadAsync(i.path);i.data=r}else if(["webm","mp4"].includes(s)){const r=document.createElement("video");r.src=i.path,r.muted=!0,r.loop=!0,r.autoplay=!0,r.preload="auto",r.playsInline=!0;const o=new _g(r);o.userData.aspect=r.videoWidth/r.videoHeight,i.encoding&&(o.encoding=ze),i.data=o}}))});se(this,"setAxesHelper",e=>{const t=new Yg(e);this.scene.add(t)});se(this,"addEvents",()=>{window.addEventListener("resize",this.handleResize)});se(this,"handleResize",()=>{var i;const{width:e,height:t,aspect:n}=this.size;this.camera instanceof lt?(this.camera.aspect=n,this.camera.updateProjectionMatrix()):this.camera instanceof q0&&this.camera.update(n),this.renderer.setSize(e,t),(i=this.composer)==null||i.setSize(e,t),this.resizeCallback&&this.resizeCallback(),this.render()});se(this,"animate",e=>{var t;this.animeId=requestAnimationFrame(this.animate.bind(this,e)),this.enableOrbitControlsDamping&&((t=this._orbitControls)==null||t.update()),this.stats&&this.stats.update(),e&&e(),this.render()});se(this,"render",()=>{this.composer?this.composer.render():this.renderer.render(this.scene,this.camera)});se(this,"dispose",()=>{this.disposeCallback&&this.disposeCallback(),this.stats&&this.container.removeChild(this.stats.dom),this._gui&&this._gui.destroy(),this.animeId&&cancelAnimationFrame(this.animeId),window.removeEventListener("resize",this.handleResize)});let n;try{if(n=e.querySelector(`.${t}`),!n)throw new Error(`undefind container: ${t}`)}catch(o){throw console.error(o),o}this.container=n;const{renderer:i,scene:s,camera:r}=this.init();this.renderer=i,this.scene=s,this.camera=r,this.clock=new Nc,this.addEvents()}get gui(){return this._gui||(this._gui=new Fo),this._gui}get size(){const{innerWidth:e,innerHeight:t}=window,n=e/t;return{width:e,height:t,aspect:n}}get effectComposer(){return this.composer||(this.composer=new G0(this.renderer),this.composer.addPass(new H0(this.scene,this.camera))),this.composer}}class q0 extends ni{constructor(t,n,i,s){const r=t*s;super(-r,r,t,-t,n,i);se(this,"update",t=>{const n=this.halfHeight*t;this.left=-n,this.right=n,this.updateProjectionMatrix()});this.halfHeight=t}}const Pl=l=>{const e=l.startsWith("/")?l.substring(1):l;return"/physical-raymarchig/"+e},js=(l,e=.1,t=.4)=>Mo.seededRandom(l)*(t-e)+e,Uc=12,tr=[...Array(Uc)].map((l,e)=>{const t=e+1;return{radius:js(t),position:[js(t,-1,1),js(t+100,-1,1),js(t+200,-1,1)]}});var j0=`struct Sphere {\r
  vec3 position;\r
  float radius;\r
};\r
struct Texture {\r
  sampler2D texture;\r
  vec2 uvScale;\r
};

uniform Sphere u_spheres[AMOUNT];\r
uniform float u_aspect;\r
uniform float u_camPosZ;\r
uniform Texture u_image;\r
uniform sampler2D u_matcap;\r
uniform float u_opacity;\r
varying vec2 v_uv;

float fresnel(vec3 eye, vec3 normal) {\r
  return pow(1.0 + dot(eye, normal), 3.0);\r
}\r
vec2 matcap(vec3 eye, vec3 normal) {\r
  vec3 reflected = reflect(eye, normal);\r
  float m = 2.8284271247461903 * sqrt( reflected.z+1.0 );\r
  return reflected.xy / m + 0.5;\r
}\r
vec3 rgb2hsv(vec3 c) {\r
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\r
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\r
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\r
  float d = q.x - min(q.w, q.y);\r
  float e = 1.0e-10;\r
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\r
}\r
vec3 hsv2rgb(vec3 c) {\r
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\r
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\r
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\r
}\r
float opUnion( float d1, float d2 ) { return min(d1,d2); }

float opSubtraction( float d1, float d2 ) { return max(-d1,d2); }

float opIntersection( float d1, float d2 ) { return max(d1,d2); }

float opSmoothUnion( float d1, float d2, float k ) {\r
  float h = clamp( 0.5 + 0.5*(d2-d1)/k, 0.0, 1.0 );\r
  return mix( d2, d1, h ) - k*h*(1.0-h);\r
}

float opSmoothSubtraction( float d1, float d2, float k ) {\r
  float h = clamp( 0.5 - 0.5*(d2+d1)/k, 0.0, 1.0 );\r
  return mix( d2, -d1, h ) + k*h*(1.0-h);\r
}

float opSmoothIntersection( float d1, float d2, float k ) {\r
  float h = clamp( 0.5 - 0.5*(d2-d1)/k, 0.0, 1.0 );\r
  return mix( d2, d1, h ) + k*h*(1.0-h);\r
}\r
float sdSphere( vec3 p, float s ) {\r
  return length(p)-s;\r
}

float sdBox( vec3 p, vec3 b ) {\r
  vec3 q = abs(p) - b;\r
  return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);\r
}

float sdf(vec3 p) {\r
  float final = sdSphere(p - u_spheres[0].position, u_spheres[0].radius);

  for(int i = 1; i < AMOUNT; i++) {\r
    float sphere = sdSphere(p - u_spheres[i].position, u_spheres[i].radius);

    vec3 pos = p - u_spheres[i].position;\r
    float len = length(pos);\r
    float scale = 1.0 - smoothstep(0.0, 2.0, len);\r
    scale = scale * (0.8 - 0.5) + 0.5;

    final = opSmoothUnion(final, sphere, scale);\r
  }

  return final;\r
}

vec3 calcNormal(in vec3 p) {\r
  const float h = 0.0001;\r
  const vec2 k = vec2(1, -1) * h;\r
  return normalize( k.xyy * sdf( p + k.xyy ) + \r
                    k.yyx * sdf( p + k.yyx ) + \r
                    k.yxy * sdf( p + k.yxy ) + \r
                    k.xxx * sdf( p + k.xxx ) );\r
}

void main() {\r
  vec2 centeredUV = (v_uv - 0.5) * vec2(u_aspect, 1.0);\r
  vec3 ray = normalize(vec3(centeredUV, -1.0));\r
  \r
  vec3 camPos = vec3(0.0, 0.0, u_camPosZ);\r
  vec3 rayPos = camPos;\r
  float totalDist = 0.0;\r
  float tMax = u_camPosZ + 2.0;

  for(int i = 0; i < 256; i++) {\r
    float dist = sdf(rayPos);\r
    if (abs(dist) < 0.001 || tMax < totalDist) break;\r
    totalDist += dist;\r
    rayPos = camPos + totalDist * ray;\r
  }

  vec2 uv = (v_uv - 0.5) * u_image.uvScale + 0.5;\r
  vec4 t = texture2D(u_image.texture, uv);\r
  float gray = (t.r + t.g + t.b) / 3.0;\r
  vec4 color = vec4(vec3(gray), u_opacity);

  if(totalDist < tMax) {\r
    vec3 normal = calcNormal(rayPos);\r
    float f = fresnel(ray, normal);

    vec2 matcapUv = matcap(ray, normal);\r
    vec4 _matcap = texture2D(u_matcap, matcapUv);

    vec3 hsv = rgb2hsv(_matcap.rgb);\r
    hsv.g = 0.0;\r
    vec3 rgb = hsv2rgb(hsv);

    vec4 tex = texture2D(u_image.texture, uv + normal.xy * 0.05);

    color = tex;\r
    color.rgb += rgb;\r
    color.rgb += f * 0.7;\r
  }

  gl_FragColor = color;\r
}`,X0=`varying vec2 v_uv;

void main() {\r
  v_uv = uv;\r
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r
}`;class Wt{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new w);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new w);const n=this.elements,i=e.x,s=e.y,r=e.z;return t.x=n[0]*i+n[1]*s+n[2]*r,t.y=n[3]*i+n[4]*s+n[5]*r,t.z=n[6]*i+n[7]*s+n[8]*r,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Wt);const n=this.elements,i=e.elements,s=t.elements,r=n[0],o=n[1],a=n[2],c=n[3],h=n[4],d=n[5],u=n[6],p=n[7],g=n[8],m=i[0],f=i[1],v=i[2],x=i[3],M=i[4],b=i[5],_=i[6],S=i[7],R=i[8];return s[0]=r*m+o*x+a*_,s[1]=r*f+o*M+a*S,s[2]=r*v+o*b+a*R,s[3]=c*m+h*x+d*_,s[4]=c*f+h*M+d*S,s[5]=c*v+h*b+d*R,s[6]=u*m+p*x+g*_,s[7]=u*f+p*M+g*S,s[8]=u*v+p*b+g*R,t}scale(e,t){t===void 0&&(t=new Wt);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new w);const n=3,i=4,s=[];let r,o;for(r=0;r<n*i;r++)s.push(0);for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+i*o]=this.elements[r+3*o];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let a=3;const c=a;let h;const d=4;let u;do{if(r=c-a,s[r+i*r]===0){for(o=r+1;o<c;o++)if(s[r+i*o]!==0){h=d;do u=d-h,s[u+i*r]+=s[u+i*o];while(--h);break}}if(s[r+i*r]!==0)for(o=r+1;o<c;o++){const p=s[r+i*o]/s[r+i*r];h=d;do u=d-h,s[u+i*o]=u<=r?0:s[u+i*o]-s[u+i*r]*p;while(--h)}}while(--a);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new Wt);const t=3,n=6,i=Y0;let s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+n*r]=this.elements[s+3*r];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let o=3;const a=o;let c;const h=n;let d;do{if(s=a-o,i[s+n*s]===0){for(r=s+1;r<a;r++)if(i[s+n*r]!==0){c=h;do d=h-c,i[d+n*s]+=i[d+n*r];while(--c);break}}if(i[s+n*s]!==0)for(r=s+1;r<a;r++){const u=i[s+n*r]/i[s+n*s];c=h;do d=h-c,i[d+n*r]=d<=s?0:i[d+n*r]-i[d+n*s]*u;while(--c)}}while(--o);s=2;do{r=s-1;do{const u=i[s+n*r]/i[s+n*s];c=n;do d=n-c,i[d+n*r]=i[d+n*r]-i[d+n*s]*u;while(--c)}while(r--)}while(--s);s=2;do{const u=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*u;while(--c)}while(s--);s=2;do{r=2;do{if(d=i[t+r+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,r,d)}while(r--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,r=t+t,o=n+n,a=i+i,c=t*r,h=t*o,d=t*a,u=n*o,p=n*a,g=i*a,m=s*r,f=s*o,v=s*a,x=this.elements;return x[3*0+0]=1-(u+g),x[3*0+1]=h-v,x[3*0+2]=d+f,x[3*1+0]=h+v,x[3*1+1]=1-(c+g),x[3*1+2]=p-m,x[3*2+0]=d-f,x[3*2+1]=p+m,x[3*2+2]=1-(c+u),this}transpose(e){e===void 0&&(e=new Wt);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const Y0=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class w{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new w);const n=e.x,i=e.y,s=e.z,r=this.x,o=this.y,a=this.z;return t.x=o*s-a*i,t.y=a*n-r*s,t.z=r*i-o*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new w(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new w(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Wt([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new w);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z;return Math.sqrt((s-t)*(s-t)+(r-n)*(r-n)+(o-i)*(o-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z;return(s-t)*(s-t)+(r-n)*(r-n)+(o-i)*(o-i)}scale(e,t){t===void 0&&(t=new w);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new w),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new w),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new w),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=$0,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const r=K0;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,e)):(r.set(0,1,0),i.cross(r,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,r=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=r+(e.z-r)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Il),Il.almostEquals(e,t)}clone(){return new w(this.x,this.y,this.z)}}w.ZERO=new w(0,0,0);w.UNIT_X=new w(1,0,0);w.UNIT_Y=new w(0,1,0);w.UNIT_Z=new w(0,0,1);const $0=new w,K0=new w,Il=new w;class Rt{constructor(e){e===void 0&&(e={}),this.lowerBound=new w,this.upperBound=new w,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,r=this.upperBound,o=n;s.copy(e[0]),o&&o.vmult(s,s),r.copy(s);for(let a=1;a<e.length;a++){let c=e[a];o&&(o.vmult(c,Dl),c=Dl),c.x>r.x&&(r.x=c.x),c.x<s.x&&(s.x=c.x),c.y>r.y&&(r.y=c.y),c.y<s.y&&(s.y=c.y),c.z>r.z&&(r.z=c.z),c.z<s.z&&(s.z=c.z)}return t&&(t.vadd(s,s),t.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Rt().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,r=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,o=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,a=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return r&&o&&a}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,r,o,a){const c=this.lowerBound,h=this.upperBound;e.copy(c),t.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),r.set(c.x,h.y,c.z),o.set(c.x,c.y,h.z),a.copy(h)}toLocalFrame(e,t){const n=Nl,i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,r,o,a,c,h,d);for(let u=0;u!==8;u++){const p=n[u];e.pointToLocal(p,p)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=Nl,i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,r,o,a,c,h,d);for(let u=0;u!==8;u++){const p=n[u];e.pointToWorld(p,p)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,r=1/t.z,o=(this.lowerBound.x-n.x)*i,a=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*r,u=(this.upperBound.z-n.z)*r,p=Math.max(Math.max(Math.min(o,a),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(o,a),Math.max(c,h)),Math.max(d,u));return!(g<0||p>g)}}const Dl=new w,Nl=[new w,new w,new w,new w,new w,new w,new w,new w];class Fl{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const r=s;s=i,i=r}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class kc{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class Ke{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new w),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=Z0,i=J0;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new Ke);const n=this.x,i=this.y,s=this.z,r=this.w,o=e.x,a=e.y,c=e.z,h=e.w;return t.x=n*h+r*o+i*c-s*a,t.y=i*h+r*a+s*o-n*c,t.z=s*h+r*c+n*a-i*o,t.w=r*h-n*o-i*a-s*c,t}inverse(e){e===void 0&&(e=new Ke);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const r=1/(t*t+n*n+i*i+s*s);return e.x*=r,e.y*=r,e.z*=r,e.w*=r,e}conjugate(e){return e===void 0&&(e=new Ke),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new w);const n=e.x,i=e.y,s=e.z,r=this.x,o=this.y,a=this.z,c=this.w,h=c*n+o*s-a*i,d=c*i+a*n-r*s,u=c*s+r*i-o*n,p=-r*n-o*i-a*s;return t.x=h*c+p*-r+d*-a-u*-o,t.y=d*c+p*-o+u*-r-h*-a,t.z=u*c+p*-a+h*-o-d*-r,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const r=this.x,o=this.y,a=this.z,c=this.w;switch(t){case"YZX":const h=r*o+a*c;if(h>.499&&(n=2*Math.atan2(r,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(r,c),i=-Math.PI/2,s=0),n===void 0){const d=r*r,u=o*o,p=a*a;n=Math.atan2(2*o*c-2*r*a,1-2*u-2*p),i=Math.asin(2*h),s=Math.atan2(2*r*c-2*o*a,1-2*d-2*p)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),r=Math.cos(t/2),o=Math.cos(n/2),a=Math.sin(e/2),c=Math.sin(t/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=a*r*o+s*c*h,this.y=s*c*o-a*r*h,this.z=s*r*h+a*c*o,this.w=s*r*o-a*c*h):i==="YXZ"?(this.x=a*r*o+s*c*h,this.y=s*c*o-a*r*h,this.z=s*r*h-a*c*o,this.w=s*r*o+a*c*h):i==="ZXY"?(this.x=a*r*o-s*c*h,this.y=s*c*o+a*r*h,this.z=s*r*h+a*c*o,this.w=s*r*o-a*c*h):i==="ZYX"?(this.x=a*r*o-s*c*h,this.y=s*c*o+a*r*h,this.z=s*r*h-a*c*o,this.w=s*r*o+a*c*h):i==="YZX"?(this.x=a*r*o+s*c*h,this.y=s*c*o+a*r*h,this.z=s*r*h-a*c*o,this.w=s*r*o-a*c*h):i==="XZY"&&(this.x=a*r*o-s*c*h,this.y=s*c*o-a*r*h,this.z=s*r*h+a*c*o,this.w=s*r*o+a*c*h),this}clone(){return new Ke(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new Ke);const i=this.x,s=this.y,r=this.z,o=this.w;let a=e.x,c=e.y,h=e.z,d=e.w,u,p,g,m,f;return p=i*a+s*c+r*h+o*d,p<0&&(p=-p,a=-a,c=-c,h=-h,d=-d),1-p>1e-6?(u=Math.acos(p),g=Math.sin(u),m=Math.sin((1-t)*u)/g,f=Math.sin(t*u)/g):(m=1-t,f=t),n.x=m*i+f*a,n.y=m*s+f*c,n.z=m*r+f*h,n.w=m*o+f*d,n}integrate(e,t,n,i){i===void 0&&(i=new Ke);const s=e.x*n.x,r=e.y*n.y,o=e.z*n.z,a=this.x,c=this.y,h=this.z,d=this.w,u=t*.5;return i.x+=u*(s*d+r*h-o*c),i.y+=u*(r*d+o*a-s*h),i.z+=u*(o*d+s*c-r*a),i.w+=u*(-s*a-r*c-o*h),i}}const Z0=new w,J0=new w,Q0={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class pe{constructor(e){e===void 0&&(e={}),this.id=pe.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}pe.idCounter=0;pe.types=Q0;class Be{constructor(e){e===void 0&&(e={}),this.position=new w,this.quaternion=new Ke,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Be.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Be.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new w),n.vsub(e,i),t.conjugate(zl),zl.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new w),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new w),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new w),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const zl=new Ke;class ls extends pe{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=e;super({type:pe.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new w;for(let s=0;s!==e.length;s++){const r=e[s],o=r.length;for(let a=0;a!==o;a++){const c=(a+1)%o;t[r[a]].vsub(t[r[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new w;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];ls.computeNormal(i,s,r,t)}static computeNormal(e,t,n,i){const s=new w,r=new w;t.vsub(e,r),n.vsub(t,s),s.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,r,o,a,c){const h=new w;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const m=h.dot(r);m>u&&(u=m,d=g)}const p=[];for(let g=0;g<n.faces[d].length;g++){const m=n.vertices[n.faces[d][g]],f=new w;f.copy(m),s.vmult(f,f),i.vadd(f,f),p.push(f)}d>=0&&this.clipFaceAgainstHull(r,e,t,p,o,a,c)}findSeparatingAxis(e,t,n,i,s,r,o,a){const c=new w,h=new w,d=new w,u=new w,p=new w,g=new w;let m=Number.MAX_VALUE;const f=this;if(f.uniqueAxes)for(let v=0;v!==f.uniqueAxes.length;v++){n.vmult(f.uniqueAxes[v],c);const x=f.testSepAxis(c,e,t,n,i,s);if(x===!1)return!1;x<m&&(m=x,r.copy(c))}else{const v=o?o.length:f.faces.length;for(let x=0;x<v;x++){const M=o?o[x]:x;c.copy(f.faceNormals[M]),n.vmult(c,c);const b=f.testSepAxis(c,e,t,n,i,s);if(b===!1)return!1;b<m&&(m=b,r.copy(c))}}if(e.uniqueAxes)for(let v=0;v!==e.uniqueAxes.length;v++){s.vmult(e.uniqueAxes[v],h);const x=f.testSepAxis(h,e,t,n,i,s);if(x===!1)return!1;x<m&&(m=x,r.copy(h))}else{const v=a?a.length:e.faces.length;for(let x=0;x<v;x++){const M=a?a[x]:x;h.copy(e.faceNormals[M]),s.vmult(h,h);const b=f.testSepAxis(h,e,t,n,i,s);if(b===!1)return!1;b<m&&(m=b,r.copy(h))}}for(let v=0;v!==f.uniqueEdges.length;v++){n.vmult(f.uniqueEdges[v],u);for(let x=0;x!==e.uniqueEdges.length;x++)if(s.vmult(e.uniqueEdges[x],p),u.cross(p,g),!g.almostZero()){g.normalize();const M=f.testSepAxis(g,e,t,n,i,s);if(M===!1)return!1;M<m&&(m=M,r.copy(g))}}return i.vsub(t,d),d.dot(r)>0&&r.negate(r),!0}testSepAxis(e,t,n,i,s,r){const o=this;ls.project(o,e,n,i,Jr),ls.project(t,e,s,r,Qr);const a=Jr[0],c=Jr[1],h=Qr[0],d=Qr[1];if(a<d||h<c)return!1;const u=a-d,p=h-c;return u<p?u:p}calculateLocalInertia(e,t){const n=new w,i=new w;this.computeLocalAABB(i,n);const s=n.x-i.x,r=n.y-i.y,o=n.z-i.z;t.x=1/12*e*(2*r*2*r+2*o*2*o),t.y=1/12*e*(2*s*2*s+2*o*2*o),t.z=1/12*e*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,r,o){const a=new w,c=new w,h=new w,d=new w,u=new w,p=new w,g=new w,m=new w,f=this,v=[],x=i,M=v;let b=-1,_=Number.MAX_VALUE;for(let O=0;O<f.faces.length;O++){a.copy(f.faceNormals[O]),n.vmult(a,a);const B=a.dot(e);B<_&&(_=B,b=O)}if(b<0)return;const S=f.faces[b];S.connectedFaces=[];for(let O=0;O<f.faces.length;O++)for(let B=0;B<f.faces[O].length;B++)S.indexOf(f.faces[O][B])!==-1&&O!==b&&S.connectedFaces.indexOf(O)===-1&&S.connectedFaces.push(O);const R=S.length;for(let O=0;O<R;O++){const B=f.vertices[S[O]],$=f.vertices[S[(O+1)%R]];B.vsub($,c),h.copy(c),n.vmult(h,h),t.vadd(h,h),d.copy(this.faceNormals[b]),n.vmult(d,d),t.vadd(d,d),h.cross(d,u),u.negate(u),p.copy(B),n.vmult(p,p),t.vadd(p,p);const N=S.connectedFaces[O];g.copy(this.faceNormals[N]);const P=this.getPlaneConstantOfFace(N);m.copy(g),n.vmult(m,m);const F=P-m.dot(t);for(this.clipFaceAgainstPlane(x,M,m,F);x.length;)x.shift();for(;M.length;)x.push(M.shift())}g.copy(this.faceNormals[b]);const y=this.getPlaneConstantOfFace(b);m.copy(g),n.vmult(m,m);const C=y-m.dot(t);for(let O=0;O<x.length;O++){let B=m.dot(x[O])+C;if(B<=s&&(console.log(`clamped: depth=${B} to minDist=${s}`),B=s),B<=r){const $=x[O];if(B<=1e-6){const N={point:$,normal:m,depth:B};o.push(N)}}}}clipFaceAgainstPlane(e,t,n,i){let s,r;const o=e.length;if(o<2)return t;let a=e[e.length-1],c=e[0];s=n.dot(a)+i;for(let h=0;h<o;h++){if(c=e[h],r=n.dot(c)+i,s<0)if(r<0){const d=new w;d.copy(c),t.push(d)}else{const d=new w;a.lerp(c,s/(s-r),d),t.push(d)}else if(r<0){const d=new w;a.lerp(c,s/(s-r),d),t.push(d),t.push(c)}a=c,s=r}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new w);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new w);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let r,o,a,c,h,d,u=new w;for(let p=0;p<s.length;p++){u.copy(s[p]),t.vmult(u,u),e.vadd(u,u);const g=u;(r===void 0||g.x<r)&&(r=g.x),(c===void 0||g.x>c)&&(c=g.x),(o===void 0||g.y<o)&&(o=g.y),(h===void 0||g.y>h)&&(h=g.y),(a===void 0||g.z<a)&&(a=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(r,o,a),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new w);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const r=i[s];t.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];t.vmult(r,r)}}if(e)for(let s=0;s<n;s++){const r=i[s];r.vadd(e,r)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=null,r=new w;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=i[o];const c=t[n[o][0]],h=new w;e.vsub(c,h);const d=a.dot(h),u=new w;r.vsub(c,u);const p=a.dot(u);if(d<0&&p>0||d>0&&p<0)return!1}return s?1:-1}static project(e,t,n,i,s){const r=e.vertices.length,o=ev;let a=0,c=0;const h=tv,d=e.vertices;h.setZero(),Be.vectorToLocalFrame(n,i,t,o),Be.pointToLocalFrame(n,i,h,h);const u=h.dot(o);c=a=d[0].dot(o);for(let p=1;p<r;p++){const g=d[p].dot(o);g>a&&(a=g),g<c&&(c=g)}if(c-=u,a-=u,c>a){const p=c;c=a,a=p}s[0]=a,s[1]=c}}const Jr=[],Qr=[];new w;const ev=new w,tv=new w;class zo extends pe{constructor(e){super({type:pe.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=w,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],a=new ls({vertices:s,faces:r,axes:o});this.convexPolyhedronRepresentation=a,a.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new w),zo.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)In.set(s[r][0],s[r][1],s[r][2]),t.vmult(In,In),e.vadd(In,In),n(In.x,In.y,In.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;Yt[0].set(s.x,s.y,s.z),Yt[1].set(-s.x,s.y,s.z),Yt[2].set(-s.x,-s.y,s.z),Yt[3].set(-s.x,-s.y,-s.z),Yt[4].set(s.x,-s.y,-s.z),Yt[5].set(s.x,s.y,-s.z),Yt[6].set(-s.x,s.y,-s.z),Yt[7].set(s.x,-s.y,s.z);const r=Yt[0];t.vmult(r,r),e.vadd(r,r),i.copy(r),n.copy(r);for(let o=1;o<8;o++){const a=Yt[o];t.vmult(a,a),e.vadd(a,a);const c=a.x,h=a.y,d=a.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const In=new w,Yt=[new w,new w,new w,new w,new w,new w,new w,new w],Oo={DYNAMIC:1,STATIC:2,KINEMATIC:4},Bo={AWAKE:0,SLEEPY:1,SLEEPING:2};class ue extends kc{constructor(e){e===void 0&&(e={}),super(),this.id=ue.idCounter++,this.index=-1,this.world=null,this.vlambda=new w,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new w,this.previousPosition=new w,this.interpolatedPosition=new w,this.initPosition=new w,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new w,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new w,this.force=new w;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?ue.STATIC:ue.DYNAMIC,typeof e.type==typeof ue.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=ue.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new w,this.quaternion=new Ke,this.initQuaternion=new Ke,this.previousQuaternion=new Ke,this.interpolatedQuaternion=new Ke,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new w,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new w,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new w,this.invInertia=new w,this.invInertiaWorld=new Wt,this.invMassSolve=0,this.invInertiaSolve=new w,this.invInertiaWorldSolve=new Wt,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new w(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new w(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Rt,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new w,this.isTrigger=Boolean(e.isTrigger),e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=ue.AWAKE,this.wakeUpAfterNarrowphase=!1,e===ue.SLEEPING&&this.dispatchEvent(ue.wakeupEvent)}sleep(){this.sleepState=ue.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===ue.AWAKE&&n<i?(this.sleepState=ue.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(ue.sleepyEvent)):t===ue.SLEEPY&&n>i?this.wakeUp():t===ue.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ue.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ue.SLEEPING||this.type===ue.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new w),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new w),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new w,s=new Ke;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const r=e[s];r.updateBoundingSphereRadius();const o=t[s].length(),a=r.boundingSphereRadius;o+a>i&&(i=o+a)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=nv,r=iv,o=this.quaternion,a=this.aabb,c=sv;for(let h=0;h!==i;h++){const d=e[h];o.vmult(t[h],s),s.vadd(this.position,s),o.mult(n[h],r),d.calculateWorldAABB(s,r,c.lowerBound,c.upperBound),h===0?a.copy(c):a.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=rv,i=ov;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new w),this.type!==ue.DYNAMIC)return;this.sleepState===ue.SLEEPING&&this.wakeUp();const n=av;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new w),this.type!==ue.DYNAMIC)return;const n=lv,i=cv;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===ue.DYNAMIC&&(this.sleepState===ue.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new w),this.type!==ue.DYNAMIC)return;this.sleepState===ue.SLEEPING&&this.wakeUp();const n=t,i=hv;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=uv;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new w),this.type!==ue.DYNAMIC)return;const n=dv,i=fv;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=pv;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),zo.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new w;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ue.DYNAMIC||this.type===ue.KINEMATIC)||this.sleepState===ue.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,r=this.position,o=this.force,a=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,p=h*e;i.x+=o.x*p*u.x,i.y+=o.y*p*u.y,i.z+=o.z*p*u.z;const g=d.elements,m=this.angularFactor,f=a.x*m.x,v=a.y*m.y,x=a.z*m.z;s.x+=e*(g[0]*f+g[1]*v+g[2]*x),s.y+=e*(g[3]*f+g[4]*v+g[5]*x),s.z+=e*(g[6]*f+g[7]*v+g[8]*x),r.x+=i.x*e,r.y+=i.y*e,r.z+=i.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ue.idCounter=0;ue.COLLIDE_EVENT_NAME="collide";ue.DYNAMIC=Oo.DYNAMIC;ue.STATIC=Oo.STATIC;ue.KINEMATIC=Oo.KINEMATIC;ue.AWAKE=Bo.AWAKE;ue.SLEEPY=Bo.SLEEPY;ue.SLEEPING=Bo.SLEEPING;ue.wakeupEvent={type:"wakeup"};ue.sleepyEvent={type:"sleepy"};ue.sleepEvent={type:"sleep"};const nv=new w,iv=new Ke,sv=new Rt,rv=new Wt,ov=new Wt;new Wt;const av=new w,lv=new w,cv=new w,hv=new w,uv=new w,dv=new w,fv=new w,pv=new w;class mv{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&ue.STATIC)!==0||e.sleepState===ue.SLEEPING)&&((t.type&ue.STATIC)!==0||t.sleepState===ue.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=gv;t.position.vsub(e.position,s);const r=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<r&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=vv,i=xv,s=_v,r=e.length;for(let o=0;o!==r;o++)i[o]=e[o],s[o]=t[o];e.length=0,t.length=0;for(let o=0;o!==r;o++){const a=i[o].id,c=s[o].id,h=a<c?`${a},${c}`:`${c},${a}`;n[h]=o,n.keys.push(h)}for(let o=0;o!==n.keys.length;o++){const a=n.keys.pop(),c=n[a];e.push(i[c]),t.push(s[c]),delete n[a]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new w;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const gv=new w;new w;new Ke;new w;const vv={keys:[]},xv=[],_v=[];new w;new w;new w;class yv extends mv{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let r,o;for(let a=0;a!==s;a++)for(let c=0;c!==a;c++)r=i[a],o=i[c],this.needBroadphaseCollision(r,o)&&this.intersectionTest(r,o,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class nr{constructor(){this.rayFromWorld=new w,this.rayToWorld=new w,this.hitNormalWorld=new w,this.hitPointWorld=new w,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,r,o){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=o}}let Vc,Gc,Hc,Wc,qc,jc,Xc;const Uo={CLOSEST:1,ANY:2,ALL:4};Vc=pe.types.SPHERE;Gc=pe.types.PLANE;Hc=pe.types.BOX;Wc=pe.types.CYLINDER;qc=pe.types.CONVEXPOLYHEDRON;jc=pe.types.HEIGHTFIELD;Xc=pe.types.TRIMESH;class et{get[Vc](){return this._intersectSphere}get[Gc](){return this._intersectPlane}get[Hc](){return this._intersectBox}get[Wc](){return this._intersectConvex}get[qc](){return this._intersectConvex}get[jc](){return this._intersectHeightfield}get[Xc](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new w),t===void 0&&(t=new w),this.from=e.clone(),this.to=t.clone(),this.direction=new w,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=et.ANY,this.result=new nr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||et.ANY,this.result=t.result||new nr,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Ol),eo.length=0,e.broadphase.aabbQuery(e,Ol,eo),this.intersectBodies(eo),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=bv,s=wv;for(let r=0,o=e.shapes.length;r<o;r++){const a=e.shapes[r];if(!(n&&!a.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[r],s),e.quaternion.vmult(e.shapeOffsets[r],i),i.vadd(e.position,i),this.intersectShape(a,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(zv(s,this.direction,n)>e.boundingSphereRadius)return;const o=this[e.type];o&&o.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const r=this.from,o=this.to,a=this.direction,c=new w(0,0,1);t.vmult(c,c);const h=new w;r.vsub(n,h);const d=h.dot(c);o.vsub(n,h);const u=h.dot(c);if(d*u>0||r.distanceTo(o)<d)return;const p=c.dot(a);if(Math.abs(p)<this.precision)return;const g=new w,m=new w,f=new w;r.vsub(n,g);const v=-c.dot(g)/p;a.scale(v,m),r.vadd(m,f),this.reportIntersection(c,f,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const r=Mv;r.from.copy(this.from),r.to.copy(this.to),Be.pointToLocalFrame(n,t,r.from,r.from),Be.pointToLocalFrame(n,t,r.to,r.to),r.updateDirection();const o=Sv;let a,c,h,d;a=c=0,h=d=e.data.length-1;const u=new Rt;r.getAABB(u),e.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,o,!0),a=Math.max(a,o[0]),c=Math.max(c,o[1]),e.getIndexOfPosition(u.upperBound.x,u.upperBound.y,o,!0),h=Math.min(h,o[0]+1),d=Math.min(d,o[1]+1);for(let p=a;p<h;p++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(p,g,u),!!u.overlapsRay(r)){if(e.getConvexTrianglePillar(p,g,!1),Be.pointToWorldFrame(n,t,e.pillarOffset,Xs),this._intersectConvex(e.pillarConvex,t,Xs,i,s,Bl),this.result.shouldStop)return;e.getConvexTrianglePillar(p,g,!0),Be.pointToWorldFrame(n,t,e.pillarOffset,Xs),this._intersectConvex(e.pillarConvex,t,Xs,i,s,Bl)}}}_intersectSphere(e,t,n,i,s){const r=this.from,o=this.to,a=e.radius,c=(o.x-r.x)**2+(o.y-r.y)**2+(o.z-r.z)**2,h=2*((o.x-r.x)*(r.x-n.x)+(o.y-r.y)*(r.y-n.y)+(o.z-r.z)*(r.z-n.z)),d=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-a**2,u=h**2-4*c*d,p=Ev,g=Tv;if(!(u<0))if(u===0)r.lerp(o,u,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1);else{const m=(-h-Math.sqrt(u))/(2*c),f=(-h+Math.sqrt(u))/(2*c);if(m>=0&&m<=1&&(r.lerp(o,m,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1)),this.result.shouldStop)return;f>=0&&f<=1&&(r.lerp(o,f,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1))}}_intersectConvex(e,t,n,i,s,r){const o=Av,a=Ul,c=r&&r.faceList||null,h=e.faces,d=e.vertices,u=e.faceNormals,p=this.direction,g=this.from,m=this.to,f=g.distanceTo(m),v=c?c.length:h.length,x=this.result;for(let M=0;!x.shouldStop&&M<v;M++){const b=c?c[M]:M,_=h[b],S=u[b],R=t,y=n;a.copy(d[_[0]]),R.vmult(a,a),a.vadd(y,a),a.vsub(g,a),R.vmult(S,o);const C=p.dot(o);if(Math.abs(C)<this.precision)continue;const O=o.dot(a)/C;if(!(O<0)){p.scale(O,wt),wt.vadd(g,wt),Gt.copy(d[_[0]]),R.vmult(Gt,Gt),y.vadd(Gt,Gt);for(let B=1;!x.shouldStop&&B<_.length-1;B++){$t.copy(d[_[B]]),Kt.copy(d[_[B+1]]),R.vmult($t,$t),R.vmult(Kt,Kt),y.vadd($t,$t),y.vadd(Kt,Kt);const $=wt.distanceTo(g);!(et.pointInTriangle(wt,Gt,$t,Kt)||et.pointInTriangle(wt,$t,Gt,Kt))||$>f||this.reportIntersection(o,wt,s,i,b)}}}}_intersectTrimesh(e,t,n,i,s,r){const o=Cv,a=Nv,c=Fv,h=Ul,d=Lv,u=Rv,p=Pv,g=Dv,m=Iv,f=e.indices;e.vertices;const v=this.from,x=this.to,M=this.direction;c.position.copy(n),c.quaternion.copy(t),Be.vectorToLocalFrame(n,t,M,d),Be.pointToLocalFrame(n,t,v,u),Be.pointToLocalFrame(n,t,x,p),p.x*=e.scale.x,p.y*=e.scale.y,p.z*=e.scale.z,u.x*=e.scale.x,u.y*=e.scale.y,u.z*=e.scale.z,p.vsub(u,d),d.normalize();const b=u.distanceSquared(p);e.tree.rayQuery(this,c,a);for(let _=0,S=a.length;!this.result.shouldStop&&_!==S;_++){const R=a[_];e.getNormal(R,o),e.getVertex(f[R*3],Gt),Gt.vsub(u,h);const y=d.dot(o),C=o.dot(h)/y;if(C<0)continue;d.scale(C,wt),wt.vadd(u,wt),e.getVertex(f[R*3+1],$t),e.getVertex(f[R*3+2],Kt);const O=wt.distanceSquared(u);!(et.pointInTriangle(wt,$t,Gt,Kt)||et.pointInTriangle(wt,Gt,$t,Kt))||O>b||(Be.vectorToWorldFrame(t,o,m),Be.pointToWorldFrame(n,t,wt,g),this.reportIntersection(m,g,s,i,R))}a.length=0}reportIntersection(e,t,n,i,s){const r=this.from,o=this.to,a=r.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case et.ALL:this.hasHit=!0,c.set(r,o,e,t,n,i,a),c.hasHit=!0,this.callback(c);break;case et.CLOSEST:(a<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(r,o,e,t,n,i,a));break;case et.ANY:this.hasHit=!0,c.hasHit=!0,c.set(r,o,e,t,n,i,a),c.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,Wn),n.vsub(t,Qi),e.vsub(t,to);const s=Wn.dot(Wn),r=Wn.dot(Qi),o=Wn.dot(to),a=Qi.dot(Qi),c=Qi.dot(to);let h,d;return(h=a*o-r*c)>=0&&(d=s*c-r*o)>=0&&h+d<s*a-r*r}}et.CLOSEST=Uo.CLOSEST;et.ANY=Uo.ANY;et.ALL=Uo.ALL;const Ol=new Rt,eo=[],Qi=new w,to=new w,bv=new w,wv=new Ke,wt=new w,Gt=new w,$t=new w,Kt=new w;new w;new nr;const Bl={faceList:[0]},Xs=new w,Mv=new et,Sv=[],Ev=new w,Tv=new w,Av=new w;new w;new w;const Ul=new w,Cv=new w,Lv=new w,Rv=new w,Pv=new w,Iv=new w,Dv=new w;new Rt;const Nv=[],Fv=new Be,Wn=new w,Ys=new w;function zv(l,e,t){t.vsub(l,Wn);const n=Wn.dot(e);return e.scale(n,Ys),Ys.vadd(l,Ys),t.distanceTo(Ys)}class Ov{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class kl{constructor(){this.spatial=new w,this.rotational=new w}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class bs{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=bs.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new kl,this.jacobianElementB=new kl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*e-i*t-r*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,r=i.position;return e.spatial.dot(s)+t.spatial.dot(r)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,r=i.velocity,o=n.angularVelocity,a=i.angularVelocity;return e.multiplyVectors(s,o)+t.multiplyVectors(r,a)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,r=i.vlambda,o=n.wlambda,a=i.wlambda;return e.multiplyVectors(s,o)+t.multiplyVectors(r,a)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,r=n.torque,o=i.force,a=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,Vl),o.scale(h,Gl),n.invInertiaWorldSolve.vmult(r,Hl),i.invInertiaWorldSolve.vmult(a,Wl),e.multiplyVectors(Vl,Hl)+t.multiplyVectors(Gl,Wl)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,r=i.invMassSolve,o=n.invInertiaWorldSolve,a=i.invInertiaWorldSolve;let c=s+r;return o.vmult(e.rotational,$s),c+=$s.dot(e.rotational),a.vmult(t.rotational,$s),c+=$s.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,r=Bv;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,r),i.wlambda.addScaledVector(e,r,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,r),s.wlambda.addScaledVector(e,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}bs.idCounter=0;const Vl=new w,Gl=new w,Hl=new w,Wl=new w,$s=new w,Bv=new w;class Uv extends bs{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new w,this.rj=new w,this.ni=new w}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,r=this.ri,o=this.rj,a=kv,c=Vv,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,p=s.angularVelocity;s.force,s.torque;const g=Gv,m=this.jacobianElementA,f=this.jacobianElementB,v=this.ni;r.cross(v,a),o.cross(v,c),v.negate(m.spatial),a.negate(m.rotational),f.spatial.copy(v),f.rotational.copy(c),g.copy(s.position),g.vadd(o,g),g.vsub(i.position,g),g.vsub(r,g);const x=v.dot(g),M=this.restitution+1,b=M*u.dot(v)-M*h.dot(v)+p.dot(c)-d.dot(a),_=this.computeGiMf();return-x*t-b*n-e*_}getImpactVelocityAlongNormal(){const e=Hv,t=Wv,n=qv,i=jv,s=Xv;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const kv=new w,Vv=new w,Gv=new w,Hv=new w,Wv=new w,qv=new w,jv=new w,Xv=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class ql extends bs{constructor(e,t,n){super(e,t,-n,n),this.ri=new w,this.rj=new w,this.t=new w}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=Yv,r=$v,o=this.t;n.cross(o,s),i.cross(o,r);const a=this.jacobianElementA,c=this.jacobianElementB;o.negate(a.spatial),s.negate(a.rotational),c.spatial.copy(o),c.rotational.copy(r);const h=this.computeGW(),d=this.computeGiMf();return-h*t-e*d}}const Yv=new w,$v=new w;class cr{constructor(e,t,n){n=Ov.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=cr.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}cr.idCounter=0;class hr{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=hr.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}hr.idCounter=0;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new et;new w;new w;new w;new w(1,0,0),new w(0,1,0),new w(0,0,1);new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class Yc extends pe{constructor(e){if(super({type:pe.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new w);const n=2*e*this.radius*this.radius/5;return t.x=n,t.y=n,t.z=n,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,n,i){const s=this.radius,r=["x","y","z"];for(let o=0;o<r.length;o++){const a=r[o];n[a]=e[a]-s,i[a]=e[a]+s}}}new w;new w;new w;new w;new w;new w;new w;new w;new w;class Kv extends pe{constructor(){super({type:pe.types.PLANE}),this.worldNormal=new w,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new w),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){dn.set(0,0,1),t.vmult(dn,dn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),dn.x===1?i.x=e.x:dn.x===-1&&(n.x=e.x),dn.y===1?i.y=e.y:dn.y===-1&&(n.y=e.y),dn.z===1?i.z=e.z:dn.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const dn=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new Rt;new w;new Rt;new w;new w;new w;new w;new w;new w;new w;new Rt;new w;new Be;new Rt;class Zv{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Jv extends Zv{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,o=r.length,a=t.bodies,c=a.length,h=e;let d,u,p,g,m,f;if(o!==0)for(let b=0;b!==c;b++)a[b].updateSolveMassProperties();const v=ex,x=tx,M=Qv;v.length=o,x.length=o,M.length=o;for(let b=0;b!==o;b++){const _=r[b];M[b]=0,x[b]=_.computeB(h),v[b]=1/_.computeC()}if(o!==0){for(let S=0;S!==c;S++){const R=a[S],y=R.vlambda,C=R.wlambda;y.set(0,0,0),C.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let S=0;S!==o;S++){const R=r[S];d=x[S],u=v[S],f=M[S],m=R.computeGWlambda(),p=u*(d-m-R.eps*f),f+p<R.minForce?p=R.minForce-f:f+p>R.maxForce&&(p=R.maxForce-f),M[S]+=p,g+=p>0?p:-p,R.addToWlambda(p)}if(g*g<s)break}for(let S=0;S!==c;S++){const R=a[S],y=R.velocity,C=R.angularVelocity;R.vlambda.vmul(R.linearFactor,R.vlambda),y.vadd(R.vlambda,y),R.wlambda.vmul(R.angularFactor,R.wlambda),C.vadd(R.wlambda,C)}let b=r.length;const _=1/h;for(;b--;)r[b].multiplier=M[b]*_}return n}}const Qv=[],ex=[],tx=[];ue.STATIC;class nx{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class ix extends nx{constructor(){super(...arguments),this.type=w}constructObject(){return new w}}const qe={sphereSphere:pe.types.SPHERE,spherePlane:pe.types.SPHERE|pe.types.PLANE,boxBox:pe.types.BOX|pe.types.BOX,sphereBox:pe.types.SPHERE|pe.types.BOX,planeBox:pe.types.PLANE|pe.types.BOX,convexConvex:pe.types.CONVEXPOLYHEDRON,sphereConvex:pe.types.SPHERE|pe.types.CONVEXPOLYHEDRON,planeConvex:pe.types.PLANE|pe.types.CONVEXPOLYHEDRON,boxConvex:pe.types.BOX|pe.types.CONVEXPOLYHEDRON,sphereHeightfield:pe.types.SPHERE|pe.types.HEIGHTFIELD,boxHeightfield:pe.types.BOX|pe.types.HEIGHTFIELD,convexHeightfield:pe.types.CONVEXPOLYHEDRON|pe.types.HEIGHTFIELD,sphereParticle:pe.types.PARTICLE|pe.types.SPHERE,planeParticle:pe.types.PLANE|pe.types.PARTICLE,boxParticle:pe.types.BOX|pe.types.PARTICLE,convexParticle:pe.types.PARTICLE|pe.types.CONVEXPOLYHEDRON,cylinderCylinder:pe.types.CYLINDER,sphereCylinder:pe.types.SPHERE|pe.types.CYLINDER,planeCylinder:pe.types.PLANE|pe.types.CYLINDER,boxCylinder:pe.types.BOX|pe.types.CYLINDER,convexCylinder:pe.types.CONVEXPOLYHEDRON|pe.types.CYLINDER,heightfieldCylinder:pe.types.HEIGHTFIELD|pe.types.CYLINDER,particleCylinder:pe.types.PARTICLE|pe.types.CYLINDER,sphereTrimesh:pe.types.SPHERE|pe.types.TRIMESH,planeTrimesh:pe.types.PLANE|pe.types.TRIMESH};class sx{get[qe.sphereSphere](){return this.sphereSphere}get[qe.spherePlane](){return this.spherePlane}get[qe.boxBox](){return this.boxBox}get[qe.sphereBox](){return this.sphereBox}get[qe.planeBox](){return this.planeBox}get[qe.convexConvex](){return this.convexConvex}get[qe.sphereConvex](){return this.sphereConvex}get[qe.planeConvex](){return this.planeConvex}get[qe.boxConvex](){return this.boxConvex}get[qe.sphereHeightfield](){return this.sphereHeightfield}get[qe.boxHeightfield](){return this.boxHeightfield}get[qe.convexHeightfield](){return this.convexHeightfield}get[qe.sphereParticle](){return this.sphereParticle}get[qe.planeParticle](){return this.planeParticle}get[qe.boxParticle](){return this.boxParticle}get[qe.convexParticle](){return this.convexParticle}get[qe.cylinderCylinder](){return this.convexConvex}get[qe.sphereCylinder](){return this.sphereConvex}get[qe.planeCylinder](){return this.planeConvex}get[qe.boxCylinder](){return this.boxConvex}get[qe.convexCylinder](){return this.convexConvex}get[qe.heightfieldCylinder](){return this.heightfieldCylinder}get[qe.particleCylinder](){return this.particleCylinder}get[qe.sphereTrimesh](){return this.sphereTrimesh}get[qe.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new ix,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,r){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=e,o.bj=t):o=new Uv(e,t),o.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const a=this.currentContactMaterial;o.restitution=a.restitution,o.setSpookParams(a.contactEquationStiffness,a.contactEquationRelaxation,this.world.dt);const c=n.material||e.material,h=i.material||t.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(o.restitution=c.restitution*h.restitution),o.si=s||n,o.sj=r||i,o}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,r=e.sj,o=this.world,a=this.currentContactMaterial;let c=a.friction;const h=s.material||n.material,d=r.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*o.gravity.length();let p=n.invMass+i.invMass;p>0&&(p=1/p);const g=this.frictionEquationPool,m=g.length?g.pop():new ql(n,i,u*p),f=g.length?g.pop():new ql(n,i,u*p);return m.bi=f.bi=n,m.bj=f.bj=i,m.minForce=f.minForce=-u*p,m.maxForce=f.maxForce=u*p,m.ri.copy(e.ri),m.rj.copy(e.rj),f.ri.copy(e.ri),f.rj.copy(e.rj),e.ni.tangents(m.t,f.t),m.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,o.dt),f.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,o.dt),m.enabled=f.enabled=e.enabled,t.push(m,f),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Un.setZero(),Mi.setZero(),Si.setZero();const s=t.bi;t.bj;for(let o=0;o!==e;o++)t=this.result[this.result.length-1-o],t.bi!==s?(Un.vadd(t.ni,Un),Mi.vadd(t.ri,Mi),Si.vadd(t.rj,Si)):(Un.vsub(t.ni,Un),Mi.vadd(t.rj,Mi),Si.vadd(t.ri,Si));const r=1/e;Mi.scale(r,n.ri),Si.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Un.normalize(),Un.tangents(n.t,i.t)}getContacts(e,t,n,i,s,r,o){this.contactPointPool=s,this.frictionEquationPool=o,this.result=i,this.frictionResult=r;const a=ax,c=lx,h=rx,d=ox;for(let u=0,p=e.length;u!==p;u++){const g=e[u],m=t[u];let f=null;g.material&&m.material&&(f=n.getContactMaterial(g.material,m.material)||null);const v=g.type&ue.KINEMATIC&&m.type&ue.STATIC||g.type&ue.STATIC&&m.type&ue.KINEMATIC||g.type&ue.KINEMATIC&&m.type&ue.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],a),g.quaternion.vmult(g.shapeOffsets[x],h),h.vadd(g.position,h);const M=g.shapes[x];for(let b=0;b<m.shapes.length;b++){m.quaternion.mult(m.shapeOrientations[b],c),m.quaternion.vmult(m.shapeOffsets[b],d),d.vadd(m.position,d);const _=m.shapes[b];if(!(M.collisionFilterMask&_.collisionFilterGroup&&_.collisionFilterMask&M.collisionFilterGroup)||h.distanceTo(d)>M.boundingSphereRadius+_.boundingSphereRadius)continue;let S=null;M.material&&_.material&&(S=n.getContactMaterial(M.material,_.material)||null),this.currentContactMaterial=S||f||n.defaultContactMaterial;const R=M.type|_.type,y=this[R];if(y){let C=!1;M.type<_.type?C=y.call(this,M,_,h,d,a,c,g,m,M,_,v):C=y.call(this,_,M,d,h,c,a,m,g,M,_,v),C&&v&&(n.shapeOverlapKeeper.set(M.id,_.id),n.bodyOverlapKeeper.set(g.id,m.id))}}}}}sphereSphere(e,t,n,i,s,r,o,a,c,h,d){if(d)return n.distanceSquared(i)<(e.radius+t.radius)**2;const u=this.createContactEquation(o,a,e,t,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(e.radius,u.ri),u.rj.scale(-t.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(o.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(a.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(e,t,n,i,s,r,o,a,c,h,d){const u=this.createContactEquation(o,a,e,t,c,h);if(u.ni.set(0,0,1),r.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(e.radius,u.ri),n.vsub(i,Ks),u.ni.scale(u.ni.dot(Ks),jl),Ks.vsub(jl,u.rj),-Ks.dot(u.ni)<=e.radius){if(d)return!0;const p=u.ri,g=u.rj;p.vadd(n,p),p.vsub(o.position,p),g.vadd(i,g),g.vsub(a.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(e,t,n,i,s,r,o,a,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,r,o,a,e,t,d)}sphereBox(e,t,n,i,s,r,o,a,c,h,d){const u=this.v3pool,p=Nx;n.vsub(i,Zs),t.getSideNormals(p,r);const g=e.radius;let m=!1;const f=zx,v=Ox,x=Bx;let M=null,b=0,_=0,S=0,R=null;for(let I=0,q=p.length;I!==q&&m===!1;I++){const k=Px;k.copy(p[I]);const U=k.length();k.normalize();const W=Zs.dot(k);if(W<U+g&&W>0){const J=Ix,H=Dx;J.copy(p[(I+1)%3]),H.copy(p[(I+2)%3]);const ee=J.length(),fe=H.length();J.normalize(),H.normalize();const ve=Zs.dot(J),K=Zs.dot(H);if(ve<ee&&ve>-ee&&K<fe&&K>-fe){const Ie=Math.abs(W-U-g);if((R===null||Ie<R)&&(R=Ie,_=ve,S=K,M=U,f.copy(k),v.copy(J),x.copy(H),b++,d))return!0}}}if(b){m=!0;const I=this.createContactEquation(o,a,e,t,c,h);f.scale(-g,I.ri),I.ni.copy(f),I.ni.negate(I.ni),f.scale(M,f),v.scale(_,v),f.vadd(v,f),x.scale(S,x),f.vadd(x,I.rj),I.ri.vadd(n,I.ri),I.ri.vsub(o.position,I.ri),I.rj.vadd(i,I.rj),I.rj.vsub(a.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}let y=u.get();const C=Fx;for(let I=0;I!==2&&!m;I++)for(let q=0;q!==2&&!m;q++)for(let k=0;k!==2&&!m;k++)if(y.set(0,0,0),I?y.vadd(p[0],y):y.vsub(p[0],y),q?y.vadd(p[1],y):y.vsub(p[1],y),k?y.vadd(p[2],y):y.vsub(p[2],y),i.vadd(y,C),C.vsub(n,C),C.lengthSquared()<g*g){if(d)return!0;m=!0;const U=this.createContactEquation(o,a,e,t,c,h);U.ri.copy(C),U.ri.normalize(),U.ni.copy(U.ri),U.ri.scale(g,U.ri),U.rj.copy(y),U.ri.vadd(n,U.ri),U.ri.vsub(o.position,U.ri),U.rj.vadd(i,U.rj),U.rj.vsub(a.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}u.release(y),y=null;const O=u.get(),B=u.get(),$=u.get(),N=u.get(),P=u.get(),F=p.length;for(let I=0;I!==F&&!m;I++)for(let q=0;q!==F&&!m;q++)if(I%3!==q%3){p[q].cross(p[I],O),O.normalize(),p[I].vadd(p[q],B),$.copy(n),$.vsub(B,$),$.vsub(i,$);const k=$.dot(O);O.scale(k,N);let U=0;for(;U===I%3||U===q%3;)U++;P.copy(n),P.vsub(N,P),P.vsub(B,P),P.vsub(i,P);const W=Math.abs(k),J=P.length();if(W<p[U].length()&&J<g){if(d)return!0;m=!0;const H=this.createContactEquation(o,a,e,t,c,h);B.vadd(N,H.rj),H.rj.copy(H.rj),P.negate(H.ni),H.ni.normalize(),H.ri.copy(H.rj),H.ri.vadd(i,H.ri),H.ri.vsub(n,H.ri),H.ri.normalize(),H.ri.scale(g,H.ri),H.ri.vadd(n,H.ri),H.ri.vsub(o.position,H.ri),H.rj.vadd(i,H.rj),H.rj.vsub(a.position,H.rj),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}}u.release(O,B,$,N,P)}planeBox(e,t,n,i,s,r,o,a,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,r,o,a,e,t,d)}convexConvex(e,t,n,i,s,r,o,a,c,h,d,u,p){const g=Qx;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,r,g,u,p)){const m=[],f=e_;e.clipAgainstHull(n,s,t,i,r,g,-100,100,m);let v=0;for(let x=0;x!==m.length;x++){if(d)return!0;const M=this.createContactEquation(o,a,e,t,c,h),b=M.ri,_=M.rj;g.negate(M.ni),m[x].normal.negate(f),f.scale(m[x].depth,f),m[x].point.vadd(f,b),_.copy(m[x].point),b.vsub(n,b),_.vsub(i,_),b.vadd(n,b),b.vsub(o.position,b),_.vadd(i,_),_.vsub(a.position,_),this.result.push(M),v++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(M,this.frictionResult)}this.enableFrictionReduction&&v&&this.createFrictionFromAverage(v)}}sphereConvex(e,t,n,i,s,r,o,a,c,h,d){const u=this.v3pool;n.vsub(i,Ux);const p=t.faceNormals,g=t.faces,m=t.vertices,f=e.radius;let v=!1;for(let x=0;x!==m.length;x++){const M=m[x],b=Hx;r.vmult(M,b),i.vadd(b,b);const _=Gx;if(b.vsub(n,_),_.lengthSquared()<f*f){if(d)return!0;v=!0;const S=this.createContactEquation(o,a,e,t,c,h);S.ri.copy(_),S.ri.normalize(),S.ni.copy(S.ri),S.ri.scale(f,S.ri),b.vsub(i,S.rj),S.ri.vadd(n,S.ri),S.ri.vsub(o.position,S.ri),S.rj.vadd(i,S.rj),S.rj.vsub(a.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult);return}}for(let x=0,M=g.length;x!==M&&v===!1;x++){const b=p[x],_=g[x],S=Wx;r.vmult(b,S);const R=qx;r.vmult(m[_[0]],R),R.vadd(i,R);const y=jx;S.scale(-f,y),n.vadd(y,y);const C=Xx;y.vsub(R,C);const O=C.dot(S),B=Yx;if(n.vsub(R,B),O<0&&B.dot(S)>0){const $=[];for(let N=0,P=_.length;N!==P;N++){const F=u.get();r.vmult(m[_[N]],F),i.vadd(F,F),$.push(F)}if(Rx($,S,n)){if(d)return!0;v=!0;const N=this.createContactEquation(o,a,e,t,c,h);S.scale(-f,N.ri),S.negate(N.ni);const P=u.get();S.scale(-O,P);const F=u.get();S.scale(-f,F),n.vsub(i,N.rj),N.rj.vadd(F,N.rj),N.rj.vadd(P,N.rj),N.rj.vadd(i,N.rj),N.rj.vsub(a.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(o.position,N.ri),u.release(P),u.release(F),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let I=0,q=$.length;I!==q;I++)u.release($[I]);return}else for(let N=0;N!==_.length;N++){const P=u.get(),F=u.get();r.vmult(m[_[(N+1)%_.length]],P),r.vmult(m[_[(N+2)%_.length]],F),i.vadd(P,P),i.vadd(F,F);const I=kx;F.vsub(P,I);const q=Vx;I.unit(q);const k=u.get(),U=u.get();n.vsub(P,U);const W=U.dot(q);q.scale(W,k),k.vadd(P,k);const J=u.get();if(k.vsub(n,J),W>0&&W*W<I.lengthSquared()&&J.lengthSquared()<f*f){if(d)return!0;const H=this.createContactEquation(o,a,e,t,c,h);k.vsub(i,H.rj),k.vsub(n,H.ni),H.ni.normalize(),H.ni.scale(f,H.ri),H.rj.vadd(i,H.rj),H.rj.vsub(a.position,H.rj),H.ri.vadd(n,H.ri),H.ri.vsub(o.position,H.ri),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult);for(let ee=0,fe=$.length;ee!==fe;ee++)u.release($[ee]);u.release(P),u.release(F),u.release(k),u.release(J),u.release(U);return}u.release(P),u.release(F),u.release(k),u.release(J),u.release(U)}for(let N=0,P=$.length;N!==P;N++)u.release($[N])}}}planeConvex(e,t,n,i,s,r,o,a,c,h,d){const u=$x,p=Kx;p.set(0,0,1),s.vmult(p,p);let g=0;const m=Zx;for(let f=0;f!==t.vertices.length;f++)if(u.copy(t.vertices[f]),r.vmult(u,u),i.vadd(u,u),u.vsub(n,m),p.dot(m)<=0){if(d)return!0;const x=this.createContactEquation(o,a,e,t,c,h),M=Jx;p.scale(p.dot(m),M),u.vsub(M,M),M.vsub(n,x.ri),x.ni.copy(p),u.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(o.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(a.position,x.rj),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,n,i,s,r,o,a,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,r,o,a,e,t,d)}sphereHeightfield(e,t,n,i,s,r,o,a,c,h,d){const u=t.data,p=e.radius,g=t.elementSize,m=d_,f=u_;Be.pointToLocalFrame(i,r,n,f);let v=Math.floor((f.x-p)/g)-1,x=Math.ceil((f.x+p)/g)+1,M=Math.floor((f.y-p)/g)-1,b=Math.ceil((f.y+p)/g)+1;if(x<0||b<0||v>u.length||M>u[0].length)return;v<0&&(v=0),x<0&&(x=0),M<0&&(M=0),b<0&&(b=0),v>=u.length&&(v=u.length-1),x>=u.length&&(x=u.length-1),b>=u[0].length&&(b=u[0].length-1),M>=u[0].length&&(M=u[0].length-1);const _=[];t.getRectMinMax(v,M,x,b,_);const S=_[0],R=_[1];if(f.z-p>R||f.z+p<S)return;const y=this.result;for(let C=v;C<x;C++)for(let O=M;O<b;O++){const B=y.length;let $=!1;if(t.getConvexTrianglePillar(C,O,!1),Be.pointToWorldFrame(i,r,t.pillarOffset,m),n.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&($=this.sphereConvex(e,t.pillarConvex,n,m,s,r,o,a,e,t,d)),d&&$||(t.getConvexTrianglePillar(C,O,!0),Be.pointToWorldFrame(i,r,t.pillarOffset,m),n.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&($=this.sphereConvex(e,t.pillarConvex,n,m,s,r,o,a,e,t,d)),d&&$))return!0;if(y.length-B>2)return}}boxHeightfield(e,t,n,i,s,r,o,a,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,r,o,a,e,t,d)}convexHeightfield(e,t,n,i,s,r,o,a,c,h,d){const u=t.data,p=t.elementSize,g=e.boundingSphereRadius,m=c_,f=h_,v=l_;Be.pointToLocalFrame(i,r,n,v);let x=Math.floor((v.x-g)/p)-1,M=Math.ceil((v.x+g)/p)+1,b=Math.floor((v.y-g)/p)-1,_=Math.ceil((v.y+g)/p)+1;if(M<0||_<0||x>u.length||b>u[0].length)return;x<0&&(x=0),M<0&&(M=0),b<0&&(b=0),_<0&&(_=0),x>=u.length&&(x=u.length-1),M>=u.length&&(M=u.length-1),_>=u[0].length&&(_=u[0].length-1),b>=u[0].length&&(b=u[0].length-1);const S=[];t.getRectMinMax(x,b,M,_,S);const R=S[0],y=S[1];if(!(v.z-g>y||v.z+g<R))for(let C=x;C<M;C++)for(let O=b;O<_;O++){let B=!1;if(t.getConvexTrianglePillar(C,O,!1),Be.pointToWorldFrame(i,r,t.pillarOffset,m),n.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(B=this.convexConvex(e,t.pillarConvex,n,m,s,r,o,a,null,null,d,f,null)),d&&B||(t.getConvexTrianglePillar(C,O,!0),Be.pointToWorldFrame(i,r,t.pillarOffset,m),n.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(B=this.convexConvex(e,t.pillarConvex,n,m,s,r,o,a,null,null,d,f,null)),d&&B))return!0}}sphereParticle(e,t,n,i,s,r,o,a,c,h,d){const u=s_;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=e.radius*e.radius){if(d)return!0;const g=this.createContactEquation(a,o,t,e,c,h);u.normalize(),g.rj.copy(u),g.rj.scale(e.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,t,n,i,s,r,o,a,c,h,d){const u=t_;u.set(0,0,1),o.quaternion.vmult(u,u);const p=n_;if(i.vsub(o.position,p),u.dot(p)<=0){if(d)return!0;const m=this.createContactEquation(a,o,t,e,c,h);m.ni.copy(u),m.ni.negate(m.ni),m.ri.set(0,0,0);const f=i_;u.scale(u.dot(i),f),i.vsub(f,f),m.rj.copy(f),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}boxParticle(e,t,n,i,s,r,o,a,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,r,o,a,e,t,d)}convexParticle(e,t,n,i,s,r,o,a,c,h,d){let u=-1;const p=o_,g=a_;let m=null;const f=r_;if(f.copy(i),f.vsub(n,f),s.conjugate(Xl),Xl.vmult(f,f),e.pointIsInside(f)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let v=0,x=e.faces.length;v!==x;v++){const M=[e.worldVertices[e.faces[v][0]]],b=e.worldFaceNormals[v];i.vsub(M[0],Yl);const _=-b.dot(Yl);if(m===null||Math.abs(_)<Math.abs(m)){if(d)return!0;m=_,u=v,p.copy(b)}}if(u!==-1){const v=this.createContactEquation(a,o,t,e,c,h);p.scale(m,g),g.vadd(i,g),g.vsub(n,g),v.rj.copy(g),p.negate(v.ni),v.ri.set(0,0,0);const x=v.ri,M=v.rj;x.vadd(i,x),x.vsub(a.position,x),M.vadd(n,M),M.vsub(o.position,M),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,r,o,a,c,h,d){return this.convexHeightfield(t,e,i,n,r,s,a,o,c,h,d)}particleCylinder(e,t,n,i,s,r,o,a,c,h,d){return this.convexParticle(t,e,i,n,r,s,a,o,c,h,d)}sphereTrimesh(e,t,n,i,s,r,o,a,c,h,d){const u=gx,p=vx,g=xx,m=_x,f=yx,v=bx,x=Ex,M=mx,b=fx,_=Tx;Be.pointToLocalFrame(i,r,n,f);const S=e.radius;x.lowerBound.set(f.x-S,f.y-S,f.z-S),x.upperBound.set(f.x+S,f.y+S,f.z+S),t.getTrianglesInAABB(x,_);const R=px,y=e.radius*e.radius;for(let N=0;N<_.length;N++)for(let P=0;P<3;P++)if(t.getVertex(t.indices[_[N]*3+P],R),R.vsub(f,b),b.lengthSquared()<=y){if(M.copy(R),Be.pointToWorldFrame(i,r,M,R),R.vsub(n,b),d)return!0;let F=this.createContactEquation(o,a,e,t,c,h);F.ni.copy(b),F.ni.normalize(),F.ri.copy(F.ni),F.ri.scale(e.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(o.position,F.ri),F.rj.copy(R),F.rj.vsub(a.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}for(let N=0;N<_.length;N++)for(let P=0;P<3;P++){t.getVertex(t.indices[_[N]*3+P],u),t.getVertex(t.indices[_[N]*3+(P+1)%3],p),p.vsub(u,g),f.vsub(p,v);const F=v.dot(g);f.vsub(u,v);let I=v.dot(g);if(I>0&&F<0&&(f.vsub(u,v),m.copy(g),m.normalize(),I=v.dot(m),m.scale(I,v),v.vadd(u,v),v.distanceTo(f)<e.radius)){if(d)return!0;const k=this.createContactEquation(o,a,e,t,c,h);v.vsub(f,k.ni),k.ni.normalize(),k.ni.scale(e.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(o.position,k.ri),Be.pointToWorldFrame(i,r,v,v),v.vsub(a.position,k.rj),Be.vectorToWorldFrame(r,k.ni,k.ni),Be.vectorToWorldFrame(r,k.ri,k.ri),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}const C=wx,O=Mx,B=Sx,$=dx;for(let N=0,P=_.length;N!==P;N++){t.getTriangleVertices(_[N],C,O,B),t.getNormal(_[N],$),f.vsub(C,v);let F=v.dot($);if($.scale(F,v),f.vsub(v,v),F=v.distanceTo(f),et.pointInTriangle(v,C,O,B)&&F<e.radius){if(d)return!0;let I=this.createContactEquation(o,a,e,t,c,h);v.vsub(f,I.ni),I.ni.normalize(),I.ni.scale(e.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(o.position,I.ri),Be.pointToWorldFrame(i,r,v,v),v.vsub(a.position,I.rj),Be.vectorToWorldFrame(r,I.ni,I.ni),Be.vectorToWorldFrame(r,I.ri,I.ri),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}}_.length=0}planeTrimesh(e,t,n,i,s,r,o,a,c,h,d){const u=new w,p=cx;p.set(0,0,1),s.vmult(p,p);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,u);const m=new w;m.copy(u),Be.pointToWorldFrame(i,r,m,u);const f=hx;if(u.vsub(n,f),p.dot(f)<=0){if(d)return!0;const x=this.createContactEquation(o,a,e,t,c,h);x.ni.copy(p);const M=ux;p.scale(f.dot(p),M),u.vsub(M,M),x.ri.copy(M),x.ri.vsub(o.position,x.ri),x.rj.copy(u),x.rj.vsub(a.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const Un=new w,Mi=new w,Si=new w,rx=new w,ox=new w,ax=new Ke,lx=new Ke,cx=new w,hx=new w,ux=new w,dx=new w,fx=new w;new w;const px=new w,mx=new w,gx=new w,vx=new w,xx=new w,_x=new w,yx=new w,bx=new w,wx=new w,Mx=new w,Sx=new w,Ex=new Rt,Tx=[],Ks=new w,jl=new w,Ax=new w,Cx=new w,Lx=new w;function Rx(l,e,t){let n=null;const i=l.length;for(let s=0;s!==i;s++){const r=l[s],o=Ax;l[(s+1)%i].vsub(r,o);const a=Cx;o.cross(e,a);const c=Lx;t.vsub(r,c);const h=a.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const Zs=new w,Px=new w,Ix=new w,Dx=new w,Nx=[new w,new w,new w,new w,new w,new w],Fx=new w,zx=new w,Ox=new w,Bx=new w,Ux=new w,kx=new w,Vx=new w,Gx=new w,Hx=new w,Wx=new w,qx=new w,jx=new w,Xx=new w,Yx=new w;new w;new w;const $x=new w,Kx=new w,Zx=new w,Jx=new w,Qx=new w,e_=new w,t_=new w,n_=new w,i_=new w,s_=new w,Xl=new Ke,r_=new w;new w;const o_=new w,Yl=new w,a_=new w,l_=new w,c_=new w,h_=[0],u_=new w,d_=new w;class $l{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let r=i.length-1;r>=s;r--)i[r+1]=i[r];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,r=i.length;let o=0;for(let a=0;a<s;a++){let c=!1;const h=n[a];for(;h>i[o];)o++;c=h===i[o],c||Kl(e,h)}o=0;for(let a=0;a<r;a++){let c=!1;const h=i[a];for(;h>n[o];)o++;c=n[o]===h,c||Kl(t,h)}}}function Kl(l,e){l.push((e&4294901760)>>16,e&65535)}const no=(l,e)=>l<e?`${l}-${e}`:`${e}-${l}`;class f_{constructor(){this.data={keys:[]}}get(e,t){const n=no(e,t);return this.data[n]}set(e,t,n){const i=no(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=no(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class p_ extends kc{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new w,e.gravity&&this.gravity.copy(e.gravity),this.broadphase=e.broadphase!==void 0?e.broadphase:new yv,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new Jv,this.constraints=[],this.narrowphase=new sx(this),this.collisionMatrix=new Fl,this.collisionMatrixPrevious=new Fl,this.bodyOverlapKeeper=new $l,this.shapeOverlapKeeper=new $l,this.contactmaterials=[],this.contactMaterialTable=new f_,this.defaultMaterial=new hr("default"),this.defaultContactMaterial=new cr(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof nr?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=et.ALL,n.from=e,n.to=t,n.callback=i,io.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=et.ANY,n.from=e,n.to=t,n.result=i,io.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=et.CLOSEST,n.from=e,n.to=t,n.result=i,io.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof ue&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const r=i[s];if(r.id===e)return r}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=rt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=rt.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(rt.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const r=this.accumulator/e;for(let o=0;o!==this.bodies.length;o++){const a=this.bodies[o];a.previousPosition.lerp(a.position,r,a.interpolatedPosition),a.previousQuaternion.slerp(a.quaternion,r,a.interpolatedQuaternion),a.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=__,i=y_,s=this.bodies.length,r=this.bodies,o=this.solver,a=this.gravity,c=this.doProfiling,h=this.profile,d=ue.DYNAMIC;let u=-1/0;const p=this.constraints,g=x_;a.length();const m=a.x,f=a.y,v=a.z;let x=0;for(c&&(u=rt.now()),x=0;x!==s;x++){const N=r[x];if(N.type===d){const P=N.force,F=N.mass;P.x+=F*m,P.y+=F*f,P.z+=F*v}}for(let N=0,P=this.subsystems.length;N!==P;N++)this.subsystems[N].update();c&&(u=rt.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=rt.now()-u);let M=p.length;for(x=0;x!==M;x++){const N=p[x];if(!N.collideConnected)for(let P=n.length-1;P>=0;P-=1)(N.bodyA===n[P]&&N.bodyB===i[P]||N.bodyB===n[P]&&N.bodyA===i[P])&&(n.splice(P,1),i.splice(P,1))}this.collisionMatrixTick(),c&&(u=rt.now());const b=v_,_=t.length;for(x=0;x!==_;x++)b.push(t[x]);t.length=0;const S=this.frictionEquations.length;for(x=0;x!==S;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,b,this.frictionEquations,g),c&&(h.narrowphase=rt.now()-u),c&&(u=rt.now()),x=0;x<this.frictionEquations.length;x++)o.addEquation(this.frictionEquations[x]);const R=t.length;for(let N=0;N!==R;N++){const P=t[N],F=P.bi,I=P.bj,q=P.si,k=P.sj;let U;if(F.material&&I.material?U=this.getContactMaterial(F.material,I.material)||this.defaultContactMaterial:U=this.defaultContactMaterial,U.friction,F.material&&I.material&&(F.material.friction>=0&&I.material.friction>=0&&F.material.friction*I.material.friction,F.material.restitution>=0&&I.material.restitution>=0&&(P.restitution=F.material.restitution*I.material.restitution)),o.addEquation(P),F.allowSleep&&F.type===ue.DYNAMIC&&F.sleepState===ue.SLEEPING&&I.sleepState===ue.AWAKE&&I.type!==ue.STATIC){const W=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),J=I.sleepSpeedLimit**2;W>=J*2&&(F.wakeUpAfterNarrowphase=!0)}if(I.allowSleep&&I.type===ue.DYNAMIC&&I.sleepState===ue.SLEEPING&&F.sleepState===ue.AWAKE&&F.type!==ue.STATIC){const W=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),J=F.sleepSpeedLimit**2;W>=J*2&&(I.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(F,I,!0),this.collisionMatrixPrevious.get(F,I)||(es.body=I,es.contact=P,F.dispatchEvent(es),es.body=F,I.dispatchEvent(es)),this.bodyOverlapKeeper.set(F.id,I.id),this.shapeOverlapKeeper.set(q.id,k.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=rt.now()-u,u=rt.now()),x=0;x!==s;x++){const N=r[x];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(M=p.length,x=0;x!==M;x++){const N=p[x];N.update();for(let P=0,F=N.equations.length;P!==F;P++){const I=N.equations[P];o.addEquation(I)}}o.solve(e,this),c&&(h.solve=rt.now()-u),o.removeAllEquations();const y=Math.pow;for(x=0;x!==s;x++){const N=r[x];if(N.type&d){const P=y(1-N.linearDamping,e),F=N.velocity;F.scale(P,F);const I=N.angularVelocity;if(I){const q=y(1-N.angularDamping,e);I.scale(q,I)}}}this.dispatchEvent(g_),c&&(u=rt.now());const O=this.stepnumber%(this.quatNormalizeSkip+1)===0,B=this.quatNormalizeFast;for(x=0;x!==s;x++)r[x].integrate(e,O,B);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=rt.now()-u),this.stepnumber+=1,this.dispatchEvent(m_);let $=!0;if(this.allowSleep)for($=!1,x=0;x!==s;x++){const N=r[x];N.sleepTick(this.time),N.sleepState!==ue.SLEEPING&&($=!0)}this.hasActiveBodies=$}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(fn,pn),e){for(let s=0,r=fn.length;s<r;s+=2)ts.bodyA=this.getBodyById(fn[s]),ts.bodyB=this.getBodyById(fn[s+1]),this.dispatchEvent(ts);ts.bodyA=ts.bodyB=null}if(t){for(let s=0,r=pn.length;s<r;s+=2)ns.bodyA=this.getBodyById(pn[s]),ns.bodyB=this.getBodyById(pn[s+1]),this.dispatchEvent(ns);ns.bodyA=ns.bodyB=null}fn.length=pn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(fn,pn),n){for(let s=0,r=fn.length;s<r;s+=2){const o=this.getShapeById(fn[s]),a=this.getShapeById(fn[s+1]);mn.shapeA=o,mn.shapeB=a,o&&(mn.bodyA=o.body),a&&(mn.bodyB=a.body),this.dispatchEvent(mn)}mn.bodyA=mn.bodyB=mn.shapeA=mn.shapeB=null}if(i){for(let s=0,r=pn.length;s<r;s+=2){const o=this.getShapeById(pn[s]),a=this.getShapeById(pn[s+1]);gn.shapeA=o,gn.shapeB=a,o&&(gn.bodyA=o.body),a&&(gn.bodyB=a.body),this.dispatchEvent(gn)}gn.bodyA=gn.bodyB=gn.shapeA=gn.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Rt;const io=new et,rt=globalThis.performance||{};if(!rt.now){let l=Date.now();rt.timing&&rt.timing.navigationStart&&(l=rt.timing.navigationStart),rt.now=()=>Date.now()-l}new w;const m_={type:"postStep"},g_={type:"preStep"},es={type:ue.COLLIDE_EVENT_NAME,body:null,contact:null},v_=[],x_=[],__=[],y_=[],fn=[],pn=[],ts={type:"beginContact",bodyA:null,bodyB:null},ns={type:"endContact",bodyA:null,bodyB:null},mn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},gn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class b_{constructor(e){se(this,"ray",new sr);se(this,"mouse",new xe(0,0));se(this,"handleMouseMove",e=>{this.mouse.x=(e.pageX-window.scrollX)/window.innerWidth*2-1,this.mouse.y=-((e.pageY-window.scrollY)/window.innerHeight)*2+1});se(this,"handleTouchMove",e=>{const{pageX:t,pageY:n}=e.touches[0];this.mouse.x=(t-window.scrollX)/window.innerWidth*2-1,this.mouse.y=-((n-window.scrollY)/window.innerHeight)*2+1});se(this,"dispose",()=>{document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("touchmove",this.handleTouchMove)});this.camera=e,window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("touchmove",this.handleTouchMove)}get position(){this.camera.updateMatrixWorld(),this.ray.origin.setFromMatrixPosition(this.camera.matrixWorld),this.ray.direction.set(this.mouse.x,this.mouse.y,.5).unproject(this.camera).sub(this.ray.origin).normalize();const e=this.ray.origin.length()/Math.cos(Math.PI-this.ray.direction.angleTo(this.ray.origin));return this.ray.origin.add(this.ray.direction.multiplyScalar(e*1)),this.ray.origin}}class ko{constructor(e){se(this,"body");se(this,"debugMesh");se(this,"relativePoint",new w);se(this,"tVec3",new D);se(this,"cVec3",new w);se(this,"_position",new D);se(this,"_quaternion",new en);se(this,"setBody",e=>{this.body=e,this.world.addBody(this.body)});se(this,"setDebugMesh",(e,t)=>{this.debugMesh=t,e.add(this.debugMesh)});se(this,"applyForce",(e,t=[0,0,0])=>{this.body&&(this.relativePoint.set(t[0],t[1],t[2]),this.tVec3.set(this.body.position.x,this.body.position.y,this.body.position.z).normalize().multiplyScalar(e),this.body.applyForce(this.cVec3.set(this.tVec3.x,this.tVec3.y,this.tVec3.z),this.relativePoint))});se(this,"syncDebugMesh",()=>{if(this.body&&this.debugMesh){const{position:e,quaternion:t}=this.coordinates;this.debugMesh.position.copy(e),this.debugMesh.quaternion.copy(t)}});this.world=e}get coordinates(){return this.body&&(this._position.set(this.body.position.x,this.body.position.y,this.body.position.z),this._quaternion.set(this.body.quaternion.x,this.body.quaternion.y,this.body.quaternion.z,this.body.quaternion.w)),{position:this._position,quaternion:this._quaternion}}}class w_ extends ko{constructor(t,n,i=1){super(t);se(this,"createBody",()=>{const{radius:t,position:n}=this.detaile,i=new ue({mass:this.mass,shape:new Yc(t),linearDamping:.95,fixedRotation:!0});i.position.set(n[0],n[1],n[2]),this.setBody(i)});se(this,"debug",(t,n)=>{const i=new or(this.detaile.radius),s=n!=null?n:new Ot({wireframe:!0}),r=new gt(i,s);this.setDebugMesh(t,r)});se(this,"update",()=>(this.applyForce(-30*this.detaile.radius),this.syncDebugMesh(),this.coordinates));this.detaile=n,this.mass=i,this.createBody()}}class M_ extends ko{constructor(t,n=1){super(t);se(this,"createBody",()=>{const t=new ue({type:ue.KINEMATIC,shape:new Yc(this.radius)});this.setBody(t)});se(this,"debug",(t,n)=>{const i=new or(this.radius),s=n!=null?n:new Ot({wireframe:!0}),r=new gt(i,s);this.setDebugMesh(t,r)});se(this,"update",t=>{this.body.position.set(t.x,t.y,t.z),this.syncDebugMesh()});this.radius=n,this.createBody()}}class Zl extends ko{constructor(t,n=[0,0,0],i=[0,0,0]){super(t);se(this,"createBody",()=>{const t=new ue({type:ue.STATIC,shape:new Kv,position:new w(this.position[0],this.position[1],this.position[2]),quaternion:new Ke().setFromEuler(this.rotation[0],this.rotation[1],this.rotation[2])});this.setBody(t)});se(this,"debug",(t,n=[1,1],i)=>{const s=new Oi(n[0],n[1]),r=i!=null?i:new Ot({wireframe:!0}),o=new gt(s,r);this.setDebugMesh(t,o)});se(this,"update",()=>{this.syncDebugMesh()});this.position=n,this.rotation=i,this.createBody()}}class S_{constructor(e,t){se(this,"renderTarget");se(this,"scene");se(this,"camera");se(this,"world");se(this,"mouse3d");se(this,"sphereBodies",[]);se(this,"sphereRigidBody");se(this,"init",(e,t)=>{this.renderTarget=new yn(e,t),this.scene=new Ec,this.camera=new lt(50,e/t,.01,100),this.camera.position.set(0,0,3),this.camera.lookAt(0,0,0),this.world=new p_({gravity:new w(0,0,0)}),this.mouse3d=new b_(this.camera)});se(this,"createMesh",()=>{this.sphereBodies=tr.map(n=>{const i=new w_(this.world,n);return i.debug(this.scene),i}),this.sphereRigidBody=new M_(this.world,.5),this.sphereRigidBody.debug(this.scene,new Ot({color:"#f00",wireframe:!0}));const e=new Zl(this.world,[0,0,-.7],[0,0,0]);e.debug(this.scene,[2,2]),e.update();const t=new Zl(this.world,[0,0,.7],[Math.PI,0,0]);t.debug(this.scene,[2,2]),t.update()});se(this,"handleResize",(e,t)=>{this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderTarget.setSize(e,t)});se(this,"update",e=>{var t;this.world.fixedStep(),this.sphereBodies.forEach((n,i)=>{const{position:s}=n.update();tr[i].position=s.toArray()}),(t=this.sphereRigidBody)==null||t.update(this.mouse3d.position),e.setRenderTarget(this.renderTarget),e.render(this.scene,this.camera),e.setRenderTarget(null)});se(this,"dispose",()=>{this.mouse3d.dispose()});this.init(e,t),this.createMesh()}get texture(){return this.renderTarget.texture}set cameraPositionZ(e){this.camera.position.z=e}}class E_ extends W0{constructor(t){super(t);se(this,"screenMat");se(this,"simulator");se(this,"fxaa");se(this,"assets",{matcap:{path:Pl("/resources/0A0A0A_A9A9A9_525252_747474-512px.png")},image:{path:Pl("/resources/wlop1.jpg")}});se(this,"datas",{transparent:!0});se(this,"setScene",()=>{this.setOrthographicCamera(-1,1,1,-1,0,10),this.camera.position.z=5,this.simulator=new S_(this.size.width,this.size.height),this.gui.open(!1)});se(this,"createMesh",async()=>{const t={image:this.assets.image.data,matcap:this.assets.matcap.data};t.image.wrapS=Di,t.image.wrapT=Di;{const n=j0.replaceAll("AMOUNT",Uc.toString()),i=new Oi(2,2),s=new tn({uniforms:{u_spheres:{value:tr},u_aspect:{value:this.size.aspect},u_camPosZ:{value:3},u_image:{value:{texture:t.image,uvScale:this.calcCoveredTextureScale(t.image,this.size.aspect)}},u_matcap:{value:t.matcap},u_opacity:{value:0}},vertexShader:X0,fragmentShader:n,transparent:!0}),r=new gt(i,s);this.scene.add(r),this.screenMat=s;const o=a=>{const c=document.querySelector("body");a?(s.uniforms.u_opacity.value=0,this.container.style.pointerEvents="none",c.style.overflow="auto"):(s.uniforms.u_opacity.value=1,this.container.style.pointerEvents="auto",c.style.overflow="hidden")};o(this.datas.transparent),this.gui.add(this.datas,"transparent").onChange(a=>o(a))}{const n=new Oi(2,2),i=new Ot({map:this.simulator.texture,transparent:!0}),s=new gt(n,i);s.position.z=1,s.visible=!1,this.scene.add(s),this.gui.add(s,"visible").name("debug")}});se(this,"setResizeCallback",()=>{this.resizeCallback=async()=>{const{aspect:t,width:n,height:i}=this.size,s=this.screenMat.uniforms;s.u_aspect.value=t,this.calcCoveredTextureScale(s.u_image.value.texture,t,s.u_image.value.uvScale),this.setCameraPosition(n),this.simulator.handleResize(n,i),this.fxaa.uniforms.resolution.value.set(1/n,1/i)}});se(this,"setCameraPosition",t=>{let n=1-Mo.smoothstep(t,769,1600);n=n*(5-3)+3,this.simulator.cameraPositionZ=n,this.screenMat.uniforms.u_camPosZ.value=n});se(this,"setPostprocessing",()=>{this.fxaa=new mo(Zg),this.fxaa.uniforms.resolution.value.set(1/this.size.width,1/this.size.height),this.effectComposer.addPass(this.fxaa)});se(this,"update",()=>{this.simulator.update(this.renderer),tr.forEach((t,n)=>{this.screenMat.uniforms.u_spheres.value[n].position=t.position})});se(this,"setDispose",()=>{this.disposeCallback=()=>{this.simulator.dispose()}});this.loadAssets(this.assets).then(()=>{this.setScene(),this.createMesh(),this.setCameraPosition(this.size.width),this.setResizeCallback(),this.setPostprocessing(),this.setDispose(),this.animate(this.update)})}}class T_{constructor(){se(this,"canvas");se(this,"handleBeforeunload",()=>{this.canvas.dispose()});const e=document.querySelector(".home");this.canvas=new E_(e),window.addEventListener("beforeunload",this.handleBeforeunload)}}new T_;
