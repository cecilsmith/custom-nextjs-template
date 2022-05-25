import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../components/Copyright';
import NavBar from '../components/NavBar';
import { Paper, Toolbar } from '@mui/material';
import Image from 'material-ui-image';
import drone2 from './../public/imgs/dji-gb061d63d7_1920.jpg';

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 8 }}>
        <NavBar />

        <Typography variant="body1" component="body" textAlign="center" p="15px">
          As the world's population increases and consumers' demand for environmentally responsible and organic agriculture increases, the need for utilizing technology to improve the efficiency of agricultural production is urgent.
        </Typography>

        <br />

        <Paper elevation='8'>
          <Typography variant='h6' component='h6' textAlign="center" p='15px'>
            Why should you use Dragontech?
          </Typography>
          <Image src={"https://www1.djicdn.com/cms/uploads/b1c5dd224915f796f79acc24c5b1b08e@770*462.png"} aspectRatio="1.666"></Image>

          <Typography variant='body1' component='body' textAlign="center" pt="15px" pb="15px" p='2%'>
            Dragontech uses high resolution imaging to provide insights and solutions in the Agriculture sector.  We are focusing on crop and asset management through Uutilizing radiometric thermal, multispectral, hyperspectral and lidar imaging.  With advancements in drone capabilities, long range low power data transmission, and imaging systems, the potential to provide value in the Ag sector is significant.
          </Typography>
        </Paper>

        <br />

        <Paper elevation="12">
          <Image src='https://dji-official-fe.djicdn.com/dps/539ea2ee06d9abc7464baacb8c275bad.jpg' aspectRatio="3.2" />
        </Paper>

        <br />

        <Copyright />
      </Box>
    </Container>
  );
}
