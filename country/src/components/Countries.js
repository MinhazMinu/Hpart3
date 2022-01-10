import React from "react";
import Weather from "./Weather";

const Countries = ({ name, capital, flag, handleShowButton }) => {
  return (
    <div>
      <h5>Name : {name}</h5>
      {capital && <h5>Capital : {capital}</h5>}
      {flag && <img src={flag} width="300" height="200" />}
      {handleShowButton && (
        <button value={name} onClick={handleShowButton}>
          Show
        </button>
      )}
      {capital && <Weather capital={capital} />}
    </div>
  );
};

export default Countries;
