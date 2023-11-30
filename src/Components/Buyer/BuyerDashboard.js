import React, { useState, useEffect } from 'react';
import ProductSearch from './ProductSearch';
import ProductListing from './ProductListing';
import History from './History'; // Import the History component

const BuyerDashboard = ({ buyer }) => {
  const [products, setProducts] = useState([]);
  const [History, setHistory] = useState([]); // State to store order history

  const mockProducts = [
    { id: 1, name: 'Product 1', category: 'Category A', price: 20, region: 'Region X' },
    { id: 2, name: 'Product 2', category: 'Category B', price: 30, region: 'Region Y' },
    // Add more sample products
  ];

  useEffect(() => {
    // Fetch initial products (replace with actual data fetching)
    setProducts(mockProducts);

    // Fetch order history (replace with actual data fetching)
    const mockHistory = [
      { orderId: '12345', totalPrice: 50 },
      { orderId: '67890', totalPrice: 75 },
      // Add more sample order history entries
    ];
    setHistory(mockHistory);
  }, []);

  const handleSearch = (searchCriteria) => {
    const filteredProducts = mockProducts.filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(searchCriteria.searchTerm.toLowerCase());
      const categoryMatch = product.category.toLowerCase().includes(searchCriteria.category.toLowerCase());
      const priceMatch = searchCriteria.maxPrice === '' || product.price <= parseFloat(searchCriteria.maxPrice);
      const regionMatch = product.region.toLowerCase().includes(searchCriteria.region.toLowerCase());

      return nameMatch && categoryMatch && priceMatch && regionMatch;
    });

    setProducts(filteredProducts);
  };

  return (
    <div>
      <h2>{buyer.name}! Welcome to Your Dashboard as a Buyer!</h2>
      <ProductSearch onSearch={handleSearch} />
      <ProductListing products={products} />
      {/* Add more sections as needed */}
      <History History={History} />
    </div>
  );
};

export default BuyerDashboard;