import styled from "styled-components";
import Setting from "./Setting";

export const Header = styled.div`
  height: 7rem;
  padding: 0 3rem;
  display: flex;
  font-size: ${({theme})=>theme.fontSize.large};
  color: ${({theme})=>theme.color.purple};
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #1e1f21;
  `

export const Title = styled.h1`
  font-weight: ${({theme})=>theme.fontWeight.bold};
`