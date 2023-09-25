import { Modal, Button } from "react-bootstrap";
import { Counter } from "../Counter";
import "./index.css";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { findCartItem } from "../../utils/utils";
import { useState } from "react";
export const CartModal = ({ show, setShow, productDetails }) => {
  const [val, setVal] = useState(1);
  const { appState, setAppState } = useContext(AppContext);
  const handleClose = () => setShow(false);

  const handleAddtoCart = () => {
    const newCartItems = [...appState.cartItems];
    const item = findCartItem(newCartItems, productDetails.name);
    if (item.length > 0) {
      let index = newCartItems.indexOf(item[0]);
      newCartItems[index].qty += val;
    } else {
      const product = productDetails;
      product.qty = val;
      newCartItems.push(product);
    }
    setAppState({ cartItems: newCartItems });
    setShow(false);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Price Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="quantity">
            <p>Qty:</p>
            <Counter val={val} setVal={setVal} />
          </div>
          <div className="item-details">
            <div className="price-details">
              <p>{productDetails.name}</p>
              <p>
                ₹{productDetails.price}
                <span className="item-discount">₹2000</span>
              </p>
            </div>
            <div className="price-details">
              <p>Total:</p>
              <p className="total-price">₹{productDetails.price}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleAddtoCart}>
            Add to Cart
          </Button>
          <Button variant="outline-dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
