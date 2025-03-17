import React from 'react'
import './App.css'

function App() {
  return (
    
      <div className='app' >
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Nairobi</p>
          </div>
          <div className="temparature">
            <h1>27&#0176;C</h1>
          </div>
          <div className="description">
            <p>Cloudy</p>
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
