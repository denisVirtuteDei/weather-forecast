import styled from 'styled-components'

import { Menu, MenuItem } from '@material-ui/core'

export const FormWrapper = styled.div``

export const CustomMenu = styled(Menu)`
    paper {
        background-color: #d3d4d5;
    }
`

export const CustomMenuItem = styled(MenuItem)`

    &:focus {
        background-color: white;
        & .MuiListItemIcon-root, & .MuiListItemText-primary {
            color: black;
        }
    }
`