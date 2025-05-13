import Dropdown from 'react-bootstrap/Dropdown';
import React from "react";
import { useState, useEffect } from 'react';
import "../App.css";
import { initializeApp } from "firebase/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { getFirestore, doc, collection, getDoc, getDocs, getDocsFromCache } from "firebase/firestore";

// set up Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAISdb96KG820TSHtIyvUT_U5g1oxpT-YI",
  authDomain: "mams-schedule-app.firebaseapp.com",
  projectId: "mams-schedule-app",
  storageBucket: "mams-schedule-app.firebasestorage.app",
  messagingSenderId: "780706817346",
  appId: "1:780706817346:web:4a3848b6980071d0fad4db",
};

// page-specific Firebase references
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Index() {
  return (
    <RequirementsView />
  );
}

function RequirementsView() {
  // useState allows tracking of variables when the page loads
  const [requirementsData, setRequirementsData] = useState([]); // the data from firebase
  const [loading, setLoading] = useState(true); // for tracking whether the website is finished getting the data from Firebase
  const [error, setError] = useState(null); // for tracking errors

  useEffect(() => {
    async function fetchRequirements() {
      try{
        const querySnapshot = await getDocs(collection(db, "requirements")); // pull docs from Firebase requirements collection
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
          console.log(doc.data()); // adds the requirement and its data to a list, logs info
        });
        console.log(data);
        setRequirementsData(data); // the data that will actually be used on the site
        setLoading(false); // ensures the function only runs once
      }
      catch(e){
        console.log(e); // logs errors if there are any
      }
    }
    fetchRequirements();
  }, []); // Empty dependency array ensures this runs only once after the initial render

  console.log("Rendering with requirementsData:", requirementsData);

  if (loading) {
    return <p>Loading requirements...</p>; // Handles website while requirements are being fetched from Firebase
  }

  if (error) {
    return <p>Error loading requirements: {error.message}</p>; // Handles errors
  }

  requirementsData.sort((a, b) => new Date(a.Date) - new Date(b.Date)); // orders requirements by date

  function RequirementEl({ useData }) {
    // defines the way a requirement with given data should be displayed - parameters are the names of Firebase fields
    if (useData.Type === "No XYZ") {
      return (
        <div class="requirement">
        <h3>No XYZ</h3>
        <p>Date: {useData.Date}</p>
        <p>Requesting teacher: {useData.Teacher}</p>
        <p>Why: {useData.Class}</p>
        </div>
      ); // displays info relevant to a "No XYZ day" requirement
    }
    if (useData.Type === "Unavailable" && useData.IsAllDay === "false") {
      return (
        <div class="requirement">
        <h3>Unavailable Teacher</h3>
        <p>Date: {useData.Date}</p>
        <p>Time: {useData.Time}</p>
        <p>Requesting teacher: {useData.Teacher}</p>
        <p>Class: {useData.Class}</p>
        </div>
      ); // displays info relevant to a teacher who is unavailable for a specific block
    }
    if (useData.Type === "Unavailable" && useData.IsAllDay === "true") {
      return (
        <div class="requirement">
        <h3>Unavailable Teacher</h3>
        <p>Date: {useData.Date}</p>
        <p>Time: All Day</p>
        <p>Requesting teacher: {useData.Teacher}</p>
        <p>Class: {useData.Class}</p>
        </div>
      ); // displays info relevant to a teacher who is unavailable all day
    }
    if (useData.Type === "Specific Section") {
      return (
        <div class="requirement">
        <h3>{useData.Section} Request</h3>
        <p>Date: {useData.Date}</p>
        <p>Time: {useData.Time}</p>
        <p>Requesting teacher: {useData.Teacher}</p>
        <p>Class: {useData.Class}</p>
        </div>
      ); // displays info for a teacher requesting one of the sections for a specific time
    }
    if (useData.Type === "All-School") {
      return (
        <div class="requirement">
        <h3>All-School {useData.Class}</h3>
        <p>Date: {useData.Date}</p>
        <p>Time: {useData.Time}</p>
        <p>Requesting teacher: {useData.Teacher}</p>
        <p>Why: {useData.Reason}</p>
        </div>
      ); // displays info for a requested all-school
    }
  }

  /*return (
    <div>
      {requirementsData.map((req) => (
        <div className="index" key={req.id}>
          <h2>Class: {req.Class}</h2>
          <p>Time: {req.Time}</p>
          <p>Requirement: {req.Type}</p>
          <br />
        </div>
      ))}
    </div>
  );*/ // an old version of the requirement display

  return (
    <div class="parallax">
      <br></br>
      {requirementsData.map((req) => (
        <div className="index" key={req.id}>
          <RequirementEl useData={req} />
        </div>
      ))}
      <br></br>
    </div>
  ); // returns a RequirementEl element for each requirement in the data (which has already been ordered by date)
}

export default Index;