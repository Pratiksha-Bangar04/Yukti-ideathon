// Firebase configuration and initialization

import { initializeApp } from
    "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getAuth } from
    "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import { getFirestore } from
    "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Replace the values below with the values
// from your Firebase Console.
const firebaseConfig = {
    apiKey: "AIzaSyDMeTIes1YIox_3ldJw2Izk5x11S-5rKjQ",
    authDomain: "yukti-b5628.firebaseapp.com",
    projectId: "yukti-b5628",
    storageBucket: "yukti-b5628.firebasestorage.app",
    messagingSenderId: "331022829948",
    appId: "1:331022829948:web:f55709cb875dc90756bcf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Authentication
const auth = getAuth(app);

// Cloud Firestore
const db = getFirestore(app);

// Export for other JavaScript files
export { app, auth, db };