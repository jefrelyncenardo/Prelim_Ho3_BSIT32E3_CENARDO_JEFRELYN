import React from 'react';

function PropsPage({ message }) {
  return (
    <div className="container mt-5">
      <h2>Props Page</h2>
      <p>{message}</p>
    </div>
  );
}

export default PropsPage;