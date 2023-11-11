import {styled} from "styled-components";
import {Container as Button} from '../../ui/Button/Button.styled'

export const Container = styled.div`
  position: relative;
  width: 30%;
  display: flex;
  flex-direction: column;
  background-color: #313030;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  padding: 10px 20px;
  
  border-radius: 0 12px 12px 0;

`;

export const SearchPersonsList = styled.div<{show?: boolean}>`
  display: flex;
  flex-direction: column;
  
  position: absolute;
  top: 47px;
  left: 20px;
  right: 20px;
  
  max-height: 300px;
  overflow: auto;
  
  background-color: white;  
  
  transition: opacity 0.3s ease-in-out;
  border-radius: 0 0 10px 10px;
  
  ${({show}) => show ? `
    opacity: 1;
    pointer-events: all;
  ` : `
    opacity: 0;
    pointer-events: none;
  `}
`;

export const SearchPersonsListItem = styled.div`
  display: flex;
  flex-direction: row;
  
  position: relative;
  padding: 10px 10px;
  justify-content: space-between;
  align-items: center;
  
  font-weight: 500;
  
  transition: background-color 0.3s ease-in-out;
  
  &:hover {
    background-color: #c9c9c9;
    cursor: pointer;
  }
  
  a {
    width: 100%;
    height: 100%;
    padding: 10px 0;
  }
  
  ${Button} {
    position: absolute;
    right: 10px;
  }
  
  
`;