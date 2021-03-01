import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from '../../sagas';
import rootReducer from '../reducers';

import { loadState, saveState } from '../../utils/localstorage';


export const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const persistedState = loadState();
    const store = createStore(
        rootReducer,
        persistedState,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    )

    sagaMiddleware.run(rootSaga);

    store.subscribe(() => {
        saveState(store.getState());
    })

    return store
}