// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";


const firebaseConfig = {
    apiKey: "AIzaSyB28hsrV1kpqM8I3hT3B6rTEhpwg0ClcRs",
    authDomain: "mystura-36340.firebaseapp.com",
    projectId: "mystura-36340",
    storageBucket: "mystura-36340.firebasestorage.app",
    messagingSenderId: "174901325860",
    appId: "1:174901325860:web:4c4c3b0e2d75383360a8b1",
    measurementId: "G-LKVX7BSBPN"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const messaging = getMessaging(app);
