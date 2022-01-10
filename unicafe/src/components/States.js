import React from "react";
import State from "./State";
const States = ({ states }) => {
  let sum = 0;
  let avg = 0;
  let positive = 0;
  Object.entries(states).map(([k, v], i) => {
    sum += v;
    if (k == "good") {
      avg += v * 1;
    } else if (k == "bad") {
      avg += v * -1;
    }
  });
  console.log(sum);

  return (
    <ul>
      {Object.entries(states).map(([k, v], i) => (
        <State key={i} name={k} value={v} />
      ))}
      Total :{sum}
      Avg :{avg ? avg / sum : 0}
      positive : {}
    </ul>
  );
};

export default States;
