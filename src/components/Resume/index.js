import React from 'react';
import resume from '../../assets/Resume.docx';

function Resume() {
    return (
        <div className='resume'>
            <h4><a href={resume} download>Download my resume</a></h4>
            <div>
                <h3>Languages</h3>
                <div className='skills'>
                    <p>Javascript</p>
                    <p>Python</p>
                </div>
            </div>
            <div>
                <h3>Frameworks</h3>
                <div className='skills'>
                    <p>Node.js</p>
                    <p>React.js</p>
                    <p>Express.js</p> 
                </div>
            </div>
            <div>
                <h3>Databases</h3>
                <div className='skills'>
                    <p>SQL</p>
                    <p>MongoDB</p>
                </div>
            </div>
            
        </div>
    )
}
export default Resume;