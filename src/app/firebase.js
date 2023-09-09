import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6o9Z9GtsTKkic3JWVqG_xyPsD6pINRtA",
  authDomain: "next-auth-5fca0.firebaseapp.com",
  projectId: "next-auth-5fca0",
  storageBucket: "next-auth-5fca0.appspot.com",
  messagingSenderId: "149926600489",
  appId: "1:149926600489:web:703f7d41bb1c33e2232138",
  measurementId: "G-RRJKJ7PEKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;