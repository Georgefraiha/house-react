// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByMbyTjtMpkOeXGUy140FFIIpLv6tPs68",
  authDomain: "house-react-c4465.firebaseapp.com",
  projectId: "house-react-c4465",
  storageBucket: "house-react-c4465.appspot.com",
  messagingSenderId: "736367360917",
  appId: "1:736367360917:web:7854f4690774c1a741d49c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
