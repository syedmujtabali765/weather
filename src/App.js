
import './App.css';
import axios from 'axios';
import react, { useEffect, useState } from 'react';

function App() {
  const [city, setCity] = useState('karachi');
  const [celsius, setCelsius] = useState();
  const [fLike, setFLike] = useState();
  const [description, setDescription] = useState();
  const [humidity, setHumidity] = useState();

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=901d672d14c778eefb41af3fd3871f1f&units=metric`)
      setCelsius(Math.floor((res.data.main.temp)));
      setFLike(Math.floor((res.data.main.feels_like)));
      setDescription(res.data.weather[0].description)
      setHumidity(res.data.main.humidity)
    }
    getData();
    });
  

  return (
    <div className="App">
    <select value= { city } onChange= {(events) => {
      setCity(events.target.value);
    }}>
      <option>Select Your City</option>
      <option value= 'karachi'>Karachi</option>
      <option value= 'lahore'>Lahore</option>
      <option value= 'islamabad'>Islamabad</option>
      <option value= 'multan'>Multan</option>
      <option value= 'quetta'>Quetta</option>
    </select>
    <h3> Your City is { city } </h3>
    <h1> { celsius }<sup>°C</sup></h1>
    <p>Feel Like: { fLike } </p>
    <h4> { description } </h4>
    <p>Humidity: { humidity }%</p>

    </div>
  );
}

export default App;
