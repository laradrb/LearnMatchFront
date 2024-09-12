import React from "react";
import NavBar from "../components/navBar/NavBar";
import InfoBar from "../components/infoBar/InfoBar";
import { Body, Title, StyledButtonInput } from "../components/tutorsList/styledTutors";

const MyCourses = () => {
    const previousCourse = localStorage.getItem('previousCourse') || "No Previous Course Selected";
    const previousLevel = localStorage.getItem('previousLevel') || "No Previous Level Selected";
    const currentCourse = localStorage.getItem('currentCourse') || "No Current Course Selected";
    const currentLevel = localStorage.getItem('currentLevel') || "No Current Level Selected";

    return (
        <>
            <InfoBar />
            <Body>
                <Title>My Courses</Title>
                <StyledButtonInput value={`Course: ${currentCourse} - Level: ${currentLevel}`} readOnly />
                <StyledButtonInput value={`Course: ${previousCourse} - Level: ${previousLevel}`} readOnly />
            </Body>
            <NavBar />
        </>
    );
};

export default MyCourses;