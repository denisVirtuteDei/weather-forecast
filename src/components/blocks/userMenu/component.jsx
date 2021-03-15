import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { Button } from '@material-ui/core'

import { FormWrapper, CustomMenuItem, CustomMenu } from './style'

import {
    singOutUsingFirebase,
    getAuthUserInfo
} from '../../../utils/firebase'

import { ROUTE_TO_SIGN_IN } from '../../../constants'
import { signOutUserRequest } from '../../../actions/user'


export const UserMenu = (props) => {

    const history = useHistory()
    const dispatch = useDispatch()
    const currentUser = getAuthUserInfo()
    const [anchorEl, setAnchorEl] = useState(null)

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleSignOutClick = () => {
        setAnchorEl(null)
        dispatch(signOutUserRequest())
        singOutUsingFirebase()
        history.push(ROUTE_TO_SIGN_IN)
    }

    return (
        <FormWrapper>
            <Button
                aria-controls='customized-menu'
                aria-haspopup='true'
                variant='contained'
                color='secondary'
                onClick={handleMenuClick}
            >
                {currentUser.displayName || currentUser.email || 'Anonymus'}
            </Button>
            <CustomMenu
                elevation={0}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <CustomMenuItem onClick={handleSignOutClick}>Logout</CustomMenuItem>
            </CustomMenu>
        </FormWrapper >
    )
}