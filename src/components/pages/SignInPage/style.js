import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const FormWrapper = styled.div`
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  forn-size: ${({ theme }) => theme.fontSize};

  form {
    margin: 0 90px;

    .MuiFormLabel-root {
      color: currentColor;
    }

    .MuiInputBase-root {
      color: currentColor;
      .MuiOutlinedInput-input {
        &:focus {
          color: currentColor;
        }
      }
    }

    a {
      justify-content: flex-end;
    }
  }

  .sign-in-divider {
    margin: 17px 0;
    color: ${({theme}) => theme.divider};
    width: 60%;
  }

  .google-sign-in {
    width: 69%;
  }

  @media (max-width: 600px) {
    form {
      width: 90%;
    }

    .google-sign-in {
      width: 90%;
    }
  }
`

export const GoogleSignInButton = styled(Button)``
