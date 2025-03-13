import React from 'react';
import "./index.css";

const WeatherCard = ({
  weather,
  unit,
  onAddFavorite,
  onRemoveFavorite,
  isFavorite,
}) => {

  return (
    <tr className="weather-card">
      <td>{weather.city}</td>
      <td>{ unit ==='C' ? `${weather.temperature}º ${unit}` : `${(weather.temperature * 9/5) + 32}º ${unit}`}</td>
      <td>{weather.description}</td>
      <td>
        <button onClick={() => onAddFavorite(weather)}>
          Add to favorites
        </button>
      </td>
    </tr>
  );
};

export default WeatherCard;

