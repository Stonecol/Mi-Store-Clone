import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { SummaryItem } from "../SummaryItem";
import "./index.css";
import { findCartTotal, formatPrice } from "../../utils/utils";

export const OrderSummary = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { cartItems } = appState;
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
              <p className="coupons">Apply coupons</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
