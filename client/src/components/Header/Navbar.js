import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import LoginForm from '../LoginForms/LoginForm';
import SignUpForm from '../LoginForms/SignupForm';

import Auth from '../../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar  variant='dark' expand='lg' className="bg-dark-blue raleway-font">
        <Container fluid>
          <Navbar.Brand as={Link} to='/' className="montserrat-font font-2xl title">
            Portfolio Generator
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              {/* These links don't need user to be logged in */}
              <Navbar.Text>
              <Nav.Link as={Link} to='/'>
                About
              </Nav.Link>
              </Navbar.Text>
              <Navbar.Text>
              <Nav.Link href="https://portfolio-generator.github.io/Demo-Portfolios/" target="_blank" rel="noopener noreferrer">
                Demo
              </Nav.Link>
              </Navbar.Text>
              <Navbar.Text>
              <Nav.Link as={Link} to='/setup'>
                How to Setup
              </Nav.Link>
              </Navbar.Text>
              {/* These links appear if user is logged in - 
              otherwise they are sent to login  */}
              {Auth.loggedIn() ? (
                <>
                  <Navbar.Text>
                  <Nav.Link as={Link} to='/portfolio'>
                    Portfolio Builder
                  </Nav.Link>
                  </Navbar.Text>
                  <Navbar.Text>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                  </Navbar.Text>
                </>
              ) : (
                <Navbar.Text>
                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
                </Navbar.Text>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
