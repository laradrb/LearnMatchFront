import React from "react";
import Logo from "../assets/images/Logo.svg";
import { Body, MainLogo } from "../styled/StyledHome";

const Home = () => {
    return (
      <Body>
        <MainLogo src={Logo} alt="Logo"></MainLogo>
      </Body>
    );
  };
  
  export default Home;