import React from 'react';
import { Avatar } from '@mui/material';
import { Grid } from '@mui/material';

function AboutMain() {
    
    return (
        <Grid container md={12} xs={12}id="about">
            <Grid item md={4} xs={12}>
                <Grid item md={12} xs={12} className='interests'>
                    <Avatar 
                        src='/images/Headshot-min.17d7b039.jpg' 
                        alt='Headshot'
                        sx={{ width: 200, height: 200}}
                        className='headshot'
                    />
                    <h3>Interests:</h3>
                    <p>Sports, Video Games, Dogs, 2000's R&B</p>
                </Grid>
            </Grid>
            
            <Grid item md={8} xs={12} className='paragraph'>
                <p>
                    Hello I’m Raymond, a full stack web developer with a certificate in Full Stack Web Development from the University of Texas at Austin. I love to build beautiful, functional websites using MERN, SQL, HTML, and CSS. I have great time management skills and thrive in high stress situations. I can excel in a leadership role, or as a teammate because of my ability to communicate the team goals and best ways to achieve them. I would love to work for a company that is looking to help people build their dream website for their business, portfolio, or anything else that they need!
                </p>
            </Grid>
        </Grid>
    )
}
export default AboutMain;