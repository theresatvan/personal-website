import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <header id="navigation">
      <Navbar>
          <Container>
              <Navbar.Brand href="/">Theresa T Van</Navbar.Brand>
              <Nav>
                  <Nav.Link href="/projects">+ projects</Nav.Link>
                  <Nav.Link href="/encyclopedia">+ encyclopedia</Nav.Link>
                  <Nav.Link href="/musings">+ musings</Nav.Link>
                  <Nav.Link href="/resume">+ resume</Nav.Link>
              </Nav>
          </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;
