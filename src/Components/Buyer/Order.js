import React, { useState } from 'react';

const Order = () => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handlePlaceOrder = () => {
    // Implement order placement logic
    console.log(`Placing order for ${quantity} items.`);
  };

  return (
    <div>
      <h2>Place an Order</h2>
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={handleQuantityChange} />
      </label>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default Order;