import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton"; //Allows for customization of the dropdown
import React, { useState, useEffect } from "react";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
//import { currentUID, currentUser} from "../App.js";

//Creates the firebase that stores information
const firebaseConfig = {
  apiKey: "AIzaSyAISdb96KG820TSHtIyvUT_U5g1oxpT-YI",
  authDomain: "mams-schedule-app.firebaseapp.com",
  projectId: "mams-schedule-app",
  storageBucket: "mams-schedule-app.firebasestorage.app",
  messagingSenderId: "780706817346",
  appId: "1:780706817346:web:4a3848b6980071d0fad4db",
};

// set up page-specific Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

// initialize user instance variables

var currUser = null;
var currUID = null;

onAuthStateChanged(auth, (user) => {
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

// initialize teacher variables

var currentTeacher = "";
var currentClass = "";

function FirstReqPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value })); // handles a change to any input field (dropdowns, radio buttons, time/date inputs...)
  };

  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey); // handles a change to the type of requirement needed
  };

  const handleSubmitXYZ = (event) => {
    // submit NO XYZ in correct format to Firebase
      event.preventDefault();
      try {
        const docRef = addDoc(collection(db, "requirements"), {
          // adds a requirement with the selected values to the Firebase storage
          Type: "No XYZ",
          Class: currentClass,
          Teacher: currentTeacher,
          Date: inputs.date,
        });
        // add developer info and alert the user
        console.log("Document written with ID: ", docRef.id);
        alert("Your requirement has been added. Thank you!");
      } catch (e) {
        // handle problems adding the requirement
        // add developer info and alert the user
        console.error("Error adding document: ", e);
        alert("Sorry, your requirement didn't go through. Try again?");
      }
    };

    const handleSubmitUnavailable = (event) => {
      // submit UNAVAILABLE in correct format to Firebase
      event.preventDefault();
      try {
        const docRef = addDoc(collection(db, "requirements"), {
          // adds a requirement with the selected values to the Firebase storage
          Type: "Unavailable",
          Class: currentClass,
          Teacher: currentTeacher,
          Time: inputs.time,
          Date: inputs.date,
          IsWeekly: inputs.weekly,
          IsAllDay: inputs.allday,
        });
        // add developer info and alert the user
        console.log("Document written with ID: ", docRef.id);
        alert("Your requirement has been added. Thank you!");
      } catch (e) {
        // handle problems adding the requirement
        // add developer info and alert the user
        console.error("Error adding document: ", e);
        alert("Sorry, your requirement didn't go through. Try again?");
      }
    };

    const handleSubmitSection = (event) => {
      // submit SPECIFIC SECTION in correct format to Firebase
      event.preventDefault();
      try {
        const docRef = addDoc(collection(db, "requirements"), {
          // adds a requirement with the selected values to the Firebase storage
          Type: "Specific Section",
          Class: currentClass,
          Teacher: currentTeacher,
          Time: inputs.time,
          Date: inputs.date,
          Section: inputs.section,
        });
        // add developer info and alert the user
        console.log("Document written with ID: ", docRef.id);
        alert("Your requirement has been added. Thank you!");
      } catch (e) {
        // handle problems adding the requirement
        // add developer info and alert the user
        console.error("Error adding document: ", e);
        alert("Sorry, your requirement didn't go through. Try again?");
      }
    };

    const handleSubmitAllSchool = (event) => {
      // submit ALL SCHOOL in correct format to Firebase
      event.preventDefault();
      try {
        const docRef = addDoc(collection(db, "requirements"), {
          // adds a requirement with the selected values to the Firebase storage
          Type: "All-School",
          Class: currentClass,
          Teacher: currentTeacher,
          Time: inputs.time,
          Date: inputs.date,
          Reason: inputs.reason,
          Length: inputs.timeneeded,
          Double: inputs.normalclass,
        });
        // add developer info and alert the user
        console.log("Document written with ID: ", docRef.id);
        alert("Your requirement has been added. Thank you!");
      } catch (e) {
        // handle problems adding the requirement
        // add developer info and alert the user
        console.error("Error adding document: ", e);
        alert("Sorry, your requirement didn't go through. Try again?");
      }
    };

    useEffect(() => {
      const unsubscribeAuth = auth.onAuthStateChanged(async (user) => {
        if (user) {
          const docRef = doc(db, "users", user.uid); // the users collection stores teacher names and classes - the document IDs match the user IDs from Firebase Auth
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            // if there is a document corresponding to current User ID, set the teacher and class accordingly
            currentTeacher = docSnap.data().Name;
            currentClass = docSnap.data().Class;
          } else {
            console.log("No such document!");
          }
        }
        setLoading(false); // Page load only after checking if a teacher is logged in
      });
  
      return () => unsubscribeAuth(); // Clean up the listener
    }, []);
  
    if (loading) {
      return <div>Loading user data...</div>; // need to verify user before submitting requirements
    }

  //Changes the screen to the all-school requirement page
  const renderContent = () => {
    // switch on the requirement type selected at the first dropdown
    switch (selectedOption) {
      case "all-school":
        return (
          <div className="App-header">
            <header>
              <h1>All-School Requirements</h1>
            </header>
            <form>
              {/* Input the date for the all-school */}
              <label htmlFor="ASDate">Please enter the date</label>
              <br></br>
              <input
                type="date"
                id="ASdate"
                name="date"
                onChange={handleChange}
              ></input>
              <br></br>

              {/* Input the start time for the all-school */}
              <label htmlFor="ASTime">Please enter the start time</label>
              <br></br>
              <input
                type="time"
                id="ASTime"
                name="time"
                onChange={handleChange}
              ></input>
              <br></br>

              {/* Input the reason for the all-school */}
              <label htmlFor="ASReason">Please enter the reason</label>
              <br></br>
              <select
                name="reason"
                id="ASReason"
                onChange={handleChange}
              >
                <option value="None">Select an option...</option>
                <option value="Assessment">Assessment</option>
                <option value="Project">Class Project</option>
                <option value="Other">Other</option>
              </select>
              <br></br>


              <label htmlFor="ASLength">How much time will you need?</label>
              <br></br>
              <div id="ASLength">
                <input 
                  type="radio" 
                  id="AS1hr" 
                  name="timeneeded" 
                  value={4} 
                  onChange={handleChange} 
                />
                <label htmlFor="AS1hr"> 1hr</label>
                <br></br>
                <input
                  type="radio"
                  id="AS1hr15mins"
                  name="timeneeded"
                  value={5}
                  onChange={handleChange}
                />
                <label htmlFor="AS1hr15mins"> 1hr 15mins</label>
                <br></br>
                <input
                  type="radio"
                  id="AS1hr30mins"
                  name="timeneeded"
                  value={6}
                  onChange={handleChange}
                />
                <label htmlFor="AS1hr30mins"> 1hr 30mins</label>
                <br></br>
                <input
                  type="radio"
                  id="AS1hr45mins"
                  name="timeneeded"
                  value={7}
                  onChange={handleChange}
                />
                <label htmlFor="AS1hr45mins"> 1hr 45mins</label>
                <br></br>
                <input 
                  type="radio" 
                  id="AS2hrs" 
                  name="timeneeded" 
                  value={8}
                  onChange={handleChange} 
                />
                <label htmlFor="AS2hrs"> 2hrs</label>
                <br></br>
                <input
                  type="radio"
                  id="AS2hrs15mins"
                  name="timeneeded"
                  value={9}
                  onChange={handleChange}
                />
                <label htmlFor="AS2hrs15mins"> 2hrs 15mins</label>
              </div>

              <label htmlFor="ASclass">
                Would you also like a normal class this day?
              </label>
              <div id="ASclass">
                <input type="radio" id="ASyes" name="normalclass" value={true} onChange={handleChange} />
                <label htmlFor="ASyes"> Yes</label>
                <br></br>
                <input type="radio" id="ASno" name="normalclass" value={false} onChange={handleChange} />
                <label htmlFor="ASno"> No</label>
              </div>
              <br></br>
              <button type="button" onClick={() => setSelectedOption(null)}>
                Back
              </button>
              <button
                type="button"
                onClick={handleSubmitAllSchool}
              >
                Submit
              </button>
            </form>
          </div>
        );
      //Changes the screen to the unavailable requirement page
      case "unavailable":
        return (
          <div className="App-header">
            <header>
              <h1>Unavailable Requirements</h1>
            </header>

            <p>If you are unavailable for multiple blocks, please submit this form for each block.</p>
            <form>
              {/* Input the unavailable date */}
              <label htmlFor="UDate">Please enter the date</label>
              <br></br>
              <input
                type="date"
                id="UDate"
                name="date"
                onChange={handleChange}
              ></input>
              <br></br>

              {/* Input the unavailable time */}
              <label htmlFor="UTime">Please enter the start time</label>
              <br></br>
              <input
                type="time"
                id="UTime"
                name="time"
                onChange={handleChange}
              ></input>
              <br></br>

              <label htmlFor="UWeekly">
                Will this be a weekly occurence?
              </label>
              <div id="UWeekly">
                <input type="radio" id="UIsWeekly" name="weekly" value={true} onChange={handleChange} />
                <label htmlFor="UIsWeekly"> Yes</label>
                <br></br>
                <input type="radio" id="UNotWeekly" name="weekly" value={false} onChange={handleChange} />
                <label htmlFor="UNotWeekly"> No</label>
              </div>
              <br></br>

              <label htmlFor="UFullday">
                Mark here if you will be out the whole day. This overrides the Time field.
              </label>
              <div id="UFullday">
                <input type="radio" id="UAllDay" name="allday" value={true} onChange={handleChange} />
                <label htmlFor="UAllDay"> Yes</label>
                <br></br>
                <input type="radio" id="UNotAllDay" name="allday" value={false} onChange={handleChange} />
                <label htmlFor="UNotAllDay"> No</label>
              </div>
              <br></br>

              <button type="button" onClick={() => setSelectedOption(null)}>
                Back
              </button>
              <button
                type="button"
                onClick={handleSubmitUnavailable}
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
              {/* Input the date for the section */}
              <label htmlFor="SSDate">Please enter the date</label>
              <br></br>
              <input
                type="date"
                id="SSDate"
                name="date"
                onChange={handleChange}
              ></input>
              <br></br>

              {/* Input the start time for the section */}
              <label htmlFor="SSTime">Please enter the start time</label>
              <br></br>
              <input
                type="time"
                id="SSTime"
                name="time"
                onChange={handleChange}
              ></input>
              <br></br>

              <label htmlFor="SSSection">What Section?</label>
              <br></br>
              <select
                name="section"
                id="SSSection"
                onChange={handleChange}
              >
                <option value="None">Select an option...</option>
                <option value="Intermediate Spanish">Intermediate Spanish</option>
                <option value="French">I+A French</option>
                <option value="Advanced Spanish">Advanced Spanish</option>
              </select>
              <br></br>
              <br></br>
              
              <button type="button" onClick={() => setSelectedOption(null)}>
                Back
              </button>
              <button
                type="button"
                onClick={handleSubmitSection}
              >
                Submit
              </button>
            </form>
          </div>
        );
      case "No-XYZ":
        return (
          <div className="App-header">
            <header>
              <h1>What day do you not want XYZ?</h1>
            </header>
            <form>
              <input
                type="date"
                id="NXYZDate"
                name="date"
                onChange={handleChange}
              ></input>
              <br></br>
              <button type="button" onClick={() => setSelectedOption(null)}>
                Back
              </button>
              <button
                type="button"
                onClick={handleSubmitXYZ}
              >
                Submit
              </button>
            </form>
          </div>
        );
      default:
        //The first screen the user sees when selecting add a requirement
        return (
          <div>
            <p className="title">
              What Type Of Requirement Would You Like To Make?
            </p>
            <p className="text">The current teacher is {currentTeacher} and the current class is {currentClass}</p>
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
                <Dropdown.Item eventKey="No-XYZ">No XYZ Day</Dropdown.Item>
              </DropdownButton>
              {/*Dropdown for the initial choice between requirement types */}
            </div>
           
          </div>
        );
    }
  };

  return <div>{renderContent()}</div>;
}

export default FirstReqPage;
