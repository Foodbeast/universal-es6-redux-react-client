'use strict'

import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import Layout from './Layout'
import PostListPageContainer from '../containers/PostListPageContainer'
import PostDetailPageContainer from '../containers/PostDetailPageContainer'
import NotFoundPage from './NotFoundPage'
import HeadContainer from '../containers/HeadContainer'

const App = ({ history }) => (
  <div>
    <HeadContainer />
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={PostListPageContainer}/>
        <Route path="posts/:id" component={PostDetailPageContainer}/>
      </Route>
      <Route path="*" component={Layout}>
        <IndexRoute component={NotFoundPage} />
      </Route>
    </Router>
  </div>
)

export default App
