import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import NavBar from '../src/NavBar';
import { AppBar, Toolbar } from '@mui/material';
import Image from 'material-ui-image';
import SwipeableTextMobileStepper from '../src/SwipeableTextMobileStepper.js';

export default function Index() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <NavBar />
        <Toolbar />

        <Typography variant="h4" component="h1" gutterBottom>
          DragonTech
        </Typography>

        <SwipeableTextMobileStepper />

        <Link href="/about" color="secondary">
          Go to the about page
        </Link>

        <ProTip />

        <Image src={"https://www4.djicdn.com/cms_uploads/video/image/4977/cover_770x462_dd4c7a01fae2fa82e40be2d50330e72f.jpg"} aspectRatio="1.6667"></Image>

        <Copyright />
      </Box>
    </Container>
  );
}
