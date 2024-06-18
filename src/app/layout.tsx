'use client'
import "./globals.css";
import Footer from "@/app/components/Footer";
import ResponsiveAppBar from "@/app/components/NavBar";
import {CssBaseline} from "@mui/material";
import {ReactNode} from "react";
import {ThemeProvider} from "next-themes";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
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
        <body className={`roboto.className dark:bg-black`}>
        <ThemeProvider enableSystem={true} attribute="class">
            <CssBaseline/>
            <div className="flex flex-col min-h-screen">
                <ResponsiveAppBar/>
                <main className="flex-grow flex">{children}</main>
                <Footer/>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
