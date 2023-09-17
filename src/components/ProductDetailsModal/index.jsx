import { Modal, Button } from "react-bootstrap";
import "./index.css";
export const ProductDetailsModal = ({
  showProductDetails,
  setShowProductDetails,
}) => {
  const handleClose = () => setShowProductDetails(false);
  return (
    <>
      <Modal size="lg" show={showProductDetails} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="product-details-container">
            <img
              className="product-image"
              src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1650980960.19661951!600x600!85.jpg"
              alt=""
            />
            <div className="product-specs">
              <h2>Xiaomi 12 Pro 5G</h2>
              <div>
                <h4>Specifications</h4>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
