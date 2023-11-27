import React from 'react';
  import { artisanProfileData}  from '../Components/Data';
  
function ProductSearch() {
    return (
      <div>
        <h2>{artisanData.name}'s Products</h2>
        <ul>
          {artisanData.products.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              {/* Add more details as needed */}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
 

export default ProductSearch;