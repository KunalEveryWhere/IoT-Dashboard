//import firebase from "firebase/app";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBK90ChXy6mUQoIVN7F0Wlwb80-JNLaID8",
  authDomain: "dashboard-28c97.firebaseapp.com",
  databaseURL: "https://dashboard-28c97.firebaseio.com",
  projectId: "dashboard-28c97",
  storageBucket: "dashboard-28c97.appspot.com",
  messagingSenderId: "791254125475",
  appId: "1:791254125475:web:a03e5539679c7ffd6d2816",
  measurementId: "G-B7GH2K236E",
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
