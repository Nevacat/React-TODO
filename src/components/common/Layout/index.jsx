import React from 'react';
import * as S from './style';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

function Layout() {
  return (
    <S.Layout>
      <Header/>
      <Outlet />
    </S.Layout>
  );
}

export default Layout;
