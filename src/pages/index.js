import Dropdown from 'react-bootstrap/Dropdown';

function Index() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>
 
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">All School</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Selected Days</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Etc</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Index;