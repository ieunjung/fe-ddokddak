import { createTheme } from '@mui/material/styles';
import type {} from '@mui/x-date-pickers/themeAugmentation';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FF8999',
      light: '#e3f2fd',
      dark: '#1e88e5',
    },
    secondary: {
      main: '#673ab7',
      light: '#ede7f6',
      dark: '#5e35b1',
    },
    success: {
      main: '#00e676',
      light: '#b9f6ca',
      dark: '#00c853',
    },
    error: {
      main: '#f44336',
      light: '#ef9a9a',
      dark: '#c62828',
    },
    warning: {
      main: '#ffe57f',
      light: '#fff8e1',
      dark: '#ffc107',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#95989a',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },
  components: {
    MuiDatePicker: {
      styleOverrides: {
        root: {
          backgroundColor: 'red',
        },
      },
    },
  },
});
