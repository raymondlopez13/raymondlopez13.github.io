import React from 'react';

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
            <h1 className='h1-nav'>Raymond Lopez</h1>
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