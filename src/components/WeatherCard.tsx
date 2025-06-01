import React from "react";
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
      </div>
    );
  }

  return (
    <div className=" w-1/2 h-2/5 rounded-lg overflow-hidden shadow-xl font-sans p-6 bg-white">
      <h2 className="text-2xl font-bold mb-2">{location}</h2>
      <p className="text-sm text-gray-600 mb-4">{time}</p>
      <div className="flex justify-between mb-4">
        <div>
          <div className="text-xl font-semibold">{condition}</div>
          <div className="text-6xl font-bold">{temperature}°C</div>
          <p className="text-sm">
            Temp Min: {tempMin}°C | Temp Max: {tempMax}°C
          </p>
        </div>
        <div className="flex flex-col justify-around text-sm text-right">
          <p><strong>Pressure:</strong> {pressure} hPa</p>
          <p><strong>Humidity:</strong> {humidity}%</p>
          <p><strong>Visibility:</strong> {visibility} km</p>
          <p><strong>Wind:</strong> {windSpeed} m/s at {windDirection}°</p>
          <p><strong>Sunrise:</strong> {sunrise}</p>
          <p><strong>Sunset:</strong> {sunset}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;


