import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FooterImg from '../assets/footerImg.png';
import { Grid } from '@material-ui/core';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            {new Date().getFullYear()}
            <Typography color="inherit" display='inline'>
                F2EWiNWiN. All rights reserved.
            </Typography>
            {'.'}
        </Typography>
    );
}

function Footer() {

    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }} >

            <Grid container xs={12}>
                <Grid item xs={0} sm={5} />
                <Grid item xs={3} sm={2}>
                    <img alt='footImg' src={FooterImg} width='300px' height='auto' />
                </Grid>
                <Grid item xs={3} sm={3}>
                    <Copyright />
                </Grid>

            </Grid>
        </Box>
    );
}

export default Footer;