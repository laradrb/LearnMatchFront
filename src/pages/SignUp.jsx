import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config/urls";
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
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleArrowClick = () => {
    navigate("/login");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}register/`, {  
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: fullName,
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        alert("User registered successfully!");
        navigate("/login");
      } else {
        const errorData = await response.json();
        alert("Error: " + errorData.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <Container>
      <ArrowImg
        src={Arrow}
        alt="Arrow"
        onClick={handleArrowClick}
        style={{ cursor: "pointer" }}
      />
      <Title>SIGN UP</Title>

      <Label>Full Name</Label>
      <StyledInput
        placeholder="María García"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <Label1>Email</Label1>
      <StyledInput
        placeholder="user@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Label>Password</Label>
      <PasswordWrapper>
        <StyledInput
          type={showPassword ? "text" : "password"}
          placeholder="***********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <IconImg
          src={HiddenPassword}
          alt="Toggle Confirm Password"
          onClick={toggleConfirmPasswordVisibility}
        />
      </PasswordWrapper>

      <StyledButton onClick={handleSignUp}>SIGN UP</StyledButton>
    </Container>
  );
};

export default SignUp;