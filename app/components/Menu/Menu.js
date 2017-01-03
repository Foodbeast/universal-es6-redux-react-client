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

    // create open state for each dropdown
    const { pages } = props
    const dropdownOpenState = pages.reduce((dropdowns, page) => {
      return page.options ? { ...dropdowns, [page.name]: false } : dropdowns
    }, {})

    this.state = { dropdownOpenState }
  }

  toggle(page) {
    // update open state for provided page
    const dropdownOpenState = {
      ...this.state.dropdownOpenState,
      [page.name]: !this.state.dropdownOpenState[page.name]
    }

    this.setState({ dropdownOpenState })
  }

  render() {
    const { pages } = this.props
    return (
      <Navbar color="red" dark>
        <Container>
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
        isOpen={this.state.dropdownOpenState[item.name]}
        toggle={()=>this.toggle(item)}
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
