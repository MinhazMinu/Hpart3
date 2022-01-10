import React, { useEffect, useState } from "react";
import axios from "axios";
const Weather = ({ capital }) => {
  const [curentWeathert, setNewCurentWeathert] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (!capital) return;
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`
      )
      .then((response) => {
        // console.log(response.data);
        const temp = {
          name: response.data.location.name,
          observation_time: response.data.current.observation_time,
          temperature: response.data.current.temperature,
          weather_descriptions: response.data.current.weather_descriptions[0],
          weather_icons: response.data.current.weather_icons[0],
        };
        setNewCurentWeathert(temp);
      });
  }, [capital]);
  return (
    <>
      <h3>weather</h3>
      <ul>
        <li>Name : {curentWeathert.name}</li>
        <li>observation_time : {curentWeathert.observation_time}</li>
        <li>temperature : {curentWeathert.temperature}</li>
        <li>weather_descriptions : {curentWeathert.weather_descriptions}</li>
        <img src={curentWeathert.weather_icons} alt="icon" />
      </ul>
    </>
  );
};

export default Weather;
