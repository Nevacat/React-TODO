import React from 'react'
import { AiFillLeftSquare } from "react-icons/ai";
import * as S from './style'
import { useLocation } from 'react-router-dom';
function Back() {
  const location = useLocation()
  return (
    <S.Back hide={location.pathname==='/'}>
      <AiFillLeftSquare/>
    </S.Back>
  )
}

export default Back