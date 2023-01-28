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
    font-size: 32px;
    color: #FFFFFF ;
  }

  h2 {
    font-size: 24px;
    color: #FFFFFF ;
    font-family: "Inter",sans-serif;
    
  }

  h3{
    color: white;
  }

  p{
    color: white;
  }

  input{
  background: transparent;
  font-size: 20px;
  border: none;
  outline: none;
  color: #ffffff;
  }

  img{
    object-fit: cover;
 
  }

`;
