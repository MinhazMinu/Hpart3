import React from "react";

const Persons = ({ person, handleDelete }) => {
  const { name, number, id } = person;
  return (
    <div>
      <h5>
        {name} {number}{" "}
        <button
          value={id}
          onClick={(event) => handleDelete(name, event.target.value)}
        >
          Delete
        </button>
      </h5>
    </div>
  );
};

export default Persons;
