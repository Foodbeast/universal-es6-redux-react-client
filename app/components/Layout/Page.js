'use strict'

import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

export default ({ children }) => (
  <Grid>
    <Row>
      <Col>{ children }</Col>
    </Row>
  </Grid>
)
