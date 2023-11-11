import {styled} from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 60px;
  right: 60px;
  border-radius: 50%;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    
    &::before {
        content: "";
        width: 50px;
        height: 50px;
        border: 5px solid #313030;
        border-top-color: transparent;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
  } 
`;