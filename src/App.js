import React from 'react';
import { Provider } from 'react-redux';

import Router from './components/wrappers/Router';

import { makeStore } from './redux/store';

const store = makeStore();

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export default App;
