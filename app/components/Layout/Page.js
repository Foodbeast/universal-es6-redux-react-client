'use strict'

import React from 'react'
import { Grid } from 'semantic-ui-react'

export default ({ children }) => (
  <Grid stackable columns={2}>
    <Row>
      <Col>{ children }</Col>
    </Row>
  </Grid>
)
