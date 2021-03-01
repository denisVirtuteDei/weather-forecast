import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom';

import CenteredImgGrid from '../CenteredImgGrid';
import { signInAnonUser, signInUserViaGoogle } from '../../../actions/user'
import { CENTERED_PAPER_IMG } from '../../../constants';


export const SingInPaper = (props) => {

    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const { from } = location.state || { from: { pathname: "/" } };

    const anonSignIn = () => {
        dispatch(signInAnonUser());
        history.replace(from);
    }

    const googleSignIn = () => {
        dispatch(signInUserViaGoogle());
        history.replace(from);
    }

    useEffect(() => {
        if (user.isLogged) history.push(from);
    }, [user.isLogged])

    if (user.isLogged) return null

    return (
        <CenteredImgGrid className='border-box' container spacing={4} direction='column' justify='center' alignItems='center' img={CENTERED_PAPER_IMG}>
            <div style={{ textAlign: 'center' }}>
                <Grid item xs style={{ margin: 15 }}>
                    <h2>Sign in</h2>
                </Grid>
                <Grid item xs style={{ margin: 15 }}>
                    <button
                        data-testid="signin-anon"
                        onClick={anonSignIn}
                    >
                        Sign In Anonymously
                    </button>
                </Grid>
                <Grid item xs style={{ margin: 15 }}>
                    <button
                        data-testid="signin-via-google"
                        onClick={googleSignIn}
                    >
                        Sign In Via Google Account
                    </button>
                </Grid>
            </div>
        </CenteredImgGrid>
    )
}