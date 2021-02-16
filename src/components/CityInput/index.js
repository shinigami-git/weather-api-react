import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./style.css";

const CityInput = ({city,setCity,fetchCityWeather}) => {
  
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };
  
  const handleSubmit = () =>{
      if(!city){
          setError("City Field is Empty");
      }else{
          setError("");
          fetchCityWeather();
      }
  }

  return (
    <Container style={{width:"18rem"}}>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label><h1>City</h1></Form.Label>
          <Form.Control
            value={city}
            type="text"
            placeholder="Enter City to get Weather Info"
            onChange={handleInputChange}
          />
          <p className="text-danger"><h6>{error}</h6></p>
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
      </Form>
    </Container>
  );
};

export default CityInput;
