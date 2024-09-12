import React from "react";
import { Body, Title, StyledButtonInput } from "./styledTutors";
import Elena from "../.../assets/images/Elena.png";
import Roberto from "../.../assets/images/Roberto.png";
import Diana from "../.../assets/images/Diana.png";
import Fernando from "../.../assets/images/Fernando.png";

const Tutors = () => {
  return (
    <Body>
      <Title>Get To Know Your Tutors</Title>

      <StyledButtonInput icon={Elena} type="button" value="Elena Pérez" />
      <StyledButtonInput icon={Roberto} type="button" value="Roberto González" />
      <StyledButtonInput icon={Diana} type="button" value="Diana Díaz" />
      <StyledButtonInput icon={Fernando} type="button" value="Fernando Alonso" />
    </Body>
  );
};

export default Tutors;
