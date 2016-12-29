'use strict'

import React from 'react'
import { Row } from 'reactstrap'
import Menu from '../Menu'

export default ({ children, params }) => (
  <Row>
      <Menu params={params} />
      { children }
  </Row>
)
