'use client';
import {Roboto} from 'next/font/google';
import {PaletteMode} from "@mui/material";
import {amber, deepPurple, grey} from "@mui/material/colors";


const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});


const violetBase = '#974FE3';
export const violetMain = {main: '#7D23DC'};
export const complementaryColor = {main: '#82DC23'};
const complementaryColorPail = '#9BE34F';
const additionalColor = '#FFAD00';

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: deepPurple,
                divider: deepPurple[50],
                background: {
                    default:  '#fff',
                    paper: '#fff',
                },
                text: {
                    primary: deepPurple[900],
                    secondary: '#82DC23',
                },
            }
            : {
                primary: grey,
                divider: grey[700],
                background: {
                    default: grey[900],
                    paper: grey[900],
                },
                text: {
                    primary: '#fff',
                    secondary: '#82DC23',
                },
            }),
    },
});


