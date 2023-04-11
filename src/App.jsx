import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import Header from './components/common/Header';
import theme from './styles/Theme';
import Router from './routes/routes';
import { GlobalStyled } from './styles/globlaStyle';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
