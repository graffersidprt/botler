import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff4400',
    },
    secondary: {
      main: '#051C2E',
    },
    error: {
      main: '#ff0000',
    },
    background: {
      default: '#333', // some dark color
    }
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#06AED4',
    },
    secondary: {
      main: '#051C2E',
    },
    error: {
      main: '#ff0000',
    },
    background: {
      default: '#fff', // some light color
    },
  },
});