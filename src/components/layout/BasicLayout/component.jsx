import React from 'react'

import { Container } from '@material-ui/core'

import ErrorAlert from '@/components/blocks/ErrorAlert'

import { ImgContainer } from './style'

const BasicLayout = props => (
  <ImgContainer>
    <ErrorAlert />
    <Container className='centered-box' maxWidth='sm'>
      {props.children}
    </Container>
  </ImgContainer>
)

export default BasicLayout
