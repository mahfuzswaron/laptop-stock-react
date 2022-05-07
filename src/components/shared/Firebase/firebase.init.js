// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "laptop-stock-new.firebaseapp.com",
  projectId: "laptop-stock-new",
  storageBucket: "laptop-stock-new.appspot.com",
  messagingSenderId: "949447590831",
  appId: `1:949447590831:web:563641476c8be58190655a`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;