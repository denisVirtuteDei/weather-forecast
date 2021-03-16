import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import PrivateRoute from '@wrappers/PrivateRoute';
import ImgContainer from '@blocks/MainBox';
import SingInPage from "@pages/SignInPage";
import WeatherForecastPage from "@pages/WeatherForecastPage";

import { ROUTE_TO_FORECAST, ROUTE_TO_SIGN_IN } from '@/constants';

const Router = () => (
    <BrowserRouter>
        <ImgContainer>
            <Switch>
                <Route path={ROUTE_TO_SIGN_IN}>
                    <SingInPage />
                </Route>
                <PrivateRoute exact path={ROUTE_TO_FORECAST}>
                    <WeatherForecastPage />
                </PrivateRoute>
            </Switch>
        </ImgContainer>
    </BrowserRouter>
)

export default Router;
