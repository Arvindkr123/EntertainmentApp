import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const HeaderComponents = () => {
  const navData = [
    { title: "Home", link: "/" },
    { title: "Movies", link: "/movies" },
    { title: "Tv Series", link: "/series" },
    { title: "Search", link: "/search" },
    { title: "About", link: "/about" },
  ];
  return (
    <header className="header">
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand>Entertainment</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 navbar"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* Mapping through navData to create NavLink components */}
              {navData.map((item, i) => {
                return (
                  <Link className="px-2 list-item" key={i} to={item.link}>
                    {item.title}
                  </Link>
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
