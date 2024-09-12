import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Body, Title, StyledCalendar } from "./styledCalendar";

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("Select date:", date);
  };

  const location = useLocation();
  const { tutor } = location.state || { tutor: "your tutor" };

  return (
    <Body>
      <Title>Select Your Tutoring Session With {tutor}</Title>
      <StyledCalendar>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          selectRange={false}
          locale="en-US"
        />
      </StyledCalendar>
    </Body>
  );
};

export default MyCalendar;