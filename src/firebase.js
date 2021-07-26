import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUBvG1k8M1COhgjhKPvTAfq5OE4FgQAgg",
  authDomain: "react-prueba-2b8e6.firebaseapp.com",
  projectId: "react-prueba-2b8e6",
  storageBucket: "react-prueba-2b8e6.appspot.com",
  messagingSenderId: "996461170881",
  appId: "1:996461170881:web:a35e760b75400adff54440",
};
// Initialize Firebase
app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export { db, auth };
