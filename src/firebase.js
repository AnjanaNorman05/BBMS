// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth"; // Add Firebase Auth
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOXTo7Eo1AI7NDWXvZnOqk6STGZpui5RY",
  authDomain: "bbms-5b10d.firebaseapp.com",
  projectId: "bbms-5b10d",
  storageBucket: "bbms-5b10d.firebasestorage.app",
  messagingSenderId: "359380978818",
  appId: "1:359380978818:web:42a04f160e564b2b74f89b",
  measurementId: "G-0CQLJ1022G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get Firebase Authentication instance
const analytics = getAnalytics(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail };
