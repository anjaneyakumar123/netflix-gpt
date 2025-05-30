// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKLMY2UgIEBMRkTMZYP4ekoAWMg6Y-AQ0",
  authDomain: "netflixgpt-ef47d.firebaseapp.com",
  projectId: "netflixgpt-ef47d",
  storageBucket: "netflixgpt-ef47d.firebasestorage.app",
  messagingSenderId: "25664338262",
  appId: "1:25664338262:web:a43018729f0476b337fef7",
  measurementId: "G-8B4N4ZM6X7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();