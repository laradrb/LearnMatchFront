import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  text-align: center;
  margin-top: 100px
`;

export const Title = styled.h1`
  color: #007a8c;
  font-size: 32px;
  margin-top: 50px;
  font-family: "Rambla", sans-serif;
  text-align: center;
  max-width: 300px;
`;

export const Text = styled.p`
  color: #6C6C6C;
  font-size: 16px;
  margin: 0;
  font-family: "Rambla", sans-serif;
  margin-top: 20px;
  margin-bottom: 80px;
  max-width: 250px;
`;

export const StyledButton = styled.button`
  width: 70%;
  padding: 20px;
  background-color: #007a8c;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin-top: 80px; 
  transition: background-color 0.3s ease;
  font-family: "Rambla", sans-serif;
`;

