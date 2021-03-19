import styled from 'styled-components'

import MaterialSwitch from '@material-ui/core/Switch'
import MaterialFormControlLabel from '@material-ui/core/FormControlLabel'

export const FormControlLabel = styled(MaterialFormControlLabel)`
    background: ${({ theme }) => theme.background};
    font-size: 0.8rem;
    padding: 0.6rem;
`
export const Switch = styled(MaterialSwitch)`

    .MuiSwitch-switchBase {
        color: #f50000;

        &.Mui-checked {
            color: #fff700;
        }

        &.Mui-checked + .MuiSwitch-track {
            background-color: white;
        }
    }
`