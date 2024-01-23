// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernauth-a3536.firebaseapp.com",
  projectId: "mernauth-a3536",
  storageBucket: "mernauth-a3536.appspot.com",
  messagingSenderId: "578092165315",
  appId: "1:578092165315:web:535c8db32cd40bf5f79a76"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);