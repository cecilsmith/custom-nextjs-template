import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import NavBar from '../src/NavBar';
import { AppBar, Toolbar } from '@mui/material';
import Image from 'material-ui-image';
import SwipeableTextMobileStepper from '../src/SwipeableTextMobileStepper.js';

export default function Index() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <NavBar />
        <Toolbar />

        <Typography variant="h4" component="h1" gutterBottom>
          Dragontech
        </Typography>

        <SwipeableTextMobileStepper />

        {/*<Link href="/about" color="secondary">
          Go to the about page
  </Link>*/}
        <Typography variant="body1" component="body" textAlign="center" paddingTop="15px" paddingBottom="15px">
        As the world's population increases and the consumer’s demand for more environmentally responsible and organic agriculture increases, the need for utilizing technology to improve the efficiency of agricultural production becomes more urgent.
        </Typography>

        <Image src={"https://www4.djicdn.com/cms_uploads/video/image/4977/cover_770x462_dd4c7a01fae2fa82e40be2d50330e72f.jpg"} aspectRatio="1.6667"></Image>

        <Typography variant='body1' component='body' textAlign="center" paddingTop="15px" paddingBottom="15px">
        Dragontech is using high resolution imaging to provide insights and solutions in the Agriculture sector.  Utilizing radiometric thermal, multispectral, hyperspectral and lidar imaging, we are focusing on crop and asset management.  With the advancements in drone capabilities, long range low power data transmission and imaging systems the potential to provide value in the Ag sector is significant.
        </Typography>

        <Typography variant='body1' component='body' textAlign='center' paddingTop='15px' paddingBottom='15px'>
        We provide solutions in three different areas; 1) Custom imaging systems fully integrated with Enterprise class drones, 2) Providing a complete drone / imaging solution, 3) Providing back end services including data storage, map integrated imagery of topography (lidar, targeted at drainage), crops (soil analysis, weed identification & sprayer maps, analysis of stand, stress and seed & fertilizer application rates).
        </Typography>

        <Copyright />
      </Box>
    </Container>
  );
}
