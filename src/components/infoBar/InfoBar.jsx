import React from "react";
import { useNavigate } from "react-router-dom"; 
import { Container, Title, Logo } from "./styledInfoBar"; 
import Bell from "../../assets/images/Bell.svg";

const InfoBar = ({ username }) => { 
    const navigate = useNavigate(); 
  
    const handleLogoClick = () => {
      navigate("/chat"); 
    };
  
    const handleUsernameClick = () => {
      navigate("/profile"); 
    };
  
    return (
      <Container>
        <Title onClick={handleUsernameClick}>Welcome, {username}</Title>
        <Logo
          src={Bell}
          alt="Bell logo"
          onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
        />
      </Container>
    );
  };
  
  export default InfoBar;