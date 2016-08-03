'use strict'

import { connect } from 'react-redux'
import PostDetailPage from '../components/PostDetailPage'

const mapState = (state, props) => {

  let post = state.posts.find((post) => post.slug === props.params.post)

  return { post }
}

export default connect(mapState)(PostDetailPage)
