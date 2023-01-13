// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth"
import { initializeApp } from 'firebase/app';
  import { getFirestore } from 'firebase/firestore'
import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAd_reAaN8tQ72yQ2Toqd5hAhaqecU670k",
    authDomain: "realtimeexpo-f7079.firebaseapp.com",
    databaseURL: "https://realtimeexpo-f7079-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "realtimeexpo-f7079",
    storageBucket: "realtimeexpo-f7079.appspot.com",
    messagingSenderId: "45292478154",
    appId: "1:45292478154:web:e7a5b22c9264ca4de71e33",
    measurementId: "G-RJ4NCN0XCL"
  };

//   if(!firebase.apps.length===1){
//     firebase.initializeApp(firebaseConfig);
//   }

//   export {firebase};
// const app = initializeApp(firebaseConfig);
// export const auth =getAuth(app);

if (!firebase.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export {firebase};
  
  
  // TODO: Replace the following with your app's Firebase project configuration
  
  
  export const app = initializeApp(firebaseConfig);
  // MARK: Firestore Reference
  export const db = getFirestore(app);

  