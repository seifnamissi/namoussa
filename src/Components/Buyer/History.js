import React from 'react';

const History = ({ orderHistory, onOrderSelect }) => {
  // Assuming orderHistory is an array of order objects with details

  return (
    <div>
      <h2>Order History</h2>
      <ul>
        {orderHistory.map(order => (
          <li key={order.orderId} onClick={() => onOrderSelect(order)}>
            Order #{order.orderId} - {order.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
