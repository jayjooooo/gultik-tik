// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7fFpZmlPD9ubPonj5hnSyP0pN4_2lloI",
  authDomain: "gultik-2cf49.firebaseapp.com",
  projectId: "gultik-2cf49",
  storageBucket: "gultik-2cf49.appspot.com",
  messagingSenderId: "59973679809",
  appId: "1:59973679809:web:e230e85fb038946b7df240",
  measurementId: "G-5M09XBHWHT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);