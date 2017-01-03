'use strict'

import React, { Component } from 'react'
import { Menu, Dropdown, Container, Item } from 'semantic-ui-react'
import { Link } from 'react-router'

export default class Nav extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.renderMenuItem = this.renderMenuItem.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render() {
    const { pages } = this.props
    return (
      <Menu stackable>
        <Container>
          { pages.map(this.renderMenuItem) }
        </Container>
      </Menu>
    )
  }

  renderMenuItem(item) {
    // Test for dropdown
    if(item.options) return (
      <Item as={Dropdown} key={ item.href } text={ item.name }>
        <Dropdown.Menu>
          {
            item.options.map((option) =>
              <Dropdown.Item
                as={ Link }
                to={ option.href }
                key={ option.href }
                text={ option.title }
              />
            )
          }
        </Dropdown.Menu>
      </Item>
    )

    return (
      <Item
        as={ Link }
        key={ item.href }
        to={ item.href }
        target={ item.target }
      >
        { item.name }
      </Item>
    )
  }

}
