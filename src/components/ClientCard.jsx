import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const ClientCard = ({ client }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header>{client.companyName}</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default ClientCard;
