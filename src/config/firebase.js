// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_vt_uVQJTb42yGlYtMwm05mkCbXGCMGc",
  authDomain: "private-things-2023.firebaseapp.com",
  databaseURL: "https://private-things-2023-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "private-things-2023",
  storageBucket: "private-things-2023.appspot.com",
  messagingSenderId: "662959275951",
  appId: "1:662959275951:web:0dfbcdae6b2f7274c7b95a",
  measurementId: "G-MJC0LPJ064"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app}