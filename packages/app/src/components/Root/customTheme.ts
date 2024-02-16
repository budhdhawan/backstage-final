// customTheme.ts
import { createTheme, lightTheme, genPageTheme, shapes } from '@backstage/theme';

// Create a new theme based on the default light theme
const myTheme = createTheme({
  palette: {
    ...lightTheme.palette,
    primary: {
      main: '#3498db', // Change the primary color
    },
    secondary: {
      main: '#2ecc71', // Change the secondary color
    },
    background: {
      default: '#ecf0f1', // Change the default background color
      paper: '#ecf0f1', // Change the paper background color
    },
    // Add or customize other colors as needed
  },
  fontFamily: 'Arial, sans-serif', // Change the font family
  defaultPageTheme: 'home', // Set a default page theme

  // Customize page themesa
  pageTheme: {
    home: genPageTheme({ colors: ['#3498db', '#ecf0f1'], shape: shapes.wave }),
    documentation: genPageTheme({
      colors: ['#3498db', '#ecf0f1'],
      shape: shapes.wave2,
    }),
    // Add or customize themes for other pages as needed
  },
});

export default myTheme;
