import React from 'react'
import { Provider } from 'react-redux'
import { makeStore } from './redux/store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import PrivateRoute from './components/wrappers/PrivateRoute';
import { SingInPaper } from "./components/blocks/SignInPaper/SignInPaper";
import { WeatherForecastPaper } from "./components/blocks/WeatherForecastPaper/WeatherForecastPaper";

const store = makeStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/signIn'>
          <SingInPaper />
        </Route>
        <PrivateRoute exact path='/'>
          <WeatherForecastPaper />
        </PrivateRoute>
      </Switch>
    </Router>
  </Provider>
)

export default App;
