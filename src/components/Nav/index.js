import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Item } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Nav() {
    const menu = () => {
        const links = document.getElementsByClassName('nav-link-container')[0];
        links.setAttribute('style', 'display: flex !important');
    }
    const close = () => {
        const links = document.getElementsByClassName('nav-link-container')[0];
        links.setAttribute('style', 'display: none !important');
    }
    return (
        <Grid container className='nav'>
            <Grid item xs={11} md={6} className='nav-link-title-container'>
                <Link to='/' className='nav-link-title'>
                    Raymond Lopez
                </Link>
            </Grid>
            <Grid container item xs={12} md={6} spacing={2} className='nav-link-container'>
                <Grid item xs={12} md={6} className='close-icon-container' onClick={close}>
                    <CloseIcon />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Link to='/portfolio' className='nav-link'>
                        Portfolio
                    </Link>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Link to='/resume' className='nav-link'>
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