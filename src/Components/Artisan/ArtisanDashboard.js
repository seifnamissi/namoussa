import React from 'react';
import ProductListing from './ProductListing';
import Order from './Order';

const ArtisanDashboard = () => {
  return (
    <div>
      <h1>Artisan Dashboard</h1>
      <ProductListing />
      {/* Add more artisan-specific components as needed */}
    </div>
  );
};

export default ArtisanDashboard;