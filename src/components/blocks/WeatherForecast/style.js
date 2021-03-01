import styled from 'styled-components'
import { Grid } from '@material-ui/core';

export const ReducedGrid = styled(Grid)`
    max-height: ${props => props.maxheight};
`