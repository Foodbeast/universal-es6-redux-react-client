'use strict'

import React from 'react'
import { Link } from 'react-router'
import { Card, Image } from 'semantic-ui-react'

export default ({ post }) => (
  <Card>
    <Image
      as={ Link }
      to={ post.href }
      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
      alt="Card image cap"
    />
    <Card.Content>
      <Card.Header as={ Link } to={ post.href } key={ post.slug }>
        { post.title }
      </Card.Header>
      <Card.Meta>ID: { post.id }</Card.Meta>
      <Card.Description>{ post.body }</Card.Description>
    </Card.Content>
  </Card>
)
