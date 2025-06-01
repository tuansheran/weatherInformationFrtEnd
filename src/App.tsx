import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthenticationScreen from './screens/Authentication'
import Weather from './screens/Weather'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthenticationScreen />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </Router>
  )
}

export default App

