import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPPg3vR8lEpkg-wZxh2tS0YOiEM1_fHTU",
  authDomain: "next-app-3b4fe.firebaseapp.com",
  projectId: "next-app-3b4fe",
  storageBucket: "next-app-3b4fe.appspot.com",
  messagingSenderId: "797740183968",
  appId: "1:797740183968:web:98d24388ddc949d80ef4c5",
  measurementId: "G-551KVTSH8R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
