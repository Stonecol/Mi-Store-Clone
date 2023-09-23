import "./index.css";
export const CartProgressCard = () => {
  return (
    <>
      <div className="cart-progress-content">
        <div className="cart-status">
          <span>1</span>
          <h6>Shopping Cart</h6>
          <div className="cart-progress-rule"></div>
        </div>
        <div className="cart-status">
          <span>2</span>
          <h6>Checkout</h6>
          <div className="cart-progress-rule"></div>
        </div>
        <div className="cart-status">
          <span>3</span>
          <h6>Review</h6>
        </div>
      </div>
    </>
  );
};
