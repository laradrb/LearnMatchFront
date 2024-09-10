import React from "react";
import NavBar from "../components/navBar/NavBar"; 
import InfoBar from "../components/infoBar/InfoBar";
import { Body, Title, StyledInput } from "../components/tutorsList/styledTutors";

const MyCourses = () => {
    return (
        <>
    <InfoBar />
      <Body>
      <Title>My Courses</Title>
      <StyledInput placeholder="Financial Accounting" />
      <StyledInput placeholder="Marketing Management" />
      <StyledInput placeholder="Business Law" />
      </Body>
      <NavBar />
    </>
    );
  };
  
  export default MyCourses;