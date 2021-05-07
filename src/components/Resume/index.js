import React from 'react';
import resume from '../../assets/Resume.docx';

function Resume() {
    return (
        <div className='resume'>
            <h4><a href={resume} download>Download my resume</a></h4>
            <h2>Resume</h2>
            <div className='experience'>
                <h3>Experience</h3>
                <div className='job'>
                    <p>Salt Lick BBQ</p>
                    <p>June 2015 - Current</p>
                </div>
                <div className='job'>
                    <p>Chick-Fil-A</p>
                    <p>March 2019 - June 2019</p>    
                </div> 
            </div>
            <div>
                <h3>Skills</h3>
                <div>
                    <p>React</p>
                    <p>Express.js</p>
                    <p>SQL</p>
                    <p>MongoDB</p>
                    <p>Node</p>
                </div>
            </div>
        </div>
    )
}
export default Resume;