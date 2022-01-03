import React from 'react';
import { Grid } from '@mui/material';
function AboutResume() {
    
    return (
        <Grid container md={12} id='about-resume'>
            <Grid item md={12} className='about-resume-header'>
                <h2>Resume</h2>
            </Grid>
            <Grid container item md={12} className='about-resume-row'>
                <Grid item md={3} className='about-resume-topic'>
                    <h2>
                    Languages
                    </h2>
                </Grid>
                <Grid item md={9}  className='about-resume-abilities'>
                    <h3>
                        JavaScript(intermediate), Python(beginner), Java(complete noob)
                    </h3>
                </Grid>
                <Grid container item md={12} className='about-resume-row'>
                    <Grid item md={3} className='about-resume-topic'>
                        <h2>
                            Databases
                        </h2>
                    </Grid>
                    <Grid item md={9}  className='about-resume-abilities'>
                        <h3>
                            SQL(Postgres, mySQL, SQLite3) and NoSQL(MongoDB)
                        </h3>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default AboutResume;