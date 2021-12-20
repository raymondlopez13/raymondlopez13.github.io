import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Item } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Nav() {
    const menu = () => {
        const links = document.getElementById('nav-link-container');
        links.setAttribute('style', 'display: flex !important');
    }
    const close = () => {
        const links = document.getElementById('nav-link-container');
        if(window.screen.width < 901) links.setAttribute('style', 'display: none !important');
    }
    return (
        <Grid container className='nav'>
            <Grid item xs={11} md={6} className='nav-link-title-container'>
                <Link to='/' className='nav-link-title'>
                    Raymond Lopez
                </Link>
            </Grid>
            <Grid container item xs={12} md={6} spacing={2} className='nav-link-container' id='nav-link-container'>
                <Grid item xs={12} md={6} className='close-icon-container' onClick={close}>
                    <CloseIcon />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Link to='/' className='nav-link' onClick={close}>
                        About
                    </Link>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Link to='/portfolio' className='nav-link' onClick={close}>
                        Portfolio
                    </Link>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Link to='/resume' className='nav-link' onClick={close}>
                        Resume
                    </Link>
                </Grid>
            </Grid>
            <Grid item xs={1} className='menu-icon-container' onClick={menu}>
                <MenuIcon />
            </Grid>
        </Grid>
    )
}
export default Nav;