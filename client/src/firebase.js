// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5021f.firebaseapp.com",
  projectId: "mern-estate-5021f",
  storageBucket: "mern-estate-5021f.appspot.com",
  messagingSenderId: "924836373487",
  appId: "1:924836373487:web:55b81e8784143c61250c1a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);