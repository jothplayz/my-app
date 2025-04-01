import logo from './logo.svg';
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
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
// Initialize Firestore
const db = getFirestore(app);

function App() {

  const message = "Let's get diverse."
  const teachers = ["Mrs. Wildfong ", "Ms. Small ", "Dr. Crowthers ", "Ms. Ludes ", "Mrs. Burns ", "Mrs. Chase ", "Mrs. Taricco ", "Mrs. Post ", "Ms. Liz"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hello, {teachers}</h1>
        <h2>{message}</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
        <form>
          <label for="requirements">Please enter the type of requirement</label>
          <br></br>
          <select name="requirements" id="requirements">
            <option value="all-school">All-School</option>
            <option value="no block">No Class</option>
            <option value="Q section">Q</option>
            <option value="E section">E</option>
            <option value="D section">D</option>
          </select>
          <br></br>
          <label for="class">Please enter the class</label>
          <br></br>
          <input type="text" id="class"></input>
          <br></br>
          <label for="Time">Please enter the time</label>
          <br></br>
          <input type="datetime-local"></input>
          <br></br>
          <input type="submit"></input>
        </form>
      </header>
    </div>
  );
}

export default App;
