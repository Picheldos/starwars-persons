import {styled} from "styled-components";

export const Container = styled.div<{bgColor?: string}>`
  display: flex;
  padding: 10px 20px;
  background-color: ${({bgColor}) => bgColor || '#313030'};
  border-radius: 7px;
  
  transition: background-color 0.3s ease-in-out;
  
  &:hover {
    cursor: pointer;
    background-color: #494646;
  }
`;

export const ButtonText = styled.div`
  color: white;
  margin: auto;
`;