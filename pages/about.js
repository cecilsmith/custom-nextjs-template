import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import NavBar from '../src/NavBar';
import { Avatar, Paper, Toolbar } from '@mui/material';
import Image from 'material-ui-image';

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <NavBar />
        <Toolbar />
        <Typography variant="h4" component="h1" gutterBottom>
          About Us
        </Typography>

        <Image src={"https://www4.djicdn.com/cms_uploads/video/image/4977/cover_770x462_dd4c7a01fae2fa82e40be2d50330e72f.jpg"} aspectRatio="1.6667"></Image>

        <Typography variant="body1" component="body" textAlign="center" paddingTop="15px" paddingBottom="15px">
        Located in Minneapolis, MN and Huron, SD, Dragontech, LLC is dedicated to using the most advanced imaging technology to increase farm profitability and reduce environmental impacts.
        </Typography>

        {/*<Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page
  </Button>*/}
        <Paper elevation="4" square maxWidth="50%">
          <Avatar src="https://www4.djicdn.com/cms_uploads/video/image/4977/cover_770x462_dd4c7a01fae2fa82e40be2d50330e72f.jpg" />
          {/*<Image src={"https://www4.djicdn.com/cms_uploads/video/image/4977/cover_770x462_dd4c7a01fae2fa82e40be2d50330e72f.jpg"} aspectRatio="1.6667" style={{display: "flex", width: '25%', height: '5%'}} ></Image> */}
        </Paper>
        
        {/*potentially use/include avatar*/}

        <Copyright />
      </Box>
    </Container>
  );
}
