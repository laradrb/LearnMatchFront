import React, { useState } from "react";
import NavBar from "../components/navBar/NavBar";
import InfoBar from "../components/infoBar/InfoBar";
import { Body } from "../components/calendar/styledCalendar";
import MyCalendar from "../components/calendar/Calendar";
import Hours from "../components/hours/HoursButton";
import { StyledButton2 } from "../components/hours/styledHoursButton";
import styled from "styled-components";

const ConfirmationMessage = styled.p`
  color: #007a8c;
  font-size: 18px;
  font-family: "Rambla", sans-serif;
  font-weight: bold;
  margin-top: 20px;
`;

const Availability = () => {
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleConfirm = () => {
    setConfirmationMessage("Your tutoring session has been confirmed");
  };

  return (
    <>
      <InfoBar />
      <Body>
        <MyCalendar />
        <Hours />
        <StyledButton2 onClick={handleConfirm}>Ok</StyledButton2>
        {confirmationMessage && <ConfirmationMessage>{confirmationMessage}</ConfirmationMessage>}
      </Body>
      <NavBar />
    </>
  );
};

export default Availability;
