// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBWOrhkkZ8Rp9ZiSylQJXuo4qiD-2H04ls",
  authDomain: "solid-crypto.firebaseapp.com",
  projectId: "solid-crypto",
  storageBucket: "solid-crypto.appspot.com",
  messagingSenderId: "514188354466",
  appId: "1:514188354466:web:cbc727e7f4623291fc48fb",
  measurementId: "G-ZETFG854DQ",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
