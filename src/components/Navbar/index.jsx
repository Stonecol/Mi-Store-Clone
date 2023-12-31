import { useContext } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/appContext";

export const Navbar = () => {
  const navigate = useNavigate();
  const context = useContext(AppContext);
  return (
    <>
      <div className="nav-bar">
        <nav>
          <div className="wrapper d-flex justify-content-between">
            <div className="link-wrapper">
              <div
                className="nav-item"
                onClick={() => {
                  navigate("/");
                }}
              >
                <a className="c-nav-links">Home</a>
              </div>
              <div
                className="nav-item"
                onClick={() => {
                  navigate("/phone");
                }}
              >
                <a className="c-nav-links">Phone</a>
              </div>
              <div
                className="nav-item"
                onClick={() => {
                  navigate("/smart-home");
                }}
              >
                <a className="c-nav-links">TV & Smart Home</a>
              </div>
              <div
                className="nav-item"
                onClick={() => {
                  navigate("/smart-office");
                }}
              >
                <a className="c-nav-links">Laptop & Tablet</a>
              </div>
              <div
                className="nav-item"
                onClick={() => {
                  navigate("/life-style");
                }}
              >
                <a className="c-nav-links">LifeStyle</a>
              </div>
            </div>
            <div className="d-flex">
              <div
                className="my-icons"
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <i className="bi bi-cart"></i>
                {context.appState.cartItems.length > 0 && (
                  <span className="cart-value">
                    {context.appState.cartItems.length}
                  </span>
                )}
              </div>
              <div className="my-icons">
                <i className="bi bi-person"></i>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
