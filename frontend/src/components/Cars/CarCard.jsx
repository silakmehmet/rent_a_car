import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const CarCard = ({ image, brand, dailyRent, modelYear, transmission, km }) => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Img
        variant="top"
        src={image}
        alt={`${brand}`}
        className="shadow p-1"
      />
      <Card.Body className="text-center">
        <Card.Title className="fw-bold">{brand}</Card.Title>
        <Card.Text className="fw-bold">
          {dailyRent} TL / <span className="text-danger">Day</span>
        </Card.Text>
        <Row className="mb-2">
          <Col
            className="d-flex justify-content-between"
            style={{ fontSize: "0.9rem" }}
          >
            <span className="text-muted">🚗 Model {modelYear}</span>

            <span className="text-muted">⚙️ {transmission}</span>

            <span className="text-muted">📍 {km}km</span>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Button variant="danger" className="w-100">
              Rent
            </Button>
          </Col>
          <Col xs={6}>
            <Button variant="success" className="w-100">
              Details
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CarCard;
