import React from "react";
import { carInterior } from "../../utils/cars";

const CarMainPage = ({ infoText }) => {
  return (
    <div className="position-relative overflow-hidden">
      <img
        className="d-block w-100"
        src={carInterior}
        alt={"carInteriorImage"}
        style={{ height: "30vh", objectFit: "cover" }}
      />
      <p className="position-absolute top-50 text-white ms-5 ps-5 fs-3">
        {infoText}
      </p>
    </div>
  );
};

export default CarMainPage;
