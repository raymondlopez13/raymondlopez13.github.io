import React from 'react';
import Project from './projects';


function Portfolio() {
    const projects = [
        {
            title: 'Cinequiz',
            images: [
                'https://github.com/drewvena/git-it-right/blob/main/images/index.png?raw=true',
                'https://github.com/drewvena/git-it-right/blob/main/images/game.png?raw=true',
                'https://github.com/drewvena/git-it-right/blob/main/images/highscores.png?raw=true'
                
            ],
            description: 'This is a movie game application that uses the OMDb API to gather information on films and grab the top 4 actors from each individual movie. The game also randomly generates the movie along with two incorrect answers. There are 4 correct answers and 2 incorrect answers The game also uses the GIPHY API to fetch gifs based on user input criteria (such as the movie name, and the actors name that the user clicks.) Highscores are saved to local storage and displayed!',
            github: 'https://github.com/drewvena/git-it-right',
            liveApp: 'https://drewvena.github.io/git-it-right/',
            tech: ['HTML', 'CSS', 'Javascript']
        },
        {   title: 'Now Playing',
            images: [
                'https://user-images.githubusercontent.com/69886471/114311521-bb2cd380-9ab4-11eb-8168-ce78881d2146.png',
                'https://user-images.githubusercontent.com/69886471/114311407-38a41400-9ab4-11eb-856b-765b1c0c1616.png',
                'https://user-images.githubusercontent.com/69886471/114311434-5b362d00-9ab4-11eb-8810-749c951af02a.png',
                'https://user-images.githubusercontent.com/69886471/114311442-66895880-9ab4-11eb-8fe6-e03cd0be2a70.png',
                'https://user-images.githubusercontent.com/69886471/114311453-743ede00-9ab4-11eb-9eca-3304b1a1780e.png',
                'https://user-images.githubusercontent.com/69886471/114311470-815bcd00-9ab4-11eb-83f6-28442e1e641c.png'
            ],
            description: 'A project for the University of Texas Coding Bootcamp. Now Playing is a music-focused social media app for sharing and discovering new music. Users can create posts, like posts and add comments. The home feed can be filtered based on different criteria including genre and decade. The is also a search page to find specific users or posts. This application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, MySQL and Sequelize ORM for the database, and the express-session npm package for authentication.',
            github: 'https://github.com/drewvena/now-playing/tree/main',
            liveApp: 'https://nowplayingapp.herokuapp.com/',
            tech: ['Handlebars', 'SQL', 'Express']
        },
        {   title: 'Flambot-Corp',
            images: [
                'https://user-images.githubusercontent.com/69886471/120904381-ab8fbe00-c611-11eb-86d9-97ebb506a933.png',
                'https://user-images.githubusercontent.com/69886471/120904390-b6e2e980-c611-11eb-9167-457f9db7a67e.png',
                'https://user-images.githubusercontent.com/69886471/120904401-c19d7e80-c611-11eb-9ac3-618cc22ab97d.png',
                'https://user-images.githubusercontent.com/69886471/120904405-c82bf600-c611-11eb-8324-4e2bc6f98983.png',
                'https://user-images.githubusercontent.com/69886471/120904419-d843d580-c611-11eb-8c6b-cae06d1cb26f.png',
                'https://user-images.githubusercontent.com/69886471/120904427-e134a700-c611-11eb-80d6-bed3ea0ce6f7.png',
                'https://user-images.githubusercontent.com/69886471/120904659-f4944200-c612-11eb-902b-56cfe755534a.png'
            ],
            description: 'This is a REACT Global State application project for our full stack JavaScrip development boot-camp at the University of Texas. This application is a T-shirt store where you would be able to shop for t-shirts by filtered selection, signup/Login, and checkout using Stripe online payment. GraphQL is used on the backend.',
            github: 'https://github.com/drewvena/flambot-corp',
            liveApp: 'https://flambot-corp.herokuapp.com/',
            tech: ['React', 'MongoDB', 'GraphQL', 'Apollo']
        }
    ]
    return (
        <div className='portfolio'>
            <h1>
                Portfolio
            </h1>
            <div className='projects'>
                {projects.map(project => {
                    return <Project project={project} />
                })}
            </div>
        </div>
    );
}
export default Portfolio;