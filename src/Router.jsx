import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import SingInPage from './components/pages/SignInPage'
import BasicLayout from './components/layout/BasicLayout'
import PrivateRoute from './components/wrappers/PrivateRoute'
import WeatherForecastPage from './components/pages/WeatherForecastPage'

import { ROUTE_TO_FORECAST, ROUTE_TO_SIGN_IN, FAKE_ROUTES } from './constants'

const Router = () => (
  <BrowserRouter>
    <BasicLayout>
      <Switch>
        <Route path={ROUTE_TO_SIGN_IN}>
          <SingInPage />
        </Route>
        <PrivateRoute exact path={ROUTE_TO_FORECAST}>
          <WeatherForecastPage />
        </PrivateRoute>
        <Redirect from={FAKE_ROUTES} to={ROUTE_TO_FORECAST} />
      </Switch>
    </BasicLayout>
  </BrowserRouter>
)

export default Router
