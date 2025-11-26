// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAenG0DQoXw6AlLRLSeiS0IUZxTrBkW3X0",
  authDomain: "irshad-alam-portfolio.firebaseapp.com",
  projectId: "irshad-alam-portfolio",
  storageBucket: "irshad-alam-portfolio.firebasestorage.app",
  messagingSenderId: "706898209128",
  appId: "1:706898209128:web:e1a926f5c0163c4ec60edd",
  measurementId: "G-7XB5JN7HEC",
  databaseURL: "https://irshad-alam-portfolio-default-rtdb.firebaseio.com/",
};

// Initialize Firebase once
const app = initializeApp(firebaseConfig);

// Export database instance
export const db = getDatabase(app);
