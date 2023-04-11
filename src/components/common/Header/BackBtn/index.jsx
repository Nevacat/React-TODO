import React from 'react'
import { AiFillLeftSquare } from "react-icons/ai";
import * as S from './style'
import { useLocation, useNavigate} from 'react-router-dom';
function Back() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleBack = ()=>{
    location.pathname==='/note'
    ?navigate('/')
    :navigate('/note')
  }

  return (
    <S.Back hide={location.pathname==='/'} onClick={handleBack}>
      <AiFillLeftSquare/>
    </S.Back>
  )
}

export default Back