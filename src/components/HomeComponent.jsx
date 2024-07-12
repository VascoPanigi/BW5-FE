import ClientCard from "./ClientCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClientListAction, fetchUserInfoAction } from "../redux/actions";
import { Col, Container, Row } from "react-bootstrap";

const HomeComponent = () => {
  const token = useSelector((state) => state.user.user_bearer.accessToken);
  const clients = useSelector((state) => state.clients.clients.content);
  const dispatch = useDispatch();

  //   const [fetching, Isfetching] = useState(false)

  useEffect(() => {
    if (token) {
      console.log("Dispatching fetchUserInfoAction with token");
      dispatch(fetchUserInfoAction(token));
      dispatch(fetchClientListAction(token));
      //   Isfetching(true)
    }
  }, [dispatch, token]);

  return (
    <Container>
      <Row>
        <h1>Lista Aziende</h1>
        <Col sm={10}>
          {!clients ? (
            <p>non ci sono aziende al momento</p>
          ) : (
            clients.map((client) => <ClientCard key={client.id} client={client} />)
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default HomeComponent;
