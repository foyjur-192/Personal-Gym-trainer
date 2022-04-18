// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7JP6DeHMUJadQnEdmEUE13N6mEtmL2YQ",
  authDomain: "personal-gym-trainer-c75ff.firebaseapp.com",
  projectId: "personal-gym-trainer-c75ff",
  storageBucket: "personal-gym-trainer-c75ff.appspot.com",
  messagingSenderId: "643753475224",
  appId: "1:643753475224:web:fe58b7a3090f78ffdda4ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
