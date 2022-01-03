import React from 'react';
import { Grid } from '@mui/material';
import PetPlace_Home from '../../../assets/PetPlace-Home.png'
import PetPlace_LoginHome from '../../../assets/PetPlace_LoginHome.png'
import PetPlace_PetProfile from '../../../assets/PetPlace_PetProfile.png'
import PetPlace_EditPet from '../../../assets/PetPlace_EditPet.png'
import Box from '@mui/material/Box';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
function AboutFeaturedProject() {
    const images = [
        {
            label: '',
            imgPath: PetPlace_Home
        },
        {
            label: '',
            imgPath: PetPlace_LoginHome
        },
        {
            label: '',
            imgPath: PetPlace_PetProfile
        },
        {
            label: '',
            imgPath: PetPlace_EditPet
        },
    ];
    return (
        <Grid container md={12} id='about-featured-project'>
            <h2>Featured Project</h2>
            <Carousel infiniteLoop={true} autoPlay={true}>
                <Box
                    component='img'
                    sx={{
                        height: 400,
                        display: 'block',
                        maxWidth: 700,
                        overflow: 'hidden',
                        width: '100%'
                    }}
                    src={images[0].imgPath}
                    alt={images[0].label}
                />
                <Box
                    component='img'
                    sx={{
                        height: 400,
                        display: 'block',
                        maxWidth: 700,
                        overflow: 'hidden',
                        width: '100%'
                    }}
                    src={images[1].imgPath}
                    alt={images[1].label}
                />
                <Box
                    component='img'
                    sx={{
                        height: 400,
                        display: 'block',
                        maxWidth: 700,
                        overflow: 'hidden',
                        width: '100%'
                    }}
                    src={images[2].imgPath}
                    alt={images[2].label}
                />
                <Box
                    component='img'
                    sx={{
                        height: 400,
                        display: 'block',
                        maxWidth: 700,
                        overflow: 'hidden',
                        width: '100%'
                    }}
                    src={images[3].imgPath}
                    alt={images[3].label}
                />
            </Carousel>
            <h2>My Pets</h2>
            <p>My pets is an app that allows users to keep track of their pets! Users can create a profile and create pets. Users are able to add information for their pets such as weight, breed, vaccinations, medications, and even a pet photo!</p>
            <p>This app was built using a React front end, and Node on the backend. The backend uses express, mongoose and MongoDB. The photos are uploaded to AWS S3 bucket.</p>
            <p><a href='https://github.com/raymondlopez13/Pet-Social' target='_blank' rel='noreferrer'>Github</a></p>
            <p><a href='https://my-pets-raymondlopez13.herokuapp.com/' target='_blank' rel='noreferrer'>Live App</a></p>
        </Grid>
    )
}
export default AboutFeaturedProject;