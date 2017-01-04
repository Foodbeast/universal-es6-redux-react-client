'use strict'

import React, { Component } from 'react'
import {
  Container,
  Nav,
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.renderMenuItem = this.renderMenuItem.bind(this)
  }

  render() {
    const { pages } = this.props
    return (
      <Navbar>
        <Navbar.Header>
          <LinkContainer to='/'>
            <Navbar.Brand>Foodbeast</Navbar.Brand>
          </LinkContainer>
          <Nav>
            { pages.map(this.renderMenuItem) }
          </Nav>
        </Navbar.Header>
      </Navbar>
    )
  }

  renderMenuItem(item) {
    // Test for dropdown
    if(item.options) return (
      <NavDropdown
        id={item.name+' Dropdown'}
        key={'nav_'+item.name}
        title={item.name}
      >
        {
          item.options.map((option) => (
            <LinkContainer
              to={option.href}
              key={option.href}
            >
              <MenuItem>{ option.title }</MenuItem>
            </LinkContainer>
          ))
        }
      </NavDropdown>
    )

    return (
      <LinkContainer
        key={'nav_'+item.name}
        to={item.href}
        target={item.target}
      >
        <NavItem>{ item.name }</NavItem>
      </LinkContainer>
    )
  }

}
