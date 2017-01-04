'use strict'

import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import PostCard from '../PostCard'

export default ({ posts, title, rows }) => (
  <Grid>
    <Row>
      <h2>{ title }</h2>
    </Row>
    <Row>
      {
        rows.map((row, i) => {
          return (
            <Row key={"card_row:"+i}>
              { row.map((post) => <Col xs={4} key={ post.id }><PostCard post={ post } /></Col>) }
            </Row>
          )
        })
      }
    </Row>
  </Grid>
)
