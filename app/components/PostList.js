'use strict'

import React, { Component } from 'react'
import PostCard from './PostCard'

const PostList = ({ posts, title }) => (
  <div className={ 'ui container' }>
    <h2 className="ui header">{ title }</h2>
    <div className="ui three stackable cards">
      { posts.map((post) => <PostCard key={ post.id } post={ post } />) }
    </div>
  </div>
)

export default PostList
