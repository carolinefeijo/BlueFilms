import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }  

  button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  h1 {
    color: white;
  }
`;
