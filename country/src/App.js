import React, { useEffect, useState } from "react";
import axios from "axios";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [find, setFind] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      const res = response.data.map((e) => {
        const temp = {
          capital: e.capital ? e.capital[0] : "",
          name: e.name.official,
          flag: e.flags.png,
        };
        return temp;
      });
      setCountries(res);
    });
  }, []);

  const handleFind = (event) => {
    setFind(event.target.value);
  };

  let countriesToShow = countries.filter((e) =>
    e.name.toLowerCase().match(find.toLowerCase())
  );

  const handleShowButton = (event) => {
    setFind(event.target.value);
  };
  return (
    <>
      Find Country : <input value={find} onChange={handleFind} />
      <h3>Country</h3>
      <div>
        {countriesToShow.length < 10
          ? countriesToShow.length == 1
            ? countriesToShow.map((country) => (
                <Countries
                  key={country.name}
                  name={country.name}
                  capital={country.capital}
                  flag={country.flag}
                />
              ))
            : countriesToShow.map((country) => (
                <Countries
                  key={country.name}
                  name={country.name}
                  handleShowButton={handleShowButton}
                />
              ))
          : "Be more specific"}
      </div>
    </>
  );
};

export default App;
