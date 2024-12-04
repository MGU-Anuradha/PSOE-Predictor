import React from 'react';
import { Grid, Typography, TextField, Button, List, ListItem } from '@mui/material'; 
import Header from './Header';
import Footer from './Footer';
import image from '../assests/images/NeuralNetwork.png'

function Home() {
    return (
        <>
            <Header />
            <Grid container direction="column" style={{ backgroundColor: '#fff', padding: '40px' }}>

                <Grid item xs={12} style={{ padding: '40px' }}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1">
                                Analysis of Position Sensor Offset Error (PSOE) <br />
                                in Permanent Magnet Synchronous Machines (PMSMs)
                            </Typography>
                            <Typography>
                                MotorMind <br />
                                for enhanced <br />
                                PMSM Performance
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                            <img
                                src={image}
                                alt="MotorMind"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </Grid>

                    </Grid>
                </Grid>

                <Grid item xs={12} style={{ padding: '40px' }}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} md={6}>
                                    <TextField fullWidth variant="outlined" placeholder="Enter Voltage" />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <Button fullWidth variant="contained" color="primary">
                                        Predict PSOE
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} md={6}>
                                    <Typography sx={{ textAlign: 'right' }} variant="body1">
                                        PSOE Value:
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h6">1.2345</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} style={{ padding: '40px' }}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={8}>
                            <Typography variant="h6">Conditions:</Typography>
                            <List>
                                <ListItem>
                                    <Typography>Condition 1: This is the first condition.</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography>Condition 2: This is the second condition.</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography>Condition 3: This is the third condition.</Typography>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} style={{ padding: '40px' }}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1">
                                About MotorMind
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography>Description of the motor mind</Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} style={{ padding: '40px' }}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={8}>
                            <Typography variant="h6">Goto Documentation Section</Typography>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
            <Footer />
        </>
    );
}

export default Home;
