import {styled} from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  
  height: 100vh;
  width: 100vw;
  
  a {
    width: 50%;
    height: 100%;
    display: flex;
    
    font-size: 100px;
    font-weight: 600;
    
    transition: background-color 0.6s ease-in-out, color 0.6s ease-in-out;
    
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

export const HomeSectionLink = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  
  
`;