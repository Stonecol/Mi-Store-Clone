import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import "./index.css";

export const CarouselContent = ({props}) => {
  return (
    <>
      <img
        src={props.img}
        alt=""
        className="d-block w-100 c-img"
      />
      <Carousel.Caption className="c-carousel-controls">
        <div>
          <h6>{props.para1}</h6>
          <h2>{props.name}</h2>
          <h4>{props.para2}</h4>
          <div className="mt-5">
            <h4>{`From ₹${props.price}`}</h4>
            <Button variant="light" size="sm" className="c-btn rounded-3">Buy Now</Button>
            <a className="c-links" href="#">
              Learn More<i class="arrow right"></i>
            </a>
          </div>
        </div>
      </Carousel.Caption>
    </>
  );
};
