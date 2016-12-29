'use strict'

import React from 'react'
import { Link } from 'react-router'
import Page from '../Layout/Page'

const NotFoundPage = () => (
  <Page>
    <div>
      <h1>404</h1>
      <p>Go to <Link to="/">Home Page</Link></p>
    </div>
  </Page>
)

export default NotFoundPage
