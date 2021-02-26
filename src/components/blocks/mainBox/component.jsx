import React from 'react'
import { Container } from '@material-ui/core';
import {ImgContainer} from './style';
import { MAIN_CONTAINER_IMG } from '../../../constants';

export default (props) => (
    <Container style={{padding: 0, maxWidth: 'none'}}>
        <ImgContainer children={props.children} img={MAIN_CONTAINER_IMG}/>
    </Container>
)