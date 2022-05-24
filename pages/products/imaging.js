import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../../components/Copyright';
import NavBar from '../../components/NavBar';
import { Grid, Paper } from '@mui/material';
import Image from 'next/image';
import drone1 from '../../public/imgs/dji-gf782f5ab5_1920.jpg';
import { Card } from '@mui/material';


export default function Imaging() {
    const scale = '200%';

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
                    mb='1pc'
                    alignSelf='center'>
                    Agricultural Imaging Solutions
                </Typography>
                <Typography
                    fontFamily='unset'
                    variant='h6'
                    zIndex='2'
                    justifyContent='center'
                    mb='1pc'
                    alignSelf='center'
                    fontStyle='italic'>
                    Multispectral Cameras, Thermal Imaging, and LiDAR Scanning
                </Typography>

                <Image src={drone1} />

                <Paper sx={{ py: 2 }}>
                    <Typography padding={'5px'} variant="body1" textAlign="center" sx={{ fontWeight: '2' }}>
                        Dragontech solutions employ multispectral imaging to accurately monitor plant health and growth. The imaging technology that we are developing will allow farmers to accurately count and monitor crops. With these innovations, farmers will be able to identify where nutrients and water are needed—greatly improving the efficiency of the farms.
                    </Typography>

                    <Box sx={{ py: 2 }}>
                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="flex-start" spacing={6}>

                            <Grid item sx>
                                <Card>
                                    <Image width={scale} height={scale} src={'/../public/imgs/fieldData/IMG_0080_1.jpg'}></Image>
                                    <Typography color={'violet'}>
                                        Violet
                                    </Typography>
                                </Card>
                            </Grid>
                            <Grid item sx>
                                <Card>
                                    <Image width={scale} height={scale} src={'/../public/imgs/fieldData/IMG_0080_2.jpg'} />
                                    <Typography color={'blue'}>
                                        Blue
                                    </Typography>
                                </Card>
                            </Grid>
                            <Grid item sx>
                                <Card>
                                    <Image width={scale} height={scale} src={'/../public/imgs/fieldData/IMG_0080_3.jpg'} />
                                    <Typography color={'green'}>
                                        Green
                                    </Typography>
                                </Card>
                            </Grid>
                            <Grid item sx>
                                <Card>
                                    <Image width={scale} height={scale} src={'/../public/imgs/fieldData/IMG_0080_4.jpg'} />
                                    <Typography color={'yellow'}>
                                        Yellow
                                    </Typography>
                                </Card>
                            </Grid>
                            <Grid item sx>
                                <Card>
                                    <Image width={scale} height={scale} src={'/../public/imgs/fieldData/IMG_0080_5.jpg'} />
                                    <Typography color={'orange'}>
                                        Orange
                                    </Typography>
                                </Card>
                            </Grid>
                            <Grid item sx>
                                <Card>
                                    <Image width={scale} height={scale} src={'/../public/imgs/fieldData/IMG_0080_6.jpg'} />
                                    <Typography color={'red'}>
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
                        For example, a farmer might want to water the light spots displayed on the 'green' image because there are hints of yellow. This likely means that those areas contain unhealthy plants.
                    </Typography>
                </Paper>


                <Box>
                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="flex-start" spacing={2} sx={{py: '15px'}}>
                        <Grid item>
                            <Card>
                                <Image width={scale} height={scale} src={'/../public/imgs/fieldData/SatImagery.png'} />
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card>
                                <Image width={scale} height={scale} src={'/../public/imgs/fieldData/LiDarImagery.png'} />
                            </Card>
                        </Grid>
                    </Grid>
                    <Typography variant='body1' textAlign="center" paddingTop="15px" paddingBottom="50px" sx={{ fontWeight: '2' }}>
                        Our LiDAR solutions will give the farmers accurate measurements of plant growth along with readings of possible irrigation paths. Using LiDAR allows the data collected from the multispectral cameras to be analyzed in a 3D environment.
                    </Typography>
                </Box>

                <Copyright />
            </Box>
        </Container>
    );
}
