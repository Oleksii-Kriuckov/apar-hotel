// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG_G2Nu7P7lJsxF2-znVYtPVKH_3Mlvfs",
  authDomain: "apart-hotel-42705.firebaseapp.com",
  projectId: "apart-hotel-42705",
  storageBucket: "apart-hotel-42705.appspot.com",
  messagingSenderId: "826408443827",
  appId: "1:826408443827:web:83475f4691b354c34075c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)