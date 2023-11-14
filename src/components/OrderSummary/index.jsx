import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { SummaryItem } from "../SummaryItem";
import "./index.css";
import { findCartTotal, formatPrice } from "../../utils/utils";
import { Sidebar } from "../Sidebar";
import { useState } from "react";
import { Button } from "react-bootstrap";

export const OrderSummary = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { cartItems } = appState;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="order-summary-container">
        <div>
          <h5 className="order-summary__header">Order summary</h5>
          <h5 className="order-summary__qty">{cartItems.length} item</h5>
          {cartItems.length === 1 ? (
            cartItems.map((item) => <SummaryItem item={item} />)
          ) : (
            <div>
              {cartItems.map((item) => (
                <img
                  className="summary-item-img"
                  src={item.img}
                  alt=""
                  summary-item
                />
              ))}
            </div>
          )}
          <hr />
          <div className="summary__total-section">
            <div>
              <h5>Total</h5>
              <p>Subtotal</p>
              <p>Shipping fee</p>
            </div>
            <div className="summary__total-section-left">
              <h4>{formatPrice(findCartTotal(cartItems))}</h4>
              <p>{formatPrice(findCartTotal(cartItems))}</p>
              <p>Free</p>
            </div>
          </div>
          <hr />
          <div className="summary__coupon-section">
            <div>
              <h5>Coupons</h5>
              <p>0 coupons available</p>
            </div>
            <div>
              <Sidebar show={show} handleClose={handleClose} />
              <a
                className="summary_coupon-link"
                href="#coupons"
                onClick={handleShow}
              >
                <p className="coupons">Apply coupons</p>
              </a>
            </div>
          </div>
          <div className="summary_pay-section d-grid">
            <Button variant="dark" className="summary_pay-btn">Pay Now</Button>
          </div>
        </div>
      </div>
    </>
  );
};
