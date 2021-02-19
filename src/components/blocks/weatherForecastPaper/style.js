import styled from 'styled-components'
import { Grid, Paper } from '@material-ui/core'

export const MyGrid = styled(Grid)`
    width: 700px;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 3px 3px 7px gray;
    background-color: #FFF570;
`