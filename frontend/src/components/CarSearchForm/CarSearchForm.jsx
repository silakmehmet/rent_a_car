import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const CarSearchForm = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSearch = () => {
    console.log(startDate, endDate);
  };

  return (
    <Container fluid>
      <div className="text-center mb-4">
        <h2 className="text-dark">Search the Car You Need!</h2>
      </div>
      <Form>
        <Row className="justify-content-evenly">
          <Col xs={12} sm={6} md={4} lg={3}>
            <Form.Group controlId="startDate" className="fw-bold text-center">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-100 form-control-sm border border-dark-subtle"
              />
            </Form.Group>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}>
            <Form.Group controlId="endDate" className="fw-bold text-center">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-100 form-control-sm border border-dark-subtle"
              />
            </Form.Group>
          </Col>

          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex align-items-end mt-3 mt-md-0"
          >
            <Button variant="danger" onClick={handleSearch} className="w-100">
              Find Cars
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default CarSearchForm;
