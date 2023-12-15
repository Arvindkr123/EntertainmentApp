import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const HeaderComponents = () => {
  const navData = [
    { title: "Home", link: "/" },
    { title: "Movies", link: "/movies" },
    { title: "Tv Series", link: "/series" },
    { title: "Search", link: "/search" },
    { title: "Contact", link: "/contact" },
    { title: "About", link: "/about" },
  ];
  return (
    <header className="header">
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand>My Entertainment</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {navData.map((item) => {
                return (
                  <Nav key={item.title}>
                    <Link to={item.link}>{item.title}</Link>
                  </Nav>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default HeaderComponents;
