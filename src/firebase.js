// firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAenG0DQoXw6AlLRLSeiS0IUZxTrBkW3X0",
  authDomain: "irshad-alam-portfolio.firebaseapp.com",
  projectId: "irshad-alam-portfolio",
  storageBucket: "irshad-alam-portfolio.appspot.com",   // ✔ FIXED
  messagingSenderId: "706898209128",
  appId: "1:706898209128:web:e1a926f5c0163c4ec60edd",
  measurementId: "G-7XB5JN7HEC",

  // ✔ Your correct database URL
  databaseURL: "https://irshad-alam-portfolio-default-rtdb.firebaseio.com"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getDatabase(app);
