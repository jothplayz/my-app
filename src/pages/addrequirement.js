import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton"; //Allows for custimization of the dropdown
import React, { useState } from "react";

function FirstReqPage() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };
//Changes the screen to the all-school requirement page
  const renderContent = () => {
    switch (selectedOption) {
      case "all-school":
        return (
          <div className="App-header">
            <header>
              <h1>All-School Requirements</h1>
            </header>
            <form>
              <label htmlFor="Time">Please enter the time</label>
              <br></br>
              <input
                type="datetime-local"
                id="Time"
                name="Time"
                onChange={(e) => setSelectedOption(e.target.value)}
              ></input>
              <br></br>
              <label htmlFor="Time">For what Reason</label>
              <br></br>
              <select
                name="requirements"
                id="requirements"
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="None">Select an option...</option>
                <option value="assessment">Assessment</option>
                <option value="class project">Class Project</option>
                <option value="other">Other</option>
              </select>
              <br></br>
              <label htmlFor="class">How much time will you need?</label>
              <br></br>
              <div>
                <input type="radio" id="1hr" name="time-needed" value="1hr" />
                <label htmlFor="1hr"> 1hr</label>
                <br></br>
                <input
                  type="radio"
                  id="1hr15mins"
                  name="time-needed"
                  value="1hr 15mins"
                />
                <label htmlFor="1hr15mins"> 1hr 15mins</label>
                <br></br>
                <input
                  type="radio"
                  id="1hr30mins"
                  name="time-needed"
                  value="1hr 30mins"
                />
                <label htmlFor="1hr30mins"> 1hr 30mins</label>
                <br></br>
                <input
                  type="radio"
                  id="1hr45mins"
                  name="time-needed"
                  value="1hr 45mins"
                />
                <label htmlFor="1hr45mins"> 1hr 45mins</label>
                <br></br>
                <input type="radio" id="2hrs" name="time-needed" value="2hrs" />
                <label htmlFor="2hrs"> 2hrs</label>
                <br></br>
                <input
                  type="radio"
                  id="2hrs15mins"
                  name="time-needed"
                  value="2hrs 15mins"
                />
                <label htmlFor="2hrs15mins"> 2hrs 15mins</label>
              </div>
              <br></br>
              <button type="button" onClick={() => setSelectedOption(null)}>
                Back
              </button>
              <button
                type="button"
                onClick={() => alert("Thank you for your submission!")}
              >
                Submit
              </button>
            </form>
          </div>
        );
//Changes the screen to the unavailible requirement page
      case "unavailable":
        return (
          <div className="App-header">
            <header>
              <h1>Unavailable Requirements</h1>
            </header>
            <form>
              <label htmlFor="Time">Please enter the day</label>
              <br></br>
              <input
                type="datetime-local"
                id="Time"
                name="Time"
                onChange={(e) => setSelectedOption(e.target.value)}
              ></input>
              <br></br>
              <label htmlFor="Time">For what Reason</label>
              <br></br>
              <select
                name="requirements"
                id="requirements"
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="None">Select an option...</option>
                <option value="assessment">On Campus</option>
                <option value="other">Sick</option>
                <option value="other">Other</option>
              </select>
              <br></br>
              <label htmlFor="class">How much time will you need?</label>
              <br></br>
              <div>
                <input type="radio" id="1hr" name="time-needed" value="1hr" />
                <label htmlFor="1hr"> 1hr</label>
                <br></br>
                <input
                  type="radio"
                  id="1hr15mins"
                  name="time-needed"
                  value="1hr 15mins"
                />
                <label htmlFor="1hr15mins"> 1hr 15mins</label>
                <br></br>
                <input
                  type="radio"
                  id="1hr30mins"
                  name="time-needed"
                  value="1hr 30mins"
                />
                <label htmlFor="1hr30mins"> 1hr 30mins</label>
                <br></br>
                <input
                  type="radio"
                  id="1hr45mins"
                  name="time-needed"
                  value="1hr 45mins"
                />
                <label htmlFor="1hr45mins"> 1hr 45mins</label>
                <br></br>
                <input type="radio" id="2hrs" name="time-needed" value="2hrs" />
                <label htmlFor="2hrs"> 2hrs</label>
                <br></br>
                <input
                  type="radio"
                  id="2hrs15mins"
                  name="time-needed"
                  value="2hrs 15mins"
                />
                <label htmlFor="2hrs15mins"> 2hrs 15mins</label>
              </div>
              <br></br>
              <button type="button" onClick={() => setSelectedOption(null)}>
                Back
              </button>
              <button
                type="button"
                onClick={() => alert("Thank you for your submission!")}
              >
                Submit
              </button>
            </form>
          </div>
        );
        //Changes the screen to the specific-section requirement page
      case "specific-section":
        return (
          <div className="App-header">
            <header>
              <h1>Specific Section</h1>
            </header>
            <form>
              <label htmlFor="Time">Please enter the day</label>
              <br></br>
              
              <br></br>
              <label htmlFor="Time">For what Reason</label>
              <br></br>
              <select
                name="requirements"
                id="requirements"
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="None">Select an option...</option>
                <option value="assessment">Intermediate Spanish</option>
                <option value="other">I+A French</option>
                <option value="other">Advanced Spanish</option>
              </select>
              <br></br>
              <label htmlFor="class">How much time will you need?</label>
              <br></br>
              <div>
                <input type="radio" id="1hr" name="time-needed" value="1hr" />
                <label htmlFor="1hr"> 1hr</label>
                <br></br>
                <input
                  type="radio"
                  id="1hr15mins"
                  name="time-needed"
                  value="1hr 15mins"
                />
                <label htmlFor="1hr15mins"> 1hr 15mins</label>
                <br></br>
                <input
                  type="radio"
                  id="1hr30mins"
                  name="time-needed"
                  value="1hr 30mins"
                />
                <label htmlFor="1hr30mins"> 1hr 30mins</label>
                <br></br>
                <input
                  type="radio"
                  id="1hr45mins"
                  name="time-needed"
                  value="1hr 45mins"
                />
                <label htmlFor="1hr45mins"> 1hr 45mins</label>
                <br></br>
                <input type="radio" id="2hrs" name="time-needed" value="2hrs" />
                <label htmlFor="2hrs"> 2hrs</label>
                <br></br>
                <input
                  type="radio"
                  id="2hrs15mins"
                  name="time-needed"
                  value="2hrs 15mins"
                />
                <label htmlFor="2hrs15mins"> 2hrs 15mins</label>
              </div>
              <br></br>
              <button type="button" onClick={() => setSelectedOption(null)}>
                Back
              </button>
              <button
                type="button"
                onClick={() => alert("Thank you for your submission!")}
              >
                Submit
              </button>
            </form>
          </div>
        );
      case "miscellaneous":
        return <h1>Miscellaneous Requirements</h1>;
      default:
        //The first screen the user sees when selecting add a requirement
        return (
          <div>
            <p className="title">
              What Type Of Requirement Would You Like To Make?
            </p>
            <div className="dropdownstyle">
              <DropdownButton
                id="dropdown-basic-button"
                title="Select..."
                size="lg"
                onSelect={handleSelect}
              >
                <Dropdown.Item eventKey="all-school">All-School</Dropdown.Item>
                <Dropdown.Item eventKey="unavailable">
                  Unavailable
                </Dropdown.Item>
                <Dropdown.Item eventKey="specific-section">
                  Specific Section Request
                </Dropdown.Item>
                <Dropdown.Item eventKey="miscellaneous">
                  Miscellaneous
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        );
    }
  };

  return <div>{renderContent()}</div>;
}

export default FirstReqPage;
