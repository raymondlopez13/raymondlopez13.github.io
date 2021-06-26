import React from 'react';
import headshot from '../../assets/Headshot-min.jpg';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Nav(props) {
    const links = [
        {
            name: 'About Me',
            id: '#about-me',
        },
        {
            name: 'Portfolio',
            id: '#portfolio',
        },
        {
            name: 'Contact',
            id: '#contact',
        },
        {
            name: 'Resume',
            id: '#resume',
        }
    ]
    return (
        <nav>
            <div className="imgAndName">
                <img src={headshot} alt="headshot" className='navPhoto'/>
                <h1 className='h1-nav'>Raymond Lopez</h1>
                <section id="footer" className='footer'>
            <a href="https://github.com/raymondlopez13" target='_blank' rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/raymond-lopez-b8473a1ba/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com/Raylo1998" target='_blank' rel="noreferrer"><FaTwitter /></a>
        </section>
            </div>
            <ul className='navLinks'>
                {links.map((link) => (
                    <li key={link.name}>
                        <a  className='navLink'href={link.id} id={link.id} onClick={() => (
                            props.setPage(link.name)
                            )
                        }>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Nav;