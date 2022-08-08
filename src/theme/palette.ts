// Colors
export const black = '#000000';
export const white = '#FFFFFF';
export const lightCyan = '#eff4f8';
export const cyan = '#d7e1eb';
export const darkCyan = '#a3b2c5';
export const lightIndigo = '#697990';
export const darkIndigo = '#172844';
export const whiteIndigo = '#F9FBFC';
export const red = '#EA514D';
export const lightBlue = '#b5c7e7';
export const lightGreen = '#bbdcd0';

// Define palette
const palette = {
  common: {
    black,
    white,
  },
  primary: {
    main: darkIndigo,
    contrastText: white,
  },
  secondary: {
    main: lightCyan,
    contrastText: darkIndigo,
  },
  info: {
    main: lightBlue,
  },
  success: {
    main: lightGreen,
  },
  error: {
    main: red,
  },
  text: {
    primary: darkIndigo,
    secondary: lightIndigo,
  },
  lightCyan,
  cyan,
  darkCyan,
  darkIndigo,
  lightIndigo,
  whiteIndigo,
  lightBlue,
  lightGreen,
};

// Export palette
export default palette;
