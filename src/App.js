import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArtisanProfile from './Components/ArtisanProfile';
import ProductListing from './Components/ProductListing';
import NavigationBar from './Components/NavigationBar';
import HIW from './Components/HIW';
import Advantages from './Components/Advantages';
import Home from './Components/Home';
import artisanProfileData from './Components/Data';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/advantages" element={<Advantages />} />
          <Route path="/how-it-works" element={<HIW />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
function Register() {
  return (
    <div>
      <ArtisanProfile artisan={artisanProfileData} />
      <ProductListing products={artisanProfileData.products} />
    </div>
  );
}
export default App;


