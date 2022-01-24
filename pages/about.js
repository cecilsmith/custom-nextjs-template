import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../src/Copyright';
import NavBar from '../src/NavBar';
import { Avatar, Divider, Link, List, ListItem, ListItemAvatar, ListItemText, Paper, Toolbar } from '@mui/material';
import Image from 'material-ui-image';
import { Translate } from '@mui/icons-material';

export default function About() {
  return (
    <Container component="main" maxWidth="md">
      <Box sx={{ my: 8 }}>
        <NavBar />
        <Typography fontFamily='unset' variant="h4" component="h1" gutterBottom>
          About Us
        </Typography>

        <Paper elevation='8'>
        <Image src={"https://www4.djicdn.com/cms_uploads/video/image/4977/cover_770x462_dd4c7a01fae2fa82e40be2d50330e72f.jpg"} aspectRatio="1.6667"></Image>

        <Typography variant="body1" component="body" textAlign="center" paddingTop="15px" paddingBottom="15px" sx={{ fontWeight: '2'}}>
        Located in Minneapolis, MN and Huron, SD, Dragontech, LLC is dedicated to using the most advanced imaging technology to increase farm profitability and reduce environmental impacts.
        </Typography>
        </Paper>

        <br />

        <Paper elevation="8">
          <Typography variant='header1' component="h2" textAlign='left' paddingTop='1%' paddingLeft='1%'>
            Our Staff:
          </Typography>
          <List sx={{width: '100%', maxWidth: 360}}>
            <ListItem alignItems='flex-start' onClick={() => {
              window.location='#' }}>
              <ListItemAvatar>
                <Avatar src="https://avatars.githubusercontent.com/u/5871913?v=4"
                sx={{
                  width: 56,
                  height: 56,
                  left: "-15%",
                }} />
              </ListItemAvatar>
              <ListItemText 
                primary="Mel Wieting"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.secondary">
                        Founder
                      </Typography>
                  </React.Fragment>
                }>
                </ListItemText>
            </ListItem>
            
            <Divider variant='inset' component='li' />

            <ListItem alignItems='flex-start' onClick={() => {
              window.location='https://github.com/cecilsmith' }}>
              <ListItemAvatar>
                <Avatar 
                  src="https://avatars.githubusercontent.com/u/19243227?v=4"
                  sx={{
                    width: 56,
                    height: 56,
                    left: "-15%",
                  }} />
              </ListItemAvatar>
              <ListItemText
                primary="Nathanael Smith"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{
                        display: 'inline'
                      }}
                      component="span"
                      variant='body2'
                      color="text.secondary"
                    >
                      Intern, Lead Design
                    </Typography>
                  </React.Fragment>
                }
                >

              </ListItemText>
              {/*</Link>*/}
            </ListItem>
          </List>
        </Paper>

        <br />
        <Copyright />
      </Box>
    </Container>
  );
}
