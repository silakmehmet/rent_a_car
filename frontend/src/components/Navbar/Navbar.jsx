import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function CustomNavbar() {
  // To display both loggedin/loggedout situations
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Drive Around
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link eventKey="i" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link eventKey="i" as={Link} to="/cars">
              Cars
            </Nav.Link>
            {isLoggedIn ? (
              <>
                <Nav.Link eventKey="i" as={Link} to="/rents">
                  Rents
                </Nav.Link>
                <Nav.Link eventKey="i" as={Link} to="/" onClick={handleLogout}>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link eventKey="i" as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link eventKey="i" as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
