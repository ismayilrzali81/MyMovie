"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[427],{427:(U,F,e)=>{e.r(F),e.d(F,{ActionCodeOperation:()=>W,ActionCodeURL:()=>Je,AuthCredential:()=>t,AuthErrorCodes:()=>Y,EmailAuthCredential:()=>Ge,EmailAuthProvider:()=>E,FacebookAuthProvider:()=>n,FactorId:()=>j,GithubAuthProvider:()=>b,GoogleAuthProvider:()=>R,OAuthCredential:()=>y,OAuthProvider:()=>Be,OperationType:()=>H,PhoneAuthCredential:()=>w,PhoneAuthProvider:()=>D,PhoneMultiFactorGenerator:()=>qn,ProviderId:()=>z,RecaptchaVerifier:()=>Zt,SAMLAuthProvider:()=>$e,SignInMethod:()=>q,TwitterAuthProvider:()=>N,applyActionCode:()=>async function(e,t){await async function(e,t){return f(e,"POST","/v1/accounts:update",m(e,t))}
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
 */((0,h.m9)(e),{oobCode:t})},beforeAuthStateChanged:()=>function(e,t,n){return(0,h.m9)(e).beforeAuthStateChanged(t,n)},browserLocalPersistence:()=>At,browserPopupRedirectResolver:()=>jn,browserSessionPersistence:()=>bt,checkActionCode:()=>ht,confirmPasswordReset:()=>async function(e,t,n){await qe((0,h.m9)(e),{oobCode:t,newPassword:n})},connectAuthEmulator:()=>function(e,t,n){const i=T(e),r=(g(i._canInitEmulator,i,"emulator-config-failed"),g(/^https?:\/\//.test(t),i,"invalid-emulator-scheme"),!(null==n||!n.disableWarnings)),s=je(t),{host:a,port:o}=function(e){const t=je(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);{var s;return r?{host:e=r[1],port:ze(i.substr(e.length+1))}:([e,s]=i.split(":"),{host:e,port:ze(s)})}}(t),u=null===o?"":":"+o;i.config.emulator={url:s+`//${a}${u}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()},createUserWithEmailAndPassword:()=>async function(e,t,n){const i=T(e),r=await Xe(i,{returnSecureToken:!0,email:t,password:n}),s=await S._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s},debugErrorMap:()=>K,deleteUser:()=>async function(e){return(0,h.m9)(e).delete()},fetchSignInMethodsForEmail:()=>
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
async function(e,t){var n=ne()?u():"http://localhost",t={identifier:t,continueUri:n},n=(await
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
async function(e,t){return f(e,"POST","/v1/accounts:createAuthUri",m(e,t))}((0,h.m9)(e),t))["signinMethods"];return n||[]},getAdditionalUserInfo:()=>function(e){var{user:e,_tokenResponse:t}=e;if(e.isAnonymous&&!t)return{providerId:null,isNewUser:!1,profile:null};var n=t;if(!n)return null;var i=n["providerId"],r=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||"identitytoolkit#SignupNewUserResponse"===n.kind;if(!i&&null!=n&&n.idToken){e=null==(e=null==(e=ge(n.idToken))?void 0:e.firebase)?void 0:e.sign_in_provider;if(e)return e="anonymous"!==e&&"custom"!==e?e:null,new O(s,e)}if(!i)return null;switch(i){case"facebook.com":return new ft(s,r);case"github.com":return new gt(s,r);case"google.com":return new vt(s,r);case"twitter.com":return new It(s,r,n.screenName||null);case"custom":case"anonymous":return new O(s,null);default:return new O(s,i,r)}}
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
 */,getAuth:()=>
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
function(e=(0,p.Mq)()){const t=(0,p.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();return te(e,{popupRedirectResolver:jn,persistence:[zt,At,bt]})},getIdToken:()=>
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
function(e,t=!1){return(0,h.m9)(e).getIdToken(t)},getIdTokenResult:()=>me,getMultiFactorResolver:()=>function(e,t){var e=(0,h.m9)(e),n=t;return g(t.customData.operationType,e,"argument-error"),g(null==(t=n.customData._serverResponse)?void 0:t.mfaPendingCredential,e,"argument-error"),_t._fromError(e,n)}
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
 */,getRedirectResult:()=>async function(e,t){return await T(e)._initializationPromise,fn(e,t,!1)},inMemoryPersistence:()=>Ee,indexedDBLocalPersistence:()=>zt,initializeAuth:()=>te,isSignInWithEmailLink:()=>function(e,t){t=Je.parseLink(t);return"EMAIL_SIGNIN"===(null==t?void 0:t.operation)},linkWithCredential:()=>ot,linkWithPhoneNumber:()=>async function(e,t,n){const i=(0,h.m9)(e),r=(await it(!1,i,"phone"),await en(i.auth,t,(0,h.m9)(n)));return new Qt(r,e=>ot(i,e))},linkWithPopup:()=>async function(e,t,n){const i=(0,h.m9)(e),r=(a(i.auth,t,k),L(i.auth,n)),s=new M(i.auth,"linkViaPopup",t,r,i);return s.executeNotNull()},linkWithRedirect:()=>function(e,t,n){return async function(e,t,n){const i=(0,h.m9)(e),r=(a(i.auth,t,k),L(i.auth,n)),s=(await it(!1,i,t.providerId),await ln(r,i.auth),await gn(i));return r._openRedirect(i.auth,t,"linkViaRedirect",s)}(e,t,n)},multiFactor:()=>function(e){e=(0,h.m9)(e);yt.has(e)||yt.set(e,Tt._fromUser(e));return yt.get(e)},onAuthStateChanged:()=>function(e,t,n,i){return(0,h.m9)(e).onAuthStateChanged(t,n,i)},onIdTokenChanged:()=>function(e,t,n,i){return(0,h.m9)(e).onIdTokenChanged(t,n,i)},parseActionCodeURL:()=>function(e){return Je.parseLink(e)}
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
 */,prodErrorMap:()=>J,reauthenticateWithCredential:()=>ut,reauthenticateWithPhoneNumber:()=>async function(e,t,n){const i=(0,h.m9)(e),r=await en(i.auth,t,(0,h.m9)(n));return new Qt(r,e=>ut(i,e))},reauthenticateWithPopup:()=>async function(e,t,n){const i=(0,h.m9)(e),r=(a(i.auth,t,k),L(i.auth,n)),s=new M(i.auth,"reauthViaPopup",t,r,i);return s.executeNotNull()},reauthenticateWithRedirect:()=>function(e,t,n){return async function(e,t,n){const i=(0,h.m9)(e),r=(a(i.auth,t,k),L(i.auth,n)),s=(await ln(r,i.auth),await gn(i));return r._openRedirect(i.auth,t,"reauthViaRedirect",s)}(e,t,n)},reload:()=>Te,sendEmailVerification:()=>async function(e,t){var n=(0,h.m9)(e),i=await e.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:i};t&&lt(n.auth,i,t);t=(await async function(e,t){return We(e,t)}(n.auth,i)).email;t!==e.email&&await e.reload()},sendPasswordResetEmail:()=>
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
async function(e,t,n){e=(0,h.m9)(e),t={requestType:"PASSWORD_RESET",email:t};n&&lt(e,t,n);await async function(e,t){return We(e,t)}(e,t)},sendSignInLinkToEmail:()=>
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
async function(e,t,n){e=(0,h.m9)(e),t={requestType:"EMAIL_SIGNIN",email:t};g(n.handleCodeInApp,e,"argument-error"),n&&lt(e,t,n);await async function(e,t){return We(e,t)}(e,t)},setPersistence:()=>function(e,t){return(0,h.m9)(e).setPersistence(t)},signInAnonymously:()=>
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
async function(e){const t=T(e);if(await t._initializationPromise,null!=(e=t.currentUser)&&e.isAnonymous)return new S({user:t.currentUser,providerId:null,operationType:"signIn"});e=await Xe(t,{returnSecureToken:!0}),e=await S._fromIdTokenResponse(t,"signIn",e,!0);return await t._updateCurrentUser(e.user),e}
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
 */,signInWithCredential:()=>at,signInWithCustomToken:()=>
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
async function(e,t){const n=T(e),i=await
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
async function(e,t){return c(e,"POST","/v1/accounts:signInWithCustomToken",m(e,t))}(n,{token:t,returnSecureToken:!0}),r=await S._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}
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
 */,signInWithEmailAndPassword:()=>function(e,t,n){return at((0,h.m9)(e),E.credential(t,n))},signInWithEmailLink:()=>async function(e,t,n){e=(0,h.m9)(e),t=E.credentialWithLink(t,n||u());return g(t._tenantId===(e.tenantId||null),e,"tenant-id-mismatch"),at(e,t)},signInWithPhoneNumber:()=>async function(e,t,n){const i=T(e),r=await en(i,t,(0,h.m9)(n));return new Qt(r,e=>at(i,e))},signInWithPopup:()=>async function(e,t,n){const i=T(e),r=(a(e,t,k),L(i,n)),s=new M(i,"signInViaPopup",t,r);return s.executeNotNull()},signInWithRedirect:()=>
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
function(e,t,n){return async function(e,t,n){const i=T(e),r=(a(e,t,k),L(i,n));return await ln(r,i),r._openRedirect(i,t,"signInViaRedirect")}(e,t,n)},signOut:()=>function(e){return(0,h.m9)(e).signOut()},unlink:()=>
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
async function(e,t){const n=(0,h.m9)(e),i=(await it(!0,n,t),await async function(e,t){return f(e,"POST","/v1/accounts:update",t)}(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}))["providerUserInfo"],r=tt(i||[]);n.providerData=n.providerData.filter(e=>r.has(e.providerId)),r.has("phone")||(n.phoneNumber=null);return await n.auth._persistUserIfCurrent(n),n},updateCurrentUser:()=>function(e,t){return(0,h.m9)(e).updateCurrentUser(t)},updateEmail:()=>function(e,t){return pt((0,h.m9)(e),t,null)},updatePassword:()=>function(e,t){return pt((0,h.m9)(e),null,t)},updatePhoneNumber:()=>async function(e,t){await nt((0,h.m9)(e),t)}
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
 */,updateProfile:()=>
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
async function(e,{displayName:t,photoURL:n}){if(void 0!==t||void 0!==n){const i=(0,h.m9)(e);e={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},t=await v(i,
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
async function(e,t){return f(e,"POST","/v1/accounts:update",t)}(i.auth,e));i.displayName=t.displayName||null,i.photoURL=t.photoUrl||null;const r=i.providerData.find(({providerId:e})=>"password"===e);r&&(r.displayName=i.displayName,r.photoURL=i.photoURL),await i._updateTokensIfNecessary(t)}},useDeviceLanguage:()=>function(e){(0,h.m9)(e).useDeviceLanguage()},verifyBeforeUpdateEmail:()=>async function(e,t,n){var i=(0,h.m9)(e),r=await e.getIdToken(),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:r,newEmail:t};n&&lt(i.auth,r,n);t=(await async function(e,t){return We(e,t)}
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
 */(i.auth,r)).email;t!==e.email&&await e.reload()},verifyPasswordResetCode:()=>async function(e,t){e=(await ht((0,h.m9)(e),t)).data;return e.email}});var h=e(444),p=e(389);function x(e,t){var n={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}Object.create;Object.create;var V=e(333),F=e(463);
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
const j={PHONE:"phone"},z={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},q={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},H={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},W={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};function G(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const K=
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
function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}},J=G,B=new h.LL("auth","Firebase",G()),Y={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"},$=new V.Yd("@firebase/auth");function X(e,...t){$.logLevel<=V.in.ERROR&&$.error(`Auth (${p.Jn}): `+e,...t)}
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
 */function d(e,...t){throw Q(e,...t)}function o(e,...t){return Q(e,...t)}function Z(e,t,n){n=Object.assign(Object.assign({},J()),{[t]:n});const i=new h.LL("auth","Firebase",n);return i.create(t,{appName:e.name})}function a(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&d(e,"argument-error"),Z(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.`+"Did you pass a reference from a different Auth SDK?")}function Q(e,...t){if("string"==typeof e)return B.create(e,...t);{var n=t[0];const i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}}function g(e,t,...n){if(!e)throw Q(t,...n)}function i(e){e="INTERNAL ASSERTION FAILED: "+e;throw X(e),new Error(e)}function s(e,t){e||i(t)}
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
 */const ee=new Map;function l(e){s(e instanceof Function,"Expected a class definition");let t=ee.get(e);return t?s(t instanceof e,"Instance stored in cache mismatched with class"):(t=new e,ee.set(e,t)),t}
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
 */function te(e,t){const n=(0,p.qX)(e,"auth");if(n.isInitialized()){const i=n.getImmediate();e=n.getOptions();if((0,h.vZ)(e,null!=t?t:{}))return i;d(i,"already-initialized")}const i=n.initialize({options:t});return i}
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
function u(){var e;return"undefined"!=typeof self&&(null==(e=self.location)?void 0:e.href)||""}function ne(){return"http:"===ie()||"https:"===ie()}function ie(){var e;return"undefined"!=typeof self&&(null==(e=self.location)?void 0:e.protocol)||null}
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
class re{constructor(e,t){s((this.shortDelay=e)<(this.longDelay=t),"Short delay should be less than long delay!"),this.isMobile=(0,h.uI)()||(0,h.b$)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(ne()||(0,h.ru)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
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
 */function se(e,t){s(e.emulator,"Emulator should always be set here");e=e.emulator.url;return t?""+e+(t.startsWith("/")?t.slice(1):t):e}
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
 */class ae{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl||("undefined"!=typeof self&&"fetch"in self?self.fetch:void i("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"))}static headers(){return this.headersImpl||("undefined"!=typeof self&&"Headers"in self?self.Headers:void i("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"))}static response(){return this.responseImpl||("undefined"!=typeof self&&"Response"in self?self.Response:void i("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"))}}
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
 */const oe={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},ue=new re(3e4,6e4);
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
 */function m(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function f(r,s,a,o,e={}){return ce(r,e,async()=>{let e={},t={};o&&("GET"===s?t=o:e={body:JSON.stringify(o)});var n=(0,h.xO)(Object.assign({key:r.config.apiKey},t)).slice(1);const i=await r._getAdditionalHeaders();return i["Content-Type"]="application/json",r.languageCode&&(i["X-Firebase-Locale"]=r.languageCode),ae.fetch()(de(r,r.config.apiHost,a,n),Object.assign({method:s,headers:i,referrerPolicy:"no-referrer"},e))})}async function ce(t,e,n){t._canInitEmulator=!1;e=Object.assign(Object.assign({},oe),e);try{const s=new le(t),a=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();var i=await a.json();if("needConfirmation"in i)throw he(t,"account-exists-with-different-credential",i);if(a.ok&&!("errorMessage"in i))return i;{const o=a.ok?i.errorMessage:i.error.message,[u,c]=o.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===u)throw he(t,"credential-already-in-use",i);if("EMAIL_EXISTS"===u)throw he(t,"email-already-in-use",i);if("USER_DISABLED"===u)throw he(t,"user-disabled",i);var r=e[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Z(t,r,c);d(t,r)}}catch(e){if(e instanceof h.ZR)throw e;d(t,"network-request-failed")}}async function c(e,t,n,i,r={}){t=await f(e,t,n,i,r);return"mfaPendingCredential"in t&&d(e,"multi-factor-auth-required",{_serverResponse:t}),t}function de(e,t,n,i){t=""+t+n+"?"+i;return e.config.emulator?se(e.config,t):e.config.apiScheme+"://"+t}class le{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(o(this.auth,"network-request-failed")),ue.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function he(e,t,n){const i={appName:e.name},r=(n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber),o(e,t,i));return r.customData._tokenResponse=n,r}
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
function pe(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function me(e,t=!1){const n=(0,h.m9)(e);var e=await n.getIdToken(t),t=ge(e),i=(g(t&&t.exp&&t.auth_time&&t.iat,n.auth,"internal-error"),"object"==typeof t.firebase?t.firebase:void 0),r=null==i?void 0:i.sign_in_provider;return{claims:t,token:e,authTime:pe(fe(t.auth_time)),issuedAtTime:pe(fe(t.iat)),expirationTime:pe(fe(t.exp)),signInProvider:r||null,signInSecondFactor:(null==i?void 0:i.sign_in_second_factor)||null}}function fe(e){return 1e3*Number(e)}function ge(t){var[t,e,n]=t.split(".");if(void 0===t||void 0===e||void 0===n)return X("JWT malformed, contained fewer than 3 sections"),null;try{var i=(0,h.tV)(e);return i?JSON.parse(i):(X("Failed to decode base64 JWT payload"),null)}catch(e){return X("Caught error parsing JWT payload as JSON",null==(t=e)?void 0:t.toString()),null}}
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
async function v(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof h.ZR&&(n=[e["code"]][0],"auth/user-disabled"===n||"auth/user-token-expired"===n)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}
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
class ve{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){return e?(e=this.errorBackoff,this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e):(this.errorBackoff=3e4,e=(null!=(e=this.user.stsTokenManager.expirationTime)?e:0)-Date.now()-3e5,Math.max(0,e))}schedule(e=!1){this.isRunning&&(e=this.getInterval(e),this.timerId=setTimeout(async()=>{await this.iteration()},e))}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==(t=e)?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
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
 */class Ie{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=pe(this.lastLoginAt),this.creationTime=pe(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function _e(e){var t=e.auth,n=await e.getIdToken(),n=await v(e,async function(e,t){return f(e,"POST","/v1/accounts:lookup",t)}(t,{idToken:n})),t=(g(null==n?void 0:n.users.length,t,"internal-error"),n.users[0]),n=(e._notifyReloadListener(t),null!=(n=t.providerUserInfo)&&n.length?t.providerUserInfo.map(e=>{var t=e["providerId"],e=x(e,["providerId"]);return{providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}}):[]),n=function(e,n){e=e.filter(t=>!n.some(e=>e.providerId===t.providerId));return[...e,...n]}(e.providerData,n),i=e.isAnonymous,r=!(e.email&&t.passwordHash||null!=n&&n.length),i=!!i&&r,r={uid:t.localId,displayName:t.displayName||null,photoURL:t.photoUrl||null,email:t.email||null,emailVerified:t.emailVerified||!1,phoneNumber:t.phoneNumber||null,tenantId:t.tenantId||null,providerData:n,metadata:new Ie(t.createdAt,t.lastLoginAt),isAnonymous:i};Object.assign(e,r)}async function Te(e){const t=(0,h.m9)(e);await _e(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}
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
class ye{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g(void 0!==e.idToken,"internal-error"),g(void 0!==e.refreshToken,"internal-error");var t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(g(t=ge(t=e.idToken),"internal-error"),g(void 0!==t.exp,"internal-error"),g(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return g(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){s=t;var r,s,{accessToken:e,refreshToken:t,expiresIn:n}=await{accessToken:(t=await ce(r=e,{},async()=>{var e=(0,h.xO)({grant_type:"refresh_token",refresh_token:s}).slice(1),{tokenApiHost:t,apiKey:n}=r.config,t=de(r,t,"/v1/token","key="+n);const i=await r._getAdditionalHeaders();return i["Content-Type"]="application/x-www-form-urlencoded",ae.fetch()(t,{method:"POST",headers:i,body:e})})).access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token};this.updateTokensAndExpiration(e,t,Number(n))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){var{refreshToken:t,accessToken:n,expirationTime:i}=t;const r=new ye;return t&&(g("string"==typeof t,"internal-error",{appName:e}),r.refreshToken=t),n&&(g("string"==typeof n,"internal-error",{appName:e}),r.accessToken=n),i&&(g("number"==typeof i,"internal-error",{appName:e}),r.expirationTime=i),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ye,this.toJSON())}_performRefresh(){return i("not implemented")}}
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
 */function I(e,t){g("string"==typeof e||void 0===e,"internal-error",{appName:t})}class _{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,e=x(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ve(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=e.displayName||null,this.email=e.email||null,this.emailVerified=e.emailVerified||!1,this.phoneNumber=e.phoneNumber||null,this.photoURL=e.photoURL||null,this.isAnonymous=e.isAnonymous||!1,this.tenantId=e.tenantId||null,this.providerData=e.providerData?[...e.providerData]:[],this.metadata=new Ie(e.createdAt||void 0,e.lastLoginAt||void 0)}async getIdToken(e){e=await v(this,this.stsTokenManager.getToken(this.auth,e));return g(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(e){return me(this,e)}reload(){return Te(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new _(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await _e(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){var e=await this.getIdToken();return await v(this,async function(e,t){return f(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n=null!=(n=t.displayName)?n:void 0,i=null!=(i=t.email)?i:void 0,r=null!=(r=t.phoneNumber)?r:void 0,s=null!=(s=t.photoURL)?s:void 0,a=null!=(a=t.tenantId)?a:void 0,o=null!=(o=t._redirectEventId)?o:void 0,u=null!=(u=t.createdAt)?u:void 0,c=null!=(c=t.lastLoginAt)?c:void 0;const{uid:d,emailVerified:l,isAnonymous:h,providerData:p,stsTokenManager:m}=t;g(d&&m,e,"internal-error");t=ye.fromJSON(this.name,m);g("string"==typeof d,e,"internal-error"),I(n,e.name),I(i,e.name),g("boolean"==typeof l,e,"internal-error"),g("boolean"==typeof h,e,"internal-error"),I(r,e.name),I(s,e.name),I(a,e.name),I(o,e.name),I(u,e.name),I(c,e.name);const f=new _({uid:d,auth:e,email:i,emailVerified:l,displayName:n,isAnonymous:h,photoURL:s,phoneNumber:r,tenantId:a,stsTokenManager:t,createdAt:u,lastLoginAt:c});return p&&Array.isArray(p)&&(f.providerData=p.map(e=>Object.assign({},e))),o&&(f._redirectEventId=o),f}static async _fromIdTokenResponse(e,t,n=!1){const i=new ye;i.updateFromServerResponse(t);t=new _({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await _e(t),t}}
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
 */class we{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){e=this.storage[e];return void 0===e?null:e}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}we.type="NONE";const Ee=we;
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
 */function ke(e,t,n){return`firebase:${e}:${t}:`+n}class Ae{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;var{config:e,name:n}=this.auth;this.fullUserKey=ke(this.userKey,e.apiKey,n),this.fullPersistenceKey=ke("persistence",e.apiKey,n),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){var e=await this.persistence._get(this.fullUserKey);return e?_._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){var t;if(this.persistence!==e)return t=await this.getCurrentUser(),await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ae(l(Ee),e,n);const i=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let r=i[0]||l(Ee);const s=ke(n,e.config.apiKey,e.name);let a=null;for(const d of t)try{var o=await d._get(s);if(o){var u=_._fromJSON(e,o);d!==r&&(a=u),r=d;break}}catch(e){}var c=i.filter(e=>e._shouldAllowMigration);return r._shouldAllowMigration&&c.length&&(r=c[0],a&&await r._set(s,a.toJSON()),await Promise.all(t.map(async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new Ae(r,e,n)}}
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
 */function Re(e){const t=e.toLowerCase();return t.includes("opera/")||t.includes("opr/")||t.includes("opios/")?"Opera":Oe(t)?"IEMobile":t.includes("msie")||t.includes("trident/")?"IE":t.includes("edge/")?"Edge":be(t)?"Firefox":t.includes("silk/")?"Silk":Ce(t)?"Blackberry":De(t)?"Webos":Ne(t)?"Safari":!t.includes("chrome/")&&!Se(t)||t.includes("edge/")?Pe(t)?"Android":2===(null==(e=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))?void 0:e.length)?e[1]:"Other":"Chrome"}function be(e=(0,h.z$)()){return/firefox\//i.test(e)}function Ne(e=(0,h.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Se(e=(0,h.z$)()){return/crios\//i.test(e)}function Oe(e=(0,h.z$)()){return/iemobile/i.test(e)}function Pe(e=(0,h.z$)()){return/android/i.test(e)}function Ce(e=(0,h.z$)()){return/blackberry/i.test(e)}function De(e=(0,h.z$)()){return/webos/i.test(e)}function Le(e=(0,h.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Me(e=(0,h.z$)()){return Le(e)||Pe(e)||De(e)||Ce(e)||/windows phone/i.test(e)||Oe(e)}
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
function Ue(e,t=[]){let n;switch(e){case"Browser":n=Re((0,h.z$)());break;case"Worker":n=Re((0,h.z$)())+"-"+e;break;default:n=e}t=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${p.Jn}/`+t}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Fe{constructor(e){this.auth=e,this.queue=[]}pushCallback(i,e){var t=n=>new Promise((e,t)=>{try{e(i(n))}catch(e){t(e)}});t.onAbort=e,this.queue.push(t);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser!==e){const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(e){n.reverse();for(const r of n)try{r()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==(t=e)?void 0:t.message})}}}}
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
 */class xe{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ve(this),this.idTokenSubscription=new Ve(this),this.beforeStateQueue=new Fe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=B,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=l(n)),this._initializationPromise=this.queue(async()=>{var e;if(!this._deleted&&(this.persistenceManager=await Ae.create(this,t),!this._deleted)){if(null!=(e=this._popupRedirectResolver)&&e._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(n),this.lastNotifiedUid=(null==(e=this.currentUser)?void 0:e.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){var e;this._deleted||(e=await this.assertedPersistence.getCurrentUser(),(this.currentUser||e)&&(this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),await this.currentUser.getIdToken()):await this._updateCurrentUser(e,!0)))}async initializeCurrentUser(e){var t,n,i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain&&(await this.getOrInitRedirectPersistenceManager(),t=null==(t=this.redirectUser)?void 0:t._redirectEventId,n=null===r||void 0===r?void 0:r._redirectEventId,e=await this.tryRedirectSignIn(e),t&&t!==n||null==e||!e.user||(r=e.user,s=!0)),!r)return this.directlySetCurrentUser(null);if(r._redirectEventId)return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r);if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await _e(e)}catch(e){if("auth/network-request-failed"!==(null==(t=e)?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){var e;this.languageCode="undefined"!=typeof navigator&&((e=navigator).languages&&e.languages[0]||e.language)||null}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,h.m9)(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(l(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new h.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null==(e=this._currentUser)?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){return this.redirectPersistenceManager||(g(e=e&&l(e)||this._popupRedirectResolver,this,"argument-error"),this.redirectPersistenceManager=await Ae.create(this,[l(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()),this.redirectPersistenceManager}async _redirectUserForId(e){var t;return this._isInitialized&&await this.queue(async()=>{}),(null==(t=this._currentUser)?void 0:t._redirectEventId)===e?this._currentUser:(null==(t=this.redirectUser)?void 0:t._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:`+this.name}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;this._isInitialized&&(this.idTokenSubscription.next(this.currentUser),e=null!=(e=null==(e=this.currentUser)?void 0:e.uid)?e:null,this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser)))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return g(s,this,"internal-error"),s.then(()=>r(this.currentUser)),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),(this.currentUser=e)?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ue(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);var t=await(null==(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))?void 0:t.getHeartbeatsHeader());return t&&(e["X-Firebase-Client"]=t),e}}function T(e){return(0,h.m9)(e)}class Ve{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,h.ne)(e=>this.observer=e)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function je(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ze(e){return!e||(e=Number(e),isNaN(e))?null:e}class t{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return i("not implemented")}_getIdTokenResponse(e){return i("not implemented")}_linkToIdToken(e,t){return i("not implemented")}_getReauthenticationResolver(e){return i("not implemented")}}
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
 */async function qe(e,t){return f(e,"POST","/v1/accounts:resetPassword",m(e,t))}async function He(e,t){return f(e,"POST","/v1/accounts:update",t)}async function We(e,t){return f(e,"POST","/v1/accounts:sendOobCode",m(e,t))}
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
class Ge extends t{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ge(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ge(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){e="string"==typeof e?JSON.parse(e):e;if(null!=e&&e.email&&null!=e&&e.password){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return async function(e,t){return c(e,"POST","/v1/accounts:signInWithPassword",m(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return c(e,"POST","/v1/accounts:signInWithEmailLink",m(e,t))}(e,{email:this._email,oobCode:this._password});default:d(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return He(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return c(e,"POST","/v1/accounts:signInWithEmailLink",m(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:d(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function r(e,t){return c(e,"POST","/v1/accounts:signInWithIdp",m(e,t))}
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
 */class y extends t{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new y(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):d("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){var e="string"==typeof e?JSON.parse(e):e,{providerId:t,signInMethod:n}=e,e=x(e,["providerId","signInMethod"]);if(!t||!n)return null;const i=new y(t,n);return i.idToken=e.idToken||void 0,i.accessToken=e.accessToken||void 0,i.secret=e.secret,i.nonce=e.nonce,i.pendingToken=e.pendingToken||null,i}_getIdTokenResponse(e){return r(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,r(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,r(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,h.xO)(t)}return e}}
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
 */const Ke={USER_NOT_FOUND:"user-not-found"};
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
class w extends t{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new w({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new w({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return c(e,"POST","/v1/accounts:signInWithPhoneNumber",m(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){if((t=await c(e,"POST","/v1/accounts:signInWithPhoneNumber",m(e,t))).temporaryProof)throw he(e,"account-exists-with-different-credential",t);return t}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return c(e,"POST","/v1/accounts:signInWithPhoneNumber",m(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Ke)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){var{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){var{verificationId:e,verificationCode:t,phoneNumber:n,temporaryProof:i}=e="string"==typeof e?JSON.parse(e):e;return t||e||n||i?new w({verificationId:e,verificationCode:t,phoneNumber:n,temporaryProof:i}):null}}
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
 */class Je{constructor(e){var e=(0,h.zd)((0,h.pd)(e)),t=null!=(t=e.apiKey)?t:null,n=null!=(n=e.oobCode)?n:null,i=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!=(i=e.mode)?i:null);g(t&&n&&i,"argument-error"),this.apiKey=t,this.operation=i,this.code=n,this.continueUrl=null!=(t=e.continueUrl)?t:null,this.languageCode=null!=(i=e.languageCode)?i:null,this.tenantId=null!=(n=e.tenantId)?n:null}static parseLink(e){e=e,t=(0,h.zd)((0,h.pd)(e)).link,n=t?(0,h.zd)((0,h.pd)(t)).deep_link_id:null;var t,n,i=((i=(0,h.zd)((0,h.pd)(e)).deep_link_id)?(0,h.zd)((0,h.pd)(i)).link:null)||i||n||t||e;try{return new Je(i)}catch(e){return null}}}class E{constructor(){this.providerId=E.PROVIDER_ID}static credential(e,t){return Ge._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){t=Je.parseLink(t);return g(t,"argument-error"),Ge._fromEmailAndCode(e,t.code,t.tenantId)}}E.PROVIDER_ID="password",E.EMAIL_PASSWORD_SIGN_IN_METHOD="password",E.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class k{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class A extends k{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Be extends A{static credentialFromJSON(e){e="string"==typeof e?JSON.parse(e):e;return g("providerId"in e&&"signInMethod"in e,"argument-error"),y._fromParams(e)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return g(e.idToken||e.accessToken,"argument-error"),y._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Be.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Be.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;var{oauthIdToken:e,oauthAccessToken:t,oauthTokenSecret:n,pendingToken:i,nonce:r,providerId:s}=e;if(!(t||n||e||i))return null;if(!s)return null;try{return new Be(s)._credential({idToken:e,accessToken:t,nonce:r,pendingToken:i})}catch(e){return null}}}
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
 */class n extends A{constructor(){super("facebook.com")}static credential(e){return y._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!(e&&"oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch(e){return null}}}n.FACEBOOK_SIGN_IN_METHOD="facebook.com",n.PROVIDER_ID="facebook.com";
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
class R extends A{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return y._fromParams({providerId:R.PROVIDER_ID,signInMethod:R.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return R.credentialFromTaggedObject(e)}static credentialFromError(e){return R.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;var{oauthIdToken:e,oauthAccessToken:t}=e;if(!e&&!t)return null;try{return R.credential(e,t)}catch(e){return null}}}R.GOOGLE_SIGN_IN_METHOD="google.com",R.PROVIDER_ID="google.com";
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
class b extends A{constructor(){super("github.com")}static credential(e){return y._fromParams({providerId:b.PROVIDER_ID,signInMethod:b.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return b.credentialFromTaggedObject(e)}static credentialFromError(e){return b.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!(e&&"oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return b.credential(e.oauthAccessToken)}catch(e){return null}}}b.GITHUB_SIGN_IN_METHOD="github.com",b.PROVIDER_ID="github.com";class Ye extends t{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){return r(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,r(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,r(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){var{providerId:e,signInMethod:t,pendingToken:n}="string"==typeof e?JSON.parse(e):e;return e&&t&&n&&e===t?new Ye(e,n):null}static _create(e,t){return new Ye(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}
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
 */class $e extends k{constructor(e){g(e.startsWith("saml."),"argument-error"),super(e)}static credentialFromResult(e){return $e.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return $e.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){e=Ye.fromJSON(e);return g(e,"argument-error"),e}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;var{pendingToken:e,providerId:t}=e;if(!e||!t)return null;try{return Ye._create(t,e)}catch(e){return null}}}
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
 */class N extends A{constructor(){super("twitter.com")}static credential(e,t){return y._fromParams({providerId:N.PROVIDER_ID,signInMethod:N.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return N.credentialFromTaggedObject(e)}static credentialFromError(e){return N.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;var{oauthAccessToken:e,oauthTokenSecret:t}=e;if(!e||!t)return null;try{return N.credential(e,t)}catch(e){return null}}}
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
async function Xe(e,t){return c(e,"POST","/v1/accounts:signUp",m(e,t))}
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
 */N.TWITTER_SIGN_IN_METHOD="twitter.com",N.PROVIDER_ID="twitter.com";class S{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){e=await _._fromIdTokenResponse(e,n,i),i=Ze(n);return new S({user:e,providerId:i,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);var i=Ze(n);return new S({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Ze(e){return e.providerId||("phoneNumber"in e?"phone":null)}class Qe extends h.ZR{constructor(e,t,n,i){super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Qe.prototype),this.customData={appName:e.name,tenantId:null!=(i=e.tenantId)?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Qe(e,t,n,i)}}function et(t,n,e,i){const r="reauthenticate"===n?e._getReauthenticationResolver(t):e._getIdTokenResponse(t);return r.catch(e=>{if("auth/multi-factor-auth-required"===e.code)throw Qe._fromErrorAndOperation(t,e,n,i);throw e})}
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
 */function tt(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}async function nt(e,t,n=!1){t=await v(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return S._forOperation(e,"link",t)}async function it(e,t,n){await _e(t);const i=tt(t.providerData);var r=!1===e?"provider-already-linked":"no-such-provider";g(i.has(n)===e,t.auth,r)}
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
 */async function rt(e,t,n=!1){var i=e["auth"],r="reauthenticate";try{var s=await v(e,et(i,r,t,e),n),a=(g(s.idToken,i,"internal-error"),ge(s.idToken)),o=(g(a,i,"internal-error"),a)["sub"];return g(e.uid===o,i,"user-mismatch"),S._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==(t=e)?void 0:t.code)&&d(i,"user-mismatch"),e}}
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
 */async function st(e,t,n=!1){t=await et(e,"signIn",t),t=await S._fromIdTokenResponse(e,"signIn",t);return n||await e._updateCurrentUser(t.user),t}async function at(e,t){return st(T(e),t)}async function ot(e,t){e=(0,h.m9)(e);return await it(!1,e,t.providerId),nt(e,t)}async function ut(e,t){return rt((0,h.m9)(e),t)}class ct{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?dt._fromServerResponse(e,t):d(e,"internal-error")}}class dt extends ct{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new dt(t)}}
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
 */function lt(e,t,n){var i;g(0<(null==(i=n.url)?void 0:i.length),e,"invalid-continue-uri"),g(void 0===n.dynamicLinkDomain||0<n.dynamicLinkDomain.length,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(g(0<n.iOS.bundleId.length,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(g(0<n.android.packageName.length,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}async function ht(e,t){var n=(0,h.m9)(e),i=await qe(n,{oobCode:t}),e=i.requestType;switch(g(e,n,"internal-error"),e){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":g(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":g(i.mfaInfo,n,"internal-error");default:g(i.email,n,"internal-error")}let r=null;return i.mfaInfo&&(r=ct._fromServerResponse(T(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:r},operation:e}}async function pt(e,t,n){var i=e["auth"];const r={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(r.email=t),n&&(r.password=n);t=await v(e,He(i,r));await e._updateTokensIfNecessary(t,!0)}
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
 */class O{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class mt extends O{constructor(e,t,n,i){super(e,t,n),this.username=i}}class ft extends O{constructor(e,t){super(e,"facebook.com",t)}}class gt extends mt{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class vt extends O{constructor(e,t){super(e,"google.com",t)}}class It extends mt{constructor(e,t,n){super(e,"twitter.com",t,n)}}class P{constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}static _fromIdtoken(e,t){return new P("enroll",e,t)}static _fromMfaPendingCredential(e){return new P("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t;if(null!=e&&e.multiFactorSession){if(null!=(t=e.multiFactorSession)&&t.pendingCredential)return P._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null!=(t=e.multiFactorSession)&&t.idToken)return P._fromIdtoken(e.multiFactorSession.idToken)}return null}}
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
 */class _t{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,i){const r=T(e),s=i.customData._serverResponse;e=(s.mfaInfo||[]).map(e=>ct._fromServerResponse(r,e));g(s.mfaPendingCredential,r,"internal-error");const a=P._fromMfaPendingCredential(s.mfaPendingCredential);return new _t(a,e,async e=>{var e=await e._process(r,a),t=(delete s.mfaInfo,delete s.mfaPendingCredential,Object.assign(Object.assign({},s),{idToken:e.idToken,refreshToken:e.refreshToken}));switch(i.operationType){case"signIn":var n=await S._fromIdTokenResponse(r,i.operationType,t);return await r._updateCurrentUser(n.user),n;case"reauthenticate":return g(i.user,r,"internal-error"),S._forOperation(i.user,i.operationType,t);default:d(r,"internal-error")}})}async resolveSignIn(e){return this.signInResolver(e)}}class Tt{constructor(t){this.user=t,this.enrolledFactors=[],t._onReload(e=>{e.mfaInfo&&(this.enrolledFactors=e.mfaInfo.map(e=>ct._fromServerResponse(t.auth,e)))})}static _fromUser(e){return new Tt(e)}async getSession(){return P._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e;e=await this.getSession(),e=await v(this.user,n._process(this.user.auth,e,t));return await this.user._updateTokensIfNecessary(e),this.user.reload()}async unenroll(t){const n="string"==typeof t?t:t.uid;var t=await this.user.getIdToken(),e=await v(this.user,(e=this.user.auth,t={idToken:t,mfaEnrollmentId:n},f(e,"POST","/v2/accounts/mfaEnrollment:withdraw",m(e,t))));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==n),await this.user._updateTokensIfNecessary(e);try{await this.user.reload()}catch(e){if("auth/user-token-expired"!==(null==(t=e)?void 0:t.code))throw e}}}const yt=new WeakMap;const wt="__sak";
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
 */class Et{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(wt,"1"),this.storage.removeItem(wt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){e=this.storage.getItem(e);return Promise.resolve(e?JSON.parse(e):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class kt extends Et{constructor(){var e;super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=(Ne(e=(0,h.z$)())||Le(e))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Me(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){var t=this.storage.getItem(i),n=this.localCache[i];t!==n&&e(i,n,t)}}onStorageEvent(e,t=!1){if(e.key){const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(i);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}var n=()=>{var e=this.storage.getItem(i);!t&&this.localCache[i]===e||this.notifyListeners(i,e)};const r=this.storage.getItem(i);(0,h.w1)()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}else this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)})}notifyListeners(e,t){this.localCache[e]=t;e=this.listeners[e];if(e)for(const n of Array.from(e))n(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){var t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}kt.type="LOCAL";const At=kt;
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
 */class Rt extends Et{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rt.type="SESSION";const bt=Rt;
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
class Nt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){var e=this.receivers.find(e=>e.isListeningto(t));return e||(e=new Nt(t),this.receivers.push(e),e)}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data;var e=this.handlersMap[i];null!=e&&e.size&&(t.ports[0].postMessage({status:"ack",eventId:n,eventType:i}),e=Array.from(e).map(async e=>e(t.origin,r)),e=await Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})),t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:e}))}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function St(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */Nt.receivers=[];class Ot{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,a=50){const o="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,c;return new Promise((n,i)=>{const r=St("",20),s=(o.port1.start(),setTimeout(()=>{i(new Error("unsupported_event"))},a));c={messageChannel:o,onMessage(e){var t=e;if(t.data.eventId===r)switch(t.data.status){case"ack":clearTimeout(s),u=setTimeout(()=>{i(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),n(t.data.response);break;default:clearTimeout(s),clearTimeout(u),i(new Error("invalid_response"))}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:r,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}
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
 */function C(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
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
function Pt(){return void 0!==C().WorkerGlobalScope&&"function"==typeof C().importScripts}
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
const Ct="firebaseLocalStorageDb",Dt="firebaseLocalStorage",Lt="fbase_key";class Mt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ut(e,t){return e.transaction([Dt],t?"readwrite":"readonly").objectStore(Dt)}function Ft(){const i=indexedDB.open(Ct,1);return new Promise((n,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const e=i.result;try{e.createObjectStore(Dt,{keyPath:Lt})}catch(e){t(e)}}),i.addEventListener("success",async()=>{const e=i.result;var t;e.objectStoreNames.contains(Dt)?n(e):(e.close(),t=indexedDB.deleteDatabase(Ct),await new Mt(t).toPromise(),n(await Ft()))})})}async function xt(e,t,n){e=Ut(e,!0).put({fbase_key:t,value:n});return new Mt(e).toPromise()}function Vt(e,t){e=Ut(e,!0).delete(t);return new Mt(e).toPromise()}class jt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Ft()),this.db}async _withRetries(e){let t=0;for(;;)try{return await e(await this._openDb())}catch(e){if(3<t++)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nt._getInstance(Pt()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;this.activeServiceWorker=await async function(){if(null===navigator||void 0===navigator||!navigator.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),this.activeServiceWorker&&(this.sender=new Ot(this.activeServiceWorker),(t=await this.sender._send("ping",{},800))&&null!=(e=t[0])&&e.fulfilled&&null!=(e=t[0])&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0))}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null==(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{var e;return indexedDB?(await xt(e=await Ft(),wt,"1"),await Vt(e,wt),!0):!1}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(e=>xt(e,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){var e=await this._withRetries(e=>async function(e,t){return e=Ut(e,!1).get(t),void 0===(t=await new Mt(e).toPromise())?null:t.value}(e,t));return this.localCache[t]=e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Vt(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){var e,t,n=await this._withRetries(e=>{e=Ut(e,!1).getAll();return new Mt(e).toPromise()});if(!n)return[];if(0!==this.pendingWrites)return[];const i=[],r=new Set;for({fbase_key:e,value:t}of n)r.add(e),JSON.stringify(this.localCache[e])!==JSON.stringify(t)&&(this.notifyListeners(e,t),i.push(e));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),i.push(s));return i}notifyListeners(e,t){this.localCache[e]=t;e=this.listeners[e];if(e)for(const n of Array.from(e))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}jt.type="LOCAL";const zt=jt;
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
 */function qt(i){return new Promise((e,n)=>{const t=document.createElement("script");t.setAttribute("src",i),t.onload=e,t.onerror=e=>{const t=o("internal-error");t.customData=e,n(t)},t.type="text/javascript",t.charset="UTF-8",(null!=(e=null==(e=document.getElementsByTagName("head"))?void 0:e[0])?e:document).appendChild(t)})}function Ht(e){return"__"+e+Math.floor(1e6*Math.random())}
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
 */class Wt{constructor(e){this.auth=e,this.counter=1e12,this._widgets=new Map}render(e,t){var n=this.counter;return this._widgets.set(n,new Gt(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t,e=e||1e12;null!=(t=this._widgets.get(e))&&t.delete(),this._widgets.delete(e)}getResponse(e){return(null==(e=this._widgets.get(e||1e12))?void 0:e.getResponse())||""}async execute(e){return null!=(e=this._widgets.get(e||1e12))&&e.execute(),""}}class Gt{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};n="string"==typeof e?document.getElementById(e):e;g(n,"argument-error",{appName:t}),this.container=n,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=function(t){const n=[],i="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let e=0;e<t;e++)n.push(i.charAt(Math.floor(Math.random()*i.length)));return n.join("")}
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
 */(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()},6e4)},500))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}const Kt=Ht("rcb"),Jt=new re(3e4,6e4);class Bt{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!(null==(e=C().grecaptcha)||!e.render)}load(s,a=""){var e;return g((e=a).length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e),s,"argument-error"),this.shouldResolveImmediately(a)?Promise.resolve(C().grecaptcha):new Promise((t,i)=>{const r=C().setTimeout(()=>{i(o(s,"network-request-failed"))},Jt.get());C()[Kt]=()=>{C().clearTimeout(r),delete C()[Kt];const e=C().grecaptcha;if(e){const n=e.render;e.render=(e,t)=>{e=n(e,t);return this.counter++,e},this.hostLanguage=a,t(e)}else i(o(s,"internal-error"))},qt("https://www.google.com/recaptcha/api.js??"+(0,h.xO)({onload:Kt,render:"explicit",hl:a})).catch(()=>{clearTimeout(r),i(o(s,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!(null==(t=C().grecaptcha)||!t.render)&&(e===this.hostLanguage||0<this.counter||this.librarySeparatelyLoaded)}}class Yt{async load(e){return new Wt(e)}clearedOneInstance(){}}
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
 */const $t="recaptcha",Xt={theme:"light",type:"image"};class Zt{constructor(e,t=Object.assign({},Xt),n){this.parameters=t,this.type=$t,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=T(n),this.isInvisible="invisible"===this.parameters.size,g("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");t="string"==typeof e?document.getElementById(e):e;g(t,this.auth,"argument-error"),this.container=t,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=new(this.auth.settings.appVerificationDisabledForTesting?Yt:Bt),this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),i=this.getAssertedRecaptcha();var t=i.getResponse(e);return t||new Promise(t=>{const n=e=>{e&&(this.tokenChangeListeners.delete(n),t(e))};this.tokenChangeListeners.add(n),this.isInvisible&&i.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){g(!this.parameters.sitekey,this.auth,"argument-error"),g(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),g("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(n){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"==typeof n)n(t);else if("string"==typeof n){const e=C()[n];"function"==typeof e&&e(t)}}}assertNotDestroyed(){g(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;var t;this.isInvisible||(t=document.createElement("div"),e.appendChild(t),e=t),this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){g(ne()&&!Pt(),this.auth,"internal-error"),await function(){let t=null;return new Promise(e=>{"complete"===document.readyState?e():(t=()=>e(),window.addEventListener("load",t))}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}
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
 */(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);var e=await((await f(this.auth,"GET","/v1/recaptchaParams")).recaptchaSiteKey||"");g(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return g(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}class Qt{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){e=w._fromVerification(this.verificationId,e);return this.onConfirmation(e)}}async function en(t,n,i){var r,s,a,o,u,c,d,l,h=await i.verify();try{g("string"==typeof h,t,"argument-error"),g(i.type===$t,t,"argument-error");let e;return"session"in(e="string"==typeof n?{phoneNumber:n}:n)?(s=e.session,("phoneNumber"in e?(g("enroll"===s.type,t,"internal-error"),d=t,l={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:e.phoneNumber,recaptchaToken:h}},(await f(d,"POST","/v2/accounts/mfaEnrollment:start",m(d,l))).phoneSessionInfo):(g("signin"===s.type,t,"internal-error"),g(a=(null==(r=e.multiFactorHint)?void 0:r.uid)||e.multiFactorUid,t,"missing-multi-factor-info"),(await f(t,"POST","/v2/accounts/mfaSignIn:start",m(t,{mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:h}}))).phoneResponseInfo)).sessionInfo):(o=(u=t,c={phoneNumber:e.phoneNumber,recaptchaToken:h},await f(u,"POST","/v1/accounts:sendVerificationCode",m(u,c)))["sessionInfo"],o)}finally{i._reset()}}class D{constructor(e){this.providerId=D.PROVIDER_ID,this.auth=T(e)}verifyPhoneNumber(e,t){return en(this.auth,e,(0,h.m9)(t))}static credential(e,t){return w._fromVerification(e,t)}static credentialFromResult(e){return D.credentialFromTaggedObject(e)}static credentialFromError(e){return D.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){var t;return e&&({phoneNumber:e,temporaryProof:t}=e,e&&t)?w._fromTokenResponse(e,t):null}}
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
function L(e,t){return t?l(t):(g(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */D.PROVIDER_ID="phone",D.PHONE_SIGN_IN_METHOD="phone";class tn extends t{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return r(e,this._buildIdpRequest())}_linkToIdToken(e,t){return r(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return r(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function nn(e){return st(e.auth,new tn(e),e.bypassAuthState)}function rn(e){var{auth:t,user:n}=e;return g(n,t,"internal-error"),rt(n,new tn(e),e.bypassAuthState)}async function sn(e){var{auth:t,user:n}=e;return g(n,t,"internal-error"),nt(n,new tn(e),e.bypassAuthState)}
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
 */class an{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){var{urlResponse:e,sessionId:t,postBody:n,tenantId:i,error:r,type:s}=e;if(r)this.reject(r);else{r={auth:this.auth,requestUri:e,sessionId:t,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(r))}catch(e){this.reject(e)}}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nn;case"linkViaPopup":case"linkViaRedirect":return sn;case"reauthViaPopup":case"reauthViaRedirect":return rn;default:d(this.auth,"internal-error")}}resolve(e){s(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){s(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const on=new re(2e3,1e4);class M extends an{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,M.currentPopupAction&&M.currentPopupAction.cancel(),M.currentPopupAction=this}async executeNotNull(){var e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){s(1===this.filter.length,"Popup operations only handle one event");var e=St();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(o(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null==(e=this.authWindow)?void 0:e.associatedEvent)||null}cancel(){this.reject(o(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,M.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e;null!=(e=null==(e=this.authWindow)?void 0:e.window)&&e.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(o(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,on.get())};t()}}M.currentPopupAction=null;
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
const un="pendingRedirect",cn=new Map;class dn extends an{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let t=cn.get(this.auth._key());if(!t){try{const e=await async function(e,t){const n=mn(t),i=pn(e);if(!await i._isAvailable())return!1;t="true"===await i._get(n);return await i._remove(n),t}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}cn.set(this.auth._key(),t)}return this.bypassAuthState||cn.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type)this.resolve(null);else if(e.eventId){var t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ln(e,t){return pn(e)._set(mn(t),"true")}function hn(e,t){cn.set(e._key(),t)}function pn(e){return l(e._redirectPersistence)}function mn(e){return ke(un,e.config.apiKey,e.name)}async function fn(e,t,n=!1){const i=T(e);e=L(i,t);const r=new dn(i,e,n),s=await r.execute();return s&&!n&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,t)),s}async function gn(e){var t=St(e.uid+":::");return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
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
 */class vn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(e=>{this.isEventForConsumer(t,e)&&(n=!0,this.sendToConsumer(t,e),this.saveEventToCache(t))}),!this.hasHandledPotentialRedirect&&function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return 1;case"unknown":return _n(e);default:return}}
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
 */(t)&&(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(e,t){var n;e.error&&!_n(e)?(n=(null==(n=e.error.code)?void 0:n.split("auth/")[1])||"internal-error",t.onError(o(this.auth,n))):t.onAuthEvent(e)}isEventForConsumer(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return 6e5<=Date.now()-this.lastProcessedEventTime&&this.cachedEventUids.clear(),this.cachedEventUids.has(In(e))}saveEventToCache(e){this.cachedEventUids.add(In(e)),this.lastProcessedEventTime=Date.now()}}function In(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function _n({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const Tn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yn=/^https?/;async function wn(e){if(!e.config.emulator){var t=(await f(e,"GET","/v1/projects",{}))["authorizedDomains"];for(const n of t)try{if(function(e){const t=u(),{protocol:n,hostname:i}=new URL(t);{var r;if(e.startsWith("chrome-extension://"))return""===(r=new URL(e)).hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!yn.test(n))return;if(Tn.test(e))return i===e;const s=e.replace(/\./g,"\\."),a=new RegExp("^(.+\\."+s+"|"+s+")$","i");return a.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */(n))return}catch(e){}d(e,"unauthorized-domain")}}const En=new re(3e4,6e4);function kn(){const t=C().___jsl;if(null!==t&&void 0!==t&&t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let An=null;function Rn(e){var r;return An=An||(r=e,new Promise((e,t)=>{var n;function i(){kn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kn(),t(o(r,"network-request-failed"))},timeout:En.get()})}if(null!=(n=null==(n=C().gapi)?void 0:n.iframes)&&n.Iframe)e(gapi.iframes.getContext());else{if(null==(n=C().gapi)||!n.load)return n=Ht("iframefcb"),C()[n]=()=>{gapi.load?i():t(o(r,"network-request-failed"))},qt("https://apis.google.com/js/api.js?onload="+n).catch(e=>t(e));i()}}).catch(e=>{throw An=null,e}))}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const bn=new re(5e3,15e3),Nn="__/auth/iframe",Sn="emulator/auth/iframe",On={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Pn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function Cn(a){const e=await Rn(a);var t=C().gapi;return g(t,a,"internal-error"),e.open({where:document.body,url:function(e){var t=e.config,n=(g(t.authDomain,e,"auth-domain-config-required"),t.emulator?se(t,Sn):`https://${e.config.authDomain}/`+Nn);const i={apiKey:t.apiKey,appName:e.name,v:p.Jn},r=((t=Pn.get(e.config.apiHost))&&(i.eid=t),e._getFrameworks());return r.length&&(i.fw=r.join(",")),n+"?"+(0,h.xO)(i).slice(1)}(a),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:On,dontclear:!0},s=>new Promise(async(e,t)=>{await s.restyle({setHideOnLeave:!1});const n=o(a,"network-request-failed"),i=C().setTimeout(()=>{t(n)},bn.get());function r(){C().clearTimeout(i),e(s)}s.ping(r).then(r,()=>{t(n)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Dn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Ln{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Mn(e,t,n,i=500,r=600){var s=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let o="";const u=Object.assign(Object.assign({},Dn),{width:i.toString(),height:r.toString(),top:s,left:a});i=(0,h.z$)().toLowerCase(),n&&(o=Se(i)?"_blank":n),be(i)&&(t=t||"http://localhost",u.scrollbars="yes"),r=Object.entries(u).reduce((e,[t,n])=>""+e+t+`=${n},`,"");if([s=(0,h.z$)()]=[i],Le(s)&&null!=(s=window.navigator)&&s.standalone&&"_self"!==o){{a=t||"";n=o;const d=document.createElement("a"),l=(d.href=a,d.target=n,document.createEvent("MouseEvent"));l.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),d.dispatchEvent(l)}return new Ln(null)}const c=window.open(t||"",o,r);g(c,e,"popup-blocked");try{c.focus()}catch(e){}return new Ln(c)}
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
const Un="__/auth/handler",Fn="emulator/auth/handler";function xn(e,t,n,i,r,s){g(e.config.authDomain,e,"auth-domain-config-required"),g(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:p.Jn,eventId:r};if(t instanceof k){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",(0,h.xb)(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(var[o,u]of Object.entries(s||{}))a[o]=u}if(t instanceof A){const d=t.getScopes().filter(e=>""!==e);0<d.length&&(a.scopes=d.join(","))}e.tenantId&&(a.tid=e.tenantId);const c=a;for(const l of Object.keys(c))void 0===c[l]&&delete c[l];return`${n=[e["config"]][0],n.emulator?se(n,Fn):`https://${n.authDomain}/`+Un}?`+(0,h.xO)(c).slice(1)}
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
const Vn="webStorageSupport";const jn=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bt,this._completeRedirectFn=fn,this._overrideRedirectResult=hn}async _openPopup(e,t,n,i){s(null==(r=this.eventManagers[e._key()])?void 0:r.manager,"_initialize() not called before _openPopup()");var r=xn(e,t,n,u(),i);return Mn(e,r,St())}async _openRedirect(e,t,n,i){return await this._originValidation(e),e=xn(e,t,n,u(),i),C().location.href=e,new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:n}=this.eventManagers[t];return i?Promise.resolve(i):(s(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(t){const e=await Cn(t),n=new vn(t);return e.register("authEvent",e=>{return g(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,n){const e=this.iframes[t._key()];e.send(Vn,{type:Vn},e=>{e=null==(e=null==e?void 0:e[0])?void 0:e[Vn];void 0!==e&&n(!!e),d(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=wn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Me()||Ne()||Le()}};class zn extends class{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return i("unexpected MultiFactorSessionType")}}}{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new zn(e)}_finalizeEnroll(e,t,n){return e=e,t={idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()},f(e,"POST","/v2/accounts/mfaEnrollment:finalize",m(e,t))}_finalizeSignIn(e,t){return e=e,t={mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()},f(e,"POST","/v2/accounts/mfaSignIn:finalize",m(e,t))}}class qn{constructor(){}static assertion(e){return zn._fromCredential(e)}}qn.FACTOR_ID="phone";var Hn,e="@firebase/auth";
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
class Wn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null==(e=this.auth.currentUser)?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(t){var e;this.assertAuthConfigured(),this.internalListeners.has(t)||(e=this.auth.onIdTokenChanged(e=>{t((null==(e=e)?void 0:e.stsTokenManager.accessToken)||null)}),this.internalListeners.set(t,e),this.updateProactiveRefresh())}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){0<this.internalListeners.size?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */Hn="Browser",(0,p.Xd)(new F.wA("auth",(e,{options:t})=>{var n=e.getProvider("app").getImmediate(),e=e.getProvider("heartbeat");const{apiKey:i,authDomain:r}=n.options;g(i&&!i.includes(":"),"invalid-api-key",{appName:n.name}),g(!(null!==r&&void 0!==r&&r.includes(":")),"argument-error",{appName:n.name});var s={apiKey:i,authDomain:r,clientPlatform:Hn,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ue(Hn)},n=new xe(n,e,s);{e=n;const a=(null==(s=t)?void 0:s.persistence)||[];t=(Array.isArray(a)?a:[a]).map(l);null!=s&&s.errorMap&&e._updateErrorMap(s.errorMap),e._initializeWithPersistence(t,null==s?void 0:s.popupRedirectResolver)}return n},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const i=e.getProvider("auth-internal");i.initialize()})),(0,p.Xd)(new F.wA("auth-internal",e=>{var e=T(e.getProvider("auth").getImmediate());return e=e,new Wn(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,p.KN)(e,"0.20.7",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Hn)),(0,p.KN)(e,"0.20.7","esm2017")}}]);