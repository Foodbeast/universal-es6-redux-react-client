'use strict'

import React from 'react'
import { Container } from 'semantic-ui-react'
import Menu from '../Menu'

export default ({ children, params }) => (
  <div>
    <Menu params={params} />
    <Container className="content">{ children }</Container>
  </div>
)
