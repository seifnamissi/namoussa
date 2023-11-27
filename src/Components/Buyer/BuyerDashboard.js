import React from 'react';
import Order from './Order';
import Review from './Review';

const BuyerDashboard = () => {
  return (
    <div>
      <h1>Buyer Dashboard</h1>
      <Order />
      {/* Add more buyer-specific components as needed */}
    </div>
  );
};

export default BuyerDashboard;