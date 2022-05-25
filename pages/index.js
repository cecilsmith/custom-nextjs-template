import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../components/Copyright';
import NavBar from '../components/NavBar';
import { Grid, Paper, Toolbar } from '@mui/material';
import Image from 'next/image';

export default function Index() {
  const imgScale = '1200%';
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 10 }}>
        <NavBar />

        <Paper elevation={8} zIndex={5}>
          <Grid container spacing={1} >
            <Grid item xs={6} md={10}>
              <Typography paddingLeft={'15px'} variant='h2' component='h2' fontWeight={'bold'} textAlign={'center'}>
                Dragontech
              </Typography>
            </Grid>

            <Grid item sx={6} md={2} />
            <Grid item sx={6} md={2} />

            <Grid item sx={6} md={10}>
              <Typography paddingRight={'30%'} variant='h2' component='h2' fontWeight={'bold'} textAlign={'right'}>
                .solutions
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <Box zIndex={0}>
        <Image width={1280} height={853} src={'/../public/imgs/dji-g737041eeb_1280.jpg'} />
        </Box>

        <Typography variant="body1" component="body" textAlign="center" p="15px">
          As the world's population increases and consumers' demand for environmentally responsible and organic agriculture increases, the need for utilizing technology to improve the efficiency of agricultural production is urgent.
        </Typography>

        <Paper elevation='8'>
          <Typography variant='body1' component='body' textAlign="center" pt="15px" pb="15px" p='2%'>
            Dragontech uses high resolution imaging to provide insights and solutions in the Agriculture sector.  We are focusing on crop and asset management through Uutilizing radiometric thermal, multispectral, hyperspectral and lidar imaging.  With advancements in drone capabilities, long range low power data transmission, and imaging systems, the potential to provide value in the Ag sector is significant.
          </Typography>
        </Paper>

        <Copyright />
      </Box>
    </Container>
  );
}
