import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { AppBar, Button, Toolbar } from '@mui/material';
import { ThemeContext } from '@emotion/react';
import theme from './theme';
import { Box, display, positions } from '@mui/system';
import { Menu } from '@mui/material';
import { MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import Add from '@mui/icons-material/Add';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export function NavBarMode() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box>
    <AppBar>
      <Toolbar>

        <IconButton display='flex' size='large' edge='start' color='secondary' onClick={() => {
          window.open("/", "_self")
        }}>
          <HomeIcon />
        </IconButton>

        <IconButton display='flex' size='large' color='secondary' onClick={() => {
          window.open("/about", "_self")
        }}>
          <InfoIcon />
        </IconButton>

        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>

        <Typography display='flex' variant="header" sx={{ flexGrow: 1 }} marginLeft='1%' component='h2'>
          Dragontech
        </Typography>

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
            <MenuItem onClick={(handleClose) => {window.open("/signin", "_self")}}>Sign In<LoginIcon /></MenuItem>
            <MenuItem onClick={(handleClose) => {window.open("/signup", "_self")}}>Sign Up<Add /></MenuItem>
          </Menu>

      </Toolbar>
    </AppBar>
    </Box>
  );
}

export default function ToggleColorMode() {
    const [mode, setMode] = React.useState('light');
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );
  
    const theme = React.useMemo(
      () =>
        createTheme ({
            palette: {
                mode: mode,
                common: {
                    black: '#212121',
                    white: '#FAF8EB',
                },
                primary: {
                    main: '#939598',
                    light: '#FAF8EB',
                    dark: '#212121',
                    //contrastText: '',
                },
                secondary: {
                    main: '#FAD41B',
                    //light: '',
                    //dark: '',
                    //contrastText '',
                },
            },
        }),
      [mode],
    );
  
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <NavBarMode />
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }
