import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDbikuZkVXPuX0v2g9dUGlZMoYLbcjyDk",
  authDomain: "citizens-report-16372.firebaseapp.com",
  projectId: "citizens-report-16372",
  storageBucket: "citizens-report-16372.appspot.com",
  messagingSenderId: "610161830686",
  appId: "1:610161830686:web:6ef6808665c3640ffbf70f",
  measurementId: "G-8FF505LZQW"


  // apiKey: process.env.FIREBASE_API_KEY,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.FIREBASE_APP_ID,
  // measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };
