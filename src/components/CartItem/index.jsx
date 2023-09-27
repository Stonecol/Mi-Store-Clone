import { Counter } from "../Counter";
import "./index.css";
import { convertProductPrice, formatPrice } from "../../utils/utils";

export const CartItem = ({ productDetails, cartItems, setAppState }) => {
  const reduceQty = (val) => {
    const index = cartItems.indexOf(productDetails);
    cartItems[index].qty = val;
    setAppState({ cartItems: cartItems });
  };
  const itemTotal =
    productDetails.qty * convertProductPrice(productDetails.price);
  const formattedTotalPrice = formatPrice(itemTotal);
  return (
    <>
      <div className="row cart-item-container">
        <div className="col-lg-2 cart-item-image">
          <img src={productDetails.img} alt="" />
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
          <Counter val={productDetails.qty} setVal={reduceQty} />
        </div>
        <div className="col-lg-2 cart-item-total">
          <h5>{formattedTotalPrice}</h5>
          <h6>save ₹1,000</h6>
        </div>
      </div>
    </>
  );
};
