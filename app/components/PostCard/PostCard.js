'use strict'

import React from 'react'
import { Link } from 'react-router'
import { Col, Card, CardImg, CardBlock, CardTitle, CardSubtitle, CardText } from 'reactstrap'

export default ({ post }) => (
  <Card>
    <Link to={ post.href } key={ post.slug }>
      <CardImg
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
        alt="Card image cap"
      />
    </Link>
    <CardBlock>
      <Link to={ post.href } key={ post.slug }>
        <CardTitle>{ post.title }</CardTitle>
      </Link>
      <CardSubtitle>ID: { post.id }</CardSubtitle>
      <CardText>{ post.body }</CardText>
    </CardBlock>
  </Card>
)
