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
import Popover from '@mui/material/Popover';

export default function NavBar() {
  // setup for account menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }

  // setup for products popup text under the nav buttons
  const [popoverProductsAnchorEl, setpopoverProductsAnchorEl] = React.useState(null);
  const handlePopoverProductsOpen = (event) => {
    setpopoverProductsAnchorEl(event.currentTarget);
  };
  const handlePopoverProductsClose = () => {
    setpopoverProductsAnchorEl(null);
  }
  const popoverProductsOpen = Boolean(popoverProductsAnchorEl);


  // setup for about popup text under the nav buttons
  const [popoverAboutAnchorEl, setpopoverAboutAnchorEl] = React.useState(null);
  const handlePopoverAboutOpen = (event) => {
    setpopoverAboutAnchorEl(event.currentTarget);
  };
  const handlePopoverAboutClose = () => {
    setpopoverAboutAnchorEl(null);
  }
  const popoverAboutOpen = Boolean(popoverAboutAnchorEl);


  // setup for home popup text under the nav buttons
  const [popoverHomeAnchorEl, setpopoverHomeAnchorEl] = React.useState(null);
  const handlePopoverHomeOpen = (event) => {
    setpopoverHomeAnchorEl(event.currentTarget);
  };
  const handlePopoverHomeClose = () => {
    setpopoverHomeAnchorEl(null);
  }
  const popoverHomeOpen = Boolean(popoverHomeAnchorEl);


  return (
    <Box>
      <AppBar>
        <Toolbar>

          <Typography
            display='flex' variant="header" sx={{ flexGrow: 1 }} marginLeft='1%' component='h2' onClick={() => {
              window.open("/", "_self")
            }
            }>
            Dragontech
          </Typography>


          <IconButton 
            aria-owns={popoverProductsOpen ? 'mouse-over-products' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverProductsOpen}
            onMouseLeave={handlePopoverProductsClose}
            display='flex' size='large' color='secondary' onClick={() => {
            window.open("/products", "_self")
          }}>
            <WorkIcon />
          </IconButton>
          <Popover id='mouse-over-products' sx={{pointerEvents: 'none',}} open={popoverProductsOpen} anchorEl={popoverProductsAnchorEl} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} transformOrigin={{vertical: 'top', horizontal: 'center',}} onClose={handlePopoverProductsClose} disableRestoreFocus>
            <Typography variant='body2'>
              Products
            </Typography>
          </Popover>

          <IconButton 
            aria-owns={popoverAboutOpen ? 'mouse-over-about' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverAboutOpen}
            onMouseLeave={handlePopoverAboutClose}
            display='flex' size='large' color='secondary' onClick={() => {
            window.open("/about", "_self")
          }}>
            <InfoIcon />
          </IconButton>
          <Popover id='mouse-over-about' sx={{pointerEvents: 'none',}} open={popoverAboutOpen} anchorEl={popoverAboutAnchorEl} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} transformOrigin={{vertical: 'top', horizontal: 'center',}} onClose={handlePopoverAboutClose} disableRestoreFocus>
            <Typography variant='body2'>
              About
            </Typography>
          </Popover>

          <IconButton 
            aria-owns={popoverHomeOpen ? 'mouse-over-home' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverHomeOpen}
            onMouseLeave={handlePopoverHomeClose}
            display='flex' size='large' edge='end' color='secondary' onClick={() => {
            window.open("/", "_self")
          }}>
            <HomeIcon />
          </IconButton>
          <Popover id='mouse-over-home' sx={{pointerEvents: 'none',}} open={popoverHomeOpen} anchorEl={popoverHomeAnchorEl} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} transformOrigin={{vertical: 'top', horizontal: 'center',}} onClose={handlePopoverHomeClose} disableRestoreFocus>
            <Typography variant='body2'>
              Home
            </Typography>
          </Popover>

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