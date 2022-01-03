import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { AppBar, Button, Toolbar } from '@mui/material';
import { ThemeContext } from '@emotion/react';

export default function NavBar() {
  return (
    <AppBar>
      <Toolbar>
        <Typography href="/" variant='body1' color='text.primary'>
          DragonTech
        </Typography>
        <Typography variant="body2" color="text.primary" marginRight="2%">
          <Button>
            <MuiLink color="text.primary" href="/signin">
              Sign In
            </MuiLink>
          </Button>
          <Button>
            <MuiLink color="text.primary" href="/signup">
              Sign Up
            </MuiLink>
          </Button>
        </Typography>
      </Toolbar>
    </AppBar>

  );
}
