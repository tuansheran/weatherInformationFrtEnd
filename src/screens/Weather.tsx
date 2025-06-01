import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WeatherCard from "../components/WeatherCard";

function Weather() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/");
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading || !isAuthenticated || !user) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <WeatherCard
        location="Colombo, LK"
        time="9:19am, Feb 8"
        condition="Few Clouds"
        temperature={27}
        tempMin={25}
        tempMax={28}
        pressure={1018}
        humidity={78}
        visibility={8}
        windSpeed={4.0}
        windDirection={120}
        sunrise="6:05am"
        sunset="6:05am"
      />
    </div>
  );
}

export default Weather;
