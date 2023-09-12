import { Button } from "react-bootstrap";
import "./index.css";
export const Trending = ({ props }) => {
  return (
    <>
      <div className="c-home-trending">
        <img src={props.bg} />
        <div className="c-home-content">
          <h1 className="c-home-title">{props.name}</h1>
          <h3>{props.para1}</h3>
          <h4>{props.price ? `From ₹${props.price}` : ""}</h4>
          <Button variant="light" className="c-homepage-button rounded-3 px-4">
            Shop Now
          </Button>
        </div>
      </div>
    </>
  );
};
