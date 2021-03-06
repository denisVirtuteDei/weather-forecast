import React from 'react';
import styled from 'styled-components';

import { Menu, MenuItem, withStyles } from '@material-ui/core';

export const Div = styled.div`
    margin-top: 10;
    margin-right: 10;
`

export const StyledMenu = withStyles({
    paper: { border: '1px solid #d3d4d5', }
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

export const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.white,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.black,
            },
        },
    },
}))(MenuItem);