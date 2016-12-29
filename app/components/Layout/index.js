'use strict'

import React from 'react'
import { Container } from 'semantic-ui-react'
import Menu from '../Menu'

export default ({ children, params }) => (
  <Container>
      <Menu params={params} />
      { children }
  </Container>
)
