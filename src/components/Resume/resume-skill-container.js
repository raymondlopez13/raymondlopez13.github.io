import React from 'react';
import { AiOutlinePercentage } from 'react-icons/ai';

function ResumeSkillContainer(props) {
    const percentage = () => {
        switch(props.progress) {
            default:
                break;
            case 'hundred':
                return <p>100%</p>
            case 'threeQtr':
                return <p>75%</p>
            case 'half':
                return <p>50%</p>
            case 'qtr':
                return <p>25%</p>
        }
    }
    return (
        <div className='resume-skill-container'>
            <h3>
                {props.skill}
            </h3>
            <div className='progress-bar'>
                <div className={`${props.progress}-progress progress`}>
                </div>
            </div>
            <p>{percentage()}</p>
        </div>
    )
}
export default ResumeSkillContainer;