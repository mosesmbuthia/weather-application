import React from 'react'
import './App.css'

function App() {
  return (
    
      <div className='app' >
      <h1>weather today</h1> 
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
          </div>
          <div className="humidity">
            <p>Humidity 20%</p>
          </div>
          <div className="wind-speed">
            <p>16km/hr</p>
          </div>
        </div>
      </div>
      </div>
    
  )
}

export default App
