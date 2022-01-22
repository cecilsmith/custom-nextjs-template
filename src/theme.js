import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        mode: "light",
        common: {
            black: '#212121',
            white: '#FAF8EB',
        },
        primary: {
            main: '#939598',
            light: '#FAF8EB',
            dark: '#212121',
            //contrastText: '',
        },
        secondary: {
            main: '#FAD41B',
            //light: '',
            //dark: '',
            //contrastText '',
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;