import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import PrivateRoute from './components/wrappers/PrivateRoute';
import ImgContainer from './components/blocks/MainBox';
import SingInPaper from "./components/blocks/SignInPaper";
import WeatherForecastPaper from "./components/blocks/WeatherForecast";

import { ROUTE_TO_FORECAST, ROUTE_TO_SIGN_IN } from './constants';

const Router = () => (
    <BrowserRouter>
        <ImgContainer>
            <Switch>
                <Route path={ROUTE_TO_SIGN_IN}>
                    <SingInPaper />
                </Route>
                <PrivateRoute exact path={ROUTE_TO_FORECAST}>
                    <WeatherForecastPaper />
                </PrivateRoute>
            </Switch>
        </ImgContainer>
    </BrowserRouter>
)

export default Router;
