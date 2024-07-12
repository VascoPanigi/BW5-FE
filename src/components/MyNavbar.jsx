import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const MyNavbar = () => {
  return (
    <Navbar fluid className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Team 6</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
