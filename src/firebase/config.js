// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBh_rf_f7nJVYtcmG_jQPB6ga3pDgkb0f8",
  authDomain: "kompostonosz-back.firebaseapp.com",
  projectId: "kompostonosz-back",
  storageBucket: "kompostonosz-back.appspot.com",
  messagingSenderId: "602747234006",
  appId: "1:602747234006:web:6df2203f5f45997f114b77",
  measurementId: "G-RDG0GRV1X3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);