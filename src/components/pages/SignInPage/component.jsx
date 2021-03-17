import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

import {
    removeUserAuthError,
    signUpUserRequest,
    signInUserWithEmail,
    signInUserWithGoogle,
} from '@actions/user'

import {
    isEqual,
    emailValidator,
    passwordLengthValidator,
} from '@utils/validators'

import {
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    Link,
    TextField,
} from '@material-ui/core'

import CenteredImgDiv from '@blocks/CenteredImgDiv'

import { FormWrapper, GoogleSignInButton } from './style'


export const SingInPage = (props) => {

    const currentUser = useSelector(state => state.user)

    if (currentUser.isLogged) return null

    const history = useHistory()
    const location = useLocation()
    const dispatch = useDispatch()

    const { from } = location.state || { from: { pathname: '/' } }

    const [isSignUp, setIsSignUp] = useState(false)
    const [isEmailValid, setIsEmailValid] = useState(null)
    const [isPasswordsEqual, setIsPasswordsEqual] = useState(null)
    const [isPasswordLengthValid, setIsPasswordLengthValid] = useState(null)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmationPassword, setConfirmationPassword] = useState('')

    useEffect(() => {
        if (currentUser.isLogged) history.push(from)
    }, [currentUser.isLogged])

    useEffect(() => {
        setIsEmailValid(emailValidator(email))
    }, [email])

    useEffect(() => {
        setIsPasswordLengthValid(passwordLengthValidator(password))
        if (isSignUp) {
            setIsPasswordsEqual(isEqual(password, confirmationPassword))
        }
    }, [password, confirmationPassword])

    const handleEmailOnChange = ({ target }) => {
        setEmail(target.value)
    }

    const handlePasswordOnChange = ({ target }) => {
        setPassword(target.value)
    }

    const handleConfirmationPasswordOnChange = ({ target }) => {
        setConfirmationPassword(target.value)
    }

    const handleSignUpClick = () => {
        setIsSignUp(() => !isSignUp)
        dispatch(removeUserAuthError())
    }

    const handleSignInWithGoogleAccount = () => {
        dispatch(signInUserWithGoogle())
        dispatch(removeUserAuthError())
    }

    const handleOnSubmitFormSignIn = e => {
        e.preventDefault()
        if (
            isSignUp &&
            isEmailValid &&
            isPasswordsEqual &&
            isPasswordLengthValid
        ) {
            dispatch(signUpUserRequest(email, password))
            setIsSignUp(false)
        } else if (isEmailValid && isPasswordLengthValid) {
            dispatch(signInUserWithEmail(email, password))
        }
    }

    return (
        <CenteredImgDiv>
            <FormWrapper>
                <h1>Welcome</h1>
                <form className='form' onSubmit={handleOnSubmitFormSignIn}>
                    <TextField
                        error={!isEmailValid}
                        required
                        fullWidth
                        autoFocus
                        margin='normal'
                        variant='outlined'
                        id='email'
                        label='Email Address'
                        value={email}
                        onChange={handleEmailOnChange}
                        helperText={
                            !isEmailValid
                                ? 'Incorrect email'
                                : ''
                        }
                    />
                    <TextField
                        error={
                            !isPasswordLengthValid || (
                                isSignUp
                                    ? !isPasswordsEqual
                                    : true
                            )
                        }
                        helperText={
                            !isPasswordLengthValid
                                ? 'Password length less than 6'
                                : isSignUp && !isPasswordsEqual
                                    ? 'Passwords aren\'t equal'
                                    : ''
                        }
                        required
                        fullWidth
                        margin='normal'
                        variant='outlined'
                        id='password'
                        type='password'
                        label='Password'
                        value={password}
                        onChange={handlePasswordOnChange}
                    />
                    {
                        isSignUp ? (
                            <TextField
                                error={
                                    !isPasswordLengthValid || (
                                        isSignUp
                                            ? !isPasswordsEqual
                                            : true
                                    )
                                }
                                helperText={
                                    !isPasswordsEqual
                                        ? 'Passwords aren\'t equal'
                                        : ''
                                }
                                required
                                fullWidth
                                margin='normal'
                                variant='outlined'
                                type='password'
                                id='confirmationPassword'
                                label='Confirm password'
                                value={confirmationPassword}
                                onChange={handleConfirmationPasswordOnChange}
                            />
                        ) : (
                            <FormControlLabel
                                control={<Checkbox value='remember' color='primary' />}
                                label='Remember me'
                            />
                        )
                    }
                    <Button
                        fullWidth
                        type='submit'
                        color='primary'
                        variant='contained'
                    >
                        {
                            isSignUp ? 'Sign up' : 'Log in'
                        }
                    </Button>
                    <Link href="#" variant="body2" onClick={handleSignUpClick}>
                        {
                            isSignUp
                                ? `Already have an account? Sign in`
                                : `Don't have an account? Sign Up`
                        }
                    </Link>
                </form>
                {
                    !isSignUp ? (
                        <>
                            <Divider className='sign-in-divider' variant='middle' />
                            <GoogleSignInButton
                                className='google-sign-in'
                                variant='contained'
                                color='secondary'
                                onClick={handleSignInWithGoogleAccount}
                            >
                                Google sign-in
                        </GoogleSignInButton>
                        </>
                    ) : (null)
                }
            </FormWrapper>
        </CenteredImgDiv>
    )
}