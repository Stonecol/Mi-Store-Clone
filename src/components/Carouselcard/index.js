import Carousel from "react-bootstrap/Carousel";
import { CarouselContent } from "../CarouselContent";
export const CarouselCard = ({ props }) => {
  return (
    <>
      <Carousel className="mt-5">
        {props.map((product) => (
          <Carousel.Item interval={2000}>
            <CarouselContent props={product} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
