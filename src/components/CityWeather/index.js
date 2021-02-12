import React from "react";
import { Container ,Card} from "react-bootstrap";
import "./style.css";

const CityWeather = ({ cityWeather, city }) => {

console.log(cityWeather);
let { humidity, temp_min, temp_max } = cityWeather.main;
let {dt} =cityWeather;
let {icon} = cityWeather.weather[0];
const date = new Date(dt*1000);
return (
    <Card border="dark" bg="info" style={{width: '18rem'}} className="card" >
      <Card.Img
        style={{height:"32vh"}}
        variant="top"
        
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      
      <Card.Body>
          
        <Card.Title>{cityWeather.name}</Card.Title>
        
        <p>
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </p>
        
        <p>Min Temp: {temp_min}</p>
        
        <p>Max Temp: {temp_max}</p>

        <p>Humidity: {humidity}</p>

      </Card.Body>
    </Card>
  );

};

export default CityWeather;



