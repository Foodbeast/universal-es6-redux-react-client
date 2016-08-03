import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import menu from "./menuReducer"
import posts from "./postReducer"

export default combineReducers({
  menu,
  posts,
  routing: routerReducer
})
