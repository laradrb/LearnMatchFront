import React from "react";
import { Container, Title, Text, StyledButton } from "./styledAbout";
import GirlWithComputer from "../../assets/images/GirlWithComputer.svg"; 
import Circles from "../../assets/images/Circles.png"; 

const About = () => {
    return (
        <Container>
            <img
                src={GirlWithComputer}
                alt="Girl with computer"
                style={{ maxWidth: "100%", height: "auto", marginBottom: "20px" }} 
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
