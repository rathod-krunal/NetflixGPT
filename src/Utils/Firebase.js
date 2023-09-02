// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGK4I1PxyH8edlL3ptGXVN3qXymyUDzVY",
  authDomain: "netflixgpt-f3aa8.firebaseapp.com",
  projectId: "netflixgpt-f3aa8",
  storageBucket: "netflixgpt-f3aa8.appspot.com",
  messagingSenderId: "108977236476",
  appId: "1:108977236476:web:304c014052be21586caa79",
  measurementId: "G-4RXCK2XYTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth()