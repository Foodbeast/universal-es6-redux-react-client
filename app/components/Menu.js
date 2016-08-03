'use strict'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import DropDown from './DropDown'

class Menu extends Component {

  constructor(props) {
    super(props)
    this.renderMenuItem = this.renderMenuItem.bind(this)
  }

  render() {
    let { pages } = this.props
    return(
      <div className="ui stackable menu">
        <div className="ui container">
          { pages.map(this.renderMenuItem) }
        </div>
      </div>
    )
  }

  renderMenuItem(item) {
    // Test for dropdown
    if(item.options) return (
      <DropDown
        key={ item.href }
        item={ item }
      />
    )

    return (
      <Link
        key={ item.href }
        className="item"
        to={ item.href }
        target={ item.target }
      >
        { item.name }
      </Link>
    )
  }

}

export default Menu
