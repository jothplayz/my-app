import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import "../App.css";
import { initializeApp } from "firebase/app";
import "bootstrap/dist/css/bootstrap.min.css";

const firebaseConfig = {
  apiKey: "AIzaSyAISdb96KG820TSHtIyvUT_U5g1oxpT-YI",
  authDomain: "mams-schedule-app.firebaseapp.com",
  projectId: "mams-schedule-app",
  storageBucket: "mams-schedule-app.firebasestorage.app",
  messagingSenderId: "780706817346",
  appId: "1:780706817346:web:4a3848b6980071d0fad4db",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();


function Login() {
  return (
    <div style={{ textAlign: "center" }} className="login-container">
      <h1>Login Page</h1>
      <LoginForm />
    </div>
  );
}

function LoginForm() {
  // code adapted from Firebase docs
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, event.target.email.value, event.target.password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("Signed in as " + event.target.email.value);
      alert("Thank you for signing in, " + event.target.email.value);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error signing in: ", error);
      alert("Unable to sign in. Check that username and password are correctly typed, then try again. \n\n" + "The error generated was: " + errorMessage);
    });
  }

  return (
    <form onSubmit={handleSubmit} className="logininput">
        <label htmlFor="email">Username: </label>
        <input type="text" id="email" name="email"  />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="submit">Login</button>
      </form>
  )
}
/*
This is the LoginForm component that handles the login functionality.
It uses Firebase Authentication to sign in users with email and password.
The handleChange function updates the state as the user types in the input fields.
The handleSubmit function processes the form submission and attempts to sign in the user.
*/
export default Login;
