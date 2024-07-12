import { useEffect, useState } from "react";
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postRegisterUser } from "../redux/actions";

import background from "../assets//nasa.jpg";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");

  const token = useSelector((state) => state.user.user_bearer.accessToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Attempting to log in");
    const loginObject = {
      email: email,
      password: password,
      name: name,
      surname: surname,
      username: username,
    };
    dispatch(postRegisterUser(token, loginObject, navigate));
    alert("Utente creato con episuccesso");
  };

  return (
    <Container fluid className="login-container" style={{ backgroundImage: `url(${background})` }}>
      <MDBContainer className="p-3 my-5 d-flex flex-column form-container">
        <>
          <Form onSubmit={handleLoginSubmit}>
            <MDBInput
              wrapperClass="mb-4"
              label="name"
              id="form10"
              type="name"
              onChange={(e) => setName(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="surname"
              id="form21"
              type="surname"
              onChange={(e) => setSurname(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="username"
              id="form22131"
              type="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="form13123"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form221312    "
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <MDBBtn className="mb-4">Register</MDBBtn>
          </Form>
        </>

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" />
          <a href="!#">Forgot password?</a>
        </div>

        <div className="text-center">
          <p>
            <>
              <span>Not a member?</span>
              <a href="#!">Register</a>
            </>
          </p>
          <p>or sign up with:</p>
        </div>
      </MDBContainer>
    </Container>
  );
};

export default Register;
