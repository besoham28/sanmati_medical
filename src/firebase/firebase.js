import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCsFzjRul3nmvH2DpAOzlaXoAyJ2FTEcHY",
    authDomain: "sanmati-medical.firebaseapp.com",
    projectId: "sanmati-medical",
    storageBucket: "sanmati-medical.firebasestorage.app",
    messagingSenderId: "584027630610",
    appId: "1:584027630610:web:947a261e44f5fdbd9c7ccb",
    measurementId: "G-G1KNJSFC0C"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);