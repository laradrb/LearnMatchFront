import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; 
  background-color: #ffffff;
`;

export const StyledSelect = styled.select`
  width: 85%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #007a8c;
  border-radius: 5px;
  font-size: 14px;
  color: #6C6C6C;
  background-color: rgba(255, 255, 255, 0.8);
  font-family: "Rambla", sans-serif;
`;

export const Label = styled.label`
  color: #007a8c;
  font-size: 14px;
  font-weight: bold;
  margin-top: 25px;
  margin-bottom: 15px;
  font-family: "Rambla", sans-serif;
  text-align: left; 
  width: 85%; 
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  gap: 10px; 
  margin-top: 10px;
  margin-right: 130px;
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

export const StyledButton2 = styled.button`
  width: 50%;
  padding: 20px;
  background-color: #007a8c;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 80px;
  transition: background-color 0.3s ease;
  font-family: "Rambla", sans-serif;
`;

export const StyledButtonContainer2 = styled.div`
  display: flex;
  gap: 10px; 
  margin-top: 10px;
  margin-right: 60px;
`;