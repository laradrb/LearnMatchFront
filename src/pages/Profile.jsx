import React, { useState, useEffect } from "react";
import {
  Title1,
  Label,
  Label1,
  Label2,
  Label3,
  StyledInput,
  PasswordWrapper,
  StyledInput1,
  Title2,
  StyledButton2,
} from "../styled/StyledProfile";
import NavBar from "../components/navBar/NavBar"; 
import InfoBar from "../components/infoBar/InfoBar";
import { Body } from "../components/tutorsList/styledTutors";

const Profile = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const storedFullName = localStorage.getItem('userFullName') || "";
    const storedEmail = localStorage.getItem('userEmail') || "";
    const storedPassword = localStorage.getItem('userPassword') || "";

    setFullName(storedFullName);
    setEmail(storedEmail);
    setPassword(storedPassword);
  }, []);


  const handleSaveChanges = () => {
    console.log("Changes saved");
  };

  return (
    <>
      <InfoBar />
      <Body>
        <Title1>Personal Info</Title1>
        
        <Label>Username</Label>
        <StyledInput 
          value={fullName} 
          onChange={(e) => setFullName(e.target.value)} 
        />

        <Label1>Email</Label1>
        <StyledInput 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />

        <Label>Password</Label>
        <PasswordWrapper>
          <StyledInput1
            type={showPassword ? "text" : "password"} 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
        </PasswordWrapper>

        <Title2>Your Education</Title2>
        <Label2>Degree</Label2>
        <StyledInput placeholder="Business Administration" />

        <Label3>University</Label3>
        <StyledInput placeholder="University of A Coruña" />
        <StyledButton2 onClick={handleSaveChanges}>SAVE CHANGES</StyledButton2>
      </Body>
      <NavBar />
    </>
  );
};

export default Profile;