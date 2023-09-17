import React from 'react';
import theme from './theme';
import './App.css';

import { ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import LoginPage from './Features/Login/login';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid className="App">
        <LoginPage />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
