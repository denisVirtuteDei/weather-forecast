import React from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button, ListItemText } from '@material-ui/core';

import { Div } from './style';
import { StyledMenu, StyledMenuItem } from './style';

import { singOutUsingFirebase } from '../../../utils/firebase';

import { signOutUser } from '../../../actions/user';


export const UserMenu = (props) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSignOutClick = () => {
        setAnchorEl(null);

        dispatch(signOutUser());
        singOutUsingFirebase();

        history.push('/signIn');
    }

    return (
        <Div>
            <Button
                aria-controls='customized-menu'
                aria-haspopup='true'
                variant='contained'
                color='secondary'
                onClick={handleClick}
            >
                {user.name || user.email || 'Anonymus'}
            </Button>
            <StyledMenu
                id='customized-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem onClick={handleSignOutClick}>
                    <ListItemText primary='Logout' />
                </StyledMenuItem>
            </StyledMenu>
        </Div>
    )
}