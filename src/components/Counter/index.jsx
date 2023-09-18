import { useState } from "react";
import "./index.css";
export const Counter = () => {
  const [val, setVal] = useState(1);
  const handleMinus = () => {
    if (val > 1) setVal(val - 1);
  };
  const handlePlus = () => {
    if (val < 5) setVal(val + 1);
  };
  return (
    <>
      <div className="counter-wrapper">
        <span className="minus" onClick={handleMinus}>
          -
        </span>
        <span className="count">{val}</span>
        <span className="plus" onClick={handlePlus}>
          +
        </span>
      </div>
    </>
  );
};
