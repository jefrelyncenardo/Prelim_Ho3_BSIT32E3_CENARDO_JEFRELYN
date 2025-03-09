import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container mt-5">
      <h1>Welcome to My React App!</h1>
      <p>This is the home page.</p>
      <Link to="/props" className="btn btn-primary">
        Go to Props Page
      </Link>
    </div>
  );
}