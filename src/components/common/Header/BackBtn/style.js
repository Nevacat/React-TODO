import styled from "styled-components";

export const Back = styled.i`
  width:2.4rem;
  height:2.4rem;
  ${(props) => (
    props.hide && props.theme.hide
  )}
`