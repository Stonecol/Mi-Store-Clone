import { formatPrice } from "../../utils/utils";
import "./index.css";
import { useNavigate } from "react-router-dom";

export const CartCheckout = ({ totalAmount, noOfItems }) => {
  const navigate = useNavigate();
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
          <button
            className="cart-checkout-btn"
            onClick={() => {
              navigate("/checkout");
            }}
          >
            <span>{`Checkout(${noOfItems})`}</span>
          </button>
        </div>
      </div>
    </>
  );
};
