import React from "react";

const Input = ({ val, handel, palce }) => {
  return (
    <div>
      <input value={val} onChange={handel} placeholder={palce} />
    </div>
  );
};

export default Input;
