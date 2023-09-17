import { CartItem } from "../../components/CartItem";
import "./index.css";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";

const CartHeader = () => {
  return (
    <>
      <div className="row cart-header-container">
        <div className="col-lg-2"></div>
        <div className="col-lg-4">Product Name</div>
        <div className="col-lg-2">Price</div>
        <div className="col-lg-2">Quantity</div>
        <div className="col-lg-2">Total</div>
      </div>
    </>
  );
};

export const Cart = () => {
  const { appState, setAppState } = useContext(AppContext);

  const { cartItems } = appState;
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="cart-no-item">
          <div>
            <img
              src="https://i01.appmifile.com/webfile/globalimg/i18n_frontend/cart/cart-empty.svg"
              alt=""
            />
            <p>Your Shopping cart is empty</p>
          </div>
        </div>
      ) : (
        <>
          <div className="cart-container">
            <CartHeader />
            {cartItems.map((item) => (
              <CartItem productDetails={item} />
            ))}
          </div>
        </>
      )}
    </>
  );
};
