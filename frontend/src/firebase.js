// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb-GhotilYwe1_Cdtp9TQ_2t9Vcj_yOoQ",
  authDomain: "car2drvr-finhacks.firebaseapp.com",
  projectId: "car2drvr-finhacks",
  storageBucket: "car2drvr-finhacks.firebasestorage.app",
  messagingSenderId: "72624478374",
  appId: "1:72624478374:web:5f590ea830e71f02cabc67",
  measurementId: "G-SK0QET9J3Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
