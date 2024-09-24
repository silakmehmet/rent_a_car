import React from "react";

import ImageSlider from "../../components/ImageSlider/ImageSlider";
import CarSearchForm from "../../components/CarSearchForm/CarSearchForm";

import "./Home.css";

const Home = () => {
  return (
    <div className="position-relative">
      <ImageSlider />
      <div className="search-overlay">
        <CarSearchForm />
      </div>
      <div class="position-fixed bottom-0 mb-1 d-flex flex-column align-items-center">
        <h1 className="text-dark">About Us</h1>
        <p className="w-75">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          pariatur praesentium molestias labore sapiente nobis quidem eveniet,
          illum corporis accusantium magnam doloribus perferendis in velit
          voluptatem excepturi, reprehenderit explicabo numquam?
        </p>
      </div>
    </div>
  );
};

export default Home;
