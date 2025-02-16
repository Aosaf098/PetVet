// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDudhNCBA5tnguZFWAeQq26UPy57YKuxLw",
  authDomain: "petvet-a844d.firebaseapp.com",
  projectId: "petvet-a844d",
  storageBucket: "petvet-a844d.firebasestorage.app",
  messagingSenderId: "815518081956",
  appId: "1:815518081956:web:551a8d7d4fc884840bd731"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)