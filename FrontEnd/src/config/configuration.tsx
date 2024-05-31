// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// Your Firebase config here
const firebaseConfig = {
    apiKey: "AIzaSyCz880oJYFCMK2ymJnz2lrKlnflsoNwEvk",
    authDomain: "rigo-hrms-app.firebaseapp.com",
    projectId: "rigo-hrms-app",
    storageBucket:  "rigo-hrms-app.appspot.com",
    messagingSenderId: "511219786758",
    appId: "1:511219786758:web:86f8374eabd1720f894f87",
    measurementId: "G-5Q2BJ2XE0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log('app',app)
// Initialize Realtime Database
const database = getDatabase(app);

export { database };
// Now you can use Firebase services in your React app!