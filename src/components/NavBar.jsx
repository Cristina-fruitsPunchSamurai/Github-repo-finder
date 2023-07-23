
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function NavBar() {
    const navItems = ['Home', 'FAQ'];

        return (
        <Box sx={{ display: 'flex' }}>
        <AppBar component="nav">
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
            <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
                GitHub Project
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <a href='/'>
                    <Button  sx={{ color: '#fff' }}>
                        Home
                    </Button>
                </a>
                <a href='/faq'>
                    <Button sx={{ color: '#fff' }}>
                        FAQ
                    </Button>
                </a>
            </Box>
            </Toolbar>
        </AppBar>
        </Box>
        )
    }

export default NavBar;