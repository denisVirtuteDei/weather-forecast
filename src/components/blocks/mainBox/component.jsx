import React from 'react'

import { ImgContainer } from './style'

import { MAIN_CONTAINER_IMG } from '@/constants'
import { Container } from '@material-ui/core'

export default (props) => (
	<ImgContainer img={MAIN_CONTAINER_IMG} >
		<Container
			className='centered-box'
			children={props.children}
			maxWidth='sm'
		/>
	</ImgContainer>
)