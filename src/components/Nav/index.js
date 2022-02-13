import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Nav() {
    const location = useLocation();
    const [ navOpen, setNavOpen ] = useState(false);
    useEffect(() => {
        console.log(location.pathname);
    }, [location])
    const click = () => {
        if(navOpen) {
            setNavOpen(false);
        } else {
            setNavOpen(true);
        }
    }
    return (
        <>
            {location.pathname === '/' ? null : (
                <>
                {navOpen ?
                    <div className='nav'>
                        <button className='close-menu-btn' onClick={click}>
                            <AiOutlineClose/>
                        </button>
                        <div className='link-container'>
                            These are some links
                        </div>
                    </div>
                    :
                    <button className='menu-btn' onClick={click}>
                        <AiOutlineMenu/>
                    </button>
                }
                </>  
            )}
        </>
    )
}
export default Nav;