import React, { useState } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";

const CarReservation = ({ car }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setTotalPrice(diffDays * car.rentPerDay);
  };

  const handleDateChange = () => {
    if (startDate && endDate) {
      calculateTotalPrice();
    }
  };

  return (
    <Card className="border-0 m-0 p-4 rounded-0">
      <Row>
        <Col md={8}>
          <h4>Personal Information</h4>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Enter your first name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Enter your last name" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <h4>Booking Details</h4>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  onBlur={handleDateChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  onBlur={handleDateChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <h4>Payment Detail</h4>
          <Card>
            <Card.Body>
              <p>Total Price: {totalPrice} TL</p>
              <p>Price per Day: {car.rentPerDay} TL</p>
              <Button variant="success" className="w-100">
                Reserve Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

export default CarReservation;
