import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard/WeatherCard";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  console.log(weatherData);

  const API_KEY = "FK4YU84T2FRQ8EURZYUMJYRXG";

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}&contentType=json
`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeatherData(data);
      setError(""); // Clear any previous errors
    } catch (error) {
      setError(error.message);
      setWeatherData(null); // Clear previous data
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div>
      <h1>Beautiful Weather App</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSubmit}>Get Weather</button>
      </div>

      {weatherData ? (
        <WeatherCard weatherData={weatherData} />
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );

  //   return (
  //     <div>
  //       <h1>Weather App</h1>
  //       <form onSubmit={handleSubmit}>
  //         <input
  //           type="text"
  //           placeholder="Enter city name"
  //           value={city}
  //           onChange={(e) => setCity(e.target.value)}
  //         />
  //         <button type="submit">Get Weather</button>
  //       </form>

  //       {error && <p style={{ color: "red" }}>{error}</p>}

  //       {/* {weatherData && (
  //         <div>
  //           <h2>{weatherData.name}</h2>
  //           <p>Temperature: {weatherData.main.temp}°C</p>
  //           <p>Weather: {weatherData.weather[0].description}</p>
  //           <p>Humidity: {weatherData.main.humidity}%</p>
  //           <p>Wind Speed: {weatherData.wind.speed} m/s</p>
  //         </div>
  //       )} */}
  //     </div>
  //   );
};

export default WeatherApp;
