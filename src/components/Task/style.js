import styled, { css } from 'styled-components';
import { AiFillCheckCircle } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';

export const Task = styled.li`
  position:relative;
  height: 2rem;
  padding: 1.5rem 1rem 1.5rem 2.6rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items:center;
  background-color: ${({ theme }) => theme.darkVersion.box};
  color: ${({ theme }) => theme.darkVersion.fontPrimary};
  font-weight: ${({ theme }) => theme.fontWeight.nomal};
  list-style: none;
  &:last-child {
    margin-bottom: 0;
  }
  &::before{
    content:"";
    position:absolute;
    width:0.3rem;
    height:3rem;
    background-color:${(props)=>props.theme.PriorityColor[props.order]};
    left: 1.4rem;
  }
`;
export const Title = styled.p`
  width: 27.5rem;
  line-height: 2rem;
`;
const icons = css`
  cursor: pointer;
  margin-right: 1rem;
  font-size: ${({ theme }) => theme.fontSize.semiLarge};
`;

export const Done = styled(AiFillCheckCircle)`
  ${icons}
  color: ${({ theme }) => theme.color.blue};
`;

export const Delete = styled(TiDelete)`
  ${icons}
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.fontSize.large};
`;