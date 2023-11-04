import React from 'react';

function ProductListing({ products }) {
  return (
    <div>
    <h3>Products:</h3>
      {products.map((product) => (
        <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>price:DT {product.price}</p>
            <img src={product.image} alt={product.name}/>
        </div>
        
      ))}
   
    </div>
  );
}

export default ProductListing;