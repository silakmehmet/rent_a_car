// src/components/LoginForm.js
import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container
      fluid
      className="mt-3 col-6 col-lg-3 bg-white rounded py-2 px-4 shadow-lg"
    >
      <h2 className="mt-2 text-center">Login</h2>
      <Form className="d-flex flex-column gap-2">
        <Form.Group>
          <Form.Control type="text" placeholder="Username" required />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Control type="email" placeholder="Email" required />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        <Button variant="success" type="submit" className="mt-2 w-100">
          Login
        </Button>

        <div className="mt-1 text-center">
          <span>Don't you have an account? </span>
          <Link to="/signup" className="fw-bold text-decoration-none">
            Signup
          </Link>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
