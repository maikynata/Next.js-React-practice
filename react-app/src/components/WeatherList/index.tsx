import React, { useState } from 'react';
import { weatherData } from '../../data/weatherData';
import WeatherCard from '../WeatherCard';

const WeatherList = () => {

  const [searchedCity, setSearchedCity] = useState<string>('');
  const [favoriteCities, setFavoriteCities] = useState<any>([]);

  const filteredCity = weatherData.filter(city => {
    const matchedCity = city.city.toLowerCase().includes(searchedCity.toLowerCase());
    return matchedCity;
  });

  const handleClearSearch = () => {
    setSearchedCity(''); 
  }

  const handleAddFavorite = (weather) => {
    setFavoriteCities((prevFavorites) => {
      if (prevFavorites.some((city) => city.id === weather.id)) {
        return prevFavorites;
      }
      return [...prevFavorites, weather];
    });
  };

  const handleRenoveFavorite = (weather) => {
    setFavoriteCities((prevFavorites) => {
      return prevFavorites.filter((city) => city.id !== weather.id);
    });
  };

  return (
    <div className="layout-column align-items-center justify-content-start weather-list" data-testid="weather-list">
      <h3>Dashboard</h3>
      <p className="city-details">Search for Current Temperature in cities like: New York, London, Paris etc.</p>
      <div className="card w-300 pt-20 pb-5 mt-5">
        <section className="layout-row align-items-center justify-content-center mt-20 mr-20 ml-20">
          <input
            type="text"
            placeholder="Search city"
            value={searchedCity}
            onChange={(e) => setSearchedCity(e.target.value)}
            data-testid="search-input"
          />
          <button onClick={() => handleClearSearch()} data-testid="clear-search-button">
            Clear search
          </button>
        </section>
        <table className="table search-results">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              searchedCity === '' ?
                <></>
                :
                filteredCity.map((city) => (
                  <WeatherCard
                    key={city.id}
                    weather={city}
                    unit={"C"}
                    onAddFavorite={handleAddFavorite}
                    onRemoveFavorite={() => { }}
                    isFavorite={false}
                  />
                ))
            }
          </tbody>
        </table>
        <section className="layout-row align-items-center justify-content-center mt-20 mr-20 ml-20">
          <button onClick={() => {}} data-testid="unit-change-button" className="outlined">
            Switch to {'Celsius'}
          </button>
        </section>
      </div>
      <h3>Favourite Cities</h3>
      <div className="card w-300 pt-20 pb-5">
        <table className="table favorites">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {favoriteCities.map((weather) => (
            <tr key={weather.id}>
              <td>{weather.city}</td>
              <td>{weather.temperature}</td>
              <td>{weather.description}</td>
              <td>
                <button onClick={() => handleRenoveFavorite(weather)}>Remove</button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WeatherList;
