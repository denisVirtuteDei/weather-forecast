import React from 'react'

import { Container } from '@material-ui/core'

import ErrorAlert from '@/components/blocks/ErrorAlert'

import { ImgContainer } from './style'

export default (props) => (
	<ImgContainer >
		<ErrorAlert />
		<Container className='centered-box' maxWidth='sm'>
			{props.children}
		</Container>
	</ImgContainer>
)