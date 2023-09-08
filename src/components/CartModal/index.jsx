import { Modal, Button } from "react-bootstrap";
import { Counter } from "../Counter";
import "./index.css";
export const CartModal = ({ show, setShow, productDetails }) => {
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="quantity">
            <p>Qty:</p>
            <Counter />
          </div>
          <div className="item-details">
            <div className="price-details">
              <p>{productDetails.name}</p>
              <p>₹{productDetails.price} <span className="item-discount">₹2000</span></p>
              
            </div>
            <div className="price-details">
              <p>Total:</p>
              <p className="total-price">₹{productDetails.price}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
