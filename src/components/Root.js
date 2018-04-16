import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
// import { ConnectedRouter } from 'react-router-redux'
import { hot, AppContainer } from 'react-hot-loader'

import App from './App'

class Root extends Component {
	render() {
		let { store, history } = this.props

		return (
		    <Provider store={store} >
		        <Router history={history}>
		            <App />
	            </Router>
		    </Provider>
		)
	}
}
export default hot(module)(Root)
