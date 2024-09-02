// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDbP-DE_5s2N_Pvr0iJIavyKe08tc5NSsU",
  authDomain: "mypets-fb058.firebaseapp.com",
  projectId: "mypets-fb058",
  storageBucket: "mypets-fb058.appspot.com",
  messagingSenderId: "497812083635",
  appId: "1:497812083635:web:aa095e8796a418c073b1c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
