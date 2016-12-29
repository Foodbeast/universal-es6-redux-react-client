'use strict'

import React from 'react'
import Page from '../Layout/Page'
import PostList from '../PostList'
import HeadContainer from '../Head'

const PostListPage = ({ params }) => {
  return (
    <Page>
      <HeadContainer />
      <PostList title={'Posts'} />
    </Page>
  )
}

export default PostListPage
