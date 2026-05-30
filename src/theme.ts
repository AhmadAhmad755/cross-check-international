import { createTheme } from '@mui/material/styles';

/**
 * MUI theme mirrors CCI CSS variables.
 * Used for breakpoints (nav drawer) and CssBaseline — not for visual redesign.
 */
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: { main: '#08152B' },
    text: { primary: '#0B1526', secondary: '#4A5568' },
    divider: '#DDE5EF',
  },
  typography: {
    fontFamily: '"DM Sans", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: '"DM Sans", sans-serif',
          backgroundColor: '#FFFFFF',
          color: '#0B1526',
          lineHeight: 1.65,
        },
        a: {
          color: 'inherit',
        },
      },
    },
  },
});
