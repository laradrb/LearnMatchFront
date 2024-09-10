import React from "react";
import NavBar from "../components/navBar/NavBar";
import InfoBar from "../components/infoBar/InfoBar";
import { Body } from "../components/calendar/styledCalendar";
import MyCalendar from "../components/calendar/Calendar";
import Hours from "../components/hours/HoursButton";
import { StyledButton2 } from "../components/hours/styledHoursButton";

const Availability = () => {
  return (
    <>
      <InfoBar />
      <Body>
        <MyCalendar />
        <Hours />
        <StyledButton2>Ok</StyledButton2>
      </Body>
      <NavBar />
    </>
  );
};

export default Availability;
