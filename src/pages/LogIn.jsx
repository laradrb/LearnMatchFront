import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config/urls";
import useApi from "../services/useApi";
import {
  Container,
  ArrowImg,
  Title,
  StyledButton,
  Label, 
  Label2,
  StyledInput,
  Title2,
  Title3,
} from "../components/logIn/styledLogIn";
import Arrow from "../assets/images/Arrow.png";

const LogIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const { request, loading, error } = useApi({
    apiEndpoint: `${API_BASE_URL}login/`,
    method: "POST",
  });

  
  const handleArrowClick = () => {
    navigate("/");
  };

  
  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await request(formData);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", formData.username);
      navigate(`/search?username=${encodeURIComponent(formData.username)}`);
    } catch (err) {
      console.error("Login error:", err);
    }
  };


  const renderError = () => {
    if (!error) return null;
    if (typeof error === "object") {
      return (
        <ul style={{ color: "red" }}>
          {Object.entries(error).map(([key, value]) => (
            <li key={key}>{`${key}: ${value}`}</li>
          ))}
        </ul>
      );
    }
    return <p style={{ color: "red" }}>{error}</p>;
  };

  return (
    <Container>
      <ArrowImg
        src={Arrow}
        alt="Arrow"
        onClick={handleArrowClick}
        style={{ cursor: 'pointer' }}
      />
      <Title>LOG IN</Title>

      <form onSubmit={handleSubmit}>
      <Label>Username</Label>
      <StyledInput
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />

      <Label2>Password</Label2>
      <StyledInput
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />

      <StyledButton
        type="submit"
        disabled={loading}
      >
        {loading ? "Logging In..." : "LOG IN"}
      </StyledButton>
      </form>

      <br></br>
      <Title2>Don't have an Account?</Title2>
      <Title3 onClick={handleSignUpClick}>Sign Up Here</Title3>
    </Container>
  );
};

export default LogIn;