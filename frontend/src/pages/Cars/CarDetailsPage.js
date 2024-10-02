import React, { useState } from "react";
import CarMainPage from "../../components/Cars/CarMainPage";
import CarDetail from "../../components/Cars/CarDetail";
import CarReservation from "../../components/Cars/CarReservation";
import { Container } from "react-bootstrap";
import { scroller } from "react-scroll";

const CarDetailsPage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleRentClick = () => {
    setShowForm(true);
    // smoothly scrolling to reservation section
    setTimeout(() => {
      scroller.scrollTo("reservationSection", {
        duration: 1000,
        delay: 0,
        smooth: "easeInOutExpo",
      });
    }, 50);
  };

  const car = {
    brand: "Dacia Sandero",
    rentPerDay: "8000.00",
    model: "2021",
    gears: "Automatic",
    kilometers: "63418",
    motor: "V-6 Cylinder",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7cVn3Em6dZyMQ5iWhXhvn_eVNFvJ8UnML_A&s",
    gps: true,
    abs: true,
    remoteKeyless: true,
    rearSeatScreen: false,
  };

  return (
    <Container fluid className="m-0 p-0 d-flex flex-column">
      <CarMainPage infoText={car.brand} />
      <CarDetail car={car} onRentClick={handleRentClick} showForm={showForm} />
      {showForm && (
        <div id="reservationSection">
          <CarReservation car={car} />
        </div>
      )}
    </Container>
  );
};

export default CarDetailsPage;
