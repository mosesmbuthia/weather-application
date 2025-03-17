import React, { useState } from 'react'
import './App.css'


function App() {
  const { data, setData } = useState({});
  const { location, setLocation } = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid={6e7ad9534f534c7025d80de38b02e59b}`

  const searchLocation = async () => {
    if (location) {
      try {
        const response = await fetch(url);
        const result = await response?.json();
        setData(result)
        console.log(result);

      } catch (e) {
        console.error('Error fetching data:', e);
      }
      setLocation('');
    }
  };
  return (

    <div className='app' >
      <div className="container">
        <div className="top">
          <div className="search">
            <input
              value={location}
              onChange={event => setLocation(event.target.value)}
              placeholder='Enter Location'
              
              type="text" />
              <button className='search-btn'
              onClick={searchLocation}
              >Search</button>
          </div>
          <div className="location">
            <p>{data.main}</p>
          </div>
          <div className="temparature">
           {data.main? <h1>{data.main.temp}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather?<p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feeling">
            <p>30&#0176;C</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p>20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind-speed">
            <p>16km/hr</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
