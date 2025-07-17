import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";


function NavigationBar() {
return (
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/#">DND 2024 Quick Reference</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#">Home</Nav.Link>
            <Nav.Link href="/#combat">Combat</Nav.Link>
            <NavDropdown 
              title="Tools" 
              id="basic-nav-dropdown"
              className="custom-dropdown"
            >
              <NavDropdown.Item href="/#dice-roller">Dice Roller</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar