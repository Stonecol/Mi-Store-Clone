import { Modal, Button } from "react-bootstrap";
import "./index.css";
export const ProductDetailsModal = ({
  showProductDetails,
  setShowProductDetails,
  productDetails
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
              src={productDetails.img}
              alt=""
            />
            <div className="product-specs">
              <h2>{productDetails.name}</h2>
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
