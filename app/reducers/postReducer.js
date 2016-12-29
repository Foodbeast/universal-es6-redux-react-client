'use strict'

import { RECEIVE_POSTS } from '../actions/postActions'
const initialState = []

const buildSlug = (...args) => args.join('/')

export default (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_POSTS:
      return action.payload.map((post) => {
        // Generate proper links for all posts
        let rootSlug = '/posts'
        return { ...post, href: buildSlug(rootSlug, post.id) }
      })

    default:
      return state

  }
}
