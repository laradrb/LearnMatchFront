import styled from "styled-components";

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top:-120px;
`;

export const StyledButton = styled.button`
  padding: 12px 20px;
  border: 1px solid #007a8c;
  border-radius: 5px;
  background-color: ${(props) => (props.selected ? "#007a8c" : "#ffffff")};
  color: ${(props) => (props.selected ? "#ffffff" : "#007a8c")};
  font-size: 14px;
  cursor: pointer;
  font-family: "Rambla", sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #005f6a;
    color: #ffffff;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const StyledButton2 = styled.button`
width: 30%;
padding: 20px;
background-color: #007a8c;
color: white;
font-size: 16px;
border: none;
border-radius: 5px;
cursor: pointer;
margin-top: 40px;
transition: background-color 0.3s ease;
font-family: "Rambla", sans-serif;
`;

