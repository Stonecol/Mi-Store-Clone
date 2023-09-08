import { Card, Button, Badge } from "react-bootstrap";
import "./index.css";
import { CartModal } from "../CartModal";
import { useState } from "react";

export const DisplayCard = ({ props }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card className="border-0 c-card">
        <Card.Body>
          <Badge bg="danger">{`${props.discount}% off`}</Badge>
          <div className="c-content">
            <div>
              <Card.Title className="c-title">{props.name}</Card.Title>
              <Card.Text className="c-font">{`From ₹${props.price}`}</Card.Text>
            </div>
          </div>
          <div className="m-1 c-content mt-3">
            <Button
              variant="dark"
              className="m-1 px-4 rounded-3"
              size="sm"
              onClick={handleShow}
            >
              Buy Now
            </Button>
            <CartModal show={show} setShow={setShow} productDetails={props} />
            <Button
              variant="outline-dark"
              className="m-1 px-4 rounded-3"
              size="sm"
            >
              Learn More
            </Button>
          </div>
        </Card.Body>
        <Card.Img className="display-img mb-4" variant="top" src={props.img} />
      </Card>
    </>
  );
};
