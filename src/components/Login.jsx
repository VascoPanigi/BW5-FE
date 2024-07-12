import { useEffect, useState } from "react"
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit"
import { Container, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchUserAction } from "../redux/actions"

import background1 from "../assets//field.jpg"

const Login = () => {
  const [isLogged, setIsLogged] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    console.log("oh no devo registrarmioo")
  }, [isLogged])

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    console.log("Attempting to log in")
    const loginObject = {
      email: email,
      password: password,
    }
    dispatch(fetchUserAction(loginObject, navigate))
  }

  return (
    <Container
      fluid
      className="login-container"
      style={{ backgroundImage: `url(${background1})` }}
    >
      <MDBContainer className="p-3 my-5 d-flex flex-column form-container">
        {isLogged ? (
          <>
            <Form onSubmit={handleLoginSubmit}>
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="form1"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <MDBBtn className="mb-4" type="submit">
                Sign in
              </MDBBtn>
            </Form>
          </>
        ) : (
          <>
            <Form>
              <MDBInput
                wrapperClass="mb-4"
                label="name"
                id="form2"
                type="name"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="surname"
                id="form2"
                type="surname"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="username"
                id="form2"
                type="username"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="form1"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                type="password"
              />
              <MDBBtn className="mb-4">Register</MDBBtn>
            </Form>
          </>
        )}

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Remember me"
          />
          <a href="!#">Forgot password?</a>
        </div>

        <div className="text-center">
          <p onClick={() => setIsLogged(!isLogged)}>
            {isLogged ? (
              <>
                <span>Not a member?</span>
                <a href="#!">Register</a>
              </>
            ) : (
              <>
                <span>Already a member?</span>
                <a href="#!">Login</a>
              </>
            )}
          </p>
          <p>or sign up with:</p>
        </div>
      </MDBContainer>
    </Container>
  )
}

export default Login
