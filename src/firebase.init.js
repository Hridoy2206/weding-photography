// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlx77RhLuDHekCdZqc78JgOTS4u3l-MxM",
  authDomain: "wedding-photography-6222b.firebaseapp.com",
  projectId: "wedding-photography-6222b",
  storageBucket: "wedding-photography-6222b.appspot.com",
  messagingSenderId: "447674019546",
  appId: "1:447674019546:web:bdd92141db427c19783fe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;