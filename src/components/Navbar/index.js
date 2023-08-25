import "./index.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
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
                <a className="c-nav-links" href="#">
                  Home
                </a>
              </div>
              <div
                className="nav-item"
                onClick={() => {
                  navigate("/phone");
                }}
              >
                <a className="c-nav-links" href="#">
                  Phone
                </a>
              </div>
              <div
                className="nav-item"
                onClick={() => {
                  navigate("/smart-home");
                }}
              >
                <a className="c-nav-links" href="#">
                  TV & Smart Home
                </a>
              </div>
              <div
                className="nav-item"
                onClick={() => {
                  navigate("/smart-office");
                }}
              >
                <a className="c-nav-links" href="#">
                  Laptop & Tablet
                </a>
              </div>
              <div
                className="nav-item"
                onClick={() => {
                  navigate("/life-style");
                }}
              >
                <a className="c-nav-links" href="#">
                  LifeStyle
                </a>
              </div>
            </div>
            <div className="d-flex">
              <div className="my-icons">
                <i class="bi bi-cart"></i>
              </div>
              <div className="my-icons">
                <i class="bi bi-person"></i>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
