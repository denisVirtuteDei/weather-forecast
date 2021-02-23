import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, ListItemText } from '@material-ui/core';
import { StyledMenu, StyledMenuItem } from './style';
import { singOutUsingFirebase } from '../../../firebase';
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
        handleClose();

        dispatch(signOutUser());
        singOutUsingFirebase();
        
        history.push("/signIn");
    }

    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color='secondary'
                onClick={handleClick}
            >
                {
                    user.name
                }
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem onClick={handleSignOutClick}>
                    <ListItemText primary="Logout" />
                </StyledMenuItem>
            </StyledMenu>
        </div>
    )
}