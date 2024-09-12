import styled from 'styled-components';

export const Container = styled.div`
  position: fixed; 
  bottom: 0; 
  left: 0;
  width: 100%; 
  display: flex;
  justify-content: space-around; 
  align-items: center; 
  padding: 20px; 
  background-color: #007a8c; 
  z-index: 1000;
`;

const Icon = styled.img`
  width: 27px;
  height: 27px;
`;

export const HomeLogo = styled(Icon)`
color: #F7EFB3;
`;

export const SearchLogo = styled(Icon)`
color: #F7EFB3;
`;

export const ChatLogo = styled(Icon)``;

export const CoursesLogo = styled(Icon)``;

export const ProfileLogo = styled(Icon)``;