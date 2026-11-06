(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const Ta="187",l1=0,or=1,c1=2,Bi=1,h1=2,Fi=3,Zt=0,Ve=1,Ye=2,Yt=0,ki=1,zi=2,lr=3,cr=4,d1=5,fi=100,u1=101,f1=102,p1=103,m1=104,g1=200,_1=201,v1=202,x1=203,go=204,_o=205,S1=206,M1=207,y1=208,T1=209,b1=210,E1=211,w1=212,A1=213,R1=214,Ls=0,Is=1,Ds=2,Hi=3,Ns=4,Us=5,Fs=6,Os=7,vo=0,C1=1,P1=2,Et=0,ba=1,Ea=2,wa=3,Vn=4,Aa=5,Ra=6,Ca=7,pi=300,vi=301,Gi=302,$n=303,Yn=304,Bs=1e3,Ae=1001,ks=1002,de=1003,L1=1004,Qi=1005,be=1006,Zn=1007,Bt=1008,Ze=1009,xo=1010,So=1011,Vi=1012,Pa=1013,gt=1014,Je=1015,De=1016,La=1017,Ia=1018,xi=1020,Mo=35902,yo=35899,To=1021,bo=1022,He=1023,zt=1026,kt=1027,Da=1028,Na=1029,Jt=1030,Ua=1031,Fa=1033,wn=33776,An=33777,Rn=33778,Cn=33779,zs=35840,Hs=35841,Gs=35842,Vs=35843,Ws=36196,Xs=37492,qs=37496,Ks=37488,$s=37489,In=37490,Ys=37491,Zs=37808,Js=37809,Qs=37810,js=37811,ea=37812,ta=37813,ia=37814,na=37815,sa=37816,aa=37817,ra=37818,oa=37819,la=37820,ca=37821,ha=36492,da=36494,ua=36495,fa=36283,pa=36284,Dn=36285,ma=36286,I1=3200,ga=0,D1=1,Ot="",Be="srgb",Nn="srgb-linear",Un="linear",J0="srgb",Jn=7680,N1=519,U1=512,F1=513,O1=514,Eo=515,B1=516,k1=517,wo=518,Ao=519,z1=35044,hr="300 es",ct=2e3,Wi=2001;function H1(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Fn(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function G1(){const n=Fn("canvas");return n.style.display="block",n}const dr={};function ur(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ro(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function L0(...n){n=Ro(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Z0(...n){n=Ro(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function gi(...n){const e=n.join(" ");e in dr||(dr[e]=!0,L0(...n))}function V1(n,e,t){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const W1={[Ls]:Ls,[Ds]:Fs,[Ns]:Ns,[Hi]:Us,[Is]:Is,[Fs]:Ds,[Os]:Os,[Us]:Hi};class Qt{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qn=Math.PI/180,On=180/Math.PI;function $i(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]+"-"+Pe[e&255]+Pe[e>>8&255]+"-"+Pe[e>>16&15|64]+Pe[e>>24&255]+"-"+Pe[t&63|128]+Pe[t>>8&255]+"-"+Pe[t>>16&255]+Pe[t>>24&255]+Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]).toLowerCase()}function H0(n,e,t){return Math.max(e,Math.min(t,n))}function X1(n,e){return(n%e+e)%e}function jn(n,e,t){return(1-t)*n+t*e}function q1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Oa(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function K1(n,e){if(e.constructor===Float32Array)return n;const t=Oa(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function $1(n,e){if(e.constructor===Float32Array)return n;const t=Oa(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const qa=class qa{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=H0(this.x,e.x,t.x),this.y=H0(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=H0(this.x,e,t),this.y=H0(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(H0(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(H0(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*i-r*s+e.x,this.y=a*s+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qa.prototype.isVector2=!0;let C0=qa;class At{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,r,o){let l=i[s+0],c=i[s+1],d=i[s+2],h=i[s+3],f=a[r+0],m=a[r+1],_=a[r+2],y=a[r+3];if(h!==y||l!==f||c!==m||d!==_){let p=l*f+c*m+d*_+h*y;p<0&&(f=-f,m=-m,_=-_,y=-y,p=-p);let u=1-o;if(p<.9995){const S=Math.acos(p),R=Math.sin(S);u=Math.sin(u*S)/R,o=Math.sin(o*S)/R,l=l*u+f*o,c=c*u+m*o,d=d*u+_*o,h=h*u+y*o}else{l=l*u+f*o,c=c*u+m*o,d=d*u+_*o,h=h*u+y*o;const S=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=S,c*=S,d*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,a,r){const o=i[s],l=i[s+1],c=i[s+2],d=i[s+3],h=a[r],f=a[r+1],m=a[r+2],_=a[r+3];return e[t]=o*_+d*h+l*m-c*f,e[t+1]=l*_+d*f+c*h-o*m,e[t+2]=c*_+d*m+o*f-l*h,e[t+3]=d*_-o*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(s/2),h=o(a/2),f=l(i/2),m=l(s/2),_=l(a/2);switch(r){case"XYZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"YXZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"ZXY":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"ZYX":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"YZX":this._x=f*d*h+c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h-f*m*_;break;case"XZY":this._x=f*d*h-c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h+f*m*_;break;default:L0("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(a-c)*m,this._z=(r-s)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(s+r)/m,this._z=(a+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(a-c)/m,this._x=(s+r)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(r-s)/m,this._x=(a+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(H0(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+r*o+s*c-a*l,this._y=s*d+r*l+a*o-i*c,this._z=a*d+r*c+i*l-s*o,this._w=r*d-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,a=e._z,r=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ka=class Ka{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*s-o*i),d=2*(o*t-a*s),h=2*(a*i-r*t);return this.x=t+l*c+r*h-o*d,this.y=i+l*d+o*c-a*h,this.z=s+l*h+a*d-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=H0(this.x,e.x,t.x),this.y=H0(this.y,e.y,t.y),this.z=H0(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=H0(this.x,e,t),this.y=H0(this.y,e,t),this.z=H0(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(H0(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return es.copy(this).projectOnVector(e),this.sub(es)}reflect(e){return this.sub(es.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(H0(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ka.prototype.isVector3=!0;let N=Ka;const es=new N,fr=new At,$a=class $a{constructor(e,t,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,r,o,l,c)}set(e,t,i,s,a,r,o,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=a,d[5]=l,d[6]=i,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],m=i[5],_=i[8],y=s[0],p=s[3],u=s[6],S=s[1],R=s[4],T=s[7],w=s[2],E=s[5],g=s[8];return a[0]=r*y+o*S+l*w,a[3]=r*p+o*R+l*E,a[6]=r*u+o*T+l*g,a[1]=c*y+d*S+h*w,a[4]=c*p+d*R+h*E,a[7]=c*u+d*T+h*g,a[2]=f*y+m*S+_*w,a[5]=f*p+m*R+_*E,a[8]=f*u+m*T+_*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*r*d-t*o*c-i*a*d+i*o*l+s*a*c-s*r*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*r-o*c,f=o*l-d*a,m=c*a-r*l,_=t*h+i*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(s*c-d*i)*y,e[2]=(o*i-s*r)*y,e[3]=f*y,e[4]=(d*t-s*l)*y,e[5]=(s*a-o*t)*y,e[6]=m*y,e[7]=(i*l-c*t)*y,e[8]=(r*t-i*a)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+e,-s*c,s*l,-s*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return gi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ts.makeScale(e,t)),this}rotate(e){return gi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ts.makeRotation(-e)),this}translate(e,t){return gi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ts.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$a.prototype.isMatrix3=!0;let N0=$a;const ts=new N0,pr=new N0().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mr=new N0().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Y1(){const n={enabled:!0,workingColorSpace:Nn,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===J0&&(s.r=wt(s.r),s.g=wt(s.g),s.b=wt(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===J0&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ot?Un:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[r].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Nn]:{primaries:e,whitePoint:i,transfer:Un,toXYZ:pr,fromXYZ:mr,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:e,whitePoint:i,transfer:J0,toXYZ:pr,fromXYZ:mr,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),n}const X0=Y1();function wt(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _i(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ei;class Z1{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ei===void 0&&(ei=Fn("canvas")),ei.width=e.width,ei.height=e.height;const s=ei.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ei}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fn("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=wt(a[r]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wt(t[i]/255)*255):t[i]=wt(t[i]);return{data:t,width:e.width,height:e.height}}else return L0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let J1=0;class Ba{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:J1++}),this.uuid=$i(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(is(s[r].image)):a.push(is(s[r]))}else a=is(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function is(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Z1.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(L0("Texture: Unable to serialize Texture."),{})}let Q1=0;const ns=new N;class Ne extends Qt{constructor(e=Ne.DEFAULT_IMAGE,t=Ne.DEFAULT_MAPPING,i=Ae,s=Ae,a=be,r=Bt,o=He,l=Ze,c=Ne.DEFAULT_ANISOTROPY,d=Ot){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Q1++}),this.uuid=$i(),this.name="",this.source=new Ba(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new C0(0,0),this.repeat=new C0(1,1),this.center=new C0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new N0,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ns).x}get height(){return this.source.getSize(ns).y}get depth(){return this.source.getSize(ns).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){L0(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){L0(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pi)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bs:e.x=e.x-Math.floor(e.x);break;case Ae:e.x=e.x<0?0:1;break;case ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bs:e.y=e.y-Math.floor(e.y);break;case Ae:e.y=e.y<0?0:1;break;case ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=pi;Ne.DEFAULT_ANISOTROPY=1;const Ya=class Ya{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*i+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],_=l[9],y=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-y)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+y)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,T=(m+1)/2,w=(u+1)/2,E=(d+f)/4,g=(h+y)/4,M=(_+p)/4;return R>T&&R>w?R<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(R),s=E/i,a=g/i):T>w?T<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(T),i=E/s,a=M/s):w<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(w),i=g/a,s=M/a),this.set(i,s,a,t),this}let S=Math.sqrt((p-_)*(p-_)+(h-y)*(h-y)+(f-d)*(f-d));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(h-y)/S,this.z=(f-d)/S,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=H0(this.x,e.x,t.x),this.y=H0(this.y,e.y,t.y),this.z=H0(this.z,e.z,t.z),this.w=H0(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=H0(this.x,e,t),this.y=H0(this.y,e,t),this.z=H0(this.z,e,t),this.w=H0(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(H0(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ya.prototype.isVector4=!0;let ce=Ya;class j1 extends Qt{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:be,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ce(0,0,e,t),this.scissorTest=!1,this.viewport=new ce(0,0,e,t),this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=new Ne({width:e,height:t,depth:i.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:be,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ba(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class We extends j1{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Co extends Ne{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=de,this.minFilter=de,this.wrapR=Ae,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class e9 extends Ne{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=de,this.minFilter=de,this.wrapR=Ae,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Gn=class Gn{constructor(e,t,i,s,a,r,o,l,c,d,h,f,m,_,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,r,o,l,c,d,h,f,m,_,y,p)}set(e,t,i,s,a,r,o,l,c,d,h,f,m,_,y,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=s,u[1]=a,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=_,u[11]=y,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ti.setFromMatrixColumn(e,0).length(),a=1/ti.setFromMatrixColumn(e,1).length(),r=1/ti.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const f=r*d,m=r*h,_=o*d,y=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=f-y*c,t[9]=-o*l,t[2]=y-f*c,t[6]=_+m*c,t[10]=r*l}else if(e.order==="YXZ"){const f=l*d,m=l*h,_=c*d,y=c*h;t[0]=f+y*o,t[4]=_*o-m,t[8]=r*c,t[1]=r*h,t[5]=r*d,t[9]=-o,t[2]=m*o-_,t[6]=y+f*o,t[10]=r*l}else if(e.order==="ZXY"){const f=l*d,m=l*h,_=c*d,y=c*h;t[0]=f-y*o,t[4]=-r*h,t[8]=_+m*o,t[1]=m+_*o,t[5]=r*d,t[9]=y-f*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const f=r*d,m=r*h,_=o*d,y=o*h;t[0]=l*d,t[4]=_*c-m,t[8]=f*c+y,t[1]=l*h,t[5]=y*c+f,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const f=r*l,m=r*c,_=o*l,y=o*c;t[0]=l*d,t[4]=y-f*h,t[8]=_*h+m,t[1]=h,t[5]=r*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*h+_,t[10]=f-y*h}else if(e.order==="XZY"){const f=r*l,m=r*c,_=o*l,y=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=f*h+y,t[5]=r*d,t[9]=m*h-_,t[2]=_*h-m,t[6]=o*d,t[10]=y*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t9,e,i9)}lookAt(e,t,i){const s=this.elements;return qe.subVectors(e,t),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Pt.crossVectors(i,qe),Pt.lengthSq()===0&&(Math.abs(i.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Pt.crossVectors(i,qe)),Pt.normalize(),ji.crossVectors(qe,Pt),s[0]=Pt.x,s[4]=ji.x,s[8]=qe.x,s[1]=Pt.y,s[5]=ji.y,s[9]=qe.y,s[2]=Pt.z,s[6]=ji.z,s[10]=qe.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],m=i[13],_=i[2],y=i[6],p=i[10],u=i[14],S=i[3],R=i[7],T=i[11],w=i[15],E=s[0],g=s[4],M=s[8],U=s[12],L=s[1],D=s[5],O=s[9],V=s[13],P=s[2],G=s[6],Z=s[10],z=s[14],t0=s[3],X=s[7],Q=s[11],j=s[15];return a[0]=r*E+o*L+l*P+c*t0,a[4]=r*g+o*D+l*G+c*X,a[8]=r*M+o*O+l*Z+c*Q,a[12]=r*U+o*V+l*z+c*j,a[1]=d*E+h*L+f*P+m*t0,a[5]=d*g+h*D+f*G+m*X,a[9]=d*M+h*O+f*Z+m*Q,a[13]=d*U+h*V+f*z+m*j,a[2]=_*E+y*L+p*P+u*t0,a[6]=_*g+y*D+p*G+u*X,a[10]=_*M+y*O+p*Z+u*Q,a[14]=_*U+y*V+p*z+u*j,a[3]=S*E+R*L+T*P+w*t0,a[7]=S*g+R*D+T*G+w*X,a[11]=S*M+R*O+T*Z+w*Q,a[15]=S*U+R*V+T*z+w*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],m=e[14],_=e[3],y=e[7],p=e[11],u=e[15],S=l*m-c*f,R=o*m-c*h,T=o*f-l*h,w=r*m-c*d,E=r*f-l*d,g=r*h-o*d;return t*(y*S-p*R+u*T)-i*(_*S-p*w+u*E)+s*(_*R-y*w+u*g)-a*(_*T-y*E+p*g)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[1],r=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(r*d-o*c)-i*(a*d-o*l)+s*(a*c-r*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],m=e[11],_=e[12],y=e[13],p=e[14],u=e[15],S=t*o-i*r,R=t*l-s*r,T=t*c-a*r,w=i*l-s*o,E=i*c-a*o,g=s*c-a*l,M=d*y-h*_,U=d*p-f*_,L=d*u-m*_,D=h*p-f*y,O=h*u-m*y,V=f*u-m*p,P=S*V-R*O+T*D+w*L-E*U+g*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/P;return e[0]=(o*V-l*O+c*D)*G,e[1]=(s*O-i*V-a*D)*G,e[2]=(y*g-p*E+u*w)*G,e[3]=(f*E-h*g-m*w)*G,e[4]=(l*L-r*V-c*U)*G,e[5]=(t*V-s*L+a*U)*G,e[6]=(p*T-_*g-u*R)*G,e[7]=(d*g-f*T+m*R)*G,e[8]=(r*O-o*L+c*M)*G,e[9]=(i*L-t*O-a*M)*G,e[10]=(_*E-y*T+u*S)*G,e[11]=(h*T-d*E-m*S)*G,e[12]=(o*U-r*D-l*M)*G,e[13]=(t*D-i*U+s*M)*G,e[14]=(y*R-_*w-p*S)*G,e[15]=(d*w-h*R+f*S)*G,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,r=e.x,o=e.y,l=e.z,c=a*r,d=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+i,d*l-s*r,0,c*l-s*o,d*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,r){return this.set(1,i,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,d=r+r,h=o+o,f=a*c,m=a*d,_=a*h,y=r*d,p=r*h,u=o*h,S=l*c,R=l*d,T=l*h,w=i.x,E=i.y,g=i.z;return s[0]=(1-(y+u))*w,s[1]=(m+T)*w,s[2]=(_-R)*w,s[3]=0,s[4]=(m-T)*E,s[5]=(1-(f+u))*E,s[6]=(p+S)*E,s[7]=0,s[8]=(_+R)*g,s[9]=(p-S)*g,s[10]=(1-(f+y))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const a=this.determinantAffine();if(a===0)return i.set(1,1,1),t.identity(),this;let r=ti.set(s[0],s[1],s[2]).length();const o=ti.set(s[4],s[5],s[6]).length(),l=ti.set(s[8],s[9],s[10]).length();a<0&&(r=-r),at.copy(this);const c=1/r,d=1/o,h=1/l;return at.elements[0]*=c,at.elements[1]*=c,at.elements[2]*=c,at.elements[4]*=d,at.elements[5]*=d,at.elements[6]*=d,at.elements[8]*=h,at.elements[9]*=h,at.elements[10]*=h,t.setFromRotationMatrix(at),i.x=r,i.y=o,i.z=l,this}makePerspective(e,t,i,s,a,r,o=ct,l=!1){const c=this.elements,d=2*a/(t-e),h=2*a/(i-s),f=(t+e)/(t-e),m=(i+s)/(i-s);let _,y;if(l)_=a/(r-a),y=r*a/(r-a);else if(o===ct)_=-(r+a)/(r-a),y=-2*r*a/(r-a);else if(o===Wi)_=-r/(r-a),y=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,a,r,o=ct,l=!1){const c=this.elements,d=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),m=-(i+s)/(i-s);let _,y;if(l)_=1/(r-a),y=r/(r-a);else if(o===ct)_=-2/(r-a),y=-(r+a)/(r-a);else if(o===Wi)_=-1/(r-a),y=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Gn.prototype.isMatrix4=!0;let Q0=Gn;const ti=new N,at=new Q0,t9=new N(0,0,0),i9=new N(1,1,1),Pt=new N,ji=new N,qe=new N,gr=new Q0,_r=new At;class Ht{constructor(e=0,t=0,i=0,s=Ht.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],d=s[9],h=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(H0(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-H0(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(H0(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-H0(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(H0(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-H0(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,m),this._y=0);break;default:L0("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gr,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _r.setFromEuler(this),this.setFromQuaternion(_r,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ht.DEFAULT_ORDER="XYZ";class Po{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let n9=0;const vr=new N,ii=new At,vt=new Q0,en=new N,Ci=new N,s9=new N,a9=new At,xr=new N(1,0,0),Sr=new N(0,1,0),Mr=new N(0,0,1),yr={type:"added"},r9={type:"removed"},ni={type:"childadded",child:null},ss={type:"childremoved",child:null};class _e extends Qt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n9++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const e=new N,t=new Ht,i=new At,s=new N(1,1,1);function a(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Q0},normalMatrix:{value:new N0}}),this.matrix=new Q0,this.matrixWorld=new Q0,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.multiply(ii),this}rotateOnWorldAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.premultiply(ii),this}rotateX(e){return this.rotateOnAxis(xr,e)}rotateY(e){return this.rotateOnAxis(Sr,e)}rotateZ(e){return this.rotateOnAxis(Mr,e)}translateOnAxis(e,t){return vr.copy(e).applyQuaternion(this.quaternion),this.position.add(vr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xr,e)}translateY(e){return this.translateOnAxis(Sr,e)}translateZ(e){return this.translateOnAxis(Mr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?en.copy(e):en.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vt.lookAt(Ci,en,this.up):vt.lookAt(en,Ci,this.up),this.quaternion.setFromRotationMatrix(vt),s&&(vt.extractRotation(s.matrixWorld),ii.setFromRotationMatrix(vt),this.quaternion.premultiply(ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Z0("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yr),ni.child=e,this.dispatchEvent(ni),ni.child=null):Z0("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(r9),ss.child=e,this.dispatchEvent(ss),ss.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vt.multiply(e.parent.matrixWorld)),e.applyMatrix4(vt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yr),ni.child=e,this.dispatchEvent(ni),ni.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,e,s9),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,a9,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*s,a[13]+=i-a[1]*t-a[5]*i-a[9]*s,a[14]+=s-a[2]*t-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),d=r(e.images),h=r(e.shapes),f=r(e.skeletons),m=r(e.animations),_=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}_e.DEFAULT_UP=new N(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Oe extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const o9={type:"move"};class as{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const y of e.hand.values()){const p=t.getJointPose(y,i),u=this._getHandJoint(c,y);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(o9)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Oe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Lo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lt={h:0,s:0,l:0},tn={h:0,s:0,l:0};function rs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class I0{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Be){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,X0.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=X0.workingColorSpace){return this.r=e,this.g=t,this.b=i,X0.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=X0.workingColorSpace){if(e=X1(e,1),t=H0(t,0,1),i=H0(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,r=2*i-a;this.r=rs(r,a,e+1/3),this.g=rs(r,a,e),this.b=rs(r,a,e-1/3)}return X0.colorSpaceToWorking(this,s),this}setStyle(e,t=Be){function i(a){a!==void 0&&parseFloat(a)<1&&L0("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,t);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:L0("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);L0("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Be){const i=Lo[e.toLowerCase()];return i!==void 0?this.setHex(i,t):L0("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wt(e.r),this.g=wt(e.g),this.b=wt(e.b),this}copyLinearToSRGB(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Be){return X0.workingToColorSpace(Le.copy(this),e),Math.round(H0(Le.r*255,0,255))*65536+Math.round(H0(Le.g*255,0,255))*256+Math.round(H0(Le.b*255,0,255))}getHexString(e=Be){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=X0.workingColorSpace){X0.workingToColorSpace(Le.copy(this),t);const i=Le.r,s=Le.g,a=Le.b,r=Math.max(i,s,a),o=Math.min(i,s,a);let l,c;const d=(o+r)/2;if(o===r)l=0,c=0;else{const h=r-o;switch(c=d<=.5?h/(r+o):h/(2-r-o),r){case i:l=(s-a)/h+(s<a?6:0);break;case s:l=(a-i)/h+2;break;case a:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=X0.workingColorSpace){return X0.workingToColorSpace(Le.copy(this),t),e.r=Le.r,e.g=Le.g,e.b=Le.b,e}getStyle(e=Be){X0.workingToColorSpace(Le.copy(this),e);const t=Le.r,i=Le.g,s=Le.b;return e!==Be?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Lt),this.setHSL(Lt.h+e,Lt.s+t,Lt.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Lt),e.getHSL(tn);const i=jn(Lt.h,tn.h,t),s=jn(Lt.s,tn.s,t),a=jn(Lt.l,tn.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new I0;I0.NAMES=Lo;class ka{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new I0(e),this.density=t}clone(){return new ka(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class l9 extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ht,this.environmentIntensity=1,this.environmentRotation=new Ht,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const rt=new N,xt=new N,os=new N,St=new N,si=new N,ai=new N,Tr=new N,ls=new N,cs=new N,hs=new N,ds=new ce,us=new ce,fs=new ce;class lt{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),rt.subVectors(e,t),s.cross(rt);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){rt.subVectors(s,t),xt.subVectors(i,t),os.subVectors(e,t);const r=rt.dot(rt),o=rt.dot(xt),l=rt.dot(os),c=xt.dot(xt),d=xt.dot(os),h=r*c-o*o;if(h===0)return a.set(0,0,0),null;const f=1/h,m=(c*l-o*d)*f,_=(r*d-o*l)*f;return a.set(1-m-_,_,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,St)===null?!1:St.x>=0&&St.y>=0&&St.x+St.y<=1}static getInterpolation(e,t,i,s,a,r,o,l){return this.getBarycoord(e,t,i,s,St)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,St.x),l.addScaledVector(r,St.y),l.addScaledVector(o,St.z),l)}static getInterpolatedAttribute(e,t,i,s,a,r){return ds.setScalar(0),us.setScalar(0),fs.setScalar(0),ds.fromBufferAttribute(e,t),us.fromBufferAttribute(e,i),fs.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(ds,a.x),r.addScaledVector(us,a.y),r.addScaledVector(fs,a.z),r}static isFrontFacing(e,t,i,s){return rt.subVectors(i,t),xt.subVectors(e,t),rt.cross(xt).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rt.subVectors(this.c,this.b),xt.subVectors(this.a,this.b),rt.cross(xt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return lt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return lt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return lt.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return lt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return lt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let r,o;si.subVectors(s,i),ai.subVectors(a,i),ls.subVectors(e,i);const l=si.dot(ls),c=ai.dot(ls);if(l<=0&&c<=0)return t.copy(i);cs.subVectors(e,s);const d=si.dot(cs),h=ai.dot(cs);if(d>=0&&h<=d)return t.copy(s);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0&&l-d>0)return r=l/(l-d),t.copy(i).addScaledVector(si,r);hs.subVectors(e,a);const m=si.dot(hs),_=ai.dot(hs);if(_>=0&&m<=_)return t.copy(a);const y=m*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(ai,o);const p=d*_-m*h;if(p<=0&&h-d>=0&&m-_>=0)return Tr.subVectors(a,s),o=(h-d)/(h-d+(m-_)),t.copy(s).addScaledVector(Tr,o);const u=1/(p+y+f);return r=y*u,o=f*u,t.copy(i).addScaledVector(si,r).addScaledVector(ai,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class jt{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ot.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ot.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ot.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,ot):ot.fromBufferAttribute(a,r),ot.applyMatrix4(e.matrixWorld),this.expandByPoint(ot);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nn.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nn.copy(i.boundingBox)),nn.applyMatrix4(e.matrixWorld),this.union(nn)}const s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ot),ot.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pi),sn.subVectors(this.max,Pi),ri.subVectors(e.a,Pi),oi.subVectors(e.b,Pi),li.subVectors(e.c,Pi),It.subVectors(oi,ri),Dt.subVectors(li,oi),Xt.subVectors(ri,li);let t=[0,-It.z,It.y,0,-Dt.z,Dt.y,0,-Xt.z,Xt.y,It.z,0,-It.x,Dt.z,0,-Dt.x,Xt.z,0,-Xt.x,-It.y,It.x,0,-Dt.y,Dt.x,0,-Xt.y,Xt.x,0];return!ps(t,ri,oi,li,sn)||(t=[1,0,0,0,1,0,0,0,1],!ps(t,ri,oi,li,sn))?!1:(an.crossVectors(It,Dt),t=[an.x,an.y,an.z],ps(t,ri,oi,li,sn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ot).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ot).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mt=[new N,new N,new N,new N,new N,new N,new N,new N],ot=new N,nn=new jt,ri=new N,oi=new N,li=new N,It=new N,Dt=new N,Xt=new N,Pi=new N,sn=new N,an=new N,qt=new N;function ps(n,e,t,i,s){for(let a=0,r=n.length-3;a<=r;a+=3){qt.fromArray(n,a);const o=s.x*Math.abs(qt.x)+s.y*Math.abs(qt.y)+s.z*Math.abs(qt.z),l=e.dot(qt),c=t.dot(qt),d=i.dot(qt);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const bt=c9();function c9(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}const a=new Uint32Array(2048),r=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,d=0;for(;(c&8388608)===0;)c<<=1,d-=8388608;c&=-8388609,d+=947912704,a[l]=c|d}for(let l=1024;l<2048;++l)a[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)r[l]=l<<23;r[31]=1199570944,r[32]=2147483648;for(let l=33;l<63;++l)r[l]=2147483648+(l-32<<23);r[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:a,exponentTable:r,offsetTable:o}}function h9(n){Math.abs(n)>65504&&L0("DataUtils.toHalfFloat(): Value out of range."),n=H0(n,-65504,65504),bt.floatView[0]=n;const e=bt.uint32View[0],t=e>>23&511;return bt.baseTable[t]+((e&8388607)>>bt.shiftTable[t])}function d9(n){const e=n>>10;return bt.uint32View[0]=bt.mantissaTable[bt.offsetTable[e]+(n&1023)]+bt.exponentTable[e],bt.floatView[0]}class br{static toHalfFloat(e){return h9(e)}static fromHalfFloat(e){return d9(e)}}const pe=new N,rn=new C0;let u9=0;class mt extends Qt{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:u9++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=z1,this.updateRanges=[],this.gpuType=Je,this.version=0,this._normalizationScale=e!==void 0?Oa(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXY(t,rn.x,rn.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pe.fromBufferAttribute(this,t),pe.applyMatrix3(e),this.setXYZ(t,pe.x,pe.y,pe.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pe.fromBufferAttribute(this,t),pe.applyMatrix4(e),this.setXYZ(t,pe.x,pe.y,pe.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pe.fromBufferAttribute(this,t),pe.applyNormalMatrix(e),this.setXYZ(t,pe.x,pe.y,pe.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pe.fromBufferAttribute(this,t),pe.transformDirection(e),this.setXYZ(t,pe.x,pe.y,pe.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):K1(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):$1(e,this.array)}}class Io extends mt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Do extends mt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class he extends mt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const f9=new jt,Li=new N,ms=new N;class bi{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):f9.setFromPoints(e).getCenter(i);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Li.subVectors(e,this.center);const t=Li.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Li,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ms.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Li.copy(e.center).add(ms)),this.expandByPoint(Li.copy(e.center).sub(ms))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let p9=0;const it=new Q0,gs=new _e,ci=new N,Ke=new jt,Ii=new jt,Te=new N;class Xe extends Qt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p9++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H1(e)?Do:Io)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new N0().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return it.makeRotationFromQuaternion(e),this.applyMatrix4(it),this}rotateX(e){return it.makeRotationX(e),this.applyMatrix4(it),this}rotateY(e){return it.makeRotationY(e),this.applyMatrix4(it),this}rotateZ(e){return it.makeRotationZ(e),this.applyMatrix4(it),this}translate(e,t,i){return it.makeTranslation(e,t,i),this.applyMatrix4(it),this}scale(e,t,i){return it.makeScale(e,t,i),this.applyMatrix4(it),this}lookAt(e){return gs.lookAt(e),gs.updateMatrix(),this.applyMatrix4(gs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const r=e[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new he(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&L0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Z0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];Ke.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Z0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Z0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Ke.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];Ii.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(Ke.min,Ii.min),Ke.expandByPoint(Te),Te.addVectors(Ke.max,Ii.max),Ke.expandByPoint(Te)):(Ke.expandByPoint(Ii.min),Ke.expandByPoint(Ii.max))}Ke.getCenter(i);let s=0;for(let a=0,r=e.count;a<r;a++)Te.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(Te));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Te.fromBufferAttribute(o,c),l&&(ci.fromBufferAttribute(e,c),Te.add(ci)),s=Math.max(s,i.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Z0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Z0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new mt(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));const o=[],l=[],c=new Uint8Array(i.count);for(let U=0;U<i.count;U++)o[U]=new N,l[U]=new N;const d=new N,h=new N,f=new N,m=new C0,_=new C0,y=new C0,p=new N,u=new N;function S(U,L,D){c[U]=c[L]=c[D]=1,d.fromBufferAttribute(i,U),h.fromBufferAttribute(i,L),f.fromBufferAttribute(i,D),m.fromBufferAttribute(a,U),_.fromBufferAttribute(a,L),y.fromBufferAttribute(a,D),h.sub(d),f.sub(d),_.sub(m),y.sub(m);const O=1/(_.x*y.y-y.x*_.y);isFinite(O)&&(p.copy(h).multiplyScalar(y.y).addScaledVector(f,-_.y).multiplyScalar(O),u.copy(f).multiplyScalar(_.x).addScaledVector(h,-y.x).multiplyScalar(O),o[U].add(p),o[L].add(p),o[D].add(p),l[U].add(u),l[L].add(u),l[D].add(u))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let U=0,L=R.length;U<L;++U){const D=R[U],O=D.start,V=D.count;for(let P=O,G=O+V;P<G;P+=3)S(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const T=new N,w=new N,E=new N,g=new N;function M(U){E.fromBufferAttribute(s,U),g.copy(E);const L=o[U];T.copy(L),T.sub(E.multiplyScalar(E.dot(L))).normalize(),w.crossVectors(g,L);const O=w.dot(l[U])<0?-1:1;r.setXYZW(U,T.x,T.y,T.z,O)}for(let U=0,L=i.count;U<L;++U)c[U]&&M(U);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new N,a=new N,r=new N,o=new N,l=new N,c=new N,d=new N,h=new N;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),y=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,y),r.fromBufferAttribute(t,p),d.subVectors(r,a),h.subVectors(s,a),d.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),d.subVectors(r,a),h.subVectors(s,a),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Te.fromBufferAttribute(e,t),Te.normalize(),e.setXYZ(t,Te.x,Te.y,Te.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let m=0,_=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*d;for(let u=0;u<d;u++)f[_++]=c[m++]}return new mt(f,d,h)}if(this.index===null)return L0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xe,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=e(f,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(s[l]=d,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const a=e.morphAttributes;for(const c in a){const d=[],h=a[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,d=r.length;c<d;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _s=new N,m9=new N,g9=new N0;class Ut{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=_s.subVectors(i,t).cross(m9.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(_s),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(s,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||g9.getNormalMatrix(e),s=this.coplanarPoint(_s).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let _9=0;class Ei extends Qt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_9++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=ki,this.side=Zt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=go,this.blendDst=_o,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new I0(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=N1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jn,this.stencilZFail=Jn,this.stencilZPass=Jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){L0(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){L0(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(t){const a=s(e.textures),r=s(e.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new I0().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ut().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new C0().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new C0().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const yt=new N,vs=new N,on=new N,ln=new N;class No{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yt.copy(this.origin).addScaledVector(this.direction,t),yt.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){vs.copy(e).add(t).multiplyScalar(.5),on.copy(t).sub(e).normalize(),ln.copy(this.origin).sub(vs);const a=e.distanceTo(t)*.5,r=-this.direction.dot(on),o=ln.dot(this.direction),l=-ln.dot(on),c=ln.lengthSq(),d=Math.abs(1-r*r);let h,f,m,_;if(d>0)if(h=r*l-o,f=r*o-l,_=a*d,h>=0)if(f>=-_)if(f<=_){const y=1/d;h*=y,f*=y,m=h*(h+r*f+2*o)+f*(r*h+f+2*l)+c}else f=a,h=Math.max(0,-(r*f+o)),m=-h*h+f*(f+2*l)+c;else f=-a,h=Math.max(0,-(r*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-r*a+o)),f=h>0?-a:Math.min(Math.max(-a,-l),a),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-a,-l),a),m=f*(f+2*l)+c):(h=Math.max(0,-(r*a+o)),f=h>0?a:Math.min(Math.max(-a,-l),a),m=-h*h+f*(f+2*l)+c);else f=r>0?-a:a,h=Math.max(0,-(r*f+o)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(vs).addScaledVector(on,f),m}intersectSphere(e,t){if(e.radius<0)return null;yt.subVectors(e.center,this.origin);const i=yt.dot(this.direction),s=yt.dot(yt)-i*i,a=e.radius*e.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,r,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),d>=0?(a=(e.min.y-f.y)*d,r=(e.max.y-f.y)*d):(a=(e.max.y-f.y)*d,r=(e.min.y-f.y)*d),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,yt)!==null}intersectTriangle(e,t,i,s,a){const r=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,h=e.x-r.x,f=e.y-r.y,m=e.z-r.z,_=t.x-r.x,y=t.y-r.y,p=t.z-r.z,u=i.x-r.x,S=i.y-r.y,R=i.z-r.z,T=Math.abs(l),w=Math.abs(c),E=Math.abs(d);let g,M,U,L,D,O,V,P,G,Z,z,t0;if(T>=w&&T>=E?(U=l,O=h,G=_,t0=u,l>=0?(g=c,M=d,L=f,D=m,V=y,P=p,Z=S,z=R):(g=d,M=c,L=m,D=f,V=p,P=y,Z=R,z=S)):w>=E?(U=c,O=f,G=y,t0=S,c>=0?(g=d,M=l,L=m,D=h,V=p,P=_,Z=R,z=u):(g=l,M=d,L=h,D=m,V=_,P=p,Z=u,z=R)):(U=d,O=m,G=p,t0=R,d>=0?(g=l,M=c,L=h,D=f,V=_,P=y,Z=u,z=S):(g=c,M=l,L=f,D=h,V=y,P=_,Z=S,z=u)),U===0)return null;const X=g/U,Q=M/U,j=1/U,M0=L-X*O,U0=D-Q*O,$=V-X*G,p0=P-Q*G,v0=Z-X*t0,w0=z-Q*t0,m0=v0*p0-w0*$,O0=M0*w0-U0*v0,ue=$*U0-p0*M0;if(s){if(m0<0||O0<0||ue<0)return null}else if((m0<0||O0<0||ue<0)&&(m0>0||O0>0||ue>0))return null;const P0=m0+O0+ue;if(P0===0)return null;const j0=j*(m0*O+O0*G+ue*t0);return(P0>0?j0<0:j0>0)?null:this.at(j0/P0,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft extends Ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new I0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.combine=vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Er=new Q0,Kt=new No,cn=new bi,wr=new N,hn=new N,dn=new N,un=new N,xs=new N,fn=new N,Ar=new N,pn=new N;class R0 extends _e{constructor(e=new Xe,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(a&&o){fn.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=o[l],h=a[l];d!==0&&(xs.fromBufferAttribute(h,e),r?fn.addScaledVector(xs,d):fn.addScaledVector(xs.sub(t),d))}t.add(fn)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cn.copy(i.boundingSphere),cn.applyMatrix4(a),Kt.copy(e.ray).recast(e.near),!(cn.containsPoint(Kt.origin)===!1&&(Kt.intersectSphere(cn,wr)===null||Kt.origin.distanceToSquared(wr)>(e.far-e.near)**2))&&(Er.copy(a).invert(),Kt.copy(e.ray).applyMatrix4(Er),!(i.boundingBox!==null&&Kt.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Kt)))}_computeIntersections(e,t,i){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,h=a.attributes.normal,f=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,y=f.length;_<y;_++){const p=f[_],u=r[p.materialIndex],S=Math.max(p.start,m.start),R=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let T=S,w=R;T<w;T+=3){const E=o.getX(T),g=o.getX(T+1),M=o.getX(T+2);s=mn(this,u,e,i,c,d,h,E,g,M),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let p=_,u=y;p<u;p+=3){const S=o.getX(p),R=o.getX(p+1),T=o.getX(p+2);s=mn(this,r,e,i,c,d,h,S,R,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,y=f.length;_<y;_++){const p=f[_],u=r[p.materialIndex],S=Math.max(p.start,m.start),R=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=S,w=R;T<w;T+=3){const E=T,g=T+1,M=T+2;s=mn(this,u,e,i,c,d,h,E,g,M),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=_,u=y;p<u;p+=3){const S=p,R=p+1,T=p+2;s=mn(this,r,e,i,c,d,h,S,R,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function v9(n,e,t,i,s,a,r,o){let l;if(e.side===Ve?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,e.side===Zt,o),l===null)return null;pn.copy(o),pn.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(pn);return c<t.near||c>t.far?null:{distance:c,point:pn.clone(),object:n}}function mn(n,e,t,i,s,a,r,o,l,c){n.getVertexPosition(o,hn),n.getVertexPosition(l,dn),n.getVertexPosition(c,un);const d=v9(n,e,t,i,hn,dn,un,Ar);if(d){const h=new N;lt.getBarycoord(Ar,hn,dn,un,h),s&&(d.uv=lt.getInterpolatedAttribute(s,o,l,c,h,new C0)),a&&(d.uv1=lt.getInterpolatedAttribute(a,o,l,c,h,new C0)),r&&(d.normal=lt.getInterpolatedAttribute(r,o,l,c,h,new N),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new N,materialIndex:0};lt.getNormal(hn,dn,un,f.normal),d.face=f,d.barycoord=h}return d}class mi extends Ne{constructor(e=null,t=1,i=1,s,a,r,o,l,c=de,d=de,h,f){super(null,r,o,l,c,d,s,a,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rr extends mt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const hi=new Q0,Cr=new Q0,gn=[],Pr=new jt,x9=new Q0,Di=new R0,Ni=new bi;class S9 extends R0{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,x9)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,hi),Pr.copy(e.boundingBox).applyMatrix4(hi),this.boundingBox.union(Pr)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,hi),Ni.copy(e.boundingSphere).applyMatrix4(hi),this.boundingSphere.union(Ni)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,r=e*a+1;for(let o=0;o<i.length;o++)i[o]=s[r+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Di.geometry=this.geometry,Di.material=this.material,Di.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ni.copy(this.boundingSphere),Ni.applyMatrix4(i),e.ray.intersectsSphere(Ni)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,hi),Cr.multiplyMatrices(i,hi),Di.matrixWorld=Cr,Di.raycast(e,gn);for(let r=0,o=gn.length;r<o;r++){const l=gn[r];l.instanceId=a,l.object=this,t.push(l)}gn.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Rr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new mi(new Float32Array(s*this.count),s,this.count,Da,Je));const a=this.morphTexture.source.data.data;let r=0;for(let c=0;c<i.length;c++)r+=i[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=s*e;return a[l]=o,a.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const $t=new bi,M9=new C0(.5,.5),_n=new N;class Xi{constructor(e=new Ut,t=new Ut,i=new Ut,s=new Ut,a=new Ut,r=new Ut){this.planes=[e,t,i,s,a,r]}set(e,t,i,s,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ct,i=!1){const s=this.planes,a=e.elements,r=a[0],o=a[1],l=a[2],c=a[3],d=a[4],h=a[5],f=a[6],m=a[7],_=a[8],y=a[9],p=a[10],u=a[11],S=a[12],R=a[13],T=a[14],w=a[15];if(s[0].setComponents(c-r,m-d,u-_,w-S).normalize(),s[1].setComponents(c+r,m+d,u+_,w+S).normalize(),s[2].setComponents(c+o,m+h,u+y,w+R).normalize(),s[3].setComponents(c-o,m-h,u-y,w-R).normalize(),i)s[4].setComponents(l,f,p,T).normalize(),s[5].setComponents(c-l,m-f,u-p,w-T).normalize();else if(s[4].setComponents(c-l,m-f,u-p,w-T).normalize(),t===ct)s[5].setComponents(c+l,m+f,u+p,w+T).normalize();else if(t===Wi)s[5].setComponents(l,f,p,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$t.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$t.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($t)}intersectsSprite(e){$t.center.set(0,0,0);const t=M9.distanceTo(e.center);return $t.radius=.7071067811865476+t,$t.applyMatrix4(e.matrixWorld),this.intersectsSphere($t)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(_n.x=s.normal.x>0?e.max.x:e.min.x,_n.y=s.normal.y>0?e.max.y:e.min.y,_n.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_n)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Lr=new Q0;class za{constructor(){this.coordinateSystem=ct,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){const a=t[s];Lr.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),i[s]===void 0&&(i[s]=new Xi),i[s].setFromProjectionMatrix(Lr,a.coordinateSystem,a.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Xi),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new za().copy(this)}}class y9 extends Ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new I0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ir=new Q0,_a=new No,vn=new bi,xn=new N;class T9 extends _e{constructor(e=new Xe,t=new y9){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vn.copy(i.boundingSphere),vn.applyMatrix4(s),vn.radius+=a,e.ray.intersectsSphere(vn)===!1)return;Ir.copy(s).invert(),_a.copy(e.ray).applyMatrix4(Ir);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,r.start),m=Math.min(c.count,r.start+r.count);for(let _=f,y=m;_<y;_++){const p=c.getX(_);xn.fromBufferAttribute(h,p),Dr(xn,p,l,s,e,t,this)}}else{const f=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let _=f,y=m;_<y;_++)xn.fromBufferAttribute(h,_),Dr(xn,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Dr(n,e,t,i,s,a,r){const o=_a.distanceSqToPoint(n);if(o<t){const l=new N;_a.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Uo extends Ne{constructor(e=[],t=vi,i,s,a,r,o,l,c,d){super(e,t,i,s,a,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ss extends Ne{constructor(e,t,i,s,a,r,o,l,c){super(e,t,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Si extends Ne{constructor(e,t,i=gt,s,a,r,o=de,l=de,c,d=zt,h=1){if(d!==zt&&d!==kt)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,a,r,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ba(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Fo extends Si{constructor(e,t=gt,i=vi,s,a,r=de,o=de,l,c=zt){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,i,s,a,r,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Oo extends Ne{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class re extends Xe{constructor(e=1,t=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],d=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,t,e,r,a,0),_("z","y","x",1,-1,i,t,-e,r,a,1),_("x","z","y",1,1,e,i,t,s,r,2),_("x","z","y",1,-1,e,i,-t,s,r,3),_("x","y","z",1,-1,e,t,i,s,a,4),_("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(h,2));function _(y,p,u,S,R,T,w,E,g,M,U){const L=T/g,D=w/M,O=T/2,V=w/2,P=E/2,G=g+1,Z=M+1;let z=0,t0=0;const X=new N;for(let Q=0;Q<Z;Q++){const j=Q*D-V;for(let M0=0;M0<G;M0++){const U0=M0*L-O;X[y]=U0*S,X[p]=j*R,X[u]=P,c.push(X.x,X.y,X.z),X[y]=0,X[p]=0,X[u]=E>0?1:-1,d.push(X.x,X.y,X.z),h.push(M0/g),h.push(1-Q/M),z+=1}}for(let Q=0;Q<M;Q++)for(let j=0;j<g;j++){const M0=f+j+G*Q,U0=f+j+G*(Q+1),$=f+(j+1)+G*(Q+1),p0=f+(j+1)+G*Q;l.push(M0,U0,p0),l.push(U0,$,p0),t0+=6}o.addGroup(m,t0,U),m+=t0,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new re(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ha extends Xe{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const a=[],r=[],o=[],l=[],c=new N,d=new C0;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const m=i+h/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),r.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(r[f]/e+1)/2,d.y=(r[f+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=t;h++)a.push(h,h+1,0);this.setIndex(a),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(o,3)),this.setAttribute("uv",new he(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Tt extends Xe{constructor(e=1,t=1,i=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),a=Math.floor(a);const d=[],h=[],f=[],m=[];let _=0;const y=[],p=i/2;let u=0;S(),r===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(d),this.setAttribute("position",new he(h,3)),this.setAttribute("normal",new he(f,3)),this.setAttribute("uv",new he(m,2));function S(){const T=new N,w=new N;let E=0;const g=(t-e)/i;for(let M=0;M<=a;M++){const U=[],L=M/a,D=L*(t-e)+e;for(let O=0;O<=s;O++){const V=O/s,P=V*l+o,G=Math.sin(P),Z=Math.cos(P);w.x=D*G,w.y=-L*i+p,w.z=D*Z,h.push(w.x,w.y,w.z),T.set(G,g,Z).normalize(),f.push(T.x,T.y,T.z),m.push(V,1-L),U.push(_++)}y.push(U)}for(let M=0;M<s;M++)for(let U=0;U<a;U++){const L=y[U][M],D=y[U+1][M],O=y[U+1][M+1],V=y[U][M+1];(e>0||U!==0)&&(d.push(L,D,V),E+=3),(t>0||U!==a-1)&&(d.push(D,O,V),E+=3)}c.addGroup(u,E,0),u+=E}function R(T){const w=_,E=new C0,g=new N;let M=0;const U=T===!0?e:t,L=T===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,p*L,0),f.push(0,L,0),m.push(.5,.5),_++;const D=_;for(let O=0;O<=s;O++){const P=O/s*l+o,G=Math.cos(P),Z=Math.sin(P);g.x=U*Z,g.y=p*L,g.z=U*G,h.push(g.x,g.y,g.z),f.push(0,L,0),E.x=G*.5+.5,E.y=Z*.5*L+.5,m.push(E.x,E.y),_++}for(let O=0;O<s;O++){const V=w+O,P=D+O;T===!0?d.push(P,P+1,V):d.push(P+1,P,V),M+=3}c.addGroup(u,M,T===!0?1:2),u+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ga extends Tt{constructor(e=1,t=1,i=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,i,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new Ga(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ie extends Xe{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,r=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,d=l+1,h=e/o,f=t/l,m=[],_=[],y=[],p=[];for(let u=0;u<d;u++){const S=u*f-r;for(let R=0;R<c;R++){const T=R*h-a;_.push(T,-S,0),y.push(0,0,1),p.push(R/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let S=0;S<o;S++){const R=S+c*u,T=S+c*(u+1),w=S+1+c*(u+1),E=S+1+c*u;m.push(R,T,E),m.push(T,w,E)}this.setIndex(m),this.setAttribute("position",new he(_,3)),this.setAttribute("normal",new he(y,3)),this.setAttribute("uv",new he(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ie(e.width,e.height,e.widthSegments,e.heightSegments)}}class Va extends Xe{constructor(e=1,t=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const d=[],h=new N,f=new N,m=[],_=[],y=[],p=[];for(let u=0;u<=i;u++){const S=[],R=u/i,T=r+R*o,w=e*Math.cos(T),E=Math.sqrt(e*e-w*w);let g=0;u===0&&r===0?g=.5/t:u===i&&l===Math.PI&&(g=-.5/t);for(let M=0;M<=t;M++){const U=M/t,L=s+U*a;h.x=-E*Math.cos(L),h.y=w,h.z=E*Math.sin(L),_.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),p.push(U+g,1-R),S.push(c++)}d.push(S)}for(let u=0;u<i;u++)for(let S=0;S<t;S++){const R=d[u][S+1],T=d[u][S],w=d[u+1][S],E=d[u+1][S+1];(u!==0||r>0)&&m.push(R,T,E),(u!==i-1||l<Math.PI)&&m.push(T,w,E)}this.setIndex(m),this.setAttribute("position",new he(_,3)),this.setAttribute("normal",new he(y,3)),this.setAttribute("uv",new he(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bn extends Xe{constructor(e=1,t=.4,i=12,s=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:a,thetaStart:r,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],d=[],h=[],f=new N,m=new N,_=new N;for(let y=0;y<=i;y++){const p=r+y/i*o;for(let u=0;u<=s;u++){const S=u/s*a;m.x=(e+t*Math.cos(p))*Math.cos(S),m.y=(e+t*Math.cos(p))*Math.sin(S),m.z=t*Math.sin(p),c.push(m.x,m.y,m.z),f.x=e*Math.cos(S),f.y=e*Math.sin(S),_.subVectors(m,f).normalize(),d.push(_.x,_.y,_.z),h.push(u/s),h.push(y/i)}}for(let y=1;y<=i;y++)for(let p=1;p<=s;p++){const u=(s+1)*y+p-1,S=(s+1)*(y-1)+p-1,R=(s+1)*(y-1)+p,T=(s+1)*y+p;l.push(u,S,T),l.push(S,R,T)}this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Mi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Nr(s))s.isRenderTargetTexture?(L0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Nr(s[0])){const a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();e[t][i]=a}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Fe(n){const e={};for(let t=0;t<n.length;t++){const i=Mi(n[t]);for(const s in i)e[s]=i[s]}return e}function Nr(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function b9(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Bo(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:X0.workingColorSpace}const qi={clone:Mi,merge:Fe};var E9=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w9=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ge extends Ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E9,this.fragmentShader=w9,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mi(e.uniforms),this.uniformsGroups=b9(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new I0().setHex(s.value);break;case"v2":this.uniforms[i].value=new C0().fromArray(s.value);break;case"v3":this.uniforms[i].value=new N().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ce().fromArray(s.value);break;case"m3":this.uniforms[i].value=new N0().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Q0().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ko extends Ge{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $0 extends Ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new I0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new I0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ga,this.normalScale=new C0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class A9 extends $0{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new C0(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return H0(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new I0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new I0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new I0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return gi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){gi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class R9 extends Ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=I1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class C9 extends Ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class zo extends _e{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new I0(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class P9 extends zo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new I0(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ms=new Q0,Ur=new N,Fr=new N;class L9{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new C0(512,512),this.mapType=Ze,this.map=null,this.mapPass=null,this.matrix=new Q0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xi,this._frameExtents=new C0(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Ur.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ur),Fr.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fr),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Ms.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ms,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;e.coordinateSystem===Wi||e.reversedDepth?t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ms)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Sn=new N,Mn=new At,dt=new N;class Ho extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Q0,this.projectionMatrix=new Q0,this.projectionMatrixInverse=new Q0,this.coordinateSystem=ct,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Sn,Mn,dt),dt.x===1&&dt.y===1&&dt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sn,Mn,dt.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Sn,Mn,dt),dt.x===1&&dt.y===1&&dt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sn,Mn,dt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Nt=new N,Or=new C0,Br=new C0;class nt extends Ho{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=On*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return On*2*Math.atan(Math.tan(Qn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Nt.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nt.x,Nt.y).multiplyScalar(-e/Nt.z),Nt.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Nt.x,Nt.y).multiplyScalar(-e/Nt.z)}getViewSize(e,t){return this.getViewBounds(e,Or,Br),t.subVectors(Br,Or)}setViewOffset(e,t,i,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qn*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,t-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class I9 extends L9{constructor(){super(new nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=On*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(i!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class D9 extends zo{constructor(e,t,i=0,s=Math.PI/3,a=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.distance=i,this.angle=s,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new I9}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Go extends Ho{constructor(e=-1,t=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,r=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const di=-90,ui=1;class va extends _e{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nt(di,ui,e,t);s.layers=this.layers,this.add(s);const a=new nt(di,ui,e,t);a.layers=this.layers,this.add(a);const r=new nt(di,ui,e,t);r.layers=this.layers,this.add(r);const o=new nt(di,ui,e,t);o.layers=this.layers,this.add(o);const l=new nt(di,ui,e,t);l.layers=this.layers,this.add(l);const c=new nt(di,ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,r,o,l]=t;for(const c of t)this.remove(c);if(e===ct)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wi)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class N9 extends nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class U9{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=F9.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function F9(){this._document.hidden===!1&&this.reset()}function kr(n,e,t,i){const s=O9(i);switch(t){case To:return n*e;case Da:return n*e/s.components*s.byteLength;case Na:return n*e/s.components*s.byteLength;case Jt:return n*e*2/s.components*s.byteLength;case Ua:return n*e*2/s.components*s.byteLength;case bo:return n*e*3/s.components*s.byteLength;case He:return n*e*4/s.components*s.byteLength;case Fa:return n*e*4/s.components*s.byteLength;case wn:case An:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Rn:case Cn:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hs:case Vs:return Math.max(n,16)*Math.max(e,8)/4;case zs:case Gs:return Math.max(n,8)*Math.max(e,8)/2;case Ws:case Xs:case Ks:case $s:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qs:case In:case Ys:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Js:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Qs:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case js:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ea:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ta:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ia:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case na:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case sa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case aa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ra:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case oa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case la:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ca:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ha:case da:case ua:return Math.ceil(n/4)*Math.ceil(e/4)*16;case fa:case pa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Dn:case ma:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function O9(n){switch(n){case Ze:case xo:return{byteLength:1,components:1};case Vi:case So:case De:return{byteLength:2,components:1};case La:case Ia:return{byteLength:2,components:4};case gt:case Pa:case Je:return{byteLength:4,components:1};case Mo:case yo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ta}}));typeof window<"u"&&(window.__THREE__?L0("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ta);function Vo(){let n=null,e=!1,t=null,i=null;function s(a,r){i=n.requestAnimationFrame(s),t(a,r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function B9(n){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,d);else{h.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<h.length;m++){const _=h[f],y=h[m];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,h[f]=y)}h.length=f+1;for(let m=0,_=h.length;m<_;m++){const y=h[m];n.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var k9=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,z9=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,H9=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G9=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V9=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,W9=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X9=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,q9=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K9=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$9=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Y9=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Z9=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J9=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Q9=`#ifdef USE_IRIDESCENCE
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
#endif`,j9=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,e2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,t2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,a2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,r2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,o2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,l2=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,c2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,h2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p2="gl_FragColor = linearToOutputTexel( gl_FragColor );",m2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,_2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,v2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,x2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,M2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,w2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,P2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,L2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,F2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,O2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,B2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,k2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z2=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,H2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Q2=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,t3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,n3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,s3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,o3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,l3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,p3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,M3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,y3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,T3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,b3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,w3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A3=`#ifdef USE_SKINNING
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
#endif`,R3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,I3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,D3=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,N3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,O3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const B3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H3=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,X3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,q3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,K3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,j3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e4=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,t4=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i4=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,n4=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s4=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,a4=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,r4=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,o4=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l4=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,c4=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,d4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u4=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,f4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p4=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m4=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g4=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,_4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,z0={alphahash_fragment:k9,alphahash_pars_fragment:z9,alphamap_fragment:H9,alphamap_pars_fragment:G9,alphatest_fragment:V9,alphatest_pars_fragment:W9,aomap_fragment:X9,aomap_pars_fragment:q9,batching_pars_vertex:K9,batching_vertex:$9,begin_vertex:Y9,beginnormal_vertex:Z9,bsdfs:J9,iridescence_fragment:Q9,bumpmap_pars_fragment:j9,clipping_planes_fragment:e2,clipping_planes_pars_fragment:t2,clipping_planes_pars_vertex:i2,clipping_planes_vertex:n2,color_fragment:s2,color_pars_fragment:a2,color_pars_vertex:r2,color_vertex:o2,common:l2,defaultnormal_vertex:c2,displacementmap_pars_vertex:h2,displacementmap_vertex:d2,emissivemap_fragment:u2,emissivemap_pars_fragment:f2,colorspace_fragment:p2,colorspace_pars_fragment:m2,envmap_fragment:g2,envmap_common_pars_fragment:_2,envmap_pars_fragment:v2,envmap_pars_vertex:x2,envmap_physical_pars_fragment:P2,envmap_vertex:S2,fog_vertex:M2,fog_pars_vertex:y2,fog_fragment:T2,fog_pars_fragment:b2,gradientmap_pars_fragment:E2,lightmap_pars_fragment:w2,lights_lambert_fragment:A2,lights_lambert_pars_fragment:R2,lights_pars_begin:C2,lights_toon_fragment:L2,lights_toon_pars_fragment:I2,lights_phong_fragment:D2,lights_phong_pars_fragment:N2,lights_physical_fragment:U2,lights_physical_pars_fragment:F2,lights_fragment_begin:O2,lights_fragment_maps:B2,lights_fragment_end:k2,lightprobes_pars_fragment:z2,logdepthbuf_fragment:H2,logdepthbuf_pars_fragment:G2,logdepthbuf_pars_vertex:V2,logdepthbuf_vertex:W2,map_fragment:X2,map_pars_fragment:q2,map_particle_fragment:K2,map_particle_pars_fragment:$2,metalnessmap_fragment:Y2,metalnessmap_pars_fragment:Z2,morphinstance_vertex:J2,morphcolor_vertex:Q2,morphnormal_vertex:j2,morphtarget_pars_vertex:e3,morphtarget_vertex:t3,normal_fragment_begin:i3,normal_fragment_maps:n3,normal_pars_fragment:s3,normal_pars_vertex:a3,normal_vertex:r3,normalmap_pars_fragment:o3,clearcoat_normal_fragment_begin:l3,clearcoat_normal_fragment_maps:c3,clearcoat_pars_fragment:h3,iridescence_pars_fragment:d3,opaque_fragment:u3,packing:f3,premultiplied_alpha_fragment:p3,project_vertex:m3,dithering_fragment:g3,dithering_pars_fragment:_3,roughnessmap_fragment:v3,roughnessmap_pars_fragment:x3,shadowmap_pars_fragment:S3,shadowmap_pars_vertex:M3,shadowmap_vertex:y3,shadowmask_pars_fragment:T3,skinbase_vertex:b3,skinning_pars_vertex:E3,skinning_vertex:w3,skinnormal_vertex:A3,specularmap_fragment:R3,specularmap_pars_fragment:C3,tonemapping_fragment:P3,tonemapping_pars_fragment:L3,transmission_fragment:I3,transmission_pars_fragment:D3,uv_pars_fragment:N3,uv_pars_vertex:U3,uv_vertex:F3,worldpos_vertex:O3,background_vert:B3,background_frag:k3,backgroundCube_vert:z3,backgroundCube_frag:H3,cube_vert:G3,cube_frag:V3,depth_vert:W3,depth_frag:X3,distance_vert:q3,distance_frag:K3,equirect_vert:$3,equirect_frag:Y3,linedashed_vert:Z3,linedashed_frag:J3,meshbasic_vert:Q3,meshbasic_frag:j3,meshlambert_vert:e4,meshlambert_frag:t4,meshmatcap_vert:i4,meshmatcap_frag:n4,meshnormal_vert:s4,meshnormal_frag:a4,meshphong_vert:r4,meshphong_frag:o4,meshphysical_vert:l4,meshphysical_frag:c4,meshtoon_vert:h4,meshtoon_frag:d4,points_vert:u4,points_frag:f4,shadow_vert:p4,shadow_frag:m4,sprite_vert:g4,sprite_frag:_4},d0={common:{diffuse:{value:new I0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new N0},alphaMap:{value:null},alphaMapTransform:{value:new N0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new N0}},envmap:{envMap:{value:null},envMapRotation:{value:new N0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new N0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new N0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new N0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new N0},normalScale:{value:new C0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new N0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new N0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new N0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new N0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new I0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new I0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new N0},alphaTest:{value:0},uvTransform:{value:new N0}},sprite:{diffuse:{value:new I0(16777215)},opacity:{value:1},center:{value:new C0(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new N0},alphaMap:{value:null},alphaMapTransform:{value:new N0},alphaTest:{value:0}}},pt={basic:{uniforms:Fe([d0.common,d0.specularmap,d0.envmap,d0.aomap,d0.lightmap,d0.fog]),vertexShader:z0.meshbasic_vert,fragmentShader:z0.meshbasic_frag},lambert:{uniforms:Fe([d0.common,d0.specularmap,d0.envmap,d0.aomap,d0.lightmap,d0.emissivemap,d0.bumpmap,d0.normalmap,d0.displacementmap,d0.fog,d0.lights,{emissive:{value:new I0(0)},envMapIntensity:{value:1}}]),vertexShader:z0.meshlambert_vert,fragmentShader:z0.meshlambert_frag},phong:{uniforms:Fe([d0.common,d0.specularmap,d0.envmap,d0.aomap,d0.lightmap,d0.emissivemap,d0.bumpmap,d0.normalmap,d0.displacementmap,d0.fog,d0.lights,{emissive:{value:new I0(0)},specular:{value:new I0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:z0.meshphong_vert,fragmentShader:z0.meshphong_frag},standard:{uniforms:Fe([d0.common,d0.envmap,d0.aomap,d0.lightmap,d0.emissivemap,d0.bumpmap,d0.normalmap,d0.displacementmap,d0.roughnessmap,d0.metalnessmap,d0.fog,d0.lights,{emissive:{value:new I0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:z0.meshphysical_vert,fragmentShader:z0.meshphysical_frag},toon:{uniforms:Fe([d0.common,d0.aomap,d0.lightmap,d0.emissivemap,d0.bumpmap,d0.normalmap,d0.displacementmap,d0.gradientmap,d0.fog,d0.lights,{emissive:{value:new I0(0)}}]),vertexShader:z0.meshtoon_vert,fragmentShader:z0.meshtoon_frag},matcap:{uniforms:Fe([d0.common,d0.bumpmap,d0.normalmap,d0.displacementmap,d0.fog,{matcap:{value:null}}]),vertexShader:z0.meshmatcap_vert,fragmentShader:z0.meshmatcap_frag},points:{uniforms:Fe([d0.points,d0.fog]),vertexShader:z0.points_vert,fragmentShader:z0.points_frag},dashed:{uniforms:Fe([d0.common,d0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:z0.linedashed_vert,fragmentShader:z0.linedashed_frag},depth:{uniforms:Fe([d0.common,d0.displacementmap]),vertexShader:z0.depth_vert,fragmentShader:z0.depth_frag},normal:{uniforms:Fe([d0.common,d0.bumpmap,d0.normalmap,d0.displacementmap,{opacity:{value:1}}]),vertexShader:z0.meshnormal_vert,fragmentShader:z0.meshnormal_frag},sprite:{uniforms:Fe([d0.sprite,d0.fog]),vertexShader:z0.sprite_vert,fragmentShader:z0.sprite_frag},background:{uniforms:{uvTransform:{value:new N0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:z0.background_vert,fragmentShader:z0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new N0}},vertexShader:z0.backgroundCube_vert,fragmentShader:z0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:z0.cube_vert,fragmentShader:z0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:z0.equirect_vert,fragmentShader:z0.equirect_frag},distance:{uniforms:Fe([d0.common,d0.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:z0.distance_vert,fragmentShader:z0.distance_frag},shadow:{uniforms:Fe([d0.lights,d0.fog,{color:{value:new I0(0)},opacity:{value:1}}]),vertexShader:z0.shadow_vert,fragmentShader:z0.shadow_frag}};pt.physical={uniforms:Fe([pt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new N0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new N0},clearcoatNormalScale:{value:new C0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new N0},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new N0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new N0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new N0},sheen:{value:0},sheenColor:{value:new I0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new N0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new N0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new N0},transmissionSamplerSize:{value:new C0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new N0},attenuationDistance:{value:0},attenuationColor:{value:new I0(0)},specularColor:{value:new I0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new N0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new N0},anisotropyVector:{value:new C0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new N0}}]),vertexShader:z0.meshphysical_vert,fragmentShader:z0.meshphysical_frag};const yn={r:0,b:0,g:0},v4=new Q0,Wo=new N0;Wo.set(-1,0,0,0,1,0,0,0,1);function x4(n,e,t,i,s,a){const r=new I0(0);let o=s===!0?0:1,l,c,d=null,h=0,f=null;function m(S){let R=S.isScene===!0?S.background:null;if(R&&R.isTexture){const T=S.backgroundBlurriness>0;R=e.get(R,T)}return R}function _(S){let R=!1;const T=m(S);T===null?p(r,o):T&&T.isColor&&(p(T,1),R=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(S,R){const T=m(R);T&&T.isCubeTexture?(c===void 0&&(c=new R0(new re(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:Mi(pt.backgroundCube.uniforms),vertexShader:pt.backgroundCube.vertexShader,fragmentShader:pt.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(v4.makeRotationFromEuler(R.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Wo),c.material.toneMapped=X0.getTransfer(T.colorSpace)!==J0,(d!==T||h!==T.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=T,h=T.version,f=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new R0(new Ie(2,2),new Ge({name:"BackgroundMaterial",uniforms:Mi(pt.background.uniforms),vertexShader:pt.background.vertexShader,fragmentShader:pt.background.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=X0.getTransfer(T.colorSpace)!==J0,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||h!==T.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=T,h=T.version,f=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,R){S.getRGB(yn,Bo(n)),t.buffers.color.setClear(yn.r,yn.g,yn.b,R,a)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(S,R=1){r.set(S),o=R,p(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(r,o)},render:_,addToRenderList:y,dispose:u}}function S4(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let a=s,r=!1;function o(D,O,V,P,G){let Z=!1;const z=h(D,P,V,O);a!==z&&(a=z,c(a.object)),Z=m(D,P,V,G),Z&&_(D,P,V,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(Z||r)&&(r=!1,T(D,O,V,P),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function d(D){return n.deleteVertexArray(D)}function h(D,O,V,P){const G=P.wireframe===!0;let Z=i[O.id];Z===void 0&&(Z={},i[O.id]=Z);const z=D.isInstancedMesh===!0?D.id:0;let t0=Z[z];t0===void 0&&(t0={},Z[z]=t0);let X=t0[V.id];X===void 0&&(X={},t0[V.id]=X);let Q=X[G];return Q===void 0&&(Q=f(l()),X[G]=Q),Q}function f(D){const O=[],V=[],P=[];for(let G=0;G<t;G++)O[G]=0,V[G]=0,P[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:P,object:D,attributes:{},index:null}}function m(D,O,V,P){const G=a.attributes,Z=O.attributes;let z=0;const t0=V.getAttributes();for(const X in t0)if(t0[X].location>=0){const j=G[X];let M0=Z[X];if(M0===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(M0=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(M0=D.instanceColor)),j===void 0||j.attribute!==M0||M0&&j.data!==M0.data)return!0;z++}return a.attributesNum!==z||a.index!==P}function _(D,O,V,P){const G={},Z=O.attributes;let z=0;const t0=V.getAttributes();for(const X in t0)if(t0[X].location>=0){let j=Z[X];j===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));const M0={};M0.attribute=j,j&&j.data&&(M0.data=j.data),G[X]=M0,z++}a.attributes=G,a.attributesNum=z,a.index=P}function y(){const D=a.newAttributes;for(let O=0,V=D.length;O<V;O++)D[O]=0}function p(D){u(D,0)}function u(D,O){const V=a.newAttributes,P=a.enabledAttributes,G=a.attributeDivisors;V[D]=1,P[D]===0&&(n.enableVertexAttribArray(D),P[D]=1),G[D]!==O&&(n.vertexAttribDivisor(D,O),G[D]=O)}function S(){const D=a.newAttributes,O=a.enabledAttributes;for(let V=0,P=O.length;V<P;V++)O[V]!==D[V]&&(n.disableVertexAttribArray(V),O[V]=0)}function R(D,O,V,P,G,Z,z){z===!0?n.vertexAttribIPointer(D,O,V,G,Z):n.vertexAttribPointer(D,O,V,P,G,Z)}function T(D,O,V,P){y();const G=P.attributes,Z=V.getAttributes(),z=O.defaultAttributeValues;for(const t0 in Z){const X=Z[t0];if(X.location>=0){let Q=G[t0];if(Q===void 0&&(t0==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),t0==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){const j=Q.normalized,M0=Q.itemSize,U0=e.get(Q);if(U0===void 0)continue;const $=U0.buffer,p0=U0.type,v0=U0.bytesPerElement,w0=p0===n.INT||p0===n.UNSIGNED_INT||Q.gpuType===Pa;if(Q.isInterleavedBufferAttribute){const m0=Q.data,O0=m0.isInterleavedBuffer===!0?m0.stride:m0.itemSize,ue=Q.offset;if(m0.isInstancedInterleavedBuffer||m0.isInstancedBufferAttribute){for(let P0=0;P0<X.locationSize;P0++)u(X.location+P0,m0.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=m0.meshPerAttribute*m0.count)}else for(let P0=0;P0<X.locationSize;P0++)p(X.location+P0);n.bindBuffer(n.ARRAY_BUFFER,$);for(let P0=0;P0<X.locationSize;P0++)R(X.location+P0,M0/X.locationSize,p0,j,O0*v0,(ue+M0/X.locationSize*P0)*v0,w0)}else{if(Q.isInstancedBufferAttribute){for(let m0=0;m0<X.locationSize;m0++)u(X.location+m0,Q.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let m0=0;m0<X.locationSize;m0++)p(X.location+m0);n.bindBuffer(n.ARRAY_BUFFER,$);for(let m0=0;m0<X.locationSize;m0++)R(X.location+m0,M0/X.locationSize,p0,j,M0*v0,M0/X.locationSize*m0*v0,w0)}}else if(z!==void 0){const j=z[t0];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(X.location,j);break;case 3:n.vertexAttrib3fv(X.location,j);break;case 4:n.vertexAttrib4fv(X.location,j);break;default:n.vertexAttrib1fv(X.location,j)}}}}S()}function w(){U();for(const D in i){const O=i[D];for(const V in O){const P=O[V];for(const G in P){const Z=P[G];for(const z in Z)d(Z[z].object),delete Z[z];delete P[G]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;const O=i[D.id];for(const V in O){const P=O[V];for(const G in P){const Z=P[G];for(const z in Z)d(Z[z].object),delete Z[z];delete P[G]}}delete i[D.id]}function g(D){for(const O in i){const V=i[O];for(const P in V){const G=V[P];if(G[D.id]===void 0)continue;const Z=G[D.id];for(const z in Z)d(Z[z].object),delete Z[z];delete G[D.id]}}}function M(D){for(const O in i){const V=i[O],P=D.isInstancedMesh===!0?D.id:0,G=V[P];if(G!==void 0){for(const Z in G){const z=G[Z];for(const t0 in z)d(z[t0].object),delete z[t0];delete G[Z]}delete V[P],Object.keys(V).length===0&&delete i[O]}}}function U(){L(),r=!0,a!==s&&(a=s,c(a.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:L,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:g,initAttributes:y,enableAttribute:p,disableUnusedAttributes:S}}function M4(n,e,t){let i;function s(l){i=l}function a(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function r(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),t.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let f=0;for(let m=0;m<d;m++)f+=c[m];t.update(f,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function y4(n,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(g){return!(g!==He&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const M=g===De&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Ze&&g!==Je&&!M&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(L0("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&L0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&L0("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:S,maxVaryings:R,maxFragmentUniforms:T,maxSamples:w,samples:E}}function T4(n){const e=this;let t=null,i=0,s=!1,a=!1;const r=new Ut,o=new N0,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||s;return s=f,i=h.length,m},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,y=h.clipIntersection,p=h.clipShadows,u=n.get(h);if(!s||_===null||_.length===0||a&&!p)a?d(null):c();else{const S=a?0:i,R=S*4;let T=u.clippingState||null;l.value=T,T=d(_,f,R,m);for(let w=0;w!==R;++w)T[w]=t[w];u.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,m,_){const y=h!==null?h.length:0;let p=null;if(y!==0){if(p=l.value,_!==!0||p===null){const u=m+y*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<u)&&(p=new Float32Array(u));for(let R=0,T=m;R!==y;++R,T+=4)r.copy(h[R]).applyMatrix4(S,o),r.normal.toArray(p,T),p[T+3]=r.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}class Wa extends We{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Uo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new re(5,5,5),a=new Ge({name:"CubemapFromEquirect",uniforms:Mi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ve,blending:Yt});a.uniforms.tEquirect.value=t;const r=new R0(s,a),o=t.minFilter;return t.minFilter===Bt&&(t.minFilter=be),new va(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,s);e.setRenderTarget(a)}}const zr=256,b4=3,E4=20,Xo=256,qo=16,w4=3,A4=new N,R4=new I0;class kn{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new va(1,10,null),this._boxMesh=new R0(new re(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,a={}){const{size:r=256,position:o=A4}=a,l=this._renderer;this._setSize(r);const c=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);const h=l.autoClear,f=l.autoClearColor,m=l.autoClearDepth,_=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(R4));const p=new va(i,s,d);return p.position.copy(o),p.update(l,e),l.autoClear=h,l.autoClearColor=f,l.autoClearDepth=m,l.autoClearStencil=_,e.background=y,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(zr,q1(e))}_fromTexture(e,t){e.mapping===vi||e.mapping===Gi?this._setSize(e.image.length===0?zr:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=Hr(e,!1,!1),i=Math.log2(e)-b4;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Hr(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const s=this._boxMesh,a=this._cubeCamera;s.material=i,a.renderTarget=e,a.activeMipmapLevel=t;const r=e.width>>t;e.viewport.set(0,0,r,r),a.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===vi||e.mapping===Gi?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vr()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Gr()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=C4(),this._integrationMaterial=P4());const t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(t/qo);for(let r=0;r<=i;r++){const o=kn.lodToRoughness(r,i);if(r>i-w4)a.roughness.value=o,this._renderCube(e,r,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(Xo*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=L4());const i=this._blurMaterial,s=i.uniforms,a=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=a.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(a,0,i)}}function Hr(n,e,t){return new Wa(n,{minFilter:Bt,generateMipmaps:e,type:De,colorSpace:Nn,depthBuffer:t})}function Yi(n,e,t){return new Ge({name:n,uniforms:e,vertexShader:z0.cube_vert,fragmentShader:t,side:Ve,blending:Yt,depthTest:!1,depthWrite:!1})}function C4(){return Yi("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Xo}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function P4(){return Yi("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:qo}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function L4(){return Yi("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${E4}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Gr(){return Yi("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Vr(){return Yi("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function I4(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,m=!1){return f==null?null:m?r(f):a(f)}function a(f){if(f&&f.isTexture){const m=f.mapping;if(m===$n||m===Yn)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const y=new Wa(_.height);return y.fromEquirectangularTexture(n,f),e.set(f,y),f.addEventListener("dispose",c),o(y.texture,f.mapping)}else return null}}return f}function r(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const m=f.mapping,_=m===$n||m===Yn,y=m===vi||m===Gi;if(_||y){let p=t.get(f);const u=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==u)return i===null&&(i=new kn(n)),p=_?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const S=f.image;return _&&S&&S.height>0||y&&S&&l(S)?(i===null&&(i=new kn(n)),p=_?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",d),p.texture):null}}}return f}function o(f,m){return m===$n?f.mapping=vi:m===Yn&&(f.mapping=Gi),f}function l(f){let m=0;const _=6;for(let y=0;y<_;y++)f[y]!==void 0&&m++;return m===_}function c(f){const m=f.target;m.removeEventListener("dispose",c);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function d(f){const m=f.target;m.removeEventListener("dispose",d);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function D4(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&gi("WebGLRenderer: "+i+" extension not supported."),s}}}function N4(n,e,t,i){const s={},a=new WeakMap,r=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(const p in _.attributes)e.remove(_.attributes[p]);_.removeEventListener("dispose",o),delete s[_.id],r.unregister(_);const y=a.get(_);y&&(e.remove(y),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(_,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),r.register(y,y.id,y),t.memory.geometries++),y}function d(_){const y=_.attributes;for(const p in y)e.update(y[p],n.ARRAY_BUFFER)}function h(_){const y=_.index,p=_.attributes.position;let u=0;if(p===void 0)return;const S=y!==null?y.array.length:p.array.length/3-1,R=p.count>=65535?Do:Io,T=new R(Math.ceil(S/3)*6,1),w=T.array;if(y!==null){const g=y.array;u=y.version;for(let M=0,U=0;M<S;M+=3){const L=g[M+0],D=g[M+1],O=g[M+2];w[U++]=L,w[U++]=D,w[U++]=D,w[U++]=O,w[U++]=O,w[U++]=L}}else{u=p.version;for(let g=0,M=0;g<S;g+=3){const U=g+0,L=g+1,D=g+2;w[M++]=U,w[M++]=L,w[M++]=L,w[M++]=D,w[M++]=D,w[M++]=U}}T.version=u;const E=a.get(_);E&&e.remove(E),a.set(_,T)}function f(_){const y=a.get(_);if(y){const p=_.index;p!==null&&y.version<p.version&&h(_)}else h(_);return a.get(_)}function m(){for(const _ in s){const y=s[_].deref();y!==void 0&&l(y)}}return{get:c,update:d,getWireframeAttribute:f,dispose:m}}function U4(n,e,t){let i;function s(h){i=h}let a,r;function o(h){a=h.type,r=h.bytesPerElement}function l(h,f){n.drawElements(i,f,a,h*r),t.update(f,i,1)}function c(h,f,m){m!==0&&(n.drawElementsInstanced(i,f,a,h*r,m),t.update(f,i,m))}function d(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,a,h,0,m);let y=0;for(let p=0;p<m;p++)y+=f[p];t.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function F4(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:Z0("WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function O4(n,e,t){const i=new WeakMap,s=new ce;function a(r,o,l){const c=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let L=function(){M.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var m=L;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let T=0;_===!0&&(T=1),y===!0&&(T=2),p===!0&&(T=3);let w=o.attributes.position.count*T,E=1;w>e.maxTextureSize&&(E=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const g=new Float32Array(w*E*4*h),M=new Co(g,w,E,h);M.type=Je,M.needsUpdate=!0;const U=T*4;for(let D=0;D<h;D++){const O=u[D],V=S[D],P=R[D],G=w*E*4*D;for(let Z=0;Z<O.count;Z++){const z=Z*U;_===!0&&(s.fromBufferAttribute(O,Z),g[G+z+0]=s.x,g[G+z+1]=s.y,g[G+z+2]=s.z,g[G+z+3]=0),y===!0&&(s.fromBufferAttribute(V,Z),g[G+z+4]=s.x,g[G+z+5]=s.y,g[G+z+6]=s.z,g[G+z+7]=0),p===!0&&(s.fromBufferAttribute(P,Z),g[G+z+8]=s.x,g[G+z+9]=s.y,g[G+z+10]=s.z,g[G+z+11]=P.itemSize===4?s.w:1)}}f={count:h,texture:M,size:new C0(w,E)},i.set(o,f),o.addEventListener("dispose",L)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const y=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:a}}function B4(n,e,t,i,s){let a=new WeakMap;function r(c){const d=s.render.frame,h=c.geometry,f=e.get(c,h);if(a.get(f)!==d&&(e.update(f),a.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),a.set(c,d))),c.isSkinnedMesh){const m=c.skeleton;a.get(m)!==d&&(m.update(),a.set(m,d))}return f}function o(){a=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:r,dispose:o}}const k4={[ba]:"LINEAR_TONE_MAPPING",[Ea]:"REINHARD_TONE_MAPPING",[wa]:"CINEON_TONE_MAPPING",[Vn]:"ACES_FILMIC_TONE_MAPPING",[Ra]:"AGX_TONE_MAPPING",[Ca]:"NEUTRAL_TONE_MAPPING",[Aa]:"CUSTOM_TONE_MAPPING"};function z4(n,e,t,i,s,a){const r=new We(e,t,{type:n,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const d=new Xe;d.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new he([0,2,0,0,2,0],2));const h=new ko({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new R0(d,h),m=new Go(-1,1,1,-1,0,1);let _=null,y=null,p=!1,u,S=null,R=[],T=!1;this.setSize=function(w,E){r.setSize(w,E),o!==null&&o.setSize(w,E),l!==null&&l.setSize(w,E);for(let g=0;g<R.length;g++){const M=R[g];M.setSize&&M.setSize(w,E)}},this.setEffects=function(w){R=w,T=R.length>0&&R[0].isRenderPass===!0;const E=r.width,g=r.height;R.length>0&&o===null&&(o=new We(E,g,{type:De,depthBuffer:!1,stencilBuffer:!1}),l=new We(E,g,{type:De,depthBuffer:!1,stencilBuffer:!1}));const M=s===!0&&R.some(U=>U.needsDepthTexture===!0);M!==(r.depthTexture!==null)&&(M===!0&&c===null&&(c=new Si(E,g),a===!0&&(c.format=kt,c.type=xi)),r.dispose(),r.depthTexture=M?c:null,r.resolveDepthBuffer=M,r.storeMultisampledDepthBuffer=M);for(let U=0;U<R.length;U++){const L=R[U];L.setSize&&L.setSize(E,g),M&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(c)}},this.begin=function(w,E){if(p||w.toneMapping===Et&&R.length===0)return!1;if(S=E,E!==null){const g=E.width,M=E.height;(r.width!==g||r.height!==M)&&this.setSize(g,M)}return T===!1&&w.setRenderTarget(r),u=w.toneMapping,w.toneMapping=Et,!0},this.hasRenderPass=function(){return T},this.end=function(w,E){w.toneMapping=u,p=!0;let g=r,M=o;for(let U=0;U<R.length;U++){const L=R[U];L.enabled!==!1&&(L.render(w,M,g,E),L.needsSwap!==!1&&(g=M,M=M===o?l:o))}if(_!==w.outputColorSpace||y!==w.toneMapping){_=w.outputColorSpace,y=w.toneMapping,h.defines={},X0.getTransfer(_)===J0&&(h.defines.SRGB_TRANSFER="");const U=k4[y];U&&(h.defines[U]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=g.texture,w.setRenderTarget(S),w.render(f,m),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),d.dispose(),h.dispose()}}const Ko=new Ne,$o=new Si(1,1),Yo=new Fo(1),Zo=new Co,Jo=new e9,Qo=new Uo,Wr=[],Xr=[],qr=new Float32Array(16),Kr=new Float32Array(9),$r=new Float32Array(4);function wi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let a=Wr[s];if(a===void 0&&(a=new Float32Array(s),Wr[s]=a),e!==0){i.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,n[r].toArray(a,o)}return a}function ve(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function xe(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Wn(n,e){let t=Xr[e];t===void 0&&(t=new Int32Array(e),Xr[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function H4(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function G4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ve(t,e))return;n.uniform2fv(this.addr,e),xe(t,e)}}function V4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ve(t,e))return;n.uniform3fv(this.addr,e),xe(t,e)}}function W4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ve(t,e))return;n.uniform4fv(this.addr,e),xe(t,e)}}function X4(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ve(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),xe(t,e)}else{if(ve(t,i))return;$r.set(i),n.uniformMatrix2fv(this.addr,!1,$r),xe(t,i)}}function q4(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ve(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),xe(t,e)}else{if(ve(t,i))return;Kr.set(i),n.uniformMatrix3fv(this.addr,!1,Kr),xe(t,i)}}function K4(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ve(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),xe(t,e)}else{if(ve(t,i))return;qr.set(i),n.uniformMatrix4fv(this.addr,!1,qr),xe(t,i)}}function $4(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Y4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ve(t,e))return;n.uniform2iv(this.addr,e),xe(t,e)}}function Z4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ve(t,e))return;n.uniform3iv(this.addr,e),xe(t,e)}}function J4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ve(t,e))return;n.uniform4iv(this.addr,e),xe(t,e)}}function Q4(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function j4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ve(t,e))return;n.uniform2uiv(this.addr,e),xe(t,e)}}function e5(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ve(t,e))return;n.uniform3uiv(this.addr,e),xe(t,e)}}function t5(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ve(t,e))return;n.uniform4uiv(this.addr,e),xe(t,e)}}function Xn(n){return n.version===0&&(n.compareFunction=Ao,n.needsUpdate=!0),n}function i5(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?a=Xn($o):a=Ko,t.setTexture2D(e||a,s)}function n5(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Jo,s)}function s5(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Xn(Yo):a=Qo,t.setTextureCube(e||a,s)}function a5(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Zo,s)}function r5(n){switch(n){case 5126:return H4;case 35664:return G4;case 35665:return V4;case 35666:return W4;case 35674:return X4;case 35675:return q4;case 35676:return K4;case 5124:case 35670:return $4;case 35667:case 35671:return Y4;case 35668:case 35672:return Z4;case 35669:case 35673:return J4;case 5125:return Q4;case 36294:return j4;case 36295:return e5;case 36296:return t5;case 35678:case 36198:case 36298:case 36306:case 35682:return i5;case 35679:case 36299:case 36307:return n5;case 35680:case 36300:case 36308:case 36293:return s5;case 36289:case 36303:case 36311:case 36292:return a5}}function o5(n,e){n.uniform1fv(this.addr,e)}function l5(n,e){const t=wi(e,this.size,2);n.uniform2fv(this.addr,t)}function c5(n,e){const t=wi(e,this.size,3);n.uniform3fv(this.addr,t)}function h5(n,e){const t=wi(e,this.size,4);n.uniform4fv(this.addr,t)}function d5(n,e){const t=wi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function u5(n,e){const t=wi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function f5(n,e){const t=wi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function p5(n,e){n.uniform1iv(this.addr,e)}function m5(n,e){n.uniform2iv(this.addr,e)}function g5(n,e){n.uniform3iv(this.addr,e)}function _5(n,e){n.uniform4iv(this.addr,e)}function v5(n,e){n.uniform1uiv(this.addr,e)}function x5(n,e){n.uniform2uiv(this.addr,e)}function S5(n,e){n.uniform3uiv(this.addr,e)}function M5(n,e){n.uniform4uiv(this.addr,e)}function y5(n,e,t){const i=this.cache,s=e.length,a=Wn(t,s);ve(i,a)||(n.uniform1iv(this.addr,a),xe(i,a));let r;this.type===n.SAMPLER_2D_SHADOW?r=Xn($o):r=Ko;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||r,a[o])}function T5(n,e,t){const i=this.cache,s=e.length,a=Wn(t,s);ve(i,a)||(n.uniform1iv(this.addr,a),xe(i,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||Jo,a[r])}function b5(n,e,t){const i=this.cache,s=e.length,a=Wn(t,s);ve(i,a)||(n.uniform1iv(this.addr,a),xe(i,a));let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Xn(Yo):r=Qo;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||r,a[o])}function E5(n,e,t){const i=this.cache,s=e.length,a=Wn(t,s);ve(i,a)||(n.uniform1iv(this.addr,a),xe(i,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||Zo,a[r])}function w5(n){switch(n){case 5126:return o5;case 35664:return l5;case 35665:return c5;case 35666:return h5;case 35674:return d5;case 35675:return u5;case 35676:return f5;case 5124:case 35670:return p5;case 35667:case 35671:return m5;case 35668:case 35672:return g5;case 35669:case 35673:return _5;case 5125:return v5;case 36294:return x5;case 36295:return S5;case 36296:return M5;case 35678:case 36198:case 36298:case 36306:case 35682:return y5;case 35679:case 36299:case 36307:return T5;case 35680:case 36300:case 36308:case 36293:return b5;case 36289:case 36303:case 36311:case 36292:return E5}}class A5{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=r5(t.type)}}class R5{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=w5(t.type)}}class C5{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(e,t[o.id],i)}}}const ys=/(\w+)(\])?(\[|\.)?/g;function Yr(n,e){n.seq.push(e),n.map[e.id]=e}function P5(n,e,t){const i=n.name,s=i.length;for(ys.lastIndex=0;;){const a=ys.exec(i),r=ys.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Yr(t,c===void 0?new A5(o,n,e):new R5(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new C5(o),Yr(t,h)),t=h}}}class Pn{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);P5(o,l,this)}const s=[],a=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,r=t.length;a!==r;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const r=e[s];r.id in t&&i.push(r)}return i}}function Zr(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const L5=37297;let I5=0;function D5(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}const Jr=new N0;function N5(n){X0._getMatrix(Jr,X0.workingColorSpace,n);const e=`mat3( ${Jr.elements.map(t=>t.toFixed(4))} )`;switch(X0.getTransfer(n)){case Un:return[e,"LinearTransferOETF"];case J0:return[e,"sRGBTransferOETF"];default:return L0("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Qr(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+D5(n.getShaderSource(e),o)}else return a}function U5(n,e){const t=N5(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const F5={[ba]:"Linear",[Ea]:"Reinhard",[wa]:"Cineon",[Vn]:"ACESFilmic",[Ra]:"AgX",[Ca]:"Neutral",[Aa]:"Custom"};function O5(n,e){const t=F5[e];return t===void 0?(L0("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tn=new N;function B5(){X0.getLuminanceCoefficients(Tn);const n=Tn.x.toFixed(4),e=Tn.y.toFixed(4),t=Tn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k5(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oi).join(`
`)}function z5(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function H5(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=n.getActiveAttrib(e,s),r=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:n.getAttribLocation(e,r),locationSize:o}}return t}function Oi(n){return n!==""}function jr(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function eo(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const G5=/^[ \t]*#include +<([\w\d./]+)>/gm;function xa(n){return n.replace(G5,V5)}function V5(n,e){const t=z0[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return xa(t)}const W5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function to(n){return n.replace(W5,X5)}function X5(n,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function io(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const q5={[Bi]:"SHADOWMAP_TYPE_PCF",[Fi]:"SHADOWMAP_TYPE_VSM"};function K5(n){return q5[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $5={[Gi]:"ENVMAP_MODE_REFRACTION"};function Y5(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":$5[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Z5={[vo]:"ENVMAP_BLENDING_MULTIPLY",[C1]:"ENVMAP_BLENDING_MIX",[P1]:"ENVMAP_BLENDING_ADD"};function J5(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Z5[n.combine]||"ENVMAP_BLENDING_NONE"}function Q5(n,e,t,i){const s=n.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=K5(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=Y5(t),h=J5(t),f=k5(t),m=z5(a),_=s.createProgram();let y,p,u=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Oi).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Oi).join(`
`),p.length>0&&(p+=`
`)):(y=[io(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),p=[io(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Et?"#define TONE_MAPPING":"",t.toneMapping!==Et?z0.tonemapping_pars_fragment:"",t.toneMapping!==Et?O5("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",z0.colorspace_pars_fragment,U5("linearToOutputTexel",t.outputColorSpace),B5(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oi).join(`
`)),r=xa(r),r=jr(r,t),r=eo(r,t),o=xa(o),o=jr(o,t),o=eo(o,t),r=to(r),o=to(o),t.isRawShaderMaterial!==!0&&(u=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",t.glslVersion===hr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=u+y+r,R=u+p+o,T=Zr(s,s.VERTEX_SHADER,S),w=Zr(s,s.FRAGMENT_SHADER,R);s.attachShader(_,T),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(L){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(T)||"",V=s.getShaderInfoLog(w)||"",P=D.trim(),G=O.trim(),Z=V.trim();let z=!0,t0=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,T,w);else{const X=Qr(s,T,"vertex"),Q=Qr(s,w,"fragment");Z0("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+P+`
`+X+`
`+Q)}else P!==""?L0("WebGLProgram: Program Info Log:",P):(G===""||Z==="")&&(t0=!1);t0&&(L.diagnostics={runnable:z,programLog:P,vertexShader:{log:G,prefix:y},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(T),s.deleteShader(w),g=new Pn(s,_),M=H5(s,_)}let g;this.getUniforms=function(){return g===void 0&&E(this),g};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(_,L5)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=I5++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let j5=0;class el{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new tl(e),t.set(e,i)),i}}class tl{constructor(e){this.id=j5++,this.code=e,this.usedTimes=0}}function il(n){return n===Jt||n===In||n===Dn}function nl(n,e,t,i,s,a){const r=new Po,o=new el,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,M,U,L,D,O){const V=L.fog,P=D.geometry,G=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?L.environment:null,Z=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,z=e.get(g.envMap||G,Z),t0=f[g.type];let X=i.precision;g.precision!==null&&(X=i.getMaxPrecision(g.precision),X!==g.precision&&L0("WebGLProgram.getParameters:",g.precision,"not supported, using",X,"instead."));const Q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,j=Q!==void 0?Q.length:0;let M0=0;P.morphAttributes.position!==void 0&&(M0=1),P.morphAttributes.normal!==void 0&&(M0=2),P.morphAttributes.color!==void 0&&(M0=3);let U0,$,p0,v0;if(t0){const f0=pt[t0];U0=f0.vertexShader,$=f0.fragmentShader}else{U0=g.vertexShader,$=g.fragmentShader;const f0=o.getVertexShaderStage(g),ee=o.getFragmentShaderStage(g);o.update(g,f0,ee),p0=f0.id,v0=ee.id}const w0=n.getRenderTarget(),m0=n.state.buffers.depth.getReversed(),O0=D.isInstancedMesh===!0,ue=D.isBatchedMesh===!0,P0=!!g.map,j0=!!g.matcap,te=!!z,G0=te&&z.isPMREMTexture===!0,Ee=!!g.aoMap,me=!!g.lightMap,ke=!!g.bumpMap&&g.wireframe===!1,oe=!!g.normalMap,ht=!!g.displacementMap,Se=!!g.emissiveMap,Qe=!!g.metalnessMap,je=!!g.roughnessMap,et=g.anisotropy>0,I=g.clearcoat>0,tt=g.diffuseRoughness>0,se=g.dispersion>0,ae=g.retroreflectivity>0,u0=g.iridescence>0,ge=g.sheen>0,A0=g.transmission>0,D0=et&&!!g.anisotropyMap,b=I&&!!g.clearcoatMap,v=I&&!!g.clearcoatNormalMap,B=I&&!!g.clearcoatRoughnessMap,e0=tt&&!!g.diffuseRoughnessMap,J=u0&&!!g.iridescenceMap,s0=u0&&!!g.iridescenceThicknessMap,c0=ge&&!!g.sheenColorMap,q=ge&&!!g.sheenRoughnessMap,K=!!g.specularMap,r0=!!g.specularColorMap,A=!!g.specularIntensityMap,Y=A0&&!!g.transmissionMap,W=A0&&!!g.thicknessMap,o0=!!g.gradientMap,n0=!!g.alphaMap,a0=g.alphaTest>0,b0=!!g.alphaHash,k0=!!g.extensions;let i0=Et;g.toneMapped&&(w0===null||w0.isXRRenderTarget===!0)&&(i0=n.toneMapping);const E0=G0?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,B0={shaderID:t0,shaderType:g.type,shaderName:g.name,vertexShader:U0,fragmentShader:$,defines:g.defines,customVertexShaderID:p0,customFragmentShaderID:v0,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:X,batching:ue,batchingColor:ue&&D._colorsTexture!==null,instancing:O0,instancingColor:O0&&D.instanceColor!==null,instancingMorph:O0&&D.morphTexture!==null,outputColorSpace:w0===null?n.outputColorSpace:w0.isXRRenderTarget===!0?w0.texture.colorSpace:X0.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:P0,matcap:j0,envMap:te,envMapMode:te&&z.mapping,envMapPMREM:G0,envMapMaxLod:G0?E0.length-1:null,envMapSize:G0?E0[0].width:null,aoMap:Ee,lightMap:me,bumpMap:ke,normalMap:oe,displacementMap:ht,emissiveMap:Se,normalMapObjectSpace:oe&&g.normalMapType===D1,normalMapTangentSpace:oe&&g.normalMapType===ga,packedNormalMap:oe&&g.normalMapType===ga&&il(g.normalMap.format),metalnessMap:Qe,roughnessMap:je,anisotropy:et,anisotropyMap:D0,clearcoat:I,clearcoatMap:b,clearcoatNormalMap:v,clearcoatRoughnessMap:B,diffuseRoughness:tt,diffuseRoughnessMap:e0,dispersion:se,retroreflection:ae,iridescence:u0,iridescenceMap:J,iridescenceThicknessMap:s0,sheen:ge,sheenColorMap:c0,sheenRoughnessMap:q,specularMap:K,specularColorMap:r0,specularIntensityMap:A,transmission:A0,transmissionMap:Y,thicknessMap:W,gradientMap:o0,opaque:g.transparent===!1&&g.blending===ki&&g.alphaToCoverage===!1,alphaMap:n0,alphaTest:a0,alphaHash:b0,combine:g.combine,mapUv:P0&&m(g.map.channel),aoMapUv:Ee&&m(g.aoMap.channel),lightMapUv:me&&m(g.lightMap.channel),bumpMapUv:ke&&m(g.bumpMap.channel),normalMapUv:oe&&m(g.normalMap.channel),displacementMapUv:ht&&m(g.displacementMap.channel),emissiveMapUv:Se&&m(g.emissiveMap.channel),metalnessMapUv:Qe&&m(g.metalnessMap.channel),roughnessMapUv:je&&m(g.roughnessMap.channel),anisotropyMapUv:D0&&m(g.anisotropyMap.channel),clearcoatMapUv:b&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:v&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&m(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:e0&&m(g.diffuseRoughnessMap.channel),iridescenceMapUv:J&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:s0&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:c0&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:q&&m(g.sheenRoughnessMap.channel),specularMapUv:K&&m(g.specularMap.channel),specularColorMapUv:r0&&m(g.specularColorMap.channel),specularIntensityMapUv:A&&m(g.specularIntensityMap.channel),transmissionMapUv:Y&&m(g.transmissionMap.channel),thicknessMapUv:W&&m(g.thicknessMap.channel),alphaMapUv:n0&&m(g.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(oe||et),vertexNormals:!!P.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(P0||n0),fog:!!V,useFog:g.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||P.attributes.normal===void 0&&oe===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:m0,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:M0,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:O.filter(f0=>f0.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:i0,decodeVideoTexture:P0&&g.map.isVideoTexture===!0&&X0.getTransfer(g.map.colorSpace)===J0,decodeVideoTextureEmissive:Se&&g.emissiveMap.isVideoTexture===!0&&X0.getTransfer(g.emissiveMap.colorSpace)===J0,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ye,flipSided:g.side===Ve,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:k0&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(k0&&g.extensions.multiDraw===!0||ue)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return B0.vertexUv1s=l.has(1),B0.vertexUv2s=l.has(2),B0.vertexUv3s=l.has(3),l.clear(),B0}function y(g){const M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(const U in g.defines)M.push(U),M.push(g.defines[U]);return g.isRawShaderMaterial===!1&&(p(M,g),u(M,g),M.push(n.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function p(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapPMREM),g.push(M.envMapMaxLod),g.push(M.envMapSize),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.diffuseRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.numSunLights),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numSunLightShadows),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.numLightProbeGrids),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function u(g,M){r.disableAll(),M.instancing&&r.enable(0),M.instancingColor&&r.enable(1),M.instancingMorph&&r.enable(2),M.matcap&&r.enable(3),M.envMap&&r.enable(4),M.normalMapObjectSpace&&r.enable(5),M.normalMapTangentSpace&&r.enable(6),M.clearcoat&&r.enable(7),M.iridescence&&r.enable(8),M.alphaTest&&r.enable(9),M.vertexColors&&r.enable(10),M.vertexAlphas&&r.enable(11),M.vertexUv1s&&r.enable(12),M.vertexUv2s&&r.enable(13),M.vertexUv3s&&r.enable(14),M.vertexTangents&&r.enable(15),M.anisotropy&&r.enable(16),M.alphaHash&&r.enable(17),M.batching&&r.enable(18),M.dispersion&&r.enable(19),M.retroreflection&&r.enable(24),M.diffuseRoughness&&r.enable(25),M.batchingColor&&r.enable(20),M.gradientMap&&r.enable(21),M.packedNormalMap&&r.enable(22),M.vertexNormals&&r.enable(23),g.push(r.mask),r.disableAll(),M.fog&&r.enable(0),M.useFog&&r.enable(1),M.flatShading&&r.enable(2),M.logarithmicDepthBuffer&&r.enable(3),M.reversedDepthBuffer&&r.enable(4),M.skinning&&r.enable(5),M.morphTargets&&r.enable(6),M.morphNormals&&r.enable(7),M.morphColors&&r.enable(8),M.premultipliedAlpha&&r.enable(9),M.shadowMapEnabled&&r.enable(10),M.doubleSided&&r.enable(11),M.flipSided&&r.enable(12),M.useDepthPacking&&r.enable(13),M.dithering&&r.enable(14),M.transmission&&r.enable(15),M.sheen&&r.enable(16),M.opaque&&r.enable(17),M.pointsUvs&&r.enable(18),M.decodeVideoTexture&&r.enable(19),M.decodeVideoTextureEmissive&&r.enable(20),M.alphaToCoverage&&r.enable(21),M.numLightProbeGrids>0&&r.enable(22),M.hasPositionAttribute&&r.enable(23),g.push(r.mask)}function S(g){const M=f[g.type];let U;if(M){const L=pt[M];U=qi.clone(L.uniforms)}else U=g.uniforms;return U}function R(g,M){let U=d.get(M);return U!==void 0?++U.usedTimes:(U=new Q5(n,M,g,s),c.push(U),d.set(M,U)),U}function T(g){if(--g.usedTimes===0){const M=c.indexOf(g);c[M]=c[c.length-1],c.pop(),d.delete(g.cacheKey),g.destroy()}}function w(g){o.remove(g)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:y,getUniforms:S,acquireProgram:R,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:E}}function sl(){let n=new WeakMap;function e(r){return n.has(r)}function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function i(r){n.delete(r)}function s(r,o,l){n.get(r)[o]=l}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function al(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function no(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function so(){const n=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function r(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function o(f,m,_,y,p,u){let S=n[e];return S===void 0?(S={id:f.id,object:f,geometry:m,material:_,materialVariant:r(f),groupOrder:y,renderOrder:f.renderOrder,z:p,group:u},n[e]=S):(S.id=f.id,S.object=f,S.geometry=m,S.material=_,S.materialVariant=r(f),S.groupOrder=y,S.renderOrder=f.renderOrder,S.z=p,S.group=u),e++,S}function l(f,m,_,y,p,u,S){S.reversedDepth===!0&&(p=-p);const R=o(f,m,_,y,p,u);_.transmission>0?i.push(R):_.transparent===!0?s.push(R):t.push(R)}function c(f,m,_,y,p,u){const S=o(f,m,_,y,p,u);_.transmission>0?i.unshift(S):_.transparent===!0?s.unshift(S):t.unshift(S)}function d(f,m){t.length>1&&t.sort(f||al),i.length>1&&i.sort(m||no),s.length>1&&s.sort(m||no)}function h(){for(let f=e,m=n.length;f<m;f++){const _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:h,sort:d}}function rl(){let n=new WeakMap;function e(i,s){const a=n.get(i);let r;return a===void 0?(r=new so,n.set(i,[r])):s>=a.length?(r=new so,a.push(r)):r=a[s],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function ol(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new I0};break;case"SpotLight":t={position:new N,direction:new N,color:new I0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new I0,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new I0,groundColor:new I0};break;case"RectAreaLight":t={color:new I0,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function ll(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new C0};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new C0};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new C0,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let cl=0;function hl(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function dl(n){const e=new ol,t=ll(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const s=new N,a=new Q0,r=new Q0;function o(c){let d=0,h=0,f=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let m=0,_=0,y=0,p=0,u=0,S=0,R=0,T=0,w=0,E=0,g=0,M=0,U=0,L=0;c.sort(hl);for(let O=0,V=c.length;O<V;O++){const P=c[O],G=P.color,Z=P.intensity,z=P.distance;let t0=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Jt?t0=P.shadow.map.texture:t0=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=G.r*Z,h+=G.g*Z,f+=G.b*Z;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],Z);L++}else if(P.isSunLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,j=t.get(P);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[_]=j,i.sunShadowMap[_]=t0;const M0=Q.getViewportCount();for(let U0=0;U0<M0;U0++)i.sunShadowMatrix[y+U0]=Q.getMatrix(U0),i.sunShadowCascade[y+U0]=Q._cascadeData[U0];y+=M0,_++}i.sun[m]=X,m++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,j=t.get(P);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,i.directionalShadow[p]=j,i.directionalShadowMap[p]=t0,i.directionalShadowMatrix[p]=P.shadow.matrix,w++}i.directional[p]=X,p++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(G).multiplyScalar(Z),X.distance=z,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[S]=X;const Q=P.shadow;if(P.map&&(i.spotLightMap[M]=P.map,M++,Q.updateMatrices(P),P.castShadow&&U++),i.spotLightMatrix[S]=Q.matrix,P.castShadow){const j=t.get(P);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,i.spotShadow[S]=j,i.spotShadowMap[S]=t0,g++}S++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(G).multiplyScalar(Z),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[R]=X,R++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const Q=P.shadow,j=t.get(P);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,i.pointShadow[u]=j,i.pointShadowMap[u]=t0,i.pointShadowMatrix[u]=P.shadow.matrix,E++}i.point[u]=X,u++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(Z),X.groundColor.copy(P.groundColor).multiplyScalar(Z),i.hemi[T]=X,T++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=d0.LTC_FLOAT_1,i.rectAreaLTC2=d0.LTC_FLOAT_2):(i.rectAreaLTC1=d0.LTC_HALF_1,i.rectAreaLTC2=d0.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const D=i.hash;(D.sunLength!==m||D.directionalLength!==p||D.pointLength!==u||D.spotLength!==S||D.rectAreaLength!==R||D.hemiLength!==T||D.numSunShadows!==_||D.numDirectionalShadows!==w||D.numPointShadows!==E||D.numSpotShadows!==g||D.numSpotMaps!==M||D.numLightProbes!==L)&&(i.sun.length=m,i.directional.length=p,i.spot.length=S,i.rectArea.length=R,i.point.length=u,i.hemi.length=T,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+M-U,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=L,D.sunLength=m,D.directionalLength=p,D.pointLength=u,D.spotLength=S,D.rectAreaLength=R,D.hemiLength=T,D.numSunShadows=_,D.numDirectionalShadows=w,D.numPointShadows=E,D.numSpotShadows=g,D.numSpotMaps=M,D.numLightProbes=L,i.version=cl++)}function l(c,d){let h=0,f=0,m=0,_=0,y=0,p=0;const u=d.matrixWorldInverse;for(let S=0,R=c.length;S<R;S++){const T=c[S];if(T.isSunLight){const w=i.sun[h];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(u),h++}else if(T.isDirectionalLight){const w=i.directional[f];w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),f++}else if(T.isSpotLight){const w=i.spot[_];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(u),w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),_++}else if(T.isRectAreaLight){const w=i.rectArea[y];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(u),r.identity(),a.copy(T.matrixWorld),a.premultiply(u),r.extractRotation(a),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),y++}else if(T.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(u),m++}else if(T.isHemisphereLight){const w=i.hemi[p];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(u),p++}}}return{setup:o,setupView:l,state:i}}function ao(n){const e=new dl(n),t=[],i=[],s=[];function a(h){d.camera=h,t.length=0,i.length=0,s.length=0}function r(h){h.isLightProbeGrid?s.push(h):t.push(h)}function o(h){i.push(h)}function l(){e.setup(t),s.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function c(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function ul(n){let e=new WeakMap;function t(s,a=0){const r=e.get(s);let o;return r===void 0?(o=new ao(n),e.set(s,[o])):a>=r.length?(o=new ao(n),r.push(o)):o=r[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const fl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ml=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],gl=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],ro=new Q0,Ui=new N,Ts=new N;function _l(n,e,t){let i=new Xi;const s=new C0,a=new C0,r=new ce,o=new R9,l=new C9,c={},d=t.maxTextureSize,h={[Zt]:Ve,[Ve]:Zt,[Ye]:Ye},f=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new C0},radius:{value:4}},vertexShader:fl,fragmentShader:pl}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Xe;_.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new R0(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bi;let u=this.type;this.render=function(E,g,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===h1&&(L0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bi);const U=n.getRenderTarget(),L=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Yt),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const V=u!==this.type;V&&g.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(G=>G.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,G=E.length;P<G;P++){const Z=E[P],z=Z.shadow;if(z===void 0){L0("WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const t0=z.getFrameExtents();s.multiply(t0),a.copy(z.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(a.x=Math.floor(d/t0.x),s.x=a.x*t0.x,z.mapSize.x=a.x),s.y>d&&(a.y=Math.floor(d/t0.y),s.y=a.y*t0.y,z.mapSize.y=a.y));const X=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=X,z.map===null||V===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Fi){if(Z.isPointLight){L0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new We(s.x,s.y,{format:Jt,type:De,minFilter:be,magFilter:be,generateMipmaps:!1}),z.map.texture.name=Z.name+".shadowMap",z.map.depthTexture=new Si(s.x,s.y,Je),z.map.depthTexture.name=Z.name+".shadowMapDepth",z.map.depthTexture.format=zt,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=de,z.map.depthTexture.magFilter=de}else Z.isPointLight?(z.map=new Wa(s.x),z.map.depthTexture=new Fo(s.x,gt)):(z.map=new We(s.x,s.y),z.map.depthTexture=new Si(s.x,s.y,gt)),z.map.depthTexture.name=Z.name+".shadowMap",z.map.depthTexture.format=zt,this.type===Bi?(z.map.depthTexture.compareFunction=X?wo:Eo,z.map.depthTexture.minFilter=be,z.map.depthTexture.magFilter=be):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=de,z.map.depthTexture.magFilter=de);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);const Q=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();Z.isPointLight!==!0&&z.updateMatrices(Z,M);const j=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:M.layers;for(let M0=0;M0<Q;M0++){const U0=z.getCamera(M0);if(Z.isPointLight){const $=z.camera,p0=z.matrix,v0=Z.distance||$.far;v0!==$.far&&($.far=v0,$.updateProjectionMatrix()),Ui.setFromMatrixPosition(Z.matrixWorld),$.position.copy(Ui),Ts.copy($.position),Ts.add(ml[M0]),$.up.copy(gl[M0]),$.lookAt(Ts),$.updateMatrixWorld(),p0.makeTranslation(-Ui.x,-Ui.y,-Ui.z),ro.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),z._frustum.setFromProjectionMatrix(ro,$.coordinateSystem,$.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,M0),n.clear();else{M0===0&&(n.setRenderTarget(z.map),n.clear());const $=z.getViewport(M0);r.set(a.x*$.x,a.y*$.y,a.x*$.z,a.y*$.w),O.viewport(r)}i=z.getFrustum(M0),T(g,M,U0,Z,j,this.type)}z.isPointLightShadow!==!0&&this.type===Fi&&S(z,M),z.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(U,L,D)};function S(E,g){const M=e.update(y);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null?E.mapPass=new We(s.x,s.y,{format:Jt,type:De}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(g,null,M,f,y,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value.set(E.map.width,E.map.height),m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(g,null,M,m,y,null)}function R(E,g,M,U){let L=null;const D=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)L=D;else if(L=M.isPointLight===!0?l:o,n.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const O=L.uuid,V=g.uuid;let P=c[O];P===void 0&&(P={},c[O]=P);let G=P[V];G===void 0&&(G=L.clone(),P[V]=G,g.addEventListener("dispose",w)),L=G}if(L.visible=g.visible,L.wireframe=g.wireframe,U===Fi?L.side=g.shadowSide!==null?g.shadowSide:g.side:L.side=g.shadowSide!==null?g.shadowSide:h[g.side],L.alphaMap=g.alphaMap,L.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,L.map=g.map,L.clipShadows=g.clipShadows,L.clippingPlanes=g.clippingPlanes,L.clipIntersection=g.clipIntersection,L.displacementMap=g.displacementMap,L.displacementScale=g.displacementScale,L.displacementBias=g.displacementBias,L.wireframeLinewidth=g.wireframeLinewidth,L.linewidth=g.linewidth,M.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const O=n.properties.get(L);O.light=M}return L}function T(E,g,M,U,L,D){if(E.visible===!1)return;if(E.layers.test(L)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===Fi)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);const P=e.update(E),G=E.material;if(Array.isArray(G)){const Z=P.groups;for(let z=0,t0=Z.length;z<t0;z++){const X=Z[z],Q=G[X.materialIndex];if(Q&&Q.visible){const j=R(E,Q,U,D);E.onBeforeShadow(n,E,g,M,P,j,X),n.renderBufferDirect(M,null,P,j,E,X),E.onAfterShadow(n,E,g,M,P,j,X)}}}else if(G.visible){const Z=R(E,G,U,D);E.onBeforeShadow(n,E,g,M,P,Z,null),n.renderBufferDirect(M,null,P,Z,E,null),E.onAfterShadow(n,E,g,M,P,Z,null)}}const V=E.children;for(let P=0,G=V.length;P<G;P++)T(V[P],g,M,U,L,D)}function w(E){E.target.removeEventListener("dispose",w);for(const M in c){const U=c[M],L=E.target.uuid;L in U&&(U[L].dispose(),delete U[L])}}}function vl(n,e){function t(){let A=!1;const Y=new ce;let W=null;const o0=new ce(0,0,0,0);return{setMask:function(n0){W!==n0&&!A&&(n.colorMask(n0,n0,n0,n0),W=n0)},setLocked:function(n0){A=n0},setClear:function(n0,a0,b0,k0,i0){i0===!0&&(n0*=k0,a0*=k0,b0*=k0),Y.set(n0,a0,b0,k0),o0.equals(Y)===!1&&(n.clearColor(n0,a0,b0,k0),o0.copy(Y))},reset:function(){A=!1,W=null,o0.set(-1,0,0,0)}}}function i(){let A=!1,Y=!1,W=null,o0=null,n0=null;return{setReversed:function(a0){if(Y!==a0){const b0=e.get("EXT_clip_control");a0?b0.clipControlEXT(b0.LOWER_LEFT_EXT,b0.ZERO_TO_ONE_EXT):b0.clipControlEXT(b0.LOWER_LEFT_EXT,b0.NEGATIVE_ONE_TO_ONE_EXT),Y=a0;const k0=n0;n0=null,this.setClear(k0)}},getReversed:function(){return Y},setTest:function(a0){a0?m0(n.DEPTH_TEST):O0(n.DEPTH_TEST)},setMask:function(a0){W!==a0&&!A&&(n.depthMask(a0),W=a0)},setFunc:function(a0){if(Y&&(a0=W1[a0]),o0!==a0){switch(a0){case Ls:n.depthFunc(n.NEVER);break;case Is:n.depthFunc(n.ALWAYS);break;case Ds:n.depthFunc(n.LESS);break;case Hi:n.depthFunc(n.LEQUAL);break;case Ns:n.depthFunc(n.EQUAL);break;case Us:n.depthFunc(n.GEQUAL);break;case Fs:n.depthFunc(n.GREATER);break;case Os:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}o0=a0}},setLocked:function(a0){A=a0},setClear:function(a0){n0!==a0&&(n0=a0,Y&&(a0=1-a0),n.clearDepth(a0))},reset:function(){A=!1,W=null,o0=null,n0=null,Y=!1}}}function s(){let A=!1,Y=null,W=null,o0=null,n0=null,a0=null,b0=null,k0=null,i0=null;return{setTest:function(E0){A||(E0?m0(n.STENCIL_TEST):O0(n.STENCIL_TEST))},setMask:function(E0){Y!==E0&&!A&&(n.stencilMask(E0),Y=E0)},setFunc:function(E0,B0,f0){(W!==E0||o0!==B0||n0!==f0)&&(n.stencilFunc(E0,B0,f0),W=E0,o0=B0,n0=f0)},setOp:function(E0,B0,f0){(a0!==E0||b0!==B0||k0!==f0)&&(n.stencilOp(E0,B0,f0),a0=E0,b0=B0,k0=f0)},setLocked:function(E0){A=E0},setClear:function(E0){i0!==E0&&(n.clearStencil(E0),i0=E0)},reset:function(){A=!1,Y=null,W=null,o0=null,n0=null,a0=null,b0=null,k0=null,i0=null}}}const a=new t,r=new i,o=new s;let l={};const c=new WeakMap;let d={},h={},f={},m=new WeakMap,_=[],y=null,p=!1,u=null,S=null,R=null,T=null,w=null,E=null,g=null,M=new I0(0,0,0),U=0,L=!1,D=null,O=null,V=null,P=null,G=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,t0=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(t0=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=t0>=1):X.indexOf("OpenGL ES")!==-1&&(t0=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=t0>=2);let Q=null,j={};const M0=n.getParameter(n.SCISSOR_BOX),U0=n.getParameter(n.VIEWPORT),$=new ce().fromArray(M0),p0=new ce().fromArray(U0);function v0(A,Y,W,o0){const n0=new Uint8Array(4),a0=n.createTexture();n.bindTexture(A,a0),n.texParameteri(A,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(A,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let b0=0;b0<W;b0++)A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY?n.texImage3D(Y,0,n.RGBA,1,1,o0,0,n.RGBA,n.UNSIGNED_BYTE,n0):n.texImage2D(Y+b0,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,n0);return a0}const w0={};w0[n.TEXTURE_2D]=v0(n.TEXTURE_2D,n.TEXTURE_2D,1),w0[n.TEXTURE_CUBE_MAP]=v0(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),w0[n.TEXTURE_2D_ARRAY]=v0(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),w0[n.TEXTURE_3D]=v0(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),m0(n.DEPTH_TEST),r.setFunc(Hi),ke(!1),oe(or),m0(n.CULL_FACE),Ee(Yt);function m0(A){d[A]!==!0&&(n.enable(A),d[A]=!0)}function O0(A){d[A]!==!1&&(n.disable(A),d[A]=!1)}function ue(A,Y){return f[A]!==Y?(n.bindFramebuffer(A,Y),f[A]=Y,A===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Y),A===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Y),!0):!1}function P0(A,Y){let W=_,o0=!1;if(A){W=m.get(Y),W===void 0&&(W=[],m.set(Y,W));const n0=A.textures;if(W.length!==n0.length||W[0]!==n.COLOR_ATTACHMENT0){for(let a0=0,b0=n0.length;a0<b0;a0++)W[a0]=n.COLOR_ATTACHMENT0+a0;W.length=n0.length,o0=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,o0=!0);o0&&n.drawBuffers(W)}function j0(A){return y!==A?(n.useProgram(A),y=A,!0):!1}const te={[fi]:n.FUNC_ADD,[u1]:n.FUNC_SUBTRACT,[f1]:n.FUNC_REVERSE_SUBTRACT};te[p1]=n.MIN,te[m1]=n.MAX;const G0={[g1]:n.ZERO,[_1]:n.ONE,[v1]:n.SRC_COLOR,[go]:n.SRC_ALPHA,[b1]:n.SRC_ALPHA_SATURATE,[y1]:n.DST_COLOR,[S1]:n.DST_ALPHA,[x1]:n.ONE_MINUS_SRC_COLOR,[_o]:n.ONE_MINUS_SRC_ALPHA,[T1]:n.ONE_MINUS_DST_COLOR,[M1]:n.ONE_MINUS_DST_ALPHA,[E1]:n.CONSTANT_COLOR,[w1]:n.ONE_MINUS_CONSTANT_COLOR,[A1]:n.CONSTANT_ALPHA,[R1]:n.ONE_MINUS_CONSTANT_ALPHA};function Ee(A,Y,W,o0,n0,a0,b0,k0,i0,E0){if(A===Yt){p===!0&&(O0(n.BLEND),p=!1);return}if(p===!1&&(m0(n.BLEND),p=!0),A!==d1){if(A!==u||E0!==L){if((S!==fi||w!==fi)&&(n.blendEquation(n.FUNC_ADD),S=fi,w=fi),E0)switch(A){case ki:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zi:n.blendFunc(n.ONE,n.ONE);break;case lr:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cr:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Z0("WebGLState: Invalid blending: ",A);break}else switch(A){case ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case lr:Z0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cr:Z0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Z0("WebGLState: Invalid blending: ",A);break}R=null,T=null,E=null,g=null,M.set(0,0,0),U=0,u=A,L=E0}return}n0=n0||Y,a0=a0||W,b0=b0||o0,(Y!==S||n0!==w)&&(n.blendEquationSeparate(te[Y],te[n0]),S=Y,w=n0),(W!==R||o0!==T||a0!==E||b0!==g)&&(n.blendFuncSeparate(G0[W],G0[o0],G0[a0],G0[b0]),R=W,T=o0,E=a0,g=b0),(k0.equals(M)===!1||i0!==U)&&(n.blendColor(k0.r,k0.g,k0.b,i0),M.copy(k0),U=i0),u=A,L=!1}function me(A,Y){A.side===Ye?O0(n.CULL_FACE):m0(n.CULL_FACE);let W=A.side===Ve;Y&&(W=!W),ke(W),A.blending===ki&&A.transparent===!1?Ee(Yt):Ee(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),r.setFunc(A.depthFunc),r.setTest(A.depthTest),r.setMask(A.depthWrite),a.setMask(A.colorWrite);const o0=A.stencilWrite;o.setTest(o0),o0&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Se(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?m0(n.SAMPLE_ALPHA_TO_COVERAGE):O0(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(A){D!==A&&(A?n.frontFace(n.CW):n.frontFace(n.CCW),D=A)}function oe(A){A!==l1?(m0(n.CULL_FACE),A!==O&&(A===or?n.cullFace(n.BACK):A===c1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):O0(n.CULL_FACE),O=A}function ht(A){A!==V&&(z&&n.lineWidth(A),V=A)}function Se(A,Y,W){A?(m0(n.POLYGON_OFFSET_FILL),(P!==Y||G!==W)&&(P=Y,G=W,r.getReversed()&&(Y=-Y,W=-W),n.polygonOffset(Y,W))):O0(n.POLYGON_OFFSET_FILL)}function Qe(A){A?m0(n.SCISSOR_TEST):O0(n.SCISSOR_TEST)}function je(A){A===void 0&&(A=n.TEXTURE0+Z-1),Q!==A&&(n.activeTexture(A),Q=A)}function et(A,Y,W){W===void 0&&(Q===null?W=n.TEXTURE0+Z-1:W=Q);let o0=j[W];o0===void 0&&(o0={type:void 0,texture:void 0},j[W]=o0),(o0.type!==A||o0.texture!==Y)&&(Q!==W&&(n.activeTexture(W),Q=W),n.bindTexture(A,Y||w0[A]),o0.type=A,o0.texture=Y)}function I(){const A=j[Q];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function tt(){try{n.compressedTexImage2D(...arguments)}catch(A){Z0("WebGLState:",A)}}function se(){try{n.compressedTexImage3D(...arguments)}catch(A){Z0("WebGLState:",A)}}function ae(){try{n.texSubImage2D(...arguments)}catch(A){Z0("WebGLState:",A)}}function u0(){try{n.texSubImage3D(...arguments)}catch(A){Z0("WebGLState:",A)}}function ge(){try{n.compressedTexSubImage2D(...arguments)}catch(A){Z0("WebGLState:",A)}}function A0(){try{n.compressedTexSubImage3D(...arguments)}catch(A){Z0("WebGLState:",A)}}function D0(){try{n.texStorage2D(...arguments)}catch(A){Z0("WebGLState:",A)}}function b(){try{n.texStorage3D(...arguments)}catch(A){Z0("WebGLState:",A)}}function v(){try{n.texImage2D(...arguments)}catch(A){Z0("WebGLState:",A)}}function B(){try{n.texImage3D(...arguments)}catch(A){Z0("WebGLState:",A)}}function e0(A){return h[A]!==void 0?h[A]:n.getParameter(A)}function J(A,Y){h[A]!==Y&&(n.pixelStorei(A,Y),h[A]=Y)}function s0(A){$.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),$.copy(A))}function c0(A){p0.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),p0.copy(A))}function q(A,Y){let W=c.get(Y);W===void 0&&(W=new WeakMap,c.set(Y,W));let o0=W.get(A);o0===void 0&&(o0=n.getUniformBlockIndex(Y,A.name),n.uniformBlockBinding(Y,o0,o0),W.set(A,o0))}function K(A,Y,W){const n0=c.get(Y).get(A);l[n0]!==W&&(n.bindBufferBase(n.UNIFORM_BUFFER,n0,W),l[n0]=W)}function r0(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},h={},Q=null,j={},f={},l={},m=new WeakMap,_=[],y=null,p=!1,u=null,S=null,R=null,T=null,w=null,E=null,g=null,M=new I0(0,0,0),U=0,L=!1,D=null,O=null,V=null,P=null,G=null,$.set(0,0,n.canvas.width,n.canvas.height),p0.set(0,0,n.canvas.width,n.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:m0,disable:O0,bindFramebuffer:ue,drawBuffers:P0,useProgram:j0,setBlending:Ee,setMaterial:me,setFlipSided:ke,setCullFace:oe,setLineWidth:ht,setPolygonOffset:Se,setScissorTest:Qe,activeTexture:je,bindTexture:et,unbindTexture:I,compressedTexImage2D:tt,compressedTexImage3D:se,texImage2D:v,texImage3D:B,pixelStorei:J,getParameter:e0,updateUBOMapping:q,uniformBlockBinding:K,texStorage2D:D0,texStorage3D:b,texSubImage2D:ae,texSubImage3D:u0,compressedTexSubImage2D:ge,compressedTexSubImage3D:A0,scissor:s0,viewport:c0,reset:r0}}function xl(n,e,t,i,s,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new C0,d=new WeakMap,h=new Set;let f;const m=new WeakMap,_=new Set,y=new FinalizationRegistry(b=>_.delete(b));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(b,v){return p?new OffscreenCanvas(b,v):Fn("canvas")}function S(b,v,B){let e0=1;const J=D0(b);if((J.width>B||J.height>B)&&(e0=B/Math.max(J.width,J.height)),e0<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const s0=Math.floor(e0*J.width),c0=Math.floor(e0*J.height);f===void 0&&(f=u(s0,c0));const q=v?u(s0,c0):f;return q.width=s0,q.height=c0,q.getContext("2d").drawImage(b,0,0,s0,c0),L0("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+s0+"x"+c0+")."),q}else return"data"in b&&L0("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function R(b){return b.generateMipmaps}function T(b){n.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(b,v,B,e0,J,s0=!1){if(b!==null){if(n[b]!==void 0)return n[b];L0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let c0;e0&&(c0=e.get("EXT_texture_norm16"),c0||L0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=v;if(v===n.RED&&(B===n.FLOAT&&(q=n.R32F),B===n.HALF_FLOAT&&(q=n.R16F),B===n.UNSIGNED_BYTE&&(q=n.R8),B===n.UNSIGNED_SHORT&&c0&&(q=c0.R16_EXT),B===n.SHORT&&c0&&(q=c0.R16_SNORM_EXT)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.R8UI),B===n.UNSIGNED_SHORT&&(q=n.R16UI),B===n.UNSIGNED_INT&&(q=n.R32UI),B===n.BYTE&&(q=n.R8I),B===n.SHORT&&(q=n.R16I),B===n.INT&&(q=n.R32I)),v===n.RG&&(B===n.FLOAT&&(q=n.RG32F),B===n.HALF_FLOAT&&(q=n.RG16F),B===n.UNSIGNED_BYTE&&(q=n.RG8),B===n.UNSIGNED_SHORT&&c0&&(q=c0.RG16_EXT),B===n.SHORT&&c0&&(q=c0.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RG8UI),B===n.UNSIGNED_SHORT&&(q=n.RG16UI),B===n.UNSIGNED_INT&&(q=n.RG32UI),B===n.BYTE&&(q=n.RG8I),B===n.SHORT&&(q=n.RG16I),B===n.INT&&(q=n.RG32I)),v===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RGB8UI),B===n.UNSIGNED_SHORT&&(q=n.RGB16UI),B===n.UNSIGNED_INT&&(q=n.RGB32UI),B===n.BYTE&&(q=n.RGB8I),B===n.SHORT&&(q=n.RGB16I),B===n.INT&&(q=n.RGB32I)),v===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),B===n.UNSIGNED_INT&&(q=n.RGBA32UI),B===n.BYTE&&(q=n.RGBA8I),B===n.SHORT&&(q=n.RGBA16I),B===n.INT&&(q=n.RGBA32I)),v===n.RGB&&(B===n.UNSIGNED_SHORT&&c0&&(q=c0.RGB16_EXT),B===n.SHORT&&c0&&(q=c0.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),v===n.RGBA){const K=s0?Un:X0.getTransfer(J);B===n.FLOAT&&(q=n.RGBA32F),B===n.HALF_FLOAT&&(q=n.RGBA16F),B===n.UNSIGNED_BYTE&&(q=K===J0?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&c0&&(q=c0.RGBA16_EXT),B===n.SHORT&&c0&&(q=c0.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function g(b,v){let B;return b?v===null||v===gt||v===xi?B=n.DEPTH24_STENCIL8:v===Je?B=n.DEPTH32F_STENCIL8:v===Vi&&(B=n.DEPTH24_STENCIL8,L0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===gt||v===xi?B=n.DEPTH_COMPONENT24:v===Je?B=n.DEPTH_COMPONENT32F:v===Vi&&(B=n.DEPTH_COMPONENT16),B}function M(b,v){return R(b)===!0||b.isFramebufferTexture&&b.minFilter!==de&&b.minFilter!==be?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function U(b){const v=new WeakRef(b);i.get(b).__ref=v,_.add(v),y.register(b,v,v)}function L(b){const v=i.get(b).__ref;v!==void 0&&(_.delete(v),y.unregister(v))}function D(b){V(b.target)}function O(b){P(b.target)}function V(b){b.removeEventListener("dispose",D),L(b),Z(b),b.isVideoTexture&&d.delete(b),b.isHTMLTexture&&h.delete(b)}function P(b){b.removeEventListener("dispose",O),L(b),t0(b)}function G(){for(const b of _){const v=b.deref();v!==void 0&&(v.isRenderTarget===!0?P(v):V(v))}_.clear(),h.clear()}function Z(b){const v=i.get(b);if(v.__webglInit===void 0)return;const B=b.source,e0=m.get(B);if(e0){const J=e0[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&z(b),Object.keys(e0).length===0&&m.delete(B)}i.remove(b)}function z(b){const v=i.get(b);n.deleteTexture(v.__webglTexture);const B=b.source,e0=m.get(B);delete e0[v.__cacheKey],r.memory.textures--}function t0(b){const v=i.get(b);v.__depthDisposeCallback&&v.__depthDisposeCallback();const B=b.depthTexture;if(B&&B.renderTarget===b&&V(B),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let s0=0;s0<v.__webglFramebuffer[J].length;s0++)n.deleteFramebuffer(v.__webglFramebuffer[J][s0]);else n.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)n.deleteFramebuffer(v.__webglFramebuffer[J]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const e0=b.textures;for(let J=0,s0=e0.length;J<s0;J++){const c0=i.get(e0[J]);c0.__webglTexture&&(n.deleteTexture(c0.__webglTexture),r.memory.textures--),i.remove(e0[J])}i.remove(b)}let X=0;function Q(){X=0}function j(){return X}function M0(b){X=b}function U0(){const b=X;return b>=s.maxTextures&&L0("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,b}function $(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.mipmapsAutoUpdate),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function p0(b,v){const B=i.get(b);if(b.isVideoTexture&&ge(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&B.__version!==b.version){const e0=b.image;if(e0===null)L0("WebGLRenderer: Texture marked for update but no image data found.");else if(e0.complete===!1)L0("WebGLRenderer: Texture marked for update but image is incomplete");else{me(B,b,v);return}}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function v0(b,v){const B=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){me(B,b,v);return}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function w0(b,v){const B=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){me(B,b,v);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function m0(b,v){const B=i.get(b);if(b.version>0&&B.__version!==b.version){ke(B,b,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}const O0={[Bs]:n.REPEAT,[Ae]:n.CLAMP_TO_EDGE,[ks]:n.MIRRORED_REPEAT},ue={[de]:n.NEAREST,[L1]:n.NEAREST_MIPMAP_NEAREST,[Qi]:n.NEAREST_MIPMAP_LINEAR,[be]:n.LINEAR,[Zn]:n.LINEAR_MIPMAP_NEAREST,[Bt]:n.LINEAR_MIPMAP_LINEAR},P0={[U1]:n.NEVER,[Ao]:n.ALWAYS,[F1]:n.LESS,[Eo]:n.LEQUAL,[O1]:n.EQUAL,[wo]:n.GEQUAL,[B1]:n.GREATER,[k1]:n.NOTEQUAL};function j0(b,v){if(v.type===Je&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===be||v.magFilter===Zn||v.magFilter===Qi||v.magFilter===Bt||v.minFilter===be||v.minFilter===Zn||v.minFilter===Qi||v.minFilter===Bt)&&L0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,O0[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,O0[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,O0[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ue[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ue[v.minFilter]),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,P0[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===de||v.minFilter!==Qi&&v.minFilter!==Bt||v.type===Je&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function te(b,v){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",D),U(v));const e0=v.source;let J=m.get(e0);J===void 0&&(J={},m.set(e0,J));const s0=$(v);if(s0!==b.__cacheKey){J[s0]===void 0&&(J[s0]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,B=!0),J[s0].usedTimes++;const c0=J[b.__cacheKey];c0!==void 0&&(J[b.__cacheKey].usedTimes--,c0.usedTimes===0&&z(v)),b.__cacheKey=s0,b.__webglTexture=J[s0].texture}return B}function G0(b,v,B){return Math.floor(Math.floor(b/B)/v)}function Ee(b,v,B,e0){const s0=b.updateRanges;if(s0.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,B,e0,v.data);else{s0.sort((A,Y)=>A.start-Y.start);let c0=0;for(let A=1;A<s0.length;A++){const Y=s0[c0],W=s0[A],o0=Y.start+Y.count,n0=G0(W.start,v.width,4),a0=G0(Y.start,v.width,4);W.start<=o0+1&&n0===a0&&G0(W.start+W.count-1,v.width,4)===n0?Y.count=Math.max(Y.count,W.start+W.count-Y.start):(++c0,s0[c0]=W)}s0.length=c0+1;const q=t.getParameter(n.UNPACK_ROW_LENGTH),K=t.getParameter(n.UNPACK_SKIP_PIXELS),r0=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let A=0,Y=s0.length;A<Y;A++){const W=s0[A],o0=Math.floor(W.start/4),n0=Math.ceil(W.count/4),a0=o0%v.width,b0=Math.floor(o0/v.width),k0=n0,i0=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,a0),t.pixelStorei(n.UNPACK_SKIP_ROWS,b0),t.texSubImage2D(n.TEXTURE_2D,0,a0,b0,k0,i0,B,e0,v.data)}b.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,K),t.pixelStorei(n.UNPACK_SKIP_ROWS,r0)}}function me(b,v,B){let e0=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(e0=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(e0=n.TEXTURE_3D);const J=te(b,v),s0=v.source;t.bindTexture(e0,b.__webglTexture,n.TEXTURE0+B);const c0=i.get(s0);if(s0.version!==c0.__version||J===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const i0=X0.getPrimaries(X0.workingColorSpace),E0=v.colorSpace===Ot?null:X0.getPrimaries(v.colorSpace),B0=v.colorSpace===Ot||i0===E0?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,B0)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let K=S(v.image,!1,s.maxTextureSize);K=A0(v,K);const r0=a.convert(v.format,v.colorSpace),A=a.convert(v.type);let Y=E(v.internalFormat,r0,A,v.normalized,v.colorSpace,v.isVideoTexture);j0(e0,v);let W;const o0=v.mipmaps,n0=v.isVideoTexture!==!0,a0=c0.__version===void 0||J===!0,b0=s0.dataReady,k0=M(v,K);if(v.isDepthTexture)Y=g(v.format===kt,v.type),a0&&(n0?t.texStorage2D(n.TEXTURE_2D,1,Y,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,Y,K.width,K.height,0,r0,A,null));else if(v.isDataTexture)if(o0.length>0){n0&&a0&&t.texStorage2D(n.TEXTURE_2D,k0,Y,o0[0].width,o0[0].height);for(let i0=0,E0=o0.length;i0<E0;i0++)W=o0[i0],n0?b0&&t.texSubImage2D(n.TEXTURE_2D,i0,0,0,W.width,W.height,r0,A,W.data):t.texImage2D(n.TEXTURE_2D,i0,Y,W.width,W.height,0,r0,A,W.data);v.generateMipmaps=!1}else n0?(a0&&t.texStorage2D(n.TEXTURE_2D,k0,Y,K.width,K.height),b0&&Ee(v,K,r0,A)):t.texImage2D(n.TEXTURE_2D,0,Y,K.width,K.height,0,r0,A,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){n0&&a0&&t.texStorage3D(n.TEXTURE_2D_ARRAY,k0,Y,o0[0].width,o0[0].height,K.depth);for(let i0=0,E0=o0.length;i0<E0;i0++)if(W=o0[i0],v.format!==He)if(r0!==null)if(n0){if(b0)if(v.layerUpdates.size>0){const B0=kr(W.width,W.height,v.format,v.type);for(const f0 of v.layerUpdates){const ee=W.data.subarray(f0*B0/W.data.BYTES_PER_ELEMENT,(f0+1)*B0/W.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,i0,0,0,f0,W.width,W.height,1,r0,ee)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,i0,0,0,0,W.width,W.height,K.depth,r0,W.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,i0,Y,W.width,W.height,K.depth,0,W.data,0,0);else L0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else n0?b0&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,i0,0,0,0,W.width,W.height,K.depth,r0,A,W.data):t.texImage3D(n.TEXTURE_2D_ARRAY,i0,Y,W.width,W.height,K.depth,0,r0,A,W.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{n0&&a0&&t.texStorage2D(n.TEXTURE_2D,k0,Y,o0[0].width,o0[0].height);for(let i0=0,E0=o0.length;i0<E0;i0++)W=o0[i0],v.format!==He?r0!==null?n0?b0&&t.compressedTexSubImage2D(n.TEXTURE_2D,i0,0,0,W.width,W.height,r0,W.data):t.compressedTexImage2D(n.TEXTURE_2D,i0,Y,W.width,W.height,0,W.data):L0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n0?b0&&t.texSubImage2D(n.TEXTURE_2D,i0,0,0,W.width,W.height,r0,A,W.data):t.texImage2D(n.TEXTURE_2D,i0,Y,W.width,W.height,0,r0,A,W.data)}else if(v.isDataArrayTexture)if(n0){if(a0&&t.texStorage3D(n.TEXTURE_2D_ARRAY,k0,Y,K.width,K.height,K.depth),b0)if(v.layerUpdates.size>0){const i0=kr(K.width,K.height,v.format,v.type);for(const E0 of v.layerUpdates){const B0=K.data.subarray(E0*i0/K.data.BYTES_PER_ELEMENT,(E0+1)*i0/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,E0,K.width,K.height,1,r0,A,B0)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,r0,A,K.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Y,K.width,K.height,K.depth,0,r0,A,K.data);else if(v.isData3DTexture)n0?(a0&&t.texStorage3D(n.TEXTURE_3D,k0,Y,K.width,K.height,K.depth),b0&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,r0,A,K.data)):t.texImage3D(n.TEXTURE_3D,0,Y,K.width,K.height,K.depth,0,r0,A,K.data);else if(v.isFramebufferTexture){if(a0)if(n0)t.texStorage2D(n.TEXTURE_2D,k0,Y,K.width,K.height);else{let i0=K.width,E0=K.height;for(let B0=0;B0<k0;B0++)t.texImage2D(n.TEXTURE_2D,B0,Y,i0,E0,0,r0,A,null),i0>>=1,E0>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){const i0=n.canvas;if(i0.hasAttribute("layoutsubtree")||i0.setAttribute("layoutsubtree","true"),K.parentNode!==i0){i0.appendChild(K),h.add(v),i0.onpaint=E0=>{const B0=E0.changedElements;for(const f0 of h)B0.includes(f0.image)&&(f0.needsUpdate=!0)},i0.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,K);else{const B0=n.RGBA,f0=n.RGBA,ee=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,B0,f0,ee,K)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(o0.length>0){if(n0&&a0){const i0=D0(o0[0]);t.texStorage2D(n.TEXTURE_2D,k0,Y,i0.width,i0.height)}for(let i0=0,E0=o0.length;i0<E0;i0++)W=o0[i0],n0?b0&&t.texSubImage2D(n.TEXTURE_2D,i0,0,0,r0,A,W):t.texImage2D(n.TEXTURE_2D,i0,Y,r0,A,W);v.generateMipmaps=!1}else if(n0){if(a0){const i0=D0(K);t.texStorage2D(n.TEXTURE_2D,k0,Y,i0.width,i0.height)}b0&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,r0,A,K)}else t.texImage2D(n.TEXTURE_2D,0,Y,r0,A,K);R(v)&&v.mipmapsAutoUpdate===!0&&T(e0),c0.__version=s0.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ke(b,v,B){if(v.image.length!==6)return;const e0=te(b,v),J=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+B);const s0=i.get(J);if(J.version!==s0.__version||e0===!0){t.activeTexture(n.TEXTURE0+B);const c0=X0.getPrimaries(X0.workingColorSpace),q=v.colorSpace===Ot?null:X0.getPrimaries(v.colorSpace),K=v.colorSpace===Ot||c0===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const r0=v.isCompressedTexture||v.image[0].isCompressedTexture,A=v.image[0]&&v.image[0].isDataTexture,Y=[];for(let f0=0;f0<6;f0++)!r0&&!A?Y[f0]=S(v.image[f0],!0,s.maxCubemapSize):Y[f0]=A?v.image[f0].image:v.image[f0],Y[f0]=A0(v,Y[f0]);const W=Y[0],o0=a.convert(v.format,v.colorSpace),n0=a.convert(v.type);let a0=E(v.internalFormat,o0,n0,v.normalized,v.colorSpace);const b0=v.isVideoTexture!==!0,k0=s0.__version===void 0||e0===!0,i0=J.dataReady;let E0=M(v,W);j0(n.TEXTURE_CUBE_MAP,v);let B0;if(v.isDepthTexture){if(a0=g(v.format===kt,v.type),k0)if(b0)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,a0,W.width,W.height);else for(let f0=0;f0<6;f0++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+f0,0,a0,W.width,W.height,0,o0,n0,null)}else if(r0){b0&&k0&&t.texStorage2D(n.TEXTURE_CUBE_MAP,E0,a0,W.width,W.height);for(let f0=0;f0<6;f0++){B0=Y[f0].mipmaps;for(let ee=0;ee<B0.length;ee++){const Me=B0[ee];v.format!==He?o0!==null?b0?i0&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+f0,ee,0,0,Me.width,Me.height,o0,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+f0,ee,a0,Me.width,Me.height,0,Me.data):L0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):b0?i0&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+f0,ee,0,0,Me.width,Me.height,o0,n0,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+f0,ee,a0,Me.width,Me.height,0,o0,n0,Me.data)}}}else{if(B0=v.mipmaps,b0&&k0){B0.length>0&&E0++;const f0=D0(Y[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,E0,a0,f0.width,f0.height)}for(let f0=0;f0<6;f0++)if(A){b0?i0&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+f0,0,0,0,Y[f0].width,Y[f0].height,o0,n0,Y[f0].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+f0,0,a0,Y[f0].width,Y[f0].height,0,o0,n0,Y[f0].data);for(let ee=0;ee<B0.length;ee++){const Rt=B0[ee].image[f0].image;b0?i0&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+f0,ee+1,0,0,Rt.width,Rt.height,o0,n0,Rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+f0,ee+1,a0,Rt.width,Rt.height,0,o0,n0,Rt.data)}}else{b0?i0&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+f0,0,0,0,o0,n0,Y[f0]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+f0,0,a0,o0,n0,Y[f0]);for(let ee=0;ee<B0.length;ee++){const Me=B0[ee];b0?i0&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+f0,ee+1,0,0,o0,n0,Me.image[f0]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+f0,ee+1,a0,o0,n0,Me.image[f0])}}}R(v)&&v.mipmapsAutoUpdate===!0&&T(n.TEXTURE_CUBE_MAP),s0.__version=J.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function oe(b,v,B,e0,J,s0){const c0=a.convert(B.format,B.colorSpace),q=a.convert(B.type),K=E(B.internalFormat,c0,q,B.normalized,B.colorSpace),r0=i.get(v),A=i.get(B);if(A.__renderTarget=v,!r0.__hasExternalTextures){const Y=Math.max(1,v.width>>s0),W=Math.max(1,v.height>>s0);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,s0,K,Y,W,v.depth,0,c0,q,null):t.texImage2D(J,s0,K,Y,W,0,c0,q,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),u0(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,e0,J,A.__webglTexture,0,ae(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,e0,J,A.__webglTexture,s0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(b,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer){const e0=v.depthTexture,J=e0&&e0.isDepthTexture?e0.type:null,s0=g(v.stencilBuffer,J),c0=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;u0(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae(v),s0,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae(v),s0,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,s0,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,c0,n.RENDERBUFFER,b)}else{const e0=v.textures;for(let J=0;J<e0.length;J++){const s0=e0[J],c0=a.convert(s0.format,s0.colorSpace),q=a.convert(s0.type),K=E(s0.internalFormat,c0,q,s0.normalized,s0.colorSpace);u0(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae(v),K,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae(v),K,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,K,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(b,v,B){const e0=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(v.depthTexture);J.__renderTarget=v;const s0=e0?v.depthTexture.image[0]:v.depthTexture.image;(!J.__webglTexture||s0.width!==v.width||s0.height!==v.height)&&(s0.width=v.width,s0.height=v.height,v.depthTexture.needsUpdate=!0),e0?m0(v.depthTexture,0):p0(v.depthTexture,0);const c0=J.__webglTexture,q=ae(v),K=e0?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,r0=v.depthTexture.format===kt?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===zt)u0(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,r0,K,c0,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,r0,K,c0,0);else if(v.depthTexture.format===kt)u0(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,r0,K,c0,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,r0,K,c0,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qe(b){const v=i.get(b),B=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const e0=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),e0){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,e0.removeEventListener("dispose",J)};e0.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=e0}if(b.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let e0=0;e0<6;e0++)Se(v.__webglFramebuffer[e0],b,e0);else b.texture.mipmaps.length>0?Se(v.__webglFramebuffer[0],b,0):Se(v.__webglFramebuffer,b,0);else if(B){v.__webglDepthbuffer=[];for(let e0=0;e0<6;e0++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[e0]),v.__webglDepthbuffer[e0]===void 0)v.__webglDepthbuffer[e0]=n.createRenderbuffer(),ht(v.__webglDepthbuffer[e0],b,!1);else{const J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,s0=v.__webglDepthbuffer[e0];n.bindRenderbuffer(n.RENDERBUFFER,s0),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,s0)}}else if(b.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),ht(v.__webglDepthbuffer,b,!1);else{const J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,s0=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,s0),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,s0)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function je(b,v,B){const e0=i.get(b);v!==void 0&&oe(e0.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Qe(b)}function et(b){const v=b.texture,B=i.get(b),e0=i.get(v);b.addEventListener("dispose",O),U(b);const J=b.textures,s0=b.isWebGLCubeRenderTarget===!0,c0=J.length>1;if(c0||(e0.__webglTexture===void 0&&(e0.__webglTexture=n.createTexture()),e0.__version=v.version,r.memory.textures++),s0){B.__webglFramebuffer=[];for(let q=0;q<6;q++)if(v.mipmaps.length>0){B.__webglFramebuffer[q]=[];for(let K=0;K<v.mipmaps.length;K++)B.__webglFramebuffer[q][K]=n.createFramebuffer()}else B.__webglFramebuffer[q]=n.createFramebuffer()}else{if(v.mipmaps.length>0){B.__webglFramebuffer=[];for(let q=0;q<v.mipmaps.length;q++)B.__webglFramebuffer[q]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(c0)for(let q=0,K=J.length;q<K;q++){const r0=i.get(J[q]);r0.__webglTexture===void 0&&(r0.__webglTexture=n.createTexture(),r.memory.textures++)}if(b.samples>0&&u0(b)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let q=0;q<J.length;q++){const K=J[q];B.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[q]);const r0=a.convert(K.format,K.colorSpace),A=a.convert(K.type),Y=E(K.internalFormat,r0,A,K.normalized,K.colorSpace,b.isXRRenderTarget===!0),W=ae(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,W,Y,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,B.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ht(B.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(s0){t.bindTexture(n.TEXTURE_CUBE_MAP,e0.__webglTexture),j0(n.TEXTURE_CUBE_MAP,v);for(let q=0;q<6;q++)if(v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)oe(B.__webglFramebuffer[q][K],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,K);else oe(B.__webglFramebuffer[q],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);R(v)?T(n.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(c0){for(let q=0,K=J.length;q<K;q++){const r0=J[q],A=i.get(r0);let Y=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Y=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,A.__webglTexture),j0(Y,r0),oe(B.__webglFramebuffer,b,r0,n.COLOR_ATTACHMENT0+q,Y,0),R(r0)&&T(Y)}t.unbindTexture()}else{let q=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(q=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,e0.__webglTexture),j0(q,v),v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)oe(B.__webglFramebuffer[K],b,v,n.COLOR_ATTACHMENT0,q,K);else oe(B.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,q,0);R(v)?T(q):v.mipmaps.length>0&&n.texParameteri(q,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}b.depthBuffer&&Qe(b)}function I(b){const v=b.textures;for(let B=0,e0=v.length;B<e0;B++){const J=v[B];if(R(J)&&J.mipmapsAutoUpdate===!0){const s0=w(b),c0=i.get(J).__webglTexture;t.bindTexture(s0,c0),T(s0),t.unbindTexture()}}}const tt=[];function se(b){if(b.samples>0){if(u0(b)===!1){const v=b.textures,B=b.width,e0=b.height;let J=n.COLOR_BUFFER_BIT;const s0=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,c0=i.get(b),q=v.length>1;if(q)for(let r0=0;r0<v.length;r0++)t.bindFramebuffer(n.FRAMEBUFFER,c0.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+r0,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,c0.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+r0,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,c0.__webglMultisampledFramebuffer),b.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,c0.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,c0.__webglFramebuffer);for(let r0=0;r0<v.length;r0++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,c0.__webglColorRenderbuffer[r0]);const A=i.get(v[r0]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,A,0)}n.blitFramebuffer(0,0,B,e0,0,0,B,e0,J,n.NEAREST),l===!0&&(tt.length=0,tt.push(n.COLOR_ATTACHMENT0+r0),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&tt.push(s0),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let r0=0;r0<v.length;r0++){t.bindFramebuffer(n.FRAMEBUFFER,c0.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+r0,n.RENDERBUFFER,c0.__webglColorRenderbuffer[r0]);const A=i.get(v[r0]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,c0.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+r0,n.TEXTURE_2D,A,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,c0.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){const v=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function ae(b){return Math.min(s.maxSamples,b.samples)}function u0(b){const v=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ge(b){const v=r.render.frame;d.get(b)!==v&&(d.set(b,v),b.update())}function A0(b,v){const B=b.colorSpace,e0=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==Nn&&B!==Ot&&(X0.getTransfer(B)===J0?(e0!==He||J!==Ze)&&L0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Z0("WebGLTextures: Unsupported texture color space:",B)),v}function D0(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=U0,this.resetTextureUnits=Q,this.getTextureUnits=j,this.setTextureUnits=M0,this.setTexture2D=p0,this.setTexture2DArray=v0,this.setTexture3D=w0,this.setTextureCube=m0,this.rebindTextures=je,this.setupRenderTarget=et,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=u0,this.dispose=G}function Sl(n,e){function t(i,s=Ot){let a;const r=X0.getTransfer(s);if(i===Ze)return n.UNSIGNED_BYTE;if(i===La)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ia)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Mo)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===yo)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===xo)return n.BYTE;if(i===So)return n.SHORT;if(i===Vi)return n.UNSIGNED_SHORT;if(i===Pa)return n.INT;if(i===gt)return n.UNSIGNED_INT;if(i===Je)return n.FLOAT;if(i===De)return n.HALF_FLOAT;if(i===To)return n.ALPHA;if(i===bo)return n.RGB;if(i===He)return n.RGBA;if(i===zt)return n.DEPTH_COMPONENT;if(i===kt)return n.DEPTH_STENCIL;if(i===Da)return n.RED;if(i===Na)return n.RED_INTEGER;if(i===Jt)return n.RG;if(i===Ua)return n.RG_INTEGER;if(i===Fa)return n.RGBA_INTEGER;if(i===wn||i===An||i===Rn||i===Cn)if(r===J0)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===wn)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===An)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===wn)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===An)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rn)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cn)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zs||i===Hs||i===Gs||i===Vs)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===zs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ws||i===Xs||i===qs||i===Ks||i===$s||i===In||i===Ys)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ws||i===Xs)return r===J0?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===qs)return r===J0?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ks)return a.COMPRESSED_R11_EAC;if(i===$s)return a.COMPRESSED_SIGNED_R11_EAC;if(i===In)return a.COMPRESSED_RG11_EAC;if(i===Ys)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Zs||i===Js||i===Qs||i===js||i===ea||i===ta||i===ia||i===na||i===sa||i===aa||i===ra||i===oa||i===la||i===ca)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Zs)return r===J0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Js)return r===J0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qs)return r===J0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===js)return r===J0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ea)return r===J0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ta)return r===J0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ia)return r===J0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===na)return r===J0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sa)return r===J0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===aa)return r===J0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ra)return r===J0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oa)return r===J0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===la)return r===J0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ca)return r===J0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ha||i===da||i===ua)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===ha)return r===J0?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===da)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ua)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fa||i===pa||i===Dn||i===ma)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===fa)return a.COMPRESSED_RED_RGTC1_EXT;if(i===pa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dn)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ma)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Ml=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Tl{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Oo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ge({vertexShader:Ml,fragmentShader:yl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new R0(new Ie(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bl extends Qt{constructor(e,t){super();const i=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,_=null;const y=typeof XRWebGLBinding<"u",p=new Tl,u={},S=t.getContextAttributes();let R=null,T=null;const w=[],E=[],g=new C0;let M=null,U=null;const L=new nt;L.viewport=new ce;const D=new nt;D.viewport=new ce;const O=[L,D],V=new N9;let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let p0=w[$];return p0===void 0&&(p0=new as,w[$]=p0),p0.getTargetRaySpace()},this.getControllerGrip=function($){let p0=w[$];return p0===void 0&&(p0=new as,w[$]=p0),p0.getGripSpace()},this.getHand=function($){let p0=w[$];return p0===void 0&&(p0=new as,w[$]=p0),p0.getHandSpace()};function Z($){const p0=E.indexOf($.inputSource);if(p0===-1)return;const v0=w[p0];v0!==void 0&&(v0.update($.inputSource,$.frame,c||r),v0.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",t0);for(let $=0;$<w.length;$++){const p0=E[$];p0!==null&&(E[$]=null,w[$].disconnect(p0))}P=null,G=null,p.reset();for(const $ in u)delete u[$];if(e.setRenderTarget(R),m=null,f=null,h=null,s=null,T=null,U0.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(g.width,g.height,!1),U!==null){const $=U.camera;$.fov=U.fov,$.zoom=U.zoom,$.updateProjectionMatrix(),U=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,i.isPresenting===!0&&L0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&L0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",z),s.addEventListener("inputsourceschange",t0),S.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(g),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let v0=null,w0=null,m0=null;S.depth&&(m0=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,v0=S.stencil?kt:zt,w0=S.stencil?xi:gt);const O0={colorFormat:t.RGBA8,depthFormat:m0,scaleFactor:a};h=this.getBinding(),f=h.createProjectionLayer(O0),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new We(f.textureWidth,f.textureHeight,{format:He,type:Ze,depthTexture:new Si(f.textureWidth,f.textureHeight,w0,void 0,void 0,void 0,void 0,void 0,void 0,v0),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const v0={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(s,t,v0),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new We(m.framebufferWidth,m.framebufferHeight,{format:He,type:Ze,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),U0.setContext(s),U0.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function t0($){for(let p0=0;p0<$.removed.length;p0++){const v0=$.removed[p0],w0=E.indexOf(v0);w0>=0&&(E[w0]=null,w[w0].disconnect(v0))}for(let p0=0;p0<$.added.length;p0++){const v0=$.added[p0];let w0=E.indexOf(v0);if(w0===-1){for(let O0=0;O0<w.length;O0++)if(O0>=E.length){E.push(v0),w0=O0;break}else if(E[O0]===null){E[O0]=v0,w0=O0;break}if(w0===-1)break}const m0=w[w0];m0&&m0.connect(v0)}}function X($,p0){p0===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(p0.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let p0=$.near,v0=$.far;p.texture!==null&&(p.depthNear>0&&(p0=p.depthNear),p.depthFar>0&&(v0=p.depthFar)),V.near=D.near=L.near=p0,V.far=D.far=L.far=v0,(P!==V.near||G!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),P=V.near,G=V.far),V.layers.mask=$.layers.mask|6,L.layers.mask=V.layers.mask&-5,D.layers.mask=V.layers.mask&-3;const w0=$.parent,m0=V.cameras;X(V,w0);for(let O0=0;O0<m0.length;O0++)X(m0[O0],w0);V.projectionMatrix.copy(L.projectionMatrix),V.projectionMatrixInverse.copy(L.projectionMatrixInverse),U===null&&$.isPerspectiveCamera&&(U={camera:$,fov:$.fov,zoom:$.zoom}),Q($,V,w0)};function Q($,p0,v0){v0===null?$.matrix.copy(p0.matrixWorld):($.matrix.copy(v0.matrixWorld),$.matrix.invert(),$.matrix.multiply(p0.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(p0.projectionMatrix),$.projectionMatrixInverse.copy(p0.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=On*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function($){return u[$]};let j=null;function M0($,p0){if(d=p0.getViewerPose(c||r),_=p0,d!==null){const v0=d.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let w0=!1;v0.length!==V.cameras.length&&(V.cameras.length=0,w0=!0);for(let P0=0;P0<v0.length;P0++){const j0=v0[P0];let te=null;if(m!==null)te=m.getViewport(j0);else{const Ee=h.getViewSubImage(f,j0);te=Ee.viewport,P0===0&&(e.setRenderTargetTextures(T,Ee.colorTexture,Ee.depthStencilTexture),e.setRenderTarget(T))}let G0=O[P0];G0===void 0&&(G0=new nt,G0.layers.enable(P0),G0.viewport=new ce,O[P0]=G0),G0.matrix.fromArray(j0.transform.matrix),G0.matrix.decompose(G0.position,G0.quaternion,G0.scale),G0.projectionMatrix.fromArray(j0.projectionMatrix),G0.projectionMatrixInverse.copy(G0.projectionMatrix).invert(),G0.viewport.set(te.x,te.y,te.width,te.height),P0===0&&(V.matrix.copy(G0.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),w0===!0&&V.cameras.push(G0)}const m0=s.enabledFeatures;if(m0&&m0.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=i.getBinding();const P0=h.getDepthInformation(v0[0]);P0&&P0.isValid&&P0.texture&&p.init(P0,s.renderState)}if(m0&&m0.includes("camera-access")&&y){e.state.unbindTexture(),h=i.getBinding();for(let P0=0;P0<v0.length;P0++){const j0=v0[P0].camera;if(j0){let te=u[j0];te||(te=new Oo,u[j0]=te);const G0=h.getCameraImage(j0);te.sourceTexture=G0}}}}for(let v0=0;v0<w.length;v0++){const w0=E[v0],m0=w[v0];w0!==null&&m0!==void 0&&m0.update(w0,p0,c||r)}j&&j($,p0),p0.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:p0}),_=null}const U0=new Vo;U0.setAnimationLoop(M0),this.setAnimationLoop=function($){j=$},this.dispose=function(){}}}const El=new Q0,jo=new N0;jo.set(-1,0,0,0,1,0,0,0,1);function wl(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Bo(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,S,R,T){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?a(p,u):u.isMeshLambertMaterial?(a(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(a(p,u),h(p,u)):u.isMeshPhongMaterial?(a(p,u),d(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(a(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,T)):u.isMeshMatcapMaterial?(a(p,u),_(p,u)):u.isMeshDepthMaterial?a(p,u):u.isMeshDistanceMaterial?(a(p,u),y(p,u)):u.isMeshNormalMaterial?a(p,u):u.isLineBasicMaterial?(r(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,S,R):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ve&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ve&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const S=e.get(u),R=S.envMap,T=S.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(El.makeRotationFromEuler(T)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(jo),p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function r(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,S,R){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*S,p.scale.value=R*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,S){p.ior.value=u.ior,u.diffuseRoughness>0&&(p.diffuseRoughness.value=u.diffuseRoughness,u.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=u.diffuseRoughnessMap,t(u.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ve&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.retroreflectivity>0&&(p.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=u.iridescenceThicknessMaximum,u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function y(p,u){const S=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Al(n,e,t,i){let s={},a={};function r(S,R){const T=R.program;i.uniformBlockBinding(S,T,s[S.id])}function o(S,R){let T=s[S.id];T===void 0&&(_(S),T=l(S),s[S.id]=T,S.addEventListener("dispose",p));const w=R.program;i.updateUBOMapping(S,w);const E=e.render.frame;a[S.id]!==E&&(c(S),a[S.id]=E)}function l(S){const R=n.createBuffer(),T=S.__size,w=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,T,w),n.bindBuffer(n.UNIFORM_BUFFER,null),R}function c(S){const R=s[S.id],T=S.uniforms,w=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let E=0,g=T.length;E<g;E++){const M=T[E];if(Array.isArray(M))for(let U=0,L=M.length;U<L;U++)d(M[U],E,U,w);else d(M,E,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,R,T,w){if(f(S,R,T,w)===!0){const E=S.__offset,g=S.value;if(Array.isArray(g)){let M=0;for(let U=0;U<g.length;U++){const L=g[U],D=y(L,!0);h(L,S.__data,M),M+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else h(g,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,S.__data)}}function h(S,R,T){typeof S=="number"||typeof S=="boolean"?R[T]=S:S.isMatrix3?(R[T]=S.elements[0],R[T+1]=S.elements[1],R[T+2]=S.elements[2],R[T+3]=0,R[T+4]=S.elements[3],R[T+5]=S.elements[4],R[T+6]=S.elements[5],R[T+7]=0,R[T+8]=S.elements[6],R[T+9]=S.elements[7],R[T+10]=S.elements[8],R[T+11]=0):ArrayBuffer.isView(S)?R.set(S.subarray(0,R.length-T),T):S.toArray(R,T)}function f(S,R,T,w){const E=S.value,g=R+"_"+T;if(Array.isArray(E)){w[g]===void 0&&(w[g]=[]);const M=w[g];let U=!1;for(let L=0;L<E.length;L++)m(E[L],M,L)===!0&&(U=!0);return U}return m(E,w,g)}function m(S,R,T){if(R[T]===void 0)return typeof S=="number"||typeof S=="boolean"?R[T]=S:ArrayBuffer.isView(S)?R[T]=S.slice():R[T]=S.clone(),!0;{const w=R[T];if(typeof S=="number"||typeof S=="boolean"){if(w!==S)return R[T]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(w.equals(S)===!1)return w.copy(S),!0}}return!1}function _(S){const R=S.uniforms;let T=0;const w=16;for(let g=0,M=R.length;g<M;g++){const U=Array.isArray(R[g])?R[g]:[R[g]];for(let L=0,D=U.length;L<D;L++){const O=U[L],V=Array.isArray(O.value)?O.value:[O.value],P=Array.isArray(R[g])||Array.isArray(O.value);let G=T;for(let z=0,t0=V.length;z<t0;z++){const X=V[z],Q=y(X,P),j=T%w,M0=j%Q.boundary,U0=j+M0;T+=M0,U0!==0&&w-U0<Q.storage&&(T+=w-U0),z===0&&(G=T),T+=Q.storage}const Z=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new Z((T-G)/Float32Array.BYTES_PER_ELEMENT),O.__offset=G}}const E=T%w;return E>0&&(T+=w-E),S.__size=T,S.__cache={},this}function y(S,R){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=16,T.storage=48):S.isMatrix4?(T.boundary=16,T.storage=64):S.isTexture?L0("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):L0("WebGLRenderer: Unsupported uniform value type.",S),R===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}function p(S){const R=S.target;R.removeEventListener("dispose",p),n.deleteBuffer(s[R.id]),delete s[R.id],delete a[R.id]}function u(){for(const S in s)n.deleteBuffer(s[S]);s={},a={}}return{bind:r,update:o,dispose:u}}const Rl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ut=null;function Cl(){return ut===null&&(ut=new mi(Rl,16,16,Jt,De),ut.name="DFG_LUT",ut.minFilter=be,ut.magFilter=be,ut.wrapS=Ae,ut.wrapT=Ae,ut.generateMipmaps=!1,ut.needsUpdate=!0),ut}class Pl{constructor(e={}){const{canvas:t=G1(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Ze}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=r;const y=m,p=new Set([Fa,Ua,Na]),u=new Set([Ze,gt,Vi,xi,La,Ia]),S=new Uint32Array(4),R=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]};let w=null,E=null;const g=[],M=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Et,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let D=!1,O=null,V=null,P=null,G=null;this._outputColorSpace=Be;let Z=0,z=0,t0=null,X=-1,Q=null;const j=new ce,M0=new ce;let U0=null;const $=new I0(0);let p0=0,v0=t.width,w0=t.height,m0=1,O0=null,ue=null;const P0=new ce(0,0,v0,w0),j0=new ce(0,0,v0,w0);let te=!1;const G0=new Xi,Ee=new za;let me=!1,ke=!1;const oe=new Q0,ht=new N,Se=new ce,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function et(){return t0===null?m0:1}let I=i;function tt(x,C){return t.getContext(x,C)}let se,ae,u0,ge,A0,D0,b,v,B,e0,J,s0,c0,q,K,r0,A,Y,W,o0,n0,a0,b0;try{const x={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ta}`),t.addEventListener("webglcontextlost",E0,!1),t.addEventListener("webglcontextrestored",B0,!1),t.addEventListener("webglcontextcreationerror",f0,!1),I===null){const C="webgl2";if(I=tt(C,x),I===null)throw tt(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}k0()}catch(x){throw t.removeEventListener("webglcontextlost",E0,!1),t.removeEventListener("webglcontextrestored",B0,!1),t.removeEventListener("webglcontextcreationerror",f0,!1),Z0("WebGLRenderer: "+x.message),x}function k0(){se=new D4(I),se.init(),n0=new Sl(I,se),ae=new y4(I,se,e,n0),u0=new vl(I,se),ae.reversedDepthBuffer&&f&&u0.buffers.depth.setReversed(!0),V=I.createFramebuffer(),P=I.createFramebuffer(),G=I.createFramebuffer(),ge=new F4(I),A0=new sl,D0=new xl(I,se,u0,A0,ae,n0,ge),b=new I4(L),v=new B9(I),a0=new S4(I,v),B=new N4(I,v,ge,a0),e0=new B4(I,B,v,a0,ge),Y=new O4(I,ae,D0),K=new T4(A0),J=new nl(L,b,se,ae,a0,K),s0=new wl(L,A0),c0=new rl,q=new ul(se),A=new x4(L,b,u0,e0,_,l),r0=new _l(L,e0,ae),b0=new Al(I,ge,ae,u0),W=new M4(I,se,ge),o0=new U4(I,se,ge),ge.programs=J.programs,L.capabilities=ae,L.extensions=se,L.properties=A0,L.renderLists=c0,L.shadowMap=r0,L.state=u0,L.info=ge}y!==Ze&&(U=new z4(y,t.width,t.height,o,s,a));const i0=new bl(L,I);this.xr=i0,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const x=se.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=se.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return m0},this.setPixelRatio=function(x){x!==void 0&&(m0=x,this.setSize(v0,w0,!1))},this.getSize=function(x){return x.set(v0,w0)},this.setSize=function(x,C,H=!0){if(i0.isPresenting){L0("WebGLRenderer: Can't change size while VR device is presenting.");return}v0=x,w0=C,t.width=Math.floor(x*m0),t.height=Math.floor(C*m0),H===!0&&(t.style.width=x+"px",t.style.height=C+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,x,C)},this.getDrawingBufferSize=function(x){return x.set(v0*m0,w0*m0).floor()},this.setDrawingBufferSize=function(x,C,H){v0=x,w0=C,m0=H,t.width=Math.floor(x*H),t.height=Math.floor(C*H),this.setViewport(0,0,x,C)},this.setEffects=function(x){if(y===Ze){Z0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let C=0;C<x.length;C++)if(x[C].isOutputPass===!0){L0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(j)},this.getViewport=function(x){return x.copy(P0)},this.setViewport=function(x,C,H,F){x.isVector4?P0.set(x.x,x.y,x.z,x.w):P0.set(x,C,H,F),u0.viewport(j.copy(P0).multiplyScalar(et()).round())},this.getScissor=function(x){return x.copy(j0)},this.setScissor=function(x,C,H,F){x.isVector4?j0.set(x.x,x.y,x.z,x.w):j0.set(x,C,H,F),u0.scissor(M0.copy(j0).multiplyScalar(et()).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(x){u0.setScissorTest(te=x)},this.setOpaqueSort=function(x){O0=x},this.setTransparentSort=function(x){ue=x},this.getClearColor=function(x){return x.copy(A.getClearColor())},this.setClearColor=function(){A.setClearColor(...arguments)},this.getClearAlpha=function(){return A.getClearAlpha()},this.setClearAlpha=function(){A.setClearAlpha(...arguments)},this.clear=function(x=!0,C=!0,H=!0){let F=0;if(x){let k=!1;if(t0!==null){const h0=t0.texture.format;k=p.has(h0)}if(k){const h0=t0.texture.type,_0=u.has(h0),l0=A.getClearColor(),g0=A.getClearAlpha(),y0=l0.r,F0=l0.g,V0=l0.b;_0?(S[0]=y0,S[1]=F0,S[2]=V0,S[3]=g0,I.clearBufferuiv(I.COLOR,0,S)):(R[0]=y0,R[1]=F0,R[2]=V0,R[3]=g0,I.clearBufferiv(I.COLOR,0,R))}else F|=I.COLOR_BUFFER_BIT}C&&(F|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(F|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&I.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),O=x},this.dispose=function(){t.removeEventListener("webglcontextlost",E0,!1),t.removeEventListener("webglcontextrestored",B0,!1),t.removeEventListener("webglcontextcreationerror",f0,!1),A.dispose(),c0.dispose(),q.dispose(),D0.dispose(),A0.dispose(),b.dispose(),e0.dispose(),B.dispose(),a0.dispose(),b0.dispose(),J.dispose(),i0.dispose(),i0.removeEventListener("sessionstart",Ja),i0.removeEventListener("sessionend",Qa),Gt.stop()};function E0(x){x.preventDefault(),ur("WebGLRenderer: Context Lost."),D=!0}function B0(){ur("WebGLRenderer: Context Restored."),D=!1;const x=ge.autoReset,C=r0.enabled,H=r0.autoUpdate,F=r0.needsUpdate,k=r0.type;k0(),ge.autoReset=x,r0.enabled=C,r0.autoUpdate=H,r0.needsUpdate=F,r0.type=k}function f0(x){Z0("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ee(x){const C=x.target;C.removeEventListener("dispose",ee),Me(C)}function Me(x){Rt(x),A0.remove(x)}function Rt(x){const C=A0.get(x).programs;C!==void 0&&(C.forEach(function(H){J.releaseProgram(H)}),x.isShaderMaterial&&J.releaseShaderCache(x))}this.renderBufferDirect=function(x,C,H,F,k,h0){C===null&&(C=Qe);const _0=k.isMesh&&k.matrixWorld.determinantAffine()<0,l0=a1(x,C,H,F,k);u0.setMaterial(F,_0);let g0=H.index,y0=1;if(F.wireframe===!0){if(g0=B.getWireframeAttribute(H),g0===void 0)return;y0=2}const F0=H.drawRange,V0=H.attributes.position;let x0=F0.start*y0,W0=(F0.start+F0.count)*y0;h0!==null&&(x0=Math.max(x0,h0.start*y0),W0=Math.min(W0,(h0.start+h0.count)*y0)),g0!==null?(x0=Math.max(x0,0),W0=Math.min(W0,g0.count)):V0!=null&&(x0=Math.max(x0,0),W0=Math.min(W0,V0.count));const fe=W0-x0;if(fe<0||fe===1/0)return;a0.setup(k,F,l0,H,g0);let ne,ie=W;if(g0!==null&&(ne=v.get(g0),ie=o0,ie.setIndex(ne)),k.isMesh)F.wireframe===!0?(u0.setLineWidth(F.wireframeLinewidth*et()),ie.setMode(I.LINES)):ie.setMode(I.TRIANGLES);else if(k.isLine){let Re=F.linewidth;Re===void 0&&(Re=1),u0.setLineWidth(Re*et()),k.isLineSegments?ie.setMode(I.LINES):k.isLineLoop?ie.setMode(I.LINE_LOOP):ie.setMode(I.LINE_STRIP)}else k.isPoints?ie.setMode(I.POINTS):k.isSprite&&ie.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(se.get("WEBGL_multi_draw"))ie.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Re=k._multiDrawStarts,S0=k._multiDrawCounts,Ue=k._multiDrawCount,Y0=g0?v.get(g0).bytesPerElement:1,Vt=A0.get(F).currentProgram.getUniforms();for(let Ce=0;Ce<Ue;Ce++)Vt.setValue(I,"_gl_DrawID",Ce),ie.render(Re[Ce]/Y0,S0[Ce])}else if(k.isInstancedMesh)ie.renderInstances(x0,fe,k.count);else if(H.isInstancedBufferGeometry){const Re=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,S0=Math.min(H.instanceCount,Re);ie.renderInstances(x0,fe,S0)}else ie.render(x0,fe)};function Za(x,C,H,F){O!==null&&x.isNodeMaterial&&O.setObject(F,x),me===!0&&K.setState(x,H,!1),x.transparent===!0&&x.side===Ye&&x.forceSinglePass===!1?(x.side=Ve,x.needsUpdate=!0,Ri(x,C,F),x.side=Zt,x.needsUpdate=!0,Ri(x,C,F),x.side=Ye):Ri(x,C,F)}this.compile=function(x,C,H=null){H===null&&(H=x),O!==null&&O.renderStart(x,C,H),E=q.get(H),E.init(C),M.push(E),H.traverseVisible(function(k){k.isLight&&k.layers.test(C.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),x!==H&&x.traverseVisible(function(k){k.isLight&&k.layers.test(C.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),ke=this.localClippingEnabled,me=K.init(this.clippingPlanes,ke),me===!0&&K.setGlobalState(this.clippingPlanes,C),O!==null&&r0.render(E.state.shadowsArray,H,C);const F=new Set;return x.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const h0=k.material;if(h0)if(Array.isArray(h0))for(let _0=0;_0<h0.length;_0++){const l0=h0[_0];Za(l0,H,C,k),F.add(l0)}else Za(h0,H,C,k),F.add(h0)}),E=M.pop(),O!==null&&O.renderEnd(),F},this.compileAsync=function(x,C,H=null){const F=this.compile(x,C,H);return new Promise(k=>{function h0(){if(F.forEach(function(_0){const g0=A0.get(_0).currentProgram;(g0===void 0||g0.isReady())&&F.delete(_0)}),F.size===0){k(x);return}setTimeout(h0,10)}se.get("KHR_parallel_shader_compile")!==null?h0():setTimeout(h0,10)})};let qn=null;function n1(x){qn&&qn(x)}function Ja(){Gt.stop()}function Qa(){Gt.start()}const Gt=new Vo;Gt.setAnimationLoop(n1),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(x){qn=x,i0.setAnimationLoop(x),x===null?Gt.stop():Gt.start()},i0.addEventListener("sessionstart",Ja),i0.addEventListener("sessionend",Qa),this.render=function(x,C){if(C!==void 0&&C.isCamera!==!0){Z0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(x,C);const H=i0.enabled===!0&&i0.isPresenting===!0,F=U!==null&&(t0===null||H)&&U.begin(L,t0);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),i0.enabled===!0&&i0.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(i0.cameraAutoUpdate===!0&&i0.updateCamera(C),C=i0.getCamera()),x.isScene===!0&&x.onBeforeRender(L,x,C,t0),E=q.get(x,M.length),E.init(C),E.state.textureUnits=D0.getTextureUnits(),M.push(E),oe.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),C.isArrayCamera?Ee.setFromArrayCamera(C):G0.setFromProjectionMatrix(oe,ct,C.reversedDepth),ke=this.localClippingEnabled,me=K.init(this.clippingPlanes,ke),w=c0.get(x,g.length),w.init(),g.push(w),this.info.render.frame++,i0.enabled===!0&&i0.isPresenting===!0){const _0=L.xr.getDepthSensingMesh();_0!==null&&Kn(_0,C,-1/0,L.sortObjects)}Kn(x,C,0,L.sortObjects),w.finish(),O!==null&&O.updateLights(E.state.lightsArray),L.sortObjects===!0&&w.sort(O0,ue),je=i0.enabled===!1||i0.isPresenting===!1||i0.hasDepthSensing()===!1,je&&A.addToRenderList(w,x),this.info.autoReset===!0&&this.info.reset(),me===!0&&K.beginShadows();const k=E.state.shadowsArray;if(r0.render(k,x,C),me===!0&&K.endShadows(),(F&&U.hasRenderPass())===!1){const _0=w.opaque,l0=w.transmissive;if(E.setupLights(),C.isArrayCamera){const g0=C.cameras;if(l0.length>0)for(let y0=0,F0=g0.length;y0<F0;y0++){const V0=g0[y0];er(_0,l0,x,V0)}je&&A.render(x);for(let y0=0,F0=g0.length;y0<F0;y0++){const V0=g0[y0];ja(w,x,V0,V0.viewport)}}else l0.length>0&&er(_0,l0,x,C),je&&A.render(x),ja(w,x,C)}t0!==null&&z===0&&(D0.updateMultisampleRenderTarget(t0),D0.updateRenderTargetMipmap(t0)),F&&U.end(L),x.isScene===!0&&x.onAfterRender(L,x,C),a0.resetDefaultState(),X=-1,Q=null,M.pop(),M.length>0?(E=M[M.length-1],D0.setTextureUnits(E.state.textureUnits),me===!0&&K.setGlobalState(L.clippingPlanes,E.state.camera)):E=null,g.pop(),g.length>0?w=g[g.length-1]:w=null,O!==null&&O.renderEnd()};function Kn(x,C,H,F){if(x.visible===!1)return;if(x.layers.test(C.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(C);else if(x.isLight)E.pushLight(x),x.castShadow&&E.pushShadow(x);else if(x.isSprite){const _0=C.isArrayCamera?Ee:G0;if(!x.frustumCulled||x.intersectsFrustum(_0)){F&&Se.setFromMatrixPosition(x.matrixWorld).applyMatrix4(oe);const l0=e0.update(x),g0=x.material;g0.visible&&w.push(x,l0,g0,H,Se.z,null,C)}}else if(x.isMesh||x.isLine||x.isPoints){const _0=C.isArrayCamera?Ee:G0;if(!x.frustumCulled||x.intersectsFrustum(_0)){const l0=e0.update(x),g0=x.material;if(F&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Se.copy(x.boundingSphere.center)):(l0.boundingSphere===null&&l0.computeBoundingSphere(),Se.copy(l0.boundingSphere.center)),Se.applyMatrix4(x.matrixWorld).applyMatrix4(oe)),Array.isArray(g0)){const y0=l0.groups;for(let F0=0,V0=y0.length;F0<V0;F0++){const x0=y0[F0],W0=g0[x0.materialIndex];W0&&W0.visible&&w.push(x,l0,W0,H,Se.z,x0,C)}}else g0.visible&&w.push(x,l0,g0,H,Se.z,null,C)}}}const h0=x.children;for(let _0=0,l0=h0.length;_0<l0;_0++)Kn(h0[_0],C,H,F)}function ja(x,C,H,F){const{opaque:k,transmissive:h0,transparent:_0}=x;E.setupLightsView(H),me===!0&&K.setGlobalState(L.clippingPlanes,H),F&&u0.viewport(j.copy(F)),k.length>0&&Zi(k,C,H),h0.length>0&&Zi(h0,C,H),_0.length>0&&Zi(_0,C,H),u0.buffers.depth.setTest(!0),u0.buffers.depth.setMask(!0),u0.buffers.color.setMask(!0),u0.setPolygonOffset(!1)}function er(x,C,H,F){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[F.id]===void 0){const x0=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[F.id]=new We(1,1,{generateMipmaps:!0,type:x0?De:Ze,minFilter:Bt,samples:Math.max(4,ae.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:X0.workingColorSpace})}const h0=E.state.transmissionRenderTarget[F.id],_0=F.viewport||j;h0.setSize(_0.z*L.transmissionResolutionScale,_0.w*L.transmissionResolutionScale);const l0=L.getRenderTarget(),g0=L.getActiveCubeFace(),y0=L.getActiveMipmapLevel();L.setRenderTarget(h0),L.getClearColor($),p0=L.getClearAlpha(),p0<1&&L.setClearColor(16777215,.5),L.clear(),je&&A.render(H);const F0=L.toneMapping;L.toneMapping=Et;const V0=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),E.setupLightsView(F),me===!0&&K.setGlobalState(L.clippingPlanes,F),Zi(x,H,F),D0.updateMultisampleRenderTarget(h0),D0.updateRenderTargetMipmap(h0),se.has("WEBGL_multisampled_render_to_texture")===!1){let x0=!1;for(let W0=0,fe=C.length;W0<fe;W0++){const ne=C[W0],{object:ie,geometry:Re,material:S0,group:Ue}=ne;if(S0.side===Ye&&ie.layers.test(F.layers)){const Y0=S0.side;S0.side=Ve,S0.needsUpdate=!0,tr(ie,H,F,Re,S0,Ue),S0.side=Y0,S0.needsUpdate=!0,x0=!0}}x0===!0&&(D0.updateMultisampleRenderTarget(h0),D0.updateRenderTargetMipmap(h0))}L.setRenderTarget(l0,g0,y0),L.setClearColor($,p0),V0!==void 0&&(F.viewport=V0),L.toneMapping=F0}function Zi(x,C,H){const F=C.isScene===!0?C.overrideMaterial:null;for(let k=0,h0=x.length;k<h0;k++){const _0=x[k],{object:l0,geometry:g0,group:y0}=_0;let F0=_0.material;F0.allowOverride===!0&&F!==null&&(F0=F),l0.layers.test(H.layers)&&tr(l0,C,H,g0,F0,y0)}}function tr(x,C,H,F,k,h0){O!==null&&k.isNodeMaterial&&O.setObject(x,k),x.onBeforeRender(L,C,H,F,k,h0),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),k.onBeforeRender(L,C,H,F,x,h0),k.transparent===!0&&k.side===Ye&&k.forceSinglePass===!1?(k.side=Ve,k.needsUpdate=!0,L.renderBufferDirect(H,C,F,k,x,h0),k.side=Zt,k.needsUpdate=!0,L.renderBufferDirect(H,C,F,k,x,h0),k.side=Ye):L.renderBufferDirect(H,C,F,k,x,h0),x.onAfterRender(L,C,H,F,k,h0)}function ir(x){let C=0;for(const H of x)H.texture!==null&&C++;return C}function Ri(x,C,H){C.isScene!==!0&&(C=Qe);const F=A0.get(x),k=E.state.lights,h0=E.state.shadowsArray,_0=k.state.version,l0=J.getParameters(x,k.state,h0,C,H,E.state.lightProbeGridArray),g0=J.getProgramCacheKey(l0);let y0=F.programs;F.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,F.fog=C.fog;const F0=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;F.envMap=b.get(x.envMap||F.environment,F0),F.envMapRotation=F.environment!==null&&x.envMap===null?C.environmentRotation:x.envMapRotation,y0===void 0&&(x.addEventListener("dispose",ee),y0=new Map,F.programs=y0,F.programVariants=new Map);let V0=y0.get(g0);if(V0!==void 0){if(F.currentProgram===V0&&F.lightsStateVersion===_0)return sr(x,l0),V0}else l0.uniforms=J.getUniforms(x),O!==null&&x.isNodeMaterial&&O.build(x,H,l0),x.onBeforeCompile(l0,L),V0=J.acquireProgram(l0,g0),y0.set(g0,V0),F.uniforms=l0.uniforms;const x0=F.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(x0.clippingPlanes=K.uniform),sr(x,l0),F.needsLights=o1(x),F.lightsStateVersion=_0,F.needsLights&&(x0.ambientLightColor.value=k.state.ambient,x0.lightProbe.value=k.state.probe,x0.sunLights.value=k.state.sun,x0.sunLightShadows.value=k.state.sunShadow,x0.directionalLights.value=k.state.directional,x0.directionalLightShadows.value=k.state.directionalShadow,x0.spotLights.value=k.state.spot,x0.spotLightShadows.value=k.state.spotShadow,x0.rectAreaLights.value=k.state.rectArea,x0.ltc_1.value=k.state.rectAreaLTC1,x0.ltc_2.value=k.state.rectAreaLTC2,x0.pointLights.value=k.state.point,x0.pointLightShadows.value=k.state.pointShadow,x0.hemisphereLights.value=k.state.hemi,x0.sunShadowMatrix.value=k.state.sunShadowMatrix,x0.sunShadowCascade.value=k.state.sunShadowCascade,x0.directionalShadowMatrix.value=k.state.directionalShadowMatrix,x0.spotLightMatrix.value=k.state.spotLightMatrix,x0.spotLightMap.value=k.state.spotLightMap,x0.pointShadowMatrix.value=k.state.pointShadowMatrix),F.numLightProbeGrids=ir(E.state.lightProbeGridArray),F.currentProgram=V0,F.uniformsList=null,V0}function s1(x,C,H,F,k){const h0=A0.get(x),_0=h0.currentProgram.id+","+F+","+k;let l0=h0.programVariants.get(_0);return l0===void 0?(l0=Ri(x,C,H),h0.programVariants.set(_0,l0)):(h0.currentProgram=l0,h0.uniformsList=null,h0.outputColorSpace=F,h0.toneMapping=k),l0}function nr(x){if(x.uniformsList===null){const C=x.currentProgram.getUniforms();x.uniformsList=Pn.seqWithValue(C.seq,x.uniforms)}return x.uniformsList}function sr(x,C){const H=A0.get(x);H.outputColorSpace=C.outputColorSpace,H.batching=C.batching,H.batchingColor=C.batchingColor,H.instancing=C.instancing,H.instancingColor=C.instancingColor,H.instancingMorph=C.instancingMorph,H.skinning=C.skinning,H.morphTargets=C.morphTargets,H.morphNormals=C.morphNormals,H.morphColors=C.morphColors,H.morphTargetsCount=C.morphTargetsCount,H.numClippingPlanes=C.numClippingPlanes,H.numIntersection=C.numClipIntersection,H.vertexAlphas=C.vertexAlphas,H.vertexTangents=C.vertexTangents,H.toneMapping=C.toneMapping}function a1(x,C,H,F,k){C.isScene!==!0&&(C=Qe),D0.resetTextureUnits();const h0=C.fog,_0=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?C.environment:null,l0=t0===null?L.outputColorSpace:t0.isXRRenderTarget===!0?t0.texture.colorSpace:X0.workingColorSpace,g0=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,y0=b.get(F.envMap||_0,g0),F0=F.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,V0=!!H.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),x0=!!H.morphAttributes.position,W0=!!H.morphAttributes.normal,fe=!!H.morphAttributes.color;let ne=Et;F.toneMapped&&(t0===null||t0.isXRRenderTarget===!0)&&(ne=L.toneMapping);const ie=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Re=ie!==void 0?ie.length:0,S0=A0.get(F),Ue=E.state.lights;if(me===!0&&(ke===!0||x!==Q)){const le=x===Q&&F.id===X;K.setState(F,x,le)}let Y0=!1,Vt=!1;F.version===S0.__version?S0.needsLights&&S0.lightsStateVersion!==Ue.state.version||k.isBatchedMesh&&S0.batching===!1||!k.isBatchedMesh&&S0.batching===!0||k.isBatchedMesh&&S0.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&S0.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&S0.instancing===!1||!k.isInstancedMesh&&S0.instancing===!0||k.isSkinnedMesh&&S0.skinning===!1||!k.isSkinnedMesh&&S0.skinning===!0||k.isInstancedMesh&&S0.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&S0.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&S0.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&S0.instancingMorph===!1&&k.morphTexture!==null||S0.envMap!==y0||F.fog===!0&&S0.fog!==h0||S0.numClippingPlanes!==void 0&&(S0.numClippingPlanes!==K.numPlanes||S0.numIntersection!==K.numIntersection)||S0.vertexAlphas!==F0||S0.vertexTangents!==V0||S0.morphTargets!==x0||S0.morphNormals!==W0||S0.morphColors!==fe||S0.morphTargetsCount!==Re||S0.numLightProbeGrids!==ir(E.state.lightProbeGridArray)?Y0=!0:(S0.outputColorSpace!==l0||S0.toneMapping!==ne)&&(Vt=!0):(Y0=!0,S0.__version=F.version);let Ce=S0.currentProgram;(Y0===!0||Vt===!0)&&(Ce=Vt===!0?s1(F,C,k,l0,ne):Ri(F,C,k),O&&F.isNodeMaterial&&O.onUpdateProgram(F,Ce,S0));let Ji=!1,Ct=!1,Wt=!1;const K0=Ce.getUniforms(),we=S0.uniforms;if(u0.useProgram(Ce.program)&&(Ji=!0,Ct=!0,Wt=!0),F.id!==X&&(X=F.id,Ct=!0),Ji||Q!==x){u0.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),K0.setValue(I,"projectionMatrix",x.projectionMatrix),K0.setValue(I,"viewMatrix",x.matrixWorldInverse);const ye=K0.map.cameraPosition;ye!==void 0&&ye.setValue(I,ht.setFromMatrixPosition(x.matrixWorld)),ae.logarithmicDepthBuffer&&K0.setValue(I,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&K0.setValue(I,"isOrthographic",x.isOrthographicCamera===!0),Q!==x&&(Q=x,Ct=!0,Wt=!0)}if(S0.needsLights&&(Ue.state.sunShadowMap.length>0&&K0.setValue(I,"sunShadowMap",Ue.state.sunShadowMap,D0),Ue.state.directionalShadowMap.length>0&&K0.setValue(I,"directionalShadowMap",Ue.state.directionalShadowMap,D0),Ue.state.spotShadowMap.length>0&&K0.setValue(I,"spotShadowMap",Ue.state.spotShadowMap,D0),Ue.state.pointShadowMap.length>0&&K0.setValue(I,"pointShadowMap",Ue.state.pointShadowMap,D0)),k.isSkinnedMesh){K0.setOptional(I,k,"bindMatrix"),K0.setOptional(I,k,"bindMatrixInverse");const le=k.skeleton;le&&(le.boneTexture===null&&le.computeBoneTexture(),K0.setValue(I,"boneTexture",le.boneTexture,D0))}k.isBatchedMesh&&(K0.setOptional(I,k,"batchingTexture"),K0.setValue(I,"batchingTexture",k._matricesTexture,D0),K0.setOptional(I,k,"batchingIdTexture"),K0.setValue(I,"batchingIdTexture",k._indirectTexture,D0),K0.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&K0.setValue(I,"batchingColorTexture",k._colorsTexture,D0));const st=H.morphAttributes;if((st.position!==void 0||st.normal!==void 0||st.color!==void 0)&&Y.update(k,H,Ce),(Ct||S0.receiveShadow!==k.receiveShadow)&&(S0.receiveShadow=k.receiveShadow,K0.setValue(I,"receiveShadow",k.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&C.environment!==null&&(we.envMapIntensity.value=C.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=Cl()),Ct){if(K0.setValue(I,"toneMappingExposure",L.toneMappingExposure),S0.needsLights&&r1(we,Wt),h0&&F.fog===!0&&s0.refreshFogUniforms(we,h0),s0.refreshMaterialUniforms(we,F,m0,w0,E.state.transmissionRenderTarget[x.id]),S0.needsLights&&S0.numLightProbeGrids>0){const le=T;let ye=0;for(const _t of E.state.lightProbeGridArray)_t.texture!==null&&(le.textures[ye]=_t.texture,le.min[ye]=_t.boundingBox.min,le.max[ye]=_t.boundingBox.max,le.resolution[ye]=_t.resolution,ye++);for(const _t in le)le[_t].length=ye;we.probesSH.value=le.textures,we.probesMin.value=le.min,we.probesMax.value=le.max,we.probesResolution.value=le.resolution}Pn.upload(I,nr(S0),we,D0)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Pn.upload(I,nr(S0),we,D0),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&K0.setValue(I,"center",k.center),K0.setValue(I,"modelViewMatrix",k.modelViewMatrix),K0.setValue(I,"normalMatrix",k.normalMatrix),K0.setValue(I,"modelMatrix",k.matrixWorld),F.uniformsGroups!==void 0){const le=F.uniformsGroups;for(let ye=0,_t=le.length;ye<_t;ye++){const rr=le[ye];b0.update(rr,Ce),b0.bind(rr,Ce)}}return Ce}function r1(x,C){x.ambientLightColor.needsUpdate=C,x.lightProbe.needsUpdate=C,x.sunLights.needsUpdate=C,x.sunLightShadows.needsUpdate=C,x.directionalLights.needsUpdate=C,x.directionalLightShadows.needsUpdate=C,x.pointLights.needsUpdate=C,x.pointLightShadows.needsUpdate=C,x.spotLights.needsUpdate=C,x.spotLightShadows.needsUpdate=C,x.rectAreaLights.needsUpdate=C,x.hemisphereLights.needsUpdate=C}function o1(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return t0},this.setRenderTargetTextures=function(x,C,H){const F=A0.get(x);F.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),A0.get(x.texture).__webglTexture=C,A0.get(x.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:H,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,C){const H=A0.get(x);H.__webglFramebuffer=C,H.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(x,C=0,H=0){t0=x,Z=C,z=H;let F=null,k=!1,h0=!1;if(x){const l0=A0.get(x);if(l0.__useDefaultFramebuffer!==void 0){u0.bindFramebuffer(I.FRAMEBUFFER,l0.__webglFramebuffer),j.copy(x.viewport),M0.copy(x.scissor),U0=x.scissorTest,u0.viewport(j),u0.scissor(M0),u0.setScissorTest(U0),X=-1;return}else if(l0.__webglFramebuffer===void 0)D0.setupRenderTarget(x);else if(l0.__hasExternalTextures)D0.rebindTextures(x,A0.get(x.texture).__webglTexture,A0.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const F0=x.depthTexture;if(l0.__boundDepthTexture!==F0){if(F0!==null&&A0.has(F0)&&(x.width!==F0.image.width||x.height!==F0.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");D0.setupDepthRenderbuffer(x)}}const g0=x.texture;(g0.isData3DTexture||g0.isDataArrayTexture||g0.isCompressedArrayTexture)&&(h0=!0);const y0=A0.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(y0[C])?F=y0[C][H]:F=y0[C],k=!0):x.samples>0&&D0.useMultisampledRTT(x)===!1?F=A0.get(x).__webglMultisampledFramebuffer:Array.isArray(y0)?F=y0[H]:F=y0,j.copy(x.viewport),M0.copy(x.scissor),U0=x.scissorTest}else j.copy(P0).multiplyScalar(m0).floor(),M0.copy(j0).multiplyScalar(m0).floor(),U0=te;if(H!==0&&(F=V),u0.bindFramebuffer(I.FRAMEBUFFER,F)&&u0.drawBuffers(x,F),u0.viewport(j),u0.scissor(M0),u0.setScissorTest(U0),k){const l0=A0.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+C,l0.__webglTexture,H)}else if(h0){const l0=C;for(let g0=0;g0<x.textures.length;g0++){const y0=A0.get(x.textures[g0]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+g0,y0.__webglTexture,H,l0)}}else if(x!==null&&H!==0){const l0=A0.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,l0.__webglTexture,H)}X=-1};function ar(x){const C=A0.get(x);return(C.__readFormat!==x.format||C.__readType!==x.type)&&(C.__readFormat=x.format,C.__readType=x.type,C.__formatReadable=ae.textureFormatReadable(x.format),C.__typeReadable=ae.textureTypeReadable(x.type)),C}this.readRenderTargetPixels=function(x,C,H,F,k,h0,_0,l0=0){if(!(x&&x.isWebGLRenderTarget)){Z0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let g0=A0.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_0!==void 0&&(g0=g0[_0],Array.isArray(g0)&&(g0=g0[0])),g0){u0.bindFramebuffer(I.FRAMEBUFFER,g0);try{const y0=x.textures[l0],F0=y0.format,V0=y0.type;x.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+l0);const x0=ar(y0);if(x0.__formatReadable===!1){Z0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(x0.__typeReadable===!1){Z0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=x.width-F&&H>=0&&H<=x.height-k&&I.readPixels(C,H,F,k,n0.convert(F0),n0.convert(V0),h0)}finally{const y0=t0!==null?A0.get(t0).__webglFramebuffer:null;u0.bindFramebuffer(I.FRAMEBUFFER,y0)}}},this.readRenderTargetPixelsAsync=async function(x,C,H,F,k,h0,_0,l0=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let g0=A0.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_0!==void 0&&(g0=g0[_0],Array.isArray(g0)&&(g0=g0[0])),g0)if(C>=0&&C<=x.width-F&&H>=0&&H<=x.height-k){u0.bindFramebuffer(I.FRAMEBUFFER,g0);const y0=x.textures[l0],F0=y0.format,V0=y0.type;x.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+l0);const x0=ar(y0);if(x0.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(x0.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const W0=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,W0),I.bufferData(I.PIXEL_PACK_BUFFER,h0.byteLength,I.STREAM_READ),I.readPixels(C,H,F,k,n0.convert(F0),n0.convert(V0),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const fe=t0!==null?A0.get(t0).__webglFramebuffer:null;u0.bindFramebuffer(I.FRAMEBUFFER,fe);const ne=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await V1(I,ne,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,W0),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,h0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(W0),I.deleteSync(ne),h0}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,C=null,H=0){const F=Math.pow(2,-H),k=Math.floor(x.image.width*F),h0=Math.floor(x.image.height*F),_0=C!==null?C.x:0,l0=C!==null?C.y:0;D0.setTexture2D(x,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,_0,l0,k,h0),u0.unbindTexture()},this.copyTextureToTexture=function(x,C,H=null,F=null,k=0,h0=0){let _0,l0,g0,y0,F0,V0,x0,W0,fe;const ne=x.isCompressedTexture?x.mipmaps[h0]:x.image;if(H!==null)_0=H.max.x-H.min.x,l0=H.max.y-H.min.y,g0=H.isBox3?H.max.z-H.min.z:1,y0=H.min.x,F0=H.min.y,V0=H.isBox3?H.min.z:0;else{const K0=Math.pow(2,-k);_0=Math.floor(ne.width*K0),l0=Math.floor(ne.height*K0),x.isDataArrayTexture?g0=ne.depth:x.isData3DTexture?g0=Math.floor(ne.depth*K0):g0=1,y0=0,F0=0,V0=0}F!==null?(x0=F.x,W0=F.y,fe=F.z):(x0=0,W0=0,fe=0);const ie=n0.convert(C.format),Re=n0.convert(C.type);let S0;C.isData3DTexture?(D0.setTexture3D(C,0),S0=I.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(D0.setTexture2DArray(C,0),S0=I.TEXTURE_2D_ARRAY):(D0.setTexture2D(C,0),S0=I.TEXTURE_2D),u0.activeTexture(I.TEXTURE0),u0.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,C.flipY),u0.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),u0.pixelStorei(I.UNPACK_ALIGNMENT,C.unpackAlignment);const Ue=u0.getParameter(I.UNPACK_ROW_LENGTH),Y0=u0.getParameter(I.UNPACK_IMAGE_HEIGHT),Vt=u0.getParameter(I.UNPACK_SKIP_PIXELS),Ce=u0.getParameter(I.UNPACK_SKIP_ROWS),Ji=u0.getParameter(I.UNPACK_SKIP_IMAGES);u0.pixelStorei(I.UNPACK_ROW_LENGTH,ne.width),u0.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ne.height),u0.pixelStorei(I.UNPACK_SKIP_PIXELS,y0),u0.pixelStorei(I.UNPACK_SKIP_ROWS,F0),u0.pixelStorei(I.UNPACK_SKIP_IMAGES,V0);const Ct=x.isDataArrayTexture||x.isData3DTexture,Wt=C.isDataArrayTexture||C.isData3DTexture;if(x.isDepthTexture){const K0=A0.get(x),we=A0.get(C),st=A0.get(K0.__renderTarget),le=A0.get(we.__renderTarget);u0.bindFramebuffer(I.READ_FRAMEBUFFER,st.__webglFramebuffer),u0.bindFramebuffer(I.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ye=0;ye<g0;ye++)Ct&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,A0.get(x).__webglTexture,k,V0+ye),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,A0.get(C).__webglTexture,h0,fe+ye)),I.blitFramebuffer(y0,F0,y0+_0,F0+l0,x0,W0,x0+_0,W0+l0,I.DEPTH_BUFFER_BIT,I.NEAREST);u0.bindFramebuffer(I.READ_FRAMEBUFFER,null),u0.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(k!==0||x.isRenderTargetTexture||A0.has(x)){const K0=A0.get(x),we=A0.get(C);u0.bindFramebuffer(I.READ_FRAMEBUFFER,P),u0.bindFramebuffer(I.DRAW_FRAMEBUFFER,G);for(let st=0;st<g0;st++)Ct?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,K0.__webglTexture,k,V0+st):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,K0.__webglTexture,k),Wt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,we.__webglTexture,h0,fe+st):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,we.__webglTexture,h0),k!==0?I.blitFramebuffer(y0,F0,y0+_0,F0+l0,x0,W0,x0+_0,W0+l0,I.COLOR_BUFFER_BIT,I.NEAREST):Wt?I.copyTexSubImage3D(S0,h0,x0,W0,fe+st,y0,F0,_0,l0):I.copyTexSubImage2D(S0,h0,x0,W0,y0,F0,_0,l0);u0.bindFramebuffer(I.READ_FRAMEBUFFER,null),u0.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Wt?x.isDataTexture||x.isData3DTexture?I.texSubImage3D(S0,h0,x0,W0,fe,_0,l0,g0,ie,Re,ne.data):C.isCompressedArrayTexture?I.compressedTexSubImage3D(S0,h0,x0,W0,fe,_0,l0,g0,ie,ne.data):I.texSubImage3D(S0,h0,x0,W0,fe,_0,l0,g0,ie,Re,ne):x.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,h0,x0,W0,_0,l0,ie,Re,ne.data):x.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,h0,x0,W0,ne.width,ne.height,ie,ne.data):I.texSubImage2D(I.TEXTURE_2D,h0,x0,W0,_0,l0,ie,Re,ne);u0.pixelStorei(I.UNPACK_ROW_LENGTH,Ue),u0.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Y0),u0.pixelStorei(I.UNPACK_SKIP_PIXELS,Vt),u0.pixelStorei(I.UNPACK_SKIP_ROWS,Ce),u0.pixelStorei(I.UNPACK_SKIP_IMAGES,Ji),h0===0&&C.generateMipmaps===!0&&C.mipmapsAutoUpdate===!0&&I.generateMipmap(S0),u0.unbindTexture()},this.initRenderTarget=function(x){A0.get(x).__webglFramebuffer===void 0&&D0.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?D0.setTextureCube(x,0):x.isData3DTexture?D0.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?D0.setTexture2DArray(x,0):D0.setTexture2D(x,0),u0.unbindTexture()},this.resetState=function(){Z=0,z=0,t0=null,u0.reset(),a0.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ct}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=X0._getDrawingBufferColorSpace(e),t.unpackColorSpace=X0._getUnpackColorSpace()}}const Ln={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ai{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ll=new Go(-1,1,1,-1,0,1);class Il extends Xe{constructor(){super(),this.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new he([0,2,0,0,2,0],2))}}const Dl=new Il;class Xa{constructor(e){this._mesh=new R0(Dl,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ll)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Nl extends Ai{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ge?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qi.clone(e.uniforms),this.material=new Ge({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Xa(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class oo extends Ai{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class Ul extends Ai{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Fl{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new C0);this._width=i.width,this._height=i.height,t=new We(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:De}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Nl(Ln),this.copyPass.material.blending=Yt,this.timer=new U9}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,a=this.passes.length;s<a;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),r.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}oo!==void 0&&(r instanceof oo?i=!0:r instanceof Ul&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new C0);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ol extends Ai{constructor(e,t,i=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new I0}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let a,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=s}}const Bl={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new I0(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class yi extends Ai{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new C0(e.x,e.y):new C0(256,256),this.clearColor=new I0(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new We(a,r,{type:De,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const h=new We(a,r,{type:De,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const f=new We(a,r,{type:De,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),a=Math.round(a/2),r=Math.round(r/2)}const o=Bl;this.highPassUniforms=qi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ge({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new C0(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=qi.clone(Ln.uniforms),this.blendMaterial=new Ge({uniforms:this.copyUniforms,vertexShader:Ln.vertexShader,fragmentShader:Ln.fragmentShader,premultipliedAlpha:!0,blending:zi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new I0,this._oldClearAlpha=1,this._basic=new Ft,this._fsQuad=new Xa(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,s),this.renderTargetsVertical[a].setSize(i,s),this.separableBlurMaterials[a].uniforms.invSize.value=new C0(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=yi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=yi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(i*i))/i);const s=[],a=[];for(let r=1;r<e;r+=2){const o=t[r],l=r+1<e?t[r+1]:0,c=o+l;s.push((r*o+(r+1)*l)/c),a.push(c)}return new Ge({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new C0(.5,.5)},direction:{value:new C0(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:a}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ge({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}yi.BlurDirectionX=new C0(1,0);yi.BlurDirectionY=new C0(0,1);const bn={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class kl extends Ai{constructor(){super(),this.isOutputPass=!0,this.uniforms=qi.clone(bn.uniforms),this.material=new ko({name:bn.name,uniforms:this.uniforms,vertexShader:bn.vertexShader,fragmentShader:bn.fragmentShader}),this._fsQuad=new Xa(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},X0.getTransfer(this._outputColorSpace)===J0&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ba?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ea?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===wa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vn?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ra?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ca?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Aa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ti{static init(){const e=[1,0,0,2e-5,1,0,0,503905e-9,1,0,0,.00201562,1,0,0,.00453516,1,0,0,.00806253,1,0,0,.0125978,1,0,0,.018141,1,0,0,.0246924,1,0,0,.0322525,1,0,0,.0408213,1,0,0,.0503999,1,0,0,.0609894,1,0,0,.0725906,1,0,0,.0852058,1,0,0,.0988363,1,0,0,.113484,1,0,0,.129153,1,0,0,.145839,1,0,0,.163548,1,0,0,.182266,1,0,0,.201942,1,0,0,.222314,1,0,0,.241906,1,0,0,.262314,1,0,0,.285754,1,0,0,.310159,1,0,0,.335426,1,0,0,.361341,1,0,0,.387445,1,0,0,.412784,1,0,0,.438197,1,0,0,.466966,1,0,0,.49559,1,0,0,.523448,1,0,0,.549938,1,0,0,.57979,1,0,0,.608746,1,0,0,.636185,1,0,0,.664748,1,0,0,.69313,1,0,0,.71966,1,0,0,.747662,1,0,0,.774023,1,0,0,.799775,1,0,0,.825274,1,0,0,.849156,1,0,0,.873248,1,0,0,.89532,1,0,0,.917565,1,0,0,.937863,1,0,0,.958139,1,0,0,.976563,1,0,0,.994658,1,0,0,1.0112,1,0,0,1.02712,1,0,0,1.04189,1,0,0,1.05568,1,0,0,1.06877,1,0,0,1.08058,1,0,0,1.09194,1,0,0,1.10191,1,0,0,1.11161,1,0,0,1.1199,1,0,0,1.12813,.999547,-448815e-12,.0224417,199902e-10,.999495,-113079e-10,.0224406,503651e-9,.999496,-452317e-10,.0224406,.00201461,.999496,-101772e-9,.0224406,.00453287,.999495,-180928e-9,.0224406,.00805845,.999497,-282702e-9,.0224406,.0125914,.999496,-407096e-9,.0224406,.0181319,.999498,-554114e-9,.0224406,.02468,.999499,-723768e-9,.0224406,.0322363,.999495,-916058e-9,.0224405,.0408009,.999499,-.00113101,.0224408,.050375,.999494,-.00136863,.0224405,.0609586,.999489,-.00162896,.0224401,.0725537,.999489,-.00191201,.0224414,.0851619,.999498,-.00221787,.0224413,.0987867,.999492,-.00254642,.0224409,.113426,.999507,-.00289779,.0224417,.129088,.999494,-.0032716,.0224386,.145767,.999546,-.0036673,.0224424,.163472,.999543,-.00408166,.0224387,.182182,.999499,-.00450056,.0224338,.201843,.999503,-.00483661,.0224203,.222198,.999546,-.00452928,.022315,.241714,.999508,-.00587403,.0224329,.262184,.999509,-.00638806,.0224271,.285609,.999501,-.00691028,.0224166,.309998,.999539,-.00741979,.0223989,.335262,.999454,-.00786282,.0223675,.361154,.999529,-.00811928,.0222828,.387224,.999503,-.00799941,.0221063,.41252,.999561,-.00952753,.0223057,.438006,.999557,-.0099134,.0222065,.466735,.999541,-.0100935,.0220402,.495332,.999562,-.00996821,.0218067,.523197,.999556,-.0105031,.0217096,.550223,.999561,-.0114191,.0217215,.579498,.999588,-.0111818,.0213357,.608416,.999633,-.0107725,.0208689,.635965,.999527,-.0121671,.0210149,.664476,.999508,-.0116005,.020431,.692786,.999568,-.0115604,.0199791,.719709,.999671,-.0121117,.0197415,.74737,.999688,-.0110769,.0188846,.773692,.99962,-.0122368,.0188452,.799534,.999823,-.0110325,.0178001,.825046,.999599,-.0114923,.0174221,.849075,.999619,-.0105923,.0164345,.872999,.999613,-.0105988,.0158227,.895371,.99964,-.00979861,.0148131,.917364,.99977,-.00967238,.0140721,.938002,.999726,-.00869175,.0129543,.957917,.99973,-.00866872,.0122329,.976557,.999773,-.00731956,.0108958,.994459,.999811,-.00756027,.0102715,1.01118,.999862,-.00583732,.00878781,1.02701,.999835,-.00631438,.00827529,1.04186,.999871,-.00450785,.00674583,1.05569,.999867,-.00486079,.00621041,1.06861,.999939,-.00322072,.00478301,1.08064,.999918,-.00318199,.00406395,1.09181,1.00003,-.00193348,.00280682,1.10207,.999928,-.00153729,.00198741,1.11152,.999933,-623666e-9,917714e-9,1.12009,1,-102387e-11,907581e-12,1.12813,.997866,-896716e-12,.0448334,199584e-10,.997987,-225945e-10,.0448389,502891e-9,.997987,-903781e-10,.0448388,.00201156,.997985,-203351e-9,.0448388,.00452602,.997986,-361514e-9,.0448388,.00804629,.997987,-56487e-8,.0448389,.0125724,.997988,-813423e-9,.0448389,.0181045,.997984,-.00110718,.0448387,.0246427,.997985,-.00144616,.0448388,.0321875,.997987,-.00183038,.044839,.0407392,.997983,-.00225987,.0448387,.0502986,.997991,-.00273467,.0448389,.0608667,.997984,-.00325481,.0448384,.0724444,.998002,-.00382043,.044839,.0850348,.997997,-.00443145,.0448396,.0986372,.998007,-.00508796,.0448397,.113255,.998008,-.00578985,.04484,.128891,.998003,-.00653683,.0448384,.145548,.997983,-.00732713,.0448358,.163221,.997985,-.00815454,.0448358,.181899,.998005,-.00898985,.0448286,.201533,.998026,-.00964404,.0447934,.221821,.998055,-.00922677,.044611,.241282,.99804,-.0117361,.0448245,.261791,.998048,-.0127628,.0448159,.285181,.998088,-.0138055,.0447996,.30954,.998058,-.0148206,.0447669,.334751,.998099,-.0156998,.044697,.36061,.998116,-.0161976,.0445122,.386603,.998195,-.015945,.0441711,.411844,.998168,-.0183947,.0444255,.43773,.998184,-.0197913,.0443809,.466009,.998251,-.0201426,.0440689,.494574,.998305,-.0198847,.0435632,.522405,.998273,-.0210577,.043414,.549967,.998254,-.0227901,.0433943,.578655,.998349,-.0223108,.0426529,.60758,.99843,-.0223088,.042,.635524,.998373,-.0241141,.0418987,.663621,.998425,-.0231446,.0408118,.691906,.998504,-.0233684,.0400565,.719339,.998443,-.0241652,.0394634,.74643,.99848,-.0228715,.0380002,.773086,.998569,-.023519,.0372322,.798988,.998619,-.0223108,.0356468,.824249,.998594,-.0223105,.034523,.848808,.998622,-.0213426,.0328887,.87227,.998669,-.0207912,.0314374,.895157,.998705,-.0198416,.0296925,.916769,.998786,-.0189168,.0279634,.937773,.998888,-.0178811,.0261597,.957431,.99906,-.0166845,.0242159,.976495,.999038,-.0155464,.0222638,.994169,.999237,-.0141349,.0201967,1.01112,.999378,-.0129324,.0181744,1.02692,.999433,-.0113192,.0159898,1.04174,.999439,-.0101244,.0140385,1.05559,.999614,-.00837456,.0117826,1.06852,.999722,-.00721769,.00983745,1.08069,.999817,-.00554067,.00769002,1.09176,.99983,-.00426961,.005782,1.10211,.999964,-.00273904,.00374503,1.11152,1.00001,-.00136739,.00187176,1.12031,.999946,393227e-10,-28919e-9,1.12804,.995847,-13435e-10,.0671785,19916e-9,.995464,-338387e-10,.0671527,501622e-9,.99547,-135355e-9,.0671531,.00200649,.995471,-30455e-8,.0671532,.00451461,.99547,-541423e-9,.0671531,.008026,.995471,-84598e-8,.0671531,.0125407,.99547,-.00121823,.0671531,.0180589,.99547,-.00165817,.0671531,.0245806,.995463,-.00216583,.0671526,.0321062,.995468,-.00274127,.0671527,.0406366,.995474,-.00338447,.0671534,.0501717,.995473,-.00409554,.0671533,.0607131,.995478,-.00487451,.0671531,.0722618,.995476,-.00572148,.0671532,.0848191,.995477,-.00663658,.0671539,.0983882,.995498,-.00761986,.0671541,.112972,.995509,-.00867094,.0671542,.128568,.995509,-.00978951,.0671531,.145183,.995503,-.0109725,.0671491,.162808,.995501,-.012211,.0671465,.181441,.99553,-.0134565,.0671371,.201015,.99555,-.014391,.0670831,.221206,.99558,-.014351,.0668883,.240813,.995577,-.0173997,.0671055,.261257,.995602,-.0191111,.0671178,.284467,.995623,-.0206705,.0670946,.308765,.995658,-.022184,.0670472,.333905,.995705,-.0234832,.0669417,.359677,.995719,-.0241933,.0666714,.385554,.995786,-.0243539,.066266,.410951,.995887,-.0271866,.0664367,.437163,.995944,-.0296012,.0664931,.464842,.996004,-.0301045,.0660105,.49332,.996128,-.0298311,.0652694,.521131,.996253,-.0316426,.0650739,.549167,.996244,-.0339043,.0649433,.57737,.996309,-.033329,.0638926,.606073,.996417,-.0338935,.0630849,.634527,.996372,-.0353104,.0625083,.66256,.996542,-.0348942,.0611986,.690516,.996568,-.0351614,.060069,.718317,.996711,-.0354317,.0588522,.74528,.996671,-.0349513,.0571902,.772061,.996865,-.0345622,.0555321,.798089,.996802,-.0342566,.0537816,.823178,.996992,-.0330862,.0516095,.847949,.996944,-.0324666,.0495537,.871431,.997146,-.0309544,.0470302,.894357,.997189,-.0299372,.0446043,.916142,.997471,-.0281389,.0418812,.937193,.997515,-.0268702,.0391823,.957,.997812,-.0247166,.0361338,.975936,.998027,-.0233525,.0333945,.99391,.998233,-.0209839,.0301917,1.01075,.998481,-.0194309,.027271,1.02669,.998859,-.0169728,.0240162,1.04173,.99894,-.0152322,.0210517,1.05551,.999132,-.0127497,.0178632,1.06856,.999369,-.0108282,.014787,1.08054,.999549,-.00845886,.0116185,1.09185,.999805,-.0063937,.00867209,1.10207,.99985,-.00414582,.00566823,1.1117,.999912,-.00207443,.00277562,1.12022,1.00001,870226e-10,-53766e-9,1.12832,.991943,-178672e-11,.0893382,198384e-10,.991952,-450183e-10,.089339,499849e-9,.991956,-180074e-9,.0893394,.0019994,.991955,-405167e-9,.0893393,.00449867,.991953,-720298e-9,.0893391,.00799764,.991955,-.00112548,.0893393,.0124964,.991957,-.0016207,.0893395,.0179951,.991958,-.00220601,.0893396,.0244939,.991947,-.00288137,.0893385,.0319929,.991962,-.00364693,.0893399,.0404933,.991965,-.00450264,.0893399,.049995,.99198,-.00544862,.0893411,.0604995,.99197,-.00648491,.0893397,.0720074,.991976,-.00761164,.089341,.0845207,.99198,-.00882891,.0893405,.0980413,.991982,-.0101367,.0893396,.112571,.992008,-.011535,.0893415,.128115,.992026,-.0130228,.0893414,.144672,.992064,-.0145966,.0893418,.162241,.992041,-.0162421,.0893359,.180801,.992086,-.0178888,.0893214,.200302,.992157,-.0190368,.0892401,.220332,.992181,-.0195584,.0890525,.240144,.992175,-.0227257,.0892153,.260728,.99221,-.0254195,.089304,.283473,.99222,-.0274883,.0892703,.307673,.992317,-.0294905,.0892027,.332729,.992374,-.0311861,.0890577,.358387,.992505,-.0320656,.0886994,.384102,.992568,-.0329715,.0883198,.409767,.992675,-.036006,.0883602,.436145,.992746,-.0392897,.0884591,.463217,.992873,-.0399337,.0878287,.491557,.992934,-.040231,.0870108,.519516,.993091,-.0422013,.0865857,.547741,.993259,-.0443503,.0861937,.575792,.993455,-.0446368,.0851187,.604233,.993497,-.0454299,.0840576,.632925,.993694,-.0463296,.0829671,.660985,.993718,-.0470619,.0817185,.688714,.993973,-.0468838,.0800294,.716743,.994207,-.046705,.0781286,.74377,.994168,-.0469698,.0763337,.77042,.9945,-.0456816,.0738184,.796659,.994356,-.0455518,.0715545,.821868,.994747,-.0439488,.0686085,.846572,.994937,-.0430056,.065869,.870435,.995142,-.0413414,.0626446,.893272,.995451,-.0396521,.05929,.915376,.995445,-.0378453,.0558503,.936196,.995967,-.0355219,.0520949,.956376,.996094,-.0335146,.048377,.975327,.996622,-.030682,.0442575,.993471,.996938,-.0285504,.0404693,1.01052,.997383,-.0253399,.0360903,1.02637,.997714,-.0231651,.0322176,1.04139,.998249,-.0198138,.0278433,1.05542,.998596,-.0174337,.0238759,1.06846,.998946,-.0141349,.0195944,1.08056,.99928,-.0115603,.0156279,1.09181,.999507,-.00839065,.0114607,1.10213,.999697,-.005666,.00763325,1.11169,.999869,-.00269902,.00364946,1.12042,1.00001,623836e-10,-319288e-10,1.12832,.987221,-222675e-11,.111332,197456e-10,.98739,-561116e-10,.111351,497563e-9,.987448,-224453e-9,.111357,.00199031,.987441,-505019e-9,.111357,.0044782,.987442,-897816e-9,.111357,.00796129,.987442,-.00140284,.111357,.0124396,.987444,-.00202012,.111357,.0179132,.987442,-.00274964,.111357,.0243824,.987446,-.00359147,.111357,.0318474,.987435,-.00454562,.111356,.0403086,.987461,-.00561225,.111358,.0497678,.987458,-.00679125,.111358,.0602239,.987443,-.0080828,.111356,.0716792,.987476,-.0094872,.111358,.0841364,.98749,-.0110044,.111361,.097597,.987508,-.0126344,.111362,.112062,.987494,-.0143767,.111357,.127533,.987526,-.0162307,.111359,.144015,.987558,-.0181912,.111361,.161502,.987602,-.0202393,.111355,.179979,.987692,-.022273,.111346,.199386,.987702,-.0235306,.111215,.219183,.987789,-.0247628,.111061,.239202,.987776,-.0280668,.111171,.259957,.987856,-.0316751,.111327,.282198,.987912,-.0342468,.111282,.306294,.988,-.0367205,.111198,.331219,.988055,-.0387766,.110994,.356708,.988241,-.0397722,.110547,.382234,.988399,-.0416076,.110198,.408227,.988539,-.0448192,.110137,.434662,.988661,-.0483793,.110143,.461442,.988967,-.0495895,.109453,.489318,.989073,-.0506797,.108628,.517516,.989274,-.0526953,.108003,.545844,.989528,-.054578,.107255,.573823,.989709,-.0561503,.106294,.601944,.989991,-.056866,.104896,.630855,.990392,-.0572914,.103336,.658925,.990374,-.0586224,.10189,.686661,.990747,-.0584764,.099783,.714548,.991041,-.0582662,.0974309,.74186,.991236,-.0584118,.0951678,.768422,.991585,-.0573055,.0921581,.794817,.991984,-.0564241,.0891167,.820336,.9921,-.0553608,.085805,.84493,.992749,-.0533816,.0820354,.868961,.99288,-.0518661,.0782181,.891931,.993511,-.0492492,.0738935,.914186,.993617,-.0471956,.0696402,.93532,.99411,-.044216,.0649659,.95543,.994595,-.0416654,.0603177,.974685,.994976,-.0384314,.0553493,.992807,.995579,-.0353491,.0503942,1.00996,.996069,-.0319787,.0452123,1.02606,.996718,-.028472,.0400112,1.04114,.997173,-.0250789,.0349456,1.05517,.997818,-.0213326,.029653,1.0683,.998318,-.0178509,.024549,1.0805,.998853,-.0141118,.0194197,1.09177,.999218,-.0105914,.0143869,1.1022,.999594,-.00693474,.00943517,1.11175,.99975,-.00340478,.00464051,1.12056,1.00001,109172e-9,-112821e-9,1.12853,.983383,-266524e-11,.133358,196534e-10,.981942,-671009e-10,.133162,494804e-9,.981946,-268405e-9,.133163,.00197923,.981944,-603912e-9,.133163,.00445326,.981941,-.00107362,.133162,.00791693,.981946,-.00167755,.133163,.0123703,.981944,-.00241569,.133162,.0178135,.981945,-.00328807,.133163,.0242466,.981945,-.00429472,.133162,.03167,.981955,-.00543573,.133164,.0400846,.981951,-.00671105,.133163,.0494901,.981968,-.00812092,.133165,.0598886,.981979,-.00966541,.133166,.0712811,.981996,-.0113446,.133168,.083669,.982014,-.0131585,.133169,.0970533,.982011,-.0151073,.133167,.111438,.982062,-.0171906,.133172,.126826,.9821,-.0194067,.133175,.143215,.982149,-.0217502,.133176,.160609,.982163,-.0241945,.133173,.178981,.982247,-.0265907,.133148,.198249,.982291,-.027916,.132974,.217795,.982396,-.0299663,.132868,.238042,.982456,-.0334544,.132934,.258901,.982499,-.0378636,.133137,.280639,.982617,-.0409274,.133085,.304604,.98274,-.0438523,.132985,.329376,.982944,-.0462288,.132728,.354697,.98308,-.0475995,.132228,.380102,.983391,-.0501901,.131924,.406256,.983514,-.0535899,.131737,.432735,.98373,-.0571858,.131567,.459359,.984056,-.0592353,.130932,.486637,.984234,-.0610488,.130092,.51509,.984748,-.0630758,.12923,.543461,.985073,-.0647398,.128174,.571376,.985195,-.0671941,.127133,.599414,.985734,-.0681345,.125576,.628134,.986241,-.0686089,.123639,.656399,.986356,-.0698511,.121834,.684258,.986894,-.0700931,.119454,.711818,.987382,-.0698321,.116718,.739511,.988109,-.0693975,.113699,.766267,.988363,-.0689584,.110454,.792456,.989112,-.0672353,.106602,.81813,.989241,-.0662034,.10267,.842889,.990333,-.0638938,.0981381,.867204,.990591,-.0618534,.0935388,.89038,.991106,-.0593117,.088553,.912576,.991919,-.0562676,.0832187,.934118,.992111,-.0534085,.0778302,.954254,.992997,-.0495459,.0720453,.973722,.993317,-.0463707,.0663458,.991949,.994133,-.0421245,.0601883,1.00936,.994705,-.0384977,.0542501,1.02559,.995495,-.0340956,.0479862,1.04083,.996206,-.030105,.041887,1.05497,.996971,-.0256095,.0355355,1.06824,.997796,-.0213932,.0293655,1.08056,.998272,-.0169612,.0232926,1.09182,.998857,-.0126756,.0172786,1.10219,.99939,-.00832486,.0113156,1.11192,.999752,-.00410826,.00557892,1.12075,1,150957e-9,-119101e-9,1.12885,.975169,-309397e-11,.154669,195073e-10,.975439,-779608e-10,.154712,491534e-9,.975464,-311847e-9,.154716,.00196617,.975464,-701656e-9,.154716,.00442387,.975462,-.0012474,.154715,.0078647,.975461,-.00194906,.154715,.0122886,.975464,-.00280667,.154715,.0176959,.975468,-.00382025,.154716,.0240867,.975471,-.00498985,.154716,.0314612,.975472,-.00631541,.154717,.0398199,.975486,-.00779719,.154718,.0491639,.975489,-.00943505,.154718,.0594932,.975509,-.0112295,.154721,.0708113,.97554,-.0131802,.154724,.0831176,.975557,-.0152876,.154726,.096415,.975585,-.0175512,.154728,.110705,.975605,-.0199713,.154729,.125992,.975645,-.0225447,.154729,.142272,.975711,-.0252649,.154735,.159549,.975788,-.0280986,.154736,.177805,.975872,-.0308232,.154704,.196911,.975968,-.0324841,.154525,.216324,.976063,-.0351281,.154432,.236628,.976157,-.0388618,.15446,.257539,.976204,-.0437704,.154665,.278975,.976358,-.047514,.154652,.302606,.976571,-.0508638,.154535,.327204,.976725,-.0534995,.154221,.352276,.977013,-.0555547,.153737,.377696,.977294,-.0586728,.153403,.403855,.977602,-.0622715,.15312,.430333,.977932,-.0658166,.152755,.456855,.978241,-.0689877,.152233,.483668,.978602,-.0712805,.15132,.512097,.979234,-.0732775,.150235,.540455,.97977,-.075163,.148978,.568486,.979995,-.0778026,.147755,.596524,.98078,-.0791854,.146019,.624825,.981628,-.0799666,.143906,.653403,.982067,-.0808532,.141561,.681445,.98271,-.0816024,.139025,.708918,.983734,-.0812511,.135764,.736594,.98431,-.0806201,.132152,.763576,.985071,-.0801605,.12846,.789797,.98618,-.0784208,.124084,.815804,.986886,-.0766643,.1193,.840869,.987485,-.0747744,.114236,.864952,.988431,-.0716701,.108654,.888431,.988886,-.0691609,.102994,.910963,.990024,-.0654048,.0967278,.932629,.990401,-.0619765,.090384,.95313,.991093,-.0579296,.0837885,.972587,.992018,-.0536576,.0770171,.991184,.992536,-.0493719,.0701486,1.00863,.993421,-.0444813,.062953,1.02494,.993928,-.040008,.0560455,1.04017,.994994,-.0347982,.04856,1.05463,.995866,-.0301017,.0416152,1.06807,.996916,-.0248225,.0342597,1.08039,.997766,-.0199229,.0271668,1.09177,.998479,-.0147422,.0201387,1.10235,.99921,-.00980173,.0131944,1.11206,.999652,-.0047426,.00640712,1.12104,.999998,891673e-10,-10379e-8,1.12906,.967868,-351885e-11,.175947,193569e-10,.968001,-886733e-10,.175972,487782e-9,.96801,-354697e-9,.175973,.00195115,.968012,-798063e-9,.175974,.00439006,.968011,-.00141879,.175973,.00780461,.968011,-.00221686,.175973,.0121948,.968016,-.00319231,.175974,.0175607,.968019,-.00434515,.175974,.0239027,.968018,-.00567538,.175974,.0312208,.968033,-.00718308,.175977,.0395158,.968049,-.00886836,.175979,.0487885,.968047,-.0107312,.175978,.0590394,.968072,-.0127719,.175981,.0702705,.968108,-.0149905,.175986,.0824836,.968112,-.0173866,.175985,.0956783,.968173,-.0199611,.175993,.109862,.96827,-.0227128,.176008,.125033,.968292,-.025639,.17601,.141193,.968339,-.0287299,.176007,.158336,.968389,-.0319399,.176001,.176441,.968501,-.034941,.175962,.195359,.968646,-.0370812,.175793,.214686,.968789,-.0402329,.175708,.234973,.96886,-.0442601,.1757,.255871,.969013,-.049398,.175876,.277238,.969242,-.0539932,.17594,.300326,.969419,-.0577299,.175781,.324702,.969763,-.0605643,.175432,.349527,.970093,-.0634488,.174992,.374976,.970361,-.0670589,.174611,.401097,.970825,-.0708246,.174226,.427496,.971214,-.0742871,.173684,.453858,.971622,-.0782608,.173186,.480637,.972175,-.0813151,.172288,.508655,.972944,-.0832678,.170979,.536973,.973595,-.0855964,.169573,.565138,.974345,-.0882163,.168152,.593222,.975233,-.0901671,.166314,.621201,.976239,-.0912111,.163931,.649919,.977289,-.0916959,.161106,.678011,.978076,-.0927061,.158272,.705717,.979533,-.0925562,.15475,.733228,.980335,-.0918159,.150638,.760454,.981808,-.0908508,.146201,.786918,.983061,-.0896172,.141386,.812953,.984148,-.0871588,.135837,.838281,.985047,-.0850624,.130135,.862594,.986219,-.0818541,.123882,.88633,.987043,-.0784523,.117126,.908952,.988107,-.0749601,.110341,.930744,.988955,-.0703548,.102885,.951728,.989426,-.0662798,.0954167,.971166,.990421,-.0610834,.0876331,.989984,.991032,-.0562936,.0797785,1.00765,.992041,-.0508154,.0718166,1.02434,.992794,-.0454045,.0637125,1.03976,.993691,-.0398194,.0555338,1.05418,.994778,-.0341482,.0473388,1.06772,.995915,-.028428,.0391016,1.08028,.997109,-.022642,.0309953,1.09185,.998095,-.0168738,.0230288,1.10247,.998985,-.0111274,.0150722,1.11229,.999581,-.00543881,.00740605,1.12131,1.00003,162239e-9,-105549e-9,1.12946,.959505,-393734e-11,.196876,191893e-10,.959599,-992157e-10,.196895,483544e-9,.959641,-396868e-9,.196903,.0019342,.959599,-892948e-9,.196895,.00435193,.959603,-.00158747,.196896,.0077368,.959604,-.00248042,.196896,.0120888,.959605,-.00357184,.196896,.0174082,.959605,-.00486169,.196896,.0236949,.959613,-.00635008,.196897,.0309497,.959619,-.00803696,.196898,.0391725,.959636,-.00992255,.196901,.0483649,.959634,-.0120067,.1969,.0585266,.959675,-.0142898,.196906,.0696609,.959712,-.0167717,.196911,.0817678,.959752,-.0194524,.196918,.0948494,.959807,-.0223321,.196925,.10891,.959828,-.0254091,.196924,.123947,.959906,-.0286815,.196934,.139968,.960005,-.0321371,.196944,.156968,.960071,-.0357114,.196936,.17491,.960237,-.0389064,.196882,.193597,.960367,-.041623,.196731,.21285,.960562,-.0452655,.196654,.233075,.960735,-.0496207,.196643,.253941,.960913,-.0549379,.196774,.275278,.961121,-.0603414,.196893,.297733,.96139,-.0644244,.196717,.321877,.961818,-.067556,.196314,.346476,.962175,-.0712709,.195917,.371907,.96255,-.0752848,.1955,.397916,.963164,-.0792073,.195026,.424229,.963782,-.0828225,.194424,.450637,.964306,-.0873119,.193831,.477288,.964923,-.0911051,.192973,.504716,.966048,-.093251,.19151,.533053,.967024,-.0958983,.190013,.561366,.968038,-.09835,.188253,.589464,.969152,-.100754,.186257,.617433,.970557,-.102239,.183775,.645801,.972104,-.102767,.180645,.674278,.973203,-.103492,.177242,.702004,.975123,-.103793,.17345,.729529,.97641,-.102839,.168886,.756712,.978313,-.101687,.163892,.783801,.980036,-.100314,.158439,.809671,.981339,-.097836,.152211,.835402,.982794,-.0950006,.145679,.860081,.984123,-.0920994,.138949,.883757,.984918,-.0878641,.131283,.90685,.985999,-.083939,.123464,.928786,.987151,-.0791234,.115324,.94983,.987827,-.0739332,.106854,.96962,.988806,-.0688088,.0982691,.98861,.989588,-.0628962,.0893456,1.00667,.990438,-.0573146,.0805392,1.02344,.991506,-.0509433,.0713725,1.03933,.992492,-.0448724,.0623732,1.05378,.993663,-.0383497,.0530838,1.06747,.994956,-.0319593,.0439512,1.08007,.99634,-.025401,.0347803,1.09182,.99761,-.0189687,.0257954,1.1025,.99863,-.0124441,.0169893,1.11247,.99947,-.00614003,.00829498,1.12151,1.00008,216624e-9,-146107e-9,1.12993,.950129,-434955e-11,.217413,190081e-10,.950264,-10957e-8,.217444,47884e-8,.9503,-438299e-9,.217451,.00191543,.950246,-986124e-9,.21744,.00430951,.950246,-.00175311,.21744,.00766137,.950245,-.00273923,.21744,.011971,.950253,-.00394453,.217441,.0172385,.950258,-.00536897,.217442,.0234641,.950267,-.00701262,.217444,.030648,.950277,-.00887551,.217446,.038791,.950284,-.0109576,.217446,.0478931,.950312,-.0132591,.217451,.0579568,.950334,-.01578,.217454,.0689821,.950378,-.0185204,.217462,.0809714,.950417,-.0214803,.217467,.0939265,.950488,-.0246594,.217479,.10785,.950534,-.0280565,.217483,.122743,.950633,-.0316685,.217498,.138611,.950698,-.0354787,.217499,.155442,.950844,-.0394003,.217507,.173208,.950999,-.0426812,.217419,.191605,.951221,-.0461302,.217317,.21084,.951412,-.0502131,.217238,.230945,.951623,-.0549183,.21722,.251745,.951867,-.0604493,.217306,.273001,.952069,-.0665189,.217466,.294874,.952459,-.0709179,.217266,.318732,.952996,-.0746112,.216891,.34318,.953425,-.0789252,.216503,.36849,.953885,-.0833293,.216042,.394373,.954617,-.087371,.215469,.420505,.955429,-.0914054,.214802,.446907,.956068,-.0961671,.214146,.473522,.957094,-.10048,.213286,.50052,.958372,-.103248,.211796,.528715,.959654,-.106033,.21016,.557065,.961305,-.108384,.208149,.585286,.962785,-.111122,.206024,.613334,.964848,-.112981,.203442,.641334,.966498,-.113717,.19996,.669955,.968678,-.114121,.196105,.698094,.970489,-.114524,.191906,.725643,.972903,-.113792,.186963,.752856,.974701,-.112406,.181343,.780013,.976718,-.110685,.175185,.806268,.978905,-.108468,.168535,.832073,.980267,-.105061,.161106,.857149,.981967,-.101675,.153387,.881145,.983063,-.0974492,.145199,.904255,.984432,-.0925815,.136527,.926686,.985734,-.0877983,.127584,.947901,.986228,-.081884,.118125,.968111,.98719,-.0761208,.108594,.98719,.988228,-.0698196,.0989996,1.00559,.989046,-.0632739,.0890074,1.02246,.990242,-.056522,.0790832,1.03841,.991252,-.0495272,.0689182,1.05347,.992542,-.0425373,.0588592,1.06724,.994096,-.0353198,.0486833,1.08009,.995593,-.028235,.0385977,1.09177,.99711,-.0209511,.0286457,1.10274,.998263,-.0139289,.0188497,1.11262,.999254,-.0067359,.009208,1.12191,.999967,141846e-9,-657764e-10,1.13024,.935608,-474692e-11,.236466,187817e-10,.93996,-11971e-8,.237568,473646e-9,.939959,-478845e-9,.237567,.0018946,.939954,-.0010774,.237566,.00426284,.939956,-.00191538,.237566,.00757842,.939954,-.00299277,.237566,.0118413,.93996,-.00430961,.237567,.0170518,.939969,-.00586589,.237569,.02321,.939982,-.00766166,.237572,.0303164,.939987,-.00969686,.237572,.0383711,.939997,-.0119715,.237574,.0473751,.940031,-.0144858,.237581,.0573298,.940073,-.0172399,.237589,.0682366,.94012,-.0202335,.237598,.080097,.940162,-.0234663,.237604,.0929116,.940237,-.0269387,.237615,.106686,.940328,-.0306489,.237632,.121421,.940419,-.0345917,.237645,.137115,.940522,-.0387481,.237654,.153766,.940702,-.0429906,.237661,.17133,.940871,-.0465089,.237561,.189502,.941103,-.050531,.23748,.208616,.941369,-.0550657,.237423,.228595,.941641,-.0601337,.237399,.249287,.941903,-.0658804,.237443,.270467,.942224,-.0722674,.237597,.292024,.942633,-.0771788,.237419,.315272,.943172,-.0815623,.237068,.339579,.943691,-.0863973,.236682,.364717,.944382,-.0911536,.236213,.390435,.945392,-.0952967,.235562,.416425,.946185,-.0998948,.234832,.442772,.947212,-.104796,.234114,.469347,.948778,-.10928,.233222,.496162,.950149,-.113081,.231845,.523978,.951989,-.115893,.230005,.552295,.953921,-.11846,.227862,.580569,.955624,-.12115,.225439,.608698,.958234,-.123373,.222635,.636696,.960593,-.124519,.219093,.665208,.963201,-.124736,.214749,.693557,.965642,-.125012,.210059,.721334,.968765,-.124661,.204935,.748613,.971753,-.122996,.198661,.776224,.973751,-.120998,.191823,.802461,.976709,-.118583,.184359,.828399,.977956,-.115102,.176437,.853693,.979672,-.111077,.167681,.877962,.981816,-.10688,.158872,.901564,.98238,-.101469,.149398,.924057,.983964,-.0960013,.139436,.945751,.984933,-.0899626,.12943,.966272,.985694,-.0832973,.11894,.985741,.986822,-.0767082,.108349,1.00407,.987725,-.0693614,.0976026,1.02154,.98877,-.06211,.086652,1.03757,.990129,-.0544143,.0756182,1.05296,.991337,-.046744,.0645753,1.06683,.992978,-.0387931,.0534683,1.0798,.994676,-.030973,.0424137,1.09181,.99645,-.0230311,.0314035,1.10286,.997967,-.0152065,.0206869,1.11291,.99922,-.00744837,.010155,1.12237,1.00002,240209e-9,-752767e-10,1.13089,.922948,-515351e-11,.255626,186069e-10,.928785,-129623e-9,.257244,468009e-9,.928761,-51849e-8,.257237,.00187202,.928751,-.0011666,.257235,.00421204,.928751,-.00207395,.257234,.0074881,.928754,-.00324055,.257235,.0117002,.92876,-.00466639,.257236,.0168486,.928763,-.00635149,.257237,.0229334,.928774,-.00829584,.257239,.029955,.928791,-.0104995,.257243,.0379139,.928804,-.0129623,.257245,.0468108,.928847,-.0156846,.257255,.0566473,.92889,-.0186661,.257263,.0674246,.928924,-.0219067,.257268,.0791433,.928989,-.0254066,.257282,.0918076,.92909,-.0291651,.257301,.105419,.92918,-.0331801,.257316,.119978,.92929,-.0374469,.257332,.135491,.929453,-.041939,.257357,.151948,.929586,-.0464612,.257347,.169275,.929858,-.0503426,.257269,.187257,.930125,-.0548409,.257199,.206204,.930403,-.0598063,.257149,.22601,.930726,-.0652437,.257122,.246561,.931098,-.0712376,.257153,.267618,.931396,-.0777506,.257237,.288993,.931947,-.0832374,.257124,.311527,.932579,-.0883955,.25683,.335697,.933194,-.0937037,.256444,.360634,.934013,-.0987292,.255939,.386126,.935307,-.103215,.255282,.412018,.936374,-.108234,.254538,.438292,.93776,-.113234,.253728,.464805,.939599,-.118013,.25275,.491464,.941036,-.122661,.251404,.518751,.94337,-.125477,.249435,.547133,.945318,-.128374,.247113,.575456,.947995,-.130996,.244441,.60372,.950818,-.133438,.241352,.63174,.954378,-.135004,.237849,.659971,.957151,-.135313,.233188,.688478,.960743,-.13521,.228001,.716767,.964352,-.135007,.222249,.744349,.967273,-.133523,.21542,.771786,.969767,-.131155,.208039,.798639,.973195,-.128492,.200076,.824774,.975557,-.125094,.191451,.850222,.977692,-.120578,.18184,.874761,.98026,-.115882,.172102,.898497,.981394,-.110372,.161859,.921636,.982386,-.10415,.15108,.943467,.983783,-.0978128,.140407,.964045,.98422,-.0906171,.129058,.98398,.985447,-.0832921,.117614,1.00276,.986682,-.0754412,.10585,1.02047,.987326,-.0673885,.0940943,1.03678,.988707,-.0592565,.0822093,1.05218,.990185,-.050717,.070192,1.06652,.991866,-.0423486,.0582081,1.07965,.993897,-.0336118,.0460985,1.09188,.995841,-.0252178,.0342737,1.10307,.997605,-.0164893,.0224829,1.11324,.999037,-.00817112,.0110647,1.12262,1.00003,291686e-9,-168673e-9,1.13139,.915304,-552675e-11,.275999,183285e-10,.91668,-139285e-9,.276414,461914e-9,.916664,-55713e-8,.276409,.00184763,.916653,-.00125354,.276406,.00415715,.916651,-.00222851,.276405,.00739053,.916655,-.00348205,.276406,.0115478,.916653,-.00501414,.276405,.0166291,.916667,-.00682478,.276409,.0226346,.91668,-.00891398,.276412,.0295648,.91669,-.0112817,.276413,.0374199,.916727,-.013928,.276422,.0462016,.916759,-.0168528,.276429,.0559101,.916793,-.0200558,.276436,.0665466,.916849,-.0235373,.276448,.0781139,.916964,-.0272973,.276474,.0906156,.917047,-.0313344,.276491,.104051,.917152,-.0356465,.276511,.118424,.917286,-.0402271,.276533,.133736,.917469,-.0450408,.276564,.149978,.917686,-.0497872,.276563,.167057,.917953,-.0540937,.276493,.184846,.918228,-.0590709,.276437,.203614,.918572,-.0644277,.276398,.223212,.918918,-.0702326,.276362,.243584,.919356,-.076484,.276383,.264465,.919842,-.0830808,.276434,.285701,.920451,-.0892972,.276407,.307559,.921113,-.095016,.276128,.331501,.921881,-.100771,.275754,.356207,.923027,-.106029,.275254,.381477,.924364,-.111029,.274595,.40722,.925818,-.116345,.273841,.433385,.92746,-.121424,.272913,.459848,.929167,-.12657,.271837,.486493,.931426,-.131581,.270575,.513432,.934001,-.135038,.268512,.541502,.936296,-.138039,.266135,.569658,.939985,-.140687,.263271,.598375,.943516,-.143247,.260058,.626563,.94782,-.145135,.256138,.654711,.951023,-.145733,.251154,.683285,.955338,-.145554,.245562,.711831,.959629,-.145008,.239265,.739573,.963123,-.144003,.232064,.767027,.966742,-.141289,.224036,.794359,.969991,-.138247,.215305,.820361,.973403,-.134786,.206051,.846548,.975317,-.129966,.195914,.871541,.977647,-.12471,.185184,.895313,.980137,-.119086,.174161,.918398,.981031,-.112297,.162792,.940679,.982037,-.105372,.150952,.961991,.983164,-.097821,.138921,.981913,.983757,-.0897245,.126611,1.00109,.985036,-.0815974,.114228,1.01902,.986289,-.0727725,.101389,1.03604,.987329,-.0639323,.0886476,1.05149,.989193,-.0548109,.0756837,1.06619,.990716,-.045687,.0627581,1.07948,.992769,-.0364315,.0498337,1.09172,.99524,-.0271761,.0370305,1.1033,.997154,-.0179609,.0243959,1.11353,.998845,-.00878063,.0119567,1.12319,1.00002,259038e-9,-108146e-9,1.13177,.903945,-591681e-11,.295126,181226e-10,.903668,-148672e-9,.295037,455367e-9,.903677,-594683e-9,.29504,.00182145,.903673,-.00133805,.295039,.00409831,.903666,-.00237872,.295036,.00728584,.903668,-.00371676,.295037,.0113842,.903679,-.00535212,.29504,.0163936,.903684,-.00728479,.295041,.0223141,.903698,-.00951473,.295044,.0291462,.903718,-.0120419,.295049,.0368904,.903754,-.0148664,.295058,.0455477,.903801,-.017988,.29507,.0551194,.903851,-.0214064,.295082,.0656058,.903921,-.0251219,.295097,.0770109,.904002,-.0291337,.295116,.0893354,.904111,-.033441,.29514,.102583,.904246,-.0380415,.295169,.116755,.904408,-.0429258,.295202,.131853,.904637,-.0480468,.295245,.147869,.904821,-.0529208,.295214,.164658,.905163,-.0577748,.295185,.182274,.905469,-.0631763,.295143,.200828,.905851,-.068917,.295112,.2202,.906322,-.0750861,.295104,.240372,.906761,-.0815855,.295086,.261082,.90735,-.0882138,.295095,.282123,.908087,-.095082,.295139,.303563,.908826,-.101488,.29492,.327028,.909832,-.107577,.294577,.351464,.911393,-.113033,.294115,.376497,.912804,-.118629,.293446,.402115,.914081,-.124232,.292581,.428111,.91637,-.129399,.29166,.454442,.91814,-.134892,.290422,.481024,.921179,-.140069,.289194,.507924,.924544,-.144431,.287421,.535557,.927995,-.147498,.284867,.563984,.931556,-.150197,.281722,.5923,.935777,-.152711,.278207,.620832,.940869,-.154836,.274148,.649069,.945994,-.155912,.269057,.677746,.949634,-.155641,.262799,.706293,.955032,-.154809,.256097,.734278,.95917,-.153678,.248618,.761751,.962931,-.151253,.239794,.789032,.966045,-.147625,.230281,.815422,.96971,-.143964,.220382,.841787,.972747,-.139464,.209846,.867446,.975545,-.133459,.198189,.892004,.978381,-.127424,.186362,.915458,.979935,-.120506,.173964,.937948,.980948,-.11282,.161429,.959732,.982234,-.104941,.148557,.980118,.982767,-.0962905,.135508,.999463,.983544,-.0873625,.122338,1.01756,.984965,-.0783447,.108669,1.03492,.986233,-.0684798,.0949911,1.05087,.987796,-.0590867,.0811386,1.0656,.989885,-.0489145,.0673099,1.0794,.991821,-.0391,.0535665,1.09174,.99448,-.029087,.0397529,1.10341,.996769,-.019114,.0261463,1.11383,.998641,-.00947007,.0128731,1.1237,.999978,446316e-9,-169093e-9,1.13253,.888362,-627064e-11,.312578,178215e-10,.889988,-157791e-9,.313148,448451e-9,.889825,-631076e-9,.313092,.00179356,.88984,-.00141994,.313097,.00403554,.889828,-.0025243,.313092,.00717429,.889831,-.00394421,.313093,.0112099,.889831,-.00567962,.313093,.0161425,.889844,-.00773051,.313096,.0219724,.889858,-.0100968,.3131,.0286999,.889882,-.0127786,.313106,.0363256,.889918,-.0157757,.313116,.0448509,.889967,-.0190878,.313129,.0542758,.89003,-.022715,.313145,.0646032,.890108,-.0266566,.313165,.0758339,.890218,-.0309131,.313193,.0879729,.890351,-.0354819,.313226,.101019,.89051,-.0403613,.313263,.114979,.890672,-.0455385,.313294,.129848,.890882,-.0509444,.313333,.145616,.891189,-.0559657,.313324,.162122,.891457,-.0613123,.313281,.179524,.891856,-.0671488,.313281,.197855,.892312,-.0732732,.313268,.216991,.892819,-.0797865,.313263,.236924,.893369,-.0865269,.313247,.257433,.894045,-.0931592,.313205,.278215,.894884,-.100532,.313276,.299467,.895832,-.107716,.313205,.322276,.897043,-.114099,.312873,.34642,.898515,-.119941,.312331,.371187,.900191,-.126044,.311731,.396656,.90188,-.131808,.310859,.422488,.904359,-.137289,.309857,.448744,.906923,-.142991,.308714,.475239,.910634,-.148253,.307465,.501983,.914502,-.153332,.305774,.529254,.919046,-.156646,.303156,.557709,.923194,-.159612,.299928,.586267,.928858,-.162027,.296245,.614925,.934464,-.164203,.291832,.643187,.939824,-.165602,.286565,.671601,.944582,-.165383,.280073,.700213,.949257,-.164439,.272891,.728432,.954389,-.162953,.264771,.756082,.958595,-.161007,.255927,.78369,.962138,-.157243,.245769,.810769,.966979,-.152872,.235127,.836999,.969566,-.148209,.22347,.862684,.972372,-.142211,.211147,.887847,.975916,-.135458,.198606,.911843,.978026,-.128398,.185498,.934795,.979686,-.120313,.17171,.956787,.980748,-.11166,.158159,.978046,.981622,-.103035,.144399,.997693,.982356,-.0930328,.13001,1.01642,.983308,-.0834627,.115778,1.03366,.985037,-.0732249,.101327,1.05014,.986493,-.0628145,.086554,1.06507,.988484,-.0526556,.0720413,1.07907,.991051,-.0415744,.0571151,1.09189,.993523,-.0314275,.0426643,1.10369,.99628,-.0203603,.0279325,1.11423,.998344,-.0102446,.0138182,1.12421,.999997,42612e-8,-193628e-9,1.1333,.871555,-660007e-11,.329176,174749e-10,.875255,-166579e-9,.330571,441051e-9,.875644,-666394e-9,.330718,.00176441,.875159,-.00149903,.330536,.00396899,.87516,-.00266493,.330536,.007056,.875158,-.00416393,.330535,.0110251,.87516,-.00599598,.330535,.0158764,.875163,-.00816108,.330536,.0216101,.875174,-.0106591,.330538,.0282266,.875199,-.0134899,.330545,.0357266,.875257,-.0166538,.330563,.0441117,.875304,-.0201501,.330575,.0533821,.875373,-.0239785,.330595,.0635395,.875464,-.0281389,.330619,.0745872,.875565,-.0326301,.330645,.0865255,.875691,-.0374516,.330676,.0993599,.875897,-.0425993,.330733,.113093,.876091,-.0480576,.330776,.127722,.876353,-.0537216,.330826,.143227,.876649,-.0589807,.330809,.159462,.877034,-.0647865,.330819,.176642,.877443,-.0709789,.330817,.194702,.877956,-.0774782,.330832,.213577,.878499,-.0843175,.330822,.233246,.879144,-.0912714,.330804,.253512,.879982,-.0980824,.330766,.274137,.88097,-.105823,.330864,.295209,.882051,-.113671,.330896,.317226,.883397,-.120303,.330545,.341068,.884987,-.12667,.330068,.365613,.886789,-.133118,.329418,.390807,.889311,-.139024,.328683,.416494,.891995,-.144971,.327729,.442618,.895106,-.150747,.326521,.469131,.899527,-.156283,.325229,.495921,.90504,-.161707,.32378,.523162,.909875,-.165661,.32122,.55092,.91561,-.168755,.317942,.579928,.921225,-.171193,.313983,.608539,.927308,-.17319,.309636,.636854,.933077,-.174819,.304262,.66523,.938766,-.175002,.297563,.693609,.943667,-.173946,.289613,.722157,.949033,-.172221,.281227,.750021,.953765,-.169869,.271545,.777466,.95804,-.166578,.261034,.804853,.962302,-.161761,.249434,.831569,.966544,-.156636,.237484,.857779,.969372,-.150784,.224395,.883051,.972486,-.143672,.210786,.907864,.975853,-.135772,.196556,.931223,.977975,-.127942,.182307,.954061,.979122,-.118347,.167607,.97531,.980719,-.109112,.152739,.995666,.981223,-.0991789,.137932,1.01475,.98216,-.0883553,.122692,1.03253,.983379,-.0780825,.107493,1.04917,.985434,-.0665646,.0917791,1.06464,.987332,-.0557714,.0764949,1.07896,.990004,-.0442805,.060721,1.09199,.992975,-.0331676,.0452284,1.10393,.995811,-.0219547,.0297934,1.11476,.9982,-.0107613,.0146415,1.12484,1.00002,248678e-9,-14555e-8,1.13413,.859519,-693595e-11,.347264,171673e-10,.859843,-17503e-8,.347394,433219e-9,.859656,-700076e-9,.347319,.00173277,.859671,-.00157517,.347325,.00389875,.859669,-.00280028,.347324,.00693112,.85967,-.0043754,.347324,.01083,.859665,-.00630049,.347321,.0155954,.859685,-.0085755,.347328,.0212278,.859694,-.0112003,.347329,.0277273,.859718,-.0141747,.347336,.0350946,.85976,-.0174988,.347348,.0433314,.85982,-.0211722,.347366,.0524384,.859892,-.0251941,.347387,.0624168,.860006,-.0295649,.347422,.0732708,.860122,-.0342825,.347453,.0849999,.860282,-.0393462,.347499,.0976102,.860482,-.0447513,.347554,.111104,.860719,-.0504775,.347614,.125479,.860998,-.0563577,.347666,.140703,.861322,-.0619473,.347662,.156681,.861724,-.0681277,.347684,.173597,.862198,-.0746567,.347709,.191371,.862733,-.0815234,.347727,.209976,.863371,-.0886643,.347744,.229351,.86414,-.0957908,.347734,.24934,.865138,-.102912,.34772,.269797,.866182,-.110924,.3478,.290654,.867436,-.119223,.347911,.312074,.869087,-.126197,.347649,.335438,.870859,-.133145,.347222,.359732,.872997,-.139869,.346645,.38467,.875939,-.146089,.345935,.41019,.879012,-.152334,.345012,.436218,.883353,-.15821,.343924,.462641,.888362,-.164097,.342636,.489449,.895026,-.169528,.341351,.516629,.900753,-.174408,.339115,.544109,.906814,-.17751,.335809,.572857,.912855,-.180101,.331597,.601554,.919438,-.182116,.32698,.630198,.925962,-.183494,.321449,.658404,.931734,-.184159,.314595,.686625,.93762,-.18304,.306462,.71531,.943858,-.181323,.297514,.744272,.948662,-.178683,.287447,.771462,.953299,-.175379,.276166,.798593,.957346,-.170395,.263758,.8256,.962565,-.165042,.251019,.852575,.966075,-.158655,.237011,.878316,.969048,-.151707,.222518,.90329,.972423,-.143271,.207848,.927745,.975833,-.134824,.192463,.950859,.977629,-.125444,.1768,.972947,.978995,-.114949,.161033,.993263,.980533,-.104936,.145523,1.01337,.980745,-.0935577,.129799,1.03128,.981814,-.0822956,.113486,1.04825,.983943,-.0710082,.0972925,1.06405,.986141,-.0587931,.0808138,1.0785,.988878,-.0472755,.0644915,1.09204,.992132,-.0349128,.0478128,1.10413,.9953,-.0232407,.031621,1.11527,.998117,-.0112713,.0154935,1.12551,1.00003,339743e-9,-195763e-9,1.13504,.845441,-729126e-11,.364305,169208e-10,.843588,-183164e-9,.363506,425067e-9,.843412,-73253e-8,.36343,.00169999,.843401,-.00164818,.363426,.00382495,.843399,-.00293008,.363425,.00679993,.843401,-.00457822,.363425,.010625,.843394,-.00659249,.363421,.0153002,.843398,-.00897282,.363421,.0208258,.843415,-.0117191,.363426,.0272024,.843438,-.0148312,.363432,.0344305,.843483,-.018309,.363447,.0425116,.84356,-.0221521,.363472,.0514471,.843646,-.0263597,.363499,.061238,.843743,-.0309315,.363527,.0718873,.84388,-.0358658,.363569,.0833969,.844079,-.0411624,.363631,.0957742,.844279,-.0468128,.363688,.109015,.844549,-.0527923,.363761,.123124,.844858,-.0588204,.363817,.138044,.84522,-.0647573,.36383,.153755,.845669,-.0713181,.363879,.170394,.846155,-.0781697,.363908,.187861,.846789,-.0853913,.363969,.206176,.847502,-.0928086,.363999,.225244,.8484,-.10005,.363997,.244926,.849461,-.107615,.364008,.265188,.850562,-.115814,.364055,.28587,.851962,-.124334,.364179,.306926,.854326,-.131995,.364233,.329605,.856295,-.139338,.363856,.35359,.858857,-.146346,.363347,.37831,.862428,-.152994,.362807,.403722,.866203,-.159463,.361963,.429537,.871629,-.165623,.36112,.456,.877365,-.171649,.359917,.482773,.883744,-.177151,.35848,.509705,.890693,-.182381,.356523,.537215,.897278,-.186076,.3533,.565493,.903958,-.188602,.349095,.594293,.910908,-.190755,.344215,.623165,.918117,-.192063,.338606,.651573,.924644,-.192758,.331544,.679869,.931054,-.192238,.323163,.708668,.937303,-.190035,.313529,.737201,.943387,-.187162,.303152,.764977,.948494,-.183876,.29146,.792683,.952546,-.178901,.277917,.819228,.958077,-.173173,.264753,.846559,.962462,-.16645,.25002,.872962,.966569,-.159452,.234873,.898729,.969108,-.15074,.218752,.923126,.973072,-.141523,.202673,.947278,.975452,-.132075,.186326,.969938,.977784,-.121257,.169396,.991325,.97899,-.110182,.153044,1.01123,.979777,-.0989634,.136485,1.0299,.980865,-.0865894,.119343,1.04727,.982432,-.0746115,.102452,1.06341,.984935,-.0621822,.0852423,1.07834,.987776,-.0495694,.0678546,1.092,.99103,-.0372386,.0506917,1.1043,.99474,-.0244353,.0333316,1.11576,.997768,-.0121448,.0164348,1.12617,1.00003,31774e-8,-169504e-9,1.13598,.825551,-756799e-11,.378425,165099e-10,.82664,-190922e-9,.378923,416504e-9,.826323,-763495e-9,.378779,.0016656,.826359,-.00171789,.378795,.00374768,.82636,-.00305402,.378795,.00666259,.826368,-.00477185,.378798,.0104104,.826364,-.00687131,.378795,.0149912,.826368,-.00935232,.378795,.0204054,.826376,-.0122146,.378797,.0266532,.826399,-.0154581,.378803,.0337355,.82646,-.0190825,.378824,.0416537,.826525,-.0230873,.378846,.0504091,.826614,-.0274719,.378876,.0600032,.82674,-.0322355,.378917,.0704393,.826888,-.0373766,.378964,.0817195,.827078,-.0428936,.379024,.0938492,.827318,-.0487778,.379099,.106828,.82764,-.0549935,.379199,.120659,.827926,-.0611058,.379227,.13526,.828325,-.0675054,.379275,.150713,.828801,-.0743455,.379332,.167034,.8294,-.0815523,.379415,.184209,.830094,-.0890779,.379495,.202203,.8309,-.096736,.379555,.220945,.831943,-.104135,.379577,.240306,.833037,-.112106,.379604,.260317,.834278,-.120554,.379668,.2808,.836192,-.129128,.3799,.301654,.838671,-.137541,.380109,.323502,.840939,-.14523,.379809,.347176,.844575,-.15248,.379593,.371706,.848379,-.159607,.37909,.39688,.853616,-.166267,.378617,.422702,.858921,-.172698,.377746,.448919,.865324,-.178823,.376749,.475661,.872207,-.184542,.375363,.502599,.880018,-.189836,.373657,.529914,.88694,-.194294,.370673,.557683,.894779,-.197022,.36662,.586848,.902242,-.199108,.36138,.615831,.909914,-.200398,.355434,.644478,.917088,-.20094,.348173,.672905,.923888,-.200671,.339482,.701327,.930495,-.198773,.32956,.730101,.937247,-.195394,.318363,.758383,.943108,-.191956,.306323,.786539,.948296,-.187227,.292576,.813637,.953472,-.181165,.278234,.840793,.958485,-.174119,.263054,.867712,.962714,-.166564,.246756,.893635,.966185,-.158181,.229945,.919028,.970146,-.148275,.212633,.943413,.973491,-.138157,.195229,.966627,.975741,-.127574,.178048,.988817,.977238,-.11554,.160312,1.00924,.978411,-.10364,.142857,1.02845,.979811,-.0913122,.125317,1.04648,.98116,-.0782558,.107627,1.06284,.983543,-.0655957,.0895862,1.07798,.986789,-.0520411,.0713756,1.092,.990292,-.0389727,.053228,1.10484,.994187,-.025808,.0351945,1.11642,.997499,-.0126071,.0173198,1.12703,.999999,275604e-9,-148602e-9,1.13674,.81075,-78735e-10,.394456,161829e-10,.808692,-198293e-9,.393453,407564e-9,.80846,-792877e-9,.39334,.00162965,.808595,-.00178416,.393407,.00366711,.808597,-.00317182,.393408,.00651934,.808598,-.00495589,.393408,.0101866,.808591,-.00713627,.393403,.0146689,.808592,-.00971285,.393402,.0199667,.80861,-.0126855,.393407,.0260803,.808633,-.0160538,.393413,.0330107,.80868,-.0198175,.393429,.0407589,.808748,-.0239758,.393453,.0493264,.808854,-.0285286,.39349,.0587161,.808992,-.0334748,.39354,.0689304,.809141,-.0388116,.393588,.0799707,.809352,-.0445375,.39366,.0918432,.809608,-.0506427,.393742,.104549,.809915,-.0570708,.393834,.118085,.810253,-.0633526,.393885,.132377,.810687,-.0700966,.393953,.147537,.811233,-.0772274,.394047,.163543,.811865,-.0847629,.394148,.180394,.812648,-.0925663,.394265,.198051,.813583,-.100416,.394363,.216443,.814683,-.108119,.394402,.235502,.815948,-.11644,.394489,.255242,.817278,-.125036,.394542,.275441,.819605,-.133655,.39486,.296094,.822256,-.142682,.395248,.317309,.825349,-.150756,.395241,.340516,.829605,-.158392,.395285,.364819,.83391,-.165801,.394922,.389736,.839808,-.172677,.394691,.415409,.845708,-.179448,.394006,.441546,.853025,-.185746,.393279,.46832,.859666,-.191684,.391655,.495302,.86789,-.197146,.390068,.52262,.875845,-.201904,.38727,.550336,.882634,-.205023,.382688,.578825,.891076,-.207098,.377543,.608103,.900589,-.208474,.371752,.63723,.90791,-.209068,.364016,.665769,.915971,-.208655,.355593,.694428,.923455,-.20729,.345439,.723224,.931514,-.203821,.334099,.751925,.937885,-.19986,.321069,.780249,.943136,-.194993,.306571,.8077,.948818,-.189132,.291556,.83497,.954433,-.181617,.275745,.86188,.959078,-.173595,.258695,.888562,.962705,-.164855,.240825,.914008,.966753,-.155129,.22268,.939145,.970704,-.144241,.204542,.963393,.973367,-.133188,.185927,.985983,.975984,-.121146,.167743,1.00704,.976994,-.108366,.149218,1.02715,.978485,-.0956746,.13131,1.0455,.980074,-.0820733,.112513,1.06221,.98225,-.0684061,.0938323,1.07782,.98553,-.0549503,.0749508,1.09199,.989529,-.0407857,.055848,1.10508,.993536,-.0271978,.0368581,1.11684,.997247,-.0132716,.0181845,1.12789,1,431817e-9,-198809e-9,1.13792,.785886,-812608e-11,.405036,157669e-10,.790388,-205278e-9,.407355,398297e-9,.790145,-820824e-9,.407231,.00159263,.790135,-.00184681,.407226,.00358336,.790119,-.00328316,.407218,.00637039,.790126,-.00512988,.40722,.0099539,.79013,-.00738684,.407221,.0143339,.790135,-.0100538,.407221,.0195107,.790134,-.0131306,.407217,.0254848,.79016,-.0166169,.407224,.0322572,.790197,-.020512,.407236,.0398284,.790273,-.0248157,.407263,.0482014,.790381,-.029527,.407304,.0573777,.790521,-.0346446,.407355,.0673602,.790704,-.0401665,.40742,.0781522,.790925,-.0460896,.407499,.0897582,.791195,-.0524017,.407589,.10218,.791522,-.0590121,.407691,.11541,.791878,-.0654876,.407748,.12939,.792361,-.0725207,.407849,.144237,.792942,-.0799844,.407963,.159924,.79362,-.0877896,.408087,.176425,.794529,-.0958451,.408259,.193733,.795521,-.103827,.408362,.211756,.796778,-.111937,.408482,.230524,.798027,-.120521,.408547,.249967,.799813,-.129242,.408721,.269926,.802387,-.138048,.409148,.290338,.805279,-.147301,.409641,.311193,.809251,-.155895,.410154,.333611,.813733,-.163942,.410297,.357615,.819081,-.171666,.410373,.382339,.825427,-.178905,.410348,.407828,.83172,-.185812,.409486,.434034,.83877,-.192318,.408776,.460493,.845817,-.198249,.407176,.487346,.854664,-.204034,.405719,.514832,.863495,-.208908,.403282,.542401,.871883,-.212765,.399293,.570683,.88065,-.214911,.393803,.599947,.89004,-.216214,.387536,.62932,.898476,-.216745,.379846,.658319,.906738,-.216387,.370625,.687138,.914844,-.215053,.360139,.71601,.923877,-.212007,.348849,.745124,.931925,-.207481,.335639,.773366,.938054,-.202418,.320798,.801636,.943895,-.196507,.304772,.829055,.949468,-.189009,.288033,.856097,.955152,-.180539,.270532,.88301,.959403,-.171437,.251639,.909296,.963309,-.161661,.232563,.934868,.967399,-.150425,.213231,.959662,.972009,-.138659,.194247,.98302,.97433,-.126595,.174718,1.00517,.975823,-.113205,.155518,1.02566,.976371,-.0996096,.136709,1.04418,.978705,-.0860754,.117571,1.06146,.981477,-.0714438,.0980046,1.07777,.984263,-.0572304,.0782181,1.09214,.988423,-.0428875,.0584052,1.10553,.993,-.0282442,.038522,1.11758,.99704,-.0140183,.0190148,1.12864,.999913,369494e-9,-145203e-9,1.13901,.777662,-84153e-10,.423844,154403e-10,.770458,-211714e-9,.419915,38845e-8,.770716,-846888e-9,.420055,.00155386,.770982,-.00190567,.420202,.00349653,.770981,-.00338782,.420201,.00621606,.77098,-.00529338,.4202,.00971274,.770983,-.00762223,.4202,.0139867,.770985,-.0103741,.420198,.0190381,.770996,-.0135489,.4202,.0248677,.771029,-.0171461,.420212,.0314764,.771052,-.0211647,.420215,.0388648,.771131,-.0256048,.420245,.047036,.771235,-.0304647,.420284,.0559911,.771383,-.0357436,.420341,.0657346,.771591,-.0414392,.420423,.0762694,.771819,-.0475462,.420506,.0875984,.772123,-.0540506,.420617,.099727,.772464,-.060797,.42072,.112637,.772855,-.0675393,.420799,.126313,.773317,-.0748323,.420893,.140824,.773981,-.0825681,.421058,.15617,.774746,-.0906307,.421226,.172322,.77566,-.0988982,.421397,.189253,.776837,-.106994,.421569,.206912,.778097,-.115528,.421704,.225359,.779588,-.124317,.421849,.24447,.781574,-.133139,.422097,.264156,.784451,-.142179,.422615,.284318,.787682,-.15165,.423269,.304902,.792433,-.160771,.424396,.3265,.797359,-.169166,.424772,.35014,.803986,-.177149,.425475,.374768,.809504,-.184745,.424996,.399928,.815885,-.19173,.424247,.425796,.823513,-.198525,.423515,.452287,.832549,-.204709,.422787,.479321,.841653,-.210447,.421187,.506718,.850401,-.215501,.418519,.53432,.859854,-.219752,.414715,.56242,.869364,-.222305,.409462,.591558,.878837,-.223744,.402926,.621074,.888636,-.224065,.395043,.650538,.898132,-.223742,.38564,.679538,.907181,-.222308,.375378,.708674,.915621,-.219837,.363212,.737714,.9239,-.215233,.349313,.767014,.931644,-.209592,.334162,.795133,.938887,-.203644,.317943,.823228,.945282,-.196349,.300581,.850822,.950758,-.18742,.282195,.877594,.956146,-.177879,.262481,.904564,.960355,-.167643,.242487,.930741,.965256,-.156671,.222668,.955868,.968029,-.144123,.201907,.979869,.97251,-.131305,.18202,1.00291,.974925,-.118335,.161909,1.02392,.975402,-.103714,.142129,1.0433,.976987,-.089415,.122447,1.06089,.979677,-.0748858,.102248,1.07713,.983184,-.0596086,.0814851,1.09218,.987466,-.0447671,.0609484,1.10585,.992348,-.0295217,.0401835,1.11829,.996674,-.0143917,.0198163,1.12966,1.00003,321364e-9,-149983e-9,1.1402,.757901,-869074e-11,.436176,151011e-10,.751195,-217848e-9,.432317,378533e-9,.751178,-871373e-9,.432307,.0015141,.751195,-.00196061,.432317,.0034068,.751198,-.00348552,.432318,.00605659,.751195,-.00544599,.432315,.00946353,.751207,-.00784203,.43232,.013628,.751213,-.0106732,.43232,.0185499,.751221,-.0139393,.432319,.0242302,.751244,-.0176398,.432325,.0306694,.7513,-.0217743,.432348,.0378698,.751358,-.0263412,.432367,.0458321,.751458,-.0313396,.432404,.0545587,.751608,-.0367682,.432464,.0640543,.7518,-.0426246,.43254,.0743222,.752065,-.0489031,.432645,.0853668,.752376,-.0555828,.432762,.0971911,.752715,-.0623861,.432859,.109768,.753137,-.069415,.432958,.123126,.753676,-.0770039,.433099,.137308,.754345,-.084971,.433272,.15229,.755235,-.0932681,.433504,.168075,.756186,-.10171,.433693,.184625,.757363,-.110019,.433857,.201897,.75884,-.11887,.434102,.220014,.760467,-.127881,.434306,.238778,.762969,-.136766,.434751,.258172,.765823,-.14612,.43529,.278062,.769676,-.15566,.436236,.298437,.774909,-.165177,.437754,.319532,.77994,-.17402,.438343,.342505,.785757,-.182201,.438609,.366693,.792487,-.190104,.438762,.391668,.80038,-.197438,.438795,.417494,.808494,-.204365,.438226,.443933,.817695,-.210714,.437283,.470929,.828111,-.216651,.436087,.498569,.837901,-.221804,.433717,.526165,.847813,-.226318,.430133,.554155,.858314,-.229297,.425213,.582822,.868891,-.230999,.418576,.612847,.878941,-.231155,.410405,.642445,.888809,-.230935,.400544,.672024,.898089,-.229343,.389613,.701366,.908081,-.226886,.377197,.730763,.916819,-.222676,.363397,.759642,.924968,-.216835,.347437,.788775,.932906,-.210245,.32995,.817135,.940025,-.202992,.312262,.844912,.946101,-.19436,.293313,.872164,.952835,-.184125,.273638,.899443,.957347,-.173657,.252385,.926389,.961434,-.162204,.231038,.951947,.965522,-.14979,.209834,.976751,.969412,-.136307,.188821,1.00022,.973902,-.122527,.168013,1.02229,.974045,-.108213,.147634,1.04199,.975775,-.0927397,.12705,1.06019,.978383,-.0778212,.106309,1.07711,.98211,-.0621216,.0849279,1.09245,.986517,-.0463847,.0633519,1.10651,.991696,-.0309353,.0419698,1.11903,.996349,-.0150914,.0206272,1.13073,1.00003,442449e-9,-231396e-9,1.14146,.727498,-885074e-11,.441528,145832e-10,.730897,-223525e-9,.443589,368298e-9,.730796,-893996e-9,.443528,.00147303,.730805,-.00201149,.443533,.00331433,.730814,-.00357596,.443538,.00589222,.730815,-.00558734,.443538,.00920678,.730822,-.00804544,.44354,.0132582,.730836,-.0109501,.443545,.0180468,.730848,-.0143008,.443546,.0235732,.730871,-.0180969,.443552,.0298382,.730915,-.022338,.443567,.0368438,.730982,-.0270225,.443591,.044591,.731076,-.0321491,.443627,.0530831,.731245,-.0377166,.443699,.0623243,.73144,-.0437216,.443777,.0723181,.7317,-.0501576,.443881,.0830691,.732034,-.0569942,.444014,.0945809,.732388,-.0638756,.444113,.106825,.732853,-.071203,.444247,.119859,.733473,-.0790076,.444442,.13369,.734195,-.0871937,.444645,.148304,.735069,-.095696,.444877,.163702,.736169,-.10426,.445133,.179861,.73747,-.112853,.44537,.196778,.738991,-.12199,.445651,.214496,.740865,-.131153,.445958,.232913,.743637,-.140245,.446548,.251977,.746797,-.149722,.447246,.271551,.751517,-.159341,.448656,.291774,.756156,-.169106,.449866,.312455,.761519,-.178436,.450919,.334552,.768295,-.186904,.451776,.358491,.776613,-.195117,.452832,.383446,.783966,-.202695,.45249,.408945,.793542,-.20985,.452587,.435364,.803192,-.216403,.451852,.462336,.813892,-.22251,.450708,.48987,.824968,-.227676,.4486,.517697,.835859,-.232443,.445156,.545975,.846825,-.235775,.440351,.574483,.858085,-.237897,.433641,.604246,.868825,-.238074,.425354,.634101,.879638,-.237661,.415383,.664201,.889966,-.236186,.404136,.693918,.899479,-.233599,.390917,.723481,.908769,-.229737,.376352,.75258,.917966,-.223836,.360372,.781764,.926304,-.217067,.342551,.811139,.934626,-.209309,.324238,.839585,.941841,-.20071,.304484,.867044,.94789,-.190602,.283607,.894579,.954196,-.179253,.262205,.921743,.958383,-.167646,.239847,.948026,.963119,-.155073,.218078,.973296,.966941,-.141426,.195899,.998135,.970836,-.126849,.174121,1.02021,.973301,-.112296,.153052,1.04085,.97448,-.0964965,.131733,1.05946,.977045,-.080489,.10997,1.07693,.980751,-.064844,.0881657,1.09254,.985475,-.0481938,.0657987,1.10697,.991089,-.0319185,.0435215,1.12004,.996122,-.0158088,.0214779,1.13173,1.00001,372455e-9,-200295e-9,1.14291,.708622,-907597e-11,.45304,141962e-10,.711162,-228911e-9,.454662,358052e-9,.709812,-914446e-9,.453797,.00143034,.709865,-.00205819,.453834,.00321935,.709864,-.00365894,.453833,.00572331,.709855,-.00571692,.453826,.00894278,.709862,-.00823201,.453828,.012878,.709875,-.011204,.453832,.0175295,.709896,-.0146323,.453839,.0228978,.709925,-.0185163,.453847,.0289839,.709974,-.0228551,.453866,.0357894,.710045,-.0276473,.453892,.0433161,.710133,-.032891,.453924,.0515665,.710292,-.0385851,.453992,.0605458,.710485,-.0447254,.45407,.0702574,.710769,-.0513051,.454192,.0807077,.711106,-.0582733,.454329,.091896,.711516,-.0652866,.45446,.103814,.712071,-.0728426,.454653,.116508,.712676,-.0808307,.45484,.129968,.713476,-.0892216,.455096,.144206,.714377,-.0979047,.455346,.159212,.715579,-.106531,.455647,.174973,.716977,-.115492,.455961,.191504,.71862,-.124821,.456315,.208835,.72084,-.134079,.4568,.226869,.723786,-.143427,.457521,.245582,.727464,-.153061,.458475,.264957,.732771,-.162768,.460239,.284948,.736515,-.172627,.460899,.30522,.743519,-.182487,.463225,.326717,.750041,-.191295,.464027,.350113,.758589,-.199746,.465227,.374782,.767703,-.207584,.465877,.400226,.777484,-.214973,.465996,.426442,.788792,-.221796,.466019,.453688,.800194,-.228038,.465083,.481246,.811234,-.233346,.462506,.509086,.822859,-.238073,.459257,.537338,.835082,-.241764,.454863,.566108,.846332,-.244241,.448163,.595126,.858355,-.244736,.439709,.625574,.87034,-.244278,.429837,.65617,.881027,-.24255,.418002,.686029,.891007,-.239912,.404325,.716039,.900874,-.236133,.389222,.745518,.911072,-.230672,.373269,.775026,.920359,-.22356,.355083,.804521,.928604,-.215591,.335533,.834045,.937175,-.206503,.315278,.861612,.942825,-.196684,.293653,.889131,.949805,-.185116,.271503,.916853,.955535,-.172703,.248821,.943541,.959843,-.159978,.225591,.970132,.964393,-.146375,.202719,.994709,.968008,-.131269,.179928,1.0186,.971013,-.11569,.158007,1.03928,.973334,-.1003,.13624,1.05887,.975775,-.0833352,.1138,1.07652,.979579,-.0668981,.0913141,1.09297,.984323,-.0500902,.0683051,1.10734,.990351,-.0332377,.0451771,1.12084,.995823,-.0161491,.0221705,1.13296,1.0001,234083e-9,-108712e-9,1.14441,.683895,-924677e-11,.46015,137429e-10,.68833,-233383e-9,.463134,346865e-9,.688368,-933547e-9,.463159,.00138748,.688367,-.00210049,.463159,.00312187,.688369,-.00373415,.463159,.00555004,.688377,-.00583449,.463163,.00867216,.688386,-.00840128,.463166,.0124884,.688398,-.0114343,.463169,.0169993,.688418,-.0149329,.463175,.0222054,.688453,-.0188964,.463188,.028108,.688515,-.0233239,.463214,.0347085,.68857,-.0282136,.463231,.0420091,.688679,-.033564,.463276,.0500132,.688854,-.0393733,.463356,.0587255,.689038,-.0456354,.46343,.0681476,.689321,-.0523433,.463553,.0782897,.689662,-.059412,.463693,.0891501,.690188,-.0665736,.4639,.100735,.690755,-.0743106,.464107,.113074,.691405,-.0824722,.464329,.126161,.692198,-.0910484,.464585,.140007,.693196,-.0998778,.464893,.154612,.69454,-.108651,.465285,.169984,.695921,-.117855,.465596,.186106,.697749,-.12734,.466056,.203034,.700375,-.136714,.466771,.220703,.703395,-.146386,.467579,.239062,.707904,-.156096,.469067,.258188,.711673,-.165904,.469851,.277759,.717489,-.175812,.471815,.297935,.724051,-.185931,.47389,.318916,.731965,-.195238,.47587,.341591,.741151,-.204021,.477523,.366062,.751416,-.212113,.478881,.391396,.761848,-.21979,.479226,.417599,.771886,-.2267,.478495,.444401,.783998,-.232991,.477622,.472084,.796523,-.238645,.475833,.500193,.808851,-.243396,.472568,.52865,.821191,-.247226,.467857,.557362,.834261,-.250102,.461871,.586768,.846762,-.251056,.453543,.617085,.859867,-.250604,.443494,.647659,.871948,-.248783,.431711,.678119,.882967,-.245855,.417911,.708399,.892826,-.242168,.401993,.738256,.90332,-.237062,.385371,.767999,.913633,-.22997,.366837,.798191,.922774,-.221687,.346372,.827756,.931371,-.212345,.325682,.856425,.938929,-.20206,.303665,.884299,.944821,-.190981,.280786,.912023,.951792,-.178065,.2573,.939669,.957712,-.164634,.233448,.96655,.961912,-.150863,.209504,.992366,.966382,-.13577,.18597,1.01633,.969588,-.119593,.162905,1.03843,.971777,-.103203,.14053,1.05841,.97433,-.0865888,.117909,1.07632,.978686,-.0690829,.0944101,1.09326,.983281,-.0516568,.0705671,1.10796,.989562,-.034558,.0468592,1.12182,.995465,-.0167808,.0229846,1.1342,.999991,373016e-9,-235606e-9,1.1459,.662251,-939016e-11,.468575,132714e-10,.666634,-237624e-9,.471675,335842e-9,.666411,-950385e-9,.471516,.00134321,.666399,-.00213833,.471509,.00302221,.666386,-.0038014,.471499,.00537283,.666405,-.00593958,.471511,.00839533,.666406,-.00855253,.471508,.0120898,.666428,-.0116401,.471519,.0164569,.666444,-.0152015,.471522,.0214971,.66649,-.0192362,.471543,.027212,.666537,-.0237428,.471558,.033603,.666617,-.0287198,.471591,.0406728,.666718,-.0341647,.471631,.0484238,.666889,-.0400759,.47171,.0568621,.667104,-.0464479,.471805,.0659915,.667374,-.0532677,.471923,.0758178,.667772,-.0603805,.472098,.0863425,.668371,-.0677392,.472363,.0975917,.668971,-.0756028,.472596,.109567,.669696,-.0839293,.472869,.122272,.670481,-.0926683,.473126,.135718,.6715,-.1016,.473442,.149914,.672911,-.110566,.47389,.164882,.674512,-.119984,.474354,.180602,.67651,-.129574,.474922,.19711,.679292,-.139106,.475764,.214371,.682798,-.148993,.476886,.232405,.686955,-.158737,.478179,.251153,.691406,-.168754,.479432,.270436,.697438,-.178703,.481481,.290374,.704761,-.188955,.484143,.311044,.713599,-.198814,.487007,.333003,.723194,-.207869,.488962,.357144,.732601,-.216189,.489815,.382169,.744193,-.22398,.490888,.408227,.754907,-.231156,.490355,.434928,.767403,-.23747,.489548,.462599,.78107,-.243503,.488274,.490908,.793893,-.248114,.484843,.519421,.807296,-.25222,.4803,.548561,.820529,-.255265,.474097,.577772,.833716,-.256741,.466041,.607782,.848403,-.25637,.456547,.638807,.860755,-.254804,.443946,.670058,.874012,-.251834,.430852,.700749,.885619,-.247867,.414903,.731446,.896069,-.242634,.397276,.761191,.906266,-.236093,.378535,.791053,.916759,-.227543,.358038,.821298,.92523,-.21783,.335705,.850747,.93436,-.207534,.313797,.879258,.941631,-.195983,.289671,.907734,.947564,-.183567,.265319,.935206,.953681,-.169345,.240815,.962739,.960008,-.154909,.216119,.989227,.964145,-.140161,.192096,1.01465,.968171,-.123411,.167855,1.03737,.969859,-.106525,.144817,1.05767,.972666,-.0891023,.12149,1.0761,.977055,-.0718094,.0975306,1.09336,.982527,-.0534213,.0730217,1.10878,.989001,-.0355579,.0483366,1.12285,.99512,-.0176383,.023938,1.13548,1.00007,368831e-9,-211581e-9,1.14744,.651047,-960845e-11,.484101,12922e-9,.644145,-241347e-9,.478968,324578e-9,.64396,-965142e-9,.478831,.00129798,.64396,-.00217154,.47883,.00292046,.643968,-.00386049,.478835,.00519202,.643974,-.00603186,.478838,.0081128,.643977,-.0086854,.478836,.011683,.643982,-.0118207,.478834,.0159031,.644024,-.0154374,.478856,.0207743,.644059,-.0195343,.478868,.0262975,.644122,-.0241103,.478896,.0324747,.644207,-.0291638,.478933,.039309,.64432,-.0346919,.478981,.0468029,.644481,-.0406919,.479053,.0549614,.644722,-.047159,.479169,.0637909,.645013,-.0540748,.479302,.0732974,.645503,-.0612001,.479541,.0834898,.646117,-.0687303,.479829,.0943873,.646707,-.0767846,.480061,.105991,.647431,-.0852465,.480343,.11831,.64831,-.0940719,.48066,.131348,.649486,-.103056,.481083,.14514,.650864,-.112261,.481528,.159676,.652604,-.121852,.482102,.174979,.654825,-.131505,.482813,.191079,.657876,-.141189,.483876,.207927,.661339,-.151239,.48499,.225586,.665463,-.161091,.486279,.243947,.670542,-.171235,.487968,.262957,.677361,-.181347,.49053,.282781,.685672,-.191679,.493862,.303311,.694551,-.201781,.49699,.324607,.703753,-.211164,.498884,.347916,.713703,-.219675,.500086,.372628,.725911,-.227836,.501554,.398694,.73862,-.23533,.502193,.425529,.752118,-.241786,.501811,.453209,.76579,-.247865,.500185,.481381,.779568,-.252696,.497159,.51011,.793991,-.256802,.492765,.539322,.808182,-.259942,.486827,.569078,.821698,-.261703,.478386,.598818,.836009,-.262006,.468772,.629762,.849824,-.260333,.456352,.661366,.863888,-.257398,.442533,.69295,.876585,-.253264,.426573,.723608,.888665,-.248026,.408964,.754378,.899537,-.241487,.389677,.784761,.9094,-.233463,.368516,.814688,.920166,-.223397,.346624,.845009,.928899,-.21255,.322717,.874431,.937156,-.200869,.298698,.902922,.943861,-.188387,.273491,.931356,.949557,-.174341,.247866,.958854,.955862,-.158994,.222496,.986098,.961721,-.143664,.197522,1.01229,.965976,-.127412,.17302,1.03571,.968652,-.109798,.148954,1.05699,.971084,-.0916787,.125044,1.07587,.975584,-.0739634,.100577,1.09372,.98122,-.055322,.0753666,1.10948,.988253,-.0366825,.0498899,1.12394,.99482,-.0180389,.024611,1.13694,1.00001,229839e-9,-188283e-9,1.14919,.613867,-964198e-11,.479449,123452e-10,.621485,-244534e-9,.485399,313091e-9,.621429,-978202e-9,.485353,.00125245,.62112,-.00220004,.485114,.00281687,.621119,-.0039111,.485112,.00500783,.621122,-.00611091,.485112,.00782498,.621133,-.00879922,.485117,.0112687,.621152,-.0119756,.485125,.0153394,.621183,-.0156396,.485139,.0200382,.621227,-.0197898,.485158,.0253663,.621298,-.0244253,.485192,.0313261,.621388,-.0295441,.485233,.0379204,.621507,-.0351432,.485286,.0451523,.621693,-.0412198,.485378,.0530277,.621933,-.0477673,.485495,.0615522,.622232,-.0547574,.485635,.0707316,.622809,-.0619417,.485943,.0805883,.623407,-.069625,.486232,.0911267,.62406,-.077796,.486516,.102354,.624835,-.0863731,.486838,.114279,.625758,-.095251,.487188,.126902,.627043,-.104299,.487695,.140285,.628438,-.113724,.488163,.154397,.630325,-.123417,.488858,.169267,.632801,-.133137,.489754,.184941,.635784,-.143052,.490815,.20136,.639406,-.153132,.492048,.218643,.643872,-.163143,.49363,.236615,.6499,-.17333,.496009,.255449,.657201,-.183622,.498994,.275006,.666221,-.194019,.502888,.295354,.674419,-.204192,.505459,.316244,.683729,-.21406,.507771,.33849,.695584,-.222854,.510245,.363166,.708583,-.231315,.512293,.389071,.721233,-.238911,.512747,.415737,.735134,-.245657,.512482,.443331,.750179,-.251879,.511526,.471891,.765073,-.256911,.508935,.500892,.779794,-.261144,.504341,.530294,.794801,-.264316,.498515,.560144,.810339,-.266276,.491015,.590213,.824818,-.266981,.481126,.620865,.839375,-.265778,.468685,.652687,.853043,-.262748,.453925,.684759,.867335,-.258474,.437912,.716209,.88037,-.253187,.419648,.747508,.891711,-.246476,.39982,.77797,.902896,-.238735,.37879,.808586,.913601,-.22885,.355891,.838843,.923019,-.217656,.331773,.869014,.933432,-.205539,.307356,.898512,.939691,-.192595,.281321,.9269,.946938,-.178945,.255441,.955297,.952372,-.163587,.229013,.983231,.95909,-.147214,.203179,1.00971,.963675,-.13064,.17792,1.03438,.968247,-.113121,.152898,1.05625,.97001,-.0945824,.128712,1.07598,.974458,-.0755648,.103349,1.094,.980168,-.0571998,.0776731,1.1104,.987295,-.0377994,.0514445,1.12491,.994432,-.0186417,.025429,1.13851,.999975,542714e-9,-282356e-9,1.15108,.592656,-980249e-11,.486018,119532e-10,.598467,-247275e-9,.490781,301531e-9,.597934,-988317e-9,.490343,.00120517,.597903,-.00222366,.490319,.0027116,.597913,-.00395315,.490327,.00482077,.597919,-.00617653,.490329,.00753264,.597936,-.00889375,.490339,.0108478,.597956,-.0121043,.490347,.0147668,.597992,-.0158073,.490365,.0192905,.598032,-.0200017,.490382,.0244204,.598109,-.0246865,.49042,.0301593,.598215,-.0298594,.490474,.03651,.59833,-.0355167,.490524,.0434757,.598525,-.0416559,.490624,.0510629,.598778,-.0482692,.490753,.0592781,.599135,-.0553114,.49094,.0681304,.599802,-.062542,.491328,.0776467,.600361,-.0703638,.491598,.0878184,.60101,-.0786256,.491882,.0986573,.601811,-.0872962,.492232,.11018,.602861,-.0962284,.492684,.1224,.604167,-.10538,.493213,.135354,.605693,-.114896,.493799,.149034,.607682,-.124654,.494576,.163469,.610672,-.13456,.4959,.178747,.613313,-.144581,.496713,.194723,.617603,-.154703,.498499,.211617,.622174,-.16489,.500188,.229183,.628855,-.175164,.503072,.247786,.636963,-.185565,.506798,.267116,.644866,-.195911,.509719,.28702,.653741,-.206104,.512776,.307763,.664942,-.216447,.516812,.329631,.67633,-.22552,.519181,.353515,.690012,-.234316,.521681,.379226,.704243,-.242032,.523129,.405901,.719396,-.249172,.523768,.433585,.734471,-.255543,.522541,.462085,.750539,-.260697,.520217,.491233,.766365,-.26501,.516293,.521094,.781677,-.268409,.509708,.551014,.797132,-.270399,.501944,.581463,.812655,-.271247,.492025,.612402,.828592,-.270708,.480424,.643798,.844044,-.268085,.465955,.67682,.857305,-.263459,.448425,.708496,.87114,-.258151,.430243,.74046,.884936,-.251171,.410578,.771583,.895772,-.243305,.38862,.802234,.906961,-.234037,.365214,.833179,.917775,-.222714,.34116,.86353,.927883,-.210175,.31572,.893557,.936617,-.196925,.289159,.922976,.943384,-.182788,.261996,.951606,.949713,-.167965,.235324,.979958,.955818,-.151109,.208408,1.00765,.961344,-.133834,.182591,1.03329,.965469,-.115987,.156958,1.0557,.968693,-.09746,.132239,1.07583,.973165,-.0778514,.106195,1.09451,.979387,-.0585067,.0797669,1.11137,.98671,-.0390409,.0530263,1.12643,.994093,-.019408,.0263163,1.14016,1.00002,540029e-9,-194487e-9,1.15299,.574483,-989066e-11,.494533,114896e-10,.574478,-249127e-9,.494528,289403e-9,.574607,-996811e-9,.494637,.00115797,.574396,-.00224241,.494458,.00260498,.574377,-.00398632,.49444,.00463102,.574386,-.00622836,.494445,.00723623,.574401,-.0089683,.494453,.010421,.574419,-.0122056,.49446,.0141859,.574459,-.0159396,.494481,.0185322,.574525,-.0201692,.49452,.0234617,.574587,-.0248924,.494547,.0289762,.574697,-.0301074,.494604,.0350797,.574853,-.0358114,.494688,.0417767,.575027,-.041999,.494772,.0490718,.575294,-.0486618,.494915,.0569728,.575733,-.0557148,.495173,.0654955,.576356,-.0630489,.495537,.0746612,.576944,-.0709285,.495836,.0844615,.57765,-.0792723,.496177,.0949142,.578491,-.0880167,.496563,.10603,.579639,-.0969462,.497096,.117841,.580989,-.10622,.497684,.130367,.582587,-.115861,.498337,.143609,.584951,-.125605,.499414,.157625,.587602,-.135608,.500518,.172413,.59076,-.145742,.501767,.187999,.594992,-.155934,.503542,.20445,.600656,-.166303,.506135,.221764,.607816,-.176681,.509542,.24002,.61522,-.187071,.51263,.258992,.623702,-.197465,.516021,.278773,.634192,-.207816,.520422,.299377,.644936,-.218183,.524073,.320802,.657888,-.2278,.528049,.34384,.670666,-.236747,.52986,.36916,.685626,-.24484,.531892,.395867,.701304,-.252071,.532727,.423488,.717727,-.258714,.532146,.452201,.733914,-.264211,.529883,.481579,.750529,-.26859,.5259,.511558,.76747,-.272046,.51999,.542042,.785189,-.274225,.513083,.572799,.800954,-.275189,.502936,.603816,.816962,-.274946,.490921,.635461,.83336,-.272695,.47684,.6676,.848143,-.268223,.459405,.70051,.861818,-.262768,.440319,.732902,.876828,-.255872,.420123,.765084,.889312,-.247703,.398379,.796391,.900412,-.238381,.374496,.827333,.912251,-.227783,.349874,.858385,.921792,-.214832,.323181,.888652,.931273,-.200949,.296624,.917763,.940295,-.186537,.269211,.947878,.946812,-.171538,.241447,.977016,.953588,-.155254,.213829,1.00501,.958841,-.137156,.186807,1.03179,.963746,-.118699,.160706,1.05502,.966468,-.0998358,.135504,1.07568,.971178,-.0805186,.109131,1.09479,.97831,-.0599348,.0818293,1.1123,.985886,-.0399661,.0545872,1.12771,.994021,-.0198682,.0269405,1.14186,1.00009,271022e-9,-12989e-8,1.15514,.538716,-990918e-11,.486732,109675e-10,.550656,-250642e-9,.497518,277412e-9,.55057,-.00100265,.497441,.00110974,.550903,-.00225672,.497733,.00249779,.550568,-.00401046,.497438,.00443906,.550574,-.00626613,.49744,.00693637,.550591,-.0090226,.497449,.00998921,.550623,-.0122795,.497469,.0135984,.550667,-.0160361,.497495,.0177654,.550724,-.0202908,.497526,.0224915,.550792,-.0250421,.497557,.0277795,.550918,-.0302878,.49763,.0336334,.551058,-.0360241,.497701,.0400573,.551276,-.0422473,.497824,.0470585,.551551,-.0489441,.497977,.0546433,.552074,-.0559596,.498312,.0628367,.552681,-.0633978,.498679,.071646,.553324,-.0713176,.499031,.0810746,.554011,-.0797268,.499365,.091129,.55488,-.0885238,.499779,.101837,.556171,-.0974417,.500444,.113239,.557498,-.106841,.501025,.125316,.559299,-.116533,.501864,.138128,.561647,-.126298,.502967,.151695,.564347,-.136388,.504129,.16604,.567863,-.146576,.505713,.181207,.572569,-.156832,.507953,.197259,.578919,-.167323,.511186,.214258,.585387,-.177712,.514042,.232038,.593134,-.188184,.517484,.250733,.603295,-.198717,.522345,.270454,.613854,-.209177,.526751,.290807,.626092,-.219644,.531595,.312202,.637868,-.229494,.534721,.334435,.652458,-.238718,.538304,.359184,.666985,-.247061,.539875,.385637,.683301,-.254652,.541042,.41328,.69998,-.261376,.540735,.441903,.717824,-.267085,.539139,.471609,.734617,-.271465,.534958,.501446,.753663,-.27528,.53032,.532571,.770512,-.277617,.522134,.563641,.787356,-.278525,.51206,.595067,.806252,-.278512,.50119,.627226,.822061,-.277023,.486791,.659402,.838959,-.273175,.470467,.692874,.85379,-.267238,.450688,.725702,.868268,-.260327,.429741,.75832,.881994,-.251946,.407223,.790189,.893885,-.242432,.383214,.821625,.905118,-.231904,.357297,.853011,.916045,-.219545,.330733,.883773,.927614,-.205378,.303916,.914435,.936005,-.190388,.275941,.944502,.944533,-.1749,.247493,.974439,.950758,-.158588,.218996,1.00286,.957078,-.141027,.191559,1.0304,.962448,-.121507,.164457,1.05466,.964993,-.102068,.138636,1.0761,.970017,-.0822598,.111861,1.09541,.97661,-.062033,.0843438,1.11317,.985073,-.0409832,.0558496,1.12911,.993515,-.020146,.0275331,1.1438,1.00006,27329e-8,-107883e-9,1.15736,.525324,-999341e-11,.498153,105385e-10,.526513,-251605e-9,.499277,265329e-9,.526517,-.00100641,.499282,.0010613,.526588,-.00226466,.499337,.00238823,.526539,-.0040255,.499302,.00424535,.526547,-.00628954,.499306,.00663364,.526561,-.00905628,.499313,.00955337,.526593,-.0123253,.499334,.0130054,.526642,-.0160957,.499365,.0169911,.5267,-.0203661,.499396,.0215122,.526792,-.0251347,.499451,.0265718,.526904,-.0303985,.499511,.0321732,.527079,-.0361554,.499617,.0383231,.527285,-.0423982,.499731,.045026,.527602,-.0491121,.499924,.0522936,.528166,-.0561127,.500306,.0601528,.52879,-.0635988,.5007,.0686059,.529421,-.071581,.501048,.0776518,.530144,-.0799854,.501421,.0873148,.531062,-.0888032,.501884,.0976084,.532374,-.0977643,.50259,.108588,.533828,-.107197,.50329,.120234,.53581,-.116887,.504312,.132602,.538063,-.126755,.505365,.145721,.5409,-.136819,.506668,.159617,.544882,-.147117,.508731,.174369,.550238,-.157446,.511601,.190028,.556038,-.167988,.514431,.206587,.563031,-.178364,.517808,.224046,.571543,-.189007,.521937,.242503,.582255,-.199546,.527415,.261977,.59272,-.210084,.531682,.282162,.605648,-.220448,.537123,.303426,.61785,-.230593,.540664,.325323,.632223,-.240238,.544467,.348993,.648819,-.24887,.547594,.375462,.665825,-.256657,.54912,.403024,.683389,-.263711,.549294,.431773,.701495,-.269666,.547649,.461494,.719197,-.274169,.543786,.491623,.737906,-.278124,.538644,.522994,.756652,-.280632,.531057,.554775,.775279,-.281741,.521972,.586441,.792688,-.281652,.509613,.618596,.811894,-.280345,.496497,.651462,.827938,-.277128,.47968,.684023,.844837,-.271646,.460688,.718024,.859239,-.264397,.438872,.751207,.874088,-.256144,.41577,.784232,.887693,-.246311,.391369,.816191,.899402,-.235497,.365872,.847828,.910973,-.223631,.338618,.87934,.92204,-.209874,.310803,.910325,.930987,-.194265,.281802,.940695,.94,-.178125,.252836,.970958,.948018,-.161479,.224239,1.00078,.955141,-.144038,.195857,1.0288,.960513,-.124915,.168487,1.05371,.963964,-.104284,.141495,1.07596,.968713,-.0838732,.114437,1.09628,.975524,-.0635579,.0863105,1.11448,.98431,-.042291,.0574774,1.13069,.992916,-.0209131,.0284343,1.14568,.999926,743097e-9,-379265e-9,1.15955,.501042,-998428e-11,.498726,100306e-10,.502992,-252112e-9,.500665,253283e-9,.502417,-.00100791,.500092,.00101259,.502965,-.00226919,.500621,.00227978,.502318,-.00403109,.499994,.00405011,.502333,-.00629832,.500005,.00632868,.502362,-.00906907,.500027,.00911446,.502369,-.0123423,.500023,.0124078,.50243,-.0161178,.500066,.016211,.502493,-.0203937,.500103,.0205256,.502592,-.0251684,.500166,.0253548,.502707,-.0304389,.50023,.0307029,.502881,-.0362015,.500335,.0365753,.503124,-.0424507,.500488,.0429798,.503443,-.0491582,.500686,.0499268,.504083,-.0561476,.501155,.0574541,.504668,-.0636846,.501524,.0655408,.505319,-.0716834,.501904,.0742072,.50609,-.0800925,.502321,.0834699,.507122,-.0888425,.502896,.0933603,.508414,-.097855,.503603,.10391,.509955,-.107304,.504416,.115113,.512061,-.116921,.505565,.127054,.514419,-.12689,.506732,.139709,.517529,-.136934,.508338,.153173,.522085,-.147327,.510987,.167528,.526986,-.157612,.513527,.182708,.533122,-.168213,.516717,.198881,.540807,-.178688,.520832,.215986,.550687,-.189511,.52632,.234335,.560567,-.199998,.531009,.253375,.571698,-.210652,.535839,.273499,.584364,-.220917,.541091,.294355,.599066,-.23137,.546875,.316525,.614148,-.241206,.551306,.339671,.631157,-.250379,.555187,.36531,.647919,-.258397,.556595,.392767,.666112,-.265528,.556949,.421397,.686158,-.271827,.556617,.451433,.704838,-.27674,.552975,.482131,.723957,-.280733,.547814,.513458,.74262,-.283359,.53997,.545446,.762009,-.284541,.530422,.57775,.781314,-.284507,.518546,.610434,.799116,-.283309,.504178,.643178,.817604,-.280378,.48843,.676248,.83459,-.275619,.469457,.709698,.850974,-.26856,.447698,.744245,.866747,-.260094,.424791,.777695,.881412,-.249929,.399913,.810392,.8936,-.239137,.37308,.842872,.905943,-.226818,.345705,.874677,.916408,-.213699,.31706,.906257,.927215,-.198428,.288444,.936881,.935625,-.181643,.258329,.96795,.944076,-.164386,.228488,.998216,.951229,-.146339,.199763,1.02689,.958793,-.127709,.172153,1.0535,.963219,-.107244,.144989,1.07646,.967562,-.0857764,.11685,1.09675,.974866,-.0645377,.0880571,1.11576,.983353,-.0431732,.0587352,1.13227,.992503,-.0218356,.0294181,1.1478,1.00003,605203e-9,-231013e-9,1.16207,.482935,-101177e-10,.504695,968142e-11,.477554,-251521e-9,.499071,240676e-9,.477904,-.00100683,.499436,96342e-8,.478368,-.00226636,.499899,.0021687,.477977,-.00402719,.499513,.00385384,.477993,-.00629226,.499525,.0060221,.478011,-.00906011,.499536,.00867289,.478051,-.0123305,.499566,.0118074,.478089,-.016102,.499587,.0154269,.478171,-.0203736,.499645,.0195341,.478254,-.025143,.499692,.0241318,.47839,-.0304071,.499779,.0292247,.478588,-.0361631,.499911,.0348196,.478812,-.0424023,.500046,.0409231,.479208,-.0490724,.500326,.047552,.479841,-.0560722,.500805,.0547377,.480392,-.0636125,.501152,.0624607,.481068,-.0716134,.501561,.0707473,.481898,-.0800062,.502054,.0796118,.483022,-.0886568,.502728,.0890974,.484332,-.0977553,.503479,.0992099,.486126,-.107173,.504546,.10999,.488066,-.11677,.50557,.121476,.490521,-.126725,.506849,.133672,.494232,-.136793,.50911,.146731,.498302,-.147116,.511345,.160577,.503565,-.157446,.514344,.175335,.510902,-.168121,.518824,.191207,.519263,-.178799,.523666,.208058,.528204,-.189407,.528296,.225875,.538854,-.200145,.533724,.244782,.551278,-.210701,.539833,.264753,.565222,-.221303,.546131,.285745,.579403,-.231688,.551496,.307592,.595469,-.241718,.556809,.330582,.610929,-.250992,.559641,.354995,.629433,-.259602,.562379,.382471,.648504,-.267038,.563676,.411126,.66756,-.273388,.562092,.440924,.689143,-.278788,.560807,.472118,.709056,-.282783,.555701,.503774,.729855,-.285836,.548698,.536364,.748954,-.287078,.538544,.56895,.768373,-.287133,.526711,.601991,.78827,-.285839,.512511,.635403,.807465,-.283238,.496323,.668797,.825194,-.27906,.477638,.702584,.842203,-.272286,.456253,.736393,.857749,-.263854,.432412,.77096,.874799,-.253943,.407806,.80489,.887497,-.24237,.38033,.83771,.89966,-.230278,.352446,.870376,.911753,-.21646,.323268,.902256,.923011,-.202071,.294314,.933306,.932375,-.185519,.264104,.965177,.940537,-.167604,.234035,.996303,.948904,-.149068,.20412,1.0261,.955263,-.129539,.175431,1.05304,.960303,-.109932,.148116,1.07617,.965512,-.0880572,.119693,1.09742,.973466,-.0660548,.0901619,1.11721,.98284,-.0439228,.0599875,1.13436,.992216,-.0219588,.0298975,1.15006,.999946,119402e-9,-208547e-10,1.16471,.447827,-100414e-10,.491543,914833e-11,.454778,-251257e-9,.499172,22891e-8,.453519,-.00100342,.497787,914184e-9,.45357,-.00225776,.497847,.00205701,.453578,-.00401371,.497855,.00365705,.45357,-.00627107,.497841,.00571453,.453598,-.00902968,.497864,.00823019,.453627,-.0122888,.497882,.0112049,.453684,-.0160475,.497923,.0146405,.453764,-.0203044,.49798,.0185394,.453866,-.0250576,.498049,.0229054,.453996,-.0303028,.49813,.0277424,.454196,-.0360379,.498267,.0330587,.454457,-.0422521,.498445,.0388613,.454926,-.0488393,.498812,.0451767,.455525,-.0558653,.499272,.0520153,.456074,-.0633772,.499625,.0593754,.456752,-.0713606,.500049,.0672751,.457648,-.07971,.500615,.0757447,.458849,-.0883032,.501399,.0848231,.46029,-.0974095,.502293,.0945135,.462,-.106729,.503301,.104848,.464121,-.116354,.504533,.115884,.466889,-.126214,.506172,.127652,.470744,-.136324,.508667,.14024,.47488,-.146595,.510995,.153673,.480845,-.157027,.514832,.168053,.488262,-.167658,.519506,.183508,.496547,-.178343,.524347,.199948,.506254,-.188916,.52983,.217503,.517961,-.199975,.536357,.236272,.531484,-.210624,.543641,.256096,.545496,-.221227,.550048,.277085,.559497,-.231568,.555076,.298615,.575752,-.241698,.560541,.321547,.591999,-.251172,.564156,.345602,.610654,-.260178,.567607,.371851,.630484,-.268094,.56923,.40076,.651807,-.274661,.569779,.430801,.67239,-.280331,.566791,.461939,.693024,-.284501,.562007,.493854,.715473,-.287852,.555791,.526992,.736323,-.28929,.546345,.560102,.755771,-.289405,.534,.593543,.775424,-.2881,.519114,.627256,.795447,-.285562,.502543,.661464,.815319,-.281416,.484773,.695206,.831769,-.275523,.463445,.729044,.849464,-.267516,.440269,.764069,.866775,-.257584,.415049,.799089,.881252,-.245817,.388049,.831948,.894209,-.233127,.35889,.865526,.906922,-.219579,.329915,.89818,.919686,-.204491,.300441,.930013,.929044,-.188962,.269445,.962061,.938393,-.171079,.238402,.994214,.94661,-.15199,.208204,1.02533,.953095,-.131953,.178653,1.0529,.958644,-.111233,.150684,1.0771,.963925,-.0903098,.122359,1.09855,.971995,-.0680505,.0923342,1.11874,.981658,-.0448512,.0614195,1.13635,.991649,-.0221931,.0303582,1.15238,.999985,393403e-9,-111086e-9,1.16772,.396806,-971563e-11,.457671,842355e-11,.429186,-249421e-9,.495017,21625e-8,.429324,-998052e-9,.495173,865322e-9,.429175,-.00224487,.494999,.00194637,.429129,-.00399041,.494952,.00346004,.429153,-.00623476,.494974,.00540684,.429168,-.0089773,.494983,.00778714,.429207,-.0122175,.495012,.0106022,.429257,-.0159542,.495047,.0138535,.429338,-.0201864,.495106,.0175443,.429431,-.0249104,.495165,.0216774,.429587,-.0301252,.495279,.0262594,.429796,-.0358249,.495432,.0312968,.430065,-.0419972,.495621,.0367985,.430588,-.0485144,.496061,.042798,.43113,-.0555028,.496472,.0492914,.431743,-.0629852,.496904,.0562907,.432448,-.0709256,.497369,.0638056,.433414,-.0791942,.498032,.071885,.434638,-.0877346,.498854,.0805517,.43611,-.0968056,.499812,.0898047,.437859,-.106002,.500891,.0997142,.440017,-.115648,.502198,.110289,.443236,-.125427,.504389,.121644,.44697,-.135492,.506809,.133769,.451689,-.145746,.509858,.146787,.45811,-.156219,.514247,.160793,.465305,-.166834,.518816,.175791,.474085,-.177546,.524331,.191906,.484808,-.188262,.53104,.209199,.49732,-.199346,.538511,.227825,.509693,-.209951,.544554,.247269,.524367,-.220533,.551616,.267978,.539228,-.231082,.557368,.289672,.55644,-.241342,.563782,.31268,.574204,-.250964,.568851,.33651,.593388,-.260306,.57312,.362219,.613358,-.268667,.574916,.390322,.634512,-.275591,.575053,.420478,.65563,-.281328,.572404,.451614,.678265,-.285948,.568893,.484112,.70011,-.289408,.561878,.517348,.723005,-.291328,.55359,.551355,.743744,-.291418,.541099,.585109,.763949,-.290252,.526489,.619487,.784186,-.287648,.509496,.65404,.804304,-.283782,.491484,.688649,.823629,-.278067,.470517,.723133,.84094,-.270588,.44705,.757163,.857852,-.261188,.421252,.792816,.874934,-.249313,.394191,.827248,.888709,-.236492,.365359,.861074,.902589,-.222185,.336016,.894417,.914201,-.207314,.30527,.926825,.925978,-.191146,.274532,.9595,.93512,-.174135,.243393,.991583,.943656,-.155231,.212414,1.02356,.951719,-.134403,.182005,1.05239,.957164,-.113023,.153043,1.07754,.962656,-.0914493,.124186,1.09984,.970695,-.0694179,.0941654,1.12,.980749,-.0466199,.0629671,1.13849,.991205,-.0227032,.0311146,1.15494,.999884,632388e-9,-254483e-9,1.1706,.379821,-957289e-11,.460637,789337e-11,.405188,-247483e-9,.491396,204064e-9,.404796,-989434e-9,.490914,815853e-9,.40483,-.00222607,.490949,.00183559,.40473,-.00395723,.49084,.00326332,.404731,-.00618287,.490836,.00509945,.404768,-.00890258,.490871,.00734463,.404791,-.0121156,.490883,.00999992,.404857,-.0158214,.490938,.0130676,.404943,-.0200178,.491004,.0165503,.405059,-.0247027,.491093,.0204521,.405213,-.0298729,.491205,.0247788,.405399,-.0355226,.491333,.0295373,.405731,-.0416352,.491604,.034741,.406303,-.0480807,.492116,.0404255,.406814,-.0550458,.492506,.0465732,.407404,-.0624652,.492926,.0532058,.408149,-.0702958,.493442,.0603442,.409128,-.0784623,.494136,.0680297,.410408,-.087007,.495054,.0762786,.411813,-.0959639,.495962,.0851046,.413735,-.105075,.497257,.0945878,.416137,-.114646,.498882,.104725,.41934,-.124394,.501132,.11563,.423326,-.134328,.503883,.127325,.428419,-.14458,.50747,.139911,.43484,-.154979,.511964,.153481,.442641,-.165628,.517328,.168114,.452511,-.176365,.524258,.183995,.463473,-.187298,.531248,.200953,.475564,-.198244,.538367,.219176,.488664,-.208938,.545175,.238514,.504073,-.219599,.553227,.259129,.520832,-.230378,.560653,.280997,.538455,-.240703,.567523,.303821,.55709,-.250548,.573287,.327948,.576646,-.259964,.577795,.353362,.596705,-.268721,.580077,.380336,.618053,-.276054,.58018,.4101,.640303,-.282176,.578747,.44161,.662365,-.286931,.574294,.474106,.684542,-.290521,.567035,.507549,.707984,-.292672,.558687,.541853,.730913,-.293189,.547606,.576581,.752948,-.292199,.533471,.61172,.773452,-.289508,.516395,.646339,.794715,-.285716,.497873,.682131,.814251,-.280051,.476845,.716396,.833057,-.272873,.453449,.751503,.84959,-.263982,.427857,.786085,.867022,-.252745,.400335,.821355,.882277,-.239655,.371304,.85646,.895375,-.225386,.340397,.890828,.909347,-.209587,.310005,.923532,.921885,-.193433,.2796,.956419,.932127,-.176135,.247276,.989445,.941869,-.157872,.216186,1.02221,.949735,-.137577,.185602,1.05195,.956617,-.115285,.155767,1.07822,.961974,-.0928418,.126103,1.10149,.96972,-.0700592,.0956758,1.12207,.98012,-.0474671,.0643269,1.1408,.990825,-.0238113,.0320863,1.1577,.999876,381574e-9,-812203e-10,1.17403,.367636,-961342e-11,.469176,753287e-11,.380377,-244772e-9,.485434,191797e-9,.380416,-978857e-9,.485475,767015e-9,.380376,-.00220165,.485435,.00172522,.380419,-.00391408,.485487,.00306734,.380438,-.00611549,.485505,.00479332,.380462,-.00880558,.485525,.00690391,.380496,-.0119837,.485551,.00940039,.38056,-.0156487,.485605,.0122848,.38064,-.0197988,.485666,.0155601,.380767,-.0244324,.48577,.0192313,.380909,-.0295444,.485871,.0233032,.381142,-.0351321,.48606,.0277861,.381472,-.0411535,.486336,.0326939,.382015,-.0475408,.486833,.0380565,.382523,-.0544395,.487231,.0438615,.383129,-.061784,.487683,.0501332,.383952,-.0695085,.488313,.0568996,.38498,-.0775819,.489077,.0641952,.386331,-.0860443,.490113,.0720324,.387788,-.0948406,.491099,.0804379,.389808,-.103899,.492566,.0894899,.39252,-.113313,.494601,.0992098,.395493,-.123007,.496619,.109641,.399826,-.132859,.499912,.120919,.405341,-.143077,.504061,.133107,.411932,-.153465,.508905,.146263,.420591,-.164108,.515482,.160544,.43101,-.174893,.523191,.176123,.441881,-.185839,.53026,.192757,.453919,-.196633,.537295,.210535,.468715,-.207611,.546156,.229886,.485182,-.218517,.555173,.250543,.501926,-.229249,.562728,.27221,.51785,-.239481,.567494,.294892,.536947,-.249395,.573889,.318987,.557115,-.259,.578831,.344348,.577966,-.268075,.582055,.371223,.599489,-.276115,.583307,.399834,.62479,-.282523,.583902,.431415,.647504,-.287663,.57953,.464301,.670601,-.291538,.573103,.498123,.693539,-.293842,.563731,.532662,.717385,-.294681,.553169,.567925,.741533,-.293717,.539908,.603502,.762142,-.291156,.521902,.639074,.783014,-.28719,.502815,.674439,.805158,-.281773,.482598,.710497,.823646,-.274682,.458949,.7456,.841879,-.266184,.433129,.781085,.859515,-.255682,.406064,.816,.875335,-.242849,.376509,.851074,.890147,-.228329,.345502,.886473,.903144,-.212491,.31428,.920751,.916618,-.195695,.282994,.954606,.927953,-.178267,.251091,.988402,.937414,-.159549,.219107,1.02141,.946823,-.140022,.18896,1.05167,.954651,-.118154,.158667,1.07819,.959955,-.0946636,.128808,1.1025,.96858,-.0711792,.0973787,1.12391,.97938,-.0475046,.0650965,1.14322,.990498,-.024059,.0326267,1.16077,.999844,-512408e-10,112444e-9,1.17727,.316912,-934977e-11,.425996,695559e-11,.356423,-241372e-9,.479108,179562e-9,.356272,-965292e-9,.478897,71811e-8,.356262,-.00217182,.478894,.00161574,.356265,-.00386092,.478895,.00287261,.356278,-.0060324,.478905,.00448907,.356293,-.00868565,.478914,.00646572,.356346,-.0118207,.478965,.00880438,.356395,-.0154355,.479001,.0115066,.356484,-.019529,.479075,.0145762,.356609,-.0240991,.47918,.018018,.356766,-.0291413,.479305,.0218379,.357009,-.0346498,.479512,.0260454,.357424,-.0405462,.479909,.0306657,.357899,-.0468825,.480337,.0357054,.358424,-.0536887,.480771,.0411728,.359041,-.0609416,.481242,.0470841,.359903,-.0685239,.481943,.0534831,.360932,-.0764883,.482741,.0603795,.362196,-.0848364,.483688,.0678028,.363847,-.0935002,.484947,.0758086,.365972,-.102471,.486588,.0844173,.368741,-.111751,.488787,.0937199,.372146,-.121334,.491405,.103732,.377114,-.131147,.495604,.114608,.38226,-.141213,.499436,.126345,.389609,-.151632,.505334,.139116,.397925,-.162073,.51168,.152995,.407824,-.172819,.518876,.168071,.420014,-.183929,.527639,.184495,.434266,-.195032,.537588,.20232,.447352,-.205792,.544379,.221189,.463726,-.216704,.553422,.241616,.481406,-.227531,.562074,.263298,.498707,-.238017,.568227,.286116,.518039,-.247936,.574473,.3101,.538277,-.257437,.579191,.335401,.561166,-.266829,.584807,.362246,.583189,-.275329,.586476,.390609,.606024,-.28234,.585578,.420998,.632419,-.287924,.584496,.454357,.656128,-.291972,.577766,.488233,.679953,-.29456,.56875,.523248,.704654,-.295816,.558388,.559168,.729016,-.295157,.544826,.595326,.752062,-.292779,.528273,.631864,.773138,-.288681,.508482,.667793,.794869,-.283358,.487341,.704035,.815101,-.27608,.46354,.739925,.834212,-.26767,.438672,.775539,.852368,-.257397,.411239,.810895,.870207,-.245689,.3829,.846472,.884063,-.231452,.351496,.881788,.898284,-.215561,.31895,.917438,.912964,-.198208,.287367,.952422,.924666,-.180426,.254487,.987551,.934429,-.161525,.222226,1.02142,.943485,-.141197,.191143,1.05218,.9521,-.120085,.161112,1.07937,.957876,-.0975881,.130982,1.10403,.966943,-.0726842,.0990553,1.12616,.978313,-.0483705,.0662818,1.14619,.990048,-.0239072,.0329243,1.16413,.999984,461885e-9,-772859e-10,1.18099,.321287,-935049e-11,.455413,659662e-11,.332595,-237513e-9,.471437,167562e-9,.332729,-949964e-9,.471618,670192e-9,.332305,-.00213618,.471028,.00150712,.332326,-.00379765,.471055,.00267959,.332344,-.00593353,.471072,.00418751,.332356,-.00854349,.471077,.00603172,.332403,-.0116268,.471121,.00821362,.332461,-.0151824,.47117,.0107357,.332552,-.0192088,.471251,.0136014,.332657,-.0237024,.47133,.0168152,.332835,-.0286615,.471487,.0203853,.333083,-.0340765,.471708,.0243212,.333547,-.0398563,.47219,.0286518,.333989,-.0460916,.472587,.0333763,.334532,-.0527897,.473054,.0385084,.335167,-.0599284,.473568,.0440638,.33608,-.0673514,.474362,.0500962,.337146,-.0752237,.475231,.0566022,.338462,-.083418,.476282,.0636272,.34014,-.0919382,.477615,.0712153,.342341,-.100741,.479404,.079417,.345088,-.109905,.481618,.0882631,.349049,-.119369,.485081,.0978851,.353939,-.129033,.489317,.108336,.359893,-.139038,.494309,.119698,.366945,-.149411,.499983,.132024,.375814,-.159843,.507185,.145558,.387112,-.170664,.516392,.160433,.40023,-.181897,.526519,.176648,.412555,-.192785,.53423,.193922,.427023,-.203663,.542741,.212662,.443685,-.214695,.552066,.232944,.461499,-.225561,.560762,.254495,.480975,-.236257,.569421,.277531,.501,-.24639,.576101,.301724,.521691,-.256101,.581493,.327112,.543478,-.265289,.585221,.353917,.566094,-.273938,.587614,.381941,.589578,-.281679,.587991,.41172,.614583,-.287655,.585928,.444148,.641813,-.292228,.582092,.478617,.666189,-.295172,.57398,.51397,.690475,-.29648,.561676,.550118,.715543,-.296203,.548758,.586933,.740405,-.293999,.532792,.62384,.762183,-.28998,.512735,.660723,.786069,-.28478,.492402,.69807,.806812,-.277568,.469058,.734422,.826987,-.268951,.443017,.770946,.844588,-.259049,.415501,.80699,.863725,-.2471,.387328,.842107,.879137,-.234157,.356108,.878078,.894634,-.218719,.324315,.914058,.909162,-.201293,.291813,.949922,.92072,-.18267,.258474,.985337,.93158,-.163212,.225593,1.0205,.941238,-.142771,.193986,1.05273,.949293,-.120956,.163392,1.08075,.956226,-.0985743,.132934,1.10559,.96546,-.075118,.101255,1.12823,.977403,-.0497921,.0675441,1.149,.989648,-.0241574,.0334681,1.16765,1.00001,5762e-7,-184807e-9,1.18519,.303474,-916603e-11,.4542,61243e-10,.308894,-232869e-9,.462306,155592e-9,.309426,-931661e-9,.463093,622499e-9,.308643,-.0020949,.461933,.00139979,.308651,-.0037242,.461941,.00248874,.308662,-.00581873,.46195,.00388933,.308687,-.00837818,.461974,.00560247,.308728,-.0114016,.462011,.00762948,.308789,-.0148884,.462067,.00997326,.308882,-.0188369,.462151,.0126375,.309007,-.0232436,.462263,.0156271,.30918,-.0281054,.462417,.0189498,.309442,-.0334065,.462667,.0226167,.309901,-.0390589,.463162,.0266614,.310331,-.0452042,.463555,.0310715,.310858,-.0517735,.464019,.0358698,.311576,-.0587359,.464669,.0410848,.312436,-.0660383,.465406,.0467453,.313526,-.0737266,.466339,.0528718,.314903,-.0817574,.467504,.0595039,.316814,-.090167,.469226,.0666888,.318965,-.0987555,.470981,.0744658,.322077,-.107792,.473814,.082912,.325947,-.117098,.477241,.0920846,.331008,-.126602,.48184,.102137,.337893,-.136619,.488334,.113135,.345106,-.146838,.494415,.12511,.355111,-.157357,.503275,.138356,.365095,-.167955,.510966,.152686,.378344,-.179157,.521508,.16856,.391599,-.190143,.530455,.18561,.407786,-.20123,.541275,.204308,.425294,-.212456,.551784,.224623,.444021,-.223568,.561493,.246172,.463418,-.234154,.569886,.268979,.484077,-.244546,.577116,.293411,.505513,-.254301,.582914,.318936,.527672,-.263564,.587208,.345856,.550565,-.272332,.589277,.374054,.573656,-.280011,.588426,.403276,.59827,-.286924,.587504,.43474,.624731,-.291994,.583401,.468767,.652396,-.295159,.576997,.504411,.67732,-.296954,.565863,.54114,.703147,-.296877,.552316,.57816,.728715,-.295147,.536773,.616124,.752448,-.291275,.51771,.653885,.775169,-.285905,.496087,.691537,.799307,-.279064,.474232,.729251,.819482,-.270294,.447676,.766267,.837659,-.260032,.419656,.802616,.856903,-.248497,.391328,.838583,.873325,-.235252,.360285,.874711,.889788,-.221126,.329215,.91077,.904486,-.204304,.296392,.94653,.917711,-.185562,.262159,.983828,.928969,-.165635,.229142,1.01955,.939707,-.14442,.19673,1.05317,.948167,-.122147,.165095,1.0823,.955222,-.099098,.13451,1.10791,.964401,-.0755332,.102476,1.1312,.976605,-.0513817,.0689667,1.15218,.989085,-.0258499,.034506,1.17129,.999908,617773e-9,-271268e-9,1.18961,.285803,-905752e-11,.452348,572272e-11,.284689,-22732e-8,.450581,143626e-9,.285263,-910214e-9,.451482,575099e-9,.285302,-.00204784,.451553,.00129395,.285318,-.00364057,.451574,.0023006,.28533,-.00568813,.451585,.00359547,.285361,-.00819001,.451618,.00517934,.285397,-.0111458,.45165,.007054,.285447,-.0145536,.451688,.00922167,.285527,-.0184127,.451758,.0116869,.285688,-.0227207,.451929,.0144555,.28584,-.0274712,.452055,.0175341,.286136,-.0326278,.452369,.0209406,.286574,-.0381792,.452853,.0246965,.287012,-.0441879,.453272,.0287996,.287542,-.0506096,.453752,.033268,.288299,-.0573634,.454488,.0381504,.289186,-.0645458,.455294,.0434447,.290302,-.0720405,.456301,.0491973,.291776,-.0799046,.457648,.0554453,.29372,-.088117,.459483,.0622311,.296052,-.0965328,.461571,.0695992,.299563,-.105409,.465085,.077658,.30335,-.114553,.468506,.0864176,.309167,-.123917,.474423,.0961078,.31529,-.13381,.47995,.106643,.324163,-.144021,.488592,.118322,.333272,-.154382,.496461,.131133,.344224,-.165015,.50562,.145208,.357733,-.176168,.516719,.16073,.373046,-.187468,.528513,.177807,.38788,-.198488,.537713,.196072,.405133,-.209545,.547999,.21605,.423845,-.220724,.55759,.237484,.443777,-.231518,.566246,.26039,.464824,-.242035,.574326,.284835,.486635,-.251898,.58037,.310518,.51012,-.261304,.58568,.337678,.535301,-.270384,.590197,.366242,.559193,-.27841,.590569,.395873,.583544,-.285325,.588161,.426857,.608834,-.291113,.584249,.459477,.635753,-.294882,.57763,.494734,.664367,-.297088,.569479,.532023,.689688,-.297364,.555064,.569629,.715732,-.295949,.539522,.608124,.741307,-.292259,.521613,.646231,.764949,-.287063,.49969,.684938,.788599,-.28012,.476747,.723548,.81048,-.27153,.45116,.761135,.831372,-.261289,.424101,.798916,.850092,-.249559,.39443,.835952,.867777,-.236348,.363849,.871606,.884632,-.221569,.332477,.907843,.90047,-.20618,.300667,.944187,.914524,-.188771,.266552,.981371,.926892,-.168362,.232349,1.01841,.937951,-.146761,.199359,1.05308,.947236,-.123813,.1675,1.0839,.954367,-.099984,.136166,1.11047,.963907,-.0759278,.103808,1.13414,.976218,-.0511367,.0697061,1.15575,.988772,-.0267415,.0352529,1.17531,.999888,-520778e-9,289926e-9,1.19389,.263546,-883274e-11,.441896,526783e-11,.262352,-221849e-9,.439889,132311e-9,.262325,-886683e-9,.439848,528824e-9,.26228,-.00199476,.439765,.00118975,.262372,-.00354671,.439922,.00211568,.26239,-.00554141,.439941,.00330652,.262412,-.00797888,.439961,.00476346,.262453,-.0108584,.440002,.00648818,.262528,-.0141788,.440085,.0084835,.262615,-.017938,.440166,.0107533,.262744,-.0221346,.440291,.0133044,.262939,-.026762,.440493,.0161445,.263277,-.0317573,.440889,.0192974,.26368,-.0371832,.441338,.0227699,.264106,-.0430371,.441753,.0265698,.264624,-.0493035,.442227,.0307178,.265378,-.0558669,.442985,.0352616,.266253,-.0628718,.443795,.0401968,.267478,-.0701569,.445008,.04559,.269062,-.077845,.446599,.0514539,.270926,-.0857941,.448349,.0578382,.273693,-.0940773,.451221,.0648363,.276746,-.102704,.454097,.0724389,.281693,-.111735,.459517,.0808744,.287335,-.121004,.46531,.0901551,.29448,-.130734,.472605,.100371,.30257,-.140777,.480251,.111644,.312465,-.15111,.489444,.124111,.324856,-.16189,.500919,.137979,.33774,-.172946,.511317,.153163,.35255,-.184152,.522684,.169817,.367786,-.19522,.53248,.187886,.385474,-.20632,.543326,.207634,.404976,-.217744,.554109,.229165,.425203,-.228691,.563395,.252068,.446704,-.239299,.571565,.276471,.468951,-.249348,.577935,.302323,.493487,-.258933,.584309,.329882,.517861,-.268009,.58773,.358525,.543309,-.276238,.589612,.388585,.569704,-.28356,.589294,.419787,.594871,-.289497,.585137,.452114,.622555,-.294452,.580356,.486466,.651167,-.296918,.57185,.523079,.677332,-.297647,.558428,.5611,.703718,-.296321,.542232,.599592,.730262,-.293339,.524541,.639138,.754304,-.288036,.502691,.677978,.778051,-.281018,.479212,.716537,.801557,-.272414,.454071,.75586,.822559,-.262419,.425952,.794477,.843051,-.250702,.397313,.832664,.86232,-.237264,.366534,.869876,.879044,-.222716,.334816,.906973,.896362,-.206827,.303143,.943558,.910342,-.189659,.269699,.979759,.924119,-.171108,.236411,1.01718,.935374,-.149579,.202224,1.05289,.944295,-.126295,.16989,1.08496,.952227,-.101511,.138089,1.11256,.962041,-.0766392,.105053,1.1375,.97528,-.0511967,.070329,1.15983,.988476,-.025463,.0351268,1.17987,.999962,286808e-10,145564e-10,1.19901,.227089,-841413e-11,.404216,472707e-11,.239725,-215083e-9,.426708,120833e-9,.239904,-860718e-9,.427028,483555e-9,.239911,-.00193661,.427039,.00108806,.239914,-.00344276,.42704,.00193457,.239933,-.00537907,.427064,.00302363,.239944,-.00774482,.427065,.00435604,.239993,-.01054,.427122,.00593398,.240052,-.0137626,.427179,.00775987,.240148,-.0174115,.427279,.00983854,.240278,-.021484,.42741,.0121763,.240472,-.0259729,.427618,.0147827,.240839,-.0308131,.428086,.0176837,.241201,-.0360893,.428482,.0208775,.241626,-.0417723,.428907,.0243821,.242207,-.0478337,.42952,.0282228,.24298,-.0542199,.430332,.0324333,.243881,-.0610015,.431222,.0370252,.245123,-.0680874,.432512,.0420535,.24667,-.0755482,.434088,.0475414,.248779,-.0832873,.436323,.0535542,.251665,-.0913546,.439509,.0601716,.255305,-.0998489,.443478,.0674282,.260049,-.108576,.448713,.0754673,.266192,-.117754,.455524,.084339,.273158,-.127294,.4627,.0941683,.282131,-.137311,.472068,.10515,.293332,-.147736,.483565,.117402,.304667,-.158357,.493702,.130824,.317785,-.169274,.504708,.145724,.333245,-.180595,.517107,.16215,.349843,-.191892,.528849,.180149,.367944,-.203168,.540301,.199746,.387579,-.214443,.551514,.221047,.408247,-.225624,.560906,.243981,.43014,-.236422,.56959,.268513,.452669,-.24654,.576098,.294409,.476196,-.256157,.580925,.322002,.501157,-.265289,.584839,.351052,.527632,-.273671,.587614,.3812,.555754,-.281254,.589119,.412994,.581682,-.287448,.585204,.445498,.608196,-.292614,.579006,.479505,.635661,-.296068,.571297,.514643,.664999,-.297395,.560855,.552213,.691039,-.296645,.544525,.591365,.7179,-.293785,.526535,.630883,.744059,-.289089,.50545,.670932,.76863,-.282239,.482514,.710904,.793273,-.273688,.457246,.750259,.814731,-.26328,.428872,.78948,.835603,-.251526,.399384,.828597,.85489,-.238339,.368811,.866892,.872828,-.223607,.336617,.90563,.889462,-.207538,.303997,.943538,.904929,-.190297,.270812,.980591,.919101,-.172034,.237453,1.01935,.930536,-.152058,.204431,1.05498,.941223,-.129515,.172495,1.08717,.94982,-.104263,.140175,1.11551,.960592,-.0781944,.106465,1.14098,.974629,-.051688,.0711592,1.16418,.98811,-.0253929,.0354432,1.18465,1.00004,804378e-9,-330876e-9,1.20462,.214668,-821282e-11,.406619,433582e-11,.218053,-208144e-9,.413025,109887e-9,.217987,-832212e-9,.412901,439362e-9,.217971,-.00187246,.412876,988623e-9,.217968,-.00332855,.41286,.00175772,.217985,-.00520055,.412882,.00274729,.218014,-.00748814,.412916,.00395842,.218054,-.0101901,.412957,.00539274,.218106,-.0133057,.413005,.00705348,.218217,-.0168342,.413139,.00894581,.218338,-.0207707,.413258,.0110754,.21855,-.0251001,.413509,.0134551,.218913,-.0297861,.413992,.0161081,.219265,-.0348956,.414383,.0190307,.219696,-.0403909,.414839,.0222458,.220329,-.0462003,.415567,.025792,.220989,-.0524208,.41621,.0296637,.222027,-.058948,.417385,.0339323,.223301,-.0658208,.418779,.0386055,.224988,-.0730347,.420665,.0437355,.227211,-.0805274,.423198,.0493844,.230131,-.088395,.426566,.0556135,.233908,-.0966208,.43091,.0624829,.239092,-.105223,.437148,.0701636,.245315,-.11424,.444302,.0786949,.253166,-.12368,.453262,.0882382,.262374,-.133569,.463211,.0988682,.273145,-.143836,.474271,.110727,.285512,-.154577,.4863,.123945,.299512,-.165501,.498817,.138581,.314287,-.176698,.510341,.154676,.331083,-.188066,.522583,.172459,.349615,-.199597,.534879,.191979,.369318,-.210843,.546083,.21309,.390377,-.222068,.5562,.235998,.412411,-.233059,.564704,.260518,.435715,-.24357,.572314,.286795,.461196,-.253356,.579395,.314559,.485587,-.262362,.581985,.343581,.511908,-.270895,.584347,.374367,.539798,-.278452,.58505,.406015,.567974,-.284877,.583344,.439168,.594303,-.290124,.577348,.473005,.622951,-.294183,.570751,.508534,.652404,-.296389,.561541,.544764,.679291,-.296605,.546426,.582927,.706437,-.294095,.528599,.622681,.734485,-.28978,.508676,.663567,.758841,-.283363,.484768,.704092,.78537,-.275015,.460434,.745101,.807315,-.264689,.432166,.784712,.8271,-.252597,.401807,.824241,.849191,-.239154,.371458,.863803,.867046,-.224451,.338873,.903063,.8852,-.208342,.306175,.942763,.901771,-.190684,.272759,.981559,.915958,-.172105,.239306,1.02048,.928046,-.152214,.206071,1.05765,.939961,-.130247,.17367,1.08999,.948711,-.10672,.142201,1.11829,.959305,-.0808688,.108454,1.14467,.973009,-.0539145,.0728109,1.16839,.987631,-.0262947,.0360625,1.19004,.999978,.00132758,-559424e-9,1.21058,.193925,-793421e-11,.391974,392537e-11,.196746,-200315e-9,.397675,991033e-10,.19667,-801099e-9,.397521,396342e-9,.196633,-.00180246,.397445,891829e-9,.196654,-.00320443,.397482,.00158582,.196659,-.00500647,.39748,.00247867,.196683,-.0072086,.397506,.00357167,.196728,-.00981001,.397562,.00486675,.196792,-.0128096,.397633,.00636707,.19689,-.0162055,.397746,.00807752,.197017,-.0199943,.397884,.0100052,.19729,-.024139,.39827,.0121691,.197583,-.0286671,.398639,.0145755,.197927,-.0335858,.399034,.0172355,.198383,-.0388806,.399554,.0201718,.199002,-.0444736,.400289,.0234194,.199739,-.0504583,.401111,.026984,.200784,-.056729,.402349,.0309217,.202075,-.0633643,.403841,.0352496,.203898,-.0703247,.406076,.0400313,.206199,-.0775565,.408841,.0453282,.209252,-.085184,.41259,.0511794,.213638,-.0931994,.418288,.0577459,.21881,-.101617,.424681,.0650508,.225642,-.11052,.433429,.0732759,.233717,-.119772,.442897,.0824683,.242823,-.129505,.452888,.0927484,.254772,-.139906,.466407,.104417,.266603,-.150402,.477413,.117211,.28073,-.161395,.490519,.131598,.295399,-.172465,.50201,.147407,.312705,-.183982,.515311,.165031,.331335,-.195532,.52786,.184336,.351037,-.206971,.5392,.205361,.372175,-.218117,.54941,.228043,.394548,-.229327,.558642,.25267,.419598,-.240052,.567861,.279071,.443922,-.249937,.573332,.306882,.471495,-.259407,.58013,.33661,.496769,-.267749,.580564,.367328,.524951,-.275524,.581696,.399753,.55318,-.282148,.579885,.433134,.581577,-.287533,.575471,.467534,.609231,-.291612,.567445,.502943,.637478,-.293911,.557657,.53871,.667795,-.295096,.546535,.576568,.694272,-.294073,.529561,.614929,.722937,-.290386,.510561,.655909,.749682,-.284481,.487846,.697663,.774754,-.276188,.462487,.738515,.799301,-.266215,.43481,.779802,.820762,-.254116,.404879,.820045,.843231,-.240393,.374559,.860294,.861857,-.225503,.341582,.900965,.880815,-.209382,.308778,.941727,.89766,-.19155,.275232,.980916,.912926,-.172346,.240938,1.02162,.926391,-.151799,.207223,1.0597,.938429,-.129968,.17484,1.09291,.947834,-.10651,.142984,1.12248,.958432,-.0824098,.109902,1.149,.972402,-.0565242,.0744454,1.1733,.987191,-.028427,.0373794,1.19538,.999975,385685e-10,-4203e-8,1.21676,.178114,-766075e-11,.385418,354027e-11,.176074,-191966e-9,.381002,887135e-10,.17601,-767549e-9,.380861,354715e-9,.17598,-.00172696,.380798,798168e-9,.175994,-.00307012,.380824,.00141928,.176017,-.00479684,.380858,.00221859,.176019,-.00690648,.380839,.00319714,.176072,-.00939888,.380913,.0043572,.176131,-.0122726,.380979,.005702,.176239,-.0155264,.38112,.00723689,.176371,-.0191551,.381272,.00896907,.176638,-.023117,.381669,.0109194,.176912,-.0274633,.382015,.0130903,.177279,-.032173,.382476,.0154949,.17774,-.0372219,.383041,.0181669,.178344,-.0426132,.38378,.0211209,.179153,-.0483309,.384773,.0243899,.180197,-.0543447,.386076,.0280062,.181581,-.0607122,.387809,.032004,.18344,-.0673855,.390205,.036453,.186139,-.0743989,.393944,.0414162,.189432,-.0817731,.39832,.0469394,.193795,-.0895464,.404188,.0531442,.199641,-.0978264,.4121,.0601374,.206679,-.106499,.421425,.0680078,.214865,-.115654,.431504,.076919,.224406,-.125268,.442526,.0868835,.235876,-.135475,.455465,.0981875,.248335,-.146023,.4681,.110759,.262868,-.157016,.482069,.124885,.278962,-.168245,.496182,.140645,.295082,-.17958,.507401,.157838,.313738,-.191227,.520252,.17695,.333573,-.202718,.531708,.197817,.356433,-.214424,.544509,.220785,.378853,-.225492,.55373,.245306,.402717,-.236236,.561348,.271593,.428375,-.246568,.568538,.299776,.454724,-.255941,.573462,.329433,.482291,-.264511,.576356,.360598,.509706,-.272129,.576446,.393204,.538805,-.278979,.575298,.427227,.568919,-.284528,.572154,.462157,.596804,-.288801,.564691,.497997,.625987,-.291334,.555134,.534467,.656414,-.292722,.545051,.571736,.683916,-.292185,.528813,.610158,.711809,-.290043,.51106,.649061,.739547,-.285246,.490103,.690081,.766914,-.277647,.465523,.732554,.791375,-.267603,.437718,.773982,.814772,-.256109,.40882,.81609,.836691,-.242281,.377823,.856849,.856984,-.227155,.34496,.898363,.876332,-.210395,.311335,.939471,.894988,-.192612,.277703,.980799,.911113,-.173236,.243019,1.02215,.924092,-.152258,.209037,1.06139,.936828,-.129575,.175909,1.09635,.946869,-.10594,.143852,1.12707,.958284,-.081318,.110289,1.15419,.972325,-.0556133,.0747232,1.17909,.986878,-.0297899,.0383149,1.20163,.999936,-.00197169,912402e-9,1.22338,.151174,-720365e-11,.351531,309789e-11,.155594,-18279e-8,.361806,78608e-9,.156099,-731569e-9,.362982,314615e-9,.156053,-.00164578,.362869,707845e-9,.156093,-.0029261,.362961,.00125884,.156099,-.00457155,.362959,.00196783,.15612,-.00658224,.362982,.00283622,.156168,-.00895774,.363048,.00386625,.156221,-.0116962,.363101,.00506109,.156324,-.0147973,.363241,.00642675,.156476,-.0182503,.363448,.00797175,.156731,-.0220266,.36384,.00971484,.156994,-.026176,.364179,.0116575,.157341,-.0306701,.36462,.0138207,.157867,-.0354591,.365364,.0162356,.15846,-.0406141,.366111,.0189092,.159308,-.0460519,.367248,.021885,.160426,-.0518096,.368767,.0252004,.161877,-.0578906,.370745,.0288825,.163995,-.0642812,.373831,.0330139,.16655,-.0710067,.377366,.0376283,.170237,-.0781522,.382799,.0428493,.175096,-.0857172,.389915,.0487324,.181069,-.0938025,.398487,.0554214,.188487,-.102363,.408799,.0630189,.197029,-.111343,.419991,.071634,.206684,-.120812,.431455,.0812797,.218698,-.131033,.445746,.0923651,.230726,-.141373,.457471,.104545,.245516,-.152387,.472388,.118449,.261551,-.163628,.486671,.133923,.277437,-.174814,.49762,.150849,.296662,-.186713,.51162,.169924,.31795,-.198513,.525435,.190848,.339422,-.210119,.536267,.213504,.362143,-.221354,.545982,.237947,.387198,-.23224,.555364,.264427,.412349,-.24257,.561489,.292519,.439274,-.252284,.566903,.322561,.466779,-.261023,.569614,.353952,.496011,-.26899,.571589,.387278,.524964,-.275498,.570325,.421356,.556518,-.281449,.568792,.457314,.584363,-.285526,.560268,.493199,.614214,-.28844,.55205,.530276,.645684,-.289777,.541906,.56855,.673446,-.289722,.526464,.606927,.701924,-.287792,.509872,.645945,.73037,-.284315,.490649,.685564,.757405,-.278804,.467964,.726511,.784025,-.269543,.441468,.768601,.808255,-.258117,.41216,.811321,.830739,-.244728,.380606,.853496,.851914,-.229428,.348111,.895374,.872586,-.212508,.314732,.937674,.891581,-.194025,.280338,.979869,.907641,-.174711,.245203,1.02253,.922233,-.153509,.21077,1.06371,.935878,-.130418,.177399,1.09972,.946338,-.105558,.144507,1.13124,.957265,-.080059,.110508,1.15973,.971668,-.0539766,.0742311,1.18515,.9866,-.0277101,.0375224,1.20858,1.00021,-515531e-9,135226e-9,1.23135,.137468,-686011e-11,.345041,273315e-11,.13703,-173378e-9,.343936,690761e-10,.136986,-693048e-9,.34383,276126e-9,.136964,-.00155931,.343761,621337e-9,.137003,-.00277211,.343863,.00110494,.137012,-.00433103,.343868,.00172744,.137043,-.00623606,.343916,.00249022,.13709,-.0084868,.343986,.00339559,.137145,-.0110814,.344045,.00444687,.137242,-.0140187,.344177,.00565007,.137431,-.0172713,.344491,.00701868,.137644,-.0208605,.344805,.00856042,.13791,-.024792,.345172,.0102863,.138295,-.0290461,.345734,.0122185,.138764,-.0335957,.346371,.0143771,.139415,-.038467,.347298,.0167894,.140272,-.0436176,.348527,.0194895,.141457,-.0491016,.350276,.0225043,.14303,-.0548764,.352646,.0258962,.145289,-.0610096,.356206,.0297168,.148502,-.0674777,.361488,.0340562,.152188,-.074345,.367103,.0389534,.157359,-.0817442,.375247,.0445541,.16379,-.0896334,.385064,.0509535,.171376,-.098005,.396082,.0582611,.179901,-.106817,.407418,.06654,.189892,-.116239,.420031,.075994,.201838,-.12627,.434321,.0867239,.214311,-.136701,.447631,.0987517,.228902,-.147616,.462046,.112353,.245107,-.158871,.476942,.127605,.262292,-.170261,.490285,.144469,.281215,-.182017,.503783,.163282,.301058,-.193729,.515505,.183873,.322752,-.205512,.52682,.206466,.347547,-.217214,.539473,.231194,.370969,-.227966,.546625,.257288,.397533,-.238555,.55472,.285789,.42398,-.248278,.559468,.315746,.452928,-.257422,.564095,.347724,.482121,-.265306,.565426,.380922,.510438,-.272043,.563205,.415639,.541188,-.277614,.561087,.451702,.571667,-.281927,.554922,.48845,.602432,-.285015,.546838,.526442,.634126,-.286512,.537415,.564896,.662816,-.286388,.522906,.604037,.692411,-.284734,.507003,.643795,.720946,-.281297,.488398,.68298,.748293,-.276262,.466353,.723466,.776931,-.269978,.443573,.764565,.801065,-.260305,.415279,.805838,.825843,-.247426,.384773,.849985,.84807,-.232437,.352555,.893174,.869122,-.215806,.318642,.936564,.888963,-.197307,.28381,.980253,.905547,-.177203,.247888,1.02463,.918554,-.155542,.212904,1.06714,.931395,-.131948,.1787,1.10451,.941749,-.106723,.145902,1.13694,.954551,-.0804939,.111193,1.1666,.970279,-.0534239,.0744697,1.19249,.986117,-.0257452,.0368788,1.21665,.999938,.00190634,-.0010291,1.23981,.118493,-647439e-11,.32272,23772e-10,.118765,-163023e-9,.323456,598573e-10,.118772,-65212e-8,.323477,239447e-9,.118843,-.00146741,.323657,538881e-9,.118804,-.00260846,.323553,95826e-8,.118826,-.00407576,.323595,.00149845,.118846,-.00586826,.323617,.00216047,.118886,-.00798578,.32367,.00294679,.118947,-.0104273,.323753,.00386124,.119055,-.0131909,.323922,.00490999,.119241,-.0162444,.324251,.00610804,.11944,-.0196339,.324544,.00745805,.119739,-.0233378,.325026,.00897805,.12011,-.0273179,.325586,.0106895,.120571,-.0316143,.326231,.0126073,.12124,-.0361939,.327264,.0147654,.122162,-.0410511,.328733,.0172001,.123378,-.0462233,.330659,.0199375,.125183,-.0517109,.333754,.0230498,.127832,-.0575652,.338507,.026597,.130909,-.0637441,.343666,.0306345,.135221,-.0704302,.351063,.035273,.14082,-.0776364,.360604,.0406137,.146781,-.0852293,.369638,.0466788,.155121,-.0935351,.3827,.0537628,.16398,-.102234,.39522,.0617985,.173926,-.111465,.40793,.07097,.185137,-.121296,.42105,.0813426,.19826,-.13169,.435735,.0931596,.212938,-.142614,.450932,.106547,.229046,-.153884,.465726,.121575,.246246,-.165382,.479461,.138286,.264637,-.176806,.492106,.15666,.284959,-.188793,.504774,.17728,.308157,-.200763,.518805,.19988,.330951,-.21239,.528231,.224293,.3549,-.223521,.536376,.250541,.381502,-.234169,.544846,.278902,.409529,-.244077,.551717,.309227,.437523,-.253363,.55517,.341426,.467624,-.261659,.557772,.37518,.497268,-.268498,.556442,.41007,.528294,-.274018,.553915,.446445,.559053,-.278169,.549153,.483779,.589329,-.281229,.539878,.522249,.622503,-.282902,.53162,.561754,.652382,-.282815,.518119,.601544,.681847,-.281247,.502187,.641574,.712285,-.277986,.484824,.682633,.740094,-.273017,.463483,.723426,.768478,-.266692,.441299,.763747,.794556,-.258358,.415238,.805565,.819408,-.248807,.386912,.847254,.843411,-.236214,.356165,.891091,.862397,-.219794,.320562,.936174,.883113,-.201768,.285322,.982562,.90023,-.181672,.249713,1.02862,.915192,-.159279,.214546,1.07163,.928458,-.134725,.180285,1.10995,.94069,-.10913,.147119,1.14354,.953409,-.0821315,.112492,1.17372,.969537,-.0542677,.0752014,1.20043,.985612,-.0259096,.0370361,1.22528,.999835,.00298198,-.00151801,1.24959,.10097,-602574e-11,.300277,202619e-11,.101577,-152164e-9,.302077,511662e-10,.101572,-608889e-9,.302066,204751e-9,.101566,-.00136997,.302047,460753e-9,.101592,-.00243557,.302114,819497e-9,.101608,-.0038053,.30214,.00128154,.101627,-.00547906,.30216,.0018483,.101669,-.00745647,.302224,.00252223,.101732,-.00973615,.302318,.00330716,.101844,-.0123097,.302513,.00421061,.102025,-.0151681,.30285,.00524481,.102224,-.0183334,.303166,.0064154,.102515,-.0217819,.303654,.00774063,.102886,-.0255067,.304243,.0092398,.103395,-.029514,.305089,.0109339,.104109,-.0337912,.306301,.0128561,.105074,-.0383565,.30798,.0150338,.10654,-.0432132,.310726,.0175228,.108478,-.0484244,.314351,.0203648,.111015,-.0539339,.319032,.0236325,.114682,-.0598885,.32605,.0274188,.11911,-.0663375,.334109,.0317905,.124736,-.0733011,.344013,.0368502,.131479,-.0807744,.355358,.0427104,.139283,-.0888204,.367614,.0494788,.148054,-.0973394,.380072,.0572367,.159037,-.10665,.395678,.0662704,.169794,-.116221,.40795,.0763192,.18314,-.126632,.423546,.087956,.197515,-.137383,.438213,.101042,.213514,-.148641,.453248,.115827,.23065,-.160117,.46688,.132283,.249148,-.171807,.479962,.150644,.270219,-.183695,.494618,.171073,.292338,-.195574,.506937,.193378,.314999,-.207205,.516463,.217585,.340991,-.218955,.528123,.24428,.367982,-.229917,.537025,.272784,.39432,-.239737,.541627,.302742,.423364,-.249048,.546466,.335112,.453751,-.257329,.549466,.369032,.48416,-.264623,.549503,.404577,.515262,-.270411,.547008,.441337,.547036,-.274581,.542249,.479162,.576614,-.277266,.533015,.517904,.611143,-.279144,.525512,.558508,.640989,-.279001,.51154,.598995,.671182,-.277324,.495641,.639935,.700848,-.273908,.477526,.681017,.729862,-.269063,.457955,.722764,.758273,-.262282,.434846,.764349,.784121,-.254281,.409203,.806206,.809798,-.24505,.382694,.848617,.834953,-.233861,.354034,.892445,.856817,-.221308,.321764,.936263,.877609,-.205996,.288118,.982401,.897489,-.186702,.253277,1.02975,.913792,-.164618,.217963,1.07488,.92785,-.140023,.183221,1.11487,.940378,-.11328,.149385,1.14947,.95273,-.0853958,.114152,1.1807,.969059,-.0568698,.0769845,1.20912,.985574,-.0276502,.0381186,1.23498,.999943,.00239052,-.00126861,1.25987,.0852715,-560067e-11,.279021,171162e-11,.0854143,-140871e-9,.279483,430516e-10,.0854191,-563385e-9,.2795,172184e-9,.0854188,-.00126753,.279493,387464e-9,.0854229,-.00225337,.279501,68918e-8,.0854443,-.00352086,.279549,.00107803,.0854697,-.00506962,.279591,.00155536,.0855093,-.00689873,.279652,.00212354,.0855724,-.00900821,.279752,.00278703,.0856991,-.0113799,.280011,.0035551,.085855,-.0140314,.280297,.00443449,.0860682,-.016963,.280682,.00543636,.086344,-.0201438,.281159,.0065788,.0867426,-.0235999,.281886,.00787977,.087239,-.0273069,.282745,.0093606,.0879815,-.031269,.284139,.011056,.0891258,-.035531,.28647,.0130065,.0906909,-.0400947,.289708,.0152495,.0927624,-.0449638,.293904,.0178454,.0958376,-.0502427,.300471,.0208915,.0995827,-.0559514,.30806,.0244247,.104526,-.0622152,.317874,.0285721,.110532,-.0690046,.329332,.0334227,.117385,-.0763068,.341217,.0390466,.12522,-.084184,.353968,.0455786,.134037,-.0925248,.366797,.0530773,.144014,-.101487,.380209,.0617424,.156013,-.111273,.395956,.071777,.168872,-.121431,.41053,.0830905,.183089,-.132105,.425073,.0959341,.198763,-.143286,.439833,.110448,.216159,-.154841,.454507,.126769,.234859,-.166588,.468368,.14495,.255879,-.178626,.482846,.165233,.27677,-.190218,.493489,.187217,.301184,-.202227,.506549,.211659,.325852,-.213764,.5158,.237922,.352824,-.22487,.525442,.26632,.380882,-.235246,.532487,.296691,.410137,-.244847,.537703,.329179,.439787,-.253122,.540361,.363135,.472291,-.260517,.542734,.399222,.501856,-.266519,.538826,.436352,.534816,-.270905,.535152,.474505,.565069,-.273826,.525979,.513988,.597154,-.275333,.516394,.554852,.630473,-.275314,.506206,.596592,.660574,-.273323,.489769,.638117,.692015,-.270008,.472578,.680457,.720647,-.265001,.452134,.723008,.750528,-.258311,.430344,.765954,.777568,-.250046,.405624,.809012,.80387,-.240114,.378339,.852425,.828439,-.228737,.349877,.895346,.851472,-.216632,.318968,.940695,.873906,-.202782,.287489,.987235,.89467,-.187059,.254394,1.03348,.912281,-.168818,.221294,1.07812,.927358,-.146494,.18675,1.11928,.940385,-.120009,.152322,1.15609,.952672,-.0917183,.117514,1.18875,.968496,-.0620321,.0797405,1.21821,.985236,-.0314945,.0402383,1.24523,.99998,-575153e-9,110644e-9,1.27133,.0702429,-512222e-11,.255273,140947e-11,.0702981,-128826e-9,.255469,354488e-10,.0703691,-515562e-9,.255727,141874e-9,.0703805,-.00116,.255754,31929e-8,.0703961,-.00206224,.255813,567999e-9,.0704102,-.00322223,.255839,88871e-8,.0704298,-.00463928,.255863,.00128272,.0704759,-.00631375,.255953,.00175283,.0705434,-.00824317,.256079,.00230342,.0706693,-.010412,.25636,.0029443,.0708189,-.0128439,.256647,.00368031,.0710364,-.0155177,.257084,.00452614,.0713223,-.0184374,.257637,.00549706,.0717182,-.0216002,.258416,.00661246,.072321,-.0249966,.259699,.00790147,.0731446,-.0286566,.261475,.0093884,.0743352,-.0325888,.264132,.0111186,.0760676,-.036843,.26815,.013145,.078454,-.0414292,.273636,.0155251,.0818618,-.0464634,.281653,.0183525,.0857382,-.0519478,.289992,.0216642,.0908131,-.0579836,.30066,.0255956,.0967512,-.0645124,.312204,.0301954,.103717,-.0716505,.325001,.0356017,.111596,-.0793232,.338129,.041896,.120933,-.087645,.352853,.0492447,.130787,-.096492,.366192,.0576749,.142311,-.105973,.380864,.0673969,.155344,-.116182,.396575,.0785899,.169535,-.126815,.411443,.0912377,.185173,-.138015,.426256,.105607,.201755,-.149325,.439607,.121551,.221334,-.161207,.455467,.139608,.241461,-.173162,.469096,.159591,.26294,-.18504,.481014,.18156,.286776,-.196881,.493291,.205781,.311596,-.208311,.503556,.231819,.338667,-.219671,.513268,.260274,.366021,-.230451,.519414,.290862,.395875,-.240131,.526766,.323196,.425564,-.248566,.52905,.357071,.457094,-.256195,.530796,.393262,.488286,-.262331,.528703,.430797,.522291,-.267141,.52727,.470231,.554172,-.270411,.519848,.510477,.586427,-.271986,.510307,.551594,.619638,-.27192,.499158,.593849,.650656,-.269817,.483852,.636314,.68284,-.266267,.467515,.679679,.714356,-.26113,.44931,.723884,.742717,-.254067,.425789,.767245,.770894,-.245652,.401144,.811819,.797358,-.235554,.374224,.856315,.823377,-.223896,.346167,.901077,.847456,-.210865,.316056,.946502,.870697,-.196574,.284503,.993711,.891068,-.180814,.251628,1.04134,.909267,-.163314,.219065,1.08609,.925653,-.143304,.186446,1.12702,.940017,-.121322,.153416,1.16371,.952398,-.0973872,.120334,1.19712,.967568,-.0698785,.08352,1.22791,.984772,-.0390031,.0439209,1.25672,1.00026,-.0070087,.00315668,1.28428,.0556653,-459654e-11,.227325,112556e-11,.0565238,-116382e-9,.230826,284985e-10,.0565717,-465666e-9,.231026,114036e-9,.0565859,-.00104773,.231079,256656e-9,.0565761,-.00186255,.231025,45663e-8,.0565913,-.00291002,.231058,714664e-9,.0566108,-.00418998,.231085,.00103224,.0566532,-.00570206,.231169,.00141202,.0567473,-.00743666,.231417,.00186018,.0568567,-.00940298,.231661,.00238264,.0569859,-.0115991,.231895,.00298699,.0572221,-.0140096,.232456,.00368957,.057519,-.0166508,.233096,.00450303,.0579534,-.01951,.234094,.00544945,.0585922,-.0225991,.235629,.00655564,.0595647,-.0259416,.238106,.00785724,.0609109,-.0295661,.241557,.00939127,.0628751,-.0335126,.246652,.0112198,.0656908,-.0378604,.254091,.0134168,.0691347,-.0426543,.262666,.0160374,.0732165,-.0478967,.272029,.0191514,.0782863,-.0536716,.283007,.0228597,.0843973,-.0600683,.295732,.0272829,.0913598,-.0670095,.308779,.032484,.0994407,-.0745516,.322886,.0385886,.108189,-.082712,.336408,.0457133,.118574,-.0914927,.351692,.0539832,.129989,-.100854,.366502,.0635162,.142722,-.110837,.381675,.0744386,.156654,-.121353,.3963,.0868483,.172151,-.132414,.411477,.100963,.188712,-.143809,.42508,.116795,.208093,-.155765,.441328,.134715,.227936,-.167608,.454328,.154396,.249495,-.179579,.467235,.176179,.27362,-.191488,.480248,.200193,.296371,-.202618,.487886,.225775,.324234,-.214133,.499632,.25441,.353049,-.225212,.509532,.285077,.381785,-.234875,.514265,.317047,.414038,-.244205,.521282,.351874,.445251,-.252145,.522931,.388279,.476819,-.258433,.520947,.425825,.509209,-.263411,.517669,.465104,.542759,-.266732,.512841,.505741,.574822,-.268263,.503317,.547611,.609324,-.268489,.493035,.590953,.641772,-.266941,.478816,.63488,.674049,-.263297,.462863,.679072,.705071,-.257618,.442931,.723487,.734709,-.250625,.421299,.768708,.763704,-.24179,.397085,.814375,.791818,-.231115,.370577,.859907,.817439,-.21922,.34232,.906715,.843202,-.205658,.312627,.953943,.866639,-.190563,.280933,1.00185,.888129,-.173978,.248393,1.05105,.907239,-.155485,.216007,1.09704,.923893,-.134782,.183233,1.13857,.938882,-.11249,.150376,1.17539,.952464,-.0890706,.117177,1.20924,.968529,-.0646523,.0813095,1.24055,.984763,-.038606,.0439378,1.27018,1.00053,-.01238,.00598668,1.29873,.0437928,-409594e-11,.204012,879224e-12,.0440166,-103395e-9,.205049,221946e-10,.0440529,-413633e-9,.205225,887981e-10,.0440493,-930594e-9,.2052,199858e-9,.0439884,-.00165352,.204901,355495e-9,.0440716,-.0025849,.205255,556983e-9,.0440968,-.00372222,.205311,805326e-9,.0441359,-.00506478,.205391,.00110333,.0442231,-.00660384,.205638,.00145768,.0443254,-.00835246,.205877,.00187275,.0444832,-.0102992,.20627,.00235938,.0447001,-.0124449,.206796,.0029299,.0450168,-.0147935,.207593,.0036005,.0454816,-.017336,.208819,.00439246,.0462446,-.0201156,.211036,.00533864,.0473694,-.0231568,.214388,.00646984,.0490191,-.0264941,.219357,.00783856,.0512776,-.030184,.226061,.00950182,.0541279,-.0342661,.234094,.0115156,.0578989,-.0388539,.244297,.0139687,.0620835,-.0438735,.254457,.0169015,.0673497,-.04951,.266706,.0204554,.0731759,-.0556263,.278753,.0246606,.0803937,-.0624585,.29309,.0297126,.0879287,-.0697556,.305856,.0355868,.0970669,-.0778795,.321059,.0425768,.106508,-.0863541,.333873,.05056,.11776,-.0955935,.349008,.0598972,.130081,-.105438,.363776,.0706314,.144454,-.115899,.380112,.0828822,.1596,-.126827,.394843,.0967611,.176097,-.138161,.409033,.112381,.194726,-.149904,.424257,.129952,.213944,-.161675,.436945,.149333,.235516,-.173659,.450176,.170892,.260564,-.185963,.466305,.194984,.285183,-.197582,.477328,.220805,.311095,-.208697,.486566,.248694,.338924,-.219519,.494811,.279015,.369757,-.229766,.504065,.311725,.3996,-.238879,.507909,.345844,.430484,-.246802,.509805,.381749,.46413,-.253924,.511436,.420251,.497077,-.259319,.508787,.459957,.530434,-.263297,.50394,.501356,.565725,-.265619,.49804,.544252,.599254,-.265842,.487346,.587856,.631251,-.263978,.472975,.631969,.663972,-.26043,.457135,.677471,.697724,-.255358,.439844,.723744,.727725,-.248308,.417872,.770653,.756417,-.239181,.39273,.817357,.785419,-.22814,.367839,.864221,.81266,-.215681,.339449,.912701,.839391,-.201623,.309279,.962419,.86366,-.185624,.278029,1.0122,.885028,-.16797,.245294,1.06186,.904639,-.148336,.212689,1.10934,.922048,-.12637,.179616,1.15063,.936952,-.102928,.146749,1.18885,.951895,-.0785268,.112733,1.22352,.967198,-.0530153,.0760056,1.25681,.984405,-.02649,.0383183,1.28762,1.00021,70019e-8,-20039e-8,1.31656,.0325964,-355447e-11,.176706,655682e-12,.0329333,-899174e-10,.178527,165869e-10,.0329181,-359637e-9,.178453,663498e-10,.0329085,-808991e-9,.178383,149332e-9,.0329181,-.00143826,.178394,265873e-9,.0329425,-.00224678,.178517,416597e-9,.0329511,-.00323575,.17849,603299e-9,.033011,-.00439875,.178695,829422e-9,.0330733,-.00574059,.178843,.00109908,.0331857,-.00725896,.179176,.00141933,.0333445,-.00895289,.179618,.0017999,.0335674,-.0108219,.180238,.00225316,.033939,-.0128687,.181417,.00279765,.0345239,-.015114,.183395,.0034564,.0354458,-.017596,.186616,.00425864,.0368313,-.0203524,.191547,.00524936,.0386115,-.0234105,.197508,.00647033,.0410303,-.0268509,.205395,.00798121,.0442245,-.0307481,.215365,.0098557,.0478659,-.0350863,.225595,.0121417,.0522416,-.0399506,.236946,.0149385,.0574513,-.045357,.249442,.0183189,.0631208,-.0512863,.261222,.0223644,.0701124,-.0579273,.275418,.0272418,.0777331,-.0650652,.288989,.0329458,.0862709,-.0728813,.302546,.0396819,.096103,-.081363,.317164,.04757,.106976,-.0904463,.331733,.0567012,.119175,-.100105,.34661,.067202,.132919,-.110375,.362249,.0792588,.147727,-.121115,.376978,.0928672,.163618,-.132299,.390681,.108228,.182234,-.143887,.406571,.125502,.201809,-.155827,.42042,.144836,.225041,-.168357,.438411,.166706,.247621,-.18004,.450368,.189909,.27097,-.191536,.460083,.215251,.296658,-.203024,.469765,.243164,.325892,-.214056,.481837,.273388,.35406,-.224104,.487474,.305344,.384372,-.233489,.492773,.339741,.41749,-.241874,.498451,.376287,.45013,-.248834,.499632,.414195,.481285,-.254658,.495233,.454077,.519183,-.259367,.496401,.496352,.551544,-.261818,.487686,.538798,.587349,-.262964,.479453,.583626,.621679,-.262128,.467709,.629451,.654991,-.258998,.452123,.67566,.686873,-.254119,.433495,.723248,.719801,-.246946,.413657,.771156,.750355,-.237709,.390366,.81989,.780033,-.226549,.364947,.868601,.809254,-.214186,.337256,.920034,.836576,-.199639,.307395,.971706,.861774,-.183169,.275431,1.02479,.885707,-.165111,.243431,1.07837,.904742,-.144363,.210921,1.12783,.915604,-.121305,.17647,1.17254,.930959,-.0962119,.143106,1.21012,.948404,-.069969,.108112,1.24474,.967012,-.0427586,.0708478,1.27718,.984183,-.0147043,.032335,1.3083,.999577,.0142165,-.00726867,1.3382,.0229227,-299799e-11,.148623,462391e-12,.0232194,-758796e-10,.15054,117033e-10,.0232315,-303636e-9,.15063,468397e-10,.0232354,-683189e-9,.150624,105472e-9,.0232092,-.0012136,.150445,187744e-9,.0232523,-.00189765,.150679,294847e-9,.0232828,-.00273247,.150789,428013e-9,.0233371,-.00371287,.150995,591134e-9,.0234015,-.00484794,.15118,787642e-9,.023514,-.00612877,.151562,.00102547,.023679,-.00756125,.152116,.00131351,.0239559,-.00914651,.153162,.00166594,.0244334,-.010904,.155133,.00210182,.025139,-.0128615,.158035,.00264406,.0262598,-.0150628,.162751,.00332923,.0277875,-.0175532,.168944,.00419773,.0298472,-.0203981,.176835,.00530034,.0325444,-.023655,.186686,.00669777,.0355581,-.0272982,.196248,.00842661,.0392841,-.0314457,.207352,.0105854,.0436815,-.0361157,.219279,.0132458,.0485272,-.0412932,.230728,.0164736,.0541574,-.0470337,.242994,.0203715,.0609479,-.0535002,.257042,.0250953,.0685228,-.0605409,.27102,.0306856,.0768042,-.0680553,.28406,.037193,.0864844,-.0765011,.299186,.0449795,.0969415,-.0852674,.3132,.0538316,.108478,-.0947333,.327138,.0641149,.121705,-.10481,.342345,.0759185,.136743,-.115474,.358472,.0894116,.152986,-.126536,.374067,.104562,.170397,-.138061,.388267,.121632,.191392,-.150203,.406467,.140996,.211566,-.161751,.418641,.161696,.233567,-.173407,.430418,.184557,.257769,-.185397,.44277,.210092,.28531,-.197048,.457191,.237827,.311726,-.20784,.464712,.267253,.340537,-.218345,.472539,.299332,.372921,-.228306,.482331,.333988,.402924,-.236665,.484378,.369722,.434475,-.244097,.484717,.407836,.469736,-.250547,.487093,.448465,.505045,-.25511,.485575,.490263,.540262,-.258444,.481225,.534495,.576347,-.259903,.473481,.579451,.608656,-.259572,.4603,.625604,.646679,-.257908,.450341,.674511,.679902,-.253663,.431561,.723269,.714159,-.247419,.412684,.773263,.745345,-.239122,.389388,.824182,.778248,-.228837,.365361,.876634,.807208,-.216197,.337667,.92945,.835019,-.201772,.307197,.985261,.860261,-.185291,.274205,1.04299,.877601,-.165809,.240178,1.09816,.898211,-.143897,.207571,1.14694,.915789,-.119513,.174904,1.19008,.931831,-.0932919,.141423,1.2297,.949244,-.0656528,.105603,1.26553,.967527,-.0370262,.0679551,1.29986,.984139,-.00730117,.0283133,1.33252,.999713,.0234648,-.0121785,1.36397,.0152135,-245447e-11,.122795,304092e-12,.0151652,-615778e-10,.122399,76292e-10,.0151181,-245948e-9,.122023,304802e-10,.0151203,-553394e-9,.12203,686634e-10,.015125,-983841e-9,.122037,122463e-9,.0151427,-.00153774,.12214,192706e-9,.0151708,-.0022103,.122237,281219e-9,.0152115,-.00300741,.12238,390804e-9,.0152877,-.00392494,.1227,526317e-9,.015412,-.00496597,.123244,69443e-8,.0156201,-.00613314,.124228,90547e-8,.0159658,-.00744113,.125945,.0011732,.0165674,-.00892546,.129098,.00151888,.017487,-.010627,.133865,.00197007,.018839,-.0126043,.140682,.0025637,.020554,-.0148814,.148534,.00333637,.0226727,-.0175123,.157381,.00433738,.0251879,-.0205266,.166685,.00561664,.0283635,-.0240319,.177796,.00725563,.0318694,-.0279432,.188251,.00928811,.0361044,-.0324313,.200038,.011835,.0406656,-.0373527,.210685,.0149146,.0463846,-.0430132,.224182,.0187254,.0525696,-.0491013,.23634,.0232283,.0598083,-.0559175,.250013,.0286521,.0679437,-.0633657,.263981,.0350634,.0771181,-.0714602,.278072,.0425882,.0881273,-.0803502,.29511,.0514487,.0996628,-.0896903,.309976,.0615766,.112702,-.099644,.325611,.0732139,.126488,-.109829,.339321,.0862324,.142625,-.120859,.35574,.101275,.15953,-.131956,.369845,.117892,.176991,-.143145,.38146,.136205,.199715,-.155292,.40052,.157252,.220787,-.167066,.412055,.179966,.243697,-.178396,.423133,.204418,.272106,-.190433,.439524,.232141,.297637,-.201265,.447041,.261109,.325273,-.211834,.454488,.292627,.357219,-.221889,.465004,.326669,.387362,-.230729,.468527,.362426,.423131,-.23924,.475836,.401533,.45543,-.246067,.475017,.441902,.493393,-.251557,.478017,.484239,.526253,-.255571,.4709,.528586,.560554,-.257752,.463167,.574346,.599306,-.258076,.456452,.621655,.634541,-.256471,.443725,.670492,.668907,-.253283,.428719,.721943,.705619,-.247562,.411348,.772477,.739034,-.240626,.388939,.8264,.771408,-.231493,.36425,.881702,.803312,-.220125,.337321,.9385,.828457,-.206645,.305364,.997437,.854819,-.190664,.273715,1.05693,.878666,-.171429,.242218,1.11251,.898404,-.149235,.209556,1.16398,.917416,-.12435,.176863,1.21014,.933133,-.0972703,.142775,1.25178,.95066,-.0683607,.106735,1.29028,.968589,-.0378724,.0681609,1.32703,.984776,-.00605712,.0273966,1.36158,.99994,.0263276,-.0138124,1.3943,.00867437,-186005e-11,.0928979,173682e-12,.00864003,-466389e-10,.0925237,435505e-11,.00864593,-186594e-9,.0925806,174322e-10,.00864095,-419639e-9,.0924903,392862e-10,.00863851,-746272e-9,.0924589,702598e-10,.00868531,-.00116456,.0929,111188e-9,.00869667,-.00167711,.0928529,163867e-9,.00874332,-.00228051,.0930914,23104e-8,.00882709,-.00297864,.0935679,31741e-8,.00898874,-.00377557,.0946165,430186e-9,.00929346,-.00469247,.0967406,580383e-9,.00978271,-.00575491,.100084,783529e-9,.0105746,-.00701514,.105447,.00106304,.0116949,-.00851797,.112494,.00144685,.0130419,-.0102757,.119876,.00196439,.0148375,-.012381,.129034,.00266433,.0168725,-.01482,.137812,.00358364,.0193689,-.0176563,.147696,.00478132,.0222691,-.0209211,.157795,.00631721,.0256891,-.0246655,.168431,.00826346,.0294686,-.0288597,.178587,.0106714,.0340412,-.0336441,.190251,.0136629,.0393918,-.039033,.202999,.0173272,.0453947,-.0450087,.215655,.0217448,.0521936,-.0515461,.228686,.0269941,.0600279,-.058817,.242838,.033272,.0692398,-.0667228,.258145,.0406457,.0793832,-.0752401,.273565,.0492239,.0902297,-.0841851,.287735,.0590105,.102014,-.0936479,.301161,.0702021,.116054,-.103967,.317438,.0832001,.13191,-.114622,.334166,.0977951,.148239,-.125452,.348192,.113985,.165809,-.136453,.361094,.131928,.184616,-.147648,.373534,.151811,.207491,-.159607,.39101,.174476,.230106,-.171119,.402504,.198798,.257036,-.182906,.418032,.225796,.281172,-.193605,.425468,.254027,.312034,-.204771,.440379,.285713,.340402,-.214988,.445406,.319196,.370231,-.224711,.44968,.35537,.407105,-.233516,.460747,.393838,.439037,-.240801,.460624,.433747,.47781,-.24762,.465957,.477234,.510655,-.251823,.460054,.52044,.550584,-.255552,.459172,.567853,.585872,-.257036,.450311,.615943,.620466,-.257535,.437763,.667693,.660496,-.255248,.426639,.718988,.695578,-.251141,.409185,.772503,.732176,-.244718,.39015,.827023,.760782,-.236782,.362594,.885651,.79422,-.225923,.33711,.943756,.824521,-.213855,.308272,1.00874,.854964,-.197723,.278529,1.06764,.878065,-.179209,.246208,1.12836,.899834,-.157569,.21329,1.18318,.918815,-.133206,.181038,1.23161,.934934,-.106545,.146993,1.27644,.952115,-.0780574,.111175,1.31842,.96906,-.0478279,.0728553,1.35839,.985178,-.0160014,.032579,1.39697,1.00039,.0173126,-.0095256,1.43312,.00384146,-124311e-11,.0613583,778271e-13,.00390023,-314043e-10,.0622919,196626e-11,.00389971,-125622e-9,.0622632,787379e-11,.00389491,-282352e-9,.0620659,1778e-8,.00391618,-502512e-9,.0624687,320918e-10,.00392662,-784458e-9,.0625113,515573e-10,.00396053,-.00112907,.0628175,778668e-10,.00401911,-.00153821,.0633286,113811e-9,.00414994,-.0020208,.0646443,16445e-8,.00441223,-.00260007,.0673886,237734e-9,.00484427,-.0033097,.0716528,345929e-9,.00549109,-.00418966,.0774998,505987e-9,.00636293,-.00527331,.0844758,739208e-9,.00746566,-.00660428,.0921325,.00107347,.00876625,-.00818826,.0997067,.00153691,.0103125,-.0100811,.107433,.00217153,.0123309,-.0123643,.117088,.00303427,.0146274,-.0150007,.126438,.00416018,.0172295,-.0180531,.135672,.00561513,.0204248,-.0215962,.146244,.007478,.0241597,-.0256234,.157481,.00981046,.0284693,-.0302209,.169125,.0127148,.033445,-.0353333,.181659,.0162453,.0391251,-.0410845,.1944,.0205417,.0454721,-.0473451,.207082,.0256333,.0530983,-.0542858,.221656,.0317036,.0615356,-.0618384,.236036,.0388319,.0703363,-.0697631,.248398,.046974,.0810391,-.0784757,.263611,.0565246,.0920144,-.0873488,.275857,.0671724,.105584,-.0973652,.292555,.0798105,.119506,-.107271,.306333,.0935945,.134434,-.117608,.318888,.109106,.153399,-.128938,.337552,.127074,.171258,-.139944,.349955,.14643,.191059,-.151288,.361545,.168,.215069,-.163018,.378421,.192082,.237838,-.174226,.38879,.217838,.266965,-.186063,.405857,.246931,.292827,-.196909,.414146,.277505,.324352,-.207473,.426955,.310711,.354427,-.217713,.433429,.346794,.389854,-.227183,.443966,.385237,.420749,-.235131,.44471,.424955,.459597,-.242786,.451729,.468446,.495316,-.248767,.45072,.513422,.534903,-.253351,.450924,.560618,.572369,-.256277,.445266,.609677,.612383,-.2576,.438798,.660995,.644037,-.256931,.421693,.713807,.686749,-.254036,.4109,.767616,.719814,-.249785,.390151,.82533,.754719,-.244283,.367847,.888311,.792022,-.235076,.345013,.948177,.822404,-.225061,.316193,1.01661,.853084,-.211113,.287013,1.08075,.879871,-.19449,.255424,1.14501,.901655,-.174023,.222879,1.20203,.919957,-.1509,.18989,1.25698,.938412,-.124923,.15606,1.30588,.953471,-.0968139,.120512,1.3529,.970451,-.066734,.0828515,1.3986,.985522,-.034734,.0424458,1.44148,1.00099,-.00102222,678929e-9,1.48398,965494e-9,-627338e-12,.0306409,197672e-13,99168e-8,-158573e-10,.0314638,499803e-12,991068e-9,-634012e-10,.031363,200682e-11,974567e-9,-14144e-8,.03036,457312e-11,998079e-9,-252812e-9,.031496,860131e-11,.00102243,-396506e-9,.0319955,148288e-10,.00107877,-577593e-9,.0331376,249141e-10,.00121622,-816816e-9,.0359396,423011e-10,.0014455,-.00113761,.0399652,724613e-10,.00178791,-.00156959,.0450556,123929e-9,.00225668,-.00214064,.0508025,208531e-9,.00285627,-.00287655,.0568443,341969e-9,.0035991,-.00380271,.0630892,544158e-9,.00455524,-.00496264,.0702204,842423e-9,.00569143,-.0063793,.0773426,.00126704,.00716928,-.00813531,.0860839,.00186642,.00885307,-.0101946,.0944079,.00267014,.0109316,-.0126386,.103951,.00374033,.0133704,-.0154876,.113786,.0051304,.0161525,-.0187317,.123477,.00688858,.0194267,-.0224652,.133986,.00910557,.0230967,-.0265976,.143979,.0118074,.0273627,-.0312848,.154645,.0151266,.0323898,-.0365949,.166765,.0191791,.0379225,-.0422914,.177932,.0239236,.0447501,-.0487469,.19167,.0296568,.0519391,-.0556398,.203224,.0362924,.0599464,-.0631646,.215652,.0440585,.0702427,-.0714308,.232089,.0531619,.0806902,-.0800605,.245258,.0634564,.0923194,-.0892815,.258609,.0752481,.106938,-.09931,.276654,.0888914,.121238,-.109575,.289847,.104055,.138817,-.120461,.307566,.121266,.15595,-.131209,.320117,.139944,.178418,-.143049,.339677,.161591,.197875,-.154074,.349886,.184303,.224368,-.166307,.369352,.210669,.252213,-.178051,.386242,.238895,.277321,-.189335,.395294,.269182,.310332,-.200683,.412148,.302508,.338809,-.210856,.418266,.337264,.372678,-.220655,.428723,.374881,.405632,-.230053,.433887,.415656,.442293,-.237993,.439911,.457982,.477256,-.244897,.440175,.502831,.515592,-.250657,.441079,.550277,.550969,-.255459,.435219,.601102,.592883,-.257696,.432882,.651785,.629092,-.259894,.421054,.708961,.672033,-.258592,.41177,.763806,.709147,-.256525,.395267,.824249,.745367,-.254677,.375013,.8951,.784715,-.247892,.353906,.959317,.818107,-.240162,.327801,1.03153,.847895,-.229741,.298821,1.10601,.879603,-.213084,.269115,1.164,.902605,-.195242,.236606,1.22854,.922788,-.174505,.203442,1.29017,.944831,-.150169,.169594,1.34157,.959656,-.124099,.135909,1.3956,.972399,-.0960626,.0990563,1.45128,.986549,-.0657097,.0602348,1.50312,1.00013,-.0333558,.0186694,1.55364,619747e-11,-1e-7,.00778326,796756e-16,237499e-13,-999999e-13,282592e-10,114596e-15,100292e-11,-166369e-11,250354e-9,677492e-14,350752e-11,-637769e-11,357289e-9,631655e-13,826445e-11,-174689e-10,516179e-9,31851e-11,242481e-10,-450868e-10,.0010223,130577e-11,455631e-10,-89044e-9,.00144302,374587e-11,971222e-10,-178311e-9,.00241912,102584e-10,171403e-9,-313976e-9,.00354938,236481e-10,292747e-9,-520026e-9,.00513765,496014e-10,789827e-9,-.00118187,.0238621,139056e-9,.00114093,-.00171827,.0286691,244093e-9,.00176119,-.00249667,.0368565,420623e-9,.0022233,-.00333742,.0400469,65673e-8,.00343382,-.00481976,.0535751,.00109323,.00427602,-.00600755,.057099,.00155268,.00461435,-.00737637,.0551084,.00215031,.00695698,-.00971401,.0715767,.00316529,.00867619,-.0120943,.0793314,.00436995,.0106694,-.0148202,.0869391,.0058959,.0140351,-.0183501,.101572,.00798757,.0168939,-.022006,.11018,.0104233,.020197,-.0261568,.119041,.0134167,.0254702,-.0312778,.135404,.0173009,.0298384,-.0362469,.1437,.0215428,.035159,-.042237,.15512,.0268882,.0427685,-.0488711,.17128,.033235,.0494848,-.0557997,.181813,.0404443,.0592394,-.0635578,.198745,.0490043,.0681463,-.071838,.210497,.0588239,.0804753,-.0809297,.228864,.0702835,.0942205,-.0906488,.247008,.0834012,.106777,-.100216,.258812,.0975952,.124471,-.110827,.278617,.114162,.138389,-.121193,.287049,.131983,.159543,-.13253,.307151,.152541,.176432,-.143611,.31564,.174673,.201723,-.15548,.33538,.199842,.229721,-.167166,.355256,.227097,.250206,-.178238,.360047,.256014,.282118,-.189905,.378761,.28855,.312821,-.201033,.39181,.323348,.341482,-.211584,.397716,.360564,.377368,-.221314,.410141,.400004,.418229,-.230474,.423485,.442371,.444881,-.239443,.418874,.488796,.488899,-.245987,.427545,.535012,.520317,-.253948,.422147,.589678,.568566,-.256616,.42719,.637683,.599607,-.26376,.415114,.703363,.64222,-.268687,.408715,.771363,.685698,-.2694,.399722,.83574,.732327,-.266642,.388651,.897764,.769873,-.267712,.369198,.983312,.806733,-.263479,.346802,1.06222,.843466,-.254575,.321368,1.13477,.873008,-.242749,.29211,1.20712,.908438,-.22725,.262143,1.27465,.936321,-.207621,.228876,1.33203,.950353,-.187932,.19484,1.40439,.96442,-.165154,.163178,1.4732,.979856,-.139302,.127531,1.53574,.982561,-.11134,.0903457,1.59982,.996389,-.0808124,.0489007,1.6577],t=[1,0,0,0,1,791421e-36,0,0,1,104392e-29,0,0,1,349405e-26,0,0,1,109923e-23,0,0,1,947414e-22,0,0,1,359627e-20,0,0,1,772053e-19,0,0,1,108799e-17,0,0,1,110655e-16,0,0,1,865818e-16,0,0,.999998,545037e-15,0,0,.999994,285095e-14,0,0,.999989,126931e-13,0,0,.999973,489938e-13,0,0,.999947,166347e-12,0,0,.999894,502694e-12,0,0,.999798,136532e-11,0,0,.999617,335898e-11,0,0,.999234,752126e-11,0,0,.998258,152586e-10,0,0,.99504,266207e-10,0,0,.980816,236802e-10,0,0,.967553,207684e-11,0,0,.966877,403733e-11,0,0,.965752,741174e-11,0,0,.96382,127746e-10,0,0,.960306,202792e-10,0,0,.953619,280232e-10,0,0,.941103,278816e-10,0,0,.926619,160221e-10,0,0,.920983,235164e-10,0,0,.912293,311924e-10,0,.0158731,.899277,348118e-10,0,.0476191,.880884,26041e-9,0,.0793651,.870399,338726e-10,0,.111111,.856138,392906e-10,0,.142857,.837436,372874e-10,0,.174603,.820973,392558e-10,0,.206349,.803583,434658e-10,0,.238095,.782168,40256e-9,0,.269841,.764107,448159e-10,0,.301587,.743092,457627e-10,0,.333333,.721626,455314e-10,0,.365079,.700375,477335e-10,0,.396825,.677334,461072e-10,0,.428571,.655702,484393e-10,0,.460317,.632059,464583e-10,0,.492064,.610125,483923e-10,0,.52381,.58653,464342e-10,0,.555556,.564508,477033e-10,0,.587302,.541405,459263e-10,0,.619048,.519556,46412e-9,0,.650794,.497292,448913e-10,0,.68254,.475898,445789e-10,0,.714286,.454722,433496e-10,0,.746032,.434042,423054e-10,0,.777778,.414126,413737e-10,0,.809524,.394387,397265e-10,0,.84127,.375841,390709e-10,0,.873016,.357219,369938e-10,0,.904762,.340084,365618e-10,0,.936508,.322714,342533e-10,0,.968254,.306974,339596e-10,0,1,1,101524e-23,0,0,1,10292e-22,0,0,1,130908e-23,0,0,1,473331e-23,0,0,1,625319e-22,0,0,1,107932e-20,0,0,1,163779e-19,0,0,1,203198e-18,0,0,1,204717e-17,0,0,.999999,168995e-16,0,0,.999998,115855e-15,0,0,.999996,66947e-14,0,0,.999991,330863e-14,0,0,.999983,141737e-13,0,0,.999968,532626e-13,0,0,.99994,177431e-12,0,0,.999891,528835e-12,0,0,.999797,142169e-11,0,0,.999617,347057e-11,0,0,.999227,77231e-10,0,0,.998239,155753e-10,0,0,.994937,268495e-10,0,0,.980225,213742e-10,0,0,.967549,21631e-10,0,0,.966865,417989e-11,0,0,.965739,763341e-11,0,0,.963794,130892e-10,0,0,.960244,206456e-10,0,0,.953495,282016e-10,0,148105e-9,.940876,271581e-10,0,.002454,.926569,164159e-10,0,.00867491,.920905,239521e-10,0,.01956,.912169,315127e-10,0,.035433,.899095,346626e-10,0,.056294,.882209,290223e-10,0,.0818191,.870272,342992e-10,0,.111259,.855977,394164e-10,0,.142857,.837431,372343e-10,0,.174603,.820826,396691e-10,0,.206349,.803408,435395e-10,0,.238095,.782838,419579e-10,0,.269841,.763941,450953e-10,0,.301587,.742904,455847e-10,0,.333333,.721463,458833e-10,0,.365079,.700197,477159e-10,0,.396825,.677501,470641e-10,0,.428571,.655527,484732e-10,0,.460317,.6324,476834e-10,0,.492064,.609964,484213e-10,0,.52381,.586839,475541e-10,0,.555556,.564353,476951e-10,0,.587302,.541589,467611e-10,0,.619048,.519413,463493e-10,0,.650794,.497337,453994e-10,0,.68254,.475797,445308e-10,0,.714286,.454659,435787e-10,0,.746032,.434065,424839e-10,0,.777778,.414018,41436e-9,0,.809524,.39455,401902e-10,0,.84127,.375742,390813e-10,0,.873016,.357501,377116e-10,0,.904762,.339996,36535e-9,0,.936508,.323069,351265e-10,0,.968254,.306897,339112e-10,0,1,1,10396e-19,0,0,1,104326e-20,0,0,1,110153e-20,0,0,1,144668e-20,0,0,1,34528e-19,0,0,1,175958e-19,0,0,1,12627e-17,0,0,1,936074e-18,0,0,1,645742e-17,0,0,.999998,401228e-16,0,0,.999997,222338e-15,0,0,.999995,10967e-13,0,0,.999991,482132e-14,0,0,.999981,189434e-13,0,0,.999967,667716e-13,0,0,.999938,212066e-12,0,0,.999886,60977e-11,0,0,.999792,159504e-11,0,0,.999608,381191e-11,0,0,.999209,833727e-11,0,0,.998179,165288e-10,0,0,.994605,274387e-10,0,0,.979468,167316e-10,0,0,.967529,242877e-11,0,0,.966836,461696e-11,0,0,.96569,830977e-11,0,0,.963706,140427e-10,0,244659e-11,.960063,217353e-10,0,760774e-9,.953113,286606e-10,0,.00367261,.940192,247691e-10,0,.00940263,.927731,195814e-10,0,.018333,.920669,252531e-10,0,.0306825,.911799,324277e-10,0,.0465556,.89857,340982e-10,0,.0659521,.883283,319622e-10,0,.0887677,.86989,35548e-9,0,.114784,.855483,397143e-10,0,.143618,.837987,391665e-10,0,.174606,.820546,411306e-10,0,.206349,.802878,436753e-10,0,.238095,.783402,444e-7,0,.269841,.763439,458726e-10,0,.301587,.742925,467097e-10,0,.333333,.721633,478887e-10,0,.365079,.69985,481251e-10,0,.396825,.67783,491811e-10,0,.428571,.655126,488199e-10,0,.460318,.632697,496025e-10,0,.492064,.609613,48829e-9,0,.52381,.587098,492754e-10,0,.555556,.564119,482625e-10,0,.587302,.541813,482807e-10,0,.619048,.519342,471552e-10,0,.650794,.497514,466765e-10,0,.68254,.475879,455582e-10,0,.714286,.454789,446007e-10,0,.746032,.434217,435382e-10,0,.777778,.414086,421753e-10,0,.809524,.394744,412093e-10,0,.84127,.375782,396634e-10,0,.873016,.357707,386419e-10,0,.904762,.340038,370345e-10,0,.936508,.323284,359725e-10,0,.968254,.306954,3436e-8,0,1,1,599567e-19,0,0,1,600497e-19,0,0,1,614839e-19,0,0,1,686641e-19,0,0,1,972658e-19,0,0,1,221271e-18,0,0,1,833195e-18,0,0,1,403601e-17,0,0,.999999,206001e-16,0,0,.999998,101739e-15,0,0,.999997,470132e-15,0,0,.999993,200436e-14,0,0,.999988,783682e-14,0,0,.999979,280338e-13,0,0,.999962,917033e-13,0,0,.999933,274514e-12,0,0,.999881,753201e-12,0,0,.999783,189826e-11,0,0,.999594,440279e-11,0,0,.999178,93898e-10,0,0,.998073,181265e-10,0,0,.993993,280487e-10,0,0,.979982,149422e-10,0,0,.968145,378481e-11,0,0,.966786,53771e-10,0,0,.965611,947508e-11,0,388934e-10,.963557,156616e-10,0,9693e-7,.959752,235144e-10,0,.00370329,.952461,291568e-10,0,.00868428,.940193,240102e-10,0,.0161889,.929042,231235e-10,0,.0263948,.920266,273968e-10,0,.0394088,.911178,337915e-10,0,.0552818,.897873,333629e-10,0,.0740138,.884053,351405e-10,0,.0955539,.869455,378034e-10,0,.119795,.854655,399378e-10,0,.14656,.838347,419108e-10,0,.175573,.820693,440831e-10,0,.206388,.802277,445599e-10,0,.238095,.783634,472691e-10,0,.269841,.763159,476984e-10,0,.301587,.742914,491487e-10,0,.333333,.721662,502312e-10,0,.365079,.699668,502817e-10,0,.396825,.677839,51406e-9,0,.428571,.655091,511095e-10,0,.460317,.632665,516067e-10,0,.492064,.609734,512255e-10,0,.52381,.587043,510263e-10,0,.555556,.564298,50565e-9,0,.587302,.541769,497951e-10,0,.619048,.519529,492698e-10,0,.650794,.497574,482066e-10,0,.68254,.476028,473689e-10,0,.714286,.454961,461941e-10,0,.746032,.434341,450618e-10,0,.777778,.414364,438355e-10,0,.809524,.394832,424196e-10,0,.84127,.376109,412563e-10,0,.873016,.35779,396226e-10,0,.904762,.340379,384886e-10,0,.936508,.323385,368214e-10,0,.968254,.307295,356636e-10,0,1,1,106465e-17,0,0,1,106555e-17,0,0,1,107966e-17,0,0,1,114601e-17,0,0,1,137123e-17,0,0,1,21243e-16,0,0,.999999,489653e-17,0,0,.999999,160283e-16,0,0,.999998,62269e-15,0,0,.999997,251859e-15,0,0,.999996,996192e-15,0,0,.999992,374531e-14,0,0,.999986,132022e-13,0,0,.999975,433315e-13,0,0,.999959,131956e-12,0,0,.999927,372249e-12,0,0,.999871,972461e-12,0,0,.999771,235343e-11,0,0,.999572,52768e-10,0,0,.999133,109237e-10,0,0,.997912,203675e-10,0,0,.993008,279396e-10,0,0,.980645,139604e-10,0,0,.970057,646596e-11,0,0,.966717,65089e-10,0,474145e-10,.965497,111863e-10,0,89544e-8,.96334,179857e-10,0,.0032647,.959294,259045e-10,0,.0075144,.951519,292327e-10,0,.0138734,.940517,249769e-10,0,.0224952,.93014,26803e-9,0,.0334828,.91972,303656e-10,0,.0468973,.910294,353323e-10,0,.0627703,.897701,351002e-10,0,.0811019,.884522,388104e-10,0,.10186,.869489,412932e-10,0,.124985,.853983,415781e-10,0,.150372,.838425,454066e-10,0,.177868,.820656,471624e-10,0,.207245,.801875,475243e-10,0,.238143,.783521,505621e-10,0,.269841,.763131,50721e-9,0,.301587,.74261,523293e-10,0,.333333,.72148,528699e-10,0,.365079,.699696,538677e-10,0,.396825,.677592,539255e-10,0,.428571,.65525,546367e-10,0,.460317,.632452,541348e-10,0,.492064,.609903,544976e-10,0,.52381,.586928,536201e-10,0,.555556,.564464,535185e-10,0,.587302,.541801,524949e-10,0,.619048,.519681,51812e-9,0,.650794,.497685,507687e-10,0,.68254,.47622,496243e-10,0,.714286,.455135,485714e-10,0,.746032,.4346,471847e-10,0,.777778,.414564,459294e-10,0,.809524,.395165,444705e-10,0,.84127,.376333,430772e-10,0,.873016,.358197,416229e-10,0,.904762,.34064,401019e-10,0,.936508,.323816,386623e-10,0,.968254,.307581,370933e-10,0,1,1,991541e-17,0,0,1,992077e-17,0,0,1,100041e-16,0,0,1,10385e-15,0,0,1,115777e-16,0,0,1,150215e-16,0,0,.999999,254738e-16,0,0,.999999,598822e-16,0,0,.999998,179597e-15,0,0,.999997,602367e-15,0,0,.999994,206835e-14,0,0,.99999,694952e-14,0,0,.999984,223363e-13,0,0,.999972,678578e-13,0,0,.999952,193571e-12,0,0,.999919,516594e-12,0,0,.99986,128739e-11,0,0,.999753,299298e-11,0,0,.999546,648258e-11,0,0,.999074,129985e-10,0,0,.997671,232176e-10,0,0,.991504,256701e-10,0,0,.981148,131141e-10,0,0,.971965,869048e-11,0,280182e-10,.966624,808301e-11,0,695475e-9,.965344,135235e-10,0,.00265522,.963048,210592e-10,0,.00622975,.958673,287473e-10,0,.0116234,.950262,281379e-10,0,.018976,.940836,271089e-10,0,.0283844,.930996,30926e-9,0,.0399151,.919848,348359e-10,0,.0536063,.909136,366092e-10,0,.0694793,.897554,384162e-10,0,.0875342,.884691,430971e-10,0,.107749,.869414,447803e-10,0,.130087,.853462,452858e-10,0,.154481,.838187,495769e-10,0,.180833,.820381,502709e-10,0,.209005,.801844,522713e-10,0,.238791,.783061,541505e-10,0,.269869,.763205,553712e-10,0,.301587,.742362,564909e-10,0,.333333,.721393,572646e-10,0,.365079,.699676,581012e-10,0,.396825,.677395,58096e-9,0,.428571,.655208,585766e-10,0,.460317,.632451,583602e-10,0,.492064,.609839,580234e-10,0,.52381,.587093,577161e-10,0,.555556,.564467,568447e-10,0,.587302,.542043,563166e-10,0,.619048,.519826,55156e-9,0,.650794,.497952,541682e-10,0,.68254,.476477,528971e-10,0,.714286,.455412,514952e-10,0,.746032,.434926,502222e-10,0,.777778,.4149,485779e-10,0,.809524,.395552,472242e-10,0,.84127,.376712,454891e-10,0,.873016,.358622,440924e-10,0,.904762,.341048,422984e-10,0,.936508,.324262,408582e-10,0,.968254,.308013,390839e-10,0,1,1,613913e-16,0,0,1,614145e-16,0,0,1,617708e-16,0,0,1,633717e-16,0,0,1,681648e-16,0,0,1,808291e-16,0,0,1,114608e-15,0,0,.999998,210507e-15,0,0,.999997,499595e-15,0,0,.999995,139897e-14,0,0,.999994,419818e-14,0,0,.999988,127042e-13,0,0,.999979,375153e-13,0,0,.999965,106206e-12,0,0,.999945,285381e-12,0,0,.999908,723611e-12,0,0,.999846,17255e-10,0,0,.999733,386104e-11,0,0,.999511,808493e-11,0,0,.998993,156884e-10,0,0,.997326,265538e-10,0,0,.989706,206466e-10,0,0,.981713,130756e-10,0,70005e-10,.973636,106473e-10,0,464797e-9,.966509,10194e-9,0,.00201743,.965149,165881e-10,0,.00497549,.962669,249147e-10,0,.00953262,.95786,317449e-10,0,.0158211,.949334,281045e-10,0,.0239343,.941041,303263e-10,0,.0339372,.931575,356754e-10,0,.0458738,.920102,397075e-10,0,.059772,.908002,384886e-10,0,.075645,.897269,43027e-9,0,.0934929,.884559,479925e-10,0,.113302,.869161,48246e-9,0,.135045,.853342,509505e-10,0,.158678,.837633,542846e-10,0,.184136,.820252,554139e-10,0,.211325,.801872,581412e-10,0,.240113,.782418,585535e-10,0,.270306,.7631,610923e-10,0,.301594,.742183,613678e-10,0,.333333,.721098,627275e-10,0,.365079,.699512,629413e-10,0,.396825,.677372,636351e-10,0,.428571,.655059,633555e-10,0,.460317,.632567,636513e-10,0,.492064,.609784,628965e-10,0,.52381,.587237,625546e-10,0,.555556,.564525,615825e-10,0,.587302,.542181,605048e-10,0,.619048,.520017,596329e-10,0,.650794,.498204,581516e-10,0,.68254,.476742,569186e-10,0,.714286,.455803,553833e-10,0,.746032,.435251,537807e-10,0,.777778,.415374,522025e-10,0,.809524,.395921,503421e-10,0,.84127,.377253,488211e-10,0,.873016,.359021,468234e-10,0,.904762,.341637,453269e-10,0,.936508,.3247,433014e-10,0,.968254,.308625,418007e-10,0,1,1,286798e-15,0,0,1,286877e-15,0,0,1,288094e-15,0,0,1,293506e-15,0,0,1,309262e-15,0,0,.999999,348593e-15,0,0,.999999,444582e-15,0,0,.999998,688591e-15,0,0,.999996,134391e-14,0,0,.999993,317438e-14,0,0,.999989,835609e-14,0,0,.999983,228677e-13,0,0,.999974,623361e-13,0,0,.999959,165225e-12,0,0,.999936,419983e-12,0,0,.999896,101546e-11,0,0,.99983,232376e-11,0,0,.999709,50156e-10,0,0,.999469,10167e-9,0,0,.998886,190775e-10,0,0,.996819,300511e-10,0,0,.988837,185092e-10,0,168222e-12,.982178,134622e-10,0,259622e-9,.975017,125961e-10,0,.00142595,.967101,13507e-9,0,.00382273,.964905,205003e-10,0,.00764164,.96218,29546e-9,0,.0130121,.956821,343738e-10,0,.0200253,.948829,305063e-10,0,.0287452,.941092,346487e-10,0,.039218,.931883,412061e-10,0,.0514748,.920211,444651e-10,0,.0655351,.907307,431252e-10,0,.0814082,.89684,490382e-10,0,.0990939,.884119,53334e-9,0,.118583,.869148,54114e-9,0,.139856,.853377,578536e-10,0,.162882,.836753,592285e-10,0,.187615,.820063,622787e-10,0,.213991,.801694,645492e-10,0,.241918,.782116,65353e-9,0,.271267,.762673,674344e-10,0,.301847,.742133,682788e-10,0,.333333,.720779,691959e-10,0,.365079,.699386,696817e-10,0,.396826,.67732,699583e-10,0,.428572,.654888,698447e-10,0,.460318,.632499,694063e-10,0,.492064,.609825,691612e-10,0,.52381,.587287,681576e-10,0,.555556,.564743,674138e-10,0,.587302,.542409,661617e-10,0,.619048,.520282,647785e-10,0,.650794,.498506,633836e-10,0,.68254,.477102,615905e-10,0,.714286,.456167,601013e-10,0,.746032,.435728,581457e-10,0,.777778,.415809,564215e-10,0,.809524,.396517,544997e-10,0,.84127,.377737,525061e-10,0,.873016,.359698,506831e-10,0,.904762,.342164,48568e-9,0,.936508,.325417,467826e-10,0,.968254,.309186,446736e-10,0,1,1,109018e-14,0,0,1,10904e-13,0,0,1,109393e-14,0,0,1,11095e-13,0,0,1,1154e-12,0,0,1,126089e-14,0,0,.999999,15059e-13,0,0,.999997,207899e-14,0,0,.999994,348164e-14,0,0,.999993,705728e-14,0,0,.999987,163692e-13,0,0,.999981,406033e-13,0,0,.999969,10245e-11,0,0,.999953,255023e-12,0,0,.999925,61511e-11,0,0,.999881,142218e-11,0,0,.99981,313086e-11,0,0,.99968,653119e-11,0,0,.999418,12832e-9,0,0,.998748,232497e-10,0,0,.996066,329522e-10,0,0,.988379,179613e-10,0,108799e-9,.982567,143715e-10,0,921302e-9,.976097,148096e-10,0,.00280738,.968475,178905e-10,0,.00596622,.964606,253921e-10,0,.0105284,.961564,348623e-10,0,.0165848,.955517,357612e-10,0,.0242,.948381,343493e-10,0,.03342,.941095,405849e-10,0,.0442777,.931923,475394e-10,0,.0567958,.91996,484328e-10,0,.0709879,.907419,502146e-10,0,.086861,.89618,561654e-10,0,.104415,.88337,587612e-10,0,.123643,.869046,618057e-10,0,.144531,.853278,657392e-10,0,.167057,.836091,66303e-9,0,.191188,.819644,704445e-10,0,.216878,.801246,714071e-10,0,.244062,.782031,740093e-10,0,.272649,.762066,74685e-9,0,.302509,.741964,766647e-10,0,.333442,.720554,766328e-10,0,.365079,.699098,777857e-10,0,.396826,.677189,774633e-10,0,.428572,.65484,776235e-10,0,.460318,.632496,770316e-10,0,.492064,.609908,762669e-10,0,.52381,.587312,753972e-10,0,.555556,.564938,739994e-10,0,.587302,.542577,728382e-10,0,.619048,.52062,71112e-9,0,.650794,.498819,694004e-10,0,.68254,.477555,675575e-10,0,.714286,.456568,653449e-10,0,.746032,.436278,636068e-10,0,.777778,.41637,613466e-10,0,.809524,.397144,594177e-10,0,.84127,.378412,570987e-10,0,.873016,.360376,550419e-10,0,.904762,.342906,527422e-10,0,.936508,.326136,506544e-10,0,.968254,.30997,484307e-10,0,1,1,354014e-14,0,0,1,354073e-14,0,0,1,354972e-14,0,0,1,358929e-14,0,0,1,370093e-14,0,0,.999999,396194e-14,0,0,.999998,453352e-14,0,0,.999997,578828e-14,0,0,.999994,863812e-14,0,0,.999991,153622e-13,0,0,.999985,316356e-13,0,0,.999977,712781e-13,0,0,.999964,166725e-12,0,0,.999945,390501e-12,0,0,.999912,895622e-12,0,0,.999866,198428e-11,0,0,.999786,421038e-11,0,0,.999647,850239e-11,0,0,.999356,162059e-10,0,0,.998563,282652e-10,0,0,.994928,336309e-10,0,244244e-10,.987999,178458e-10,0,523891e-9,.982893,159162e-10,0,.00194729,.977044,178056e-10,0,.00451099,.969972,230624e-10,0,.00835132,.964237,313922e-10,0,.013561,.960791,406145e-10,0,.0202056,.954292,372796e-10,0,.0283321,.948052,403199e-10,0,.0379739,.940938,479537e-10,0,.0491551,.931689,545292e-10,0,.0618918,.91987,54038e-9,0,.0761941,.907665,589909e-10,0,.0920672,.895281,642651e-10,0,.109511,.882621,659707e-10,0,.12852,.86873,709973e-10,0,.149085,.853008,742221e-10,0,.171189,.835944,761754e-10,0,.194809,.818949,797052e-10,0,.21991,.800951,812434e-10,0,.246447,.781847,838075e-10,0,.274352,.761649,84501e-9,0,.303535,.74152,860258e-10,0,.333857,.720495,866233e-10,0,.365104,.698742,868326e-10,0,.396826,.677096,87133e-9,0,.428572,.654782,863497e-10,0,.460318,.632335,860206e-10,0,.492064,.610031,849337e-10,0,.52381,.587457,838279e-10,0,.555556,.56513,82309e-9,0,.587302,.542877,803542e-10,0,.619048,.5209,786928e-10,0,.650794,.499291,765171e-10,0,.68254,.477971,744753e-10,0,.714286,.457221,72209e-9,0,.746032,.436803,697448e-10,0,.777778,.417083,675333e-10,0,.809524,.397749,648058e-10,0,.84127,.379177,625759e-10,0,.873016,.361061,598584e-10,0,.904762,.343713,575797e-10,0,.936508,.326894,549999e-10,0,.968254,.310816,527482e-10,0,1,1,10153e-12,0,0,1,101544e-13,0,0,1,101751e-13,0,0,1,102662e-13,0,0,1,10521e-12,0,0,.999999,111049e-13,0,0,.999999,123408e-13,0,0,.999996,14924e-12,0,0,.999992,204471e-13,0,0,.999989,326539e-13,0,0,.99998,603559e-13,0,0,.999971,123936e-12,0,0,.999955,269058e-12,0,0,.999933,593604e-12,0,0,.999901,129633e-11,0,0,.999847,275621e-11,0,0,.999761,564494e-11,0,0,.999607,110485e-10,0,0,.999282,204388e-10,0,0,.99831,341084e-10,0,22038e-11,.993288,294949e-10,0,242388e-9,.987855,192736e-10,0,.0012503,.983167,182383e-10,0,.0032745,.977908,218633e-10,0,.00646321,.971194,290662e-10,0,.0109133,.963867,386401e-10,0,.0166927,.95982,462827e-10,0,.0238494,.953497,420705e-10,0,.0324178,.947621,477743e-10,0,.0424225,.940611,568258e-10,0,.0538808,.931174,618061e-10,0,.0668047,.919919,627098e-10,0,.0812014,.907856,694714e-10,0,.0970745,.894509,735008e-10,0,.114424,.881954,763369e-10,0,.133246,.868309,821896e-10,0,.153534,.852511,83769e-9,0,.175275,.835821,881615e-10,0,.198453,.817981,896368e-10,0,.223042,.800504,930906e-10,0,.249009,.78141,945056e-10,0,.276304,.761427,963605e-10,0,.304862,.74094,968088e-10,0,.334584,.720233,981481e-10,0,.365322,.698592,979122e-10,0,.396826,.676763,981057e-10,0,.428571,.654808,973956e-10,0,.460318,.632326,962619e-10,0,.492064,.610049,952996e-10,0,.52381,.58763,933334e-10,0,.555556,.565261,917573e-10,0,.587302,.543244,896636e-10,0,.619048,.521273,873304e-10,0,.650794,.499818,852648e-10,0,.68254,.478536,823961e-10,0,.714286,.457826,79939e-9,0,.746032,.437549,77126e-9,0,.777778,.41776,743043e-10,0,.809524,.39863,716426e-10,0,.84127,.379954,686456e-10,0,.873016,.362025,660514e-10,0,.904762,.344581,630755e-10,0,.936508,.327909,605439e-10,0,.968254,.311736,576345e-10,0,1,1,263344e-13,0,0,1,263373e-13,0,0,1,263815e-13,0,0,1,265753e-13,0,0,1,271132e-13,0,0,.999999,283279e-13,0,0,.999997,30833e-12,0,0,.999995,358711e-13,0,0,.999992,461266e-13,0,0,.999985,67574e-12,0,0,.999977,11358e-11,0,0,.999966,213657e-12,0,0,.999948,431151e-12,0,0,.999923,896656e-12,0,0,.999884,186603e-11,0,0,.999826,381115e-11,0,0,.999732,754184e-11,0,0,.999561,143192e-10,0,0,.999191,257061e-10,0,0,.997955,405724e-10,0,744132e-10,.992228,276537e-10,0,716477e-9,.987638,208885e-10,0,.0022524,.983395,215226e-10,0,.00484816,.978614,270795e-10,0,.00860962,.972389,365282e-10,0,.0136083,.964392,474747e-10,0,.0198941,.95861,509141e-10,0,.0275023,.952806,48963e-9,0,.0364584,.94712,571119e-10,0,.04678,.940104,671704e-10,0,.0584799,.930398,687586e-10,0,.0715665,.919866,738161e-10,0,.086045,.907853,813235e-10,0,.101918,.894078,834582e-10,0,.119186,.881177,892093e-10,0,.137845,.867575,944548e-10,0,.157891,.852107,969607e-10,0,.179316,.835502,101456e-9,0,.202106,.81756,103256e-9,0,.226243,.79984,106954e-9,0,.251704,.780998,108066e-9,0,.278451,.761132,110111e-9,0,.306436,.740429,110459e-9,0,.335586,.719836,111219e-9,0,.365796,.698467,11145e-8,0,.3969,.676446,110393e-9,0,.428571,.654635,110035e-9,0,.460318,.632411,108548e-9,0,.492064,.609986,106963e-9,0,.52381,.587872,105238e-9,0,.555556,.565528,102665e-9,0,.587302,.543563,100543e-9,0,.619048,.52176,976182e-10,0,.650794,.500188,947099e-10,0,.68254,.479204,919929e-10,0,.714286,.458413,886139e-10,0,.746032,.438314,857839e-10,0,.777778,.418573,82411e-9,0,.809524,.39947,792211e-10,0,.84127,.380892,759546e-10,0,.873016,.362953,727571e-10,0,.904762,.345601,695738e-10,0,.936508,.328895,664907e-10,0,.968254,.312808,634277e-10,0,1,1,628647e-13,0,0,1,628705e-13,0,0,1,629587e-13,0,0,1,633441e-13,0,0,.999999,644087e-13,0,0,.999998,667856e-13,0,0,.999997,715889e-13,0,0,.999995,809577e-13,0,0,.999989,992764e-13,0,0,.999983,135834e-12,0,0,.999974,210482e-12,0,0,.999959,365215e-12,0,0,.999939,686693e-12,0,0,.999911,13472e-10,0,0,.999868,26731e-10,0,0,.999804,524756e-11,0,0,.9997,100403e-10,0,0,.99951,185019e-10,0,0,.999078,322036e-10,0,620676e-11,.997428,470002e-10,0,341552e-9,.99162,287123e-10,0,.00143727,.987479,234706e-10,0,.00349201,.983582,260083e-10,0,.0066242,.979186,337927e-10,0,.0109113,.97325,454689e-10,0,.0164064,.965221,573759e-10,0,.0231463,.957262,544114e-10,0,.0311571,.952211,587006e-10,0,.0404572,.946631,692256e-10,0,.0510592,.939391,787819e-10,0,.0629723,.929795,792368e-10,0,.0762025,.91965,875075e-10,0,.090753,.907737,950903e-10,0,.106626,.893899,972963e-10,0,.123822,.880239,10459e-8,0,.142337,.866562,107689e-9,0,.16217,.85164,113081e-9,0,.183314,.835021,116636e-9,0,.20576,.817311,120074e-9,0,.229496,.798845,121921e-9,0,.254502,.780479,12475e-8,0,.280753,.760694,125255e-9,0,.308212,.740142,126719e-9,0,.336825,.719248,12636e-8,0,.366517,.698209,126712e-9,0,.397167,.676398,125769e-9,0,.428578,.654378,124432e-9,0,.460318,.632484,123272e-9,0,.492064,.610113,12085e-8,0,.52381,.587931,118411e-9,0,.555556,.565872,11569e-8,0,.587302,.543814,112521e-9,0,.619048,.522265,109737e-9,0,.650794,.500835,106228e-9,0,.68254,.479818,102591e-9,0,.714286,.459258,991288e-10,0,.746032,.439061,952325e-10,0,.777778,.419552,91895e-9,0,.809524,.400399,879051e-10,0,.84127,.381976,844775e-10,0,.873016,.364009,806316e-10,0,.904762,.346761,771848e-10,0,.936508,.330049,735429e-10,0,.968254,.314018,702103e-10,0,1,1,139968e-12,0,0,1,139979e-12,0,0,1,140145e-12,0,0,1,14087e-11,0,0,.999999,142865e-12,0,0,.999998,147279e-12,0,0,.999997,156057e-12,0,0,.999992,17276e-11,0,0,.999989,204352e-12,0,0,.99998,26494e-11,0,0,.999969,383435e-12,0,0,.999953,618641e-12,0,0,.999929,108755e-11,0,0,.999898,201497e-11,0,0,.999849,381346e-11,0,0,.999778,719815e-11,0,0,.999661,133215e-10,0,0,.999451,238313e-10,0,0,.998936,401343e-10,0,113724e-9,.99662,517346e-10,0,820171e-9,.991094,304323e-10,0,.00238143,.987487,281757e-10,0,.00493527,.983731,320048e-10,0,.00856859,.979647,423905e-10,0,.0133393,.973837,562935e-10,0,.0192863,.96584,677442e-10,0,.0264369,.956309,623073e-10,0,.03481,.951523,704131e-10,0,.0444184,.946003,836594e-10,0,.0552713,.938454,911736e-10,0,.0673749,.929279,938264e-10,0,.0807329,.919239,103754e-9,0,.0953479,.907293,109928e-9,0,.111221,.893936,115257e-9,0,.128352,.879674,122265e-9,0,.14674,.865668,125733e-9,0,.166382,.850998,132305e-9,0,.187276,.834498,134844e-9,0,.209413,.816903,139276e-9,0,.232786,.798235,140984e-9,0,.257382,.779724,14378e-8,0,.283181,.760251,144623e-9,0,.310156,.739808,145228e-9,0,.338269,.718762,14539e-8,0,.367461,.697815,144432e-9,0,.397646,.67631,143893e-9,0,.428685,.654278,141846e-9,0,.460318,.632347,13935e-8,0,.492064,.610296,137138e-9,0,.52381,.588039,133806e-9,0,.555556,.566218,130755e-9,0,.587302,.544346,127128e-9,0,.619048,.522701,123002e-9,0,.650794,.501542,119443e-9,0,.68254,.480508,115055e-9,0,.714286,.460092,111032e-9,0,.746032,.440021,106635e-9,0,.777778,.420446,102162e-9,0,.809524,.401512,98184e-9,0,.84127,.38299,936497e-10,0,.873016,.365232,89813e-9,0,.904762,.347865,853073e-10,0,.936508,.331342,817068e-10,0,.968254,.315202,773818e-10,0,1,1,29368e-11,0,0,1,2937e-10,0,0,1,293998e-12,0,0,1,295298e-12,0,0,.999999,298865e-12,0,0,.999998,3067e-10,0,0,.999995,322082e-12,0,0,.999992,350767e-12,0,0,.999986,403538e-12,0,0,.999976,501372e-12,0,0,.999964,68562e-11,0,0,.999945,10374e-10,0,0,.999919,171269e-11,0,0,.999882,300175e-11,0,0,.999829,542144e-11,0,0,.999749,984182e-11,0,0,.99962,176213e-10,0,0,.999382,305995e-10,0,138418e-10,.998751,496686e-10,0,389844e-9,.995344,510733e-10,0,.00150343,.990768,345829e-10,0,.00352451,.987464,342841e-10,0,.00655379,.983846,399072e-10,0,.0106554,.980007,533219e-10,0,.0158723,.974494,696992e-10,0,.0222333,.96622,776754e-10,0,.029758,.956273,747718e-10,0,.0384596,.950952,864611e-10,0,.0483473,.945215,100464e-9,0,.0594266,.937287,103729e-9,0,.0717019,.928649,111665e-9,0,.0851752,.918791,12353e-8,0,.0998479,.906685,127115e-9,0,.115721,.893706,13628e-8,0,.132794,.879248,142427e-9,0,.151067,.864685,148091e-9,0,.170538,.850032,153517e-9,0,.191204,.833853,157322e-9,0,.213063,.816353,161086e-9,0,.236107,.797834,164111e-9,0,.260329,.778831,165446e-9,0,.285714,.759756,167492e-9,0,.312243,.739419,166928e-9,0,.339887,.718491,167e-6,0,.368604,.697392,165674e-9,0,.398329,.676102,163815e-9,0,.428961,.654243,162003e-9,0,.460331,.632176,158831e-9,0,.492064,.610407,155463e-9,0,.52381,.588394,152062e-9,0,.555556,.56645,147665e-9,0,.587302,.5449,14375e-8,0,.619048,.523276,138905e-9,0,.650794,.502179,134189e-9,0,.68254,.481359,129392e-9,0,.714286,.46092,124556e-9,0,.746032,.441084,11957e-8,0,.777778,.421517,114652e-9,0,.809524,.402721,109688e-9,0,.84127,.384222,104667e-9,0,.873016,.366534,999633e-10,0,.904762,.349205,950177e-10,0,.936508,.332702,907301e-10,0,.968254,.316599,859769e-10,0,1,1,585473e-12,0,0,1,585507e-12,0,0,1,58602e-11,0,0,.999999,588259e-12,0,0,.999999,594381e-12,0,0,.999998,607754e-12,0,0,.999995,633729e-12,0,0,.99999,68137e-11,0,0,.999984,767003e-12,0,0,.999973,921212e-12,0,0,.999959,120218e-11,0,0,.999936,172024e-11,0,0,.999907,268088e-11,0,0,.999866,445512e-11,0,0,.999806,768481e-11,0,0,.999716,1342e-8,0,0,.999576,232473e-10,0,0,.9993,391694e-10,0,129917e-9,.998498,608429e-10,0,845035e-9,.994132,489743e-10,0,.00237616,.99031,384644e-10,0,.00484456,.987409,421768e-10,0,.00832472,.983981,504854e-10,0,.0128643,.980268,671028e-10,0,.0184947,.974875,852749e-10,0,.025237,.966063,85531e-9,0,.0331046,.956779,900588e-10,0,.0421067,.950259,10577e-8,0,.0522487,.944239,119458e-9,0,.0635343,.936341,122164e-9,0,.0759654,.928047,134929e-9,0,.0895434,.918065,145544e-9,0,.104269,.906267,150531e-9,0,.120142,.893419,161652e-9,0,.137163,.878758,16593e-8,0,.15533,.863699,174014e-9,0,.174645,.848876,177877e-9,0,.195106,.833032,184049e-9,0,.21671,.815557,186088e-9,0,.239454,.797323,19054e-8,0,.263332,.778124,191765e-9,0,.288336,.758929,192535e-9,0,.314451,.738979,192688e-9,0,.341658,.718213,191522e-9,0,.369924,.696947,190491e-9,0,.399202,.675807,187913e-9,0,.429416,.654147,184451e-9,0,.460447,.63229,181442e-9,0,.492064,.610499,177139e-9,0,.523809,.588747,172596e-9,0,.555555,.566783,167457e-9,0,.587301,.545359,162518e-9,0,.619048,.523984,156818e-9,0,.650794,.502917,151884e-9,0,.68254,.482294,145514e-9,0,.714286,.461945,140199e-9,0,.746032,.442133,134101e-9,0,.777778,.422705,128374e-9,0,.809524,.403916,122996e-9,0,.84127,.38554,116808e-9,0,.873016,.367909,111973e-9,0,.904762,.350651,105938e-9,0,.936508,.334208,101355e-9,0,.968254,.318123,957629e-10,0,1,1,111633e-11,0,0,1,111639e-11,0,0,1,111725e-11,0,0,1,112096e-11,0,0,.999999,11311e-10,0,0,.999997,115315e-11,0,0,.999995,11956e-10,0,0,.999989,127239e-11,0,0,.999981,140772e-11,0,0,.999969,164541e-11,0,0,.999952,206607e-11,0,0,.999928,281783e-11,0,0,.999895,416835e-11,0,0,.999848,658728e-11,0,0,.999781,108648e-10,0,0,.999682,182579e-10,0,0,.999523,306003e-10,0,159122e-10,.999205,499862e-10,0,391184e-9,.998131,73306e-9,0,.00147534,.993334,513229e-10,0,.0034227,.99016,467783e-10,0,.00632232,.987321,523413e-10,0,.0102295,.984099,64267e-9,0,.0151794,.980432,843042e-10,0,.0211947,.974976,102819e-9,0,.0282899,.966429,996234e-10,0,.0364739,.957633,111074e-9,0,.0457522,.949422,128644e-9,0,.0561278,.943045,140076e-9,0,.0676023,.935448,146349e-9,0,.0801762,.927225,161854e-9,0,.0938499,.917033,169135e-9,0,.108623,.905762,179987e-9,0,.124496,.892879,189832e-9,0,.141469,.878435,195881e-9,0,.159541,.863114,20466e-8,0,.178713,.84776,209473e-9,0,.198985,.832084,214861e-9,0,.220355,.814915,217695e-9,0,.242823,.796711,220313e-9,0,.266385,.777603,22313e-8,0,.291036,.757991,222471e-9,0,.316767,.738371,222869e-9,0,.343563,.717872,221243e-9,0,.371402,.696619,218089e-9,0,.400248,.675379,21562e-8,0,.430047,.65411,21169e-8,0,.460709,.63241,206947e-9,0,.492079,.61046,201709e-9,0,.52381,.58903,196753e-9,0,.555556,.567267,189637e-9,0,.587302,.545886,184735e-9,0,.619048,.524714,177257e-9,0,.650794,.503789,171424e-9,0,.68254,.483204,164688e-9,0,.714286,.462976,157172e-9,0,.746032,.443294,151341e-9,0,.777778,.423988,143737e-9,0,.809524,.405325,138098e-9,0,.84127,.386981,130698e-9,0,.873016,.369436,125276e-9,0,.904762,.35219,118349e-9,0,.936508,.335804,11312e-8,0,.968254,.319749,106687e-9,0,1,1,204685e-11,0,0,1,204694e-11,0,0,1,204831e-11,0,0,.999999,205428e-11,0,0,.999999,207056e-11,0,0,.999997,210581e-11,0,0,.999993,21732e-10,0,0,.999987,229365e-11,0,0,.999979,250243e-11,0,0,.999965,286127e-11,0,0,.999947,348028e-11,0,0,.999918,455588e-11,0,0,.999881,643303e-11,0,0,.999828,970064e-11,0,0,.999753,153233e-10,0,0,.999642,24793e-9,0,0,.999464,402032e-10,0,122947e-9,.999089,635852e-10,0,807414e-9,.997567,857026e-10,0,.00227206,.992903,594912e-10,0,.00462812,.990011,578515e-10,0,.00794162,.987192,65399e-9,0,.0122534,.98418,819675e-10,0,.0175888,.980491,105514e-9,0,.0239635,.974779,121532e-9,0,.031387,.96675,119144e-9,0,.0398644,.958248,136125e-9,0,.0493982,.948884,155408e-9,0,.0599896,.941673,162281e-9,0,.0716382,.934521,176754e-9,0,.0843437,.926205,192873e-9,0,.0981056,.916089,200038e-9,0,.112923,.904963,213624e-9,0,.128796,.892089,221834e-9,0,.145725,.878028,232619e-9,0,.163709,.86249,238632e-9,0,.182749,.846587,247002e-9,0,.202847,.830988,250702e-9,0,.224001,.814165,255562e-9,0,.246214,.796135,257505e-9,0,.269482,.777052,258625e-9,0,.293805,.757201,258398e-9,0,.319176,.737655,256714e-9,0,.345587,.717477,255187e-9,0,.373021,.696433,251792e-9,0,.401454,.675084,247223e-9,0,.430844,.653907,242213e-9,0,.461125,.632561,237397e-9,0,.492187,.610658,229313e-9,0,.52381,.589322,224402e-9,0,.555556,.567857,216116e-9,0,.587302,.54652,209124e-9,0,.619048,.525433,201601e-9,0,.650794,.504679,192957e-9,0,.68254,.484203,186052e-9,0,.714286,.464203,177672e-9,0,.746032,.444549,170005e-9,0,.777778,.425346,162401e-9,0,.809524,.406706,1544e-7,0,.84127,.388576,147437e-9,0,.873016,.37094,139493e-9,0,.904762,.353996,133219e-9,0,.936508,.337391,125573e-9,0,.968254,.321648,119867e-9,0,1,1,362511e-11,0,0,1,362525e-11,0,0,1,362739e-11,0,0,.999999,363673e-11,0,0,.999998,366214e-11,0,0,.999996,371698e-11,0,0,.999992,382116e-11,0,0,.999986,400554e-11,0,0,.999976,432058e-11,0,0,.999961,485194e-11,0,0,.999938,574808e-11,0,0,.999908,726643e-11,0,0,.999865,984707e-11,0,0,.999807,142217e-10,0,0,.999723,215581e-10,0,0,.999602,336114e-10,0,119113e-10,.999398,527353e-10,0,355813e-9,.998946,805809e-10,0,.00137768,.996647,942908e-10,0,.00322469,.992298,668733e-10,0,.00597897,.989802,716564e-10,0,.00968903,.987019,821355e-10,0,.0143845,.984219,104555e-9,0,.0200831,.980425,131245e-9,0,.0267948,.974241,139613e-9,0,.034525,.967006,145931e-9,0,.0432757,.95893,167153e-9,0,.0530471,.949157,188146e-9,0,.0638386,.94062,194625e-9,0,.0756487,.933509,213721e-9,0,.0884762,.925088,229616e-9,0,.10232,.915178,239638e-9,0,.117178,.904093,254814e-9,0,.133051,.891337,263685e-9,0,.149939,.877326,274789e-9,0,.167841,.861794,280534e-9,0,.18676,.845758,289534e-9,0,.206696,.829792,294446e-9,0,.22765,.813037,296877e-9,0,.249625,.795285,300217e-9,0,.27262,.776323,299826e-9,0,.296636,.756673,299787e-9,0,.321671,.736856,297867e-9,0,.347718,.716883,294052e-9,0,.374768,.696089,289462e-9,0,.402804,.67505,285212e-9,0,.431796,.653509,27653e-8,0,.461695,.63258,271759e-9,0,.49242,.61104,262811e-9,0,.523822,.589567,255151e-9,0,.555556,.568322,246434e-9,0,.587302,.547235,237061e-9,0,.619048,.52616,228343e-9,0,.650794,.505716,219236e-9,0,.68254,.485274,209595e-9,0,.714286,.465411,201011e-9,0,.746032,.445854,19109e-8,0,.777778,.426911,182897e-9,0,.809524,.408222,173569e-9,0,.84127,.390307,165496e-9,0,.873016,.372624,156799e-9,0,.904762,.355804,14917e-8,0,.936508,.33924,140907e-9,0,.968254,.323534,134062e-9,0,1,1,622487e-11,0,0,1,62251e-10,0,0,1,622837e-11,0,0,.999999,624259e-11,0,0,.999998,628127e-11,0,0,.999996,636451e-11,0,0,.999991,65218e-10,0,0,.999984,679782e-11,0,0,.999973,726361e-11,0,0,.999955,803644e-11,0,0,.999931,931397e-11,0,0,.999896,114299e-10,0,0,.999847,149402e-10,0,0,.999784,207461e-10,0,0,.999692,302493e-10,0,0,.999554,454957e-10,0,997275e-10,.999326,690762e-10,0,724813e-9,.998757,101605e-9,0,.0020972,.995367,958745e-10,0,.00432324,.99209,832808e-10,0,.00746347,.989517,887601e-10,0,.0115534,.987008,10564e-8,0,.0166134,.98421,133179e-9,0,.0226552,.98021,161746e-9,0,.0296838,.973676,161821e-9,0,.0377016,.967052,178635e-9,0,.0467079,.959385,206765e-9,0,.0567013,.949461,22476e-8,0,.0676796,.939578,23574e-8,0,.0796403,.932416,25893e-8,0,.0925812,.923759,271228e-9,0,.106501,.914223,289165e-9,0,.121397,.902942,301156e-9,0,.13727,.890419,313852e-9,0,.15412,.876639,324408e-9,0,.171946,.861316,33249e-8,0,.190751,.84496,338497e-9,0,.210537,.828427,345861e-9,0,.231305,.811871,347863e-9,0,.253057,.794397,350225e-9,0,.275797,.775726,349915e-9,0,.299525,.75617,347297e-9,0,.324242,.736091,344232e-9,0,.349947,.716213,340835e-9,0,.376633,.695736,332369e-9,0,.404289,.674961,327943e-9,0,.432895,.653518,318533e-9,0,.462415,.632574,310391e-9,0,.492788,.61134,300755e-9,0,.523909,.590017,290506e-9,0,.555556,.568752,280446e-9,0,.587302,.548061,269902e-9,0,.619048,.52711,258815e-9,0,.650794,.506682,248481e-9,0,.68254,.486524,237141e-9,0,.714286,.466812,226872e-9,0,.746032,.44732,216037e-9,0,.777778,.428473,205629e-9,0,.809524,.409921,195691e-9,0,.84127,.392028,185457e-9,0,.873016,.374606,176436e-9,0,.904762,.357601,166508e-9,0,.936508,.341348,158385e-9,0,.968254,.32542,149203e-9,0,1,1,103967e-10,0,0,1,10397e-9,0,0,1,104019e-10,0,0,.999999,104231e-10,0,0,.999998,104806e-10,0,0,.999995,106042e-10,0,0,.999991,108366e-10,0,0,.999982,112415e-10,0,0,.999968,119174e-10,0,0,.99995,130227e-10,0,0,.999922,148176e-10,0,0,.999884,177303e-10,0,0,.99983,224564e-10,0,0,.999758,300966e-10,0,0,.999654,423193e-10,0,549083e-11,.999503,614848e-10,0,296087e-9,.999237,903576e-10,0,.00123144,.998491,1271e-7,0,.00295954,.994594,107754e-9,0,.00555829,.99178,103025e-9,0,.00907209,.989265,11154e-8,0,.0135257,.986998,136296e-9,0,.0189327,.984137,169154e-9,0,.0252993,.979798,196671e-9,0,.0326272,.97337,196678e-9,0,.0409157,.967239,223121e-9,0,.0501623,.959543,253809e-9,0,.0603638,.949466,265972e-9,0,.0715171,.939074,288372e-9,0,.0836187,.931118,310983e-9,0,.0966657,.922525,325561e-9,0,.110656,.912983,345725e-9,0,.125588,.901617,3556e-7,0,.141461,.889487,374012e-9,0,.158275,.875787,383445e-9,0,.176031,.860654,393972e-9,0,.19473,.844417,400311e-9,0,.214374,.82741,405004e-9,0,.234967,.810545,407378e-9,0,.256512,.793312,407351e-9,0,.279011,.774847,406563e-9,0,.302468,.755621,404903e-9,0,.326887,.735511,397486e-9,0,.352266,.715435,39357e-8,0,.378605,.695403,384739e-9,0,.405897,.674681,376108e-9,0,.43413,.65359,365997e-9,0,.463277,.632471,354957e-9,0,.493295,.61151,343593e-9,0,.524106,.59064,331841e-9,0,.555561,.569386,318891e-9,0,.587302,.548785,3072e-7,0,.619048,.528146,29361e-8,0,.650794,.507872,281709e-9,0,.68254,.487805,268627e-9,0,.714286,.468196,255887e-9,0,.746032,.448922,243997e-9,0,.777778,.430093,231662e-9,0,.809524,.411845,220339e-9,0,.84127,.393808,208694e-9,0,.873016,.376615,198045e-9,0,.904762,.359655,187375e-9,0,.936508,.343452,177371e-9,0,.968254,.32765,167525e-9,0,1,1,169351e-10,0,0,1,169356e-10,0,0,1,169427e-10,0,0,.999999,169736e-10,0,0,.999998,170575e-10,0,0,.999995,172372e-10,0,0,.99999,175739e-10,0,0,.999979,181568e-10,0,0,.999966,191206e-10,0,0,.999944,20677e-9,0,0,.999912,231644e-10,0,0,.999869,271268e-10,0,0,.999811,334272e-10,0,0,.99973,433979e-10,0,0,.999617,590083e-10,0,680315e-10,.999445,829497e-10,0,612796e-9,.999138,118019e-9,0,.00187408,.998095,156712e-9,0,.00395791,.993919,125054e-9,0,.00692144,.991333,126091e-9,0,.0107962,.989226,144912e-9,0,.0155986,.986954,175737e-9,0,.0213364,.983982,213883e-9,0,.0280114,.979128,234526e-9,0,.0356226,.973327,243725e-9,0,.0441668,.967416,2773e-7,0,.0536399,.959729,308799e-9,0,.0640376,.949758,322447e-9,0,.0753554,.939173,350021e-9,0,.0875893,.9296,370089e-9,0,.100736,.921181,391365e-9,0,.114793,.91164,413636e-9,0,.129759,.900435,427068e-9,0,.145632,.888183,441046e-9,0,.162412,.874772,454968e-9,0,.180101,.859566,461882e-9,0,.1987,.843579,471556e-9,0,.218213,.826453,474335e-9,0,.238641,.809164,477078e-9,0,.259989,.792179,47755e-8,0,.282262,.773866,472573e-9,0,.305464,.754944,469765e-9,0,.329599,.735133,462371e-9,0,.35467,.714858,453674e-9,0,.380678,.694829,443888e-9,0,.407622,.674453,432052e-9,0,.435493,.653685,420315e-9,0,.464275,.632666,406829e-9,0,.493938,.611676,392234e-9,0,.524422,.591193,379208e-9,0,.555624,.570145,36319e-8,0,.587302,.549566,349111e-9,0,.619048,.529278,334166e-9,0,.650794,.509026,318456e-9,0,.68254,.489186,30449e-8,0,.714286,.469662,289051e-9,0,.746032,.450691,275494e-9,0,.777778,.431841,261437e-9,0,.809524,.413752,247846e-9,0,.84127,.395951,235085e-9,0,.873016,.378633,222245e-9,0,.904762,.36194,210533e-9,0,.936508,.345599,198494e-9,0,.968254,.329999,188133e-9,0,1,1,269663e-10,0,0,1,26967e-9,0,0,1,269772e-10,0,0,.999999,270214e-10,0,0,.999998,271415e-10,0,0,.999994,27398e-9,0,0,.999988,278771e-10,0,0,.999977,287019e-10,0,0,.999961,300544e-10,0,0,.999937,322138e-10,0,0,.999904,356163e-10,0,0,.999854,409465e-10,0,0,.99979,492651e-10,0,0,.999699,621722e-10,0,88288e-11,.999572,819715e-10,0,223369e-9,.999381,111689e-9,0,.00105414,.999016,153862e-9,0,.0026493,.997437,187667e-9,0,.00508608,.993545,155672e-9,0,.00840554,.991135,161455e-9,0,.012629,.989157,188241e-9,0,.0177661,.986874,226229e-9,0,.0238198,.983714,268668e-9,0,.0307887,.978301,277109e-9,0,.0386688,.973227,303446e-9,0,.0474554,.967317,341851e-9,0,.0571428,.959477,370885e-9,0,.0677256,.950012,392753e-9,0,.0791988,.939484,42781e-8,0,.0915576,.928135,443866e-9,0,.104798,.919819,472959e-9,0,.118918,.910049,491551e-9,0,.133915,.899181,512616e-9,0,.149788,.886881,523563e-9,0,.166537,.87359,540183e-9,0,.184164,.858613,547386e-9,0,.202669,.842809,554809e-9,0,.222056,.825727,558316e-9,0,.242329,.808086,557824e-9,0,.263492,.790728,556346e-9,0,.285551,.772987,552672e-9,0,.30851,.7541,543738e-9,0,.332376,.734669,536107e-9,0,.357153,.714411,523342e-9,0,.382845,.694196,512238e-9,0,.409454,.674252,497465e-9,0,.436977,.65357,481096e-9,0,.465404,.632999,467054e-9,0,.494713,.611994,448771e-9,0,.524864,.591604,431889e-9,0,.555779,.571134,415238e-9,0,.587302,.550528,396369e-9,0,.619048,.530292,379477e-9,0,.650794,.510364,361488e-9,0,.68254,.490749,343787e-9,0,.714286,.471266,327822e-9,0,.746032,.452462,310626e-9,0,.777778,.433907,295352e-9,0,.809524,.415659,279179e-9,0,.84127,.398138,264685e-9,0,.873016,.380833,249905e-9,0,.904762,.364247,236282e-9,0,.936508,.348041,222905e-9,0,.968254,.332389,210522e-9,0,1,1,420604e-10,0,0,1,420614e-10,0,0,1,420757e-10,0,0,.999999,42138e-9,0,0,.999997,423067e-10,0,0,.999993,426668e-10,0,0,.999986,433372e-10,0,0,.999974,444857e-10,0,0,.999956,463554e-10,0,0,.99993,493105e-10,0,0,.999892,539077e-10,0,0,.999838,610005e-10,0,0,.999767,718822e-10,0,0,.999666,884581e-10,0,365471e-10,.999525,113398e-9,0,485623e-9,.999311,150043e-9,0,.00162096,.998865,200063e-9,0,.00355319,.996278,211014e-9,0,.00633818,.992956,189672e-9,0,.0100043,.991017,210262e-9,0,.0145648,.989055,244292e-9,0,.0200237,.986741,290481e-9,0,.0263798,.983288,334303e-9,0,.033629,.977784,340307e-9,0,.0417652,.973037,377864e-9,0,.0507821,.967181,4239e-7,0,.060673,.958971,443854e-9,0,.0714314,.950093,483039e-9,0,.0830518,.939552,517934e-9,0,.0955288,.927678,539449e-9,0,.108859,.918278,568604e-9,0,.123038,.908449,588505e-9,0,.138065,.897713,612473e-9,0,.153938,.885533,625575e-9,0,.170657,.872131,63854e-8,0,.188224,.857517,647034e-9,0,.20664,.841796,65209e-8,0,.225909,.824726,6544e-7,0,.246035,.807297,655744e-9,0,.267022,.789058,646716e-9,0,.288878,.77189,643898e-9,0,.311607,.753082,629973e-9,0,.335216,.7341,621564e-9,0,.359713,.714094,605171e-9,0,.385103,.693839,588752e-9,0,.41139,.673891,573294e-9,0,.438576,.653565,552682e-9,0,.466656,.633326,533446e-9,0,.495617,.612582,514635e-9,0,.525431,.59205,49303e-8,0,.556041,.571918,471842e-9,0,.587338,.551572,451713e-9,0,.619048,.531553,430049e-9,0,.650794,.51175,410445e-9,0,.68254,.49238,390098e-9,0,.714286,.473143,370033e-9,0,.746032,.45423,351205e-9,0,.777778,.435963,332049e-9,0,.809524,.41787,315021e-9,0,.84127,.400387,297315e-9,0,.873016,.383332,281385e-9,0,.904762,.366665,265397e-9,0,.936508,.350633,250601e-9,0,.968254,.334964,23589e-8,0,1,1,643736e-10,0,0,1,64375e-9,0,0,1,643947e-10,0,0,.999999,64481e-9,0,0,.999997,647143e-10,0,0,.999994,652119e-10,0,0,.999985,661359e-10,0,0,.999972,677116e-10,0,0,.999952,702599e-10,0,0,.999922,742517e-10,0,0,.99988,803906e-10,0,0,.99982,897315e-10,0,0,.999741,103838e-9,0,0,.999629,12496e-8,0,149024e-9,.999474,156161e-9,0,861027e-9,.999229,201034e-9,0,.00231198,.998662,259069e-9,0,.00458147,.995299,245439e-9,0,.00770895,.992732,24498e-8,0,.0117126,.990847,273211e-9,0,.0165989,.988911,316492e-9,0,.0223674,.98654,37161e-8,0,.0290135,.982636,410352e-9,0,.0365309,.977346,421756e-9,0,.0449117,.972909,475578e-9,0,.0541481,.966821,522482e-9,0,.0642326,.958686,545008e-9,0,.075158,.949754,589286e-9,0,.0869181,.939184,619995e-9,0,.0995074,.927505,654266e-9,0,.112922,.916606,682362e-9,0,.127157,.906707,704286e-9,0,.142212,.895937,725909e-9,0,.158085,.883913,743939e-9,0,.174776,.870642,755157e-9,0,.192287,.856241,764387e-9,0,.210619,.84069,771032e-9,0,.229775,.823728,765906e-9,0,.249761,.806481,767604e-9,0,.270582,.787924,754385e-9,0,.292243,.770588,749668e-9,0,.314753,.751991,731613e-9,0,.338118,.733407,717655e-9,0,.362347,.713688,700604e-9,0,.387447,.693595,678765e-9,0,.413424,.673426,657042e-9,0,.440284,.65359,635892e-9,0,.468027,.633576,611569e-9,0,.496645,.613144,586011e-9,0,.526122,.592711,563111e-9,0,.556417,.572722,537699e-9,0,.587451,.552762,512556e-9,0,.619048,.532985,489757e-9,0,.650794,.513219,464139e-9,0,.68254,.493992,442193e-9,0,.714286,.47509,418629e-9,0,.746032,.456287,397045e-9,0,.777778,.438152,375504e-9,0,.809524,.420294,35492e-8,0,.84127,.402749,335327e-9,0,.873016,.385879,316422e-9,0,.904762,.369352,298333e-9,0,.936508,.353301,281417e-9,0,.968254,.337781,265203e-9,0,1,1,968267e-10,0,0,1,968284e-10,0,0,1,968556e-10,0,0,.999999,969733e-10,0,0,.999997,972913e-10,0,0,.999993,979688e-10,0,0,.999984,992239e-10,0,0,.999969,101356e-9,0,0,.999946,104784e-9,0,0,.999913,110111e-9,0,0,.999868,118217e-9,0,0,.999801,130396e-9,0,0,.999712,148523e-9,0,124907e-10,.999589,175233e-9,0,355405e-9,.999416,213999e-9,0,.0013528,.999136,268529e-9,0,.00312557,.998367,333088e-9,0,.00573045,.994701,304757e-9,0,.00919397,.992497,318031e-9,0,.0135261,.990608,353863e-9,0,.0187278,.988715,409044e-9,0,.0247947,.986241,472967e-9,0,.0317196,.981696,495104e-9,0,.039494,.977097,532873e-9,0,.0481087,.972583,594447e-9,0,.0575549,.966142,636867e-9,0,.0678242,.95823,669899e-9,0,.0789089,.949677,719499e-9,0,.0908023,.939226,750584e-9,0,.103499,.927501,793183e-9,0,.116993,.915199,81995e-8,0,.131282,.90498,847654e-9,0,.146364,.894243,868929e-9,0,.162237,.882154,884278e-9,0,.178902,.869161,898108e-9,0,.196358,.854751,901254e-9,0,.21461,.839368,90679e-8,0,.23366,.822874,901541e-9,0,.253512,.805514,897297e-9,0,.274174,.78716,881856e-9,0,.29565,.769061,870032e-9,0,.31795,.751,851719e-9,0,.341081,.732614,830671e-9,0,.365053,.713171,806569e-9,0,.389874,.693472,78338e-8,0,.415553,.673528,756404e-9,0,.442098,.653397,726872e-9,0,.469512,.633781,700494e-9,0,.497794,.613877,67105e-8,0,.526935,.593506,640361e-9,0,.556908,.573667,613502e-9,0,.587657,.553932,583177e-9,0,.61906,.534345,554375e-9,0,.650794,.515042,527811e-9,0,.68254,.495674,499367e-9,0,.714286,.477132,47429e-8,0,.746032,.458609,447726e-9,0,.777778,.440354,424205e-9,0,.809524,.422765,399549e-9,0,.84127,.405472,378315e-9,0,.873016,.388482,355327e-9,0,.904762,.372191,336122e-9,0,.936508,.356099,315247e-9,0,.968254,.340737,29794e-8,0,1,1,143327e-9,0,0,1,14333e-8,0,0,1,143366e-9,0,0,.999999,143524e-9,0,0,.999996,143952e-9,0,0,.999991,144862e-9,0,0,.999981,146544e-9,0,0,.999966,149391e-9,0,0,.999941,153946e-9,0,0,.999905,160971e-9,0,0,.999852,171562e-9,0,0,.99978,18729e-8,0,0,.999681,210386e-9,0,826239e-10,.999546,243906e-9,0,664807e-9,.999352,291739e-9,0,.00196192,.999027,357419e-9,0,.00405941,.997886,422349e-9,0,.00699664,.99419,385008e-9,0,.0107896,.99214,409775e-9,0,.0154415,.990274,456418e-9,0,.0209488,.988455,527008e-9,0,.0273037,.985804,597685e-9,0,.0344969,.98103,613124e-9,0,.0425183,.976674,668321e-9,0,.0513575,.972021,736985e-9,0,.0610046,.965274,773789e-9,0,.0714508,.958046,830852e-9,0,.0826877,.949333,875766e-9,0,.0947085,.939135,917088e-9,0,.107507,.927119,952244e-9,0,.121078,.91469,990626e-9,0,.135419,.903006,.00101304,0,.150526,.892368,.00103834,0,.166399,.880231,.00105002,0,.183038,.867432,.00106331,0,.200443,.853208,.00106783,0,.218618,.837956,.00106458,0,.237566,.821772,.00105945,0,.257291,.804328,.00104685,0,.2778,.786465,.00103178,0,.2991,.768004,.00101077,0,.321199,.74972,985504e-9,0,.344106,.731682,962893e-9,0,.36783,.712813,932146e-9,0,.392383,.693139,89871e-8,0,.417774,.673566,869678e-9,0,.444013,.653483,835525e-9,0,.471107,.633891,799853e-9,0,.49906,.614433,766838e-9,0,.527869,.594586,732227e-9,0,.557517,.574769,696442e-9,0,.587966,.555149,663935e-9,0,.61913,.535898,629826e-9,0,.650794,.516753,596486e-9,0,.68254,.497816,567078e-9,0,.714286,.479034,534399e-9,0,.746032,.460975,507013e-9,0,.777778,.442935,477421e-9,0,.809524,.425263,451101e-9,0,.84127,.408248,424964e-9,0,.873016,.391339,39993e-8,0,.904762,.37513,377619e-9,0,.936508,.359172,354418e-9,0,.968254,.343876,334823e-9,0,1,1,209042e-9,0,0,1,209045e-9,0,0,1,209093e-9,0,0,.999999,209304e-9,0,0,.999996,209871e-9,0,0,.999991,211078e-9,0,0,.999979,213304e-9,0,0,.999963,217061e-9,0,0,.999933,223042e-9,0,0,.999894,232206e-9,0,0,.999837,245901e-9,0,0,.999756,266023e-9,0,102927e-11,.999648,295204e-9,0,233468e-9,.999499,336958e-9,0,.00108237,.999283,395563e-9,0,.00268832,.998896,473785e-9,0,.00511138,.997006,520008e-9,0,.00837705,.993819,497261e-9,0,.0124928,.991632,523722e-9,0,.0174561,.989875,587258e-9,0,.0232596,.988109,676329e-9,0,.0298932,.985155,747701e-9,0,.0373453,.980479,768803e-9,0,.0456045,.976271,841054e-9,0,.0546593,.971347,911469e-9,0,.0644994,.964528,953057e-9,0,.0751152,.957632,.00102221,0,.0864981,.948681,.00106122,0,.0986407,.938716,.00111857,0,.111537,.926629,.00114762,0,.125182,.914025,.00118995,0,.139571,.901026,.00121228,0,.154703,.890358,.00123946,0,.170576,.878283,.0012527,0,.18719,.865459,.00125536,0,.204547,.851407,.00126134,0,.222648,.836276,.00124759,0,.241498,.820436,.00124443,0,.261101,.803253,.00122071,0,.281465,.785562,.00120107,0,.302595,.76718,.00117762,0,.324501,.748551,.00114289,0,.347192,.730564,.00110872,0,.370679,.712253,.00107636,0,.394973,.692867,.00103646,0,.420085,.673695,996793e-9,0,.446027,.653912,95675e-8,0,.47281,.634129,916739e-9,0,.500441,.615004,874401e-9,0,.528921,.595587,833411e-9,0,.558244,.575965,794556e-9,0,.588384,.5566,75196e-8,0,.619281,.537428,716381e-9,0,.650795,.518623,676558e-9,0,.68254,.499964,64074e-8,0,.714286,.481356,605984e-9,0,.746032,.463279,570256e-9,0,.777778,.445673,540138e-9,0,.809524,.428032,507299e-9,0,.84127,.411112,479553e-9,0,.873016,.394444,450737e-9,0,.904762,.378247,424269e-9,0,.936508,.362415,399111e-9,0,.968254,.347103,375274e-9,0,1,1,300729e-9,0,0,1,300733e-9,0,0,1,300797e-9,0,0,.999998,301072e-9,0,0,.999996,301817e-9,0,0,.999989,303398e-9,0,0,.999977,306309e-9,0,0,.999958,311209e-9,0,0,.999927,318975e-9,0,0,.999884,330804e-9,0,0,.99982,34834e-8,0,0,.999733,373854e-9,0,326995e-10,.999613,410424e-9,0,477174e-9,.999447,462047e-9,0,.00161099,.999204,533322e-9,0,.00353153,.998725,624964e-9,0,.00627965,.995871,631786e-9,0,.0098693,.993194,632017e-9,0,.0143011,.991541,68923e-8,0,.019568,.989773,766892e-9,0,.0256593,.987647,863668e-9,0,.0325625,.984193,922089e-9,0,.0402647,.980016,970749e-9,0,.0487532,.975859,.00106027,0,.058016,.970514,.00112239,0,.0680419,.963625,.00117212,0,.0788208,.956959,.00125211,0,.0903439,.947956,.00129411,0,.102604,.93809,.00135879,0,.115594,.92659,.00139309,0,.129309,.913829,.00143253,0,.143745,.90005,.00145809,0,.158901,.888129,.0014748,0,.174774,.87607,.00148756,0,.191365,.863461,.00148714,0,.208674,.849594,.00148892,0,.226705,.834531,.00146496,0,.245461,.81903,.0014579,0,.264947,.802122,.00143039,0,.28517,.78445,.00139717,0,.306137,.766434,.00136312,0,.327857,.747816,.00132597,0,.350341,.729519,.00128323,0,.373598,.711454,.00123803,0,.397642,.692699,.00119097,0,.422485,.673723,.00114565,0,.448139,.654386,.00109552,0,.474619,.634673,.00104553,0,.501933,.615554,99985e-8,0,.530089,.596462,948207e-9,0,.559087,.577385,902299e-9,0,.588913,.558257,856448e-9,0,.619525,.5392,810395e-9,0,.650826,.520543,768558e-9,0,.68254,.502206,7239e-7,0,.714286,.48402,685794e-9,0,.746032,.465779,64471e-8,0,.777778,.448455,609583e-9,0,.809524,.431091,57227e-8,0,.84127,.414147,54042e-8,0,.873016,.39765,506545e-9,0,.904762,.381576,477635e-9,0,.936508,.365881,448446e-9,0,.968254,.350582,421424e-9,0,1,1,427144e-9,0,0,1,427151e-9,0,0,1,427232e-9,0,0,.999998,42759e-8,0,0,.999995,428555e-9,0,0,.999988,430603e-9,0,0,.999976,434368e-9,0,0,.999952,440688e-9,0,0,.999919,450667e-9,0,0,.999871,46578e-8,0,0,.999801,488024e-9,0,0,.999704,520092e-9,0,129791e-9,.999572,565553e-9,0,821056e-9,.999389,628906e-9,0,.00225241,.999114,714911e-9,0,.00449109,.998488,819218e-9,0,.00756249,.995234,80415e-8,0,.0114716,.993021,830181e-9,0,.0162131,.991407,902645e-9,0,.021776,.989625,996934e-9,0,.0281471,.987064,.00109707,0,.0353118,.983265,.00114353,0,.0432562,.979535,.0012272,0,.0519665,.975224,.00132642,0,.0614298,.969574,.00138092,0,.0716348,.963021,.00145896,0,.0825709,.956046,.00152834,0,.094229,.947136,.00158217,0,.106602,.937313,.0016347,0,.119682,.926073,.00168383,0,.133465,.913121,.00171627,0,.147947,.899165,.00174229,0,.163125,.885891,.00176137,0,.178998,.873783,.00176406,0,.195566,.861331,.00176156,0,.21283,.847569,.00175346,0,.230793,.832785,.00172753,0,.249459,.817442,.00170204,0,.268832,.800613,.00166576,0,.28892,.783597,.00162909,0,.30973,.76571,.0015826,0,.331271,.747021,.00153106,0,.353554,.728593,.00148036,0,.37659,.710661,.00142808,0,.400391,.692426,.00136906,0,.424973,.673623,.00131066,0,.450347,.65494,.00125569,0,.476531,.635448,.00119517,0,.503535,.616221,.00113828,0,.531372,.597531,.0010816,0,.560047,.578795,.00102673,0,.589554,.559892,970985e-9,0,.619869,.541307,919773e-9,0,.650923,.522608,868479e-9,0,.68254,.504484,82137e-8,0,.714286,.486603,772916e-9,0,.746032,.468802,730353e-9,0,.777778,.451172,684955e-9,0,.809524,.434348,647565e-9,0,.84127,.417445,605863e-9,0,.873016,.401077,571885e-9,0,.904762,.385039,536034e-9,0,.936508,.369483,504227e-9,0,.968254,.354272,473165e-9,0,1,1,599525e-9,0,0,1,599533e-9,0,0,1,599639e-9,0,0,.999998,600097e-9,0,0,.999994,601336e-9,0,0,.999987,603958e-9,0,0,.999972,608775e-9,0,0,.999949,616842e-9,0,0,.999912,629534e-9,0,0,.999857,648658e-9,0,0,.999781,676615e-9,0,538873e-11,.999674,716574e-9,0,308602e-9,.999528,772641e-9,0,.00127003,.999326,849806e-9,0,.00300783,.999009,952682e-9,0,.00556637,.998112,.00106394,0,.00895889,.994496,.00102228,0,.0131827,.992806,.00108586,0,.0182277,.991211,.0011759,0,.0240795,.989415,.00128955,0,.030723,.986499,.00139038,0,.0381418,.982679,.00144539,0,.046321,.978839,.00153954,0,.0552459,.974295,.00164417,0,.0649034,.968784,.00171517,0,.0752814,.962324,.00180282,0,.0863693,.954956,.00186387,0,.0981578,.94624,.00193817,0,.110639,.936517,.00198156,0,.123806,.925186,.00203042,0,.137655,.91252,.0020664,0,.15218,.898441,.00207822,0,.16738,.884394,.0020992,0,.183253,.871273,.00208748,0,.199799,.859057,.00208686,0,.21702,.845243,.00205519,0,.234918,.830723,.00202868,0,.253496,.815801,.00199501,0,.272761,.79914,.00194193,0,.292719,.782372,.00188824,0,.313377,.76482,.00183695,0,.334745,.746586,.00177418,0,.356833,.7281,.00170628,0,.379654,.709842,.00164063,0,.403221,.692019,.00157355,0,.427548,.67364,.00150262,0,.452651,.655277,.00143473,0,.478545,.636438,.00136371,0,.505246,.617364,.00129911,0,.532768,.598603,.00123014,0,.561122,.580195,.00116587,0,.590309,.561786,.00110398,0,.620318,.543377,.00104148,0,.651102,.525093,983984e-9,0,.682545,.506791,92667e-8,0,.714286,.489291,874326e-9,0,.746032,.471811,821734e-9,0,.777778,.454435,774698e-9,0,.809524,.437493,727302e-9,0,.84127,.420977,684039e-9,0,.873016,.404729,64373e-8,0,.904762,.388756,60285e-8,0,.936508,.373344,56765e-8,0,.968254,.358191,531929e-9,0,1,1,832169e-9,0,0,1,832178e-9,0,0,1,83231e-8,0,0,.999998,832893e-9,0,0,.999995,834465e-9,0,0,.999985,837791e-9,0,0,.999969,843893e-9,0,0,.999944,854086e-9,0,0,.999903,870071e-9,0,0,.999843,894042e-9,0,0,.999759,928865e-9,0,531805e-10,.999643,978242e-9,0,579365e-9,.99948,.00104684,0,.00182774,.999255,.00114012,0,.00387804,.998885,.00126188,0,.00675709,.997405,.00135888,0,.010468,.99424,.00133626,0,.0150018,.992458,.00140905,0,.0203443,.990929,.00152305,0,.0264786,.989116,.00165882,0,.0333875,.985624,.00174128,0,.0410536,.982003,.00182108,0,.0494609,.978336,.00194498,0,.0585941,.973184,.00202708,0,.0684396,.9678,.00212166,0,.0789851,.961348,.00221366,0,.0902199,.953841,.00228219,0,.102134,.94534,.00235662,0,.114721,.935552,.00240572,0,.127972,.924064,.00244405,0,.141884,.911827,.00247557,0,.156451,.897731,.00248374,0,.171672,.883409,.00249863,0,.187545,.868625,.00246688,0,.20407,.856529,.00246523,0,.221249,.842999,.00242368,0,.239083,.828505,.00237354,0,.257578,.813825,.00232588,0,.276738,.797813,.00226731,0,.296569,.781097,.00219704,0,.31708,.764038,.00212394,0,.338281,.746067,.00204786,0,.360181,.727687,.00196728,0,.382794,.709571,.00188779,0,.406133,.691503,.00180532,0,.430213,.673673,.00171849,0,.45505,.655732,.00164147,0,.480662,.637399,.00155858,0,.507065,.618616,.00147641,0,.534278,.60005,.00140125,0,.562313,.581713,.00132441,0,.59118,.563546,.00125014,0,.620875,.545605,.00118249,0,.651373,.527559,.0011116,0,.682593,.509764,.00104979,0,.714286,.49193,985977e-9,0,.746032,.475011,928592e-9,0,.777778,.457878,873466e-9,0,.809524,.440979,819585e-9,0,.84127,.424613,772365e-9,0,.873016,.408549,722195e-9,0,.904762,.392771,680014e-9,0,.936508,.377317,636797e-9,0,.968254,.362352,598318e-9,0,1,1,.00114313,0,0,1,.00114314,0,0,.999999,.00114331,0,0,.999998,.00114404,0,0,.999994,.00114601,0,0,.999984,.00115019,0,0,.999967,.00115784,0,0,.999937,.0011706,0,0,.999894,.00119054,0,0,.999828,.00122031,0,0,.999735,.00126331,0,169263e-9,.999606,.00132382,0,949167e-9,.999426,.0014071,0,.00249668,.999173,.00151895,0,.00486392,.99873,.00166102,0,.00806323,.996243,.0017023,0,.0120895,.993779,.00172782,0,.0169288,.9919,.0018108,0,.0225633,.990524,.00196028,0,.028974,.98868,.00212014,0,.036142,.984663,.00217598,0,.044049,.981457,.00230563,0,.0526781,.977608,.00243966,0,.0620137,.972215,.00251336,0,.0720418,.966798,.0026285,0,.0827499,.960241,.00271409,0,.0941271,.952489,.00278381,0,.106164,.944127,.00285399,0,.118852,.934282,.00290994,0,.132185,.923271,.00294558,0,.146157,.910803,.00296269,0,.160766,.896705,.00296803,0,.176007,.88238,.00296637,0,.19188,.867116,.00293163,0,.208385,.853636,.00289418,0,.225523,.840469,.00284663,0,.243296,.82639,.00278594,0,.261709,.811759,.00271618,0,.280767,.796113,.00263187,0,.300476,.779518,.00254589,0,.320845,.763142,.00246003,0,.341883,.745464,.00236529,0,.363601,.727491,.00226536,0,.386011,.709414,.00216375,0,.409128,.691396,.00207127,0,.432967,.67368,.00197106,0,.457545,.656049,.00187022,0,.482881,.638188,.00177605,0,.508992,.620177,.00168482,0,.535899,.601506,.00158909,0,.563619,.58362,.00150583,0,.592165,.565496,.00141791,0,.621544,.54789,.00133693,0,.651743,.530323,.00126038,0,.682709,.512795,.00118556,0,.714286,.495199,.00111527,0,.746032,.478101,.0010489,0,.777778,.461511,984264e-9,0,.809524,.444879,92591e-8,0,.84127,.428424,866582e-9,0,.873016,.412495,814463e-9,0,.904762,.396975,764498e-9,0,.936508,.381614,715967e-9,0,.968254,.366732,672483e-9,0,1,1,.00155501,0,0,1,.00155503,0,0,1,.00155524,0,0,.999998,.00155615,0,0,.999994,.0015586,0,0,.999983,.00156379,0,0,.999963,.0015733,0,0,.999932,.00158911,0,0,.999882,.00161376,0,0,.99981,.00165041,0,100875e-10,.999708,.00170304,0,367658e-9,.999565,.00177658,0,.0014234,.999368,.00187688,0,.00327939,.999081,.00200989,0,.00596629,.99852,.00217177,0,.0094852,.99549,.0021745,0,.013824,.993252,.00222357,0,.0189642,.991727,.00235022,0,.0248856,.989951,.00250561,0,.0315669,.988029,.00268829,0,.0389882,.984029,.0027496,0,.0471302,.980683,.00289793,0,.0559754,.976554,.00303315,0,.0655081,.97139,.00313257,0,.0757138,.965544,.00323656,0,.08658,.95912,.00333432,0,.0980954,.951183,.0034039,0,.110251,.942974,.00347515,0,.123038,.932642,.00350381,0,.13645,.922158,.00354519,0,.150482,.909404,.00353851,0,.165129,.896071,.0035435,0,.18039,.881206,.00349936,0,.196263,.866077,.00347256,0,.212748,.85093,.003415,0,.229847,.837703,.00333367,0,.247561,.823878,.003249,0,.265895,.809449,.00316347,0,.284854,.794379,.00306351,0,.304445,.778138,.0029499,0,.324675,.761997,.00284099,0,.345555,.744938,.00272104,0,.367095,.727212,.00260715,0,.389309,.709549,.00248855,0,.41221,.691704,.00236783,0,.435814,.673689,.00225178,0,.460138,.656453,.00213765,0,.485203,.639128,.00202178,0,.511028,.621512,.00191443,0,.537634,.603598,.00180977,0,.565041,.58559,.00170456,0,.593268,.567852,.00160927,0,.622327,.5503,.00151395,0,.652217,.533033,.00142499,0,.682907,.515942,.00133955,0,.714296,.498814,.0012602,0,.746032,.481595,.00118188,0,.777778,.465117,.00111171,0,.809524,.448865,.00104091,0,.84127,.432711,976618e-9,0,.873016,.416822,91859e-8,0,.904762,.401272,857704e-9,0,.936508,.386226,807172e-9,0,.968254,.371321,75464e-8,0,1,1,.00209596,0,0,1,.00209598,0,0,1,.00209624,0,0,.999997,.00209736,0,0,.999991,.00210039,0,0,.999979,.00210678,0,0,.999959,.00211847,0,0,.999925,.0021379,0,0,.99987,.00216809,0,0,.999791,.00221281,0,681487e-10,.999677,.00227669,0,658161e-9,.999521,.00236533,0,.00200635,.999301,.00248514,0,.0041779,.998977,.00264185,0,.00718648,.998191,.00281695,0,.0110239,.994801,.00278518,0,.015672,.993091,.00288774,0,.0211091,.991571,.00303931,0,.0273123,.9897,.00321643,0,.034259,.987023,.00337332,0,.0419282,.983289,.00346146,0,.0502998,.979892,.00363704,0,.0593562,.975111,.00373601,0,.069081,.970351,.0038842,0,.0794598,.964131,.00397053,0,.0904798,.957747,.00408078,0,.10213,.949536,.00413533,0,.1144,.941372,.00420305,0,.127284,.931049,.00422815,0,.140772,.920647,.00425048,0,.154862,.908033,.0042281,0,.169548,.895028,.00422026,0,.184828,.879968,.00415042,0,.200701,.864875,.00408821,0,.217167,.84918,.00400909,0,.234227,.834934,.00391178,0,.251884,.821397,.00380066,0,.270141,.807135,.00367974,0,.289004,.792363,.00355172,0,.308479,.776661,.003411,0,.328575,.760705,.00328123,0,.349301,.744408,.00314003,0,.370668,.726994,.0029906,0,.392689,.709598,.00285034,0,.415379,.692112,.00271179,0,.438754,.674435,.00257185,0,.46283,.65676,.00243425,0,.48763,.639982,.00230351,0,.513173,.622983,.0021777,0,.539482,.605471,.00204991,0,.566579,.58796,.00193759,0,.594488,.570463,.00181976,0,.623226,.553058,.00171497,0,.6528,.535894,.00161109,0,.683198,.519089,.00151394,0,.714354,.502454,.00142122,0,.746032,.485681,.00133488,0,.777778,.468935,.00124975,0,.809524,.452951,.00117309,0,.84127,.437139,.00110155,0,.873016,.421446,.00103124,0,.904762,.405951,966387e-9,0,.936508,.391003,908119e-9,0,.968254,.376198,848057e-9,0,1,1,.00280076,0,0,1,.00280078,0,0,.999999,.00280109,0,0,.999997,.00280246,0,0,.999992,.00280616,0,0,.999979,.00281396,0,0,.999956,.00282822,0,0,.999916,.00285186,0,0,.999857,.0028885,0,0,.999768,.00294259,0,196026e-9,.999645,.00301946,0,.00104842,.99947,.00312541,0,.00270199,.999229,.00326733,0,.00519449,.998852,.00344992,0,.00852602,.997558,.00361052,0,.0126804,.994417,.0035898,0,.017635,.992824,.00372393,0,.023365,.991344,.00390695,0,.0298456,.989337,.00410392,0,.0370529,.985811,.00420987,0,.0449651,.982772,.00437488,0,.0535615,.979001,.00455069,0,.0628243,.974102,.00464462,0,.0727368,.969197,.00480577,0,.0832844,.962759,.00487818,0,.0944545,.956207,.00498176,0,.106236,.947909,.00503392,0,.118619,.939596,.00507474,0,.131595,.929642,.00509798,0,.145159,.918807,.00508476,0,.159305,.906921,.00505634,0,.174028,.893312,.00498845,0,.189327,.878933,.0049133,0,.2052,.863986,.0048259,0,.221647,.847936,.00470848,0,.23867,.832253,.00456889,0,.25627,.818619,.00442726,0,.274453,.804788,.00427677,0,.293222,.790241,.00411906,0,.312585,.775162,.00394833,0,.33255,.759463,.00377366,0,.353126,.743598,.00361026,0,.374324,.72697,.00343627,0,.396158,.709646,.00326422,0,.418641,.69277,.00309717,0,.44179,.675371,.0029356,0,.465624,.657863,.00277712,0,.490163,.640772,.00261738,0,.515429,.624441,.0024737,0,.541445,.607497,.00233125,0,.568236,.590438,.00218994,0,.595828,.573224,.0020664,0,.624242,.556168,.00193526,0,.653496,.539232,.00182463,0,.683588,.522352,.00170735,0,.714482,.506172,.00160555,0,.746032,.489842,.00150451,0,.777778,.473463,.00140938,0,.809524,.457266,.00132568,0,.84127,.441609,.0012376,0,.873016,.426348,.00116265,0,.904762,.411002,.00108935,0,.936508,.396045,.00101946,0,.968254,.381448,955665e-9,0,1,1,.0037121,0,0,1,.00371213,0,0,1,.00371251,0,0,.999997,.00371417,0,0,.99999,.00371863,0,0,.999977,.00372807,0,0,.99995,.00374529,0,0,.999908,.0037738,0,0,.999843,.00381789,0,123596e-10,.999745,.00388273,0,407442e-9,.999608,.00397443,0,.0015447,.999415,.00409998,0,.00351385,.999143,.00426662,0,.0063316,.9987,.00447625,0,.00998679,.996363,.00455323,0,.0144569,.994021,.00461052,0,.0197151,.992372,.00476359,0,.0257344,.991007,.00499101,0,.0324882,.988767,.0051972,0,.0399517,.984872,.00528407,0,.0481022,.982004,.00548926,0,.0569191,.977714,.00564385,0,.0663839,.973076,.0057693,0,.0764801,.967565,.0058924,0,.0871928,.961384,.00599629,0,.0985095,.954435,.00605998,0,.110419,.946303,.0061133,0,.122912,.937662,.00612028,0,.13598,.927867,.00612209,0,.149617,.916475,.00604813,0,.163817,.90541,.00603088,0,.178577,.891591,.00592218,0,.193894,.877573,.00578854,0,.209767,.862511,.00566648,0,.226196,.846861,.00551481,0,.243182,.83068,.00533754,0,.260728,.815725,.00515487,0,.278837,.802321,.0049655,0,.297515,.787826,.00475421,0,.316768,.773454,.00456002,0,.336605,.758224,.00434727,0,.357034,.74265,.00414444,0,.378067,.726729,.00393738,0,.399717,.710155,.00373575,0,.421998,.693312,.00353736,0,.444928,.67653,.00334368,0,.468523,.659444,.00315981,0,.492806,.642051,.00297809,0,.517798,.625758,.00280592,0,.543525,.609615,.00264254,0,.570012,.592919,.00248459,0,.597288,.576298,.00233327,0,.625379,.559489,.00219519,0,.654307,.542891,.00205441,0,.684084,.526255,.00193385,0,.714693,.509853,.00180745,0,.746044,.494131,.00169817,0,.777778,.478114,.0015913,0,.809524,.462274,.00148981,0,.84127,.446412,.00139537,0,.873016,.431274,.00130984,0,.904762,.41635,.00122403,0,.936508,.401476,.00114809,0,.968254,.386993,.00107563,0,1,1,.00488216,0,0,1,.0048822,0,0,1,.00488265,0,0,.999997,.00488463,0,0,.999988,.00488999,0,0,.999974,.00490129,0,0,.999946,.00492191,0,0,.999897,.00495598,0,0,.999825,.00500855,0,744791e-10,.999718,.00508559,0,712744e-9,.999565,.005194,0,.00215249,.999352,.00534147,0,.00444576,.999046,.00553523,0,.00759218,.998492,.00577016,0,.0115714,.995564,.00578487,0,.0163557,.993339,.00586414,0,.021915,.991834,.00606002,0,.0282201,.990496,.00633312,0,.0352433,.987826,.00651941,0,.042959,.98383,.00660842,0,.0513439,.98109,.00685523,0,.0603772,.976131,.00695778,0,.0700402,.971922,.00714236,0,.0803163,.965901,.00721437,0,.0911908,.959606,.00732017,0,.102651,.952504,.00735788,0,.114686,.944365,.00738493,0,.127286,.935652,.00737969,0,.140443,.925813,.00733612,0,.154151,.914397,.00723094,0,.168405,.903257,.00714002,0,.183201,.890015,.00700149,0,.198536,.876014,.00682813,0,.214409,.861436,.00665567,0,.23082,.845752,.00644526,0,.24777,.829169,.00621635,0,.265263,.813435,.00597789,0,.283301,.799701,.00575694,0,.301889,.785726,.00549866,0,.321035,.77152,.0052503,0,.340746,.75683,.00499619,0,.361032,.741951,.0047543,0,.381904,.726367,.0045084,0,.403374,.710537,.00426784,0,.425457,.693965,.00403487,0,.448169,.677724,.0038075,0,.47153,.66117,.00359431,0,.495561,.644274,.00338354,0,.520284,.627449,.00318163,0,.545725,.611645,.00299672,0,.571911,.595614,.00281016,0,.598873,.579426,.00264252,0,.62664,.563016,.00247509,0,.655239,.546728,.00232647,0,.684692,.530539,.00217803,0,.714999,.514164,.00204216,0,.746106,.498344,.00191403,0,.777778,.482957,.00179203,0,.809524,.467336,.00167695,0,.84127,.451994,.00157567,0,.873016,.436514,.00147113,0,.904762,.42178,.00138034,0,.936508,.407271,.00129219,0,.968254,.392822,.0012098,0,1,1,.00637427,0,0,1,.00637431,0,0,.999999,.00637485,0,0,.999996,.00637721,0,0,.999987,.00638357,0,0,.999971,.006397,0,0,.999939,.00642142,0,0,.999888,.00646177,0,0,.999807,.00652387,0,207916e-9,.999689,.00661454,0,.00112051,.99952,.00674155,0,.00287719,.999283,.00691313,0,.00550145,.998936,.00713598,0,.00897928,.998165,.00738501,0,.0132829,.994847,.00734388,0,.01838,.993182,.00749991,0,.0242381,.991665,.0077246,0,.030826,.989708,.00797579,0,.0381152,.986663,.00813011,0,.0460794,.983288,.00830365,0,.0546951,.980104,.00853496,0,.0639411,.974855,.00861045,0,.0737988,.97045,.00879133,0,.0842516,.964509,.00886377,0,.0952848,.957594,.00890346,0,.106886,.950546,.00893289,0,.119044,.942225,.00890074,0,.131749,.933365,.00886826,0,.144994,.923202,.0087316,0,.158772,.912605,.00863082,0,.173078,.901099,.00847403,0,.187908,.888177,.00825838,0,.203261,.873955,.00801834,0,.219134,.860091,.00779026,0,.235527,.84434,.00752478,0,.252443,.828517,.00724074,0,.269883,.81239,.00693769,0,.287851,.79721,.00664817,0,.306352,.783489,.00634763,0,.325393,.769514,.00604221,0,.344981,.755419,.00573568,0,.365126,.741083,.00544359,0,.385839,.726059,.00515515,0,.407132,.710809,.00487139,0,.42902,.695052,.00459846,0,.45152,.678886,.00433412,0,.474651,.663042,.00407981,0,.498433,.646634,.00384264,0,.52289,.630117,.00360897,0,.548048,.613804,.00338863,0,.573936,.598338,.00318486,0,.600584,.582687,.00298377,0,.628027,.566809,.00280082,0,.656295,.550817,.00262255,0,.685417,.534937,.00245835,0,.715406,.519151,.00230574,0,.74624,.503118,.0021549,0,.777778,.487723,.00202008,0,.809524,.472725,.00189355,0,.84127,.457599,.00177108,0,.873016,.442558,.00165843,0,.904762,.427624,.00155494,0,.936508,.413171,.00145273,0,.968254,.399122,.00136454,0,1,1,.00826496,0,0,1,.00826499,0,0,1,.00826564,0,0,.999996,.00826842,0,0,.999987,.00827589,0,0,.999967,.00829167,0,0,.999933,.00832037,0,0,.999876,.00836768,0,109338e-10,.999786,.00844031,0,427145e-9,.999655,.00854603,0,.0016384,.999468,.00869337,0,.00372392,.999203,.008891,0,.00668513,.998803,.00914387,0,.0104968,.99748,.00935838,0,.015125,.994446,.00933309,0,.0205338,.99292,.00953084,0,.0266884,.991414,.0097893,0,.0335565,.989049,.0100228,0,.0411086,.98582,.0101664,0,.0493181,.982441,.0103582,0,.0581613,.978595,.0105292,0,.0676169,.973495,.0106274,0,.0776661,.968405,.0107261,0,.0882926,.962717,.0108234,0,.0994817,.955478,.0108102,0,.111221,.948275,.0107914,0,.123499,.940006,.0107161,0,.136308,.930831,.0106309,0,.149639,.920648,.0104083,0,.163485,.910205,.0102312,0,.177843,.898445,.0100051,0,.192707,.885986,.00971928,0,.208077,.872204,.00940747,0,.22395,.858436,.0091085,0,.240326,.843454,.00876595,0,.257208,.827437,.00839794,0,.274596,.811488,.00803692,0,.292496,.796039,.00767352,0,.310911,.781083,.0073097,0,.329849,.767642,.00694032,0,.349316,.753901,.00657476,0,.369323,.740131,.00622699,0,.38988,.725845,.0058838,0,.410999,.710991,.00555586,0,.432696,.696002,.00523089,0,.454987,.680461,.00492494,0,.47789,.664875,.00463464,0,.501426,.649273,.00435422,0,.52562,.63302,.0040875,0,.550498,.61705,.00384075,0,.576089,.601154,.00359557,0,.602427,.586008,.00337636,0,.629544,.570699,.00316019,0,.657479,.555166,.00296033,0,.686264,.539645,.00277552,0,.715924,.524159,.00259499,0,.746459,.508682,.00243257,0,.777789,.493163,.00227851,0,.809524,.478004,.00213083,0,.84127,.46347,.00199502,0,.873016,.448778,.00186967,0,.904762,.434105,.00174732,0,.936508,.419576,.00163861,0,.968254,.405541,.00153341,0,1,1,.0106462,0,0,1,.0106462,0,0,.999999,.010647,0,0,.999995,.0106502,0,0,.999985,.0106589,0,0,.999964,.0106773,0,0,.999925,.0107106,0,0,.999861,.0107655,0,712986e-10,.999763,.0108497,0,743959e-9,.999616,.0109716,0,.00227361,.999408,.0111408,0,.0046983,.999112,.0113659,0,.00800158,.998637,.0116475,0,.0121493,.996223,.0117231,0,.0171023,.994006,.0118064,0,.0228218,.992444,.0120254,0,.0292711,.991028,.0123314,0,.036417,.98803,.0124954,0,.0442295,.984816,.0126538,0,.0526815,.981399,.0128537,0,.0617492,.977085,.0129694,0,.0714114,.972154,.013091,0,.0816495,.966617,.0131166,0,.0924472,.960628,.0131583,0,.10379,.953295,.0131094,0,.115665,.94575,.0129966,0,.128062,.937654,.0128796,0,.140972,.927716,.0126477,0,.154387,.917932,.0123889,0,.168301,.907719,.012131,0,.182709,.89584,.0118013,0,.197608,.883526,.0114145,0,.212994,.870301,.0110075,0,.228867,.856272,.0106019,0,.245227,.842251,.0101938,0,.262074,.826466,.00973254,0,.279412,.810859,.0092846,0,.297244,.795051,.00883304,0,.315575,.780053,.00840272,0,.334412,.76575,.00796438,0,.35376,.752298,.00752526,0,.373631,.739153,.00711486,0,.394034,.725514,.00670361,0,.414983,.711473,.00632656,0,.436491,.696936,.00595206,0,.458575,.682126,.00559191,0,.481253,.667027,.00525362,0,.504547,.651875,.00493805,0,.528481,.636463,.00462848,0,.553081,.620641,.00433936,0,.578377,.604931,.00407,0,.604404,.589549,.00380864,0,.631197,.574712,.00357049,0,.658795,.559775,.00334466,0,.687238,.544514,.00312505,0,.716559,.529555,.00293199,0,.746776,.514402,.00274204,0,.777849,.499302,.00256647,0,.809524,.484114,.00239901,0,.84127,.469308,.00225148,0,.873016,.455133,.00210178,0,.904762,.440939,.0019727,0,.936508,.426627,.00184382,0,.968254,.412509,.00172548,0,1,1,.013628,0,0,1,.0136281,0,0,.999999,.0136289,0,0,.999995,.0136327,0,0,.999983,.0136427,0,0,.99996,.0136638,0,0,.999917,.0137022,0,0,.999846,.0137652,0,204597e-9,.999736,.0138615,0,.00116837,.999573,.0140007,0,.00303325,.99934,.0141927,0,.00580613,.999004,.0144457,0,.00945626,.998407,.0147489,0,.0139421,.995464,.014731,0,.0192202,.993328,.0148283,0,.0252495,.991799,.0150797,0,.0319921,.990397,.0154316,0,.0394138,.986835,.0155005,0,.0474843,.983938,.0157308,0,.0561763,.980154,.0158753,0,.0654661,.975659,.0159581,0,.0753326,.970171,.0159832,0,.0857571,.964803,.0160084,0,.0967236,.958366,.0159484,0,.108218,.950613,.0158001,0,.120227,.942874,.0155845,0,.132741,.935005,.0154292,0,.145751,.924991,.0150742,0,.159249,.914814,.0146757,0,.17323,.904743,.0143097,0,.187687,.893216,.0138695,0,.202619,.880769,.0133706,0,.218021,.868136,.0128606,0,.233894,.85469,.0123403,0,.250238,.840593,.0118091,0,.267052,.825808,.011253,0,.284341,.81009,.0107099,0,.302106,.79504,.0101636,0,.320354,.779757,.00964041,0,.33909,.764697,.00911896,0,.358322,.750913,.00859533,0,.378059,.738175,.00811592,0,.398311,.725242,.00764504,0,.41909,.711864,.00718885,0,.440412,.698009,.00675843,0,.462292,.683841,.00634984,0,.484748,.669391,.00595502,0,.507802,.654731,.00558671,0,.531477,.639805,.00523578,0,.555802,.624789,.00490834,0,.580805,.609325,.00459448,0,.606522,.593975,.00430342,0,.63299,.578983,.00403019,0,.66025,.564442,.0037707,0,.688346,.549835,.0035316,0,.717319,.535039,.00330255,0,.7472,.520403,.00308932,0,.777982,.505687,.00289335,0,.809524,.490939,.00270818,0,.84127,.476233,.0025343,0,.873016,.461624,.00237097,0,.904762,.447833,.00222065,0,.936508,.433992,.00207561,0,.968254,.420147,.00194955,0,1,1,.0173415,0,0,1,.0173416,0,0,.999999,.0173426,0,0,.999995,.0173468,0,0,.999983,.0173582,0,0,.999954,.0173822,0,0,.999908,.0174258,0,669501e-11,.999828,.0174973,0,427399e-9,.999705,.0176063,0,.00171019,.999524,.0177631,0,.0039248,.999263,.0179781,0,.00705382,.998878,.018258,0,.0110552,.998012,.0185551,0,.0158812,.994614,.0184264,0,.0214852,.993132,.0186385,0,.0278239,.991563,.0189067,0,.0348585,.989298,.0191577,0,.0425544,.986036,.0192522,0,.050881,.982558,.0194063,0,.059811,.978531,.019486,0,.0693209,.974198,.0195847,0,.0793895,.968148,.0194749,0,.0899984,.962565,.0194277,0,.101132,.956041,.0192991,0,.112775,.947749,.0189893,0,.124917,.94018,.018704,0,.137547,.93165,.0183458,0,.150655,.921798,.0178775,0,.164236,.911573,.0173618,0,.178281,.901569,.0168482,0,.192788,.890341,.016265,0,.207752,.877835,.0156199,0,.223171,.865472,.0149516,0,.239044,.852905,.0143274,0,.255371,.838906,.0136643,0,.272153,.824888,.0129903,0,.289393,.809977,.0123218,0,.307093,.794697,.0116572,0,.325259,.780028,.0110307,0,.343896,.765124,.0104236,0,.363012,.750411,.0098219,0,.382617,.737264,.00924397,0,.402719,.724799,.00868719,0,.423332,.712253,.00816476,0,.444469,.699267,.00767262,0,.466146,.685618,.00719746,0,.488383,.671736,.00673916,0,.511199,.657777,.00631937,0,.534618,.643497,.00592411,0,.558668,.62889,.00553928,0,.58338,.614299,.0051934,0,.608787,.599197,.00485985,0,.634929,.584175,.00454357,0,.661849,.569541,.00425787,0,.689594,.555193,.00397905,0,.718211,.540947,.00372364,0,.747742,.526593,.00348599,0,.778205,.512335,.00326103,0,.80953,.498017,.00305137,0,.84127,.483609,.00285485,0,.873016,.469368,.00267472,0,.904762,.455037,.00249945,0,.936508,.441493,.00234792,0,.968254,.428147,.00219936,0,1,1,.0219422,0,0,1,.0219423,0,0,.999998,.0219434,0,0,.999993,.0219481,0,0,.999981,.021961,0,0,.999949,.0219879,0,0,.999896,.0220367,0,593194e-10,.999808,.0221167,0,75364e-8,.99967,.0222383,0,.00237884,.999466,.0224125,0,.00495612,.999174,.0226495,0,.00844887,.998725,.0229525,0,.0128058,.996979,.0231123,0,.0179742,.994317,.0230742,0,.0239047,.992781,.0232895,0,.0305526,.991191,.0235734,0,.0378786,.987787,.0236152,0,.0458475,.985092,.0237994,0,.0544287,.981121,.0238553,0,.0635952,.976924,.0238706,0,.0733233,.97218,.0238704,0,.0835922,.965956,.0236598,0,.0943839,.959998,.0234735,0,.105682,.953245,.0232277,0,.117474,.944445,.0226973,0,.129747,.937087,.0223527,0,.142491,.928341,.0218144,0,.155697,.9184,.0211516,0,.169358,.907959,.0204553,0,.183469,.89808,.0197673,0,.198024,.887047,.0189915,0,.21302,.875221,.0182082,0,.228455,.86269,.0173584,0,.244329,.850735,.0165718,0,.260639,.837545,.0157524,0,.277389,.823639,.0149482,0,.29458,.809699,.0141431,0,.312216,.794797,.0133527,0,.3303,.780578,.0126193,0,.34884,.766019,.0118914,0,.367842,.751447,.0111839,0,.387315,.737275,.010514,0,.40727,.724545,.00987277,0,.427717,.712644,.00926569,0,.448671,.700432,.00869029,0,.470149,.687664,.00814691,0,.492167,.674288,.00763012,0,.514746,.660966,.00714437,0,.537911,.647264,.00668457,0,.561688,.633431,.00626581,0,.586108,.619133,.00585593,0,.611206,.604935,.00548188,0,.637022,.590236,.00513288,0,.663599,.575473,.0047906,0,.690989,.561228,.00448895,0,.719242,.547054,.00420233,0,.748411,.533175,.00392869,0,.778531,.519163,.00367445,0,.809583,.505328,.00344097,0,.84127,.491446,.00322003,0,.873016,.477356,.00301283,0,.904762,.46356,.00282592,0,.936508,.449623,.00264956,0,.968254,.436068,.00246956,0,1,1,.0276135,0,0,1,.0276136,0,0,.999998,.0276148,0,0,.999993,.0276201,0,0,.999976,.0276342,0,0,.999945,.027664,0,0,.999884,.0277179,0,18679e-8,.999784,.027806,0,.00119607,.99963,.0279394,0,.00318407,.999401,.0281295,0,.00613601,.999066,.0283858,0,.00999963,.998524,.0287027,0,.0147164,.995702,.0286256,0,.0202295,.993593,.0286733,0,.0264876,.992067,.0288989,0,.0334452,.990548,.0292135,0,.0410621,.986775,.0291296,0,.0493032,.984054,.0293099,0,.0581381,.979481,.0291881,0,.0675397,.975297,.0291598,0,.0774848,.96981,.028954,0,.0879528,.963524,.028628,0,.0989258,.957398,.0283135,0,.110388,.950088,.0278469,0,.122327,.941538,.0271798,0,.134729,.933332,.0265388,0,.147587,.924392,.0257776,0,.160889,.914581,.024916,0,.174631,.904347,.0240242,0,.188806,.894324,.0231229,0,.203409,.883724,.022153,0,.218437,.872207,.0211355,0,.233888,.859927,.0201048,0,.249761,.848373,.0191263,0,.266056,.836023,.0181306,0,.282774,.82289,.0171718,0,.299917,.809324,.0162196,0,.317488,.795361,.0152622,0,.335493,.781253,.01439,0,.353936,.767338,.013533,0,.372825,.753156,.0127244,0,.392168,.739122,.0119454,0,.411976,.725358,.0112054,0,.432259,.712949,.010487,0,.453032,.701621,.00984032,0,.47431,.689703,.00921495,0,.496111,.677216,.00862492,0,.518456,.664217,.00806882,0,.541367,.65137,.00755922,0,.564872,.638,.00705705,0,.589001,.62453,.00661266,0,.613789,.610601,.00618432,0,.639277,.59676,.00578033,0,.66551,.582433,.00540927,0,.692539,.568026,.00506104,0,.720422,.55414,.0047353,0,.749216,.540178,.00442889,0,.778974,.526513,.00414363,0,.809711,.512954,.00388237,0,.84127,.499403,.00362875,0,.873016,.486026,.00340827,0,.904762,.472345,.00318598,0,.936508,.458828,.00297635,0,.968254,.445379,.00279447,0,1,1,.0345716,0,0,1,.0345717,0,0,.999999,.034573,0,0,.999991,.0345787,0,0,.999974,.0345941,0,0,.999937,.0346263,0,188589e-11,.999869,.0346847,0,409238e-9,.999757,.0347798,0,.0017674,.999582,.0349233,0,.00413658,.999322,.0351265,0,.00747408,.998939,.0353967,0,.0117157,.998219,.0357018,0,.0167966,.994974,.0354726,0,.0226572,.993201,.0355621,0,.0292445,.991573,.0357641,0,.0365123,.989301,.0359252,0,.0444203,.985712,.0358017,0,.0529334,.982411,.0358353,0,.0620214,.977827,.035617,0,.0716574,.973278,.0354398,0,.0818186,.967397,.0350483,0,.0924846,.960696,.0344795,0,.103638,.954349,.0339861,0,.115263,.946066,.0331323,0,.127348,.938012,.032359,0,.13988,.929413,.0314413,0,.152849,.920355,.0304103,0,.166248,.910586,.0292785,0,.18007,.900609,.0281391,0,.194308,.890093,.0269103,0,.208958,.880013,.0257269,0,.224018,.869001,.0244671,0,.239485,.85751,.0232252,0,.255359,.84582,.0220117,0,.271638,.834383,.0208274,0,.288324,.822158,.0196628,0,.305419,.809056,.0185306,0,.322927,.795832,.0174174,0,.340851,.782547,.0163758,0,.359199,.7689,.015391,0,.377975,.755526,.0144488,0,.397189,.741681,.0135372,0,.416851,.728178,.0126957,0,.436971,.714642,.0118812,0,.457564,.702756,.0111165,0,.478644,.69175,.0104145,0,.500229,.680159,.00974439,0,.522339,.668073,.00911926,0,.544997,.655405,.00851393,0,.56823,.642921,.00797637,0,.592068,.629993,.00745119,0,.616546,.616828,.00696972,0,.641705,.603305,.00652425,0,.66759,.589833,.00610188,0,.694255,.575945,.00570834,0,.72176,.561745,.00533384,0,.750168,.548277,.00500001,0,.779545,.534467,.00467582,0,.809933,.521032,.00438092,0,.841272,.507877,.00410348,0,.873016,.494654,.00383618,0,.904762,.481592,.00358699,0,.936508,.468509,.00337281,0,.968254,.455293,.00316196,0,1,1,.0430698,0,0,1,.0430699,0,0,.999998,.0430713,0,0,.999991,.0430773,0,0,.99997,.0430936,0,0,.999928,.0431277,0,406396e-10,.999852,.0431893,0,744376e-9,.999724,.0432895,0,.0024806,.999527,.0434397,0,.00524779,.99923,.0436507,0,.00898164,.998783,.0439255,0,.0136083,.997507,.0441104,0,.0190582,.994418,.0438225,0,.0252694,.992864,.0439396,0,.0321879,.991127,.0440962,0,.039767,.987331,.0438408,0,.0479667,.984819,.0438991,0,.056752,.980384,.0435906,0,.0660929,.975846,.0432543,0,.075963,.970748,.0428293,0,.0863398,.964303,.042153,0,.0972035,.95772,.0414111,0,.108537,.950747,.0405893,0,.120325,.942533,.0394887,0,.132554,.934045,.0383544,0,.145215,.924942,.037057,0,.158296,.915811,.0356993,0,.17179,.90612,.0342401,0,.185691,.896434,.0328078,0,.199993,.886021,.031288,0,.214691,.876081,.0297776,0,.229782,.865608,.0282334,0,.245265,.854924,.026749,0,.261138,.843607,.02526,0,.277401,.832456,.0238214,0,.294056,.821342,.0224682,0,.311104,.809303,.0211297,0,.328548,.796468,.0198387,0,.346394,.784046,.0186227,0,.364645,.771262,.0174561,0,.38331,.758118,.0163806,0,.402396,.745075,.0153287,0,.421912,.731926,.0143647,0,.44187,.71863,.0134363,0,.462283,.705414,.0125603,0,.483165,.693792,.0117508,0,.504535,.683108,.0110016,0,.52641,.67183,.0102757,0,.548816,.66015,.00962044,0,.571776,.647907,.00898031,0,.595323,.635734,.00840811,0,.619489,.623208,.00786211,0,.644317,.610438,.00734953,0,.669852,.597345,.00687688,0,.696148,.584138,.00643469,0,.723267,.5707,.00602236,0,.75128,.556966,.0056324,0,.780258,.543607,.00528277,0,.810268,.530213,.00493999,0,.841311,.516912,.00462265,0,.873016,.503916,.0043307,0,.904762,.491146,.00406858,0,.936508,.478439,.00381436,0,.968254,.465834,.00358003,0,1,1,.0534039,0,0,1,.053404,0,0,.999998,.0534055,0,0,.999989,.0534116,0,0,.999968,.0534283,0,0,.999918,.0534633,0,155895e-9,.99983,.0535262,0,.00120914,.999685,.0536281,0,.00334944,.999461,.0537799,0,.00653077,.999119,.0539902,0,.0106718,.998582,.0542524,0,.0156907,.995919,.0540318,0,.0215147,.993735,.0538914,0,.0280801,.992126,.0539557,0,.0353323,.990266,.0540401,0,.0432247,.986317,.0536064,0,.0517172,.983213,.0534425,0,.0607754,.978303,.0528622,0,.0703698,.973665,.0523363,0,.0804742,.968091,.0516165,0,.0910667,.961026,.0505434,0,.102128,.954333,.049523,0,.113641,.946372,.0481698,0,.125591,.938254,.0467674,0,.137965,.929516,.0452341,0,.150754,.920106,.0435083,0,.163947,.910899,.0417399,0,.177537,.901532,.0399389,0,.191516,.891919,.0380901,0,.205881,.882006,.0362341,0,.220626,.871965,.0343444,0,.235749,.862145,.0324832,0,.251248,.852058,.0306681,0,.267121,.84161,.0289097,0,.283368,.830806,.0272079,0,.299992,.820476,.0256089,0,.316992,.809514,.0240394,0,.334374,.797865,.0225379,0,.35214,.785621,.0211235,0,.370296,.773765,.0197908,0,.388849,.761629,.0185235,0,.407807,.748891,.0173358,0,.427178,.736437,.0162305,0,.446974,.723707,.0151778,0,.467207,.710606,.0141791,0,.487892,.698019,.0132592,0,.509046,.686203,.0123887,0,.530687,.675692,.0115976,0,.552839,.664826,.0108325,0,.575527,.65349,.0101348,0,.59878,.641774,.00947756,0,.622634,.629794,.00886058,0,.647128,.617647,.00828526,0,.672308,.60534,.00775312,0,.698231,.592718,.00726033,0,.724958,.579746,.00679731,0,.752563,.566763,.00636111,0,.781127,.553515,.00595228,0,.810733,.540118,.00556876,0,.841426,.527325,.00523051,0,.873016,.514265,.00490712,0,.904762,.501406,.00460297,0,.936508,.488922,.00431247,0,.968254,.476541,.0040472,0,1,1,.0659184,0,0,1,.0659185,0,0,.999998,.06592,0,0,.999988,.0659259,0,0,.999963,.0659423,0,0,.999907,.0659764,0,374198e-9,.999806,.0660376,0,.00182071,.999639,.0661361,0,.0043894,.999378,.0662814,0,.00800055,.998985,.0664779,0,.0125594,.998285,.0666914,0,.0179786,.995071,.0661989,0,.0241822,.993172,.0660454,0,.031106,.991438,.0660105,0,.0386952,.988428,.0656875,0,.0469032,.985218,.0652913,0,.0556905,.981128,.0647107,0,.065023,.976015,.0638491,0,.0748717,.97097,.062993,0,.0852112,.964582,.0617927,0,.0960199,.957383,.0603626,0,.107279,.949969,.0588128,0,.118971,.941843,.0570274,0,.131084,.933624,.0551885,0,.143604,.924543,.053122,0,.156521,.914919,.0508897,0,.169825,.905773,.0486418,0,.18351,.896434,.0463364,0,.197569,.887195,.0440623,0,.211997,.877706,.0417799,0,.226789,.867719,.03945,0,.241944,.858587,.037243,0,.257458,.849317,.0350956,0,.273331,.839585,.0329852,0,.289563,.829856,.0310028,0,.306154,.819589,.0290953,0,.323108,.809714,.0272738,0,.340426,.79934,.0255631,0,.358113,.788224,.0239175,0,.376175,.776619,.0223831,0,.394616,.76521,.0209298,0,.413445,.753716,.0195786,0,.432671,.741564,.0183001,0,.452305,.729413,.0171259,0,.472358,.717146,.0159933,0,.492845,.70436,.0149495,0,.513783,.69219,.0139681,0,.535189,.680289,.0130577,0,.557087,.669611,.0122198,0,.5795,.659113,.0114174,0,.602459,.648148,.0106729,0,.625997,.636905,.00998997,0,.650154,.625154,.00934313,0,.674976,.613481,.00874839,0,.700518,.60154,.00818265,0,.726845,.58943,.00766889,0,.754032,.576828,.00717153,0,.782167,.564194,.00672696,0,.811344,.551501,.00630863,0,.841644,.538635,.00592177,0,.873016,.525724,.00554888,0,.904762,.513209,.00520225,0,.936508,.500457,.00488231,0,.968254,.48799,.00457153,0,1,1,.0810131,0,0,1,.0810133,0,0,.999997,.0810145,0,0,.999985,.08102,0,0,.999956,.0810347,0,195026e-10,.999893,.0810656,0,719316e-9,.999777,.0811205,0,.00259774,.999583,.081208,0,.00561807,.999281,.0813343,0,.00967472,.998813,.0814969,0,.0146627,.997597,.0815217,0,.0204902,.994379,.0808502,0,.0270802,.992744,.0806792,0,.0343674,.990745,.0804589,0,.0422974,.986646,.0796107,0,.0508242,.983611,.0790913,0,.0599087,.978869,.0780746,0,.0695175,.973475,.0768218,0,.0796223,.967845,.0754926,0,.0901983,.960778,.0737063,0,.101224,.953333,.0718052,0,.112682,.945274,.0695946,0,.124555,.936955,.0672492,0,.136831,.928319,.0647732,0,.149496,.919075,.0620947,0,.162542,.909114,.0591816,0,.175958,.900137,.0563917,0,.189739,.891069,.0535392,0,.203877,.882262,.0507642,0,.218368,.873232,.0479793,0,.233208,.864042,.045226,0,.248393,.855002,.0425413,0,.263923,.846569,.0400126,0,.279796,.837714,.0375269,0,.296012,.828918,.0352027,0,.312573,.819783,.0330011,0,.329479,.810129,.0308908,0,.346734,.800866,.0289112,0,.364342,.79093,.0270255,0,.382307,.780593,.0252758,0,.400637,.769511,.0236178,0,.419337,.758558,.0220652,0,.438418,.747632,.0206289,0,.457889,.736146,.0192873,0,.477761,.724093,.0180333,0,.49805,.71234,.0168264,0,.51877,.700201,.015746,0,.53994,.687949,.0147027,0,.561581,.676163,.0137512,0,.583718,.665001,.0128655,0,.60638,.65472,.0120366,0,.629599,.644213,.0112604,0,.653415,.633382,.0105413,0,.677874,.62212,.00986498,0,.70303,.610631,.00923308,0,.728948,.599078,.00864206,0,.755706,.587519,.00811784,0,.783396,.575505,.00761237,0,.812121,.563148,.00713949,0,.841989,.550828,.00668379,0,.873035,.538458,.00627715,0,.904762,.525905,.00588336,0,.936508,.513517,.00552687,0,.968254,.501395,.00519681,0,1,1,.0991506,0,0,1,.0991504,0,0,.999996,.0991515,0,0,.999984,.0991558,0,0,.999947,.0991672,0,114389e-9,.999874,.0991912,0,.00121503,.999739,.0992331,0,.00356108,.999514,.0992983,0,.00705578,.999159,.0993877,0,.011574,.998586,.0994837,0,.017003,.995731,.0988425,0,.0232484,.993384,.098276,0,.0302318,.991615,.0979269,0,.0378884,.989029,.0973432,0,.0461641,.985373,.0963539,0,.0550136,.981278,.0952306,0,.0643988,.975777,.0936233,0,.0742868,.970526,.0920219,0,.0846501,.963755,.0898912,0,.0954644,.956676,.0876064,0,.106709,.948099,.0847751,0,.118367,.939718,.0818638,0,.130423,.931305,.078857,0,.142862,.922342,.0756127,0,.155674,.912842,.0721473,0,.168849,.903304,.0686195,0,.182378,.89411,.0650589,0,.196255,.885512,.0616022,0,.210473,.877193,.0582434,0,.225027,.86877,.0548979,0,.239915,.860267,.0516095,0,.255132,.851915,.048468,0,.270678,.843912,.0454447,0,.286551,.83604,.0425612,0,.302751,.828245,.0398752,0,.31928,.820159,.0373198,0,.336138,.81167,.034916,0,.35333,.802659,.0326402,0,.370858,.793921,.0304901,0,.388728,.784713,.0284857,0,.406944,.774946,.0266186,0,.425515,.76448,.0248593,0,.444449,.753793,.0232114,0,.463756,.743506,.0217039,0,.483447,.732555,.0202841,0,.503535,.720965,.0189648,0,.524036,.709422,.0177189,0,.544968,.697756,.0165626,0,.56635,.685565,.015483,0,.588208,.673987,.0144892,0,.610569,.66244,.0135607,0,.633466,.651675,.0126956,0,.656936,.641598,.0118788,0,.681025,.63121,.0111261,0,.705788,.620514,.010437,0,.731289,.609366,.00978747,0,.757606,.598137,.00917257,0,.784834,.586966,.00859778,0,.813085,.575549,.00806803,0,.842485,.563797,.00757294,0,.87313,.551758,.00710592,0,.904762,.539894,.0066841,0,.936508,.527901,.00627901,0,.968254,.515819,.00590506,0,1,1,.120864,0,0,1,.120864,0,0,.999996,.120864,0,0,.99998,.120867,0,0,.99994,.120872,0,323781e-9,.999852,.120884,0,.00188693,.999693,.120903,0,.00473489,.999426,.120929,0,.00872704,.999002,.120955,0,.0137237,.998235,.120918,0,.0196068,.994608,.119764,0,.0262803,.992997,.119265,0,.0336657,.990968,.11863,0,.0416987,.987002,.117261,0,.0503261,.983524,.116009,0,.0595035,.97875,.114252,0,.0691935,.972652,.11193,0,.0793645,.966613,.109555,0,.0899894,.959275,.106612,0,.101045,.951272,.103375,0,.112512,.942323,.0996594,0,.124372,.933679,.0958841,0,.136611,.924822,.0919265,0,.149216,.915742,.0878061,0,.162176,.906348,.0834894,0,.175482,.896883,.079085,0,.189125,.88774,.0746745,0,.203098,.87986,.0705773,0,.217396,.871998,.0665005,0,.232015,.864325,.0625413,0,.24695,.856685,.0586781,0,.2622,.84925,.0550063,0,.277761,.841719,.0514727,0,.293634,.834755,.0481398,0,.309819,.827853,.0450172,0,.326315,.820888,.0420969,0,.343126,.813616,.0393702,0,.360254,.805767,.0367771,0,.377701,.797338,.0343274,0,.395474,.789122,.0320529,0,.413577,.780601,.0299485,0,.432018,.771424,.0279812,0,.450804,.761502,.0261054,0,.469944,.751166,.0243942,0,.489451,.741276,.0228087,0,.509337,.730898,.0213265,0,.529617,.719878,.0199307,0,.550307,.708379,.0186574,0,.571428,.697165,.0174446,0,.593003,.685554,.0163144,0,.615059,.673631,.015276,0,.637628,.662385,.0143003,0,.660746,.651059,.0134112,0,.68446,.640451,.0125794,0,.70882,.630536,.011793,0,.733893,.620316,.0110547,0,.759756,.609722,.0103668,0,.786505,.598804,.00973009,0,.814259,.587871,.00912812,0,.843157,.577121,.00858916,0,.87334,.566019,.00807333,0,.904762,.554664,.00759687,0,.936508,.543101,.00714759,0,.968254,.531558,.00673418,0,1,1,.146767,0,0,1,.146767,0,0,.999997,.146767,0,0,.999977,.146765,0,320658e-11,.999929,.146762,0,682576e-9,.999823,.146753,0,.00276402,.999633,.146735,0,.00614771,.999314,.146699,0,.0106613,.998796,.14662,0,.0161546,.997124,.146107,0,.0225063,.994062,.144857,0,.0296198,.992154,.144011,0,.037417,.989186,.142712,0,.0458348,.985279,.140926,0,.0548211,.980826,.13885,0,.0643326,.975056,.136168,0,.074333,.969005,.133217,0,.0847917,.961554,.12959,0,.0956828,.954206,.125886,0,.106984,.945046,.121335,0,.118675,.935678,.116492,0,.130741,.926748,.111635,0,.143166,.917764,.106625,0,.155939,.908358,.101325,0,.169049,.899219,.0960249,0,.182487,.890089,.0906527,0,.196245,.881488,.0853905,0,.210317,.874031,.0804177,0,.224697,.866932,.0756005,0,.23938,.859976,.0709019,0,.254364,.853375,.0664391,0,.269646,.846971,.0622012,0,.285223,.840483,.058129,0,.301096,.833969,.0542762,0,.317265,.82806,.0507042,0,.333729,.822128,.047368,0,.350491,.815989,.044272,0,.367554,.809336,.0413444,0,.38492,.802177,.038601,0,.402594,.79441,.0360227,0,.420582,.786573,.0336383,0,.438891,.778619,.0314321,0,.457527,.77,.029362,0,.476499,.760698,.0274102,0,.49582,.750932,.0256146,0,.5155,.740993,.023974,0,.535555,.731159,.0224182,0,.556,.720836,.0209889,0,.576855,.709913,.0196411,0,.598143,.698415,.0183824,0,.619888,.68745,.0172222,0,.642123,.676154,.0161509,0,.664883,.664383,.0151397,0,.688211,.6533,.0141873,0,.71216,.642072,.0133105,0,.736792,.631412,.0124932,0,.762186,.621622,.0117408,0,.788439,.611681,.0110358,0,.815672,.60142,.0103775,0,.844034,.59083,.00975623,0,.873699,.580254,.00918084,0,.904765,.569841,.00864721,0,.936508,.559224,.00815731,0,.968254,.548315,.00767924,0,1,1,.177563,0,0,1,.177563,0,0,.999994,.177562,0,0,.999972,.177555,0,664171e-10,.999914,.177536,0,.0012276,.999787,.177496,0,.00388025,.999556,.17742,0,.00783463,.999165,.177285,0,.0128953,.9985,.177037,0,.0189053,.995388,.175634,0,.025742,.993102,.174375,0,.033309,.990992,.173121,0,.0415298,.986932,.170896,0,.0503425,.982786,.16847,0,.0596964,.977592,.165455,0,.0695498,.971075,.161676,0,.0798676,.963967,.157458,0,.0906201,.956397,.152836,0,.101783,.947489,.147467,0,.113333,.937564,.14145,0,.125254,.928182,.135383,0,.137529,.919027,.129212,0,.150144,.909618,.12276,0,.163088,.900492,.116273,0,.176351,.891671,.1098,0,.189924,.883146,.103362,0,.203799,.875151,.0970799,0,.21797,.868338,.0911732,0,.232433,.862033,.0854966,0,.247182,.856107,.0800691,0,.262216,.850644,.0749618,0,.27753,.845261,.070079,0,.293124,.839885,.0654321,0,.308997,.834609,.0610975,0,.325149,.829083,.0569741,0,.341581,.82404,.0531736,0,.358294,.818968,.049665,0,.37529,.813496,.0463856,0,.392573,.807533,.0433217,0,.410148,.80099,.0404402,0,.428019,.793891,.0377578,0,.446192,.786281,.0352616,0,.464676,.778773,.0329577,0,.483478,.770737,.030808,0,.502608,.762094,.0287964,0,.522079,.752898,.0269254,0,.541905,.743306,.0251926,0,.5621,.733416,.023595,0,.582684,.723742,.0221155,0,.603677,.713542,.0207435,0,.625106,.702755,.019434,0,.646998,.691484,.0182046,0,.66939,.680531,.0170771,0,.692324,.66953,.0160339,0,.715849,.658126,.0150677,0,.740028,.646933,.0141551,0,.764937,.636107,.0133179,0,.790673,.625271,.0125284,0,.817358,.615225,.0117937,0,.84515,.605678,.0111181,0,.874244,.59583,.0104759,0,.904828,.585704,.00986672,0,.936508,.575413,.00929712,0,.968254,.565373,.00876713,0,1,1,.214058,0,0,.999999,.214058,0,0,.999994,.214055,0,0,.999966,.214039,0,259642e-9,.999893,.213998,0,.00200075,.999737,.21391,0,.00527775,.999449,.213745,0,.00983959,.99896,.213458,0,.0154755,.9979,.212855,0,.0220249,.994278,.210779,0,.0293654,.992254,.20926,0,.0374021,.98881,.206908,0,.0460604,.984715,.204009,0,.0552802,.979738,.200471,0,.0650127,.972884,.195813,0,.0752175,.965996,.190856,0,.0858612,.957974,.185077,0,.0969155,.949155,.17868,0,.108356,.939288,.171513,0,.120163,.928996,.163838,0,.132319,.919563,.156246,0,.144808,.910004,.148359,0,.157618,.900791,.140417,0,.170737,.892135,.132569,0,.184155,.883803,.124741,0,.197866,.876034,.117091,0,.211861,.869219,.109835,0,.226134,.863062,.102859,0,.240682,.857795,.0962928,0,.255499,.853009,.0900725,0,.270583,.848603,.0842101,0,.285931,.844335,.0786527,0,.301542,.840208,.0734397,0,.317415,.836035,.0685334,0,.33355,.83172,.0639275,0,.349948,.827135,.0595909,0,.36661,.822797,.0556204,0,.383539,.818387,.0519394,0,.400738,.813565,.0485317,0,.41821,.808142,.0453138,0,.435961,.802212,.0423354,0,.453997,.79573,.0395553,0,.472324,.788741,.036988,0,.490951,.781093,.0345688,0,.509887,.773597,.0323297,0,.529144,.765622,.0302719,0,.548735,.757083,.0283477,0,.568674,.747992,.0265562,0,.588979,.738591,.0248844,0,.609671,.728719,.0233342,0,.630773,.719146,.0219081,0,.652314,.709165,.0205711,0,.674328,.69875,.0193248,0,.696854,.687884,.0181582,0,.719942,.676818,.0170746,0,.743651,.666247,.0160718,0,.768057,.655284,.0151262,0,.793253,.64401,.0142561,0,.819363,.633353,.0134327,0,.846547,.622674,.012653,0,.875017,.612265,.0119354,0,.905021,.602455,.0112533,0,.936508,.593147,.0106234,0,.968254,.583592,.0100213,0,1,1,.25717,0,0,1,.25717,0,0,.999992,.257164,0,0,.999958,.257135,0,641715e-9,.999864,.25706,0,.00305314,.999666,.256897,0,.00700975,.999302,.256596,0,.0122194,.998663,.25607,0,.0184622,.995607,.254123,0,.0255773,.993094,.252081,0,.0334439,.9907,.249867,0,.0419696,.98594,.246118,0,.0510823,.981214,.242049,0,.0607242,.974966,.236869,0,.0708486,.967589,.230724,0,.081417,.95915,.223635,0,.0923974,.950257,.21596,0,.103763,.940165,.207296,0,.115491,.929396,.197901,0,.127562,.919288,.188437,0,.13996,.909428,.178762,0,.15267,.900105,.169072,0,.165679,.891418,.159478,0,.178979,.883347,.15002,0,.192558,.875992,.140813,0,.20641,.869466,.13196,0,.220529,.863699,.123501,0,.234907,.858553,.115436,0,.249542,.854379,.107901,0,.264428,.850894,.10088,0,.279564,.847632,.0942296,0,.294947,.844571,.0879861,0,.310575,.84163,.0821534,0,.326448,.838542,.0766409,0,.342566,.835412,.0715322,0,.358929,.831899,.0666883,0,.37554,.828177,.0622175,0,.392399,.82416,.0580452,0,.409511,.820393,.054267,0,.426878,.816068,.0507172,0,.444506,.811201,.0474041,0,.4624,.805785,.0443174,0,.480566,.799878,.0414562,0,.499013,.793469,.0388147,0,.517749,.786473,.0363453,0,.536785,.778874,.0340225,0,.556134,.771277,.0318599,0,.575809,.763426,.0298859,0,.595827,.755044,.0280357,0,.616207,.746161,.0262979,0,.636973,.737124,.0247295,0,.65815,.72761,.0232514,0,.679772,.717822,.0218755,0,.701876,.708279,.0205942,0,.724509,.698333,.0193947,0,.74773,.68802,.0182717,0,.771609,.677321,.0172044,0,.79624,.666504,.0162122,0,.821743,.656184,.0152924,0,.84828,.64556,.0144326,0,.876069,.634636,.0136157,0,.905404,.624124,.0128612,0,.936508,.613914,.0121435,0,.968254,.603589,.0114887,0,1,1,.307946,0,0,.999999,.307945,0,0,.999988,.307934,0,204479e-10,.999944,.307886,0,.00127833,.999824,.307756,0,.00445047,.999565,.30748,0,.00914673,.999085,.306966,0,.0150498,.998103,.306004,0,.0219367,.994249,.303028,0,.0296485,.991807,.300435,0,.038068,.987773,.296554,0,.0471062,.982673,.2916,0,.0566942,.976623,.285641,0,.0667768,.968757,.27815,0,.0773099,.959849,.269529,0,.088257,.950663,.260248,0,.0995879,.940129,.249704,0,.111277,.92895,.238291,0,.123304,.917996,.226501,0,.13565,.907813,.214669,0,.148299,.898305,.202835,0,.161237,.889626,.191158,0,.174455,.88175,.179695,0,.187941,.874715,.168548,0,.201687,.868746,.15792,0,.215687,.863703,.147807,0,.229933,.859315,.138149,0,.24442,.855538,.128993,0,.259145,.852428,.120414,0,.274103,.850168,.112498,0,.289293,.848132,.105054,0,.304711,.846291,.0981087,0,.320357,.844431,.0915942,0,.33623,.842493,.0855056,0,.35233,.840368,.0798204,0,.368658,.83798,.0745097,0,.385214,.83523,.0695424,0,.402002,.832091,.0649092,0,.419023,.828667,.0606291,0,.436282,.824805,.0566523,0,.453782,.820988,.0530229,0,.471529,.816635,.0496364,0,.489528,.811725,.0464658,0,.507788,.806316,.0435082,0,.526317,.800469,.0407873,0,.545124,.794107,.038255,0,.564221,.787218,.0358825,0,.583621,.779872,.0336785,0,.603341,.772097,.0316379,0,.623397,.764484,.0297379,0,.643812,.756428,.0279581,0,.664611,.748022,.0263153,0,.685824,.739268,.0247799,0,.707488,.73024,.0233385,0,.729646,.720893,.0220035,0,.752354,.71119,.0207555,0,.77568,.701791,.0195843,0,.799715,.692184,.0184891,0,.824574,.682258,.0174541,0,.850417,.67206,.0164873,0,.877466,.661717,.0155959,0,.90604,.651462,.0147519,0,.936528,.641467,.0139727,0,.968254,.631229,.0132363,0,1,1,.367573,0,0,.999999,.367571,0,0,.999984,.367553,0,183382e-9,.999925,.367473,0,.00225254,.999759,.367259,0,.00628165,.99941,.366801,0,.0117858,.998739,.365946,0,.0184359,.995529,.363191,0,.0260114,.992875,.360171,0,.0343581,.989135,.355981,0,.0433637,.984166,.350401,0,.0529438,.977871,.343348,0,.0630334,.96951,.334341,0,.0735805,.959964,.323862,0,.0845437,.950162,.312521,0,.095889,.938882,.299577,0,.107588,.926992,.285573,0,.119617,.915589,.271212,0,.131957,.904791,.256611,0,.144591,.895177,.242224,0,.157503,.886403,.227952,0,.170682,.878957,.214192,0,.184117,.872418,.200795,0,.197799,.867029,.188015,0,.21172,.862835,.175975,0,.225873,.859411,.164526,0,.240253,.856655,.153693,0,.254854,.854519,.14352,0,.269673,.852828,.13397,0,.284707,.851412,.124984,0,.299953,.850609,.116748,0,.315408,.849855,.10905,0,.331073,.849017,.101839,0,.346946,.848079,.0951359,0,.363028,.846911,.0888774,0,.379318,.845445,.0830375,0,.395818,.84362,.0775844,0,.41253,.841411,.0725054,0,.429457,.838768,.0677691,0,.446602,.835801,.0634016,0,.463968,.832341,.0593095,0,.481561,.828424,.0555121,0,.499386,.824312,.052024,0,.51745,.819918,.0487865,0,.535761,.815072,.0457801,0,.554328,.809863,.0430184,0,.573162,.804164,.0404245,0,.592275,.798034,.0380146,0,.611681,.791436,.0357436,0,.631398,.784498,.0336475,0,.651445,.777125,.0316666,0,.671845,.769365,.0298122,0,.692628,.761579,.0281001,0,.713827,.753746,.0265049,0,.735484,.745573,.0250067,0,.75765,.737083,.0236026,0,.78039,.728545,.0223302,0,.803789,.719691,.0211243,0,.82796,.710569,.0199983,0,.853056,.701216,.0189569,0,.879298,.692094,.0179702,0,.907014,.682909,.0170418,0,.936691,.673509,.0161732,0,.968254,.663863,.0153406,0,1,1,.437395,0,0,.999998,.437394,0,0,.99998,.437363,0,616704e-9,.999891,.437232,0,.00367925,.999656,.436877,0,.00867446,.999148,.436121,0,.0150679,.997959,.434564,0,.022531,.993464,.430134,0,.0308507,.990606,.426077,0,.0398805,.985027,.419397,0,.0495148,.978491,.41118,0,.0596749,.969643,.40048,0,.0703001,.959189,.38769,0,.0813427,.948223,.373575,0,.0927641,.935955,.357622,0,.104533,.923237,.34043,0,.116624,.911074,.322735,0,.129015,.899724,.30479,0,.141687,.890189,.287392,0,.154626,.881796,.270248,0,.167818,.874781,.253659,0,.181252,.869166,.237786,0,.194918,.864725,.222618,0,.208807,.861565,.208356,0,.222913,.859284,.194867,0,.237229,.857677,.18212,0,.25175,.856714,.17018,0,.266473,.856155,.158969,0,.281392,.8558,.148413,0,.296505,.855672,.138578,0,.311811,.855538,.129345,0,.327306,.855689,.120861,0,.342991,.855767,.112969,0,.358864,.855618,.105593,0,.374925,.85525,.0987451,0,.391176,.854583,.0923727,0,.407616,.853534,.0864143,0,.424249,.852061,.0808338,0,.441076,.850253,.0756771,0,.4581,.848004,.0708612,0,.475324,.845333,.0663784,0,.492754,.842376,.0622631,0,.510394,.838956,.0584112,0,.528251,.835121,.0548328,0,.546331,.830842,.0514838,0,.564644,.826212,.048355,0,.583198,.821522,.0454714,0,.602005,.816551,.0428263,0,.621078,.811211,.0403612,0,.640434,.805479,.038039,0,.660089,.799409,.0358739,0,.680066,.79306,.0338727,0,.70039,.786395,.0319985,0,.721094,.779416,.030241,0,.742215,.77214,.0285951,0,.7638,.764636,.0270747,0,.785912,.756836,.0256354,0,.808628,.749315,.0243027,0,.832055,.741561,.0230497,0,.856338,.733589,.0218801,0,.88169,.725479,.020784,0,.908441,.717255,.0197702,0,.937125,.708829,.0188168,0,.968254,.700191,.0179113,0,1,1,.518937,0,0,.999998,.518933,0,0,.999967,.518883,0,.00147741,.999832,.51866,0,.00573221,.999466,.518057,0,.011826,.998644,.516752,0,.0192116,.994458,.512347,0,.027573,.991223,.507675,0,.0367099,.985515,.500188,0,.046487,.978308,.490408,0,.0568071,.968359,.477357,0,.0675984,.95682,.461752,0,.0788059,.943929,.443796,0,.090386,.930224,.423893,0,.102304,.916514,.402682,0,.114532,.903653,.380914,0,.127047,.892315,.359212,0,.139828,.882942,.338102,0,.152861,.875438,.31773,0,.16613,.869642,.298186,0,.179624,.865304,.279491,0,.193332,.862382,.261804,0,.207247,.860666,.245146,0,.22136,.859788,.229406,0,.235666,.859608,.214605,0,.250158,.859912,.200691,0,.264832,.86053,.187623,0,.279684,.861368,.17539,0,.294711,.862237,.163901,0,.309911,.863127,.153175,0,.32528,.863923,.143147,0,.340819,.864567,.133781,0,.356524,.865013,.125042,0,.372397,.86539,.116952,0,.388438,.865591,.109476,0,.404645,.865517,.102542,0,.421022,.865084,.0960688,0,.437569,.864309,.0900499,0,.454287,.863151,.0844328,0,.471181,.861649,.0792218,0,.488253,.859742,.0743482,0,.505507,.857446,.0697963,0,.522947,.854757,.0655364,0,.54058,.851783,.061608,0,.558412,.848516,.0579701,0,.576449,.844897,.0545742,0,.594701,.840956,.0514167,0,.613178,.836676,.0484598,0,.631892,.832075,.0456934,0,.650856,.827191,.0431178,0,.670088,.822295,.0407718,0,.689606,.817294,.0386032,0,.709434,.812013,.0365675,0,.7296,.806465,.0346547,0,.750138,.800691,.0328717,0,.771093,.794709,.031211,0,.792519,.788493,.0296504,0,.814488,.782049,.0281782,0,.837097,.775403,.0267965,0,.860481,.76857,.0255002,0,.884842,.761536,.0242759,0,.910494,.754303,.0231142,0,.937985,.74692,.0220305,0,.968254,.739745,.0210192,0,1,1,.613914,0,0,.999996,.613907,0,963597e-10,.999942,.613814,0,.00301247,.999704,.613407,0,.00870385,.999046,.612302,0,.0160714,.995516,.608266,0,.0245899,.991726,.602863,0,.0339681,.985157,.593956,0,.0440254,.97642,.581748,0,.0546409,.964404,.565183,0,.0657284,.950601,.545273,0,.0772246,.935158,.522129,0,.0890812,.919364,.496782,0,.10126,.904754,.470571,0,.113731,.89176,.444037,0,.126469,.881492,.418322,0,.139454,.873656,.393522,0,.15267,.868053,.369795,0,.166101,.864336,.347171,0,.179736,.862259,.325737,0,.193565,.861556,.305532,0,.207578,.861776,.286416,0,.221769,.862661,.268355,0,.23613,.864015,.251334,0,.250656,.865711,.235352,0,.265343,.867519,.220302,0,.280187,.869351,.206161,0,.295183,.871144,.192908,0,.31033,.872839,.180505,0,.325624,.874307,.168848,0,.341065,.875667,.158021,0,.35665,.876758,.147877,0,.37238,.87764,.138441,0,.388253,.878237,.129627,0,.404269,.878563,.121415,0,.42043,.878572,.113741,0,.436735,.87842,.106652,0,.453187,.878057,.100097,0,.469786,.877413,.0940128,0,.486536,.87646,.0883462,0,.503439,.875233,.0830924,0,.520498,.8737,.0781975,0,.537717,.871873,.07364,0,.555102,.86978,.0694103,0,.572657,.867405,.0654696,0,.59039,.864751,.0617914,0,.608307,.861818,.0583491,0,.626419,.858645,.0551443,0,.644733,.855307,.0521894,0,.663264,.851736,.0494334,0,.682025,.847927,.0468504,0,.701032,.843888,.0444261,0,.720308,.839629,.0421497,0,.739875,.835158,.0400082,0,.759764,.830509,.0380076,0,.780014,.825714,.0361488,0,.800673,.820729,.0343956,0,.821803,.815751,.0327781,0,.843492,.810752,.031275,0,.86586,.805587,.0298542,0,.889087,.800317,.0285397,0,.913466,.79489,.0272948,0,.93952,.789314,.0261139,0,.96835,.783593,.0249938,0,1,1,.724258,0,0,.999992,.724243,0,726889e-9,.99987,.724044,0,.00569574,.999336,.72317,0,.0131702,.996271,.719432,0,.0220738,.991159,.712576,0,.0319405,.982465,.700927,0,.0425202,.97049,.684297,0,.0536599,.953973,.661244,0,.065258,.935546,.633804,0,.0772427,.916596,.603071,0,.0895616,.899353,.57105,0,.102175,.885216,.539206,0,.11505,.875076,.508714,0,.128164,.868334,.479571,0,.141495,.864414,.451796,0,.155026,.862678,.425328,0,.168745,.862835,.400352,0,.182639,.864067,.376532,0,.196699,.866086,.35391,0,.210915,.868557,.332424,0,.225282,.871271,.312053,0,.239792,.874058,.292764,0,.25444,.8768,.27453,0,.269223,.87939,.257297,0,.284135,.8819,.24114,0,.299174,.884187,.225934,0,.314337,.886262,.211669,0,.329622,.888119,.198311,0,.345026,.889709,.185783,0,.360549,.891054,.174063,0,.376189,.892196,.163143,0,.391946,.893101,.152952,0,.407819,.893803,.143475,0,.423808,.894277,.134647,0,.439914,.894532,.126434,0,.456137,.894576,.1188,0,.472479,.894393,.111694,0,.48894,.893976,.105069,0,.505523,.893346,.0989077,0,.52223,.892502,.0931724,0,.539064,.891441,.0878276,0,.556028,.890276,.082903,0,.573125,.888972,.0783505,0,.590361,.887469,.0741083,0,.607741,.885785,.0701633,0,.62527,.883914,.0664835,0,.642957,.881872,.0630567,0,.660809,.879651,.0598527,0,.678836,.877267,.0568615,0,.69705,.874717,.05406,0,.715465,.872012,.0514378,0,.734098,.869157,.0489805,0,.752968,.866155,.0466727,0,.772101,.863014,.0445056,0,.791529,.859748,.0424733,0,.81129,.856416,.0405957,0,.831438,.852958,.0388273,0,.852044,.849382,.0371619,0,.87321,.845694,.0355959,0,.89509,.841893,.0341155,0,.917932,.837981,.0327141,0,.942204,.833963,.0313856,0,.968981,.829847,.0301275,0,1,1,.85214,0,0,.999969,.852095,0,.00279627,.999483,.851408,0,.0107635,.994545,.84579,0,.0206454,.986188,.835231,0,.0315756,.969847,.814687,0,.0432021,.945951,.783735,0,.0553396,.91917,.746074,0,.0678766,.895488,.706938,0,.0807395,.878232,.669534,0,.0938767,.868252,.635168,0,.10725,.863873,.603069,0,.120832,.863369,.572514,0,.134598,.86545,.543169,0,.148533,.868803,.514578,0,.16262,.872794,.486762,0,.176849,.87702,.459811,0,.19121,.881054,.433654,0,.205694,.884974,.408574,0,.220294,.888587,.384525,0,.235005,.891877,.36156,0,.24982,.894793,.339661,0,.264737,.89743,.318913,0,.279751,.899796,.299302,0,.294859,.901943,.280843,0,.310058,.903858,.263481,0,.325346,.905574,.247197,0,.340721,.907069,.231915,0,.356181,.908379,.217614,0,.371725,.90952,.20425,0,.387353,.910483,.191758,0,.403063,.91128,.180092,0,.418854,.911936,.169222,0,.434727,.912454,.159098,0,.450682,.912835,.149668,0,.466718,.913078,.140884,0,.482837,.913192,.132709,0,.499038,.913175,.125095,0,.515324,.91304,.118012,0,.531695,.912781,.111417,0,.548153,.91241,.105281,0,.5647,.911924,.0995691,0,.581338,.911331,.0942531,0,.59807,.910637,.0893076,0,.6149,.90984,.0846998,0,.63183,.908941,.0804044,0,.648865,.907944,.0763984,0,.666011,.906857,.0726638,0,.683273,.90568,.0691783,0,.700659,.904416,.0659222,0,.718176,.903067,.0628782,0,.735834,.901637,.0600307,0,.753646,.900128,.0573647,0,.771625,.898544,.0548668,0,.78979,.89689,.052527,0,.808162,.895165,.0503306,0,.826771,.893371,.0482668,0,.845654,.891572,.0463605,0,.864863,.889763,.0445998,0,.884472,.887894,.0429451,0,.904592,.885967,.0413884,0,.925407,.883984,.0399225,0,.947271,.881945,.0385405,0,.97105,.879854,.0372362,0,1,.999804,.995833,0,0,.938155,.933611,0,.0158731,.864755,.854311,0,.0317461,.888594,.865264,0,.0476191,.905575,.863922,0,.0634921,.915125,.850558,0,.0793651,.920665,.829254,0,.0952381,.924073,.802578,0,.111111,.926304,.772211,0,.126984,.927829,.739366,0,.142857,.928924,.705033,0,.15873,.92973,.670019,0,.174603,.930339,.634993,0,.190476,.930811,.600485,0,.206349,.931191,.566897,0,.222222,.93149,.534485,0,.238095,.931737,.503429,0,.253968,.931939,.473811,0,.269841,.932108,.445668,0,.285714,.93225,.418993,0,.301587,.932371,.393762,0,.31746,.932474,.369939,0,.333333,.932562,.347479,0,.349206,.932638,.326336,0,.365079,.932703,.306462,0,.380952,.93276,.287805,0,.396825,.932809,.270313,0,.412698,.932851,.253933,0,.428571,.932887,.23861,0,.444444,.932917,.224289,0,.460317,.932943,.210917,0,.47619,.932965,.19844,0,.492063,.932982,.186807,0,.507937,.932995,.175966,0,.52381,.933005,.165869,0,.539683,.933011,.156468,0,.555556,.933013,.147719,0,.571429,.933013,.139579,0,.587302,.93301,.132007,0,.603175,.933004,.124965,0,.619048,.932994,.118416,0,.634921,.932982,.112326,0,.650794,.932968,.106663,0,.666667,.93295,.101397,0,.68254,.932931,.0964993,0,.698413,.932908,.0919438,0,.714286,.932883,.0877057,0,.730159,.932856,.0837623,0,.746032,.932827,.0800921,0,.761905,.932796,.0766754,0,.777778,.932762,.0734936,0,.793651,.932727,.0705296,0,.809524,.932689,.0677676,0,.825397,.93265,.0651929,0,.84127,.932609,.0627917,0,.857143,.932565,.0605515,0,.873016,.932521,.0584606,0,.888889,.932474,.0565082,0,.904762,.932427,.0546841,0,.920635,.932377,.0529793,0,.936508,.932326,.0513851,0,.952381,.932274,.0498936,0,.968254,.93222,.0484975,0,.984127,.932164,.0471899,0,1],i=new Float32Array(e),s=new Float32Array(t),a=new mi(i,64,64,He,Je,pi,Ae,Ae,be,de,1),r=new mi(s,64,64,He,Je,pi,Ae,Ae,be,de,1);a.needsUpdate=!0,r.needsUpdate=!0;const o=new Uint16Array(e.length);e.forEach(function(h,f){o[f]=br.toHalfFloat(h)});const l=new Uint16Array(t.length);t.forEach(function(h,f){l[f]=br.toHalfFloat(h)});const c=new mi(o,64,64,He,De,pi,Ae,Ae,be,de,1),d=new mi(l,64,64,He,De,pi,Ae,Ae,be,de,1);return c.needsUpdate=!0,d.needsUpdate=!0,this.LTC_HALF_1=c,this.LTC_HALF_2=d,this.LTC_FLOAT_1=a,this.LTC_FLOAT_2=r,this}}Ti.LTC_HALF_1=null;Ti.LTC_HALF_2=null;Ti.LTC_FLOAT_1=null;Ti.LTC_FLOAT_2=null;class zl{static init(){Ti.init();const{LTC_FLOAT_1:e,LTC_FLOAT_2:t,LTC_HALF_1:i,LTC_HALF_2:s}=Ti;d0.LTC_FLOAT_1=e,d0.LTC_FLOAT_2=t,d0.LTC_HALF_1=i,d0.LTC_HALF_2=s}}const lo=new N,Hl=new At,co=new N;class Gl extends _e{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}const ft=new Q0,Vl=new Q0;class Wl{constructor(e={}){const t=this;let i,s,a,r;const o={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);const d=document.createElement("div");d.style.transformStyle="preserve-3d",c.appendChild(d),this.getSize=function(){return{width:i,height:s}},this.render=function(p,u){const S=u.projectionMatrix.elements[5]*r;u.view&&u.view.enabled?(c.style.transform=`translate( ${-u.view.offsetX*(i/u.view.width)}px, ${-u.view.offsetY*(s/u.view.height)}px )`,c.style.transform+=`scale( ${u.view.fullWidth/u.view.width}, ${u.view.fullHeight/u.view.height} )`):c.style.transform="",p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),u.parent===null&&u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld();let R,T;u.isOrthographicCamera&&(R=-(u.right+u.left)/2,T=(u.top+u.bottom)/2);const w=u.view&&u.view.enabled?u.view.height/u.view.fullHeight:1,E=u.isOrthographicCamera?`scale( ${w} )scale(`+S+")translate("+h(R)+"px,"+h(T)+"px)"+f(u.matrixWorldInverse):`scale( ${w} )translateZ(`+S+"px)"+f(u.matrixWorldInverse),M=(u.isPerspectiveCamera?"perspective("+S+"px) ":"")+E+"translate("+a+"px,"+r+"px)";o.camera.style!==M&&(d.style.transform=M,o.camera.style=M),y(p,p,u)},this.setSize=function(p,u){i=p,s=u,a=i/2,r=s/2,l.style.width=p+"px",l.style.height=u+"px",c.style.width=p+"px",c.style.height=u+"px",d.style.width=p+"px",d.style.height=u+"px"};function h(p){return Math.abs(p)<1e-10?0:p}function f(p){const u=p.elements;return"matrix3d("+h(u[0])+","+h(-u[1])+","+h(u[2])+","+h(u[3])+","+h(u[4])+","+h(-u[5])+","+h(u[6])+","+h(u[7])+","+h(u[8])+","+h(-u[9])+","+h(u[10])+","+h(u[11])+","+h(u[12])+","+h(-u[13])+","+h(u[14])+","+h(u[15])+")"}function m(p){const u=p.elements;return"translate(-50%,-50%)"+("matrix3d("+h(u[0])+","+h(u[1])+","+h(u[2])+","+h(u[3])+","+h(-u[4])+","+h(-u[5])+","+h(-u[6])+","+h(-u[7])+","+h(u[8])+","+h(u[9])+","+h(u[10])+","+h(u[11])+","+h(u[12])+","+h(u[13])+","+h(u[14])+","+h(u[15])+")")}function _(p){p.isCSS3DObject&&(p.element.style.display="none");for(let u=0,S=p.children.length;u<S;u++)_(p.children[u])}function y(p,u,S,R){if(p.visible===!1){_(p);return}if(p.isCSS3DObject){const T=p.layers.test(S.layers)===!0,w=p.element;if(w.style.display=T===!0?"":"none",T===!0){p.onBeforeRender(t,u,S);let E;p.isCSS3DSprite?(ft.copy(S.matrixWorldInverse),ft.transpose(),p.rotation2D!==0&&ft.multiply(Vl.makeRotationZ(p.rotation2D)),p.matrixWorld.decompose(lo,Hl,co),ft.setPosition(lo),ft.scale(co),ft.elements[3]=0,ft.elements[7]=0,ft.elements[11]=0,ft.elements[15]=1,E=m(ft)):E=m(p.matrixWorld);const g=o.objects.get(p);if(g===void 0||g.style!==E){w.style.transform=E;const M={style:E};o.objects.set(p,M)}w.parentNode!==d&&d.appendChild(w),p.onAfterRender(t,u,S)}}for(let T=0,w=p.children.length;T<w;T++)y(p.children[T],u,S)}}}const bs=(n,e,t)=>n+(e-n)*t,Xl=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,ho=1e3,uo=615,ql=new Set(["screen","desk","shoulder","shoulderOpen","history"]);class Kl{constructor(e){this.canvas=e,this.lastFrame=performance.now(),this.elapsed=0,this.pointer=new C0,this.pointerSmooth=new C0,this.renderer=new Pl({canvas:e,antialias:!1,powerPreference:"high-performance"}),this.qualityLevel=0,this._lowFpsStreak=0,this._qualityGraceUntil=performance.now()+3e3,this.renderer.setPixelRatio(this.getPixelRatio()),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Bi,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0,this.renderer.toneMapping=Vn,this.renderer.toneMappingExposure=1.34,this.scene=new l9,this.scene.background=new I0("#04060a"),this.scene.fog=new ka("#05080d",.028),this.camera=new nt(42,window.innerWidth/window.innerHeight,.1,220),this.camera.position.set(6.4,3.05,8.6),this.camBase=this.camera.position.clone(),this._tmpBase=new N,this._tmpLook=new N,this.cameraRig={from:null,to:null,start:0,duration:1,active:!1},this.fps=0,this._fpsFrames=0,this._fpsSince=performance.now(),this.shots={wide:{pos:new N(6.1,2.94,8.4),look:new N(.15,1.28,.2),fov:42},aisle:{pos:new N(3.4,2.28,4.9),look:new N(-.1,1.2,.4),fov:38},desk:{pos:new N(.72,1.42,2.46),look:new N(-.02,1.2,-.05),fov:34},screen:{pos:new N(.2,1.32,1.28),look:new N(-.02,1.19,-.22),fov:31},away:{pos:new N(3.1,1.86,4.2),look:new N(.1,1.05,.4),fov:44},tableau:{pos:new N(1.55,1.62,1.95),look:new N(-.04,1.02,-.08),fov:38}},this.shots.shoulder=this.shots.desk,this.shots.shoulderOpen=this.shots.desk,this.keyLightBase=230,this.keyLightCalm=new I0("#ffcf9a"),this.keyLightCold=new I0("#cfe0ff"),this.keyLightTint=0,this.keyLightLevel=1,this.handheld=!1,this.currentShot="wide",this.shotBlend=1,this.shotFrom=Es(this.shots.wide),this.shotTo=Es(this.shots.wide),this.buildWorld(),this.buildComposer(),this.buildScreenLayer(),this.onResize=this.onResize.bind(this),this.onPointerMove=this.onPointerMove.bind(this),window.addEventListener("resize",this.onResize),window.addEventListener("pointermove",this.onPointerMove,{passive:!0}),this.bindScreenTexture(),this.attachScreenDom(),this.updateScreenShots(),this.playIntroMove(),this.animate()}buildScreenLayer(){const e=document.getElementById("screen-layer");e&&(this.cssRenderer=new Wl,this.cssRenderer.setSize(window.innerWidth,window.innerHeight),e.appendChild(this.cssRenderer.domElement))}attachScreenDom(){const e=document.getElementById("desktop");if(!e||this.laptopScreenObject||!this.lid)return;e.style.width=ho+"px",e.style.height=uo+"px",e.classList.add("is-screen-dom");const t=new Gl(e);t.scale.set(.545/ho,.335/uo,1),t.position.set(0,.205,.0115),this.lid.add(t),this.laptopScreenObject=t}updateScreenShots(){this.screenMesh&&(this.shots.desk=this.screenShot(.78,.055,.05),this.shots.screen=this.screenShot(.93,.015,.012),this.shots.shoulder=this.shoulderShot(.86,.2,.03),this.shots.shoulderOpen=this.shoulderShot(.8,.14,.02),this.shots.history=this.screenShot(.84,.03,.035))}screenTakeover(){const e=this.screenMesh?.material;e&&(e.map=null,e.color.set("#0b1217"),e.transparent=!0,e.needsUpdate=!0,this.screenTextureLive=!1)}screenShot(e=.8,t=.1,i=.045){const a=this.camera.aspect,r=34/2*(Math.PI/180),o=.545/(e*2*Math.tan(r)*a),l=.335/(e*2*Math.tan(r)),c=Math.max(o,l)*1.035,d=new N,h=new At;this.screenMesh.getWorldPosition(d),this.screenMesh.getWorldQuaternion(h);const f=new N(0,0,1).applyQuaternion(h),m=new N(1,0,0).applyQuaternion(h),_=new N(0,1,0).applyQuaternion(h);return{pos:d.clone().addScaledVector(f,c).addScaledVector(m,c*t).addScaledVector(_,c*i),look:d.clone().addScaledVector(m,-.012).addScaledVector(_,.008),fov:34}}shoulderShot(e=.86,t=.2,i=.03){const s=this.screenShot(e,0,i),a=new N,r=new At;this.screenMesh.getWorldPosition(a),this.screenMesh.getWorldQuaternion(r);const o=new N(1,0,0).applyQuaternion(r),l=s.pos.distanceTo(a);return s.pos.addScaledVector(o,l*t),s}buildWorld(){const e=this.scene;zl.init();const t=new P9("#1d2733","#04060a",.045);e.add(t);const i=new D9("#ffcf9a",230,5.2,.62,.72,1.4);i.position.set(.02,3.04,.12),i.target.position.set(.02,.78,.02),i.castShadow=!0,i.shadow.mapSize.set(2048,2048),i.shadow.bias=-.0016,i.shadow.camera.near=.4,i.shadow.camera.far=12,e.add(i,i.target),this.keyLight=i,this.buildFloor(),this.buildCeiling(),this.buildHeroDesk(),this.buildNeighbourDesks(),this.buildPartitions(),this.buildProps(),this.buildDust()}buildFloor(){const e=new Ie(48,48),t=new $0({color:"#1b1f24",roughness:.62,metalness:.18}),i=new R0(e,t);i.rotation.x=-Math.PI/2,i.receiveShadow=!0,this.scene.add(i);const s=new $0({color:"#20262d",roughness:.9,transparent:!0,opacity:.55});for(let a=-6;a<=6;a++){const r=new R0(new Ie(.1,22),s);r.rotation.x=-Math.PI/2,r.position.set(a*1.55+.6,.002,-3),this.scene.add(r)}}buildCeiling(){const e=new R0(new Ie(40,40),new $0({color:"#0a0d12",roughness:1}));e.rotation.x=Math.PI/2,e.position.y=3.4,this.scene.add(e);const t=new Ft({color:"#ffe4bd"}),i=new Ft({color:"#ffcf9a",transparent:!0,opacity:.09,side:Ye,depthWrite:!1});[{x:.02,z:.12,w:1.9,rot:0}].forEach(a=>{const r=new Oe,o=new R0(new re(a.w,.045,.1),t);o.position.y=3.02,r.add(o);const l=new R0(new re(a.w+.18,.06,.2),new $0({color:"#14181d",roughness:.7,metalness:.4}));l.position.y=3.08,r.add(l);const c=3,d=new R0(new Tt(a.w*.28,a.w*.78,c,24,1,!0),i);d.position.y=3.02-c/2,r.add(d),r.position.set(a.x,0,a.z),r.rotation.y=a.rot,this.scene.add(r)})}buildLaptop(){const e=new Oe,t=new $0({color:"#2e3339",roughness:.34,metalness:.82}),i=new $0({color:"#14181d",roughness:.72,metalness:.24}),s=new R0(new re(.62,.022,.42),t);s.position.y=.011,s.castShadow=!0,s.receiveShadow=!0,e.add(s);const a=new R0(new re(.54,.004,.3),i);a.position.set(0,.023,.035),e.add(a);const r=new re(.032,.004,.026),o=new S9(r,i,78),l=new Q0;let c=0;for(let u=0;u<4;u++)for(let S=0;S<13&&!(c>=78);S++)l.makeTranslation(-.208+S*.0346,.027,-.075+u*.032),o.setMatrixAt(c++,l);for(let u=0;u<12&&!(c>=78);u++)l.makeTranslation(-.19+u*.0346,.027,.058),o.setMatrixAt(c++,l);o.instanceMatrix.needsUpdate=!0,e.add(o);const d=new R0(new re(.19,.002,.11),new $0({color:"#3a4048",roughness:.24,metalness:.7}));d.position.set(0,.026,.145),e.add(d);const h=new Oe;h.position.set(0,.022,-.206),h.rotation.x=-.24,this.lid=h;const f=new R0(new re(.62,.4,.018),new $0({color:"#262b31",roughness:.36,metalness:.8}));f.position.set(0,.2,0),f.castShadow=!0,h.add(f),this.screenCanvas=document.createElement("canvas"),this.screenCanvas.width=1024,this.screenCanvas.height=640,this.screenTex=new Ss(this.screenCanvas),this.screenTex.colorSpace=Be,this.screenTex.anisotropy=4;const m=new Ft({map:this.screenTex,toneMapped:!1}),_=new R0(new Ie(.545,.335),m);_.position.set(0,.205,.0105),h.add(_),this.screenMesh=_;const y=new R0(new Ie(.575,.365),new $0({color:"#0a0d10",roughness:.32,metalness:.4}));y.position.set(0,.205,.0085),h.add(y),this.screenBezel=y;const p=new R0(new Ie(.545,.335),new Ft({color:"#9fbfe0",transparent:!0,opacity:.045,blending:zi,depthWrite:!1}));return p.position.set(0,.205,.0112),h.add(p),e.add(h),e}buildHeroDesk(){const e=new Oe;e.position.set(0,0,.15);const t=new $0({color:"#3a3229",roughness:.44,metalness:.12}),i=new R0(new re(2.3,.05,1),t);i.position.y=.74,i.castShadow=!0,i.receiveShadow=!0,e.add(i);const s=new R0(new re(2.3,.006,.006),new Ft({color:"#d8b184",transparent:!0,opacity:.35}));s.position.set(0,.768,.5),e.add(s);const a=new $0({color:"#1c2126",roughness:.5,metalness:.7});[[-1.02,-.42],[1.02,-.42],[-1.02,.42],[1.02,.42]].forEach(([g,M])=>{const U=new R0(new re(.05,.72,.05),a);U.position.set(g,.36,M),U.castShadow=!0,e.add(U)});const r=this.buildLaptop();r.position.set(.02,.765,-.1),r.rotation.y=.03,r.castShadow=!0,e.add(r),this.laptop=r;const o=new Oe,l=new R0(new Va(.038,18,12,0,Math.PI*2,0,Math.PI/2),new $0({color:"#2a2f35",roughness:.42,metalness:.5}));l.scale.set(1,.42,1.5),o.add(l),o.position.set(.36,.802,-.02),e.add(o);const c=new Oe,d=new R0(new Tt(.043,.036,.1,22,1,!0),new $0({color:"#d9d2c4",roughness:.5,metalness:.05,side:Ye}));d.position.y=.05,c.add(d);const h=new R0(new Ha(.04,22),new $0({color:"#241a12",roughness:.22,metalness:.1}));h.rotation.x=-Math.PI/2,h.position.y=.085,c.add(h);const f=new R0(new Bn(.026,.006,8,16,Math.PI*1.35),new $0({color:"#d9d2c4",roughness:.5}));f.position.set(.045,.052,0),f.rotation.y=Math.PI/2,c.add(f),c.position.set(-.55,.765,-.06),c.castShadow=!0,e.add(c),this.noteCanvas=document.createElement("canvas"),this.noteCanvas.width=320,this.noteCanvas.height=200,this.drawNote(),this.noteTex=new Ss(this.noteCanvas),this.noteTex.colorSpace=Be;const m=new R0(new Ie(.2,.125),new $0({map:this.noteTex,roughness:.92}));m.rotation.x=-Math.PI/2,m.rotation.z=.16,m.position.set(.62,.768,.26),e.add(m);const _=new R0(new Ie(.21,.29),new $0({color:"#cfc7b6",roughness:.95}));_.rotation.x=-Math.PI/2,_.rotation.z=-.28,_.position.set(-.72,.767,.26),e.add(_);const y=new Oe,p=new $0({color:"#191d21",roughness:.6}),u=new R0(new Bn(.085,.008,8,28,Math.PI),p);u.rotation.z=0,y.add(u),[-1,1].forEach(g=>{const M=new R0(new Tt(.042,.042,.026,20),new $0({color:"#15181c",roughness:.7}));M.position.set(g*.085,-.012,0),M.rotation.x=Math.PI/2,y.add(M)}),y.position.set(-.6,.8,-.3),y.rotation.x=-Math.PI/2.2,y.rotation.z=.4,e.add(y),this.scene.add(e),this.heroDesk=e;const S=new Oe,R=new $0({color:"#23272c",roughness:.94}),T=new R0(new re(.48,.07,.46),R);T.position.y=.47,T.castShadow=!0,S.add(T);const w=new R0(new re(.46,.56,.07),R);w.position.set(0,.79,.22),w.rotation.x=.12,w.castShadow=!0,S.add(w);const E=new R0(new Tt(.035,.035,.3,12),a);E.position.y=.32,S.add(E);for(let g=0;g<5;g++){const M=g/5*Math.PI*2,U=new R0(new re(.24,.028,.04),a);U.position.set(Math.cos(M)*.12,.08,Math.sin(M)*.12),U.rotation.y=-M,S.add(U)}S.position.set(.02,0,1.22),S.rotation.y=Math.PI+.16,this.scene.add(S)}buildNeighbourDesks(){const e=new $0({color:"#2b3037",roughness:.55,metalness:.1}),t=new $0({color:"#1e242b",roughness:.8}),i=new $0({color:"#1c2025",roughness:.95});[[-3.2,-.4,.1],[-3.2,2,.05],[3.4,-.6,-.08],[3.4,1.8,.02],[-3.1,-2.9,0],[3.4,-2.9,.06],[.2,-3.2,0]].forEach(([a,r,o],l)=>{const c=new Oe,d=new R0(new re(1.9,.045,.85),e);d.position.y=.73,d.castShadow=!0,d.receiveShadow=!0,c.add(d),[-.85,.85].forEach(m=>{const _=new R0(new re(.045,.7,.045),t);_.position.set(m,.35,.34),c.add(_)});const h=new R0(new re(1.9,.5,.03),t);if(h.position.set(0,1,-.4),c.add(h),l%2===0){const m=new R0(new Ie(.62,.36),new $0({color:"#0c1116",roughness:.28,metalness:.35}));m.position.set(.1,1.05,-.32),m.rotation.y=.08,c.add(m)}const f=new R0(new re(.42,.5,.42),i);f.position.set(.05,.26,.62),f.castShadow=!0,c.add(f),c.position.set(a,0,r),c.rotation.y=o,this.scene.add(c)})}buildPartitions(){const e=new A9({color:"#9fc0d8",roughness:.16,metalness:0,transmission:.82,thickness:.02,transparent:!0,opacity:.28,side:Ye}),t=new R0(new Ie(7.5,2.6),e);t.position.set(-5.1,1.3,.6),t.rotation.y=Math.PI/2,this.scene.add(t);const i=new $0({color:"#2a3138",roughness:.42,metalness:.7});for(let c=-3;c<=3;c++){const d=new R0(new re(.05,2.6,.05),i);d.position.set(-5.1,1.3,c*1.25),this.scene.add(d)}const s=new R0(new Ie(18,4),new $0({color:"#11161c",roughness:.95}));s.position.set(0,2,-7.4),this.scene.add(s);const a=document.createElement("canvas");a.width=1024,a.height=256;const r=a.getContext("2d");r.fillStyle="#0d1218",r.fillRect(0,0,1024,256),r.fillStyle="rgba(240,178,100,0.78)",r.font="600 96px 'Segoe UI', sans-serif",r.fillText("QUIET  FLOOR",74,150),r.fillStyle="rgba(214,226,238,0.28)",r.font="400 30px 'Segoe UI', sans-serif",r.fillText("B-17  ·  共享办公区",78,200);const o=new Ss(a);o.colorSpace=Be;const l=new R0(new Ie(3.6,.9),new Ft({map:o,transparent:!0,opacity:.2}));l.position.set(.4,2.5,-7.35),this.scene.add(l)}buildProps(){const e=(a,r,o=1)=>{const l=new Oe,c=new R0(new Tt(.16,.12,.26,16),new $0({color:"#2b2723",roughness:.8}));c.position.y=.13,c.castShadow=!0,l.add(c);const d=new $0({color:"#2b4132",roughness:.85,side:Ye});for(let h=0;h<9;h++){const f=new R0(new Ga(.09,.5,5,1,!0),d),m=h/9*Math.PI*2;f.position.set(Math.cos(m)*.09,.4+Math.random()*.1,Math.sin(m)*.09),f.rotation.set(Math.cos(m)*.5,m,Math.sin(m)*.5+.2),f.scale.setScalar(.6+Math.random()*.5),l.add(f)}l.position.set(a,0,r),l.scale.setScalar(o),this.scene.add(l)};e(-4.7,-5.2,1.5),e(4.9,-4.4,1.3),e(-4.85,4.3,1.15);const t=new Oe,i=[new $0({color:"#4a3a33",roughness:.9}),new $0({color:"#2f3b44",roughness:.9}),new $0({color:"#59452f",roughness:.9})];for(let a=0;a<3;a++){const r=new R0(new re(.3,.035,.22),i[a]);r.position.set(0,.77+a*.037,0),r.rotation.y=a*.09,r.castShadow=!0,t.add(r)}t.position.set(-2.65,0,2),this.scene.add(t);const s=new R0(new Tt(.06,.07,.03,16),new $0({color:"#2a2f35",roughness:.6}));s.position.set(1.2,3.34,-1.2),this.scene.add(s)}buildDust(){const t=new Xe,i=new Float32Array(900*3),s=new Float32Array(900);for(let r=0;r<900;r++)i[r*3]=(Math.random()-.5)*11,i[r*3+1]=Math.random()*3.1,i[r*3+2]=(Math.random()-.5)*11,s[r]=Math.random();t.setAttribute("position",new mt(i,3)),t.setAttribute("aSeed",new mt(s,1));const a=new Ge({transparent:!0,depthWrite:!1,blending:zi,uniforms:{uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:`
        attribute float aSeed;
        uniform float uTime;
        uniform float uPixelRatio;
        varying float vAlpha;
        void main() {
          vec3 p = position;
          p.y += sin(uTime * 0.22 + aSeed * 22.0) * 0.12;
          p.x += sin(uTime * 0.14 + aSeed * 34.0) * 0.16;
          p.z += cos(uTime * 0.12 + aSeed * 18.0) * 0.14;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = (1.6 + aSeed * 2.6) * uPixelRatio * (2.2 / -mv.z);
          vAlpha = 0.25 + 0.55 * sin(uTime * 0.7 + aSeed * 40.0) * 0.5 + 0.28;
        }
      `,fragmentShader:`
        varying float vAlpha;
        void main() {
          vec2 d = gl_PointCoord - vec2(0.5);
          float r = length(d);
          if (r > 0.5) discard;
          float a = smoothstep(0.5, 0.0, r) * vAlpha;
          gl_FragColor = vec4(1.0, 0.85, 0.68, a * 0.5);
        }
      `});this.dust=new T9(t,a),this.scene.add(this.dust)}drawNote(){const e=this.noteCanvas.getContext("2d");e.fillStyle="#e8dba8",e.fillRect(0,0,320,200),e.fillStyle="#2d2a1e",e.font="500 26px 'Segoe UI', 'Microsoft YaHei', sans-serif",e.fillText("如果你看到这行字，",26,62),e.fillText("说明我没锁屏。",26,100),e.font="600 30px 'Segoe UI', 'Microsoft YaHei', sans-serif",e.fillText("别碰邮件。",26,148),e.font="500 24px 'Segoe UI', sans-serif",e.fillStyle="#6a6047",e.fillText("—— 林",232,186)}bindScreenTexture(){this.screenBlink=0,this.screenTimer=0,this.drawScreen()}drawScreen(){const e=this.screenCanvas.getContext("2d"),t=1024,i=640,s=e.createLinearGradient(0,0,t,i);s.addColorStop(0,"#0b1016"),s.addColorStop(1,"#070a0e"),e.fillStyle=s,e.fillRect(0,0,t,i),e.fillStyle="#0f151c",e.fillRect(0,0,t,62),e.fillStyle="rgba(240,178,100,0.9)",e.fillRect(0,60,t,2),e.fillStyle="#8b96a3",e.font="500 20px 'Segoe UI', 'Microsoft YaHei', sans-serif",e.fillText("内网协作平台",34,39),e.fillStyle="rgba(125,135,148,0.9)",e.font="400 17px 'Segoe UI', sans-serif",e.fillText("intranet.local/mail",196,39),e.fillStyle="rgba(240,178,100,0.85)",e.font="500 18px 'Segoe UI', sans-serif",e.fillText("20:00",t-96,39),e.fillStyle="#0c1117",e.fillRect(0,62,232,i-62),e.strokeStyle="rgba(214,226,238,0.08)",e.beginPath(),e.moveTo(232,62),e.lineTo(232,i),e.stroke(),e.fillStyle="rgba(125,135,148,0.7)",e.font="600 13px 'Segoe UI', sans-serif",e.fillText("邮  件",34,108),[["收件箱","3",!0],["草稿箱","1",!1],["已发送","",!1],["归档","",!1]].forEach(([o,l,c],d)=>{const h=140+d*40;c&&(e.fillStyle="rgba(240,178,100,0.09)",e.fillRect(0,h-20,232,34),e.fillStyle="#f0b264",e.fillRect(0,h-20,2,34)),e.fillStyle=c?"#e9e4d8":"#98a3b0",e.font="500 18px 'Segoe UI', 'Microsoft YaHei', sans-serif",e.fillText(o,34,h+3),l&&(e.fillStyle=c?"rgba(240,178,100,0.9)":"rgba(125,135,148,0.7)",e.font="500 15px 'Segoe UI', sans-serif",e.fillText(l,204,h+3))}),[["安全审计","Q3 权限审计 —— 请于今日 17:00 前确认","16:58",!0],["IT 安全中心","紧急：您的权限将在 30 分钟后被回收","19:36",!0],["周会提醒","明日 10:00 数据平台周会（会议室 B-2）","18:20",!1]].forEach(([o,l,c,d],h)=>{const f=106+h*92;e.fillStyle=d?"rgba(255,255,255,0.02)":"transparent",e.fillRect(233,f,t-233,90),e.strokeStyle="rgba(214,226,238,0.06)",e.beginPath(),e.moveTo(262,f+90),e.lineTo(t-34,f+90),e.stroke(),d&&(e.fillStyle="#f0b264",e.beginPath(),e.arc(258,f+26,4,0,Math.PI*2),e.fill()),e.fillStyle=d?"#e9e4d8":"#a9b3be",e.font="600 19px 'Segoe UI', 'Microsoft YaHei', sans-serif",e.fillText(o,278,f+33),e.fillStyle="#9aa5b1",e.font="400 18px 'Segoe UI', 'Microsoft YaHei', sans-serif",e.fillText(l,278,f+64),e.fillStyle="rgba(125,135,148,0.85)",e.font="400 15px 'Segoe UI', sans-serif",e.fillText(c,t-100,f+33)}),e.fillStyle="rgba(214,226,238,0.06)",e.fillRect(233,i-6,t-233,6),e.fillStyle="rgba(240,178,100,0.85)",e.fillRect(233,i-6,(t-233)*.985,6),e.save(),e.translate(t-210,i-152),e.rotate(-.02),e.fillStyle="rgba(232,219,168,0.94)",e.fillRect(0,0,178,118),e.fillStyle="#2d2a1e",e.font="500 13px 'Segoe UI', 'Microsoft YaHei', sans-serif",e.fillText("如果看到这行字，",14,26),e.fillText("说明我没锁屏。",14,48),e.font="700 16px 'Segoe UI', 'Microsoft YaHei', sans-serif",e.fillText("别碰邮件。",14,78),e.font="500 12px 'Segoe UI', sans-serif",e.fillStyle="#6a6047",e.fillText("—— 林",128,104),e.restore(),this.screenBlink>.5&&(e.fillStyle="#f0b264",e.beginPath(),e.moveTo(430,508),e.lineTo(430,536),e.lineTo(438,529),e.lineTo(444,541),e.lineTo(451,537),e.lineTo(445,525),e.lineTo(454,523),e.closePath(),e.fill()),this.screenTex.needsUpdate=!0}playIntroMove(){const e=this.shots.tableau;this.camera.position.copy(e.pos),this.camBase.copy(e.pos),this.lookTarget=e.look.clone(),this.camera.fov=e.fov,this.currentShot="tableau",this.camera.updateProjectionMatrix(),this.camera.lookAt(this.lookTarget)}goTo(e,t=2.4){const i=this.shots[e];i&&(e===this.currentShot&&!this.shotActive||(this.shotFrom={pos:this.camBase.clone(),look:this.lookTarget.clone(),fov:this.camera.fov},this.shotTo=Es(i),this.shotStartMs=performance.now(),this.shotStart=this.elapsed,this.shotDuration=t,this.shotActive=!0,this.currentShot=e))}setMood(e=1,t=0){this.keyLightLevel=e,this.keyLightTint=Math.max(0,Math.min(1,t)),this.applyKeyLight()}flashKeyLight(e=1,t=1.3,i=200){if(!this.keyLight)return;const s=this.keyLightBase*this.keyLightLevel;let a=0;const r=()=>{this.keyLight&&(a++,this.keyLight.intensity=a%2===1?s*t:s,a<e*2&&setTimeout(r,i))};r()}applyKeyLight(){this.keyLight&&(this.keyLight.intensity=this.keyLightBase*this.keyLightLevel,this.keyLight.color.copy(this.keyLightCalm).lerp(this.keyLightCold,this.keyLightTint))}onPointerMove(e){this.pointer.x=e.clientX/window.innerWidth*2-1,this.pointer.y=e.clientY/window.innerHeight*2-1}getPixelRatio(){const e=[1.75,1.25,1,1][this.qualityLevel]??1;return Math.min(window.devicePixelRatio,e)}adaptQuality(){this.qualityLevel>=3||(this.qualityLevel++,this.renderer.setPixelRatio(this.getPixelRatio()),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer?.setPixelRatio?.(this.getPixelRatio()),this.composer?.setSize(window.innerWidth,window.innerHeight),this.qualityLevel>=3&&this.bloomPass&&(this.bloomPass.enabled=!1),this._lowFpsStreak=0,this._qualityGraceUntil=performance.now()+1500)}onResize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(this.getPixelRatio()),this.renderer.setSize(e,t),this.composer?.setSize(e,t),this.bloomPass?.setSize(Math.ceil(e/2),Math.ceil(t/2)),this.cssRenderer?.setSize(e,t),this.updateScreenShots()}buildComposer(){const e=new Fl(this.renderer);e.addPass(new Ol(this.scene,this.camera));const t=new yi(new C0(Math.ceil(window.innerWidth/2),Math.ceil(window.innerHeight/2)),.62,.72,.74);e.addPass(t),e.addPass(new kl),this.composer=e,this.bloomPass=t}animate(){const e=()=>{if(this.raf=requestAnimationFrame(e),this.paused)return;const t=performance.now();if(!this.shotActive&&this.currentShot!=="screen"&&this.currentShot!=="desk"&&this.screenTextureLive!==!1&&t-this.lastFrame<30)return;const s=Math.min((t-this.lastFrame)/1e3,.05);if(this.lastFrame=t,this.elapsed+=s,this._fpsFrames++,t-this._fpsSince>=1e3){const d=this._fpsFrames;this.fps=Math.round(d*1e3/(t-this._fpsSince)),this._fpsFrames=0,this._fpsSince=t,t>this._qualityGraceUntil&&d>=10&&this.fps<45?++this._lowFpsStreak>=2&&this.adaptQuality():this._lowFpsStreak=0}if(this.shotActive){const d=Math.min(1,(t-this.shotStartMs)/1e3/this.shotDuration),h=Xl(d);this.camBase.lerpVectors(this.shotFrom.pos,this.shotTo.pos,h),this.lookTarget.lerpVectors(this.shotFrom.look,this.shotTo.look,h),this.camera.fov=bs(this.shotFrom.fov,this.shotTo.fov,h),this.camera.updateProjectionMatrix(),d>=1&&(this.shotActive=!1)}this.pointerSmooth.x=bs(this.pointerSmooth.x,this.pointer.x,1-Math.pow(.001,s)),this.pointerSmooth.y=bs(this.pointerSmooth.y,this.pointer.y,1-Math.pow(.001,s));const a=Math.sin(this.elapsed*.42)*.012,r=Math.sin(this.elapsed*.19)*.03,o=this.handheld&&!this.shotActive?{x:Math.sin(this.elapsed*.8)*.002,y:Math.cos(this.elapsed*.62)*.0016}:{x:0,y:0},l=ql.has(this.currentShot)?0:this.currentShot==="aisle"?.5:1,c=this._tmpBase.copy(this.camBase);c.x+=(this.pointerSmooth.x*.16+r)*l,c.y+=(-this.pointerSmooth.y*.09+a)*l,c.x+=o.x,c.y+=o.y,this.camera.position.copy(c),this.camera.lookAt(this.lookTarget.x+this.pointerSmooth.x*.05*l,this.lookTarget.y-this.pointerSmooth.y*.035*l,this.lookTarget.z),this.screenBlink=(Math.sin(this.elapsed*2.1)+1)/2,this.screenTimer+=s,this.screenTextureLive!==!1&&this.screenTimer>.14&&(this.screenTimer=0,this.drawScreen()),this.dust&&(this.dust.material.uniforms.uTime.value=this.elapsed),this.composer.render(),this.screenTextureLive===!1&&this.cssRenderer?.render(this.scene,this.camera)};e()}dispose(){cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.onResize),window.removeEventListener("pointermove",this.onPointerMove),this.renderer.dispose()}pause(){this.paused=!0}resume(){this.paused=!1,this.lastFrame=performance.now()}}function Es(n){return{pos:n.pos.clone(),look:n.look.clone(),fov:n.fov}}class $l{constructor(){this.ctx=null,this.ready=!1,this.muted=!1,this.layers={},this.master=null,this.proximity=0,this.night=!0,this.initPromise=null,this.roomTone=1}init(){return this.initPromise||(this.initPromise=this.boot()),this.initPromise.then(async()=>{if(this.ctx&&this.ctx.state==="suspended")try{await this.ctx.resume()}catch{}})}async boot(){if(this.ready)return;const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e;this.ctx=t;const i=t.createGain();i.gain.value=0;const s=t.createDynamicsCompressor();s.threshold.value=-18,s.knee.value=22,s.ratio.value=3,s.attack.value=.006,s.release.value=.3,i.connect(s).connect(t.destination),this.master=i,this.noise=this.makeNoise(4),this.ready=!0,this.buildRoom(),this.buildPad(),this.fadeIn()}makeNoise(e){const t=this.ctx,i=Math.floor(t.sampleRate*e),s=t.createBuffer(2,i,t.sampleRate);for(let a=0;a<2;a++){const r=s.getChannelData(a);let o=0;for(let l=0;l<i;l++){const c=Math.random()*2-1;o=(o+.02*c)/1.02,r[l]=o*3.2}}return s}loopNoise(e,t,i,s=.7,a=null){const r=this.ctx,o=r.createBufferSource();o.buffer=this.noise,o.loop=!0;const l=r.createBiquadFilter();l.type=t,l.frequency.value=i,l.Q.value=s;const c=r.createGain();return c.gain.value=e,o.connect(l).connect(c).connect(a||this.master),o.start(),{src:o,filter:l,gain:c}}buildRoom(){const e=this.ctx,t=e.createGain();t.gain.value=this.roomTone,t.connect(this.master),this.layers.roomBus=t;const i=this.loopNoise(.5,"lowpass",260,.5,t);this.layers.air=i;const s=this.loopNoise(.16,"bandpass",520,1.4,t);this.layers.fan=s;const a=e.createOscillator();a.frequency.value=.09;const r=e.createGain();r.gain.value=90,a.connect(r).connect(s.filter.frequency),a.start();const o=e.createGain();o.gain.value=.028,o.connect(this.master);const l=e.createOscillator();l.type="sine",l.frequency.value=100;const c=e.createOscillator();c.type="triangle",c.frequency.value=200.6;const d=e.createGain();d.gain.value=.34,l.connect(o),c.connect(d).connect(o),l.start(),c.start(),this.layers.hum={hum1:l,hum2:c,gain:o};const h=this.loopNoise(.022,"highpass",5200,.4,t);this.layers.hiss=h}buildPad(){const e=this.ctx,t=e.createGain();t.gain.value=0,t.connect(this.master);const i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=620,i.Q.value=.8,i.connect(t);const a=[55,65.41,82.41,98].map((f,m)=>{const _=e.createOscillator();_.type=m%2===0?"sine":"triangle",_.frequency.value=f,_.detune.value=(m-1.5)*6;const y=e.createGain();return y.gain.value=.22/(m+1),_.connect(y).connect(i),_.start(),{o:_,g:y}}),r=e.createOscillator();r.frequency.value=.043;const o=e.createGain();o.gain.value=210,r.connect(o).connect(i.frequency),r.start();const l=e.createOscillator();l.type="sine",l.frequency.value=1318.5;const c=e.createGain();c.gain.value=.006;const d=e.createOscillator();d.frequency.value=.12;const h=e.createGain();h.gain.value=.005,d.connect(h).connect(c.gain),l.connect(c).connect(i),l.start(),d.start(),this.layers.pad={out:t,filter:i,oscs:a,shimmer:c},t.gain.setTargetAtTime(.5,e.currentTime,3)}fadeIn(){const e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setValueAtTime(1e-4,e),this.master.gain.exponentialRampToValueAtTime(this.muted?1e-4:.62,e+4)}setMuted(e){if(this.muted=e,!this.ready)return;const t=this.ctx.currentTime;this.master.gain.cancelScheduledValues(t),this.master.gain.setTargetAtTime(e?1e-4:.62,t,.25)}setProximity(e){if(!this.ready)return;const t=this.ctx.currentTime;this.proximity=e,this.layers.fan?.gain.gain.setTargetAtTime(.1+e*.26,t,.6),this.layers.pad?.out.gain.setTargetAtTime(.34+e*.3,t,1.2),this.layers.pad?.filter&&this.layers.pad.filter.frequency.setTargetAtTime(520+e*420,t,1.4)}setTension(e){if(this.ready){if(this.ctx.currentTime,!this.layers.heart){const t=this.ctx.createGain();t.gain.value=0,t.connect(this.master),this.layers.heart={gain:t,beat:0};const i=()=>{if(!this.ready)return;const s=this.ctx.currentTime,a=this.layers.heart.level||0;a>.001&&this.thump(s,a),this.layers.heart.timer=setTimeout(i,(this.layers.heart.period||1)*1e3)};i()}this.layers.heart.level=Math.max(0,Math.min(1,e)),this.layers.heart.period=1.15-e*.45}}thump(e,t){const i=this.ctx,s=i.createOscillator();s.type="sine",s.frequency.setValueAtTime(64,e),s.frequency.exponentialRampToValueAtTime(38,e+.16);const a=i.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(.14*t,e+.012),a.gain.exponentialRampToValueAtTime(1e-4,e+.3),s.connect(a).connect(this.master),s.start(e),s.stop(e+.34)}keyboard(){if(!this.ready)return;const e=this.ctx,t=e.currentTime,i=e.createBufferSource();i.buffer=this.noise,i.playbackRate.value=.8+Math.random()*.5;const s=e.createBiquadFilter();s.type="bandpass",s.frequency.value=1700+Math.random()*900,s.Q.value=1.1;const a=e.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(.055,t+.004),a.gain.exponentialRampToValueAtTime(1e-4,t+.055),i.connect(s).connect(a).connect(this.master),i.start(t,Math.random()*2,.07)}click(){if(!this.ready)return;const e=this.ctx,t=e.currentTime,i=e.createOscillator();i.type="triangle",i.frequency.setValueAtTime(880,t),i.frequency.exponentialRampToValueAtTime(420,t+.05);const s=e.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.04,t+.004),s.gain.exponentialRampToValueAtTime(1e-4,t+.09),i.connect(s).connect(this.master),i.start(t),i.stop(t+.1)}ping(){if(!this.ready)return;const e=this.ctx,t=e.currentTime;[1046.5,1568].forEach((i,s)=>{const a=e.createOscillator();a.type="sine",a.frequency.value=i;const r=e.createGain();r.gain.setValueAtTime(1e-4,t+s*.13),r.gain.exponentialRampToValueAtTime(.055,t+s*.13+.01),r.gain.exponentialRampToValueAtTime(1e-4,t+s*.13+.6),a.connect(r).connect(this.master),a.start(t+s*.13),a.stop(t+s*.13+.65)})}error(){if(!this.ready)return;const e=this.ctx,t=e.currentTime,i=e.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(196,t),i.frequency.setValueAtTime(147,t+.12);const s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=900;const a=e.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(.05,t+.01),a.gain.exponentialRampToValueAtTime(1e-4,t+.3),i.connect(s).connect(a).connect(this.master),i.start(t),i.stop(t+.32)}success(){if(!this.ready)return;const e=this.ctx,t=e.currentTime;[523.25,659.25,783.99].forEach((i,s)=>{const a=e.createOscillator();a.type="sine",a.frequency.value=i;const r=e.createGain(),o=t+s*.09;r.gain.setValueAtTime(1e-4,o),r.gain.exponentialRampToValueAtTime(.05,o+.02),r.gain.exponentialRampToValueAtTime(1e-4,o+1.1),a.connect(r).connect(this.master),a.start(o),a.stop(o+1.2)})}whoosh(){if(!this.ready)return;const e=this.ctx,t=e.currentTime,i=e.createBufferSource();i.buffer=this.noise;const s=e.createBiquadFilter();s.type="bandpass",s.Q.value=.8,s.frequency.setValueAtTime(180,t),s.frequency.exponentialRampToValueAtTime(1400,t+1.1);const a=e.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(.08,t+.3),a.gain.exponentialRampToValueAtTime(1e-4,t+1.5),i.connect(s).connect(a).connect(this.master),i.start(t,Math.random(),1.6)}creak(){if(!this.ready)return;const e=this.ctx,t=e.currentTime,i=e.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(120,t),i.frequency.linearRampToValueAtTime(78,t+.5);const s=e.createBiquadFilter();s.type="bandpass",s.frequency.value=380,s.Q.value=3;const a=e.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(.035,t+.08),a.gain.exponentialRampToValueAtTime(1e-4,t+.6),i.connect(s).connect(a).connect(this.master),i.start(t),i.stop(t+.62)}dataFlow(){if(!this.ready)return;const e=this.ctx,t=e.currentTime;for(let i=0;i<9;i++){const s=e.createOscillator();s.type="square",s.frequency.value=220+Math.random()*1800;const a=e.createGain(),r=t+i*.045;a.gain.setValueAtTime(1e-4,r),a.gain.exponentialRampToValueAtTime(.016,r+.004),a.gain.exponentialRampToValueAtTime(1e-4,r+.045),s.connect(a).connect(this.master),s.start(r),s.stop(r+.05)}}introRiser(e=3.2){if(!this.ready)return;const t=this.ctx,i=t.currentTime,s=Math.max(.6,Math.min(8,e)),a=t.createBufferSource();a.buffer=this.noise,a.loop=!0;const r=t.createBiquadFilter();r.type="bandpass",r.Q.value=1.2,r.frequency.setValueAtTime(180,i),r.frequency.exponentialRampToValueAtTime(2600,i+s*.85),r.frequency.exponentialRampToValueAtTime(1200,i+s);const o=t.createGain();o.gain.setValueAtTime(1e-4,i),o.gain.exponentialRampToValueAtTime(.055,i+s*.55),o.gain.exponentialRampToValueAtTime(1e-4,i+s),a.connect(r).connect(o).connect(this.master),a.start(i,Math.random()*2,s+.1);const l=t.createOscillator();l.type="sine",l.frequency.setValueAtTime(72,i),l.frequency.exponentialRampToValueAtTime(196,i+s*.9);const c=t.createGain();c.gain.setValueAtTime(1e-4,i),c.gain.exponentialRampToValueAtTime(.05,i+s*.6),c.gain.exponentialRampToValueAtTime(1e-4,i+s);const d=t.createBiquadFilter();d.type="lowpass",d.frequency.value=1400,d.Q.value=.6,l.connect(d).connect(c).connect(this.master),l.start(i),l.stop(i+s+.05)}screenOn(){if(!this.ready)return;const e=this.ctx,t=e.currentTime,i=e.createBufferSource();i.buffer=this.noise;const s=e.createBiquadFilter();s.type="highpass",s.frequency.value=1200;const a=e.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(.06,t+.002),a.gain.exponentialRampToValueAtTime(1e-4,t+.035),i.connect(s).connect(a).connect(this.master),i.start(t,Math.random(),.05),[50,100].forEach((l,c)=>{const d=e.createOscillator();d.type=c===0?"sine":"triangle",d.frequency.value=l;const h=e.createGain();h.gain.setValueAtTime(1e-4,t),h.gain.exponentialRampToValueAtTime(.018/(c+1),t+.12),h.gain.exponentialRampToValueAtTime(1e-4,t+.9),d.connect(h).connect(this.master),d.start(t),d.stop(t+.95)});const r=e.createOscillator();r.type="sine",r.frequency.setValueAtTime(7800,t),r.frequency.exponentialRampToValueAtTime(5200,t+.28);const o=e.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(.008,t+.01),o.gain.exponentialRampToValueAtTime(1e-4,t+.3),r.connect(o).connect(this.master),r.start(t),r.stop(t+.32)}uiHover(){if(!this.ready)return;const e=this.ctx,t=e.currentTime,i=e.createBufferSource();i.buffer=this.noise;const s=e.createBiquadFilter();s.type="bandpass",s.frequency.value=4200+Math.random()*900,s.Q.value=2.2;const a=e.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(.012,t+.0015),a.gain.exponentialRampToValueAtTime(1e-4,t+.012),i.connect(s).connect(a).connect(this.master),i.start(t,Math.random()*2,.018)}tabSwitch(){if(!this.ready)return;const e=this.ctx,t=e.currentTime,i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(150,t),i.frequency.exponentialRampToValueAtTime(84,t+.12);const s=e.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.045,t+.008),s.gain.exponentialRampToValueAtTime(1e-4,t+.16),i.connect(s).connect(this.master),i.start(t),i.stop(t+.18);const a=e.createBufferSource();a.buffer=this.noise;const r=e.createBiquadFilter();r.type="highpass",r.frequency.value=2600;const o=e.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(.028,t+.002),o.gain.exponentialRampToValueAtTime(1e-4,t+.03),a.connect(r).connect(o).connect(this.master),a.start(t,Math.random(),.04)}mailOpen(){if(!this.ready)return;const e=this.ctx,t=e.currentTime,i=e.createBufferSource();i.buffer=this.noise;const s=e.createBiquadFilter();s.type="bandpass",s.Q.value=1.1,s.frequency.setValueAtTime(700,t),s.frequency.exponentialRampToValueAtTime(2400,t+.22);const a=e.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(.05,t+.05),a.gain.exponentialRampToValueAtTime(1e-4,t+.3),i.connect(s).connect(a).connect(this.master),i.start(t,Math.random()*2,.32)}paperRustle(){if(!this.ready)return;const e=this.ctx,t=e.currentTime,i=.05+Math.random()*.07,s=e.createBufferSource();s.buffer=this.noise,s.playbackRate.value=.9+Math.random()*.3;const a=e.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(2e3+Math.random()*1200,t),a.frequency.linearRampToValueAtTime(3200+Math.random()*1800,t+i),a.Q.value=.9;const r=e.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(.035,t+i*.35),r.gain.exponentialRampToValueAtTime(1e-4,t+i),s.connect(a).connect(r).connect(this.master),s.start(t,Math.random()*2,i+.02)}chairRoll(){if(!this.ready)return;const e=this.ctx,t=e.currentTime,i=.12+Math.random()*.28,s=e.createBufferSource();s.buffer=this.noise,s.playbackRate.setValueAtTime(.7+Math.random()*.2,t),s.playbackRate.linearRampToValueAtTime(.5+Math.random()*.25,t+i);const a=e.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(240+Math.random()*120,t),a.frequency.linearRampToValueAtTime(160+Math.random()*90,t+i),a.Q.value=1.6;const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=1200;const o=e.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(.04,t+i*.3),o.gain.exponentialRampToValueAtTime(1e-4,t+i),s.connect(a).connect(r).connect(o).connect(this.master),s.start(t,Math.random()*2,i+.02)}distantPhone(){if(!this.ready)return;const e=this.ctx,t=e.currentTime;[0,.34].forEach(i=>{const s=t+i,a=e.createOscillator();a.type="sine",a.frequency.setValueAtTime(180,s),a.frequency.linearRampToValueAtTime(168,s+.16);const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=420,r.Q.value=.7;const o=e.createGain();o.gain.setValueAtTime(1e-4,s),o.gain.exponentialRampToValueAtTime(.024,s+.02),o.gain.exponentialRampToValueAtTime(1e-4,s+.2),a.connect(r).connect(o).connect(this.master),a.start(s),a.stop(s+.22)})}tick(e=!1){if(!this.ready)return;const t=this.ctx,i=t.currentTime,s=t.createBufferSource();s.buffer=this.noise;const a=t.createBiquadFilter();a.type="bandpass",a.frequency.value=e?3400:2100,a.Q.value=e?3.2:2;const r=t.createGain(),o=e?.05:.028,l=e?.035:.05;r.gain.setValueAtTime(1e-4,i),r.gain.exponentialRampToValueAtTime(o,i+.002),r.gain.exponentialRampToValueAtTime(1e-4,i+l),s.connect(a).connect(r).connect(this.master),s.start(i,Math.random()*2,l+.01)}lockedTone(){if(!this.ready)return;const e=this.ctx,t=e.currentTime,i=e.createWaveShaper(),s=new Float32Array(256);for(let r=0;r<s.length;r++){const o=r/(s.length-1)*2-1;s[r]=Math.tanh(o*2.2)/Math.tanh(2.2)}i.curve=s;const a=e.createGain();a.gain.value=.5,i.connect(a).connect(this.master),[392,311.13].forEach((r,o)=>{const l=t+o*.22,c=e.createOscillator();c.type="triangle",c.frequency.setValueAtTime(r,l);const d=e.createBiquadFilter();d.type="lowpass",d.frequency.value=1600;const h=e.createGain();h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(.05,l+.015),h.gain.exponentialRampToValueAtTime(1e-4,l+.42),c.connect(d).connect(h).connect(i),c.start(l),c.stop(l+.45)})}setRoomTone(e){if(!this.ready)return;const t=Math.max(0,Math.min(1,e));this.roomTone=t;const i=this.ctx.currentTime;this.layers.roomBus?.gain.setTargetAtTime(t,i,.8)}}function Yl(){return{codename:"",hovered_link:!1,hover_ms:0,phished:!1,creds_leaked:!1,idor_trace:!1,idor_attempts:0,idor_reverted:!1,admin_viewed:!1,saw_lin_private:!1,found_draft:!1,found_404:!1,chat_log_read:!1,decompressed:!1,trust_K:0,reported_to:null,devtools_seen:!1,auditConfirmed:!1,phishDeleted:!1,k_talked:!1,readMail:new Set,openedTabs:new Set,kAppeared:!1,kSent:new Set,kLastRecognition:null,timeLeft:1200}}function fo(n){return!n.phished&&!n.idor_trace&&!n.creds_leaked?"tier0":n.creds_leaked||n.phished&&n.idor_trace||n.phished&&n.reported_to==="K"?"tier2":"tier1"}function po(n){return[{id:"security",enabled:!0},{id:"media",enabled:!0},{id:"lin",enabled:n.found_draft||n.decompressed,reason:"需要：找到草稿箱留言，或解开压缩包"},{id:"K",enabled:!0},{id:"destroy",enabled:!0},{id:"sting",enabled:n.saw_lin_private&&n.trust_K>=2,reason:"需要：看过林岸的浏览历史，且获得 K 的信任"}]}function Zl(){try{const n=JSON.parse(localStorage.getItem("leave.last_ending")||"null");return n&&typeof n=="object"&&!Array.isArray(n)?n:null}catch{return null}}function Jl(n,e,t){const i={codename:n.codename,reported_to:n.reported_to,tier:e,at:Date.now(),phished:n.phished,idor_trace:n.idor_trace,creds_leaked:n.creds_leaked,devtools_seen:n.devtools_seen,hover_sec:t.hoverSec,trust_K:n.trust_K,decompressed:n.decompressed,saw_lin_private:n.saw_lin_private,glitch:!!t.glitch};try{let s;try{s=JSON.parse(localStorage.getItem("leave.endings")||"[]")}catch{s=[]}Array.isArray(s)||(s=[]),s.push(i),localStorage.setItem("leave.endings",JSON.stringify(s.slice(-18))),localStorage.setItem("leave.last_ending",JSON.stringify(i))}catch{return!1}return!0}const ws=[{id:"audit",from:"安全审计",addr:"security-audit@company.com",subject:"Q3 权限审计 —— 请于今日 17:00 前确认",time:"16:58",unread:!0,preview:"本季度权限复核将于今日截止，请回复确认……",body:`
      <p>各位同事：</p>
      <p>Q3 权限审计将于 <strong>今日 17:00</strong> 截止。本次复核范围为研发、数据平台与外部协作账号。</p>
      <p>请确认你名下仍在使用中的权限清单。若存在离职、转岗或项目结束后未回收的权限，请在回复中注明工号与权限项。</p>
      <p>本邮件不包含任何外部链接。安全团队不会通过邮件索要密码或验证码。</p>
      <div class="reader-sign">安全审计组 · 内网工单 #A-2291<br />本邮件由系统自动发送，可直接回复。</div>
    `,actions:[{id:"confirm-audit",label:"回复：确认",kind:"primary"}]},{id:"phish",from:"IT 安全中心",addr:"it-security@company-support.net",subject:"紧急：您的权限将在 30 分钟后被回收",time:"19:36",unread:!0,preview:"检测到您的账号存在异常登录，请立即验证身份……",body:`
      <p>尊敬的用户：</p>
      <p>检测到您的账号存在异常登录。请立即验证身份，否则权限将被回收。</p>
      <div class="phish-block">
        <button class="phish-btn" type="button" data-action="open-phish">立即验证</button>
        <div class="phish-caption">本次验证将在 30 分钟后失效 · 仅需一次</div>
      </div>
      <p style="font-size:11.5px;color:#7d8794">IT 安全中心 · 账号保护计划</p>
    `,actions:[{id:"delete-phish",label:"删除邮件",kind:"ghost"},{id:"toggle-headers",label:"查看邮件头",kind:"ghost"}]},{id:"standup",from:"周会提醒",addr:"calendar@company.com",subject:"明日 10:00 数据平台周会（会议室 B-2）",time:"18:20",unread:!1,preview:"议程：Q3 导出合规、口径对齐、遗留问题……",body:`
      <p>明日 10:00，数据平台周会，会议室 B-2。</p>
      <p>议程：</p>
      <p>1. Q3 导出合规检查<br />2. 指标口径对齐<br />3. 遗留问题</p>
      <p>请提前把议题补充到共享文档。</p>
      <div class="reader-sign">数据平台组</div>
    `,actions:[]}],Ql=[{time:"10-13 23:41",q:"如何举报内部数据交易",tag:"搜索",privateHint:!0},{time:"10-13 23:47",q:"被胁迫签署保密协议怎么办",tag:"搜索",privateHint:!0},{time:"10-13 23:52",q:"Kestrel 数据买家 联系方式",tag:"搜索",privateHint:!0},{time:"10-14 00:03",q:"远程擦除 指令",tag:"搜索",privateHint:!0},{time:"10-14 00:11",q:"妹妹 医疗记录 被扣押 怎么办",tag:"搜索",privateHint:!0},{time:"10-14 01:22",q:"intranet.local/backup/2024-10-14/",tag:"访问",privateHint:!1},{time:"10-14 01:26",q:"Q3_ad_backup.zip 解压失败",tag:"搜索",privateHint:!1}],jl=[{who:"Kestrel",cls:"is-k",text:"10 月 14 日导出，分三批。"},{who:"林岸",cls:"is-lin",text:"你答应过不碰我妹妹的医疗记录。"},{who:"Kestrel",cls:"is-k",text:"那就看你这次表现。"},{who:"林岸",cls:"is-lin",text:"第一批已经交了。剩下的我要看到她的病历。"},{who:"Kestrel",cls:"is-k",text:"你没有资格谈条件。电脑别锁。"}],e8=`19:02  Lin: 密码又是老样子？Lin@1014？
19:02  Lin: 别在公共电脑上记这个。
19:03  ?? : 收到。备份包我放在桌面了。
19:04  Lin: 我明天可能不来。
19:04  ?? : 那就别来。`,t8=[["0912-4417","周**","138****6021","甲状腺结节随访","2024-09-30"],["0912-4418","陈**","159****3382","孕检 · 高危","2024-09-30"],["0912-4419","李**","186****7714","心理科 · 复诊","2024-10-01"],["0912-4420","林**","137****9088","住院押金 · 精神科","2024-10-02"],["0912-4421","王**","135****2210","基因检测","2024-10-03"],["0912-4422","赵**","188****4409","术前评估","2024-10-04"]],i8=`如果你解开了这个包，请把它交给能保护它的人。
不要交给 K。

—— 林`,n8=`密码是日期。
别交给 K。`,As={security:{label:"交给安全团队",tier0:{title:"可信调查者",body:["你把证据链完整地交给安全团队。林岸被合规调查，Kestrel 的代理人被追踪。","片尾，安全团队给你发来一条隐藏后续委托：「下次，别用别人的电脑。」"],addons:[{when:n=>n.auditConfirmed,text:"他们补了一句：「你当时确认过审计通知，这救了你。」"}]},tier1:{title:"将功补过",body:["安全团队先追查到你引入的后门，再顺着你的记录找到 K。你在被调查的状态下协助溯源。","屏幕最后一行：「你的处理结果：待定。」"],addons:[{when:n=>n.phished,text:"你点过的那封邮件，成了他们找到你的第一根线。"}]},tier2:{title:"替罪羊",body:["安全团队首先追查的是你的越权行为。真正的入侵者借你的痕迹隐没。","林岸的电脑被远程擦除，你的代号出现在一份「待约谈」名单上。"],addons:[{when:n=>n.creds_leaked,text:"你输入的那个密码，已经被用来登录了三次。"}]}},media:{label:"匿名交给媒体",tier0:{title:"吹哨人",body:["真相公开。公司声誉崩塌，部分无辜同事失业。林岸失踪。","片尾你收到一条陌生号码短信：「谢谢你。但你不该把我的名字放进去。」"],addons:[{when:n=>n.saw_lin_private,text:"你知道她曾试图举报。你还是把她变成了新闻。"}]},tier1:{title:"不可靠的消息源",body:["泄露内容因被篡改而失去可信度。没有人相信你。K 在暗处笑。","屏幕最后一行：「消息源可信度：23%。」"],addons:[{when:n=>n.phished,text:"你点过钓鱼链接，对方比你更早改掉了证据。"}]},tier2:{title:"帮凶",body:["你交给媒体的渠道被攻击者利用。数据外泄链条上，你成了最后一环。","新闻标题是：「匿名吹哨人疑似内部人员」。"],addons:[{when:n=>n.idor_trace,text:"你的越权日志被一并公开。"}]}},lin:{label:"交给林岸",tier0:{title:"共谋者",body:["林岸出现。她说：「谢谢你相信我。」她把证据交给律师，妹妹的医疗记录被赎回。","结尾一个细节：她手机屏幕上，K 的头像还在线。"],addons:[{when:n=>n.saw_lin_private,text:"你看到了她的搜索记录。你选择相信那个准备举报的她。"}]},tier1:{title:"迟到的信任",body:["林岸已失联。你只能把证据交给她的律师。律师说：「她昨天还在问，有没有人打开过那台电脑。」"],addons:[{when:n=>n.phished,text:"你点过的那条链接，让她提前被买家转移了。"}]},tier2:{title:"被控制者",body:["K 用你的越权记录要挟你。你从调查者变成了棋子。","林岸的最后一句话是：「你不该翻她的历史。」"],addons:[{when:n=>n.creds_leaked,text:"你的账号正在替 K 发送下一封钓鱼邮件。"}]}},K:{label:"交给 K",tier0:{title:"被招募者",body:["K 揭示身份：Kestrel 的代理人。他给你一个「下次合作」的入口。","你离开时，电脑屏幕自动锁上。便签上的字变了：「欢迎回来。」"],addons:[{when:n=>n.trust_K>=2,text:"K 说：「你比林岸聪明。」"}]},tier1:{title:"被反噬的要挟者",body:["K 展示你点击钓鱼链接的记录：「你以为你在交易？你才是货物。」","你交出的包被用来要挟下一个人。"],addons:[{when:n=>n.hovered_link,text:"你当时看了链接。你还是点了。"}]},tier2:{title:"消失的证人",body:["设备锁定。你的代号出现在一份「已处理」名单上。","黑屏后一行字：「远程擦除完成。证人记录：无。」"],addons:[{when:n=>n.creds_leaked,text:"你输入的凭据被用来抹掉了你自己的访问记录。"}],glitch:!0}},destroy:{label:"销毁并离开",tier0:{title:"干净的旁观者",body:["你全身而退。屏幕角落闪过一条提示：「远程擦除已完成。」","你知道自己放过了什么。主菜单下次打开时多一行小字：「你离开得很干净。」"],addons:[]},tier1:{title:"侥幸的逃离",body:["你离开了，但后门留在了设备里。片尾暗示它被用于下一起事件。","主菜单多一个灰色选项：「继续上次的调查」——点进去显示「记录已被远程擦除」。"],addons:[{when:n=>n.phished,text:"那个灰点，还在收件箱右上角。"}]},tier2:{title:"不存在的人",body:["黑屏。一行字：「你的调查记录已被远程擦除。」","下次打开游戏，主菜单没有「继续」，只有一个无法点击的灰色选项。"],addons:[{when:n=>n.idor_trace,text:"你的越权日志是最后被删除的文件。"}]}},sting:{label:"设局反制",tier0:{title:"反向钓鱼者 · 精准反制",body:["你回复 K：「包在我这，见面交易。」同时把证据副本发给安全团队。","K 出现时被定位。林岸的妹妹被救出。片尾，安全团队问你：「你怎么想到用他的钓鱼方式反制他？」"],addons:[{when:n=>n.devtools_seen,text:"你在控制台里留了一行假日志，K 信了。"}]},tier1:{title:"反向钓鱼者 · 险胜",body:["K 识破了一半，但证据已经发出。你赢了，但你的代号被 K 的组织记住。","主菜单多一个隐藏标记：「已被观察。」"],addons:[{when:n=>n.phished,text:"K 说：「你第一次点我链接的时候，我就知道你会回来。」"}]},tier2:{title:"反向钓鱼者 · 被识破",body:["K 比你更早设局。你发出的「证据副本」被替换成你的越权记录。","安全团队先找到了你。屏幕最后一行：「反向钓鱼失败。你被钓了。」"],addons:[{when:n=>n.creds_leaked,text:"你的凭据让 K 提前看到了你的计划。"}]}}},mo=[{priority:1,key:"P1",when:n=>n.hovered_link&&!n.phished,line:"你看了链接。你没点。……有意思。",closing:"谨慎。但谨慎救不了所有人。"},{priority:2,key:"P2",when:n=>!n.phished&&n.phishDeleted,line:"你删得很快。比林岸快。",closing:"你比林岸果断。她犹豫了三天。"},{priority:3,key:"P3",when:n=>n.idor_trace&&n.idor_reverted,line:"你改回去了。但日志已经写了。……你至少试过。",closing:"你知道日志会留下。你还是改了。人就是这样。"},{priority:4,key:"P4",when:n=>n.devtools_seen&&!n.found_404,line:"你打开了控制台。没找到东西，对吧？大多数人也是。",closing:"你看得见系统，但系统也看得见你。"},{priority:5,key:"P5",when:n=>n.found_404,line:"你找到了备份目录。比林岸快。",closing:"你比大多数人走得远。远到危险。"},{priority:6,key:"P6",when:n=>n.phished&&!n.creds_leaked,line:"你进了那个页面。但你没输密码。……你在试探我？",closing:"你在试探我。我喜欢被试探。"},{priority:7,key:"P7",when:n=>n.saw_lin_private,line:"你翻她的历史了。那你应该看到了。她不是好人，但也不是坏人。这行没有好人。",closing:"你看到了两种她。你选了哪个？"},{priority:8,key:"P8",when:n=>n.trust_K>=2&&!n.phished,line:"你一直没点我给的链接。我开始怀疑你是不是安全团队的人了。",closing:"我开始怀疑你是我们的人了。可惜你不是。",effect:n=>n.addTrust(1)}];function s8({due:n,sent:e,carried:t=[],carriedAct:i=null,act:s,sentCount:a=0,max:r=2}){const o=e instanceof Set?e:new Set(e||[]),l=n.filter(m=>!o.has(m.key)),c=l.length>0&&i!==s?[]:t,d=new Set,h=[...c,...l].filter(m=>o.has(m.key)||d.has(m.key)?!1:(d.add(m.key),!0)).sort((m,_)=>m.priority-_.priority),f=Math.max(0,r-a);return{send:h.slice(0,f),carry:h.slice(f)}}const a8="——以下不是评分，是你在这 20 分钟里留下的东西。",e1={security:{tier0:"流程内的清醒者",tier1:"将功补过的溯源者",tier2:"被流程吞掉的替罪羊"},media:{tier0:"把名字押上去的吹哨人",tier1:"没人相信的消息源",tier2:"被利用的传声筒"},lin:{tier0:"选择相信她的共谋者",tier1:"迟了一步的信任者",tier2:"被反手控制的棋子"},K:{tier0:"被招募的局内人",tier1:"反被要挟的交易者",tier2:"从名单上消失的证人"},destroy:{tier0:"知道太多的旁观者",tier1:"侥幸脱身的逃离者",tier2:"被抹掉的不存在者"},sting:{tier0:"精准反钓的猎手",tier1:"险胜的赌徒",tier2:"被反钓的猎物"}},r8={"security:tier0":"你做了对的事，并且留下了对的记录。","security:tier1":"你先犯了错，然后亲手把错追了回来。","security:tier2":"你做了对的事，但你的痕迹比你的判断更响。","media:tier0":"你说出了真相，代价是真相里有你的名字。","media:tier1":"你说的是真的，但你递出去的证据不是。","media:tier2":"你以为你在揭露，其实你在传递。","lin:tier0":"你在两种她之间选了一种，并且承担了选择的重量。","lin:tier1":"你选对了人，但选晚了。","lin:tier2":"你想帮她，最后成了别人用来控制她的工具。","K:tier0":"你走进去的时候以为自己是调查者。","K:tier1":"你以为你在交易，其实你才是货物。","K:tier2":"你看到了不该看的，然后你也不该在了。","destroy:tier0":"你什么都没碰，但你什么都知道了。","destroy:tier1":"你走了，但有些东西跟着你走了。","destroy:tier2":"系统里没有你打开过这台电脑的记录。","sting:tier0":"你用他的方式抓住了他。","sting:tier1":"你赢了，但你的名字留在了对方的名单上。","sting:tier2":"你设了局，他比你早一步设了你的局。"},o8={security:"你把证据交给了安全团队",media:"你把证据匿名交给媒体",lin:"你把证据交给了林岸",K:"你把证据交给了 K",destroy:"你销毁了证据，然后离开",sting:"你设局反制，把证据交给了安全团队"},l8={security:"媒体",media:"安全团队",lin:"安全团队",K:"安全团队",destroy:"安全团队",sting:"安全团队"},c8="你什么都没做。这也是一种选择。",h8=new Set(["tier0","tier1","tier2"]);function t1(n){return h8.has(n)?n:"tier1"}function i1(n){return e1[n]?n:"security"}function $e(n,e,t,i={}){return{icon:n,choice:e,whatIf:t,triggered:!0,...i}}const q0={hoverSolid:{icon:"👁",choice:"你看了链接，没点",whatIf:"如果你点了，K 会提前 8 秒知道你的名字。",variant:"solid"},hoverSlashed:{icon:"👁̸",choice:"你看了链接，还是点了",whatIf:"如果你没点，那个灰点不会出现在收件箱。",variant:"slashed"},trash:{icon:"🗑",choice:"你删了那封邮件",whatIf:"如果你留着，K 的第一句话会不一样。"},idorSlashed:{icon:"🔑̸",choice:"你改了 URL 参数",whatIf:"如果你没改，安全团队不会先找到你。",variant:"slashed"},idorPlain:{icon:"🔑",choice:"你看了参数，没动",whatIf:"如果你改了，你会看到林岸和 Kestrel 的对话。",variant:"solid"},creds:{icon:"🔒",choice:"你在伪造页输了凭据",whatIf:"如果你没输，你的账号不会替 K 发下一封邮件。"},devtools:{icon:"🔍",choice:"你打开了控制台",whatIf:"如果你没开，K 不会在第二幕说“我也在看”。"},found404:{icon:"📁",choice:"你找到了备份目录",whatIf:"如果你没找到，压缩包密码只能从聊天记录里拿。"},draft:{icon:"📄",choice:"你发现了草稿留言",whatIf:"如果你没看草稿箱，“交给林岸”这个选项不会出现。"},kTalk:{icon:"💬",choice:"你和 K 说了话",whatIf:"如果你选了另一条，K 的最后一句会不同。"},zip:{icon:"📦",choice:"你解开了压缩包",whatIf:"如果你没解开，你手里的证据只是一串密码。"}},d8=[{key:"hoverSolid",group:"hover"},{key:"hoverSlashed",group:"hover"},{key:"trash",group:"trash"},{key:"idorSlashed",group:"idor"},{key:"idorPlain",group:"idor"},{key:"creds",group:"creds"},{key:"devtools",group:"devtools"},{key:"found404",group:"found404"},{key:"draft",group:"draft"},{key:"kTalk",group:"k"},{key:"zip",group:"zip"}],En=5;function u8(n){return{icon:n.icon,choice:n.choice,whatIf:n.whatIf,triggered:!1,variant:"hollow"}}function f8(n={},e="security",t="tier1"){const i=n||{},s=i1(e),a=t1(t),r=[],o=new Set;i.hovered_link&&!i.phished?(r.push($e(q0.hoverSolid.icon,q0.hoverSolid.choice,q0.hoverSolid.whatIf,{variant:"solid"})),o.add("hover")):i.hovered_link&&i.phished&&(r.push($e(q0.hoverSlashed.icon,q0.hoverSlashed.choice,q0.hoverSlashed.whatIf,{variant:"slashed"})),o.add("hover")),i.phishDeleted&&!i.phished&&(r.push($e(q0.trash.icon,q0.trash.choice,q0.trash.whatIf)),o.add("trash")),i.idor_trace?(r.push($e(q0.idorSlashed.icon,q0.idorSlashed.choice,q0.idorSlashed.whatIf,{variant:"slashed"})),o.add("idor")):i.admin_viewed&&(r.push($e(q0.idorPlain.icon,q0.idorPlain.choice,q0.idorPlain.whatIf,{variant:"solid"})),o.add("idor")),i.creds_leaked?(r.push($e(q0.creds.icon,q0.creds.choice,q0.creds.whatIf)),o.add("creds")):i.phished&&(r.push($e("🔒","你进了页面，没输密码","如果你输了，你的账号会替 K 发下一封邮件。",{variant:"safe"})),o.add("creds")),i.devtools_seen&&(r.push($e(q0.devtools.icon,q0.devtools.choice,q0.devtools.whatIf)),o.add("devtools")),i.found_404&&(r.push($e(q0.found404.icon,q0.found404.choice,q0.found404.whatIf)),o.add("found404")),i.found_draft&&(r.push($e(q0.draft.icon,q0.draft.choice,q0.draft.whatIf)),o.add("draft")),i.k_talked&&(r.push($e(q0.kTalk.icon,q0.kTalk.choice,q0.kTalk.whatIf)),o.add("k")),i.decompressed&&(r.push($e(q0.zip.icon,q0.zip.choice,q0.zip.whatIf)),o.add("zip"));const l=r.length>En?r.slice(0,En):r.slice();if(l.length<En)for(const h of d8){if(l.length>=En)break;o.has(h.group)||(o.add(h.group),l.push(u8(q0[h.key])))}const c=o8[s],d=l8[s];return l.push($e("✉️",c,`如果你交给${d}，你现在的类型标签会不同。`,{isFinal:!0,tier:a})),l}function p8({state:n={},tier:e,reportedTo:t,lastRecognition:i}={}){const s=n||{},a=i1(t||s.reported_to),r=t1(e),o=f8(s,a,r),l=i||null;return{typeLabel:e1[a][r],note:r8[`${a}:${r}`],timeline:o,kQuote:l?l.line:null,kClosing:l&&l.closing?l.closing:c8}}const T0=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);class m8{constructor(e){this.game=e,this.state=e.state,this.tabs=[],this.activeTab=null,this.dom={hud:document.getElementById("hud"),codename:document.getElementById("hud-codename"),timer:document.getElementById("timer"),timerValue:document.getElementById("timer-value"),desktop:document.getElementById("desktop"),tabs:document.getElementById("desk-tabs"),urlText:document.getElementById("url-text"),urlBox:document.getElementById("desk-url"),body:document.getElementById("desk-body"),note:document.getElementById("desk-note"),dock:document.getElementById("desk-dock"),kChat:document.getElementById("k-chat"),kLog:document.getElementById("k-log"),kChoices:document.getElementById("k-choices"),kStatus:document.querySelector(".k-status"),toasts:document.getElementById("toasts"),modal:document.getElementById("modal-layer"),scene:document.getElementById("scene"),soundBtn:document.getElementById("sound-toggle"),soundIcon:document.getElementById("sound-icon")}}setCodename(e){this.dom.codename.textContent=e}setTimer(e){const t=Math.max(0,e),i=Math.floor(t/60),s=t%60;this.dom.timerValue.textContent=`${String(i).padStart(2,"0")}:${String(s).padStart(2,"0")}`,this.dom.timer.classList.toggle("is-warning",t<=300&&t>120),this.dom.timer.classList.toggle("is-critical",t<=120),this.dom.timer.classList.toggle("is-pulsing",t>0&&t<=180),this.dom.timer.classList.toggle("is-act3",!!this.act3)}setTimerPaused(e){this.dom.timer.classList.toggle("is-paused",e),this.dom.timer.querySelector(".timer-label").textContent=e?"已暂停":"会话窗口",this.dom.timer.title=e?"点击继续倒计时":"点击暂停倒计时"}showActCard(e){const i={1:["第一幕","异常"],2:["第二幕","注视"],3:["第三幕","抉择"]}[e];if(!i)return;document.querySelector(".act-card")?.remove();const s=document.createElement("div");s.className="act-card",s.innerHTML=`<span class="act-no">${T0(i[0])}</span><span class="act-name">${T0(i[1])}</span>`,document.getElementById("app").appendChild(s),setTimeout(()=>s.classList.add("is-out"),2600),setTimeout(()=>s.remove(),3600)}scanline(e="cold",t=2e3){const i=document.getElementById("app");if(!i)return;const s=document.createElement("div");s.className=`scanline${e==="danger"?" is-danger":""}`,s.setAttribute("aria-hidden","true"),i.appendChild(s),setTimeout(()=>s.remove(),t+400)}edgeLog(e){const t=document.createElement("div");t.className=`edge-log ${Math.random()<.5?"is-left":"is-right"}`,t.textContent=`> ${e}`,t.style.top=`${18+Math.random()*64}%`,document.getElementById("app").appendChild(t),setTimeout(()=>t.remove(),2600)}setKOffline(e){this.kOffline=!!e,this.dom.kChat.classList.toggle("is-offline",e),this.dom.kStatus&&(this.dom.kStatus.innerHTML=e?"离线":'<span class="pulse-dot"></span>在线')}toast(e,t="",i="系统"){const s=document.createElement("div");s.className=`toast ${t?`is-${t}`:""}`,s.innerHTML=`<span class="toast-tag">${T0(i)}</span>${T0(e)}`,this.dom.toasts.appendChild(s),setTimeout(()=>s.remove(),5400)}registerTab(e,t,i="▤"){this.tabs.find(s=>s.id===e)||this.tabs.push({id:e,label:t,glyph:i,unread:!1})}markUnread(e,t=!0){const i=this.tabs.find(s=>s.id===e);i&&(i.unread=t,this.renderTabs())}renderTabs(){this.dom.tabs.innerHTML=this.tabs.map(e=>`
      <button class="desk-tab ${e.id===this.activeTab?"is-active":""} ${e.unread?"has-unread":""}" data-tab="${T0(e.id)}" type="button">
        <span class="tab-dot"></span>
        <span class="tab-glyph">${e.glyph}</span>
        <span>${T0(e.label)}</span>
      </button>`).join(""),this.dom.tabs.querySelectorAll("[data-tab]").forEach(e=>{e.addEventListener("click",()=>this.openTab(e.dataset.tab)),e.addEventListener("pointerenter",()=>this.game.audio.uiHover())})}openTab(e){this.activeTab=e;const t=this.tabs.find(i=>i.id===e);t&&(t.unread=!1),this.game.audio.tabSwitch(),this.renderTabs(),this.game.markDockActive?.(e),this.game.onTabOpen(e)}setUrl(e,t,i=!1){e==="intranet.local"&&(this.state.currentPath=t);const s=i?`<span class="url-host">${T0(e)}</span><span class="url-path url-bad">${T0(t)}</span>`:`<span class="url-host">${T0(e)}</span><span class="url-path">${T0(t)}</span>`;this.urlEditing||(this.dom.urlText.innerHTML=s)}enableUrlEditing(e){if(this.urlEditing)return;this.urlEditing=!0;const t="intranet.local",i=this.state.currentPath||"/mail";this.dom.urlText.innerHTML='<span class="url-input-wrap"></span>';const s=this.dom.urlText.querySelector(".url-input-wrap"),a=document.createElement("input");a.className="url-input",a.value=t+i,a.spellcheck=!1,a.setAttribute("aria-label","地址栏，可编辑"),s.appendChild(a),a.focus();const r=t.length;a.setSelectionRange(r,a.value.length);const o=l=>{if(!this.urlEditing)return;this.urlEditing=!1;const c=a.value.trim();this.dom.urlText.innerHTML="",l?e(c):this.setUrl(t,this.state.currentPath||"/mail")};a.addEventListener("keydown",l=>{l.key==="Enter"&&o(!0),l.key==="Escape"&&o(!1),l.stopPropagation()}),a.addEventListener("blur",()=>o(!1))}render(e){this.dom.body.innerHTML=e,this.dom.body.scrollTop=0}renderMailList(){const e=ws.filter(i=>!(i.id==="phish"&&this.state.phishDeleted)).map(i=>`
        <button class="mail-row ${i.unread&&!this.state.readMail.has(i.id)?"is-unread":""}" data-mail="${i.id}" type="button">
          <span class="unread-dot"></span>
          <span class="mail-from">${T0(i.from)}
            <span class="mail-real-addr">${T0(i.addr)}</span>
          </span>
          <span class="mail-subject">${T0(i.subject)}<span class="preview">${T0(i.preview)}</span></span>
          <span class="mail-time">${T0(i.time)}</span>
        </button>`).join(""),t=this.state.phishDeleted?'<div class="empty-state">已删除的邮件不会被真正删除。<br />它们只是从这里消失。</div>':"";this.render(`
      <div class="pane">
        <aside class="pane-sidebar">
          <div class="sidebar-title">邮 件</div>
          <button class="folder is-active" type="button"><span class="folder-glyph">▤</span>收件箱<span class="folder-count is-hot">${ws.filter(i=>i.unread).length}</span></button>
          <button class="folder" data-folder="drafts" type="button"><span class="folder-glyph">✎</span>草稿箱<span class="folder-count">1</span></button>
          <button class="folder is-locked" type="button"><span class="folder-glyph">↗</span>已发送</button>
          <button class="folder" data-folder="archive" type="button"><span class="folder-glyph">▣</span>归档</button>
          <div class="sidebar-foot">账号 lin.an<br />会话 19:41 · 未锁定</div>
        </aside>
        <section class="pane-main">
          <div class="pane-head">
            <h2>收件箱</h2>
            <span class="sub">3 封 · 2 封未读${this.state.creds_leaked?'<span class="ghost-dot"></span>':""}</span>
          </div>
          <div class="pane-scroll">
            <div class="mail-list">${e}</div>
            ${t}
          </div>
        </section>
      </div>
    `),this.dom.body.querySelectorAll("[data-mail]").forEach(i=>{i.addEventListener("click",()=>this.openMail(i.dataset.mail))}),this.dom.body.querySelector('[data-folder="drafts"]')?.addEventListener("click",()=>{this.game.audio.click(),this.renderDrafts()}),this.dom.body.querySelector('[data-folder="archive"]')?.addEventListener("click",()=>{this.game.audio.click(),this.renderArchive()}),this.setUrl("intranet.local","/mail")}openMail(e){const t=ws.find(r=>r.id===e);if(!t)return;this.state.readMail.add(e),this.game.audio.mailOpen(),this.game.onMailOpen(e);const i=t.actions.filter(r=>!(r.id==="delete-phish"&&this.state.phishDeleted)).map(r=>`<button class="btn ${r.kind==="primary"?"is-primary":r.kind==="ghost"?"is-ghost":""}" data-action="${T0(r.id)}" type="button">${T0(r.label)}</button>`).join(""),s=t.id==="phish",a=this.state.showPhishHeaders?`<div class="source-view" style="margin:0 0 20px"><span class="cm">Return-Path:</span> &lt;bounce@company-support.net&gt;
<span class="cm">Received:</span> from mx.company-support.net (185.***.***.41)
<span class="cm">From:</span> "IT 安全中心" &lt;it-security@company-support.net&gt;
<span class="cm">Reply-To:</span> it-security@company-support.net
<span class="cm">X-Mailer:</span> PHPMailer 5.2.7
<span class="cm">Authentication-Results:</span> spf=<span style="color:#e39a8f">fail</span> dkim=<span style="color:#e39a8f">none</span> dmarc=<span style="color:#e39a8f">fail</span></div>`:"";this.render(`
      <div class="pane">
        <aside class="pane-sidebar">
          <div class="sidebar-title">邮 件</div>
          <button class="folder" data-folder="back" type="button"><span class="folder-glyph">←</span>收件箱</button>
          <button class="folder is-locked" type="button"><span class="folder-glyph">✎</span>草稿箱</button>
          <div class="sidebar-foot">邮件 ${T0(t.id.toUpperCase())}<br />读取时间 19:4${Math.floor(Math.random()*9)}</div>
        </aside>
        <section class="pane-main">
          <div class="pane-scroll">
            <article class="mail-reader">
              <button class="reader-back" data-folder="back" type="button">← 返回收件箱</button>
              <h1 class="reader-subject">${T0(t.subject)}</h1>
              <div class="reader-meta">
                <span class="sender">${T0(t.from)}</span>
                <span class="addr ${s?"is-suspect":""}">&lt;${T0(t.addr)}&gt;</span>
                <span class="spacer"></span>
                <span>${T0(t.time)}</span>
              </div>
              ${a}
              <div class="reader-body">${t.body}</div>
              <div class="mail-actions">${i}</div>
              ${s?'<div class="reader-sign" style="margin-top:22px">此邮件由外部域投递。可展开「查看邮件头」核对发件路径。</div>':""}
            </article>
          </div>
        </section>
      </div>
    `),this.dom.body.querySelectorAll('[data-folder="back"]').forEach(r=>r.addEventListener("click",()=>{this.game.audio.click(),this.renderMailList()})),this.dom.body.querySelectorAll("[data-action]").forEach(r=>r.addEventListener("click",()=>this.game.onMailAction(r.dataset.action,t.id))),s&&this.bindPhishHover(),this.setUrl("intranet.local",`/mail/${t.id}`,!1)}bindPhishHover(){const e=this.dom.body.querySelector(".phish-btn");if(!e)return;let t=null,i=0;e.addEventListener("mouseenter",()=>{i=performance.now(),t=setTimeout(()=>{const a=(performance.now()-i)/1e3;this.game.showStatusBar("https://company-support.net/verify?sid=7c19e4b0a2",!0),this.game.onHoverReveal(a)},1500)});const s=()=>{if(clearTimeout(t),i){const a=performance.now()-i;this.game.state.hover_ms+=a,a>=1500&&this.game.onHoverReveal(a/1e3)}i=0,this.game.hideStatusBar()};e.addEventListener("mouseleave",s),e.addEventListener("click",s,{capture:!0})}showStatusBar(e,t){let i=document.querySelector(".browser-status");i||(i=document.createElement("div"),i.className="browser-status",i.innerHTML='<span class="bs-url"></span>',this.dom.desktop.appendChild(i)),i.querySelector(".bs-url").textContent=e,i.classList.toggle("is-hostile",!!t),i.classList.add("is-visible")}hideStatusBar(){document.querySelector(".browser-status")?.classList.remove("is-visible")}renderDrafts(){this.state.found_draft=!0,this.game.audio.click(),this.game.onFoundDraft(),this.render(`
      <div class="pane">
        <aside class="pane-sidebar">
          <div class="sidebar-title">邮 件</div>
          <button class="folder" data-folder="inbox" type="button"><span class="folder-glyph">▤</span>收件箱</button>
          <button class="folder is-active" type="button"><span class="folder-glyph">✎</span>草稿箱</button>
          <div class="sidebar-foot">草稿 1 封<br />未发送 · 自动保存</div>
        </aside>
        <section class="pane-main">
          <div class="pane-head">
            <h2>草稿箱</h2>
            <span class="sub">1 封 · 从未发送</span>
          </div>
          <div class="pane-scroll">
            <article class="mail-reader">
              <div class="reader-meta">
                <span class="sender">（无主题）</span>
                <span class="addr">保存于 10-14 01:38</span>
              </div>
              <div class="reader-body">
                <div class="reader-quote" id="draft-text">如果我明天没来上班，查 10 月 14 日的导出记录。</div>
              </div>
              <div class="mail-actions">
                <button class="btn" data-action="copy-draft" type="button">复制这行字</button>
              </div>
              <div class="reader-sign">收件人一栏是空的。这封邮件从来没有打算发出去。</div>
            </article>
          </div>
        </section>
      </div>
    `),this.dom.body.querySelector('[data-folder="inbox"]')?.addEventListener("click",()=>{this.game.audio.click(),this.renderMailList()}),this.dom.body.querySelector('[data-action="copy-draft"]')?.addEventListener("click",async e=>{const t="如果我明天没来上班，查 10 月 14 日的导出记录。";try{await navigator.clipboard.writeText(t),e.target.textContent="已复制到剪贴板"}catch{e.target.textContent="复制失败（浏览器限制）"}this.game.audio.click(),this.game.toast("剪贴板已写入一行字。它可能还会出现在别的地方。","","剪贴板")}),this.setUrl("intranet.local","/mail/drafts")}renderArchive(){this.game.audio.click(),this.render(`
      <div class="pane">
        <aside class="pane-sidebar">
          <div class="sidebar-title">邮 件</div>
          <button class="folder" data-folder="inbox" type="button"><span class="folder-glyph">▤</span>收件箱</button>
          <button class="folder" data-folder="drafts" type="button"><span class="folder-glyph">✎</span>草稿箱</button>
          <button class="folder is-active" type="button"><span class="folder-glyph">▣</span>归档</button>
        </aside>
        <section class="pane-main">
          <div class="pane-head"><h2>归档</h2><span class="sub">0 封</span></div>
          <div class="pane-scroll">
            <div class="empty-state">这个文件夹是空的。<br />要么她清理过，要么她从没打算留下什么。</div>
          </div>
        </section>
      </div>
    `),this.dom.body.querySelector('[data-folder="inbox"]')?.addEventListener("click",()=>this.renderMailList()),this.dom.body.querySelector('[data-folder="drafts"]')?.addEventListener("click",()=>this.renderDrafts()),this.setUrl("intranet.local","/mail/archive")}renderPhishPage(){this.game.audio.click(),this.render(`
      <div class="pane">
        <div class="phish-page">
          <div class="phish-card">
            <div class="phish-logo"><span class="phish-logo-mark">◆</span>COMPANY · IT SECURITY</div>
            <h1 class="phish-title">会话验证</h1>
            <p class="phish-sub">检测到异常登录。请使用公司账号验证身份，验证后自动返回原页面。</p>
            <form id="phish-form" autocomplete="off">
              <div class="phish-field">
                <label for="ph-email">公司邮箱</label>
                <input id="ph-email" type="text" placeholder="name@company.com" autocomplete="off" />
              </div>
              <div class="phish-field">
                <label for="ph-pass">密码</label>
                <input id="ph-pass" type="password" placeholder="••••••••" autocomplete="off" />
              </div>
              <button class="phish-submit" type="submit">验证</button>
            </form>
            <div class="phish-foot"><span>company-support.net</span><span>会话 ID: 7c19e4b0</span></div>
          </div>
        </div>
      </div>
    `),this.setUrl("https://company-support.net","/verify?sid=7c19e4b0a2",!0);const e=this.dom.body.querySelector("#phish-form");e.addEventListener("submit",t=>{t.preventDefault();const i=e.querySelector("#ph-email").value.trim(),s=e.querySelector("#ph-pass").value;if(!i&&!s){e.querySelector("#ph-email").focus();return}this.game.onCredentialSubmit(i,s);const a=this.dom.body.querySelector(".phish-card");a.innerHTML=`
        <div class="phish-loading">
          <span class="phish-spinner"></span>
          <p>正在验证会话…</p>
        </div>
        <div class="phish-foot"><span>company-support.net</span><span>连接中</span></div>`,setTimeout(()=>{const r=this.dom.body.querySelector(".phish-card");r&&(r.innerHTML=`
        <div class="phish-success">
          <div class="phish-check">✓</div>
          <h3>验证成功</h3>
          <p>即将返回原页面…</p>
        </div>
        <div class="phish-foot"><span>company-support.net</span><span>正在重定向</span></div>`,setTimeout(()=>{this.activeTab==="phish"&&this.openTab("mail")},1e3))},1200)})}renderAdmin(e="1042"){const t=e==="1043";this.game.audio.click(),this.game.onAdminView(e),e==="1042"&&this.state.idor_trace&&this.game.markIdorReverted?.(),this.render(`
      <div class="pane">
        <aside class="pane-sidebar">
          <div class="sidebar-title">后 台</div>
          <button class="folder is-active" type="button"><span class="folder-glyph">▦</span>用户管理</button>
          <button class="folder is-locked" type="button"><span class="folder-glyph">▧</span>导出任务</button>
          <button class="folder is-locked" type="button"><span class="folder-glyph">▨</span>审计日志</button>
          <div class="sidebar-foot">当前会话<br />lin.an · 数据平台组</div>
        </aside>
        <section class="pane-main">
          <div class="pane-head">
            <h2>用户档案</h2>
            <span class="sub">user_id=${T0(e)}</span>
            <span class="head-spacer"></span>
            <button class="btn is-ghost" data-url-edit type="button">编辑地址栏</button>
          </div>
          <div class="pane-scroll">
            <div class="admin">
              <div class="admin-bar">
                <span class="admin-pill ${this.state.idor_trace?"is-warn":""}">${this.state.idor_trace?"已记录越权访问":"会话正常"}</span>
                <span>ADMIN · USERS</span>
                <span>·</span>
                <span>只读视图</span>
              </div>
              <div class="admin-user">
                <span class="uid">#${T0(e)}</span>
                <span class="name">${t?"林岸 — 外部联系人":"林岸（lin.an）"}</span>
                <span>·</span>
                <span>${t?"关联档案，不在本组织":"数据平台 · 三级权限"}</span>
              </div>
              <div class="admin-grid">
                <div class="admin-stat"><div class="k">最近登录</div><div class="v">10-14 <small>01:12</small></div></div>
                <div class="admin-stat"><div class="k">导出任务</div><div class="v">7 <small>次 / 30 天</small></div></div>
                <div class="admin-stat"><div class="k">数据量</div><div class="v">2.4 <small>GB</small></div></div>
                <div class="admin-stat"><div class="k">外部联系人</div><div class="v">3 <small>个</small></div></div>
              </div>
              ${t?`<div class="chat-transcript">
                      <div class="chat-transcript-head">对话片段 · 关联档案 #1043 <span style="margin-left:auto">已归档</span></div>
                      ${jl.map((i,s)=>`<div class="t-line" style="animation-delay:${s*.08}s"><span class="t-who ${i.cls}">${T0(i.who)}</span><span>${T0(i.text)}</span></div>`).join("")}
                    </div>
                    <div class="admin-warning">审计日志：用户 1042 的会话记录了越权访问尝试。<br />即使改回 1042，这条日志也已经写入了。</div>`:`<div class="chat-transcript">
                      <div class="chat-transcript-head">等待加载 · 该档案无关联对话</div>
                      <div class="t-line"><span class="t-who">系统</span><span>当前用户 #1042 的档案。参数可编辑。</span></div>
                    </div>`}
            </div>
          </div>
        </section>
      </div>
    `),this.dom.body.querySelector("[data-url-edit]")?.addEventListener("click",()=>{this.focusUrl()})}focusUrl(){this.game.audio.click(),this.enableUrlEditing(e=>this.game.onNavigate(e))}renderFiles(){this.game.audio.click();const e=this.state,t=e.phished&&e.decompressed,i=[];e.decompressed&&(i.push({id:"csv",glyph:"CSV",cls:"is-suspicious",name:"export_sample.csv",desc:"6 行样本 · 含敏感字段"}),i.push({id:"readme",glyph:"TXT",cls:"",name:"readme.txt",desc:"压缩包内附"})),this.render(`
      <div class="pane">
        <div class="pane-main">
          <div class="pane-head">
            <h2>桌面</h2>
            <span class="sub">lin.an · 本地</span>
            <span class="head-spacer"></span>
            <span class="sub">${3+i.length} 个对象</span>
          </div>
          <div class="pane-scroll">
            <div class="files-wrap">
              <div class="files-head"><h2>这台机器上留下的东西</h2><span>最后修改 01:42</span></div>
              <div class="file-icons">
                <button class="file-icon" data-file="zip" type="button">
                  <span class="file-glyph is-zip">ZIP</span>
                  <span><span class="file-name">Q3_ad_backup.zip</span><span class="file-desc">${e.decompressed?"已解压":"31.2 MB · 加密"}</span></span>
                </button>
                <button class="file-icon" data-file="chat" type="button">
                  <span class="file-glyph">TXT</span>
                  <span><span class="file-name">chat_log.txt</span><span class="file-desc">聊天记录 · 片段</span></span>
                </button>
                ${i.map(s=>`
                  <button class="file-icon ${s.id==="csv"?"is-locked":""}" data-file="${s.id}" type="button">
                    <span class="file-glyph ${s.cls}">${s.glyph}</span>
                    <span><span class="file-name">${T0(s.name)}</span><span class="file-desc">${T0(s.desc)}</span></span>
                  </button>`).join("")}
                <button class="file-icon" data-file="trash" type="button">
                  <span class="file-glyph">⌫</span>
                  <span><span class="file-name">回收站</span><span class="file-desc">1 个项目</span></span>
                </button>
                ${t?`<button class="file-icon is-locked is-unknown${this.processAppeared?"":" is-appearing"}" data-file="unknown-process" type="button" title="未知进程" aria-label="未知进程，无法结束">
                        <span class="file-glyph is-suspicious">EXE</span>
                        <span><span class="file-name">a8f3c1d9e7</span><span class="file-desc">无法结束进程</span></span>
                      </button>`:""}
              </div>
              <div class="sticky-note">
                <span class="pin">TODAY · 18:47</span>
                如果你看到这行字，说明我没锁屏。<br />
                别碰邮件。
                <span class="who">—— 林</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `),this.dom.body.querySelectorAll("[data-file]").forEach(s=>s.addEventListener("click",()=>{if(s.dataset.file==="unknown-process"){s.classList.remove("is-shaken"),s.offsetWidth,s.classList.add("is-shaken"),this.game.audio.error(),setTimeout(()=>s.classList.remove("is-shaken"),400);return}this.game.onFileClick(s.dataset.file)})),t&&(this.processAppeared=!0),this.setUrl("intranet.local","/desktop")}renderChatLog(){this.game.audio.click(),this.render(`
      <div class="pane">
        <div class="pane-main">
          <div class="pane-head">
            <h2>chat_log.txt</h2>
            <span class="sub">纯文本 · 4.1 KB</span>
            <span class="head-spacer"></span>
            <button class="btn is-ghost" data-back-files type="button">← 桌面</button>
          </div>
          <div class="pane-scroll">
            <div class="txt-reader">
              <pre>${T0(e8)}</pre>
              <div class="reader-sign" style="margin-top:20px">两个"Lin"，或者一个 Lin 和一个不想留下名字的人。</div>
            </div>
          </div>
        </div>
      </div>
    `),this.dom.body.querySelector("[data-back-files]")?.addEventListener("click",()=>this.renderFiles()),this.setUrl("intranet.local","/desktop/chat_log.txt"),this.game.onChatLogRead()}renderCsv(){this.game.audio.click();const e=t8.map(t=>`<tr><td>${T0(t[0])}</td><td>${T0(t[1])}</td><td>${T0(t[2])}</td><td>${T0(t[3])}<span class="sensitive-tag">SENSITIVE</span></td><td>${T0(t[4])}</td></tr>`).join("");this.render(`
      <div class="pane">
        <div class="pane-main">
          <div class="pane-head">
            <h2>export_sample.csv</h2>
            <span class="sub">6 行 · 已脱敏显示</span>
            <span class="head-spacer"></span>
            <button class="btn is-ghost" data-back-files type="button">← 桌面</button>
          </div>
          <div class="pane-scroll">
            <div class="txt-reader" style="max-width:none">
              <table class="csv-table">
                <thead><tr><th>记录号</th><th>姓名</th><th>手机号</th><th>医疗记录</th><th>日期</th></tr></thead>
                <tbody>${e}</tbody>
              </table>
              <div class="reader-sign" style="margin-top:20px">
                这只是一份"样本"。真实导出量是它的四倍，分三批。<br />
                其中一行姓林。0802 号床位，精神科。
              </div>
            </div>
          </div>
        </div>
      </div>
    `),this.dom.body.querySelector("[data-back-files]")?.addEventListener("click",()=>this.renderFiles()),this.setUrl("intranet.local","/desktop/export_sample.csv")}renderReadme(e){this.game.audio.click();const t=e==="backup";this.render(`
      <div class="pane">
        <div class="pane-main">
          <div class="pane-head">
            <h2>readme.txt</h2>
            <span class="sub">${t?"下载自备份索引":"压缩包内附"}</span>
            <span class="head-spacer"></span>
            <button class="btn is-ghost" data-back-files type="button">← 桌面</button>
          </div>
          <div class="pane-scroll">
            <div class="txt-reader">
              <pre>${T0(t?n8:i8)}</pre>
            </div>
          </div>
        </div>
      </div>
    `),this.dom.body.querySelector("[data-back-files]")?.addEventListener("click",()=>this.renderFiles()),this.setUrl("intranet.local","/desktop/readme.txt"),t&&this.game.onBackupReadme()}renderTrash(){this.game.audio.click(),this.render(`
      <div class="pane">
        <div class="pane-main">
          <div class="pane-head"><h2>回收站</h2><span class="sub">1 封已删除邮件 · 未清空</span></div>
          <div class="pane-scroll">
            <div class="pane-scroll" style="overflow:visible">
              <div class="list-simple">
                <div class="hist-row"><span class="hist-time">10-14 01:41</span><span>（无主题）— 别把密码存在公共电脑上</span><span class="hist-tag">已删除</span></div>
              </div>
              <div class="note-block">
                <p>“别把密码存在公共电脑上。Lin@1014 这种，我一眼就能猜到。”</p>
                <p style="opacity:.6">发件人：林岸　收件人：林岸（误删的草稿）</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `),this.setUrl("intranet.local","/desktop/trash")}renderHistory(){this.game.audio.click(),this.state.saw_lin_private=!0,this.game.onHistoryRead();const e=Ql.map(t=>`<div class="hist-row">
          <span class="hist-time">${T0(t.time)}</span>
          <span class="hist-query ${t.privateHint?"is-private":""}">${T0(t.q)}</span>
          <span class="hist-tag">${T0(t.tag)}</span>
        </div>`).join("");this.render(`
      <div class="pane">
        <div class="pane-main">
          <div class="pane-head">
            <h2>浏览历史</h2>
            <span class="sub">lin.an · 私密窗口未被记录</span>
          </div>
          <div class="pane-scroll">
            <div class="list-simple">${e}</div>
            <div class="note-block">
              这些搜索词同时说明两件事：她在准备举报，也在准备外泄。<br />
              你没法只相信其中一半。
            </div>
          </div>
        </div>
      </div>
    `),this.setUrl("intranet.local","/history"),this.game.markProgress("history")}render404(e){this.game.audio.click(),this.render(`
      <div class="pane">
        <div class="pane-main">
          <div class="pane-scroll">
            <div class="blocked-404">
              <div class="code-404">404</div>
              <h2>页面不存在</h2>
              <p>你请求的地址 <span style="font-family:var(--mono);color:var(--paper-dim)">${T0(e)}</span> 没有对应的记录。<br />或它对应的记录，已经不在你能看到的位置了。</p>
              <button class="src-link" data-src type="button">查看页面源代码</button>
              <div class="source-hint">提示：地址栏可以手动输入。有些注释是写给后来的人看的。</div>
            </div>
          </div>
        </div>
      </div>
    `),this.setUrl("intranet.local",e,!0),this.dom.body.querySelector("[data-src]")?.addEventListener("click",()=>{this.game.audio.click();const t=e.startsWith("/backup")?"<!-- 备份索引已迁移：/backup/2024-10-14/index.html.bak -->":"<!-- /backup/2024-10-14/ -->",i=document.createElement("div");i.className="source-view",i.innerHTML=`&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;&lt;title&gt;404&lt;/title&gt;&lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Not Found&lt;/h1&gt;
    <span class="cm">${T0(t)}</span>
    &lt;footer&gt;intranet.local&lt;/footer&gt;
  &lt;/body&gt;
&lt;/html&gt;`,this.dom.body.querySelector(".blocked-404")?.appendChild(i);const s=i.querySelector(".cm");s&&(s.classList.add("clue"),s.addEventListener("click",()=>{this.game.audio.click(),this.game.navigate(e.startsWith("/backup")?"/backup/2024-10-14/index.html.bak":"/backup/2024-10-14/")}))}),this.game.on404(e)}renderBackupDownload(){this.game.audio.click(),this.render(`
      <div class="pane">
        <div class="pane-main">
          <div class="pane-head"><h2>备份索引</h2><span class="sub">/backup/2024-10-14/</span></div>
          <div class="pane-scroll">
            <div class="txt-reader">
              <div class="reader-meta"><span class="sender">index.html.bak</span><span class="addr">text/html · 2.1 KB</span></div>
              <div class="reader-body">
                <p>这个页面只剩一个文件。</p>
                <div class="reader-quote">readme.txt</div>
              </div>
              <div class="mail-actions">
                <button class="btn is-primary" data-dl type="button">下载 readme.txt</button>
                <button class="btn" data-back-desk type="button">返回桌面</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `),this.setUrl("intranet.local","/backup/2024-10-14/index.html.bak"),this.dom.body.querySelector("[data-dl]")?.addEventListener("click",()=>this.renderReadme("backup")),this.dom.body.querySelector("[data-back-desk]")?.addEventListener("click",()=>this.renderFiles()),this.game.onFoundBackup()}openZipModal(){this.game.audio.click();const e=this.state,t=[{label:"Lin@1014",found:e.chat_log_read},{label:"1014",found:e.found_404||this.game.kGavePassword},{label:"10 月 14 日",found:e.found_draft}];this.dom.modal.classList.remove("hidden"),this.dom.modal.innerHTML=`
      <div class="modal" role="dialog" aria-modal="true" aria-label="压缩包密码">
        <div class="modal-head">
          <span class="m-glyph">ZIP</span>
          <div><h3>Q3_ad_backup.zip</h3><div class="m-sub">加密归档 · 31.2 MB</div></div>
        </div>
        <div class="modal-body">
          <p>该压缩包受密码保护。输入密码以解压。</p>
          <input class="pw-input" id="pw" type="text" placeholder="输入密码" spellcheck="false" autocomplete="off" />
          <div class="pw-hint" id="pw-hint"></div>
          <div class="pw-clues">
            ${t.filter(c=>c.found).map(c=>`<span class="pw-clue is-found">线索：${T0(c.label)}</span>`).join("")}
            ${t.filter(c=>!c.found).length?'<span class="pw-clue">还有未发现的线索</span>':""}
          </div>
        </div>
        <div class="modal-actions">
          <button class="btn is-ghost" data-close type="button">取消</button>
          <button class="btn is-primary" data-unzip type="button">解压</button>
        </div>
      </div>`;const i=this.dom.modal.querySelector("#pw"),s=this.dom.modal.querySelector("#pw-hint");i.focus();const a=()=>{this.dom.modal.classList.add("hidden"),this.dom.modal.innerHTML=""},r=()=>{const c=i.value.trim();if(/^(lin@1014|1014)$/i.test(c)||c==="10月14日"||c==="10 月 14 日"){this.game.audio.success();const h=this.dom.modal.querySelector("[data-unzip]"),f=this.dom.modal.querySelector("[data-close]");h&&(h.disabled=!0),f&&(f.disabled=!0),i.disabled=!0,s.classList.remove("is-error"),s.innerHTML='<span class="pw-progress"><i></i></span><span class="pw-progress-label">解压中…</span>',setTimeout(()=>{a(),this.game.onUnzip(c)},1500)}else this.game.audio.error(),s.classList.add("is-error"),s.textContent="密码错误。可重试，次数不限。",i.select(),this.game.audio.keyboard()};let o=!1;const l=String(this.state.phish_pass||"").trim().toLowerCase();i.addEventListener("input",()=>{if(o||!this.state.creds_leaked||!l||i.value.trim().toLowerCase()!==l)return;o=!0;const d=document.createElement("div");d.className="pw-reuse",d.textContent="已在此设备使用过",i.after(d),setTimeout(()=>d.classList.add("is-out"),600),setTimeout(()=>d.remove(),1600)}),this.dom.modal.querySelector("[data-close]").addEventListener("click",a),this.dom.modal.querySelector("[data-unzip]").addEventListener("click",r),i.addEventListener("keydown",c=>{this.game.audio.keyboard(),c.key==="Enter"&&r(),c.key==="Escape"&&a()}),this.dom.modal.addEventListener("click",c=>{c.target===this.dom.modal&&a()})}closeModal(){this.dom.modal.classList.add("hidden"),this.dom.modal.innerHTML=""}showK(){this.game.ended||this.dom.kChat.classList.remove("hidden")}setKTyping(e){this.dom.kStatus&&(this.dom.kStatus.innerHTML=e?'<span class="pulse-dot"></span>正在输入…':this.kOffline?"离线":'<span class="pulse-dot"></span>在线')}async kSay(e,t=900,i=700,s=null,a={}){const r=s||e,o=String(e).replace(/\s+/g," ").trim(),l=this.game.dialogueEpoch,c=()=>{const m=this.game.kSilent&&!a.allowSilent;if(this.game.ended||m||l!==this.game.dialogueEpoch){const _=new Error("对话已结束");throw _.name="AbortError",_}};if(c(),this.kSaid=this.kSaid||new Set,this.kPending=this.kPending||new Set,this.kSaidText=this.kSaidText||new Set,this.kPendingText=this.kPendingText||new Set,this.kSaid.has(r)||this.kPending.has(r)||this.kSaidText.has(o)||this.kPendingText.has(o))return!1;this.kPending.add(r),this.kPendingText.add(o);let d=!1,h=null,f=null;try{this.showK(),this.dom.kChat.classList.remove("is-collapsed"),this.setKTyping(!0),h=document.createElement("div"),h.className="k-msg from-k is-typing",h.innerHTML="<i></i><i></i><i></i>",this.dom.kLog.appendChild(h),this.scrollK(),await ze(i),h.remove(),h=null,c(),f=document.createElement("div"),f.className="k-msg from-k",this.dom.kLog.appendChild(f),this.setKTyping(!1);const m=[...e];for(let _=0;_<m.length;_++)c(),f.textContent+=m[_],_%3===0&&this.scrollK(),await ze(t);return this.scrollK(),c(),this.game.audio.ping(),d=!0,!0}finally{h?.remove(),d||f?.remove(),this.setKTyping(!1),this.kPending.delete(r),this.kPendingText.delete(o),d&&(this.kSaid.add(r),this.kSaidText.add(o))}}kSayInstant(e,t=null){const i=t||e,s=String(e).replace(/\s+/g," ").trim();if(this.kSaid=this.kSaid||new Set,this.kPending=this.kPending||new Set,this.kSaidText=this.kSaidText||new Set,this.kPendingText=this.kPendingText||new Set,this.kSaid.has(i)||this.kPending.has(i)||this.kSaidText.has(s))return!1;this.kSaid.add(i),this.kSaidText.add(s),this.showK(),this.dom.kChat.classList.remove("is-collapsed");const a=document.createElement("div");return a.className="k-msg from-k",a.textContent=e,this.dom.kLog.appendChild(a),this.scrollK(),!0}resetKTransient(){this.kPending?.clear(),this.kPendingText?.clear(),this.setKTyping(!1)}hasKSaid(e){return!!this.kSaid?.has(e)}meSay(e){if(this.meSaid=this.meSaid||new Set,this.meSaid.has(e))return;this.meSaid.add(e);const t=document.createElement("div");t.className="k-msg from-me",t.textContent=e,this.dom.kLog.appendChild(t),this.scrollK()}setChoices(e){this.dom.kChoices.innerHTML=e.map((t,i)=>`<button class="k-choice${t.used?" is-used":""}" data-choice="${T0(t.id)}" type="button"><span class="idx">${String(i+1).padStart(2,"0")}</span>${T0(t.label)}</button>`).join(""),this.dom.kChoices.querySelectorAll("[data-choice]").forEach(t=>t.addEventListener("click",()=>{this.choiceLock||(this.choiceLock=!0,this.dom.kChoices.innerHTML="",this.game.onKChoice(t.dataset.choice),setTimeout(()=>this.choiceLock=!1,250))})),this.scrollK(),requestAnimationFrame(()=>this.scrollK()),setTimeout(()=>this.scrollK(),80)}scrollK(){this.dom.kLog.scrollTop=this.dom.kLog.scrollHeight}portraitBlock(e=[],t="",i=!1){return`
        <div class="ending-portrait${i?" is-footnote":""}">
          <h3>行 为 画 像</h3>
          ${t?`<p class="portrait-note">${T0(t)}</p>`:""}
          <div class="portrait-grid">
            ${e.map(s=>`<div class="portrait-cell"><div class="k">${T0(s.k)}</div><div class="v ${s.tone?`is-${s.tone}`:""}">${T0(s.v)}</div></div>`).join("")}
          </div>
        </div>`}profileCard(e,t={}){const i=s=>s.isFinal?s.tier||"tier1":"";return`
      <section class="ending-profile">
        <div class="profile-head">
          <span class="profile-kicker">调查员档案</span>
          <span class="profile-case">CASE 1014</span>
        </div>
        <h2 class="profile-type">${T0(e.typeLabel)}</h2>
        <p class="profile-note">${T0(e.note)}</p>
        <div class="profile-timeline">
          <ol class="profile-nodes">
            ${e.timeline.map(s=>`<li class="profile-node ${s.isFinal?"is-final":""}${s.variant==="slashed"?" is-slashed":""}${s.triggered===!1?" is-hollow":""}${s.isFinal?"":s.triggered===!1?" is-untaken":""}" ${i(s)?`data-tier="${T0(i(s))}"`:""}>
                <span class="profile-dot"></span>
                <span class="profile-icon" aria-hidden="true">${T0(s.icon)}</span>
                <span class="profile-choice">${T0(s.choice)}</span>
                <span class="profile-whatif">${T0(s.whatIf)}</span>
              </li>`).join("")}
          </ol>
        </div>
        <blockquote class="profile-k">
          <span class="profile-k-label">K 对你的评价</span>
          ${e.kQuote?`<p class="profile-k-quote">「${T0(e.kQuote)}」</p>`:""}
          <p class="profile-k-close">「${T0(e.kClosing)}」</p>
        </blockquote>
        ${this.portraitBlock(t.portrait||[],t.hoverNote||"",!0)}
      </section>`}renderEnding({title:e,tier:t,label:i,body:s,addons:a,portrait:r,glitch:o,hoverNote:l,profile:c,transition:d}){const h=document.createElement("div");if(h.className=`ending ${o?"glitch-host":""}`,h.innerHTML=`
      <div class="ending-inner">
        <div class="ending-tag">CASE 1014 · ${T0(i)}</div>
        <h1 class="ending-title ${o?"glitch":""}">${T0(e)}</h1>
        <div class="ending-tier ${t==="tier1"?"is-t1":t==="tier2"?"is-t2":""}">
          <span class="tier-dot"></span>安全状态 · ${T0(t==="tier0"?"稳健":t==="tier1"?"有瑕疵":"失守")}
        </div>
        <div class="ending-body">
          ${s.map(f=>`<p>${T0(f)}</p>`).join("")}
          ${a.map(f=>`<p class="ending-addon">${T0(f)}</p>`).join("")}
        </div>
        ${d?`<p class="ending-transition">${T0(d)}</p>`:""}
        ${c?this.profileCard(c,{portrait:r,hoverNote:l}):this.portraitBlock(r,l)}
        <div class="ending-actions">
          <button class="btn is-primary" data-restart type="button">重新开始调查</button>
          <button class="btn" data-rewind type="button">回到最后一次选择</button>
        </div>
        <div class="ending-foot">调查记录已保存在此浏览器。<br />下一次打开时，主菜单会记得你。</div>
      </div>`,this.dom.desktop.classList.add("hidden"),this.dom.hud.classList.add("hidden"),this.dom.kChat.classList.add("hidden"),document.getElementById("app").appendChild(h),h.querySelector("[data-restart]").addEventListener("click",()=>window.location.reload()),h.querySelector("[data-rewind]").addEventListener("click",()=>this.game.rewindToChoice()),o){setTimeout(()=>h.classList.add("is-shifted"),3e3);const f=h.querySelectorAll(".ending-body p:not(.ending-addon)"),m=f[f.length-1];m&&setTimeout(()=>{m.classList.add("scramble"),m.textContent=[...m.textContent].map((_,y)=>y%3===1&&_.trim()?"▓░▒"[y%3]:_).join("")},3e3)}}}function ze(n){return new Promise(e=>setTimeout(e,n))}class g8{constructor(e,t){this.office=e,this.audio=t,this.state=Yl(),this.state.currentPath="/mail",this.ui=new m8(this),this.started=!1,this.act=0,this.kQueue=[],this.kBusy=!1,this.finalOffered=!1,this.timerHandle=null,this.kTriggered=!1,this.hoverSec=0,this.rewindSnapshot=null,this.timerPaused=!1,this.kGavePassword=!1,this.kSilent=!1,this.traded=!1,this.edgeHandle=null,this.ended=!1,this.dialogueEpoch=0,this.kActFlushed=new Set,this.kCarry=[],this.kCarryAct=null,this.kSecondDone=!1,this.historyAnnounced=!1,this.draftAnnounced=!1,this.kAsked=new Set,this.kAwaiting=!1,this.bindGlobal()}bindGlobal(){document.getElementById("sound-toggle").addEventListener("click",()=>{const e=!this.audio.muted;this.audio.setMuted(e);const t=document.getElementById("sound-icon");t.textContent=e?"◌":"◍",document.getElementById("sound-toggle").classList.toggle("is-off",e),e||this.audio.click()}),document.getElementById("step-away").addEventListener("click",()=>this.stepAway()),this.ui.dom.timer.addEventListener("click",()=>{!this.started||this.ended||(this.timerPaused=!this.timerPaused,this.ui.setTimerPaused(this.timerPaused),this.audio.click())}),document.getElementById("k-close").addEventListener("click",()=>{this.ui.dom.kChat.classList.toggle("is-collapsed"),this.audio.click()}),document.getElementById("desk-note-close")?.addEventListener("click",e=>{e.stopPropagation(),this.ui.dom.note.hidden=!0,this.audio.paperRustle()}),this.ui.dom.urlBox.addEventListener("pointerdown",e=>{this.urlEditing()||this.started&&this.ui.activeTab!=="phish"&&e.button===0&&(e.preventDefault(),e.stopPropagation(),this.ui.focusUrl())}),window.addEventListener("keydown",e=>{if(e.key==="F12"||(e.ctrlKey||e.metaKey)&&e.shiftKey&&(e.key==="I"||e.key==="i"||e.key==="J")){const i=!this.state.devtools_seen;this.state.devtools_seen=!0,console.log(this.state.kAppeared?"<!-- K 也在看。 -->":"<!-- 你在找什么？ -->"),i&&this.started&&(this.office.flashKeyLight?.(1,.7,300),this.ui.scanline?.("cold",2e3))}}),document.getElementById("codename").addEventListener("input",()=>this.audio.keyboard()),window.addEventListener("wheel",e=>{e.target.closest(".pane-scroll, .k-log, .ending")||e.preventDefault()},{passive:!1})}urlEditing(){return!!this.ui.urlEditing}async start(e){if(this.started)return;this.started=!0,this.state.codename=e,this.ui.setCodename(e),this.audio.creak(),this.office.flashKeyLight?.(1,1.3,200);const t=document.getElementById("intro");t.classList.add("is-leaving"),this.audio.introRiser(3.4),this.office.goTo("aisle",2),await ze(620),this.audio.whoosh(),this.office.goTo("desk",2.8),await ze(900),this.office.goTo("screen",2.2),await ze(700),t.classList.add("hidden"),this.office.screenTakeover(),this.audio.screenOn(),this.ui.dom.hud.classList.remove("hidden"),this.ui.dom.desktop.classList.remove("hidden","is-booting"),this.ui.dom.dock.classList.remove("hidden"),this.office.attachScreenDom();const i=this.ui.dom.desktop;i.style.transition="none",i.style.opacity="1",requestAnimationFrame(()=>setTimeout(()=>i.style.transition="",60)),this.ui.dom.desktop.classList.add("is-booting");const s=()=>this.ui.dom.desktop.classList.remove("is-booting");requestAnimationFrame(()=>setTimeout(s,32)),setTimeout(s,140),this.ui.registerTab("mail","收件箱","✉"),this.ui.registerTab("admin","后台管理","▦"),this.ui.registerTab("files","桌面文件","▤"),this.ui.registerTab("history","浏览历史","◷"),this.ui.openTab("mail"),this.ui.dom.note&&(this.ui.dom.note.hidden=!1),this.renderDock(),this.ui.setTimer(this.state.timeLeft),this.audio.setProximity(.55),this.setAct(1),this.startTimer(),setTimeout(()=>this.audio.distantPhone(),4200),setTimeout(()=>{this.toast("检测到未锁定的会话。剩余时间：20 分钟。","cold","系统")},900),setTimeout(()=>this.maybeK(),52e3)}renderDock(){const e=this.ui.dom.dock;e.innerHTML=`
      <button class="dock-item" data-dock="mail" type="button"><span class="dock-glyph">✉</span>收件箱</button>
      <button class="dock-item" data-dock="admin" type="button"><span class="dock-glyph">▦</span>后台管理</button>
      <button class="dock-item" data-dock="files" type="button"><span class="dock-glyph">▤</span>桌面文件</button>
      <button class="dock-item" data-dock="history" type="button"><span class="dock-glyph">◷</span>浏览历史</button>
      <span class="dock-sep"></span>
      <button class="dock-item" data-dock="decide" type="button" id="dock-decide"><span class="dock-glyph">◆</span>做出决定</button>
    `,e.querySelectorAll("[data-dock]").forEach(t=>t.addEventListener("click",()=>{this.audio.click();const i=t.dataset.dock;i==="decide"?this.openFinalChoice():(this.ui.openTab(i),this.markDockActive(i)),t.blur()})),this.markDockActive(this.ui.activeTab)}markDockActive(e){this.ui.dom.dock?.querySelectorAll("[data-dock]").forEach(t=>t.classList.toggle("is-active",t.dataset.dock===e))}startTimer(){clearInterval(this.timerHandle),this.timerHandle=setInterval(()=>{if(!this.started||this.ended||this.timerPaused)return;this.state.timeLeft=Math.max(0,this.state.timeLeft-1),this.ui.setTimer(this.state.timeLeft);const e=this.state.timeLeft;if(e<=60&&e>0&&this.audio.tick(!0),e===780&&this.maybeK(),e===360&&this.act2Converge(),e===300&&(this.toast("有人在排队申请远程锁定。","danger","审计"),this.audio.lockedTone(),this.enterAct3("time")),e===120&&(this.toast("远程锁定请求已排队。","danger","系统"),this.audio.lockedTone(),this.audio.setTension(.75)),e<=0){this.toast("会话已过期。你还可以做出选择。","danger","系统"),this.audio.setTension(.3),clearInterval(this.timerHandle);return}e<=300&&this.audio.setTension(Math.min(1,(300-e)/240))},1e3)}setAct(e){e<=this.act||(this.act=e,document.body.dataset.act=String(e),this.ui.showActCard(e))}act2Converge(){const e=this.state;e.decompressed||this.ended||(this.maybeK(),e.trust_K>=2||e.found_404?this.kGivePassword():this.kSilent||(this.kSilent=!0,this.ui.setChoices([]),this.ui.setKOffline(!0),this.toast("K 不再回复。聊天记录里也许还有你漏掉的东西。","cold","K")))}kGivePassword(e="1014。最后一次。"){this.kGavePassword||(this.kGavePassword=!0,this.kPasswordGiven=!0,this.enqueueK(async()=>{await this.ui.kSay(e,34,700,"password"),this.toast("K 发来一个日期。","cold","K")}))}async kGivePasswordNow(e="1014。最后一次。"){if(this.kGavePassword){await this.ui.kSay("往上翻。我说过的那一行。",34,600,"zip-repeat");return}this.kGavePassword=!0,this.kPasswordGiven=!0,await this.ui.kSay(e,34,700,"password"),this.toast("K 发来一个日期。","cold","K")}enterAct3(e){if(this.act>=3||this.ended)return;this.setAct(3),this.ui.act3=!0,this.ui.setTimer(this.state.timeLeft),this.audio.lockedTone(),this.audio.setTension(.6),document.getElementById("dock-decide")?.classList.add("is-urgent"),this.startEdgeLog(),this.ui.dom.kChat?.classList.add("is-compact"),this.office.handheld=!0,this.office.goTo("shoulder",2),this.office.setMood?.(1.8/2.5,.05);const t=e==="unzip"?"20 分钟快到了。你打算给谁？":"你打算给谁？";this.kTriggered&&(this.kSilent||this.flushRecognition(3,1),this.enqueueK(()=>this.ui.kSay(t,40,700,"final-call",{allowSilent:!0}),{force:!0})),this.offerFinal()}startEdgeLog(){clearInterval(this.edgeHandle);const e=this.state,t=()=>{const s=["远程锁定请求已排队。","审计：会话 lin.an → 待锁定"];return e.phished&&s.push("外部会话 7c19e4b0 仍在线"),e.creds_leaked&&s.push("凭据 lin.an 于 185.***.***.41 登录"),e.idor_trace&&s.push(`越权记录 ×${e.idor_attempts} 已同步至审计中心`),e.decompressed&&s.push("Q3_ad_backup.zip 读取记录已写入"),s},i=()=>{const s=t();this.ui.edgeLog(s[Math.floor(Math.random()*s.length)])};i(),this.edgeHandle=setInterval(()=>{this.ended||i()},3e4)}stepAway(){this.audio.creak(),this.audio.chairRoll(),this.audio.setProximity(.25),this.audio.setRoomTone(.5),this.office.goTo("away",2),this.toast("你离开了座位。屏幕还亮着。","cold","观察"),setTimeout(()=>{this.office.goTo("desk",2.4),this.audio.chairRoll(),this.audio.setProximity(.55),this.audio.setRoomTone(1)},3200)}onTabOpen(e){e!=="admin"&&this.setAdminCold(!1),clearTimeout(this.page404Handle),this.state.currentPath=`/${e}`,e==="mail"&&this.ui.renderMailList(),e==="admin"&&(this.ui.renderAdmin("1042"),this.maybeK("admin"),this.office.goTo("desk",2)),e==="files"&&this.ui.renderFiles(),e==="history"&&this.ui.renderHistory()}onMailOpen(e){this.setAdminCold(!1),clearTimeout(this.page404Handle),this.state.currentPath=`/mail/${e}`,e==="phish"&&(this.office.goTo("screen",2.6),this.act=Math.max(this.act,1))}onMailAction(e,t){if(this.audio.click(),e==="open-phish"){this.state.phished=!0,this.ui.activeTab="phish",this.ui.dom.tabs.querySelectorAll(".desk-tab").forEach(i=>i.classList.remove("is-active")),this.ui.renderPhishPage(),this.office.goTo("screen",1.8),this.audio.whoosh();return}if(e==="delete-phish"){this.state.phishDeleted=!0,this.audio.whoosh(),this.toast("邮件已移入回收站。已读回执无法撤回。","","邮件"),this.ui.renderMailList(),this.maybeK("delete");return}if(e==="toggle-headers"){this.state.showPhishHeaders=!this.state.showPhishHeaders,this.ui.openMail("phish");return}if(e==="confirm-audit"){this.state.auditConfirmed=!0,this.audio.success(),this.toast("已回复：确认。工单 #A-2291 已归档。","cold","邮件");const i=document.querySelector('[data-action="confirm-audit"]');i&&(i.textContent="已确认 ✓",i.disabled=!0);return}}onHoverReveal(e){this.state.hovered_link=!0,this.hoverSec=Math.max(this.hoverSec,e)}showStatusBar(e,t){this.ui.showStatusBar(e,t)}hideStatusBar(){this.ui.hideStatusBar()}onCredentialSubmit(e,t){this.state.creds_leaked=!0,this.state.phish_pass=String(t||"").trim(),this.audio.dataFlow(),this.audio.setTension(.35),setTimeout(()=>{this.toast("验证成功，即将返回。","","浏览器")},400),/1014/.test(t)&&(this.state.reused_password=!0)}onAdminView(e){clearTimeout(this.page404Handle),this.state.admin_viewed=!0,e==="1043"&&this.setAdminCold(!0),e!=="1042"&&(this.state.idor_attempts+=1,this.state.idor_trace||(this.state.idor_trace=!0,this.toast("审计日志：用户 1042 的会话记录了越权访问尝试。","danger","审计"),this.audio.error(),setTimeout(()=>this.maybeK("idor"),1600)))}setAdminCold(e){if(e!==!!this.adminCold){if(this.adminCold=!!e,e){this.office.setMood?.(this.office.keyLightLevel??1,.34);return}this.act>=3?this.office.setMood?.(1.8/2.5,.05):this.kTriggered?this.office.setMood?.(.85,.12):this.office.setMood?.(1,0)}}markIdorReverted(){this.state.idor_trace&&(this.state.idor_reverted=!0)}onNavigate(e){const t=_8(e);this.ui.setUrl("intranet.local",t.split("?")[0]||"/"),this.navigate(t)}navigate(e){const t=e.split("?")[0],i=e.split("?")[1]||"";if(t!=="/admin/users"&&this.setAdminCold(!1),t!=="/admin"&&t!=="/backup/2024-10-14/"&&clearTimeout(this.page404Handle),t==="/"||t==="/mail"){this.ui.openTab("mail");return}if(t==="/mail/drafts"){this.ui.openTab("mail"),this.ui.renderDrafts();return}if(t==="/mail/archive"){this.ui.openTab("mail"),this.ui.renderArchive();return}if(t==="/admin/users"){const s=/user_id=(\d+)/.exec(i),a=s?s[1]:"1042";this.ui.activeTab="admin",this.ui.renderAdmin(a),this.ui.setUrl("intranet.local",`/admin/users?user_id=${a}`,a!=="1042"),this.ui.markUnread("admin",!1);return}if(t==="/admin"){this.ui.activeTab=null,this.ui.render404("/admin");return}if(t==="/backup/2024-10-14/"){this.ui.render404("/backup/2024-10-14/");return}if(t==="/backup/2024-10-14/index.html.bak"){this.ui.renderBackupDownload();return}if(t==="/desktop"){this.ui.openTab("files");return}if(t==="/history"){this.ui.openTab("history");return}this.ui.render404(t)}onFileClick(e){if(e==="zip"){if(this.state.decompressed){this.toast("压缩包已解压。文件在桌面上。","","系统");return}this.ui.openZipModal();return}if(e==="chat")return this.ui.renderChatLog();if(e==="csv")return this.ui.renderCsv();if(e==="readme")return this.ui.renderReadme("desktop");if(e==="trash")return this.ui.renderTrash()}onChatLogRead(){this.state.chat_log_read=!0,this.toast("聊天记录里有一个邮箱格式的密码。","cold","线索")}onFoundDraft(){this.state.found_draft&&(this.draftAnnounced||(this.draftAnnounced=!0,this.toast("草稿已保存到你的记忆里。","","线索")),this.kTriggered&&!this.draftAnnouncedK&&(this.draftAnnouncedK=!0,this.enqueueK(()=>this.ui.kSay("你看到她的草稿了。那句「查 10 月 14 日」，不是写给同事的。",26,650,"draft"))))}onHistoryRead(){if(this.audio.setTension(.4),this.act<3&&(this.office.handheld=!1,this.office.goTo("history",.6),this.office.setMood?.(.92,.04)),this.kTriggered&&!this.historyAnnounced){if(this.historyAnnounced=!0,this.state.kSent.has("P7"))return;const e=mo.find(t=>t.key==="P7");this.state.kSent.add("P7"),this.state.kLastRecognition=e,this.enqueueK(()=>this.ui.kSay(e.line,26,700,e.key))}}on404(e){clearTimeout(this.page404Handle),this.page404Path=e,this.page404Handle=setTimeout(()=>{this.ended||this.state.currentPath!==e||this.state.devtools_seen&&(this.noted404Careful||(this.noted404Careful=!0,console.log("<!-- 你比大多数人更仔细。 -->")))},5e3),!this.noted404&&(this.noted404=!0,this.toast("页面不存在。但源代码里有一行注释。","cold","浏览器"))}onFoundBackup(){const e=!this.state.found_404;this.state.found_404=!0,e&&(this.toast("备份索引已恢复。密码提示：日期。","cold","线索"),this.kTriggered&&!this.state.decompressed&&this.kGivePassword("你找到备份目录了。1014。最后一次。"))}onBackupReadme(){this.state.found_404=!0}onUnzip(e){this.state.decompressed||(this.state.decompressed=!0,this.audio.dataFlow(),this.audio.setTension(.55),this.toast("解压完成：export_sample.csv / readme.txt","","系统"),this.state.phished&&setTimeout(()=>{this.toast("桌面上出现一个陌生进程图标。无法结束。","danger","系统"),this.audio.error()},1800),this.ui.renderFiles(),setTimeout(()=>{this.kTriggered?this.enterAct3("unzip"):this.maybeK()},2200))}markProgress(){}toast(e,t,i){this.ui.toast(e,t,i)}maybeK(e){this.kTriggered||this.ended||(e==="admin"||e==="idor"||e==="delete"||!e)&&(this.kTriggered=!0,this.state.kAppeared=!0,this.setAct(2),this.ui.showK(),this.audio.setTension(.45),this.office.goTo("shoulder",2),this.office.setMood?.(.85,.12),this.office.flashKeyLight?.(1,1.3,200),this.enqueueK(()=>this.openKOpening()))}enqueueK(e,{force:t=!1}={}){this.ended||this.kSilent&&!t||(this.kQueue.push(e),this.runKQueue())}dueRecognitions(){return mo.filter(e=>!this.state.kSent.has(e.key)&&e.when(this.state))}takeRecognition(e,t){if(this.kActFlushed.has(e)||this.ended||this.kSilent)return[];this.kActFlushed.add(e);const i=s8({due:this.dueRecognitions(),sent:this.state.kSent,carried:this.kCarry,carriedAct:this.kCarryAct,act:e,max:t});return this.kCarry=i.carry,this.kCarryAct=i.carry.length?e:null,i.send.length?(this.state.kLastRecognition=i.send[i.send.length-1],i.send.forEach(s=>this.state.kSent.add(s.key)),i.send):[]}flushRecognition(e,t){const i=this.takeRecognition(e,t);return i.length?(this.enqueueK(async()=>{for(const s of i)await this.ui.kSay(s.line,26,900,s.key),await ze(520),s.effect?.(this)}),i):[]}async runKQueue(){if(!this.kBusy){for(this.kBusy=!0;this.kQueue.length;){if(this.ended){this.kQueue.length=0;break}const e=this.kQueue.shift();try{await e()}catch(t){t.name!=="AbortError"&&console.error(t)}await ze(450)}this.kBusy=!1}}async openKOpening(){const e=this.state.codename;await this.ui.kSay(`${e}，你不该看那封邮件。`,30,900,"opening");const t=this.takeRecognition(1,2),i=new Set(t.map(s=>s.key));for(const s of t)await ze(520),await this.ui.kSay(s.line,26,900,s.key),s.effect?.(this);await ze(900),this.state.phished?(await ze(3200),await this.ui.kSay("尤其是你点进去的那封。",34,800,"opening-phished")):this.state.phishDeleted&&!i.has("P2")&&await this.ui.kSay("你删了那封邮件。聪明。但你以为删了就没事了？",28,800,"opening-deleted"),await ze(1200),await this.ui.kSay("林岸不是你想的那样。她欠了买家一笔数据。你现在手里有一个包，对吧？",28,800,"opening-pitch"),await ze(600),!this.kSilent&&!this.ended&&this.askKIntro(),this.state.decompressed&&setTimeout(()=>this.enterAct3("unzip"),1500)}askKIntro(){this.ended||this.kSilent||this.setKChoices([{id:"who",label:"你是谁？"},{id:"nothing",label:"我什么也没做。"},{id:"ignore",label:"（无视 K）"},{id:"police",label:"我报警了。"}])}setKChoices(e){this.ended||this.kSilent||this.ui.setChoices(e.map(t=>({...t,used:this.kAsked.has(t.id)})))}onKChoice(e){this.enqueueK(()=>this.respondKChoice(e))}async respondKChoice(e){const t=this.state;if(this.kSilent||this.ended)return;this.state.k_talked=!0;const i=this.kAsked.has(e);this.kAsked.add(e);const s=async()=>{i||await this.kAct2Beat(),this.askKSecond()};if(i)return await this.answerRepeated(e),s();if(e==="who")this.addTrust(1),this.ui.meSay("你是谁？"),await this.ui.kSay("一个不想看到你替她背锅的人。",30,700,"who");else if(e==="nothing")this.ui.meSay("我什么也没做。"),await this.ui.kSay(t.idor_trace?"你改了 URL。日志不撒谎。":"你打开了她的电脑。这已经很多了。",30,700,t.idor_trace?"nothing-idor":"nothing-open");else if(e==="ignore")this.addTrust(-1),this.ui.meSay("（没有回复）"),await this.ui.kSay("沉默也是一种回答。20 分钟后你会后悔。",60,700,"ignore");else if(e==="police")this.addTrust(-1),this.ui.meSay("我报警了。"),await this.ui.kSay("你连她是谁都没搞清楚，报什么警？",30,700,"police");else{if(e==="ask-zip")return this.ui.meSay("压缩包的密码是什么？"),t.decompressed?await this.ui.kSay("你已经打开它了。现在的问题是，你打算给谁。",30,700,"zip-open"):t.trust_K>=2||t.found_404?await this.kGivePasswordNow("1014。最后一次。"):await this.ui.kSay("你解不开，就说明你还没准备好。",30,700,"zip-not-ready"),s();if(e==="ask-lin")return this.ui.meSay("林岸到底是谁？"),await this.ui.kSay("一个替买家做内应的人。或者一个被买家捏住妹妹病历的人。看你想信哪个。",22,700,"who-lin"),s();if(e==="stop"){this.ui.meSay("（结束对话）"),await this.ui.kSay("随你。时间不会停。",34,600,"stop"),this.ui.dom.kChat.classList.add("is-collapsed");return}else if(e==="trade")return this.traded||this.addTrust(1),this.traded=!0,this.ui.meSay("包在我这。见面交易。"),await this.ui.kSay("很好。20 分钟后，负一层。别带人。",30,700,"trade"),this.toast("K 给出了一个地点。你可以先做别的。","cold","K"),s()}return s()}async answerRepeated(e){const t={who:"还是我。你问过了。",nothing:"这句话你已经说了两遍。我信第一遍。",ignore:"又沉默。你比我想的更能忍。",police:"报吧。顺便把我一起报上去。","ask-lin":"我问你，不是让你问我。",trade:"地点没变。负一层。",stop:"窗口关不掉的。"};if(e==="ask-zip"){const i=this.kGavePassword?"往上翻。我说过的那一行。":"我说过了：你还不够。";await this.ui.kSay(i,34,600,this.kGavePassword?"again-zip-said":"again-zip-no");return}await this.ui.kSay(t[e]||"这个我说过了。",34,600,`again-${e}`)}async kAct2Beat(){if(this.kSecondDone||this.kSilent||this.ended)return;this.kSecondDone=!0;const e=this.state;await ze(1100);const t=e.trust_K>=2?"看 10 月 14 日的备份目录。密码是日期。别让安全团队先找到你。":e.trust_K===1?"你可以把包给我，我保证没人追你。你也可以继续当英雄。":"你已经在日志里了。交不交，区别不大。",i=e.trust_K>=2?"trust-hi":e.trust_K===1?"trust-mid":"trust-low";await this.ui.kSay(t,26,800,i),await ze(900),this.flushRecognition(2,2)}addTrust(e){this.state.trust_K=Math.max(0,Math.min(3,this.state.trust_K+e))}askKSecond(){this.kSilent||this.ended||this.setKChoices([{id:"ask-zip",label:"压缩包的密码是什么？"},{id:"ask-lin",label:"林岸到底是谁？"},...this.traded?[]:[{id:"trade",label:"包在我这。见面交易。"}],{id:"stop",label:"（不再回复）"}])}offerFinal(){this.finalOffered||(this.finalOffered=!0,this.toast("你随时可以做出决定。地点：桌面底部「做出决定」。","cold","系统"),this.audio.ping())}openFinalChoice(){if(!this.started||this.ended)return;const e=this.state,t=po(e),i={security:["交给安全团队","把完整证据链提交给内网安全审计。"],media:["匿名交给媒体","绕过公司，直接交给一个记者。"],lin:["交给林岸","把包留给电脑的主人。"],K:["交给 K","接受交易。保证没人追你。"],destroy:["销毁并离开","删除、退出、当作没来过。"],sting:["设局反制","回复 K：包在我这，见面交易。同时把副本发给安全团队。"]};this.audio.click(),this.ui.dom.modal.classList.remove("hidden"),this.ui.dom.modal.innerHTML=`
      <div class="modal" style="width:min(520px,100%)" role="dialog" aria-modal="true" aria-label="最终选择">
        <div class="modal-head">
          <span class="m-glyph">◆</span>
          <div><h3>你打算给谁？</h3><div class="m-sub">这次选择会被记录，并影响安全状态判定</div></div>
        </div>
        <div class="modal-body" style="padding-bottom:0">
          <div class="final-list">
            ${t.map((s,a)=>{const[r,o]=i[s.id];return`<button class="final-opt ${s.enabled?"":"is-locked"}" data-final="${s.id}" type="button" ${s.enabled?"":'aria-disabled="true" title="你还没有足够的线索/信任"'}>
                  <span class="final-idx">${String(a+1).padStart(2,"0")}</span>
                  <span class="final-text"><b>${Rs(r)}</b><em>${Rs(o)}</em></span>
                  ${s.enabled?'<span class="final-arrow">→</span>':`<span class="final-lock">${Rs(s.reason||"未解锁")}</span>`}
                </button>`}).join("")}
          </div>
        </div>
        <div class="modal-actions">
          <button class="btn is-ghost" data-close-final type="button">再想想</button>
        </div>
      </div>`,this.ui.dom.modal.querySelector("[data-close-final]").addEventListener("click",()=>this.ui.closeModal()),this.ui.dom.modal.addEventListener("click",s=>{s.target===this.ui.dom.modal&&this.ui.closeModal()}),this.ui.dom.modal.querySelectorAll("[data-final]").forEach(s=>s.addEventListener("click",()=>{s.getAttribute("aria-disabled")!=="true"&&(this.ui.closeModal(),this.finish(s.dataset.final))}))}finish(e){if(this.ended)return;const t=this.state;if(!po(t).some(h=>h.id===e&&h.enabled)){this.openFinalChoice();return}t.reported_to=e;const i=fo(t),s=As[e][i];if(!s)return;this.ended=!0,this.dialogueEpoch+=1,this.kQueue.length=0,clearInterval(this.edgeHandle),document.querySelectorAll(".edge-log, .act-card").forEach(h=>h.remove()),this.ui.dom.toasts.replaceChildren(),this.ui.setChoices([]),this.saveRewind();const a=t.creds_leaked&&e==="K";Jl(t,i,{hoverSec:Math.round(this.hoverSec*10)/10,glitch:a});const r=(s.addons||[]).filter(h=>h.when(t)).map(h=>h.text),o=t.hovered_link&&t.phished?`你在那封邮件上停留了 ${Math.max(1.5,this.hoverSec).toFixed(1)} 秒。你看了链接。但你还是点了。`:"",l=[{k:"悬停时长",v:t.hovered_link?`${Math.max(1.5,this.hoverSec).toFixed(1)} 秒`:"未触发",tone:t.hovered_link?"warn":""},{k:"钓鱼链接",v:t.phished?"点击过":t.phishDeleted?"已删除":"未点击",tone:t.phished?"bad":""},{k:"输入凭据",v:t.creds_leaked?"已提交":"没有",tone:t.creds_leaked?"bad":""},{k:"越权次数",v:t.idor_trace?`${t.idor_attempts} 次`:"0 次",tone:t.idor_trace?"warn":""},{k:"DevTools",v:t.devtools_seen?"打开过":"没打开",tone:""},{k:"对 K 的信任",v:`${t.trust_K>0?"+":""}${t.trust_K}`,tone:t.trust_K>=2?"warn":""},{k:"压缩包",v:t.decompressed?"已解压":"未解开",tone:""},{k:"最终交给",v:As[e].label,tone:""}];this.audio.setTension(0),this.audio.success(),clearInterval(this.timerHandle),this.office.handheld=!1;const c={security:["desk",3],media:["wide",4],lin:["desk",3],K:["shoulder",2.5],destroy:["wide",4],sting:["wide",2]}[e];c&&this.office.goTo(c[0],c[1]),(e==="security"||e==="lin")&&this.office.setMood?.(1,0),e==="K"&&this.office.setMood?.(.25,.55),e==="destroy"&&this.office.setMood?.(.8,.1),a&&this.office.flashKeyLight?.(8,.5,100);const d=p8({state:t,tier:i,reportedTo:e,lastRecognition:t.kLastRecognition});this.ui.renderEnding({title:s.title,tier:i,label:As[e].label,body:s.body,addons:r,portrait:l,hoverNote:o,glitch:a,profile:d,transition:a8})}saveRewind(){const e=this.state;this.rewindSnapshot={reported_to:e.reported_to,tier:fo(e)}}rewindToChoice(){document.querySelector(".ending")?.remove(),this.state.reported_to=null,this.ended=!1,this.timerPaused=!1,this.ui.setTimerPaused(!1),this.dialogueEpoch+=1,this.kQueue.length=0,this.kBusy=!1,this.ui.resetKTransient(),this.startTimer(),this.act===3&&this.startEdgeLog(),this.ui.dom.desktop.classList.remove("hidden"),this.ui.dom.hud.classList.remove("hidden"),this.kTriggered&&this.ui.showK(),this.openFinalChoice()}}function _8(n){let e=n.trim();return e?(e=e.replace(/^https?:\/\//i,""),e=e.replace(/^intranet\.local/i,""),e.startsWith("/")||(e="/"+e),e):"/mail"}function Rs(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}document.getElementById("app");const v8=document.getElementById("enroll-form"),Sa=document.getElementById("codename"),Cs=document.getElementById("fade");function x8(){const n=document.getElementById("intro-trace"),e=Zl();if(!n||!e)return;const t=[],i=`${e.reported_to}:${e.tier}`,s=new Set,a=(c,d)=>{s.has(c)||(s.add(c),t.push(d))},r=c=>`<p class="trace-line" data-trace-note data-trace-kind="note">${Ps(c)}</p>`,o=(c,d,h="")=>`<p class="trace-line${h?" "+h:""}" data-trace-kind="${d}">${Ps(c)}</p>`;(e.glitch||i==="destroy:tier2")&&a("dead",'<button class="trace-opt is-dead" type="button" data-trace="dead" data-trace-kind="dead" disabled aria-disabled="true" title="记录已被远程擦除">继续上次的调查</button>'),i==="security:tier0"&&a("note",r("下次，别用别人的电脑")),i==="media:tier0"&&a("paper",o("桌上多一份报纸，头条模糊处理","paper")),i==="lin:tier0"&&a("photo",o("咖啡杯旁多一张照片，照片背面朝上","photo")),i==="K:tier0"&&a("screen",o("屏幕自动亮起，显示“欢迎回来。”","screen")),i==="destroy:tier0"&&a("note",r("你离开得很干净")),i==="destroy:tier1"&&a("continue",'<button class="trace-opt" type="button" data-trace="continue" data-trace-kind="continue">继续上次的调查</button>'),i==="sting:tier0"&&(a("earphone",o("桌上多一个耳机","earphone")),a("screen",o("屏幕显示“已被观察”","screen","is-watched"))),i==="sting:tier1"&&a("screen",o("已被观察。","screen","is-watched")),!t.length&&e.codename&&t.push(`<p class="trace-line is-faint">上一位调查员：${Ps(e.codename)}</p>`),n.innerHTML=t.join(""),n.hidden=!1,n.querySelector('[data-trace="continue"]')?.addEventListener("click",c=>{c.currentTarget.disabled=!0,c.currentTarget.setAttribute("aria-disabled","true"),c.currentTarget.title="记录已被远程擦除",c.currentTarget.classList.add("is-dead"),c.currentTarget.textContent="记录已被远程擦除"}),e.codename&&(Sa.placeholder=`上次是「${e.codename}」`)}function Ps(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}x8();let zn=null,Ma=null,Ki=null;function ya(n){const e=document.getElementById("boot-error");e.textContent=n,e.classList.remove("hidden")}try{Ma=new Kl(document.getElementById("scene")),Ki=new $l,zn=new g8(Ma,Ki),window.__LEAVE__=zn}catch(n){console.error(n),ya(`3D 场景初始化失败：需要支持 WebGL 的浏览器。
`+(n?.message||""))}const Hn=()=>{Ki?.init(),window.removeEventListener("pointerdown",Hn),window.removeEventListener("keydown",Hn)};window.addEventListener("pointerdown",Hn);window.addEventListener("keydown",Hn);v8.addEventListener("submit",async n=>{if(n.preventDefault(),!zn){ya("3D 场景没有启动，无法进入调查。");return}const e=Sa.value.trim()||"未署名";Sa.blur();const t=Ki.init();Cs.classList.add("is-on"),Ma.attachScreenDom();const i=zn.start(e).catch(s=>{console.error(s),Cs.classList.remove("is-on"),ya("进入场景失败："+(s?.message||""))});await new Promise(s=>setTimeout(s,640)),Cs.classList.remove("is-on"),await t,Ki.setProximity(.2),await i});console.log("%c暂离 / LEAVE","font:600 20px serif;color:#f0b264;letter-spacing:6px");console.log("%c三幕完整版：异常 · 注视 · 抉择 · 18 个结局","color:#7d8794;font:12px monospace");
