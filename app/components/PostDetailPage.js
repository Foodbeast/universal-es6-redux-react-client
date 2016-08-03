'use strict'

import React from 'react'
import NotFoundPage from './NotFoundPage'
import Page from './Page'
import MainContent from './MainContent'
import PostDetails from './PostDetails'
import HeadContainer from '../containers/HeadContainer'

// Not super stoked about passing params down like this.
// Is there a better way?
const PostDetailPage = ({ post, params }) => {

  if(!post) return <NotFoundPage />
  return (
    <Page>
      <HeadContainer 
        post={post}
        params={params}
      />
      <MainContent>
        <PostDetails
          post={post}
        />
      </MainContent>
    </Page>
  )
}

export default PostDetailPage
