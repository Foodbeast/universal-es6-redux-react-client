'use strict'

import React, { Component } from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router'
import Dropdown from '../Dropdown'

export default ({ pages }) => (
  <Navbar color="red" dark>
    <Container>
      <NavbarBrand tag={Link} to="/">Foodbeast</NavbarBrand>
      <Nav navbar>
        { pages.map(renderMenuItem) }
      </Nav>
    </Container>
  </Navbar>
)

function renderMenuItem(item) {
  // Test for dropdown
  if(item.options) return (
    <Dropdown
      key = {item.href}
      title={item.name}
      options={item.options}
    />
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
