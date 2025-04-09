import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
  return (
    <div>
    <p class = "title">What Type Of Requirement Would You Like To Make?</p>
    <Dropdown class = "dropdownstyle">
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      Dropdown Button
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">All School</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Selected Days</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Etc</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  </div>
  );
}

export default BasicExample;