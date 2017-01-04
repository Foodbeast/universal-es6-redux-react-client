'use strict'

import React from 'react'
import { Row } from 'react-bootstrap'
import Menu from '../Menu'

export default ({ children, params }) => (
  <Row>
    <Menu params={params} />
    <div className="content">
      { children }
    </div>
  </Row>
)
