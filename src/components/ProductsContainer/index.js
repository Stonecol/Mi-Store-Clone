import { DisplayCard } from "../DisplayCard";
export const ProductsContainer = ({props}) => {
  return (
    <>
      <div className="conatiner p-4">
        <div className="row">
          {props.map((product) => (
            <>
              <div className="col-lg-3 my-2">
                <DisplayCard props={product} />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
