import React from "react";

const Total = ({ parts }) => {
  let total = parts.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.exercises;
  }, 0);
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
};

export default Total;
