'use strict'

import { connect } from 'react-redux'
import PostList from './PostList'

// Just grabbing the first n values from the post array.
// Eventually need to do some sort of sorting or randomizing
const mapStateToProps = (state, props) => {

  const amount = props.amount || 18
  const postsPerRow = props.postsPerRow || 3

  const posts = state.posts.slice(0, amount)
  const rows = createGroupedArray(posts, postsPerRow)

  return { ...props, posts, rows }

}

const createGroupedArray = function(arr, chunkSize) {
  const groups = []
  let i

  for (i = 0; i < arr.length; i += chunkSize) {
    groups.push(arr.slice(i, i + chunkSize));
  }
  return groups;
}

export default connect(mapStateToProps)(PostList)
