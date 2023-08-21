import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';



function BasicExample() {
  const goldenTextStyle = {
    color: 'goldenrod',
  };

  return (
    <Navbar expand="lg" className="bg-black">
      <Container>
        <Navbar.Brand href="#home" style={goldenTextStyle} className='vall'>
          <h1>راميجون</h1>
         
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link}  to='/'style={goldenTextStyle}>
              Home
            </Nav.Link>
            <Nav.Link as={Link}  to='/aboutus' style={goldenTextStyle}>
              About Us
            </Nav.Link>
            <NavDropdown
              title="Collection"
              id="basic-nav-dropdown"
              style={goldenTextStyle} // Apply golden color to the toggle text
            >
              <NavDropdown.Item as={Link}  to='/collection' style={goldenTextStyle}>Models</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={goldenTextStyle}>
                Basics
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={goldenTextStyle}>Pricing</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" style={goldenTextStyle}>
                Digital
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link}  to='/contactus'  style={goldenTextStyle}>
              Contact Us
            </Nav.Link>
            <Nav.Link  as={Link}  to='/feedback' style={goldenTextStyle}>
              Feedback
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
