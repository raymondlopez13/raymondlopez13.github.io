import React from 'react';
import { Avatar } from '@mui/material';
import { Grid } from '@mui/material';
import nowPlaying from '../../assets/nowPlaying.png';
import carWashYeah from '../../assets/CarWashYeah.png';

function About() {
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
            image: carWashYeah
        },
    ];
    return (
        <Grid container className='about-main'>
            <Grid item md={8} xs={12} id='main'>
                <Grid container md={12} xs={12}id="about">
                    <Grid item md={4} xs={12}>
                        <Grid item md={12} xs={12} className='interests'>
                            <Avatar 
                                src='/images/Headshot-min.17d7b039.jpg' 
                                alt='Headshot'
                                sx={{ width: 200, height: 200}}
                                className='headshot'
                            />
                            <h2>Interests:</h2>
                            <p>Sports, Video Games, Dogs, 2000's R&B</p>
                        </Grid>
                    </Grid>
                    
                    <Grid item md={8} xs={12} className='paragraph'>
                        <p>
                            Hello I’m Raymond, a full stack web developer with a certificate in Full Stack Web Development from the University of Texas at Austin. I love to build beautiful, functional websites using MERN, SQL, HTML, and CSS. I have great time management skills and thrive in high stress situations. I can excel in a leadership role, or as a teammate because of my ability to communicate the team goals and best ways to achieve them. I would love to work for a company that is looking to help people build their dream website for their business, portfolio, or anything else that they need!
                        </p>
                    </Grid>
                </Grid>
                <Grid container md={12} id='about-resume'>
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
                                JavaScript(intermediate), Python(beginner), Java(complete noob)
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
        </Grid>
    )
}
export default About;