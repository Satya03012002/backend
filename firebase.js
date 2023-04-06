// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtA7-vdAVUO6b2D_FKEM88sIDjNKEduUY",
  authDomain: "fullstack-937f8.firebaseapp.com",
  projectId: "fullstack-937f8",
  storageBucket: "fullstack-937f8.appspot.com",
  messagingSenderId: "980665968025",
  appId: "1:980665968025:web:081fafb21b78fb3ecf1f08",
  measurementId: "G-WZKFNGRFBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);