import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAISdb96KG820TSHtIyvUT_U5g1oxpT-YI",

  authDomain: "mams-schedule-app.firebaseapp.com",

  projectId: "mams-schedule-app",

  storageBucket: "mams-schedule-app.firebasestorage.app",

  messagingSenderId: "780706817346",

  appId: "1:780706817346:web:4a3848b6980071d0fad4db"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
