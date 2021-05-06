import React from 'react';

function Portfolio() {
    const projects = [
        {
            name: 'Now Playing',
            img: 'nowPlaying',
            description: 'Now playing is a social media app that lets users see what albums their friends have been listening to',
            tech: 'Handlebars, Express, Sequelize'
        },
        {
            name: 'Cinequiz',
            img: 'cinequiz',
            description: 'Cinequiz is a interactive movie quiz game that tracks users scores',
            tech: 'HTML, CSS, JS, OMDb API, GIPHY API'
        }
    ];
    return (
        <section id="projects">
            {projects.map((project) => (
                <div className="Project">
                    <img src={`../../assets/${project.img}.jpg`} alt={`${project.name}`} />
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <p>{project.tech}</p>
                </div>
            ))}
        </section>
    )
}
export default Portfolio;