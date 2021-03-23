import React, { useState, useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { checkUserAuth } from '@/utils/firebase'

import { setErrorInfo } from '@/actions/error'

import { ROUTE_TO_SIGN_IN } from '@/constants'

const PrivateRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch()
  const [isAuth, setIsAuth] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const USER_NOT_LOGGED_IN_ERROR = 'User isn\'t logged in'

  useEffect(() => {
    checkUserAuth()
      .then(value => {
        setIsAuth(value)
        setIsLoading(false)
      })
      .catch(error => {
        setIsAuth(false)
        setIsLoading(false)
        dispatch(setErrorInfo(USER_NOT_LOGGED_IN_ERROR))
      })
  }, [])

  if (isLoading) return <div>Loading...</div>

  return (
    <Route
      {...rest}
      render={() => (isAuth ? children : <Redirect to={{ pathname: ROUTE_TO_SIGN_IN }} />)}
    />
  )
}

PrivateRoute.propTypes = {
  rest: PropTypes.object,
  children: PropTypes.node.isRequired,
}

PrivateRoute.defaultProps = {
  rest: {},
  children: null,
}

export default PrivateRoute
