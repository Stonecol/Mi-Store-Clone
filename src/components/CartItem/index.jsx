import { Counter } from "../Counter";
import "./index.css";

export const CartItem = ({productDetails}) => {
  return (
    <>
      <div className="row cart-item-container">
        <div className="col-lg-2 cart-item-image">
          <img
            src={productDetails.img}
            alt=""
          />
        </div>
        <div className="col-lg-4 cart-item-name">
          <h5>{productDetails.name} </h5>
          <h6>Xiaomi Technology India Private Limited</h6>
        </div>
        <div className="col-lg-2 cart-item-price">
          <h5>₹{productDetails.price}</h5>
          <h6>₹1,999</h6>
        </div>
        <div className="col-lg-2 cart-item-quantity">
          <Counter />
        </div>
        <div className="col-lg-2 cart-item-total">
          <h5>₹{productDetails.price}</h5>
          <h6>save ₹1,000</h6>
        </div>
      </div>
    </>
  );
};
