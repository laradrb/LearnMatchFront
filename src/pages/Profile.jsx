import React , {useState} from "react";
import {
  Label,
  Label1,
  StyledInput,
  PasswordWrapper,
} from "../components/signUp/styledSignUp";
import NavBar from "../components/navBar/NavBar"; 
import InfoBar from "../components/infoBar/InfoBar";
import { Body, Title } from "../components/tutorsList/styledTutors";
import { StyledButton2 } from "../components/filters/styledFilters";

const Profile = () => {
    const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <>
    <InfoBar />
    <Body>
        <br></br>
    <Title>Personal Info</Title>
    
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
</PasswordWrapper>

<Title>Your education</Title>

<Label>Degree</Label>
<StyledInput placeholder="Business Administration" />

<Label1>University</Label1>
<StyledInput placeholder="University of A Coruña" />
    </Body>
    <StyledButton2>SAVE CHANGES</StyledButton2>
    <NavBar />
    </>
  );
};

export default Profile;