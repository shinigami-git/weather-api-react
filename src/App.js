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
      
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=81446193f07574f5c5c54c5684b35f55`
    )
      .then((response) => response.json())
      .then( (result) => {
         
        
         setCityWeather(result);
         setRender(true);
        
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
