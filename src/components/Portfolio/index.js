import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import nowPlaying from '../../assets/nowPlaying.png';
import cinequiz from '../../assets/cinequiz.jpg';


function Portfolio() {
    const projects = [
        {
            name: 'Now Playing',
            description: 'Now playing is a social media app that lets users see what albums their friends have been listening to.',
            tech: 'Handlebars, Express, Sequelize',
            github: 'https://github.com/drewvena/now-playing',
            app: 'https://nowplayingapp.herokuapp.com/login',
        },
        {
            name: 'Cinequiz',
            description: 'Cinequiz is a interactive movie quiz game that tracks users scores.',
            tech: 'HTML, CSS, JS, OMDb API, GIPHY API',
            github: 'https://github.com/drewvena/git-it-right',
            app: 'https://drewvena.github.io/git-it-right/',
        },
        {
            name: 'Budget Tracker',
            description: 'The Budget Tracking app lets you log your expenses, even while offline.',
            tech: 'PWA, idb, JS',
            github: 'https://github.com/raymondlopez13/supreme-doodle',
            app: 'https://mighty-waters-09092.herokuapp.com/',
        },
        {
            name: 'Team Profile Generator',
            description: 'An interactive terminal project that prompts to you input employees of your business.',
            tech: 'JS, Node',
            github: 'https://github.com/raymondlopez13/team-profile-generator',
            app: '#',
        },
        {
            name: 'Note Taker',
            description: 'This app allows the user to take notes and have them saved.',
            tech: 'JS, Express',
            github: 'https://github.com/raymondlopez13/note-taker',
            app: 'https://evening-scrubland-13174.herokuapp.com/',
        },
        {
            name: 'Food Festival',
            description: 'This app is for a fake food festival so users can navigate the event, even while offline',
            tech: 'JS, Webpack, idb',
            github: 'https://github.com/raymondlopez13/food-festival',
            app: 'https://raymondlopez13.github.io/food-festival/',
        },
        
    ];
    function photoReturn(img) {
        switch(img) {
            case 'Now Playing':
                return <img src={nowPlaying} alt='Now Playing' />;
            case 'Cinequiz':
                return <img src={cinequiz} alt='Cinequiz' />;
            default:
                return '';
        }
    }
    return (
        <section id="projects">
            {projects.map((project) => (
                <div className="Project" key={project.name}>
                    {photoReturn(project.name)}
                    <div>
                        <a href={project.github} target='_blank' rel="noreferrer"><FaGithub /></a>
                        <a href={project.app} target='_blank' rel="noreferrer"><FaGlobe /></a>
                    </div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <p>Technologies used: {project.tech}</p>
                </div>
            ))}
        </section>
    )
}
export default Portfolio;