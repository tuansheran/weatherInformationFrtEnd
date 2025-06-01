import React from 'react'
import type { WeatherProps } from "../types/types";

const WeatherCard: React.FC<WeatherProps> = ({
  location,
  time,
  condition,
  temperature,
  tempMin,
  tempMax,
  pressure,
  humidity,
  visibility,
  windSpeed,
  windDirection,
  sunrise,
  sunset,
  variant = "lg", 
}) => {
  if (variant === "sm") {
    return (
      <div className="max-w-xs rounded-lg shadow-md p-4 bg-blue-100 text-gray-800">
        <h3 className="text-lg font-bold">{location}</h3>
        <p className="text-xs text-gray-600">{time}</p>
        <p className="text-2xl font-bold mt-2">{temperature}°C</p>
        <p className="text-sm">{condition}</p>
      </div>
    );
  }

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg font-sans cursor-pointer">
      <div className="bg-blue-500 text-white p-6 text-center">
        <h2 className="text-xl font-semibold">{location}</h2>
        <p className="text-sm mb-2">{time}</p>

        <div className="flex flex-col items-center space-y-2">
          <div className="text-white text-2xl">☁️</div>
          <div>{condition}</div>
          <div className="text-5xl font-bold">{temperature}°C</div>
          <div className="text-sm">
            Temp Min: {tempMin}°C | Temp Max: {tempMax}°C
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white p-6 grid grid-cols-2 gap-y-4 text-sm">
        <div><strong>Pressure:</strong> {pressure} hPa</div>
        <div><strong>Sunrise:</strong> {sunrise}</div>
        <div><strong>Humidity:</strong> {humidity}%</div>
        <div><strong>Sunset:</strong> {sunset}</div>
        <div><strong>Visibility:</strong> {visibility} km</div>
        <div className="col-span-2 flex items-center gap-2">
          <span className="material-icons">navigation</span>
          {windSpeed} m/s {windDirection}°
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

