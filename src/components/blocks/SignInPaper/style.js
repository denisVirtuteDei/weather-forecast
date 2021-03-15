import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const DivWrapper = styled.div`
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({theme}) => theme.text};
    forn-size: 0.875rem;

    form {
        margin: 0 90px;
    }

    .sign-in-divider {
        margin: 17px 0;
        color: black;
        width: 60%;
    }

    .google-sign-in {
        width: 70%;
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
