import React, { useState } from "react";
import Maxancedotes from "./components/Maxancedotes";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [voteCount, setVoteCount] = useState(
    new Array(anecdotes.length).fill(0)
  );
  const [show, setShow] = useState(false);
  const handleNext = (event) => {
    const rand = Math.trunc(Math.random() * anecdotes.length) + 1;
    setSelected(rand);
  };
  const handleVote = (selected) => {
    const newVote = [...voteCount];
    newVote[selected]++;
    setVoteCount(newVote);
    setShow(true);
  };
  const hi = selected.max;

  return (
    <>
      <div>{anecdotes[selected]}</div>
      <p>has {voteCount[selected]} Vote</p>
      <button onClick={handleNext}>Next Ancedotes</button>
      <button onClick={() => handleVote(selected)}>Vote</button>
      <div>
        {show && (
          <Maxancedotes
            anecdotes={anecdotes[voteCount.indexOf(Math.max(...voteCount))]}
            voteCount={Math.max(...voteCount)}
          />
        )}
      </div>
    </>
  );
};

export default App;
