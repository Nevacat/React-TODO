import styled from "styled-components";

export const Layout = styled.div`
  background-color: ${({theme})=>theme.darkVersion.background};
  width: 39rem;
  height: 80.4rem;
  padding: 1rem 1.5rem 5rem;
  border-radius: 1.2rem;
  position: relative;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  color: ${({theme})=>theme.darkVersion.fontPrimary};
  overflow:hidden;
`
