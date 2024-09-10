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

export const StyledInput = styled.input`
  width: 85%;
  padding: 45px;
  border: 1px solid #336749;
  border-radius: 5px;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.8);
  font-family: "Rambla", sans-serif;
  margin-bottom: 20px;
`;