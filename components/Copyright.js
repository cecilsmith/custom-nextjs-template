import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

export default function Copyright() {
  return (
    <div style={{ paddingTop: '5%' }}>
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Dragontech, LLC
      </Link>
      {' '}
      {new Date().getFullYear()}.
    </Typography>
    </div>
  );
}
