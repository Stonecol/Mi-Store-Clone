import "./index.css"
export const CartHeader = () => {
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