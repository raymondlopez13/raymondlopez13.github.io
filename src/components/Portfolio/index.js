import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import nowPlaying from '../../assets/nowPlaying.png';
import cinequiz from '../../assets/cinequiz.jpg';


function Portfolio() {
    const projects = [
        {
            name: 'Now Playing',
            description: 'Now playing is a social media app that lets users see what albums their friends have been listening to. For this project I was mainly in charge of the backend. I used express for the routing and sequelize to serve data for the front end team.',
            tech: 'Handlebars, Express, Sequelize',
            github: 'https://github.com/drewvena/now-playing',
            app: 'https://nowplayingapp.herokuapp.com/login',
        },
        {
            name: 'Cinequiz',
            description: 'Cinequiz is a interactive movie quiz game that tracks users scores. I mainly worked on the game functionality: when the next question would be presented, displaying the names of actors from OMDb API, and displaying high scores.',
            tech: 'HTML, CSS, JS, OMDb API, GIPHY API',
            github: 'https://github.com/drewvena/git-it-right',
            app: 'https://drewvena.github.io/git-it-right/',
        },
        {
            name: 'Flambot-Corp',
            description: 'Flambot-Corp is an online shopping website that lets users create accounts and login, add items to cart, filter items, as well as checkout. For this project I was in charge of the back end. I used created models using mongoose, and used GraphQL for serving data. Stripe API was used to incorporate a checkout.',
            tech: 'Stripe, React, IndexedDB, Express, Semanic UI, GraphQL, Apollo',
            github: 'https://github.com/drewvena/flambot-corp',
            app: 'https://flambot-corp.herokuapp.com/',
        },  
    ];
    function photoReturn(img) {
        switch(img) {
            case 'Now Playing':
                return <img src={nowPlaying} alt='Now Playing' />;
            case 'Cinequiz':
                return <img src={cinequiz} alt='Cinequiz' />;
            case 'Flambot-Corp':
                return <img src='https://user-images.githubusercontent.com/69886471/120904381-ab8fbe00-c611-11eb-86d9-97ebb506a933.png' alt='Flambot-Corp' />;
            default:
                return;
        }
    }
    return (
        <section id="projects">
            {projects.map((project) => (
                <div className="Project" key={project.name}>
                    {photoReturn(project.name)}
                    <div>
                        <h3>{project.name}</h3>
                        <a href={project.github} target='_blank' rel="noreferrer"><FaGithub /></a>
                        <a href={project.app} target='_blank' rel="noreferrer"><FaGlobe /></a>
                    </div>
                    <p>{project.description}</p>
                    <p>Technologies used: {project.tech}</p>
                </div>
            ))}
        </section>
    )
}
export default Portfolio;