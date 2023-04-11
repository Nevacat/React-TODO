import moment from 'moment/moment'
import React, { useContext, useEffect, useState } from 'react'
import * as S from './style'
function Clock() {
  const [hour, setHour] = useState(moment().format('HH')) 
  const [min, setMin] = useState(moment().format('mm'))  

  useEffect(()=>{
    setHour(moment().format('HH'))
    setInterval(()=>{setMin(moment().format('mm'))},1000)
  },[min])

  return (
    <S.Clock>
      <S.Hour>
        {hour}
      </S.Hour>
      <S.Min>
        {min}
      </S.Min>
    </S.Clock>
  )
}

export default Clock