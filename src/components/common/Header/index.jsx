import React, { useEffect, useState } from 'react'
import Back from './BackBtn'
import * as S from './style'
import { useLocation } from 'react-router-dom'
import Setting from './Setting'

const title = {
  '/' : 'Home',
  '/note' : 'Note',
  '/newNote' : 'New Note',
  '/setting' : 'Setting'
}

function Header() {
  const [titleName, setTitleName] = useState()
  const location = useLocation()

  useEffect(()=>{
    setTitleName(title[location.pathname])
  },[location.pathname])

  return (
    <S.Header>
      <Back/>
      <S.Title>
        {titleName}
      </S.Title>
      <Setting />
    </S.Header>
  )
}

export default Header