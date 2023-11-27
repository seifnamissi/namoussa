import React, { useState } from 'react';

const ConditionalRendering = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <div>
      {isAuthenticated ? (
        <p>Welcome, authenticated user!</p>
      ) : (
        <p>Please log in to access this content.</p>
      )}
    </div>
  );
};

export default ConditionalRendering;