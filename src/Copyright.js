import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
  return (
    <>
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="/">
        Dragontech, LLC
      </MuiLink>
      {' '}
      {new Date().getFullYear()}.
    </Typography>
    <Typography variant="body2" color="text.secondary" align='center'>
        {'All Drone Images Property of '}
        <MuiLink color="inherit" href="https://www.dji.com/">
          DJI
        </MuiLink>
        {'.'}
    </Typography>
    </>
  );
}
