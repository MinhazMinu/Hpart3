import React, { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import States from "./components/States";
const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });
  const [feedback, setFeedback] = useState(false);
  const handleGoodClick = (event) => {
    let temp = {};
    if (event.target.textContent === "Good") {
      temp = { ...state, good: state.good + 1 };
    } else if (event.target.textContent === "Neutral") {
      temp = { ...state, neutral: state.neutral + 1 };
    } else {
      temp = { ...state, bad: state.bad + 1 };
    }
    setFeedback(true);

    setState(temp);
  };
  return (
    <>
      <Header text={"Feedback"} />
      <Button
        value={state.good}
        handleGoodClick={handleGoodClick}
        text={"Good"}
      />
      <Button
        value={state.neutral}
        handleGoodClick={handleGoodClick}
        text={"Neutral"}
      />
      <Button
        value={state.bad}
        handleGoodClick={handleGoodClick}
        text={"Bad"}
      />
      <Header text="statistics" />
      {!feedback ? (
        "loading"
      ) : (
        <div>
          <States states={state} />
        </div>
      )}
    </>
  );
};

export default App;
