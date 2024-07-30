import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousal = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <ExampleCarouselImage  />
         
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage  />
          
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage  />
         
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousal;
