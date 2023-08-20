import { DisplayCard } from "../DisplayCard";

export const ProductsContainer = () => {
  return (
    <>
      <div className="conatiner">
        <div className="row">
          <div className="col-lg-3">
            <DisplayCard />
          </div>
          <div className="col-lg-3">
            <DisplayCard />
          </div>
          <div className="col-lg-3">
            <DisplayCard />
          </div>
          <div className="col-lg-3">
            <DisplayCard />
          </div>
        </div>
      </div>
    </>
  );
};
