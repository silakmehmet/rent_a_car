import React from "react";
import { Carousel } from "react-bootstrap";
import { cars } from "../../utils/cars";

const ImageSlider = () => {
  return (
    <Carousel interval={5000} pause="hover" indicators={false}>
      {cars.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Car ${index + 1}`}
            style={{ height: "50vh", objectFit: "cover" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
