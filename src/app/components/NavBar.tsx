"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuItem from '@mui/material/MenuItem';
import {Typography} from "@mui/material";
import theme from '../../theme';
import {ThemeProvider,} from '@mui/material/styles';
import {Box} from '@mui/system';
import Link from "next/link";
import {NavLinks} from "@/app/constants";

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="fixed" className="bg-gray-950">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'violet.main',
                                textDecoration: 'none',
                            }}
                        >
                            Lisova Codes
                        </Typography>
                        <Box sx={{color: 'violet.main', flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
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
                                            className="block text-primary-color hover:text-primary-color-pail mr-4"
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
                                    sx={{my: 2, color: '#7D23DC', display: 'block'}}
                                >
                                    <Link
                                        href={page.href}
                                        target={page.target}
                                        className="block text-primary-color hover:text-primary-color-pail mt-1"
                                        aria-current="page">
                                        {page.text}
                                    </Link>
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{flexGrow: 0}}>
                            <Tooltip title="GitHub">
                                <Link href="https://github.com/natalyalisova" target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon sx={{color: 'violet.main', mr: 2}}/>
                                </Link>
                            </Tooltip>
                            <Tooltip title="LinkedIn">
                                <Link href="https://www.linkedin.com/in/nlisova/" target="_blank"
                                      rel="noopener noreferrer">
                                    <LinkedInIcon sx={{color: 'violet.main'}}/>
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