import "./App.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import AddRequirements from "./pages/addrequirement.js";
import Index from "./pages/index.js";
import Login from "./pages/login.js";
import Signup from "./pages/signup.js";
import { collection, addDoc } from "firebase/firestore";
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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

var currentUser = null;

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    currentUser = user.email;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
//Creates routes for the navbar created in the method below to use
function App() {
  return (
    <Router>
      {/* MyNavbar is placed outside of Routes so it appears on all pages */}
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddRequirements />} />
        <Route path="/about" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
//Creates the Navbar to go the the four pages created
function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Mass Academy Schedule App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/add">Add</Nav.Link>
            <Nav.Link as={Link} to="/about">Index</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
//Displays opening screen
function HomePage() {
  const message = "Let's get diverse.";
  const teachers = [
    "Mrs. Wildfong, ",
    "Ms. Small, ",
    "Dr. Crowthers, ",
    "Ms. Ludes, ",
    "Mrs. Burns, ",
    "Mrs. Chase, ",
    "Mrs. Taricco, ",
    "Mrs. Post, and ",
    "Ms. Liz",
  ];

  return (
    <div>
      <header className="App-header">
        <h1>Hello, {currentUser}</h1>
        <h2>{message}</h2>
        {MyForm()}
      </header>
    </div>
  );
}

function MyForm() {
  // code adapted from Firebase docs
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const docRef = addDoc(collection(db, "requirements"), {
        // adds a requirement with the selected values to the Firebase storage
        Type: inputs.requirements,
        Class: inputs.class,
        Time: inputs.Time,
      });
      // add developer info and alert the user
      console.log("Document written with ID: ", docRef.id);
      alert("Your requirement has been added.");
    } catch (e) {
      // handle problems adding the requirement
      // add developer info and alert the user
      console.error("Error adding document: ", e);
      alert("Sorry, your requirement didn't go through. Try again?");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="requirements">Please enter the type of requirement</label>
      <br />
      <select name="requirements" id="requirements" onChange={handleChange}>
        <option value="None">Select an option...</option>
        <option value="All-School">All-School</option>
        <option value="No Block">No Class</option>
        <option value="Q Section">Q</option>
        <option value="E Section">E</option>
        <option value="D Section">D</option>
      </select>
      <br></br>
      {/*Prompts the teacher to type what class it's for */}
      <label htmlFor="class">Please enter the class</label>
      <br></br>
      <input
        type="text"
        id="class"
        name="class"
        onChange={handleChange}
      ></input>
      <br></br>
      {/*Asks for the teacher to put in day and time they want their requirement */}
      <label htmlFor="Time">Please enter the time</label>
      <br></br>
      <input
        type="datetime-local"
        id="Time"
        name="Time"
        onChange={handleChange}
      ></input>
      <br></br>
      <input type="submit"></input>
    </form>
  );
}

export default App;
