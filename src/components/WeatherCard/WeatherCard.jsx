import React from "react";
import "./WeatherCard.scss";

const WeatherCard = ({ weatherData }) => {
  console.log(weatherData);
  return (
    <div className="weather-card">
      <h2>{weatherData?.address}</h2>
      <div className="weather-info">
        <img
          src={`http://openweathermap.org/img/wn/${weatherData?.currentConditions?.icon}@2x.png`}
          alt={weatherData?.address}
        />
        <div className="temperature">
          {Math.round(weatherData?.currentConditions?.temp)}°C
        </div>
      </div>
      <div className="details">
        <p>Weather: {weatherData?.currentConditions?.conditions}</p>
        <p>Humidity: {weatherData?.currentConditions?.humidity}%</p>
        <p>Wind Speed: {weatherData?.currentConditions?.windspeed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;
