import React from "react";

const ProductListing = ({ products }) => {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products && products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <img src={product.image} alt={product.name} style={{ maxWidth: '100px' }} />
              {/* Add more details as needed */}
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