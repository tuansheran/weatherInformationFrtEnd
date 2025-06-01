import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WeatherCard from "../components/WeatherCard";
import axios from "axios";

type WeatherItem = {
  CityCode: number;
  CityName: string;
  Temp: number;
  Status: string;
};

function Weather() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const [weatherList, setWeatherList] = useState<WeatherItem[]>([]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/");
    } else if (!isLoading && isAuthenticated) {
      const fetchWeather = async () => {
        try {
          const res = await axios.get("http://localhost:3000/weather");
          setWeatherList(res.data.List);
        } catch (error) {
          console.error("Failed to fetch weather data", error);
        }
      };

      fetchWeather();
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading || !isAuthenticated || !user) {
    return <div>Loading ...</div>;
  }

  const formattedTime = new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    month: "short",
    day: "numeric"
  });

  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {weatherList.map((item) => (
        <WeatherCard
          key={item.CityCode}
          location={item.CityName}
          time={formattedTime}
          condition={item.Status}
          temperature={Math.round(item.Temp)}
          tempMin={25} 
          tempMax={30}     
          pressure={1015}    
          humidity={70}       
          visibility={10}     
          windSpeed={5.0}     
          windDirection={180} 
          sunrise="6:00am"    
          sunset="6:00pm"     
        />
      ))}
    </div>
  );
}

export default Weather;

