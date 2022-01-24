import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../src/Copyright';
import NavBar from '../src/NavBar';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper, Toolbar } from '@mui/material';
import Image from 'material-ui-image';
import { Translate } from '@mui/icons-material';

export default function About() {
  return (
    <Container maxWidth="md">
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

        <Paper elevation="4">
          <Typography variant='header1' component="h2" textAlign='left' paddingTop='1%' paddingLeft='1%'>
            Our Staff:
          </Typography>
          <List sx={{width: '100%', maxWidth: 360}}>
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar src="https://www4.djicdn.com/cms_uploads/video/image/4977/cover_770x462_dd4c7a01fae2fa82e40be2d50330e72f.jpg"
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

            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar 
                  src="https://www4.djicdn.com/cms_uploads/video/image/4977/cover_770x462_dd4c7a01fae2fa82e40be2d50330e72f.jpg"
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
            </ListItem>
          </List>
        </Paper>

        <Copyright />
      </Box>
    </Container>
  );
}
