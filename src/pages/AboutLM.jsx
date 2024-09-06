import React from "react";
import { Container, Title, Text, StyledButton } from "../components/about/styledAbout";
import GirlWithComputer from "../assets/images/GirlWithComputer.svg";
import Circles from "../assets/images/Circles.png";

const About = () => {
  return (
      <Container>
          <img
              src={GirlWithComputer}
              alt="Girl with computer"
          />
          <Title>Struggling with your studies?</Title>
          <Text>Connect With Tutors Based On Your Needs And Knowledge</Text>
          <img
                src={Circles}
            />
          <StyledButton>CONTINUE</StyledButton>
      </Container>
  );
};

export default About;