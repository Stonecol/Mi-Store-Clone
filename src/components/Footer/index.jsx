import {
  faFacebookSquare,
  faSquareInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputGroup, Form, Button } from "react-bootstrap";
const FooterForm = () => {
  return (
    <>
      <div className="footer-social">
        <h6 className="social-header">FOLLOW Mi</h6>
        <div>
          <FontAwesomeIcon
            icon={faFacebookSquare}
            className="foot-social-icon"
          />
          <FontAwesomeIcon
            icon={faTwitterSquare}
            className="foot-social-icon"
          />
          <FontAwesomeIcon
            icon={faSquareInstagram}
            className="foot-social-icon"
          />
        </div>
        <h6>Let's stay in touch</h6>
        <div>
          <div className="footer-email-field">
            <input
              type="email"
              className="footer-email-input"
              placeholder="Enter email address"
              aria-label="Enter email address"
              aria-describedby="submit-email"
            />
            <button
              className="btn btn-outline-secondary footer-btn"
              type="button"
              id="submit-email"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="site-footer row">
          <div className="footer-col col-lg-2 col-md-3">
            <h6>Support</h6>
            <ul>
              <li>
                <a className="footer-link">Online Help</a>
              </li>
              <li>
                <a className="footer-link">Customer Service</a>
              </li>
              <li>
                <a className="footer-link">Shipping FAQ</a>
              </li>
              <li>
                <a className="footer-link">Mi Exchange</a>
              </li>
              <li>
                <a className="footer-link">Bulk Orders</a>
              </li>
              <li>
                <a className="footer-link">User Guide</a>
              </li>
              <li>
                <a className="footer-link">Laptop Drivers</a>
              </li>
              <li>
                <a className="footer-link">Mi Screen Protect</a>
              </li>
              <li>
                <a className="footer-link">Mi Extended Warranty</a>
              </li>
              <li>
                <a className="footer-link">Mi Complete Protect</a>
              </li>
              <li>
                <a className="footer-link">Certification</a>
              </li>
              <li>
                <a className="footer-link">Service Centre</a>
              </li>
            </ul>
          </div>
          <div className="footer-col col-lg-2 col-md-3">
            <h6>SHOP AND LEARN</h6>
            <ul>
              <li>
                <a className="footer-link">Xiaomi Phones</a>
              </li>
              <li>
                <a className="footer-link">Redmi Phones</a>
              </li>
              <li>
                <a className="footer-link">Tv's</a>
              </li>
              <li>
                <a className="footer-link">Laptops and Tablets</a>
              </li>
              <li>
                <a className="footer-link">Audio</a>
              </li>
              <li>
                <a className="footer-link">Lifestyle</a>
              </li>
              <li>
                <a className="footer-link">Smart Home</a>
              </li>
            </ul>
          </div>
          <div className="footer-col col-lg-2 col-md-3">
            <h6>RETAIL STORE</h6>
            <ul>
              <li>
                <a className="footer-link">Mi Home</a>
              </li>
              <li>
                <a className="footer-link">Mi Authorized Store</a>
              </li>
              <li>
                <a className="footer-link">Mi Store Franchise</a>
              </li>
            </ul>
          </div>
          <div className="footer-col col-lg-2 col-md-3">
            <h6>ABOUT US</h6>
            <ul>
              <li>
                <a className="footer-link">Xiaomi</a>
              </li>
              <li>
                <a className="footer-link">Privacy Policy</a>
              </li>
              <li>
                <a className="footer-link">User Agreement</a>
              </li>
              <li>
                <a className="footer-link">Integrity & Compliance</a>
              </li>
              <li>
                <a className="footer-link">CSR and Disclosures</a>
              </li>
              <li>
                <a className="footer-link">E-Waste Management</a>
              </li>
              <li>
                <a className="footer-link">In The Press</a>
              </li>
              <li>
                <a className="footer-link">Trust Center</a>
              </li>
              <li>
                <a className="footer-link">Culture</a>
              </li>
              <li>
                <a className="footer-link">Smartphone Quality</a>
              </li>
              <li>
                <a className="footer-link">TV Quality</a>
              </li>
              <li>
                <a className="footer-link">Service Quality</a>
              </li>
            </ul>
          </div>
          <div className="footer-col col-lg-4 col-md-12">
            <FooterForm />
          </div>
        </div>
        <div className="copyright-section">
          <hr className="hr-rule" />
          <p>Copy of mi.com - All Images taken from mi.com</p>
        </div>
      </div>
    </>
  );
};
