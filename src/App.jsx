import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import AddTask from './components/AddTask'

import "./App.scss"

export default function App() {

  return (
    <Container className='app' fluid>
      <div className='title'>
        <h1>Pendientes</h1>
      </div>

      <Row className='to-do'>
        <Col
          className='to-do__title'
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <h2>Today</h2>
        </Col>
        
        <Col
          className='to-do__list'
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <p>Lista de tareas</p>
        </Col>
        
        <Col
          className='to-do__input'
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <AddTask />
        </Col>
      </Row>
    </Container>
  )
}
