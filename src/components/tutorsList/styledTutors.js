import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; 
  background-color: #ffffff;
`;

export const Title = styled.h1`
  color: #007a8c;
  font-size: 20px;
  font-family: "Rambla", sans-serif;
  margin-bottom: 40px;
`;

export const StyledButtonInput = styled.input`
  width: 85%;
  padding: 15px 20px;
  border: 1px solid #007a8c;
  border-radius: 5px;
  font-size: 16px;
  background-color: white;
  color: #6C6C6C;
  text-align: center;
  font-family: "Rambla", sans-serif;
  margin-bottom: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005f70;
  }

  &:active {
    background-color: #004851;
  }

  &:focus {
    outline: none;
    border: 1px solid #004851;
  }

  background-image: url(${(props) => props.icon});
  background-size: 20px 20px;
  background-position: 10px center;
  background-repeat: no-repeat;
`;