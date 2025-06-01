import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthenticationScreen from './screens/AuthenticationScreen'
import WeatherScreen from './screens/WeatherScreen'
import WeatherDetailScreen from './screens/WeatherDetailScreen'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthenticationScreen />} />
        <Route path="/weather" element={<WeatherScreen/>} />
        <Route path="/weather/:cityCode" element={<WeatherDetailScreen />} />
      </Routes>
    </Router>
  )
}

export default App
