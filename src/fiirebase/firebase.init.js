// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH0E9BZbBAW_VWIn7G9Xc6nYr4fQq2nfw",
  authDomain: "sports-equip.firebaseapp.com",
  projectId: "sports-equip",
  storageBucket: "sports-equip.firebasestorage.app",
  messagingSenderId: "487769157864",
  appId: "1:487769157864:web:8b26e86a1d27c46bb7595d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
