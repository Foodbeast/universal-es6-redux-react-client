'use strict'

import React, { Component } from 'react'
import { Container, Card, Header } from 'semantic-ui-react'
import PostCard from '../PostCard'

export default ({ posts, title, rows }) => (
  <Container>
    <Header as="h2">{ title }</Header>
    <Card.Group
      itemsPerRow={3}
    >
      { posts.map((post) => <PostCard key={ post.id } post={ post } />) }
    </Card.Group>
  </Container>
)
