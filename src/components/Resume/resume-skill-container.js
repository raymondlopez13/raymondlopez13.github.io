import React from 'react';

function ResumeSkillContainer(props) {
    
    return (
        <div className='resume-skill-container'>
            <h3>
                {props.skill}
            </h3>
            <div className='progress-bar'>
                <div className={`${props.progress}-progress progress`}>
                </div>
            </div>
        </div>
    )
}
export default ResumeSkillContainer;