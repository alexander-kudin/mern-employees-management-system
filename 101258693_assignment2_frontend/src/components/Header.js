import React from 'react';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Header = () => {

    return (
        <Typography variant="body2" color="text.secondary" align="center" sx={{pt: 4}}>
            {'Copyright © '}
            <Link color="inherit" href="http://alexanderkudin.ru/">Alexander Kudin</Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Header;
