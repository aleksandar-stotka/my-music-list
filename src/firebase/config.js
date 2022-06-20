import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0hNXTn6VOXra51DaRrG4dBwIi4ALG77w",
  authDomain: "list-2453e.firebaseapp.com",
  projectId: "list-2453e",
  storageBucket: "list-2453e.appspot.com",
  messagingSenderId: "636406443595",
  appId: "1:636406443595:web:3b5a25a41993a12ed9a7ce",
};
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

///timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
