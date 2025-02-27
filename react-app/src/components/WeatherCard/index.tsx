import React, { useState } from 'react';
import "./index.css";

const WeatherCard = ({
  weather,
  unit,
  onAddFavorite,
  onRemoveFavorite,
  isFavorite,
}) => {

  const [favoriteCities, setFavoriteCities] = useState<any>([]);

  const handleFavoriteClick = (onAddFavorite) => {
    
    const updatedFavorites = [
      ...favoriteCities,
      {id: onAddFavorite.id }
    ];
    setFavoriteCities(updatedFavorites);
    console.log('fav: ', updatedFavorites);

    onAddFavorite(updatedFavorites);
  };

  return (
    <tr className="weather-card">
      <td>{weather.city}</td>
      <td>{weather.temperature}</td>
      <td>{weather.description}</td>
      <td>
        <button onClick={() => handleFavoriteClick(onAddFavorite)}>
          Add to favorites
        </button>
      </td>
    </tr>
  );
};

export default WeatherCard;

