import pottery from "./images/pottery.jpg";
import jewelry from "./images/jewelry.jpg";

const artisanData = {
  name: "syrine eladeb",
  bio: "A passionate artisan with a love for creating unique handcrafted products.",
  phoneNumber: "26893856",
  email: "syrine@gmail.com",
  image: "frontend/src/profile.jpg",
  products: [
    {
      id: 1,
      name: "Handmade Pottery",
      description: "Beautiful ceramic pottery handcrafted with care.",
      price: 25.00,
      image: pottery,  // Use the imported image variable
    },
    {
      id: 2,
      name: "Artisanal Jewelry",
      description: "One-of-a-kind jewelry pieces that stand out.",
      price: 70.00,
      image: jewelry,  // Use the imported image variable
    },
    // Add more products as needed
  ],
};

export default artisanData;

// buyerData.js
const buyerData = {
  name: 'Ryma smith',
  email: 'rymaSmith@gmail.com',
  address: '123 Rue nour, sokra, ariana',
  // Add other relevant fields
};

export { buyerData };