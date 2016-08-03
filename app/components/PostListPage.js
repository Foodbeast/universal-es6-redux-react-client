'use strict'

import React from 'react'
import Page from './Page'
import FullContent from './FullContent'
import PostListContainer from '../containers/PostListContainer'
import HeadContainer from '../containers/HeadContainer'

const PostListPage = ({ params }) => {
  // Not super stoked about passing params down like this.
  // Is there a better way?
  return (
    <Page>
      <HeadContainer />
      <FullContent>
        <PostListContainer
          title={'Posts'}
        />
      </FullContent>
    </Page>
  )
}

export default PostListPage
