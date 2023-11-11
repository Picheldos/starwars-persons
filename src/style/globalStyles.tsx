import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        font-family: "Gill Sans", sans-serif;
        
        color: black;
        overflow-x: hidden;
        min-width: 100vw;
        ::-webkit-scrollbar {
            width: 6px;
            background-color: rgba(222, 222, 222, 0.75);
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 4px;
            background-color: rgba(0, 0, 0, 0.5);
        }

        ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
            border-radius: 3px;
            background-color: rgba(222, 222, 222, 0.75);
        }

        scrollbar-color: rgba(0, 0, 0, 0.5) rgba(222, 222, 222, 0.75);
        scrollbar-width: thin;
    }

    body {
        padding: 0;
        margin: 0;
        overscroll-behavior: none;
        overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, span, a {
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        text-transform: inherit;
        text-decoration: inherit;
        margin: 0;

        
    }

    a {
        text-decoration: none;
        color: inherit;
        outline: none;
    }
    
    ul {
      list-style: none;
      li {
        position: relative;
        padding-left: 14px;
      }
      li:before {
      position: absolute;
      top: 7px;
      left: 0;
      content: '';
      display: inline-block;
      height: 4px;
      width: 4px;
      vertical-align: middle;
      border-radius: 50%;
      background-color: #000;
      margin-right: 10px;
    }

    }
    
    
    button {
        color: inherit;
        
        &, &:active,
        &:focus {
            outline: none;
        }
    }
    
    input {
      border: none;
      background: inherit;
      font-size: inherit;
      font-family: inherit;
      -webkit-appearance: none;
      color: inherit;
    
      &:hover,
      &:active,
      &:focus {
        outline: none;
      }
    }
`;

export default GlobalStyle;
