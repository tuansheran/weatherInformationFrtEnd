import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthenticationScreen from './screens/AuthenticationScreen'
import WeatherScreen from './screens/WeatherScreen'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthenticationScreen />} />
        <Route path="/weather" element={<WeatherScreen/>} />
      </Routes>
    </Router>
  )
}

export default App
