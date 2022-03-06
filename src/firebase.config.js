// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASVOUXFlE0ensSeqzE1aP17UWbli68J78",
  authDomain: "house-react-75c77.firebaseapp.com",
  projectId: "house-react-75c77",
  storageBucket: "house-react-75c77.appspot.com",
  messagingSenderId: "860648630935",
  appId: "1:860648630935:web:ad67ddb94d2639a02597d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
