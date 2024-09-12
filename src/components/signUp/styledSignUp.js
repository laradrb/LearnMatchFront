import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #F7EFB3;
  background-size: cover;
  background-position: center;
  height: 100vh;
  position: relative;
`;

export const ArrowImg = styled.img`
  position: absolute;
  top: 50px;
  left: 20px;
  width: 24px;
  height: 24px;
`;

export const Title = styled.h1`
  color: #007a8c;
  font-size: 32px;
  margin-top: 10px;
  font-family: "Rambla", sans-serif;
  text-align: center;
  max-width: 300px;
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

export const StyledInput = styled.input`
  width: 85%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #336749;
  border-radius: 5px;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.8);
  font-family: "Rambla", sans-serif;
`;

export const Label = styled.label`
  color: #007a8c;
  font-size: 20px;
  margin-top: 25px;
  margin-bottom: 15px;
  font-family: "Rambla", sans-serif;
  margin-right: 275px;
`;

export const Label1 = styled(Label)`
  margin-right: 310px;
`;

export const Label2 = styled(Label)`
  margin-right: 210px;
`;

export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const IconImg = styled.img`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  cursor: pointer;
`;