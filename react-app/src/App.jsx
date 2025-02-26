import React from 'react';
import './App.css';
import WeatherList from './components/WeatherList';

const title = "Weather Dashboard";

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <h1>{title}</h1>
        </header>
        <WeatherList />
    </div>
  );
}

export default App;
