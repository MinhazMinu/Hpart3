import React from "react";
import Input from "./Input";

const PersonsForm = ({ newName, newNumber, handleInput, handleClick }) => {
  return (
    <div>
      <form>
        <div>
          name: <Input val={newName} handel={handleInput} palce="Name" />
        </div>
        <div>
          Number: <Input val={newNumber} handel={handleInput} palce="Number" />
        </div>
        <div>
          <button type="submit" onClick={handleClick}>
            add
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonsForm;
