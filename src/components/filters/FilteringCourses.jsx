import React, { useState } from "react";
import { Body, Label, StyledSelect, StyledButtonContainer, StyledButton, StyledButtonContainer2, StyledButton2  } from "./styledFilters";

const Filters = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (value) => {
    setSelectedButton(value);
  };

  return (
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
          selected={selectedButton === "1hr"}
          onClick={() => handleButtonClick("1hr")}
        >
          1hr
        </StyledButton>
        <StyledButton
          selected={selectedButton === "1-3hr"}
          onClick={() => handleButtonClick("1-3hr")}
        >
          1-3 hr
        </StyledButton>
        <StyledButton
          selected={selectedButton === "3-6hr"}
          onClick={() => handleButtonClick("3-6hr")}
        >
          3-6 hr
        </StyledButton>
      </StyledButtonContainer>

      <Label>When do you want to have a session?</Label>
      <StyledButtonContainer2>
        <StyledButton3
          selected={selectedButton === "Morning"}
          onClick={() => handleButtonClick("Morning")}
        >
          Morning
        </StyledButton3>
        <StyledButton3
          selected={selectedButton === "Afternoon"}
          onClick={() => handleButtonClick("Afternoon")}
        >
          Afternoon
        </StyledButton3>
        <StyledButton3
          selected={selectedButton === "Any time"}
          onClick={() => handleButtonClick("Any time")}
        >
          Any time
        </StyledButton3>
      </StyledButtonContainer2>
      <StyledButton2>APPLY FILTERS</StyledButton2>
    </Body>
  );
};

export default Filters;