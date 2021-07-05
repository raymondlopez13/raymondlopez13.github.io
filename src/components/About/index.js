import React from 'react';
import { FaBasketballBall, FaDog, FaGamepad } from 'react-icons/fa';

function About() {
    
    return (
        <section id="about" className='about'>
            <div className="about-text">
                <h1 className="aboutMeH1">About Me!</h1>
                <p className='aboutP'>
                Hello I’m Raymond, a full stack web developer with a certificate in Full Stack Web Development from the University of Texas at Austin. I love to build beautiful, functional websites using MERN, SQL, HTML, and CSS. I have great time management skills and thrive in high stress situations. I can excel in a leadership role, or as a teammate because of my ability to communicate the team goals and best ways to achieve them. I would love to work for a company that is looking to help people build their dream website for their business, portfolio, or anything else that they need!
                </p>
            </div>
            <div className="personal">
                <div className="dogs">
                    <FaBasketballBall className='icon'/>
                    <p className='rockets-p'>I love basketball and am a huge Rockets fan!</p>
                </div>
                <div className="dogs">
                    <FaDog className='icon'/>
                    <p className="rockets-p">I love dogs, especially pitbulls! I have two of my own that love to play and sleep.</p>
                </div>
                <div className="minecraft">
                    <FaGamepad className='icon'/>
                    <p className="rockets-p">Minecraft is my favorite game! I love to play with my friends when I can.</p>
                </div>
            </div>
        </section>
    )
}
export default About;