import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
  ${reset}
  :root{
    font-size: 10px;
    font-weight: 400;
    font-family: 'Noto Sans', sans-serif; 
  }
  body{
    height: 100vh;
  }
`