import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import nowPlaying from '../../assets/nowPlaying.png';
import cinequiz from '../../assets/cinequiz.png';


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
        }
    ];
    function photoReturn(img) {
        switch(img) {
            case 'Now Playing':
                return nowPlaying;
            case 'Cinequiz':
                return cinequiz;
            default:
                return '';
        }
    }
    return (
        <section id="projects">
            {projects.map((project) => (
                <div className="Project" key={project.name}>
                    <img src={photoReturn(project.name)} alt={`${project.name}`} />
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