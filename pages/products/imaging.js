import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../../components/Copyright';
import NavBar from '../../components/NavBar';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper } from '@mui/material';
import Image from 'next/image';
import drone1 from './../../public/imgs/dji-gb061d63d7_1920.jpg';
import drone2 from '../../public/imgs/dji-gf782f5ab5_1920.jpg';


export default function Imaging() {

  return (
    <Container component="main" maxWidth="md">
      <Box sx={{ my: 8 }}>
        <NavBar />

          <Typography
            fontFamily='unset'
            variant="h4"
            component="h1"
            zIndex='2'
            justifyContent='center'
            alignItems='center'
            mb='1pc'
            alignSelf='center'>
            Imaging Solutions
          </Typography>
          <Image src={drone1} />

        <Paper elevation='8'>
          <Typography variant="body1" component="body" textAlign="center" paddingTop="15px" paddingBottom="15px" sx={{ fontWeight: '2' }}>
          Dragontech solutions employ multispectral imaging to accurately monitor plant health and growth. The imaging technology that we are developing will allow farmers to accurately count and monitor crops. With these innovations, farmers will be able to identify where nutrients and water are needed—greatly improving the efficiency of the farms. 
          </Typography>
        </Paper>

        <Image src={drone2} />

        <Paper elevation='8'>
            <Typography variant='body1' component="body" textAlign="center" paddingTop="15px" paddingBottom="15px" sx={{ fontWeight: '2' }}>
            Our LiDAR solutions will give the farmers accurate measurements of plant growth along with readings of possible irrigation paths. Using LiDAR allows the data collected from the multispectral cameras to be analyzed in a 3D environment. 
            </Typography>
        </Paper>

        <Copyright />
      </Box>
    </Container>
  );
}
