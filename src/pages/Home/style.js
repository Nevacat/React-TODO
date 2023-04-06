import styled, { css } from 'styled-components';

const Circle = css`
  position: absolute;
  box-sizing: border-box;
  border-radius: 50%;
  ${({theme})=>theme.gradient}
`;

export const Circle1 = styled.div`
  ${Circle}
  width: 48rem;
  height: 48rem;
  left: -2.9rem;
  bottom: -30rem;
  opacity: 0.8;
`;

export const Circle2 = styled.div`
  ${Circle}
  width: 38rem;
  height: 38rem;
  left: 2.1rem;
  bottom: -25rem;
  opacity: 0.7;
`;

export const Circle3 = styled.div`
  ${Circle}
  width: 28rem;
  height: 28rem;
  left: 7rem;
  bottom: -20rem;
  opacity: 0.9;
`;