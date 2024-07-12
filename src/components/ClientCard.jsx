import { Col, Container, Row } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
const ClientCard = ({ client }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="mb-3">
            <Card.Header>{client.companyName}</Card.Header>
            <Card.Body>
              <Card.Title>p.iva: {client.vatNumber}</Card.Title>
              <Card.Text>pec: {client.pec}</Card.Text>
              <Card.Text>registrato il {client.insertionDate}</Card.Text>
              <Card.Text> {client.clientType}</Card.Text>
              <Button variant="primary">vedi dettagli</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
export default ClientCard
