import React from "react";
import { Container, Title, Text, StyledButton } from "../components/about/styledAbout";
import StudentAndTutor from "../assets/images/StudentAndTutor.svg";
import Circles2 from "../assets/images/Circles2.png";

const About2 = () => {
  return (
      <Container>
          <img
              src={StudentAndTutor}
              alt="Student with a tutor"
          />
          <Title>Let the learning begin!</Title>
          <Text>Schedule A Tutoring Session And Keep Contact After For Reschedule Or Clarify Doubts</Text>
          <img
                src={Circles2}
            />
          <StyledButton>CONTINUE</StyledButton>
      </Container>
  );
};

export default About2;