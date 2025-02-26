// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {initializeAuth, getAuth, onAuthStateChanged,
    createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, deleteUser } from "firebase/auth";

import { doc, getDoc , setDoc, getFirestore, collection,query, where, onSnapshot,
        getDocs, addDoc, updateDoc, increment } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL,
        deleteObject } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6VzoQeQ7MhVnlh-vFjT8jdAFBmVYELd0",
  authDomain: "myndstake-admin.firebaseapp.com",
  projectId: "myndstake-admin",
  storageBucket: "myndstake-admin.firebasestorage.app",
  messagingSenderId: "741663298575",
  appId: "1:741663298575:web:aa284645c658c465747f7a",
  measurementId: "G-W377FY6VLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app)

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  db, signOut, doc, getDoc , setDoc, ref, uploadBytesResumable, 
  getDownloadURL, deleteObject, deleteUser, onAuthStateChanged,
  collection,query, where, onSnapshot, getDocs, addDoc, updateDoc, 
  increment
}