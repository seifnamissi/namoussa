import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import artisanProfileData from '../Data';
function ArtisanProfile() {
     // Access the data for the artisan
const artisan = artisanProfileData ;

  return (
    <div>
        <h1>{artisan.name}</h1>
        <p>{artisan.bio}</p>
        <p>phoneNumber:{artisan.phoneNumber}</p>
        <p>email:{artisan.email}</p>
        <img src={artisan.image} alt={artisan.name}/>
        <h2>portfolio</h2>
        {artisan.products.map((product) => (
//map() function parcourir over the products array within the artisan object. For each product in the array, the provided function is called.
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

export default ArtisanProfile;