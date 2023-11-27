import React from 'react';

const ArtisanProfile = ({ artisan }) => {
  return (
    <div>
      <h2>{artisan.name}'s Profile</h2>
      <p>Bio: {artisan.bio}</p>
      <p>Email: {artisan.email}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ArtisanProfile;