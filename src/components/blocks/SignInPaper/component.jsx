import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

import { CircularProgress, Grid, makeStyles } from '@material-ui/core'

import { Div } from '../CurrentDateTime/style'
import CenteredImgGrid from '../CenteredImgGrid'

import { CENTERED_PAPER_IMG } from '../../../constants'
import { signInUserWithEmail, signInUserWithGoogle } from '../../../actions/user'


const useStyles = makeStyles((theme) => ({
    root: {
        justify: 'center',
        textAlign: 'center',
        alignItems: 'center',
        direction: 'column',
        // Match [0, md + 1)
        //       [0, lg)
        //       [0, 1280px)
        [theme.breakpoints.down('sm')]: {
            width: 600,
        },

    },
}))


export const SingInPaper = (props) => {

    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false); 
    const { from } = location.state || { from: { pathname: "/" } }

    const handleSignInAnonymously = () => {
        //dispatch(signInUserWithEmail(emain,password))
        //history.push(from)
        //history.replace(from)
    }

    const handleSignInWithGoogleAccount = () => {
        dispatch(signInUserWithGoogle())
        history.push(from)
        //history.replace(from)
    }

    return (
        <CenteredImgGrid
            container
            spacing={4}
            className={classes.root}
            img={CENTERED_PAPER_IMG}
        >
            <Grid className='grid-item-margin' item xs>
                <h2>authorization</h2>
            </Grid>
            <Grid className='grid-item-margin' item xs>
                <button
                    data-testid="signin-anon"
                    //disabled={isLoading}
                    //onClick={handleSignInAnonymously}
                >
                    Sign In
                </button>
            </Grid>
            <Grid className='grid-item-margin' item xs>
                <button
                    data-testid="signin-via-google"
                    disabled={isLoading}
                    onClick={handleSignInWithGoogleAccount}
                >
                    Sign In Via Google Account
                </button>
            </Grid>
        </CenteredImgGrid>
    )
}