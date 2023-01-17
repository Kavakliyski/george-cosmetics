// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
    authDomain: "george-demo-b071e.firebaseapp.com",
    projectId: "george-demo-b071e",
    storageBucket: "george-demo-b071e.appspot.com",
    messagingSenderId: "1023972579186",
    appId: "1:1023972579186:web:6f149b34e804d3a2fdafeb",
    measurementId: "G-GRCRZCWBW8"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);


export default auth;