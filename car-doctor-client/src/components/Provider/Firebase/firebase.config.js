// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6p6AdbS81wJNi8bobR9Z7OGo8WgQENko",
  authDomain: "car-doctor-e246a.firebaseapp.com",
  projectId: "car-doctor-e246a",
  storageBucket: "car-doctor-e246a.appspot.com",
  messagingSenderId: "441625156298",
  appId: "1:441625156298:web:d752c6409f142adacaf233"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default  auth;