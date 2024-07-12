import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfoAction } from "../redux/actions";
import { Container } from "react-bootstrap";

const Homepage = () => {
  const token = useSelector((state) => state.user.user_bearer.accessToken);
  console.log(token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      console.log("Dispatching fetchUserInfoAction with token");
      dispatch(fetchUserInfoAction(token));
    }
  }, [dispatch, token]);

  return (
    <Container fluid className="homepage-container">
      <h1>AO</h1>
    </Container>
  );
};

export default Homepage;
