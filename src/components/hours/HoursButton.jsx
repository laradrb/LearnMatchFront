import React, { useState } from "react";
import { StyledButtonContainer, StyledButton, ButtonRow } from "./styledHoursButton";

const Hours = () => {
    const [selectedButton, setSelectedButton] = useState(null);
  
    const handleButtonClick = (value) => {
      setSelectedButton(value);
    };
  
    return (
      <StyledButtonContainer>
        <ButtonRow>
          <StyledButton
            selected={selectedButton === "9:00-10:00"}
            onClick={() => handleButtonClick("9:00-10:00")}
          >
            9:00-10:00
          </StyledButton>
          <StyledButton
            selected={selectedButton === "10:00-11:00"}
            onClick={() => handleButtonClick("10:00-11:00")}
          >
            10:00-11:00
          </StyledButton>
        </ButtonRow>
        <ButtonRow>
          <StyledButton
            selected={selectedButton === "11:00-12:00"}
            onClick={() => handleButtonClick("11:00-12:00")}
          >
            11:00-12:00
          </StyledButton>
          <StyledButton
            selected={selectedButton === "12:00-13:00"}
            onClick={() => handleButtonClick("12:00-13:00")}
          >
            12:00-13:00
          </StyledButton>
        </ButtonRow>
      </StyledButtonContainer>
    );
  };
  
  export default Hours;