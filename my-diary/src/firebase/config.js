//npm install firebase 후 config.js 파일 생성, 아래 코드 입력
// 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore, Timestamp } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-1PM2MH74C0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const appFireStore = getFirestore(app);
// firestore 를 초기화
const appAuth = getAuth();
// timestamp 초기화
const timeStamp = Timestamp;

const analytics = getAnalytics(app);

export {appFireStore, appAuth, timeStamp}