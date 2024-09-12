import React , {useState} from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  ArrowImg,
  Title,
  StyledButton,
  Label,
  Label1,
  Label2,
  StyledInput,
  PasswordWrapper,
  IconImg,
} from "../components/signUp/styledSignUp";
import Arrow from "../assets/images/Arrow.png";
import HiddenPassword from "../assets/images/HiddenPassword.svg";

const SignUp = () => {
  const navigate = useNavigate(); 

  const handleArrowClick = () => {
    navigate("/login"); 
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Container>
      <ArrowImg 
      src={Arrow} 
      alt="Arrow" 
      onClick={handleArrowClick} 
      style={{ cursor: 'pointer' }} 
    />
      <Title>SIGN UP</Title>

      <Label>Full Name</Label>
      <StyledInput placeholder="María García" />

      <Label1>Email</Label1>
      <StyledInput placeholder="user@email.com" />

      <Label>Password</Label>
      <PasswordWrapper>
        <StyledInput
          type={showPassword ? "text" : "password"} 
          placeholder="***********"
        />
        <IconImg
          src={HiddenPassword}  
          alt="Toggle Password"
          onClick={togglePasswordVisibility}  
        />
      </PasswordWrapper>

      <Label2>Confirm Password</Label2>
      <PasswordWrapper>
        <StyledInput
          type={showConfirmPassword ? "text" : "password"}
          placeholder="***********"
        />
        <IconImg
          src={HiddenPassword}
          alt="Toggle Confirm Password"
          onClick={toggleConfirmPasswordVisibility}
        />
      </PasswordWrapper>

      <StyledButton>SIGN UP</StyledButton>
    </Container>
  );
};

export default SignUp;
