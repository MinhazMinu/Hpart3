import React from "react";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Total from "./components/Total";

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];
  return (
    <div>
      <Header course={course} />
      <Contents parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
