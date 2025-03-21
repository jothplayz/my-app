import React from 'react';
import './App.css';

function LoremIpsumGenerator() {
  return (
    <div>
      <h2>Lorem Ipsum Generator</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}

function ScheduleMaker() {
  return (
    <div>
      <h2>Schedule Maker</h2>
      <p>
        Create your schedule by adding tasks and deadlines.
      </p>
      {/* Add more functionality for the schedule maker here */}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Lorem Ipsum Schedule Maker</h1>
      </header>
      <main>
        <LoremIpsumGenerator />
        <ScheduleMaker />
      </main>
    </div>
  );
}

export default App;
