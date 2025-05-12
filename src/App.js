import "./App.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import AddRequirements from "./pages/addrequirement.js";
import Index from "./pages/index.js";
import Login from "./pages/login.js";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

//Creates the firebase that stores information
const firebaseConfig = {
  apiKey: "AIzaSyAISdb96KG820TSHtIyvUT_U5g1oxpT-YI",
  authDomain: "mams-schedule-app.firebaseapp.com",
  projectId: "mams-schedule-app",
  storageBucket: "mams-schedule-app.firebasestorage.app",
  messagingSenderId: "780706817346",
  appId: "1:780706817346:web:4a3848b6980071d0fad4db",
};

// initialize and name all Firebase services
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

var currUser = null;
var currUID = null;

onAuthStateChanged(auth, (user) => {
  // add a listener to the authentication object, code taken from Firebase docs
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    currUser = user.email;
    currUID = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

//Creates routes for the navbar created in the method below to use
function App() {
  return (
    <Router >
      {/* MyNavbar is placed outside of Routes so it appears on all pages */}
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddRequirements />} />
        <Route path="/index" element={<Index />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
//Creates the Navbar to go the the four pages created
function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
      <img src="/schMAMSlogo32.png" alt="logo"/>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <Navbar.Brand as={Link} to="/">         Mass Academy Schedule App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/add">Add</Nav.Link>
            <Nav.Link as={Link} to="/index">Index</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

//Displays opening screen
function HomePage() {
  const message = "Welcome to the Mass Academy schedule generator. \n If you have not logged in yet, please visit the Login page now. \n To add a requirement, go to the Add page. \n To view all currently added requirements, go to the Index page.";

  return (
    <div>
      <header className="App-header">
        <h1>Hello, {currUser}</h1>
        <h2>{message}</h2>
      </header>
    </div>
  );
}


export default App;
export var currentUID = currUID;
export var currentUser = currUser;
