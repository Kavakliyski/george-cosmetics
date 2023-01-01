
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDly7CHkOPN8AiIYMdGr-O8-PJytWWBMfA",
    authDomain: "george-demo-b071e.firebaseapp.com",
    projectId: "george-demo-b071e",
    storageBucket: "george-demo-b071e.appspot.com",
    messagingSenderId: "1023972579186",
    appId: "1:1023972579186:web:6f149b34e804d3a2fdafeb",
    measurementId: "G-GRCRZCWBW8"
};


// export const Providers = {
//     google: new GoogleAuthProvider()
// }


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
