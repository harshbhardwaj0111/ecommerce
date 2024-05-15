import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Shoe from './Shoe.jpg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Login from '@react-login-page/page10';
import LoginImg from '@react-login-page/page10/bg.png';
import LoginInnerBgImg from '@react-login-page/page10/inner-bg.jpg';
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes ,Link } from 'react-router-dom';
function Home2()
{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
      <Router>
          <Navbar bg="dark" data-bs-theme="dark">
          <Container>
          <Navbar.Brand href="#home"><img src={Shoe} width="50" height="50"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#arrival">New Arrival</Nav.Link>
            <Nav.Link href="#contact">Contact us</Nav.Link>
            <Nav.Link href="#about">About us</Nav.Link>
            <Nav.Link onClick={handleShow} to="login" >Login</Nav.Link>
          </Nav>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
          </Container>
        </Navbar>
        <Routes>
          <Route path="login" element={handleShow} />      
        </Routes>
        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter the Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Login style={{ height: 690, backgroundImage: `url(${LoginImg})` }}>
                    <Login.InnerBox style={{ backgroundImage: `url(${LoginInnerBgImg})` }} />
                    <Login.InnerBox panel="signup" style={{ backgroundImage: `url(${LoginInnerBgImg})` }} />
                </Login>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose} >Save Changes</Button>
                </Modal.Footer>
            </Modal>
      </Router>
    )
}
export default Home2;