'use strict'

import React, { Component, PropTypes } from 'react'
import { Container } from 'reactstrap'

const PostDetails = ({ post }) => (
  <Container>
    <h2>{ post.title }</h2>
    <p>{ post.body }</p>
  </Container>
)

export default PostDetails
