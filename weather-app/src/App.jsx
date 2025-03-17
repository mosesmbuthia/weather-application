import React, { useState } from 'react';
import './App.css';
import sunset from "./assets/sunset.jpg"

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const searchLocation = async () => {
    if (!location.trim()) {
      console.error("Location cannot be empty");
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=6e7ad9534f534c7025d80de38b02e59b`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const result = await response.json();
      setData(result);
      console.log(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='app' style={{ backgroundImage: `url(${sunset} no-repeat center center/cover)` }} >
      <div className="container">
        <div className="top">
          <div className="search">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter Location"
              type="text"
            />
            <button className='search-btn' onClick={searchLocation}>
              Search
            </button>
          </div>
          <div className="location">
            <p>{data?.name}</p>
          </div>
          <div className="temperature">
            {data?.main?.temp ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data?.weather?.length > 0 ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data?.name && (
          <div className="bottom">
            <div className="feeling">
              {data?.main?.feels_like ? <p>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data?.main?.humidity ? <p>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind-speed">
              {data?.wind?.speed ? <p>{data.wind.speed} km/h</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
