import React from 'react';
import ResumeSkillContainer from './resume-skill-container';

function Resume() {
    const leftSkills = [
        ['HTML', 'hundred'],
        ['CSS', 'hundred'],
        ['Javsascript', 'hundred'],
        ['Python', 'threeQtr'],
        ['Java', 'qtr'],
        ['C++', 'qtr'],
        ['SQL', 'half'],
        ['mongoDB', 'threeQtr']
    ]
    const rightSkills = [
        ['React', 'threeQtr'],
        ['Redux', 'half'],
        ['Express', 'threeQtr'],
        ['Node', 'threeQtr'],
        ['Django', 'half'],
        ['OOP', 'qtr'],
        ['GrahpQL', 'half'],
        ['Git', 'threeQtr']
    ]
    return (
        <section id='resume'>
            <h1 className='resume-title'>Resume</h1>

            <h2 className='resume-link underline'><a href='https://docs.google.com/document/d/1VPUYfSK6dYB3SHvoqJzdXpXWNy8Namq7OI3Guy_VD2o/edit'>Go to my resume!</a></h2>

            <div className='resume-left-column'>
                {leftSkills.map(skills => {
                    return (
                        <ResumeSkillContainer skill={skills[0]} progress={skills[1]} />
                    )
                })}
            </div>

            <div className='resume-right-column'>
            {rightSkills.map(skills => {
                    return (
                        <ResumeSkillContainer skill={skills[0]} progress={skills[1]} />
                    )
                })}
            </div>
        </section>
    )
}
export default Resume;