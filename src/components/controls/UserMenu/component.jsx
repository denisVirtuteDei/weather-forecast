import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { AppBar, Divider, MenuItem, Typography } from '@material-ui/core'

import { ToolBar } from './style'

import ThemeToggler from '@controls/ThemeToggler'

import {
	singOutUsingFirebase,
	getAuthUserInfo,
} from '@utils/firebase'

import AppbarUserMenu from '../AppbarUserMenu'
import { ROUTE_TO_SIGN_IN } from '@/constants'
import { signOutUserRequest } from '@actions/user'


export const UserMenu = (props) => {

	const history = useHistory()
	const dispatch = useDispatch()
	const currentUser = getAuthUserInfo()

	const handleSignOutClick = () => {
		dispatch(signOutUserRequest())
		singOutUsingFirebase()
		history.push(ROUTE_TO_SIGN_IN)
	}

	return (
		<AppBar position="static">
			<ToolBar >
				<ThemeToggler />

				<div className='user-block' >
					<Typography variant="h6" >
						{currentUser.displayName || currentUser.email || 'Anonymus'}
					</Typography>
					<AppbarUserMenu id='user-menu'>
						<MenuItem onClick={handleSignOutClick}>Log out</MenuItem>
					</AppbarUserMenu>
				</div>

				<div className='user-block-collapse' >
					<AppbarUserMenu id='user-menu-collapse'>
						<MenuItem disabled>
							{currentUser.displayName || currentUser.email || 'Anonymus'}
						</MenuItem>
						<Divider />
						<MenuItem onClick={handleSignOutClick}>Log out</MenuItem>
					</AppbarUserMenu>
				</div>

			</ToolBar>
		</AppBar>
	)
}