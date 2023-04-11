import styled from "styled-components";

export const Setting = styled.i`
  /* cursor: pointer; */
  width: 2.4rem;
  height: 2.4rem;
  opacity: 0;
  ${(props) => (
    props.hide && props.theme.hide
  )}
`;