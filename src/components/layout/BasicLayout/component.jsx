import React from 'react'

import { ImgContainer } from './style'

import { Container } from '@material-ui/core'

import ErrorAlert from '@/components/blocks/ErrorAlert'

import { childrenPropType } from '@/propTypes'

const BasicLayout = props => (
  <ImgContainer>
    <ErrorAlert />
    <Container className='centered-box' maxWidth='sm'>
      {props.children}
    </Container>
  </ImgContainer>
)

BasicLayout.propTypes = childrenPropType

export default BasicLayout
