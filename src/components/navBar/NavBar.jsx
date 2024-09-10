import React from "react";
import { useNavigate } from "react-router-dom"; 
import Home from "../../assets/images/Home.svg";
import SearchIcon from "../../assets/images/SearchIcon.svg";
import Chat from "../../assets/images/Chat.svg";
import Courses from "../../assets/images/Courses.svg";
import Profile from "../../assets/images/Profile.svg";
import { Container, HomeLogo, SearchLogo, ChatLogo, CoursesLogo, ProfileLogo } from "./styledNavBar"; 

const NavBar = () => {
  const navigate = useNavigate(); 

  const handleLogoClick = (path) => {
    navigate(path); 
  };

  return (
    <Container>
      <HomeLogo
        src={Home}
        alt="Home logo"
        onClick={() => handleLogoClick("/")}
        style={{ cursor: "pointer" }}
      />
      <SearchLogo
        src={SearchIcon}
        alt="Search logo"
        onClick={() => handleLogoClick("/search")} 
        style={{ cursor: "pointer" }}
      />
      <ChatLogo
        src={Chat}
        alt="Chat logo"
        onClick={() => handleLogoClick("/chat")} 
        style={{ cursor: "pointer" }}
      />
      <CoursesLogo
        src={Courses}
        alt="Courses logo"
        onClick={() => handleLogoClick("/mycourses")}
        style={{ cursor: "pointer" }}
      />
      <ProfileLogo
        src={Profile}
        alt="Profile logo"
        onClick={() => handleLogoClick("/profile")}
        style={{ cursor: "pointer" }}
      />
    </Container>
  );
};

export default NavBar;
