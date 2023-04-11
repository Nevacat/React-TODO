import React, { useEffect } from 'react';
import * as S from './style'
import { useLocation } from 'react-router-dom';
function Btn({name, onClick}) {

  return <S.Btn onClick={onClick} name={name}>{name}</S.Btn>;
}

export default Btn;
