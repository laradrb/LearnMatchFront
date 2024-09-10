import React from "react";
import NavBar from "../components/navBar/NavBar"; 
import InfoBar from "../components/infoBar/InfoBar";
import { Body, Title, StyledInput } from "../components/tutorsList/styledTutors";

const Results = () => {
    return (
        <>
            <InfoBar />
      <Body>
      <Title>Get To Know Your Matching Tutors</Title>
      <StyledInput placeholder="Elena Pérez" />
      <StyledInput placeholder="Elena Pérez" />
      <StyledInput placeholder="Elena Pérez" />
      <StyledInput placeholder="Elena Pérez" />
      </Body>
      <NavBar />
    </>
    );
  };
  
  export default Results;