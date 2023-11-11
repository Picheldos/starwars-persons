import {styled} from "styled-components";
import {Container as Button} from '../../ui/Button/Button.styled'
import {Link} from "react-router-dom";

export const Container = styled.div`  
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  
  border-radius: 12px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

export const PeoplesTableRowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  max-height: 100%;
  overflow: auto;
`;

export const PeoplesTableRow = styled.div<{detail?: boolean}>`
  display: flex;
  width: 100%;
  
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  
  transition: background-color 0.3s ease-in-out;
  
  &.topRow {
    font-weight: 600;
    font-size: 16px;
    
    pointer-events: none;
  }
  
  &:hover {
    ${({detail}) => !detail && `
      background-color: #c9c9c9;
      cursor: pointer;
    `}
  }
`;

export const PeoplesTableRowItem = styled.div`
  position: relative;
  display: flex;
  padding: 10px 5px;
  align-items: center;
  flex: 1;
  
  
  ${Button} {
      flex: 1;
      max-width: 150px;
      margin: auto;
  }
  
`;

export const PeoplesTableRowItemLink = styled(Link)`
  position: relative;
  display: flex;
  padding: 5px;
  align-items: center;
  flex: 1;
`;