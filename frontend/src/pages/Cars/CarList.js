import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CarMainPage from "../../components/Cars/CarMainPage";
import CarCard from "../../components/Cars/CarCard";
import { carList } from "../../utils/cars";

const CarList = () => {
  return (
    <Container fluid>
      <CarMainPage infoText={"Avaliable cars for the dates you chosen..."} />
      <Row className="justify-content-center mt-2">
        {carList.map((car, index) => (
          <Col xs={12} sm={6} md={3} key={index}>
            <CarCard
              image={car.image}
              brand={car.brand}
              dailyRent={car.dailyRent}
              modelYear={car.modelYear}
              transmission={car.transmission}
              km={car.km}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CarList;
