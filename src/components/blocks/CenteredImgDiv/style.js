import styled from 'styled-components'

export const CenteredImgDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.palette.background.default};
  box-shadow: ${({ theme }) => theme.shadows[20]};

  .weather-forecast-container {
    height: 100%;
    padding: 10px 0;
  }

  @media (max-width: 600px) {
    padding: 10px;
    height: 100vh;
  }
`
