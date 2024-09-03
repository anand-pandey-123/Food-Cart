// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBs8XW5ee2zHy4lKZXNIChcvUQWDHUFzM",
  authDomain: "food-cart-79c15.firebaseapp.com",
  projectId: "food-cart-79c15",
  storageBucket: "food-cart-79c15.appspot.com",
  messagingSenderId: "938610534230",
  appId: "1:938610534230:web:e7088d61c91effdc7c98f7",
  measurementId: "G-FEGWL5015W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();