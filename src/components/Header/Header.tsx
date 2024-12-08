import { AppBar, Box, Container, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import React from 'react'
import { Link } from 'react-router';
import { Paths } from '../../router/constants';

const Header: React.FC = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const linkStyles: React.CSSProperties = {
        textDecoration: 'none',
        color: "inherit",
        marginRight: 16
    }

    return (
        <AppBar position='static' sx={{ p: 1, mb: 2 }}>
            <Container maxWidth="xl" sx={{ display: 'flex', alignItems: "center" }}>
                <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
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
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >

                        <MenuItem onClick={handleCloseNavMenu}>
                            <Link to={Paths.products} style={linkStyles}><Typography>Products</Typography></Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Link to={Paths.index} style={linkStyles}><Typography>Cats</Typography></Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Link to={Paths.index} style={linkStyles}><Typography>About us</Typography></Link>
                        </MenuItem>

                    </Menu>
                </Box>

                <Box sx={{ display: "flex", justifyContent: { xs: "center" }, flexGrow: { xs: 1, sm: 0 } }}>
                    <Link to={Paths.index} style={{ display: "flex", ...linkStyles }}>
                        <AdbIcon sx={{ mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                    </Link>

                </Box>

                <Box sx={{ display: { xs: "none", sm: 'flex' }, flexGrow: 1 }}>
                    <Link to={Paths.products} style={linkStyles}><Typography>Products</Typography></Link>
                    <Link to={Paths.index} style={linkStyles}><Typography>Cats</Typography></Link>
                    <Link to={Paths.index} style={linkStyles}><Typography>About us</Typography></Link>
                </Box>
            </Container>

        </AppBar >
    )
}

export default Header