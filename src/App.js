import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/Both/NavigationBar';
import HIW from './Components/HIW';
import Advantages from './Components/Advantages';
import Home from './Components/Home';
import Register from './Components/Both/Register';
import Login from './Components/Both/Login';  

function App() {
  const appStyle = {
    backgroundColor: 'beige', // Set your desired background color
    minHeight: '100%', // Ensures the background color covers the entire viewport height
  };
  return (
    <Router style={appStyle}>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/advantages" element={<Advantages />} />
          <Route path="/how-it-works" element={<HIW />} />
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} />

        </Routes>
      </div>
   </Router>
  );
}

export default App;


