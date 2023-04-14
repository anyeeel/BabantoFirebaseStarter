// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCli4Q5GQ0aZfRBRXtn9t-2W0UHRboNfjc",
  authDomain: "gettingstartedwithfireba-a5ca1.firebaseapp.com",
  projectId: "gettingstartedwithfireba-a5ca1",
  storageBucket: "gettingstartedwithfireba-a5ca1.appspot.com",
  messagingSenderId: "300142428339",
  appId: "1:300142428339:web:457c37e8c27e482bc230c6",
  measurementId: "G-VFGSKWEKDH"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app);
