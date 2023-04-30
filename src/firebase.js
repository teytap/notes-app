// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlNmdPOiXAsIVmo75aijjzYGemVfl-61c",
  authDomain: "notes-in-react.firebaseapp.com",
  projectId: "notes-in-react",
  storageBucket: "notes-in-react.appspot.com",
  messagingSenderId: "210945807658",
  appId: "1:210945807658:web:6a9962065030bcf67c7a53",
  measurementId: "G-QC8V61LTNY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
