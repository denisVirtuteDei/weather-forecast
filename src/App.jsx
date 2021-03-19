import React from 'react'
import { Provider } from 'react-redux'

import Router from './Router'
import ThemeProviderWrapper from './components/wrappers/ThemeProviderWrapper'

import { makeStore } from './redux/store'

const App = () => (
	<Provider store={makeStore()}>
		<ThemeProviderWrapper>
			<Router />
		</ThemeProviderWrapper>
	</Provider>
)

export default App
