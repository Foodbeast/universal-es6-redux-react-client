'use strict'

import React from 'react'
import { render } from 'react-dom'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import App, { getStore } from '../app'
import historyListener from './historyListener'

// Grab the state from a global injected into server-generated HTML
const initialState = window.__INITIAL_STATE__

// Create an enhanced history that syncs navigation events with the store
const store = getStore({}, browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

// scroll to top of window on page change
history.listen(historyListener)

render(
  App(history, initialState),
  document.getElementById('root')
)
