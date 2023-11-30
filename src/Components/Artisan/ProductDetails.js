import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Review from '../Buyer/Review';

const ProductDetails = ({ products, artisans, onAddComment }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId, 10));

  if (!product) {
    return <p>Product not found.</p>;
  }

  const artisan = artisans.find((a) => a.id === product.artisanId);

  // Dummy comments data, replace with actual comments data for the product
  const [productComments, setProductComments] = useState([
    { _id: 1, user: { username: 'User1' }, text: 'Great product!' },
    { _id: 2, user: { username: 'User2' }, text: 'I love it!' },
  ]);

  const handleAddComment = (newComment) => {
    // Add the new comment to the state and send it to the parent component
    setProductComments([...productComments, newComment]);
    onAddComment(productId, newComment);
  };

  return (
    <div>
      <h2>{product.name} Details</h2>
      <p>Description: {product.description}</p>
      <p>Price: dt{product.price}</p>
      <p>Artisan: <Link to={`/artisan/${artisan.id}`}>{artisan.name}</Link></p>
      <img src={product.image} alt={product.name} style={{ maxWidth: '200px' }} />

      {/* Comment Section */}
      <Review comments={productComments} />

      {/* Add Comment Form (you can customize the form as needed) */}
      <form onSubmit={(e) => handleAddComment(e)}>
        <label>
          Add Comment:
          <input type="text" />
        </label>
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default ProductDetails;