import React from 'react';
import { CentredPaper } from './style'
import { Grid } from '@material-ui/core';


export const SingInPaper = (props) => {

    return (
        <CentredPaper>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <h1>Sign in</h1>
                </Grid>
                <Grid item xs={12}>
                    <button
                        data-testid="signin-anon"
                        onClick={() => { debugger; props.firebase.firebase.auth().signInAnonymously(); }}
                    >
                        Sign In Anonymously
                    </button>
                </Grid>
            </Grid>
        </CentredPaper>
    )
}