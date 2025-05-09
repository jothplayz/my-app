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

  /*var listOfDates = [];

  for (req in requirementsData){
    listOfDates += req.Date;
  }

  listOfDates.sort();

  console.log(listOfDates);*/

  return (
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
  );
}

export default Index;