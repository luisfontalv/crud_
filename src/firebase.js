import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA2Ub-RaklhMiJqXlMK7BI4bR5MA9lpZ9w",
  authDomain: "desarrolloweb-646ba.firebaseapp.com",
  projectId: "desarrolloweb-646ba",
  storageBucket: "desarrolloweb-646ba.appspot.com",
  messagingSenderId: "343756257803",
  appId: "1:343756257803:web:fb7cb32c0e5b973b22a50e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export {firebase}