import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../src/Copyright';
import NavBar from '../src/NavBar';
import NavBarMode from '../src/NavBarMode';
import { Paper, Toolbar } from '@mui/material';
import Image from 'material-ui-image';
import SwipeableTextMobileStepper from '../src/SwipeableTextMobileStepper.js';

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 8 }}>
        <NavBar />

        <Paper elevation="8">
          <SwipeableTextMobileStepper />
        </Paper>

        <br />
        <Paper elevation='12'>
          <Typography variant="body1" component="body" textAlign="center" p="15px">
            As the world's population increases and the consumer’s demand for more environmentally responsible and organic agriculture increases, the need for utilizing technology to improve the efficiency of agricultural production becomes more urgent.
          </Typography>
        </Paper>

        <br />

        <Paper elevation='8'>
          <Typography variant='h6' component='h6' textAlign="center" p='15px'>
            Why should you use Dragontech?
          </Typography>
          <Image src={"https://www1.djicdn.com/cms/uploads/b1c5dd224915f796f79acc24c5b1b08e@770*462.png"} aspectRatio="1.666"></Image>

          <Typography variant='body1' component='body' textAlign="center" pt="15px" pb="15px" p='2%'>
            Dragontech uses high resolution imaging to provide insights and solutions in the Agriculture sector.  Utilizing radiometric thermal, multispectral, hyperspectral and lidar imaging, we are focusing on crop and asset management.  With the advancements in drone capabilities, long range low power data transmission, and imaging systems, the potential to provide value in the Ag sector is significant.
          </Typography>
        </Paper>

        <br />

        <Paper elevation="12">
        <Typography variant='h6' component='h6' textAlign="left" p='15px'>
            What does Dragontech do?
          </Typography>
        <Image src='https://dji-official-fe.djicdn.com/dps/539ea2ee06d9abc7464baacb8c275bad.jpg' aspectRatio="3.2" />

          <Typography variant='body1' component='body'  textAlign='left' padding="2%" sx={{ fontStyle: 'italic'}}>
            We provide solutions in three different areas;
            <ol>
              <li>
                Custom imaging systems fully integrated with Enterprise class drones,
              </li>
              <li>
                Providing a complete drone / imaging solution,
              </li>
              <li>
                Providing back end services including data storage, map integrated imagery of topography (lidar, targeted at drainage), crops (soil analysis, weed identification & sprayer maps, analysis of stand, stress and seed & fertilizer application rates).
              </li>
            </ol>
          </Typography>
        </Paper>

        <br />

        <Copyright />
      </Box>
    </Container>
  );
}
