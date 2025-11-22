// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgqZ0zgbG1P_KrcGC8FidJsPOuUwnwXDo",
  authDomain: "cprg306-assignments-1692d.firebaseapp.com",
  projectId: "cprg306-assignments-1692d",
  storageBucket: "cprg306-assignments-1692d.firebasestorage.app",
  messagingSenderId: "559712482717",
  appId: "1:559712482717:web:06f715d8c486dd670deb74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);