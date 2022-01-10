import React from "react";

const Maxancedotes = ({ anecdotes, voteCount }) => {
  return (
    <div>
      <h5>
        {anecdotes} {voteCount}{" "}
      </h5>
    </div>
  );
};

export default Maxancedotes;
