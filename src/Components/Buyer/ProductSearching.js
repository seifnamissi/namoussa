import React, { useState } from 'react';

const ProductSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [region, setRegion] = useState('');

  const handleSearch = () => {
    // Call the onSearch prop with the search criteria
    onSearch({ searchTerm, category, maxPrice, region });
  };

  return (
    <div>
      <h2>Product Search</h2>
      <label>
        Search by Name:
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </label>
      <br />
      <label>
        Category:
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </label>
      <br />
      <label>
        Maximum Price:
        <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      </label>
      <br />
      <label>
        Region:
        <input type="text" value={region} onChange={(e) => setRegion(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default ProductSearch;
