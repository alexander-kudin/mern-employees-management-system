import React from 'react';

import Typography from '@mui/material/Typography';
import { AppBar } from '@mui/material';
import { Toolbar } from '@material-ui/core';

const Header = () => {

    return (
        <AppBar position="absolute">
            <Toolbar>
                <Typography component="h1" variant="h6">Assignment 2</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
