import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ImHome3 } from "react-icons/im";
import { FaUser } from "react-icons/fa";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Fuel-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/">
              <p
                style={{
                  color: "white",
                  fontSize: "23px",
                  margin: "0px",
                  padding: "0px",
                  paddingLeft: "15px",
                }}
              >
                <ImHome3 />
              </p>
            </Nav.Link>
            <Nav.Link eventKey={2} href="/user">
              <p
                style={{
                  color: "white",
                  fontSize: "23px",
                  margin: "0px",
                  padding: "0px",
                  paddingLeft: "15px",
                }}
              >
                <FaUser />
              </p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
