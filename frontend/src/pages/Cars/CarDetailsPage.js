import React from "react";
import CarMainPage from "../../components/Cars/CarMainPage";
import CarDetail from "../../components/Cars/CarDetail";

const CarDetailsPage = () => {
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
    <div>
      <CarMainPage infoText={car.brand} />
      <CarDetail car={car} />
    </div>
  );
};

export default CarDetailsPage;
