import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BASE_URL } from "../config/constants";


function NavigationBar() {
return (
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href={BASE_URL}>DND 2024 Quick Reference</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={BASE_URL}>Home</Nav.Link>
            {/* <Nav.Link as={Link} to="/combat">Combat</Nav.Link> */}
            <NavDropdown 
              title="Tools" 
              id="basic-nav-dropdown"
              className="custom-dropdown"
            >
              <NavDropdown.Item as={Link} to="/dice-roller">Dice Roller</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar