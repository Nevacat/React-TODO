import styled from "styled-components"

export const Priority = styled.div`
  width:100%;
  height: 1.9rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.darkVersion.box};
  display:flex;
  justify-content:center;
`

export const PriorityLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin-right: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.PriorityColor[props.value]};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:last-child{
    margin-right:0;
  }
`

export const PriorityInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`

export const PriorityMarker = styled.div`
  box-sizing:border-box;
  position: absolute;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 3px solid rgba(255,255,255,0.8);
  display: ${(props) => props.checked ? 'block' : 'none'};
`