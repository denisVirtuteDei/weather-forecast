import styled from 'styled-components'
import { Grid } from '@material-ui/core';

export const ReducedGrid = styled(Grid)`
    max-height: ${props => props.maxheight};

    .geo-info-container {
        margin: 20px 0;
    }

    .daily-forecast-container {
        background-color: rgba(0,0,0,.25);
    }

    .settings-block-divider {
        padding: 10px 0;
        color: black;
        margin: 0 10px;

        hr {
            width: 100%;
        }
    }

    .datetime-container {
        margin-left: 10px; 
    }

    .current-city-container {
        padding-top: 10px;
    }
`