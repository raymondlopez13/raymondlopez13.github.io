import React, { useState } from 'react';
import {Carousel} from 'react-responsive-carousel';
import { AiOutlineClose, AiFillGithub } from 'react-icons/ai';
import { FaGlobe } from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Project(props) {
    const [ displayModal, setDisplayModal ] = useState([false, 0]);
    const click = (event) => {
        setDisplayModal([true, event.target.id]);
    }
    const close = (event) => {
        setDisplayModal([false, 0]);
    }
    return (
        <>
            <div className='project'>
                <Carousel className='carousel'>
                    {props.project.images.map(image => {
                        return <div className='img'>
                            <img src={image} alt='Project'/>
                        </div>
                    })}
                </Carousel>
                <h1>
                    {props.project.title}
                </h1>
                <div className='tech'>
                    {props.project.tech.map(technologyUsed => 
                        <h2 className='tech-item'>{technologyUsed}</h2>
                    )}
                </div>
                <div className='githubLiveApp underline'>
                        <a target="_blank" rel="noreferrer" href={props.project.github} className='GHLink'>
                            <AiFillGithub />
                        </a>

                        <a target="_blank" rel="noreferrer" href={props.project.liveApp} className='GHLink'>
                            <FaGlobe />
                        </a>
                </div>
                {displayModal[0] ?
                    <div className='Modal'>
                        <button onClick={close} className='close-btn'>
                            <AiOutlineClose className='close-x'/>
                        </button>
                        <p>
                            {props.project.description}
                        </p>

                    </div>
                : 
                    <button id={props.project.id} onClick={click} className='view-btn'>
                        <h3 id={props.project.id}>VIEW DESCRIPTION</h3>
                    </button> 
                }
            </div>
        </>
    );
}
export default Project;