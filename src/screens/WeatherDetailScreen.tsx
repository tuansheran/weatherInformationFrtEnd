import { useLocation, useNavigate } from "react-router-dom";
import WeatherCard from "../components/WeatherCard";

function WeatherDetailScreen() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="p-6">
        <p>No weather data found.</p>
        <button onClick={() => navigate("/weather")}>Back</button>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-8 h-screen">
      <WeatherCard {...state} variant="lg" />
    </div>
  );
}

export default WeatherDetailScreen;
