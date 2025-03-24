import logo from './logo.svg';
import './App.css';

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
        <input type="text">
        
        </input>
      </header>
    </div>
  );
}

export default App;
