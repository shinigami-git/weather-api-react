import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";

const CityWeather = ({ cityWeather }) => {
  const { humidity, temp, temp_max, temp_min } = cityWeather;

  return (
    <Container>

      <div>Humidty: {humidity}</div>
      <div>Temperature: {temp}</div>
      <div>Max Temperature: {temp_max}</div>
      <div>Min Temperature: {temp_min}</div>
    </Container>
  );
};

export default CityWeather;
