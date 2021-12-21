import React from 'react';
import { Avatar } from '@mui/material';
import { Grid } from '@mui/material';

function About() {
    
    return (
        <Grid container className='about-main'>
            <Grid container md={8} xs={12} id='main'>
                <Grid container item md={12} xs={12}id="about">
                    <Grid container item md={4} xs={12}>
                        <Grid md={12} xs={12}>
                            <Avatar 
                                src='/images/Headshot-min.17d7b039.jpg' 
                                alt='Headshot'
                                sx={{ width: 200, height: 200}}
                                className='headshot'
                            />
                        </Grid>
                        <Grid item md={12} xs={12} className='interests'>
                            <h2>Interests:</h2>
                        </Grid>
                        <Grid item md={12} xs={12} className='interests'>
                            <p>Sports, Video Games, Dogs, 2000's R&B</p>
                        </Grid>
                    </Grid>
                    
                    <Grid item md={8} xs={12} className='paragraph'>
                        <p>
                            Hello I’m Raymond, a full stack web developer with a certificate in Full Stack Web Development from the University of Texas at Austin. I love to build beautiful, functional websites using MERN, SQL, HTML, and CSS. I have great time management skills and thrive in high stress situations. I can excel in a leadership role, or as a teammate because of my ability to communicate the team goals and best ways to achieve them. I would love to work for a company that is looking to help people build their dream website for their business, portfolio, or anything else that they need!
                        </p>
                    </Grid>
                </Grid>
                <Grid container item md={12} id='about-resume'>
                    <Grid item md={12} className='about-resume-header'>
                        <h2>Resume</h2>
                    </Grid>
                    <Grid container item md={12} className='about-resume-row'>
                        <Grid item md={3} className='about-resume-topic'>
                            <h2>
                            Languages
                            </h2>
                        </Grid>
                        <Grid item md={9}  className='about-resume-abilities'>
                            <h3>
                                English(fluent), JavaScript(intermediate), Python(beginner), Java(complete noob)
                            </h3>
                        </Grid>
                        <Grid container item md={12} className='about-resume-row'>
                            <Grid item md={3} className='about-resume-topic'>
                                <h2>
                                    Databases
                                </h2>
                            </Grid>
                            <Grid item md={9}  className='about-resume-abilities'>
                                <h3>
                                    SQL(Postgres, mySQL, SQLite3) and NoSQL(MongoDB)
                                </h3>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
            <Grid container md={4} id='about-sidebar'>
                SideBar
            </Grid>
        </Grid>
    )
}
export default About;