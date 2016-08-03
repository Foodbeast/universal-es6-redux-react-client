'use strict'

import React from 'react'
import { Link } from 'react-router'

const PostCard = ({ post }) => (
  <Link to={ post.href } key={ post.slug } className="ui link card">
    <div className="content">
      <div className="header">{ post.title }</div>
      <div className="meta">
        <span className="id">ID: { post.id }</span>
      </div>
      <div className="body">
        <p>{ post.body }</p>
      </div>
    </div>
  </Link>
)

export default PostCard
