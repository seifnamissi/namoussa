import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/Both/NavigationBar';
import HIW from './Components/HIW';
import Advantages from './Components/Advantages';
import Home from './Components/Home';
import Register from './Components/Both/Register';
import Login from './Components/Both/Login';
import ArtisanDashboard from './Components/Artisan/ArtisanDashboard';  // Import your ArtisanDashboard component

function App() {
  const appStyle = {
    backgroundColor: 'beige',
    minHeight: '100%',
  };

  return (
    <div style={appStyle}>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/advantages" element={<Advantages />} />
          <Route path="/how-it-works" element={<HIW />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ArtisanDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;