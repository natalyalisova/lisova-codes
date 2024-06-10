"use client"
import * as React from 'react';
import {useContext, useState} from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import {ThemeProvider, useTheme} from '@mui/material/styles';
import Image from "next/image";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuItem from '@mui/material/MenuItem';
import {Typography} from "@mui/material";
import Link from "next/link";
import {NavLinks} from "@/app/constants";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {ColorModeContext} from "@/app/components/ColorModeContext";
import {violetMain} from "@/theme";


function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="fixed">
                <Container maxWidth="xl">
                    <Toolbar disableGutters className="px-4">
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mx: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                textColor: violetMain.main,
                                textDecoration: 'none',
                            }}
                        >
                            Lisova Codes
                        </Typography>
                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon sx={{color: 'violet.main'}}/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {xs: 'block', md: 'none'},
                                }}
                            >
                                {NavLinks.map((page) => (
                                    <MenuItem key={page.key} onClick={handleCloseNavMenu}>
                                        <Link
                                            href={page.href}
                                            target={page.target}
                                            className="block hover:text-primary-color-pail mx-6"
                                            aria-current="page">
                                            {page.text}
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: {xs: 'flex', md: 'none'},
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'violet.main',
                                textDecoration: 'none',
                            }}
                        >
                            Lisova Codes
                        </Typography>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            {NavLinks.map((page) => (
                                <Button
                                    key={page.key}
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, display: 'block'}}
                                >
                                    <Link
                                        href={page.href}
                                        target={page.target}
                                        className="block hover:text-primary-color-pail mt-1"
                                        aria-current="page">
                                        {page.text}
                                    </Link>
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{flexGrow: 0, display: 'inline-flex'}}>

                            <span className="mr-2">
                                <IconButton sx={{ml: 1}} onClick={colorMode.toggleColorMode} color="inherit"
                                            className="ml-2">
                                 {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
                                 </IconButton>
                            </span>

                            <Tooltip title="GitHub" className="mr-2">
                                <Link href="https://github.com/natalyalisova" target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon/>
                                </Link>
                            </Tooltip>
                            <Tooltip title="LinkedIn" className="mr-2">
                                <Link href="https://www.linkedin.com/in/nlisova/" target="_blank"
                                      rel="noopener noreferrer">
                                    <LinkedInIcon/>
                                </Link>
                            </Tooltip>
                            <Tooltip title="Mastodon" className="mr-2">
                                <Link href="https://hachyderm.io/@Lisova" target="_blank" rel="me">
                                    <Image src={"/images/mastodon-icon.svg"}
                                           width={26}
                                           height={26}
                                           alt={"Follow me on mastodon"}/>
                                </Link>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}

export default ResponsiveAppBar;