import React, {useState} from "react";
import NavBar from "../components/navBar/NavBar"; 
import InfoBar from "../components/infoBar/InfoBar";
import { Body, Label, StyledSelect, StyledButtonContainer, StyledButton, StyledButton2, StyledButtonContainer2 } from "../components/filters/styledFilters";  

const Filters = () => {
    const [selectedTime, setSelectedTime] = useState("1hr");
    const [selectedSessionTime, setSelectedSessionTime] = useState("Morning");
  
    const handleTimeButtonClick = (value) => {
      setSelectedTime(value);
    };
  
    const handleSessionTimeButtonClick = (value) => {
      setSelectedSessionTime(value);
    };

  return (
    <>
    <InfoBar />
      <Body>
      <Label>Course Category</Label>
      <StyledSelect>
        <option value="financial-accounting">Financial Accounting</option>
        <option value="marketing-management">Marketing Management</option>
        <option value="strategic-management">Strategic Management</option>
        <option value="business-law">Business Law</option>
        <option value="international-business">International Business</option>
      </StyledSelect>

      <Label>Difficulty Level</Label>
      <StyledSelect>
        <option value="beginner">Beginner</option>
        <option value="standard">Standard</option>
        <option value="advanced">Advanced</option>
      </StyledSelect>

      <Label>How much time do you have for a session?</Label>
      <StyledButtonContainer>
        <StyledButton
          selected={selectedTime === "1hr"}
          onClick={() => handleTimeButtonClick("1hr")}
        >
          1hr
        </StyledButton>
        <StyledButton
          selected={selectedTime === "1-3hr"}
          onClick={() => handleTimeButtonClick("1-3hr")}
        >
          1-3 hr
        </StyledButton>
        <StyledButton
          selected={selectedTime === "3-6hr"}
          onClick={() => handleTimeButtonClick("3-6hr")}
        >
          3-6 hr
        </StyledButton>
      </StyledButtonContainer>

      <Label>When do you want to have a session?</Label>
      <StyledButtonContainer2>
        <StyledButton
          selected={selectedSessionTime === "Morning"}
          onClick={() => handleSessionTimeButtonClick("Morning")}
        >
          Morning
        </StyledButton>
        <StyledButton
          selected={selectedSessionTime === "Afternoon"}
          onClick={() => handleSessionTimeButtonClick("Afternoon")}
        >
          Afternoon
        </StyledButton>
        <StyledButton
          selected={selectedSessionTime === "Any time"}
          onClick={() => handleSessionTimeButtonClick("Any time")}
        >
          Any time
        </StyledButton>
      </StyledButtonContainer2>
      <StyledButton2>APPLY FILTERS</StyledButton2>
    </Body>
      <NavBar />
    </>
  );
};

export default Filters;