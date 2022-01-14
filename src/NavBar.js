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
          window.open("/about", "_self")
        }}>
          About
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

        {/*<DropDownMenu
            value={this.state.selection}
            onChange={this.handleChange}
          >
            <MenuItem value={1} primaryText="English" />
            <MenuItem value={2} primaryText="Spanish" />
            <MenuItem value={3} primaryText="French" />
        </DropDownMenu>*/}

      </Toolbar>
    </AppBar>
  );
}
