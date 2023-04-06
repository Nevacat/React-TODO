import React from 'react';
import { BsFillNutFill } from 'react-icons/bs';
import * as S from './style'
import { useLocation } from 'react-router-dom';

function Setting() {
  return (
    <S.Setting hide={location.pathname===('/newNote'||'/setting')}>
      <BsFillNutFill />
    </S.Setting>
  );
}

export default Setting;
