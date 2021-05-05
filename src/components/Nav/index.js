import React from 'react';

function Nav() {
    const links = [
        {
            name: 'About Me',
            id: '#about-me'
        },
        {
            name: 'Portfolio',
            id: '#portfolio'
        },
        {
            name: 'Contact',
            id: '#contact'
        },
        {
            name: 'Resume',
            id: '#resume'
        }
    ]
    return (
        <nav>
            <ul>
                {links.map((link) => (
                    <li>
                        <a href={link.id} id={link.id}>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Nav;