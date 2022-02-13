import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
    const location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
    }, [location])
    const menu = () => {
        const links = document.getElementById('nav-link-container');
        links.setAttribute('style', 'display: flex !important');
    }
    const close = () => {
        const links = document.getElementById('nav-link-container');
        if(window.screen.width < 901) links.setAttribute('style', 'display: none !important');
    }
    return (
        <>
            {location.pathname === '/' ? null : (
                <nav>
                    Tis going to be the navbar
                </nav>
            )}
        </>
    )
}
export default Nav;