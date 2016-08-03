'use strict'

import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import App from './components/App'
import reducers from './reducers'

export const getStore = (initialState, history) => {
  const middleware = history
    ? applyMiddleware(thunk, routerMiddleware(history))
    : applyMiddleware(thunk)

  return initialState
    ? createStore(reducers, initialState, middleware)
    : createStore(reducers, middleware)
}

export default (history, initialState = null) => (
  <Provider store={getStore(initialState, history)}>
    <App history={history} />
  </Provider>
)
