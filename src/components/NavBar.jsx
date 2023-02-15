import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="Netflix"
            src="../Netflix-logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">TV Shows</Nav.Link>
            <Nav.Link href="#pricing">Recently Added</Nav.Link>
            <Nav.Link href="#pricing">My List </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <i class="fa fa-search icons"></i>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" id="kids">
              {" "}
              KIDS
            </Nav.Link>
            <Nav.Link href="#deets">
              <i class="fa fa-bell icons"></i>
            </Nav.Link>
            <Nav.Link href="#deets">
              <i class="fa fa-user icons"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
