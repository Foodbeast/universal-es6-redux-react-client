'use strict'

import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { syncHistoryWithStore } from 'react-router-redux'
import { createMemoryHistory } from 'react-router'
import { fetchPosts } from '../app/actions/postActions'
import App, { getStore } from '../app'
import Helmet from 'react-helmet'

export default (req, res, next) => {
  // Create a new Redux store instance
  const store = getStore()

  // Create an enhanced history that syncs navigation events with the store
  const memoryHistory = createMemoryHistory(req.url)
  const history = syncHistoryWithStore(memoryHistory, store)

  // Get the data we need to render the app
  store.dispatch(fetchPosts())
    .then(() => {
      // Get updated state after fetch has completed
      const state = store.getState()

      // Send the rendered page back to the client
      const html = renderToString(App(history, state))
      let head = Helmet.rewind()
      res.send(renderFullPage(html, state, head))
    })
    .catch(next)

}

const renderFullPage = (html, state, head) => {
  return `
    <!doctype html>
    <html ${head.htmlAttributes.toString()}>
      <head>
        ${head.title.toString()}
        ${head.link.toString()}
        ${head.meta.toString()}
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(state)}
        </script>
        <script src="/static/vendor.js"></script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}
