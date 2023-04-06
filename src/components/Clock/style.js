import styled, {css} from 'styled-components';

export const Clock = styled.div`
  width: 7.8rem;
  height: 15.6rem;
  font-size: ${({ theme }) => theme.fontSize.big};
  margin: 11.4rem auto 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-weight: ${({theme})=>theme.fontWeight.bold}
`;

export const Hour = styled.div`
  color: ${({ theme }) => theme.color.blue};
`;
export const Min = styled.div`
  color: ${({ theme }) => theme.color.purple};
`;


