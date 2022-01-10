import React from "react";

const Button = ({ value, handleGoodClick, text }) => {
  return (
    <div>
      <button value={value} onClick={handleGoodClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
