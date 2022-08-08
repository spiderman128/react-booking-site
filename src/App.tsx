// Dependencies
import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';

// Theme
import theme from './theme';

// Styles
import './App.css';
import '../node_modules/react-grid-layout/css/styles.css';

// Create app
const App: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  </ThemeProvider>
);

// Export app
export default App;
