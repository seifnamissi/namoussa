import React, { useState } from "react";

const ProductListing = ({ products, onIncreaseQuantity, onDecreaseQuantity, onOrderNow }) => {
  const [quantities, setQuantities] = useState({});

  const handleIncreaseQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
    onIncreaseQuantity(productId);
  };

  const handleDecreaseQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0),
    }));
    onDecreaseQuantity(productId);
  };

  const handleOrderNow = (productId) => {
    const quantity = quantities[productId] || 0;
    onOrderNow(productId, quantity);
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products && products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: dt{product.price}</p>
              <img src={product.image} alt={product.name} style={{ maxWidth: '100px' }} />

              <div>
                <button onClick={() => handleDecreaseQuantity(product.id)}>-</button>
                <span>Quantity: {quantities[product.id] || 0}</span>
                <button onClick={() => handleIncreaseQuantity(product.id)}>+</button>
                <button onClick={() => handleOrderNow(product.id)}>Order Now</button>
              </div>
            </li>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </ul>
    </div>
  );
};

export default ProductListing;