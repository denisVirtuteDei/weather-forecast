import styled from 'styled-components'

export const CenteredImgDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  forn-size: ${({ theme }) => theme.fontSize};
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  .weather-forecast-container {
    height: 100%;
    padding: 10px 0;
  }

  @media (max-width: 600px) {
    padding: 10px;
    height: 100vh;
  }
`
