'use strict'

import React, { Component } from 'react'
import { Container, Row, Col, CardDeck } from 'reactstrap'
import PostCard from '../PostCard'

export default ({ posts, title, rows }) => (
  <Container>
    <Row>
      <h2>{ title }</h2>
    </Row>
    <Row>
      {
        rows.map((row, i) => {
          return (
            <Row key={"card_row:"+i}>
              <CardDeck>
                { row.map((post) => <PostCard key={ post.id } post={ post } />) }
              </CardDeck>
            </Row>
          )
        })
      }
    </Row>
  </Container>
)
