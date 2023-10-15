import "./index.css";
export const SummaryItem = ({ item }) => {
  return (
    <>
      <div className="order-summary-item">
        <img className="summary-item-img" src={item.img} alt="summary-item" />
        <div className="summary-item__details">
          <p>{item.name}</p>
          <p className="summary-item__details-qty">Quantity: {item.qty}</p>
          <p>Sold by: Xiaomi Technology India Private Limited</p>
        </div>
        <div className="summary-item__price">
          <span className="summary-item__price-discounted">{item.price}</span>
          <span className="summary-item__price-original">₹15,999</span>
        </div>
      </div>
    </>
  );
};
