import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Body, Title, StyledCalendar } from "./styledCalendar";

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("Select date:", date);
  };

  return (
    <Body>
      <Title>Select Your Tutoring Session</Title>
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