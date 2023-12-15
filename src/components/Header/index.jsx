import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const HeaderComponents = () => {
  const navData = [
    { title: "Home", link: "/home" },
    { title: "Movies", link: "/movies" },
    { title: "TvSeries", link: "/series" },
    { title: "Search", link: "/search" },
    { title: "Contact", link: "/contact" },
    { title: "About", link: "/about" },
  ];
  return (
    <header className="header">
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand>My Entertainment</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-scroll" />
          <Navbar.Collapse id="navbar-scroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxWidth: "100px" }}
              navbarScroll
            >
              {navData.map((item, i) => {
                return (
                  <Nav key={i}>
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
