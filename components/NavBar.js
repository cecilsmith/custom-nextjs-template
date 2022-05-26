import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { AppBar, Button, Toolbar } from '@mui/material';
import { ThemeContext } from '@emotion/react';
import theme from '../src/theme';
import { Box, display, positions } from '@mui/system';
import { Menu } from '@mui/material';
import { MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import Add from '@mui/icons-material/Add';
import WorkIcon from '@mui/icons-material/Work';

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <Box>
      <AppBar>
        <Toolbar>

        <Typography display='flex' variant="header" sx={{ flexGrow: 1 }} marginLeft='1%' component='h2' onClick={() => {
            window.open("/", "_self")}}>
            Dragontech
          </Typography>

          <IconButton display='flex' size='large' color='secondary' onClick={() => {
            window.open("/products", "_self")
          }}>
            <WorkIcon />
          </IconButton>

          <IconButton display='flex' size='large' color='secondary' onClick={() => {
            window.open("/about", "_self")
          }}>
            <InfoIcon />
          </IconButton>

          <IconButton display='flex' size='large' edge='end' color='secondary' onClick={() => {
            window.open("/", "_self")
          }}>
            <HomeIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
    </Box>
  );
}


/* Code for account menu
<IconButton
            size='large'
            edge="end"
            id="menu-button"
            aria-controls={open ? 'menu-button' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            color='secondary'
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id='menu-button'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'menu-button',
            }}>
            
            <MenuItem onClick={(handleClose) => { window.open("/user/signin", "_self") }}>
              Sign In
              <LoginIcon />
            </MenuItem>

            <MenuItem onClick={(handleClose) => { window.open("/user/signup", "_self") }}>
              Sign Up
              <Add />
            </MenuItem>
            
          </Menu> 
          */