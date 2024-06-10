'use client'
import {ThemeProvider, useTheme} from "@mui/material/styles";

const Footer = () => {
    const theme = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <div className="flex flex-row align-baseline items-center px-24 pb-16 text-sm">
                <div>2024 &#169; By Nataliia Lisova</div>
            </div>
        </ThemeProvider>
    )
}
export default Footer;