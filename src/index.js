import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { GoogleAuthProvider } from 'firebase/auth';
const provider = new GoogleAuthProvider();
const auth = firebase.auth();

auth.signInWithPopup(provider)
  .then((result) => {
    // User is signed in.
    const user = result.user;
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });



// Configura tu proyecto de Firebase

const firebaseConfig = {
  apiKey: "AIzaSyBLidrA5NsXKuBRMWGJmEoOMN3pRsX6pLI",
  authDomain: "cer-test-5c88c.firebaseapp.com",
  projectId: "cer-test-5c88c",
  storageBucket: "cer-test-5c88c.firebasestorage.app",
  messagingSenderId: "128820643358",
  appId: "1:128820643358:web:2e9a9234091de05bbe900f",
  measurementId: "G-LRGZHYEKRB"

};

// Inicializa Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

