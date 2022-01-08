import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { AppBar, Button, Toolbar } from '@mui/material';
import { ThemeContext } from '@emotion/react';
import theme from './theme';
import { display, positions } from '@mui/system';

export default function NavBar() {
  return (
    <AppBar>
      <Toolbar>
        <Button variant='contained' color='secondary' onClick={() => {
          window.open("/", "_self")
        }}>
          DragonTech
        </Button>

        <Button variant='contained' color='secondary' onClick={() => {
          window.open("/signin", "_self")
        }}>
          Sign In
        </Button>
        <Button variant='contained' color='secondary' onClick={() => {
          window.open("/signup", "_self")
        }}>
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
}
