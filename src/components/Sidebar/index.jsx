import { Offcanvas } from "react-bootstrap";
import "./index.css";
export const Sidebar = ({ show, handleClose }) => {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <span className="sidebar__coupon-header">My coupon</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="sidebar__coupon-container">
            <hr />
            <span className="sidebar__avaiable-tab">Available</span>
            <span>|</span>
            <span>Unavailable</span>
            <p className="sidebar__coupon-input-label">Add promo code:</p>
            <div className="sidebar-coupon-field">
              <input
                type="text"
                className="sidebar-coupon-input"
                placeholder="Enter promo code"
                aria-label="Enter promo code"
                aria-describedby="submit-coupon"
              />
              <button
                className="btn btn-outline-dark sidebar-btn"
                type="button"
                id="submit-coupon"
              >
                Add
              </button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
