'use strict'

import { connect } from 'react-redux'
import PostDetailPage from './PostDetailPage'

const mapState = (state, props) => {
  let post = state.posts.find((post) => post.id == props.params.id)
  return { post }
}

export default connect(mapState)(PostDetailPage)
