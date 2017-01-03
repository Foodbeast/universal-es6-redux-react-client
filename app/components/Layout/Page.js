'use strict'

import React from 'react'
import { Grid } from 'semantic-ui-react'

export default ({ children }) => (
  <Grid stackable container>
    { children }
  </Grid>
)
