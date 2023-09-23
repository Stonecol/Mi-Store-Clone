import "./index.css"
export const CartNoItem = () => {
    return (
      <>
        <div className="cart-no-item">
          <div>
            <img
              src="https://i01.appmifile.com/webfile/globalimg/i18n_frontend/cart/cart-empty.svg"
              alt=""
            />
            <p>Your Shopping cart is empty</p>
          </div>
        </div>
      </>
    );
  };