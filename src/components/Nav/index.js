import React from 'react';
import headshot from '../../assets/Headshot-min.jpg';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Nav(props) {

    return (
        <nav>
            <div className="imgAndName">
                <img src={headshot} alt="headshot" className='navPhoto animate__animated animate__rotateIn'/>
                <h1 className='h1-nav animate__animated animate__lightSpeedInLeft'>Raymond Lopez</h1>
        <section id="footer" className='footer'>
            <a href="https://github.com/raymondlopez13" target='_blank' rel="noreferrer" className='animate__animated animate__bounceIn foot1'><FaGithub /></a>
            <a href="https://www.linkedin.com/in/raymond-lopez-b8473a1ba/" target='_blank' rel="noreferrer" className='animate__animated animate__bounceIn foot2'><FaLinkedin /></a>
            <a href="https://twitter.com/Raylo1998" target='_blank' rel="noreferrer" className='animate__animated animate__bounceIn foot3'><FaTwitter /></a>
            <a href='mailto:raymondlopez13@yahoo.com' className='animate__animated animate__bounceIn foot4'><FaEnvelope /></a>
            
        </section>
            </div>
            <ul className='navLinks'> 
                <li>
                    <a  className='navLink animate__animated animate__fadeInDown'href='#about-me' id='about-me' onClick={() => {
                        props.setPage('About Me');
                    }}>
                            About Me
                    </a>
                </li>
                <li>
                    <a  className='navLink animate__animated animate__fadeInDown'href='#resume' id='resume' onClick={() => (
                            props.setPage('Resume')
                            )
                        }>
                            Resume
                    </a>
                </li>
                <li>
                    <a  className='navLink animate__animated animate__fadeInDown'href='#portfolio' id='portfolio' onClick={() => (
                            props.setPage('Portfolio')
                            )
                        }>
                            Portfolio
                    </a>
                </li>
                
            </ul>
        </nav>
    )
}
export default Nav;