'use strict'

import React from 'react'
import { connect } from 'react-redux'
import Menu from '../components/Menu'

const mapState = (state, props) => {

  let { menu, posts } = state

  // Build posts dropdown options
  let showsOptions = posts
    .map((post)=>({ ...post, active: props.params.post === post.id }))
    .sort((a,b)=>{
      let nameA = a.title.toLowerCase()
      let nameB = b.title.toLowerCase()
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
    })

  // Build new pages array with dropdown options
  let pages = menu.pages.map((page) =>
    page.name === 'Posts' ? { ...page, options: showsOptions } : page)

  return { pages }

}

export default connect(mapState)(Menu)
