import { useState } from 'react';

import {AppBar, Toolbar, styled, Box, Typography, InputBase} from '@mui/material';

import { Menu, BookmarkAdd, ExpandMore } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { routePath } from '../../constants/route';


import { logoURL } from '../../constants/constant';

//components
import HeaderMenu from './HeaderMenu';

const StyledToolbar = styled(Toolbar)`
background: #121212;
min-height:56px !important;
padding: 0 115px !important;
justify-content: space-between;
& > * {
    padding: 0 16px;
}
& > div {
    display: flex;
    align-item: center;
    cursor: pointer;
    & > p {
        font-size: 14px;
        fontt-width: 600;
    }
}
& > p {
    font-size: 14px;
    fontt-width: 600;

}
`;

const InputSearchField = styled(InputBase)`
 background: #FFFFFF;
 height: 30px;
 width: 53%;
 border-radius: 5px;

`


const Logo = styled('img')({
    width: 64
})



const Header = () => {


    const [open, setOpen] = useState(null);

    const navigate = useNavigate();

    const handleClick = (e) => {
        setOpen(e.currentTarget)
    }

    const handleClose = () => {
        setOpen(null);
    }

    return (
        <AppBar position='static'>
            <StyledToolbar>
                <Logo src={logoURL} alt='logo' onClick={() => navigate(routePath.home)} />
                <Box onClick={handleClick}>
                    <Menu />
                    <Typography>Menu</Typography>
                </Box>
                <HeaderMenu open={open} handleClose={handleClose} />
                <InputSearchField />
                <Typography>IMDB<Box component="span" >Pro</Box></Typography>
                <Box>
                    <BookmarkAdd />
                    <Typography>watchlist</Typography>
                </Box>

                <Typography>Sign In</Typography>
                <Box>
                <Typography>En</Typography>
                <ExpandMore />
                </Box>
            </StyledToolbar>
        </AppBar>
    )
}

export default Header;