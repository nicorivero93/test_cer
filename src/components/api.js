// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLidrA5NsXKuBRMWGJmEoOMN3pRsX6pLI",
  authDomain: "cer-test-5c88c.firebaseapp.com",
  projectId: "cer-test-5c88c",
  storageBucket: "cer-test-5c88c.firebasestorage.app",
  messagingSenderId: "128820643358",
  appId: "1:128820643358:web:2e9a9234091de05bbe900f",
  measurementId: "G-LRGZHYEKRB"
};

// Initialize Firebase
export const appfb = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { appfb }