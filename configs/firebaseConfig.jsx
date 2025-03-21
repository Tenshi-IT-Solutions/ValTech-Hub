// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "valtech-5ac67.firebaseapp.com",
  projectId: "valtech-5ac67",
  storageBucket: "valtech-5ac67.firebasestorage.app",
  messagingSenderId: "54625795593",
  appId: "1:54625795593:web:99459dd6bf47f56e4582d8",
  measurementId: "G-YX9LHPZ60J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage=getStorage(app)