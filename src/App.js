import React, { useState } from "react";
import { Container } from "react-bootstrap";
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
        // console.log(result);
        setRender(true);
        setCityWeather(result);
        
      });
  };
  return (
    <>
    <CityInput
      city={city}
      setCity={setCity}
      fetchCityWeather={fetchCityWeather}
    />
    <Container>
     {render && <CityWeather cityWeather={cityWeather} city={city}/>}
     </Container>
     </>
  );
}

export default App;
