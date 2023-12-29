// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-cKovDJixNm9QBSrv-2jyt_xi2yyZsks",
  authDomain: "react-and-firebase-practice.firebaseapp.com",
  projectId: "react-and-firebase-practice",
  storageBucket: "react-and-firebase-practice.appspot.com",
  messagingSenderId: "278767708546",
  appId: "1:278767708546:web:864830f4218c6c1664079b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;