import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import { hot } from 'react-hot-loader'

import Root from './Root'

class HotWrapper extends Component {
	render() {
		return (
            <Root />
		)
	}
}

export default hot(module)(HotWrapper)