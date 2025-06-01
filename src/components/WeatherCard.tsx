
type WeatherProps = {
  location: string
  time: string
  condition: string
  temperature: number
  tempMin: number
  tempMax: number
  pressure: number
  humidity: number
  visibility: number
  windSpeed: number
  windDirection: number
  sunrise: string
  sunset: string
}

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
}) => {
  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg font-sans">
      {/* Top Blue Section */}
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

      {/* Bottom Gray Section */}
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
  )
}

export default WeatherCard
