import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  ArrowImg,
  Title,
  StyledButton,
  Label, 
  Label2,
  StyledInput,
  Title2,
  Title3,
} from "../components/logIn/styledLogIn";
import Arrow from "../assets/images/Arrow.png";

const LogIn = () => {
  const navigate = useNavigate(); 

  const handleArrowClick = () => {
    navigate("/"); 
  };
  return (
    <Container>
      <ArrowImg src={Arrow} 
      alt="Arrow" 
      onClick={handleArrowClick} 
      style={{ cursor: 'pointer' }} 
    />
      <Title>LOG IN</Title>
      <Label>Email</Label>

      <StyledInput
        placeholder="user@email.com"
      />
      <Label2>Password</Label2>

<StyledInput
  placeholder="***********"
/>
      <StyledButton>LOG IN</StyledButton>
      <br></br>
      <Title2>Don't have an Account?</Title2>
      <Title3>Sign Up Here</Title3>
    </Container>
  );
};

export default LogIn;
