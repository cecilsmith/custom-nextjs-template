import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../components/Copyright';
import NavBar from '../components/NavBar';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper } from '@mui/material';
import Image from 'next/image';
import drone1 from './../public/imgs/dji-g60537929c_1920.jpg';


export default function About() {

  return (
    <Container component="main" maxWidth="md">
      <Box sx={{ my: 8 }}>
        <NavBar />

        <div>
          <Typography
            fontFamily='unset'
            variant="h4"
            component="h1"
            zIndex='2'
            justifyContent='center'
            alignItems='center'
            mb='1pc'
            alignSelf='center'>
            About Us
          </Typography>
          <Image src={drone1} />
        </div>

        <Paper elevation='8'>
          <Typography variant="body1" component="body" textAlign="center" paddingTop="15px" paddingBottom="15px" sx={{ fontWeight: '2' }}>
            Located in Minneapolis, MN and Huron, SD, Dragontech, LLC is dedicated to using the most advanced imaging technology to increase farm profitability and reduce environmental impacts.
          </Typography>

        </Paper>

        <br />

        <Paper elevation="8">
          <Typography variant='header1' component="h2" textAlign='left' paddingTop='1%' paddingLeft='1%'>
            Our Staff:
          </Typography>
          <List sx={{ width: '100%', maxWidth: 360 }}>
            <ListItem alignItems='flex-start' onClick={() => {
              window.location = '#'
            }}>
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
              window.open('https://github.com/cecilsmith', "_blank");
            }}>
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
