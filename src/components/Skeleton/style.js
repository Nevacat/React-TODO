import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%{
    opacity: 0.3;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0.3;
  }
`
export const SkeletonBlock = styled.div`
  animation: ${pulse} 1.5s ease-in-out infinite;
  position:relative;
  background-color: #222;
  border-radius:8px;
  height:50px;
  margin-bottom:1rem;
  &:last-child{
    margin-bottom:0;
  }
`