'use strict'

const initialState = {
  pages: [
    {
      name: 'Home',
      href: '/',
      active: false,
      icon: 'home'
    },
    {
      name: 'Posts',
      href: '/posts',
      active: true,
      options: []
    }
  ]
}

export default function menuReducer(state = initialState, action) {
  switch (action.type) {

    default:
      return state
  }
}
