import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Project(props) {
    
    return (
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
            <div>
                {props.project.tech.map(technologyUsed => 
                     <h2>{technologyUsed}</h2>
                )}
            </div>
            <button className='view-btn'>
                <h2>VIEW</h2>
            </button>
        </div>
    );
}
export default Project;