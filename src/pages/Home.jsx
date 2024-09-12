import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";
import { Body, MainLogo } from "../styled/StyledHome";

const Home = () => {
    return (
      <Body>
        <Link to="/aboutLM">
        <MainLogo src={Logo} alt="Logo"></MainLogo>
        </Link>
      </Body>
    );
  };
  
  export default Home;