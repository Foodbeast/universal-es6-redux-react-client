'use strict'

import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Page = ({ children }) => (
  <Container>
    <Row>
      <Col>{ children }</Col>
    </Row>
  </Container>
)

export default Page
