import styled from 'styled-components'
import { Grid } from '@material-ui/core'

export const CenteredGrid = styled(Grid)`
    width: 900px;
    height: 650px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 3px 3px 7px gray;
    background-color: #FFF570;
`