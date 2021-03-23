import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Alert from '@material-ui/lab/Alert'
import CloseIcon from '@material-ui/icons/Close'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'

import { AlertWrapper } from './style'

import { removeErrorInfo } from '@/actions/error'

const ErrorAlert = () => {
  const dispatch = useDispatch()
  const errorState = useSelector(state => state.error)

  const handleClick = () => {
    dispatch(removeErrorInfo())
  }

  return (
    <AlertWrapper>
      <Collapse in={errorState.isError}>
        <Alert
          severity='error'
          action={
            <IconButton aria-label='close' color='inherit' size='small' onClick={handleClick}>
              <CloseIcon fontSize='inherit' />
            </IconButton>
          }
        >
          {errorState.errorMessage}
        </Alert>
      </Collapse>
    </AlertWrapper>
  )
}

export default ErrorAlert
