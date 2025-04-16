import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'; //Allows for custimization of the dropdown


function FirstReqPage() {
  return (
    <div>
    <p class = "title">What Type Of Requirement Would You Like To Make?</p>
    <div class = "dropdownstyle">
    <DropdownButton
     id="dropdown-basic-button" 
     title="Select..."
      size="lg"
    >
      <Dropdown.Item href="#/action-1">All-School</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Unavailible</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Specifc Section Request</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Miscellaneuos</Dropdown.Item>
    </DropdownButton>
    </div>
  </div>
  );
}

export default FirstReqPage;