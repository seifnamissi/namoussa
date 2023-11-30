import React from 'react';

const Payment = ({ orderTotal, paymentMethod }) => {
  // Assuming orderTotal and paymentMethod are received as props

  const handlePayment = () => {
    // Logic for processing the payment
    console.log(`Processing payment of ${orderTotal} via ${paymentMethod}`);
    // Additional payment processing steps can be added here
  };

  return (
    <div>
      <h2>Payment</h2>
      <p>Order Total: ${orderTotal}</p>
      <p>Payment Method: {paymentMethod}</p>
      <button onClick={handlePayment}>Process Payment</button>
    </div>
  );
};

export default Payment;