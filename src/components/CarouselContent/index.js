import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
export const CarouselContent = () => {
  return (
    <>
      <img
        src="https://i03.appmifile.com/728_operator_in/05/08/2023/fbecd7cbf1212fd4ab3ce250651b3f74.jpg?f=webp"
        alt=""
        className="d-block w-100 c-img"
      />
      <Carousel.Caption className="c-carousel-controls">
        <div>
          <h3>Just Launched</h3>
          <h2>Redmi Note 12 Pro 5G</h2>
          <h4>Biggest Display ever</h4>
          <div className="mt-5">
            <Button variant="light">Buy Now</Button>
            <a className="c-links" href="#">
              Learn More<i class="arrow right"></i>
            </a>
          </div>
        </div>
      </Carousel.Caption>
    </>
  );
};
