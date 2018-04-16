import React from 'react'
import { render } from 'react-dom'
import { freshStore } from './configureStore'
import createHistory from 'history/createBrowserHistory'
import Root from './components/Root'

const history = createHistory()
const store = freshStore(history)

render(
	<Root store={store} history={history} />,
	document.getElementById('root')
)