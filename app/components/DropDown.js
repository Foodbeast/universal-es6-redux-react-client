'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router'
import { Dropdown } from 'semantic-ui-react'

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
      <Dropdown
        text={item.name}
        className='item'
      >
        <Dropdown.Menu>
        {
          item.options.map((item) => (
            <Dropdown.Item
              as={Link}
              key={item.href}
              className="item"
              to={ item.href }
            >
              { item.title }
            </Dropdown.Item>
          ))
        }
        </Dropdown.Menu>
      </Dropdown>
    )
  }

}


export default DropDown
