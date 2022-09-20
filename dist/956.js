"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[956],{956:(n,r,e)=>{e.r(r),e.d(r,{DataSnapshot:()=>Ur,Database:()=>hs,OnDisconnect:()=>Mr,QueryConstraint:()=>t,TransactionResult:()=>ds,_QueryImpl:()=>i,_QueryParams:()=>qt,_ReferenceImpl:()=>O,_TEST_ACCESS_forceRestClient:()=>ps,_TEST_ACCESS_hijackHash:()=>_s,_repoManagerDatabaseFromApp:()=>ls,_setSDKVersion:()=>H,_validatePathString:()=>Zi,_validateWritablePath:()=>q,child:()=>zr,connectDatabaseEmulator:()=>function(e,t,n,i={}){(e=(0,p.m9)(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&u("Cannot call useEmulator() after instance has already been initialized.");var r=e._repoInternal;let s=void 0;r.repoInfo_.nodeAdmin?(i.mockUserToken&&u('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Ce(Ce.OWNER)):i.mockUserToken&&(i="string"==typeof i.mockUserToken?i.mockUserToken:(0,p.Sg)(i.mockUserToken,e.app.options.projectId),s=new Ce(i));!function(e,t,n,i){e.repoInfo_=new ke(t+":"+n,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),i&&(e.authTokenProvider_=i)}(r,t,n,s)},enableLogging:()=>function(e,t){le(e,t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,endAt:()=>function(e,t){return Ji("endAt","key",t,!0),new Qr(e,t)},endBefore:()=>function(e,t){return Ji("endBefore","key",t,!0),new Gr(e,t)},equalTo:()=>function(e,t){return Ji("equalTo","key",t,!0),new rs(e,t)},forceLongPolling:()=>function(){us(),a.forceDisallow(),De.forceAllow()},forceWebSockets:()=>function(){us(),De.forceDisallow()},get:()=>function(t){t=(0,p.m9)(t);var e=new qr(()=>{}),e=new jr(e);return function(i,r,s){var e=function(e,t){const n=t._path;let i=null,r=(e.syncPointTree_.foreachOnPath(n,(e,t)=>{e=b(e,n);i=i||ni(t,e)}),e.syncPointTree_.get(n));r?i=i||ni(r,m()):(r=new $n,e.syncPointTree_=e.syncPointTree_.set(n,r));const s=null!=i,o=s?new tn(i,!0,!1):null,a=wn(e.pendingWriteTree_,t._path),l=Jn(r,t,a,s?o.getNode():x.EMPTY_NODE,s);return function(e){return hn(e.viewCache_)}(l)}(i.serverSyncTree_,r);return null==e?i.server_.get(r).then(e=>{var t,e=R(e).withIndex(r._queryParams.getIndex());fi(i.serverSyncTree_,r,s,!0);let n;return n=r._queryParams.loadsAllData()?di(i.serverSyncTree_,r._path,e):(t=Ci(i.serverSyncTree_,r),pi(i.serverSyncTree_,r._path,e,t)),M(i.eventQueue_,r._path,n),_i(i.serverSyncTree_,r,s,null,!0),e},e=>(wr(i,"get for query "+(0,p.Pz)(r)+" failed: "+e),Promise.reject(new Error(e)))):Promise.resolve(e)}(t._repo,t,e).then(e=>new Ur(e,new O(t._repo,t._path),t._queryParams.getIndex()))},getDatabase:()=>function(e=(0,L.Mq)(),t){return(0,L.qX)(e,"database").getImmediate({identifier:t})},goOffline:()=>function(e){(e=(0,p.m9)(e))._checkNotDeleted("goOffline"),Cr(e._repo)},goOnline:()=>function(e){(e=(0,p.m9)(e))._checkNotDeleted("goOnline"),function(e){e.persistentConnection_&&e.persistentConnection_.resume(or)}(e._repo)},increment:()=>function(e){return{".sv":{increment:e}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,limitToFirst:()=>function(e){if("number"!=typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Jr(e)},limitToLast:()=>function(e){if("number"!=typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Zr(e)},off:()=>function(e,t,n){let i=null;n=n?new qr(n):null;"value"===t?i=new jr(n):t&&(i=new Vr(t,n));vr(e._repo,e,i)},onChildAdded:()=>function(e,t,n,i){return Yr(e,"child_added",t,n,i)},onChildChanged:()=>function(e,t,n,i){return Yr(e,"child_changed",t,n,i)},onChildMoved:()=>function(e,t,n,i){return Yr(e,"child_moved",t,n,i)},onChildRemoved:()=>function(e,t,n,i){return Yr(e,"child_removed",t,n,i)},onDisconnect:()=>function(e){return e=(0,p.m9)(e),new Mr(e._repo,e._path)},onValue:()=>Kr,orderByChild:()=>function(e){{if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.')}return Zi("orderByChild","path",e,!1),new es(e)},orderByKey:()=>function(){return new ts},orderByPriority:()=>function(){return new ns},orderByValue:()=>function(){return new is},push:()=>function(e,t){e=(0,p.m9)(e),q("push",e._path),F("push",t,e._path,!0);const n=ur(e._repo),i=St(n),r=zr(e,i),s=zr(e,i);let o;o=null!=t?Hr(s,t).then(()=>s):Promise.resolve(s);return r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r},query:()=>function(e,...t){let n=(0,p.m9)(e);for(const i of t)n=i._apply(n);return n},ref:()=>Br,refFromURL:()=>function(e,t){(e=(0,p.m9)(e))._checkNotDeleted("refFromURL");const n=Rr(t,e._repo.repoInfo_.nodeAdmin),i=(tr("refFromURL",n),n.repoInfo);e._repo.repoInfo_.isCustomHost()||i.host===e._repo.repoInfo_.host||u("refFromURL: Host name does not match the current database: (found "+i.host+" but expected "+e._repo.repoInfo_.host+")");return Br(e,n.path.toString())},remove:()=>function(e){return q("remove",e._path),Hr(e,null)},runTransaction:()=>function(i,e,t){if(i=(0,p.m9)(i),q("Reference.transaction",i._path),".length"===i.key||".keys"===i.key)throw"Reference.transaction failed: "+i.key+" is a read-only object.";const n=null==(t=null==t?void 0:t.applyLocally)||t,r=new p.BH,s=Kr(i,()=>{});return function(t,n,i,r,s,o){wr(t,"transaction on "+n);const a={path:n,update:i,onComplete:r,status:null,order:J(),applyLocally:o,retryCount:0,unwatcher:s,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},l=br(t,n,void 0),h=(a.currentInputSnapshot=l,a.update(l.val()));if(void 0===h)a.unwatcher(),a.currentOutputSnapshotRaw=null,a.currentOutputSnapshotResolved=null,a.onComplete&&a.onComplete(null,!1,a.currentInputSnapshot);else{Gi("transaction failed: Data returned ",h,a.path),a.status=0;i=Mi(t.transactionQueueTree_,n);const u=Oi(i)||[];u.push(a),Li(i,u);let e;if("object"==typeof h&&null!==h&&(0,p.r3)(h,".priority"))e=(0,p.DV)(h,".priority"),(0,p.hu)(Qi(e),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else{const c=mi(t.serverSyncTree_,n)||x.EMPTY_NODE;e=c.getPriority().val()}r=cr(t),o=R(h,e),s=Ai(o,l,r),i=(a.currentOutputSnapshotRaw=o,a.currentOutputSnapshotResolved=s,a.currentWriteId=fr(t),ui(t.serverSyncTree_,n,s,a.currentWriteId,a.applyLocally));M(t.eventQueue_,n,i),Ir(t,t.transactionQueueTree_)}}(i._repo,i._path,e,(e,t,n)=>{e?r.reject(e):(e=new Ur(n,new O(i._repo,i._path),N),r.resolve(new ds(t,e)))},s,n),r.promise}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,serverTimestamp:()=>function(){return cs},set:()=>Hr,setPriority:()=>function(e,t){e=(0,p.m9)(e),q("setPriority",e._path),Xi("setPriority",t,!1);const n=new p.BH;return mr(e._repo,w(e._path,".priority"),t,null,n.wrapCallback(()=>{})),n.promise},setWithPriority:()=>function(e,t,n){if(q("setWithPriority",e._path),F("setWithPriority",t,e._path,!1),Xi("setWithPriority",n,!1),".length"===e.key||".keys"===e.key)throw"setWithPriority failed: "+e.key+" is a read-only object.";const i=new p.BH;return mr(e._repo,e._path,t,n,i.wrapCallback(()=>{})),i.promise},startAfter:()=>function(e,t){return Ji("startAfter","key",t,!0),new Xr(e,t)},startAt:()=>function(e=null,t){return Ji("startAt","key",t,!0),new $r(e,t)},update:()=>function(e,t){$i("update",t,e._path,!1);const n=new p.BH;return function(r,s,e,o){wr(r,"update",{path:s.toString(),value:e});let n=!0;const i=cr(r),a={};if(y(e,(e,t)=>{n=!1,a[e]=Di(w(s,e),R(t),r.serverSyncTree_,i)}),n)d("update() called with empty data.  Don't do anything."),Tr(0,o,"ok",void 0);else{const l=fr(r);var t=function(e,t,n,i){!function(e,t,n,i){(0,p.hu)(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=_n(e.visibleWrites,t,n),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i);i=D.fromObject(n);return gi(e,new en(Qt(),t,i))}(r.serverSyncTree_,s,a,l);ir(r.eventQueue_,t),r.server_.merge(s.toString(),e,(e,t)=>{var n="ok"===e,n=(n||f("update at "+s+" failed: "+e),ci(r.serverSyncTree_,l,!n)),i=0<n.length?kr(r,s):s;M(r.eventQueue_,i,n),Tr(0,o,e,t)}),y(e,e=>{e=Nr(r,w(s,e));kr(r,e)}),M(r.eventQueue_,s,[])}}(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}});var L=e(389),r=e(463),p=e(444),W=e(333);const U="@firebase/database",B="0.13.6";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let z="";function H(e){z=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,p.Pz)(t))}get(e){e=this.domStorage_.getItem(this.prefixedName_(e));return null==e?null:(0,p.cI)(e)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,p.r3)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new j(t)}}catch(e){}return new V}var c,K;function Q(e){e=(0,p.dS)(e);const t=new p.gQ;return t.update(e),e=t.digest(),p.US.encodeByteArray(e)}const G=Y("localStorage"),$=Y("sessionStorage"),X=new W.Yd("@firebase/database"),J=function(){let e=1;return function(){return e++}}(),Z=function(...t){let n="";for(let e=0;e<t.length;e++){var i=t[e];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?n+=Z.apply(null,i):n+="object"==typeof i?(0,p.Pz)(i):i,n+=" "}return n};let ee=null,te=!0;function ne(t){return function(...e){d(t,...e)}}function ie(...e){e="FIREBASE INTERNAL ERROR: "+Z(...e),X.error(e)}function re(e,t){return e===t?0:e<t?-1:1}function se(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,p.Pz)(t))}function oe(t){if("object"!=typeof t||null===t)return(0,p.Pz)(t);const n=[];for(const e in t)n.push(e);n.sort();let i="{";for(let e=0;e<n.length;e++)0!==e&&(i+=","),i=(i=i+(0,p.Pz)(n[e])+":")+oe(t[n[e]]);return i+="}"}function ae(t,n){var i=t.length;if(i<=n)return[t];const r=[];for(let e=0;e<i;e+=n)e+n>i?r.push(t.substring(e,i)):r.push(t.substring(e,e+n));return r}const le=function(e,t){(0,p.hu)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(X.logLevel=W.in.VERBOSE,ee=X.log.bind(X),t&&$.set("logging_enabled",!0)):"function"==typeof e?ee=e:(ee=null,$.remove("logging_enabled"))},d=function(...e){!0===te&&(te=!1,null===ee&&!0===$.get("logging_enabled")&&le(!0)),ee&&(e=Z.apply(null,e),ee(e))},u=function(...e){e="FIREBASE FATAL ERROR: "+Z(...e);throw X.error(e),new Error(e)},f=function(...e){e="FIREBASE WARNING: "+Z(...e);X.warn(e)},he=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},s="[MIN_NAME]",o="[MAX_NAME]",ue=function(e,t){var n,i;return e===t?0:e===s||t===o?-1:t===s||e===o?1:(n=me(e),i=me(t),null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null===i&&e<t?-1:1)};function y(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}function ce(e){(0,p.hu)(!he(e),"Invalid JSON number");let t,n,i,r,s;0===e?(n=0,i=0,t=1/e==-1/0?1:0):(t=e<0,e=Math.abs(e),i=e>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(e)/Math.LN2),1023),n=r+1023,Math.round(e*Math.pow(2,52-r)-Math.pow(2,52))):(n=0,Math.round(e/Math.pow(2,-1074))));const o=[];for(s=52;s;--s)o.push(i%2?1:0),i=Math.floor(i/2);for(s=11;s;--s)o.push(n%2?1:0),n=Math.floor(n/2);o.push(t?1:0),o.reverse();const a=o.join("");let l="";for(s=0;s<64;s+=8){let e=parseInt(a.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()}function de(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n}const _e=new RegExp("^-?(0*)\\d{1,10}$"),pe=-2147483648,fe=2147483647,me=function(e){if(_e.test(e)){e=Number(e);if(e>=pe&&e<=fe)return e}return null},ge=function(e){try{e()}catch(t){setTimeout(()=>{var e=t.stack||"";throw f("Exception was thrown by user callback.",e),t},Math.floor(0))}};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null!=t&&t.get().then(e=>this.appCheck=e)}getToken(n){return this.appCheck?this.appCheck.getToken(n):new Promise((e,t)=>{setTimeout(()=>{this.appCheck?this.getToken(n).then(e,t):e(null)},0)})}addTokenChangeListener(t){var e;null!=(e=this.appCheckProvider)&&e.get().then(e=>e.addTokenListener(t))}notifyForInvalidToken(){f(`Provided AppCheck credentials for the app named "${this.appName_}" `+"are invalid. This usually indicates your app was not initialized correctly.")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(n){return this.auth_?this.auth_.getToken(n).catch(e=>e&&"auth/token-not-initialized"===e.code?(d("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((e,t)=>{setTimeout(()=>{this.auth_?this.getToken(n).then(e,t):e(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(e=>e.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(e=>e.removeAuthTokenListener(t))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',f(e)}}class Ce{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ce.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const we="5",Te=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,be="websocket",Ie="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ke{constructor(e,t,n,i,r=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=G.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&G.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){var e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return e+this.host+"/"+t}}function Ee(e,t,n){(0,p.hu)("string"==typeof t,"typeof type must == string"),(0,p.hu)("object"==typeof n,"typeof params must == object");let i;if(t===be)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Ie)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}((t=e).host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams)&&(n.ns=e.namespace);const r=[];return y(n,(e,t)=>{r.push(e+"="+t)}),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,p.r3)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,p.p$)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe={},Ne={};function xe(e){e=e.toString();return Pe[e]||(Pe[e]=new Se),Pe[e]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const n=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let e=0;e<n.length;++e)n[e]&&ge(()=>{this.onMessage_(n[e])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ne(e),this.stats_=xe(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),Ee(t,Ie,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Re(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(3e4));var n=()=>{if(!this.isClosed_){this.scriptTagHolder=new Ae((...e)=>{var[t,n,i]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...e)=>{var[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);const t={start:"t"};t.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(t.cb=this.scriptTagHolder.uniqueCallbackIdentifier),t.v=we,this.transportSessionId&&(t.s=this.transportSessionId),this.lastSessionId&&(t.ls=this.lastSessionId),this.applicationId&&(t.p=this.applicationId),this.appCheckToken&&(t.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Te.test(location.hostname)&&(t.r="f");var e=this.urlFn(t);this.log_("Connecting via long-poll to "+e),this.scriptTagHolder.addTag(e,()=>{})}};if((0,p.Yr)()||"complete"===document.readyState)n();else{let e=!1;const i=function(){document.body?e||(e=!0,n()):setTimeout(i,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&i()}),window.attachEvent("onload",i))}}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){De.forceAllow_=!0}static forceDisallow(){De.forceDisallow_=!0}static isAvailable(){return!(0,p.Yr)()&&(!!De.forceAllow_||!(De.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){var e=(0,p.Pz)(e),e=(this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length),(0,p.h$)(e)),t=ae(e,1840);for(let e=0;e<t.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,t.length,t[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(!(0,p.Yr)()){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}}incrementIncomingBytes_(e){e=(0,p.Pz)(e).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}}class Ae{constructor(t,n,i,r){if(this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,p.Yr)())this.commandCB=t,this.onMessageCB=n;else{this.uniqueCallbackIdentifier=J(),window["pLPCommand"+this.uniqueCallbackIdentifier]=t,window["pRTLPCB"+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ae.createIFrame_();let e="";this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)&&(i=document.domain,e='<script>document.domain="'+i+'";<\/script>');r="<html><body>"+e+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){d("frame writing exception"),e.stack&&d(e.stack),d(e)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(t);try{t.contentWindow.document||d("No IE domain setting required")}catch(e){var n=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(0<this.pendingSegs.length?2:1)){this.currentSerial++;const r={};r.id=this.myID,r.pw=this.myPW,r.ser=this.currentSerial;var n=this.urlFn(r);let e="",t=0;for(;0<this.pendingSegs.length;){if(!(this.pendingSegs[0].d.length+30+e.length<=1870))break;var i=this.pendingSegs.shift();e=e+"&seg"+t+"="+i.seg+"&ts"+t+"="+i.ts+"&d"+t+"="+i.d,t++}return n+=e,this.addLongPollTag_(n,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,()=>{clearTimeout(i),n()})}addTag(e,n){(0,p.Yr)()?this.doNodeLongPoll(e,n):setTimeout(()=>{try{if(this.sendNewPolls){const t=this.myIFrame.doc.createElement("script");t.type="text/javascript",t.async=!0,t.src=e,t.onload=t.onreadystatechange=function(){var e=t.readyState;e&&"loaded"!==e&&"complete"!==e||(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),n())},t.onerror=()=>{d("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(t)}}catch(e){}},Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fe=null;"undefined"!=typeof MozWebSocket?Fe=MozWebSocket:"undefined"!=typeof WebSocket&&(Fe=WebSocket);class a{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ne(this.connId),this.stats_=xe(t),this.connURL=a.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){const s={};return s.v=we,!(0,p.Yr)()&&"undefined"!=typeof location&&location.hostname&&Te.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s.ac=i),r&&(s.p=r),Ee(e,be,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,G.set("previous_websocket_failure",!0);try{let e;var n,i,r;(0,p.Yr)()&&(n=this.nodeAdmin?"AdminNode":"Node",e={headers:{"User-Agent":`Firebase/5/${z}/${process.platform}/`+n,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization="Bearer "+this.authToken),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken),i=process.env,(r=0===this.connURL.indexOf("wss://")?i.HTTPS_PROXY||i.https_proxy:i.HTTP_PROXY||i.http_proxy)&&(e.proxy={origin:r})),this.mySock=new Fe(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");e=e.message||e.data;e&&this.log_(e),this.onClosed_()}}start(){}static forceDisallow(){a.forceDisallow_=!0}static isAvailable(){let e=!1;var t;return!(e="undefined"!=typeof navigator&&navigator.userAgent&&(t=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/))&&1<t.length&&parseFloat(t[1])<4.4?!0:e)&&null!==Fe&&!a.forceDisallow_}static previouslyFailed(){return G.isInMemoryStorage||!0===G.get("previous_websocket_failure")}markConnectionHealthy(){G.remove("previous_websocket_failure")}appendFrame_(e){this.frames.push(e),this.frames.length===this.totalFrames&&(e=this.frames.join(""),e=(this.frames=null,p.cI)(e),this.onMessage(e))}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,p.hu)(null===this.frames,"We already have a frame buffer"),e.length<=6){var t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){null!==this.mySock&&(e=e.data,this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames?this.appendFrame_(e):null!==(e=this.extractFrameCount_(e))&&this.appendFrame_(e))}send(e){this.resetKeepAlive();var e=(0,p.Pz)(e),t=(this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length),ae(e,16384));1<t.length&&this.sendString_(String(t.length));for(let e=0;e<t.length;e++)this.sendString_(t[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}a.responsesRequiredToBeHealthy=2,a.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qe{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[De,a]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){var t=a&&a.isAvailable();let n=t&&!a.previouslyFailed();if(e.webSocketOnly&&(t||f("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[a];else{const i=this.transports_=[];for(const r of qe.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);qe.globalTransportInitialized_=!0}}initialTransport(){if(0<this.transports_.length)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return 1<this.transports_.length?this.transports_[1]:null}}qe.globalTransportInitialized_=!1;class Me{constructor(e,t,n,i,r,s,o,a,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ne("c:"+this.id+":"),this.transportManager_=new qe(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport(),t=(this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0,this.connReceiver_(this.conn_)),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));var i=e.healthyTimeout||0;0<i&&(this.healthyTimeout_=de(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&102400<this.conn_.bytesReceived?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&10240<this.conn_.bytesSent?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return e=>{t===this.conn_?this.onConnectionLost_(e):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return e=>{2!==this.state_&&(t===this.rx_?this.onPrimaryMessageReceived_(e):t===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(e){this.sendData_({t:"d",d:e})}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){"t"in e&&("a"===(e=e.t)?this.upgradeIfSecondaryHealthy_():"r"===e?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===e&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_()))}onSecondaryMessageReceived_(e){var t=se("t",e),e=se("d",e);if("c"===t)this.onSecondaryControl_(e);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(e)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){var t=se("t",e),e=se("d",e);"c"===t?this.onControl_(e):"d"===t&&this.onDataMessage_(e)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){var t=se("t",e);if("d"in e){e=e.d;if("h"===t)this.onHandshake_(e);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(e):"r"===t?this.onReset_(e):"e"===t?ie("Server Error: "+e):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ie("Unknown control packet command: "+t)}}onHandshake_(e){var t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),we!==n&&f("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){var e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;var e=this.connReceiver_(this.secondaryConn_),t=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,t),de(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):de(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){var e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(G.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,p.hu)(Array.isArray(e)&&0<e.length,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});e=this.getInitialEvent(e);e&&t.apply(n,e)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(t){(0,p.hu)(this.allowedEvents_.find(e=>e===t),"Unknown event: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends Le{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,p.uI)()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new We}getInitialEvent(e){return(0,p.hu)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=32,Be=768;class _{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)0<this.pieces_[e].length&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let t="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(t+="/"+this.pieces_[e]);return t||"/"}}function m(){return new _("")}function g(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function v(e){return e.pieces_.length-e.pieceNum_}function C(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new _(e.pieces_,t)}function ze(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function He(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function je(t){if(t.pieceNum_>=t.pieces_.length)return null;const n=[];for(let e=t.pieceNum_;e<t.pieces_.length-1;e++)n.push(t.pieces_[e]);return new _(n,0)}function w(t,n){const i=[];for(let e=t.pieceNum_;e<t.pieces_.length;e++)i.push(t.pieces_[e]);if(n instanceof _)for(let e=n.pieceNum_;e<n.pieces_.length;e++)i.push(n.pieces_[e]);else{var r=n.split("/");for(let e=0;e<r.length;e++)0<r[e].length&&i.push(r[e])}return new _(i,0)}function T(e){return e.pieceNum_>=e.pieces_.length}function b(e,t){var n=g(e),i=g(t);if(null===n)return t;if(n===i)return b(C(e),C(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Ve(e,t){var n=He(e,0),i=He(t,0);for(let e=0;e<n.length&&e<i.length;e++){var r=ue(n[e],i[e]);if(0!==r)return r}return n.length===i.length?0:n.length<i.length?-1:1}function Ye(n,i){if(v(n)!==v(i))return!1;for(let e=n.pieceNum_,t=i.pieceNum_;e<=n.pieces_.length;e++,t++)if(n.pieces_[e]!==i.pieces_[t])return!1;return!0}function h(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(v(e)>v(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Ke{constructor(e,t){this.errorPrefix_=t,this.parts_=He(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=(0,p.ug)(this.parts_[e]);Qe(this)}}function Qe(e){if(e.byteLength_>Be)throw new Error(e.errorPrefix_+"has a key path longer than "+Be+" bytes ("+e.byteLength_+").");if(e.parts_.length>Ue)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ue+") or object contains a cycle "+Ge(e))}function Ge(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends Le{constructor(){super(["visible"]);let t,e;"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(e="visibilitychange",t="hidden"):void 0!==document.mozHidden?(e="mozvisibilitychange",t="mozHidden"):void 0!==document.msHidden?(e="msvisibilitychange",t="msHidden"):void 0!==document.webkitHidden&&(e="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,()=>{var e=!document[t];e!==this.visible_&&(this.visible_=e,this.trigger("visible",e))},!1)}static getInstance(){return new $e}getInitialEvent(e){return(0,p.hu)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I extends Oe{constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=I.nextPersistentConnectionId_++,this.log_=ne("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!(0,p.Yr)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$e.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&We.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){var i=++this.requestNumber_,e={r:i,a:e,b:t};this.log_((0,p.Pz)(e)),(0,p.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(e),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const n=new p.BH;e={p:e._path.toString(),q:e._queryObject},this.outstandingGets_.push({action:"g",request:e,onComplete:e=>{var t=e.d;"ok"===e.s?n.resolve(t):n.reject(t)}}),this.outstandingGetCount_++,e=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(e),n.promise}listen(e,t,n,i){this.initConnection_();var r=e._queryIdentifier,s=e._path.toString(),i=(this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),(0,p.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,p.hu)(!this.listens.get(s).has(r),"listen() called twice for same path/queryId."),{onComplete:i,hashFn:t,query:e,tag:n});this.listens.get(s).set(r,i),this.connected_&&this.sendListen_(i)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,e=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(e)})}sendListen_(r){const s=r.query,o=s._path.toString(),a=s._queryIdentifier,e=(this.log_("Listen on "+o+" for "+a),{p:o});r.tag&&(e.q=s._queryObject,e.t=r.tag),e.h=r.hashFn(),this.sendRequest("q",e,e=>{var t=e.d,n=e.s,i=(I.warnOnListenWarnings_(t,s),this.listens.get(o)&&this.listens.get(o).get(a));i===r&&(this.log_("listen response",e),"ok"!==n&&this.removeListen_(o,a),r.onComplete&&r.onComplete(n,t))})}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&(0,p.r3)(e,"w")){const n=(0,p.DV)(e,"w");Array.isArray(n)&&~n.indexOf("no_index")&&(e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',t=t._path.toString(),f("Using an unspecified index. Your data will be downloaded and "+`filtered on the client. Consider adding ${e} at `+t+" to your security rules for better performance."))}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||(0,p.GJ)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const n=this.authToken_;var e=(0,p.w9)(n)?"auth":"gauth";const t={cred:n};null===this.authOverride_?t.noauth=!0:"object"==typeof this.authOverride_&&(t.authvar=this.authOverride_),this.sendRequest(e,t,e=>{var t=e.s,e=e.d||"error";this.authToken_===n&&("ok"===t?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(t,e))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{var t=e.s,e=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,e)})}unlisten(e,t){var n=e._path.toString(),i=e._queryIdentifier,r=(this.log_("Unlisten called for "+n+" "+i),(0,p.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,i));r&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){t={p:t,d:n};this.log_("onDisconnect "+e,t),this.sendRequest(e,t,e=>{i&&setTimeout(()=>{i(e.s,e.d)},Math.floor(0))})}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;n=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(n):this.log_("Buffering put: "+t)}sendPut_(t){const n=this.outstandingPuts_[t].action;var e=this.outstandingPuts_[t].request;const i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,e,e=>{this.log_(n+" response",e),delete this.outstandingPuts_[t],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(e.s,e.d)})}reportStats(e){this.connected_&&(this.log_("reportStats",e={c:e}),this.sendRequest("s",e,e=>{"ok"!==e.s&&(e=e.d,this.log_("reportStats","Error sending stats: "+e))}))}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,p.Pz)(e));var t=e.r;const n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):ie("Unrecognized action received from server: "+(0,p.Pz)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,p.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){var e;this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()&&(this.visible_?this.lastConnectionEstablishedTime_&&(3e4<(new Date).getTime()-this.lastConnectionEstablishedTime_&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime()),e=(new Date).getTime()-this.lastConnectionAttemptTime_,e=Math.max(0,this.reconnectDelay_-e),e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)),this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;var e=this.onDataMessage_.bind(this),i=this.onReady_.bind(this);const u=this.onRealtimeDisconnect_.bind(this);var r=this.id+":"+I.nextConnectionId_++,s=this.lastSessionId;let t=!1,n=null;var o=function(){n?n.close():(t=!0,u())},a=(this.realtime_={close:o,sendRequest:function(e){(0,p.hu)(n,"sendRequest call when we're not connected not allowed."),n.sendRequest(e)}},this.forceTokenRefresh_);this.forceTokenRefresh_=!1;try{var[l,h]=await Promise.all([this.authTokenProvider_.getToken(a),this.appCheckTokenProvider_.getToken(a)]);t?d("getToken() completed but was canceled"):(d("getToken() completed. Creating connection."),this.authToken_=l&&l.accessToken,this.appCheckToken_=h&&h.token,n=new Me(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,i,u,e=>{f(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},s))}catch(e){this.log_("Failed to get token: "+e),t||(this.repoInfo_.nodeAdmin&&f(e),o())}}}interrupt(e){d("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){d("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,p.xb)(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){e-=(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>oe(e)).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){e=new _(e).toString();let n;if(this.listens.has(e)){const i=this.listens.get(e);n=i.get(t),i.delete(t),0===i.size&&this.listens.delete(e)}else n=void 0;return n}onAuthRevoked_(e,t){d("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,3<=this.invalidAuthTokenCount_&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){d("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,3<=this.invalidAppCheckTokenCount_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){var e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,p.Yr)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+z.replace(/\./g,"-")]=1,(0,p.uI)()?e["framework.cordova"]=1:(0,p.b$)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){var e=We.getInstance().currentlyOnline();return(0,p.xb)(this.interruptReasons_)&&e}}I.nextPersistentConnectionId_=0,I.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new k(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){e=new k(s,e),t=new k(s,t);return 0!==this.compare(e,t)}minPost(){return k.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Je;class Ze extends Xe{static get __EMPTY_NODE(){return Je}static set __EMPTY_NODE(e){Je=e}compare(e,t){return ue(e.name,t.name)}isDefinedOn(e){throw(0,p.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return k.MIN}maxPost(){return new k(o,Je)}makePost(e,t){return(0,p.hu)("string"==typeof e,"KeyIndex indexValue must always be a string."),new k(e,Je)}toString(){return".key"}}const E=new Ze;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e=this.nodeStack_.pop(),t;if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return 0<this.nodeStack_.length}peek(){var e;return 0===this.nodeStack_.length?null:(e=this.nodeStack_[this.nodeStack_.length-1],this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value})}}class S{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:S.RED,this.left=null!=i?i:P.EMPTY_NODE,this.right=null!=r?r:P.EMPTY_NODE}copy(e,t,n,i,r){return new S(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;var r=n(e,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp_()}removeMin_(){if(this.left.isEmpty())return P.EMPTY_NODE;let e=this;return(e=(e=e.left.isRed_()||e.left.left.isRed_()?e:e.moveRedLeft_()).copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}remove(e,t){let n,i;if(t(e,(n=this).key)<0)n=(n=n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()?n:n.moveRedLeft_()).copy(null,null,null,n.left.remove(e,t),null);else{if(0===t(e,(n=(n=n.left.isRed_()?n.rotateRight_():n).right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()?n:n.moveRedRight_()).key)){if(n.right.isEmpty())return P.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e=(e=(e=e.right.isRed_()&&!e.left.isRed_()?e.rotateLeft_():e).left.isRed_()&&e.left.left.isRed_()?e.rotateRight_():e).left.isRed_()&&e.right.isRed_()?e.colorFlip_():e}moveRedLeft_(){let e=this.colorFlip_();return e=e.right.left.isRed_()?(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_():e}moveRedRight_(){let e=this.colorFlip_();return e=e.left.left.isRed_()?(e=e.rotateRight_()).colorFlip_():e}rotateLeft_(){var e=this.copy(null,null,S.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){var e=this.copy(null,null,S.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){var e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}S.RED=!0,S.BLACK=!1;class P{constructor(e,t=P.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new P(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,S.BLACK,null,null))}remove(e){return new P(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,S.BLACK,null,null))}get(e){var t;let n=this.root_;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:0<t&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:0<t&&(n=(i=n).right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new et(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new et(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new et(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new et(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tt(e,t){return ue(e.name,t.name)}function nt(e,t){return ue(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */P.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new S(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};let it;function rt(e){return"number"==typeof e?"number:"+ce(e):"string:"+e}function st(e){var t;e.isLeafNode()?(t=e.val(),(0,p.hu)("string"==typeof t||"number"==typeof t||"object"==typeof t&&(0,p.r3)(t,".sv"),"Priority must be a string or number.")):(0,p.hu)(e===it||e.isEmpty(),"priority of unexpected type."),(0,p.hu)(e===it||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ot;class l{constructor(e,t=l.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,(this.lazyHash_=null,p.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),st(this.priorityNode_)}static set __childrenNodeConstructor(e){ot=e}static get __childrenNodeConstructor(){return ot}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new l(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:l.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return T(e)?this:".priority"===g(e)?this.priorityNode_:l.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:l.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){var n=g(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,p.hu)(".priority"!==n||1===v(e),".priority must be the last token in a path"),this.updateImmediateChild(n,l.__childrenNodeConstructor.EMPTY_NODE.updateChild(C(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+rt(this.priorityNode_.val())+":");var t=typeof this.value_;e=(e+=t+":")+("number"==t?ce(this.value_):this.value_),this.lazyHash_=Q(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===l.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof l.__childrenNodeConstructor?-1:((0,p.hu)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){var t=typeof e.value_,n=typeof this.value_,i=l.VALUE_TYPE_ORDER.indexOf(t),r=l.VALUE_TYPE_ORDER.indexOf(n);return(0,p.hu)(0<=i,"Unknown leaf type: "+t),(0,p.hu)(0<=r,"Unknown leaf type: "+n),i===r?"object"==n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){return e===this||!!e.isLeafNode()&&(this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_))}}l.VALUE_TYPE_ORDER=["object","boolean","number","string"];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let at,lt;const N=new class extends Xe{compare(e,t){const n=e.node.getPriority();var i=t.node.getPriority(),i=n.compareTo(i);return 0===i?ue(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return k.MIN}maxPost(){return new k(o,new l("[PRIORITY-POST]",lt))}makePost(e,t){e=at(e);return new k(t,new l("[PRIORITY-POST]",e))}toString(){return".priority"}},ht=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.count=(t=e+1,parseInt(Math.log(t)/ht,10)),this.current_=this.count-1,t=this.count;var t=parseInt(Array(t+1).join("1"),2);this.bits_=e+1&t}nextBitIsOne(){var e=!(this.bits_&1<<this.current_);return this.current_--,e}}function ct(l,e,h,t){l.sort(e);const u=function(e,t){var n=t-e;let i,r;return 0==n?null:1==n?(i=l[e],r=h?h(i):i,new S(r,i.node,S.BLACK,null,null)):(n=parseInt(n/2,10)+e,e=u(e,n),t=u(n+1,t),i=l[n],r=h?h(i):i,new S(r,i.node,S.BLACK,e,t))};var n=function(t){let r=null,s=null,o=l.length;function n(e,t){var n=o-e,i=o,e=(o-=e,u(1+n,i)),i=l[n],n=h?h(i):i,n=new S(n,i.node,t,null,e);r=(r?r.left=n:s=n,n)}for(let e=0;e<t.count;++e){var i=t.nextBitIsOne(),a=Math.pow(2,t.count-(e+1));i?n(a,S.BLACK):(n(a,S.BLACK),n(a,S.RED))}return s}(new ut(l.length));return new P(t||e,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let dt;const _t={};class pt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,p.hu)((_t,N),"ChildrenNode.ts has not been loaded"),dt=dt||new pt({".priority":_t},{".priority":N})}get(e){var t=(0,p.DV)(this.indexes_,e);if(t)return t instanceof P?t:null;throw new Error("No index defined for "+e)}hasIndex(e){return(0,p.r3)(this.indexSet_,e.toString())}addIndex(e,t){(0,p.hu)(e!==E,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(k.Wrap);let s=r.getNext();for(;s;)i=i||e.isDefinedOn(s.node),n.push(s),s=r.getNext();let o;o=i?ct(n,e.getCompare()):_t;t=e.toString();const a=Object.assign({},this.indexSet_),l=(a[t]=e,Object.assign({},this.indexes_));return l[t]=o,new pt(l,a)}addToIndexes(o,a){var e=(0,p.UI)(this.indexes_,(t,n)=>{const i=(0,p.DV)(this.indexSet_,n);if((0,p.hu)(i,"Missing index implementation for "+n),t===_t){if(i.isDefinedOn(o.node)){const r=[],s=a.getIterator(k.Wrap);let e=s.getNext();for(;e;)e.name!==o.name&&r.push(e),e=s.getNext();return r.push(o),ct(r,i.getCompare())}return _t}{n=a.get(o.name);let e=t;return(e=n?e.remove(new k(o.name,n)):e).insert(o,o.node)}});return new pt(e,this.indexSet_)}removeFromIndexes(n,i){var e=(0,p.UI)(this.indexes_,e=>{var t;return e!==_t&&(t=i.get(n.name))?e.remove(new k(n.name,t)):e});return new pt(e,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ft;class x{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&st(this.priorityNode_),this.children_.isEmpty()&&(0,p.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ft=ft||new x(new P(nt),null,pt.Default)}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ft}updatePriority(e){return this.children_.isEmpty()?this:new x(this.children_,e,this.indexMap_)}getImmediateChild(e){return".priority"===e?this.getPriority():null===(e=this.children_.get(e))?ft:e}getChild(e){var t=g(e);return null===t?this:this.getImmediateChild(t).getChild(C(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(n,i){if((0,p.hu)(i,"We should always be passing snapshot nodes"),".priority"===n)return this.updatePriority(i);{var r=new k(n,i);let e,t;t=i.isEmpty()?(e=this.children_.remove(n),this.indexMap_.removeFromIndexes(r,this.children_)):(e=this.children_.insert(n,i),this.indexMap_.addToIndexes(r,this.children_));n=e.isEmpty()?ft:this.priorityNode_;return new x(e,n,t)}}updateChild(e,t){var n=g(e);return null===n?t:((0,p.hu)(".priority"!==g(e)||1===v(e),".priority must be the last token in a path"),e=this.getImmediateChild(n).updateChild(C(e),t),this.updateImmediateChild(n,e))}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(n){if(this.isEmpty())return null;const i={};let r=0,s=0,o=!0;if(this.forEachChild(N,(e,t)=>{i[e]=t.val(n),r++,o&&x.INTEGER_REGEXP_.test(e)?s=Math.max(s,Number(e)):o=!1}),!n&&o&&s<2*r){const e=[];for(const t in i)e[t]=i[t];return e}return n&&!this.getPriority().isEmpty()&&(i[".priority"]=this.getPriority().val()),i}hash(){if(null===this.lazyHash_){let n="";this.getPriority().isEmpty()||(n+="priority:"+rt(this.getPriority().val())+":"),this.forEachChild(N,(e,t)=>{t=t.hash();""!==t&&(n+=":"+e+":"+t)}),this.lazyHash_=""===n?"":Q(n)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);return i?(n=i.getPredecessorKey(new k(e,t)))?n.name:null:this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);return t?(e=t.minKey())&&e.name:this.children_.minKey()}getFirstChild(e){e=this.getFirstChildName(e);return e?new k(e,this.children_.get(e)):null}getLastChildName(e){const t=this.resolveIndex_(e);return t?(e=t.maxKey())&&e.name:this.children_.maxKey()}getLastChild(e){e=this.getLastChildName(e);return e?new k(e,this.children_.get(e)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(t,n){const e=this.resolveIndex_(n);if(e)return e.getIteratorFrom(t,e=>e);{const i=this.children_.getIteratorFrom(t.name,k.Wrap);let e=i.peek();for(;null!=e&&n.compare(e,t)<0;)i.getNext(),e=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(t,n){const e=this.resolveIndex_(n);if(e)return e.getReverseIteratorFrom(t,e=>e);{const i=this.children_.getReverseIteratorFrom(t.name,k.Wrap);let e=i.peek();for(;null!=e&&0<n.compare(e,t);)i.getNext(),e=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gt?-1:0}withIndex(e){return e===E||this.indexMap_.hasIndex(e)?this:(e=this.indexMap_.addIndex(e,this.children_),new x(this.children_,this.priorityNode_,e))}isIndexed(e){return e===E||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority())){if(this.children_.count()!==n.children_.count())return!1;{const i=this.getIterator(N),r=n.getIterator(N);let e=i.getNext(),t=r.getNext();for(;e&&t;){if(e.name!==t.name||!e.node.equals(t.node))return!1;e=i.getNext(),t=r.getNext()}return null===e&&null===t}}return!1}}resolveIndex_(e){return e===E?null:this.indexMap_.get(e.toString())}}x.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mt extends x{constructor(){super(new P(nt),x.EMPTY_NODE,pt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return x.EMPTY_NODE}isEmpty(){return!1}}const gt=new mt,yt=(Object.defineProperties(k,{MIN:{value:new k(s,x.EMPTY_NODE)},MAX:{value:new k(o,gt)}}),Ze.__EMPTY_NODE=x.EMPTY_NODE,l.__childrenNodeConstructor=x,e=gt,it=e,e=gt,lt=e,!0);function R(r,e=null){if(null===r)return x.EMPTY_NODE;var t,n;if("object"==typeof r&&".priority"in r&&(e=r[".priority"]),(0,p.hu)(null===e||"string"==typeof e||"number"==typeof e||"object"==typeof e&&".sv"in e,"Invalid priority type found: "+typeof e),"object"!=typeof(r="object"==typeof r&&".value"in r&&null!==r[".value"]?r[".value"]:r)||".sv"in r)return t=r,new l(t,R(e));if(r instanceof Array||!yt){let i=x.EMPTY_NODE;return y(r,(e,t)=>{if((0,p.r3)(r,e)&&"."!==e.substring(0,1)){const n=R(t);!n.isLeafNode()&&n.isEmpty()||(i=i.updateImmediateChild(e,n))}}),i.updatePriority(R(e))}{const s=[];let i=!1;return y(r,(e,t)=>{if("."!==e.substring(0,1)){const n=R(t);n.isEmpty()||(i=i||!n.getPriority().isEmpty(),s.push(new k(e,n)))}}),0===s.length?x.EMPTY_NODE:(t=ct(s,tt,e=>e.name,nt),i?(n=ct(s,N.getCompare()),new x(t,R(e),new pt({".priority":n},{".priority":N}))):new x(t,R(e),pt.Default))}}at=R;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt extends Xe{constructor(e){super(),this.indexPath_=e,(0,p.hu)(!T(e)&&".priority"!==g(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node);var i=this.extractChild(t.node),i=n.compareTo(i);return 0===i?ue(e.name,t.name):i}makePost(e,t){e=R(e),e=x.EMPTY_NODE.updateChild(this.indexPath_,e);return new k(t,e)}maxPost(){var e=x.EMPTY_NODE.updateChild(this.indexPath_,gt);return new k(o,e)}toString(){return He(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t){if(t===""+fe)return It;var e=me(t);if(null!=e)return""+(e+1);const n=new Array(t.length);for(let e=0;e<n.length;e++)n[e]=t.charAt(e);if(n.length<Et)return n.push(It),n.join("");let i=n.length-1;for(;0<=i&&n[i]===kt;)i--;return-1===i?o:(e=n[i],e=bt.charAt(bt.indexOf(e)+1),n[i]=e,n.slice(0,i+1).join(""))}function wt(t){if(t===""+pe)return s;var e=me(t);if(null!=e)return""+(e-1);const n=new Array(t.length);for(let e=0;e<n.length;e++)n[e]=t.charAt(e);return n[n.length-1]===It?1===n.length?""+fe:(delete n[n.length-1],n.join("")):(n[n.length-1]=bt.charAt(bt.indexOf(n[n.length-1])-1),n.join("")+kt.repeat(Et-n.length))}const Tt=new class extends Xe{compare(e,t){var n=e.node.compareTo(t.node);return 0===n?ue(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return k.MIN}maxPost(){return k.MAX}makePost(e,t){e=R(e);return new k(t,e)}toString(){return".value"}},bt="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",It="-",kt="z",Et=786,St=function(){let s=0;const o=[];return function(e){var t=e===s;s=e;let n;const i=new Array(8);for(n=7;0<=n;n--)i[n]=bt.charAt(e%64),e=Math.floor(e/64);(0,p.hu)(0===e,"Cannot push at time == 0");let r=i.join("");if(t){for(n=11;0<=n&&63===o[n];n--)o[n]=0;o[n]++}else for(n=0;n<12;n++)o[n]=Math.floor(64*Math.random());for(n=0;n<12;n++)r+=bt.charAt(o[n]);return(0,p.hu)(20===r.length,"nextPushId: Length should be 20."),r}}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pt(e){return{type:"value",snapshotNode:e}}function Nt(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function xt(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Rt(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dt{constructor(e){this.index_=e}updateChild(e,t,n,i,r,s){(0,p.hu)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()||(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(xt(t,o)):(0,p.hu)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(Nt(t,n)):s.trackChildChange(Rt(t,n,o))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(i,n,r){return null!=r&&(i.isLeafNode()||i.forEachChild(N,(e,t)=>{n.hasChild(e)||r.trackChildChange(xt(e,t))}),n.isLeafNode()||n.forEachChild(N,(e,t)=>{if(i.hasChild(e)){const n=i.getImmediateChild(e);n.equals(t)||r.trackChildChange(Rt(e,t,n))}else r.trackChildChange(Nt(e,t))})),n.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?x.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.indexedFilter_=new Dt(e.getIndex()),this.index_=e.getIndex(),this.startPost_=At.getStartPost_(e),this.endPost_=At.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,r,s){return this.matches(new k(t,n))||(n=x.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){let i=(t=t.isLeafNode()?x.EMPTY_NODE:t).withIndex(this.index_);i=i.updatePriority(x.EMPTY_NODE);const r=this;return t.forEachChild(N,(e,t)=>{r.matches(new k(e,t))||(i=i.updateImmediateChild(e,x.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){var t;return e.hasStart()?(t=e.getIndexStartName(),e.getIndex().makePost(e.getIndexStartValue(),t)):e.getIndex().minPost()}static getEndPost_(e){var t;return e.hasEnd()?(t=e.getIndexEndName(),e.getIndex().makePost(e.getIndexEndValue(),t)):e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.rangedFilter_=new At(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new k(t,n))||(n=x.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,o,t){let a;if(o.isLeafNode()||o.isEmpty())a=x.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<o.numChildren()&&o.isIndexed(this.index_)){a=x.EMPTY_NODE.withIndex(this.index_);let t,n=(t=this.reverse_?o.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_),0);for(;t.hasNext()&&n<this.limit_;){var i=t.getNext();let e;if(!(e=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),i)<=0:this.index_.compare(i,this.rangedFilter_.getEndPost())<=0))break;a=a.updateImmediateChild(i.name,i.node),n++}}else{a=(a=o.withIndex(this.index_)).updatePriority(x.EMPTY_NODE);let e,t,n,i;if(this.reverse_){i=a.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),t=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();n=(e,t)=>h(t,e)}else i=a.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),t=this.rangedFilter_.getEndPost(),n=this.index_.getCompare();let r=0,s=!1;for(;i.hasNext();){var l=i.getNext();(s=!s&&n(e,l)<=0?!0:s)&&r<this.limit_&&n(l,t)<=0?r++:a=a.updateImmediateChild(l.name,x.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,t)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){const d=this.index_.getCompare();s=(e,t)=>d(t,e)}else s=this.index_.getCompare();const o=e;(0,p.hu)(o.numChildren()===this.limit_,"");var a=new k(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(o.hasChild(t)){var u=o.getImmediateChild(t);let e=i.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=e&&(e.name===t||o.hasChild(e.name));)e=i.getChildAfterChild(this.index_,e,this.reverse_);var c=null==e?1:s(e,a);if(h&&!n.isEmpty()&&0<=c)return null!=r&&r.trackChildChange(Rt(t,n,u)),o.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(xt(t,u));const _=o.updateImmediateChild(t,x.EMPTY_NODE);return null!=e&&this.rangedFilter_.matches(e)?(null!=r&&r.trackChildChange(Nt(e.name,e.node)),_.updateImmediateChild(e.name,e.node)):_}}return!n.isEmpty()&&h&&0<=s(l,a)?(null!=r&&(r.trackChildChange(xt(l.name,l.node)),r.trackChildChange(Nt(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,x.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=N}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,p.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,p.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:s}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,p.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,p.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:o}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,p.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===N}copy(){const e=new qt;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Mt(e,t,n){const i=e.copy();return i.startSet_=!0,void 0===t&&(t=null),i.indexStartValue_=t,null!=n?(i.startNameSet_=!0,i.indexStartName_=n):(i.startNameSet_=!1,i.indexStartName_=""),i}function Ot(e,t,n){const i=e.copy();return i.endSet_=!0,void 0===t&&(t=null),i.indexEndValue_=t,void 0!==n?(i.endNameSet_=!0,i.indexEndName_=n):(i.endNameSet_=!1,i.indexEndName_=""),i}function Lt(e,t){const n=e.copy();return n.index_=t,n}function Wt(t){const n={};if(!t.isDefault()){let e;e=t.index_===N?"$priority":t.index_===Tt?"$value":t.index_===E?"$key":((0,p.hu)(t.index_ instanceof vt,"Unrecognized index type!"),t.index_.toString()),n.orderBy=(0,p.Pz)(e),t.startSet_&&(n.startAt=(0,p.Pz)(t.indexStartValue_),t.startNameSet_&&(n.startAt+=","+(0,p.Pz)(t.indexStartName_))),t.endSet_&&(n.endAt=(0,p.Pz)(t.indexEndValue_),t.endNameSet_&&(n.endAt+=","+(0,p.Pz)(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?n.limitToFirst=t.limit_:n.limitToLast=t.limit_)}return n}function Ut(t){const n={};if(t.startSet_&&(n.sp=t.indexStartValue_,t.startNameSet_&&(n.sn=t.indexStartName_)),t.endSet_&&(n.ep=t.indexEndValue_,t.endNameSet_&&(n.en=t.indexEndName_)),t.limitSet_){n.l=t.limit_;let e=t.viewFrom_;""===e&&(e=t.isViewFromLeft()?"l":"r"),n.vf=e}return t.index_!==N&&(n.i=t.index_.toString()),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Oe{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=ne("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,p.hu)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,r){const s=e._path.toString(),o=(this.log_("Listen called for "+s+" "+e._queryIdentifier),Bt.getListenId_(e,i)),a={};this.listens_[o]=a;e=Wt(e._queryParams);this.restRequest_(s+".json",e,(t,e)=>{let n=e;if(null===(t=404===t?n=null:t)&&this.onDataUpdate_(s,n,!1,i),(0,p.DV)(this.listens_,o)===a){let e;e=t?401===t?"permission_denied":"rest_error:"+t:"ok",r(e,null)}})}unlisten(e,t){e=Bt.getListenId_(e,t);delete this.listens_[e]}get(e){var t=Wt(e._queryParams);const i=e._path.toString(),r=new p.BH;return this.restRequest_(i+".json",t,(e,t)=>{let n=t;null===(e=404===e?n=null:e)?(this.onDataUpdate_(i,n,!1,null),r.resolve(n)):r.reject(new Error(n))}),r.promise}refreshAuthToken(e){}restRequest_(r,s={},o){return s.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([e,t])=>{e&&e.accessToken&&(s.auth=e.accessToken),t&&t.token&&(s.ac=t.token);const n=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+r+"?ns="+this.repoInfo_.namespace+(0,p.xO)(s),i=(this.log_("Sending REST request for "+n),new XMLHttpRequest);i.onreadystatechange=()=>{if(o&&4===i.readyState){this.log_("REST Response for "+n+" received. status:",i.status,"response:",i.responseText);let e=null;if(200<=i.status&&i.status<300){try{e=(0,p.cI)(i.responseText)}catch(e){f("Failed to parse JSON response for "+n+": "+i.responseText)}o(null,e)}else 401!==i.status&&404!==i.status&&f("Got unsuccessful REST response for "+n+" Status: "+i.status),o(i.status);o=null}},i.open("GET",n,!0),i.send()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(){this.rootNode_=x.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){return{value:null,children:new Map}}function jt(e,t,n){var i;T(t)?(e.value=n,e.children.clear()):null!==e.value?e.value=e.value.updateChild(t,n):(i=g(t),e.children.has(i)||e.children.set(i,Ht()),jt(e.children.get(i),t=C(t),n))}function Vt(e,n,i){var r;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */null!==e.value?i(n,e.value):(r=(e,t)=>{Vt(t,new _(n.toString()+"/"+e),i)},e.children.forEach((e,t)=>{r(t,e)}))}class Yt{constructor(e){this.collection_=e,this.last_=null}get(){var e=this.collection_.get();const n=Object.assign({},e);return this.last_&&y(this.last_,(e,t)=>{n[e]=n[e]-t}),this.last_=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Yt(e);t=1e4+2e4*Math.random();de(this.reportStats_.bind(this),Math.floor(t))}reportStats_(){var e=this.statsListener_.get();const n={};let i=!1;y(e,(e,t)=>{0<t&&(0,p.r3)(this.statsToReport_,e)&&(n[e]=t,i=!0)}),i&&this.server_.reportStats(n),de(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Gt(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $t(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e=c=c||{})[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Xt{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=c.ACK_USER_WRITE,this.source=Qt()}operationForChild(e){var t;return T(this.path)?null!=this.affectedTree.value?((0,p.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this):(t=this.affectedTree.subtree(new _(e)),new Xt(m(),t,this.revert)):((0,p.hu)(g(this.path)===e,"operationForChild called for unrelated child."),new Xt(C(this.path),this.affectedTree,this.revert))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t){this.source=e,this.path=t,this.type=c.LISTEN_COMPLETE}operationForChild(e){return T(this.path)?new Jt(this.source,m()):new Jt(this.source,C(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=c.OVERWRITE}operationForChild(e){return T(this.path)?new Zt(this.source,m(),this.snap.getImmediateChild(e)):new Zt(this.source,C(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=c.MERGE}operationForChild(e){if(T(this.path)){const t=this.children.subtree(new _(e));return t.isEmpty()?null:t.value?new Zt(this.source,m(),t.value):new en(this.source,m(),t)}return(0,p.hu)(g(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new en(this.source,C(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){return T(e)?this.isFullyInitialized()&&!this.filtered_:(e=g(e),this.isCompleteForChild(e))}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function rn(n,e,t,i){var r=[];const s=[];return e.forEach(e=>{var t;"child_changed"===e.type&&n.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)&&s.push((t=e.childName,{type:"child_moved",snapshotNode:e.snapshotNode,childName:t}))}),sn(n,r,"child_removed",e,i,t),sn(n,r,"child_added",e,i,t),sn(n,r,"child_moved",s,i,t),sn(n,r,"child_changed",e,i,t),sn(n,r,"value",e,i,t),r}function sn(s,o,t,e,a,l){const n=e.filter(e=>e.type===t);n.sort((e,t)=>{var n=s;if(null==e.childName||null==t.childName)throw(0,p.g5)("Should only compare child_ events.");return e=new k(e.childName,e.snapshotNode),t=new k(t.childName,t.snapshotNode),n.index_.compare(e,t)}),n.forEach(t=>{e=s,r=l,"value"!==(i=t).type&&"child_removed"!==i.type&&(i.prevName=r.getPredecessorChildName(i.childName,i.snapshotNode,e.index_));const n=i;var e,i,r;a.forEach(e=>{e.respondsTo(t.type)&&o.push(e.createEvent(n,s.query_))})})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function on(e,t){return{eventCache:e,serverCache:t}}function an(e,t,n,i){return on(new tn(t,n,i),e.serverCache)}function ln(e,t,n,i){return on(e.eventCache,new tn(t,n,i))}function hn(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function un(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cn;class D{constructor(e,t=cn=cn||new P(re)){this.value=e,this.children=t}static fromObject(e){let n=new D(null);return y(e,(e,t)=>{n=n.set(new _(e),t)}),n}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:m(),value:this.value};if(T(e))return null;{var n=g(e);const i=this.children.get(n);return null!==i&&null!=(e=i.findRootMostMatchingPathAndValue(C(e),t))?{path:w(new _(n),e.path),value:e.value}:null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(T(e))return this;{var t=g(e);const n=this.children.get(t);return null!==n?n.subtree(C(e)):new D(null)}}set(e,t){if(T(e))return new D(t,this.children);{var n=g(e);const i=this.children.get(n)||new D(null);e=i.set(C(e),t),t=this.children.insert(n,e);return new D(this.value,t)}}remove(t){if(T(t))return this.children.isEmpty()?new D(null):new D(null,this.children);{var n=g(t);const i=this.children.get(n);if(i){const r=i.remove(C(t));let e;return e=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),null===this.value&&e.isEmpty()?new D(null):new D(this.value,e)}return this}}get(e){if(T(e))return this.value;{var t=g(e);const n=this.children.get(t);return n?n.get(C(e)):null}}setTree(t,n){if(T(t))return n;{var i=g(t);const r=this.children.get(i)||new D(null),s=r.setTree(C(t),n);let e;return e=s.isEmpty()?this.children.remove(i):this.children.insert(i,s),new D(this.value,e)}}fold(e){return this.fold_(m(),e)}fold_(n,i){const r={};return this.children.inorderTraversal((e,t)=>{r[e]=t.fold_(w(n,e),i)}),i(n,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,m(),t)}findOnPath_(e,t,n){var i=!!this.value&&n(t,this.value);if(i)return i;if(T(e))return null;{i=g(e);const r=this.children.get(i);return r?r.findOnPath_(C(e),w(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,m(),t)}foreachOnPath_(e,t,n){if(T(e))return this;{this.value&&n(t,this.value);var i=g(e);const r=this.children.get(i);return r?r.foreachOnPath_(C(e),w(t,i),n):new D(null)}}foreach(e){this.foreach_(m(),e)}foreach_(n,i){this.children.inorderTraversal((e,t)=>{t.foreach_(w(n,e),i)}),this.value&&i(n,this.value)}foreachChild(n){this.children.inorderTraversal((e,t)=>{t.value&&n(e,t.value)})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.writeTree_=e}static empty(){return new A(new D(null))}}function dn(t,n,i){if(T(n))return new A(new D(i));var r=t.writeTree_.findRootMostValueAndPath(n);if(null==r)return s=new D(i),s=t.writeTree_.setTree(n,s),new A(s);{var s=r.path;let e=r.value;r=b(s,n);return e=e.updateChild(r,i),new A(t.writeTree_.set(s,e))}}function _n(e,n,t){let i=e;return y(t,(e,t)=>{i=dn(i,w(n,e),t)}),i}function pn(e,t){return T(t)?A.empty():(e=e.writeTree_.setTree(t,new D(null)),new A(e))}function fn(e,t){return null!=mn(e,t)}function mn(e,t){var n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(b(n.path,t)):null}function gn(e){const n=[],t=e.writeTree_.value;return null!=t?t.isLeafNode()||t.forEachChild(N,(e,t)=>{n.push(new k(e,t))}):e.writeTree_.children.inorderTraversal((e,t)=>{null!=t.value&&n.push(new k(e,t.value))}),n}function yn(e,t){var n;return T(t)?e:null!=(n=mn(e,t))?new A(new D(n)):new A(e.writeTree_.subtree(t))}function vn(e){return e.writeTree_.isEmpty()}function Cn(e,t){return function i(r,e,s){{if(null!=e.value)return s.updateChild(r,e.value);{let n=null;return e.children.inorderTraversal((e,t)=>{".priority"===e?((0,p.hu)(null!==t.value,"Priority writes must always be leaf nodes"),n=t.value):s=i(w(r,e),t,s)}),s=s.getChild(r).isEmpty()||null===n?s:s.updateChild(w(r,".priority"),n)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(m(),e.writeTree_,t)}function wn(e,t){return An(t,e)}function Tn(t,n){var e,i=t.allWrites.findIndex(e=>e.writeId===n);(0,p.hu)(0<=i,"removeWrite called with nonexistent writeId.");const r=t.allWrites[i];t.allWrites.splice(i,1);let s=r.visible,o=!1,a=t.allWrites.length-1;for(;s&&0<=a;){var l=t.allWrites[a];l.visible&&(a>=i&&function(e,t){{if(e.snap)return h(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&h(w(e.path,n),t))return 1}}(l,r.path)?s=!1:h(r.path,l.path)&&(o=!0)),a--}return!!s&&(o?((e=t).visibleWrites=In(e.allWrites,bn,m()),0<e.allWrites.length?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1):r.snap?t.visibleWrites=pn(t.visibleWrites,r.path):y(r.children,e=>{t.visibleWrites=pn(t.visibleWrites,w(r.path,e))}),!0)}function bn(e){return e.visible}function In(t,n,i){let r=A.empty();for(let e=0;e<t.length;++e){const o=t[e];if(n(o)){var s=o.path;let e;if(o.snap)h(i,s)?(e=b(i,s),r=dn(r,e,o.snap)):h(s,i)&&(e=b(s,i),r=dn(r,m(),o.snap.getChild(e)));else{if(!o.children)throw(0,p.g5)("WriteRecord should have .snap or .children");if(h(i,s))e=b(i,s),r=_n(r,e,o.children);else if(h(s,i))if(T(e=b(s,i)))r=_n(r,m(),o.children);else{const a=(0,p.DV)(o.children,g(e));a&&(s=a.getChild(C(e)),r=dn(r,m(),s))}}}}return r}function kn(e,t,n,i,r){var s;return i||r?(s=yn(e.visibleWrites,t),!r&&vn(s)?n:r||null!=n||fn(s,m())?Cn(In(e.allWrites,function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(h(e.path,t)||h(t,e.path))},t),n||x.EMPTY_NODE):null):null!=(s=mn(e.visibleWrites,t))?s:vn(s=yn(e.visibleWrites,t))?n:null!=n||fn(s,m())?Cn(s,n||x.EMPTY_NODE):null}function En(e,t,n,i){return kn(e.writeTree,e.treePath,t,n,i)}function Sn(e,t){{var i=e.writeTree;e=e.treePath;let n=x.EMPTY_NODE;const r=mn(i.visibleWrites,e);if(r)r.isLeafNode()||r.forEachChild(N,(e,t)=>{n=n.updateImmediateChild(e,t)});else if(t){const s=yn(i.visibleWrites,e);t.forEachChild(N,(e,t)=>{t=Cn(yn(s,new _(e)),t);n=n.updateImmediateChild(e,t)}),gn(s).forEach(e=>{n=n.updateImmediateChild(e.name,e.node)})}else gn(yn(i.visibleWrites,e)).forEach(e=>{n=n.updateImmediateChild(e.name,e.node)});return n}}function Pn(e,t,n,i){return r=e.writeTree,e=e.treePath,t=t,n=n,i=i,(0,p.hu)(n||i,"Either existingEventSnap or existingServerSnap must exist"),n=w(e,t),fn(r.visibleWrites,n)?null:vn(e=yn(r.visibleWrites,n))?i.getChild(t):Cn(e,i.getChild(t));var r}function Nn(e,t){return n=e.writeTree,e=w(e.treePath,t),mn(n.visibleWrites,e);var n}function xn(e,n,i,r,s,o){{var a=e.writeTree,l=(e=e.treePath,i),h=r;i=s,r=o;let t;if(a=yn(a.visibleWrites,e),null!=(e=mn(a,m())))t=e;else{if(null==n)return[];t=Cn(a,n)}if((t=t.withIndex(r)).isEmpty()||t.isLeafNode())return[];{const u=[],c=r.getCompare(),d=i?t.getReverseIteratorFrom(l,r):t.getIteratorFrom(l,r);let e=d.getNext();for(;e&&u.length<h;)0!==c(e,l)&&u.push(e),e=d.getNext();return u}}}function Rn(e,t,n){return i=e.writeTree,e=e.treePath,n=n,e=w(e,t=t),null!=(r=mn(i.visibleWrites,e))?r:n.isCompleteForChild(t)?Cn(yn(i.visibleWrites,e),n.getNode().getImmediateChild(t)):null;var i,r}function Dn(e,t){return An(w(e.treePath,t),e.writeTree)}function An(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.changeMap=new Map}trackChildChange(e){var t=e.type,n=e.childName,i=((0,p.hu)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,p.hu)(".priority"!==n,"Only non-priority child changes can be tracked."),this.changeMap.get(n));if(i){var r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,Rt(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,xt(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,Nt(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw(0,p.g5)("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Rt(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Mn{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;var n;return t.isCompleteForChild(e)?t.getNode().getImmediateChild(e):(n=null!=this.optCompleteServerCache_?new tn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache,Rn(this.writes_,e,n))}getChildAfterChild(e,t,n){var i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:un(this.viewCache_),i=xn(this.writes_,i,t,1,n,e);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(e,t,n,i,r){const s=new Fn;let o,a;if(n.type===c.OVERWRITE){var l=n;o=l.source.fromUser?Un(e,t,l.path,l.snap,i,r,s):((0,p.hu)(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!T(l.path),Wn(e,t,l.path,l.snap,i,r,a,s))}else if(n.type===c.MERGE){l=n;o=l.source.fromUser?function(n,i,r,e,s,o,a){let l=i;return e.foreach((e,t)=>{e=w(r,e);Bn(i,g(e))&&(l=Un(n,l,e,t,s,o,a))}),e.foreach((e,t)=>{e=w(r,e);Bn(i,g(e))||(l=Un(n,l,e,t,s,o,a))}),l}(e,t,l.path,l.children,i,r,s):((0,p.hu)(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),Hn(e,t,l.path,l.children,i,r,a,s))}else if(n.type===c.ACK_USER_WRITE){l=n;o=l.revert?function(n,i,r,s,o,a){let l;{if(null!=Nn(s,r))return i;{o=new Mn(s,i,o);const u=i.eventCache.getNode();let t;if(T(r)||".priority"===g(r)){let e;e=e=i.serverCache.isFullyInitialized()?En(s,un(i)):(h=i.serverCache.getNode(),(0,p.hu)(h instanceof x,"serverChildren would be complete if leaf node"),Sn(s,h)),t=n.filter.updateFullNode(u,e,a)}else{var h=g(r);let e=Rn(s,h,i.serverCache);null==e&&i.serverCache.isCompleteForChild(h)&&(e=u.getImmediateChild(h)),(t=null!=e?n.filter.updateChild(u,h,e,C(r),o,a):i.eventCache.getNode().hasChild(h)?n.filter.updateChild(u,h,x.EMPTY_NODE,C(r),o,a):u).isEmpty()&&i.serverCache.isFullyInitialized()&&(l=En(s,un(i))).isLeafNode()&&(t=n.filter.updateFullNode(t,l,a))}return l=i.serverCache.isFullyInitialized()||null!=Nn(s,m()),an(i,t,l,n.filter.filtersNodes())}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,l.path,i,r,s):function(e,t,r,n,s,o,a){if(null!=Nn(s,r))return t;const l=t.serverCache.isFiltered(),h=t.serverCache;{if(null!=n.value){if(T(r)&&h.isFullyInitialized()||h.isCompleteForPath(r))return Wn(e,t,r,h.getNode().getChild(r),s,o,l,a);if(T(r)){let n=new D(null);return h.getNode().forEachChild(E,(e,t)=>{n=n.set(new _(e),t)}),Hn(e,t,r,n,s,o,l,a)}return t}{let i=new D(null);return n.foreach((e,t)=>{var n=w(r,e);h.isCompleteForPath(n)&&(i=i.set(e,h.getNode().getChild(n)))}),Hn(e,t,r,i,s,o,l,a)}}}(e,t,l.path,l.affectedTree,i,r,s)}else{if(n.type!==c.LISTEN_COMPLETE)throw(0,p.g5)("Unknown operation type: "+n.type);o=function(e,t,n,i,r){const s=t.serverCache,o=ln(t,s.getNode(),s.isFullyInitialized()||T(n),s.isFiltered());return Ln(e,o,n,i,qn,r)}(e,t,n.path,i,s)}l=s.getChanges();{r=t,e=o,n=l;const h=e.eventCache;if(h.isFullyInitialized()){i=h.getNode().isLeafNode()||h.getNode().isEmpty();const u=hn(r);(0<n.length||!r.eventCache.isFullyInitialized()||i&&!h.getNode().equals(u)||!h.getNode().getPriority().equals(u.getPriority()))&&n.push(Pt(hn(e)))}}return{viewCache:o,changes:l}}function Ln(i,r,s,o,a,l){const h=r.eventCache;if(null!=Nn(o,s))return r;{let t,n;if(T(s))(0,p.hu)(r.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t=r.serverCache.isFiltered()?(u=Sn(o,(u=un(r))instanceof x?u:x.EMPTY_NODE),i.filter.updateFullNode(r.eventCache.getNode(),u,l)):(u=En(o,un(r)),i.filter.updateFullNode(r.eventCache.getNode(),u,l));else{var u=g(s);if(".priority"===u){(0,p.hu)(1===v(s),"Can't have a priority with additional path components");var c=h.getNode(),d=Pn(o,s,c,n=r.serverCache.getNode());t=null!=d?i.filter.updatePriority(c,d):h.getNode()}else{c=C(s);let e;e=h.isCompleteForChild(u)?(n=r.serverCache.getNode(),null!=(d=Pn(o,s,h.getNode(),n))?h.getNode().getImmediateChild(u).updateChild(c,d):h.getNode().getImmediateChild(u)):Rn(o,u,r.serverCache),t=null!=e?i.filter.updateChild(h.getNode(),u,e,c,a,l):h.getNode()}}return an(r,t,h.isFullyInitialized()||T(s),i.filter.filtersNodes())}}function Wn(e,t,n,i,r,s,o,a){const l=t.serverCache;let h;const u=o?e.filter:e.filter.getIndexedFilter();if(T(n))h=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){o=l.getNode().updateChild(n,i);h=u.updateFullNode(l.getNode(),o,null)}else{o=g(n);if(!l.isCompleteForPath(n)&&1<v(n))return t;var c=C(n);const d=l.getNode().getImmediateChild(o);i=d.updateChild(c,i);h=".priority"===o?u.updatePriority(l.getNode(),i):u.updateChild(l.getNode(),o,i,c,qn,null)}o=ln(t,h,l.isFullyInitialized()||T(n),u.filtersNodes());return Ln(e,o,n,r,new Mn(r,o,s),a)}function Un(t,n,i,r,s,o,a){const l=n.eventCache;let h,e;const u=new Mn(s,n,o);if(T(i))e=t.filter.updateFullNode(n.eventCache.getNode(),r,a),h=an(n,e,!0,t.filter.filtersNodes());else{s=g(i);if(".priority"===s)e=t.filter.updatePriority(n.eventCache.getNode(),r),h=an(n,e,l.isFullyInitialized(),l.isFiltered());else{o=C(i);const c=l.getNode().getImmediateChild(s);let e;if(T(o))e=r;else{const d=u.getCompleteChild(s);e=null!=d?".priority"===ze(o)&&d.getChild(je(o)).isEmpty()?d:d.updateChild(o,r):x.EMPTY_NODE}h=c.equals(e)?n:an(n,t.filter.updateChild(l.getNode(),s,e,o,u,a),l.isFullyInitialized(),t.filter.filtersNodes())}}return h}function Bn(e,t){return e.eventCache.isCompleteForChild(t)}function zn(e,n,t){return t.foreach((e,t)=>{n=n.updateChild(e,t)}),n}function Hn(i,r,e,t,s,o,a,l){if(r.serverCache.getNode().isEmpty()&&!r.serverCache.isFullyInitialized())return r;let h=r,n;n=T(e)?t:new D(null).setTree(e,t);const u=r.serverCache.getNode();return n.children.inorderTraversal((e,t)=>{u.hasChild(e)&&(t=zn(0,r.serverCache.getNode().getImmediateChild(e),t),h=Wn(i,h,new _(e),t,s,o,a,l))}),n.children.inorderTraversal((e,t)=>{var n=!r.serverCache.isCompleteForChild(e)&&null===t.value;u.hasChild(e)||n||(n=zn(0,r.serverCache.getNode().getImmediateChild(e),t),h=Wn(i,h,new _(e),n,s,o,a,l))}),h}class jn{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Dt(n.getIndex()),r=(e=n).loadsAllData()?new Dt(e.getIndex()):new(e.hasLimit()?Ft:At)(e);this.processor_={filter:r};const s=t.serverCache,o=t.eventCache;e=i.updateFullNode(x.EMPTY_NODE,s.getNode(),null),t=r.updateFullNode(x.EMPTY_NODE,o.getNode(),null),e=new tn(e,s.isFullyInitialized(),i.filtersNodes()),t=new tn(t,o.isFullyInitialized(),r.filtersNodes());this.viewCache_=on(t,e),this.eventGenerator_=new nn(this.query_)}get query(){return this.query_}}function Vn(e){return 0===e.eventRegistrations_.length}function Yn(n,i,t){const r=[];if(t){(0,p.hu)(null==i,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(e=>{e=e.createCancelEvent(t,s);e&&r.push(e)})}if(i){let t=[];for(let e=0;e<n.eventRegistrations_.length;++e){const o=n.eventRegistrations_[e];if(o.matches(i)){if(i.hasAnyCallback()){t=t.concat(n.eventRegistrations_.slice(e+1));break}}else t.push(o)}n.eventRegistrations_=t}else n.eventRegistrations_=[];return r}function Kn(e,t,n,i){t.type===c.MERGE&&null!==t.source.queryId&&((0,p.hu)(un(e.viewCache_),"We should always have a full cache before handling merges"),(0,p.hu)(hn(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=On(e.processor_,r,t,n,i);return t=e.processor_,n=s.viewCache,(0,p.hu)(n.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),(0,p.hu)(n.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed"),(0,p.hu)(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Qn(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Qn(e,t,n,i){i=i?[i]:e.eventRegistrations_;return rn(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gn;class $n{constructor(){this.views=new Map}}function Xn(t,n,i,r){var e=n.source.queryId;if(null!==e)return e=t.views.get(e),(0,p.hu)(null!=e,"SyncTree gave us an op for an invalid query."),Kn(e,n,i,r);{let e=[];for(const s of t.views.values())e=e.concat(Kn(s,n,i,r));return e}}function Jn(e,n,i,r,s){var o=n._queryIdentifier,e=e.views.get(o);if(e)return e;{let e=En(i,s?r:null),t=!1;t=!!e||(e=r instanceof x?Sn(i,r):x.EMPTY_NODE,!1);o=on(new tn(e,t,!1),new tn(r,s,!1));return new jn(n,o)}}function Zn(e,t,n,i,r,s){i=Jn(e,t,i,r,s);e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,i),i.eventRegistrations_.push(n);{s=n;const o=(r=i).viewCache_.eventCache,a=[];if(!o.getNode().isLeafNode()){const l=o.getNode();l.forEachChild(N,(e,t)=>{a.push(Nt(e,t))})}return o.isFullyInitialized()&&a.push(Pt(o.getNode())),Qn(r,a,o.getNode(),s)}}function ei(e,t,n,i){var r=t._queryIdentifier;const s=[];let o=[];var a=si(e);if("default"===r)for(var[l,h]of e.views.entries())o=o.concat(Yn(h,n,i)),Vn(h)&&(e.views.delete(l),h.query._queryParams.loadsAllData()||s.push(h.query));else{const u=e.views.get(r);u&&(o=o.concat(Yn(u,n,i)),Vn(u)&&(e.views.delete(r),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!si(e)&&s.push(((0,p.hu)(Gn,"Reference.ts has not been loaded"),new Gn(t._repo,t._path))),{removed:s,events:o}}function ti(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function ni(e,t){let n=null;for(const i of e.views.values())n=n||function(e,t){const n=un(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!T(t)&&!n.getImmediateChild(g(t)).isEmpty())?n.getChild(t):null}(i,t);return n}function ii(e,t){const n=t._queryParams;return n.loadsAllData()?oi(e):(t=t._queryIdentifier,e.views.get(t))}function ri(e,t){return null!=ii(e,t)}function si(e){return null!=oi(e)}function oi(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ai;let li=1;class hi{constructor(e){this.listenProvider_=e,this.syncPointTree_=new D(null),this.pendingWriteTree_={visibleWrites:A.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ui(e,t,n,i,r){var s,o,a,l;return s=e.pendingWriteTree_,o=t,a=n,i=i,l=r,(0,p.hu)(i>s.lastWriteId,"Stacking an older write on top of newer ones"),s.allWrites.push({path:o,snap:a,writeId:i,visible:l=void 0===l?!0:l}),l&&(s.visibleWrites=dn(s.visibleWrites,o,a)),s.lastWriteId=i,r?gi(e,new Zt(Qt(),t,n)):[]}function ci(e,t,n=!1){var i=function(t,n){for(let e=0;e<t.allWrites.length;e++){var i=t.allWrites[e];if(i.writeId===n)return i}return null}(e.pendingWriteTree_,t);if(Tn(e.pendingWriteTree_,t)){let t=new D(null);return null!=i.snap?t=t.set(m(),!0):y(i.children,e=>{t=t.set(new _(e),!0)}),gi(e,new Xt(i.path,t,n))}return[]}function di(e,t,n){return gi(e,new Zt(Gt(),t,n))}function _i(n,e,t,i,r=!1){var s=e._path,o=n.syncPointTree_.get(s);let a=[];if(o&&("default"===e._queryIdentifier||ri(o,e))){var l,h,t=ei(o,e,t,i);0===o.views.size&&(n.syncPointTree_=n.syncPointTree_.remove(s));const f=t.removed;if(a=t.events,!r){o=-1!==f.findIndex(e=>e._queryParams.loadsAllData()),t=n.syncPointTree_.findOnPath(s,(e,t)=>si(t));if(o&&!t){const m=n.syncPointTree_.subtree(s);if(!m.isEmpty()){var u=m.fold((e,t,i)=>{if(t&&si(t))return[oi(t)];{let n=[];return t&&(n=ti(t)),y(i,(e,t)=>{n=n.concat(t)}),n}});for(let e=0;e<u.length;++e){var c=u[e],d=c.query,c=vi(n,c);n.listenProvider_.startListening(ki(d),Ci(n,d),c.hashFn,c.onComplete)}}}!t&&0<f.length&&!i&&(o?n.listenProvider_.stopListening(ki(e),null):f.forEach(e=>{var t=n.queryToTagMap.get(wi(e));n.listenProvider_.stopListening(ki(e),t)}))}var _=n,p=f;for(let e=0;e<p.length;++e){const g=p[e];g._queryParams.loadsAllData()||(l=wi(g),h=_.queryToTagMap.get(l),_.queryToTagMap.delete(l),_.tagToQueryMap.delete(h))}}return a}function pi(e,t,n,i){var r,i=Ti(e,i);return null!=i?(r=(i=bi(i)).path,i=i.queryId,t=b(r,t),Ii(e,r,new Zt($t(i),t,n))):[]}function fi(e,t,n,i=!1){const r=t._path;let s=null,o=!1,a=(e.syncPointTree_.foreachOnPath(r,(e,t)=>{e=b(e,r);s=s||ni(t,e),o=o||si(t)}),e.syncPointTree_.get(r));a?(o=o||si(a),s=s||ni(a,m())):(a=new $n,e.syncPointTree_=e.syncPointTree_.set(r,a));let l;if(null!=s)l=!0;else{l=!1,s=x.EMPTY_NODE;const _=e.syncPointTree_.subtree(r);_.foreachChild((e,t)=>{t=ni(t,m());t&&(s=s.updateImmediateChild(e,t))})}var h,u=ri(a,t),c=(u||t._queryParams.loadsAllData()||(h=wi(t),(0,p.hu)(!e.queryToTagMap.has(h),"View does not exist, but we have a tag"),c=li++,e.queryToTagMap.set(h,c),e.tagToQueryMap.set(c,h)),wn(e.pendingWriteTree_,r));let d=Zn(a,t,n,c,s,l);return u||o||i||(h=ii(a,t),d=d.concat(function(t,e,n){const i=e._path,r=Ci(t,e),s=vi(t,n),o=t.listenProvider_.startListening(ki(e),r,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(i);if(r)(0,p.hu)(!si(a.value),"If we're adding a query, it shouldn't be shadowed");else{var l=a.fold((e,t,i)=>{if(!T(e)&&t&&si(t))return[oi(t).query];{let n=[];return t&&(n=n.concat(ti(t).map(e=>e.query))),y(i,(e,t)=>{n=n.concat(t)}),n}});for(let e=0;e<l.length;++e){var h=l[e];t.listenProvider_.stopListening(ki(h),Ci(t,h))}}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,h))),d}function mi(e,n,t){var i=e.pendingWriteTree_,e=e.syncPointTree_.findOnPath(n,(e,t)=>{t=ni(t,b(e,n));if(t)return t});return kn(i,n,e,t,!0)}function gi(e,t){return function t(n,i,r,s){{if(T(n.path))return yi(n,i,r,s);{const o=i.get(m());null==r&&null!=o&&(r=ni(o,m()));let e=[];const a=g(n.path),l=n.operationForChild(a),h=i.children.get(a);if(h&&l){const u=r?r.getImmediateChild(a):null,c=Dn(s,a);e=e.concat(t(l,h,u,c))}return e=o?e.concat(Xn(o,n,s,r)):e}}}(t,e.syncPointTree_,null,wn(e.pendingWriteTree_,m()))}function yi(r,e,s,o){var t=e.get(m());null==s&&null!=t&&(s=ni(t,m()));let a=[];return e.children.inorderTraversal((e,t)=>{var n=s?s.getImmediateChild(e):null,i=Dn(o,e),e=r.operationForChild(e);e&&(a=a.concat(yi(e,t,n,i)))}),a=t?a.concat(Xn(t,r,o,s)):a}function vi(s,t){const o=t.query,a=Ci(s,o);return{hashFn:()=>{const e=t.viewCache_.serverCache.getNode()||x.EMPTY_NODE;return e.hash()},onComplete:e=>{var t,n,i,r;return"ok"===e?a?(t=s,n=o._path,i=a,(i=Ti(t,i))?(r=(i=bi(i)).path,i=i.queryId,n=b(r,n),Ii(t,r,new Jt($t(i),n))):[]):(t=s,r=o._path,gi(t,new Jt(Gt(),r))):(i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(e,o),_i(s,o,null,i))}}}function Ci(e,t){t=wi(t);return e.queryToTagMap.get(t)}function wi(e){return e._path.toString()+"$"+e._queryIdentifier}function Ti(e,t){return e.tagToQueryMap.get(t)}function bi(e){var t=e.indexOf("$");return(0,p.hu)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new _(e.substr(0,t))}}function Ii(e,t,n){var i=e.syncPointTree_.get(t),e=((0,p.hu)(i,"Missing sync point for query tag that we're tracking"),wn(e.pendingWriteTree_,t));return Xn(i,n,e,null)}function ki(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?((0,p.hu)(ai,"Reference.ts has not been loaded"),new ai(e._repo,e._path)):e}class Ei{constructor(e){this.node_=e}getImmediateChild(e){e=this.node_.getImmediateChild(e);return new Ei(e)}node(){return this.node_}}class Si{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){e=w(this.path_,e);return new Si(this.syncTree_,e)}node(){return mi(this.syncTree_,this.path_)}}function Pi(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e}function Ni(e,t,n){return e&&"object"==typeof e?((0,p.hu)(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?xi(e[".sv"],t,n):"object"==typeof e[".sv"]?Ri(e[".sv"],t):void(0,p.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e}const xi=function(e,t,n){if("timestamp"===e)return n.timestamp;(0,p.hu)(!1,"Unexpected server value: "+e)},Ri=function(e,t,n){e.hasOwnProperty("increment")||(0,p.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));e=e.increment;"number"!=typeof e&&(0,p.hu)(!1,"Unexpected increment value: "+e);const i=t.node();if((0,p.hu)(null!==i&&void 0!==i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return e;const r=i;t=r.getValue();return"number"!=typeof t?e:t+e},Di=function(e,t,n,i){return Fi(t,new Si(n,e),i)},Ai=function(e,t,n){return Fi(e,new Ei(t),n)};function Fi(e,i,r){var t=e.getPriority().val(),t=Ni(t,i.getImmediateChild(".priority"),r);let s;if(e.isLeafNode()){const o=e;var n=Ni(o.getValue(),i,r);return n!==o.getValue()||t!==o.getPriority().val()?new l(n,R(t)):e}{const a=e;return t!==(s=a).getPriority().val()&&(s=s.updatePriority(new l(t))),a.forEachChild(N,(e,t)=>{var n=Fi(t,i.getImmediateChild(e),r);n!==t&&(s=s.updateImmediateChild(e,n))}),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Mi(e,t){let n=t instanceof _?t:new _(t),i=e,r=g(n);for(;null!==r;){var s=(0,p.DV)(i.node.children,r)||{children:{},childCount:0};i=new qi(r,i,s),n=C(n),r=g(n)}return i}function Oi(e){return e.node.value}function Li(e,t){e.node.value=t,zi(e)}function Wi(e){return 0<e.node.childCount}function Ui(n,i){y(n.node.children,(e,t)=>{i(new qi(e,n,t))})}function Bi(e){return new _(null===e.parent?e.name:Bi(e.parent)+"/"+e.name)}function zi(e){var t,n,i,r;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */null!==e.parent&&(t=e.parent,n=e.name,i=function(e){return void 0===Oi(e)&&!Wi(e)}(e=e),r=(0,p.r3)(t.node.children,n),i&&r?(delete t.node.children[n],t.node.childCount--,zi(t)):i||r||(t.node.children[n]=e.node,t.node.childCount++,zi(t)))}const Hi=/[\[\].#$\/\u0000-\u001F\u007F]/,ji=/[\[\].#$\u0000-\u001F\u007F]/,Vi=10485760,Yi=function(e){return"string"==typeof e&&0!==e.length&&!Hi.test(e)},Ki=function(e){return"string"==typeof e&&0!==e.length&&!ji.test(e)},Qi=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!he(e)||e&&"object"==typeof e&&(0,p.r3)(e,".sv")},F=function(e,t,n,i){i&&void 0===t||Gi((0,p.gK)(e,"value"),t,n)},Gi=function(s,e,t){const o=t instanceof _?new Ke(t,s):t;if(void 0===e)throw new Error(s+"contains undefined "+Ge(o));if("function"==typeof e)throw new Error(s+"contains a function "+Ge(o)+" with contents = "+e.toString());if(he(e))throw new Error(s+"contains "+e.toString()+" "+Ge(o));if("string"==typeof e&&e.length>Vi/3&&(0,p.ug)(e)>Vi)throw new Error(s+"contains a string greater than "+Vi+" utf8 bytes "+Ge(o)+" ('"+e.substring(0,50)+"...')");if(e&&"object"==typeof e){let i=!1,r=!1;if(y(e,(e,t)=>{if(".value"===e)i=!0;else if(".priority"!==e&&".sv"!==e&&(r=!0,!Yi(e)))throw new Error(s+" contains an invalid key ("+e+") "+Ge(o)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var n;n=o,e=e,0<n.parts_.length&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=(0,p.ug)(e),Qe(n),Gi(s,t,o),e=o,n=e.parts_.pop(),e.byteLength_-=(0,p.ug)(n),0<e.parts_.length&&--e.byteLength_}),i&&r)throw new Error(s+' contains ".value" child '+Ge(o)+" in addition to actual children.")}},$i=function(e,t,i,n){if(!n||void 0!==t){const a=(0,p.gK)(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(a+" must be an object containing the children to replace.");const l=[];y(t,(e,t)=>{const n=new _(e);if(Gi(a,t,w(i,n)),".priority"===ze(n)&&!Qi(t))throw new Error(a+"contains an invalid value for '"+n.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(n)});{var r=a;var s=l;let e,t;for(e=0;e<s.length;e++){var o=He(t=s[e]);for(let e=0;e<o.length;e++)if((".priority"!==o[e]||e!==o.length-1)&&!Yi(o[e]))throw new Error(r+"contains an invalid key ("+o[e]+") in path "+t.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}s.sort(Ve);let n=null;for(e=0;e<s.length;e++){if(t=s[e],null!==n&&h(n,t))throw new Error(r+"contains a path "+n.toString()+" that is ancestor of another path "+t.toString());n=t}}}},Xi=function(e,t,n){if(!n||void 0!==t){if(he(t))throw new Error((0,p.gK)(e,"priority")+"is "+t.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Qi(t))throw new Error((0,p.gK)(e,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},Ji=function(e,t,n,i){if(!(i&&void 0===n||Yi(n)))throw new Error((0,p.gK)(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},Zi=function(e,t,n,i){if(!(i&&void 0===n||Ki(n)))throw new Error((0,p.gK)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},er=function(e,t,n,i){n=n&&n.replace(/^\/*\.info(\/|$)/,"/"),Zi(e,t,n,i)},q=function(e,t){if(".info"===g(t))throw new Error(e+" failed = Can't modify data under /.info/")},tr=function(e,t){var n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Yi(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&(t=(t=n)&&t.replace(/^\/*\.info(\/|$)/,"/"),!Ki(t)))throw new Error((0,p.gK)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nr{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ir(t,n){let i=null;for(let e=0;e<n.length;e++){const s=n[e];var r=s.getPath();null===i||Ye(r,i.path)||(t.eventLists_.push(i),i=null),(i=null===i?{events:[],path:r}:i).events.push(s)}i&&t.eventLists_.push(i)}function rr(e,t,n){ir(e,n),sr(e,e=>Ye(e,t))}function M(e,t,n){ir(e,n),sr(e,e=>h(e,t)||h(t,e))}function sr(t,n){t.recursionDepth_++;let i=!0;for(let e=0;e<t.eventLists_.length;e++){var r=t.eventLists_[e];if(r)if(n(r.path)){s=o=void 0;var s,o=t.eventLists_[e];for(let e=0;e<o.events.length;e++){const a=o.events[e];null!==a&&(o.events[e]=null,s=a.getEventRunner(),ee&&d("event: "+a.toString()),ge(s))}t.eventLists_[e]=null}else i=!1}i&&(t.eventLists_=[]),t.recursionDepth_--}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const or="repo_interrupt",ar=25;class lr{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nr,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ht(),this.transactionQueueTree_=new qi,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hr(o,e,t){if(o.stats_=xe(o.repoInfo_),o.forceRestClient_||function(){const e="object"==typeof window&&window.navigator&&window.navigator.userAgent||"";return 0<=e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)}())o.server_=new Bt(o.repoInfo_,(e,t,n,i)=>{dr(o,e,t,n,i)},o.authTokenProvider_,o.appCheckProvider_),setTimeout(()=>_r(o,!0),0);else{if(null!=t){if("object"!=typeof t)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,p.Pz)(t)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}o.persistentConnection_=new I(o.repoInfo_,e,(e,t,n,i)=>{dr(o,e,t,n,i)},e=>{_r(o,e)},e=>{var n;n=o,y(e,(e,t)=>{pr(n,e,t)})},o.authTokenProvider_,o.appCheckProvider_,t),o.server_=o.persistentConnection_}o.authTokenProvider_.addTokenChangeListener(e=>{o.server_.refreshAuthToken(e)}),o.appCheckProvider_.addTokenChangeListener(e=>{o.server_.refreshAppCheckToken(e.token)}),o.statsReporter_=(e=o.repoInfo_,t=()=>new Kt(o.stats_,o.server_),e=e.toString(),Ne[e]||(Ne[e]=t()),Ne[e]),o.infoData_=new zt,o.infoSyncTree_=new hi({startListening:(e,t,n,i)=>{let r=[];const s=o.infoData_.getNode(e._path);return s.isEmpty()||(r=di(o.infoSyncTree_,e._path,s),setTimeout(()=>{i("ok")},0)),r},stopListening:()=>{}}),pr(o,"connected",!1),o.serverSyncTree_=new hi({startListening:(n,e,t,i)=>(o.server_.listen(n,t,e,(e,t)=>{e=i(e,t);M(o.eventQueue_,n._path,e)}),[]),stopListening:(e,t)=>{o.server_.unlisten(e,t)}})}function ur(e){const t=e.infoData_.getNode(new _(".info/serverTimeOffset"));e=t.val()||0;return(new Date).getTime()+e}function cr(e){return Pi({timestamp:ur(e)})}function dr(e,t,n,i,r){e.dataUpdateCount++;var s,o,a,l,h=new _(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let u=[],c=h;0<(u=r?i?(t=(0,p.UI)(n,e=>R(e)),s=e.serverSyncTree_,o=h,t=t,(a=Ti(s,a=r))?(l=(a=bi(a)).path,a=a.queryId,o=b(l,o),t=D.fromObject(t),Ii(s,l,new en($t(a),o,t))):[]):(s=R(n),pi(e.serverSyncTree_,h,s,r)):i?(l=(0,p.UI)(n,e=>R(e)),a=e.serverSyncTree_,o=h,t=l,t=D.fromObject(t),gi(a,new en(Gt(),o,t))):(r=R(n),di(e.serverSyncTree_,h,r))).length&&(c=kr(e,h)),M(e.eventQueue_,c,u)}function _r(e,t){if(pr(e,"connected",t),!1===t){var i=e;wr(i,"onDisconnectEvents");const r=cr(i),s=Ht();Vt(i.onDisconnect_,m(),(e,t)=>{t=Di(e,t,i.serverSyncTree_,r);jt(s,e,t)});let n=[];Vt(s,m(),(e,t)=>{n=n.concat(di(i.serverSyncTree_,e,t));t=Nr(i,e);kr(i,t)}),i.onDisconnect_=Ht(),M(i.eventQueue_,m(),n)}}function pr(e,t,n){t=new _("/.info/"+t),n=R(n),e.infoData_.updateSnapshot(t,n),n=di(e.infoSyncTree_,t,n);M(e.eventQueue_,t,n)}function fr(e){return e.nextWriteId_++}function mr(i,r,e,t,s){wr(i,"set",{path:r.toString(),value:e,priority:t});var n=cr(i);const o=R(e,t);e=mi(i.serverSyncTree_,r),t=Ai(o,e,n);const a=fr(i);e=ui(i.serverSyncTree_,r,t,a,!0),ir(i.eventQueue_,e),i.server_.put(r.toString(),o.val(!0),(e,t)=>{var n="ok"===e,n=(n||f("set at "+r+" failed: "+e),ci(i.serverSyncTree_,a,!n));M(i.eventQueue_,r,n),Tr(0,s,e,t)}),n=Nr(i,r);kr(i,n),M(i.eventQueue_,n,[])}function gr(n,i,r){n.server_.onDisconnectCancel(i.toString(),(e,t)=>{"ok"===e&&!function e(n,t){if(T(t))return n.value=null,n.children.clear(),!0;var i;if(null===n.value)return!(0<n.children.size)||(i=g(t),t=C(t),n.children.has(i)&&e(n.children.get(i),t)&&n.children.delete(i),0===n.children.size);if(n.value.isLeafNode())return!1;{const r=n.value;return n.value=null,r.forEachChild(N,(e,t)=>{jt(n,new _(e),t)}),e(n,t)}}(n.onDisconnect_,i),Tr(0,r,e,t)})}function yr(n,i,e,r){const s=R(e);n.server_.onDisconnectPut(i.toString(),s.val(!0),(e,t)=>{"ok"===e&&jt(n.onDisconnect_,i,s),Tr(0,r,e,t)})}function vr(e,t,n){let i;i=".info"===g(t._path)?_i(e.infoSyncTree_,t,n):_i(e.serverSyncTree_,t,n),rr(e.eventQueue_,t._path,i)}function Cr(e){e.persistentConnection_&&e.persistentConnection_.interrupt(or)}function wr(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),d(n,...t)}function Tr(e,i,r,s){i&&ge(()=>{if("ok"===r)i(null);else{var t=(r||"error").toUpperCase();let e=t;s&&(e+=": "+s);const n=new Error(e);n.code=t,i(n)}})}function br(e,t,n){return mi(e.serverSyncTree_,t,n)||x.EMPTY_NODE}function Ir(n,e=n.transactionQueueTree_){if(e||Pr(n,e),Oi(e)){const l=Sr(n,e);if((0,p.hu)(0<l.length,"Sending zero length transaction queue"),l.every(e=>0===e.status)){var r=n;var s=Bi(e);var o=l;const h=o.map(e=>e.currentWriteId),u=br(r,s,h);let t=u;var i=u.hash();for(let e=0;e<o.length;e++){const _=o[e];(0,p.hu)(0===_.status,"tryToSendTransactionQueue_: items in queue should all be run."),_.status=1,_.retryCount++;var a=b(s,_.path);t=t.updateChild(a,_.currentOutputSnapshotRaw)}const c=t.val(!0),d=s;r.server_.put(d.toString(),c,t=>{wr(r,"transaction put response",{path:d.toString(),status:t});let n=[];if("ok"===t){const i=[];for(let e=0;e<o.length;e++)o[e].status=2,n=n.concat(ci(r.serverSyncTree_,o[e].currentWriteId)),o[e].onComplete&&i.push(()=>o[e].onComplete(null,!0,o[e].currentOutputSnapshotResolved)),o[e].unwatcher();Pr(r,Mi(r.transactionQueueTree_,s)),Ir(r,r.transactionQueueTree_),M(r.eventQueue_,s,n);for(let e=0;e<i.length;e++)ge(i[e])}else{if("datastale"===t)for(let e=0;e<o.length;e++)3===o[e].status?o[e].status=4:o[e].status=0;else{f("transaction at "+d.toString()+" failed: "+t);for(let e=0;e<o.length;e++)o[e].status=4,o[e].abortReason=t}kr(r,s)}},i)}}else Wi(e)&&Ui(e,e=>{Ir(n,e)})}function kr(e,t){var t=Er(e,t),n=Bi(t),t=Sr(e,t),r=e,s=t,o=n;if(0!==s.length){const h=[];let i=[];const u=s.filter(e=>0===e.status),c=u.map(e=>e.currentWriteId);for(let n=0;n<s.length;n++){const d=s[n];var a=b(o,d.path);let e=!1,t;if((0,p.hu)(null!==a,"rerunTransactionsUnderNode_: relativePath should not be null."),4===d.status)e=!0,t=d.abortReason,i=i.concat(ci(r.serverSyncTree_,d.currentWriteId,!0));else if(0===d.status)if(d.retryCount>=ar)e=!0,t="maxretry",i=i.concat(ci(r.serverSyncTree_,d.currentWriteId,!0));else{const _=br(r,d.path,c);d.currentInputSnapshot=_;a=s[n].update(_.val());if(void 0!==a){Gi("transaction failed: Data returned ",a,d.path);let e=R(a);"object"==typeof a&&null!=a&&(0,p.r3)(a,".priority")||(e=e.updatePriority(_.getPriority()));var a=d.currentWriteId,l=cr(r),l=Ai(e,_,l);d.currentOutputSnapshotRaw=e,d.currentOutputSnapshotResolved=l,d.currentWriteId=fr(r),c.splice(c.indexOf(a),1),i=(i=i.concat(ui(r.serverSyncTree_,d.path,l,d.currentWriteId,d.applyLocally))).concat(ci(r.serverSyncTree_,a,!0))}else e=!0,t="nodata",i=i.concat(ci(r.serverSyncTree_,d.currentWriteId,!0))}M(r.eventQueue_,o,i),i=[],e&&(s[n].status=2,function(e){setTimeout(e,Math.floor(0))}(s[n].unwatcher),s[n].onComplete&&("nodata"===t?h.push(()=>s[n].onComplete(null,!1,s[n].currentInputSnapshot)):h.push(()=>s[n].onComplete(new Error(t),!1,null))))}Pr(r,r.transactionQueueTree_);for(let e=0;e<h.length;e++)ge(h[e]);Ir(r,r.transactionQueueTree_)}return n}function Er(e,t){let n,i=e.transactionQueueTree_;for(n=g(t);null!==n&&void 0===Oi(i);)i=Mi(i,n),t=C(t),n=g(t);return i}function Sr(e,t){const n=[];return function t(n,e,i){const r=Oi(e);if(r)for(let e=0;e<r.length;e++)i.push(r[e]);Ui(e,e=>{t(n,e,i)})}(e,t,n),n.sort((e,t)=>e.order-t.order),n}function Pr(t,e){const n=Oi(e);if(n){let t=0;for(let e=0;e<n.length;e++)2!==n[e].status&&(n[t]=n[e],t++);n.length=t,Li(e,0<n.length?n:void 0)}Ui(e,e=>{Pr(t,e)})}function Nr(t,e){var n=Bi(Er(t,e)),e=Mi(t.transactionQueueTree_,e);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return;i=i.parent}}(e,e=>{xr(t,e)}),xr(t,e),function t(e,n,i,r){i&&!r&&n(e),Ui(e,e=>{t(e,n,!0,r)}),i&&r&&n(e)}(e,e=>{xr(t,e)}),n}function xr(i,e){const r=Oi(e);if(r){const s=[];let t=[],n=-1;for(let e=0;e<r.length;e++)3!==r[e].status&&(1===r[e].status?((0,p.hu)(n===e-1,"All SENT items should be at beginning of queue."),n=e,r[e].status=3,r[e].abortReason="set"):((0,p.hu)(0===r[e].status,"Unexpected transaction status in abort"),r[e].unwatcher(),t=t.concat(ci(i.serverSyncTree_,r[e].currentWriteId,!0)),r[e].onComplete&&s.push(r[e].onComplete.bind(null,new Error("set"),!1,null))));-1===n?Li(e,void 0):r.length=n+1,M(i.eventQueue_,Bi(e),t);for(let e=0;e<s.length;e++)ge(s[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=function(e,t){var e=Dr(e),n=e.namespace,i=("firebase.com"===e.domain&&u(e.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),n&&"undefined"!==n||"localhost"===e.domain||u("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),e.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&f("Insecure Firebase access from a secure page. Please use https in calls to new Firebase()."),"ws"===e.scheme||"wss"===e.scheme);return{repoInfo:new ke(e.host,e.secure,n,i,t,"",n!==e.subdomain),path:new _(e.pathString)}},Dr=function(i){let r="",s="",o="",a="",l="",h=!0,u="https",c=443;if("string"==typeof i){let e=i.indexOf("//"),t=(0<=e&&(u=i.substring(0,e-1),i=i.substring(e+2)),i.indexOf("/")),n=(-1===t&&(t=i.length),i.indexOf("?"));-1===n&&(n=i.length),r=i.substring(0,Math.min(t,n)),t<n&&(a=function(e){let n="";var i=e.split("/");for(let t=0;t<i.length;t++)if(0<i[t].length){let e=i[t];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(e){}n+="/"+e}return n}(i.substring(t,n)));var d,i=function(e){const t={};for(const i of(e="?"===e.charAt(0)?e.substring(1):e).split("&")){var n;0!==i.length&&(2===(n=i.split("=")).length?t[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):f(`Invalid query segment '${i}' in query '${e}'`))}return t}(i.substring(Math.min(i.length,n)));0<=(e=r.indexOf(":"))?(h="https"===u||"wss"===u,c=parseInt(r.substring(e+1),10)):e=r.length;const _=r.slice(0,e);"localhost"===_.toLowerCase()?s="localhost":_.split(".").length<=2?s=_:(d=r.indexOf("."),o=r.substring(0,d).toLowerCase(),s=r.substring(d+1),l=o),"ns"in i&&(l=i.ns)}return{host:r,port:c,domain:s,subdomain:o,secure:h,scheme:u,pathString:a,namespace:l}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ar{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){var e=this.snapshot.ref;return("value"===this.eventType?e:e.parent)._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,p.Pz)(this.snapshot.exportVal())}}class Fr{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,p.hu)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new p.BH;return gr(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){q("OnDisconnect.remove",this._path);const e=new p.BH;return yr(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){q("OnDisconnect.set",this._path),F("OnDisconnect.set",e,this._path,!1);const t=new p.BH;return yr(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){q("OnDisconnect.setWithPriority",this._path),F("OnDisconnect.setWithPriority",e,this._path,!1),Xi("OnDisconnect.setWithPriority",t,!1);const n=new p.BH;{var i=this._repo,r=this._path,s=n.wrapCallback(()=>{});const o=R(e,t);i.server_.onDisconnectPut(r.toString(),o.val(!0),(e,t)=>{"ok"===e&&jt(i.onDisconnect_,r,o),Tr(0,s,e,t)})}return n.promise}update(e){q("OnDisconnect.update",this._path),$i("OnDisconnect.update",e,this._path,!1);const t=new p.BH;var n,i,r,s;return n=this._repo,i=this._path,r=e,s=t.wrapCallback(()=>{}),(0,p.xb)(r)?(d("onDisconnect().update() called with empty data.  Don't do anything."),Tr(0,s,"ok",void 0)):n.server_.onDisconnectMerge(i.toString(),r,(e,t)=>{"ok"===e&&y(r,(e,t)=>{t=R(t);jt(n.onDisconnect_,w(i,e),t)}),Tr(0,s,e,t)}),t.promise}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return T(this._path)?null:ze(this._path)}get ref(){return new O(this._repo,this._path)}get _queryIdentifier(){var e=Ut(this._queryParams),e=oe(e);return"{}"===e?"default":e}get _queryObject(){return Ut(this._queryParams)}isEqual(e){var t,n;return(e=(0,p.m9)(e))instanceof i&&(t=this._repo===e._repo,n=Ye(this._path,e._path),e=this._queryIdentifier===e._queryIdentifier,t&&n&&e)}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(t){let n="";for(let e=t.pieceNum_;e<t.pieces_.length;e++)""!==t.pieces_[e]&&(n+="/"+encodeURIComponent(String(t.pieces_[e])));return n||"/"}(this._path)}}function Or(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}function Lr(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===E){var i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",r="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){if(e.getIndexStartName()!==s)throw new Error(i);if("string"!=typeof t)throw new Error(r)}if(e.hasEnd()){if(e.getIndexEndName()!==o)throw new Error(i);if("string"!=typeof n)throw new Error(r)}}else if(e.getIndex()===N){if(null!=t&&!Qi(t)||null!=n&&!Qi(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if((0,p.hu)(e.getIndex()instanceof vt||e.getIndex()===Tt,"unknown index type."),null!=t&&"object"==typeof t||null!=n&&"object"==typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Wr(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class O extends i{constructor(e,t){super(e,t,new qt,!1)}get parent(){var e=je(this._path);return null===e?null:new O(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Ur{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){var t=new _(e),e=zr(this.ref,e);return new Ur(this._node.getChild(t),e,N)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(n){if(this._node.isLeafNode())return!1;const e=this._node;return!!e.forEachChild(this._index,(e,t)=>n(new Ur(t,zr(this.ref,e),N)))}hasChild(e){e=new _(e);return!this._node.getChild(e).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Br(e,t){return(e=(0,p.m9)(e))._checkNotDeleted("ref"),void 0!==t?zr(e._root,t):e._root}function zr(e,t){return(null===g((e=(0,p.m9)(e))._path)?er:Zi)("child","path",t,!1),new O(e._repo,w(e._path,t))}function Hr(e,t){e=(0,p.m9)(e),q("set",e._path),F("set",t,e._path,!1);const n=new p.BH;return mr(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}class jr{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){var n=t._queryParams.getIndex();return new Ar("value",this,new Ur(e.snapshotNode,new O(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Fr(this,e,t):null}matches(e){return e instanceof jr&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Vr{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Fr(this,e,t):null}createEvent(e,t){(0,p.hu)(null!=e.childName,"Child events should have a childName.");var n=zr(new O(t._repo,t._path),e.childName),t=t._queryParams.getIndex();return new Ar(e.type,this,new Ur(e.snapshotNode,n,t),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Vr&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Yr(n,t,i,r,e){let s;if("object"==typeof r&&(s=void 0,e=r),"function"==typeof r&&(s=r),e&&e.onlyOnce){const a=i;r=(e,t)=>{vr(n._repo,n,o),a(e,t)};r.userCallback=i.userCallback,r.context=i.context,i=r}e=new qr(i,s||void 0);const o="value"===t?new jr(e):new Vr(t,e);{r=n._repo,i=n,t=o;let e;e=".info"===g(i._path)?fi(r.infoSyncTree_,i,t):fi(r.serverSyncTree_,i,t),rr(r.eventQueue_,i._path,e)}return()=>vr(n._repo,n,o)}function Kr(e,t,n,i){return Yr(e,"value",t,n,i)}class t{}class Qr extends t{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){F("endAt",this._value,e._path,!0);var t=Ot(e._queryParams,this._value,this._key);if(Wr(t),Lr(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new i(e._repo,e._path,t,e._orderByCalled)}}class Gr extends t{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){F("endBefore",this._value,e._path,!1);var t=function(e,t,n){let i,r;return(r=e.index_===E?Ot(e,t="string"==typeof t?wt(t):t,n):Ot(e,t,i=null==n?s:wt(n))).endBeforeSet_=!0,r}(e._queryParams,this._value,this._key);if(Wr(t),Lr(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new i(e._repo,e._path,t,e._orderByCalled)}}class $r extends t{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){F("startAt",this._value,e._path,!0);var t=Mt(e._queryParams,this._value,this._key);if(Wr(t),Lr(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new i(e._repo,e._path,t,e._orderByCalled)}}class Xr extends t{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){F("startAfter",this._value,e._path,!1);var t=function(t,n,i){let r;if(t.index_===E)"string"==typeof n&&(n=Ct(n)),r=Mt(t,n,i);else{let e;e=null==i?o:Ct(i),r=Mt(t,n,e)}return r.startAfterSet_=!0,r}(e._queryParams,this._value,this._key);if(Wr(t),Lr(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new i(e._repo,e._path,t,e._orderByCalled)}}class Jr extends t{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new i(e._repo,e._path,function(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}(e._queryParams,this._limit),e._orderByCalled)}}class Zr extends t{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new i(e._repo,e._path,function(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="r",n}(e._queryParams,this._limit),e._orderByCalled)}}class es extends t{constructor(e){super(),this._path=e}_apply(e){Or(e,"orderByChild");var t=new _(this._path);if(T(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");t=new vt(t),t=Lt(e._queryParams,t);return Lr(t),new i(e._repo,e._path,t,!0)}}class ts extends t{_apply(e){Or(e,"orderByKey");var t=Lt(e._queryParams,E);return Lr(t),new i(e._repo,e._path,t,!0)}}class ns extends t{_apply(e){Or(e,"orderByPriority");var t=Lt(e._queryParams,N);return Lr(t),new i(e._repo,e._path,t,!0)}}class is extends t{_apply(e){Or(e,"orderByValue");var t=Lt(e._queryParams,Tt);return Lr(t),new i(e._repo,e._path,t,!0)}}class rs extends t{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(F("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Qr(this._value,this._key)._apply(new $r(this._value,this._key)._apply(e))}}e=O,(0,p.hu)(!Gn,"__referenceConstructor has already been defined"),Gn=e,e=O,(0,p.hu)(!ai,"__referenceConstructor has already been defined"),ai=e;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ss="FIREBASE_DATABASE_EMULATOR_HOST",os={};let as=!1;function ls(e,t,n,i,r){let s=i||e.options.databaseURL,o=(void 0===s&&(e.options.projectId||u("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),d("Using default host for project ",e.options.projectId),s=e.options.projectId+"-default-rtdb.firebaseio.com"),Rr(s,r)),a=o.repoInfo,l,h=void 0;(h="undefined"!=typeof process&&process.env?process.env[ss]:h)?(l=!0,s=`http://${h}?ns=`+a.namespace,o=Rr(s,r),a=o.repoInfo):l=!o.repoInfo.secure;i=r&&l?new Ce(Ce.OWNER):new ve(e.name,e.options,t),tr("Invalid Firebase Database URL",o),T(o.path)||u("Database URL must point to the root of a Firebase Database (not including a child path)."),r=function(e,t,n,i){let r=os[t.name];r||(r={},os[t.name]=r);t=r[e.toURLString()];t&&u("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return t=new lr(e,as,n,i),r[e.toURLString()]=t}(a,e,i,new ye(e.name,n));return new hs(r,e)}class hs{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hr(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new O(this._repo,m())),this._rootInternal}_delete(){if(null!==this._rootInternal){{var e=this._repo;var t=this.app.name;const n=os[t];n&&n[e.key]===e||u(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Cr(e),delete n[e.key]}this._repoInternal=null,this._rootInternal=null}return Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&u("Cannot call "+e+" on a deleted database.")}}function us(){qe.IS_TRANSPORT_INITIALIZED&&f("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cs={".sv":"timestamp"};class ds{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}I,I.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},I.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},Me;const _s=function(r){const s=I.prototype.put;return I.prototype.put=function(e,t,n,i){void 0!==i&&(i=r()),s.call(this,e,t,n,i)},function(){I.prototype.put=s}},ps=(ke,function(e){e=e,as=e});H(L.Jn),(0,L.Xd)(new r.wA("database",(e,{instanceIdentifier:t})=>{return ls(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)},"PUBLIC").setMultipleInstances(!0)),(0,L.KN)(U,B,K),(0,L.KN)(U,B,"esm2017")}}]);