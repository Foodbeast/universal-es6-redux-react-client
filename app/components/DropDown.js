'use strict'

import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { Link } from 'react-router'

class DropDown extends Component {

  componentDidMount() {
    jQuery(this.refs.dropdown).dropdown({ on: 'hover' })
    this.setSelected()
  }

  componentDidUpdate() {
    this.setSelected()
  }

  setSelected() {
    let activeItem = this.props.item.options.find((item) => item.active)

    activeItem
      ? jQuery(this.refs.dropdown).dropdown('set selected', activeItem.title)
      : jQuery(this.refs.dropdown).dropdown('remove selected')
  }

  render() {
    let { item } = this.props

    return (
      <div className="ui dropdown hover item" ref="dropdown">
        { item.name } <i className="dropdown icon"></i>
        <div className="menu">
          { item.options.map((item) => (
              <Link key={ item.href } className="item" to={ item.href }>
                { item.title }
              </Link>
          )) }
        </div>
      </div>
    )
  }

}


export default DropDown
