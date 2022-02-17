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
                        <nav className='link-container'>
                            <h1 className='title'>Menu</h1>
                            <Link to='about' onClick={click}><a className='link'><h1>
                                About    
                            </h1></a></Link>
                            <Link to='portfolio' onClick={click}><a className='link'><h1>
                                Portfolio    
                            </h1></a></Link>
                            <Link to='resume' onClick={click}><a className='link'><h1>
                                Resume    
                            </h1></a></Link>
                            <Link to='contact' onClick={click}><a className='link'><h1>
                                Contact    
                            </h1></a></Link>
                        </nav>
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