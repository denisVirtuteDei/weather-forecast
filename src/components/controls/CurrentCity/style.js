import styled from 'styled-components'

export const GeopifyWrapper = styled.div`
  padding-top: 10px;

  .geocoder-container {
    box-sizing: content-box;
  }

  .geoapify-autocomplete-input {
    border-radius: unset;
    color: ${({ theme }) => theme.palette.primary.contrastText};
    background-color: ${({ theme }) => theme.palette.primary.light};
  }

  .geoapify-autocomplete-items {
    color: ${({ theme }) => theme.palette.text.primary};
    background-color: ${({ theme }) => theme.palette.background.paper};

    .geoapify-autocomplete-item.secondary-part {
      color: ${({ theme }) => theme.palette.text.primary};
    }
  }
`
