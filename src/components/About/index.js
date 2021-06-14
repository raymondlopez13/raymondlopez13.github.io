import React from 'react';
import headshot from '../../assets/Headshot-min.jpg';

function About() {
    
    return (
        <section id="about" className='about'>
            <img src={headshot} alt="headshot" />
            <div className="about-text">
                <p className='aboutP'>
                Hello I’m Raymond, a full stack web developer with a certificate in Full Stack Web Development from the University of Texas at Austin. I love to build beautiful, functional websites using MERN, SQL, HTML, and CSS. I have great time management skills and thrive in high stress situations. I can excel in a leadership role, or as a teammate because of my ability to communicate the team goals and best ways to achieve them. I would love to work for a company that is looking to help people build their dream website for their business, portfolio, or anything else that they need!
                </p>
            </div>
        </section>
    )
}
export default About;