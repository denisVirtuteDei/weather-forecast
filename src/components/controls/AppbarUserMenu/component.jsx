import React, { useState } from 'react'

import Menu from '@material-ui/core/Menu'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'

export default (props) => {

	const [anchorEl, setAnchorEl] = useState(null)

	const isMenuOpen = Boolean(anchorEl)

	const handleMenuClose = () => { setAnchorEl(null) }
	const handleMenuClick = event => { setAnchorEl(event.currentTarget) }

	return (
		<>
			<IconButton
				aria-label="account of current user"
				aria-controls="menu-appbar"
				aria-haspopup="true"
				onClick={handleMenuClick}
				color="inherit"
			>
				<AccountCircle />
			</IconButton>
			<Menu
				id="menu-appbar"
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={isMenuOpen}
				onClose={handleMenuClose}
			>
				{props.children}
			</Menu>
		</>
	)
}