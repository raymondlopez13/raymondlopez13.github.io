import React from 'react';
import {Link} from 'react-router-dom'
function Landing() {
    
    return (
        <div className='container'>
            <div className='top-left'>
                <img src='images/headshot.jpg' alt='Headshot'/>
                <h1>Raymond Lopez</h1>
            </div>
            <div className='top-right'>

            </div>
            <div className='bottom-left'>

            </div>
            <div className='bottom-right'>
                <h1>Menu</h1>
                <h2><Link to='about'>About</Link></h2>
                <h2><Link to='portfolio'>Portfolio</Link></h2>
                <h2><Link to='resume'>Resume</Link></h2>
                <h2><Link to='contact'>Contact</Link></h2>
            </div>
        </div>
    )
}
export default Landing;