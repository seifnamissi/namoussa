import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // Import BrowserRouter
import 'bootstrap/dist/css/bootstrap.min.css';
import ArtisanProfile from './Components/ArtisanProfile';
import ProductListing from './Components/ProductListing';
import NavigationBar from './Components/NavigationBar';
import Register from './Components/Register';
import Advantages from './Components/Advantages';
import HIW from './Components/HIW';
import artisanProfileData from './Data';

function App() {
  return (
    <BrowserRouter> 
      <div>
        <NavigationBar />
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/advantages">
            <Advantages />
          </Route>
          <Route path="/how-it-works">
            <HIW />
          </Route>
          <Route path="/">
            <ArtisanProfile artisan={artisanProfileData} />
            <ProductListing products={artisanProfileData.products} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;