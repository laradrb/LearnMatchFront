import React from "react";
import NavBar from "../components/navBar/NavBar"; 
import InfoBar from "../components/infoBar/InfoBar";
import { Body } from "../components/filters/styledFilters";  

const Filters = () => {
  return (
    <>
    <InfoBar />
      <Body>
        <h1>Hola</h1>
      </Body>
      <NavBar />
    </>
  );
};

export default Filters;