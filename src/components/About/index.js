import React from 'react';
import { Grid } from '@mui/material';
import AboutMain from './about-main/about-main';
import AboutResume from './about-resume/about-resume';
import AboutFeaturedProject from './about-featured-project/about-featured-project';
import AboutSidebar from './about-sidebar/about-sidebar';
function About() {
    
    return (
        <Grid container className='about-main'>
            <Grid item md={8} xs={12} id='main'>
                <AboutMain />
                <AboutResume />
                <AboutFeaturedProject />
            </Grid>
            <AboutSidebar />
        </Grid>
    )
}
export default About;