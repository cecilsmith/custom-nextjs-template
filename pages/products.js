import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../components/Copyright';
import NavBar from '../components/NavBar';
import { Avatar, Button, Card, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper } from '@mui/material';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import { maxHeight, maxWidth } from '@mui/system';
import fieldImage from './../public/imgs/dji-gf782f5ab5_1920.jpg';
import livestockImage from './../public/imgs/nature-g975b95402_1920.jpg';


export default function ProductsPage() {
    const width = maxWidth;
    const height = maxHeight;

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
                        Products
                    </Typography>
                </div>

                <Paper elevation={8}>
                    <Typography variant="body1" component="body" textAlign="center" paddingTop="15px" paddingBottom="15px" sx={{ fontWeight: '2' }}>
                        At Dragontech, our products combine innovative technologies in new systems to increase the efficiency of farms and jobs of those across the Ag sector. 
                    </Typography>
                </Paper>

                <Grid container spacing={2} marginTop="1%">
                    <Card
                        sx={{
                            p: 2,
                            margin: 'auto',
                            maxWidth: 400,
                            flexGrow: 1,
                            marginTop: '5px',
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase sx={{ width: width / 5, height: height / 5 }} href={'/products/imaging'}>
                                    <Image src={fieldImage} />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            LiDAR, Thermal, and Multispectral Imaging Solutions Using Drone Technologies
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" href="/products/imaging" color='secondary' background-color='primary' cursor="pointer">
                                            Agricultural Solutions
                                        </Button>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>

                    <Card
                        sx={{
                            p: 2,
                            margin: 'auto',
                            maxWidth: 400,
                            flexGrow: 1,
                            marginTop: '5px',
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase sx={{ width: width / 5, height: height / 5 }}>
                                    <Image alt="complex" src={livestockImage} href={''} />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            Livestock Assessment and Management Solutions
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button disabled variant="contained" href="/products/imaging" color='secondary' background-color='primary' cursor="pointer">
                                            Livestock Solutions
                                        </Button>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>

            </Box>
            <Copyright />
        </Container>
    );
}
