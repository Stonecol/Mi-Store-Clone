import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./index.css";
import { CarouselContent } from "../CarouselContent";
export const CarouselCard = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={2000}>
          <CarouselContent />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <CarouselContent />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <CarouselContent />
        </Carousel.Item>
      </Carousel>
    </>
  );
};
