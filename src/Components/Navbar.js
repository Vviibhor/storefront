import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import logo from './logo.svg';
const navbar = () => {
  return (
    <Navbar bg="dark" variant="dark">    
      <Container>
      <Row>
        <Col>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <img
        alt="logo"
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      Game Zone
        </Col>
        <Col>
        <Button>Cart</Button>
        </Col>
      </Row>
        </Container>
  </Navbar>
  )
}

export default navbar
