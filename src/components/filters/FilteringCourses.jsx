import React, { useState, useEffect } from "react";
import {
  Body,
  Label,
  StyledSelect,
  StyledButtonContainer,
  StyledButton,
  StyledButtonContainer2,
  StyledButton3,
  StyledButton2
} from "./styledFilters";
import { useNavigate } from "react-router-dom";
import useApi from "../../services/useApi";

const Filters = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [categories, setCategories] = useState([]);
  const [levels, setLevels] = useState([]);
  const navigate = useNavigate();


  const { data: categoryData, loading: categoryLoading, error: categoryError } = useApi({
    apiEndpoint: "http://localhost:8000/api/v1/course/",
  });

  const { data: levelData, loading: levelLoading, error: levelError } = useApi({
    apiEndpoint: "http://localhost:8000/api/v1/level/",
  });

  useEffect(() => {
    if (categoryData) {
      setCategories(categoryData);
    }
    if (levelData) {
      setLevels(levelData);
    }
  }, [categoryData, levelData]);

  const handleButtonClick = (value) => {
    setSelectedButton(value);
  };

  const handleApplyFilters = () => {
    navigate(`/results?time=${selectedButton}`);
  };

  return (
    <Body>
      <Label>Course Category</Label>
      <StyledSelect>
        {categoryLoading ? (
          <option>Loading...</option>
        ) : categoryError ? (
          <option>Error loading categories</option>
        ) : (
          categories.map((category) => (
            <option key={category.id} value={category.value}>
              {category.name}
            </option>
          ))
        )}
      </StyledSelect>

      <Label>Difficulty Level</Label>
      <StyledSelect>
        {levelLoading ? (
          <option>Loading...</option>
        ) : levelError ? (
          <option>Error loading levels</option>
        ) : (
          levels.map((level) => (
            <option key={level.id} value={level.value}>
              {level.name}
            </option>
          ))
        )}
      </StyledSelect>

      <Label>How much time do you have for a session?</Label>
      <StyledButtonContainer>
        <StyledButton
          selected={selectedButton === "1hr"}
          onClick={() => handleButtonClick("1hr")}
        >
          1hr
        </StyledButton>
        <StyledButton
          selected={selectedButton === "1-3hr"}
          onClick={() => handleButtonClick("1-3hr")}
        >
          1-3 hr
        </StyledButton>
        <StyledButton
          selected={selectedButton === "3-6hr"}
          onClick={() => handleButtonClick("3-6hr")}
        >
          3-6 hr
        </StyledButton>
      </StyledButtonContainer>

      <Label>When do you want to have a session?</Label>
      <StyledButtonContainer2>
        <StyledButton3
          selected={selectedButton === "Morning"}
          onClick={() => handleButtonClick("Morning")}
        >
          Morning
        </StyledButton3>
        <StyledButton3
          selected={selectedButton === "Afternoon"}
          onClick={() => handleButtonClick("Afternoon")}
        >
          Afternoon
        </StyledButton3>
        <StyledButton3
          selected={selectedButton === "Any time"}
          onClick={() => handleButtonClick("Any time")}
        >
          Any time
        </StyledButton3>
      </StyledButtonContainer2>
      <StyledButton2 onClick={handleApplyFilters}>APPLY FILTERS</StyledButton2>
    </Body>
  );
};

export default Filters;