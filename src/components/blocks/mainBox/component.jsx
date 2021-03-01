import React from 'react'

import { Container } from '@material-ui/core';
import { ImgContainer, containerStyle } from './style';

import { MAIN_CONTAINER_IMG } from '../../../constants';

export default (props) => (
    <Container style={containerStyle}>
        <ImgContainer children={props.children} img={MAIN_CONTAINER_IMG} />
    </Container>
)