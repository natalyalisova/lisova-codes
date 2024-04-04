import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
        <meta property="description" content="I'm Natali, a Frontend developer with a master's degree in math. I started my way as a UI/UX designer but along the way fell in love with developing. "/>
        <link rel="icon" href="/src/app/favicon.ico" sizes="any"/>
        <title>Run For Ukraine</title>
      </head>
      <body className={inter.className}>{children}</body>
      </html>
  );
}
