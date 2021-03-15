import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

import {
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    TextField,
} from '@material-ui/core'

import CenteredImgDiv from '../CenteredImgDiv'

import { DivWrapper, GoogleSignInButton } from './style'

import {
    setUserAuthError,
    signInUserWithEmail,
    signInUserWithGoogle
} from '../../../actions/user'


export const SingInPaper = (props) => {

    const history = useHistory()
    const location = useLocation()
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user)
    const { from } = location.state || { from: { pathname: '/' } }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (currentUser.isLogged) history.push(from)
    }, [currentUser.isLogged])

    useEffect(() => {
        if (currentUser.isError) {
            switch (currentUser.errorInfo.code) {
                case 'auth/invalid-email':
                    console.log(currentUser.errorInfo.message, 'Неверный email или пароль')
                    break;
                case 'auth/wrong-password':
                    console.log(currentUser.errorInfo.message, 'Неверный email или пароль')
                    break;
                case 'auth/user-not-found':
                    console.log(currentUser.errorInfo.message, 'Неверный email или пароль')
                    break;
                default: break;
            }
        }

        return (() => { dispatch(setUserAuthError({ flag: false, error: '' })) })
    }, [currentUser.isError])


    const handleOnSubmitFormSignIn = e => {
        e.preventDefault()
        dispatch(signInUserWithEmail({ email, password }))
    }

    const handleSignInWithGoogleAccount = () => {
        dispatch(signInUserWithGoogle())
    }

    if (currentUser.isLogged) return null

    return (
        <CenteredImgDiv>
            <DivWrapper>
                <h1>Welcome</h1>
                <form className='form' onSubmit={handleOnSubmitFormSignIn}>
                    <TextField
                        margin='normal'
                        variant='outlined'
                        required
                        fullWidth
                        id='email'
                        name='email'
                        label='Email Address'
                        autoComplete='email'
                        autoFocus
                        onChange={({ target }) => { setEmail(target.value) }}
                    />
                    <TextField
                        margin='normal'
                        variant='outlined'
                        required
                        fullWidth
                        id='password'
                        name='password'
                        type='password'
                        label='Password'
                        autoComplete='current-password'
                        onChange={({ target }) => { setPassword(target.value) }}
                    />
                    <FormControlLabel
                        control={<Checkbox value='remember' color='primary' />}
                        label='Remember me'
                    />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                    >
                        Log in
                    </Button>
                </form>
                <Divider className='sign-in-divider' variant='middle' />
                <GoogleSignInButton
                    className='google-sign-in'
                    variant='contained'
                    color='secondary'
                    onClick={handleSignInWithGoogleAccount}
                >
                    Google sign-in
                </GoogleSignInButton>
            </DivWrapper>
        </CenteredImgDiv>
    )
}