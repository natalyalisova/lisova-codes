'use client';
import {Roboto} from 'next/font/google';
import {alpha, createTheme} from '@mui/material/styles';
import {PaletteMode} from "@mui/material";
import {amber, deepOrange, grey} from "@mui/material/colors";


const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});


// Augment the palette to include a violet color
declare module '@mui/material/styles' {
    interface Palette {
        violet: Palette['primary'];
    }

    interface PaletteOptions {
        violet?: PaletteOptions['primary'];
    }
}

// Update the Button's color options to include a violet option
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        violet: true;
    }
}

const violetBase = '#974FE3';
const violetMain = '#7D23DC';
const complementaryColor = '#82DC23';
const complementaryColorPail = '#9BE34F';
const additionalColor = '#FFAD00';

const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    palette: {
        violet: {
            main: violetMain,
            light: violetBase,
            dark: alpha(violetBase, 0.9),
            contrastText: complementaryColor,
        },
    },
});

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: amber,
                divider: amber[200],
                text: {
                    primary: grey[900],
                    secondary: grey[800],
                },
            }
            : {
                // palette values for dark mode
                primary: deepOrange,
                divider: deepOrange[700],
                background: {
                    default: deepOrange[900],
                    paper: deepOrange[900],
                },
                text: {
                    primary: '#fff',
                    secondary: grey[500],
                },
            }),
    },
});



export default theme;
