// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCajQDWED9L06JH8XzGTZitEUzmHohjWdk",
    authDomain: "the-dragon-news24.firebaseapp.com",
    projectId: "the-dragon-news24",
    storageBucket: "the-dragon-news24.appspot.com",
    messagingSenderId: "994555318058",
    appId: "1:994555318058:web:063d36ff8ac986d4049853",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
