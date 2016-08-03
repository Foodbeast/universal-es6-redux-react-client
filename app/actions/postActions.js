import axios from 'axios'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const requestPosts = () => ({
  type: REQUEST_POSTS
})

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS, payload: posts
})

// THUNK style action for fetching
export const FETCH_POSTS = 'FETCH_POSTS'
export const fetchPosts = () => (dispatch, getState) => {
  // Let the app know there is a request to fetch
  dispatch(requestPosts())
  // Run the fetch and then dispatch and return the results
  return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => dispatch(receivePosts(res.data)))
}
