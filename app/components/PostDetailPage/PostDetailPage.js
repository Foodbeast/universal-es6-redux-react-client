'use strict'

import React from 'react'
import NotFoundPage from '../NotFoundPage'
import Page from '../Layout/Page'
import PostDetails from '../PostDetails'
import Head from '../Head'

export default ({ post, params }) => {

  if(!post) return <NotFoundPage />
  return (
    <Page>
      <Head
        post={post}
        params={params}
      />
      <PostDetails
        post={post}
      />
    </Page>
  )
}
