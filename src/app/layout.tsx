'use client'
import {Inter} from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";
import ResponsiveAppBar from "@/app/components/NavBar";
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from "@mui/material";
import {ReactNode, useMemo, useState} from "react";
import {ColorModeContext} from "@/app/components/ColorModeContext";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {

    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
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
        <body className={inter.className}>
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
