'use strict'

import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import Layout from './Layout'
import PostListPage from './PostListPage'
import PostDetailPage from './PostDetailPage'
import NotFoundPage from './NotFoundPage'
import Head from './Head'

const App = ({ history }) => (
  <div>
    <Head />
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={PostListPage}/>
        <Route path="posts/:id" component={PostDetailPage}/>
      </Route>
      <Route path="*" component={Layout}>
        <IndexRoute component={NotFoundPage} />
      </Route>
    </Router>
  </div>
)

export default App
