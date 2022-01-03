import React from 'react';
import { Grid } from '@mui/material';
import nowPlaying from '../../../assets/nowPlaying.png';
import carWashYeah_Home from '../../../assets/CarWashYeah_Home.png';
function AboutSidebar() {
    const projects = [
        {
            name: 'Now Playing',
            description: 'Now playing is a social media app that lets users see what albums their friends have been listening to. For this project I was mainly in charge of the backend. I used express for the routing and sequelize to serve data for the front end team.',
            tech: 'Handlebars, Express, Sequelize',
            github: 'https://github.com/drewvena/now-playing',
            app: 'https://nowplayingapp.herokuapp.com/login',
            image: nowPlaying
        },
        {
            name: 'Flambot-Corp',
            description: 'Flambot-Corp is an online shopping website that lets users create accounts and login, add items to cart, filter items, as well as checkout. For this project I was in charge of the back end. I used created models using mongoose, and used GraphQL for serving data. Stripe API was used to incorporate a checkout.',
            tech: 'Stripe, React, IndexedDB, Express, Semanic UI, GraphQL, Apollo',
            github: 'https://github.com/drewvena/flambot-corp',
            app: 'https://flambot-corp.herokuapp.com/',
            image: 'https://user-images.githubusercontent.com/69886471/120904381-ab8fbe00-c611-11eb-86d9-97ebb506a933.png'
        },
        {
            name: 'Car Wash Yeah',
            description: 'Car Wash Yeah is a site where users can schedule appointments for a car detail. Users can choose between a detail for their car or truck, then get to set the appointment date, and time based on the availability of the Admin. Once a time is chosen, users are then asked to give their information, and pay using the PayPal API. Upon payment, they are taken to a success screen where they can go back to the home page.',
            tech: 'React, PayPal API, MongoDB, react-calender, axios',
            github: 'https://github.com/raymondlopez13/car-wash',
            app: 'https://carwashyeah.herokuapp.com/',
            image: carWashYeah_Home
        },
    ];
    return (
        <Grid container md={4} id='about-sidebar'>
            <Grid item md={12} className='about-sidebar-header'>
                <h2>Projects</h2>
            </Grid>
            {projects.map(project => (
                <Grid container item md={12} className='about-project'>
                    <Grid item md={12}>
                        <img src={project.image} className='about-project-image' alt="Project" />
                    </Grid>
                    <Grid item md={12}>
                        {project.name}
                    </Grid>
                    <Grid item md={12}>
                        {project.description}
                    </Grid>
                </Grid>
            ))}
            <Grid item md={12}>
                <h3>To see more, visit the portfolio page!</h3>
            </Grid>
        </Grid>
    )
}
export default AboutSidebar;