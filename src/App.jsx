import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import Header from './components/common/Header';
import theme from './styles/Theme';
import Router from './routes/routes';
import { GlobalStyled } from './styles/globlaStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Router />
    </ThemeProvider>
  );
}

export default App;
