import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../components/Copyright';
import NavBar from '../components/NavBar';
import { Grid, Paper, Toolbar } from '@mui/material';
import Image from 'next/image';
import { Button } from '@mui/material';

import cornField from './../public/imgs/dji-g29f592e81_1280.jpg';
import initialImage from './../public/imgs/drone-g1edf199d6_1280.jpg';
import productsImage from './../public/imgs/dji-g737041eeb_1280.jpg';

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 12 }}>
        <NavBar />

        { /* Website logo */ }
        <Grid container spacing={1} >
          <Grid item xs={6} md={10}>
            <Typography color='secondary' paddingLeft={'15px'} variant='h2' component='h2' fontWeight={'bold'} textAlign={'center'}>
              Dragontech
            </Typography>
          </Grid>

          <Grid item sx={6} md={2} />
          <Grid item sx={6} md={2.5} />

          <Grid item sx={6} md={9.5}>
            <Typography color={'primary'} paddingRight={'30%'} variant='h2' component='h2' fontWeight={'bold'} textAlign={'right'}>
              .solutions
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="body1" textAlign="center" paddingLeft={'15px'}paddingRight="15px" fontStyle={'italic'} fontSize={'20px'} pb={2} pt={4}>
        Innovative solutions to increase agricultural profitability and efficiency
        </Typography>

        {/* Image */}
        <Box sx={{ my: 2 }}>
          <Image width={1280} height={797} src={initialImage} />
        </Box>


        <Paper elevation={8} sx={{ my: 4 }}>
          <Grid container spacing={2}
            justifyContent='center'
            justifyItems={'center'}
            paddingLeft={2}
            paddingRight={2}
            paddingTop={1}
            paddingBottom={2}
            direction="row">

            <Grid item sx md={6}>
              <Image width={1280} height={853} src={productsImage} />
            </Grid>

            <Grid item sx md='6'>
              <Grid 
                container
                spacing={2}
                direction="column"
                justifyContent="center"
                alignItems="center"
                paddingLeft={2}
                paddingRight={2}>
                  <Grid item sx>
                  <Typography
                        fontFamily='unset'
                        variant="h4"
                        component="h1"
                        textAlign={'center'}>
                        Products
                    </Typography>
                  </Grid>
                <Grid item sx>
                  <Typography variant="body1" textAlign="center" p="15px">
                  Dragontech seeks to increase the efficiency and profitability of farms with solutions that utilize high-resolution imaging and scanning.  We focus on crop and asset management by utilizing radiometric thermal, multispectral, and lidar imaging.  With advancements in drone capabilities, long-range low power data transmission, and imaging systems, there is significant potential to provide value in the Ag sector.
                  </Typography>
                </Grid>
                <Grid item>
                  <Button sx={{ my: 2 }} variant="contained" href="/products/" color='secondary' background-color='primary' cursor="pointer">
                    Products Page
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Box>
          <Grid 
            container 
            spacing={2}
            justifyContent='center'
            paddingLeft={2}
            paddingRight={2}
            paddingTop={1}
            paddingBottom={2}
            direction="row">
              
            <Grid item sx md='7'>

              <Grid container 
                direction="column"
                justifyContent="center"
                alignItems="center"
                paddingLeft={2}
                paddingRight={2}>
                  <Grid item sx>
                  <Typography
                        fontFamily='unset'
                        variant="h4"
                        component="h1"
                        textAlign={'center'}>
                        About Us
                    </Typography>
                  </Grid>
                <Grid item sx>
                  <Typography variant="body1" textAlign="center" p="15px">
                  Founded in 2021, Dragontech is a startup based out of Huron, SD, and Minneapolis, MN. 
                  <br /><br />
                  Dragontech hopes to serve the Midwest, beginning with partners in South Dakota and Minnesota. 
                  </Typography>
                </Grid>
                <Grid item>
                  <Button sx={{ my: 2 }} variant="contained" href="/about/" color='secondary' background-color='primary' cursor="pointer">
                    About Us Page
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid item sx md={5} justifyContent='right'>
              <Image src={cornField} />
            </Grid>
          </Grid>
          </Box>

        <Copyright />
      </Box>
    </Container>
  );
}
