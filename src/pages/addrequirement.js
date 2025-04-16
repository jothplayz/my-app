import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'; //Allows for custimization of the dropdown
import React, { useState } from 'react';

function FirstReqPage() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'all-school':
        return <h1>All-School Requirements</h1>;
      case 'unavailable':
        return <h1>Unavailable Requirements</h1>;
      case 'specific-section':
        return <h1>Specific Section Request</h1>;
      case 'miscellaneous':
        return <h1>Miscellaneous Requirements</h1>;
      default:
        return (
          <div>
            <p className="title">What Type Of Requirement Would You Like To Make?</p>
            <div className="dropdownstyle">
              <DropdownButton
                id="dropdown-basic-button"
                title="Select..."
                size="lg"
                onSelect={handleSelect}
              >
                <Dropdown.Item eventKey="all-school">All-School</Dropdown.Item>
                <Dropdown.Item eventKey="unavailable">Unavailable</Dropdown.Item>
                <Dropdown.Item eventKey="specific-section">Specific Section Request</Dropdown.Item>
                <Dropdown.Item eventKey="miscellaneous">Miscellaneous</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        );
    }
  };

  return <div>{renderContent()}</div>;
}

export default FirstReqPage;