// Dependencies
import { createTheme } from '@mui/material';

// Configs
import breakpoints from './breakpoints';
import components from './components';
import palette from './palette';
import typography from './typography';
import shadows from './shadows';

// Create theme
const theme = createTheme({
  spacing: 1,
  breakpoints,
  components,
  palette,
  typography,
  shadows,
});

// Export theme
export default theme;
