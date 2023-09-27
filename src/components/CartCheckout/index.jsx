import { formatPrice } from "../../utils/utils";
import "./index.css";
export const CartCheckout = ({ totalAmount, noOfItems }) => {
  return (
    <>
      <div className="cart-checkout">
        <div className="cart-checkout-info">
          <span>{`You have ${noOfItems} ${
            noOfItems > 1 ? " items" : "item"
          } in the cart`}</span>
        </div>
        <div>
          <h4 className="cart-checkout-total">
            Total: {formatPrice(totalAmount)}
          </h4>
          <button className="cart-checkout-btn">
            <span>{`Checkout(${noOfItems})`}</span>
          </button>
        </div>
      </div>
    </>
  );
};
