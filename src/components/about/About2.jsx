import React from "react";
import { Container, Title, Text, StyledButton2 } from "./styledAbout";
import StudentAndTutor from "../../assets/images/StudentAndTutor.svg"; 
import Circles2 from "../../assets/images/Circles2.svg"; 

const About2 = () => {
    return (
        <Container>
            <img
                src={StudentAndTutor}
                alt="Student with a tutor"
                style={{ maxWidth: "100%", height: "auto", marginBottom: "20px" }} 
            />
            <Title>Let the learning begin!</Title>
            <Text>Schedule A Tutoring Session And Keep Contact After For Reschedule Or Clarify Doubts</Text>
            <img
                src={Circles2}
            />
            <StyledButton2>CONTINUE</StyledButton2>
        </Container>
    );
};

export default About2;