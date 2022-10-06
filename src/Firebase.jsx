
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCSzNULt5zTBFFDfMfzhxwdCoY8wzn1W-0",
  authDomain: "clone-application-api.firebaseapp.com",
  projectId: "clone-application-api",
  storageBucket: "clone-application-api.appspot.com",
  messagingSenderId: "972979379909",
  appId: "1:972979379909:web:28bf12348ce0c1a2f21aac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};
