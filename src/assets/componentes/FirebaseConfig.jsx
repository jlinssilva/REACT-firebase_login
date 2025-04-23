// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const FirebaseConfig = {
  apiKey: "AIzaSyDUgvWWlfSoZQUJKqfsVvKsI_4xlkh0azE",
  authDomain: "e-impacto.firebaseapp.com",
  projectId: "e-impacto",
  storageBucket: "e-impacto.firebasestorage.app",
  messagingSenderId: "27909519414",
  appId: "1:27909519414:web:dfdb54a6ee5a30fb764097",
  measurementId: "G-HHQX3ZGBF1"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };