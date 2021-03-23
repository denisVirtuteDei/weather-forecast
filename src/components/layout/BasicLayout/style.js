import styled from 'styled-components'

import { MAIN_CONTAINER_IMG } from '@/constants'

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-filter: blur(5px);
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${MAIN_CONTAINER_IMG});

  .centered-box {
    padding: 0;
  }
`
