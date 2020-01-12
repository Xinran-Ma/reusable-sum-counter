import React from "react";

const Total = ({ counter }) => {
  let counterSum = 0;

  Object.keys(counter).map(key => {
    return (counterSum += counter[key]);
  });

  return (
    <div className="total">
      <span className="total__text">Total</span>
      <span className="total__number">{counterSum}</span>
    </div>
  );
};
export default Total;
