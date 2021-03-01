import styled from 'styled-components'
import { Grid } from '@material-ui/core';

export const CenteredImgGrid = styled(Grid)`
    width: 900px;
    height: 650px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #F0E68C;


    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

`
//background-image: url(${props => props.img});
