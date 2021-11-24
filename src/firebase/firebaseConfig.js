import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADNpvoOArSw2weYIE5zvoyEANhJ_9vCfE",
  authDomain: "test-react-firebase-f8528.firebaseapp.com",
  projectId: "test-react-firebase-f8528",
  storageBucket: "test-react-firebase-f8528.appspot.com",
  messagingSenderId: "976932896175",
  appId: "1:976932896175:web:4fce26dde09462f373435a",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
