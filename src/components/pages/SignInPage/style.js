import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const FormWrapper = styled.div`
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    margin: 0 90px;

    .link {
      padding-top: 5px;
      a {
        color: ${({ theme }) => theme.palette.text.primary};
        cursor: pointer;
      }
    }
  }

  .sign-in-divider {
    margin: 17px 0;
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
