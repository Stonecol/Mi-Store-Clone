import "./index.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-between full-width">
          <div class="navbar-nav mt-2 mt-lg-0 d-flex justify-content-between">
            <div class="nav-item active">
              <a
                class="nav-link"
                onClick={() => {
                  navigate("/");
                }}
                href="#"
              >
                Home
              </a>
            </div>
            <div class="nav-item">
              <a
                class="nav-link"
                onClick={() => {
                  navigate("/phone");
                }}
                href="#"
              >
                Phone
              </a>
            </div>
            <div class="nav-item">
              <a
                class="nav-link"
                onClick={() => {
                  navigate("/smart-office");
                }}
                href="#"
              >
                Laptop & Tablet
              </a>
            </div>
            <div class="nav-item">
              <a
                class="nav-link"
                onClick={() => {
                  navigate("/smart-home");
                }}
                href="#"
              >
                TV & Smart Home
              </a>
            </div>
            <div class="nav-item">
              <a
                class="nav-link"
                onClick={() => {
                  navigate("/life-style");
                }}
                href="#"
              >
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
    </>
  );
};
