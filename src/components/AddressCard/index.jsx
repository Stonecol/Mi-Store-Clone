import "./index.css";
export const AddressCard = ({ addressData }) => {
  return (
    <>
      {addressData ? (
        <div className="address-card-container">
          <div className="address-details-container">
            <div className="address-fields">
              <p className="address__user-name">John Doe</p>
              <p className="address__phone">+91 999****999</p>
              <p>Kalamb, Yavatmal</p>
              <p>445401, Maharashtra</p>
            </div>
            <div className="address-icons">
              <button class="btn btn-outline-primary btn-sm default-badge">
                Default
              </button>
              <i class="bi bi-trash address-op-icons"></i>
              <i class="bi bi-pencil-square address-op-icons"></i>
            </div>
          </div>
        </div>
      ) : (
        <div className="addnew-card-container">
          <div className="new-address-card">
            <center>
              <p>
                Add new address
                <i className="bi bi-chevron-right add-arrow"></i>
              </p>
            </center>
          </div>
        </div>
      )}
    </>
  );
};
