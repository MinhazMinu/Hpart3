import React from "react";

const Content = ({ part, exercises }) => {
  return (
    <div>
      <li>
        {part} : {exercises}{" "}
      </li>
    </div>
  );
};

export default Content;
