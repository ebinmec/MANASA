// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIWXz3TPAlSu3BQCW_f1tdzz1bniP2DEg",
  authDomain: "manasa-71471.firebaseapp.com",
  projectId: "manasa-71471",
  storageBucket: "manasa-71471.appspot.com",
  messagingSenderId: "109661177339",
  appId: "1:109661177339:web:a5d09c7fd5c5409482f75e",
  measurementId: "G-6EQJJEELL8"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);

export default app;