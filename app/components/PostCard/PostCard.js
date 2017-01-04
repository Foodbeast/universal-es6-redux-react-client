'use strict'

import React from 'react'
import { Link } from 'react-router'
import { Panel, Image } from 'react-bootstrap'

export default ({ post }) => {
  const title = (<Link to={post.href}>{post.title}</Link>)
  return (
    <Panel header={title}>
      <Link to={ post.href } key={ post.slug }>
        <Image
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap"
          responsive
        />
        { post.body }
      </Link>
    </Panel>
  )
}
