'use strict'

import React, { Component, PropTypes } from 'react'
import { NavDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Link } from 'react-router'

const propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
}

const defaultProps = {
  isOpen: false,
}

class CustomDropdown extends Component {

  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = { isOpen: this.props.isOpen }
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const {
      options,
      title
    } = this.props

    return (
      <NavDropdown
        key={'nav_'+title}
        isOpen={this.state.isOpen}
        toggle={this.toggle}
      >
        <DropdownToggle nav caret>
          { title }
        </DropdownToggle>
        <DropdownMenu>
          {
            options.map((option) => (
              <DropdownItem
                tag={Link}
                key={option.href}
                to={option.href}
              >
                { option.title }
              </DropdownItem>
            ))
          }
        </DropdownMenu>
      </NavDropdown>
    )
  }

}

CustomDropdown.propTypes = propTypes
CustomDropdown.defaultProps = defaultProps

export default CustomDropdown
