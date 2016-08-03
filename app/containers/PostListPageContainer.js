'use strict'

import { connect } from 'react-redux'
import PostListPage from '../components/PostListPage'

const mapState = (state, props) => {

  // Build a playlist by selecting the most recent
  // episode of every show and sorting by release date
  let posts = state.posts

  return { posts }

}

export default connect(mapState)(PostListPage)
