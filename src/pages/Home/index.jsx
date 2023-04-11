import React from 'react'
import Clock from '../../components/Clock'
import * as S from './style'
import Btn from '../../components/common/Btn'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate = useNavigate()

  const handleNew = ()=>{
    navigate('/note')
  }

  

  return (
    <div>
      <Clock/>
      <Btn name={'Todo'} onClick={handleNew}/>
      <S.Circle1></S.Circle1>
      <S.Circle2></S.Circle2>
      <S.Circle3></S.Circle3>
    </div>
  )
}

export default Home