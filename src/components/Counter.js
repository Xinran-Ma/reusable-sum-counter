import React from "react";

const Counter = ({ counter, plusOne, reduceOne, flag }) => {
  return (
    <div className="counter">
      <button className="counter__reduce" onClick={() => reduceOne(flag)}>
        -
      </button>
      <span className="counter__number">
        {counter[flag] !== undefined ? counter[flag] : "0"}
      </span>
      <button className="counter__plus" onClick={() => plusOne(flag)}>
        +
      </button>
    </div>
  );
};

export default Counter;
