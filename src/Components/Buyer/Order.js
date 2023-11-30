import React from 'react';
const Order = ({ orderDetails }) => {
  const { orderedProducts, totalPrice, deliveryAddress, paymentMethod, orderDate } = orderDetails;

  return (
    <div>
      <h2>Your Order</h2>
      <p>Order Date: {orderDate}</p>
      <ul>
        {orderedProducts.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Quantity: {product.quantity}</p>
            <p>Price: dt{product.price}</p>
          </li>
        ))}
      </ul>

      <h3>Total Price: ${totalPrice}</h3>
      <h3>Delivery Address: {deliveryAddress}</h3>
      <h3>Payment Method: {paymentMethod}</h3>

    </div>
  );
};

export default Order;