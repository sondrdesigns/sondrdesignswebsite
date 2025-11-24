import{r as n,i as a,g as t}from"./index.esm-CtjptQNM.js";var E="firebase",c="12.6.0";/**
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
 */n(E,c,"app");const _={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"your-api-key-here",VITE_FIREBASE_APP_ID:"your-app-id",VITE_FIREBASE_AUTH_DOMAIN:"your-project-id.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"your-messaging-sender-id",VITE_FIREBASE_PROJECT_ID:"your-project-id",VITE_FIREBASE_STORAGE_BUCKET:"your-project-id.appspot.com"},s={apiKey:"your-api-key-here",authDomain:"your-project-id.firebaseapp.com",projectId:"your-project-id",storageBucket:"your-project-id.appspot.com",messagingSenderId:"your-messaging-sender-id",appId:"your-app-id"},u=["VITE_FIREBASE_API_KEY","VITE_FIREBASE_AUTH_DOMAIN","VITE_FIREBASE_PROJECT_ID","VITE_FIREBASE_STORAGE_BUCKET","VITE_FIREBASE_MESSAGING_SENDER_ID","VITE_FIREBASE_APP_ID"],o=u.filter(e=>{const r=_[e];return!r||r.includes("your-")||r.includes("your-project-id")||r.includes("your-api-key")||r.includes("your-messaging-sender-id")||r.includes("your-app-id")});o.length>0&&(console.error("❌ Firebase Configuration Error: Missing or placeholder environment variables:"),o.forEach(e=>{console.error(`   - ${e}`)}),console.error(`
📝 Please update your .env file with your Firebase configuration values.`),console.error(`   See FIREBASE_SETUP.md for instructions.
`));const p=Object.values(s).some(e=>typeof e=="string"&&e.includes("your-"));p&&(console.warn("⚠️  Warning: Firebase configuration contains placeholder values."),console.warn(`   The contact form will not work until you add your Firebase credentials to .env
`));let i,l;try{i=a(s),l=t(i),console.log("✅ Firebase initialized successfully")}catch(e){throw console.error("❌ Firebase initialization failed:",e),e}export{l as db};
