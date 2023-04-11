import styled, { css } from 'styled-components';

export const NewTask = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
`;

export const box = styled.div`
  width:100%;
  display:flex;
  align-items:center;
`

const TaskStyles = css` 
  width:100%;
  height: 1.9rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border: none;
  background-color: ${({ theme }) => theme.darkVersion.box};
  color: ${({ theme }) => theme.darkVersion.fontPrimary};
  font-size: ${({theme})=>theme.fontSize.regular};
  font-weight: ${({theme})=>theme.fontWeight.bold};
  text-align:center;
`;

export const TaskInput = styled.input.attrs({autoComplete: 'off'})`
  ${TaskStyles};
  &:focus{
    outline:none;
  }
  
`;

export const TaskLabel = styled.label`
  ${TaskStyles};
  width: 5.6rem;
  display: inline-block;
  line-height:1.9rem;
  `
;

