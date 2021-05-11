import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import GlobalStyle from './styles';
import './lang';

const App = () => {
  return (
    <ThemeProvider theme={GlobalStyle}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
