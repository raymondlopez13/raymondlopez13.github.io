import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
    
    return (
        <section id="footer" className='footer'>
            <a href="https://github.com/raymondlopez13" target='_blank' rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/raymond-lopez-b8473a1ba/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com/Raylo1998" target='_blank' rel="noreferrer"><FaTwitter /></a>
        </section>
    )
}
export default Footer;