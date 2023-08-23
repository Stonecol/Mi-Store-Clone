import { Button } from "react-bootstrap";
import "./index.css";
export const Homepage = () => {
  return (
    <>
      <div className="c-home-trending">
        <div className="c-home-content">
          <h2 className="c-home-title">Redmi Note 12 5G</h2>
          <h4>Now Available in Sunrise Gold</h4>
          <h4>From ₹14,999*</h4>
          <Button variant="light" className="c-homepage-button rounded-3 px-4">
            Shop Now
          </Button>
        </div>
      </div>
    </>
  );
};
