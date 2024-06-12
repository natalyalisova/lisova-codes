'use client'
import {Roboto} from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";
import ResponsiveAppBar from "@/app/components/NavBar";
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from "@mui/material";
import {ReactNode, useMemo, useState} from "react";
import {ColorModeContext} from "@/app/components/ColorModeContext";
import {getDesignTokens} from "@/theme";

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {

    const darkModeTheme = useMemo(() => createTheme(getDesignTokens('dark')), []);
    const lightModeTheme = useMemo(() => createTheme(getDesignTokens('light')), []);

    const getStoredTheme = () => {

        let itemInStorage;
        try {
            itemInStorage = localStorage.getItem("theme-mode") || "dark";
        } catch (error) {
            console.error("Error retrieving theme-mode from localStorage:", error);
        }

        if (itemInStorage && ["light", "dark"].includes(itemInStorage)) return itemInStorage as "light" | "dark";
        return 'dark';
    }

    const savedMode = getStoredTheme();
    const [mode, setMode] = useState<'light' | 'dark'>(savedMode);

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    const newMode = prevMode === 'light' ? 'dark' : 'light';
                    // Save the new mode in localStorage
                    if (typeof window !== 'undefined') {
                        localStorage.setItem('theme-mode', newMode);
                    }
                    return newMode;
                });
            },
        }),
        [],
    );


    const theme = useMemo(
        () => (mode === 'dark' ? darkModeTheme : lightModeTheme),
        [mode, darkModeTheme, lightModeTheme]
    );

    return (
        <html lang="en">
        <head>
            <meta property="og:site_name" content="Lisova Codes"/>
            <meta property="og:url" content="https://lisova.codes/"/>
            <meta property="title" content="Nataliia Liosva"/>
            <meta property="og:title" content="Nataliia Lisova"/>
            <meta property="content" content="Perdsonal blog"/>
            <meta property="og:content" content="Personal blog"/>
            <meta property="description"
                  content="I'm Natali, a Frontend developer with a master's degree in math. I started my way as a UI/UX designer but along the way fell in love with developing. "/>
            <link rel="icon" href="/src/app/favicon.ico" sizes="any"/>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />

            <title>Lisova Codes</title>
        </head>
        <body className={roboto.className}>
        <AppRouterCacheProvider options={{enableCssLayer: true}}>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <ResponsiveAppBar/>
                    <main className="flex-grow">{children}</main>
                    <Footer/>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
