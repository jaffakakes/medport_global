// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1MmDW4ZJTimIMY3n-ubDTwbRYu78h0hE",
  authDomain: "medport-global.firebaseapp.com",
  projectId: "medport-global",
  storageBucket: "medport-global.appspot.com",
  messagingSenderId: "776244099452",
  appId: "1:776244099452:web:17e664d5eaef17abcd8cf9",
  measurementId: "G-PDQLZDV6Y0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;