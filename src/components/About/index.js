import React from 'react';
import headshot from '../../assets/Headshot-min.jpg';

function About() {
    
    return (
        <section id="about">
            <img src={headshot} alt="headshot" width="25%" />
            <div className="about-text">
                <p>
                    My name is Raymond Lopez and I am a 22 year old full stack developer with a certificate from The University of Texas.
                </p>
            </div>
        </section>
    )
}
export default About;