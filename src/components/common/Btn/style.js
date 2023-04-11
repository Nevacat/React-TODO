import styled from "styled-components";

export const Btn = styled.button`
  position:absolute;
  cursor: pointer;
  width: 11.8rem;
  height: 5.4rem;
  ${({theme})=>theme.gradient};
  outline:none;
  border:none;
  border-radius: 1rem;
  font-size: ${({theme})=>theme.fontSize.semiLarge};
  font-weight: ${({theme})=>theme.fontWeight.bold};
  left:0;
  right:0;
  bottom: ${(props)=>props.name === 'Todo'? '30.5rem':'4.5rem'};
  margin: 0 auto;
  z-index: 1;
`