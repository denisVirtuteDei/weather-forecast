import React from 'react'
import { Provider } from 'react-redux'
import { makeStore } from './redux/store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ImgContainer from './components/blocks/MainBox';
import SingInPaper from "./components/blocks/SignInPaper";
import PrivateRoute from './components/wrappers/PrivateRoute';
import WeatherForecastPaper from "./components/blocks/WeatherForecast";
import { ROUTE_TO_FORECAST, ROUTE_TO_SIGN_IN } from './constants';


const store = makeStore();

const App = () => (
  <Provider store={store}>
    <Router>
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
    </Router>
  </Provider>
)

export default App;
