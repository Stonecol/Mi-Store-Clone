import Carousel from "react-bootstrap/Carousel";
import { CarouselContent } from "../CarouselContent";
export const CarouselCard = ({ props }) => {
  return (
    <>
      <Carousel>
        {props.map((product) => (
          <Carousel.Item interval={2000}>
            <CarouselContent props={product} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
