import styled from "styled-components";

export const Title = styled.h2`
  text-align:center;
  margin: 2rem 0;
`

export const Tasks = styled.ul`
  position:relative;
  height: 17rem;
  overflow: auto;
  &::-webkit-scrollbar{
    width: 0.4em;
  }
  &::-webkit-scrollbar-thumb{
    background-color:black;
    border-radius:0.7rem;
  }
`
