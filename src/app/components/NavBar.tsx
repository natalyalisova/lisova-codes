"use client"
import * as React from 'react';
import {useEffect, useState} from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import {useTheme} from 'next-themes';
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


function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const {systemTheme, theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <AppBar position="fixed" className="bg-white dark:bg-black">
            <Container maxWidth="xl" className="mx-auto">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            ml: 12,
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            textDecoration: 'none',
                        }}
                        className="text-primary-color"
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
                            <MenuIcon className="text-primary-color"/>
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
                                        className="block text-primary-color hover:text-primary-color-pail mx-6"
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
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontSize: 20,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            textDecoration: 'none',
                        }}
                        className="text-primary-color"
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
                                    className="block text-primary-color hover:text-primary-color-pail mt-1 dark:bg-black"
                                    aria-current="page">
                                    {page.text}
                                </Link>
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{flexGrow: 0, display: 'inline-flex'}}>
                        <div className="flex justify-center mr-1">
                            {currentTheme === 'dark' ? (
                                <button
                                    onClick={() => setTheme('light')}
                                >
                                    <Image src="/images/sun.svg" alt="logo" height={26} width={26}/>
                                </button>
                            ) : (
                                <button
                                    onClick={() => setTheme('dark')}
                                >
                                    <Image src="/images/moon.svg" alt="logo" height={26} width={26}/>
                                </button>
                            )}
                        </div>

                        <Tooltip title="GitHub" className="mr-1">
                            <Link href="https://github.com/natalyalisova" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon className="text-primary-color"/>
                            </Link>
                        </Tooltip>
                        <Tooltip title="LinkedIn" className="mr-1">
                            <Link href="https://www.linkedin.com/in/nlisova/" target="_blank"
                                  rel="noopener noreferrer">
                                <LinkedInIcon className="text-primary-color"/>
                            </Link>
                        </Tooltip>
                        <Tooltip title="Mastodon">
                            <Link href="https://hachyderm.io/@Lisova" target="_blank" rel="me">
                                <Image src={"/images/mastodon-icon.svg"}
                                       width={26}
                                       height={26}
                                       priority={false}
                                       alt={"Follow me on mastodon"}/>
                            </Link>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;