import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

export default function Copyright() {
  return (
    <>
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Dragontech, LLC
      </Link>
      {' '}
      {new Date().getFullYear()}.
    </Typography>
    <Typography variant="body2" color="text.secondary" align='center'>
        {'All Drone Images Property of '}
        <Link target="_blank" rel="noopener" color="inherit" href="https://www.dji.com/">
          DJI
        </Link>
        {'.'}
    </Typography>
    </>
  );
}
