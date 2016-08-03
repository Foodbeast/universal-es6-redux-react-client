'use strict'

import { connect } from 'react-redux'
import PostList from '../components/PostList'

// Just grabbing the first n values from the post array.
// Eventually need to do some sort of sorting or randomizing
const mapState = (state, props) => {

  let posts = props.amount
    ? state.posts.slice(0, props.amount)
    : state.posts

  return { ...props, posts }

}

export default connect(mapState)(PostList)
