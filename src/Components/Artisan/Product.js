import React, { useState } from 'react';
import ProductDetails from './ProductDetails';

const Product = () => {
  // Assume you have products and artisans state
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'makrouth',
      description: 'Description of Product 1',
      comments: [], // Array to store comments for this product
    },
    {
      id: 2,
      name: 'zarbya',
      description: 'Description of Product 2',
      comments: [],
    },
    // Add more products as needed
  ]);

  const [artisans, setArtisans] = useState([
    {
      id: 1,
      name: 'syrine eladeb',
    },
    {
      id: 2,
      name: 'ryma smith',
    },
  
  ]);

  // Handle adding comments for a specific product
  const handleAddComment = (productId, newComment) => {
    // Find the product in the state
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, comments: [...product.comments, newComment] }
        : product
    );

    // Update the state with the new comment
    setProducts(updatedProducts);

    // Implement logic to send the new comment to the server
    console.log(`Add comment for product ${productId}: ${newComment.text}`);
    // You may want to send the comment to the server here
  };

  return (
    <div>
      {/* Render ProductDetails with onAddComment prop */}
      <ProductDetails products={products} artisans={artisans} onAddComment={handleAddComment} />
    </div>
  );
};

export default Product;