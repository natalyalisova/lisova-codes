import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";
import ResponsiveAppBar from "@/app/components/NavBar";
import theme from '../theme';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';
import {ThemeProvider} from '@mui/material/styles';

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Lisova Codes",
    description: "Personal blog",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
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
            <ThemeProvider theme={theme}>
                <ResponsiveAppBar/>
                <main className="flex-grow">{children}</main>
                <Footer/>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
