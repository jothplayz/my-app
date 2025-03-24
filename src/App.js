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

function MyTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Row 1, Data 1</td>
          <td>Row 1, Data 2</td>
          <td>Row 1, Data 3</td>
        </tr>
        <tr>
          <td>Row 2, Data 1</td>
          <td>Row 2, Data 2</td>
          <td>Row 2, Data 3</td>
        </tr>
      </tbody>
    </table>
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
        <MyTable />
      </main>
    </div>
  );
}

export default App;
