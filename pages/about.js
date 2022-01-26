import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../components/Copyright';
import NavBar from '../components/NavBar';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper } from '@mui/material';
import Image from 'material-ui-image';


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
          <video width="100%" height="100%" autoPlay loop muted poster="https://dji-official-fe.djicdn.com/dps/a7b1548e7acd6939e08a4565e7ad023b.jpg">
            <source src="https://us-cms-videos.dji.net/video_trans/19f110d664334638b645108c2545fdd6/720.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <Paper elevation='8'>
          <Typography variant="body1" component="body" textAlign="center" paddingTop="15px" paddingBottom="15px" sx={{ fontWeight: '2' }}>
            Located in Minneapolis, MN and Huron, SD, Dragontech, LLC is dedicated to using the most advanced imaging technology to increase farm profitability and reduce environmental impacts.
          </Typography>
          <Image src={"https://enterprise-insights.dji.com/hs-fs/hubfs/Blog%20Images/Use%20of%20Drones%20in%20Agriculture%20Today/T10%20Spraying.png?width=1680&name=T10%20Spraying.png"} aspectRatio="1.865"></Image>

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
              window.location = 'https://github.com/cecilsmith'
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
