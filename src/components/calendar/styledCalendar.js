import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 75vh; 
  background-color: #ffffff;
`;

export const Title = styled.h1`
  color: #007a8c;
  font-size: 20px;
  font-family: "Rambla", sans-serif;
  margin-bottom: 40px;
`;

export const StyledCalendar = styled.div`
  .react-calendar {
    border: 1px solid #007a8c; 
    border-radius: 5px;
    padding: 10px;
    font-family: "Rambla", sans-serif;
  }

  .react-calendar__tile--active {
    background-color: #007a8c;
    color: white;
    border: 2px solid #007a8c;
  }


  .react-calendar__tile--active:enabled:focus {
    background-color: #007a8c;
    color: #ffffff;
  }
`;