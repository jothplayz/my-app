import Dropdown from 'react-bootstrap/Dropdown';
import React from "react";
import { useState, useEffect } from 'react';
import "../App.css";
import { initializeApp } from "firebase/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { getFirestore, doc, collection, getDoc, getDocs, getDocsFromCache } from "firebase/firestore";


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

function Index() {
  return (
    <RequirementsView />
  );
}

function RequirementsView() {
  const [requirementsData, setRequirementsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRequirements() {
      try{
        const querySnapshot = await getDocs(collection(db, "requirements"));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
          console.log(doc.data());
        });
        console.log(data);
        setRequirementsData(data);
        setLoading(false);
      }
      catch(e){
        console.log(e);
      }
    }
    fetchRequirements();
  }, []); // Empty dependency array ensures this runs only once after the initial render

  console.log("Rendering with requirementsData:", requirementsData);

  if (loading) {
    return <p>Loading requirements...</p>;
  }

  if (error) {
    return <p>Error loading requirements: {error.message}</p>;
  }

  requirementsData.sort((a,b) => (a.Date > b.Date));

  console.log("Rendering with requirementsData:", requirementsData);

  function RequirementEl({ useData }) {
    if (useData.Type === "No XYZ") {
      return (
        <div class="requirement">
        <h3>No XYZ</h3>
        <p>Date: {useData.Date}</p>
        <p>Requesting teacher: {useData.Teacher}</p>
        <p>Why: {useData.Class}</p>
        </div>
      );
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
      );
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
      );
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
      );
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
      );
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
  );*/

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
  );
}

export default Index;