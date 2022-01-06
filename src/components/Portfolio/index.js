import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import nowPlaying from '../../assets/nowPlaying.png';
import carWashYeah_Home from '../../assets/CarWashYeah_Home.png';
import carWashYeah_AppointmentTimes from '../../assets/CarWashYeah_AppointmentTimes.png';
import carWashYeah_Calender from '../../assets/CarWashYeah_Calender.png';
import carWashYeah_Form from '../../assets/CarWashYeah_Form.png';
import carWashYeah_PayPal from '../../assets/CarWashYeah_PayPal.png';
import carWashYeah_Services from '../../assets/CarWashYeah_Services.png';
import Cinequiz from '../../assets/cinequiz.jpg';
import Roster_Home from '../../assets/Roster_Home.png';
import Roster_Player from '../../assets/Roster_Player.png';
import Roster_Roster from '../../assets/Roster_Roster.png';
import PetPlace_Home from '../../assets/PetPlace-Home.png'
import PetPlace_LoginHome from '../../assets/PetPlace_LoginHome.png'
import PetPlace_PetProfile from '../../assets/PetPlace_PetProfile.png'
import PetPlace_EditPet from '../../assets/PetPlace_EditPet.png'
function Portfolio() {
    const [ filter, setFilter ] = useState(1);
    const projects = [
        {
            name: 'Now Playing',
            description: 'Now playing is a social media app that lets users see what albums their friends have been listening to. For this project I was mainly in charge of the backend. I used express for the routing and sequelize to serve data for the front end team.',
            tech: 'Handlebars, Express, Sequelize',
            github: 'https://github.com/drewvena/now-playing',
            app: 'https://nowplayingapp.herokuapp.com/login',
            image: [nowPlaying],
            filter: [1, 3, 5]
        },
        {
            name: 'Flambot-Corp',
            description: 'Flambot-Corp is an online shopping website that lets users create accounts and login, add items to cart, filter items, as well as checkout. For this project I was in charge of the back end. I used created models using mongoose, and used GraphQL for serving data. Stripe API was used to incorporate a checkout.',
            tech: 'Stripe, React, IndexedDB, Express, Semanic UI, GraphQL, Apollo',
            github: 'https://github.com/drewvena/flambot-corp',
            app: 'https://flambot-corp.herokuapp.com/',
            image: ['https://user-images.githubusercontent.com/69886471/120904381-ab8fbe00-c611-11eb-86d9-97ebb506a933.png'],
            filter: [1, 2, 5, 6]
        },
        {
            name: 'Car Wash Yeah',
            description: 'Car Wash Yeah is a site where users can schedule appointments for a car detail. Users can choose between a detail for their car or truck, then get to set the appointment date, and time based on the availability of the Admin. Once a time is chosen, users are then asked to give their information, and pay using the PayPal API. Upon payment, they are taken to a success screen where they can go back to the home page.',
            tech: 'React, PayPal API, MongoDB, react-calender, axios',
            github: 'https://github.com/raymondlopez13/car-wash',
            app: 'https://carwashyeah.herokuapp.com/',
            image: [carWashYeah_Home, carWashYeah_AppointmentTimes, carWashYeah_Calender, carWashYeah_Form, carWashYeah_PayPal, carWashYeah_Services],
            filter: [1, 2, 5, 6]
        },
        {
            name: 'Cinequiz',
            description: "Cinequiz is a movie quiz game where users are presented with a movie and six actors. Four of those actors are in the movie and two are not. The user can choose the actors they think are in the movie, but if they guess incorrectly, they are taken to the next question. Each correct guess the user will be awarded a point, at the end users can see how well they did vs how they've done in the past.",
            tech: "OMDb API, JavaScript, HTML, CSS, Giphy API",
            github: 'https://github.com/drewvena/git-it-right',
            app: 'https://drewvena.github.io/git-it-right/',
            image: [Cinequiz],
            filter: [1]
        },
        {
            name: 'Roster Tracker',
            description: 'Roster Tracker is an app where users can create different rosters with members and roles.',
            tech: 'Django, HTML, CSS, PostgreSQL, heroku',
            github: 'https://github.com/raymondlopez13/djagno_employee_tracker',
            app: 'https://raymondlopez13-django-roster.herokuapp.com/',
            image: [Roster_Home, Roster_Player, Roster_Roster],
            filter: [1, 3, 4]
        },
        {
            name: 'Pet Place',
            description: 'My pets is an app that allows users to keep track of their pets! Users can create a profile and create pets. Users are able to add information for their pets such as weight, breed, vaccinations, medications, and even a pet photo!',
            tech: 'React, Node, Express, S3 Bucket, MongoDB, heroku',
            github: 'https://github.com/raymondlopez13/Pet-Social',
            app: 'https://my-pets-raymondlopez13.herokuapp.com/',
            image: [PetPlace_Home, PetPlace_EditPet, PetPlace_LoginHome, PetPlace_PetProfile],
            filter: [1, 2, 5, 6]
        }
    ];
    const filterProjects = arr => {
        if (arr.includes(filter)) {
            return true;
        } else {
            return false;
        }
    };
    const selectFilter = () => {
        const x = Number(document.getElementById('selectFilter').value);
        setFilter(x);
    }
    return (
        <Grid container className='portfolio-main'>
            <Grid item md={12} xs={12} className='filter-section'>
                <h2>Projects</h2>
                <label for='filter'>Filter: </label>
                <select name='filter' onChange={selectFilter} id='selectFilter'>
                    <option value='1'>All</option>
                    <option value='2'>React</option>
                    <option value='3'>SQL</option>
                    <option value='4'>Django</option>
                    <option value='5'>Node</option>
                    <option value='6'>MongoDB</option>
                </select>
            </Grid>
            <Grid item md={10} xs={12} className='projects'>
                {projects.map(project => (
                    <div className='project'>
                        {filterProjects(project.filter) ? 
                            <div>
                                <h1>{project.name}</h1>
                                <Carousel infiniteLoop={true} autoPlay={true}>
                                    {project.image.map(img => (
                                        <Box
                                            component='img'
                                            sx={{
                                                display: 'block',
                                                maxWidth: 900,
                                                overflow: 'hidden',
                                                width: '100%'
                                            }}
                                            src={img}
                                            alt=''
                                        />
                                    ))}
                                </Carousel>
                                <p>{project.description}</p>
                                <div>
                                    <a href={project.github}>Github</a>
                                    <a href={project.app}>Live App</a>
                                </div>
                                <br />
                            </div>
                            :
                            <div></div>
                        }
                        
                    </div>
                    
                ))}
            </Grid>
        </Grid>
    )
}
export default Portfolio;