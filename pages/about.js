import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import NavBar from '../src/NavBar';
import { Avatar, Toolbar } from '@mui/material';
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar facilisis metus, vitae ultrices leo consequat in. In hac habitasse platea dictumst. Etiam venenatis orci id quam cursus condimentum. Etiam ac suscipit diam, ac bibendum nunc. Maecenas eu turpis ex. Vivamus consectetur in ante sodales ultrices. In elementum, sem id viverra scelerisque, purus nulla laoreet magna, at hendrerit urna sapien a justo. Vivamus a ligula ornare, auctor elit eu, ultricies ante. Sed condimentum egestas tincidunt. Mauris sed lorem vitae dui sagittis porta nec sit amet tellus. Mauris sit amet elementum augue, sed mollis diam. Fusce congue ante et tincidunt porta.
        </Typography>

        {/*<Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page
  </Button>*/}
        <Image src={"https://www4.djicdn.com/cms_uploads/video/image/4977/cover_770x462_dd4c7a01fae2fa82e40be2d50330e72f.jpg"} aspectRatio="1.6667" imageStyle={{height: "50%"}} style={{position: "absolute", width: '25%', height: '15%'}} ></Image>
        
        {/*potentially use/include avatar*/}

        <Copyright />
      </Box>
    </Container>
  );
}
