import React from 'react';
import resume from '../../assets/Resume.docx';

function Resume() {
    return (
        <div className='border'>
            <h4><a href={resume} download>Download my resume</a></h4>
            <div className='resume'>
                <div className='flex'>
                    <h3>Languages</h3>
                    <div className='skills'>
                        <p>Javascript</p>
                        <p>Python</p>
                    </div>
                </div>
                <div className='flex'>
                    <h3>Frameworks</h3>
                    <div className='skills'>
                        <p>Node.js</p>
                        <p>React.js</p>
                        <p>Express.js</p>
                        <p>Django</p>
                    </div>
                </div>
                <div className='flex'>
                    <h3>Databases</h3>
                    <div className='skills'>
                        <h3>SQL:</h3>
                        <p>MySQL</p>
                        <p>sqlite</p>
                        <p>PostgreSQL</p>
                        <h3>NoSQL:</h3>
                        <p>MongoDB</p>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}
export default Resume;