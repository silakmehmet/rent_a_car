// src/components/LoginForm.js
import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Container
      fluid
      className="mt-3 col-6 col-lg-3 bg-white rounded py-2 px-4 shadow-lg"
    >
      <h2 className="mt-2 text-center">Signup</h2>
      <Form className="d-flex flex-column gap-2">
        <Form.Group>
          <Form.Control type="text" placeholder="First Name" required />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" placeholder="Last Name" required />
        </Form.Group>

        <Form.Group>
          <Form.Control type="text" placeholder="Username" required />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Control type="email" placeholder="Email" required />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Control
            type="password"
            placeholder="Enter your password"
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Control
            type="password"
            placeholder="Enter your password again"
            required
          />
        </Form.Group>

        <Button variant="success" type="submit" className="mt-2 w-100">
          Signup
        </Button>

        <div className="mt-1 text-center">
          <span>Allready have an account? </span>
          <Link to="/login" className="fw-bold text-decoration-none">
            Login
          </Link>
        </div>
      </Form>
    </Container>
  );
};

export default Signup;
