'use strict'

import React from 'react'
import MenuContainer from '../containers/MenuContainer'

const Layout = ({ children, params }) => (
  <div>
    <MenuContainer params={params} />
    { children }
  </div>
)

export default Layout
