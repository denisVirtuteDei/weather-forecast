import React, { useState, useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'

import { checkUserAuth } from '@utils/firebase'

import { ROUTE_TO_SIGN_IN } from '@/constants'


export default function PrivateRoute({ children, ...rest }) {

    const [isAuth, setIsAuth] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        checkUserAuth()
            .then(value => {
                setIsAuth(value)
                setIsLoading(false)
            })
            .catch(() => { 
                setIsLoading(false)
            })
    }, [])

    if (isLoading) return <div>Loading...</div>

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuth
                    ? (children)
                    : (
                        <Redirect to={{
                            pathname: ROUTE_TO_SIGN_IN,
                            state: { from: location }
                        }} />
                    )
            }
        />
    )
}

