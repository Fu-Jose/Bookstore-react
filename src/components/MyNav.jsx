import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
const MyNav = () => (
  <Container>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <FontAwesomeIcon icon={faBook} /> React-Bookstore
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <NavDropdown title="Browse" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Fantasy</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">History</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Horror</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Romance</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Sci-Fi</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              All categories
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>
);

export default MyNav;
