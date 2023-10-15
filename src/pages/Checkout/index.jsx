import { CartProgressCard } from "../../components/CartProgressCard";
import { DeliveryAddress } from "../../components/DeliveryAddress";
import { OrderSummary } from "../../components/OrderSummary";
import "./index.css";
export const Checkout = () => {
  return (
    <>
      <div className="checkout-container">
        <CartProgressCard />
        <div className="checkout-info-container row">
          <div className="col-lg-7 delivery-info-container">
            <DeliveryAddress />
          </div>
          <div className="col-lg-5 order-info-container">
            <OrderSummary />
          </div>
        </div>
      </div>
    </>
  );
};
