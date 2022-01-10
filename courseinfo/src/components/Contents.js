import React from "react";
import Content from "./Content";

const Contents = ({ parts }) => {
  const total = 0;
  return (
    <>
      {parts.map((part) => (
        <Content key={part.name} part={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};
export default Contents;
