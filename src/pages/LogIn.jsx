import React from "react";
import {
  Container,
  ArrowImg,
  Title,
  StyledButton,
  Label, 
  StyledInput
} from "../components/logIn/styledLogIn";
import Arrow from "../assets/images/Arrow.png";

const LogIn = () => {
  return (
    <Container>
      <img src={Arrow} alt="Arrow" />
      <Title>LOG IN</Title>
      <Label>Email Here</Label>

      <StyledInput
        placeholder="user@email.com"
      />
      <Label>Password</Label>

<StyledInput
  placeholder="***********"
/>
      <StyledButton>LOG IN</StyledButton>
    </Container>
  );
};

export default LogIn;
