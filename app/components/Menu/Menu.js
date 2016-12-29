'use strict'

import React, { Component } from 'react'
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  NavDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import { Link } from 'react-router'

export default class Menu extends Component {
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
      <Navbar color="faded" light>
        <Container fluid>
          <NavbarBrand tag={Link} to="/">Foodbeast</NavbarBrand>
          <Nav navbar>
            { pages.map(this.renderMenuItem) }
          </Nav>
        </Container>
      </Navbar>
    )
  }

  renderMenuItem(item) {
    // Test for dropdown
    if(item.options) return (
      <NavDropdown
        key={'nav_'+item.name}
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        <DropdownToggle nav caret>
          { item.name }
        </DropdownToggle>
        <DropdownMenu>
          {
            item.options.map((option) => (
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

    return (
      <NavItem key={'nav_'+item.name}>
        <NavLink
          tag={Link}
          to={item.href}
          target={item.target}
        >
          {item.name}
        </NavLink>
      </NavItem>
    )
  }

}
