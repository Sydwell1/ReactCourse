import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

// Book section 9.2: paste YOUR OWN values from the Firebase console here.
// databaseURL is required for the Realtime Database; copy it from Build > Realtime Database.
var firebaseConfig = {
  apiKey:  "AIzaSyBkPkoSr9aT3GQrz4CPhza5Tj6iT0lp7NI",
  authDomain: "crudproject-cef1c.firebaseapp.com",
  databaseURL: "https://crudproject-cef1c-default-rtdb.firebaseio.com",
  projectId: "crudproject-cef1c",
  storageBucket: "crudproject-cef1c.firebasestorage.app",
  messagingSenderId: "678343233782",
  appId: "1:678343233782:web:469b273f1b3ad942dc5cd7"
};

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBkPkoSr9aT3GQrz4CPhza5Tj6iT0lp7NI",
//   authDomain: "crudproject-cef1c.firebaseapp.com",
//   projectId: "crudproject-cef1c",
//   storageBucket: "crudproject-cef1c.firebasestorage.app",
//   messagingSenderId: "678343233782",
//   appId: "1:678343233782:web:863d99181d5b4673dc5cd7",
//   measurementId: "G-3J287KRQNV"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);