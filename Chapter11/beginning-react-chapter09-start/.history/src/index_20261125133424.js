import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//firebase dependancies
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEmKcRiaAFMsqky3XppIZVYFUIFBwoYHA",
  authDomain: "chapter11reactcourse.firebaseapp.com",
  projectId: "chapter11reactcourse",
  storageBucket: "chapter11reactcourse.firebasestorage.app",
  messagingSenderId: "818406235538",
  appId: "1:818406235538:web:251e98618a39ed11d8b54b",
  databaseUrl: "https://chapter11reactcourse-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();


