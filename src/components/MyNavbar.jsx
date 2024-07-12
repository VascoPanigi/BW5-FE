import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">EpiENERGIA fatta in fretta 👨‍💻</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Team 6</a>
          </Navbar.Text>
          <Link to="/register">
            <Button className="ms-5">Register</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
