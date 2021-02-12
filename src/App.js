import React, { useState } from "react";
import "./App.css";
import CityInput from "./components/CityInput";
import CityWeather from "./components/CityWeather";

function App() {
  const [city, setCity] = useState("");
  const [cityWeather, setCityWeather] = useState({});
  const [render, setRender] = useState(false);
  const fetchCityWeather = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.main);
        setRender(true);
        setCityWeather(result.main);
      });
  };
  return (
    <>
    <CityInput
      city={city}
      setCity={setCity}
      fetchCityWeather={fetchCityWeather}
    />
     {render && <CityWeather cityWeather={cityWeather}/>}
     </>
  );
}

export default App;
