// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAUkvdZlv5MrG_mSFy_LzoMkhwzG2ftxo",
  authDomain: "coffee-store-54439.firebaseapp.com",
  projectId: "coffee-store-54439",
  storageBucket: "coffee-store-54439.appspot.com",
  messagingSenderId: "1090626442785",
  appId: "1:1090626442785:web:987b13c016c523b8077560"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;