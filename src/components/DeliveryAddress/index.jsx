import { AddressCard } from "../AddressCard";
import "./index.css";

export const DeliveryAddress = () => {
  return (
    <>
      <div className="delivery-address-container">
        <div className="delivery-header">
          <h5>Delivery address</h5>
          <AddressCard addressData={true} />
          <AddressCard addressData={false} />
        </div>
      </div>
    </>
  );
};
