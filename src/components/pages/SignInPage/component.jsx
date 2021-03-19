import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import {
	Button,
	Checkbox,
	Divider,
	FormControlLabel,
	Link,
	TextField,
} from '@material-ui/core'

import CenteredImgDiv from '@/components/blocks/CenteredImgDiv'

import { FormWrapper, GoogleSignInButton } from './style'

import { removeErrorInfo } from '@/actions/error'
import {
	signUpUserRequest,
	signInUserWithEmail,
	signInUserWithGoogle,
} from '@/actions/user'

import {
	isEqual,
	emailValidator,
	passwordLengthValidator,
} from '@/utils/validators'


const SingInPage = (props) => {
	const dispatch = useDispatch()
	const currentUser = useSelector(state => state.user)

	const [isSignUp, setIsSignUp] = useState(false)
	const [isEmailValid, setIsEmailValid] = useState(null)
	const [isPasswordsEqual, setIsPasswordsEqual] = useState(null)
	const [isPasswordLengthValid, setIsPasswordLengthValid] = useState(null)

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmationPassword, setConfirmationPassword] = useState('')

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
		setEmail('')
		setPassword('')
		setConfirmationPassword('')
		dispatch(removeErrorInfo())
	}

	const handleSignInWithGoogleAccount = () => {
		dispatch(signInUserWithGoogle())
		dispatch(removeErrorInfo())
	}

	const handleOnSubmitFormSignIn = e => {
		e.preventDefault()
		if (
			isSignUp &&
			!isEmailValid &&
			!isPasswordsEqual &&
			!isPasswordLengthValid
		) {
			dispatch(signUpUserRequest(email, password))
			dispatch(removeErrorInfo())
		} else if (!isEmailValid && !isPasswordLengthValid) {
			dispatch(signInUserWithEmail(email, password))
			dispatch(removeErrorInfo())
		}
	}

	if (currentUser.isLogged) return <Redirect to='/' />

	return (
		<CenteredImgDiv>
			<FormWrapper>
				<h1>Welcome</h1>
				<form className='form' onSubmit={handleOnSubmitFormSignIn}>
					<TextField
						error={!!isEmailValid}
						helperText={isEmailValid}
						required
						fullWidth
						autoFocus
						id='email'
						label='Email Address'
						margin='normal'
						variant='outlined'
						value={email}
						onChange={handleEmailOnChange}
					/>
					<TextField
						error={
							!!isPasswordLengthValid || (
								isSignUp
									? !!isPasswordsEqual
									: false
							)
						}
						helperText={
							isPasswordLengthValid || (
								isSignUp ? isPasswordsEqual : ''
							)
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
									!!isPasswordLengthValid ||
									!!isPasswordsEqual
								}
								helperText={isPasswordsEqual}
								required
								fullWidth
								margin='normal'
								variant='outlined'
								id='confirmationPassword'
								type='password'
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
						{isSignUp ? 'Sign up' : 'Log in'}
					</Button>
					<Link variant="body2" onClick={handleSignUpClick}>
						{
							isSignUp
								? 'Already have an account? Sign in'
								: 'Don\'t have an account? Sign Up'
						}
					</Link>
				</form>
				{
					isSignUp
						? (null)
						: (
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
						)
				}
			</FormWrapper>
		</CenteredImgDiv>
	)
}

export default SingInPage