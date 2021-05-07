import React from 'react';
import headshot from '../../assets/Headshot-min.jpg';

function About() {
    
    return (
        <section id="about" className='about'>
            <img src={headshot} alt="headshot" />
            <div className="about-text">
                <p className='aboutP'>
                    I am a 22 year old full stack developer with a certificate from The University of Texas.
                </p>
            </div>
        </section>
    )
}
export default About;