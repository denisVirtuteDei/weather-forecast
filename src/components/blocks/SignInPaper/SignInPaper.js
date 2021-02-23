import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom';

import { CentredPaper } from './style'
import MainBox from '../MainBox/MainBox';
import { signInAnonUser } from '../../../actions/user'



export const SingInPaper = (props) => {

    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const { from } = location.state || { from: { pathname: "/" } };


    const signIn = () => {
        dispatch(signInAnonUser());
        history.replace(from);
    }

    useEffect(() => {
        if (user.isLogged) history.push(from);
    }, [user.isLogged])

    if (user.isLogged) return null

    return (
        <MainBox>
            <CentredPaper>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <h1>Sign in</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <button
                            data-testid="signin-anon"
                            onClick={signIn}
                        >
                            Sign In Anonymously
                    </button>
                    </Grid>
                </Grid>
            </CentredPaper>
        </MainBox>
    )
}