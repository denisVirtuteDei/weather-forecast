import styled from 'styled-components'

import MaterialToolBar from '@material-ui/core/Toolbar'

export const ToolBar = styled(MaterialToolBar)`
  display: flex;
  justify-content: space-between;

  .user-block {
    display: flex;
    align-items: center;
  }

  .user-block-collapse {
    display: none;
  }

  @media (max-width: 600px) {
    .user-block {
      display: none;
    }
    .user-block-collapse {
      display: block;
    }
  }
`
