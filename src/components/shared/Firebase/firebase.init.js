// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsi1d4fT_Eagj6pnwgf6UOR86yXIyAqqA",
  authDomain: "laptop-stock-1.firebaseapp.com",
  projectId: "laptop-stock-1",
  storageBucket: "laptop-stock-1.appspot.com",
  messagingSenderId: "278003908646",
  appId: "1:278003908646:web:e922938cc41e38c12526e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;