import { CartItem } from "../../components/CartItem";
import "./index.css";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { CartHeader } from "../../components/CartHeader";
import { CartNoItem } from "../../components/CartNoItem";
import { CartProgressCard } from "../../components/CartProgressCard";
import { CartCheckout } from "../../components/CartCheckout";
import { findCartTotal } from "../../utils/utils";
export const Cart = () => {
  const { appState, setAppState } = useContext(AppContext);

  const { cartItems } = appState;

  return (
    <>
      <CartProgressCard />

      {cartItems.length === 0 ? (
        <CartNoItem />
      ) : (
        <>
          <div className="cart-container">
            <CartHeader />
            {cartItems.map((item) => (
              <CartItem
                productDetails={item}
                cartItems={cartItems}
                setAppState={setAppState}
              />
            ))}
          </div>
          <CartCheckout
            noOfItems={cartItems.length}
            totalAmount={findCartTotal(cartItems)}
          />
        </>
      )}
    </>
  );
};
