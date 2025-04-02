//import logo from "./logo.svg";
//import logo from "./logo.svg";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRequirements from './pages/addrequirement.js';
import Index from './pages/index.js';
import Login from './pages/login.js';
import Signup from './pages/signup.js';
import { collection, addDoc } from "firebase/firestore"; 

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

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddRequirements />} />
        <Route path="/about" element={<Index />} />
        <Route path="/contact" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/signup">Other</a>
        </li>
      </ul>
    </nav>
  );
}
// Define a separate HomePage component for the default route
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
    <div className="App">
      <Nav />
      <header className="App-header">
        <h1>Hello, {teachers}</h1>
        <h2>{message}</h2>
        <form>
          <label htmlFor="requirements">
            Please enter the type of requirement
          </label>
          <br />
          <select name="requirements" id="requirements">
            <option value="all-school">All-School</option>
            <option value="no block">No Class</option>
            <option value="Q section">Q</option>
            <option value="E section">E</option>
            <option value="D section">D</option>
          </select>
          <br></br>
          {/*}Prompts the teacher to type what class its for*/}
          <label for="class">Please enter the class</label>
          <br></br>
          <input type="text" id="class" name="class"></input>
          <br></br>
          {/*}Asks for the teacher to put in day and time they want their requirement */}
          <label for="Time">Please enter the time</label>
          <br></br>
          <input type="datetime-local" id="Time" name="Time"></input>
          <br></br>
          <input type="submit"></input>
        </form>
      </header>
    </div>
  );
}

export default App;
