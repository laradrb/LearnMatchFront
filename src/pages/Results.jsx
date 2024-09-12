import React from "react";
import NavBar from "../components/navBar/NavBar";
import InfoBar from "../components/infoBar/InfoBar";
import {
  Body,
  Title,
  StyledButtonInput,
} from "../components/tutorsList/styledTutors";
import Elena from "../assets/images/Elena.png";
import Roberto from "../assets/images/Roberto.png";
import Diana from "../assets/images/Diana.png";
import Fernando from "../assets/images/Fernando.png";

const Results = () => {
  return (
    <>
      <InfoBar />
      <Body>
      <Title>Get To Know Your Tutors</Title>
      <StyledButtonInput icon={Elena} type="button" value="Elena Pérez" />
      <StyledButtonInput icon={Roberto} type="button" value="Roberto González" />
      <StyledButtonInput icon={Diana} type="button" value="Diana Díaz" />
      <StyledButtonInput icon={Fernando} type="button" value="Fernando Alonso" />
      </Body>
      <NavBar />
    </>
  );
};

export default Results;
