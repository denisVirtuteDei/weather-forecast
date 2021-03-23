import styled from 'styled-components'
import { Grid } from '@material-ui/core'

export const ReducedGrid = styled(Grid)`
  .geo-info-container {
    margin: 20px 0;
  }

  .daily-forecast-container {
    background-color: ${({ theme }) => theme.palette.action.disabledBackground};
  }

  .settings-block-divider {
    padding: 10px 0;
    margin: 0 10px;

    hr {
      width: 100%;
    }
  }

  .datetime-container {
    margin-left: 10px;
  }
`
