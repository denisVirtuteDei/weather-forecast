import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootSaga from '../../sagas'
import rootReducer from '../reducers'

import { 
	loadStateFromSessionStorage, 
	saveStateToSessionStorage,
} from '@utils/sessionstorage'


export const makeStore = () => {
	const sagaMiddleware = createSagaMiddleware()
	const persistedState = loadStateFromSessionStorage()
	const store = createStore(
		rootReducer,
		persistedState,
		composeWithDevTools(applyMiddleware(sagaMiddleware))
	)

	sagaMiddleware.run(rootSaga)

	store.subscribe(() => {
		saveStateToSessionStorage({ 
			user: store.getState().user,
			themeMode: store.getState().themeMode,
		})
	})

	return store
}