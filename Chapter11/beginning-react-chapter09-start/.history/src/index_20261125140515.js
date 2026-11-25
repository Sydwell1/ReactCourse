import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCghhflBGP4YjGdUq3PF6wv2VXS5nTMxDI",
  authDomain: "chapter11reactcoursefinal.firebaseapp.com",
  projectId: "chapter11reactcoursefinal",
  storageBucket: "chapter11reactcoursefinal.firebasestorage.app",
  messagingSenderId: "290579928585",
  appId: "1:290579928585:web:26fb6692aefbf684a8cad8",
  databaseURL: "https://chapter11reactcoursefinal-default-rtdb.firebaseio.com/"

};

// Initialize Firebase
initializeApp(firebaseConfig);


// firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();


