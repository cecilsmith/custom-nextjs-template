import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../../components/Copyright';
import NavBar from '../../components/NavBar';
import { Grid, Paper } from '@mui/material';
import Image from 'next/image';
import { Card } from '@mui/material';
import { Button } from '@mui/material';

// Image imports (helps with page loading)
import drone1 from '../../public/imgs/dji-gf782f5ab5_1920.jpg';
import multispectral1 from '../../public/imgs/fieldData/IMG_0080_1.jpg';
import multispectral2 from '../../public/imgs/fieldData/IMG_0080_2.jpg';
import multispectral3 from '../../public/imgs/fieldData/IMG_0080_3.jpg';
import multispectral4 from '../../public/imgs/fieldData/IMG_0080_4.jpg';
import multispectral5 from '../../public/imgs/fieldData/IMG_0080_5.jpg';
import multispectral6 from '../../public/imgs/fieldData/IMG_0080_6.jpg';
import SatImage from '../../public/imgs/fieldData/SatImagery.png';
import SatLiDAR from '../../public/imgs/fieldData/LiDarImagery.png';
import thermalImage from '../../public/imgs/exbotj_ert029_f0003.jpeg';


export default function Imaging() {
    // Formatting parameters
    const cardWidth = '100%';
    // multispectral images parameters
    const fieldWidth = 1456;
    const fieldHeight = 1088;

    return (
        <Container component="main" maxWidth="md">
            <Box sx={{ my: 12 }}>
                <NavBar />

                <Typography
                    fontFamily='unset'
                    variant="h4"
                    component="h1"
                    zIndex='2'
                    justifyContent='center'
                    alignItems='center'
                    textAlign={'center'}
                    mb='1pc'
                    alignSelf='center'>
                    Agricultural Imaging Solutions
                </Typography>
                <Typography
                    fontFamily='unset'
                    variant='h5'
                    zIndex='2'
                    justifyContent='center'
                    mb='1pc'
                    alignSelf='center'
                    textAlign={'center'}
                    fontStyle='italic'>
                    Multispectral Cameras, Thermal Imaging, and LiDAR Scanning
                </Typography>

                <Image src={drone1} sx={{ my: 4 }} />

                <Paper sx={{ my: 2 }} >
                    <Typography fontFamily='unset' padding={'5px'} variant='h6' textAlign={'center'} sx={{ fontWeight: 'bold' }}>
                        Multispectral Imaging
                    </Typography>
                    <Typography padding={'5px'} variant="body1" textAlign="center" sx={{ fontWeight: '2' }}>
                    Dragontech solutions employ multispectral imaging to monitor plant health and growth accurately. The imaging technology that we are developing will allow farmers to accurately count and monitor crops. With these innovations, farmers will be able to identify where nutrients and water are needed—significantly improving the efficiency of the farms. 
                    </Typography>

                    <Box sx={{ my: 1 }}>
                        <Grid container
                            paddingLeft={2}
                            paddingRight={2}
                            direction="row"
                            justifyContent="center"
                            alignItems="flex-start"
                            spacing={2}>

                            <Grid item sx={6} md={4}>
                                <Card sx={{ width: cardWidth }}>
                                    <Image width={fieldWidth} height={fieldHeight} src={multispectral1}></Image>
                                    <Typography textAlign={'center'} color={'violet'}>
                                        Violet
                                    </Typography>
                                </Card>
                            </Grid>
                            <Grid item sx={6} md={4}>
                                <Card sx={{ width: cardWidth }}>
                                    <Image width={fieldWidth} height={fieldHeight} src={multispectral2} />
                                    <Typography textAlign={'center'} color={'blue'}>
                                        Blue
                                    </Typography>
                                </Card>
                            </Grid>
                            <Grid item sx={6} md={4}>
                                <Card sx={{ width: cardWidth }}>
                                    <Image width={fieldWidth} height={fieldHeight} src={multispectral3} />
                                    <Typography textAlign={'center'} color={'green'}>
                                        Green
                                    </Typography>
                                </Card>
                            </Grid>
                            <Grid item sx={6} md={4}>
                                <Card sx={{ width: cardWidth }}>
                                    <Image width={fieldWidth} height={fieldHeight} src={multispectral4} />
                                    <Typography textAlign={'center'} color={'yellow'}>
                                        Yellow
                                    </Typography>
                                </Card>
                            </Grid>
                            <Grid item sx={6} md={4}>
                                <Card sx={{ width: cardWidth }}>
                                    <Image width={fieldWidth} height={fieldHeight} src={multispectral5} />
                                    <Typography textAlign={'center'} color={'orange'}>
                                        Orange
                                    </Typography>
                                </Card>
                            </Grid>
                            <Grid item sx={6} md={4}>
                                <Card sx={{ width: cardWidth }}>
                                    <Image width={fieldWidth} height={fieldHeight} src={multispectral6} />
                                    <Typography textAlign={'center'} color={'red'}>
                                        Red
                                    </Typography>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>

                    <Typography padding={'5px'} variant="body1" textAlign="center" sx={{ fontWeight: '2' }}>
                    As seen above, the multispectral capabilities of our drone packages allow us to analyze visual data across the spectrums of light. The separation of light bands grants us the ability to analyze the health of plants by measuring their color and infrared data.
                    </Typography>
                    <Typography padding={'5px'} variant="body1" textAlign="center" sx={{ fontWeight: '2' }}>
                        For example, a farmer might want to irrigate the light spots displayed on the 'green' image because there are hints of yellow. This likely means that those areas contain unhealthy plants.
                    </Typography>
                </Paper>


                <Paper sx={{ my: 2 }}>
                    <Typography fontFamily='unset' padding={'5px'} variant='h6' textAlign={'center'} sx={{ fontWeight: 'bold' }}>
                        LiDAR Scanning
                    </Typography>
                    <Box>
                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="flex-start" spacing={2}>
                            <Grid item sx md='4'>
                                <Card>
                                    <Image width={766} height={1098} src={SatImage} />
                                </Card>
                            </Grid>
                            <Grid item sx md='4'>
                                <Card>
                                    <Image width={762} height={1098} src={SatLiDAR} />
                                </Card>
                            </Grid>
                        </Grid>
                        <Typography variant='body1' textAlign="center" paddingTop="5px" sx={{ fontWeight: '2', p: '5px' }}>
                        Our LiDAR device will give the farmers accurate measurements of the height of the captured surface. This LiDAR data can be used to create 3D maps of the field, allowing for 3D analysis of plant growth and irrigation paths, thus improving the efficiency and consistency of one's farm.
                        </Typography>
                    </Box>
                </Paper>

                <Paper>
                    <Typography fontFamily='unset' padding={'5px'} variant='h6' textAlign={'center'} sx={{ fontWeight: 'bold' }}>
                        Thermal Imaging
                    </Typography>
                    <Grid container justifyContent={'center'}>
                        <Grid item sx md='6'>
                        <Image width={1280} height={1089} src={thermalImage} />
                        </Grid>
                    </Grid>
                    <Typography variant='body2' textAlign={'center'} sx={{ fontStyle: 'italic', fontWeight: '2', p: '5px' }}>
                        Image Credit: J. Miguel Costa, Olga M. Grant, and M. Manuela Chaves / Journal of Experimental Botany
                    </Typography>
                    <Typography variant='body1' textAlign='center' sx={{ fontWeight: '2', p: '5px' }}>
                    The thermal imaging capabilities of our package will allow farmers to observe how their plants are responding to heat. The data collected here will help the farmers determine whether the plants need water. The thermal data will reduce costs long-term because water will be used with greater efficiency.
                    </Typography>
                </Paper>

                <Paper sx={{ my: 4 }}>
                <Typography fontFamily='unset' padding={'5px'} variant='h6' textAlign={'center'} sx={{ fontWeight: 'bold' }}>
                        Contact Us
                    </Typography>
                    <Typography variant='body1' textAlign='center' sx={{ fontWeight: '2', p: '5px' }}>
                        To find out more or to reach out to us, please send us an email.
                    </Typography>
                    <Grid sx={{ my: 2 }} paddingBottom="15px" container justifyContent={'center'}>
                        <Grid item>
                        <Button alignItems='center' variant="contained" href="mailto: blank@dragontech.solutions" color='secondary' background-color='primary' cursor="pointer">
                                            Email Us
                                        </Button>
                        </Grid>
                    </Grid>
                    
                </Paper>
                <Copyright />
            </Box>
        </Container>
    );
}
