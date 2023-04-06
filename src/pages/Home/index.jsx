import React from 'react'
import Clock from '../../components/Clock'
import * as S from './style'
function Home() {

  return (
    <div>
      <Clock/>
      <S.Circle1></S.Circle1>
      <S.Circle2></S.Circle2>
      <S.Circle3></S.Circle3>
    </div>
  )
}

export default Home