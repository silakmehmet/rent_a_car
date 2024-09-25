import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { iconList } from "../../utils/icons";
import { FaCircleXmark, FaCircleCheck } from "react-icons/fa6";

const CarDetail = ({ car }) => {
  // Creating an array of key-value pairs from the car object, filtering out "brand", "rentPerDay", and "image"
  const details = Object.entries(car).filter(
    ([key]) => key !== "brand" && key !== "rentPerDay" && key !== "image"
  );

  // Capitalizing the first letter of each key for better display
  const formatKey = (key) =>
    key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1");

  return (
    <Card className="p-2 rounded-0">
      <Row>
        <Col xs={12} md={6}>
          <Card.Img
            src={car.image}
            alt="Car Image"
            style={{ height: "310px", width: "100%", objectFit: "cover" }}
          />
        </Col>
        <Col xs={12} md={6}>
          <Card.Body>
            <Card.Title>{car.brand}</Card.Title>
            <h4>{car.rentPerDay}TL/Day</h4>
            <Row className="g-0 mb-1">
              {/* Dynamically mapping car properties into two columns */}
              {details.map(([key, value], index) => (
                <Col xs={6} key={index}>
                  <p>
                    {iconList[key] && (
                      <span className="me-2 text-danger-emphasis">
                        {iconList[key]}
                      </span>
                    )}
                    <strong>{formatKey(key)}:</strong>{" "}
                    {typeof value === "boolean" ? (
                      value ? (
                        <FaCircleCheck className="text-success" />
                      ) : (
                        <FaCircleXmark className="text-danger" />
                      )
                    ) : (
                      value
                    )}
                  </p>
                </Col>
              ))}
            </Row>
            <div className="d-flex justify-content-around">
              <Button variant="danger" className="me-2 w-100">
                Rent Car
              </Button>
              <Button variant="warning" className="w-100">
                Cars
              </Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CarDetail;
