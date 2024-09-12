import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Text, StyledButton } from "../components/about/styledAbout";
import GirlWithComputer from "../assets/images/GirlWithComputer.svg";
import Circles from "../assets/images/Circles.png";

const About = () => {
    const navigate = useNavigate(); 

    const handleContinueClick = () => {
    navigate("/aboutLM2"); 
  };
  return (
      <Container>
          <img
              src={GirlWithComputer}
              alt="Girl with computer"
          />
          <Title>Struggling with your studies?</Title>
          <Text>Connect With Tutors Based On Your Needs And Knowledge</Text>
          <img src={Circles} />
          <StyledButton onClick={handleContinueClick}>CONTINUE</StyledButton>
      </Container>
  );
};

export default About;