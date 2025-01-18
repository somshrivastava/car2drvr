// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-5y45cvh0-54YBYvo6WSvJDMbj9E3WLk",
  authDomain: "nutrition-6853e.firebaseapp.com",
  projectId: "nutrition-6853e",
  storageBucket: "nutrition-6853e.firebasestorage.app",
  messagingSenderId: "151208121108",
  appId: "1:151208121108:web:2e292fa48269753917a801",
  measurementId: "G-ETETHC7H30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
